import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#f4f4f4]">
      <Header backgroundColor="#f4f4f4" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <div className="w-full lg:w-1/2 order-3 lg:order-1">
            <div className="py-6 px-4 lg:p-10">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] mb-4">
                Upcoming Projects
              </h1>
              <div className="lg:pt-20 prose prose-lg lg:prose-xl lg:leading-snug">
                <p className="font-bold">4 Stars Hotel Upgrades 2025 - 2026</p>
                <p>
                  To maintain its position as the leading hotel in Balikpapan,
                  PT Karunia Indo Alam plans to fully renovate the existing 4
                  stars hotel with major upgrades. This will include a new hotel
                  lobby, a new all day dining restaurant as well as a new ocean
                  front lounge to experience the unforgettable sunsets.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pr-4 order-1 lg:order-2">
            <Image
              src="/images/projects-02-01.jpg"
              alt="Projects"
              width={1047}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-full order-2 lg:order-3">
            <div className="grid grid-cols-3 gap-2 lg:gap-5 p-4 lg:pl-10 lg:pr-4 lg:py-5">
              <div>
                <Image
                  src="/images/projects-02-02.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-02-03.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-02-04.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
