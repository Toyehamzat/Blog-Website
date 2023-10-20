import GetFormattedDate from "@/lib/getFormattedDtate";
import { GetSortedPostsData, GetPostData } from "@/lib/post";
import Link from "next/link";
import { notFound } from "next/navigation";
import { title } from "process";

export function GenerateMetaData({ params }: { params: { PostsId: string } }) {
  const posts = GetSortedPostsData();
  const { PostsId } = params;

  const post = posts.find((post) => post.id === PostsId);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({
  params,
}: {
  params: { PostsId: string };
}) {
  const posts = GetSortedPostsData();
  const { PostsId } = params;

  if (!posts.find((post) => post.id === PostsId)) {
    return notFound();
  }
  const { title, date, contentHtml } = await GetPostData(PostsId);
  const pubDate = GetFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-6 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">back to Home</Link>
        </p>
      </article>
    </main>
  );
}
