<template>
  <div v-if="editor" class="overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm blog-content-editor">
    <div class="flex flex-wrap gap-1 p-2 bg-gray-50 border-b border-gray-200">
      <select
        class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200"
        :value="currentHeading"
        @change="setHeading($event.target.value)"
      >
        <option value="paragraph">Parágrafo</option>
        <option value="1">Título 1</option>
        <option value="2">Título 2</option>
        <option value="3">Título 3</option>
      </select>

      <button type="button" :class="btnClass('bold')" title="Negrito" @click="editor.chain().focus().toggleBold().run()"><strong>B</strong></button>
      <button type="button" :class="btnClass('italic')" title="Itálico" @click="editor.chain().focus().toggleItalic().run()"><em>I</em></button>
      <button type="button" :class="btnClass('underline')" title="Sublinhado" @click="editor.chain().focus().toggleUnderline().run()"><span class="underline">U</span></button>
      <button type="button" :class="btnClass('strike')" title="Riscado" @click="editor.chain().focus().toggleStrike().run()"><span class="line-through">S</span></button>

      <span class="mx-1 w-px h-7 bg-gray-200"></span>

      <button type="button" :class="btnClass('bulletList')" title="Lista com marcadores" @click="editor.chain().focus().toggleBulletList().run()">• Lista</button>
      <button type="button" :class="btnClass('orderedList')" title="Lista numerada" @click="editor.chain().focus().toggleOrderedList().run()">1. Lista</button>
      <button type="button" :class="btnClass('blockquote')" title="Citação" @click="editor.chain().focus().toggleBlockquote().run()">“”</button>
      <button type="button" :class="btnClass('codeBlock')" title="Bloco de código" @click="editor.chain().focus().toggleCodeBlock().run()">&lt;/&gt;</button>

      <span class="mx-1 w-px h-7 bg-gray-200"></span>

      <button type="button" :class="btnClass({ textAlign: 'left' })" title="Alinhar à esquerda" @click="editor.chain().focus().setTextAlign('left').run()">⬅</button>
      <button type="button" :class="btnClass({ textAlign: 'center' })" title="Centralizar" @click="editor.chain().focus().setTextAlign('center').run()">↔</button>
      <button type="button" :class="btnClass({ textAlign: 'right' })" title="Alinhar à direita" @click="editor.chain().focus().setTextAlign('right').run()">➡</button>

      <span class="mx-1 w-px h-7 bg-gray-200"></span>

      <button type="button" :class="btnClass('link')" title="Inserir link" @click="setLink">Link</button>
      <button type="button" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-100" title="Enviar imagem do computador" @click="pickImage">Imagem</button>
      <input ref="imageInputEl" type="file" accept="image/*" class="hidden" @change="onImageFileSelected" />
      <button type="button" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-100" title="Inserir tabela" @click="insertTable">Tabela</button>
      <button type="button" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-100" title="Linha horizontal" @click="editor.chain().focus().setHorizontalRule().run()">—</button>

      <span class="mx-1 w-px h-7 bg-gray-200"></span>

      <button type="button" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40" title="Desfazer" :disabled="!editor.can().undo()" @click="editor.chain().focus().undo().run()">Desfazer</button>
      <button type="button" class="px-2 py-1 text-sm bg-white rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40" title="Refazer" :disabled="!editor.can().redo()" @click="editor.chain().focus().redo().run()">Refazer</button>
    </div>

    <EditorContent :editor="editor" class="editor-content" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const imageInputEl = ref(null)
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
const MAX_IMAGE_SIZE = 5 * 1024 * 1024

function validateImageFile(file) {
  if (!file) return 'Arquivo inválido.'
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    return 'Use apenas JPG, PNG, WEBP ou GIF.'
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return 'Imagem muito grande. Máximo 5MB.'
  }
  return ''
}

function readImageAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('Falha ao ler imagem'))
    reader.readAsDataURL(file)
  })
}

function insertImageFromFile(file) {
  const error = validateImageFile(file)
  if (error) {
    alert(error)
    return
  }
  readImageAsDataUrl(file)
    .then((src) => {
      if (!editor.value || !src) return
      editor.value.chain().focus().setImage({ src }).run()
    })
    .catch(() => alert('Não foi possível inserir a imagem.'))
}

function insertImageFromClipboardItems(items) {
  if (!items) return false
  for (const item of items) {
    if (item.type?.startsWith('image/')) {
      const file = item.getAsFile()
      if (file) {
        insertImageFromFile(file)
        return true
      }
    }
  }
  return false
}

const editor = useEditor({
  content: props.modelValue || '',
  immediatelyRender: false,
  extensions: [
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
    }),
    Underline,
    Link.configure({
      openOnClick: false,
      HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
    }),
    Image.configure({ inline: false }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Placeholder.configure({ placeholder: 'Escreva o conteúdo do post...' }),
    Table.configure({ resizable: true }),
    TableRow,
    TableHeader,
    TableCell,
  ],
  editorProps: {
    attributes: {
      class: 'min-h-[280px] px-4 py-3 focus:outline-none',
    },
    handlePaste(view, event) {
      const items = event.clipboardData?.items
      if (insertImageFromClipboardItems(items)) {
        event.preventDefault()
        return true
      }
      return false
    },
    handleDrop(view, event) {
      const files = event.dataTransfer?.files
      if (!files?.length) return false
      const file = Array.from(files).find(f => f.type?.startsWith('image/'))
      if (!file) return false
      event.preventDefault()
      insertImageFromFile(file)
      return true
    },
  },
  onUpdate: ({ editor: instance }) => {
    emit('update:modelValue', instance.getHTML())
  },
})

watch(
  () => props.modelValue,
  (value) => {
    if (!editor.value) return
    const current = editor.value.getHTML()
    if ((value || '') !== current) {
      editor.value.commands.setContent(value || '', false)
    }
  }
)

onBeforeUnmount(() => {
  editor.value?.destroy()
})

const currentHeading = computed(() => {
  if (!editor.value) return 'paragraph'
  if (editor.value.isActive('heading', { level: 1 })) return '1'
  if (editor.value.isActive('heading', { level: 2 })) return '2'
  if (editor.value.isActive('heading', { level: 3 })) return '3'
  return 'paragraph'
})

function btnClass(nameOrAttrs) {
  const active = typeof nameOrAttrs === 'string'
    ? editor.value?.isActive(nameOrAttrs)
    : editor.value?.isActive(nameOrAttrs)
  return [
    'px-2 py-1 text-sm rounded-lg border transition',
    active
      ? 'bg-blue-600 text-white border-blue-600'
      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100',
  ]
}

function setHeading(value) {
  if (!editor.value) return
  const chain = editor.value.chain().focus()
  if (value === 'paragraph') chain.setParagraph().run()
  else chain.toggleHeading({ level: Number(value) }).run()
}

function setLink() {
  if (!editor.value) return
  const previous = editor.value.getAttributes('link').href
  const url = window.prompt('URL do link:', previous || 'https://')
  if (url === null) return
  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

function pickImage() {
  imageInputEl.value?.click()
}

function onImageFileSelected(event) {
  const file = event.target.files?.[0]
  if (file) insertImageFromFile(file)
  if (event.target) event.target.value = ''
}

function insertTable() {
  editor.value?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
}
</script>

<style>
.blog-content-editor .ProseMirror {
  min-height: 280px;
}

.blog-content-editor .ProseMirror:focus {
  outline: none;
}

.blog-content-editor .ProseMirror p.is-editor-empty:first-child::before {
  color: #9ca3af;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.blog-content-editor .ProseMirror h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0.75rem 0;
}

.blog-content-editor .ProseMirror h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.75rem 0;
}

.blog-content-editor .ProseMirror h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.75rem 0;
}

.blog-content-editor .ProseMirror ul,
.blog-content-editor .ProseMirror ol {
  margin: 0.5rem 0 0.75rem 1.25rem;
}

.blog-content-editor .ProseMirror blockquote {
  border-left: 4px solid #d1d5db;
  color: #4b5563;
  margin: 0.75rem 0;
  padding-left: 1rem;
}

.blog-content-editor .ProseMirror pre {
  background: #f3f4f6;
  border-radius: 0.5rem;
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
}

.blog-content-editor .ProseMirror a {
  color: #2563eb;
  text-decoration: underline;
}

.blog-content-editor .ProseMirror img {
  border-radius: 0.75rem;
  margin: 0.75rem 0;
  max-width: 100%;
}

.blog-content-editor .ProseMirror table {
  border-collapse: collapse;
  margin: 0.75rem 0;
  width: 100%;
}

.blog-content-editor .ProseMirror th,
.blog-content-editor .ProseMirror td {
  border: 1px solid #d1d5db;
  min-width: 80px;
  padding: 0.5rem;
}

.blog-content-editor .ProseMirror th {
  background: #f9fafb;
  font-weight: 600;
}
</style>
