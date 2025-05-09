<template>
  <div class="min-h-screen">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="overflow-hidden relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/20 to-indigo-100/20 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/20 to-indigo-100/20 rounded-full filter blur-3xl"></div>
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
            DESENVOLVIMENTO MOBILE
          </span>
          <h1 class="relative mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Transforme sua Ideia em um
            <span class="relative inline-block">
              <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">
                App Incrível
              </span>
              <div class="absolute -bottom-2 left-0 w-full h-3 bg-blue-100/50 rounded-full"></div>
            </span>
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            Desenvolvemos aplicativos móveis modernos e intuitivos para iOS e Android.
            Do conceito ao lançamento, criamos soluções que encantam seus usuários.
          </p>

          <!-- Cards de destaque -->
          <div class="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-blue-50 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Apps Nativos</h3>
              </div>
              <p class="text-gray-600">Aplicativos nativos de alta performance para iOS e Android.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-indigo-50 rounded-lg">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">Backend Robusto</h3>
              </div>
              <p class="text-gray-600">Infraestrutura escalável e segura para seu aplicativo.</p>
            </div>

            <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
              <div class="flex items-center mb-4">
                <div class="flex justify-center items-center mr-4 w-12 h-12 bg-blue-50 rounded-lg">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900">UX Excepcional</h3>
              </div>
              <p class="text-gray-600">Design intuitivo e experiência do usuário impecável.</p>
            </div>
          </div>

          <!-- Botões de ação -->
          <div class="flex flex-wrap gap-6 justify-center">
            <a href="#contact" class="group px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <span class="flex items-center">
                Iniciar Projeto
                <svg class="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </a>
            <a href="#features" class="group px-8 py-4 font-semibold text-blue-600 bg-white rounded-xl border-2 border-blue-600 transition-all duration-300 hover:bg-blue-50 hover:scale-105">
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

    <!-- Recursos do Desenvolvimento Mobile -->
    <section class="relative py-20 bg-white">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-blue-50/30"></div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid gap-12 items-center mb-20 lg:grid-cols-2">
          <div>
            <div class="inline-block px-3 py-1 mb-4 bg-blue-100 rounded-full shadow-sm">
              <span class="text-sm font-medium tracking-wider text-blue-600">RECURSOS AVANÇADOS</span>
            </div>
            <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Desenvolvimento Mobile de Alta Qualidade
            </h2>
            <p class="text-lg text-gray-600">
              Oferecemos soluções mobile completas e personalizadas para seu negócio.
              Do design à implementação, criamos apps que se destacam no mercado.
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
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de recursos -->
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-blue-100 rounded-xl">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Apps Nativos</h3>
            <p class="mb-4 text-gray-600">Desenvolvimento nativo para iOS e Android com performance excepcional.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Swift e Kotlin</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">UI/UX Nativo</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Alta Performance</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-indigo-100 rounded-xl">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Cross-Platform</h3>
            <p class="mb-4 text-gray-600">Desenvolvimento multiplataforma eficiente e econômico.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">React Native</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Flutter</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Código Único</span>
              </li>
            </ul>
          </div>

          <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="flex justify-center items-center mb-6 w-14 h-14 bg-blue-100 rounded-xl">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="mb-4 text-xl font-bold text-gray-900">Backend & APIs</h3>
            <p class="mb-4 text-gray-600">Infraestrutura robusta e APIs escaláveis.</p>
            <ul class="space-y-3">
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">REST APIs</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Cloud Services</span>
              </li>
              <li class="flex items-center">
                <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-600">Segurança</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Desenvolvimento -->
    <section class="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-blue-100/10"></div>
        <div class="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full filter blur-3xl bg-indigo-100/10"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-16 text-center">
          <span class="inline-block px-4 py-1 mb-8 text-sm font-semibold tracking-wider text-blue-700 bg-blue-50 rounded-full shadow-sm">
            METODOLOGIA
          </span>
          <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Como Desenvolvemos seu App
          </h2>
          <p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
            Nosso processo de desenvolvimento é estruturado para garantir qualidade,
            eficiência e resultados excepcionais
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Planejamento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                1
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Planejamento</h3>
              <p class="mb-4 text-base text-gray-700">Análise detalhada e planejamento do projeto.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Análise de Requisitos</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Arquitetura</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Cronograma</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Design -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                2
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Design</h3>
              <p class="mb-4 text-base text-gray-700">Design de interface e experiência do usuário.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Wireframes</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">UI/UX Design</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Protótipo</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Desenvolvimento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                3
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Desenvolvimento</h3>
              <p class="mb-4 text-base text-gray-700">Codificação e implementação do app.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Frontend</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Backend</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Testes</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Lançamento -->
          <div class="relative p-8 bg-white rounded-xl border border-slate-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200">
            <div class="absolute -top-4 -left-4">
              <div class="flex justify-center items-center w-16 h-16 text-2xl font-bold text-white bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                4
              </div>
            </div>
            <div class="mt-8">
              <h3 class="mb-4 text-2xl font-bold text-gray-900">Lançamento</h3>
              <p class="mb-4 text-base text-gray-700">Publicação e monitoramento do app.</p>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">App Store</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Play Store</span>
                </li>
                <li class="flex items-center">
                  <svg class="flex-shrink-0 mr-2 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-sm text-gray-600">Suporte</span>
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
            Pronto para Criar seu App?
          </h2>
          <p class="text-xl text-gray-600">
            Entre em contato conosco e descubra como podemos transformar sua ideia
            em um aplicativo de sucesso.
          </p>
        </div>

        <div class="mx-auto max-w-2xl">
          <div class="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg">
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
                <button type="submit" class="px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Iniciar Projeto
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