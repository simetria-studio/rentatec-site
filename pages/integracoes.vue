<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="overflow-hidden relative pt-32 pb-20 bg-gradient-to-b to-white from-slate-50">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br rounded-full filter blur-3xl from-blue-100/20 to-indigo-100/20"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full filter blur-3xl from-blue-100/20 to-indigo-100/20"></div>
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
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-blue-700 bg-blue-50 rounded-full shadow-sm">
            TRANSFORME SEU NEGÓCIO
          </span>
          <h1 class="relative mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Soluções de 
            <span class="inline-block relative">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">
                Integrações
              </span>
              <div class="absolute left-0 -bottom-2 w-full h-3 rounded-full bg-blue-100/50"></div>
            </span>
            <!-- Elementos decorativos -->
            <div class="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl"></div>
            <div class="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full opacity-70 mix-blend-multiply filter blur-xl"></div>
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Conecte seus sistemas e automatize seus processos com nossas soluções 
            personalizadas de integração. Aumente a eficiência e reduza custos operacionais.
          </p>

          <!-- Cards de destaque -->
          <div class="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-blue-50 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Automação Inteligente</h3>
              </div>
              <p class="text-gray-600">Elimine tarefas manuais e aumente a produtividade da sua equipe.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-indigo-50 rounded-lg">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Segurança Garantida</h3>
              </div>
              <p class="text-gray-600">Proteção de dados e conformidade com padrões de segurança.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-blue-50 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Escalabilidade Total</h3>
              </div>
              <p class="text-gray-600">Cresça sem limites com integrações que escalam com seu negócio.</p>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-wrap gap-6 justify-center">
            <a href="#contact" class="px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <span class="flex items-center">
                Solicitar Integração
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a href="#features" class="px-8 py-4 font-semibold text-blue-600 bg-white rounded-xl border-2 border-blue-600 transition-all duration-300 group hover:bg-blue-50 hover:scale-105">
              <span class="flex items-center">
                Conhecer Mais
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios da Integração -->
    <section class="relative py-20 bg-white">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-blue-50/30"></div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-12 items-center mb-20 lg:grid-cols-2">
          <div>
            <div class="inline-block px-3 py-1 mb-4 bg-blue-100 rounded-full shadow-sm">
              <span class="text-sm font-medium tracking-wider text-blue-600">POR QUE INTEGRAR</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Integração que Impulsiona seu Negócio
            </h2>
            <p class="text-lg text-gray-600">
              Em um mundo cada vez mais conectado, a integração entre sistemas 
              é fundamental para manter sua empresa competitiva e eficiente. 
              Nossas soluções de integração permitem que seus sistemas trabalhem 
              em harmonia, eliminando processos manuais e reduzindo erros.
            </p>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform rotate-3"></div>
            <div class="relative p-8 bg-white rounded-2xl shadow-xl">
              <div class="relative w-full h-64">
                <!-- Elementos decorativos -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                
                <!-- Ícone central -->
                <div class="flex absolute inset-0 justify-center items-center">
                  <div class="flex justify-center items-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                    <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de benefícios -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="p-8 text-center glass-card hover-float">
            <div class="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-blue-100 rounded-2xl">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Automação de Processos</h3>
            <p class="text-gray-600">Elimine tarefas manuais e repetitivas, permitindo que sua equipe foque em atividades estratégicas.</p>
          </div>

          <div class="p-8 text-center glass-card hover-float">
            <div class="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-green-100 rounded-2xl">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Redução de Erros</h3>
            <p class="text-gray-600">Minimize erros humanos e garanta a consistência dos dados entre diferentes sistemas.</p>
          </div>

          <div class="p-8 text-center glass-card hover-float">
            <div class="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-indigo-100 rounded-2xl">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Aumento de Produtividade</h3>
            <p class="text-gray-600">Acelere processos e aumente a eficiência operacional com integrações em tempo real.</p>
          </div>

          <div class="p-8 text-center glass-card hover-float">
            <div class="flex justify-center items-center mx-auto mb-6 w-16 h-16 bg-purple-100 rounded-2xl">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Economia de Recursos</h3>
            <p class="text-gray-600">Reduza custos operacionais e otimize o uso de recursos com processos automatizados.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de Integração -->
    <section class="overflow-hidden relative py-20 bg-gradient-to-b to-white from-slate-50">
      <!-- Elementos decorativos de fundo -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-slate-100/30"></div>
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-blue-100/10"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-indigo-100/10"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="inline-block px-4 py-1 mb-4 font-semibold tracking-wider text-blue-700 bg-blue-50 rounded-full shadow-sm">
            SOLUÇÕES COMPLETAS
          </span>
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Tipos de Integração
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Oferecemos soluções flexíveis e robustas para conectar seus sistemas de forma eficiente e segura
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- API Integration -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">Integração via API</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Conecte sistemas através de APIs RESTful modernas e seguras.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Comunicação HTTP/HTTPS</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Formato JSON/XML</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Autenticação OAuth/JWT</span>
              </li>
            </ul>
          </div>

          <!-- Webhooks -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">Webhooks</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Automatize ações com base em eventos em tempo real entre diferentes plataformas.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Eventos em tempo real</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Callbacks automáticos</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Notificações push</span>
              </li>
            </ul>
          </div>

          <!-- Banco de Dados -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">Banco de Dados</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Sincronização de dados entre diferentes sistemas e bancos de dados.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Migração de dados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Replicação em tempo real</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Backup automático</span>
              </li>
            </ul>
          </div>

          <!-- ERP Integration -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">Integração ERP</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Conecte seu ERP com outros sistemas e plataformas de forma seamless.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Sincronização de dados</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Automação de processos</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Relatórios unificados</span>
              </li>
            </ul>
          </div>

          <!-- E-commerce -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">E-commerce</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Integre sua loja virtual com marketplaces e sistemas de gestão.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Gestão de estoque</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Sincronização de pedidos</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Atualização de preços</span>
              </li>
            </ul>
          </div>

          <!-- CRM Integration -->
          <div class="p-8 rounded-xl border shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 border-slate-200 hover:shadow-xl hover:border-blue-200 hover:bg-white">
            <div class="flex justify-center items-center mb-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">Integração CRM</h3>
            <p class="mb-6 text-base leading-relaxed text-gray-700">Conecte seu CRM com outras ferramentas para uma visão 360° do cliente.</p>
            <ul class="space-y-4">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Gestão de leads</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Automação de marketing</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-base text-gray-700">Analytics avançado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Integração -->
    <section class="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-blue-100/10"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-indigo-100/10"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="inline-block px-4 py-1 mb-4 font-semibold tracking-wider text-blue-700 bg-blue-50 rounded-full shadow-sm">
            METODOLOGIA
          </span>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Como Realizamos sua Integração
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Nosso processo estruturado garante uma integração eficiente e bem-sucedida, 
            adaptada às necessidades específicas do seu negócio
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Análise -->
          <div class="relative p-8 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                1
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Análise</h3>
              <p class="mb-4 text-base text-gray-700">Avaliação detalhada dos sistemas e requisitos de integração.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Levantamento técnico</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Análise de viabilidade</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Definição de escopo</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Planejamento -->
          <div class="relative p-8 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                2
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Planejamento</h3>
              <p class="mb-4 text-base text-gray-700">Definição da estratégia e arquitetura de integração.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Escolha de tecnologias</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Definição de cronograma</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Alocação de recursos</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Desenvolvimento -->
          <div class="relative p-8 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                3
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Desenvolvimento</h3>
              <p class="mb-4 text-base text-gray-700">Implementação das integrações com testes contínuos.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Codificação segura</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Testes unitários</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Validação contínua</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Monitoramento -->
          <div class="relative p-8 bg-white rounded-xl border shadow-lg transition-all duration-300 border-slate-200 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                4
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Monitoramento</h3>
              <p class="mb-4 text-base text-gray-700">Acompanhamento e suporte contínuo pós-implantação.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Análise de performance</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Manutenção preventiva</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Suporte especializado</span>
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
            Pronto para Integrar seus Sistemas?
          </h2>
          <p class="text-xl text-gray-600">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a alcançar mais eficiência através de integrações inteligentes.
          </p>
        </div>

        <div class="mx-auto max-w-2xl">
          <div class="p-8 rounded-2xl glass-card">
            <form class="space-y-6">
              <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input type="email" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-700">Mensagem</label>
                <textarea rows="4" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
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
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

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