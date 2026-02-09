<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />

    <section class="relative pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="inline-flex items-center text-blue-600 hover:underline mb-6">
          ← Voltar para o Blog
        </NuxtLink>

        <article v-if="post" class="p-6 bg-white rounded-2xl shadow">
          <h1 class="mb-4 text-3xl font-bold text-gray-900">{{ post.title }}</h1>
          <div class="flex items-center justify-between mb-6 text-sm text-gray-500">
            <span>{{ post.category || 'Geral' }}</span>
            <span>{{ formatDate(post.createdAt) }} • {{ readTime(post.content) }} min</span>
          </div>
          <img v-if="post.cover" :src="post.cover" alt="Capa" class="w-full rounded-xl mb-6" />
          <div class="prose max-w-none">
            <div v-html="rendered"></div>
          </div>
        </article>

        <div v-else class="text-center text-gray-600">
          Post não encontrado.
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const API_BASE = 'http://127.0.0.1:8000/api'
const route = useRoute()

const post = ref(null)
const loading = ref(false)
const error = ref('')

onMounted(async () => {
  await loadPostBySlug(String(route.params.slug || ''))
})

async function loadPostBySlug(slug) {
  if (!slug) return
  loading.value = true
  error.value = ''
  try {
    // 1) Tenta via busca por q= e filtra slug exato
    let candidate = null
    const res = await fetch(`${API_BASE}/posts?per_page=5&q=${encodeURIComponent(slug)}`, { headers: { Accept: 'application/json' } })
    if (res.ok) {
      const data = await res.json()
      const items = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
      candidate = items.find(p => String(p.slug) === slug) || items[0] || null
    }
    // 2) Fallback: tenta endpoint com ?slug= se existir no backend
    if (!candidate) {
      const trySlug = await fetch(`${API_BASE}/posts?slug=${encodeURIComponent(slug)}`, { headers: { Accept: 'application/json' } }).catch(() => null)
      if (trySlug && trySlug.ok) {
        const data = await trySlug.json()
        const items = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
        candidate = items.find(p => String(p.slug) === slug) || items[0] || null
      }
    }
    if (!candidate) throw new Error('Post não encontrado')
    post.value = mapPost(candidate)
  } catch (e) {
    error.value = e.message || 'Erro ao carregar post'
    post.value = null
  } finally {
    loading.value = false
  }
}

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function readTime(content) {
  if (!content) return 1
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function mdToHtml(text) {
  if (!text) return ''
  let html = text
  html = html.replace(/^# (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^## (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^### (.*$)/gim, '<h4>$1</h4>')
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')
  html = html.replace(/\n$/gim, '<br />')
  html = html.replace(/\n\n/g, '</p><p>')
  html = `<p>${html}</p>`
  return html
}

function normalizeImage(src) {
  if (!src) return ''
  let value = String(src).replace(/\s+/g, '')
  const dataIdx = value.indexOf('data:image')
  if (dataIdx > -1) return value.slice(dataIdx)
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
    category: p.category?.name || p.category_name || 'Geral',
    createdAt: p.published_at || p.created_at || p.createdAt
  }
}

const rendered = computed(() => mdToHtml(post.value?.content || ''))
</script>

<style>
.prose h2 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0; }
.prose h3 { font-size: 1.25rem; font-weight: 600; margin: 0.75rem 0; }
.prose p { color: #374151; margin-bottom: 1rem; }
.prose code { background: #f3f4f6; padding: 0.1rem 0.3rem; border-radius: 0.25rem; }
</style> 