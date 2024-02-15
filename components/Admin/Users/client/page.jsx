import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import AddClient from "./AddClient";

export default function page() {
  return (
    <>
      <div className="p-2">
        <AddClient />
        <div className="p-1  rounded-lg ">
          <div className=" items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-white">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      User name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      EmailAddress
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray whitespace-nowrap dark:text-black"
                    >
                      MacBook Pro
                    </th>
                    <td className="px-6 py-4">Silver@gmail.com</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="px-6 py-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline-none hover:bg-blue-600 dark:hover:bg-blue-200 py-2 px-3 "
                      >
                        <MdEdit className="inline-block mr-1" /> Edit
                      </Link>
                      <span className="mx-2"></span>
                      <Link
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-600 hover:bg-red-600 dark:hover:bg-red-200 py-2 px-3"
                      >
                        <MdDelete className="inline-block mr-1" /> Delete
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      Microsoft Pro
                    </th>
                    <td className="px-6 py-4">White@gmail.com</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="px-6 py-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline-none hover:bg-blue-600 dark:hover:bg-blue-200 py-2 px-3 "
                      >
                        <MdEdit className="inline-block mr-1" /> Edit
                      </Link>
                      <span className="mx-2"></span>
                      <Link
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-600 hover:bg-red-600 dark:hover:bg-red-200 py-2 px-3"
                      >
                        <MdDelete className="inline-block mr-1" /> Delete
                      </Link>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black@gmail.com</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">Active</td>
                    <td className="px-6 py-4">
                      <Link
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline-none hover:bg-blue-600 dark:hover:bg-blue-200 py-2 px-3 "
                      >
                        <MdEdit className="inline-block mr-1" /> Edit
                      </Link>
                      <span className="mx-2"></span>
                      <Link
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-600 hover:bg-red-600 dark:hover:bg-red-200 py-2 px-3"
                      >
                        <MdDelete className="inline-block mr-1" /> Delete
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
