import { getDb } from "@/app/lib/mongodb";
import { CategoryType } from "@/app/types/CategoryType";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDb()
    const categories = await db.collection<CategoryType>('category').find({}).toArray();
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return new NextResponse('Error',{ status: 200 });
  }
}
