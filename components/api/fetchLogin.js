const URL_LOGIN ='/api/v1/login';
export async function api(params) {
    const {data: login, status, error, refresh, pending} = await useFetch(URL_LOGIN, {
        method: 'POST',
        body: params,
        transform: (_login) => _login.data,
    })
    return {login, pending, status, refresh, error}
}