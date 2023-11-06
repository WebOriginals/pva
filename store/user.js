import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	// eslint-disable-next-line no-undef
	const isLoggedIn = ref(false);
	// eslint-disable-next-line no-undef
	const getIsLoggedIn = computed(() => isLoggedIn.value);
	function actionIsLoggedIn() {
		return (isLoggedIn.value = !isLoggedIn.value);
	}



	return {isLoggedIn, getIsLoggedIn, actionIsLoggedIn};
});
