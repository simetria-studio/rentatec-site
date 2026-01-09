<template>
  <section id="services" class="overflow-hidden relative py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
    <!-- Elementos decorativos de fundo aprimorados -->
    <div class="overflow-hidden absolute inset-0">
      <!-- Blobs animados -->
      <div class="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-300/30 rounded-full opacity-40 mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div class="absolute -right-20 top-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/20 rounded-full opacity-30 mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-blue-200/30 rounded-full opacity-40 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <!-- Partículas decorativas -->
      <div class="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"></div>
      <div class="absolute bottom-1/3 left-1/5 w-3 h-3 bg-indigo-300 rounded-full opacity-50 animate-float animation-delay-1000"></div>
      <div class="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-300 rounded-full opacity-40 animate-float animation-delay-3000"></div>
      
      <!-- Grade sutil melhorada -->
      <div class="absolute inset-0 opacity-[0.03] modern-grid"></div>
    </div>
    
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Header da seção modernizado -->
      <div class="mb-20 text-center reveal-element">
        <!-- Badge moderno com glassmorphism -->
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 backdrop-blur-sm border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300">
          <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span class="text-sm font-semibold tracking-wide text-blue-700 uppercase">Soluções Empresariais 2026</span>
        </div>
        
        <h2 class="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          Transforme seu negócio com
          <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">tecnologia de ponta</span>
        </h2>
        
        <div class="flex gap-2 justify-center items-center mx-auto mt-8">
          <div class="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div class="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
          <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-500"></div>
          <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full"></div>
        </div>
        
        <p class="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
          Impulsione resultados reais com soluções que <strong class="text-gray-900">reduzem custos</strong>, 
          <strong class="text-gray-900">aumentam produtividade</strong> e <strong class="text-gray-900">aceleram crescimento</strong>
        </p>
      </div>
      
      <!-- Grid de serviços modernizado -->
      <div class="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 reveal-element">
        <!-- X-ERP -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-blue-300/50 hover:-translate-y-2 group">
          <!-- Badge de destaque -->
          <div class="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-md">
            Mais Vendido
          </div>
          
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700">
            <!-- Efeito glassmorphism -->
            <div class="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            
            <!-- Padrão de fundo -->
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <!-- Ícone com efeito 3D -->
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
              </svg>
            </div>
            
            <!-- Shine effect -->
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">X-ERP</h3>
              <span class="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md">ERP</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Gerencie tudo em um só lugar:</strong> controle financeiro, estoque, vendas e muito mais. Ganhe até <strong class="text-blue-600">40% mais eficiência</strong> operacional.
            </p>
            
            <NuxtLink to="/x-erp" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-blue-600 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Pipefy -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-purple-300/50 hover:-translate-y-2 group">
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700">
            <div class="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">Pipefy</h3>
              <span class="px-2 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-md">Low-Code</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Automatize processos sem programar:</strong> crie fluxos inteligentes em minutos. Reduza <strong class="text-purple-600">até 70% do tempo</strong> em tarefas repetitivas.
            </p>
            
            <NuxtLink to="/pipefy" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-purple-600 bg-purple-50 rounded-lg transition-all duration-300 hover:bg-purple-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Beequest -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-amber-300/50 hover:-translate-y-2 group">
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-600">
            <div class="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600">Beequest</h3>
              <span class="px-2 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-md">Pesquisas</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Decisões baseadas em dados:</strong> colete feedback validado por especialistas. Aumente a <strong class="text-amber-600">precisão estratégica</strong> do seu negócio.
            </p>
            
            <NuxtLink to="/beequest" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-amber-700 bg-amber-50 rounded-lg transition-all duration-300 hover:bg-amber-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Software Personalizado -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-emerald-300/50 hover:-translate-y-2 group">
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700">
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">Software Personalizado</h3>
              <span class="px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-md">Custom</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Solução sob medida para você:</strong> desenvolvemos a ferramenta perfeita para seus processos únicos. <strong class="text-emerald-600">100% alinhado</strong> ao seu negócio.
            </p>
            
            <NuxtLink to="/servicos" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-emerald-600 bg-emerald-50 rounded-lg transition-all duration-300 hover:bg-emerald-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Integração -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-rose-300/50 hover:-translate-y-2 group">
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-rose-600 via-red-600 to-pink-700">
            <div class="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-rose-600">Integração</h3>
              <span class="px-2 py-1 text-xs font-semibold text-rose-700 bg-rose-100 rounded-md">API</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Conecte todo seu ecossistema:</strong> integre sistemas, plataformas e ferramentas. Elimine <strong class="text-rose-600">trabalho manual</strong> entre aplicações.
            </p>
            
            <NuxtLink to="/integracoes" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-rose-600 bg-rose-50 rounded-lg transition-all duration-300 hover:bg-rose-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Desenvolvimento Mobile -->
        <div class="overflow-hidden relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-violet-300/50 hover:-translate-y-2 group">
          <div class="flex overflow-hidden relative justify-center items-center h-56 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700">
            <div class="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent"></div>
            <div class="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern-modern"></div>
            
            <div class="relative z-10 p-6 transition-all duration-500 transform bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6">
              <svg class="w-16 h-16 text-white drop-shadow-2xl" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <div class="absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 shine-effect"></div>
          </div>
          
          <div class="p-7">
            <div class="flex gap-3 justify-between items-start mb-3">
              <h3 class="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-violet-600">Apps Mobile</h3>
              <span class="px-2 py-1 text-xs font-semibold text-violet-700 bg-violet-100 rounded-md">Mobile</span>
            </div>
            
            <p class="mb-6 text-gray-600 leading-relaxed">
              <strong class="text-gray-900">Alcance clientes onde eles estão:</strong> apps nativos iOS e Android com a melhor experiência. Expanda seu <strong class="text-violet-600">alcance digital</strong>.
            </p>
            
            <NuxtLink to="/mobile" class="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-violet-600 bg-violet-50 rounded-lg transition-all duration-300 hover:bg-violet-100 hover:gap-3 group/link">
              <span>Explorar solução</span>
              <svg class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- CTA modernizado -->
      <div class="mt-20 text-center reveal-element">
        <div class="inline-flex flex-col gap-6 items-center">
          <p class="text-lg font-medium text-gray-700">
            Pronto para transformar seu negócio?
          </p>
          <NuxtLink to="/contact" class="group/cta inline-flex relative overflow-hidden items-center gap-3 px-10 py-5 font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-105 hover:gap-4">
            <span class="relative z-10 text-lg">Agende sua demonstração gratuita</span>
            <svg class="relative z-10 w-6 h-6 transition-transform duration-300 group-hover/cta:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
            
            <!-- Efeito de brilho animado -->
            <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"></span>
            <span class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-30 blur-xl group-hover/cta:opacity-50 transition-opacity duration-300"></span>
          </NuxtLink>
          
          <p class="text-sm text-gray-500">
            ✓ Sem compromisso · ✓ Consultoria personalizada · ✓ ROI comprovado
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Grade moderna */
.modern-grid {
  background-image: 
    linear-gradient(to right, rgba(99, 102, 241, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(99, 102, 241, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Padrão moderno para os serviços */
.service-pattern-modern {
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Animações de blob */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -20px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(20px, 10px) scale(1.05); }
}

.animate-blob {
  animation: blob 20s infinite ease-in-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Animação flutuante */
@keyframes float {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(-5px) translateX(-5px); }
  75% { transform: translateY(-15px) translateX(3px); }
}

.animate-float {
  animation: float 6s infinite ease-in-out;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

/* Efeito shine */
@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(200%) rotate(45deg); }
}

.shine-effect {
  animation: shine 3s infinite;
}

/* Animação de revelação */
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
}

/* Animação de gradiente animado */
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}
</style>

<script>
export default {
  mounted() {
    // Animação de revelação ao scroll com Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal-element').forEach(el => {
      observer.observe(el);
    });
  }
}
</script> 