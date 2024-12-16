import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export const metadata = {
  title: "New 4 Stars Hotel Ballroom - KIA | PT Karunia Indo Alam",
  description: "",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative pt-16 lg:pt-[80px] bg-[#e1e1e1]">
      <Header backgroundColor="#e1e1e1" />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:h-[60vh]">
          <div className="w-full lg:w-1/2 order-3 lg:order-1">
            <div className="px-4 py-6 lg:pl-6 lg:pr-10 lg:py-10 h-full lg:flex lg:flex-col">
              <h1 className="text-4xl lg:text-[64px] leading-[1.1] mb-4">
                Upcoming Projects
              </h1>
              <div className="lg:pt-20 prose prose-lg lg:prose-xl prose-p:font-light lg:leading-normal lg:mt-auto">
                <h3 className="text-lg lg:text-xl font-bold">
                  New 4 Stars Hotel Ballroom
                </h3>
                <p>
                  To be completed by the end of 2025, this new addition to the
                  existing 4 stars Golden Tulip Balikpapan Hotel & Suites will
                  have a capacity of up to 1000 people. The Ballroom will have
                  an unbelievable view facing the ocean.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pr-6 order-1 lg:order-2">
            <Image
              src="/images/projects-01-01.jpg"
              alt="Projects"
              width={966}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full lg:w-full order-2 lg:hidden">
            <div className="grid grid-cols-3 gap-2 lg:gap-5 p-2 lg:pl-6 lg:pr-6 lg:py-5">
              <div>
                <Image
                  src="/images/projects-01-02.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-01-03.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image
                  src="/images/projects-01-04.jpg"
                  alt="Projects"
                  width={857}
                  height={437}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-2 lg:gap-5 p-2 lg:pl-6 lg:pr-6 lg:py-5">
          <div>
            <Image
              src="/images/projects-01-02.jpg"
              alt="Projects"
              width={857}
              height={437}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/projects-01-03.jpg"
              alt="Projects"
              width={857}
              height={437}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Image
              src="/images/projects-01-04.jpg"
              alt="Projects"
              width={857}
              height={437}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
