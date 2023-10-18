import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
	// eslint-disable-next-line no-undef
	const isOpenModalRegistration = ref(false);
	// eslint-disable-next-line no-undef
	const getIsOpenModalRegistration = computed(() => isOpenModalRegistration.value);
	function actionIsOpenModalRegistration() {
		return (isOpenModalRegistration.value = !isOpenModalRegistration.value);
	}
	return { getIsOpenModalRegistration, actionIsOpenModalRegistration };
});
