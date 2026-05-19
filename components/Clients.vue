<template>
  <section class="bg-white py-20 md:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">Confiança</p>
          <h2 class="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
            Empresas de diferentes setores usam tecnologia para operar melhor
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-600">
            A Rentatec atende operações com necessidades distintas, da gestão interna ao controle de processos, fiscal, integrações e soluções específicas.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div
            v-for="client in clients"
            :key="client.name"
            class="flex h-28 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-5"
          >
            <img :src="client.logo" :alt="client.name" class="max-h-14 max-w-full object-contain" />
          </div>
        </div>
      </div>

      <div class="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
        <div class="grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-center">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Diagnóstico operacional</p>
            <h3 class="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
              Comece pelo processo que mais consome tempo da equipe
            </h3>
          </div>
          <div class="md:flex md:items-center md:justify-between md:gap-6">
            <p class="text-base leading-7 text-slate-600">
              Mapeamos a rotina, identificamos gargalos e indicamos o melhor caminho entre ERP, Kanban, integração, fiscal ou desenvolvimento sob medida.
            </p>
            <NuxtLink
              to="/contact"
              class="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-[#043259] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0b4779] md:mt-0"
            >
              Agendar diagnóstico
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clients = [
  { name: 'Thales', logo: '/images/Thales.png' },
  { name: 'Roddar Pneus', logo: '/images/roddar.png' },
  { name: 'PMPR', logo: '/images/PM-PR.png' },
  { name: 'Pibernat', logo: '/images/Pibernat.png' },
  { name: 'Kluber', logo: '/images/Kluber.png' },
  { name: 'Jusbrasil', logo: '/images/Jusbrasil.png' },
  { name: 'CASEX', logo: '/images/casex.png' },
  { name: 'Baggio', logo: '/images/baggio.png' },
  { name: 'Baricomp', logo: '/images/baricomp.png' }
]
</script>
