import { AiOutlineDash } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import Button from "../UI/Button";
import Select from "../UI/Select";

export default function Food({
  id,
  label,
  options,
  size = "default",
  ...props
}) {
  const countries = [
    { value: "food Categories", label: "Food Categories" },
    { value: "CA", label: "Canada" },
    { value: "FR", label: "France" },
    { value: "DE", label: "Germany" },
  ];

  return (
    <>
      <section className="w-full">
        <div className=" max-w-7xl px-2 py-10 lg:px-1">
          {/* Top */}
          <div className="md:flex md:flex-row md:items-start md:justify-center">
            <h1 className="text-xl font-bold  text-[#6340b8]">SEARCH FOOD & NUTRIENTS</h1>
          </div>
          <div className="my-8" />
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
              <div>
              
                <ul className="space-y-2 ">
                  <li className="cursor-pointer font-normal text-gray-500">Search by Food</li>
                  <li className="cursor-pointer font-normal text-gray-600">
                    Search by Nutrient
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-lg px-2 lg:col-span-9 lg:min-h-min">
              <div className="grid gap-4 grid-cols-2">
                <div className="">
                  <Select id="default1" options={countries} />
                  <Select id="default2" options={countries} />
                  <Select id="default3" options={countries} />
                </div>

                <div className="flex-grow h-14 mt-8 inline-flex">
                  <span className="mr-4">or</span>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Food name
                    "
                  />
                </div>
              </div>

              <div class="flex flex-row gap-2">
                <div class="basis-1/4">
                  {" "}
                  <Select id="default1" options={countries} />
                </div>
                <div class="basis-1/4">
                  {" "}
                  <Select id="default1" options={countries} />
                </div>
                <div class="basis-1/4 ">
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div class="basis-1/4  flex  mt-2">
                  <FaPlusSquare color="#5c3eb8" size={25} />
                  <span class="flex ml-2">Add Nutrient</span>
                </div>
              </div>
              <div className="flex">
                <Button
                  buttonText="SEARCH"
                  bgColor="bg-[#5c3eb8]"
                  textColor="text-white"
                />
              </div>

              <div className=" flex justify-start items-center">
                <AiOutlineDash />
                <MdOutlineChevronRight />
                Help
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="w-full">
        <div className=" max-w-7xl px-2 py-10 lg:px-1">
          {/* Top */}
          <div className="md:flex md:flex-row md:items-start md:justify-center">
            <h1 className="text-xl font-bold text-[#6340b8]">SEARCH FOOD & NUTRIENTS</h1>
          </div>
          <div className="my-8" />
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block">
              <div>
              <h2>Filter by category
</h2>
                <ul className="space-y-2 mt-3">
                  <li className="cursor-pointer font-medium text-[#6340b8]">All (1)</li>
                  <li className="cursor-pointer font-medium text-[#6340b8]">
                  Fish (1)

                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-lg px-2 lg:col-span-9 lg:min-h-min">
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-[##dce6f2]  dark:bg-[#dce6f2] dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                Food
                </th>
                <th scope="col" class="px-6 py-3">
                Nutrient
                </th>
                <th scope="col" class="px-6 py-3">
                Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                REF (Daily)
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-white dark:border-white hover:bg-gray-50 dark:hover:bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Apple MacBook Pro 17
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
               
            </tr>
            <tr class="bg-white border-b dark:bg-white dark:border-white hover:bg-gray-50 dark:hover:bg-white">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-white hover:bg-gray-50 dark:hover:bg-white text-black">
                <th scope="row" class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-black">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
