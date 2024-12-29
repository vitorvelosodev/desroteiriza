import { urlFor } from "@/sanity/lib/image";
import { getBlogPostBySlug } from "@/service/cms/blog/getBlog";
import Image from "next/image";

export default async function BlogSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const cleanSlug = params.slug.replace("/blog/", "");

  const post = await getBlogPostBySlug(cleanSlug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
      {post.mainImage?.asset && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.mainImage?.alt ?? ""}
          width={500}
          height={300}
        />
      )}
      <p>
        {post.body
          ?.map((block) =>
            block._type === "block" && block.children
              ? block.children.map((child) => child.text).join("")
              : "",
          )
          .join("")}
      </p>
    </div>
  );
}
