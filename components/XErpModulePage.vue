<template>
  <div class="min-h-screen bg-white">
    <NavBar />

    <main>
      <nav aria-label="Breadcrumb" class="border-b border-slate-200 bg-slate-50 pt-16">
        <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol class="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <NuxtLink to="/" class="font-semibold text-slate-700 hover:text-slate-950">Home</NuxtLink>
            </li>
            <li class="text-slate-300">/</li>
            <li>
              <NuxtLink to="/x-erp" class="font-semibold text-slate-700 hover:text-slate-950">X-ERP</NuxtLink>
            </li>
            <li class="text-slate-300">/</li>
            <li class="font-bold text-slate-950">{{ title }}</li>
          </ol>
        </div>
      </nav>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Módulo X-ERP</p>
              <h1 class="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl">
                {{ title }}
              </h1>
              <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                {{ summary }}
              </p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-lg bg-[#043259] px-6 py-3 text-sm font-black text-white transition hover:bg-[#0b4779]">
                  Agendar diagnóstico
                </NuxtLink>
                <a href="#funcionalidades" class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-50">
                  Ver funcionalidades
                </a>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7">
              <p class="text-sm font-black uppercase tracking-[0.18em] text-slate-700">Recursos principais</p>
              <div class="mt-5 grid gap-3 sm:grid-cols-2">
                <div
                  v-for="resource in resources"
                  :key="resource"
                  class="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800"
                >
                  {{ resource }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" class="bg-slate-50 py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Funcionalidades</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Rotinas do módulo organizadas em um fluxo mais claro
            </h2>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="feature in features"
              :key="feature[0]"
              class="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h3 class="text-xl font-black text-slate-950">{{ feature[0] }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ feature[1] }}</p>
            </article>
          </div>
        </div>
      </section>

      <section v-if="media?.length" class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Telas do módulo</p>
              <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Visualize as rotinas na prática
              </h2>
            </div>
            <div v-if="media.length > 1" class="flex items-center gap-2">
              <button
                type="button"
                class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-black text-slate-950 transition hover:bg-slate-50"
                aria-label="Imagem anterior"
                @click="previousMedia"
              >
                ‹
              </button>
              <button
                type="button"
                class="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-xl font-black text-slate-950 transition hover:bg-slate-50"
                aria-label="Próxima imagem"
                @click="nextMedia"
              >
                ›
              </button>
            </div>
          </div>

          <div class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/5">
            <div class="border-b border-slate-200 bg-white px-5 py-4">
              <p class="text-sm font-black uppercase tracking-[0.14em] text-slate-500">
                {{ selectedMediaIndex + 1 }} de {{ media.length }}
              </p>
              <h3 class="mt-1 text-xl font-black text-slate-950">{{ selectedMedia.title }}</h3>
            </div>

            <div class="bg-[#041225] p-3 md:p-5">
              <img
                :src="selectedMedia.image"
                :alt="selectedMedia.title"
                class="max-h-[620px] w-full rounded-xl border border-white/10 bg-white object-contain"
              />
            </div>

            <div v-if="media.length > 1" class="grid gap-2 border-t border-slate-200 bg-white p-3 sm:grid-cols-2 lg:grid-cols-4">
              <button
                v-for="(item, index) in media"
                :key="item.title"
                type="button"
                :class="[
                  'rounded-lg border p-2 text-left transition',
                  index === selectedMediaIndex ? 'border-[#043259] bg-slate-50' : 'border-slate-200 bg-white hover:bg-slate-50'
                ]"
                @click="selectedMediaIndex = index"
              >
                <img :src="item.image" :alt="item.title" class="h-20 w-full rounded-md border border-slate-200 bg-white object-cover object-top" />
                <span class="mt-2 block text-xs font-black text-slate-950">{{ item.title }}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="rounded-2xl border border-slate-800 bg-[#041225] p-6 text-white md:p-8">
            <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Benefícios</p>
                <h2 class="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                  O que melhora na rotina
                </h2>
              </div>
              <div class="grid gap-3 md:grid-cols-3">
                <div
                  v-for="benefit in benefits"
                  :key="benefit"
                  class="rounded-lg border border-cyan-100 bg-white p-4 text-sm font-bold leading-6 text-slate-950 shadow-sm"
                >
                  {{ benefit }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-slate-50 py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Quer entender como o módulo {{ title }} se encaixa na sua operação?
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Agende um diagnóstico para mapear rotina, integrações e prioridades antes de escolher o melhor caminho.
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
const props = defineProps({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  resources: { type: Array, required: true },
  features: { type: Array, required: true },
  benefits: { type: Array, required: true },
  media: { type: Array, default: () => [] }
})

const selectedMediaIndex = ref(0)

const selectedMedia = computed(() => props.media[selectedMediaIndex.value] || props.media[0] || {})

function previousMedia() {
  selectedMediaIndex.value = selectedMediaIndex.value === 0 ? props.media.length - 1 : selectedMediaIndex.value - 1
}

function nextMedia() {
  selectedMediaIndex.value = selectedMediaIndex.value === props.media.length - 1 ? 0 : selectedMediaIndex.value + 1
}
</script>
