<template>
  <nav class="fixed z-50 w-full bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <img class="h-14" src="~/assets/images/logo-white.png" alt="Rentatec Logo" />
            </NuxtLink>
          </div>
        </div>
        <div class="hidden items-center space-x-8 md:flex">
          <NuxtLink to="/" class="py-1 text-base font-medium tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200">
            Página Inicial
          </NuxtLink>
          <div class="relative group">
            <button class="flex items-center py-1 text-base font-medium tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200">
              Soluções
              <svg class="ml-1 w-5 h-5 transition-transform duration-200 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="absolute left-0 invisible mt-2 w-64 bg-white rounded-lg ring-1 ring-black ring-opacity-5 shadow-xl opacity-0 transition-all duration-200 transform origin-top scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100">
              <div class="overflow-hidden py-2 bg-gradient-to-br from-white to-blue-50 rounded-lg">
                <NuxtLink to="/x-erp" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
                  </svg>
                  X-ERP
                </NuxtLink>
                <NuxtLink to="/xerp-notas" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  XERP Notas
                </NuxtLink>
                <NuxtLink to="/servicos" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  Softwares Personalizados
                </NuxtLink>
                <NuxtLink to="/integracoes" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  Integração
                </NuxtLink>
                <NuxtLink to="/pipefy" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                  Pipefy
                </NuxtLink>
                <NuxtLink to="/mobile" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Desenvolvimento Mobile
                </NuxtLink>
                <NuxtLink to="/beequest" class="block flex items-center px-4 py-3 text-sm text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700">
                  <svg class="mr-3 w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Beequest
                </NuxtLink>
              </div>
            </div>
          </div>
          <NuxtLink to="/blog" class="py-1 text-base font-medium tracking-wide text-white border-b-2 border-transparent transition-all duration-200 hover:text-blue-200 hover:border-blue-200">
            Blog
          </NuxtLink>
          <NuxtLink to="/contact" class="flex items-center px-5 py-2.5 ml-4 font-medium text-white bg-blue-600 rounded-lg shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg">
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
        <NuxtLink to="/servicos" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Softwares Personalizados
        </NuxtLink>
        <NuxtLink to="/integracoes" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Integração
        </NuxtLink>
        <NuxtLink to="/pipefy" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Pipefy
        </NuxtLink>
        <NuxtLink to="/mobile" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Desenvolvimento Mobile
        </NuxtLink>
        <NuxtLink to="/beequest" class="block px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:text-blue-200">
          Beequest
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