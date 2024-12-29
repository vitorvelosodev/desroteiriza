import { getBlogPost } from "@/service/cms/blog/getBlog";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getBlogPost();

  return (
    <div>
      <ul className="flex flex-col gap-4 p-4">
        {posts.map((post) => (
          <li
            key={post._id}
            className="flex w-fit flex-col gap-4 rounded-lg bg-blue-100 p-6 transition-all duration-300 hover:scale-[101%] hover:cursor-pointer hover:bg-blue-200"
          >
            <Link href={`/blog/${post.slug?.current}`}>
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p>
                {new Date(post.publishedAt!).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              {post.mainImage?.asset && (
                <Image
                  src={urlFor(post.mainImage).width(500).height(300).url()}
                  alt={post.mainImage?.alt ?? "Blog post image"}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              )}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    post.body
                      ?.map((block) =>
                        block._type === "block"
                          ? block.children?.map((child) => child.text).join("")
                          : "",
                      )
                      .join("<br />")
                      .slice(0, 50) + "...",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
