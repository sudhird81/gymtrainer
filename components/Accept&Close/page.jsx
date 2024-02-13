import Button from "../UI/Button";
import Footer from "../Footer";

export default function Accept() {
  return (
    <>
      <div className="flex justify-center py-5 ">
        <div className="w-[450px] rounded-md border bg-[#8102ba]">
          <div className="p-4">
            <p className="mt-3 text-sm text-white">
              In addition to technically necessarily cookies, this website uses
              cookies for marketing purposes. These cookies can collect data
              about you, analyze it and pass it on to third parties. You can
              find details of this data processing in our privacy policy.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                buttonText="Accept & Close"
                bgColor="bg-white"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
