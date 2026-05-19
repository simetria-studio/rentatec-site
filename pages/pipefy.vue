<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'Pipefy integrado à operação, ao ERP e aos dados da empresa',
    description: 'A Rentatec conecta fluxos Pipefy a sistemas internos, ERPs, CRMs, financeiro e bases de dados para automatizar repasses, reduzir retrabalho e dar rastreabilidade ao processo.',
    secondaryCta: 'Ver integrações',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: 'Pipefy', text: 'fluxos com automação e governança' },
    { label: 'ERP', text: 'dados conectados ao sistema de gestão' },
    { label: 'SLA', text: 'status e exceções acompanháveis' }
  ],
  preview: {
    label: 'Integração Pipefy',
    title: 'Fluxo com dados de verdade',
    description: 'O Pipefy organiza o processo; a integração evita que a equipe precise copiar dados entre ferramentas.',
    items: [
      'Cards criados ou atualizados a partir de eventos externos',
      'Sincronização com ERP, CRM, financeiro e sistemas internos',
      'Automação de status, anexos, aprovações e notificações'
    ]
  },
  problem: {
    title: 'Um fluxo bem desenhado perde força quando os dados ficam fora dele.',
    description: 'Sem integração, o time precisa transferir informações manualmente entre Pipefy, ERP, planilhas e sistemas internos, criando atraso e inconsistência.'
  },
  outcomes: [
    { label: 'Automação', title: 'Menos trabalho manual', description: 'Criação, atualização e movimentação de cards podem ser acionadas por dados e eventos.' },
    { label: 'Governança', title: 'Fluxos auditáveis', description: 'Histórico, status, responsáveis e integração reduzem perda de informação.' },
    { label: 'Integração', title: 'Dados conectados', description: 'Pipefy passa a conversar com sistemas críticos da operação.' },
    { label: 'Gestão', title: 'Exceções visíveis', description: 'Falhas, pendências e gargalos ficam mais fáceis de acompanhar.' }
  ],
  capabilities: {
    label: 'Aplicações',
    title: 'O que pode ser conectado ao Pipefy',
    items: [
      { label: 'ERP', title: 'Pedidos, clientes e documentos', description: 'Sincronização de dados operacionais entre Pipefy e sistemas de gestão.' },
      { label: 'CRM', title: 'Vendas e atendimento', description: 'Integração entre etapas comerciais, onboarding, suporte e histórico de cliente.' },
      { label: 'Financeiro', title: 'Cobranças e aprovações', description: 'Fluxos para pagamentos, reembolsos, contratos, documentos e análise financeira.' },
      { label: 'APIs', title: 'Conectores customizados', description: 'Integrações com sistemas internos, bancos de dados, webhooks e serviços externos.' },
      { label: 'Alertas', title: 'SLA e notificações', description: 'Avisos para atraso, mudança de fase, pendências e falhas de integração.' },
      { label: 'Dados', title: 'Relatórios e auditoria', description: 'Histórico de movimentações, erros, reprocessamentos e indicadores do fluxo.' }
    ]
  },
  process: {
    title: 'A integração começa pelo desenho do fluxo',
    description: 'Antes de automatizar, definimos o que cada fase precisa receber, validar, acionar e devolver para outros sistemas.',
    steps: [
      { stage: 'Fluxo', description: 'Mapeamos fases, campos, responsáveis, prazos e pontos de integração.' },
      { stage: 'Dados', description: 'Definimos origem, destino, formato, autenticação e validações.' },
      { stage: 'Automação', description: 'Implementamos webhooks, APIs, rotinas e regras de sincronização.' },
      { stage: 'Teste', description: 'Validamos eventos reais, erros, reprocessamento e impacto nos usuários.' },
      { stage: 'Operação', description: 'Acompanhamos logs, exceções e evolução do fluxo após a implantação.' }
    ]
  },
  differentials: {
    title: 'Pipefy com integração e controle operacional',
    description: 'A automação precisa respeitar o processo, os dados e as exceções da empresa.',
    items: [
      { title: 'Integração sob medida', description: 'Conectores são desenhados para o cenário real, não apenas para uma automação genérica.' },
      { title: 'Tratamento de exceções', description: 'Falhas, campos ausentes e recusas podem gerar alertas e reprocessamento.' },
      { title: 'Governança por status', description: 'O fluxo mantém clareza sobre fase, responsável, prazo e origem dos dados.' },
      { title: 'Evolução contínua', description: 'Novas automações e integrações podem entrar conforme o uso amadurece.' }
    ]
  },
  cta: {
    title: 'Vamos conectar seu Pipefy ao restante da operação',
    description: 'Conte quais sistemas precisam conversar com o Pipefy e onde há retrabalho. A Rentatec avalia o melhor desenho de integração.'
  }
}

useHead({
  title: 'Integração Pipefy com ERP e Sistemas Internos | Rentatec',
  meta: [
    { name: 'description', content: 'Integração do Pipefy com ERP, CRM, financeiro, APIs e sistemas internos para automatizar fluxos e reduzir retrabalho.' }
  ]
})
</script>
