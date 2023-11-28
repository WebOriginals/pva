class AuthAPI  {
    async request(url,authorization, params) {
        const { data, status, error, refresh, pending } = await useFetch(url, {
            headers: {
                "Authorization": authorization,
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: params,
            transform: (_data) => _data.data,
        });
        return { data, pending, status, refresh, error };
    }

    async login(params) {
        const URL_LOGIN = '/api/v1/login';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_LOGIN, TOKEN, params);
    }

    async restorePassword(params) {
        const URL_RESTORE = '/api/v1/restorePassword';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_RESTORE, TOKEN, params);
    }

    async registration(params) {
        const URL_REGISTRATION = '/api/v1/register';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_REGISTRATION, TOKEN, params);
    }

    async twoFactorAuthentication(params) {
        const URL_TOWFA = '/api/v1/twoFA';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_TOWFA, TOKEN, params);
    }

    async changePassword(params) {
        const URL_CHANGE_PASSWORD = '/api/v1/changePassword';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_CHANGE_PASSWORD, TOKEN, params);
    }

    async buyActivation(params) {
        const URL_BUY = '/api/v1/buyActivation';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_BUY, TOKEN, params);
    }

    async codeFromEmail(params) {
        const URL_CODE_FROM_EMAIL = '/api/v1/codeFromEmail';
        const TOKEN =  '$2y$10$D669KazMVvZR/74JTRPsF.lpeWPlkpOOvLKo33BY2ytrv8ENVOWky';
        return await this.request(URL_CODE_FROM_EMAIL, TOKEN, params);
    }
}

// Создание экземпляра класса ApiService
const apiAuth = new AuthAPI();

// Экспорт экземпляра для использования в компонентах Vue
export default apiAuth;