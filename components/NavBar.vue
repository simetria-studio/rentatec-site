<template>
  <nav class="fixed z-50 w-full border-b border-white/10 bg-[#043259] shadow-lg shadow-slate-900/10">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <img class="h-8 w-auto max-w-[210px] sm:h-9 sm:max-w-[240px] lg:max-w-[270px]" src="~/assets/images/logo-white.png" alt="Rentatec Logo" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden items-center gap-5 md:flex lg:gap-7">
          <NuxtLink to="/" class="py-1 text-sm font-semibold tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200 lg:text-base">
            Página Inicial
          </NuxtLink>
          <div class="relative group">
            <button class="flex items-center py-1 text-sm font-semibold tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200 lg:text-base">
              Soluções
              <svg class="ml-1 w-5 h-5 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="invisible absolute right-0 mt-3 w-72 origin-top-right scale-95 overflow-hidden rounded-xl border border-slate-200 bg-white opacity-0 shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/5 transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
              <div class="border-b border-slate-100 px-4 py-3">
                <p class="text-xs font-black uppercase tracking-[0.16em] text-slate-400">Soluções</p>
              </div>
              <div class="max-h-[calc(100vh-6rem)] overflow-y-auto p-2">
                <NuxtLink to="/x-erp" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-800">
                  <svg class="h-5 w-5 shrink-0 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                  </svg>
                  X-ERP
                </NuxtLink>
                <NuxtLink to="/xerp-notas" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-800">
                  <svg class="h-5 w-5 shrink-0 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  X-ERP Notas
                </NuxtLink>
                <NuxtLink to="/xerp-kanban" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-800">
                  <svg class="h-5 w-5 shrink-0 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h7M17 12l3 3m0 0l-3 3m3-3h-8"></path>
                  </svg>
                  X-ERP Kanban
                </NuxtLink>
                <NuxtLink to="/servicos" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-800">
                  <svg class="h-5 w-5 shrink-0 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  Software Personalizado
                </NuxtLink>
                <NuxtLink to="/integracoes" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950">
                  <svg class="h-5 w-5 shrink-0 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Integração
                </NuxtLink>
                <NuxtLink to="/mobile" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-800">
                  <svg class="h-5 w-5 shrink-0 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Desenvolvimento Mobile
                </NuxtLink>
                <NuxtLink to="/beequest" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-amber-50 hover:text-amber-800">
                  <svg class="h-5 w-5 shrink-0 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Beequest
                </NuxtLink>
                <NuxtLink to="/pipefy" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-violet-50 hover:text-violet-800">
                  <svg class="h-5 w-5 shrink-0 text-violet-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  Pipefy
                </NuxtLink>
              </div>
            </div>
          </div>
          <NuxtLink to="/blog" class="py-1 text-sm font-semibold tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200 lg:text-base">
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg lg:px-5 lg:text-base">
            <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Contato
          </NuxtLink>
        </div>
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen" class="text-white transition-all duration-200 hover:text-blue-200">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-blue-800">
        <NuxtLink to="/" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Página Inicial
        </NuxtLink>
        <NuxtLink to="/x-erp" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          X-ERP
        </NuxtLink>
        <NuxtLink to="/xerp-notas" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          XERP Notas
        </NuxtLink>
        <NuxtLink to="/xerp-kanban" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          X-ERP Kanban
        </NuxtLink>
        <NuxtLink to="/servicos" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Software Personalizado
        </NuxtLink>
        <NuxtLink to="/integracoes" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Integração
        </NuxtLink>
        <NuxtLink to="/mobile" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Desenvolvimento Mobile
        </NuxtLink>
        <NuxtLink to="/beequest" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Beequest
        </NuxtLink>
        <NuxtLink to="/pipefy" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Pipefy
        </NuxtLink>
        <NuxtLink to="/blog" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Blog
        </NuxtLink>
        <NuxtLink to="/contact" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Contato
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  watch: {
    '$route'() {
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
/* Adicione animações suaves */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 
