class BuyServiceAPI  {
    async request(url, params, authorization) {
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
    async  buyActivation(params, token) {
        const URL_BUY ='/api/v1/buyActivation';
        return await this.request(URL_BUY, params, token );
    }
}
const apiBuyService = new BuyServiceAPI();

// Экспорт экземпляра для использования в компонентах Vue
export default apiBuyService;