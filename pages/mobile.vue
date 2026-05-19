<template>
  <SolutionPage :content="content" />
</template>

<script setup>
const content = {
  hero: {
    title: 'Aplicativos operacionais conectados aos sistemas da empresa',
    description: 'Desenvolvemos apps para equipes de campo, clientes, coleta de dados, solicitações, aprovação e acompanhamento de rotinas integradas ao ERP e aos sistemas internos.',
    secondaryCta: 'Ver aplicações',
    secondaryHref: '#recursos'
  },
  signals: [
    { label: 'Campo', text: 'coleta e execução fora do escritório' },
    { label: 'Clientes', text: 'portais e autoatendimento mobile' },
    { label: 'ERP', text: 'dados conectados à operação interna' }
  ],
  preview: {
    label: 'Mobile operacional',
    title: 'App como extensão da operação',
    description: 'O aplicativo deve resolver uma rotina concreta: registrar, consultar, aprovar ou acompanhar algo com dados confiáveis.',
    items: [
      'Coleta de informações com validações e histórico',
      'Consulta de status, documentos, pedidos ou atendimentos',
      'Integração com ERP, APIs e sistemas internos'
    ]
  },
  problem: {
    title: 'Quando a operação sai do escritório, o controle costuma virar mensagem e planilha.',
    description: 'Sem um aplicativo conectado, equipes e clientes dependem de ligações, fotos soltas, formulários externos e atualizações manuais para alimentar o sistema principal.'
  },
  outcomes: [
    { label: 'Execução', title: 'Dados na origem', description: 'A informação é registrada no momento da execução, com menos perda de contexto.' },
    { label: 'Controle', title: 'Status em tempo real', description: 'Gestores acompanham solicitações, entregas, visitas e aprovações sem cobrança manual.' },
    { label: 'Cliente', title: 'Autoatendimento', description: 'Usuários consultam andamento, enviam dados e interagem com processos sem depender do time interno.' },
    { label: 'Integração', title: 'Menos retrabalho', description: 'O app alimenta sistemas internos e reduz recadastro de informações.' }
  ],
  capabilities: {
    label: 'Aplicações',
    title: 'Onde um aplicativo pode simplificar a operação',
    items: [
      { label: 'Campo', title: 'Equipe externa e visitas', description: 'Registros de atendimento, checklist, fotos, geolocalização e status de execução.' },
      { label: 'Clientes', title: 'Portal mobile', description: 'Solicitações, consulta de documentos, status de pedidos e abertura de chamados.' },
      { label: 'Aprovação', title: 'Decisões rápidas', description: 'Aprovação de demandas, compras, despesas, contratos e documentos pelo celular.' },
      { label: 'Coleta', title: 'Formulários operacionais', description: 'Dados estruturados com validações, anexos e envio para sistemas internos.' },
      { label: 'Notificações', title: 'Alertas e pendências', description: 'Avisos para prazos, mudanças de status, tarefas e exceções importantes.' },
      { label: 'Integração', title: 'Conexão com ERP e APIs', description: 'Sincronização de dados do app com sistemas de gestão e bancos internos.' }
    ]
  },
  process: {
    title: 'Do fluxo operacional ao aplicativo publicado',
    description: 'A construção prioriza o processo que o app precisa resolver, os dados que ele movimenta e a integração com a base interna.',
    steps: [
      { stage: 'Diagnóstico', description: 'Mapeamos usuários, ambiente de uso, dados coletados, integrações e regras de validação.' },
      { stage: 'Protótipo', description: 'Definimos jornadas, telas principais, permissões e estados de uso.' },
      { stage: 'Desenvolvimento', description: 'Construímos app, backend, autenticação, APIs e integrações necessárias.' },
      { stage: 'Teste', description: 'Validamos usabilidade, fluxo de dados, dispositivos, permissões e cenários offline quando aplicável.' },
      { stage: 'Publicação', description: 'Apoiamos implantação, lojas, distribuição interna, monitoramento e evolução.' }
    ]
  },
  differentials: {
    title: 'Mobile pensado para rotina, não só interface bonita',
    description: 'O app precisa ser simples para quem usa e confiável para quem administra a operação.',
    items: [
      { title: 'Integração como premissa', description: 'O app nasce conectado aos sistemas que já sustentam a empresa.' },
      { title: 'Experiência prática', description: 'Fluxos são desenhados para uso real em campo, atendimento ou rotina de aprovação.' },
      { title: 'Controle de dados', description: 'Validações, permissões e histórico evitam informação solta e difícil de auditar.' },
      { title: 'Evolução após lançamento', description: 'Novas funcionalidades podem ser priorizadas conforme uso e demanda operacional.' }
    ]
  },
  cta: {
    title: 'Vamos entender qual rotina merece virar aplicativo',
    description: 'A Rentatec avalia se o melhor caminho é app, portal, integração ou automação antes de iniciar o desenvolvimento.'
  }
}

useHead({
  title: 'Aplicativos Operacionais e Mobile B2B | Rentatec',
  meta: [
    { name: 'description', content: 'Desenvolvimento de aplicativos operacionais para equipes, clientes, coleta de dados, aprovações e integração com ERP.' }
  ]
})
</script>
