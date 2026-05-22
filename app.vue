<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()

const pageTitles = {
  '/': 'Rentatec | Sistemas, Integrações e Automações',
  '/beequest': 'Beequest | Rentatec',
  '/blog': 'Blog e Insights | Rentatec',
  '/blog-admin': 'Admin do Blog | Rentatec',
  '/contact': 'Contato | Rentatec',
  '/contato': 'Contato | Rentatec',
  '/integracoes': 'Integrações de Sistemas, ERP e APIs | Rentatec',
  '/kanban-x-erp': 'X-ERP Kanban | Rentatec',
  '/mobile': 'Aplicativos Operacionais e Mobile B2B | Rentatec',
  '/pipefy': 'Integração Pipefy com ERP e Sistemas Internos | Rentatec',
  '/privacy-policy': 'Política de Privacidade | Rentatec',
  '/servicos': 'Software Sob Medida para Operações B2B | Rentatec',
  '/terms-of-use': 'Termos de Uso | Rentatec',
  '/x-erp': 'X-ERP | ERP para Gestão Operacional | Rentatec',
  '/x-erp/comercial': 'X-ERP Comercial | Rentatec',
  '/x-erp/estoque': 'X-ERP Estoque | Rentatec',
  '/x-erp/financeiro': 'X-ERP Financeiro | Rentatec',
  '/x-erp/fisco-contabil': 'X-ERP Fisco-contábil | Rentatec',
  '/x-erp/gestao-pessoas': 'X-ERP Gestão de Pessoas | Rentatec',
  '/x-erp/informacoes-gerenciais': 'X-ERP Informações Gerenciais | Rentatec',
  '/x-erp/producao': 'X-ERP Produção | Rentatec',
  '/x-erp/projetos': 'X-ERP Projetos | Rentatec',
  '/x-erp/relatorios': 'X-ERP Relatórios | Rentatec',
  '/x-erp/vendas': 'X-ERP Vendas | Rentatec',
  '/xerp-kanban': 'X-ERP Kanban - Processos, SLA e Aprovações | Rentatec',
  '/xerp-notas': 'X-ERP Notas - Automação e Auditoria Fiscal | Rentatec',
  '/lp/xerp-kanban': 'X-ERP Kanban | Processos claros e equipes alinhadas',
  '/lp/xerp-kanban-rh': 'X-ERP Kanban RH | Rotinas de pessoas com SLA e automação',
  '/lp/xerp-kanban-contratos': 'X-ERP Kanban Contratos | Gestão visual para Jurídico e Comercial',
}

function normalizePath(path) {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '')
}

useHead(() => ({
  title: pageTitles[normalizePath(route.path)] || 'Rentatec',
}))
</script>
