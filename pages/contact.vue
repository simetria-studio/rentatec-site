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
          <form class="space-y-5 max-w-3xl mx-auto" @submit.prevent="submitLeadForm">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="lead-name" class="block mb-1 text-sm font-medium text-gray-700">Nome completo *</label>
                <input id="lead-name" v-model="leadForm.name" type="text" required class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Seu nome" />
              </div>
              <div>
                <label for="lead-email" class="block mb-1 text-sm font-medium text-gray-700">E-mail *</label>
                <input id="lead-email" v-model="leadForm.email" type="email" required class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="seu@email.com" />
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label for="lead-phone" class="block mb-1 text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                <input id="lead-phone" v-model="leadForm.phone" type="tel" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label for="lead-company" class="block mb-1 text-sm font-medium text-gray-700">Empresa</label>
                <input id="lead-company" v-model="leadForm.company_name" type="text" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Nome da empresa" />
              </div>
            </div>

            <div>
              <label for="lead-notes" class="block mb-1 text-sm font-medium text-gray-700">Mensagem</label>
              <textarea id="lead-notes" v-model="leadForm.notes" rows="4" class="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Como podemos ajudar?"></textarea>
            </div>

            <div v-if="leadMessage" class="rounded-lg border px-4 py-3 text-sm"
              :class="leadMessageType === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'">
              {{ leadMessage }}
            </div>

            <button type="submit" :disabled="isSubmitting" class="w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed">
              {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const leadFormKey = '5f47a51c-1533-4ce6-b0a4-e525f2598853'
const leadsApiEndpoint = 'https://suporte.rentatec.com.br/api/leads/capture'
const isSubmitting = ref(false)
const leadMessage = ref('')
const leadMessageType = ref('success')
const leadForm = reactive({
  name: '',
  email: '',
  phone: '',
  company_name: '',
  notes: ''
})

const submitLeadForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  leadMessage.value = ''

  try {
    const response = await fetch(leadsApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ...leadForm,
        form_key: leadFormKey
      })
    })

    const data = await response.json()
    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Não foi possível enviar o formulário.')
    }

    leadMessageType.value = 'success'
    leadMessage.value = data.message || 'Formulário enviado com sucesso!'
    leadForm.name = ''
    leadForm.email = ''
    leadForm.phone = ''
    leadForm.company_name = ''
    leadForm.notes = ''
  } catch (error) {
    leadMessageType.value = 'error'
    leadMessage.value = error instanceof Error ? error.message : 'Ocorreu um erro ao enviar.'
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
