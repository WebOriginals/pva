export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [{message: "Sign up successful"}],
        status: 201
    };
});
