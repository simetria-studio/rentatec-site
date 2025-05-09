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
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <!-- Contact Information -->
          <div class="lg:col-span-4">
            <div class="space-y-8 bg-white p-8 rounded-3xl shadow-soft">
              <div>
                <h2 class="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h2>
                <p class="text-gray-500 mb-8">
                  Escolha a melhor forma de entrar em contato conosco
                </p>
              </div>

              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-soft">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Endereço</h3>
                    <p class="mt-1 text-gray-500">
                      Av. Paulista, 1234<br>
                      Bela Vista, São Paulo - SP
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-soft">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Telefone</h3>
                    <p class="mt-1 text-gray-500">
                      <a href="tel:+551199999999" class="hover:text-blue-600 transition-colors">
                        (11) 99999-9999
                      </a>
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-soft">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 class="text-lg font-medium text-gray-900">Email</h3>
                    <p class="mt-1 text-gray-500">
                      <a href="mailto:contato@exemplo.com" class="hover:text-blue-600 transition-colors">
                        contato@exemplo.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="pt-8 border-t border-gray-100">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Redes Sociais</h3>
                <div class="flex space-x-5">
                  <a href="#" class="group">
                    <div class="p-3 bg-gray-50 rounded-xl transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500">
                      <svg class="w-5 h-5 text-gray-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" class="group">
                    <div class="p-3 bg-gray-50 rounded-xl transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
                      <svg class="w-5 h-5 text-gray-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="#" class="group">
                    <div class="p-3 bg-gray-50 rounded-xl transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-800">
                      <svg class="w-5 h-5 text-gray-400 transition-colors group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-8">
            <div class="bg-white p-8 rounded-3xl shadow-soft">
              <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-y-6">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
                    <div class="mt-1 relative">
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        v-model="formData.name"
                        :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': errors.name}"
                        class="block w-full px-4 py-3 border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                      <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                    </div>
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        v-model="formData.email"
                        :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': errors.email}"
                        class="block w-full px-4 py-3 border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                      <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
                    <div class="mt-1">
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        v-model="formData.phone"
                        v-mask="'(##) #####-####'"
                        :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': errors.phone}"
                        class="block w-full px-4 py-3 border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="(00) 00000-0000"
                      >
                      <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
                    </div>
                  </div>

                  <div>
                    <label for="subject" class="block text-sm font-medium text-gray-700">Assunto</label>
                    <div class="mt-1">
                      <input 
                        type="text" 
                        name="subject" 
                        id="subject" 
                        v-model="formData.subject"
                        :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': errors.subject}"
                        class="block w-full px-4 py-3 border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        required
                      >
                      <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Mensagem</label>
                  <div class="mt-1">
                    <textarea 
                      name="message" 
                      id="message" 
                      rows="4" 
                      v-model="formData.message"
                      :class="{'border-red-300 focus:ring-red-500 focus:border-red-500': errors.message}"
                      class="block w-full px-4 py-3 border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      required
                    ></textarea>
                    <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
                  </div>
                </div>

                <div>
                  <button 
                    type="submit"
                    :disabled="isSubmitting"
                    class="inline-flex justify-center w-full px-6 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 border border-transparent rounded-xl shadow-sm hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-all transform hover:scale-[1.02]"
                  >
                    <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notification -->
    <div 
      v-if="notification.show"
      :class="[
        'fixed bottom-4 right-4 px-6 py-4 rounded-xl shadow-lg transform transition-all duration-500',
        notification.type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
      ]"
      style="z-index: 50;"
    >
      <div class="flex items-center space-x-3">
        <svg 
          v-if="notification.type === 'success'"
          class="h-6 w-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg
          v-else
          class="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <p class="text-white font-medium">{{ notification.message }}</p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import pkg from 'vue-the-mask'
const { vMask } = pkg

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const errors = reactive({})
const notification = reactive({
  show: false,
  message: '',
  type: 'success'
})

const validateForm = () => {
  errors.name = formData.value.name.length < 3 ? 'O nome deve ter pelo menos 3 caracteres' : ''
  errors.email = !formData.value.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? 'Email inválido' : ''
  errors.phone = formData.value.phone && !formData.value.phone.match(/^\(\d{2}\) \d{5}-\d{4}$/) ? 'Telefone inválido' : ''
  errors.subject = formData.value.subject.length < 3 ? 'O assunto deve ter pelo menos 3 caracteres' : ''
  errors.message = formData.value.message.length < 10 ? 'A mensagem deve ter pelo menos 10 caracteres' : ''

  return !Object.values(errors).some(error => error)
}

const showNotification = (message, type = 'success') => {
  notification.show = true
  notification.message = message
  notification.type = type

  setTimeout(() => {
    notification.show = false
  }, 5000)
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  
  try {
    // Aqui você pode implementar a lógica de envio do formulário
    // Por exemplo, enviar para uma API
    console.log('Dados do formulário:', formData.value)
    
    // Simular um delay para demonstração
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Limpar o formulário após o envio
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
    
    showNotification('Mensagem enviada com sucesso!')
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    showNotification('Erro ao enviar mensagem. Por favor, tente novamente.', 'error')
  } finally {
    isSubmitting.value = false
  }
}
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