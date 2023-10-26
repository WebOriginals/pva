export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [
            {
                title: "a letter was sent at the post"
            }
        ],
        status: 201
    };
});
