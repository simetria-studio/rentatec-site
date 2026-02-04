<template>
  <div>
    <NavBar />
    
    <!-- Hero Section -->
    <section class="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <!-- Elementos decorativos de fundo -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
        <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-30"></div>
        
        <!-- Padrão de grade decorativo -->
        <div class="absolute inset-0 grid-pattern opacity-5"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2 reveal-element">
            <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
              <span class="text-blue-600 text-sm font-medium tracking-wider">SISTEMA DE GESTÃO</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              X-ERP da Rentatec: <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Sua Solução Personalizada</span> para Gestão Empresarial
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              Nosso sistema integrado de Gestão Empresarial desenvolvido para atender vários tipos de empresas nos mais diversos processos.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#features" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Conheça os Diferenciais
              </a>
              <a href="#contact" class="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300">
                Solicitar Demonstração
              </a>
            </div>
          </div>
          
          <div class="md:w-1/2 reveal-element">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
              <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img src="/assets/images/x-erp-dashboard.png" alt="X-ERP Dashboard" class="w-full h-auto" />
              </div>
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 filter blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Sobre o X-ERP -->
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">SOBRE O X-ERP</span>
          </div>
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Solução Completa para <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Gestão Empresarial</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div class="reveal-element">
          <p class="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
            Oferecemos um ERP com processos precisos, capaz de gerar indicadores para embasar suas decisões. 
            Este software atende diversas empresas, abrangendo diferentes áreas:
          </p>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <NuxtLink to="/x-erp/comercial" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Comercial</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/estoque" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Estoque</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/fisco-contabil" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Fisco-contábil</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/financeiro" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Financeiro</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/projetos" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Projetos</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/informacoes-gerenciais" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Informações Gerenciais</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/gestao-pessoas" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Gestão de pessoas</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/producao" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Produção</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/relatorios" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Relatórios</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
            
            <NuxtLink to="/x-erp/vendas" class="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center cursor-pointer transform hover:scale-105">
              <h3 class="font-semibold text-gray-900 mb-2">Vendas</h3>
              <p class="text-xs text-blue-600 hover:text-blue-700">Clique para saber mais</p>
            </NuxtLink>
          </div>
          
          <p class="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            Assim, auxiliamos empresários e executivos no gerenciamento dos seus negócios e tomadas de decisão, 
            com possibilidade de customização para ajustar as melhores práticas do mercado ao seu negócio!
          </p>
        </div>
      </div>
    </section>
 
    <!-- Setores Atendidos -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">SETORES ATENDIDOS</span>
          </div>
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Atendemos diversos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">segmentos de mercado</span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-element">
          <!-- Coluna Esquerda: Lista de Setores -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button 
                @click="selectedSector = 'industria'" 
                :class="selectedSector === 'industria' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
                class="w-full px-6 py-4 text-left font-semibold transition-all duration-200 border-b border-gray-200">
                Indústria
              </button>
              
              <button 
                @click="selectedSector = 'usinagem'" 
                :class="selectedSector === 'usinagem' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
                class="w-full px-6 py-4 text-left font-semibold transition-all duration-200 border-b border-gray-200">
                Usinagem
              </button>
              
              <button 
                @click="selectedSector = 'atacado'" 
                :class="selectedSector === 'atacado' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
                class="w-full px-6 py-4 text-left font-semibold transition-all duration-200">
                Atacado
              </button>
            </div>
          </div>

          <!-- Coluna Direita: Conteúdo do Setor Selecionado -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8 min-h-[300px]">
              <!-- Conteúdo Indústria -->
              <div v-if="selectedSector === 'industria'">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Indústria</h3>
                <p class="text-gray-600 mb-6">Informações em breve</p>
                <button class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Saiba mais
                </button>
              </div>

              <!-- Conteúdo Usinagem -->
              <div v-if="selectedSector === 'usinagem'">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Usinagem</h3>
                <p class="text-gray-600 mb-6">Informações em breve</p>
                <button class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Saiba mais
                </button>
              </div>

              <!-- Conteúdo Atacado -->
              <div v-if="selectedSector === 'atacado'">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Atacado</h3>
                <p class="text-gray-600 mb-6">Informações em breve</p>
                <button class="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section id="features" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">DIFERENCIAIS</span>
          </div>
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Por que escolher o <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">X-ERP</span>?
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-element">
          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Personalização Completa</h3>
            <p class="text-gray-600">Sistema adaptável às necessidades específicas da sua empresa, com módulos customizáveis e fluxos de trabalho flexíveis.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Alta Performance</h3>
            <p class="text-gray-600">Processamento rápido de dados e interface otimizada para garantir máxima eficiência nas operações diárias.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Segurança Avançada</h3>
            <p class="text-gray-600">Proteção de dados em conformidade com as normas mais rigorosas e backup automático em nuvem.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Análises em Tempo Real</h3>
            <p class="text-gray-600">Dashboards personalizáveis e relatórios detalhados para tomada de decisões estratégicas.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Suporte Especializado</h3>
            <p class="text-gray-600">Equipe técnica dedicada e treinamento completo para sua equipe maximizar o uso do sistema.</p>
          </div>

          <div class="glass-card hover-float p-8">
            <div class="icon-wrapper w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Integração Total</h3>
            <p class="text-gray-600">Conectividade com diversos sistemas e plataformas, garantindo um fluxo de dados consistente.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Números/Estatísticas -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 reveal-element">
          <div class="counter-wrapper glass-card p-6">
            <div class="counter gradient-text text-4xl font-bold" data-target="1500">0</div>
            <p class="text-gray-600">Clientes Ativos</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6">
            <div class="counter gradient-text text-4xl font-bold" data-target="98">0</div>
            <p class="text-gray-600">% de Satisfação</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6">
            <div class="counter gradient-text text-4xl font-bold" data-target="25">0</div>
            <p class="text-gray-600">Anos no Mercado</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6">
            <div class="counter gradient-text text-4xl font-bold" data-target="10">0</div>
            <p class="text-gray-600">Países Atendidos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">DEPOIMENTOS</span>
          </div>
          <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            O que nossos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">clientes</span> dizem
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-element">
          <div class="testimonial-card neu-card p-8 hover-float">
            <div class="relative">
              <div class="text-blue-600 mb-4">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p class="text-gray-600 mb-6">"O X-ERP revolucionou nossa gestão. A facilidade de uso e a integração entre os módulos nos proporcionou um ganho significativo de produtividade."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JS
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-900">João Silva</h4>
                  <p class="text-gray-500 text-sm">Diretor Financeiro - Empresa ABC</p>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card neu-card p-8 hover-float">
            <div class="relative">
              <div class="text-blue-600 mb-4">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p class="text-gray-600 mb-6">"A implementação do X-ERP trouxe mais agilidade aos nossos processos. O suporte técnico é excelente e sempre nos atende prontamente."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  MR
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-900">Maria Rodrigues</h4>
                  <p class="text-gray-500 text-sm">CEO - Empresa XYZ</p>
                </div>
              </div>
            </div>
          </div>

          <div class="testimonial-card neu-card p-8 hover-float">
            <div class="relative">
              <div class="text-blue-600 mb-4">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p class="text-gray-600 mb-6">"Com o X-ERP, conseguimos ter uma visão completa do nosso negócio. Os relatórios gerenciais são fundamentais para nossas decisões estratégicas."</p>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PL
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-900">Pedro Lima</h4>
                  <p class="text-gray-500 text-sm">Gerente de Operações - Empresa 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 modern-gradient relative overflow-hidden">
      <div class="modern-grid-pattern absolute inset-0 opacity-10"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center reveal-element">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para transformar a gestão da sua empresa?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como o X-ERP pode otimizar seus processos e impulsionar seus resultados.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" class="modern-button px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg">
              Agendar Demonstração
            </a>
            <a href="#features" class="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Conhecer Mais
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSector: 'industria' // Setor selecionado por padrão
    }
  },
  mounted() {
    // Animação de revelação ao scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-element').forEach(el => {
      observer.observe(el);
    });

    // Animação dos contadores
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          counter.classList.add('active');
          
          const target = +counter.getAttribute('data-target');
          const duration = 2000; // 2 segundos
          const increment = target / (duration / 16); // 60fps
          
          let current = 0;
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.innerText = Math.ceil(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(counter => {
      counterObserver.observe(counter);
    });
  }
}
</script>

<style scoped>
/* Variáveis de design */
:root {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  --neu-shadow: 20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff;
  --card-border-radius: 24px;
}

/* Efeitos modernos */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--card-border-radius);
}

.neu-card {
  background: #ffffff;
  box-shadow: var(--neu-shadow);
  border-radius: var(--card-border-radius);
}

/* Animações suaves */
.hover-float {
  transition: all 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Gradientes modernos */
.modern-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
}

.gradient-border {
  position: relative;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #6366f1, #4f46e5) border-box;
  border: 2px solid transparent;
  border-radius: var(--card-border-radius);
}

/* Efeitos de texto */
.gradient-text {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Animação de revelação melhorada */
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
}

/* Grid pattern moderno */
.modern-grid-pattern {
  background-image: radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.1) 1px, transparent 0);
  background-size: 40px 40px;
}

/* Botões modernos */
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
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.modern-button:hover::before {
  transform: translateX(0);
}

/* Contador moderno */
.counter-wrapper {
  position: relative;
}

.counter {
  font-variant-numeric: tabular-nums;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Cards de depoimentos modernos */
.testimonial-card {
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  transform: rotate(45deg);
  z-index: 0;
}

/* Ícones modernos */
.icon-wrapper {
  position: relative;
  overflow: hidden;
}

.icon-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.icon-wrapper:hover::after {
  transform: translateX(0);
}

/* Animação do gradiente melhorada */
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}
</style> 