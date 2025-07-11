
import { CategoryType } from "../types/CategoryType"

type SelectType = {
  name: string
  label: string
  value?: string | number
  options?: CategoryType[]
}

const Select: React.FC<SelectType> = ({ name, label, options }) => {
  return (
    <div className="select relative z-0 mb-5 group w-[calc(50%_-_15px)]">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <select id={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {
          options && options.map(item => (
            <option value={item.name} key={item.id}>{item.name}</option>
          ))
        }
      </select>
    </div>
  )
}
export default Select
