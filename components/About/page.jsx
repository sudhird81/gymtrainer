import Image from "next/image";
import Header from "../Header";

export default function About() {
  return (
    <>
      <Header />
      <section className="w-full">
        <div className=" w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-4 ">
            <div className="lg:col-span-7 lg:gap-x-6 lg:px-6  xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight mt-0">
                About Us
              </h1>
              <div className="mt-40">
                <p className="text-2xl font-normal tracking-tight">
                  We enable healthy living. We help you find out which food
                  gives you the recommended nutrients for optimal health.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5  xl:col-span-6 xl:h-[400px]  bg-[#dbeef2]">
              <Image
                className="aspect-[4/4] object-cover lg:aspect-[4/3] lg:h-[400px] xl:aspect-[16/9] p-8 "
                src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                width="700"
                height="200"
              />
            </div>
          </div>
        </div>
        <div class="grid gap-x-8 gap-y-4 grid-cols-3 mt-8 px-8 mb-8">
          <div>
            <p className="mb-4">For You</p>
            <ul className="">
              <li>✓ Find out which food is best for you</li>
              <li>✓ Improve Your Well-Being</li>
              <li>✓ Browse Calorie Chart, Nutrition Facts for Food</li>
            </ul>
          </div>
          <div>
            <p className="mb-4">For Nutritionists</p>
            <ul className="">
              <li>✓ Find Clients</li>
              <li>✓ Get to help people with your knowledge and passion</li>
            </ul>
          </div>
          <div>
            <p className="mb-4">For Partners</p>
            <ul className="">
              <li>✓ Let your sens of Innovation inspire our Clients</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
