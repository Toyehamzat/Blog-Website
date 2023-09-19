import { GetSortedPostsData } from "@/lib/post";
import { notFound } from "next/navigation";
import { title } from "process";

export  function GenerateMetaData({ params }: { params: { PostsId: string } }) {
  const posts = GetSortedPostsData();
  const { PostsId } = params;

  const post= posts.find(post => post.id === PostsId)

if (!post) {
    return{
        title: 'Post not found'
    }
}

  return{
    title: post.title, 
  }
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
  return (
    <div>
      <p>p</p>
    </div>
  );
}
