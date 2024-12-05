import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export default function PropertyPage() {
  return (
    <main className="min-h-screen relative pt-[80px] bg-[#f4f4f4]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div className="p-10">
              <h1 className="text-[64px] leading-[1.1] mb-4">Property</h1>
              <div className="pt-16 prose prose-xl leading-snug">
                <p>
                  Dedicated to professional excellence and national development,
                  PT Karunia Indo Alam is committed to addressing Indonesia’s
                  growing property needs. From housing and apartments to offices
                  and hotels, the company strives to deliver solutions that
                  blend quality, functionality, and ingenuity.
                </p>
                <p>
                  Grand Sudirman Balikpapan (GSB), managed by PT Karunia Indo
                  Alam is a distinguished complex comprising three main
                  buildings: an office tower, an apartment tower, and a 4-star
                  international hotel. The office building stands 19 stories
                  tall, offering units ranging in size from 69 sqm to 270 sqm,
                  tailored to meet diverse business needs. Adjacent to it, the
                  21-story apartment building features 150 thoughtfully designed
                  units, available in configurations from one to three bedrooms,
                  providing modern living spaces for a variety of lifestyles.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/subsidiaries-property.jpg"
              alt="Property Management"
              width={867}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
