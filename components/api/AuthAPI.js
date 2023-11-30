class AuthAPI  {
    async request(url, params, authorization = '',) {
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
        return await this.request(URL_LOGIN, params);
    }

    async registration(params) {
        const URL_REGISTRATION = '/api/v1/register';
        return await this.request(URL_REGISTRATION, params);
    }

    async restorePassword(params)  {
        const URL_RESTORE = '/api/v1/restorePassword';
        return await this.request(URL_RESTORE, params);
    }

    async twoFactorAuthentication(params, token) {
        const URL_TOWFA = '/api/v1/twoFA';
        return await this.request(URL_TOWFA, token, params);
    }

    async changePassword(params, token) {
        const URL_CHANGE_PASSWORD = '/api/v1/changePassword';
        return await this.request(URL_CHANGE_PASSWORD, params, token );
    }


    async codeFromEmail(params, token) {
        const URL_CODE_FROM_EMAIL = '/api/v1/codeFromEmail';
        return await this.request(URL_CODE_FROM_EMAIL, params, token,);
    }

    async sendToken(params) {
        const URL_CODE_FROM_EMAIL = '/api/v1/sendToken';
        return await this.request(URL_CODE_FROM_EMAIL, params);
    }
}

// Создание экземпляра класса ApiService
const apiAuth = new AuthAPI();

// Экспорт экземпляра для использования в компонентах Vue
export default apiAuth;

// после регистрация , отправляется письмо с бэка на посту .после перехода по ссылки из писпа, обрабатываем на фронте
// и еще раз отправляем на бек данные с ключем

//На почту придет ссылка: pvaboom.com/verify-email?token=$2y$10$tvPI7n5SU5dcVt00RDc1juzuWmoRolKVxKEWkKf8/OY87MSwzc/
//вырезать токет и отправить его на этот запрос GET pvaboom.com/api/v1/verify-email?token=$2y$10$tvPI7n5SU5dcVt00RDc1juzuWmoRolKVxKEWkKf8/OY87MSwzc/ae
// после ответа с бека сохраняем на локал хост и редиректим черовека залочинившегося

//Authorization: Bearer 2|U0S9xYTs7EeFPdnV387ckZXCCl3MPsu9GJ6mzXIme637599d пример авторизованного поля что передается

