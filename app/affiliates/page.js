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
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/5 relative z-10">
            <div className="px-4 py-6 lg:px-6 lg:pt-10 lg:pb-0 xl:pl-6 xl:pr-10 xl:py-10 text-white relative">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] xl:mb-4 xl:absolute xl:top-10 lg:left-6">
                Affiliates
              </h1>
            </div>
          </div>
          <div className="w-full xl:w-4/5">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3">
                <div className="p-4 lg:p-10 relative">
                  <a href="/affiliates/logistics" className="block">
                    <Image
                      src="/images/affiliates.jpg"
                      alt="Affiliates"
                      width={1294}
                      height={1280}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="p-4 pb-8 lg:p-6 xl:p-8 text-white flex h-full items-center">
                  <div className="prose prose-lg lg:prose-xl xl:prose-xl prose-p:font-light text-white">
                    <p>
                      Our affiliated companies, each a vital pillar of our
                      integrated network. Spanning logistics, mining, trading,
                      and port operations, these affiliations drive synergy and
                      innovation across key industries.
                    </p>
                    <p>
                      Together, they represent our dedication to operational
                      excellence, fostering growth and delivering seamless
                      solutions in the dynamic world of commodities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
