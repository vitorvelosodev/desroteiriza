import { client } from "@/sanity/lib/client";
import { postBySlugQuery, postQuery } from "@/sanity/lib/queries";
import { type Post } from "sanity.types";

const getBlogPost = async () => {
  try {
    const posts: Post[] = await client.fetch(postQuery);
    return posts;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getBlogPostBySlug = async (slug: string) => {
  try {
    const post: Post | null = await client.fetch(postBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getBlogPost, getBlogPostBySlug };
