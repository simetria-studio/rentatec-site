<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />
    
    <!-- Hero Section -->
    <section class="relative pt-36 pb-24 bg-gradient-to-b via-white to-white from-slate-50">
      <div class="absolute inset-0">
        <div class="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br rounded-full blur-3xl from-blue-100/40 to-indigo-100/40"></div>
        <div class="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr rounded-full blur-3xl from-purple-100/40 to-sky-100/40"></div>
      </div>
      
      <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Blog & Insights
          </h1>
          <p class="mx-auto mb-12 max-w-3xl text-lg text-gray-600 md:text-xl">
            Descubra as últimas tendências em tecnologia, automação e transformação digital
          </p>
          
          <!-- Search Bar -->
          <div class="mx-auto mb-12 max-w-2xl">
            <div class="flex items-center p-2 rounded-2xl ring-1 ring-gray-200 shadow-xl backdrop-blur bg-white/80">
              <input 
                v-model="search"
                type="text" 
                placeholder="Buscar artigos..." 
                class="flex-1 px-4 py-3 placeholder-gray-400 text-gray-700 bg-transparent border-0 focus:outline-none focus:ring-0"
              >
              <button @click="applySearch" class="px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                Buscar
              </button>
            </div>
         
          </div>
          
          <!-- Categories -->
          <div class="flex flex-wrap gap-3 justify-center">
            <button @click="filterBy('')" :class="chipClass('')">Todos</button>
            <button v-for="c in categories" :key="c.id" @click="filterBy(String(c.id))" :class="chipClass(String(c.id))">{{ c.name }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section v-if="featured" class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl">
          <div class="grid grid-cols-1 items-center lg:grid-cols-2">
            <div class="p-8 lg:p-12">
              <span class="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-100 rounded-full bg-blue-500/30">
                EM DESTAQUE
              </span>
              <h2 class="mb-4 text-3xl font-bold text-white">
                {{ featured.title }}
              </h2>
              <p class="mb-8 text-blue-100">
                {{ featured.excerpt || 'Destaque do blog' }}
              </p>
              <NuxtLink :to="`/blog/${featured.slug}`" class="inline-flex items-center px-6 py-3 font-semibold text-blue-600 bg-white rounded-xl shadow transition-all hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5">
                Ler Artigo
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </NuxtLink>
            </div>
            <div class="relative aspect-[4/3] lg:aspect-auto">
              <img 
                :src="featured.cover || fallbackCover" 
                alt="Featured Post" 
                class="object-cover w-full h-full"
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-16 bg-gray-50">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <BlogPostList :posts="filteredPosts" />

        <!-- Pagination placeholder (client-only simple) -->
        <div class="flex justify-center mt-12" v-if="filteredPosts.length === 0">
          <p class="text-gray-500">Nenhum artigo encontrado.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-white">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl md:p-12">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-3xl font-bold text-white">
              Fique por dentro das novidades
            </h2>
            <p class="mb-8 text-blue-100">
              Assine nossa newsletter e receba as últimas atualizações sobre tecnologia, automação e transformação digital.
            </p>
            <form class="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <input 
                type="email" 
                placeholder="Seu email" 
                class="px-6 py-3 w-full text-gray-900 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-96"
              >
              <button type="submit" class="px-8 py-3 w-full font-semibold text-blue-600 bg-white rounded-xl transition-colors hover:bg-blue-50 sm:w-auto">
                Assinar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogPostList from '@/components/BlogPostList.vue'

const API_BASE = 'http://127.0.0.1:8000/api'
const fallbackCover = 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80'

const allPosts = ref([])
const search = ref('')
const category = ref('') // stores category_id as string; empty means all
const loading = ref(false)
const error = ref('')
const categories = ref([])

onMounted(async () => {
  await Promise.all([loadCategories()])
  await loadPosts()
})

async function loadPosts() {
  loading.value = true
  error.value = ''
  try {
    const params = new URLSearchParams()
    params.append('per_page', '50')
    if (search.value.trim()) params.append('q', search.value.trim())
    if (category.value) params.append('category_id', String(category.value))
    const res = await fetch(`${API_BASE}/posts?${params.toString()}`, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error('Falha ao carregar posts')
    const data = await res.json()
    const items = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
    allPosts.value = items.map(mapPost)
  } catch (e) {
    error.value = e.message || 'Erro ao carregar posts'
    allPosts.value = []
  } finally {
    loading.value = false
  }
}

function normalizeImage(src) {
  if (!src) return ''
  let value = String(src)
  value = value.replace(/\s+/g, '')
  const dataIdx = value.indexOf('data:image')
  if (dataIdx > -1) {
    return value.slice(dataIdx)
  }
  if (value.startsWith('data:') || value.startsWith('http') || value.startsWith('/')) return value
  const starts = value.slice(0, 8)
  let mime = 'image/jpeg'
  if (starts.startsWith('iVBORw0')) mime = 'image/png'
  else if (starts.startsWith('R0lGOD')) mime = 'image/gif'
  else if (starts.startsWith('UklGR')) mime = 'image/webp'
  return `data:${mime};base64,${value}`
}

function mapPost(p) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    cover: normalizeImage(p.image_path || p.image_url || p.image || p.cover || ''),
    category: p.category?.name || p.category_name || '',
    createdAt: p.published_at || p.created_at || p.createdAt
  }
}

const featured = computed(() => allPosts.value[0] || null)

// Server-side filtering already applied; expose all posts
const filteredPosts = computed(() => allPosts.value)

function applySearch() {
  loadPosts()
}

function filterBy(cat) {
  category.value = cat
  loadPosts()
}

function chipClass(cat) {
  const active = (category.value || '') === (cat || '')
  return active
    ? 'px-6 py-2 text-blue-700 bg-blue-50 rounded-full ring-1 ring-blue-200 shadow-sm transition-all hover:bg-blue-100'
    : 'px-6 py-2 text-gray-700 bg-white rounded-full ring-1 ring-gray-200 hover:ring-blue-200 transition-all hover:bg-gray-50'
}

async function loadCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`, { headers: { Accept: 'application/json' } })
    if (!res.ok) throw new Error('Falha ao carregar categorias')
    const data = await res.json()
    categories.value = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
  } catch (e) {
    categories.value = []
  }
}
</script>

