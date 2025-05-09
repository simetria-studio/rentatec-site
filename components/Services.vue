<template>
  <section id="services" class="overflow-hidden relative py-24 bg-gradient-to-b from-white to-gray-50">
    <!-- Elementos decorativos de fundo -->
    <div class="overflow-hidden absolute inset-0">
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full opacity-30 mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute right-0 bottom-0 w-72 h-72 bg-indigo-50 rounded-full opacity-40 mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-30"></div>
      
      <!-- Padrão de grade decorativo -->
      <div class="absolute inset-0 opacity-5 grid-pattern"></div>
    </div>
    
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-16 text-center reveal-element">
        <div class="inline-block px-3 py-1 mb-4 bg-blue-100 rounded-full shadow-sm">
          <span class="text-sm font-medium tracking-wider text-blue-600">NOSSOS SERVIÇOS</span>
        </div>
        <h2 class="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Conheça nossas <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Soluções</span>
        </h2>
        <div class="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Na Rentatec, a inovação é mais do que uma meta, é uma jornada contínua em direção ao futuro. 
          Conheça as soluções que promovem essa mudança:
        </p>
      </div>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 reveal-element">
        <!-- X-ERP -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-blue-600 to-blue-700">
            <div class="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-blue-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">X-ERP</h3>
            <p class="mb-4 text-gray-700">
              Nosso ERP: sistema integrado de Gestão Empresarial totalmente customizável e completo para seu negócio!
            </p>
            <NuxtLink to="/x-erp" class="inline-flex items-center font-medium text-blue-600 transition-colors duration-300 hover:text-blue-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Pipefy -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-purple-600 to-purple-700">
            <div class="absolute inset-0 bg-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-purple-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-purple-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-purple-600">Pipefy</h3>
            <p class="mb-4 text-gray-700">
              Otimize a sua operação de forma prática, fácil e rápida com o software low-code de gestão de processos!
            </p>
            <NuxtLink to="/pipefy" class="inline-flex items-center font-medium text-purple-600 transition-colors duration-300 hover:text-purple-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Beequest -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-yellow-500 to-yellow-600">
            <div class="absolute inset-0 bg-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-700 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-yellow-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-600">Beequest</h3>
            <p class="mb-4 text-gray-700">
              Monte questionários profissionais e obtenha resultados validados por especialistas pelo Beequest!
            </p>
            <NuxtLink to="/beequest" class="inline-flex items-center font-medium text-yellow-600 transition-colors duration-300 hover:text-yellow-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Software Personalizado -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-green-600 to-green-700">
            <div class="absolute inset-0 bg-green-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-green-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-green-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">Software Personalizado</h3>
            <p class="mb-4 text-gray-700">
              Customize e desenvolva o software que sua empresa precisa, sob medida, para controlar qualquer tipo de processo.
            </p>
            <NuxtLink to="/servicos" class="inline-flex items-center font-medium text-green-600 transition-colors duration-300 hover:text-green-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Integração -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-red-600 to-red-700">
            <div class="absolute inset-0 bg-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-red-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-red-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">Integração</h3>
            <p class="mb-4 text-gray-700">
              Tenha tudo conectado para um controle completo e prático de seu negócio com nossas soluções de integração!
            </p>
            <NuxtLink to="/integracoes" class="inline-flex items-center font-medium text-red-600 transition-colors duration-300 hover:text-red-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Desenvolvimento Mobile -->
        <div class="overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl group">
          <div class="flex overflow-hidden relative justify-center items-center h-48 bg-gradient-to-br from-indigo-600 to-indigo-700">
            <div class="absolute inset-0 bg-indigo-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div class="absolute inset-0 opacity-10 service-pattern"></div>
            <svg class="relative z-10 w-20 h-20 text-white transition-transform duration-500 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-indigo-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-indigo-500 transition-transform duration-300 transform origin-top scale-100 group-hover:scale-105">
            <h3 class="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">Desenvolvimento Mobile</h3>
            <p class="mb-4 text-gray-700">
              Crie e aprimore aplicativos e sistemas para dispositivos móveis exclusivos para sua empresa e suas necessidades!
            </p>
            <NuxtLink to="/mobile" class="inline-flex items-center font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-800 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center reveal-element">
        <NuxtLink to="/contact" class="inline-flex overflow-hidden relative items-center px-8 py-4 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 group">
          <span class="relative z-10">Solicite uma demonstração</span>
          <svg class="relative z-10 ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Padrão de grade */
.grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Padrão para os serviços */
.service-pattern {
  background-image: radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 10px 10px;
}

/* Animação de revelação */
.reveal-element {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease;
}

.reveal-element.active {
  opacity: 1;
  transform: translateY(0);
}

/* Animação para o gradiente de texto */
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 5s ease infinite;
}
</style>

<script>
export default {
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
  }
}
</script> 