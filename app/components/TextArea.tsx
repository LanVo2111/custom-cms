const TextArea = ({ value = '' }: { value?: string }) => {
  return (
    <div className="w-full relative z-0 mb-5 group">
      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
      <textarea id="description" value={value} rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mô tả sản phẩm..."></textarea>
    </div>
  )
}
export default TextArea
