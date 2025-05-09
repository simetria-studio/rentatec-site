<template>
  <div>
    <NavBar />
    
    <!-- Hero Section - Com ondas decorativas -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <!-- Ondas decorativas -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg class="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 24.9999C240 74.9999 480 74.9999 720 49.9999C960 24.9999 1200 -25.0001 1440 9.99993V73.9999H0V24.9999Z" fill="white"/>
        </svg>
      </div>
      
      <!-- Conteúdo existente do Hero -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            Softwares <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Personalizados</span>
            <!-- Elemento decorativo -->
            <div class="absolute -top-8 -right-8 w-16 h-16 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como um software personalizado pode se ajustar perfeitamente aos seus processos, economizar tempo e recursos, 
            otimizar operações e impulsionar o crescimento do seu negócio.
          </p>
          <!-- Botões de ação -->
          <div class="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#contact" class="modern-button px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg">
              Solicitar Orçamento
            </a>
            <a href="#features" class="modern-button px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl">
              Conhecer Mais
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que ter um software personalizado - Com layout em Z -->
    <section class="py-20 bg-white relative">
      <!-- Elemento decorativo -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="reveal-element">
            <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
              <span class="text-blue-600 text-sm font-medium tracking-wider">POR QUE ESCOLHER</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Software Personalizado para seu Negócio
            </h2>
            <p class="text-lg text-gray-600">
              Atualmente existem muitos softwares para gestão empresarial, mas muitos deles são rígidos e com regras 
              pouco flexíveis, fazendo com que você e sua empresa tenham que se adaptar a ele.
            </p>
          </div>
          <div class="relative reveal-element">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform rotate-3"></div>
            <div class="relative bg-white rounded-2xl p-8 shadow-xl">
              <!-- Ilustração abstrata -->
              <div class="relative h-64 w-full">
                <!-- Elementos decorativos -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl"></div>
                
                <!-- Elementos da ilustração -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="grid grid-cols-2 gap-4 transform -rotate-6">
                    <div class="h-16 w-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg shadow-lg"></div>
                    <div class="h-16 w-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg"></div>
                    <div class="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg"></div>
                    <div class="h-16 w-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg shadow-lg"></div>
                  </div>
                  
                  <!-- Linhas de conexão -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-48 h-48 border-4 border-dashed border-blue-200 rounded-full animate-spin-slow"></div>
                  </div>
                  
                  <!-- Ícone central -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                      <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid de vantagens existente -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="glass-card hover-float p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Adaptação aos Processos da Empresa</h3>
            <p class="text-gray-600">O software se ajusta às necessidades específicas da sua empresa de forma perfeita e elimina a necessidade de adaptação a sistemas genéricos.</p>
          </div>

          <div class="glass-card hover-float p-8 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Economia de Tempo e Recursos</h3>
            <p class="text-gray-600">Reduz o tempo e os investimentos necessários para se adaptar a um sistema predefinido e permite direcionar recursos para outras áreas estratégicas de sua empresa!</p>
          </div>

          <div class="glass-card hover-float p-8 text-center">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Otimização e Eficiência</h3>
            <p class="text-gray-600">Possibilidade de otimizar o software durante o desenvolvimento e evita retrabalhos e custos adicionais durante a execução do sistema.</p>
          </div>

          <div class="glass-card hover-float p-8 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Experiência e Expertise</h3>
            <p class="text-gray-600">Temos mais de 15 anos de experiência no mercado e capacidade de criar soluções ideais para alavancar o crescimento da sua empresa.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Números/Estatísticas - Com efeito parallax -->
    <section class="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
      <div class="absolute inset-0 modern-grid-pattern opacity-10 parallax"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-transparent"></div>
      
      <!-- Conteúdo existente dos números -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="counter-wrapper glass-card p-6 backdrop-blur-lg bg-white/10">
            <div class="counter text-4xl font-bold text-white mb-2" data-target="150">0</div>
            <p class="text-blue-100">Projetos Entregues</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6 backdrop-blur-lg bg-white/10">
            <div class="counter text-4xl font-bold text-white mb-2" data-target="98">0</div>
            <p class="text-blue-100">Clientes Satisfeitos</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6 backdrop-blur-lg bg-white/10">
            <div class="counter text-4xl font-bold text-white mb-2" data-target="15">0</div>
            <p class="text-blue-100">Anos de Experiência</p>
          </div>
          
          <div class="counter-wrapper glass-card p-6 backdrop-blur-lg bg-white/10">
            <div class="counter text-4xl font-bold text-white mb-2" data-target="24">0</div>
            <p class="text-blue-100">Profissionais</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Desenvolvimento - Com timeline visual -->
    <section class="py-20 bg-gray-50 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">METODOLOGIA</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Como Desenvolvemos Seu Software</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="relative mt-20">
          <!-- Linha de conexão animada -->
          <div class="absolute top-1/2 left-0 w-full process-line hidden lg:block"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div class="glass-card hover-float p-8 text-center reveal-element">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
                1
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Levantamento de Requisitos</h3>
              <p class="text-gray-600">Análise detalhada das necessidades do seu negócio e definição dos objetivos do projeto.</p>
            </div>

            <div class="glass-card hover-float p-8 text-center reveal-element" style="animation-delay: 200ms;">
              <div class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
                2
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Planejamento</h3>
              <p class="text-gray-600">Elaboração do escopo, cronograma e definição das tecnologias a serem utilizadas.</p>
            </div>

            <div class="glass-card hover-float p-8 text-center reveal-element" style="animation-delay: 400ms;">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
                3
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Desenvolvimento</h3>
              <p class="text-gray-600">Codificação do sistema seguindo as melhores práticas e padrões de qualidade.</p>
            </div>

            <div class="glass-card hover-float p-8 text-center reveal-element" style="animation-delay: 600ms;">
              <div class="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold relative z-10">
                4
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Entrega e Suporte</h3>
              <p class="text-gray-600">Implementação, treinamento da equipe e suporte contínuo pós-implantação.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soluções Desenvolvidas - Com layout em grade hexagonal -->
    <section class="py-20 bg-white relative">
      <!-- Elementos decorativos -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-16 reveal-element">
          <div class="inline-block px-3 py-1 rounded-full bg-blue-100 mb-4 shadow-sm">
            <span class="text-blue-600 text-sm font-medium tracking-wider">PORTFÓLIO</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Nossas Soluções Desenvolvidas</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="glass-card hover-float overflow-hidden rounded-2xl reveal-element">
            <div class="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
              <div class="absolute top-4 right-4 w-20 h-20 text-white/20">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 class="text-white text-xl font-bold mt-16">Sistema de Gestão Industrial</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600">Sistema completo para gestão de processos industriais, controle de produção e qualidade.</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">ERP</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">Indústria</span>
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Web</span>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="glass-card hover-float overflow-hidden rounded-2xl reveal-element">
            <div class="relative h-48 bg-gradient-to-br from-green-500 to-emerald-600 p-6">
              <div class="absolute top-4 right-4 w-20 h-20 text-white/20">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-white text-xl font-bold mt-16">Sistema de Gestão Financeira</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600">Controle financeiro completo com fluxo de caixa, contas a pagar e receber, DRE e mais.</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Financeiro</span>
                <span class="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-sm">Cloud</span>
                <span class="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm">Mobile</span>
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="glass-card hover-float overflow-hidden rounded-2xl reveal-element">
            <div class="relative h-48 bg-gradient-to-br from-purple-500 to-pink-600 p-6">
              <div class="absolute top-4 right-4 w-20 h-20 text-white/20">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                </svg>
              </div>
              <h3 class="text-white text-xl font-bold mt-16">Sistema de Gestão Educacional</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600">Plataforma completa para gestão escolar, incluindo matrículas, notas, frequência e comunicação.</p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Educação</span>
                <span class="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">Web App</span>
                <span class="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA - Com efeito de profundidade -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
      <!-- Elementos decorativos -->
      <div class="absolute inset-0 modern-grid-pattern opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <!-- Conteúdo existente do CTA -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para Transformar seu Negócio?
          </h2>
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como um software personalizado pode impulsionar sua empresa ao próximo nível.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contato" class="modern-button px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Solicitar Orçamento
            </a>
            <a href="#" class="modern-button px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
              Agendar Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
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

    // Efeito Parallax
    window.addEventListener('scroll', () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
      });
    });
  }
}
</script>

<style scoped>
/* Variáveis de design atualizadas */
:root {
  --glass-bg: rgba(255, 255, 255, 0.8);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  --card-border-radius: 1.5rem;
  --neu-shadow: 20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff;
}

/* Efeitos de cartão melhorados */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--card-border-radius);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.glass-card:hover::before {
  left: 100%;
}

.hover-float:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

/* Animações melhoradas */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* Efeitos de texto */
.gradient-text {
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
}

.gradient-text::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #2563eb, #4f46e5);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.gradient-text:hover::after {
  transform: scaleX(1);
}

/* Contador com efeito neon */
.counter-wrapper {
  position: relative;
  overflow: hidden;
}

.counter {
  font-variant-numeric: tabular-nums;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;
}

.counter::after {
  content: '+';
  position: absolute;
  right: -20px;
  opacity: 0;
  transition: 0.3s;
}

.counter.active::after {
  opacity: 1;
  right: -10px;
}

/* Botões modernos aprimorados */
.modern-button {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  z-index: 1;
}

.modern-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  transform: translate(-50%, -50%) rotate(45deg) translateY(100%);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.modern-button:hover::before {
  transform: translate(-50%, -50%) rotate(45deg) translateY(-100%);
}

.modern-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Grid pattern animado */
.modern-grid-pattern {
  background-image: 
    linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: patternMove 20s linear infinite;
}

@keyframes patternMove {
  0% { background-position: 0 0; }
  100% { background-position: 30px 30px; }
}

/* Linha de processo animada */
.process-line {
  height: 2px;
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  position: relative;
  overflow: hidden;
}

.process-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: processLine 3s linear infinite;
}

@keyframes processLine {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Efeitos de cartão de solução */
.solution-card {
  position: relative;
  overflow: hidden;
}

.solution-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%);
  transform: rotate(45deg);
  transition: 0.5s;
  z-index: 1;
}

.solution-card:hover::before {
  transform: rotate(225deg);
}

/* Animação do gradiente melhorada */
.animate-gradient-x {
  background-size: 400% 400%;
  animation: gradient-x 15s ease infinite;
}

@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style> 