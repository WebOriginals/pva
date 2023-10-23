export async function index(params) {
    const url = '/api/v1/register';
    const {data: user, status, error, refresh, pending} = await useFetch(url, {
        method: 'POST',
        body: params,
        transform: (_user) => _user.data,
    })
    return {user, pending, status, refresh, error}
}