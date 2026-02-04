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
            <span class="text-gray-900 font-medium" itemprop="name">Módulo Gestão de Pessoas</span>
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
            <span class="text-blue-600 text-sm font-medium tracking-wider">MÓDULO GESTÃO DE PESSOAS</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sistema de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Gestão de Pessoas</span> Completo
          </h1>
          
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 mb-4">
              Automatize e organize a gestão de folha de pagamento: desde o cadastro de funcionários até a emissão de holerintes, com controle total de verbas, férias e movimentações.
            </p>
            <p class="text-base text-gray-500">
              <strong>Principais recursos:</strong> 2 módulos integrados incluindo folha de pagamento completa com cadastro de funcionários, verbas fixas, cálculo de folha, importação de cartão ponto e movimento da folha com benefícios e alterações de lotação.
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
          <!-- Folha de Pagamento -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Folha de Pagamento</h3>
            <p class="text-gray-600">Automatize e organize a gestão de folha de pagamento desde o cadastro de funcionários até emissão de holerintes, com controle detalhado de verbas fixas, cálculo de folha, importação de cartão ponto e gerenciamento completo de férias.</p>
          </div>

          <!-- Movimento da Folha -->
          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Movimento da Folha</h3>
            <p class="text-gray-600">Movimentação e ajustes da folha de pagamento com cálculo de benefícios como vale-transporte, alteração de lotação de funcionários e controle de movimentações, garantindo flexibilidade e conformidade nos processos de RH.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="benefits" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Módulo de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Gestão de Pessoas</span>
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
              <h3 class="text-lg font-bold text-gray-900 mb-2">Automação de Processos</h3>
              <p class="text-gray-600">Cálculo automático de folha, benefícios, férias e verbas fixas, reduzindo tempo e eliminando erros manuais.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Controle Completo de RH</h3>
              <p class="text-gray-600">Gestão integral desde cadastro de funcionários até emissão de holerintes e controle de dependentes.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Flexibilidade e Conformidade</h3>
              <p class="text-gray-600">Movimentações de funcionários, reajustes salariais e controle de benefícios em conformidade com legislação trabalhista.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Relatórios Detalhados</h3>
              <p class="text-gray-600">Resumos de folha, listagens e relatórios completos para tomada de decisões estratégicas em RH.</p>
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
            Pronto para simplificar sua gestão de pessoas?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração e veja como o módulo de Gestão de Pessoas pode transformar seu RH.
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
  title: 'Módulo Gestão de Pessoas X-ERP | Folha de Pagamento - Rentatec',
  meta: [
    { name: 'description', content: 'Sistema de Gestão de Pessoas completo: folha de pagamento, movimento da folha, benefícios, férias e controle de funcionários. Automação total de RH.' },
    { name: 'keywords', content: 'gestão de pessoas, folha de pagamento, RH, benefícios, férias, holerinte, vale transporte, reajuste salarial' },
    { property: 'og:title', content: 'Módulo Gestão de Pessoas X-ERP | Sistema de RH Completo' },
    { property: 'og:description', content: 'Folha de pagamento automatizada, movimento da folha e controle total de funcionários.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rentatec.com.br/x-erp/gestao-pessoas' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: 'https://rentatec.com.br/x-erp/gestao-pessoas' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'X-ERP Módulo Gestão de Pessoas',
        applicationCategory: 'BusinessApplication',
        description: 'Sistema de Gestão de Pessoas para folha de pagamento, benefícios e controle de funcionários.',
        featureList: ['Folha de Pagamento', 'Movimento da Folha', 'Benefícios', 'Férias', 'Holerinte', 'Vale Transporte'],
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
