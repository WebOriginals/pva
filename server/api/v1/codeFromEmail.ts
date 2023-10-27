export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [
            {
                title: "code fron email changed successfully"
            }
        ],
        status: 201
    };
});
