import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen relative pt-[80px] bg-[#38373f]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/4">
            <div className="p-10 text-white relative">
              <h1 className="text-[64px] mb-4 absolute top-10 left-10">
                Affiliates
              </h1>
            </div>
          </div>
          <div className="w-1/2">
            <div className="p-10">
              <Image
                src="/images/affiliates.jpg"
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
    </main>
  );
}
