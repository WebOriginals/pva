
export default defineEventHandler(async (event) => {
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: { token: "56yh7%*909*$&6ttuHYn43j8345jk*$!95m5&&#-=055$" },
        status: 201
    };
});