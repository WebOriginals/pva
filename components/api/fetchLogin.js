const URL_LOGIN ='/api/v1/login';
export async function api(params) {
    const {data: login, status, error, refresh, pending} = await useFetch(URL_LOGIN, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer",
            "Content-Type": "application/json"
        },
        body: params,
        transform: (_login) => _login.data,
    })
    return {login, pending, status, refresh, error}
}
// после регистрация , отправляется письмо с бэка на посту .после перехода по ссылки из писпа, обрабатываем на фронте
// и еще раз отправляем на бек данные с ключем

//На почту придет ссылка: pvaboom.com/verify-email?token=$2y$10$tvPI7n5SU5dcVt00RDc1juzuWmoRolKVxKEWkKf8/OY87MSwzc/
//вырезать токет и отправить его на этот запрос GET pvaboom.com/api/v1/verify-email?token=$2y$10$tvPI7n5SU5dcVt00RDc1juzuWmoRolKVxKEWkKf8/OY87MSwzc/ae
// после ответа с бека сохраняем на локал хост и редиректим черовека залочинившегося

//Authorization: Bearer 2|U0S9xYTs7EeFPdnV387ckZXCCl3MPsu9GJ6mzXIme637599d пример авторизованного поля что передается