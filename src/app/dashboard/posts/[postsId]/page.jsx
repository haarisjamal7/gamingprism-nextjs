import { notFound } from "next/navigation";

async function getPost(id) {
  if (Number.isNaN(id)) notFound();

  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();
  return res.json();
}

export default async function PostDetail({ params }) {
  const { postsId } = await params;
  const post = await getPost(Number(postsId));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">{post.title}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
        <span>{post.views} views</span>
        <span>{post.reactions.likes}</span>
        <span>{post.reactions.dislikes}</span>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-gray-700 leading-relaxed text-base">{post.body}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
