<template>
  <section class="py-20 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl">Blog Rentatec</h2>
        <p class="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
          Conteudos práticos sobre automação, gestão de processos e transformação digital.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-3">
        <article class="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <span class="text-sm font-semibold text-blue-700">Processos</span>
          <h3 class="mt-2 text-xl font-bold text-gray-900">Padronização de fluxos sem retrabalho</h3>
          <p class="mt-3 text-gray-600">Como estruturar etapas, aprovações e responsabilidades para ganhar previsibilidade.</p>
        </article>

        <article class="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <span class="text-sm font-semibold text-blue-700">Automação</span>
          <h3 class="mt-2 text-xl font-bold text-gray-900">Menos tarefas manuais no dia a dia</h3>
          <p class="mt-3 text-gray-600">Exemplos práticos de automações para reduzir erros operacionais e tempo de execução.</p>
        </article>

        <article class="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <span class="text-sm font-semibold text-blue-700">Gestão</span>
          <h3 class="mt-2 text-xl font-bold text-gray-900">Dados atualizados para decidir melhor</h3>
          <p class="mt-3 text-gray-600">Indicadores em tempo real para acompanhar performance e evoluir processos com segurança.</p>
        </article>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
        >
          Ver todos os artigos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
