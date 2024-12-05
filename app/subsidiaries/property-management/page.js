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
              <h1 className="text-[64px] leading-[1.1] mb-4">
                Property Management
              </h1>
              <div className="pt-44 prose prose-xl leading-snug">
                <p>
                  Through its subsidiaries, PT Karunia Indo Alam manages the
                  Grand Sudirman Balikpapan complex as well as Plaza Kebun
                  Sayur.
                </p>
                <p>
                  PT Karunia Indo Propertindo manages the complex of Grand
                  Sudirman Balikpapan. And PT Gusher Mitra Sejahtera manages
                  Plaza Kebun Sayur.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/subsidiaries-property-management.jpg"
              alt="Property Management"
              width={862}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
