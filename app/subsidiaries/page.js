import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen relative pt-[80px] bg-[#38373f]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/4">
            <div className="p-10 text-white relative">
              <h1 className="text-[64px] leading-[1.1] mb-4 absolute top-10 left-10">
                Subsidiaries
              </h1>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-10">
              <Image
                src="/images/subsidiaries.jpg"
                alt="About Us"
                width={1235}
                height={1288}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-1/4">
            <div className="p-6 text-white flex h-full items-center">
              <div className="prose prose-xl text-white">
                <p>
                  Through its subsidiaries, PT Karunia Indo Alam owns and
                  manages Grand Sudirman Balikpapan, a complex which comprises
                  of 3 buildings. An office tower of 19 stories, a hotel tower
                  of 21 stories and an apartment tower of 21 stories. As well as
                  a trade center/ shopping center namely Plaza Kebun Sayur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
