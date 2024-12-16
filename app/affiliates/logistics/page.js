import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export const metadata = {
  title: "Logistics / Mining / Trading / Ports - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#f4f4f4]">
      <Header backgroundColor="#f4f4f4" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 xl:w-1/4 2xl: order-2 lg:order-1">
            <div className="px-4 py-6 lg:pl-6 lg:pr-10 lg:py-10">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] mb-4 xl:pt-20">
                Logistics / Mining / Trading / Ports
              </h1>
              <div className="pt-2 lg:pt-32 prose-p:font-light prose prose-lg lg:prose-xl">
                <p>
                  Through its affiliates, PT Karunia Indo Alam has interests in
                  mining and trading of iron ore as well as the logistics of
                  port handling and shipping of coal and other minerals.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:hidden order-1 lg:order-2">
            <Image
              src="/images/logistics-03.jpg"
              alt="Logistics"
              width={1600}
              height={1205}
              className="w-full h-full object-left-top object-cover"
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 h-screen lg:w-2/3 xl:w-3/4 2xl:w-2/3">
        <Image
          src="/images/logistics-03.jpg"
          alt="Logistics"
          width={1600}
          height={1205}
          className="w-full h-full object-left-top object-cover"
        />
      </div>
    </main>
  );
}
