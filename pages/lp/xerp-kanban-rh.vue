<template>
  <main class="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900">
    <section class="relative bg-slate-950 pt-10 text-white md:pt-14">
      <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.18),transparent_38%),radial-gradient(circle_at_85%_18%,rgba(34,211,238,0.22),transparent_28%)]"></div>
      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 md:pb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <img class="mb-10 h-9 w-auto" src="/assets/images/logo-white.png" alt="Rentatec" />
          <h1 class="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
            RH com processos claros, prazos sob controle e menos cobrança manual
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            O X-ERP Kanban organiza admissões, recrutamento, documentos, solicitações internas e rotinas de pessoas em fluxos rastreáveis, com responsáveis, SLA, automações e indicadores para o RH ganhar previsibilidade.
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
                  <p class="mt-1 text-sm font-bold text-slate-950">Operação de RH</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">SLA 91%</span>
                  <span class="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">5 pendências</span>
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
              <p class="text-sm font-bold text-slate-950">Automação ativa: solicitar assinatura quando documentos forem validados</p>
              <span class="shrink-0 rounded-md bg-cyan-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-700">Onboarding sem ruído</span>
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
              Do RH reativo para uma rotina de pessoas com dono, prazo e histórico
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-600">
              Você define as etapas de cada rotina, conecta gestores e áreas de apoio, e acompanha cada solicitação com histórico, prazo e prioridade.
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
            Rotinas de RH desenhadas etapa por etapa
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Cada fluxo pode ter campos obrigatórios, anexos, responsáveis, prazos, aprovações e automações próprias.
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
            Organize rotinas de RH sem espalhar controle em planilhas, e-mails e mensagens
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
            A liderança de RH acompanha volume, atrasos, gargalos, responsáveis e tempo em cada etapa sem esperar consolidação manual.
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
            Veja o X-ERP Kanban aplicado às rotinas do seu RH
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Em uma conversa objetiva, entendemos os gargalos do seu RH e mostramos como estruturar etapas, responsáveis, alertas e indicadores para sua operação de pessoas.
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
            <textarea id="lead-notes" v-model="leadForm.notes" rows="4" class="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="Ex.: admissão, recrutamento, documentos, onboarding, solicitações internas..."></textarea>
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
  title: 'X-ERP Kanban RH | Rotinas de pessoas com SLA e automação',
  description: 'Landing page do X-ERP Kanban para organizar admissões, recrutamento, documentos, solicitações internas e rotinas de RH.'
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
  { value: 'SLA', label: 'em admissões' },
  { value: 'Auto', label: 'lembretes' },
  { value: '360°', label: 'trilha do colaborador' }
]

const kanbanColumns = [
  {
    title: 'Solicitação',
    cards: [
      { tag: 'Novo', tagClass: 'bg-cyan-50 text-cyan-700', sla: '2h', title: 'Abertura de vaga SDR', owner: 'Gestor -> RH', progress: '28%', progressClass: 'bg-cyan-500' },
      { tag: 'Prioridade', tagClass: 'bg-amber-50 text-amber-700', sla: 'Hoje', title: 'Admissão operacional', owner: 'RH', progress: '42%', progressClass: 'bg-amber-500' }
    ]
  },
  {
    title: 'Documentos',
    cards: [
      { tag: 'Em análise', tagClass: 'bg-blue-50 text-blue-700', sla: '1d', title: 'Checklist admissional', owner: 'Candidato -> RH', progress: '54%', progressClass: 'bg-blue-500' },
      { tag: 'Pessoas', tagClass: 'bg-violet-50 text-violet-700', sla: '3d', title: 'Atualização cadastral', owner: 'Colaborador', progress: '64%', progressClass: 'bg-violet-500' }
    ]
  },
  {
    title: 'Validação',
    cards: [
      { tag: 'Atenção', tagClass: 'bg-red-50 text-red-700', sla: 'Vence hoje', title: 'Assinatura pendente', owner: 'Gestor', progress: '76%', progressClass: 'bg-red-500' },
      { tag: 'OK', tagClass: 'bg-emerald-50 text-emerald-700', sla: '8h', title: 'Exame agendado', owner: 'RH -> Clínica', progress: '86%', progressClass: 'bg-emerald-500' }
    ]
  },
  {
    title: 'Onboarding',
    cards: [
      { tag: 'Fechado', tagClass: 'bg-slate-100 text-slate-700', sla: 'No prazo', title: 'Primeiro dia preparado', owner: 'RH + TI', progress: '100%', progressClass: 'bg-slate-700' }
    ]
  }
]

const pains = [
  { title: 'Menos cobrança manual', description: 'Alertas reduzem mensagens soltas para gestores, candidatos e colaboradores.' },
  { title: 'Admissões sem atraso', description: 'O RH enxerga pendências de documentos, assinaturas, exames e acessos.' },
  { title: 'Rotinas padronizadas', description: 'Cada solicitação segue etapas claras, responsáveis definidos e critérios de avanço.' },
  { title: 'Histórico rastreável', description: 'Toda movimentação fica registrada para auditoria, compliance e gestão de pessoas.' }
]

const workflowSteps = [
  { number: '01', title: 'Modele cada rotina', description: 'Crie fluxos para recrutamento, admissão, onboarding, documentos e solicitações internas.' },
  { number: '02', title: 'Automatize lembretes', description: 'Configure avisos, repasses e mudanças de etapa para reduzir follow-up manual do RH.' },
  { number: '03', title: 'Gerencie por SLA', description: 'Acompanhe prazos, atrasos, pendências e gargalos com visão operacional e gerencial.' }
]

const flowExamples = [
  {
    area: 'Contratação',
    tab: 'Do pedido à admissão',
    title: 'Processo de contratação ponta a ponta',
    description: 'Conduza a contratação desde a solicitação da vaga até a admissão formal, sem perder aprovações, retornos ou prazos entre áreas.',
    automation: 'quando a proposta for aceita, criar automaticamente o checklist admissional com data de início e responsáveis.',
    steps: [
      { stage: 'Requisição', description: 'Gestor solicita contratação com motivo, cargo, orçamento, centro de custo e urgência.' },
      { stage: 'Aprovação', description: 'Liderança e RH validam headcount, faixa salarial, perfil e prioridade da vaga.' },
      { stage: 'Seleção', description: 'RH conduz triagem, entrevistas, testes e devolutivas com prazos por etapa.' },
      { stage: 'Proposta', description: 'Proposta é enviada, negociada e aprovada antes da abertura da admissão.' },
      { stage: 'Admissão', description: 'Candidato aceito entra no fluxo de documentos, exame, contrato e onboarding.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Gestor solicitante, RH, liderança aprovadora, entrevistadores e candidato.' },
      { label: 'Campos úteis', value: 'Cargo, salário, centro de custo, motivo, prioridade, aprovador e data prevista.' },
      { label: 'Resultado', value: 'Contratação rastreável, com menos vaga informal e menos follow-up manual.' }
    ]
  },
  {
    area: 'Admissão',
    tab: 'Checklist admissional',
    title: 'Checklist admissional completo',
    description: 'Controle tudo que precisa acontecer entre a aprovação da contratação e o primeiro dia do colaborador.',
    automation: 'se documento obrigatório não for enviado em 24h, avisar candidato e responsável do RH.',
    steps: [
      { stage: 'Solicitação', description: 'Gestor solicita admissão com cargo, centro de custo, salário e data prevista.' },
      { stage: 'Checklist', description: 'RH valida dados e dispara checklist de documentos para o candidato.' },
      { stage: 'Conferência', description: 'Documentos são conferidos e pendências voltam automaticamente para o candidato.' },
      { stage: 'Formalização', description: 'Exame, contrato, assinatura e cadastro interno seguem com responsáveis e SLA.' },
      { stage: 'Onboarding', description: 'TI e gestor recebem tarefas de acesso, equipamento e agenda do primeiro dia.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'RH, gestor, candidato, TI e clínica ocupacional.' },
      { label: 'Campos úteis', value: 'Cargo, data de início, centro de custo, documentos, exame e status de assinatura.' },
      { label: 'Resultado', value: 'Admissão rastreável, com menos pendência escondida antes do primeiro dia.' }
    ]
  },
  {
    area: 'Demissão',
    tab: 'Desligamento controlado',
    title: 'Processo de demissão e offboarding',
    description: 'Organize o desligamento com aprovações, documentos, devoluções, comunicação interna e tarefas de encerramento.',
    automation: 'quando a data de desligamento for confirmada, criar tarefas para TI, financeiro, gestor e RH.',
    steps: [
      { stage: 'Solicitação', description: 'Gestor ou RH registra motivo, tipo de desligamento, data prevista e observações.' },
      { stage: 'Aprovação', description: 'Liderança, RH e jurídico validam riscos, comunicação e próximos passos.' },
      { stage: 'Documentos', description: 'Aviso, termo, exame demissional e demais documentos seguem com prazo definido.' },
      { stage: 'Devoluções', description: 'TI e facilities acompanham bloqueio de acessos, equipamentos e materiais.' },
      { stage: 'Encerramento', description: 'RH registra conclusão, evidências, entrevista de saída e lições aprendidas.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'RH, gestor, liderança, jurídico, financeiro, TI e colaborador.' },
      { label: 'Campos úteis', value: 'Tipo de desligamento, motivo, data, pendências, acessos, equipamentos e documentos.' },
      { label: 'Resultado', value: 'Desligamento mais seguro, com checklist rastreável e menos risco operacional.' }
    ]
  },
  {
    area: 'Férias',
    tab: 'Solicitação de férias',
    title: 'Solicitação e aprovação de férias',
    description: 'Padronize o pedido de férias com saldo, período, aprovação do gestor e validação do RH.',
    automation: 'se o gestor não aprovar em 48h, enviar lembrete e marcar a solicitação como em risco de atraso.',
    steps: [
      { stage: 'Pedido', description: 'Colaborador informa período desejado, quantidade de dias e observações.' },
      { stage: 'Saldo', description: 'RH valida saldo, regras internas, conflitos de escala e documentação necessária.' },
      { stage: 'Gestor', description: 'Gestor aprova, reprova ou solicita ajuste no período com justificativa registrada.' },
      { stage: 'Formalização', description: 'RH prepara recibo, aviso e lançamentos necessários para folha ou ERP.' },
      { stage: 'Confirmação', description: 'Colaborador recebe confirmação final e a solicitação fica arquivada com histórico.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Colaborador, gestor imediato, RH e folha de pagamento.' },
      { label: 'Campos úteis', value: 'Período, dias, abono, saldo, substituto, anexos e status de aprovação.' },
      { label: 'Resultado', value: 'Menos conflito de agenda e mais previsibilidade para equipe e colaborador.' }
    ]
  },
  {
    area: 'Solicitações ao RH',
    tab: 'Atendimento interno',
    title: 'Solicitações ao RH em fila única',
    description: 'Centralize pedidos recorrentes para evitar solicitações perdidas em e-mail, WhatsApp ou conversa informal.',
    automation: 'se a solicitação ficar parada no responsável por mais de 2 dias, enviar lembrete e sinalizar atraso para o RH.',
    steps: [
      { stage: 'Abertura', description: 'Colaborador abre solicitação com categoria, prioridade, descrição e anexos.' },
      { stage: 'Classificação', description: 'Sistema ou RH direciona para benefícios, folha, DP, gestor, financeiro ou TI.' },
      { stage: 'Tratativa', description: 'Responsável executa a demanda, pede informação adicional ou encaminha aprovação.' },
      { stage: 'Retorno', description: 'Solicitante recebe resposta, documentos ou orientação com histórico completo.' },
      { stage: 'Fechamento', description: 'RH conclui o atendimento com prazo, responsável e evidências registrados.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Colaborador, RH, gestor, financeiro, DP, benefícios e TI.' },
      { label: 'Campos úteis', value: 'Categoria, prioridade, SLA, anexos, responsável, comentários e status.' },
      { label: 'Resultado', value: 'Atendimento mais organizado, mensurável e fácil de auditar.' }
    ]
  },
  {
    area: 'Benefícios',
    tab: 'Inclusão e alteração',
    title: 'Gestão de benefícios',
    description: 'Controle inclusão, alteração e cancelamento de benefícios com aprovação, prazos e histórico.',
    automation: 'quando houver aprovação do gestor ou RH, encaminhar automaticamente para o responsável pelo benefício.',
    steps: [
      { stage: 'Solicitação', description: 'Colaborador ou RH solicita inclusão, alteração ou cancelamento de benefício.' },
      { stage: 'Elegibilidade', description: 'RH valida política interna, documentação e data de vigência.' },
      { stage: 'Aprovação', description: 'Gestor ou liderança aprova quando o benefício exigir validação.' },
      { stage: 'Operadora', description: 'Responsável executa cadastro, alteração ou cancelamento junto ao fornecedor.' },
      { stage: 'Confirmação', description: 'Solicitante recebe confirmação e o registro fica disponível para auditoria.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'RH, colaborador, gestor, financeiro e fornecedor/operadora.' },
      { label: 'Campos úteis', value: 'Tipo de benefício, vigência, dependentes, anexos, custo e status.' },
      { label: 'Resultado', value: 'Menos retrabalho em benefícios e mais clareza sobre prazos de atendimento.' }
    ]
  },
  {
    area: 'Ponto e atestados',
    tab: 'Regularização',
    title: 'Regularização de ponto e atestados',
    description: 'Organize justificativas de ponto, atestados, abonos e correções com validação do gestor e RH.',
    automation: 'se houver anexo obrigatório ausente, devolver automaticamente para o colaborador com orientação.',
    steps: [
      { stage: 'Registro', description: 'Colaborador envia justificativa, data, horário, tipo de ocorrência e anexo.' },
      { stage: 'Gestor', description: 'Gestor valida contexto, impacto na escala e aprovação da justificativa.' },
      { stage: 'RH', description: 'RH confere documento, política interna e necessidade de ajuste no ponto.' },
      { stage: 'Folha', description: 'Demanda aprovada segue para lançamento ou correção no sistema de folha.' },
      { stage: 'Arquivo', description: 'Conclusão guarda decisão, anexos e responsáveis para consulta futura.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Colaborador, gestor, RH e folha de pagamento.' },
      { label: 'Campos úteis', value: 'Data, ocorrência, justificativa, anexo, aprovador e impacto na folha.' },
      { label: 'Resultado', value: 'Correções de ponto com menos ruído e trilha completa de aprovação.' }
    ]
  },
  {
    area: 'Movimentação interna',
    tab: 'Cargo e salário',
    title: 'Promoção, transferência e alteração salarial',
    description: 'Controle mudanças internas com aprovação, impacto financeiro, comunicação e atualização cadastral.',
    automation: 'ao aprovar a movimentação, criar tarefas para folha, gestor e comunicação ao colaborador.',
    steps: [
      { stage: 'Proposta', description: 'Gestor solicita movimentação com justificativa, novo cargo, salário ou área.' },
      { stage: 'Análise RH', description: 'RH avalia política, faixa salarial, elegibilidade e documentação.' },
      { stage: 'Aprovação', description: 'Liderança e financeiro aprovam orçamento, data de vigência e impacto.' },
      { stage: 'Atualização', description: 'Folha, cadastro, organograma e acessos são atualizados conforme a mudança.' },
      { stage: 'Comunicação', description: 'Colaborador e áreas envolvidas recebem confirmação e próximos passos.' }
    ],
    details: [
      { label: 'Responsáveis', value: 'Gestor, RH, liderança, financeiro, folha e TI quando necessário.' },
      { label: 'Campos úteis', value: 'Cargo atual, novo cargo, salário, centro de custo, vigência e aprovadores.' },
      { label: 'Resultado', value: 'Movimentações internas com governança, aprovação e histórico claro.' }
    ]
  }
]

const activeFlow = computed(() => flowExamples[activeFlowIndex.value])

const useCases = [
  { area: 'Recrutamento', title: 'Abertura e aprovação de vagas', description: 'Centralize solicitação, validação de perfil, aprovação e status de cada vaga.' },
  { area: 'Admissão', title: 'Checklist admissional', description: 'Controle documentos, exames, contrato, assinatura e prazos antes do primeiro dia.' },
  { area: 'Onboarding', title: 'Integração do colaborador', description: 'Organize acessos, equipamentos, treinamentos e tarefas de boas-vindas com responsáveis.' },
  { area: 'Solicitações internas', title: 'Demandas de colaboradores', description: 'Padronize férias, alterações cadastrais, declarações, benefícios e pedidos recorrentes.' },
  { area: 'Gestores', title: 'Aprovações e devolutivas', description: 'Reduza atrasos com alertas e visibilidade para aprovações pendentes dos líderes.' },
  { area: 'Compliance', title: 'Histórico e auditoria', description: 'Mantenha trilha de decisões, anexos, prazos e movimentações para consulta segura.' }
]

const indicators = [
  { value: 'Tempo por etapa', label: 'Identifique onde admissões e solicitações ficam paradas por mais tempo.' },
  { value: 'SLA vencendo', label: 'Antecipe atrasos em documentos, aprovações, exames e acessos.' },
  { value: 'Pendências por dono', label: 'Veja se a demanda está com RH, gestor, candidato, TI ou financeiro.' },
  { value: 'Histórico completo', label: 'Audite decisões, anexos, mudanças de status e aprovações em uma única linha do tempo.' }
]

const contactHighlights = [
  'Demonstração guiada pelas rotinas reais do seu RH.',
  'Mapeamento dos gargalos em admissões, documentos e solicitações internas.',
  'Indicação dos fluxos e automações com maior ganho operacional para pessoas.'
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
