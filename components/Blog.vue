<template>
  <section class="bg-slate-50 py-16 md:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-700">Conteúdo prático</p>
          <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Ideias para organizar a operação</h2>
        </div>
        <NuxtLink to="/blog" class="inline-flex text-sm font-bold text-[#043259] hover:text-[#0b4779]">
          Ver todos os artigos
        </NuxtLink>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.title"
          class="rounded-xl border border-slate-200 bg-white p-6"
        >
          <span class="text-sm font-black uppercase tracking-[0.14em] text-slate-400">{{ post.category }}</span>
          <h3 class="mt-3 text-xl font-black leading-tight text-slate-950">{{ post.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ post.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    category: 'Processos',
    title: 'Padronização de fluxos sem retrabalho',
    description: 'Como estruturar etapas, aprovações e responsabilidades para ganhar previsibilidade.'
  },
  {
    category: 'Automação',
    title: 'Menos tarefas manuais no dia a dia',
    description: 'Exemplos práticos para reduzir erros operacionais e tempo gasto em tarefas repetitivas.'
  },
  {
    category: 'Gestão',
    title: 'Dados atualizados para decidir melhor',
    description: 'Indicadores para acompanhar performance, gargalos e evolução dos processos.'
  }
]
</script>
