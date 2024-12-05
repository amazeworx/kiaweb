import Image from "next/image";
import Header from "../components/Header"; // Import the header component

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header /> {/* Use the Header component */}
      <div className="absolute inset-0">
        <div className="container mx-auto h-full">
          <div className="h-full flex items-end">
            <div className="w-1/2 px-10">
              {" "}
              {/* Moved padding to the div */}
              <div className="pb-32">
                <h1 className="text-[42px] leading-[1.1] text-white">
                  We provide our clients <br />
                  with the best of possibilities
                </h1>
                <div className="pt-8">
                  <a
                    href="/contact"
                    className="btn btn-lg btn-outline text-white rounded-full uppercase px-12"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home-bg.jpg"
          alt="Home BG"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
