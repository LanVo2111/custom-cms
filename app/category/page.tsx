import { getCategory } from "../utils/fetch";
import CategoryItem from "../components/category/CategoryItem";

export default async function CategoryList() {
  const category = await getCategory();
  return (
    <div className="category-page">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tên
              </th>
              <th scope="col" className="px-6 py-3">
                Hình
              </th>
              <th scope="col" className="px-6 py-3">
                Số lượng sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {category && category.map((item, index) => (
              <CategoryItem item={item} key={index}/>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
