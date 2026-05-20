import { client } from "@/sanity/lib/client";
import createImageUrlBuilder from "@sanity/image-url";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
