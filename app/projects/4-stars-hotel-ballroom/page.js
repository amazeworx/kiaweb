import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative pt-[80px] bg-[#f4f4f4]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div className="p-10">
              <h1 className="text-[64px] mb-4">Upcoming Projects</h1>
              <div className="pt-20 prose prose-xl leading-snug">
                <p className="font-bold">New 4 Stars Hotel Ballroom</p>
                <p>
                  To be completed by the end of 2025, this new addition to the
                  existing 4 stars Golden Tulip Balikpapan Hotel & Suites will
                  have a capacity of up to 1000 people. The Ballroom will have
                  an unbelievable view facing the ocean.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 pr-4">
            <Image
              src="/images/projects-01-01.jpg"
              alt="Projects"
              width={966}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 pl-10 pr-4 py-5">
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
