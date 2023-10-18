import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
	// eslint-disable-next-line no-undef
	const isLoggedIn = ref(false);
	// eslint-disable-next-line no-undef
	const getIsLoggedIn = computed(() => isLoggedIn.value);
	function actionIsLoggedIn() {
		return (isLoggedIn.value = !isLoggedIn.value);
	}



	// eslint-disable-next-line no-undef
	const isOpenModalRegistration = ref(false);
	// eslint-disable-next-line no-undef
	const getIsOpenModalRegistration = computed(() => isOpenModalRegistration.value);
	function actionIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = !isOpenModalRegistration.value);
	};
	function setIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = false);
	}


	return { isLoggedIn, isOpenModalRegistration, getIsLoggedIn, getIsOpenModalRegistration, actionIsLoggedIn, actionIsOpenModalRegistration, setIsOpenModalRegistration };
});
