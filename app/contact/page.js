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
            <div className="px-4 py-6 lg:pl-6 lg:pr-10 lg:py-10 text-white relative h-full">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] lg:mb-4 text-white relative z-20">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[1/2] order-2 lg:order-2">
            <div className="p-4 pb-10 lg:pt-32 lg:pl-20 xl:pl-32 prose prose-lg prose-p:font-light lg:prose-xl xl:prose-2xl text-white prose-h4:text-white prose-h4:text-2xl prose-h4:mb-6">
              <div className="mb-4 lg:mb-8">
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
              </div>
              <div className="mb-4 lg:mb-8">
                <h4>PHONE</h4>
                <p>
                  <a
                    href="tel:622151402322"
                    target="_blank"
                    className="text-white no-underline hover:underline"
                  >
                    +62 21 5140 2322
                  </a>
                </p>
              </div>
              <div className="mb-4 lg:mb-8">
                <h4>EMAIL</h4>
                <p>
                  <a
                    href="mailto:inquiry@karuniaalam.com"
                    className="text-white no-underline hover:underline"
                  >
                    inquiry@karuniaalam.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:hidden">
          <Image
            src="/images/contact.jpg" // Replace with your image
            alt="About Us"
            width={1453}
            height={1134}
            className="w-full"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 bottom-0 left-0 h-screen w-1/2">
        <Image
          src="/images/contact.jpg" // Replace with your image
          alt="About Us"
          width={1453}
          height={1134}
          className="absolute top-72 bottom-0 left-0"
        />
      </div>
    </main>
  );
}
