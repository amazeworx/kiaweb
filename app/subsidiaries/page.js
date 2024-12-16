import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export const metadata = {
  title: "Subsidiaries - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#38373f]">
      <Header backgroundColor="#38373f" />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/5 relative z-10">
            <div className="px-4 py-6 lg:px-6 lg:pt-10 lg:pb-0 xl:pl-6 xl:pr-10 xl:py-10 text-white relative">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] xl:mb-4 xl:absolute xl:top-10 lg:left-6">
                Subsidiaries
              </h1>
            </div>
          </div>
          <div className="w-full xl:w-4/5">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3">
                <div className="p-4 lg:p-10 relative">
                  <Image
                    src="/images/subsidiaries.jpg"
                    alt="About Us"
                    width={1235}
                    height={1288}
                    className="w-full h-full object-cover"
                  />
                  <a
                    href="/subsidiaries/property"
                    className="block absolute w-1/2 h-full left-0 top-0"
                  >
                    &nbsp;
                  </a>
                  <a
                    href="/subsidiaries/property-management"
                    className="block absolute w-1/2 h-full right-0 top-0"
                  >
                    &nbsp;
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <div className="p-4 pb-8 lg:p-6 xl:p-8 text-white flex h-full items-center">
                  <div className="prose prose-lg lg:prose-xl xl:prose-2xl prose-p:font-light text-white">
                    <p>
                      Through its subsidiaries, PT Karunia Indo Alam owns and
                      manages Grand Sudirman Balikpapan, a complex which
                      comprises of 3 buildings. An office tower of 19 stories, a
                      hotel tower of 21 stories and an apartment tower of 21
                      stories. As well as a trade center/ shopping center namely
                      Plaza Kebun Sayur
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
