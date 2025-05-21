// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Tailwind CSS працює! 🚀
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Натисни мене
      </button>
      <p className="mt-4 text-gray-700">
        Зміни розмір вікна, щоб перевірити адаптивність:
      </p>
      <div className="mt-2 text-sm text-gray-500">
        <span className="block sm:hidden">Дрібний екран (до 375px)</span>
        <span className="hidden sm:block md:hidden">Середній екран (375px–992px)</span>
        <span className="hidden md:block lg:hidden">Великий екран (992px–1366px)</span>
        <span className="hidden lg:block">Дуже великий екран (понад 1366px)</span>
      </div>
    </div>
  );
}
