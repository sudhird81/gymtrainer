export default function Select({ id, label, options, size = 'default', ...props }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="font-medium text-gray dark:text-white">
        {label}
      </label>
      <select
        id={id}
        className={`w-full p-2 mb-6 text-gray border border-[#6043ba]-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-[#6043ba] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          size === 'small' ? 'text-sm' : size === 'large' ? 'px-4 py-3 text-base' : ''
        } appearance-none`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex   pointer-events-none">
        {/* Adjust the size of the arrow here */}
        <svg className="w-10 h-10 text-[#5c3eb8]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 12l-4-4h8l-4 4z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}
