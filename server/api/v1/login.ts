export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [
            {
                title: "you have logged in successfully",
                twoFA: false,
                google: true
            }
        ],
        status: 201
    };
});
