import Image from "next/image";
import Header from "../../components/Header"; // Import the header component

export default function ContactPage() {
  return (
    <main className="min-h-screen relative pt-[93px] bg-[#38373f]">
      <Header />
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div className="p-10">
              <h1 className="text-[64px] mb-4 text-white">Contact Us</h1>
              <Image
                src="/images/contact.jpg" // Replace with your image
                alt="About Us"
                width={1453}
                height={1134}
                className="w-1/2 absolute left-0 bottom-0"
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="pt-32 pl-20 prose prose-xl text-white prose-h4:text-white">
              <h4>ADDRESS</h4>
              <p>
                PT KARUNIA INDO ALAM
                <br />
                Plaza Asia 22nd Floor
                <br />
                Jl. Jend Sudirman Kav. 59
                <br />
                Jakarta Indonesia
              </p>
              <h4>PHONE</h4>
              <p>+62 21 5140 2322</p>
              <h4>EMAIL</h4>
              <p>inquiry@karuniaalam.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
