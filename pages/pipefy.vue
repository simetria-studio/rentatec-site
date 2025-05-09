<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="overflow-hidden relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/20 to-indigo-100/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100/20 to-indigo-100/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <!-- Ondas decorativas -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24.9999C240 74.9999 480 74.9999 720 49.9999C960 24.9999 1200 -25.0001 1440 9.99993V73.9999H0V24.9999Z" fill="white"/>
        </svg>
      </div>
      
      <!-- Conteúdo do Hero -->
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-purple-700 bg-purple-50 rounded-full shadow-sm">
            INTEGRAÇÃO PIPEFY
          </span>
          <h1 class="relative mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Automatize seu 
            <span class="relative inline-block">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x">
                Fluxo de Trabalho
              </span>
              <div class="absolute -bottom-2 left-0 w-full h-3 bg-purple-100/50 rounded-full"></div>
            </span>
            <!-- Elementos decorativos -->
            <div class="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl"></div>
            <div class="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-purple-100 to-indigo-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl"></div>
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Integre o Pipefy com seus sistemas existentes e otimize seus processos de negócio. 
            Automatize tarefas, sincronize dados e aumente a produtividade da sua equipe.
          </p>

          <!-- Cards de destaque -->
          <div class="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-purple-50 rounded-lg">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Automação de Processos</h3>
              </div>
              <p class="text-gray-600">Automatize tarefas repetitivas e mantenha seus processos fluindo sem interrupções.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-indigo-50 rounded-lg">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Integração Instantânea</h3>
              </div>
              <p class="text-gray-600">Conecte-se rapidamente com outras ferramentas e mantenha seus dados sincronizados.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-purple-50 rounded-lg">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Análise em Tempo Real</h3>
              </div>
              <p class="text-gray-600">Monitore métricas importantes e tome decisões baseadas em dados atualizados.</p>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-wrap gap-6 justify-center">
            <a href="#contact" class="group px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span class="flex items-center">
                Começar Integração
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a href="#features" class="group px-8 py-4 font-semibold text-purple-600 bg-white rounded-xl border-2 border-purple-600 transition-all duration-300 hover:bg-purple-50 hover:scale-105">
              <span class="flex items-center">
                Ver Recursos
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Recursos do Pipefy -->
    <section class="relative py-20 bg-white">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-purple-50/30"></div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-12 items-center mb-20 lg:grid-cols-2">
          <div>
            <div class="inline-block px-3 py-1 mb-4 bg-purple-100 rounded-full shadow-sm">
              <span class="text-sm font-medium tracking-wider text-purple-600">RECURSOS AVANÇADOS</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Potencialize seus Processos com o Pipefy
            </h2>
            <p class="text-lg text-gray-600">
              Aproveite todo o potencial do Pipefy com nossa integração completa. 
              Automatize fluxos de trabalho, gerencie equipes e acompanhe métricas 
              importantes em tempo real.
            </p>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl transform rotate-3"></div>
            <div class="relative p-8 bg-white rounded-2xl shadow-xl">
              <div class="relative w-full h-64">
                <!-- Elementos decorativos -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                
                <!-- Ícone central -->
                <div class="flex absolute inset-0 justify-center items-center">
                  <div class="flex justify-center items-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                    <svg class="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de recursos -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-purple-100 rounded-xl">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Automação Personalizada</h3>
            <p class="mb-4 text-gray-600">Configure regras e automações específicas para seu negócio.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Regras condicionais</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Gatilhos automáticos</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Ações programadas</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-indigo-100 rounded-xl">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Relatórios Detalhados</h3>
            <p class="mb-4 text-gray-600">Acompanhe métricas e KPIs importantes para seu negócio.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Dashboards personalizados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Exportação de dados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Análise em tempo real</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-purple-100 rounded-xl">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Gestão de Equipes</h3>
            <p class="mb-4 text-gray-600">Organize e gerencie suas equipes de forma eficiente.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Controle de acesso</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Atribuição de tarefas</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Monitoramento de atividades</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Integração -->
    <section class="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-purple-100/10"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-indigo-100/10"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-purple-700 bg-purple-50 rounded-full shadow-sm">
            PROCESSO SIMPLIFICADO
          </span>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Como Funciona a Integração
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Nossa integração com o Pipefy é simples e rápida, permitindo que você 
            comece a otimizar seus processos em poucos passos
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Análise -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg">
                1
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Configuração</h3>
              <p class="mb-4 text-base text-gray-700">Configuração inicial da integração com o Pipefy.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Acesso à API</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Definição de endpoints</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Autenticação segura</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Mapeamento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg">
                2
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Mapeamento</h3>
              <p class="mb-4 text-base text-gray-700">Mapeamento dos processos e fluxos de trabalho.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Definição de campos</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Regras de negócio</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Fluxo de dados</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Implementação -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg">
                3
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Implementação</h3>
              <p class="mb-4 text-base text-gray-700">Desenvolvimento e testes da integração.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Desenvolvimento</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Testes unitários</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Validação</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Monitoramento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-purple-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg">
                4
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Monitoramento</h3>
              <p class="mb-4 text-base text-gray-700">Acompanhamento contínuo da integração.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Monitoramento 24/7</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Alertas automáticos</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Suporte técnico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Contato -->
    <section id="contact" class="relative py-20 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto mb-16 max-w-3xl text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Pronto para Integrar com o Pipefy?
          </h2>
          <p class="text-xl text-gray-600">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a otimizar processos com a integração Pipefy.
          </p>
        </div>

        <div class="mx-auto max-w-2xl">
          <div class="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <form class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input type="email" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">Mensagem</label>
                <textarea rows="4" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Solicitar Integração
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Componentes importados automaticamente pelo Nuxt
</script>

<style scoped>
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style> 