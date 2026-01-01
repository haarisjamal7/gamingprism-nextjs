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

// ✅ fetch products
async function getProducts(page) {
  const skip = (page - 1) * LIMIT;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function Products({ searchParams }) {
  // ✅ Next.js 15
  const { page = "1" } = await searchParams;
  const currentPage = Number(page);

  const data = await getProducts(currentPage);
  const products = data.products;
  const totalPages = Math.ceil(data.total / LIMIT);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                {product.title}
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>₹{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Link
                  href={`/dashboard/products/${product.id}`}
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
