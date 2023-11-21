const URL_BUY ='/api/v1/buyActivation';
export async function buyActivation(params) {
    const {data: login, status, error, refresh, pending} = await useFetch(URL_BUY, {
        method: 'POST',
        body: params,
        transform: (_login) => _login.data,
    })
    return {login, pending, status, refresh, error}
}