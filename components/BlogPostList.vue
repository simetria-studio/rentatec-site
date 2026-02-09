<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    <NuxtLink v-for="post in posts" :key="post.id" :to="`/blog/${post.slug}`" class="block">
      <article class="overflow-hidden bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="relative aspect-[16/9]">
          <img :src="post.cover || fallback" alt="Capa" class="object-cover w-full h-full" />
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 text-sm font-medium text-white rounded-full" :class="badgeColor(post.category)">
              {{ post.category || 'Geral' }}
            </span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="mb-4 text-xl font-bold text-gray-900">
            {{ post.title }}
          </h3>
          <p class="mb-4 text-gray-600">
            {{ post.excerpt || 'Leia mais...' }}
          </p>
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500">{{ formatDate(post.createdAt) }}</div>
            <span class="text-sm text-gray-500">{{ readTime(post.content) }} min de leitura</span>
          </div>
        </div>
      </article>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: { type: Array, default: () => [] }
})

const fallback = 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80'

function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('pt-BR')
}

function readTime(content) {
  if (!content) return 1
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function badgeColor(category) {
  switch ((category || '').toLowerCase()) {
    case 'tecnologia':
      return 'bg-blue-600'
    case 'automação':
    case 'automacao':
      return 'bg-purple-600'
    case 'cases':
      return 'bg-green-600'
    default:
      return 'bg-gray-600'
  }
}
</script>
