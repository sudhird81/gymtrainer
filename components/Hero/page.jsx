import Image from "next/image";
import Button from "../UI/Button";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <>
      <div className=" w-full bg-[#dbeef2]  ">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-4 py-24">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <p
              className="mt-8 text-1xl font-medium tracking-tight
           "
            >
              Want to find out which food gives you the recommended nutriments
              for an optimal health?
            </p>

            <div className="mt-8 flex">
              <Button
                buttonText="Start Here"
                bgColor="bg-[#5c3eb8]"
                textColor="text-white"
              />
            </div>
          </div>
          <div className=" lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Image
              className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9] float-right"
              src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              width="500"
              height="200"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center w-full min-h-12 bg-[#5c3eb8]"></div>

      <div class="grid gap-x-8 gap-y-4 grid-cols-3 mt-8 px-8 mb-8">
        <div>
          <p className="mb-4">For You</p>
          <ul className="">
            <li className="flex">
              {" "}
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Find out which food is best for you
            </li>
            <li className="flex">
              {" "}
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Improve Your Well-Being
            </li>
            <li className="flex">
              {" "}
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              Browse Calorie Chart, Nutrition Facts for Food
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4">For Nutritionists</p>
          <ul className="">
            <li className="flex">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />{" "}
              Find Clients
            </li>
            <li className="flex">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />{" "}
              Get to help people with your knowledge and passion
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-4">For Partners</p>
          <ul className="">
            <li className="flex">
              <CheckIcon
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />{" "}
              Let your sens of Innovation inspire our Clients
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
