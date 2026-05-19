<template>
  <main class="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
    <section class="relative bg-slate-950 pt-10 text-white md:pt-14">
      <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(34,211,238,0.22),transparent_28%)]"></div>
      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <img class="mb-10 h-9 w-auto" src="/assets/images/logo-white.png" alt="Rentatec" />
          <h1 class="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            Contratos claros, aprovações sob controle e menos cobrança manual
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            O X-ERP Kanban organiza elaboração, revisão, aprovação, assinatura, renovação e aditivos em fluxos rastreáveis, com responsáveis, SLA, automações e indicadores para Jurídico e Comercial trabalharem alinhados.
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
                  <p class="mt-1 text-sm font-bold text-slate-950">Gestão de contratos</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">SLA 93%</span>
                  <span class="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">8 revisões</span>
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
              <p class="text-sm font-bold text-slate-950">Automação ativa: enviar para assinatura quando Jurídico e Comercial aprovarem</p>
              <span class="shrink-0 rounded-md bg-cyan-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-700">Menos follow-up</span>
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
              Do contrato parado na caixa de entrada para um fluxo com dono, prazo e histórico
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-600">
              Você define as etapas do ciclo contratual, conecta Jurídico, Comercial, Financeiro e diretoria, e acompanha cada contrato com histórico, prazo e prioridade.
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

    <section class="border-y border-slate-200 bg-white py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Exemplos de fluxo</p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Fluxos contratuais desenhados etapa por etapa
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Cada fluxo pode ter campos obrigatórios, documentos, responsáveis, prazos, aprovações, cláusulas críticas e automações próprias.
          </p>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div class="max-h-[720px] overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-sm">
            <button
              v-for="(flow, index) in flowExamples"
              :key="flow.title"
              type="button"
              class="block w-full border-b border-slate-200 px-6 py-5 text-left transition last:border-b-0"
              :class="activeFlowIndex === index ? 'bg-cyan-600 text-white' : 'bg-white text-slate-700 hover:bg-cyan-50 hover:text-slate-950'"
              @click="activeFlowIndex = index"
            >
              <span class="block text-sm font-black uppercase tracking-wide" :class="activeFlowIndex === index ? 'text-cyan-100' : 'text-cyan-700'">
                {{ flow.area }}
              </span>
              <span class="mt-2 block text-lg font-black">{{ flow.tab }}</span>
            </button>
          </div>

          <div class="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-8">
            <div class="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">{{ activeFlow.area }}</p>
                <h3 class="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                  {{ activeFlow.title }}
                </h3>
                <p class="mt-5 text-base leading-8 text-slate-600">{{ activeFlow.description }}</p>

                <div class="mt-6 rounded-lg bg-white p-5">
                  <p class="text-sm font-black uppercase tracking-wide text-slate-500">Automação exemplo</p>
                  <p class="mt-2 text-base font-bold leading-7 text-slate-800">{{ activeFlow.automation }}</p>
                </div>
              </div>

              <div class="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div class="grid grid-cols-[180px_1fr] border-b border-slate-200 bg-slate-950 px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-300">
                  <span>Etapa</span>
                  <span>O que acontece no fluxo</span>
                </div>
                <div class="divide-y divide-slate-100">
                  <div v-for="step in activeFlow.steps" :key="step.stage" class="grid grid-cols-[180px_1fr] gap-4 px-4 py-4">
                    <span class="self-start rounded-md bg-cyan-100 px-3 py-2 text-sm font-black leading-5 text-cyan-800">
                      {{ step.stage }}
                    </span>
                    <p class="text-base font-bold leading-7 text-slate-700">{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-3">
          <div v-for="detail in activeFlow.details" :key="detail.label" class="rounded-lg border border-slate-200 bg-white p-5">
            <p class="text-sm font-black uppercase tracking-wide text-cyan-700">{{ detail.label }}</p>
            <p class="mt-2 text-sm font-semibold leading-6 text-slate-600">{{ detail.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="casos" class="bg-white py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Casos de uso</p>
          <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Organize contratos sem espalhar controle em planilhas, e-mails e mensagens
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
            A liderança acompanha volume, contratos em atraso, gargalos de aprovação, responsáveis e tempo em cada etapa sem esperar consolidação manual.
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
            Veja o X-ERP Kanban aplicado ao ciclo de contratos da sua empresa
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Em uma conversa objetiva, entendemos seus gargalos contratuais e mostramos como estruturar etapas, responsáveis, alertas e indicadores para sua operação jurídica e comercial.
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
            <label for="lead-notes" class="mb-1.5 block text-sm font-bold text-slate-700">Qual fluxo de contratos você quer organizar?</label>
            <textarea id="lead-notes" v-model="leadForm.notes" rows="4" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Ex.: elaboração, revisão jurídica, aprovação comercial, assinatura, renovação, aditivos..."></textarea>
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
import { computed, reactive, ref } from 'vue'

useSeoMeta({
  title: 'X-ERP Kanban Contratos | Gestão visual para Jurídico e Comercial',
  description: 'Landing page do X-ERP Kanban para organizar elaboração, revisão, aprovação, assinatura, renovação e aditivos de contratos.'
})

const leadFormKey = '80d73f07-24ef-411c-bafd-16fe938a466c'
const leadsApiEndpoint = 'https://suporte.rentatec.com.br/api/leads/capture'
const isSubmitting = ref(false)
const leadMessage = ref('')
const leadMessageType = ref('success')
const activeFlowIndex = ref(0)
const leadForm = reactive({
  name: '',
  email: '',
  phone: '',
  company_name: '',
  notes: ''
})

const heroMetrics = [
  { value: 'SLA', label: 'por aprovação' },
  { value: 'Auto', label: 'alertas e repasses' },
  { value: '360°', label: 'histórico contratual' }
]

const kanbanColumns = [
  {
    title: 'Solicitação',
    cards: [
      { tag: 'Novo', tagClass: 'bg-cyan-50 text-cyan-700', sla: '2h', title: 'Contrato cliente enterprise', owner: 'Comercial -> Jurídico', progress: '28%', progressClass: 'bg-cyan-500' },
      { tag: 'Prioridade', tagClass: 'bg-amber-50 text-amber-700', sla: 'Hoje', title: 'Aditivo de escopo', owner: 'CS -> Jurídico', progress: '42%', progressClass: 'bg-amber-500' }
    ]
  },
  {
    title: 'Revisão',
    cards: [
      { tag: 'Jurídico', tagClass: 'bg-blue-50 text-blue-700', sla: '1d', title: 'Revisão de cláusula LGPD', owner: 'Jurídico', progress: '54%', progressClass: 'bg-blue-500' },
      { tag: 'Comercial', tagClass: 'bg-violet-50 text-violet-700', sla: '3d', title: 'Condição comercial especial', owner: 'Comercial', progress: '64%', progressClass: 'bg-violet-500' }
    ]
  },
  {
    title: 'Aprovação',
    cards: [
      { tag: 'Atenção', tagClass: 'bg-red-50 text-red-700', sla: 'Vence hoje', title: 'Aprovação diretoria', owner: 'Diretoria', progress: '76%', progressClass: 'bg-red-500' },
      { tag: 'OK', tagClass: 'bg-emerald-50 text-emerald-700', sla: '8h', title: 'Minuta aprovada', owner: 'Jurídico -> Cliente', progress: '86%', progressClass: 'bg-emerald-500' }
    ]
  },
  {
    title: 'Assinatura',
    cards: [
      { tag: 'Fechado', tagClass: 'bg-slate-100 text-slate-700', sla: 'No prazo', title: 'Contrato assinado', owner: 'Comercial + Cliente', progress: '100%', progressClass: 'bg-slate-700' }
    ]
  }
]

const pains = [
  { title: 'Menos cobrança manual', description: 'Alertas reduzem follow-up por e-mail e mensagens entre Jurídico, Comercial e diretoria.' },
  { title: 'Aprovações visíveis', description: 'A gestão enxerga onde o contrato parou, com quem está e há quanto tempo.' },
  { title: 'Fluxo padronizado', description: 'Cada tipo de contrato segue etapas, responsáveis, critérios de avanço e SLA próprios.' },
  { title: 'Histórico rastreável', description: 'Toda revisão, aprovação, anexo e assinatura fica registrada para auditoria e governança.' }
]

const workflowSteps = [
  { number: '01', title: 'Modele cada contrato', description: 'Crie fluxos para minuta, revisão, aprovação, assinatura, renovação, aditivos e rescisões.' },
  { number: '02', title: 'Automatize handoffs', description: 'Configure avisos, repasses e mudanças de etapa para reduzir follow-up manual entre áreas.' },
  { number: '03', title: 'Gerencie por SLA', description: 'Acompanhe prazos, atrasos, pendências e gargalos com visão jurídica, comercial e executiva.' }
]

const flowExamples = [
  {
    area: 'Elaboração',
    tab: 'Minuta inicial',
    title: 'Elaboração de contrato comercial',
    description: 'Padronize a criação da minuta a partir da solicitação comercial, com campos obrigatórios, anexos e critérios de revisão.',
    automation: 'quando a solicitação estiver completa, mover para revisão jurídica e notificar o responsável pela minuta.',
    steps: [
      { stage: 'Solicitação', description: 'Comercial informa cliente, escopo, valor, prazo, condições comerciais e documentos de apoio.' },
      { stage: 'Triagem', description: 'Jurídico valida se os dados mínimos estão completos e devolve pendências quando necessário.' },
      { stage: 'Minuta', description: 'Contrato é elaborado com modelo adequado, cláusulas padrão e condições específicas.' },
      { stage: 'Validação', description: 'Comercial revisa escopo, valores, vigência e anexos antes do envio ao cliente.' },
      { stage: 'Envio', description: 'Minuta aprovada segue para negociação ou assinatura conforme regra do processo.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Comercial, jurídico, financeiro e gestor da conta.' },
      { label: 'Campos úteis', value: 'Cliente, CNPJ, escopo, valor, vigência, anexos, modelo e prioridade.' },
      { label: 'Resultado', value: 'Minutas mais consistentes e menos retrabalho por informação incompleta.' }
    ]
  },
  {
    area: 'Revisão',
    tab: 'Revisão jurídica',
    title: 'Revisão jurídica e negociação de cláusulas',
    description: 'Controle versões, comentários, riscos, cláusulas críticas e devolutivas até chegar na minuta aprovada.',
    automation: 'se uma cláusula de risco for marcada, exigir aprovação jurídica antes de liberar assinatura.',
    steps: [
      { stage: 'Recebimento', description: 'Contrato chega com minuta, anexos e histórico de negociação comercial.' },
      { stage: 'Análise', description: 'Jurídico revisa cláusulas de responsabilidade, pagamento, rescisão, LGPD e foro.' },
      { stage: 'Ajustes', description: 'Comentários e alterações são registrados com versão, responsável e prazo.' },
      { stage: 'Negociação', description: 'Pontos alterados pelo cliente voltam ao Jurídico ou Comercial conforme impacto.' },
      { stage: 'Aprovação', description: 'Minuta final é liberada para assinatura após validação das áreas responsáveis.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Jurídico, comercial, cliente, diretoria e financeiro quando necessário.' },
      { label: 'Campos úteis', value: 'Versão, cláusulas críticas, risco, comentários, anexos e aprovadores.' },
      { label: 'Resultado', value: 'Revisão rastreável, com menos perda de contexto entre versões.' }
    ]
  },
  {
    area: 'Aprovação',
    tab: 'Alçadas internas',
    title: 'Aprovação por alçada e exceções comerciais',
    description: 'Organize aprovações para descontos, prazos especiais, riscos jurídicos, multas, garantias e condições fora do padrão.',
    automation: 'se desconto ou cláusula sair da política, direcionar automaticamente para diretoria ou financeiro.',
    steps: [
      { stage: 'Exceção', description: 'Comercial marca condição fora do padrão e informa justificativa comercial.' },
      { stage: 'Análise', description: 'Financeiro, jurídico ou diretoria avaliam impacto, risco e margem.' },
      { stage: 'Decisão', description: 'Aprovação, reprovação ou pedido de ajuste fica registrado no histórico.' },
      { stage: 'Ajuste', description: 'Contrato volta para adequação da minuta conforme decisão da alçada.' },
      { stage: 'Liberação', description: 'Minuta aprovada segue para cliente, assinatura ou próxima etapa contratual.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Comercial, financeiro, jurídico, diretoria e gestor da conta.' },
      { label: 'Campos úteis', value: 'Tipo de exceção, valor, margem, risco, justificativa e aprovador.' },
      { label: 'Resultado', value: 'Menos aprovação informal e mais governança sobre condições especiais.' }
    ]
  },
  {
    area: 'Assinatura',
    tab: 'Coleta de assinaturas',
    title: 'Assinatura e formalização do contrato',
    description: 'Controle envio, assinatura, pendências, anexos e guarda do contrato assinado em uma única trilha.',
    automation: 'se o contrato ficar sem assinatura por 48h, enviar lembrete ao responsável e alertar o comercial.',
    steps: [
      { stage: 'Preparação', description: 'Minuta final e anexos são validados antes do envio para assinatura.' },
      { stage: 'Envio', description: 'Contrato é encaminhado aos signatários internos e externos.' },
      { stage: 'Acompanhamento', description: 'Pendências de assinatura ficam visíveis com prazo e responsável.' },
      { stage: 'Conferência', description: 'Contrato assinado é conferido para garantir anexos, rubricas e assinaturas corretas.' },
      { stage: 'Arquivo', description: 'Documento final é arquivado e vinculado ao cliente, vencimento e responsáveis.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Comercial, jurídico, cliente, signatários e administrativo.' },
      { label: 'Campos úteis', value: 'Signatários, e-mails, anexos, data de envio, prazo e status de assinatura.' },
      { label: 'Resultado', value: 'Assinatura acompanhada de ponta a ponta, sem depender de cobrança manual.' }
    ]
  },
  {
    area: 'Renovação',
    tab: 'Vencimento e renovação',
    title: 'Renovação de contratos com alerta de vencimento',
    description: 'Antecipe renovações, reajustes, notificações e negociações antes que o contrato vença.',
    automation: '90 dias antes do vencimento, criar card de renovação e notificar Comercial, Jurídico e financeiro.',
    steps: [
      { stage: 'Alerta', description: 'Contrato entra em fila de renovação conforme prazo de aviso definido.' },
      { stage: 'Análise', description: 'Áreas avaliam uso, reajuste, pendências, performance e interesse de renovação.' },
      { stage: 'Negociação', description: 'Comercial negocia valores, prazo e condições com cliente ou fornecedor.' },
      { stage: 'Aditivo', description: 'Jurídico prepara termo de renovação ou novo instrumento contratual.' },
      { stage: 'Formalização', description: 'Renovação assinada atualiza vigência, responsáveis e próximos alertas.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Comercial, jurídico, financeiro, cliente, fornecedor e gestor do contrato.' },
      { label: 'Campos úteis', value: 'Vencimento, aviso prévio, índice de reajuste, valor, vigência e responsável.' },
      { label: 'Resultado', value: 'Renovações antecipadas, com menos risco de vencimento sem tratativa.' }
    ]
  },
  {
    area: 'Aditivos',
    tab: 'Alterações contratuais',
    title: 'Aditivos de escopo, prazo ou valor',
    description: 'Controle solicitações de mudança contratual com análise de impacto, aprovação e formalização.',
    automation: 'quando o aditivo envolver aumento de valor, solicitar aprovação financeira antes da assinatura.',
    steps: [
      { stage: 'Solicitação', description: 'Área responsável informa contrato base, motivo, alteração desejada e urgência.' },
      { stage: 'Impacto', description: 'Comercial, financeiro e operação avaliam impacto de valor, prazo e entrega.' },
      { stage: 'Minuta', description: 'Jurídico elabora aditivo com cláusulas e referências ao contrato original.' },
      { stage: 'Aprovação', description: 'Áreas aprovam a alteração antes do envio para assinatura.' },
      { stage: 'Vinculação', description: 'Aditivo assinado é anexado ao contrato principal e atualiza dados de controle.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Comercial, jurídico, financeiro, operação e gestor do contrato.' },
      { label: 'Campos úteis', value: 'Contrato base, tipo de alteração, valor, vigência, anexos e aprovadores.' },
      { label: 'Resultado', value: 'Aditivos formalizados com histórico e vínculo claro ao contrato original.' }
    ]
  },
  {
    area: 'Rescisão',
    tab: 'Encerramento contratual',
    title: 'Rescisão e encerramento de contrato',
    description: 'Organize análise de aviso, multas, obrigações pendentes, comunicação e documentos de encerramento.',
    automation: 'se houver aviso prévio contratual, criar alerta antes da data limite de notificação.',
    steps: [
      { stage: 'Pedido', description: 'Área solicitante registra motivo, contrato, data desejada e contexto da rescisão.' },
      { stage: 'Análise', description: 'Jurídico avalia aviso prévio, multa, obrigações, riscos e documentação.' },
      { stage: 'Aprovação', description: 'Diretoria, financeiro ou área responsável aprovam estratégia de encerramento.' },
      { stage: 'Comunicação', description: 'Notificação é enviada ao cliente ou fornecedor com registro de prazo e evidência.' },
      { stage: 'Arquivo', description: 'Encerramento final reúne termo, comprovações, pendências e histórico.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Jurídico, financeiro, área demandante, diretoria, cliente ou fornecedor.' },
      { label: 'Campos úteis', value: 'Motivo, data limite, multa, aviso prévio, pendências e documentos.' },
      { label: 'Resultado', value: 'Rescisões conduzidas com prazo, governança e menor risco de perda de notificação.' }
    ]
  },
  {
    area: 'Compliance',
    tab: 'Auditoria e documentos',
    title: 'Organização de anexos, evidências e compliance',
    description: 'Mantenha documentos, versões, aprovações e evidências contratuais organizados para auditoria.',
    automation: 'se faltar anexo obrigatório, impedir avanço para assinatura e devolver ao responsável pela etapa.',
    steps: [
      { stage: 'Checklist', description: 'Sistema exige documentos obrigatórios conforme tipo de contrato ou fornecedor.' },
      { stage: 'Validação', description: 'Responsável confere anexos, certidões, propostas, procurações e versões.' },
      { stage: 'Pendência', description: 'Itens ausentes voltam para a área responsável com comentário e prazo.' },
      { stage: 'Aprovação', description: 'Contrato só avança quando critérios documentais forem cumpridos.' },
      { stage: 'Auditoria', description: 'Histórico fica disponível com datas, responsáveis, anexos e decisões.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Jurídico, compliance, compras, comercial, financeiro e auditoria.' },
      { label: 'Campos úteis', value: 'Tipo de documento, validade, versão, responsável, obrigatoriedade e status.' },
      { label: 'Resultado', value: 'Contratos com dossiê completo e trilha de decisão pronta para auditoria.' }
    ]
  }
]

const activeFlow = computed(() => flowExamples[activeFlowIndex.value])

const useCases = [
  { area: 'Jurídico e Comercial', title: 'Gestão de contratos', description: 'Elaboração, revisão, aprovação, assinatura e renovação com responsáveis e prazos claros.' },
  { area: 'Vendas', title: 'Contratos com clientes', description: 'Controle minutas, condições comerciais, exceções e assinaturas sem perder contexto da negociação.' },
  { area: 'Compras', title: 'Contratos com fornecedores', description: 'Organize análise de fornecedor, documentos, aprovações, vigência e renovação.' },
  { area: 'Financeiro', title: 'Condições e alçadas', description: 'Valide descontos, valores, reajustes, multas e impactos financeiros antes da assinatura.' },
  { area: 'Diretoria', title: 'Aprovações críticas', description: 'Dê visibilidade para contratos de alto valor, cláusulas sensíveis e exceções fora da política.' },
  { area: 'Compliance', title: 'Histórico e auditoria', description: 'Mantenha trilha de versões, anexos, decisões, aprovações e assinaturas para consulta segura.' }
]

const indicators = [
  { value: 'Tempo por etapa', label: 'Identifique onde contratos passam mais tempo: revisão, aprovação, cliente ou assinatura.' },
  { value: 'SLA vencendo', label: 'Antecipe atrasos em revisão jurídica, alçadas comerciais, assinatura e renovação.' },
  { value: 'Pendências por dono', label: 'Veja se o contrato está com Jurídico, Comercial, financeiro, diretoria ou cliente.' },
  { value: 'Histórico completo', label: 'Audite versões, anexos, comentários, aprovações e assinaturas em uma única linha do tempo.' }
]

const contactHighlights = [
  'Demonstração guiada pelo ciclo real de contratos da sua empresa.',
  'Mapeamento dos gargalos em revisão, aprovação, assinatura e renovação.',
  'Indicação dos fluxos e automações com maior ganho para Jurídico e Comercial.'
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
