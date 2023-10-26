export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [
            {
                title: "2fa changed successfully"
            }
        ],
        status: 201
    };
});
