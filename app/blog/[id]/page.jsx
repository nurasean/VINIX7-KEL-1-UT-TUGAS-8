import { notFound } from "next/navigation";
import LikeButton from "./LikeButton";

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F0F2F8] px-5 py-20 text-[#08497A]">
      <article className="mx-auto max-w-[800px] rounded-[20px] bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm text-[#2F6586]">Post ID: {post.id}</p>

        <h1 className="text-[32px] font-semibold leading-[42px]">
          {post.title}
        </h1>

        <p className="mt-6 text-[18px] leading-[32px] text-[#2F6586]">
          {post.body}
        </p>

        <LikeButton />
      </article>
    </main>
  );
}