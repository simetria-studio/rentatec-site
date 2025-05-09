<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="overflow-hidden relative pt-32 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-amber-100/20 to-yellow-100/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-100/20 to-yellow-100/20 rounded-full filter blur-3xl"></div>
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
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-amber-700 bg-amber-50 rounded-full shadow-sm">
            BEEQUEST
          </span>
          <h1 class="relative mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Automatize seus
            <span class="relative inline-block">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500 animate-gradient-x">
                Processos de Negócio
              </span>
              <div class="absolute -bottom-2 left-0 w-full h-3 bg-amber-100/50 rounded-full"></div>
            </span>
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Transforme a gestão do seu negócio com nossa plataforma inteligente.
            Automatize processos, aumente a produtividade e tome decisões baseadas em dados.
          </p>

          <!-- Cards de destaque -->
          <div class="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-amber-50 rounded-lg">
                  <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Automação Inteligente</h3>
              </div>
              <p class="text-gray-600">Automatize tarefas repetitivas e processos complexos com facilidade.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-yellow-50 rounded-lg">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Análise de Dados</h3>
              </div>
              <p class="text-gray-600">Insights poderosos para tomar decisões estratégicas baseadas em dados.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-amber-50 rounded-lg">
                  <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Gestão Colaborativa</h3>
              </div>
              <p class="text-gray-600">Trabalhe em equipe com ferramentas colaborativas integradas.</p>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-wrap gap-6 justify-center">
            <a href="#contact" class="group px-8 py-4 font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span class="flex items-center">
                Começar Agora
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a href="#features" class="group px-8 py-4 font-semibold text-amber-600 bg-white rounded-xl border-2 border-amber-600 transition-all duration-300 hover:bg-amber-50 hover:scale-105">
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

    <!-- Recursos do Beequest -->
    <section class="relative py-20 bg-white">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-amber-50/30"></div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-12 items-center mb-20 lg:grid-cols-2">
          <div>
            <div class="inline-block px-3 py-1 mb-4 bg-amber-100 rounded-full shadow-sm">
              <span class="text-sm font-medium tracking-wider text-amber-600">RECURSOS AVANÇADOS</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Potencialize sua Gestão com o Beequest
            </h2>
            <p class="text-lg text-gray-600">
              Nossa plataforma oferece recursos avançados para automatizar e otimizar
              seus processos de negócio, aumentando a eficiência operacional.
            </p>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl transform rotate-3"></div>
            <div class="relative p-8 bg-white rounded-2xl shadow-xl">
              <div class="relative w-full h-64">
                <!-- Elementos decorativos -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                
                <!-- Ícone central -->
                <div class="flex absolute inset-0 justify-center items-center">
                  <div class="flex justify-center items-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                    <svg class="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de recursos -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-amber-100 rounded-xl">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Automação de Processos</h3>
            <p class="mb-4 text-gray-600">Automatize fluxos de trabalho complexos com facilidade.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Fluxos personalizados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Regras de negócio</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Gatilhos automáticos</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-yellow-100 rounded-xl">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Análise e Relatórios</h3>
            <p class="mb-4 text-gray-600">Insights detalhados e relatórios personalizados.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Dashboards em tempo real</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">KPIs personalizados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Exportação de dados</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-amber-100 rounded-xl">
              <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Gestão de Equipes</h3>
            <p class="mb-4 text-gray-600">Ferramentas colaborativas para sua equipe.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Controle de acesso</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Comunicação integrada</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Gestão de tarefas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Implementação -->
    <section class="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-amber-100/10"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-yellow-100/10"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-amber-700 bg-amber-50 rounded-full shadow-sm">
            IMPLEMENTAÇÃO SIMPLIFICADA
          </span>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Como Implementamos o Beequest
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Nossa metodologia garante uma implementação rápida e eficiente,
            permitindo que você comece a otimizar seus processos em poucos dias
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Análise -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl shadow-lg">
                1
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Análise</h3>
              <p class="mb-4 text-base text-gray-700">Análise detalhada dos seus processos atuais.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Mapeamento de processos</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Identificação de gargalos</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Definição de objetivos</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Configuração -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl shadow-lg">
                2
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Configuração</h3>
              <p class="mb-4 text-base text-gray-700">Configuração personalizada da plataforma.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Personalização</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Integração</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Automação</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Treinamento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl shadow-lg">
                3
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Treinamento</h3>
              <p class="mb-4 text-base text-gray-700">Capacitação completa da sua equipe.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Workshops</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Material didático</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Suporte contínuo</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Acompanhamento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-amber-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl shadow-lg">
                4
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Acompanhamento</h3>
              <p class="mb-4 text-base text-gray-700">Monitoramento contínuo e otimização.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Monitoramento 24/7</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Otimização contínua</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Relatórios periódicos</span>
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
            Pronto para Otimizar seus Processos?
          </h2>
          <p class="text-xl text-gray-600">
            Entre em contato conosco e descubra como o Beequest pode transformar
            a gestão do seu negócio.
          </p>
        </div>

        <div class="mx-auto max-w-2xl">
          <div class="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
            <form class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input type="email" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">Mensagem</label>
                <textarea rows="4" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="px-8 py-4 font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Começar Agora
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