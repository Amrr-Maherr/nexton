export interface ParsedUrlParts {
    id: string;
    slug: string;
}

export function handelUrl(slugAndId: string): ParsedUrlParts {
    const parts = slugAndId.split("-");
    const id = parts.pop() || "";
    const slug = parts.join("-");
    return { id, slug };
}