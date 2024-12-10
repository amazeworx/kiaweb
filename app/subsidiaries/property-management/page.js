import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export const metadata = {
  title: "Property Management - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function PropertyPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#f4f4f4]">
      <Header backgroundColor="#f4f4f4" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="py-6 px-4 lg:p-10">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] mb-4">
                Property Management
              </h1>
              <div className="pt-2 lg:pt-44 prose prose-lg lg:prose-xl lg:leading-snug">
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
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
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
