<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-slate-950">
    <NavBar />

    <main>
      <section class="bg-white pt-28 md:pt-32">
        <div class="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-20">
          <div class="flex flex-col justify-center">
            <h1 class="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              IA para ler, conferir e integrar documentos fiscais
            </h1>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              O X-ERP Notas vai além da captura: usa IA/OCR para interpretar PDFs e documentos fiscais, extrair dados relevantes, apontar divergências e preparar NF-e, CT-e e NFS-e para aprovação e integração ao ERP.
            </p>

            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" class="inline-flex items-center justify-center rounded-lg bg-[#043259] px-7 py-4 text-base font-black text-white transition hover:bg-[#0b4779]">
                Agendar diagnóstico
              </a>
              <a href="#recursos" class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:bg-slate-50">
                Ver recursos
              </a>
            </div>

            <div class="mt-10 grid max-w-3xl gap-4 border-t border-slate-200 pt-7 sm:grid-cols-3">
              <div>
                <strong class="block text-2xl font-black text-slate-950">IA/OCR</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">leitura inteligente de PDFs e dados fiscais</span>
              </div>
              <div>
                <strong class="block text-2xl font-black text-slate-950">SEFAZ</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">monitoramento automático de documentos</span>
              </div>
              <div>
                <strong class="block text-2xl font-black text-slate-950">ERP</strong>
                <span class="mt-1 block text-sm leading-5 text-slate-700">integração com histórico e rastreabilidade</span>
              </div>
            </div>
          </div>

          <div class="relative lg:-mr-16">
            <div class="overflow-hidden rounded-2xl border border-slate-200 bg-[#041225] p-3 shadow-2xl shadow-slate-900/10">
              <div class="rounded-xl bg-white p-2">
                <img src="/assets/images/dashinicial.png" alt="Dashboard fiscal real do X-ERP Notas" class="aspect-[16/8] w-full rounded-lg object-contain object-top" />
              </div>
              <div class="grid gap-3 p-4 text-white sm:grid-cols-3">
                <div v-for="item in heroSignals" :key="item.label" class="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p class="text-xs font-black uppercase tracking-[0.14em] text-cyan-200">{{ item.label }}</p>
                  <p class="mt-2 text-sm font-bold leading-5 text-white">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-y border-slate-200 bg-slate-50 py-14 md:py-16">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <h2 class="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Menos rotina manual, mais controle sobre o fiscal
              </h2>
              <p class="mt-5 text-lg leading-8 text-slate-700">
                A operação fiscal ganha previsibilidade quando documentos, validações e integrações deixam de depender de busca manual e conferência em planilhas.
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <article class="rounded-xl border border-slate-200 bg-white p-6">
                <p class="text-sm font-black uppercase tracking-[0.16em] text-orange-800">Antes</p>
                <ul class="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
                  <li v-for="item in beforeItems" :key="item">{{ item }}</li>
                </ul>
              </article>
              <article class="rounded-xl border border-slate-200 bg-white p-6">
                <p class="text-sm font-black uppercase tracking-[0.16em] text-cyan-800">Com X-ERP Notas</p>
                <ul class="mt-4 space-y-3 text-sm font-semibold leading-6 text-slate-700">
                  <li v-for="item in afterItems" :key="item">{{ item }}</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Recursos principais</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Uma rotina fiscal conectada do documento ao ERP
            </h2>
          </div>

          <div class="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article v-for="feature in features" :key="feature.title" class="rounded-xl border border-slate-200 bg-white p-6">
              <p class="text-sm font-black uppercase tracking-[0.14em] text-orange-800">{{ feature.label }}</p>
              <h3 class="mt-3 text-xl font-black text-slate-950">{{ feature.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-slate-700">{{ feature.description }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-[#041225] py-16 text-white md:py-20">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:items-center">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">Fluxo operacional</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Cada documento segue uma trilha clara de conferência
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-200">
              O time fiscal acompanha o status do documento, os pontos de aprovação e as pendências antes da integração definitiva.
            </p>
          </div>

          <div class="overflow-hidden rounded-2xl border border-white/10 bg-white">
            <div class="grid grid-cols-[0.8fr_1.2fr] bg-slate-950 px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-200">
              <span>Etapa</span>
              <span>O que acontece</span>
            </div>
            <div class="divide-y divide-slate-200">
              <div v-for="step in workflow" :key="step.stage" class="grid gap-4 px-5 py-5 md:grid-cols-[0.8fr_1.2fr]">
                <strong class="text-base font-black text-slate-950">{{ step.stage }}</strong>
                <p class="text-sm font-semibold leading-6 text-slate-700">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Telas do produto</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Visualize a operação fiscal na prática
              </h2>
            </div>
          </div>

          <div class="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <img src="/assets/images/listagem.png" alt="Listagem de documentos fiscais no X-ERP Notas" class="w-full rounded-xl border border-slate-200 bg-white object-contain" />
            </div>
            <div class="grid gap-5">
              <div v-for="screen in screens" :key="screen.title" class="rounded-xl border border-slate-200 bg-white p-5">
                <img v-if="screen.image" :src="screen.image" :alt="screen.title" class="mb-4 h-36 w-full rounded-lg border border-slate-200 bg-slate-50 object-cover object-top" />
                <h3 class="text-xl font-black text-slate-950">{{ screen.title }}</h3>
                <p class="mt-3 text-sm leading-6 text-slate-700">{{ screen.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" class="bg-slate-50 py-16 md:py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Planos</p>
              <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
                Escolha pelo volume de documentos fiscais
              </h2>
            </div>

            <div class="inline-grid grid-cols-2 rounded-lg border border-slate-300 bg-white p-1">
              <button
                type="button"
                :class="billingPeriod === 'monthly' ? 'bg-[#043259] text-white' : 'text-slate-700 hover:bg-slate-50'"
                class="rounded-md px-5 py-3 text-sm font-black transition"
                @click="billingPeriod = 'monthly'"
              >
                Mensal
              </button>
              <button
                type="button"
                :class="billingPeriod === 'annual' ? 'bg-[#043259] text-white' : 'text-slate-700 hover:bg-slate-50'"
                class="rounded-md px-5 py-3 text-sm font-black transition"
                @click="billingPeriod = 'annual'"
              >
                Anual
              </button>
            </div>
          </div>

          <div class="grid gap-5 lg:grid-cols-4">
            <article
              v-for="plan in plans"
              :key="plan.name"
              class="relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
              :class="plan.name === 'Intermediário' ? 'ring-2 ring-[#043259]' : ''"
            >
              <div
                v-if="plan.name === 'Intermediário'"
                class="-mx-6 -mt-6 mb-5 bg-[#043259] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-white"
              >
                Mais usado
              </div>
              <div>
                <div>
                  <div>
                    <p class="text-2xl font-black text-slate-950">{{ plan.name }}</p>
                    <p class="mt-1 text-sm font-bold leading-5 text-slate-600">{{ plan.subtitle }}</p>
                  </div>
                </div>

                <div class="mt-6 border-y border-slate-200 py-5">
                  <p class="text-3xl font-black tracking-tight text-slate-950">{{ plan.price }}</p>
                  <p class="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                    {{ billingPeriod === 'annual' ? 'contratação anual' : 'cobrança mensal' }}
                  </p>
                </div>

                <dl class="mt-5 space-y-4">
                  <div>
                    <dt class="text-xs font-black uppercase tracking-[0.14em] text-cyan-800">Volume</dt>
                    <dd class="mt-1 text-sm font-bold leading-6 text-slate-800">{{ plan.volume }}</dd>
                  </div>
                  <div>
                    <dt class="text-xs font-black uppercase tracking-[0.14em] text-cyan-800">Importações IA</dt>
                    <dd class="mt-1 text-sm font-bold leading-6 text-slate-800">{{ plan.ai }}</dd>
                  </div>
                  <div>
                    <dt class="text-xs font-black uppercase tracking-[0.14em] text-cyan-800">Filiais</dt>
                    <dd class="mt-1 text-sm font-bold leading-6 text-slate-800">{{ plan.branch }}</dd>
                  </div>
                </dl>
              </div>

              <a href="#contact" class="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#043259] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0b4779]">
                {{ plan.cta }}
              </a>
            </article>
          </div>

          <p class="mt-5 text-sm font-semibold leading-6 text-slate-700">
            Documento adicional importado: R$ 2,90 por documento. Integração ERP pode exigir setup conforme ambiente e escopo.
          </p>
        </div>
      </section>

      <section id="contact" class="bg-white py-16 md:py-20">
        <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:items-start">
          <div>
            <p class="text-sm font-black uppercase tracking-[0.18em] text-cyan-800">Diagnóstico fiscal</p>
            <h2 class="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
              Vamos entender o volume e os gargalos da sua operação fiscal
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-700">
              Conte como sua empresa recebe, confere e integra documentos hoje. A Rentatec avalia o melhor caminho para reduzir trabalho manual e aumentar rastreabilidade.
            </p>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7">
            <form class="space-y-5" @submit.prevent="submitLeadForm">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-name" class="block text-sm font-black text-slate-900">Nome completo *</label>
                  <input id="lead-name" v-model="leadForm.name" type="text" required class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-cyan-100" placeholder="Seu nome" />
                </div>
                <div>
                  <label for="lead-email" class="block text-sm font-black text-slate-900">E-mail *</label>
                  <input id="lead-email" v-model="leadForm.email" type="email" required class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-cyan-100" placeholder="seu@email.com" />
                </div>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="lead-phone" class="block text-sm font-black text-slate-900">Telefone / WhatsApp</label>
                  <input id="lead-phone" v-model="leadForm.phone" type="tel" class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-cyan-100" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label for="lead-company" class="block text-sm font-black text-slate-900">Empresa</label>
                  <input id="lead-company" v-model="leadForm.company_name" type="text" class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-cyan-100" placeholder="Nome da empresa" />
                </div>
              </div>

              <div>
                <label for="lead-notes" class="block text-sm font-black text-slate-900">Mensagem</label>
                <textarea id="lead-notes" v-model="leadForm.notes" rows="5" class="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-[#043259] focus:ring-2 focus:ring-cyan-100" placeholder="Ex.: recebemos NF-e e NFS-e manualmente, conferimos OC em planilha e queremos integrar ao ERP."></textarea>
              </div>

              <div
                v-if="leadMessage"
                class="rounded-lg border px-4 py-3 text-sm font-semibold"
                :class="leadMessageType === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-red-200 bg-red-50 text-red-800'"
              >
                {{ leadMessage }}
              </div>

              <button type="submit" :disabled="isSubmitting" class="w-full rounded-lg bg-[#043259] px-6 py-4 text-base font-black text-white transition hover:bg-[#0b4779] disabled:cursor-not-allowed disabled:opacity-60">
                {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      billingPeriod: 'annual',
      leadFormKey: '3a057e1c-0121-4aa4-9dd4-549253e54972',
      leadsApiEndpoint: 'https://suporte.rentatec.com.br/api/leads/capture',
      isSubmitting: false,
      leadMessage: '',
      leadMessageType: 'success',
      leadForm: {
        name: '',
        email: '',
        phone: '',
        company_name: '',
        notes: ''
      },
      heroSignals: [
        { label: 'Leitura IA', text: 'PDFs e documentos fiscais interpretados automaticamente.' },
        { label: 'Auditoria', text: 'Dados extraídos conferidos antes da integração.' },
        { label: 'Integração', text: 'Dados fiscais conectados ao ERP.' }
      ],
      beforeItems: [
        'Busca manual em portais, e-mails e arquivos recebidos de fornecedores.',
        'Redigitação de dados fiscais e risco de divergência entre áreas.',
        'Aprovação fiscal, compras e financeiro sem trilha única de acompanhamento.'
      ],
      afterItems: [
        'Monitoramento automatizado de NF-e, CT-e e NFS-e.',
        'Conferência de valores, impostos, pedidos e status em uma rotina rastreável.',
        'Integração ao ERP depois da validação, com histórico de quem aprovou cada etapa.'
      ],
      features: [
        {
          label: 'Monitoramento',
          title: 'SEFAZ e prefeituras',
          description: 'Busca automática de documentos fiscais para reduzir dependência do envio manual por fornecedores.'
        },
        {
          label: 'Leitura inteligente',
          title: 'Captura via IA/OCR',
          description: 'Interpreta PDFs e dados não estruturados de serviços, energia e comunicações para uso no ERP.'
        },
        {
          label: 'Compras',
          title: 'Conciliação com OC',
          description: 'Relaciona documentos fiscais a ordens de compra e ajuda a validar preços, quantidades e impostos.'
        },
        {
          label: 'Compliance',
          title: 'Manifestação do destinatário',
          description: 'Registra ciência e confirmação das operações diretamente pelo fluxo fiscal.'
        },
        {
          label: 'Controle',
          title: 'Auditoria de divergências',
          description: 'Alerta sobre inconsistências antes que o documento avance para financeiro ou integração.'
        },
        {
          label: 'ERP',
          title: 'Integração com rastreabilidade',
          description: 'Mantém histórico de status, aprovações e alterações durante o tratamento do documento.'
        }
      ],
      workflow: [
        { stage: 'Documento emitido', description: 'NF-e, CT-e ou NFS-e é localizada pelo monitoramento fiscal ou adicionada ao fluxo.' },
        { stage: 'Captura', description: 'Dados relevantes são lidos, organizados e preparados para conferência operacional.' },
        { stage: 'Validação', description: 'Compras, fiscal, financeiro e recebimento verificam valores, impostos, OC e pendências.' },
        { stage: 'Aprovação', description: 'Responsáveis tratam divergências e registram decisões em uma trilha única.' },
        { stage: 'Integração ERP', description: 'Documento validado segue para o ERP com dados consistentes e histórico preservado.' }
      ],
      screens: [
        {
          title: 'Validação entre áreas',
          description: 'Acompanhe compras, fiscal, financeiro e recebimento em um mesmo fluxo de aprovação.'
        },
        {
          title: 'Indicadores fiscais',
          description: 'Veja volumes, pendências, documentos integrados e divergências sem consolidar planilhas.'
        }
      ]
    }
  },
  computed: {
    prices() {
      const isMonthly = this.billingPeriod === 'monthly'
      const multiplier = isMonthly ? 1.15 : 1

      const formatPrice = (value) => {
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
      }

      return {
        basic: formatPrice(120 * multiplier),
        intermediate: formatPrice(300 * multiplier),
        advanced: formatPrice(500 * multiplier),
        filial: formatPrice(isMonthly ? 75 : 65)
      }
    },
    plans() {
      return [
        {
          name: 'Básico',
          subtitle: 'Pequenas operações fiscais',
          volume: 'Até 1.000 documentos fiscais/mês',
          ai: '10 importações IA',
          branch: `+ R$ ${this.prices.filial}/mês por filial`,
          price: `R$ ${this.prices.basic}/mês`,
          cta: 'Começar agora'
        },
        {
          name: 'Intermediário',
          subtitle: 'Empresas em crescimento',
          volume: '1.001 a 5.000 documentos/mês',
          ai: '25 importações IA',
          branch: `+ R$ ${this.prices.filial}/mês por filial`,
          price: `R$ ${this.prices.intermediate}/mês`,
          cta: 'Começar agora'
        },
        {
          name: 'Avançado',
          subtitle: 'Operações com alto volume',
          volume: '5.001 a 10.000 documentos/mês',
          ai: '50 importações IA',
          branch: `+ R$ ${this.prices.filial}/mês por filial`,
          price: `R$ ${this.prices.advanced}/mês`,
          cta: 'Começar agora'
        },
        {
          name: 'Corporativo',
          subtitle: 'Cenários customizados',
          volume: 'Acima de 10.000 documentos/mês',
          ai: 'Sob medida',
          branch: 'Filiais conforme escopo',
          price: 'Sob consulta',
          cta: 'Falar com vendas'
        }
      ]
    }
  },
  head() {
    return {
      title: 'X-ERP Notas - Automação e Auditoria Fiscal | Rentatec',
      meta: [
        { hid: 'description', name: 'description', content: 'Automatize captura, auditoria, manifestação e integração de NF-e, CT-e e NFS-e com o X-ERP Notas da Rentatec.' }
      ]
    }
  },
  methods: {
    async submitLeadForm() {
      if (this.isSubmitting) return

      this.isSubmitting = true
      this.leadMessage = ''

      try {
        const response = await fetch(this.leadsApiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            ...this.leadForm,
            form_key: this.leadFormKey
          })
        })

        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Não foi possível enviar o formulário.')
        }

        this.leadMessageType = 'success'
        this.leadMessage = data.message || 'Formulário enviado com sucesso!'
        this.leadForm = {
          name: '',
          email: '',
          phone: '',
          company_name: '',
          notes: ''
        }
      } catch (error) {
        this.leadMessageType = 'error'
        this.leadMessage = error instanceof Error ? error.message : 'Ocorreu um erro ao enviar.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
