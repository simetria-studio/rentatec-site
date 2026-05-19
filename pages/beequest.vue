<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'Beequest para organizar processos, indicadores e rotinas de gestão',
    description: 'A Rentatec apoia a implantação e evolução do Beequest para estruturar fluxos, acompanhar responsabilidades e transformar dados operacionais em gestão mais clara.',
    secondaryCta: 'Ver aplicações',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: 'Fluxos', text: 'rotinas estruturadas por etapa e dono' },
    { label: 'Gestão', text: 'indicadores para acompanhar execução' },
    { label: 'Equipe', text: 'responsabilidades visíveis entre áreas' }
  ],
  preview: {
    label: 'Beequest na prática',
    title: 'Gestão com processo e indicador no mesmo lugar',
    description: 'O foco é tirar a rotina do acompanhamento informal e criar uma base de trabalho com status, responsáveis, prazos e visibilidade.',
    items: [
      'Mapeamento de processos e responsabilidades',
      'Configuração de fluxos, campos e indicadores',
      'Acompanhamento de adoção, ajustes e melhorias'
    ]
  },
  problem: {
    title: 'Sem processo claro, a gestão depende de reunião, cobrança e memória.',
    description: 'Quando responsabilidades e status ficam espalhados, a equipe perde previsibilidade e a liderança não enxerga gargalos até eles virarem urgência.'
  },
  outcomes: [
    { label: 'Clareza', title: 'Processos visíveis', description: 'As etapas, responsáveis e prazos ficam organizados em uma rotina acompanhável.' },
    { label: 'Indicadores', title: 'Gestão baseada em dados', description: 'A operação passa a gerar informações úteis para priorizar, cobrar e melhorar.' },
    { label: 'Adoção', title: 'Configuração aderente', description: 'Fluxos são desenhados para a realidade da equipe, evitando burocracia desnecessária.' },
    { label: 'Evolução', title: 'Melhoria contínua', description: 'O uso real orienta ajustes, novos indicadores e automações.' }
  ],
  capabilities: {
    label: 'Aplicações',
    title: 'Onde o Beequest pode apoiar a gestão',
    items: [
      { label: 'Processos', title: 'Fluxos internos', description: 'Organização de demandas, etapas, responsáveis, aprovações e status.' },
      { label: 'Indicadores', title: 'Acompanhamento gerencial', description: 'Painéis para monitorar volume, prazo, gargalos e desempenho.' },
      { label: 'Rotina', title: 'Gestão de tarefas', description: 'Demandas recorrentes, planos de ação, pendências e acompanhamento entre áreas.' },
      { label: 'Governança', title: 'Regras e responsabilidades', description: 'Campos, permissões e critérios para manter o processo controlado.' },
      { label: 'Implantação', title: 'Configuração orientada', description: 'Apoio no desenho dos fluxos e na adaptação da ferramenta ao cenário real.' },
      { label: 'Melhoria', title: 'Evolução de uso', description: 'Ajustes depois da implantação para aumentar aderência e produtividade.' }
    ]
  },
  process: {
    title: 'Implantação orientada por rotina operacional',
    description: 'A ferramenta deve refletir como a empresa trabalha, o que precisa controlar e quais indicadores fazem sentido para decidir.',
    steps: [
      { stage: 'Diagnóstico', description: 'Entendemos áreas, fluxos, dores, indicadores e maturidade atual de gestão.' },
      { stage: 'Modelagem', description: 'Desenhamos etapas, campos, responsáveis, regras e indicadores prioritários.' },
      { stage: 'Configuração', description: 'Parametrizamos fluxos, visões, permissões e cadastros necessários.' },
      { stage: 'Adoção', description: 'Apoiamos treinamento, uso inicial e ajustes de aderência.' },
      { stage: 'Evolução', description: 'Revisamos indicadores, gargalos e oportunidades de automação.' }
    ]
  },
  differentials: {
    title: 'Implantação com foco em adoção',
    description: 'O resultado depende menos da ferramenta isolada e mais do desenho certo para a rotina da equipe.',
    items: [
      { title: 'Fluxos sem excesso', description: 'A configuração evita burocracia e prioriza o que ajuda a operar e gerir.' },
      { title: 'Indicadores úteis', description: 'Métricas são escolhidas para orientar decisões, não apenas preencher painéis.' },
      { title: 'Acompanhamento prático', description: 'Apoio na entrada em uso reduz resistência e melhora aderência.' },
      { title: 'Integração quando necessário', description: 'Dados e sistemas externos podem entrar no fluxo quando fizer sentido operacional.' }
    ]
  },
  cta: {
    title: 'Vamos avaliar como o Beequest pode organizar sua rotina',
    description: 'Conte quais processos, equipes e indicadores precisam ganhar visibilidade. A Rentatec ajuda a desenhar uma implantação aderente.'
  }
}

useHead({
  title: 'Beequest para Processos e Indicadores | Rentatec',
  meta: [
    { name: 'description', content: 'Implantação e evolução do Beequest para organizar processos, indicadores, responsabilidades e rotinas de gestão.' }
  ]
})
</script>
