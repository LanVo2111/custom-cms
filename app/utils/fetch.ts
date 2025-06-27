import { getDb } from "../lib/mongodb"
import { CategoryType } from "../types/CategoryType";
import { ProductType } from "../types/ProductType";

export async function getProducts(): Promise<ProductType[]> {
  try {
    const db = await getDb()
    const products = await db.collection<ProductType>('products').aggregate([
      {
        $lookup: {
          from: 'category',          // tên collection để join vào
          localField: 'category',    // field trong products
          foreignField: '_id',         // field trong categories
          as: 'category',              // tên field kết quả
        },
      },
      {
        $unwind: '$category',         // bung array category[] thành object
      }
    ]).toArray() as ProductType[];
    return products
  } catch (error) {
    throw (error)
  }
}

export async function getCategory(): Promise<CategoryType[]> {
  try {
    const res = await fetch('http://localhost:3000/api/category', {
      next: { revalidate: 3600 }
    });
    const data = await res.json();
    return data
  }
  catch (error) {
    throw (error)
  }
}
