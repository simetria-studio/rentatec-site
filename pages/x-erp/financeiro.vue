<template>
  <div>
    <NavBar />
    
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumb" class="bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol class="flex items-center space-x-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink to="/" class="text-gray-500 hover:text-gray-700 transition-colors" itemprop="item">
              <span itemprop="name">Home</span>
            </NuxtLink>
            <meta itemprop="position" content="1" />
          </li>
          <li class="text-gray-400">/</li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <NuxtLink to="/x-erp" class="text-gray-500 hover:text-gray-700 transition-colors" itemprop="item">
              <span itemprop="name">X-ERP</span>
            </NuxtLink>
            <meta itemprop="position" content="2" />
          </li>
          <li class="text-gray-400">/</li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span class="text-gray-900 font-medium" itemprop="name">Módulo Financeiro</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">MÓDULO FINANCEIRO</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sistema <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Financeiro</span> Completo
          </h1>
          
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 mb-4">
              Controle completo das finanças: contas a pagar e receber, fluxo de caixa, conciliação bancária, orçamento e controladoria integrada.
            </p>
            <p class="text-base text-gray-500">
              <strong>Principais recursos:</strong> 11 módulos integrados incluindo gestão de caixa, conciliação de cartões, contas a pagar/receber, controladoria, fluxo de caixa, movimentação de contas, orçamento empresarial e troca de arquivos bancários.
            </p>
          </div>

          <div class="text-center">
            <a href="#contact" class="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Solicitar Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section id="features" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Principais <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Funcionalidades</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Associação / Condomínio -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Associação / Condomínio</h3>
            <p class="text-gray-600">Gerencie contratos e operações de locação com propostas, contratos de shopping, vendas do balcão e lançamento de valores por contrato.</p>
          </div>

          <!-- Caixa -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Caixa</h3>
            <p class="text-gray-600">Controle total do fluxo de caixa com monitoramento de sangrias, fechamento, geração de notas de pedido e relatórios simples e detalhados.</p>
          </div>

          <!-- Conciliação de Cartão de Crédito -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Conciliação de Cartão de Crédito</h3>
            <p class="text-gray-600">Automatize leitura, fechamento e reconciliação de pagamentos via cartões de crédito e débito com precisão no controle financeiro.</p>
          </div>

          <!-- Contas a Pagar -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Contas a Pagar</h3>
            <p class="text-gray-600">Gerencie obrigações financeiras com lançamento de despesas, baixa de pagamentos, controle de contratos e integração com Transfeera.</p>
          </div>

          <!-- Contas a Receber -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Contas a Receber</h3>
            <p class="text-gray-600">Centralize gestão de contratos e títulos a receber com recursos para antecipação, cobrança, reajuste e faturamento de serviços.</p>
          </div>

          <!-- Controladoria -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Controladoria</h3>
            <p class="text-gray-600">Visão estratégica dos processos financeiros com relatórios detalhados, pedidos cancelados e listagens de borderôs com descontos.</p>
          </div>

          <!-- Fluxo de Caixa -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Fluxo de Caixa</h3>
            <p class="text-gray-600">Visualização analítica, prevista e sintética do fluxo de caixa para planejamento e tomada de decisões financeiras estratégicas.</p>
          </div>

          <!-- Movimentação de Contas -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Movimentação de Contas</h3>
            <p class="text-gray-600">Gerenciamento completo de contas e movimentações bancárias: transferências, conciliações, depósitos e controle de cheques.</p>
          </div>

          <!-- Orçamento -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Orçamento</h3>
            <p class="text-gray-600">Criação de projeções financeiras detalhadas para o ano, permitindo comparar orçamento planejado com resultados reais.</p>
          </div>

          <!-- Troca de Arquivos - Cobrança -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Troca de Arquivos - Cobrança</h3>
            <p class="text-gray-600">Automatize envio de informações financeiras para bancos no formato CNAB 240, garantindo emissão e acompanhamento de cobranças com leitura de arquivos de retorno.</p>
          </div>

          <!-- Troca de Arquivos - Pagamentos -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Troca de Arquivos - Pagamentos</h3>
            <p class="text-gray-600">Facilite gestão de pagamentos a fornecedores automatizando geração de arquivos PAGFOR e leitura de retornos bancários, organizando ocorrências e melhorando precisão.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="benefits" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Módulo <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Financeiro</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Controle Financeiro Total</h3>
              <p class="text-gray-600">Visão completa de entradas e saídas com gestão integrada de contas a pagar, receber e fluxo de caixa.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Conciliação Automática</h3>
              <p class="text-gray-600">Automatize a conciliação bancária e de cartões de crédito, reduzindo tempo e eliminando erros manuais.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Planejamento Estratégico</h3>
              <p class="text-gray-600">Orçamentos anuais, fluxo de caixa previsto e controladoria para decisões financeiras assertivas.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Integração Completa</h3>
              <p class="text-gray-600">Sincronização automática com sistemas de pagamento, bancos e demais módulos do X-ERP.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 modern-gradient relative overflow-hidden">
      <div class="modern-grid-pattern absolute inset-0 opacity-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para ter controle total das suas finanças?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração e veja como o módulo Financeiro pode transformar sua gestão financeira.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="modern-button px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Agendar Demonstração
            </a>
            <NuxtLink to="/x-erp" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Ver Outros Módulos
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Módulo Financeiro X-ERP | Gestão Financeira Completa - Rentatec',
  meta: [
    { name: 'description', content: 'Sistema Financeiro completo: contas a pagar/receber, fluxo de caixa, conciliação de cartões, orçamento e controladoria. 9 módulos integrados.' },
    { name: 'keywords', content: 'sistema financeiro, ERP financeiro, contas a pagar, contas a receber, fluxo de caixa, conciliação bancária, controladoria, orçamento' },
    { property: 'og:title', content: 'Módulo Financeiro X-ERP | Sistema de Gestão Financeira' },
    { property: 'og:description', content: 'Controle completo das finanças: contas, fluxo de caixa, conciliação e orçamento. 9 módulos integrados.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rentatec.com.br/x-erp/financeiro' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://rentatec.com.br/x-erp/financeiro' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'X-ERP Módulo Financeiro',
        applicationCategory: 'BusinessApplication',
        description: 'Sistema Financeiro completo para gestão de contas a pagar/receber, fluxo de caixa, conciliação e orçamento.',
        featureList: ['Caixa', 'Contas a Pagar', 'Contas a Receber', 'Fluxo de Caixa', 'Conciliação de Cartões', 'Controladoria', 'Orçamento'],
        provider: { '@type': 'Organization', name: 'Renatatec', url: 'https://renatatec.com.br' }
      })
    }
  ]
})
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border-radius: 24px;
}

.hover-float {
  transition: all 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.modern-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

.modern-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0);
  background-size: 40px 40px;
}

.modern-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.modern-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 100%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.modern-button:hover::before {
  transform: translateX(0);
}
</style>
