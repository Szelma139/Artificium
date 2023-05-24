import React from 'react'

export const SelectedItem = () => {
  return (
    <div className="border border-solid border-light-gray bg-glass-stroke flex w-[149px] h-[32px] flex-row justify-between items-center shadow-glass-stroke rounded-xl">
        <img className="rounded-xl ml-3" src="https://picsum.photos/24/24" width="24" height="24" alt="clicker"/>
        <span className="text-xs text-grayish text-noble-black-300"> Olivia Sharma</span>
        <button
      type="button"
      className="mr-3 my-3 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <svg
        className="h-2 w-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    </div>
  )
}
