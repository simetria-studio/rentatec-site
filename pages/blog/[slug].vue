<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar />

    <section class="relative pt-28 pb-16 bg-gradient-to-b to-white from-slate-50">
      <div class="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <NuxtLink to="/blog" class="inline-flex items-center mb-6 text-blue-600 hover:underline">
          ← Voltar para o Blog
        </NuxtLink>

        <article v-if="post" class="p-6 bg-white rounded-2xl shadow">
          <h1 class="mb-4 text-3xl font-bold text-gray-900">{{ post.title }}</h1>
          <div class="flex justify-between items-center mb-6 text-sm text-gray-500">
            <span>{{ post.category || 'Geral' }}</span>
            <span>{{ formatDate(post.createdAt) }} • {{ readTime(post.content) }} min</span>
          </div>
          <img v-if="post.cover" :src="post.cover" alt="Capa" class="mb-6 w-full rounded-xl" />
          <div class="max-w-none prose">
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

const API_BASE = 'https://blog.rentatec.com.br/api'
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

function renderContent(text) {
  if (!text) return ''
  if (/<[a-z][\s\S]*>/i.test(text)) return text
  return mdToHtml(text)
}

const rendered = computed(() => renderContent(post.value?.content || ''))

useHead(() => ({
  title: post.value?.title ? `${post.value.title} | Rentatec` : 'Blog | Rentatec',
}))
</script>

<style>
.prose h1 { font-size: 1.875rem; font-weight: 700; margin: 1rem 0; }
.prose h2 { font-size: 1.5rem; font-weight: 700; margin: 1rem 0; }
.prose h3 { font-size: 1.25rem; font-weight: 600; margin: 0.75rem 0; }
.prose h4 { font-size: 1.125rem; font-weight: 600; margin: 0.75rem 0; }
.prose p { color: #374151; margin-bottom: 1rem; }
.prose ul, .prose ol { margin: 0 0 1rem 1.25rem; color: #374151; }
.prose blockquote { border-left: 4px solid #d1d5db; padding-left: 1rem; color: #4b5563; margin-bottom: 1rem; }
.prose a { color: #2563eb; text-decoration: underline; }
.prose code { background: #f3f4f6; padding: 0.1rem 0.3rem; border-radius: 0.25rem; }
.prose pre { background: #f3f4f6; border-radius: 0.5rem; margin-bottom: 1rem; padding: 0.75rem 1rem; overflow-x: auto; }
.prose img { border-radius: 0.75rem; margin-bottom: 1rem; max-width: 100%; }
.prose table { border-collapse: collapse; margin-bottom: 1rem; width: 100%; }
.prose th, .prose td { border: 1px solid #d1d5db; padding: 0.5rem; }
.prose th { background: #f9fafb; font-weight: 600; }
</style> 
