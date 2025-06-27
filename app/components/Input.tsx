import style from './form.module.scss'

type InputType = {
  name: string
  required?: boolean
  label: string
  isFull?: boolean
  isDisable?: boolean
  value?: string | number
}

const Input: React.FC<InputType> = ({ name, required = true, label, isFull = false, value = '' }) => {
  return (
    <div className={`relative z-0 mb-5 group ${isFull ? 'w-full' : 'w-[calc(50%_-_15px)]'}`}>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input 
        type="text"
        id={name}
        value={value}
        required={required}
        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />
    </div>
  )
}
export default Input
