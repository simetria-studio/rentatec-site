<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-slate-950">
    <NavBar />

    <main>
      <section class="bg-white pt-28 md:pt-32">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-20">
          <div class="flex flex-col justify-center">
            <h1 class="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {{ content.hero.title }}
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {{ content.hero.description }}
            </p>

            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-lg bg-[#043259] px-7 py-4 text-base font-black text-white transition hover:bg-[#0b4779]">
                Agendar diagnóstico
              </NuxtLink>
              <a :href="content.hero.secondaryHref || '#recursos'" class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:bg-slate-50">
                {{ content.hero.secondaryCta || 'Conhecer recursos' }}
              </a>
            </div>

            <div class="mt-10 grid max-w-3xl gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
              <div v-for="signal in content.signals" :key="signal.label">
                <strong class="block text-2xl font-black text-slate-950">{{ signal.label }}</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">{{ signal.text }}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div class="rounded-xl bg-white p-5">
                <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">{{ content.preview.label }}</p>
                <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950">{{ content.preview.title }}</h2>
                <p class="mt-4 text-base leading-7 text-slate-700">{{ content.preview.description }}</p>

                <div class="mt-7 space-y-3">
                  <div v-for="item in content.preview.items" :key="item" class="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#043259]"></span>
                    <p class="text-sm font-bold leading-6 text-slate-800">{{ item }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-slate-200 bg-slate-50 py-14 md:py-16">
        <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <h2 class="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {{ content.problem.title }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-700">
              {{ content.problem.description }}
            </p>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <article v-for="item in content.outcomes" :key="item.title" class="rounded-xl border border-slate-200 bg-white p-6">
              <p class="text-sm font-black uppercase tracking-[0.16em] text-cyan-800">{{ item.label }}</p>
              <h3 class="mt-3 text-xl font-black text-slate-950">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="recursos" class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">{{ content.capabilities.label }}</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {{ content.capabilities.title }}
            </h2>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article v-for="feature in content.capabilities.items" :key="feature.title" class="rounded-xl border border-slate-200 bg-white p-6">
              <p class="text-sm font-black uppercase tracking-[0.14em] text-orange-800">{{ feature.label }}</p>
              <h3 class="mt-3 text-xl font-black text-slate-950">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#041225] py-16 text-white md:py-20">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-start">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Método</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              {{ content.process.title }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-200">{{ content.process.description }}</p>
          </div>

          <div class="overflow-hidden rounded-2xl border border-white/10 bg-white">
            <div class="grid grid-cols-[0.45fr_1fr] bg-slate-950 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-200">
              <span>Etapa</span>
              <span>O que acontece</span>
            </div>
            <div class="divide-y divide-slate-200">
              <div v-for="step in content.process.steps" :key="step.stage" class="grid gap-4 px-5 py-5 md:grid-cols-[0.45fr_1fr]">
                <strong class="text-base font-black text-slate-950">{{ step.stage }}</strong>
                <p class="text-sm font-semibold leading-6 text-slate-700">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-slate-50 py-16 md:py-20">
        <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:items-start">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Diferenciais</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              {{ content.differentials.title }}
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-700">{{ content.differentials.description }}</p>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <article v-for="item in content.differentials.items" :key="item.title" class="rounded-xl border border-slate-200 bg-white p-6">
              <h3 class="text-xl font-black text-slate-950">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ item.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl border border-slate-200 bg-[#043259] p-8 text-white md:p-10">
            <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 class="text-3xl font-black tracking-tight md:text-4xl">{{ content.cta.title }}</h2>
                <p class="mt-4 max-w-3xl text-base leading-7 text-blue-50">{{ content.cta.description }}</p>
              </div>
              <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-lg bg-white px-7 py-4 text-base font-black text-[#043259] transition hover:bg-blue-50">
                Agendar diagnóstico
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true
  }
})
</script>
