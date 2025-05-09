export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/blog/')) {
    return true
  }
}) 