<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'Integrações para reduzir retrabalho e conectar a operação',
    description: 'Conectamos ERP, fiscal, e-commerce, CRM, bancos de dados, APIs e ferramentas internas para que dados críticos circulem com segurança, rastreabilidade e menos digitação manual.',
    secondaryCta: 'Ver integrações',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: 'APIs', text: 'conexão entre sistemas e plataformas' },
    { label: 'ERP', text: 'dados sincronizados com a operação' },
    { label: 'Fiscal', text: 'documentos e rotinas com menos retrabalho' }
  ],
  preview: {
    label: 'Integração operacional',
    title: 'Dados certos no sistema certo',
    description: 'A integração elimina etapas manuais entre áreas e cria um fluxo confiável entre origem, validação e destino.',
    items: [
      'Pedidos, notas, clientes, pagamentos e status sincronizados',
      'Regras de validação antes de gravar ou atualizar dados críticos',
      'Logs e histórico para auditar falhas, reprocessamentos e integrações'
    ]
  },
  problem: {
    title: 'Quando sistemas não conversam, a equipe vira ponte manual entre eles.',
    description: 'Exportações, planilhas, cópia de dados e conferências repetidas aumentam atraso e geram divergências entre comercial, financeiro, fiscal e operação.'
  },
  outcomes: [
    { label: 'Produtividade', title: 'Menos digitação', description: 'Informações passam de um sistema para outro sem depender de lançamento manual.' },
    { label: 'Confiabilidade', title: 'Menos divergência', description: 'Regras de validação evitam que dados incompletos ou inconsistentes avancem.' },
    { label: 'Gestão', title: 'Status rastreável', description: 'Cada integração pode ter logs, tentativas, retornos e alertas para acompanhamento.' },
    { label: 'Escala', title: 'Processos mais previsíveis', description: 'A operação cresce sem multiplicar controles paralelos e tarefas repetitivas.' }
  ],
  capabilities: {
    label: 'Possibilidades',
    title: 'Integrações que conectam áreas e sistemas',
    items: [
      { label: 'ERP', title: 'Integração com sistemas de gestão', description: 'Sincronização de clientes, produtos, pedidos, documentos, títulos e status operacionais.' },
      { label: 'Fiscal', title: 'Documentos e automação fiscal', description: 'Conexão com rotinas de notas, documentos recebidos, validações e integrações fiscais.' },
      { label: 'Comercial', title: 'CRM, pedidos e atendimento', description: 'Automação entre funil, propostas, pedidos, contratos e histórico de cliente.' },
      { label: 'E-commerce', title: 'Lojas e marketplaces', description: 'Pedidos, estoque, faturamento, expedição e atualização de status integrados.' },
      { label: 'Dados', title: 'APIs e bancos de dados', description: 'Serviços REST, importações, filas, rotinas agendadas e tratamento de dados legados.' },
      { label: 'Alertas', title: 'Monitoramento de falhas', description: 'Logs, reprocessamento e notificações para manter a operação informada.' }
    ]
  },
  process: {
    title: 'Integração segura começa por regra clara de dados',
    description: 'Mapeamos origem, destino, formato, validações, frequência e tratamento de erros antes de automatizar.',
    steps: [
      { stage: 'Mapeamento', description: 'Identificamos sistemas, dados, responsáveis, pontos de erro e regras de negócio.' },
      { stage: 'Contrato', description: 'Definimos campos, formatos, autenticação, frequência, retornos e critérios de sucesso.' },
      { stage: 'Implementação', description: 'Construímos conectores, rotinas, APIs, filas ou importações conforme o cenário.' },
      { stage: 'Validação', description: 'Testamos dados reais, exceções, reprocessamento e conciliação entre sistemas.' },
      { stage: 'Monitoramento', description: 'Acompanhamos execução, falhas, logs e ajustes após a entrada em produção.' }
    ]
  },
  differentials: {
    title: 'Integração com visão de processo, não só de API',
    description: 'Além de conectar sistemas, cuidamos do impacto operacional da informação que passa entre eles.',
    items: [
      { title: 'Validação antes da automação', description: 'Campos, regras e exceções são tratados para não automatizar erro em escala.' },
      { title: 'Rastreabilidade', description: 'Logs e histórico ajudam a entender o que foi enviado, recebido, recusado ou reprocessado.' },
      { title: 'Aderência ao legado', description: 'Trabalhamos com APIs modernas, bancos, arquivos e sistemas que já existem na empresa.' },
      { title: 'Menos dependência manual', description: 'A equipe deixa de ser a ponte entre sistemas e passa a atuar sobre exceções.' }
    ]
  },
  cta: {
    title: 'Vamos identificar onde a integração reduz retrabalho primeiro',
    description: 'Conte quais sistemas precisam conversar e quais dados travam a rotina. A Rentatec avalia o caminho mais seguro para conectar sua operação.'
  }
}

useHead({
  title: 'Integrações de Sistemas, ERP e APIs | Rentatec',
  meta: [
    { name: 'description', content: 'Integrações entre ERP, fiscal, e-commerce, CRM, APIs e sistemas internos para reduzir retrabalho e melhorar rastreabilidade.' }
  ]
})
</script>
