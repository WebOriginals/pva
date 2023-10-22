import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
	// eslint-disable-next-line no-undef
	const isOpenModalRegistration = ref(false);
	// eslint-disable-next-line no-undef
	const getIsOpenModalRegistration = computed(() => isOpenModalRegistration.value);
	function actionIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = !isOpenModalRegistration.value);
	}

	const isOpenModalRegistrationSuccessfully = ref(false);
	const getIsOpenModalRegistrationSuccessfully = computed(() => isOpenModalRegistrationSuccessfully.value);
	function actionIsOpenModalRegistrationSuccessfully() {
		return (isOpenModalRegistrationSuccessfully.value = !isOpenModalRegistrationSuccessfully.value);
	}

	const isOpenModalChangePassword = ref(false);
	const getIsOpenModalChangePassword = computed(() => isOpenModalChangePassword.value);
	function actionIsOpenModalChangePassword() {
		return (isOpenModalChangePassword.value = !isOpenModalChangePassword.value);
	}

	const isOpenModalChangePasswordSuccessfully = ref(false);
	const getIsOpenModalChangePasswordSuccessfully = computed(() => isOpenModalChangePasswordSuccessfully.value);
	function actionIsOpenModalChangePasswordSuccessfully() {
		return (isOpenModalChangePasswordSuccessfully.value = !isOpenModalChangePasswordSuccessfully.value);
	}

	return {
		getIsOpenModalRegistration,
		actionIsOpenModalRegistration,
		getIsOpenModalRegistrationSuccessfully,
		actionIsOpenModalRegistrationSuccessfully,
		getIsOpenModalChangePassword,
		actionIsOpenModalChangePassword,
		getIsOpenModalChangePasswordSuccessfully,
		actionIsOpenModalChangePasswordSuccessfully
	};
});
