<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 bg-gradient-to-b to-white from-slate-50">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br rounded-full filter blur-3xl from-blue-100/20 to-purple-100/20"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full filter blur-3xl from-indigo-100/20 to-blue-100/20"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-8 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Blog & Insights
          </h1>
          <p class="mx-auto mb-12 max-w-2xl text-xl text-gray-600">
            Descubra as últimas tendências em tecnologia, automação e transformação digital
          </p>
          
          <!-- Search Bar -->
          <div class="mx-auto mb-12 max-w-2xl">
            <div class="flex items-center p-2 bg-white rounded-xl shadow-lg">
              <input 
                type="text" 
                placeholder="Buscar artigos..." 
                class="flex-1 px-4 py-2 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0"
              >
              <button class="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all duration-300 hover:shadow-lg">
                Buscar
              </button>
            </div>
          </div>
          
          <!-- Categories -->
          <div class="flex flex-wrap gap-4 justify-center">
            <button class="px-6 py-2 text-blue-600 bg-blue-50 rounded-full transition-colors hover:bg-blue-100">
              Todos
            </button>
            <button class="px-6 py-2 text-gray-600 bg-white rounded-full transition-colors hover:bg-gray-50">
              Tecnologia
            </button>
            <button class="px-6 py-2 text-gray-600 bg-white rounded-full transition-colors hover:bg-gray-50">
              Automação
            </button>
            <button class="px-6 py-2 text-gray-600 bg-white rounded-full transition-colors hover:bg-gray-50">
              Inovação
            </button>
            <button class="px-6 py-2 text-gray-600 bg-white rounded-full transition-colors hover:bg-gray-50">
              Cases
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl">
          <div class="grid grid-cols-1 items-center lg:grid-cols-2">
            <div class="p-8 lg:p-12">
              <span class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-100 rounded-full bg-blue-500/30">
                EM DESTAQUE
              </span>
              <h2 class="mb-4 text-3xl font-bold text-white">
                O Futuro da Automação Empresarial em 2024
              </h2>
              <p class="mb-8 text-blue-100">
                Descubra as principais tendências e tecnologias que estão moldando o futuro da automação empresarial e como sua empresa pode se preparar para essa transformação.
              </p>
              <div class="flex items-center mb-6">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Author" class="w-10 h-10 rounded-full">
                <div class="ml-4">
                  <p class="text-sm font-medium text-white">João Silva</p>
                  <p class="text-sm text-blue-100">12 Mar 2024 • 8 min de leitura</p>
                </div>
              </div>
              <a href="#" class="inline-flex items-center px-6 py-3 font-semibold text-blue-600 bg-white rounded-xl transition-colors hover:bg-blue-50">
                Ler Artigo
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
            <div class="relative aspect-[4/3] lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Featured Post" 
                class="object-cover w-full h-full"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-gray-50">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Blog Post Card 1 -->
          <NuxtLink :to="`/blog/como-ia-esta-revolucionando-gestao-processos`" class="block">
            <article class="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div class="relative aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Blog Post" 
                  class="object-cover w-full h-full"
                >
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                    Tecnologia
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">
                  Como a IA está Revolucionando a Gestão de Processos
                </h3>
                <p class="mb-4 text-gray-600">
                  Uma análise profunda sobre como a Inteligência Artificial está transformando a maneira como as empresas gerenciam seus processos...
                </p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" alt="Author" class="w-8 h-8 rounded-full">
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Maria Costa</p>
                      <p class="text-sm text-gray-500">10 Mar 2024</p>
                    </div>
                  </div>
                  <span class="text-sm text-gray-500">5 min de leitura</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Blog Post Card 2 -->
          <NuxtLink :to="`/blog/5-estrategias-automatizar-workflow`" class="block">
            <article class="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div class="relative aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Blog Post" 
                  class="object-cover w-full h-full"
                >
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 text-sm font-medium text-white bg-purple-600 rounded-full">
                    Automação
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">
                  5 Estratégias para Automatizar seu Workflow
                </h3>
                <p class="mb-4 text-gray-600">
                  Descubra as melhores práticas e ferramentas para automatizar seu fluxo de trabalho e aumentar a produtividade...
                </p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro" alt="Author" class="w-8 h-8 rounded-full">
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Pedro Santos</p>
                      <p class="text-sm text-gray-500">8 Mar 2024</p>
                    </div>
                  </div>
                  <span class="text-sm text-gray-500">7 min de leitura</span>
                </div>
              </div>
            </article>
          </NuxtLink>

          <!-- Blog Post Card 3 -->
          <NuxtLink :to="`/blog/case-study-transformacao-digital-industria`" class="block">
            <article class="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div class="relative aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Blog Post" 
                  class="object-cover w-full h-full"
                >
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-full">
                    Cases
                  </span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">
                  Case Study: Transformação Digital na Indústria
                </h3>
                <p class="mb-4 text-gray-600">
                  Como uma empresa tradicional conseguiu aumentar sua eficiência em 300% através da automação de processos...
                </p>
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana" alt="Author" class="w-8 h-8 rounded-full">
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Ana Oliveira</p>
                      <p class="text-sm text-gray-500">5 Mar 2024</p>
                    </div>
                  </div>
                  <span class="text-sm text-gray-500">10 min de leitura</span>
                </div>
              </div>
            </article>
          </NuxtLink>
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <nav class="flex items-center space-x-2">
            <a href="#" class="p-2 text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </a>
            <a href="#" class="px-4 py-2 text-white bg-blue-600 rounded-lg">1</a>
            <a href="#" class="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">2</a>
            <a href="#" class="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">3</a>
            <span class="px-4 py-2 text-gray-400">...</span>
            <a href="#" class="px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">8</a>
            <a href="#" class="p-2 text-gray-500 hover:text-blue-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl md:p-12">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-3xl font-bold text-white">
              Fique por dentro das novidades
            </h2>
            <p class="mb-8 text-blue-100">
              Assine nossa newsletter e receba as últimas atualizações sobre tecnologia, automação e transformação digital.
            </p>
            <form class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Seu email" 
                class="px-6 py-3 w-full text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-96"
              >
              <button type="submit" class="px-8 py-3 w-full font-semibold text-blue-600 bg-white rounded-xl transition-colors hover:bg-blue-50 sm:w-auto">
                Assinar
              </button>
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