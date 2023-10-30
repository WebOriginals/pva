import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
	// eslint-disable-next-line no-undef
	const isOpenModalRegistration = ref(false);
	// eslint-disable-next-line no-undef
	const getIsOpenModalRegistration = computed(() => isOpenModalRegistration.value);
	function actionIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = !isOpenModalRegistration.value);
	}
	function closeIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = false);
	}

	const isOpenModalRegistrationSuccessfully = ref(false);
	const getIsOpenModalRegistrationSuccessfully = computed(() => isOpenModalRegistrationSuccessfully.value);
	function actionIsOpenModalRegistrationSuccessfully() {
		return (isOpenModalRegistrationSuccessfully.value = !isOpenModalRegistrationSuccessfully.value);
	}
	function closeIsOpenModalRegistrationSuccessfully() {
		return (isOpenModalRegistrationSuccessfully.value = false);
	}

	const isOpenModalChangePassword = ref(false);
	const getIsOpenModalChangePassword = computed(() => isOpenModalChangePassword.value);
	function actionIsOpenModalChangePassword() {
		return (isOpenModalChangePassword.value = !isOpenModalChangePassword.value);
	}
	function closeIsOpenModalChangePassword() {
		return (isOpenModalChangePassword.value = false);
	}

	const isOpenModalChangePasswordSuccessfully = ref(false);
	const getIsOpenModalChangePasswordSuccessfully = computed(() => isOpenModalChangePasswordSuccessfully.value);
	function actionIsOpenModalChangePasswordSuccessfully() {
		return (isOpenModalChangePasswordSuccessfully.value = !isOpenModalChangePasswordSuccessfully.value);
	}
	function closeIsOpenModalChangePasswordSuccessfully() {
		return (isOpenModalChangePasswordSuccessfully.value = false);
	}

	const isOpenModalRestorePassword = ref(false);
	const getIsOpenModalRestorePassword = computed(() => isOpenModalRestorePassword.value);
	function actionIsOpenModalRestorePassword() {
		return (isOpenModalRestorePassword.value = !isOpenModalRestorePassword.value);
	}
	function closeIsOpenModalRestorePassword() {
		return (isOpenModalRestorePassword.value = false);
	}

	const isOpenModalRestorePasswordSuccessfully = ref(false);
	const getIsOpenModalRestorePasswordSuccessfully = computed(() => isOpenModalRestorePasswordSuccessfully.value);
	function actionIsOpenModalRestorePasswordSuccessfully() {
		return (isOpenModalRestorePasswordSuccessfully.value = !isOpenModalRestorePasswordSuccessfully.value);
	}
	function closeIsOpenModalRestorePasswordSuccessfully() {
		return (isOpenModalRestorePasswordSuccessfully.value = false);
	}

	const isOpenModalLogin = ref(true);
	const getIsOpenModalLogin = computed(() => isOpenModalLogin.value);
	function actionIsOpenModalLogin() {
		return (isOpenModalLogin.value = !isOpenModalLogin.value);
	}
	function setIsOpenModalLogin() {
		return (isOpenModalLogin.value = true);
	}
	function closeIsOpenModalLogin() {
		return (isOpenModalLogin.value = false);
	}

	const isOpenModalTwoFA = ref(false);
	const getIsOpenModalTwoFA = computed(() => isOpenModalTwoFA.value);
	function actionIsOpenModalTwoFA() {
		return (isOpenModalTwoFA.value = !isOpenModalTwoFA.value);
	}
	function closeIsOpenModalTwoFA() {
		return (isOpenModalTwoFA.value = false);
	}

	const isOpenModalWelcomeBackInGoogle = ref(false);
	const getIsOpenModalWelcomeBackInGoogle = computed(() => isOpenModalWelcomeBackInGoogle.value);
	function actionIsOpenModalWelcomeBackInGoogle() {
		return (isOpenModalWelcomeBackInGoogle.value = !isOpenModalWelcomeBackInGoogle.value);
	}
	function closeIsOpenModalWelcomeBackInGoogle() {
		return (isOpenModalWelcomeBackInGoogle.value = false);
	}

	const isOpenModalCodeFromEmail = ref(false);
	const getIsOpenModalCodeFromEmail = computed(() => isOpenModalCodeFromEmail.value);
	function actionIsOpenModalCodeFromEmail() {
		return (isOpenModalCodeFromEmail.value = !isOpenModalCodeFromEmail.value);
	}
	function closeIsOpenModalCodeFromEmail() {
		return (isOpenModalCodeFromEmail.value = false);
	}

	const isOpenModalAuthorization = ref(false);
	const getIsOpenModalAuthorization = computed(() => isOpenModalAuthorization.value);
	function actionIsOpenModalAuthorization() {
		return (isOpenModalAuthorization.value = !isOpenModalAuthorization.value);
	}
	function closeIsOpenModalAuthorization() {
		return (isOpenModalAuthorization.value = false);
	}

	return {
		getIsOpenModalRegistration,
		actionIsOpenModalRegistration,
		closeIsOpenModalRegistration,
		getIsOpenModalRegistrationSuccessfully,
		actionIsOpenModalRegistrationSuccessfully,
		closeIsOpenModalRegistrationSuccessfully,
		getIsOpenModalChangePassword,
		actionIsOpenModalChangePassword,
		closeIsOpenModalChangePassword,
		getIsOpenModalChangePasswordSuccessfully,
		actionIsOpenModalChangePasswordSuccessfully,
		closeIsOpenModalChangePasswordSuccessfully,
		getIsOpenModalRestorePassword,
		actionIsOpenModalRestorePassword,
		closeIsOpenModalRestorePassword,
		getIsOpenModalRestorePasswordSuccessfully,
		actionIsOpenModalRestorePasswordSuccessfully,
		closeIsOpenModalRestorePasswordSuccessfully,
		getIsOpenModalLogin,
		actionIsOpenModalLogin,
		setIsOpenModalLogin,
		getIsOpenModalTwoFA,
		actionIsOpenModalTwoFA,
		closeIsOpenModalTwoFA,
		getIsOpenModalWelcomeBackInGoogle,
		actionIsOpenModalWelcomeBackInGoogle,
		closeIsOpenModalWelcomeBackInGoogle,
		getIsOpenModalCodeFromEmail,
		actionIsOpenModalCodeFromEmail,
		closeIsOpenModalCodeFromEmail,


		getIsOpenModalAuthorization,
		actionIsOpenModalAuthorization
	};
});
