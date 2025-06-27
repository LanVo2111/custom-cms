import { ObjectId } from "mongodb"

export interface CategoryType {
  _id: ObjectId
  id: string
  name: string
  image: string
  link: string
}
