import * as T from "superstruct";

export const Page = T.object({
    page: T.number(),
    pageSize: T.number(),
});
