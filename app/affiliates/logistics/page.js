import Header from "../../../components/Header";
import ImageSlider from "../../../components/ImageSlider";

export const metadata = {
  title: "Logistics / Mining / Trading / Ports - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#38373f] flex flex-col h-full">
      <Header backgroundColor="#38373f" />
      <div className="container mx-auto text-white lg:h-full flex-grow">
        <div className="flex flex-col lg:flex-row lg:h-full flex-grow">
          <div className="w-full lg:h-full lg:w-1/2 order-2 lg:order-1">
            <div className="px-4 py-6 lg:pl-6 lg:pr-10 lg:py-10 xl:pr-24 flex flex-col lg:h-full">
              <h1 className="text-4xl lg:text-[44px] lg:pt-10 xl:text-[64px] leading-[1.1] mb-4 xl:pt-20">
                Logistics / Ports / Mining / Trading / Agriculture / Oil & Gas
              </h1>
              <div className="pt-2 lg:pt-32 prose-p:font-light prose prose-lg lg:prose-xl text-white prose-white lg:mt-auto lg:pb-16 xl:pb-20">
                <p>
                  Through its affiliates, PT Karunia Indo Alam has interests in
                  agriculture, oil & gas, mining, and trading of coal and iron
                  ore as well as the logistics of port handling and shipping of
                  coal and other minerals.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:hidden order-1 lg:order-2">
            <ImageSlider />
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 h-screen lg:w-1/2 lg:pt-[80px]">
        <ImageSlider />
      </div>
    </main>
  );
}
