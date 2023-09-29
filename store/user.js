import {defineStore} from "pinia";

export const useUserStore = defineStore('user', () => {
    const isLoggedIn = ref(false)

    const getIsLoggedIn = computed(() => isLoggedIn.value )

    function actionIsLoggedIn (){
        isLoggedIn.value = !isLoggedIn.value
    }

    return {isLoggedIn, getIsLoggedIn, actionIsLoggedIn}
})