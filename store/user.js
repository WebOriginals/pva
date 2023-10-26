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
	const userData = ref({
		email: '',
		password: '',
		confirmPassword: '',
		twoFA: ''
	});
	// eslint-disable-next-line no-undef
	const getUserData = computed(() => userData.value);
	function setUserData(event) {
		return userData.value = event;
	};


	return {isLoggedIn, getIsLoggedIn, actionIsLoggedIn, getUserData, setUserData, userData};
});
