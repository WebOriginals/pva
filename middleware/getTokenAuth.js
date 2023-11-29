export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to.query.token)
});