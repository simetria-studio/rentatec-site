<template>
  <main class="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
    <section class="relative bg-slate-950 pt-10 text-white md:pt-14">
      <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(34,211,238,0.22),transparent_28%)]"></div>
      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <img class="mb-10 h-9 w-auto" src="/assets/images/logo-white.png" alt="Rentatec" />
          <h1 class="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Processos claros, prazos sob controle e equipes alinhadas
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            O X-ERP Kanban transforma aprovações, tarefas e repasses entre áreas em fluxos rastreáveis, com responsáveis, SLA, automações e indicadores para a gestão agir antes do gargalo virar urgência.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              @click.prevent="scrollToSection('contato')"
              class="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-7 py-4 text-base font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Solicitar demonstração
            </a>
            <a
              href="#processo"
              @click.prevent="scrollToSection('processo')"
              class="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-base font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Ver como funciona
            </a>
          </div>

          <dl class="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div v-for="metric in heroMetrics" :key="metric.label">
              <dt class="text-2xl font-black text-white">{{ metric.value }}</dt>
              <dd class="mt-1 text-xs font-semibold uppercase leading-5 tracking-wide text-slate-400">{{ metric.label }}</dd>
            </div>
          </dl>
        </div>

        <div class="relative">
          <div class="rounded-xl border border-white/12 bg-white p-3 shadow-2xl shadow-cyan-950/40">
            <div class="rounded-lg border border-slate-200 bg-slate-50">
              <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <p class="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">X-ERP Kanban</p>
                  <p class="mt-1 text-sm font-bold text-slate-950">Operação de contratos</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">SLA 94%</span>
                  <span class="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">7 alertas</span>
                </div>
              </div>

              <div class="grid min-h-[430px] gap-3 overflow-x-auto p-3 md:grid-cols-4">
                <section v-for="column in kanbanColumns" :key="column.title" class="min-w-[220px] rounded-lg border border-slate-200 bg-white p-3">
                  <div class="mb-3 flex items-center justify-between">
                    <h2 class="text-sm font-black text-slate-900">{{ column.title }}</h2>
                    <span class="rounded bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{{ column.cards.length }}</span>
                  </div>

                  <article v-for="card in column.cards" :key="card.title" class="mb-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm last:mb-0">
                    <div class="mb-3 flex items-center justify-between gap-2">
                      <span class="rounded px-2 py-1 text-[11px] font-black uppercase tracking-wide" :class="card.tagClass">{{ card.tag }}</span>
                      <span class="text-[11px] font-bold text-slate-400">{{ card.sla }}</span>
                    </div>
                    <h3 class="text-sm font-black leading-5 text-slate-950">{{ card.title }}</h3>
                    <p class="mt-2 text-xs leading-5 text-slate-500">{{ card.owner }}</p>
                    <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div class="h-full rounded-full" :class="card.progressClass" :style="{ width: card.progress }"></div>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-6 left-8 right-8 hidden rounded-lg border border-cyan-100 bg-white px-5 py-4 shadow-xl shadow-cyan-950/10 md:block">
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-bold text-slate-950">Automação ativa: mover para Financeiro quando Jurídico aprovar</p>
              <span class="shrink-0 rounded-md bg-cyan-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-700">Sem cobrança manual</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-b border-slate-200 bg-white py-12">
      <div class="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div v-for="pain in pains" :key="pain.title" class="border-l-2 border-cyan-400 pl-5">
          <h2 class="text-base font-black text-slate-950">{{ pain.title }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ pain.description }}</p>
        </div>
      </div>
    </section>

    <section id="processo" class="bg-slate-50 py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Como funciona</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Do processo informal para uma rotina governada
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-600">
              Você define o fluxo real da operação, conecta as áreas responsáveis e acompanha cada demanda com histórico, prazo e prioridade.
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-3">
            <div v-for="step in workflowSteps" :key="step.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <span class="text-sm font-black text-cyan-700">{{ step.number }}</span>
              <h3 class="mt-4 text-xl font-black text-slate-950">{{ step.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="casos" class="bg-white py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Casos de uso</p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Organize fluxos críticos sem espalhar controle em planilhas e mensagens
          </h2>
        </div>

        <div class="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="useCase in useCases" :key="useCase.title" class="border-t border-slate-200 pt-5">
            <p class="text-sm font-black text-cyan-700">{{ useCase.area }}</p>
            <h3 class="mt-2 text-xl font-black text-slate-950">{{ useCase.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ useCase.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-950 py-16 text-white md:py-24">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Indicadores</p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            Gestão visual com dados que nascem da execução
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-300">
            O gestor acompanha volume, atrasos, gargalos, responsáveis e tempo em cada etapa sem esperar consolidação manual.
          </p>
        </div>

        <div class="grid gap-3 sm:grid-cols-2">
          <div v-for="indicator in indicators" :key="indicator.label" class="rounded-lg border border-white/10 bg-white/6 p-5">
            <p class="text-3xl font-black text-white">{{ indicator.value }}</p>
            <p class="mt-2 text-sm font-semibold leading-6 text-slate-300">{{ indicator.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="bg-white py-16 md:py-24">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Próximo passo</p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Veja o X-ERP Kanban aplicado ao seu processo real
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Em uma conversa objetiva, entendemos seus gargalos e mostramos como estruturar etapas, responsáveis, alertas e indicadores para sua operação.
          </p>
          <div class="mt-8 space-y-4">
            <div v-for="item in contactHighlights" :key="item" class="flex gap-3">
              <span class="mt-1 h-5 w-5 rounded bg-cyan-100 text-center text-sm font-black leading-5 text-cyan-700">✓</span>
              <p class="text-base font-semibold leading-7 text-slate-700">{{ item }}</p>
            </div>
          </div>
        </div>

        <form class="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8" @submit.prevent="submitLeadForm">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <label for="lead-name" class="mb-1.5 block text-sm font-bold text-slate-700">Nome completo *</label>
              <input id="lead-name" v-model="leadForm.name" type="text" required class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Seu nome" />
            </div>
            <div>
              <label for="lead-email" class="mb-1.5 block text-sm font-bold text-slate-700">E-mail *</label>
              <input id="lead-email" v-model="leadForm.email" type="email" required class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="seu@email.com" />
            </div>
          </div>

          <div class="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label for="lead-phone" class="mb-1.5 block text-sm font-bold text-slate-700">Telefone / WhatsApp</label>
              <input id="lead-phone" v-model="leadForm.phone" type="tel" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label for="lead-company" class="mb-1.5 block text-sm font-bold text-slate-700">Empresa</label>
              <input id="lead-company" v-model="leadForm.company_name" type="text" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Nome da empresa" />
            </div>
          </div>

          <div class="mt-4">
            <label for="lead-notes" class="mb-1.5 block text-sm font-bold text-slate-700">Qual processo você quer organizar?</label>
            <textarea id="lead-notes" v-model="leadForm.notes" rows="4" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Ex.: contratos, compras, tarefas internas, aprovações financeiras..."></textarea>
          </div>

          <div
            v-if="leadMessage"
            class="mt-4 rounded-lg border px-4 py-3 text-sm font-semibold"
            :class="leadMessageType === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-red-200 bg-red-50 text-red-700'"
          >
            {{ leadMessage }}
          </div>

          <button type="submit" :disabled="isSubmitting" class="mt-5 w-full rounded-lg bg-slate-950 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60">
            {{ isSubmitting ? 'Enviando...' : 'Quero agendar minha demonstração' }}
          </button>

          <p class="mt-4 text-center text-xs leading-5 text-slate-500">
            Sem compromisso. A Rentatec usa seus dados apenas para retornar o contato comercial solicitado.
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

useSeoMeta({
  title: 'X-ERP Kanban | Processos claros e equipes alinhadas',
  description: 'Landing page do X-ERP Kanban para organizar processos, aprovações, SLAs e responsáveis em uma gestão visual integrada.'
})

const leadFormKey = '80d73f07-24ef-411c-bafd-16fe938a466c'
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

const heroMetrics = [
  { value: 'SLA', label: 'por etapa' },
  { value: 'Auto', label: 'repasses' },
  { value: '360°', label: 'histórico' }
]

const kanbanColumns = [
  {
    title: 'Entrada',
    cards: [
      { tag: 'Novo', tagClass: 'bg-cyan-50 text-cyan-700', sla: '2h', title: 'Contrato fornecedor TI', owner: 'Comercial -> Jurídico', progress: '28%', progressClass: 'bg-cyan-500' },
      { tag: 'Prioridade', tagClass: 'bg-amber-50 text-amber-700', sla: 'Hoje', title: 'Compra emergencial', owner: 'Compras', progress: '42%', progressClass: 'bg-amber-500' }
    ]
  },
  {
    title: 'Validação',
    cards: [
      { tag: 'Em análise', tagClass: 'bg-blue-50 text-blue-700', sla: '1d', title: 'Aprovação de cadastro', owner: 'Financeiro', progress: '54%', progressClass: 'bg-blue-500' },
      { tag: 'RH', tagClass: 'bg-violet-50 text-violet-700', sla: '3d', title: 'Admissão - documentação', owner: 'Pessoas', progress: '64%', progressClass: 'bg-violet-500' }
    ]
  },
  {
    title: 'Aprovação',
    cards: [
      { tag: 'Atenção', tagClass: 'bg-red-50 text-red-700', sla: 'Vence hoje', title: 'Revisão de cláusula crítica', owner: 'Diretoria', progress: '76%', progressClass: 'bg-red-500' },
      { tag: 'OK', tagClass: 'bg-emerald-50 text-emerald-700', sla: '8h', title: 'Cotação validada', owner: 'Compras -> Fiscal', progress: '86%', progressClass: 'bg-emerald-500' }
    ]
  },
  {
    title: 'Concluído',
    cards: [
      { tag: 'Fechado', tagClass: 'bg-slate-100 text-slate-700', sla: 'No prazo', title: 'Renovação assinada', owner: 'Jurídico', progress: '100%', progressClass: 'bg-slate-700' }
    ]
  }
]

const pains = [
  { title: 'Menos cobrança manual', description: 'Alertas e repasses automáticos reduzem dependência de mensagens soltas.' },
  { title: 'Gargalos visíveis', description: 'A gestão enxerga onde parou, com quem está e há quanto tempo.' },
  { title: 'Processo padronizado', description: 'Etapas, donos e critérios de avanço deixam de depender da memória do time.' },
  { title: 'Histórico rastreável', description: 'Cada movimentação fica registrada para auditoria, gestão e melhoria contínua.' }
]

const workflowSteps = [
  { number: '01', title: 'Modele o fluxo', description: 'Crie etapas, campos, responsáveis, prioridades e regras conforme o processo real da empresa.' },
  { number: '02', title: 'Automatize handoffs', description: 'Configure aprovações, alertas e mudanças de etapa para reduzir repasses manuais entre áreas.' },
  { number: '03', title: 'Gerencie por SLA', description: 'Acompanhe prazos, atrasos, gargalos e indicadores com visão operacional e executiva.' }
]

const useCases = [
  { area: 'Jurídico e Comercial', title: 'Gestão de contratos', description: 'Elaboração, revisão, aprovação, assinatura e renovação com responsáveis e prazos claros.' },
  { area: 'Operação', title: 'Tarefas e demandas internas', description: 'Centralize solicitações com prioridade, histórico e visibilidade para líderes e executores.' },
  { area: 'Compras', title: 'Requisições e aprovações', description: 'Controle compras, cotações e aprovações sem depender de e-mails e planilhas paralelas.' },
  { area: 'RH', title: 'Admissões e rotinas de pessoas', description: 'Organize etapas de recrutamento, admissão, documentos e solicitações internas.' },
  { area: 'Financeiro', title: 'Prestação de contas', description: 'Estruture fluxos financeiros com conformidade, acompanhamento e trilha de aprovação.' },
  { area: 'Projetos', title: 'Backlog e entregas', description: 'Dê previsibilidade a projetos com etapas, responsáveis e alertas de atraso.' }
]

const indicators = [
  { value: 'Tempo por etapa', label: 'Identifique onde cada demanda passa mais tempo e priorize a melhoria certa.' },
  { value: 'SLA vencendo', label: 'Antecipe atrasos com alertas antes que o processo vire uma urgência.' },
  { value: 'Carga por responsável', label: 'Distribua melhor o trabalho e reduza filas invisíveis entre áreas.' },
  { value: 'Histórico completo', label: 'Audite decisões, mudanças de status e aprovações em uma única linha do tempo.' }
]

const contactHighlights = [
  'Demonstração guiada pelo processo da sua empresa.',
  'Mapeamento dos principais gargalos e pontos de automação.',
  'Indicação do plano mais aderente ao tamanho da operação.'
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

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
