<template>
  <div class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Elementos decorativos de fundo -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <!-- Blobs animados -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute top-1/3 -left-24 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-24 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <!-- Efeito de ondas -->
      <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
      </div>
      
      <div class="absolute inset-0 bg-blue-900 opacity-10 pattern-dots"></div>
      
      <!-- Linhas geométricas decorativas -->
      <div class="absolute inset-0 geometric-lines"></div>
      
      <!-- Partículas flutuantes -->
      <div class="particles">
        <div v-for="n in 20" :key="n" class="particle"></div>
      </div>
      
      <!-- Estrelas cintilantes -->
      <div class="stars">
        <div v-for="n in 30" :key="`star-${n}`" class="star"></div>
      </div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center md:text-left md:w-2/3">
        <div class="inline-block px-3 py-1 rounded-full bg-blue-800 bg-opacity-50 backdrop-blur-sm mb-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-down glow-effect">
          <span class="text-blue-200 text-sm font-medium tracking-wider">TRANSFORMANDO NEGÓCIOS DESDE 2008</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up text-shadow">
          Moldamos o futuro da <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 animate-gradient-x">gestão empresarial</span>
        </h1>
        <p class="mt-6 text-xl text-blue-100 max-w-3xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up animation-delay-300">
          Estamos comprometidos em transformar negócios através da inovação e tecnologia.
          Descubra como podemos ajudar a levar sua empresa ao próximo nível!
        </p>
        <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
          <a href="#services" class="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group pulse-button">
            <span class="relative z-10">Começar agora</span>
            <span class="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="absolute -right-12 -bottom-12 w-20 h-20 rounded-full bg-blue-100 opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500"></span>
          </a>
          <a href="#about" class="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
            <span class="relative z-10">Saiba mais</span>
            <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span class="absolute -left-12 -top-12 w-20 h-20 rounded-full bg-white opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-100 transition-all duration-500"></span>
          </a>
        </div>
        
        <!-- Indicador de scroll -->
        <div class="hidden md:flex justify-center md:justify-start mt-16 animate-bounce animation-delay-1000">
          <a href="#about" class="text-white opacity-70 hover:opacity-100 transition-opacity duration-300 scroll-indicator">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div class="absolute right-0 bottom-0 hidden md:block w-1/3 h-full">
      <div class="h-full w-full bg-contain bg-no-repeat bg-right-bottom transform hover:scale-105 transition-transform duration-700 floating-element" style="background-image: url('https://raw.githubusercontent.com/undraw/undraw/master/illustrations/business_analytics.svg')"></div>
    </div>
    
    <!-- Elemento decorativo adicional -->
    <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-900 to-transparent opacity-30"></div>
    
    <!-- Efeito de luz -->
    <div class="absolute top-0 right-1/4 w-1/3 h-64 bg-blue-400 opacity-10 rotate-45 transform -translate-y-32 blur-3xl"></div>
    
    <!-- Círculos decorativos -->
    <div class="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-40"></div>
    <div class="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-200 rounded-full opacity-30"></div>
    <div class="absolute bottom-1/4 left-1/3 w-5 h-5 bg-indigo-300 rounded-full opacity-40"></div>
  </div>
</template>

<style scoped>
.pattern-dots {
  background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Linhas geométricas */
.geometric-lines {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Animação de flutuação para a ilustração */
.floating-element {
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
}

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

/* Animação para os blobs de fundo */
@keyframes blob {
  0% { transform: scale(1) translate(0, 0); }
  33% { transform: scale(1.1) translate(5px, -5px); }
  66% { transform: scale(0.9) translate(-5px, 5px); }
  100% { transform: scale(1) translate(0, 0); }
}

.animate-blob {
  animation: blob 15s infinite alternate;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
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

/* Animações de fade in */
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

/* Partículas flutuantes */
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: particleFloat 15s infinite linear;
}

.particle:nth-child(odd) {
  width: 4px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
}

.particle:nth-child(even) {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.15);
}

.particle:nth-child(1) { top: 10%; left: 20%; animation-duration: 20s; animation-delay: 0s; }
.particle:nth-child(2) { top: 20%; left: 80%; animation-duration: 25s; animation-delay: 1s; }
.particle:nth-child(3) { top: 30%; left: 45%; animation-duration: 18s; animation-delay: 2s; }
.particle:nth-child(4) { top: 40%; left: 10%; animation-duration: 22s; animation-delay: 3s; }
.particle:nth-child(5) { top: 50%; left: 70%; animation-duration: 19s; animation-delay: 4s; }
.particle:nth-child(6) { top: 60%; left: 30%; animation-duration: 21s; animation-delay: 5s; }
.particle:nth-child(7) { top: 70%; left: 90%; animation-duration: 24s; animation-delay: 6s; }
.particle:nth-child(8) { top: 80%; left: 50%; animation-duration: 23s; animation-delay: 7s; }
.particle:nth-child(9) { top: 90%; left: 15%; animation-duration: 26s; animation-delay: 8s; }
.particle:nth-child(10) { top: 15%; left: 60%; animation-duration: 20s; animation-delay: 9s; }
.particle:nth-child(11) { top: 25%; left: 30%; animation-duration: 22s; animation-delay: 10s; }
.particle:nth-child(12) { top: 35%; left: 80%; animation-duration: 18s; animation-delay: 11s; }
.particle:nth-child(13) { top: 45%; left: 40%; animation-duration: 24s; animation-delay: 12s; }
.particle:nth-child(14) { top: 55%; left: 20%; animation-duration: 19s; animation-delay: 13s; }
.particle:nth-child(15) { top: 65%; left: 60%; animation-duration: 21s; animation-delay: 14s; }
.particle:nth-child(16) { top: 75%; left: 10%; animation-duration: 23s; animation-delay: 15s; }
.particle:nth-child(17) { top: 85%; left: 70%; animation-duration: 25s; animation-delay: 16s; }
.particle:nth-child(18) { top: 5%; left: 40%; animation-duration: 20s; animation-delay: 17s; }
.particle:nth-child(19) { top: 95%; left: 30%; animation-duration: 22s; animation-delay: 18s; }
.particle:nth-child(20) { top: 50%; left: 50%; animation-duration: 19s; animation-delay: 19s; }

@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}

/* Animação de bounce */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Efeito de brilho */
.glow-effect {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* Sombra de texto */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Efeito de pulso no botão */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.pulse-button {
  animation: pulse 2s infinite;
}

/* Indicador de scroll com efeito */
.scroll-indicator {
  position: relative;
}

.scroll-indicator::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  z-index: -1;
  transform: scale(0);
  animation: ripple 2s infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* Estrelas cintilantes */
.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  border-radius: 50%;
  animation: twinkle 5s infinite;
}

.star:nth-child(3n) {
  width: 3px;
  height: 3px;
}

.star:nth-child(5n) {
  width: 1px;
  height: 1px;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

/* Posicionamento aleatório das estrelas */
.star:nth-child(1) { top: 5%; left: 10%; animation-delay: 0.1s; }
.star:nth-child(2) { top: 15%; left: 20%; animation-delay: 0.3s; }
.star:nth-child(3) { top: 25%; left: 15%; animation-delay: 0.5s; }
.star:nth-child(4) { top: 35%; left: 5%; animation-delay: 0.7s; }
.star:nth-child(5) { top: 45%; left: 25%; animation-delay: 0.9s; }
.star:nth-child(6) { top: 55%; left: 15%; animation-delay: 1.1s; }
.star:nth-child(7) { top: 65%; left: 5%; animation-delay: 1.3s; }
.star:nth-child(8) { top: 75%; left: 25%; animation-delay: 1.5s; }
.star:nth-child(9) { top: 85%; left: 15%; animation-delay: 1.7s; }
.star:nth-child(10) { top: 95%; left: 5%; animation-delay: 1.9s; }
.star:nth-child(11) { top: 5%; left: 30%; animation-delay: 2.1s; }
.star:nth-child(12) { top: 15%; left: 40%; animation-delay: 2.3s; }
.star:nth-child(13) { top: 25%; left: 35%; animation-delay: 2.5s; }
.star:nth-child(14) { top: 35%; left: 45%; animation-delay: 2.7s; }
.star:nth-child(15) { top: 45%; left: 35%; animation-delay: 2.9s; }
.star:nth-child(16) { top: 55%; left: 45%; animation-delay: 3.1s; }
.star:nth-child(17) { top: 65%; left: 35%; animation-delay: 3.3s; }
.star:nth-child(18) { top: 75%; left: 45%; animation-delay: 3.5s; }
.star:nth-child(19) { top: 85%; left: 35%; animation-delay: 3.7s; }
.star:nth-child(20) { top: 95%; left: 45%; animation-delay: 3.9s; }
.star:nth-child(21) { top: 5%; left: 60%; animation-delay: 4.1s; }
.star:nth-child(22) { top: 15%; left: 70%; animation-delay: 4.3s; }
.star:nth-child(23) { top: 25%; left: 65%; animation-delay: 4.5s; }
.star:nth-child(24) { top: 35%; left: 75%; animation-delay: 4.7s; }
.star:nth-child(25) { top: 45%; left: 65%; animation-delay: 4.9s; }
.star:nth-child(26) { top: 55%; left: 75%; animation-delay: 5.1s; }
.star:nth-child(27) { top: 65%; left: 65%; animation-delay: 5.3s; }
.star:nth-child(28) { top: 75%; left: 75%; animation-delay: 5.5s; }
.star:nth-child(29) { top: 85%; left: 65%; animation-delay: 5.7s; }
.star:nth-child(30) { top: 95%; left: 75%; animation-delay: 5.9s; }

/* Efeito de ondas */
.wave-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.1;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100px;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-repeat: repeat-x;
  animation: wave 25s linear infinite;
}

.wave1 {
  animation-duration: 25s;
  opacity: 0.3;
  bottom: -10px;
}

.wave2 {
  animation-duration: 20s;
  opacity: 0.5;
  bottom: -20px;
  animation-direction: reverse;
}

.wave3 {
  animation-duration: 15s;
  opacity: 0.7;
  bottom: -30px;
}

@keyframes wave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style> 