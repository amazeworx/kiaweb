import Image from "next/image";
import Header from "@/components/Header";

export const metadata = {
  title: "KIA | PT Karunia Indo Alam",
  description: "",
};

export default function Home() {
  return (
    <main className="min-h-screen relative z-0">
      <Header backgroundColor="transparent" />
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto h-full">
          <div className="h-full flex items-end">
            <div className="lg:w-2/3 px-6">
              <div className="pb-20 lg:pb-32">
                <h1 className="md:hidden text-4xl leading-[1.1] text-white">
                  We provide our clients with the best of possibilities
                </h1>
                <h1 className="hidden md:block text-5xl lg:text-[42px] xl:text-[48px] leading-[1.1] text-white">
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
          src="/images/home-bg-2.jpg"
          alt="Home BG"
          width={1920}
          height={1080}
          className="w-full h-full object-cover lg:object-left-bottom"
        />
      </div>
      <div className="absolute inset-0 -z-0 bg-black/30 lg:hidden"></div>
    </main>
  );
}
