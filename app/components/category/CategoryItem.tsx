'use client'
import { CategoryType } from "@/app/types/CategoryType"
import { useState } from "react"
import { Modal, ModalConfirm } from "../Modal"
import Image from "../Image"
import { useForm } from "react-hook-form"

type CategoryItemType = {
  item: CategoryType
}

const CategoryItem = ({ item }: CategoryItemType) => {
  const imageURLEnv = process.env.IMAGE_URL
  const [showModal, setShowModal] = useState(false)
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: {
      name: item.name,
      image: item.image
    },
  })

  const handleShowModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const Submit = (data: any) => {
    console.log('data', data);

  }
  const ModalChild = () => {
    console.log(`${imageURLEnv}/${item.image}`);
    return (
      <form className="flex flex-wrap gap-x-[30px] p-4" onSubmit={handleSubmit(Submit)}>
        <div className='relative z-0 mb-5 group w-full'>
          <label htmlFor='price' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Name</label>
          <input
            type="text"
            {...register("name")}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
        <Image
          alt={item.name}
          src={`${imageURLEnv}/${item.image}`}
          width={120}
          height={120}
        />
        
      </form>
    )
  }
  return (
    <tr key={item.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <p>{item.name}</p>
      </td>
      <td className="px-6 py-4">
        <Image
          alt={item.name}
          src={`${imageURLEnv}/${item.image}`}
          width={60}
          height={60}
        />
      </td>
      <td className="px-6 py-4"><p>50</p></td>
      <td className="px-6 py-4 flex gap-2">
        <button
          onClick={handleShowModal}
          type="button"
          data-modal-target="crud-modal"
          data-modal-toggle="crud-modal"
          className="cursor-pointer block text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
          </svg>
        </button>
        <button
          onClick={() => setShowModalConfirm(true)}
          type="button"
          className="cursor-pointer font-medium">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
          </svg>
        </button>
        {showModal &&
          <Modal
            title={`Update Category ${item.name}`}
            children={<ModalChild />}
            isShowModal={showModal}
            closeModal={closeModal}
          />
        }
        {
          showModalConfirm && (
            <ModalConfirm
              title={`Are you sure you want to delete this product has id ${item.id}`}
              isShowModal={showModalConfirm}
              closeModal={() => setShowModalConfirm(false)}
            />
          )
        }
      </td>
    </tr>
  )
}

export default CategoryItem
