export async function fetchPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" } // simulate slow/unreliable backend
  );

  if (!res.ok) {
    throw new Error("Failed to load journal");
  }

  return res.json();
}
