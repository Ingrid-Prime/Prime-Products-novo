import type { NavItem } from '../types';

export const defaultNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'A Prime', path: '/sobre' },
  {
    label: 'Soluções',
    path: '/solucoes',
    subItems: [
      { label: 'Visão Geral e Serviços', path: '/solucoes' },
      { label: 'Instrumentação e Medição', path: '/solucoes/instrumentacao-medicao' },
      { label: 'Instrumentação Analítica', path: '/solucoes/instrumentacao-analitica' },
      { label: 'Gases, Segurança e Automação', path: '/solucoes/gases-seguranca-automacao' },
      { label: 'Soluções Integradas', path: '/solucoes/integradas' },
    ],
  },
  {
    label: 'Produtos',
    path: '/produtos',
    subItems: [
      { label: 'Ver Todos', path: '/produtos' },
      { label: 'Cilindros de Alumínio', path: '/produto/cilindros-aluminio' },
      { label: 'Cilindros Tipo 4', path: '/produto/cilindros-tipo-4' },
      { label: 'Conexões Instrumentação', path: '/produto/conexoes-instrumentacao' },
      { label: 'Detectores de Vazamento', path: '/produto/detectores-vazamento' },
      { label: 'Dewars Criogênicos', path: '/produto/dewars-criogenicos' },
      { label: 'Geração de Oxigênio', path: '/produto/geracao-oxigenio' },
      { label: 'Corte e Solda', path: '/produto/corte-solda' },
      { label: 'Reguladores Especiais', path: '/produto/reguladores-especiais' },
      { label: 'Reguladores Hidráulicos', path: '/produto/reguladores-hidraulicos' },
      { label: 'Combate a Incêndio', path: '/produto/combate-incendio' },
      { label: 'Transmissores de Pressão', path: '/produto/transmissores-pressao' },
      { label: 'Válvulas Industriais', path: '/produto/valvulas-industriais' },
    ],
  },
  {
    label: 'Aplicações',
    path: '/aplicacoes',
    subItems: [
      { label: 'Ver Todas', path: '/aplicacoes' },
      { label: 'Óleo e Gás', path: '/aplicacao/oleo-gas' },
      { label: 'Farmacêutica', path: '/aplicacao/farmaceutica' },
      { label: 'Hospitalar', path: '/aplicacao/hospitalar' },
      { label: 'Laboratórios Analíticos', path: '/aplicacao/laboratorios-analiticos' },
      { label: 'Indústria Química', path: '/aplicacao/industria-quimica' },
      { label: 'Alimentos e Bebidas', path: '/aplicacao/alimentos-bebidas' },
      { label: 'Automotivo', path: '/aplicacao/automotivo' },
      { label: 'Criogenia', path: '/aplicacao/criogenia' },
      { label: 'Soldagem e Corte', path: '/aplicacao/soldagem' },
      { label: 'Energia e Transição', path: '/aplicacao/energia-transicao-energetica' },
      { label: 'Mineral e Mineração', path: '/aplicacao/mineral' },
    ],
  },
  {
    label: 'Ferramentas',
    path: '/ferramentas',
    subItems: [
      { label: 'Simuladores (Web)', path: '/ferramentas' },
      { label: 'Calculadoras Prime', path: '/ferramentas-pro' },
    ],
  },
  { label: 'Conteúdo', path: '/conteudo' },
  { label: 'Contato', path: '/contato' },
];
