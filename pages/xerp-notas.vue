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
          <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100 uppercase tracking-wider">
            Automação Fiscal e Tributária
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 lg:px-20">
            A Era da <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Gestão Fiscal Autônoma</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Elimine gargalos operacionais e erros de digitação. Nossa tecnologia captura, audita e integra <strong>100% dos seus documentos fiscais</strong> diretamente ao ERP, garantindo compliance e produtividade em tempo real.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 px-4">
            <a href="#contact" class="w-full sm:w-auto px-10 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-xl shadow-orange-600/20 hover:bg-orange-700 transition-all duration-300 transform hover:-translate-y-1 text-center">
              Solicitar Demonstração
            </a>
            <a href="#features" class="w-full sm:w-auto px-10 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 text-center">
              Como funciona?
            </a>
          </div>
        </div>

        <!-- Dashboard Placeholder UI -->
        <div class="reveal-element mx-auto max-w-5xl px-2">
          <div class="aspect-video bg-slate-50 rounded-2xl border border-slate-200 shadow-2xl flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100 opacity-50"></div>
            <!-- UI Schematic -->
            <div class="w-full h-full flex flex-col gap-4 md:gap-6 opacity-30">
              <div class="h-6 md:h-8 w-1/4 bg-slate-200 rounded-md"></div>
              <div class="grid grid-cols-3 gap-2 md:gap-4">
                <div class="h-20 md:h-32 bg-slate-200 rounded-xl"></div>
                <div class="h-20 md:h-32 bg-slate-200 rounded-xl"></div>
                <div class="h-20 md:h-32 bg-slate-200 rounded-xl"></div>
              </div>
              <div class="flex-1 bg-slate-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics Section -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="reveal-element p-6 border-l-4 border-orange-500 bg-slate-50 rounded-r-xl">
            <div class="text-3xl font-extrabold text-slate-900 mb-2">98%</div>
            <div class="text-sm text-slate-500 font-bold uppercase tracking-wide">Redução de Processo Manual</div>
          </div>
          <div class="reveal-element p-6 border-l-4 border-blue-500 bg-slate-50 rounded-r-xl">
            <div class="text-3xl font-extrabold text-slate-900 mb-2">Zero</div>
            <div class="text-sm text-slate-500 font-bold uppercase tracking-wide">Inconsistência de Dados</div>
          </div>
          <div class="reveal-element p-6 border-l-4 border-slate-900 bg-slate-50 rounded-r-xl">
            <div class="text-3xl font-extrabold text-slate-900 mb-2">Real-time</div>
            <div class="text-sm text-slate-500 font-bold uppercase tracking-wide">Atualização do ERP</div>
          </div>
          <div class="reveal-element p-6 border-l-4 border-orange-500 bg-slate-50 rounded-r-xl">
            <div class="text-3xl font-extrabold text-slate-900 mb-2">100%</div>
            <div class="text-sm text-slate-500 font-bold uppercase tracking-wide">Segurança Fiscal</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Features -->
    <section id="features" class="py-24 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-element">
          <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Inteligência Aplicada ao seu Negócio
          </h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">Desenvolvemos funcionalidades específicas para otimizar cada etapa do seu fluxo de entrada de notas.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-element">
          <!-- Item 1 -->
          <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Captura via IA (OCR)</h3>
            <p class="text-slate-600 leading-relaxed">Nossa Inteligência Artificial interpreta PDFs de serviços, comunicações e energia, convertendo dados não estruturados em informações prontas para o ERP.</p>
          </div>
          <!-- Item 2 -->
          <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Monitoramento Oficial</h3>
            <p class="text-slate-600 leading-relaxed">Conexão nativa com SEFAZ e centenas de prefeituras para busca automática de NF-e, CT-e e NFS-e, eliminando a dependência do fornecedor.</p>
          </div>
          <!-- Item 3 -->
          <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-4">Conciliação de Pedidos</h3>
            <p class="text-slate-600 leading-relaxed">Associe automaticamente as notas fiscais às Ordens de Compra (OC), validando preços, quantidades e impostos de forma instantânea.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Operations Section -->
    <section class="py-24 bg-slate-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="reveal-element">
            <h2 class="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              Visibilidade Total para a <span class="text-blue-400">Tomada de Decisão</span>
            </h2>
            <div class="space-y-8">
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-6 h-6 mt-1 text-blue-400">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2">Auditoria de Divergências</h4>
                  <p class="text-slate-400">Identificamos discrepâncias em alíquotas de impostos e valores, alertando o gestor antes da integração financeira.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-6 h-6 mt-1 text-blue-400">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2">Manifestação do Destinatário</h4>
                  <p class="text-slate-400">Realize a ciência da emissão e confirmação da operação diretamente pelo sistema, garantindo segurança jurídica.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="flex-shrink-0 w-6 h-6 mt-1 text-blue-400">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-2">Rastreabilidade Completa</h4>
                  <p class="text-slate-400">Saiba exatamente quem aprovou, quando integrou e quais alterações foram feitas em cada documento fiscal.</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Visual Placeholder -->
          <div class="reveal-element lg:pl-10">
            <div class="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 md:p-10 shadow-3xl">
              <div class="space-y-4">
                <div class="h-4 w-1/3 bg-slate-700 rounded"></div>
                <div class="space-y-2">
                  <div v-for="i in 4" :key="i" class="h-10 w-full bg-slate-700/50 rounded-lg flex items-center px-4">
                    <div class="h-2 w-1/2 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div class="h-32 w-full bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                  <span class="text-blue-400/50 text-sm font-medium">Relatório de Auditoria</span>
                </div>
              </div>
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
</style>
