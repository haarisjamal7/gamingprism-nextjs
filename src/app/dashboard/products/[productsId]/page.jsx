import { notFound } from "next/navigation";

// ✅ fetch single product
async function getProduct(id) {
  if (Number.isNaN(id)) notFound();

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) notFound();
  return res.json();
}

export default async function ProductDetail({ params }) {
  const { productsId } = await params;
  const product = await getProduct(Number(productsId));

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span>Rating: {product.rating}</span>
        <span>Stock: {product.stock}</span>
        <span>Category: {product.category}</span>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm grid md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center">
          {product.thumbnail && (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-lg max-h-80 object-contain"
            />
          )}
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <b>Brand:</b> {product.brand}
            </p>
            <p>
              <b>Category:</b> {product.category}
            </p>
            <p>
              <b>Price:</b> ₹{product.price}
            </p>
            <p>
              <b>Rating:</b> {product.rating}
            </p>
            <p>
              <b>Stock:</b> {product.stock}
            </p>
          </div>

          <div className="pt-4">
            <span
              className={`inline-block rounded-full px-4 py-1 text-sm font-semibold
                ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
