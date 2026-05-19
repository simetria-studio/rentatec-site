<template>
  <div class="min-h-screen bg-white">
    <NavBar />

    <main>
      <section class="relative overflow-hidden bg-white pt-28 md:pt-32">
        <div class="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl lg:block"></div>

        <div class="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">Contato</p>
            <h1 class="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Agende um diagnóstico para entender onde sua operação pode ganhar controle
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Conte o que está travando a rotina da empresa. A Rentatec avalia se o melhor caminho é ERP, automação de processos, fiscal, integração ou desenvolvimento sob medida.
            </p>

            <div class="mt-9 grid gap-4 sm:grid-cols-3">
              <div
                v-for="item in contactHighlights"
                :key="item.title"
                class="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <p class="text-sm font-black text-slate-950">{{ item.title }}</p>
                <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.description }}</p>
              </div>
            </div>

            <div class="mt-10 rounded-2xl bg-slate-950 p-6 text-white">
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">Atendimento</p>
              <div class="mt-5 grid gap-3 xl:grid-cols-2">
                <a
                  v-for="channel in channels"
                  :key="channel.label"
                  :href="channel.href"
                  class="min-w-0 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 sm:p-5"
                >
                  <span class="block text-sm font-bold text-slate-300">{{ channel.label }}</span>
                  <strong :class="['mt-1 block text-lg font-black leading-tight text-white sm:text-xl', channel.valueClass]">
                    {{ channel.value }}
                  </strong>
                </a>
              </div>
            </div>
          </div>

          <div class="lg:pt-5">
            <form class="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 md:p-8" @submit.prevent="submitLeadForm">
              <div class="mb-7">
                <h2 class="text-2xl font-black text-slate-950">Fale com a Rentatec</h2>
                <p class="mt-2 text-sm leading-6 text-slate-600">
                  Responderemos com o próximo passo para avaliar sua necessidade.
                </p>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-name" class="block text-sm font-bold text-slate-800">Nome completo *</label>
                  <input
                    id="lead-name"
                    v-model="leadForm.name"
                    type="text"
                    required
                    class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label for="lead-email" class="block text-sm font-bold text-slate-800">E-mail *</label>
                  <input
                    id="lead-email"
                    v-model="leadForm.email"
                    type="email"
                    required
                    class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-phone" class="block text-sm font-bold text-slate-800">Telefone / WhatsApp</label>
                  <input
                    id="lead-phone"
                    v-model="leadForm.phone"
                    type="tel"
                    class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label for="lead-company" class="block text-sm font-bold text-slate-800">Empresa</label>
                  <input
                    id="lead-company"
                    v-model="leadForm.company_name"
                    type="text"
                    class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div class="mt-4">
                <label for="lead-interest" class="block text-sm font-bold text-slate-800">Principal necessidade</label>
                <select
                  id="lead-interest"
                  v-model="leadForm.interest"
                  class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="ERP e gestão operacional">ERP e gestão operacional</option>
                  <option value="X-ERP Notas / fiscal">X-ERP Notas / fiscal</option>
                  <option value="Kanban, BPMN e automação de processos">Kanban, BPMN e automação de processos</option>
                  <option value="Integrações entre sistemas">Integrações entre sistemas</option>
                  <option value="Software personalizado">Software personalizado</option>
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </div>

              <div class="mt-4">
                <label for="lead-notes" class="block text-sm font-bold text-slate-800">Mensagem</label>
                <textarea
                  id="lead-notes"
                  v-model="leadForm.notes"
                  rows="5"
                  class="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#043259] focus:ring-2 focus:ring-[#043259]/15"
                  placeholder="Ex.: queremos reduzir retrabalho entre financeiro, fiscal e aprovações internas."
                ></textarea>
              </div>

              <div
                v-if="leadMessage"
                class="mt-5 rounded-lg border px-4 py-3 text-sm font-semibold"
                :class="leadMessageType === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-200 bg-red-50 text-red-700'"
              >
                {{ leadMessage }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="mt-6 w-full rounded-lg bg-[#043259] px-6 py-4 text-base font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#0b4779] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{ isSubmitting ? 'Enviando...' : 'Agendar diagnóstico' }}
              </button>

              <p class="mt-4 text-center text-xs leading-5 text-slate-500">
                Seus dados serão usados apenas para retorno comercial da Rentatec.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>

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
  interest: '',
  notes: ''
})

const contactHighlights = [
  {
    title: '1. Mapeamento',
    description: 'Entendemos área, volume, sistemas e pontos de retrabalho.'
  },
  {
    title: '2. Direção',
    description: 'Indicamos se faz sentido ERP, Kanban, fiscal, integração ou sob medida.'
  },
  {
    title: '3. Próximo passo',
    description: 'Você recebe uma conversa objetiva para avançar com segurança.'
  }
]

const channels = [
  {
    label: 'Telefone',
    value: '(41) 3049-2811',
    href: 'tel:+554130492811'
  },
  {
    label: 'WhatsApp',
    value: '(41) 98850-9971',
    href: 'https://wa.me/5541988509971'
  },
  {
    label: 'E-mail',
    value: 'contato@rentatec.com.br',
    href: 'mailto:contato@rentatec.com.br',
    valueClass: 'break-all'
  },
  {
    label: 'Localização',
    value: 'Curitiba - PR',
    href: 'https://www.google.com/maps/search/?api=1&query=Curitiba%20PR'
  }
]

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
        notes: leadForm.interest ? `Principal necessidade: ${leadForm.interest}\n\n${leadForm.notes}` : leadForm.notes,
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
    leadForm.interest = ''
    leadForm.notes = ''
  } catch (error) {
    leadMessageType.value = 'error'
    leadMessage.value = error instanceof Error ? error.message : 'Ocorreu um erro ao enviar.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
