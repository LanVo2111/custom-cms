'use client'
import { useForm } from "react-hook-form"
import { CategoryType } from "../types/CategoryType"
import { useState } from "react"
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary"
import Image from "./Image"

const CreateProductForm = ({ category }: { category: CategoryType[] }) => {
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      salePrice: 0,
      description: '',
      image: ''
    },
  })

  const [imageUrl, setImageUrl] = useState<string>('');
  const [secureUrl, setSecureUrl] = useState<string>('')


  const onSubmit = async (data: any) => {
    const productData = {
      ...data,
      image: imageUrl,
    };
    try {
      await fetch('http://localhost:3000/api/products/create', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData)
      });
      alert('Add Success')
      setImageUrl('')
      setSecureUrl('')
      reset();
    } catch (error) {
      console.log('error upload');
    }
  }

  return (
    <form className="flex flex-wrap gap-x-[30px]" onSubmit={handleSubmit(onSubmit)}>
      <div className='relative z-0 mb-5 group w-[calc(50%_-_15px)]'>
        <label htmlFor='name' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
        <input
          type="text"
          {...register("name")}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className="select relative z-0 mb-5 group w-[calc(50%_-_15px)]">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
        <select {...register('category')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {
            category && category.map(item => (
              <option value={item.name} key={item.id}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <div className='relative z-0 mb-5 group w-[calc(50%_-_15px)]'>
        <label htmlFor='price' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
        <input
          type="text"
          {...register("price")}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className='relative z-0 mb-5 group w-[calc(50%_-_15px)]'>
        <label htmlFor='salePrice' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sale Price</label>
        <input
          type="text"
          {...register("salePrice")}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className="w-full relative z-0 mb-5 group">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea {...register("description")} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mô tả sản phẩm..."></textarea>
      </div>
      <CldUploadWidget
        uploadPreset={'my-upload-preset'}
        options={{ folder: 'products/' }}
        onSuccess={(result: string | CloudinaryUploadWidgetResults) => {
          if (typeof result === 'object') {
            const info = result?.info as { original_filename?: string, secure_url?: string, format?: string };
            if(info?.original_filename && info?.secure_url) {
              setImageUrl(`${info?.original_filename}.${info?.format}`)
              setSecureUrl(info?.secure_url);
            }
          } else {
            console.warn('Kết quả upload không hợp lệ:', result);
          }
        }}
        {...register('image')}
      >
        {({ open }) => (
          <button type="button" onClick={() => open()} className="p-2 bg-cyan-500 text-white w-[220px] h-[120px] cursor-pointer">
            Choose Image
          </button>
        )}
      </CldUploadWidget>
      {secureUrl && <Image src={secureUrl} alt="Uploaded" width={265} height={265} />}
      <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4
       focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 
       dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>
  )
}
export default CreateProductForm
