import { ShoppingCart } from "lucide-react";

export default function FeaturedCard({ image, title, desc, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <img src={image} className="w-full h-72 object-cover" />

      <div className="p-6">
        <h3 className="text-lg font-semibold text-green-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-green-900 font-bold">${price}</p>

          <button className="flex items-center gap-2 px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-800">
            <ShoppingCart size={18} /> Order
          </button>
        </div>
      </div>
    </div>
  );
}
