import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
	// eslint-disable-next-line no-undef
	const isOpenModal = ref(false);
	// eslint-disable-next-line no-undef
	const getIsOpenModal = computed(() => isOpenModal.value);
	function actionIsOpenModal() {
		return (isOpenModal.value = !isOpenModal.value);
	}
	function closeIsOpenModal() {
		return (isOpenModal.value = false);
	}


	return {
		getIsOpenModal,
		actionIsOpenModal,
		closeIsOpenModal,


	};
});
