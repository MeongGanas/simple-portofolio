export const PROJECTS_QUERY = `*[_type == "projects" && defined(finish_date)] | order(finish_date desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    thumbnail,
}`;
