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
            <span class="text-gray-900 font-medium" itemprop="name">Módulo Comercial</span>
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
            <span class="text-blue-600 text-sm font-medium tracking-wider">MÓDULO COMERCIAL</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Sistema <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Comercial</span> Completo
          </h1>
          
          <!-- Resumo Executivo para IA -->
          <div class="max-w-4xl mx-auto mb-8">
            <p class="text-xl text-gray-600 mb-4">
              Gestão completa do ciclo comercial: pedidos, faturamento, notas fiscais, comissões e análise de vendas. Tudo integrado para impulsionar seus resultados.
            </p>
            <p class="text-base text-gray-500">
              <strong>Principais recursos:</strong> 13 funcionalidades integradas incluindo gestão de pedidos (PDV, atacado, móvel), emissão de NF-e/NFS-e/CT-e, CRM completo, controle de comissões, tabela de preços dinâmica e integração com SPC Brasil.
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
            Interface intuitiva e moderna para gestão completa do seu negócio
          </p>
          <p class="text-sm text-blue-600 font-semibold">
            {{ funcionalidades.length }} funcionalidades disponíveis
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
                <div v-else class="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                </div>
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
                <video 
                  v-else
                  :src="`/assets/images/${funcionalidades[funcionalidadeAtual].midia}`"
                  controls
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
          <div class="glass-card hover-float p-8 relative">
            <div class="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ⭐ DESTAQUE
            </div>
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">📦 Pedidos</h3>
            <p class="text-gray-600">Plataforma completa para gerenciar diversos tipos de pedidos: pré-vendas, PDV, atacado, móvel, shopping e mais. Integração com pedidos móveis e recuperação de pedidos perdidos.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Faturamento</h3>
            <p class="text-gray-600">Simplifica todo o ciclo de vendas, desde orçamentos até notas fiscais. Gestão completa de pedidos, clientes e itens com conversão rápida em pedidos e controle de entrega.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Comissões</h3>
            <p class="text-gray-600">Gerenciamento e cálculo de comissões com configurações flexíveis, redução por desconto e listagem detalhada. Totalizador de comissões apresenta resumo consolidado.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Nota Fiscal Eletrônica</h3>
            <p class="text-gray-600">Emissão e gestão de NF-e com movimentação, cancelamento, carta de correção e geração de XML. Atualização automática do certificado digital e conformidade fiscal.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Crédito e Cobrança</h3>
            <p class="text-gray-600">Solução completa para operações financeiras de crédito e cobrança. Aprovação de pedidos, classificação de risco e integração com SPC Brasil para análise de crédito.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Meta de Vendas</h3>
            <p class="text-gray-600">Definição e gerenciamento de metas com configuração flexível, cópia entre períodos e acompanhamento em tempo real. Visão clara do desempenho em relação aos objetivos.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Fretes e Carretos</h3>
            <p class="text-gray-600">Gestão completa de operações logísticas com recebimento de notas, listagem de veículos e conhecimentos. Controle de manifestos e tabela de preços de fretes.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">CT-e (Conhecimento de Transporte Eletrônico)</h3>
            <p class="text-gray-600">Solução completa para transporte de cargas eletrônico com seleção de notas, manifesto eletrônico e geração de XML. Integração com entidades fiscais e relatórios detalhados.</p>
          </div>

          <div class="glass-card hover-float p-8 relative">
            <div class="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              ⭐ DESTAQUE
            </div>
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">📄 NFS-e (Nota Fiscal de Serviços)</h3>
            <p class="text-gray-600">Emissão e gestão de NFS-e com movimentação eletrônica e importação de arquivos. Interface intuitiva para facilitar o processo com automação e conformidade fiscal.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Relacionamento com o Cliente (CRM)</h3>
            <p class="text-gray-600">Plataforma completa com painel SAC, monitoramento de ramais, gestão de contatos, SMS e agenda integrada. Separação eficiente de clientes e pedidos com relatórios de consulta.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Serviços e Contratos de Locação</h3>
            <p class="text-gray-600">Gestão completa de contratos e locações com lançamento de leituras, acompanhamento e relatórios mensais. Controle detalhado das operações de locação de equipamentos.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Tabela de Preços</h3>
            <p class="text-gray-600">Solução completa para gerenciar preços com múltiplas tabelas, reajustes, programação de alterações e descontos por produto. Cálculo automático de preço de custo e venda.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section id="benefits" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefícios do Módulo <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Comercial</span>
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
              <h3 class="text-lg font-bold text-gray-900 mb-2">Processos Automatizados</h3>
              <p class="text-gray-600">Automatização completa do faturamento, desde orçamentos até emissão de notas fiscais, reduzindo tempo e erros operacionais.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Conformidade Fiscal Garantida</h3>
              <p class="text-gray-600">Emissão de NF-e, NFS-e e CT-e com atualização automática de certificados digitais e total conformidade com legislação.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Gestão Integrada</h3>
              <p class="text-gray-600">Integração completa entre pedidos, estoque, financeiro e logística, proporcionando visão unificada do negócio.</p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Análise de Crédito Integrada</h3>
              <p class="text-gray-600">Consulta ao SPC Brasil e classificação de risco automatizada para aprovação segura de pedidos e gestão de crédito.</p>
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
            Pronto para otimizar sua gestão comercial?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração e veja como o módulo Comercial pode transformar seus resultados.
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
    id: 'pedidos',
    titulo: 'Gestão de Pedidos',
    descricao: 'Rastreamento completo de pedidos em tempo real com filtros avançados',
    tipo: 'imagem',
    midia: 'tela-pedidos.png',
    icone: '📦'
  },
  {
    id: 'nfe',
    titulo: 'Gestão de NF-e',
    descricao: 'Emissão e gestão de Notas Fiscais Eletrônicas com movimentação e controle detalhado',
    tipo: 'imagem',
    midia: 'tela-nfe.png',
    icone: '📋'
  }
  // ADICIONE MAIS FUNCIONALIDADES AQUI!
  // Exemplo de vídeo:
  // {
  //   id: 'crm-demo',
  //   titulo: 'CRM em Ação',
  //   descricao: 'Demonstração do módulo CRM',
  //   tipo: 'video',
  //   midia: 'crm-demo.mp4',
  //   icone: '🎥'
  // }
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
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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

/* Screenshot Section Styles */
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
