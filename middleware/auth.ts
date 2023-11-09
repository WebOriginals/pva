import { useUserStore } from '~/store/user.js';
const localePath = useLocalePath();
const store = useUserStore();
export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path !== localePath('/services')) navigateTo(localePath('/services'));
});
