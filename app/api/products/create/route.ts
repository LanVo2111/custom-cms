import { getDb } from "@/app/lib/mongodb";
import { InsertOneResult } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const db = await getDb()
    const collection = await db.collection('products')
    const body = await req.json();
    const { name, image, category, price, salePrice, description } = body;
    console.log('body', body);
    const result: InsertOneResult<Document> = await collection.insertOne({
      name,
      category,
      price,
      salePrice,
      description,
      image,
      createdAt: new Date()
    })
    console.log('result', result);
    return NextResponse.json({ message: 'Create Success', item: result, id: result.insertedId })
  } 
  catch (error) {
    return NextResponse.json({ message: 'Create New Porduct Fail' })
  }
}
