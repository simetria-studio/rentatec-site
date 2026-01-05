<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br rounded-full filter blur-3xl from-blue-100/30 to-purple-100/30 animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full filter blur-3xl from-indigo-100/30 to-blue-100/30 animate-pulse"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <span class="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">Fale Conosco</span>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Como Podemos Ajudar?
          </h1>
          <p class="mt-6 text-xl text-gray-500">
            Estamos aqui para responder suas dúvidas e ouvir suas sugestões
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="relative py-16">
      <div class="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div class="bg-white p-4 md:p-8 rounded-3xl shadow-soft">
          <!-- Pipefy Form -->
          <div class="w-full">
            <iframe 
              src="https://app.pipefy.com/public/form/kDESehIn?origem=1044463398&embedded=true" 
              frameborder="0" 
              class="w-full min-h-[800px] rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
// Lógica simplificada pois o formulário é externo
</script>

<style>
.shadow-soft {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}
</style> 