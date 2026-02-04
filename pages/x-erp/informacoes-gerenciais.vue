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
            <span class="text-gray-900 font-medium" itemprop="name">Informações Gerenciais</span>
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
            <span class="text-blue-600 text-sm font-medium tracking-wider">INFORMAÇÕES GERENCIAIS</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sistema de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Informações Gerenciais</span> Completo
          </h1>
          
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 mb-4">
              Dashboards interativos, índices estratégicos e análise gerencial financeira para monitoramento de desempenho empresarial em tempo real.
            </p>
            <p class="text-base text-gray-500">
              <strong>Principais recursos:</strong> 3 módulos integrados incluindo cadastro de índices com painéis de controle, financeiro gerencial com DRE e DFC, e índices empresariais com dashboards de vendas, faturamento e análises comparativas.
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
          <!-- Cadastro dos Índices -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Cadastro dos Índices</h3>
            <p class="text-gray-600">Centralize configuração e gerenciamento de índices estratégicos com painéis de controle, periodicidade e tipos de indicadores. Visualize dados de desempenho com painéis gráficos e tabelas de controle.</p>
          </div>

          <!-- Financeiro - Gerencial -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Financeiro - Gerencial</h3>
            <p class="text-gray-600">Análise gerencial com ferramentas financeiras avançadas incluindo DRE, DFC, gráficos de contas a pagar/receber e orçamento baseado em índices para planejamento estratégico.</p>
          </div>

          <!-- Índices da Empresa -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Índices da Empresa</h3>
            <p class="text-gray-600">Dashboards interativos para monitoramento de desempenho empresarial com indicadores de vendas, compras, faturamento, endividamento e análises comparativas incluindo ticket médio, metas e CMV.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="benefits" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Módulo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Informações Gerenciais</span>
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
              <h3 class="text-lg font-bold text-gray-900 mb-2">Decisões Baseadas em Dados</h3>
              <p class="text-gray-600">Dashboards interativos e índices estratégicos fornecem insights valiosos para tomada de decisão informada.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Visão 360° do Negócio</h3>
              <p class="text-gray-600">Monitoramento completo de vendas, compras, faturamento, endividamento e performance empresarial em tempo real.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Análise Financeira Avançada</h3>
              <p class="text-gray-600">DRE, DFC e análises gerenciais com gráficos e relatórios para planejamento financeiro estratégico.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Comparativos e Metas</h3>
              <p class="text-gray-600">Acompanhe metas de vendas, ticket médio, CMV e comparativos entre períodos para otimizar resultados.</p>
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
            Pronto para tomar decisões baseadas em dados?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração e veja como o módulo de Informações Gerenciais pode transformar sua gestão.
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
  title: 'Informações Gerenciais X-ERP | Dashboards e Análise - Rentatec',
  meta: [
    { name: 'description', content: 'Sistema de Informações Gerenciais: dashboards interativos, índices estratégicos, DRE, DFC e análise de desempenho empresarial em tempo real.' },
    { name: 'keywords', content: 'informações gerenciais, dashboards, índices empresariais, DRE, DFC, análise financeira, BI, business intelligence' },
    { property: 'og:title', content: 'Informações Gerenciais X-ERP | Sistema de BI e Dashboards' },
    { property: 'og:description', content: 'Dashboards interativos, índices estratégicos e análise gerencial completa.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rentatec.com.br/x-erp/informacoes-gerenciais' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://rentatec.com.br/x-erp/informacoes-gerenciais' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'X-ERP Informações Gerenciais',
        applicationCategory: 'BusinessApplication',
        description: 'Sistema de Informações Gerenciais com dashboards, índices e análise financeira.',
        featureList: ['Dashboards', 'Índices Estratégicos', 'DRE', 'DFC', 'Análise Gerencial'],
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
