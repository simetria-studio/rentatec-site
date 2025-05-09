<template>
  <section id="services" class="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-30"></div>
      
      <!-- Padrão de grade decorativo -->
      <div class="absolute inset-0 grid-pattern opacity-5"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 reveal-element">
        <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
          <span class="text-blue-600 text-sm font-medium tracking-wider">NOSSOS SERVIÇOS</span>
        </div>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Conheça nossas <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Soluções</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Na Rentatec, a inovação é mais do que uma meta, é uma jornada contínua em direção ao futuro. 
          Conheça as soluções que promovem essa mudança:
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-element">
        <!-- X-ERP -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-blue-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-blue-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">X-ERP</h3>
            <p class="text-gray-700 mb-4">
              Nosso ERP: sistema integrado de Gestão Empresarial totalmente customizável e completo para seu negócio!
            </p>
            <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Pipefy -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-purple-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-purple-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Pipefy</h3>
            <p class="text-gray-700 mb-4">
              Otimize a sua operação de forma prática, fácil e rápida com o software low-code de gestão de processos!
            </p>
            <a href="#" class="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Beequest -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-yellow-700 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-yellow-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">Beequest</h3>
            <p class="text-gray-700 mb-4">
              Monte questionários profissionais e obtenha resultados validados por especialistas pelo Beequest!
            </p>
            <a href="#" class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Software Personalizado -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-green-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-green-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">Software Personalizado</h3>
            <p class="text-gray-700 mb-4">
              Customize e desenvolva o software que sua empresa precisa, sob medida, para controlar qualquer tipo de processo.
            </p>
            <a href="#" class="inline-flex items-center text-green-600 font-medium hover:text-green-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Integração -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-red-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-red-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">Integração</h3>
            <p class="text-gray-700 mb-4">
              Tenha tudo conectado para um controle completo e prático de seu negócio com nossas soluções de integração!
            </p>
            <a href="#" class="inline-flex items-center text-red-600 font-medium hover:text-red-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Desenvolvimento Mobile -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
          <div class="h-48 bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 service-pattern opacity-10"></div>
            <svg class="w-20 h-20 text-white relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <div class="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-indigo-800 to-transparent opacity-30"></div>
          </div>
          <div class="p-6 border-t-4 border-indigo-500 transform origin-top scale-100 group-hover:scale-105 transition-transform duration-300">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Desenvolvimento Mobile</h3>
            <p class="text-gray-700 mb-4">
              Crie e aprimore aplicativos e sistemas para dispositivos móveis exclusivos para sua empresa e suas necessidades!
            </p>
            <a href="#" class="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300 group">
              <span>SAIBA MAIS</span>
              <svg class="ml-1 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center reveal-element">
        <a href="#contact" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
          <span class="relative z-10">Solicite uma demonstração</span>
          <svg class="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
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