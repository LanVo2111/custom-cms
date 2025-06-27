import { getCategory, getProducts } from "../utils/fetch";
import ProductItem from "../components/product/ProductItem";
import Link from "next/link";

export default async function ProductList() {

  const products = await getProducts();
  const category = await getCategory();

  return (
    <div className="product-list">

      <Link href="/products/create" className="inline-block mb-10 text-white! bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Product</Link>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Giá
              </th>
              <th scope="col" className="px-6 py-3">
                Hình
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              products && products.map((item) => (
                <ProductItem item={item} key={item.id} category={category} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
