import LikeButton from "./LikeButton";

async function getPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function ExperimentPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-[#F0F2F8] px-5 py-20">
      <h1 className="mb-10 text-center text-[32px] font-semibold text-[#08497A]">
        Experiment API
      </h1>

      <div className="mx-auto grid max-w-[1000px] gap-6">
        {posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            className="rounded-xl border border-[#2C86C7] bg-white p-6"
          >
            <h2 className="text-[20px] font-semibold text-[#08497A]">
              {post.title}
            </h2>

            <p className="mt-3 text-[#2F6586]">{post.body}</p>

            <LikeButton />
          </div>
        ))}
      </div>
    </main>
  );
}