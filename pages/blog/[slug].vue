<template>
  <div v-if="post" :key="$route.params.slug" class="min-h-screen bg-gray-50">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-32 pb-16 bg-gradient-to-b to-white from-slate-50">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br rounded-full filter blur-3xl from-blue-100/20 to-purple-100/20"></div>
        <div class="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr rounded-full filter blur-3xl from-indigo-100/20 to-blue-100/20"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex mb-8 text-sm">
          <ol class="flex items-center space-x-2">
            <li>
              <NuxtLink to="/blog" class="text-gray-500 hover:text-blue-600">Blog</NuxtLink>
            </li>
            <li>
              <span class="text-gray-400">/</span>
            </li>
            <li>
              <span class="text-gray-900">{{ post.title }}</span>
            </li>
          </ol>
        </nav>

        <!-- Post Header -->
        <div class="max-w-4xl">
          <div class="mb-8">
            <span class="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
              {{ post.category }}
            </span>
            <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {{ post.title }}
            </h1>
            <div class="flex flex-wrap gap-6 items-center">
              <div class="flex items-center">
                <img :src="post.author.avatar" :alt="post.author.name" class="w-12 h-12 rounded-full">
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ post.author.name }}</p>
                  <p class="text-sm text-gray-500">{{ post.author.role }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-6 text-gray-500">
                <span class="flex items-center">
                  <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  {{ post.date }}
                </span>
                <span class="flex items-center">
                  <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ post.readTime }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Post Content -->
    <section class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <!-- Main Content -->
          <div class="lg:col-span-8">
            <article class="max-w-none prose prose-lg">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="mb-8 w-full rounded-2xl"
              >
              
              <div v-html="post.content"></div>
            </article>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-12">
              <span v-for="tag in post.tags" :key="tag" class="px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-full">
                #{{ tag }}
              </span>
            </div>

            <!-- Author Bio -->
            <div class="p-8 mt-12 bg-blue-50 rounded-2xl">
              <div class="flex items-center mb-4">
                <img :src="post.author.avatar" :alt="post.author.name" class="w-16 h-16 rounded-full">
                <div class="ml-4">
                  <h3 class="text-xl font-bold text-gray-900">{{ post.author.name }}</h3>
                  <p class="text-gray-600">{{ post.author.role }}</p>
                </div>
              </div>
              <p class="text-gray-600">{{ post.author.bio }}</p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-4">
            <!-- Related Posts -->
            <div class="p-6 bg-white rounded-2xl shadow-lg">
              <h3 class="mb-6 text-lg font-bold text-gray-900">Posts Relacionados</h3>
              <div class="space-y-6">
                <NuxtLink 
                  v-for="(relatedPost, slug) in relatedPosts" 
                  :key="slug"
                  :to="`/blog/${slug}`" 
                  class="block group"
                >
                  <div class="flex items-center">
                    <img 
                      :src="relatedPost.image" 
                      :alt="relatedPost.title" 
                      class="object-cover w-20 h-20 rounded-lg"
                    >
                    <div class="ml-4">
                      <h4 class="text-gray-900 transition-colors group-hover:text-blue-600">{{ relatedPost.title }}</h4>
                      <p class="text-sm text-gray-500">{{ relatedPost.date }}</p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()

// Dados mockados dos posts
const posts = {
  'como-ia-esta-revolucionando-gestao-processos': {
    title: 'Como a IA está Revolucionando a Gestão de Processos',
    category: 'Tecnologia',
    author: {
      name: 'Maria Costa',
      role: 'Especialista em IA',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      bio: 'Especialista em Inteligência Artificial com mais de 8 anos de experiência em implementação de soluções de IA para empresas.'
    },
    date: '10 Mar 2024',
    readTime: '5 min de leitura',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3',
    content: `
      <p class="lead">A Inteligência Artificial está transformando radicalmente a maneira como as empresas gerenciam seus processos, trazendo eficiência e inovação.</p>
      
      <h2>O Poder da IA na Gestão</h2>
      <p>Com o avanço da tecnologia, as empresas estão descobrindo novas maneiras de otimizar suas operações usando IA...</p>
      
      <h2>Benefícios Principais</h2>
      <ul>
        <li>Automação de tarefas repetitivas</li>
        <li>Análise preditiva de dados</li>
        <li>Tomada de decisão baseada em dados</li>
        <li>Melhor experiência do cliente</li>
      </ul>
    `,
    tags: ['IA', 'Automação', 'Tecnologia', 'Inovação']
  },
  '5-estrategias-automatizar-workflow': {
    title: '5 Estratégias para Automatizar seu Workflow',
    category: 'Automação',
    author: {
      name: 'Pedro Santos',
      role: 'Analista de Processos',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
      bio: 'Analista de processos com foco em automação e otimização de fluxos de trabalho.'
    },
    date: '8 Mar 2024',
    readTime: '7 min de leitura',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3',
    content: `
      <p class="lead">Descubra as melhores estratégias para automatizar seus processos e aumentar a produtividade da sua equipe.</p>
      
      <h2>1. Identifique os Processos Críticos</h2>
      <p>O primeiro passo é mapear e identificar os processos que mais impactam sua operação...</p>
      
      <h2>2. Escolha as Ferramentas Certas</h2>
      <p>Com tantas opções disponíveis no mercado, é importante escolher as ferramentas que melhor se adequam às suas necessidades...</p>
    `,
    tags: ['Workflow', 'Automação', 'Produtividade']
  },
  'case-study-transformacao-digital-industria': {
    title: 'Case Study: Transformação Digital na Indústria',
    category: 'Cases',
    author: {
      name: 'Ana Oliveira',
      role: 'Consultora de Transformação Digital',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      bio: 'Consultora especializada em transformação digital com vasta experiência em projetos industriais.'
    },
    date: '5 Mar 2024',
    readTime: '10 min de leitura',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
    content: `
      <p class="lead">Um estudo de caso detalhado sobre como uma indústria tradicional conseguiu se transformar digitalmente.</p>
      
      <h2>O Desafio</h2>
      <p>A empresa enfrentava diversos desafios com processos manuais e ineficientes...</p>
      
      <h2>A Solução</h2>
      <p>Implementamos uma série de soluções digitais que transformaram completamente a operação...</p>
    `,
    tags: ['Case Study', 'Indústria', 'Transformação Digital']
  }
}

const { data: post } = await useAsyncData(
  'post',
  () => {
    const post = posts[route.params.slug]
    if (!post) {
      throw createError({ statusCode: 404, message: 'Post não encontrado' })
    }
    return post
  },
  {
    watch: [route.params.slug]
  }
)

const relatedPosts = computed(() => {
  if (!post.value) return {}
  return Object.entries(posts)
    .filter(([slug]) => slug !== route.params.slug)
    .reduce((acc, [slug, post]) => {
      acc[slug] = post
      return acc
    }, {})
})
</script>

<style>
.prose {
  max-width: 100%;
}

.prose img {
  border-radius: 1rem;
}

.prose h2 {
  color: #1a202c;
  font-weight: 700;
  font-size: 1.875rem;
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.prose p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.prose ul,
.prose ol {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.prose blockquote {
  font-style: italic;
  color: #2d3748;
  border-left-color: #4299e1;
  background-color: #ebf8ff;
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
}

.prose blockquote p {
  margin: 0;
}

.lead {
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 2rem;
}
</style> 