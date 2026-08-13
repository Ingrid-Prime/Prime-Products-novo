<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método não permitido']);
    exit;
}

// Limite de tamanho de requisição
if ((int) $_SERVER['CONTENT_LENGTH'] > 10240) { // 10KB máximo
    http_response_code(413);
    echo json_encode(['success' => false, 'error' => 'Requisição muito grande']);
    exit;
}

// Ler corpo da requisição
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'JSON inválido']);
    exit;
}

// Honeypot invisível
if (!empty($data['_hp'])) {
    // Se o honeypot foi preenchido, agir como se tivesse sucesso para enganar o bot
    echo json_encode(['success' => true]);
    exit;
}

// Rate limiting muito básico por IP via arquivo
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateLimitDir = __DIR__ . '/rate_limit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0755, true);
}
$ipFile = $rateLimitDir . '/' . md5($ip) . '.txt';
$now = time();
if (file_exists($ipFile)) {
    $lastReq = (int) file_get_contents($ipFile);
    if ($now - $lastReq < 30) { // 30 segundos entre mensagens
        http_response_code(429);
        echo json_encode(['success' => false, 'error' => 'Muitas requisições. Aguarde antes de enviar novamente.']);
        exit;
    }
}
@file_put_contents($ipFile, $now);

// Limpeza de arquivos de rate limit antigos (10% de chance para evitar pesar toda req)
if (rand(1, 10) === 1) {
    $files = glob($rateLimitDir . '/*.txt');
    foreach ($files as $file) {
        if ($now - filemtime($file) > 3600) {
            @unlink($file);
        }
    }
}

// Sanitização básica
function sanitize($str) {
    if (!$str) return '';
    return htmlspecialchars(strip_tags(trim($str)));
}

$type = sanitize($data['type'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'E-mail inválido']);
    exit;
}

$subject = '';
$bodyHtml = '';
$nome = sanitize($data['nome'] ?? '');
$empresa = sanitize($data['empresa'] ?? '');
$telefone = sanitize($data['telefone'] ?? '');

switch ($type) {
    case 'contact':
        $assunto = sanitize($data['assunto'] ?? '');
        $mensagem = sanitize($data['mensagem'] ?? '');
        
        if (!$nome || !$assunto || !$mensagem) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Preencha os campos obrigatórios']);
            exit;
        }

        $subject = "[SITE] Novo contato — {$nome}" . ($empresa ? " / {$empresa}" : "");
        $bodyHtml = "<h2>Novo contato via Site</h2>
        <p><strong>Nome:</strong> {$nome}</p>
        <p><strong>Empresa:</strong> {$empresa}</p>
        <p><strong>E-mail:</strong> {$email}</p>
        <p><strong>Telefone:</strong> {$telefone}</p>
        <p><strong>Assunto:</strong> {$assunto}</p>
        <p><strong>Mensagem:</strong><br/>" . nl2br($mensagem) . "</p>";
        break;

    case 'quote':
        $quantidade = sanitize($data['quantidade'] ?? '');
        $detalhes = sanitize($data['detalhes'] ?? '');
        $produtoNome = sanitize($data['produtoNome'] ?? '');
        
        if (!$nome || !$empresa || !$detalhes || !$produtoNome) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Preencha os campos obrigatórios']);
            exit;
        }

        $subject = "[SITE] Solicitação de cotação — {$produtoNome}";
        $bodyHtml = "<h2>Nova solicitação de cotação técnica</h2>
        <p><strong>Produto de interesse:</strong> {$produtoNome}</p>
        <p><strong>URL da Página:</strong> " . sanitize($data['url'] ?? '') . "</p>
        <p><strong>Nome:</strong> {$nome}</p>
        <p><strong>Empresa:</strong> {$empresa}</p>
        <p><strong>E-mail:</strong> {$email}</p>
        <p><strong>Telefone:</strong> {$telefone}</p>
        <p><strong>Quantidade/Volume:</strong> {$quantidade}</p>
        <p><strong>Detalhes Técnicos:</strong><br/>" . nl2br($detalhes) . "</p>";
        break;

    case 'newsletter':
        $subject = "[SITE] Nova inscrição na newsletter";
        $bodyHtml = "<h2>Nova inscrição na Newsletter</h2>
        <p><strong>E-mail cadastrado:</strong> {$email}</p>
        <p><strong>Origem/Rota:</strong> " . sanitize($data['rota'] ?? '') . "</p>";
        break;

    default:
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Tipo de formulário inválido']);
        exit;
}

// Configuração PHPMailer (v6.9.1 - Release Estável)
require 'vendor/Exception.php';
require 'vendor/PHPMailer.php';
require 'vendor/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Verifica se o config externo existe (acima do public_html)
$configFile = __DIR__ . '/../../api_config/mail-config.php';
$smtpHost = '';
$smtpPort = 587;
$smtpUser = '';
$smtpPass = '';
$smtpEnc  = 'tls';
$mailTo   = 'info@primeproducts.ind.br';
$mailFrom = 'site@primeproducts.ind.br'; // Fallback

if (file_exists($configFile)) {
    require $configFile;
    // O arquivo config deve declarar: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_ENCRYPTION, MAIL_TO, MAIL_FROM
    if (defined('SMTP_HOST')) $smtpHost = SMTP_HOST;
    if (defined('SMTP_PORT')) $smtpPort = SMTP_PORT;
    if (defined('SMTP_USER')) $smtpUser = SMTP_USER;
    if (defined('SMTP_PASSWORD')) $smtpPass = SMTP_PASSWORD;
    if (defined('SMTP_ENCRYPTION')) $smtpEnc = SMTP_ENCRYPTION;
    if (defined('MAIL_TO')) $mailTo = MAIL_TO;
    if (defined('MAIL_FROM')) $mailFrom = MAIL_FROM;
}

$mail = new PHPMailer(true);

try {
    if ($smtpHost) {
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUser;
        $mail->Password   = $smtpPass;
        $mail->SMTPSecure = $smtpEnc;
        $mail->Port       = $smtpPort;
    } else {
        // Fallback local p/ teste caso config não exista (apenas para não dar fatal erro)
        // A regra diz: não utilizar mail() nativo como *solução definitiva*, mas o código usa PHPMailer via SMTP. 
        // Aqui exigiremos o SMTP_HOST, caso contrário falha amigavelmente.
        throw new Exception('Configuração SMTP não encontrada.');
    }

    $mail->CharSet = 'UTF-8';
    $mail->setFrom($mailFrom, 'Prime Products | Formulários');
    $mail->addAddress($mailTo);
    $mail->addReplyTo($email, $nome ?: 'Visitante');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $bodyHtml;

    $mail->send();
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    $logFile = __DIR__ . '/../../api_config/mail-error.log';
    $errorMsg = "[" . date('Y-m-d H:i:s') . "] PHPMailer Error: " . $mail->ErrorInfo . " | Exception: " . $e->getMessage() . "\n";
    @file_put_contents($logFile, $errorMsg, FILE_APPEND);

    http_response_code(500);
    // Erro genérico para o front-end, erro detalhado pode ser logado no servidor depois
    echo json_encode(['success' => false, 'error' => 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.']);
}
