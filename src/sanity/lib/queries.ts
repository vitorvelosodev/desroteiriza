import { defineQuery, groq } from "next-sanity";

export const postQuery = defineQuery(
  groq`*[_type == "post"] {
    _id,
    title,
    publishedAt,
    slug,
    body,
    mainImage {
      asset->{
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
  }`,
);

export const postBySlugQuery = defineQuery(
  groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    mainImage {
      asset->{
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    body
  }`,
);
