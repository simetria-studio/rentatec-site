<template>
  <section id="about" class="bg-white py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">O que resolvemos</p>
          <h2 class="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            Controle operacional sem depender de planilhas paralelas
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            A Rentatec atua desde 2008 com sistemas corporativos, ERP, automações e integrações. A entrega começa no entendimento da operação e evolui para tecnologia que organiza a execução.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="area in areas"
            :key="area.title"
            class="rounded-xl border border-slate-200 bg-white p-6"
          >
            <p :class="['text-sm font-black uppercase tracking-[0.16em]', area.color]">{{ area.label }}</p>
            <h3 class="mt-3 text-xl font-black text-slate-950">{{ area.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ area.description }}</p>
          </div>
        </div>
      </div>

      <div class="mt-14 grid gap-4 rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white md:grid-cols-4 md:p-8">
        <div
          v-for="proof in proofs"
          :key="proof.title"
          class="border-slate-800 py-2 md:border-r md:last:border-r-0"
        >
          <strong class="block text-2xl font-black">{{ proof.value }}</strong>
          <span class="mt-2 block text-sm leading-6 text-slate-300">{{ proof.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const areas = [
  {
    label: 'Gestão',
    title: 'ERP e dados da operação',
    description: 'Financeiro, estoque, vendas, compras e relatórios em uma base mais consistente.',
    color: 'text-blue-700'
  },
  {
    label: 'Fiscal',
    title: 'Notas e documentos',
    description: 'Rotinas fiscais com captura, conferência, organização e integração de documentos.',
    color: 'text-orange-700'
  },
  {
    label: 'Processos',
    title: 'Kanban, BPMN e SLAs',
    description: 'Fluxos de aprovação, responsáveis, alertas e histórico para acompanhar cada etapa.',
    color: 'text-cyan-700'
  },
  {
    label: 'Integração',
    title: 'Sistemas conectados',
    description: 'APIs e automações para eliminar digitação duplicada e melhorar a rastreabilidade.',
    color: 'text-emerald-700'
  }
]

const proofs = [
  { value: 'Desde 2008', title: 'experiência em sistemas corporativos' },
  { value: 'ERP', title: 'gestão administrativa, fiscal e operacional' },
  { value: 'Kanban', title: 'processos com responsáveis e prazos claros' },
  { value: 'Sob medida', title: 'tecnologia adaptada à rotina do cliente' }
]
</script>
