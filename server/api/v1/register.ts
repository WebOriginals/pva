export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    setResponseStatus(event, 201)
    return {
        successful: true,
        data: [
            {
                title: "title",
                longImg: "url",
                longImgAlt: "text",
                bigImgAlt: "text",
                bigImg: "url",
                desc1: "text",
                desc2: "text",
            }
        ],
        status: 201
    };
});