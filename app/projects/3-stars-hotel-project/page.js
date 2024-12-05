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
              <div className="pt-10 prose prose-xl leading-snug">
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
          <div className="w-1/2 pr-4">
            <Image
              src="/images/projects-03-01.jpg"
              alt="Projects"
              width={1080}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 pl-10 pr-4 py-5">
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
    </main>
  );
}
