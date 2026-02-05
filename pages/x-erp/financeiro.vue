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

    <!-- Galeria de Funcionalidades -->
    <section class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja o Sistema em <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Ação</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Interface intuitiva e moderna para gestão completa das finanças
          </p>
          <p class="text-sm text-blue-600 font-semibold">
            {{ funcionalidades.length }} funcionalidade{{ funcionalidades.length > 1 ? 's' : '' }} disponível{{ funcionalidades.length > 1 ? 'is' : '' }}
          </p>
        </div>

        <!-- Grid de Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div 
            v-for="func in funcionalidades" 
            :key="func.id"
            @click="abrirModal(func.id)"
            class="gallery-card cursor-pointer"
          >
            <div class="gallery-card-inner">
              <div class="gallery-thumbnail">
                <img 
                  v-if="func.tipo === 'imagem'"
                  :src="`/assets/images/${func.midia}`" 
                  :alt="func.titulo"
                  class="w-full h-48 object-cover"
                />
                <div class="gallery-overlay">
                  <div class="text-white text-center">
                    <div class="text-4xl mb-2">{{ func.icone }}</div>
                    <p class="text-sm font-semibold">Clique para visualizar</p>
                  </div>
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-bold text-gray-900 mb-2">{{ func.titulo }}</h3>
                <p class="text-sm text-gray-600">{{ func.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal/Lightbox -->
    <Teleport to="body">
      <Transition name="modal">
        <div 
          v-if="modalAberto" 
          class="modal-backdrop"
          @click.self="fecharModal"
        >
          <div class="modal-container">
            <button 
              @click="fecharModal"
              class="modal-close"
              aria-label="Fechar"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <button 
              v-if="funcionalidadeAtual > 0"
              @click="navegarAnterior"
              class="modal-nav modal-nav-prev"
              aria-label="Anterior"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <button 
              v-if="funcionalidadeAtual < funcionalidades.length - 1"
              @click="navegarProximo"
              class="modal-nav modal-nav-next"
              aria-label="Próximo"
            >
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <div class="modal-content">
              <div v-if="funcionalidades[funcionalidadeAtual]" class="modal-media">
                <img 
                  v-if="funcionalidades[funcionalidadeAtual].tipo === 'imagem'"
                  :src="`/assets/images/${funcionalidades[funcionalidadeAtual].midia}`"
                  :alt="funcionalidades[funcionalidadeAtual].titulo"
                  class="max-w-full max-h-[80vh] mx-auto rounded-lg shadow-2xl"
                />
                
                <div class="modal-info">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-2xl font-bold text-white mb-2">
                        {{ funcionalidades[funcionalidadeAtual].icone }} {{ funcionalidades[funcionalidadeAtual].titulo }}
                      </h3>
                      <p class="text-blue-100">{{ funcionalidades[funcionalidadeAtual].descricao }}</p>
                    </div>
                    <div class="text-white text-sm">
                      {{ funcionalidadeAtual + 1 }} / {{ funcionalidades.length }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Webinar Section -->
    <section class="py-12 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="glass-card p-8 md:p-12 text-center">
          <div class="inline-block px-3 py-1 rounded-full bg-indigo-100 mb-4">
            <span class="text-indigo-600 text-sm font-medium tracking-wider">WEBINAR EXCLUSIVO</span>
          </div>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Funcionalidades | Gestão de Contratos e Contas a Receber
          </h3>
          <p class="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Aprenda como utilizar as funcionalidades de Gestão de Contratos e Contas a Receber no módulo Financeiro e otimize sua gestão financeira.
          </p>
          <a 
            href="https://www.youtube.com/watch?v=hh3XQ7pOgkg&t" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Assistir ao Webinar
          </a>
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
import { ref, onMounted, onUnmounted } from 'vue'

// Array de funcionalidades - FÁCIL ADICIONAR NOVAS!
const funcionalidades = ref([
  {
    id: 'contas-pagar',
    titulo: 'Contas a Pagar e Receber',
    descricao: 'Gestão completa com filtros avançados, conciliação bancária e controle total de pagamentos e recebimentos',
    tipo: 'imagem',
    midia: 'tela-contas-pagar.png',
    icone: '💰'
  }
])

const modalAberto = ref(false)
const funcionalidadeAtual = ref(0)

const abrirModal = (id) => {
  const index = funcionalidades.value.findIndex(f => f.id === id)
  if (index !== -1) {
    funcionalidadeAtual.value = index
    modalAberto.value = true
    document.body.style.overflow = 'hidden'
  }
}

const fecharModal = () => {
  modalAberto.value = false
  document.body.style.overflow = ''
}

const navegarProximo = () => {
  if (funcionalidadeAtual.value < funcionalidades.value.length - 1) {
    funcionalidadeAtual.value++
  }
}

const navegarAnterior = () => {
  if (funcionalidadeAtual.value > 0) {
    funcionalidadeAtual.value--
  }
}

// Navegação por teclado
const handleKeydown = (e) => {
  if (!modalAberto.value) return
  
  if (e.key === 'Escape') {
    fecharModal()
  } else if (e.key === 'ArrowRight') {
    navegarProximo()
  } else if (e.key === 'ArrowLeft') {
    navegarAnterior()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

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

/* Gallery & Screenshot Section Styles */
.gallery-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.gallery-card-inner {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-thumbnail {
  position: relative;
  overflow: hidden;
  background: #f3f4f6;
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(79, 70, 229, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

/* Modal Styles */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 1400px;
}

.modal-close {
  position: absolute;
  top: -3rem;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
}

.modal-nav-prev {
  left: -4rem;
}

.modal-nav-next {
  right: -4rem;
}

.modal-content {
  background: transparent;
}

.modal-media {
  position: relative;
}

.modal-info {
  margin-top: 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(79, 70, 229, 0.95) 100%);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(12px);
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container {
  transform: scale(0.9);
  opacity: 0;
}

.modal-leave-to .modal-container {
  transform: scale(0.9);
  opacity: 0;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .modal-nav-prev {
    left: 0.5rem;
  }
  
  .modal-nav-next {
    right: 0.5rem;
  }
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 1rem;
  }
  
  .modal-nav {
    width: 44px;
    height: 44px;
  }
  
  .modal-nav-prev {
    left: 0.25rem;
  }
  
  .modal-nav-next {
    right: 0.25rem;
  }
  
  .modal-close {
    top: auto;
    bottom: -3rem;
    right: 50%;
    transform: translateX(50%);
  }
  
  .modal-info {
    padding: 1rem;
  }
  
  .modal-info h3 {
    font-size: 1.25rem;
  }
}
</style>
```
