import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export default function AboutUsPage() {
  return (
    <main className="min-h-screen relative pt-[93px] bg-[#f4f4f4]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div className="p-10">
              <h1 className="text-[64px] mb-4">About Us</h1>
              <div className="pt-32 prose prose-xl">
                <p>
                  Established in 2018, PT Karunia Indo Alam is highly committed
                  to work professionally and to actively participate to provide
                  housing needs and other property related businesses such as
                  apartments, offices and hotels.
                </p>
                <p>
                  The group's diversified interests include financial services,
                  commodities and energy, software and consumer products, and
                  food services.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Image
              src="/images/about-us.jpg" // Replace with your image
              alt="About Us"
              width={1366}
              height={1458}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
