export const xerpModules = [
  {
    key: 'comercial',
    title: 'Comercial',
    path: '/x-erp/comercial',
    description: 'Pedidos, faturamento, notas fiscais, comissões, crédito e análise de vendas em um fluxo integrado.',
    summary: 'Controle o ciclo comercial do orçamento ao faturamento, com pedidos, clientes, preços, notas fiscais, comissões e indicadores de venda conectados ao restante da operação.',
    resources: ['Pedidos e faturamento', 'NF-e, NFS-e e CT-e', 'Comissões', 'Crédito e cobrança', 'CRM e metas de vendas'],
    features: [
      ['Pedidos', 'Gerencie pré-vendas, PDV, atacado, pedidos móveis, pedidos de shopping e recuperação de pedidos perdidos.'],
      ['Faturamento', 'Converta orçamentos em pedidos, controle entregas e simplifique a emissão de documentos fiscais.'],
      ['Comissões', 'Calcule comissões com regras flexíveis, descontos e totalizadores por vendedor ou período.'],
      ['Notas fiscais', 'Emita e acompanhe NF-e, NFS-e, CT-e, cancelamentos, cartas de correção e arquivos XML.'],
      ['Crédito e cobrança', 'Acompanhe aprovação de pedidos, risco de clientes e rotinas de cobrança.'],
      ['Metas e análises', 'Acompanhe metas, desempenho comercial e evolução das vendas com indicadores gerenciais.']
    ],
    benefits: ['Reduz retrabalho entre pedido, nota e financeiro.', 'Dá previsibilidade ao faturamento e às comissões.', 'Ajuda equipes comerciais a vender com dados atualizados.']
  },
  {
    key: 'estoque',
    title: 'Estoque',
    path: '/x-erp/estoque',
    description: 'Compras, fornecedores, recebimentos, distribuição, inventário e solicitações de materiais.',
    summary: 'Organize compras, recebimentos, movimentações, inventário e distribuição para manter disponibilidade de produtos com menos divergência operacional.',
    resources: ['Compras', 'Portal de fornecedores', 'Recebimentos', 'Distribuição', 'Inventário móvel'],
    features: [
      ['Compras', 'Controle cotações, pedidos de compra, aprovações e relacionamento com fornecedores.'],
      ['Recebimentos', 'Acompanhe entrada de mercadorias, conferência de notas e divergências no recebimento.'],
      ['Distribuição', 'Organize separação, movimentação e expedição de produtos entre áreas ou unidades.'],
      ['Solicitação de materiais', 'Padronize requisições internas e acompanhe atendimento por responsável.'],
      ['Inventário', 'Conte, ajuste e audite estoque com mais rastreabilidade.'],
      ['Portal de fornecedores', 'Melhore a comunicação e o fluxo de documentos com parceiros externos.']
    ],
    benefits: ['Menos ruptura e sobra de estoque.', 'Mais controle entre compra, recebimento e venda.', 'Auditoria mais simples das movimentações.']
  },
  {
    key: 'financeiro',
    title: 'Financeiro',
    path: '/x-erp/financeiro',
    description: 'Contas a pagar e receber, caixa, conciliação, orçamento, controladoria e arquivos bancários.',
    summary: 'Centralize obrigações, recebimentos, caixa, conciliações e projeções para acompanhar a saúde financeira com dados confiáveis.',
    resources: ['Contas a pagar', 'Contas a receber', 'Fluxo de caixa', 'Conciliação', 'Controladoria'],
    features: [
      ['Contas a pagar', 'Gerencie despesas, contratos, baixas, vencimentos e integração com rotinas de pagamento.'],
      ['Contas a receber', 'Controle títulos, cobrança, antecipação, reajustes e faturamento de serviços.'],
      ['Caixa', 'Monitore entradas, saídas, sangrias, fechamentos e relatórios de caixa.'],
      ['Conciliação', 'Leia e concilie cartões, bancos e movimentações com mais precisão.'],
      ['Fluxo de caixa', 'Projete saldos, compromissos e recebimentos para decidir com antecedência.'],
      ['Orçamento e controladoria', 'Acompanhe DRE, centros de custo, desvios e análises gerenciais.']
    ],
    benefits: ['Mais previsibilidade financeira.', 'Menos lançamentos duplicados.', 'Decisões baseadas em saldos e projeções atualizadas.'],
    media: [{ title: 'Contas a pagar', image: '/assets/images/tela-contas-pagar.png' }]
  },
  {
    key: 'fisco-contabil',
    title: 'Fisco-contábil',
    path: '/x-erp/fisco-contabil',
    description: 'Contabilidade, gestão fiscal, GNRE, patrimônio, SPED e tabelas fiscais.',
    summary: 'Apoie rotinas fiscais e contábeis com documentos, cadastros, obrigações e controles integrados à operação.',
    resources: ['Contabilidade', 'Gestão fiscal', 'SPED', 'GNRE', 'Patrimônio'],
    features: [
      ['Gestão fiscal', 'Organize dados fiscais, documentos, cancelamentos, devoluções e rotinas de conferência.'],
      ['Contabilidade', 'Acompanhe lançamentos e informações necessárias para fechamento contábil.'],
      ['SPED', 'Apoie geração e controle das obrigações fiscais digitais.'],
      ['GNRE', 'Controle guias e recolhimentos vinculados às operações fiscais.'],
      ['Patrimônio', 'Cadastre, acompanhe e audite ativos patrimoniais.'],
      ['Tabelas fiscais', 'Mantenha regras de NF-e, CT-e e NFS-e organizadas para reduzir erro operacional.']
    ],
    benefits: ['Mais conformidade fiscal.', 'Menos retrabalho entre fiscal, financeiro e operação.', 'Rastreabilidade em documentos e obrigações.']
  },
  {
    key: 'gestao-pessoas',
    title: 'Gestão de Pessoas',
    path: '/x-erp/gestao-pessoas',
    description: 'Folha de pagamento, funcionários, verbas, ponto, benefícios e movimentações de lotação.',
    summary: 'Organize cadastros de colaboradores, folha, benefícios e movimentações internas com mais controle e histórico.',
    resources: ['Folha de pagamento', 'Funcionários', 'Verbas fixas', 'Cartão ponto', 'Benefícios'],
    features: [
      ['Cadastro de funcionários', 'Centralize dados cadastrais, lotação, cargos e informações necessárias para folha.'],
      ['Folha de pagamento', 'Apoie cálculo, conferência e fechamento de folha com dados estruturados.'],
      ['Verbas e benefícios', 'Controle verbas fixas, benefícios e alterações recorrentes.'],
      ['Importação de ponto', 'Integre movimentos de ponto para reduzir digitação manual.'],
      ['Movimentações internas', 'Registre alterações de lotação e histórico do colaborador.']
    ],
    benefits: ['Menos retrabalho no fechamento da folha.', 'Histórico mais confiável de colaboradores.', 'RH e financeiro com dados mais alinhados.']
  },
  {
    key: 'informacoes-gerenciais',
    title: 'Informações Gerenciais',
    path: '/x-erp/informacoes-gerenciais',
    description: 'DRE, DFC, índices empresariais, dashboards de vendas, faturamento e análises comparativas.',
    summary: 'Transforme dados da operação em indicadores para acompanhar desempenho, margem, vendas, faturamento e evolução do negócio.',
    resources: ['DRE', 'DFC', 'Índices empresariais', 'Dashboards', 'Análises comparativas'],
    features: [
      ['Painéis de controle', 'Acompanhe indicadores-chave em visões consolidadas por área ou período.'],
      ['Financeiro gerencial', 'Use DRE, DFC e análises de resultado para decisões estratégicas.'],
      ['Índices empresariais', 'Monitore métricas de vendas, faturamento e desempenho operacional.'],
      ['Comparativos', 'Compare períodos, áreas e resultados para identificar tendências.'],
      ['Dados integrados', 'Reduza planilhas paralelas usando informações que nascem da operação.']
    ],
    benefits: ['Decisão com dados mais recentes.', 'Mais clareza sobre margem e resultado.', 'Indicadores conectados à rotina do ERP.']
  },
  {
    key: 'producao',
    title: 'Produção',
    path: '/x-erp/producao',
    description: 'Engenharia de produto, PCP, máquinas, manutenção, qualidade e instrumentos de medição.',
    summary: 'Acompanhe engenharia, planejamento, produção, manutenção e qualidade para reduzir paradas e melhorar previsibilidade industrial.',
    resources: ['Engenharia do produto', 'PCP', 'Máquinas', 'Manutenção', 'Qualidade'],
    features: [
      ['Engenharia do produto', 'Organize estruturas, componentes e informações técnicas do produto.'],
      ['PCP', 'Planeje produção, agende máquinas e acompanhe execução por etapa.'],
      ['Manutenção', 'Controle equipamentos, manutenções preventivas e corretivas.'],
      ['Qualidade', 'Registre inspeções de matérias-primas, processos e resultados.'],
      ['Instrumentos de medição', 'Cadastre e acompanhe instrumentos usados no processo produtivo.'],
      ['Controle operacional', 'Integre produção com estoque, compras e indicadores.']
    ],
    benefits: ['Mais previsibilidade na produção.', 'Menos paradas não planejadas.', 'Qualidade e rastreabilidade no processo.']
  },
  {
    key: 'projetos',
    title: 'Projetos',
    path: '/x-erp/projetos',
    description: 'Projetos com atividades simultâneas, documentos, assinaturas e informações por tipo de projeto.',
    summary: 'Gerencie projetos, atividades, documentos e responsáveis para manter entregas acompanhadas e registradas.',
    resources: ['Projetos', 'Atividades', 'Documentos', 'Assinaturas', 'Relatórios'],
    features: [
      ['Gestão de projetos', 'Organize projetos com etapas, responsáveis e múltiplas atividades simultâneas.'],
      ['Documentação', 'Classifique documentos por tipo e mantenha informações específicas centralizadas.'],
      ['Assinaturas', 'Acompanhe relatórios e pendências de assinatura.'],
      ['Histórico', 'Registre decisões, documentos e movimentações do projeto.'],
      ['Acompanhamento', 'Visualize andamento e pendências por responsável.']
    ],
    benefits: ['Projetos com menos informação espalhada.', 'Documentos rastreáveis.', 'Acompanhamento claro de pendências.']
  },
  {
    key: 'relatorios',
    title: 'Relatórios',
    path: '/x-erp/relatorios',
    description: 'Relatórios por área com análises detalhadas, totalizadores, comparativos e indicadores de gestão.',
    summary: 'Acesse relatórios operacionais e gerenciais para acompanhar vendas, estoque, financeiro, fiscal e demais áreas do ERP.',
    resources: ['Relatórios financeiros', 'Relatórios comerciais', 'Estoque', 'Fiscal', 'Comparativos'],
    features: [
      ['Relatórios por área', 'Consulte informações específicas de financeiro, comercial, estoque, fiscal e operação.'],
      ['Totalizadores', 'Veja consolidações por período, cliente, produto, vendedor ou centro de custo.'],
      ['Comparativos', 'Compare períodos e identifique variações relevantes.'],
      ['Indicadores gerenciais', 'Transforme dados operacionais em visão para decisão.'],
      ['Auditoria', 'Acompanhe dados e movimentações com rastreabilidade.'],
      ['Exportação e consulta', 'Facilite análise e compartilhamento das informações de gestão.']
    ],
    benefits: ['Menos dependência de planilhas.', 'Mais velocidade na análise.', 'Dados consistentes por área.']
  },
  {
    key: 'vendas',
    title: 'Vendas',
    path: '/x-erp/vendas',
    description: 'Marketing, promoções, fidelidade, dashboards de vendas e painel gerencial.',
    summary: 'Acompanhe campanhas, promoções, fidelidade e desempenho de vendas para vender com mais inteligência.',
    resources: ['Promoções', 'Fidelidade', 'Campanhas', 'Dashboards', 'Painel gerencial'],
    features: [
      ['Marketing e promoções', 'Crie campanhas, promoções e ações comerciais com regras controladas.'],
      ['Programa de fidelidade', 'Acompanhe clientes, benefícios e campanhas personalizadas.'],
      ['Análises de vendas', 'Visualize desempenho por produto, cliente, período e equipe.'],
      ['Painel gerencial', 'Acompanhe indicadores de vendas para decisões rápidas.'],
      ['Integração comercial', 'Conecte vendas com pedido, faturamento, estoque e financeiro.']
    ],
    benefits: ['Melhor leitura do desempenho comercial.', 'Campanhas mais organizadas.', 'Vendas conectadas ao restante da operação.']
  }
]

export const xerpModuleMap = Object.fromEntries(xerpModules.map((module) => [module.key, module]))
