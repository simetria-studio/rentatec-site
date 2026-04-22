<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-slate-900">
    <NavBar />

    <section class="relative overflow-hidden border-b border-cyan-100 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(180deg,_#ecfeff_0%,_#ffffff_55%)] pt-28 pb-16 md:pt-36 md:pb-24">
      <div class="absolute inset-0 opacity-60">
        <div class="absolute top-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
      </div>

      <div class="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-center lg:px-8">
        <div>
          <h1 class="max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
            Padronize processos, reduza gargalos e dê visibilidade real para a operação.
          </h1>

          <p class="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Estruture fluxos entre áreas, automatize aprovações e acompanhe SLAs, responsáveis e pendências em um único lugar.
            O Kanban X-ERP foi desenhado para operações que precisam sair do improviso e ganhar previsibilidade.
          </p>

          <div class="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" @click.prevent="scrollToSection('contact')" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-600/30 sm:w-auto">
              Solicitar demonstração
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
            <a href="#how-it-works" @click.prevent="scrollToSection('how-it-works')" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white/85 px-8 py-4 text-center font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-700 sm:w-auto">
              Entender como funciona
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div class="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <div class="rounded-full border border-slate-200 bg-white/85 px-4 py-2 shadow-sm">Diagnóstico comercial sem compromisso</div>
            <div class="rounded-full border border-slate-200 bg-white/85 px-4 py-2 shadow-sm">Fluxo desenhado para a sua operação</div>
            <div class="rounded-full border border-slate-200 bg-white/85 px-4 py-2 shadow-sm">Implantação orientada por processo</div>
          </div>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-cyan-950/10 backdrop-blur">
          <div class="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Prova rápida</p>
              <h2 class="mt-2 text-2xl font-bold text-slate-900">O que muda na operação</h2>
            </div>
            <div class="rounded-2xl bg-cyan-50 px-3 py-2 text-right">
              <p class="text-xs font-semibold uppercase tracking-wide text-cyan-700">Foco</p>
              <p class="text-sm font-bold text-cyan-900">Operações e processos</p>
            </div>
          </div>

          <div class="space-y-4">
            <div v-for="proof in heroProofs" :key="proof.title" class="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50/60">
              <div class="flex items-start gap-4">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  <svg class="h-5 w-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path :d="proof.icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-base font-bold text-slate-900">{{ proof.title }}</p>
                  <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ proof.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Áreas mais comuns</p>
            <p class="mt-3 text-sm leading-relaxed text-slate-200">
              Contratos, tarefas, RH, compras, financeiro, projetos e aprovações internas em uma mesma governança operacional.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-3xl">
          <div class="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-700">
            DORES E RESULTADOS
          </div>
          <h2 class="mt-5 text-3xl font-bold text-slate-950 md:text-4xl">
            Quando o processo depende de planilha, mensagem solta e cobrança manual, a operação perde ritmo.
          </h2>
          <p class="mt-4 text-lg leading-relaxed text-slate-600">
            O Kanban X-ERP organiza a execução do trabalho com regras claras, automação entre etapas e visibilidade para quem precisa decidir e cobrar.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="result in results" :key="result.title" class="group rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
            <h3 class="text-xl font-bold text-slate-900">{{ result.title }}</h3>
            <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ result.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
        <div class="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <div class="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-200">
              COMO FUNCIONA
            </div>
            <h2 class="mt-5 text-3xl font-bold text-white md:text-4xl">
              Uma operação mais previsível começa com um fluxo simples de entender e fácil de cobrar.
            </h2>
            <p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              Em vez de depender de alinhamentos paralelos e controles desconectados, você modela o processo, automatiza o repasse entre áreas e acompanha gargalos em tempo real.
            </p>
            <div class="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Na prática</p>
              <p class="mt-3 text-base leading-relaxed text-slate-200">
                Cada etapa tem dono, prazo, regra de passagem e histórico. Isso reduz retrabalho, evita esquecimentos e facilita a gestão por SLA.
              </p>
            </div>
          </div>

          <div class="space-y-5">
            <div v-for="step in howItWorks" :key="step.step" class="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div class="flex flex-col gap-4 md:flex-row md:items-start">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/15 text-xl font-black text-cyan-200">
                  {{ step.step }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">{{ step.title }}</h3>
                  <p class="mt-3 text-base leading-relaxed text-slate-300">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="bg-gradient-to-b from-white via-cyan-50/40 to-white py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <div class="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-700 shadow-sm">
            CASOS DE USO
          </div>
          <h2 class="mx-auto mt-5 max-w-4xl text-3xl font-bold text-slate-950 md:text-4xl">
            Processos que você consegue organizar com Kanban + automação
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Em vez de adaptar a operação ao caos do dia a dia, você estrutura o fluxo certo para cada área e mantém tudo rastreável do início ao fim.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="useCase in useCases" :key="useCase.title" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
            <div class="mb-4 inline-flex rounded-2xl px-3 py-2 text-sm font-semibold" :class="useCase.badgeClass">
              {{ useCase.tag }}
            </div>
            <h3 class="text-xl font-bold text-slate-900">{{ useCase.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-600">{{ useCase.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <h2 class="mt-5 text-3xl font-bold text-slate-950 md:text-4xl">
              Mais clareza para a operação. Menos esforço para cobrar, aprovar e acompanhar.
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-slate-600">
              O valor não está só em criar quadros. Está em transformar processo em rotina controlável, com histórico, regra e visibilidade entre áreas.
            </p>
            <div class="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Ideal para</p>
              <p class="mt-3 text-base leading-relaxed text-slate-700">
                Operações que precisam padronizar repasses entre áreas, organizar aprovações, cobrar prazo e sair da gestão reativa baseada em cobranças manuais.
              </p>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div v-for="differential in differentials" :key="differential.title" class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 class="text-xl font-bold text-slate-900">{{ differential.title }}</h3>
              <p class="mt-4 text-sm leading-relaxed text-slate-600">{{ differential.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="bg-white py-16 md:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <div class="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-700 shadow-sm">
            PLANOS
          </div>
          <h2 class="mt-5 text-3xl font-extrabold text-slate-950 md:text-5xl">
            Escolha o modelo que acompanha o ritmo da sua equipe
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Primeiro você entende o fluxo ideal da operação. Depois define o plano mais aderente ao porte, volume e governança que a equipe precisa.
          </p>

          <div class="mt-8 flex justify-center items-center gap-4">
            <span class="text-sm font-medium transition-colors duration-300" :class="billingPeriod === 'monthly' ? 'font-bold text-slate-900' : 'text-slate-500'">Mensal</span>

            <button
              @click="billingPeriod = billingPeriod === 'annual' ? 'monthly' : 'annual'"
              class="relative h-8 w-16 rounded-full bg-slate-200 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              :class="{ 'bg-cyan-600': billingPeriod === 'annual' }"
              role="switch"
              :aria-checked="billingPeriod === 'annual'"
            >
              <div
                class="h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300"
                :class="{ 'translate-x-8': billingPeriod === 'annual', 'translate-x-0': billingPeriod === 'monthly' }"
              ></div>
            </button>

            <div class="flex items-center gap-2">
              <span class="text-sm font-medium transition-colors duration-300" :class="billingPeriod === 'annual' ? 'font-bold text-slate-900' : 'text-slate-500'">Anual</span>
              <span class="rounded-full border border-green-200 bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">-20%</span>
            </div>
          </div>
        </div>

        <div class="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div class="overflow-x-auto">
            <table class="min-w-[1200px] w-full">
              <thead class="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th class="w-56 px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-600">Recursos</th>
                  <th v-for="plan in plans" :key="plan.name" class="min-w-[170px] px-4 py-5 text-left align-top">
                    <div class="mb-2">
                      <p class="text-base font-extrabold text-slate-900">{{ plan.name }}</p>
                      <p class="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{{ plan.positioning }}</p>
                    </div>

                    <div v-if="plan.monthlyPrice" class="space-y-2">
                      <template v-if="billingPeriod === 'monthly'">
                        <p class="text-3xl font-black leading-none text-cyan-700">
                          {{ formatCurrency(plan.monthlyPrice) }}
                          <span class="text-lg font-bold">/mês</span>
                        </p>
                      </template>

                      <template v-else>
                        <div class="flex items-center gap-2 text-sm">
                          <p class="font-semibold text-slate-400 line-through">
                            {{ formatCurrency(plan.monthlyPrice) }}/mês
                          </p>
                          <span class="text-slate-300">por</span>
                          <p class="font-bold text-cyan-700">
                            {{ formatCurrency(getDiscountedMonthly(plan.monthlyPrice)) }}/mês
                          </p>
                        </div>
                        <p class="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                          Economia de {{ formatCurrency(getAnnualDiscount(plan.monthlyPrice)) }}/ano
                        </p>
                      </template>
                    </div>

                    <div v-else class="space-y-1">
                      <p class="text-lg font-black text-slate-900">Sob consulta</p>
                      <p class="text-xs text-slate-500">Fale com a equipe de vendas</p>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-slate-100">
                <tr class="transition-colors duration-200 hover:bg-cyan-50/30">
                  <th class="px-6 py-4 text-left text-sm font-bold text-slate-900">Quantidade de usuários</th>
                  <td v-for="plan in plans" :key="`${plan.name}-users`" class="px-4 py-4 text-sm text-slate-700">{{ plan.userRange }}</td>
                </tr>
                <tr class="transition-colors duration-200 hover:bg-cyan-50/30">
                  <th class="px-6 py-4 text-left text-sm font-bold text-slate-900">Quantidade de automações</th>
                  <td v-for="plan in plans" :key="`${plan.name}-automations`" class="px-4 py-4 text-sm text-slate-700">{{ plan.automations }}</td>
                </tr>
                <tr class="transition-colors duration-200 hover:bg-cyan-50/30">
                  <th class="px-6 py-4 text-left text-sm font-bold text-slate-900">Quantidade de processos</th>
                  <td v-for="plan in plans" :key="`${plan.name}-processes`" class="px-4 py-4 text-sm text-slate-700">{{ plan.processes }}</td>
                </tr>
                <tr class="transition-colors duration-200 hover:bg-cyan-50/30">
                  <th class="px-6 py-4 text-left text-sm font-bold text-slate-900">Quantidade de databases</th>
                  <td v-for="plan in plans" :key="`${plan.name}-databases`" class="px-4 py-4 text-sm text-slate-700">{{ plan.databases }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="relative overflow-hidden bg-gradient-to-b from-cyan-50 to-white py-16 md:py-20">
      <div class="absolute inset-0 opacity-50">
        <div class="absolute top-10 left-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl"></div>
        <div class="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <div class="inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-700 shadow-sm">
              PRÓXIMO PASSO
            </div>
            <h2 class="mt-5 text-3xl font-bold text-slate-950 md:text-4xl">
              Vamos desenhar o fluxo ideal para a sua operação.
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-slate-600">
              A conversa é objetiva: entendemos o processo atual, mapeamos gargalos e mostramos onde o Kanban X-ERP pode reduzir retrabalho e aumentar previsibilidade.
            </p>

            <div class="mt-8 space-y-4">
              <div v-for="support in contactSupports" :key="support.title" class="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
                <p class="text-base font-bold text-slate-900">{{ support.title }}</p>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ support.description }}</p>
              </div>
            </div>
          </div>

          <div class="mx-auto w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-cyan-950/10 sm:p-10">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-slate-950">Solicite uma demonstração</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">
                Preencha os dados abaixo e nosso time entra em contato para entender sua operação e indicar o melhor desenho de fluxo.
              </p>
            </div>

            <form class="space-y-5" @submit.prevent="submitLeadForm">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-name" class="mb-1 block text-sm font-medium text-gray-700">Nome completo *</label>
                  <input id="lead-name" v-model="leadForm.name" type="text" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" placeholder="Seu nome" />
                </div>
                <div>
                  <label for="lead-email" class="mb-1 block text-sm font-medium text-gray-700">E-mail *</label>
                  <input id="lead-email" v-model="leadForm.email" type="email" required class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" placeholder="seu@email.com" />
                </div>
              </div>

              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-phone" class="mb-1 block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                  <input id="lead-phone" v-model="leadForm.phone" type="tel" class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label for="lead-company" class="mb-1 block text-sm font-medium text-gray-700">Empresa</label>
                  <input id="lead-company" v-model="leadForm.company_name" type="text" class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" placeholder="Nome da empresa" />
                </div>
              </div>

              <div>
                <label for="lead-notes" class="mb-1 block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="lead-notes" v-model="leadForm.notes" rows="4" class="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500" placeholder="Quais processos você quer organizar hoje?"></textarea>
              </div>

              <div v-if="leadMessage" class="rounded-xl border px-4 py-3 text-sm"
                :class="leadMessageType === 'success' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'">
                {{ leadMessage }}
              </div>

              <button type="submit" :disabled="isSubmitting" class="w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60">
                {{ isSubmitting ? 'Enviando...' : 'Quero agendar minha demonstração' }}
              </button>

              <p class="text-center text-xs leading-relaxed text-slate-500">
                Sem compromisso. Nossa equipe usa esse contato para entender seu cenário e propor o fluxo mais aderente ao seu processo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const billingPeriod = ref('monthly')
const leadFormKey = '80d73f07-24ef-411c-bafd-16fe938a466c'
const leadsApiEndpoint = 'https://suporte.rentatec.com.br/api/leads/capture'
const isSubmitting = ref(false)
const leadMessage = ref('')
const leadMessageType = ref('success')
const leadForm = reactive({
  name: '',
  email: '',
  phone: '',
  company_name: '',
  notes: ''
})

const heroProofs = [
  {
    title: 'Mais visibilidade entre áreas',
    description: 'Cada etapa tem status, responsável e histórico para evitar ruído entre operação, financeiro, compras e RH.',
    icon: 'M3 7h18M3 12h18M3 17h10'
  },
  {
    title: 'Menos cobrança manual',
    description: 'Automatize repasses, alertas e aprovações para parar de depender de cobranças por mensagem ou planilha.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Cobrança por SLA e prioridade',
    description: 'Acompanhe gargalos, pendências e atrasos com clareza para agir rápido e manter a operação previsível.',
    icon: 'M12 8v4l3 3m6-3A9 9 0 11 3 12a9 9 0 0118 0z'
  }
]

const results = [
  {
    title: 'Menos gargalo escondido',
    description: 'Você enxerga onde o fluxo trava, quem está com a etapa e há quanto tempo a demanda está parada.',
    icon: 'M9 17v-6m4 6V7m4 10v-3M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    title: 'Menos retrabalho',
    description: 'Regras, responsáveis e transições automáticas evitam repasses manuais e perda de contexto entre áreas.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Mais previsibilidade',
    description: 'A operação passa a trabalhar com prioridade, prazo e acompanhamento contínuo, não com urgência improvisada.',
    icon: 'M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700'
  },
  {
    title: 'Mais governança',
    description: 'Histórico das etapas, critérios de passagem e indicadores nativos apoiam gestão, auditoria e melhoria contínua.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
]

const howItWorks = [
  {
    step: '01',
    title: 'Modela o fluxo da sua operação',
    description: 'Definimos etapas, responsáveis, critérios de passagem, tipos de demanda e prioridades para refletir como o processo realmente roda.'
  },
  {
    step: '02',
    title: 'Automatiza repasses e aprovações',
    description: 'Alertas, mudanças de status, repasses entre áreas e aprovações passam a acontecer com menos intervenção manual.'
  },
  {
    step: '03',
    title: 'Acompanha indicadores e gargalos',
    description: 'Com dados nativos e histórico da execução, a gestão consegue cobrar prazo, identificar atrasos e evoluir o processo com mais segurança.'
  }
]

const useCases = [
  {
    tag: 'Jurídico / Comercial',
    title: 'Gestão de contratos',
    description: 'Acompanhe elaboração, revisão, aprovação, assinatura e renovação com prazo, responsável e alertas por etapa.',
    badgeClass: 'bg-cyan-50 text-cyan-700'
  },
  {
    tag: 'Operação',
    title: 'Gestão de tarefas e demandas internas',
    description: 'Centralize atividades com prioridade, SLA, histórico e visibilidade para líderes e executores.',
    badgeClass: 'bg-blue-50 text-blue-700'
  },
  {
    tag: 'RH',
    title: 'Recrutamento e rotinas de pessoas',
    description: 'Organize vagas, admissões, avaliações e solicitações internas com um fluxo claro e rastreável.',
    badgeClass: 'bg-violet-50 text-violet-700'
  },
  {
    tag: 'Projetos / Produto',
    title: 'Backlog, validação e entrega',
    description: 'Crie previsibilidade para desenvolvimento e projetos com etapas bem definidas e acompanhamento contínuo.',
    badgeClass: 'bg-amber-50 text-amber-700'
  },
  {
    tag: 'Compras',
    title: 'Requisições e aprovações',
    description: 'Controle solicitações, responsáveis e SLA de aprovação sem depender de troca de mensagens soltas.',
    badgeClass: 'bg-emerald-50 text-emerald-700'
  },
  {
    tag: 'Financeiro',
    title: 'Prestação de contas e rotinas críticas',
    description: 'Estruture fluxos financeiros com mais conformidade, acompanhamento e rastreabilidade para auditoria.',
    badgeClass: 'bg-rose-50 text-rose-700'
  }
]

const differentials = [
  {
    title: 'Processo com dono e regra clara',
    description: 'Cada etapa deixa de ser informal e passa a ter responsabilidade explícita, prioridade e condição de avanço.',
    icon: 'M5 13l4 4L19 7',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    title: 'Automação sem perder controle',
    description: 'A operação ganha velocidade em aprovações e repasses, mas com rastreabilidade e governança no fluxo.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Dados nativos para gestão',
    description: 'Os indicadores nascem do uso da operação, sem depender de consolidação manual paralela.',
    icon: 'M8 13h3m4 0h1m-6 4h7m2 5H5a2 2 0 01-2-2V8a2 2 0 012-2h3.586a1 1 0 01.707.293l6.414 6.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-700'
  },
  {
    title: 'Aderência ao seu cenário',
    description: 'A demonstração parte da sua rotina real para mostrar onde o Kanban X-ERP entrega ganho operacional mais rápido.',
    icon: 'M17 20h5V4H2v16h5m10 0v-8m0 8H7m10 0l-5-5m0 0l-5 5m5-5v12',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
]

const contactSupports = [
  {
    title: 'Conversa objetiva',
    description: 'Em poucos minutos entendemos o cenário atual, os gargalos do processo e o que precisa ser priorizado primeiro.'
  },
  {
    title: 'Sem compromisso',
    description: 'A ideia é diagnosticar a operação e mostrar aderência. Você não precisa chegar com o fluxo fechado.'
  },
  {
    title: 'Foco em aderência operacional',
    description: 'A demonstração é guiada pelo seu processo, não por uma apresentação genérica de funcionalidades.'
  }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const plans = [
  {
    name: 'Por Usuário',
    positioning: 'Operações individuais',
    userRange: '1 usuário',
    monthlyPrice: 109,
    automations: '2.000/mês',
    processes: '10 processos',
    databases: '10 databases'
  },
  {
    name: 'Equipe',
    positioning: 'Times em estruturação',
    userRange: '1 a 10 usuários',
    monthlyPrice: 750,
    automations: '5.000/mês',
    processes: 'Ilimitado',
    databases: 'Ilimitado'
  },
  {
    name: 'Expansão',
    positioning: 'Operações em crescimento',
    userRange: '11 a 25 usuários',
    monthlyPrice: 1250,
    automations: '5.000/mês',
    processes: 'Ilimitado',
    databases: 'Ilimitado'
  },
  {
    name: 'Escala',
    positioning: 'Handoffs entre múltiplas áreas',
    userRange: '26 a 50 usuários',
    monthlyPrice: 1800,
    automations: '5.000/mês',
    processes: 'Ilimitado',
    databases: 'Ilimitado'
  },
  {
    name: 'Alta Performance',
    positioning: 'Governança mais robusta',
    userRange: '51 a 100 usuários',
    monthlyPrice: 3000,
    automations: '2.000/mês',
    processes: 'Ilimitado',
    databases: 'Ilimitado'
  },
  {
    name: 'Corporativo',
    positioning: 'Operação sob medida',
    userRange: 'Acima de 100 usuários',
    monthlyPrice: null,
    automations: 'Sob medida',
    processes: 'Sob medida',
    databases: 'Sob medida'
  }
]

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value)
}

const getDiscountedMonthly = (monthlyPrice) => {
  return monthlyPrice * 0.8
}

const getAnnualDiscount = (monthlyPrice) => {
  return monthlyPrice * 12 * 0.2
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
