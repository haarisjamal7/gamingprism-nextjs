import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 🔹 Fetch posts overview
async function getPostsOverview() {
  const res = await fetch("https://dummyjson.com/posts?limit=100", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();

  const totalViews = data.posts.reduce(
    (sum, post) => sum + post.views,
    0
  );

  return {
    totalPosts: data.total,
    totalViews,
  };
}

// 🔹 Fetch products overview
async function getProductsOverview() {
  const res = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();

  const inStock = data.products.filter(p => p.stock > 0).length;

  return {
    totalProducts: data.total,
    inStock,
  };
}

export default async function DashboardPage() {
  const [posts, products] = await Promise.all([
    getPostsOverview(),
    getProductsOverview(),
  ]);

  return (
    <div className="space-y-6">
     
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
       
        <Link href="/dashboard/posts">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Posts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-3xl font-bold">{posts.totalPosts}</p>
              <p className="text-sm text-muted-foreground">
                Total Views: {posts.totalViews}
              </p>
            </CardContent>
          </Card>
        </Link>

        
        <Link href="/dashboard/products">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-3xl font-bold">
                {products.totalProducts}
              </p>
              <p className="text-sm text-muted-foreground">
                In Stock: {products.inStock}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

     
      <div className="bg-muted/50 min-h-[200px] rounded-xl p-6">
        <p className="text-muted-foreground">
          Select a section above to manage posts or products.
        </p>
      </div>
    </div>
  );
}
