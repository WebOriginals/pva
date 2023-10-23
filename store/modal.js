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

	const isOpenModalRestorePassword = ref(false);
	const getIsOpenModalRestorePassword = computed(() => isOpenModalRestorePassword.value);
	function actionIsOpenModalRestorePassword() {
		return (isOpenModalRestorePassword.value = !isOpenModalRestorePassword.value);
	}

	const isOpenModalRestorePasswordSuccessfully = ref(false);
	const getIsOpenModalRestorePasswordSuccessfully = computed(() => isOpenModalRestorePasswordSuccessfully.value);
	function actionIsOpenModalRestorePasswordSuccessfully() {
		return (isOpenModalRestorePasswordSuccessfully.value = !isOpenModalRestorePasswordSuccessfully.value);
	}

	return {
		getIsOpenModalRegistration,
		actionIsOpenModalRegistration,
		getIsOpenModalRegistrationSuccessfully,
		actionIsOpenModalRegistrationSuccessfully,
		getIsOpenModalChangePassword,
		actionIsOpenModalChangePassword,
		getIsOpenModalChangePasswordSuccessfully,
		actionIsOpenModalChangePasswordSuccessfully,
		getIsOpenModalRestorePassword,
		actionIsOpenModalRestorePassword,
		getIsOpenModalRestorePasswordSuccessfully,
		actionIsOpenModalRestorePasswordSuccessfully
	};
});
