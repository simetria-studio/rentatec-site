<template>
  <section class="relative overflow-hidden bg-white pt-28 md:pt-32">
    <div class="absolute inset-x-0 top-0 h-px bg-slate-200"></div>
    <div class="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl lg:block"></div>

    <div class="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
      <div class="max-w-5xl">
        <h1 class="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Sistemas, integrações e automações para operações que precisam ganhar controle
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          A Rentatec conecta ERP, fiscal, processos, dados e desenvolvimento sob medida para reduzir trabalho manual e dar previsibilidade à rotina da empresa.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center rounded-lg bg-[#043259] px-7 py-4 text-base font-bold text-white shadow-lg shadow-slate-900/10 transition hover:bg-[#0b4779] focus:outline-none focus:ring-2 focus:ring-[#043259] focus:ring-offset-2"
          >
            Agendar diagnóstico
          </NuxtLink>
          <a
            href="#services"
            class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#043259] focus:ring-offset-2"
          >
            Conhecer soluções
          </a>
        </div>

        <div class="mt-10 grid max-w-4xl gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
          <div>
            <strong class="block text-2xl font-black text-slate-950">2008</strong>
            <span class="mt-1 block text-sm leading-5 text-slate-600">experiência em sistemas de gestão</span>
          </div>
          <div>
            <strong class="block text-2xl font-black text-slate-950">ERP</strong>
            <span class="mt-1 block text-sm leading-5 text-slate-600">financeiro, estoque, vendas e operação</span>
          </div>
          <div>
            <strong class="block text-2xl font-black text-slate-950">Fluxos</strong>
            <span class="mt-1 block text-sm leading-5 text-slate-600">aprovações, SLAs e integrações</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
