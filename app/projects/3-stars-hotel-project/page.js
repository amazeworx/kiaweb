import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export const metadata = {
  title: "New 3 Stars Hotel Project 2025 - 2026 - KIA | PT Karunia Indo Alam",
  description: "",
};

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
              <div className="lg:pt-10 prose prose-lg lg:prose-xl lg:leading-snug">
                <p className="font-bold">
                  New 3 Stars Hotel Project 2025 - 2026
                </p>
                <p>
                  As the demand for mid range priced rooms in Balikpapan
                  increases, PT Karunia Indo Alam plans to add a 3 stars hotel
                  in Grand Sudirman Balikpapan. By converting 7 floors on the
                  Office Tower, the upcoming 3 stars international hotel will
                  have 150 rooms complete with meeting rooms and an all day sky
                  dining restaurant on the 20th floor.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pr-4 order-1 lg:order-2">
            <Image
              src="/images/projects-03-01.jpg"
              alt="Projects"
              width={1080}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-full order-2 lg:order-3">
            <div className="grid grid-cols-3 gap-2 lg:gap-5 p-4 lg:pl-10 lg:pr-4 lg:py-5">
              <div>
                <Image
                  src="/images/projects-03-02.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-03-03.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-03-04.jpg"
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
