<template>
  <div class="min-h-screen bg-gray-50 admin-skin">
    <NavBar />

    <section class="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-white to-white">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-br rounded-full blur-3xl from-blue-100/50 to-indigo-100/50"></div>
        <div class="absolute -bottom-10 -left-12 w-96 h-96 bg-gradient-to-tr rounded-full blur-3xl from-purple-100/40 to-sky-100/40"></div>
      </div>
      <div class="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Gerenciar Blog</h1>
            <p class="mt-1 text-gray-600">Crie, edite e publique conteúdos com facilidade</p>
          </div>
          <div class="flex items-center space-x-3">
            <NuxtLink to="/blog" class="inline-flex items-center px-4 py-2 text-gray-700 bg-white rounded-xl shadow hover:bg-gray-50 ring-1 ring-gray-200 transition">
              <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 12l4-4m-4 4l4 4"/></svg>
              Ver Blog
            </NuxtLink>
            <button v-if="isAuthenticated" @click="logout" class="inline-flex items-center px-4 py-2 text-white bg-red-600 rounded-xl shadow hover:bg-red-700 transition">
              <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
              Sair
            </button>
          </div>
        </div>

        <!-- Tabs -->
        <div v-if="isAuthenticated" class="flex items-center mb-8 space-x-2">
          <button @click="adminTab='posts'" :class="tabClass('posts')" class="px-4 py-2 rounded-lg">Postagens</button>
          <button @click="adminTab='list'" :class="tabClass('list')" class="px-4 py-2 rounded-lg">Lista</button>
          <button @click="adminTab='categories'" :class="tabClass('categories')" class="px-4 py-2 rounded-lg">Categorias</button>
        </div>

        <div v-if="!isAuthenticated" class="p-6 mx-auto max-w-md bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
          <div class="flex items-center mb-4">
            <div class="flex justify-center items-center mr-3 w-10 h-10 text-blue-600 bg-blue-50 rounded-full ring-1 ring-blue-100">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2 2 4 2 4 2-2.895 2-4zm0 0V7a4 4 0 10-8 0v4"/></svg>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-gray-900">Login do Admin</h2>
              <p class="text-sm text-gray-500">Acesse sua área para gerenciar postagens</p>
            </div>
          </div>
          <form @submit.prevent="login" class="space-y-4">
            <div>
              <label class="block mb-1 text-sm text-gray-700">Email</label>
              <input v-model="email" type="email" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label class="block mb-1 text-sm text-gray-700">Senha</label>
              <input v-model="password" type="password" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <button :disabled="loading" type="submit" class="inline-flex justify-center items-center px-4 py-2 w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow hover:opacity-95 hover:shadow-lg disabled:opacity-60 transition">
              <svg v-if="!loading" class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/></svg>
              {{ loading ? 'Entrando...' : 'Entrar' }}
            </button>
            <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
          </form>
        </div>

        <!-- POSTS TAB -->
        <div v-else-if="adminTab==='posts'" class="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div class="lg:col-span-1">
            <div class="p-6 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 lg:sticky lg:top-24">
              <div class="flex justify-between items-center mb-3">
                <h2 class="text-xl font-semibold text-gray-900">Nova Postagem</h2>
                <span class="text-xs text-gray-500">{{ user?.name }}</span>
              </div>
              <form @submit.prevent="createOrUpdatePost" class="space-y-4">
                <input v-model="form.id" type="hidden" />
                <input v-model="csrfToken" type="hidden" />
                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label class="block mb-1 text-sm text-gray-700">Slug</label>
                    <input v-model="form.slug" @input="validateSlug(form.slug)" type="text" placeholder="meu-primeiro-post" class="px-4 py-2 w-full bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    <div v-if="slugValidation.message" class="mt-1 text-xs" :class="slugValidation.available === true ? 'text-green-600' : slugValidation.available === false ? 'text-red-600' : 'text-gray-500'">
                      <span v-if="slugValidation.checking" class="flex items-center">
                        <svg class="animate-spin -ml-1 mr-1 h-3 w-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ slugValidation.message }}
                      </span>
                      <span v-else>{{ slugValidation.message }}</span>
                    </div>
                  </div>
                  <div>
                    <label class="block mb-1 text-sm text-gray-700">Categoria</label>
                    <select v-model="form.category_id" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Sem categoria</option>
                      <option v-for="c in categories" :key="c.id" :value="String(c.id)">{{ c.name }}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="block mb-1 text-sm text-gray-700">Título</label>
                <input v-model="form.title" type="text" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                </div>
                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label class="block mb-1 text-sm text-gray-700">Resumo</label>
                  <input v-model="form.excerpt" type="text" placeholder="Breve descrição" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div class="flex gap-3 justify-between items-end">
                    <div class="flex gap-2 items-center">
                      <input id="published" v-model="form.published" type="checkbox" class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
                      <label for="published" class="text-sm text-gray-700">Publicar</label>
                    </div>
                    <div class="flex-1">
                      <label class="block mb-1 text-sm text-gray-700">Publicado em</label>
                      <input v-model="form.published_at" type="datetime-local" class="px-3 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block mb-1 text-sm text-gray-700">Capa do post</label>
                  <div 
                    class="flex flex-col items-center justify-center px-4 py-8 w-full text-center bg-white rounded-xl border border-dashed border-gray-300 hover:border-blue-400 transition cursor-pointer"
                    @click="openFile"
                    @dragover.prevent
                    @drop="handleDrop"
                  >
                    <svg class="mb-2 w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                    <p class="text-sm text-gray-600"><span class="text-blue-600 underline">Clique para enviar</span> ou arraste e solte</p>
                    <p class="mt-1 text-xs text-gray-400">PNG, JPG, WEBP — até 5MB</p>
                    <input ref="fileEl" @change="onPickImage" type="file" accept="image/*" class="hidden" />
                  </div>
                  <div v-if="imagePreview" class="overflow-hidden mt-3 rounded-xl border border-gray-200 ring-1 ring-gray-200">
                    <img :src="imagePreview" alt="Prévia da imagem" class="object-cover w-full h-56">
                    <div class="flex gap-2 p-2 bg-gray-50 border-t border-gray-200">
                      <button type="button" @click="openFile" class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700">Trocar imagem</button>
                      <button type="button" @click="removeImage" class="px-3 py-1 text-sm text-white bg-red-600 rounded-lg shadow hover:bg-red-700">Remover</button>
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block mb-2 text-sm text-gray-700">Conteúdo (Markdown)</label>
                  <!-- Toolbar -->
                <div class="flex flex-wrap gap-1.5 mb-2">
                  <button type="button" @click="mdH1" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50">H1</button>
                    <button type="button" @click="mdH2" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">H2</button>
                  <button type="button" @click="mdBold" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50"><strong>B</strong></button>
                  <button type="button" @click="mdItalic" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-50"><em>I</em></button>
                    <button type="button" @click="mdQuote" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">“”</button>
                    <button type="button" @click="mdCode" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">Code</button>
                    <button type="button" @click="mdLink" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">Link</button>
                    <button type="button" @click="mdUl" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">• Lista</button>
                    <button type="button" @click="mdOl" class="px-2 py-1 text-sm bg-white rounded border border-gray-200 hover:bg-gray-50">1. Lista</button>
                  </div>
                <textarea ref="contentEl" v-model="form.content" rows="12" class="px-4 py-3 w-full font-mono text-sm bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="# Título\n\nEscreva seu conteúdo em Markdown..." />
                  <p class="mt-1 text-xs text-gray-400">Dicas: use markdown para formatação. Ex.: **negrito**, *itálico*, listas, títulos, links.</p>
                </div>
                <div class="flex justify-between items-center">
                <button type="submit" :disabled="saving" class="inline-flex items-center px-4 py-2 text-white bg-green-600 rounded-xl shadow hover:bg-green-700 hover:shadow-lg transition disabled:opacity-60">
                    <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    {{ form.id ? (saving ? 'Atualizando...' : 'Atualizar') : (saving ? 'Publicando...' : 'Publicar') }}
                  </button>
                <button type="button" @click="resetForm" class="px-3 py-2 text-gray-700 bg-gray-100 rounded-xl ring-1 ring-gray-200 hover:bg-gray-200">Limpar</button>
                </div>
              </form>

              <div v-if="form.content" class="mt-6">
                <h3 class="mb-2 text-sm font-medium text-gray-700">Preview</h3>
                <div class="overflow-hidden bg-gray-50 rounded-xl border border-gray-200">
                  <div class="p-4 max-w-none prose">
                    <div v-html="previewHtml"></div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <!-- LIST TAB -->
        <div v-else-if="adminTab==='list'" class="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div class="relative z-10 p-6 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
            <div class="flex flex-col gap-3 mb-4 sm:flex-row sm:items-end sm:justify-between">
              <div class="grid grid-cols-1 gap-3 w-full sm:grid-cols-3 sm:items-end">
                <div>
                  <label class="block mb-1 text-sm text-gray-700">Buscar</label>
                  <input v-model="filters.q" @keyup.enter="loadPosts" type="text" placeholder="termo" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label class="block mb-1 text-sm text-gray-700">Categoria</label>
                  <select v-model="filters.category_id" @change="loadPosts" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Todas</option>
                    <option v-for="c in categories" :key="c.id" :value="String(c.id)">{{ c.name }}</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-1 text-sm text-gray-700">Por página</label>
                  <input v-model.number="filters.per_page" @keyup.enter="loadPosts" type="number" min="1" max="50" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div class="flex gap-2">
                <button @click="loadPosts" class="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 hover:shadow-lg transition">
                  <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582M20 20v-5h-.581M5 9c2.5 0 4-4 7-4s4.5 4 7 4M5 15c2.5 0 4 4 7 4s4.5-4 7-4"/></svg>
                  Atualizar
                </button>
              </div>
            </div>
            <p v-if="apiError" class="mb-3 text-sm text-red-600">{{ apiError }}</p>
            <ul class="space-y-4">
              <li v-for="p in posts" :key="p.id" class="overflow-hidden p-4 bg-white rounded-xl border border-gray-200 transition group hover:border-blue-200 hover:shadow-md">
                <div class="flex items-start w-full">
                  <img v-if="p.image_path || p.image_url || p.image || p.cover" :src="normalizeImage(p.image_path || p.image_url || p.image || p.cover)" alt="thumb" class="object-cover mr-4 w-28 h-24 rounded-lg ring-1 ring-gray-200">
                  <div class="flex-1">
                    <div class="flex gap-2 items-center mb-2">
                      <span class="px-2 py-0.5 text-xs text-white rounded-full" :class="badgeFor(p)">{{ categoryLabel(p) }}</span>
                      <span v-if="p.published" class="px-2 py-0.5 text-xs text-green-700 bg-green-100 rounded-full">Publicado</span>
                      <span v-else class="px-2 py-0.5 text-xs text-amber-700 bg-amber-100 rounded-full">Rascunho</span>
                    </div>
                    <p class="font-medium text-gray-900 group-hover:text-blue-700">{{ p.title }}</p>
                    <p class="text-sm text-gray-600">/blog/{{ p.slug }}</p>
                    <p class="mt-1 text-xs text-gray-400">{{ formatDate(p.published_at || p.created_at || p.createdAt) }}</p>
                  </div>
                  <div class="flex items-center ml-4 space-x-2">
                    <button @click="editPost(p)" class="inline-flex items-center px-3 py-1 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 hover:shadow-lg transition">
                      <svg class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5h2m-1 14v-4m0-10l7 7-7 7-7-7 7-7z"/></svg>
                      Editar
                    </button>
                    <button @click="removePost(p.id)" class="inline-flex items-center px-3 py-1 text-white bg-red-600 rounded-lg shadow hover:bg-red-700 hover:shadow-lg transition">
                      <svg class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m-9 0h10"/></svg>
                      Excluir
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div v-if="loadingPosts" class="mt-4 text-sm text-gray-500">Carregando...</div>
          </div>
        </div>

        <!-- CATEGORIES TAB -->
        <div v-else-if="adminTab==='categories'" class="grid grid-cols-1 gap-8 lg:grid-cols-1">
          <div class="p-6 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold text-gray-900">Categorias</h2>
            </div>
            <form @submit.prevent="createCategory" class="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <input v-model="csrfToken" type="hidden" />
              <input v-model="categoryForm.name" type="text" placeholder="Nome" class="px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
              <input v-model="categoryForm.slug" type="text" placeholder="slug-exemplo" class="px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
              <div class="sm:col-span-3">
                <input v-model="categoryForm.description" type="text" placeholder="Descrição" class="px-4 py-2 w-full bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div class="flex justify-end sm:col-span-3">
                <button :disabled="savingCategory" type="submit" class="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-60">
                  <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                  {{ savingCategory ? 'Criando...' : 'Criar categoria' }}
                </button>
              </div>
            </form>
            <p v-if="categoryError" class="mt-3 text-sm text-red-600">{{ categoryError }}</p>
            <ul class="mt-4 divide-y divide-gray-100">
              <li v-for="c in categories" :key="c.id" class="flex justify-between items-center py-3">
                <div>
                  <p class="font-medium text-gray-900">{{ c.name }}</p>
                  <p class="text-xs text-gray-500">/{{ c.slug }} — {{ c.description }}</p>
                </div>
                <button @click="removeCategory(c.id)" class="px-3 py-1 text-sm text-white bg-red-600 rounded-lg shadow hover:bg-red-700 hover:shadow-lg transition">Excluir</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'

const API_BASE = 'http://127.0.0.1:8000/api'
const BLOG_AUTH_KEY = 'rentatec_blog_auth'
const BLOG_USER_KEY = 'rentatec_blog_user'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const isAuthenticated = ref(false)
const user = ref(null)

const adminTab = ref('posts')

function tabClass(t) {
  return adminTab.value === t
    ? 'bg-blue-600 text-white'
    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
}

function nowLocalIsoMinute() {
  const d = new Date()
  const pad = n => String(n).padStart(2, '0')
  const yyyy = d.getFullYear()
  const mm = pad(d.getMonth() + 1)
  const dd = pad(d.getDate())
  const hh = pad(d.getHours())
  const mi = pad(d.getMinutes())
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`
}

const form = ref({ id: null, slug: '', title: '', excerpt: '', content: '', category_id: '', published: true, published_at: nowLocalIsoMinute(), image_path: '' })
const imagePreview = ref('')
const fileEl = ref(null)

const posts = ref([])
const loadingPosts = ref(false)
const apiError = ref('')
const saving = ref(false)
const loginAttempts = ref(0)
const lastLoginAttempt = ref(0)
const sessionTimeout = ref(null)
const tokenRefreshInterval = ref(null)
const slugValidation = ref({ checking: false, available: null, message: '' })
const csrfToken = ref('')

const filters = ref({ q: '', category_id: '', per_page: 10 })

// Categories state
const categories = ref([])
const categoryForm = ref({ name: '', slug: '', description: '' })
const savingCategory = ref(false)
const categoryError = ref('')

onMounted(() => {
  const token = localStorage.getItem(BLOG_AUTH_KEY)
  const userData = localStorage.getItem(BLOG_USER_KEY)
  if (token && userData) {
    try {
      user.value = JSON.parse(userData)
      isAuthenticated.value = true
      startSessionManagement()
      generateCSRFToken()
      Promise.all([loadPosts(), loadCategories()])
    } catch (e) {
      logout()
    }
  }
})

onUnmounted(() => {
  clearSessionManagement()
})

function authHeaders() {
  const token = localStorage.getItem(BLOG_AUTH_KEY)
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
    'X-CSRF-Token': csrfToken.value || ''
  }
}

async function loadPosts() {
  apiError.value = ''
  loadingPosts.value = true
  try {
    const params = new URLSearchParams()
    if (filters.value.q) params.append('q', filters.value.q)
    if (filters.value.category_id) params.append('category_id', String(filters.value.category_id))
    if (filters.value.per_page) params.append('per_page', String(filters.value.per_page))
    const res = await fetch(`${API_BASE}/posts?${params.toString()}`, {
      method: 'GET',
      headers: authHeaders()
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || 'Falha ao carregar posts')
    }
    const data = await res.json()
    posts.value = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
  } catch (e) {
    apiError.value = e.message || 'Erro ao carregar posts'
  } finally {
    loadingPosts.value = false
  }
}

async function loadCategories() {
  categoryError.value = ''
  try {
    const res = await fetch(`${API_BASE}/categories`, { headers: authHeaders() })
    if (!res.ok) throw new Error('Falha ao carregar categorias')
    const data = await res.json()
    categories.value = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : [])
  } catch (e) {
    categoryError.value = e.message || 'Erro ao carregar categorias'
  }
}

async function createCategory() {
  savingCategory.value = true
  categoryError.value = ''
  
  // Security: Sanitize inputs
  const sanitizedName = sanitizeInput(categoryForm.value.name)
  const sanitizedSlug = sanitizeSlug(categoryForm.value.slug)
  const sanitizedDescription = sanitizeInput(categoryForm.value.description)
  
  if (!sanitizedName || !sanitizedSlug) {
    categoryError.value = 'Nome e slug são obrigatórios'
    savingCategory.value = false
    return
  }
  
  try {
    const res = await fetch(`${API_BASE}/categories`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify({
        name: sanitizedName,
        slug: sanitizedSlug,
        description: sanitizedDescription
      })
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || 'Falha ao criar categoria')
    }
    categoryForm.value = { name: '', slug: '', description: '' }
    await loadCategories()
  } catch (e) {
    categoryError.value = e.message || 'Erro ao criar categoria'
  } finally {
    savingCategory.value = false
  }
}

async function removeCategory(id) {
  if (!confirm('Excluir esta categoria?')) return
  try {
    const res = await fetch(`${API_BASE}/categories/${id}`, { method: 'DELETE', headers: authHeaders() })
    if (!res.ok) throw new Error('Falha ao excluir categoria')
    await loadCategories()
  } catch (e) {
    categoryError.value = e.message || 'Erro ao excluir categoria'
  }
}

async function login() {
  error.value = ''
  loading.value = true
  
  // Security: Rate limiting
  const now = Date.now()
  if (now - lastLoginAttempt.value < 2000) { // 2 seconds between attempts
    error.value = 'Muitas tentativas. Aguarde 2 segundos.'
    loading.value = false
    return
  }
  
  loginAttempts.value++
  lastLoginAttempt.value = now
  
  if (loginAttempts.value > 5) {
    error.value = 'Muitas tentativas de login. Tente novamente em 5 minutos.'
    loading.value = false
    return
  }
  
  try {
    // Security: Sanitize inputs
    const sanitizedEmail = sanitizeInput(email.value)
    const sanitizedPassword = sanitizeInput(password.value)
    
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ email: sanitizedEmail, password: sanitizedPassword })
    })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.message || 'Falha ao autenticar')
    }
    const data = await res.json()
    if (data?.token) localStorage.setItem(BLOG_AUTH_KEY, data.token)
    if (data?.user) localStorage.setItem(BLOG_USER_KEY, JSON.stringify(data.user))
    user.value = data.user || null
    isAuthenticated.value = true
    loginAttempts.value = 0 // Reset on success
    startSessionManagement()
    generateCSRFToken()
    await Promise.all([loadPosts(), loadCategories()])
  } catch (e) {
    error.value = e.message || 'Erro inesperado'
  } finally {
    loading.value = false
  }
}

function logout() {
  localStorage.removeItem(BLOG_AUTH_KEY)
  localStorage.removeItem(BLOG_USER_KEY)
  isAuthenticated.value = false
  user.value = null
  posts.value = []
  categories.value = []
  clearSessionManagement()
}

function resetForm() {
  form.value = { id: null, slug: '', title: '', excerpt: '', content: '', category_id: '', published: true, published_at: nowLocalIsoMinute(), image_path: '' }
  imagePreview.value = ''
}

function onPickImage(e) {
  const file = e.target.files && e.target.files[0]
  if (!file) return
  
  // Security: Validate file type and size
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  const maxSize = 5 * 1024 * 1024 // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    alert('Tipo de arquivo não permitido. Use apenas JPG, PNG, WEBP ou GIF.')
    return
  }
  
  if (file.size > maxSize) {
    alert('Arquivo muito grande. Máximo 5MB.')
    return
  }
  
  const reader = new FileReader()
  reader.onload = () => {
    const result = String(reader.result || '')
    // Keep full data URL in preview; send exactly what API expects in image_path
    imagePreview.value = result
    form.value.image_path = result.startsWith('data:') ? result : `data:image/jpeg;base64,${result}`
  }
  reader.readAsDataURL(file)
}

function openFile() {
  if (fileEl.value) fileEl.value.click()
}

function handleDrop(ev) {
  ev.preventDefault()
  const files = ev.dataTransfer && ev.dataTransfer.files
  if (!files || !files.length) return
  const file = files[0]
  
  // Security: Validate file type and size
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
  const maxSize = 5 * 1024 * 1024 // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    alert('Tipo de arquivo não permitido. Use apenas JPG, PNG, WEBP ou GIF.')
    return
  }
  
  if (file.size > maxSize) {
    alert('Arquivo muito grande. Máximo 5MB.')
    return
  }
  
  const reader = new FileReader()
  reader.onload = () => {
    const result = String(reader.result || '')
    imagePreview.value = result
    form.value.image_path = result.startsWith('data:') ? result : `data:image/jpeg;base64,${result}`
  }
  reader.readAsDataURL(file)
}

function removeImage() {
  imagePreview.value = ''
  form.value.image_path = ''
}

async function createOrUpdatePost() {
  if (!form.value.slug || !form.value.title) {
    alert('Slug e Título são obrigatórios')
    return
  }
  
  // Security: Validate and sanitize inputs
  const sanitizedSlug = sanitizeSlug(form.value.slug)
  const sanitizedTitle = sanitizeInput(form.value.title)
  const sanitizedExcerpt = sanitizeInput(form.value.excerpt)
  const sanitizedContent = sanitizeInput(form.value.content)
  
  if (!sanitizedSlug || !sanitizedTitle) {
    alert('Slug e Título são obrigatórios')
    return
  }
  
  // Check if slug is available
  if (slugValidation.value.available === false) {
    alert('Slug não está disponível. Escolha outro.')
    return
  }
  
  saving.value = true
  try {
    const payload = {
      user_id: user.value?.id || null,
      category_id: form.value.category_id ? Number(form.value.category_id) : null,
      title: sanitizedTitle,
      slug: sanitizedSlug,
      excerpt: sanitizedExcerpt,
      content: sanitizedContent,
      published: !!form.value.published,
      published_at: form.value.published_at || null
    }
    if (form.value.image_path) payload.image_path = form.value.image_path
    if (form.value.id) {
      const res = await fetch(`${API_BASE}/posts/${form.value.id}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Falha ao atualizar post')
    } else {
      const res = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Falha ao criar post')
    }
    await loadPosts()
    resetForm()
  } catch (e) {
    alert(e.message || 'Erro ao salvar post')
  } finally {
    saving.value = false
  }
}

async function editPost(p) {
  try {
    adminTab.value = 'posts'
    const res = await fetch(`${API_BASE}/posts/${p.id}`, {
      method: 'GET',
      headers: authHeaders()
    })
    if (!res.ok) throw new Error('Falha ao carregar post')
    const data = await res.json()
    const item = data?.data || data
    form.value = {
      id: item.id,
      slug: item.slug || '',
      title: item.title || '',
      excerpt: item.excerpt || '',
      content: item.content || '',
      category_id: (item.category_id || item.category?.id) ? String(item.category_id || item.category?.id) : '',
      published: !!item.published,
      published_at: (item.published_at ? item.published_at.toString().slice(0,16) : ''),
      image_path: ''
    }
    imagePreview.value = normalizeImage(item.image_path || item.image_url || item.image || item.cover || '')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    alert(e.message || 'Erro ao carregar post')
  }
}

async function removePost(id) {
  if (!confirm('Deseja excluir esta postagem?')) return
  try {
    const res = await fetch(`${API_BASE}/posts/${id}`, {
      method: 'DELETE',
      headers: authHeaders()
    })
    if (!res.ok) throw new Error('Falha ao excluir post')
    await loadPosts()
  } catch (e) {
    alert(e.message || 'Erro ao excluir post')
  }
}

function mdToHtml(text) {
  if (!text) return ''
  let html = text
  html = html.replace(/^# (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h4>$1</h4>')
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
  html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')
  html = html.replace(/\n\n/g, '</p><p>')
  html = `<p>${html}</p>`
  return html
}

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString('pt-BR')
}

function categoryLabel(p) {
  if (p.category?.name) return p.category.name
  if (p.category_name) return p.category_name
  if (p.category_id) return `Categoria #${p.category_id}`
  return 'Geral'
}

function badgeFor(p) {
  const name = (categoryLabel(p) || '').toLowerCase()
  if (name.includes('tecn')) return 'bg-blue-600'
  if (name.includes('auto')) return 'bg-purple-600'
  if (name.includes('case')) return 'bg-green-600'
  return 'bg-gray-600'
}

const previewHtml = computed(() => mdToHtml(form.value.content || ''))

// --- Markdown editor helpers
const contentEl = ref(null)

function wrapSelection(prefix, suffix = prefix) {
  const el = contentEl.value
  if (!el) return
  const start = el.selectionStart || 0
  const end = el.selectionEnd || 0
  const text = form.value.content || ''
  const before = text.slice(0, start)
  const selected = text.slice(start, end)
  const after = text.slice(end)
  form.value.content = `${before}${prefix}${selected || 'texto'}${suffix}${after}`
  nextTickCaret(el, start + prefix.length, start + prefix.length + (selected || 'texto').length)
}

function linePrefix(prefix) {
  const el = contentEl.value
  if (!el) return
  const start = el.selectionStart || 0
  const end = el.selectionEnd || 0
  const text = form.value.content || ''
  const before = text.slice(0, start)
  const selected = text.slice(start, end)
  const after = text.slice(end)
  const chunk = (selected || 'item')
    .split('\n')
    .map(line => (line ? `${prefix}${line}` : prefix.trim()))
    .join('\n')
  form.value.content = `${before}${chunk}${after}`
  nextTickCaret(el, start + prefix.length, start + prefix.length + chunk.length)
}

function nextTickCaret(el, start, end) {
  requestAnimationFrame(() => {
    el.focus()
    el.setSelectionRange(start, end)
  })
}

function mdBold() { wrapSelection('**') }
function mdItalic() { wrapSelection('*') }
function mdCode() { wrapSelection('`') }
function mdQuote() { linePrefix('> ') }
function mdH1() { linePrefix('# ') }
function mdH2() { linePrefix('## ') }
function mdUl() { linePrefix('- ') }
function mdOl() { linePrefix('1. ') }
function mdLink() { wrapSelection('[', '](https://)') }

function normalizeImage(src) {
  if (!src) return ''
  let value = String(src)
  value = value.replace(/\s+/g, '')
  // If backend concatenated a path before data URL (e.g., /storage/data:image...)
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

// Security functions
function sanitizeInput(input) {
  if (!input) return ''
  return String(input)
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000) // Limit length
}

function sanitizeSlug(input) {
  if (!input) return ''
  return String(input)
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-') // Only allow alphanumeric and hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
    .slice(0, 100) // Limit length
}

// Session management functions
function startSessionManagement() {
  // Set session timeout (30 minutes)
  sessionTimeout.value = setTimeout(() => {
    alert('Sessão expirada. Faça login novamente.')
    logout()
  }, 30 * 60 * 1000)
  
  // Set token refresh interval (25 minutes)
  tokenRefreshInterval.value = setInterval(async () => {
    try {
      const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        headers: authHeaders()
      })
      if (res.ok) {
        const data = await res.json()
        if (data?.token) {
          localStorage.setItem(BLOG_AUTH_KEY, data.token)
        }
      } else {
        logout()
      }
    } catch (e) {
      logout()
    }
  }, 25 * 60 * 1000)
}

function clearSessionManagement() {
  if (sessionTimeout.value) {
    clearTimeout(sessionTimeout.value)
    sessionTimeout.value = null
  }
  if (tokenRefreshInterval.value) {
    clearInterval(tokenRefreshInterval.value)
    tokenRefreshInterval.value = null
  }
}

// CSRF Token generation
function generateCSRFToken() {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  csrfToken.value = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Slug validation
async function validateSlug(slug) {
  if (!slug || slug.length < 3) {
    slugValidation.value = { checking: false, available: null, message: 'Slug deve ter pelo menos 3 caracteres' }
    return
  }
  
  const sanitizedSlug = sanitizeSlug(slug)
  if (sanitizedSlug !== slug) {
    slugValidation.value = { checking: false, available: false, message: 'Slug contém caracteres inválidos' }
    return
  }
  
  slugValidation.value = { checking: true, available: null, message: 'Verificando disponibilidade...' }
  
  try {
    const res = await fetch(`${API_BASE}/posts/check-slug?slug=${encodeURIComponent(sanitizedSlug)}&exclude=${form.value.id || ''}`, {
      headers: authHeaders()
    })
    
    if (res.ok) {
      const data = await res.json()
      slugValidation.value = {
        checking: false,
        available: data.available,
        message: data.available ? 'Slug disponível' : 'Slug já existe'
      }
    } else {
      slugValidation.value = { checking: false, available: null, message: 'Erro ao verificar slug' }
    }
  } catch (e) {
    slugValidation.value = { checking: false, available: null, message: 'Erro de conexão' }
  }
}
</script>

<style>
/* Custom admin skin overrides (not scoped to ensure priority over utility classes) */
.admin-skin input[type="text"],
.admin-skin input[type="email"],
.admin-skin input[type="password"],
.admin-skin input[type="number"],
.admin-skin input[type="datetime-local"],
.admin-skin select,
.admin-skin textarea {
  background-color: #ffffff;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 12px;
  padding: 10px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  transition: box-shadow 150ms ease, border-color 150ms ease;
}

.admin-skin input:focus,
.admin-skin select:focus,
.admin-skin textarea:focus {
  outline: none;
  border-color: #2563eb; /* blue-600 */
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.admin-skin .card {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 10px 20px rgba(2, 6, 23, 0.06);
}

.admin-skin .btn-primary {
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  color: #fff;
  border-radius: 12px;
  padding: 10px 16px;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.2);
  transition: transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease;
}
.admin-skin .btn-primary:hover { transform: translateY(-1px); box-shadow: 0 10px 18px rgba(37, 99, 235, 0.25); }
.admin-skin .btn-danger { background: #dc2626; color: #fff; border-radius: 10px; padding: 8px 12px; }
.admin-skin .btn-danger:hover { background: #b91c1c; }

.admin-skin .badge {
  border-radius: 9999px;
  padding: 2px 8px;
  font-size: 12px;
}
</style>
