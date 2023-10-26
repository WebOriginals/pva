import {f} from "ofetch/dist/shared/ofetch.441891d5";

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
