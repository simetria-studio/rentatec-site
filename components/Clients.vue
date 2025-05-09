<template>
  <section class="overflow-hidden relative py-24 bg-gradient-to-b from-gray-50 to-white">
    <!-- Elementos decorativos de fundo -->
    <div class="overflow-hidden absolute inset-0">
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full opacity-30 mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full opacity-40 mix-blend-multiply filter blur-3xl"></div>
      <div class="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
      <div class="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-200 rounded-full opacity-30"></div>
      
      <!-- Padrão de grade decorativo -->
      <div class="absolute inset-0 opacity-5 grid-pattern"></div>
      
      <!-- Linhas decorativas -->
      <div class="overflow-hidden absolute inset-0">
        <div class="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-30"></div>
        <div class="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent opacity-30"></div>
      </div>
    </div>
    
    <div class="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-16 text-center reveal-element">
        <div class="inline-block px-3 py-1 mb-4 bg-blue-100 rounded-full shadow-sm transition-transform duration-300 transform hover:scale-105">
          <span class="text-sm font-medium tracking-wider text-blue-600">NOSSOS CLIENTES</span>
        </div>
        <h2 class="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          Empresas que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Confiam</span> em Nós
        </h2>
        <div class="mx-auto mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        <p class="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Orgulhamo-nos de trabalhar com empresas de diversos setores, 
          fornecendo soluções tecnológicas que impulsionam seus negócios.
        </p>
      </div>
      
      <!-- Logos dos clientes em grade com efeito marquee -->
      <div class="reveal-element">
        <div class="marquee-container">
          <div class="marquee-content">
            <!-- Primeira fileira de logos -->
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Thales.png" alt="Thales" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Thales</h4>
                    <p class="text-sm text-blue-100">Setor de Tecnologia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/roddar.png" alt="Roddar Pneus" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Roddar Pneus</h4>
                    <p class="text-sm text-blue-100">Setor Automotivo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/PM-PR.png" alt="PMPR" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">PMPR</h4>
                    <p class="text-sm text-blue-100">Setor Público</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Pibernat.png" alt="Pibernat" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Pibernat</h4>
                    <p class="text-sm text-blue-100">Setor Industrial</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Kluber.png" alt="Kluber" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Kluber</h4>
                    <p class="text-sm text-blue-100">Setor Químico</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Jusbrasil.png" alt="Jusbrasil" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Jusbrasil</h4>
                    <p class="text-sm text-blue-100">Setor Jurídico</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Dsgnselo.png" alt="Dsgnselo" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Dsgnselo</h4>
                    <p class="text-sm text-blue-100">Setor de Design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/CASEX.png" alt="CASEX" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">CASEX</h4>
                    <p class="text-sm text-blue-100">Setor Imobiliário</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/Baricomp.png" alt="Baricomp" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Baricomp</h4>
                    <p class="text-sm text-blue-100">Setor de Tecnologia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="client-card">
              <div class="client-card-inner">
                <div class="client-logo-wrapper">
                  <img src="/images/baggio.png" alt="Baggio" class="client-image" />
                </div>
                <div class="client-overlay">
                  <div class="client-info">
                    <h4 class="text-lg font-bold text-white">Baggio</h4>
                    <p class="text-sm text-blue-100">Setor Alimentício</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Depoimento em destaque -->
      <div class="mt-20 reveal-element">
        <div class="overflow-hidden relative p-8 bg-white rounded-xl shadow-xl">
          <!-- Elementos decorativos do card -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full opacity-70"></div>
          
          <div class="flex absolute -top-5 -left-5 justify-center items-center w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6zm5 0a1 1 0 100 2h2a1 1 0 100-2h-2z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <div class="relative z-10">
            <div class="flex flex-col gap-8 items-center md:flex-row md:items-start">
              <div class="flex-shrink-0">
                <div class="overflow-hidden w-24 h-24 rounded-full border-4 border-blue-100 shadow-lg transition-all duration-300 hover:border-blue-200">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="Cliente" class="object-cover w-full h-full" />
                </div>
              </div>
              
              <div>
                <div class="mb-4 font-serif text-3xl text-blue-500">"</div>
                <p class="mb-6 text-lg italic text-gray-700">
                  A Rentatec transformou completamente a maneira como gerenciamos nossos processos. O sistema é intuitivo, eficiente e o suporte técnico é excepcional. Desde que implementamos a solução, nossa produtividade aumentou significativamente.
                </p>
                <div>
                  <h4 class="font-bold text-gray-900">Carlos Mendes</h4>
                  <p class="text-gray-600">Diretor de Operações, Thales Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center reveal-element">
        <a href="#contact" class="inline-flex overflow-hidden relative items-center px-8 py-4 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 group">
          <span class="relative z-10">Entre em contato</span>
          <svg class="relative z-10 ml-2 w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          <span class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Padrão de grade */
.grid-pattern {
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
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

/* Marquee container */
.marquee-container {
  width: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  padding: 2rem 0;
}

/* Marquee content */
.marquee-content {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: marquee 30s linear infinite;
  padding: 0 1rem;
}

.marquee-content:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Estilo para os cards de clientes */
.client-card {
  position: relative;
  height: 140px;
  width: 220px;
  flex-shrink: 0;
  perspective: 1000px;
}

.client-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  transform-style: preserve-3d;
  border-radius: 1rem;
  box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -1px rgba(0, 0, 0, 0.06);
}

.client-card:hover .client-card-inner {
  transform: rotateY(180deg);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.client-logo-wrapper, .client-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
  overflow: hidden;
}

.client-logo-wrapper {
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  filter: grayscale(100%);
  transition: filter 0.6s ease;
}

.client-card:hover .client-logo-wrapper {
  filter: grayscale(0%);
}

.client-image {
  max-height: 70px;
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.6s ease;
}

.client-card:hover .client-image {
  transform: scale(1.1);
}

.client-overlay {
  background: linear-gradient(135deg, rgba(30, 64, 175, 0.95), rgba(79, 70, 229, 0.85));
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  padding: 1.5rem;
}

.client-info {
  text-align: center;
  padding: 0.5rem;
}

/* Media queries para responsividade */
@media (max-width: 768px) {
  .client-card {
    height: 120px;
    width: 180px;
  }
  
  .client-image {
    max-height: 60px;
  }
}

@media (max-width: 640px) {
  .client-card {
    height: 100px;
    width: 160px;
  }
  
  .client-image {
    max-height: 50px;
  }
  
  .marquee-content {
    gap: 1.5rem;
  }
}
</style>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// Função para revelar elementos quando eles entram na viewport
const revealOnScroll = () => {
  const elements = document.querySelectorAll('.reveal-element')
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top
    const elementBottom = element.getBoundingClientRect().bottom
    
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add('revealed')
    }
  })
}

// Configurar observador de scroll
onMounted(() => {
  revealOnScroll() // Verificar elementos visíveis inicialmente
  window.addEventListener('scroll', revealOnScroll)
})

// Limpar event listener
onUnmounted(() => {
  window.removeEventListener('scroll', revealOnScroll)
})
</script> 