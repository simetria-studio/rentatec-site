<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'Software sob medida para operações que precisam ganhar controle',
    description: 'A Rentatec desenha, desenvolve e sustenta sistemas para financeiro, fiscal, integrações, backoffice e rotinas operacionais que não cabem em ferramentas genéricas.',
    secondaryCta: 'Ver método',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: '2008', text: 'experiência em sistemas empresariais' },
    { label: 'ERP', text: 'processos conectados à operação' },
    { label: 'B2B', text: 'soluções para gestão e produtividade' }
  ],
  preview: {
    label: 'Software sob medida',
    title: 'Do processo real para o sistema certo',
    description: 'O projeto começa pelo diagnóstico da rotina, não pela escolha de uma tecnologia. A solução nasce para organizar dados, reduzir retrabalho e dar previsibilidade.',
    items: [
      'Mapeamento do fluxo atual e dos pontos de retrabalho',
      'Desenho de telas, permissões, integrações e regras de negócio',
      'Evolução contínua com suporte, melhorias e sustentação'
    ]
  },
  problem: {
    title: 'Quando a ferramenta não acompanha a operação, a equipe cria atalhos caros.',
    description: 'Planilhas paralelas, redigitação, aprovações por mensagem e dados espalhados aumentam risco, atrasam decisões e tornam a gestão dependente de cobrança manual.'
  },
  outcomes: [
    { label: 'Controle', title: 'Rotina padronizada', description: 'Fluxos, regras e responsabilidades ficam dentro do sistema, com menos improviso entre áreas.' },
    { label: 'Dados', title: 'Informação confiável', description: 'A operação passa a registrar histórico, status e indicadores em uma base consultável.' },
    { label: 'Integração', title: 'Menos retrabalho', description: 'Sistemas internos, ERP e ferramentas externas conversam sem depender de exportações manuais.' },
    { label: 'Evolução', title: 'Sistema que acompanha o negócio', description: 'A solução pode receber novos módulos, ajustes e integrações conforme a operação muda.' }
  ],
  capabilities: {
    label: 'Capacidades',
    title: 'O que desenvolvemos para a operação',
    items: [
      { label: 'Backoffice', title: 'Sistemas administrativos', description: 'Controles para financeiro, fiscal, atendimento, documentos, cadastros e rotinas internas.' },
      { label: 'Workflow', title: 'Aprovações e SLAs', description: 'Fluxos com responsáveis, prazos, status, alertas e histórico de decisões.' },
      { label: 'Integrações', title: 'Conexão entre sistemas', description: 'APIs, importações, sincronizações e automações entre ERP, CRM, fiscal e plataformas externas.' },
      { label: 'Dados', title: 'Dashboards operacionais', description: 'Indicadores para acompanhar volume, gargalos, pendências e desempenho por área.' },
      { label: 'Portais', title: 'Acesso para clientes e equipes', description: 'Ambientes web para solicitações, consulta de status, documentos e autoatendimento.' },
      { label: 'Sustentação', title: 'Evolução contínua', description: 'Correções, melhorias, novas regras e acompanhamento técnico depois da entrega.' }
    ]
  },
  process: {
    title: 'Um projeto começa pelo diagnóstico da rotina',
    description: 'Antes de escrever código, alinhamos o processo, os responsáveis, os dados e os pontos de integração para reduzir risco e entregar valor operacional.',
    steps: [
      { stage: 'Diagnóstico', description: 'Entendemos dores, fluxos atuais, sistemas envolvidos, volumes e indicadores necessários.' },
      { stage: 'Desenho', description: 'Definimos escopo, telas, regras, permissões, integrações e prioridades de entrega.' },
      { stage: 'Construção', description: 'Desenvolvemos em ciclos curtos, validando regras com quem executa a operação.' },
      { stage: 'Implantação', description: 'Apoiamos testes, treinamento, ajustes finos e entrada em produção.' },
      { stage: 'Evolução', description: 'Sustentamos e ampliamos o sistema conforme surgem novos cenários.' }
    ]
  },
  differentials: {
    title: 'Tecnologia com entendimento de operação',
    description: 'O foco é construir ferramenta que funcione no dia a dia da empresa, com clareza, rastreabilidade e manutenção viável.',
    items: [
      { title: 'Escopo conectado ao processo', description: 'A solução é definida a partir do fluxo real, não de uma lista genérica de funcionalidades.' },
      { title: 'Integração desde o início', description: 'ERP, fiscal, dados e ferramentas externas entram no desenho para evitar ilhas de informação.' },
      { title: 'Entrega com sustentação', description: 'O projeto não termina na publicação: há suporte para ajustes, correções e evolução.' },
      { title: 'Linguagem de negócio', description: 'As decisões técnicas são traduzidas para impacto operacional, prazo e prioridade.' }
    ]
  },
  cta: {
    title: 'Vamos avaliar onde um sistema sob medida gera mais retorno',
    description: 'Conte o que trava sua operação hoje. A Rentatec ajuda a decidir se o melhor caminho é automação, integração, ERP ou desenvolvimento sob medida.'
  }
}

useHead({
  title: 'Software Sob Medida para Operações B2B | Rentatec',
  meta: [
    { name: 'description', content: 'Desenvolvimento de software sob medida para financeiro, fiscal, backoffice, integrações e rotinas operacionais B2B.' }
  ]
})
</script>
