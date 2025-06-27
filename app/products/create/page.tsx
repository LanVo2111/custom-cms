import CreateProductForm from "@/app/components/CreateProduct";
import { getCategory } from "@/app/utils/fetch";
import React from "react";

export default async function CreateProduct() {
  const category = await getCategory();
  return (
    <section className="product-page create-product">
      <div className="inner">
        <h1 className="mb-6 flex items-center gap-2">
          <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
          </svg>
          <span className="font-bold text-xl ">Add New Product</span>
        </h1>
        <CreateProductForm category={category} />
      </div>
    </section>
  )
}
