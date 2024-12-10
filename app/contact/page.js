import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export const metadata = {
  title: "Contact Us - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#38373f]">
      <Header backgroundColor="#38373f" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[1/2] order-1 lg:order-1">
            <div className="py-6 px-4 lg:p-10 text-white relative h-full">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] lg:mb-4 text-white relative z-20">
                Contact Us
              </h1>
              <div className="pt-16 hidden lg:block">
                <Image
                  src="/images/contact.jpg" // Replace with your image
                  alt="About Us"
                  width={1453}
                  height={1134}
                  className="w-full absolute top-36 left-0 bottom-0 z-10"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[1/2] order-2 lg:order-2">
            <div className="px-4 py-6 lg:pt-32 lg:pl-20 prose prose-lg lg:prose-xl text-white prose-h4:text-white">
              <h4>ADDRESS</h4>
              <p>
                PT KARUNIA INDO ALAM
                <br />
                Plaza Asia 22nd Floor
                <br />
                Jl. Jend Sudirman Kav. 59
                <br />
                Jakarta Indonesia
              </p>
              <h4>PHONE</h4>
              <p>+62 21 5140 2322</p>
              <h4>EMAIL</h4>
              <p>inquiry@karuniaalam.com</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <Image
            src="/images/contact.jpg" // Replace with your image
            alt="About Us"
            width={1453}
            height={1134}
            className="w-full lg:w-1/2 absolute left-0 bottom-0"
          />
        </div>
      </div>
    </main>
  );
}
