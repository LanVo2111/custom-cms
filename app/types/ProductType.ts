import { ObjectId } from "mongodb"
import { CategoryType } from "./CategoryType"

export type ProductType = {
  _id: ObjectId
  name: string
  salePrice: number
  price: number
  category: CategoryType
  description: string
  id: string
  image?: string
  inforTable?: {
    carbo: number
    minerals: number
    nutrient: string
    protein: number
  }
}
