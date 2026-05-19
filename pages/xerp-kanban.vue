<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'X-ERP Kanban para processos com dono, prazo e visibilidade',
    description: 'Organize fluxos entre áreas, automatize aprovações, acompanhe SLAs e transforme demandas soltas em uma rotina operacional rastreável.',
    secondaryCta: 'Ver processos',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: 'SLA', text: 'prazos e atrasos visíveis para gestão' },
    { label: 'Fluxos', text: 'etapas, responsáveis e regras claras' },
    { label: 'Histórico', text: 'decisões e mudanças registradas' }
  ],
  preview: {
    label: 'Kanban operacional',
    title: 'Da solicitação à conclusão, sem perder o controle',
    description: 'Cada demanda segue uma trilha definida, com etapas, responsáveis, alertas e dados para acompanhar gargalos.',
    items: [
      'Processos administrativos, comerciais, RH, compras e contratos',
      'Aprovações, repasses, alertas de prazo e histórico completo',
      'Indicadores de volume, SLA, gargalo, responsável e etapa'
    ]
  },
  problem: {
    title: 'Quando o processo depende de mensagem e planilha, a gestão só descobre o atraso tarde demais.',
    description: 'O X-ERP Kanban centraliza a execução para reduzir cobrança manual, filas invisíveis, retrabalho e falta de previsibilidade entre áreas.'
  },
  outcomes: [
    { label: 'Visibilidade', title: 'Tudo em uma fila controlada', description: 'Demandas deixam de ficar espalhadas e passam a ter status, responsável e prioridade.' },
    { label: 'Prazo', title: 'SLA acompanhável', description: 'Atrasos e urgências ficam visíveis antes de virarem problema operacional.' },
    { label: 'Governança', title: 'Aprovação com histórico', description: 'Mudanças, decisões, comentários e documentos ficam registrados no fluxo.' },
    { label: 'Gestão', title: 'Indicadores nativos', description: 'Volume, etapa, gargalo e carga por responsável ajudam a priorizar melhorias.' }
  ],
  capabilities: {
    label: 'Processos',
    title: 'Onde aplicar Kanban + automação',
    items: [
      { label: 'Contratos', title: 'Jurídico e comercial', description: 'Elaboração, revisão, aprovação, assinatura e renovação com responsáveis e prazos claros.' },
      { label: 'RH', title: 'Contratação, desligamento e férias', description: 'Fluxos de admissão, demissão, solicitações internas, documentos e aprovações.' },
      { label: 'Compras', title: 'Requisições e aprovações', description: 'Pedidos, cotações, alçadas, aprovação financeira e acompanhamento de pendências.' },
      { label: 'Financeiro', title: 'Solicitações e prestação de contas', description: 'Demandas internas, reembolsos, aprovações e acompanhamento de documentos.' },
      { label: 'Projetos', title: 'Backlog e entregas', description: 'Priorização, execução, validação e conclusão de demandas com histórico.' },
      { label: 'Atendimento', title: 'Demandas recorrentes', description: 'Triagem, repasse entre áreas, status, SLA e análise de recorrência.' }
    ]
  },
  process: {
    title: 'O processo vira um fluxo simples de executar e cobrar',
    description: 'Modelamos o caminho da demanda, automatizamos repasses e criamos indicadores para gestão acompanhar a rotina.',
    steps: [
      { stage: 'Modelagem', description: 'Definimos etapas, campos, responsáveis, prazos, prioridades e regras de passagem.' },
      { stage: 'Entrada', description: 'Demandas entram por formulário, integração, cadastro interno ou abertura manual controlada.' },
      { stage: 'Execução', description: 'Cada etapa tem dono, status, comentários, anexos e histórico.' },
      { stage: 'Automação', description: 'Alertas, repasses, aprovações e notificações reduzem cobrança manual.' },
      { stage: 'Indicadores', description: 'Gestores acompanham volume, gargalo, SLA e carga por área ou responsável.' }
    ]
  },
  differentials: {
    title: 'Mais que quadro: processo com regra e dado de gestão',
    description: 'O objetivo não é só movimentar cartões, mas estruturar governança operacional para quem executa e para quem cobra resultado.',
    items: [
      { title: 'Fluxo adaptado à operação', description: 'Cada área pode ter etapas, campos e regras de aprovação próprias.' },
      { title: 'Automação sem perder controle', description: 'Repasses e alertas são automatizados mantendo histórico e responsabilidade claros.' },
      { title: 'Indicadores de execução', description: 'A gestão enxerga gargalos e atrasos sem consolidar planilhas manualmente.' },
      { title: 'Integração com rotinas internas', description: 'O Kanban pode se conectar a dados, documentos e sistemas já usados pela empresa.' }
    ]
  },
  cta: {
    title: 'Vamos mapear quais processos podem ganhar Kanban e automação',
    description: 'Conte quais fluxos hoje dependem de cobrança manual. A Rentatec ajuda a desenhar uma rotina mais previsível.'
  }
}

useHead({
  title: 'X-ERP Kanban - Processos, SLA e Aprovações | Rentatec',
  meta: [
    { name: 'description', content: 'X-ERP Kanban para organizar processos, aprovações, SLAs, responsáveis, histórico e indicadores operacionais.' }
  ]
})
</script>
