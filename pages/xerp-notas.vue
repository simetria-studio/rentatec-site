<template>
  <div class="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-gray-100">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -mr-64 -mt-64"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="reveal-element">
          <div class="inline-flex items-center px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-md text-blue-700 text-sm font-bold mb-6 border border-blue-200/50 uppercase tracking-wider shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
            ✨ Automação Fiscal e Tributária
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 lg:px-20">
            A Era da <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">Gestão Fiscal Autônoma</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Elimine gargalos operacionais e erros de digitação com <strong class="text-slate-900">Inteligência Artificial avançada</strong>. Nossa IA captura, audita e integra <strong class="text-slate-900">100% dos seus documentos fiscais</strong> diretamente ao ERP, garantindo compliance e produtividade em tempo real.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 px-4">
            <a href="#contact" class="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-600/30 hover:shadow-2xl hover:shadow-orange-600/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 text-center overflow-hidden">
              <span class="relative z-10">Solicitar Demonstração</span>
              <div class="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a href="#features" class="group w-full sm:w-auto px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-2xl hover:bg-slate-900 hover:text-white transition-all duration-500 transform hover:-translate-y-1 text-center relative overflow-hidden">
              <span class="relative z-10">Como funciona?</span>
              <div class="absolute inset-0 bg-slate-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left -z-10"></div>
            </a>
          </div>
        </div>

        <!-- Dashboard Image -->
        <div class="reveal-element mx-auto max-w-5xl px-2">
          <div class="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden group bg-white">
            <img src="~/assets/images/dashinicial.png" alt="XERP Notas Dashboard" class="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Section - Liquid Glass 2026 -->
    <section class="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <!-- Metric 1 - Orange -->
          <div class="liquid-glass-card group relative p-8 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl shadow-orange-500/5 hover:shadow-orange-500/20 hover:-translate-y-3 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-1 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full group-hover:h-20 transition-all duration-500"></div>
                <div>
                  <div class="text-6xl font-black bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">98%</div>
                </div>
              </div>
              <p class="text-xs uppercase tracking-wider font-bold text-slate-600 leading-relaxed">Redução de Processo Manual</p>
            </div>
          </div>

          <!-- Metric 2 - Blue -->
          <div class="liquid-glass-card group relative p-8 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/20 hover:-translate-y-3 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full group-hover:h-20 transition-all duration-500"></div>
                <div>
                  <div class="text-6xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">Zero</div>
                </div>
              </div>
              <p class="text-xs uppercase tracking-wider font-bold text-slate-600 leading-relaxed">Inconsistência de Dados</p>
            </div>
          </div>

          <!-- Metric 3 - Slate -->
          <div class="liquid-glass-card group relative p-8 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl shadow-slate-500/5 hover:shadow-slate-500/20 hover:-translate-y-3 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-1 h-16 bg-gradient-to-b from-slate-700 to-slate-900 rounded-full group-hover:h-20 transition-all duration-500"></div>
                <div>
                  <div class="text-5xl font-black bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">Real-time</div>
                </div>
              </div>
              <p class="text-xs uppercase tracking-wider font-bold text-slate-600 leading-relaxed">Atualização do ERP</p>
            </div>
          </div>

          <!-- Metric 4 - Green -->
          <div class="liquid-glass-card group relative p-8 rounded-3xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl shadow-green-500/5 hover:shadow-green-500/20 hover:-translate-y-3 transition-all duration-700">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-1 h-16 bg-gradient-to-b from-green-500 to-green-600 rounded-full group-hover:h-20 transition-all duration-500"></div>
                <div>
                  <div class="text-6xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">100%</div>
                </div>
              </div>
              <p class="text-xs uppercase tracking-wider font-bold text-slate-600 leading-relaxed">Segurança Fiscal</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Features -->
    <section id="features" class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-md text-orange-700 text-sm font-bold mb-6 border border-orange-200/50 uppercase tracking-wider shadow-lg shadow-orange-500/10">
            🚀 Recursos Inteligentes
          </div>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Inteligência Aplicada ao seu Negócio
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Desenvolvemos funcionalidades específicas para otimizar cada etapa do seu fluxo de entrada de notas.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 reveal-element">
          <!-- Item 1 - Captura via IA -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-orange-50/30 rounded-3xl border border-orange-100/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-orange-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">Captura via IA (OCR)</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">Nossa Inteligência Artificial interpreta PDFs de serviços, comunicações e energia, convertendo dados não estruturados em informações prontas para o ERP.</p>
            </div>
          </div>

          <!-- Item 2 - Monitoramento Oficial -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-blue-50/30 rounded-3xl border border-blue-100/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Monitoramento Oficial</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">Conexão nativa com SEFAZ e centenas de prefeituras para busca automática de NF-e, CT-e e NFS-e, eliminando a dependência do fornecedor.</p>
            </div>
          </div>

          <!-- Item 3 - Conciliação de Pedidos -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-slate-50/30 rounded-3xl border border-slate-200/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-slate-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">Conciliação de Pedidos</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">Associe automaticamente as notas fiscais às Ordens de Compra (OC), validando preços, quantidades e impostos de forma instantânea.</p>
            </div>
          </div>

          <!-- Item 4 - Manifestação de Documentos -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-green-50/30 rounded-3xl border border-green-100/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-green-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors duration-300">Manifestação de Documentos</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">O X-ERP Notas também realiza manifestação dos documentos, garantindo ciência e confirmação de operações com total conformidade fiscal.</p>
            </div>
          </div>

          <!-- Item 5 - Busca Avançada -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-purple-50/30 rounded-3xl border border-purple-100/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">Busca Avançada</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">Localize rapidamente notas por modelo, CNPJ emitente, nome do emitente, número da nota e chave do documento eletrônico.</p>
            </div>
          </div>

          <!-- Item 6 - Validação Multi-Setorial -->
          <div class="feature-card group relative p-8 bg-gradient-to-br from-white to-indigo-50/30 rounded-3xl border border-indigo-100/50 backdrop-blur-sm overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-indigo-500/30 transition-all duration-500">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">Validação Multi-Setorial</h3>
              <p class="text-slate-600 leading-relaxed text-[15px]">Processo de validação integrado entre setores de Compras, Fiscal, Financeiro e Recebimento, garantindo aprovação coordenada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md text-blue-700 text-sm font-bold mb-6 border border-blue-200/50 uppercase tracking-wider shadow-lg shadow-blue-500/10">
            💎 Planos Flexíveis
          </div>
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Escolha o Plano Ideal para sua Empresa
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Todas as funcionalidades essenciais incluídas. Escale conforme seu negócio cresce.</p>
        </div>

        <!-- Pricing Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal-element">
          
          <!-- Plano Básico -->
          <div class="relative bg-white rounded-3xl border-2 border-slate-200 p-8 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-2">Básico</h3>
              <p class="text-sm text-slate-500">Ideal para pequenos negócios</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-5xl font-extrabold text-slate-900">R$ 120</span>
              </div>
              <p class="text-sm text-slate-500 font-medium">por mês</p>
              <p class="text-xs text-slate-400 mt-2">CNPJ Matriz</p>
              <p class="text-xs text-blue-600 font-semibold mt-1">+ R$ 65/mês por filial</p>
            </div>

            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">1.000</strong> documentos fiscais/mês</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">10</strong> importações IA</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Auditoria automática</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Integração ERP <span class="text-slate-500">(requer setup)</span></span>
              </li>
            </ul>

            <a href="#contact" class="w-full py-3.5 px-6 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all duration-300 text-center block">
              Começar Agora
            </a>
          </div>

          <!-- Plano Intermediário - POPULAR -->
          <div class="relative bg-gradient-to-b from-orange-50 to-white rounded-3xl border-2 border-orange-400 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col transform lg:scale-105">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
              Mais Popular
            </div>
            
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-2">Intermediário</h3>
              <p class="text-sm text-slate-600">Para empresas em crescimento</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">R$ 300</span>
              </div>
              <p class="text-sm text-slate-600 font-medium">por mês</p>
              <p class="text-xs text-slate-500 mt-2">CNPJ Matriz</p>
              <p class="text-xs text-orange-600 font-semibold mt-1">+ R$ 65/mês por filial</p>
            </div>

            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">1.001 a 5.000</strong> documentos/mês</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">25</strong> importações IA</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Auditoria automática</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Integração ERP <span class="text-slate-500">(requer setup)</span></span>
              </li>
            </ul>

            <a href="#contact" class="w-full py-3.5 px-6 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all duration-300 text-center block">
              Começar Agora
            </a>
          </div>

          <!-- Plano Avançado -->
          <div class="relative bg-white rounded-3xl border-2 border-slate-200 p-8 hover:border-slate-300 transition-all duration-300 hover:shadow-xl flex flex-col">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-slate-900 mb-2">Avançado</h3>
              <p class="text-sm text-slate-500">Recursos completos e escaláveis</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-5xl font-extrabold text-slate-900">R$ 500</span>
              </div>
              <p class="text-sm text-slate-500 font-medium">por mês</p>
              <p class="text-xs text-slate-400 mt-2">CNPJ Matriz</p>
              <p class="text-xs text-slate-600 font-semibold mt-1">+ R$ 65/mês por filial</p>
            </div>

            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">5.001 a 10.000</strong> documentos/mês</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700"><strong class="font-semibold text-slate-900">50</strong> importações IA</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Auditoria automática</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-slate-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-700">Integração ERP <span class="text-slate-500">(requer setup)</span></span>
              </li>
            </ul>

            <a href="#contact" class="w-full py-3.5 px-6 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all duration-300 text-center block">
              Começar Agora
            </a>
          </div>

          <!-- Plano Corporativo -->
          <div class="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border-2 border-slate-700 p-8 hover:border-slate-600 transition-all duration-300 hover:shadow-xl flex flex-col text-white">
            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-2" style="color: #fff;">Corporativo</h3>
              <p class="text-sm text-slate-400">Solução customizada para sua empresa</p>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="text-4xl font-extrabold">Sob Consulta</span>
              </div>
            </div>

            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-300"><strong class="font-semibold text-white">Acima de 10.000</strong> documentos/mês</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-300">Tudo do plano Avançado</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-300">Customizações exclusivas</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-sm text-slate-300">SLA garantido</span>
              </li>
            </ul>

            <a href="#contact" class="w-full py-3.5 px-6 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 text-center block">
              Falar com Vendas
            </a>
          </div>

        </div>

        <!-- Additional Info -->
        <div class="mt-12 reveal-element">
          <div class="bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8">
            <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-slate-600 font-medium">Documento adicional importado</p>
                  <p class="text-2xl font-extrabold text-slate-900">R$ 2,90 <span class="text-sm font-normal text-slate-500">por documento</span></p>
                </div>
              </div>
              <div class="hidden md:block w-px h-12 bg-slate-300"></div>
              <div class="text-sm text-slate-600">
                <p class="font-semibold text-slate-900">Aplicável a todos os planos</p>
                <p>Escale conforme sua necessidade</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="mt-12 text-center reveal-element">
          <div class="flex flex-wrap justify-center items-center gap-6 text-slate-600">
            <div class="flex items-center gap-2 group">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span class="text-sm font-medium">Cancele quando quiser</span>
            </div>
            <div class="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
            <div class="flex items-center gap-2 group">
              <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <span class="text-sm font-medium">Suporte técnico incluso</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Operations Section -->
    <section class="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-element">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md text-blue-300 text-sm font-bold mb-6 border border-blue-400/30">
              📈 Gestão Inteligente
            </div>
            <h2 class="text-3xl md:text-5xl font-extrabold mb-8 leading-tight" style="color: #fff;">
              Visibilidade Total para a <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Tomada de Decisão</span>
            </h2>
            <div class="space-y-6">
              <div class="group flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div class="flex-shrink-0 w-8 h-8 mt-0.5">
                  <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2 group-hover:text-blue-300 transition-colors" style="color: #fff;">Auditoria de Divergências</h4>
                  <p class="text-slate-400 leading-relaxed">Identificamos discrepâncias em alíquotas de impostos e valores, alertando o gestor antes da integração financeira.</p>
                </div>
              </div>
              <div class="group flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div class="flex-shrink-0 w-8 h-8 mt-0.5">
                  <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2 group-hover:text-green-300 transition-colors" style="color: #fff;">Manifestação do Destinatário</h4>
                  <p class="text-slate-400 leading-relaxed">Realize a ciência da emissão e confirmação da operação diretamente pelo sistema, garantindo segurança jurídica.</p>
                </div>
              </div>
              <div class="group flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div class="flex-shrink-0 w-8 h-8 mt-0.5">
                  <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors" style="color: #fff;">Rastreabilidade Completa</h4>
                  <p class="text-slate-400 leading-relaxed">Saiba exatamente quem aprovou, quando integrou e quais alterações foram feitas em cada documento fiscal.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Visual Placeholder -->
          <div class="reveal-element lg:pl-10">
            <div class="group rounded-3xl border-2 border-slate-700/50 shadow-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500">
              <img src="~/assets/images/listagem.png" alt="XERP Notas Listagem" class="w-full h-auto opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Contact Section -->
    <section id="contact" class="py-24 bg-white relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
            Vamos conversar sobre o seu projeto
          </h2>
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            Estamos prontos para ajudar a transformar sua empresa com soluções tecnológicas inovadoras. Entre em contato conosco hoje mesmo para agendar sua demonstração do XERP Notas!
          </p>
        </div>

        <!-- Pipefy Form Embed -->
        <div class="reveal-element w-full bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl">
          <iframe 
            src="https://app.pipefy.com/public/form/kDESehIn?origem=1044463398&o_que_voc_gostaria_de_ajuda_para_sua_empresa=Gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20X-ERP%20Notas&embedded=true" 
            frameborder="0" 
            width="100%" 
            height="800" 
            class="w-full"
          ></iframe>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'XERP Notas - Automação e Auditoria Fiscal Inteligente | Rentatec',
      meta: [
        { hid: 'description', name: 'description', content: 'Transforme seu departamento fiscal com o XERP Notas. Capture NF-e, CT-e e NFS-e automaticamente, audite impostos e integre tudo ao seu ERP sem redigitação manual.' }
      ]
    }
  },
  mounted() {
    // Reveal animations on scroll
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
  }
}
</script>

<style scoped>
.reveal-element {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
}

.font-sans {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Feature Cards - 2026 Design Trends */
.feature-card {
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 
    0 20px 40px -12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.feature-card:hover::before {
  opacity: 1;
}

/* Smooth backdrop blur effect */
@supports (backdrop-filter: blur(10px)) {
  .feature-card {
    backdrop-filter: blur(10px);
  }
  
  .feature-card:hover {
    backdrop-filter: blur(20px);
  }
}

/* Metric Cards - 2026 Design */
.metric-card {
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.metric-card:hover {
  box-shadow: 
    0 20px 40px -12px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

/* Liquid Glass Cards - Ultra Modern 2026 */
.liquid-glass-card {
  position: relative;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
}

.liquid-glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  padding: 1px;
  background: linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.8) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.7s ease;
  pointer-events: none;
}

.liquid-glass-card:hover::before {
  opacity: 1;
}

@supports (backdrop-filter: blur(24px)) {
  .liquid-glass-card {
    backdrop-filter: blur(24px) saturate(180%);
  }
  
  .liquid-glass-card:hover {
    backdrop-filter: blur(32px) saturate(200%);
  }
}
</style>
