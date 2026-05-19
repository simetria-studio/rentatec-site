<template>
  <section id="services" class="bg-slate-50 py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">Soluções principais</p>
          <h2 class="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            Uma base tecnológica para tirar gargalos da operação
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            Escolha por produto ou comece pelo diagnóstico. O objetivo é entender onde a rotina trava e conectar sistemas, dados e processos com menos improviso.
          </p>
          <NuxtLink
            to="/contact"
            class="mt-8 inline-flex items-center justify-center rounded-lg bg-[#043259] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b4779]"
          >
            Agendar diagnóstico
          </NuxtLink>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <NuxtLink
            v-for="solution in solutions"
            :key="solution.title"
            :to="solution.to"
            class="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <div class="flex items-start justify-between gap-4">
              <div :class="['flex h-11 w-11 items-center justify-center rounded-lg', solution.iconBg, solution.iconText]">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="solution.icon"></path>
                </svg>
              </div>
              <span class="text-sm font-bold text-slate-400 transition group-hover:text-slate-700">Ver solução</span>
            </div>
            <h3 class="mt-5 text-xl font-black text-slate-950">{{ solution.title }}</h3>
            <p class="mt-3 text-sm font-semibold leading-6 text-slate-700">{{ solution.problem }}</p>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ solution.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const solutions = [
  {
    title: 'X-ERP',
    to: '/x-erp',
    problem: 'Quando financeiro, estoque, vendas e gestão não conversam.',
    description: 'Centralize a rotina administrativa e acompanhe indicadores para decidir com dados atualizados.',
    iconBg: 'bg-blue-50',
    iconText: 'text-blue-700',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7'
  },
  {
    title: 'X-ERP Notas',
    to: '/xerp-notas',
    problem: 'Quando documentos fiscais viram retrabalho e conferência manual.',
    description: 'Capture, organize e integre notas com mais rastreabilidade para a área fiscal e financeira.',
    iconBg: 'bg-orange-50',
    iconText: 'text-orange-700',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'X-ERP Kanban',
    to: '/xerp-kanban',
    problem: 'Quando aprovações, SLAs e responsáveis ficam espalhados.',
    description: 'Modele fluxos por etapa, visualize gargalos e automatize cobranças em processos operacionais.',
    iconBg: 'bg-cyan-50',
    iconText: 'text-cyan-700',
    icon: 'M4 6h16M4 12h10M4 18h7M17 12l3 3m0 0l-3 3m3-3h-8'
  },
  {
    title: 'Integrações',
    to: '/integracoes',
    problem: 'Quando equipes digitam a mesma informação em sistemas diferentes.',
    description: 'Conecte plataformas, ERPs, APIs e rotinas internas para reduzir erro e acelerar operação.',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-700',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4'
  },
  {
    title: 'Software personalizado',
    to: '/servicos',
    problem: 'Quando o processo da empresa não cabe em ferramenta pronta.',
    description: 'Desenvolvimento sob medida para fluxos, portais, automações e sistemas internos.',
    iconBg: 'bg-slate-100',
    iconText: 'text-slate-800',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Beequest',
    to: '/beequest',
    problem: 'Quando atendimento e demandas precisam de automação inteligente.',
    description: 'Organize solicitações, acelere respostas e apoie equipes com IA aplicada à rotina.',
    iconBg: 'bg-amber-50',
    iconText: 'text-amber-700',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>
