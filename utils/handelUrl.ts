export interface ParsedUrlParts {
    id: string;
    slug: string;
}

/**
 * Parse a product slug-id string into separate slug and id
 * @param slugAndId - Format: "product-name-6439d61c0049ad0b52b90051"
 * @returns Object containing id and slug
 */
export function parseProductSlug(slugAndId: string): ParsedUrlParts {
    const parts = slugAndId.split("-");
    const id = parts.pop() || "";
    const slug = parts.join("-");
    return { id, slug };
}