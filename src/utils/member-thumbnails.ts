import type { ImageMetadata } from "astro";

const thumbnails = import.meta.glob<ImageMetadata>(
    "../content/members/*/thumbnail.{jpg,jpeg,png}",
    { eager: true, import: "default" },
);

export function getMemberThumbnail(memberId: string): ImageMetadata {
    const base = `../content/members/${memberId}/thumbnail`;
    const thumbnail = thumbnails[`${base}.jpg`]
        ?? thumbnails[`${base}.jpeg`]
        ?? thumbnails[`${base}.png`];
    if (!thumbnail) {
        throw new Error(`Missing thumbnail for member: ${memberId}`);
    }
    return thumbnail;
}
