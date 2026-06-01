<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Key');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

define('API_KEY',   'prime_cms_K9mX3vN7pQ');
define('DATA_DIR',  __DIR__ . '/data');
define('DATA_FILE', DATA_DIR . '/cms-data.json');

function respond(int $status, $data): void {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

// ─── GET: retorna os dados salvos ────────────────────────────────────────────
if ($method === 'GET') {
    if (!file_exists(DATA_FILE)) {
        respond(200, ['elements' => new stdClass(), 'articles' => [], 'navItems' => []]);
    }
    readfile(DATA_FILE);
    exit;
}

// ─── POST: salva os dados ────────────────────────────────────────────────────
if ($method === 'POST') {
    // Validar chave
    $key = $_SERVER['HTTP_X_AUTH_KEY'] ?? '';
    if ($key !== API_KEY) {
        respond(403, ['error' => 'Chave de acesso inválida']);
    }

    // Ler corpo
    $body = file_get_contents('php://input');
    if (!$body) {
        respond(400, ['error' => 'Requisição vazia']);
    }

    // Validar JSON
    $decoded = json_decode($body);
    if ($decoded === null) {
        respond(400, ['error' => 'JSON inválido: ' . json_last_error_msg()]);
    }

    // Criar diretório se não existir
    if (!is_dir(DATA_DIR)) {
        if (!mkdir(DATA_DIR, 0755, true)) {
            respond(500, ['error' => 'Não foi possível criar diretório de dados']);
        }
    }

    // Escrita atômica: grava em .tmp depois renomeia (evita corrupção)
    $tmp = DATA_FILE . '.tmp';
    $bytes = file_put_contents(
        $tmp,
        json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)
    );

    if ($bytes === false) {
        respond(500, ['error' => 'Falha ao gravar arquivo temporário']);
    }

    if (!rename($tmp, DATA_FILE)) {
        @unlink($tmp);
        respond(500, ['error' => 'Falha ao mover arquivo para destino final']);
    }

    respond(200, ['ok' => true, 'bytes' => $bytes]);
}

respond(405, ['error' => 'Método não permitido']);
