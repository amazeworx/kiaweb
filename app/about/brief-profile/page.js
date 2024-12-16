import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export const metadata = {
  title: "About Us - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#e1e1e1]">
      <Header backgroundColor="#e1e1e1" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="px-4 py-6 lg:pl-6 lg:pr-10 lg:py-10">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] mb-4">
                About Us
              </h1>
              <div className="pt-2 lg:pt-32 prose-p:font-light prose prose-lg lg:prose-xl">
                <p>
                  Established in 2018, PT Karunia Indo Alam is highly committed
                  to work professionally and to actively participate to provide
                  housing needs and other property related businesses such as
                  apartments, offices and hotels.
                </p>
                <p>
                  The group's diversified interests include financial services,
                  commodities and energy, software and consumer products, and
                  food services.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:hidden order-1 lg:order-2">
            <Image
              src="/images/about-us.jpg" // Replace with your image
              alt="About Us"
              width={1366}
              height={1458}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 h-screen w-1/2">
        <Image
          src="/images/about-us.jpg" // Replace with your image
          alt="About Us"
          width={1366}
          height={1458}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
