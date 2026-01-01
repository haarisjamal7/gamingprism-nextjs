import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const LIMIT = 10;

async function getPosts(page) {
  
  const skip = (page - 1) * LIMIT;

  const res = await fetch(
    `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

export default async function Posts({ searchParams }) {
  const { page = "1" } = await searchParams;
  const currentPage = Number(page);

  const data = await getPosts(currentPage);
  const posts = data.posts;
  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.tags.join(", ")}</TableCell>
              <TableCell>{post.views}</TableCell>
              <TableCell>
                <Link
                  href={`/dashboard/posts/${post.id}`}
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex gap-2 mt-6">
        <Link href={`?page=${currentPage - 1}`}>
          <Button disabled={currentPage === 1}>Previous</Button>
        </Link>

        <span className="flex items-center px-2">
          Page {currentPage} of {totalPages}
        </span>

        <Link href={`?page=${currentPage + 1}`}>
          <Button disabled={currentPage === totalPages}>Next</Button>
        </Link>
      </div>
    </div>
  );
}
