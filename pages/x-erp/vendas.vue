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
            <span class="text-gray-900 font-medium" itemprop="name">Módulo de Vendas</span>
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
            <span class="text-blue-600 text-sm font-medium tracking-wider">MÓDULO DE VENDAS</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sistema de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Vendas</span> Completo
          </h1>
          
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 mb-4">
              Potencialize suas vendas: marketing promocional, programas de fidelidade, análises detalhadas e painel gerencial. Insights estratégicos para maximizar resultados comerciais.
            </p>
            <p class="text-base text-gray-500">
              <strong>Principais recursos:</strong> 4 módulos integrados incluindo marketing e promoções, programa de fidelidade com campanhas personalizadas, análises de vendas com dashboards e painel gerencial robusto para decisões baseadas em dados.
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

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Marketing e Promoções -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Marketing e Promoções</h3>
            <p class="text-gray-600">Ferramentas estratégicas para gerenciar descontos, promoções e pacotes promocionais, ajudando a maximizar vendas e atrair clientes com ofertas personalizadas e campanhas direcionadas.</p>
          </div>

          <!-- Programa de Fidelidade -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Programa de Fidelidade</h3>
            <p class="text-gray-600">Crie campanhas que valorizam a lealdade dos clientes gerenciando programas de pontos, categorias de campanhas e produtos envolvidos para incentivar a recorrência de compras.</p>
          </div>

          <!-- Vendas (Análises) -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Vendas - Análises</h3>
            <p class="text-gray-600">Análises detalhadas sobre produtos mais e menos vendidos, desempenho de faturamento por período e insights sobre interesses por gênero, auxiliando na estratégia comercial e planejamento de estoques.</p>
          </div>

          <!-- Vendas / Gerencial -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Vendas / Gerencial</h3>
            <p class="text-gray-600">Painel robusto para consulta de faturamento por diferentes perspectivas com análise de fornecedores e produtos, gráficos gerenciais, Top 200 produtos mais vendidos e relatórios de desempenho de campanhas para decisões baseadas em dados.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="benefits" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Módulo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Vendas</span>
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
              <h3 class="text-lg font-bold text-gray-900 mb-2">Estratégias de Marketing Eficazes</h3>
              <p class="text-gray-600">Promoções e descontos personalizados que atraem clientes e impulsionam vendas.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Fidelização de Clientes</h3>
              <p class="text-gray-600">Programas de pontos e campanhas que incentivam a recorrência e valorizam a lealdade.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Análises Detalhadas</h3>
              <p class="text-gray-600">Dashboards e relatórios completos sobre produtos mais vendidos, faturamento e interesses por gênero.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Gestão Baseada em Dados</h3>
              <p class="text-gray-600">Painel gerencial robusto com gráficos e Top 200 produtos para decisões estratégicas informadas.</p>
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
            Pronto para impulsionar suas vendas?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração e veja como o módulo de Vendas pode transformar seus resultados comerciais.
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
  title: 'Módulo de Vendas X-ERP | Marketing e Fidelização - Rentatec',
  meta: [
    { name: 'description', content: 'Sistema de Vendas completo: marketing e promoções, programa de fidelidade, análises de vendas e painel gerencial. 4 módulos para maximizar resultados.' },
    { name: 'keywords', content: 'vendas, marketing, promoções, programa de fidelidade, análise de vendas, dashboard vendas, gestão comercial' },
    { property: 'og:title', content: 'Módulo de Vendas X-ERP | Sistema Completo' },
    { property: 'og:description', content: 'Marketing, fidelização e análises para impulsionar vendas.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rentatec.com.br/x-erp/vendas' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://rentatec.com.br/x-erp/vendas' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'X-ERP Módulo de Vendas',
        applicationCategory: 'BusinessApplication',
        description: 'Sistema de Vendas com marketing, fidelização e análises.',
        featureList: ['Marketing e Promoções', 'Programa de Fidelidade', 'Análises de Vendas', 'Painel Gerencial'],
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
