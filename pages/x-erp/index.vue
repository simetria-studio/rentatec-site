<template>
  <div class="min-h-screen bg-white">
    <NavBar />

    <main>
      <section class="relative overflow-hidden bg-white pt-28 md:pt-32">
        <div class="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl lg:block"></div>

        <div class="mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-24">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">X-ERP</p>
            <h1 class="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              ERP operacional para empresas que precisam controlar rotinas, dados e decisões
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              O X-ERP conecta financeiro, estoque, vendas, fiscal, produção, pessoas e indicadores em uma base de gestão mais previsível, integrada e adaptável à operação.
            </p>

            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-lg bg-[#043259] px-7 py-4 text-base font-black text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#0b4779]">
                Agendar diagnóstico
              </NuxtLink>
              <a href="#modulos" class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:bg-slate-50">
                Ver módulos
              </a>
            </div>

            <div class="mt-10 grid max-w-3xl gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
              <div>
                <strong class="block text-2xl font-black text-slate-950">Gestão</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">rotinas administrativas e operacionais</span>
              </div>
              <div>
                <strong class="block text-2xl font-black text-slate-950">Dados</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">indicadores que nascem da execução</span>
              </div>
              <div>
                <strong class="block text-2xl font-black text-slate-950">Integração</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">áreas conectadas em uma mesma base</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="rounded-2xl border border-slate-200 bg-slate-950 p-3 shadow-2xl shadow-slate-900/15">
              <img src="/assets/images/dashinicial.png" alt="Tela inicial do X-ERP" class="aspect-[16/9] w-full rounded-xl bg-white object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Onde organiza</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Uma base para reduzir planilhas paralelas e decisões no escuro
              </h2>
              <p class="mt-5 text-lg leading-8 text-slate-700">
                O X-ERP estrutura processos essenciais e mantém as áreas falando a mesma língua, do pedido ao recebimento, da compra ao estoque, da operação ao indicador.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <article
                v-for="area in operationAreas"
                :key="area.title"
                class="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p :class="['text-sm font-black uppercase tracking-[0.16em]', area.color]">{{ area.label }}</p>
                <h3 class="mt-3 text-xl font-black text-slate-950">{{ area.title }}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-700">{{ area.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="modulos" class="bg-slate-50 py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Módulos</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Escolha a área que precisa ganhar controle
              </h2>
            </div>
            <NuxtLink to="/contact" class="inline-flex text-sm font-black text-[#043259] hover:text-[#0b4779]">
              Agendar diagnóstico
            </NuxtLink>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="module in xerpModules"
              :key="module.key"
              :to="module.path"
              class="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div class="flex items-start justify-between gap-4">
                <h3 class="text-xl font-black text-slate-950">{{ module.title }}</h3>
                <span class="text-sm font-bold text-slate-600 transition group-hover:text-slate-900">Ver módulo</span>
              </div>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ module.description }}</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="resource in module.resources.slice(0, 3)"
                  :key="resource"
                  class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                >
                  {{ resource }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Setores atendidos</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Aplicável a operações com processos e controles exigentes
              </h2>
            </div>

            <div class="grid gap-4">
              <article
                v-for="sector in sectors"
                :key="sector.title"
                class="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 class="text-2xl font-black text-slate-950">{{ sector.title }}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-700">{{ sector.description }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#041225] py-16 text-white md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Diferenciais</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                ERP adaptado à rotina real da empresa
              </h2>
            </div>
            <div class="grid gap-3 md:grid-cols-3">
              <div
                v-for="item in differentiators"
                :key="item.title"
                class="rounded-lg border border-cyan-100 bg-white p-5 shadow-sm"
              >
                <h3 class="text-lg font-black text-slate-950">{{ item.title }}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Quer entender se o X-ERP encaixa na sua operação?
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Agende um diagnóstico para mapear áreas, volume, integrações e prioridades antes de avançar.
          </p>
          <NuxtLink to="/contact" class="mt-8 inline-flex items-center justify-center rounded-lg bg-[#043259] px-7 py-4 text-base font-black text-white transition hover:bg-[#0b4779]">
            Agendar diagnóstico
          </NuxtLink>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { xerpModules } from '~/data/xerpModules'

const operationAreas = [
  {
    label: 'Operação',
    title: 'Processos administrativos conectados',
    description: 'Pedidos, compras, estoque, financeiro e fiscal deixam de depender de controles soltos.',
    color: 'text-blue-800'
  },
  {
    label: 'Gestão',
    title: 'Indicadores para acompanhar resultado',
    description: 'Relatórios e painéis ajudam gestores a acompanhar desempenho, margem, fluxo de caixa e produtividade.',
    color: 'text-cyan-800'
  },
  {
    label: 'Controle',
    title: 'Rotinas com histórico e rastreabilidade',
    description: 'Cada lançamento, pedido, recebimento e documento ganha contexto dentro da operação.',
    color: 'text-emerald-800'
  },
  {
    label: 'Evolução',
    title: 'Customização para processos específicos',
    description: 'A solução pode se adaptar às particularidades da empresa sem perder a base integrada do ERP.',
    color: 'text-orange-800'
  }
]

const sectors = [
  {
    title: 'Indústria',
    description: 'Controle produção, estoque, compras, manutenção, qualidade, custos e indicadores para acompanhar a operação ponta a ponta.'
  },
  {
    title: 'Usinagem',
    description: 'Organize pedidos, materiais, etapas produtivas, instrumentos, máquinas e rastreabilidade para reduzir paradas e retrabalho.'
  },
  {
    title: 'Atacado',
    description: 'Conecte vendas, estoque, faturamento, logística, crédito, cobrança e relatórios para ganhar velocidade comercial.'
  }
]

const differentiators = [
  {
    title: 'Integração real',
    description: 'Dados fluem entre áreas e reduzem digitação duplicada.'
  },
  {
    title: 'Gestão por indicadores',
    description: 'A operação gera informação para decisão sem consolidação manual.'
  },
  {
    title: 'Aderência ao processo',
    description: 'Módulos e customizações acompanham a forma como a empresa trabalha.'
  }
]
</script>
