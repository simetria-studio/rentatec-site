<template>
  <section id="about" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      <div class="absolute top-1/2 right-0 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-200 rounded-full opacity-30"></div>
      <div class="absolute bottom-1/3 right-1/4 w-5 h-5 bg-indigo-200 rounded-full opacity-40"></div>
      
      <!-- Padrão de grade decorativo -->
      <div class="absolute inset-0 grid-pattern opacity-5"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 reveal-element">
        <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
          <span class="text-blue-600 text-sm font-medium tracking-wider">SOBRE NÓS</span>
        </div>
        <h2 class="mt-2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Mais de uma Década <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 animate-gradient-x">Transformando Negócios</span><br class="hidden md:inline" /> com Inovação e Tecnologia
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="reveal-element reveal-left">
          <p class="text-lg text-gray-700 leading-relaxed">
            A Rentatec é uma empresa com mais de uma década de experiência no mercado, especializada em tecnologia e desenvolvimento de sistemas para gestão de negócios. Nosso objetivo vai além de apenas desenvolver sistemas ERP; buscamos fornecer ferramentas que transformem negócios.
          </p>
          <p class="mt-4 text-lg text-gray-700 leading-relaxed">
            Com um foco constante na inovação, oferecemos suporte de qualidade, contribuindo para o crescimento e sucesso de nossos clientes.
          </p>
          
          <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500 group">
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-all duration-300">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300">Missão</h3>
              </div>
              <p class="text-gray-700">
                Nossa missão é pesquisar, projetar e desenvolver continuamente as melhores soluções, com ênfase em sistemas corporativos e gerenciais, oferecendo um suporte diferenciado.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-indigo-500 group">
              <div class="flex items-center mb-4">
                <div class="bg-indigo-100 p-3 rounded-lg mr-4 group-hover:bg-indigo-200 transition-all duration-300">
                  <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-all duration-300">Valores</h3>
              </div>
              <p class="text-gray-700">
                Prezamos pelo profissionalismo, pela ética e pela qualidade dos nossos produtos e serviços. Valorizamos a parceria com clientes e fornecedores e dedicamos cada dia pelo progresso da empresa e dos colaboradores.
              </p>
            </div>
          </div>
          
          <div class="mt-10">
            <a href="#services" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
              <span class="relative z-10">Conheça nossas soluções</span>
              <svg class="ml-2 w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
        
        <div class="relative reveal-element reveal-right">
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full animate-pulse-slow"></div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full animate-pulse-slow animation-delay-2000"></div>
          
          <div class="relative z-10 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 group">
            <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                 alt="Equipe Rentatec" 
                 class="w-full h-auto object-cover" />
            
            <!-- Overlay com efeito de brilho -->
            <div class="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <!-- Estatísticas -->
          <div class="absolute -bottom-10 right-10 bg-white rounded-lg shadow-xl p-4 flex items-center space-x-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 counter" data-target="15">0</div>
              <div class="text-sm text-gray-600">Anos de<br>experiência</div>
            </div>
            <div class="h-10 w-px bg-gray-200"></div>
            <div class="text-center">
              <div class="text-3xl font-bold text-indigo-600 counter" data-target="500">0</div>
              <div class="text-sm text-gray-600">Clientes<br>satisfeitos</div>
            </div>
          </div>
          
          <!-- Badge flutuante -->
          <div class="absolute top-5 -right-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-all duration-300">
            <div class="text-sm font-bold">Desde 2008</div>
          </div>
        </div>
      </div>
      
      <!-- Linha do tempo simplificada -->
      <div class="mt-20 reveal-element">
        <div class="flex justify-center space-x-4 md:space-x-8 lg:space-x-16">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span class="text-blue-600 font-bold">2008</span>
            </div>
            <p class="text-sm text-gray-600">Fundação</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span class="text-blue-600 font-bold">2012</span>
            </div>
            <p class="text-sm text-gray-600">Expansão</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span class="text-blue-600 font-bold">2016</span>
            </div>
            <p class="text-sm text-gray-600">Inovação</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span class="text-blue-600 font-bold">2023</span>
            </div>
            <p class="text-sm text-gray-600">Hoje</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.reveal-left {
  transform: translateX(-50px);
}

.reveal-right {
  transform: translateX(50px);
}

/* Animação de pulso lenta */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 6s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Contador animado */
.counter {
  display: inline-block;
}

/* Padrão de grade */
.grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Efeito de brilho na imagem */
.shine-effect {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  animation: shine 3s infinite;
  animation-play-state: paused;
}

.group:hover .shine-effect {
  animation-play-state: running;
}

@keyframes shine {
  0% {
    transform: skewX(-20deg) translateX(-100%);
  }
  100% {
    transform: skewX(-20deg) translateX(200%);
  }
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
    
    // Animação de contador
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60fps
      
      const updateCounter = () => {
        const c = +counter.innerText;
        if (c < target) {
          counter.innerText = Math.ceil(c + increment);
          setTimeout(updateCounter, 16);
        } else {
          counter.innerText = target;
        }
      };
      
      const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          counterObserver.unobserve(counter);
        }
      }, { threshold: 0.5 });
      
      counterObserver.observe(counter);
    });
  }
}
</script> 