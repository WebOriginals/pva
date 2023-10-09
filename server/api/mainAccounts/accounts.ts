import data from "./accounts.json";

// export default defineEventHandler(async () => {
//     return new Promise<any>((resolve) => {
//         resolve(data);
//     });
// });
// export default defineEventHandler(async () => {
//     return new Promise<any>((resolve) => {
//         setTimeout(() => {
//             resolve(data);
//         },10000)
//     });
// });
export default defineEventHandler( () => {
    return {data}
})