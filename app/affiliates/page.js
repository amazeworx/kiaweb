import Image from "next/image";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";

export const metadata = {
  title: "Affiliates - KIA | PT Karunia Indo Alam",
  description: "",
};

const images = [
  { src: "/images/logistics-01.jpg", alt: "Logistics 1" },
  { src: "/images/logistics-02.jpg", alt: "Logistics 2" },
];

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#38373f] z-0">
      <Header backgroundColor="#38373f" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[12%]">
            <div className="py-6 px-4 lg:p-10 text-white relative">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] lg:mb-4 lg:absolute lg:top-10 lg:left-10">
                Affiliates
              </h1>
            </div>
          </div>
          <div className="w-full lg:w-[62%]">
            <div className="py-6 px-4 lg:p-10">
              <Image
                src="/images/affiliates-2.jpg"
                alt="Affiliates"
                width={950}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-[26%]">
            <div className="py-6 px-4 lg:p-6 text-white flex h-full items-center">
              <div className="prose prose-lg lg:prose-xl text-white">
                <p>
                  Our affiliated companies, each a vital pillar of our
                  integrated network. Spanning logistics, mining, trading, and
                  port operations, these affiliations drive synergy and
                  innovation across key industries.
                </p>
                <p>
                  Together, they represent our dedication to operational
                  excellence, fostering growth and delivering seamless solutions
                  in the dynamic world of commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto relative z-0 -mt-10 lg:-mt-20 pb-10 lg:pb-20">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="py-6 px-4 lg:p-10 text-white flex flex-col lg:pt-[360px] h-full">
              <h2 className="text-4xl lg:text-[56px] leading-[1.1] mb-4">
                Logistics / Ports Mining / Trading Agriculture / Oil & Gas
              </h2>
              <p className="mt-6 mb-6 lg:mt-auto lg:mb-8 lg:text-2xl">
                Through its affiliates, PT Karunia Indo Alam has interests in
                mining and trading of iron ore as well as the logistics of port
                handling and shipping of coal and other minerals.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Slideshow images={images} />
          </div>
        </div>
      </div>
    </main>
  );
}
