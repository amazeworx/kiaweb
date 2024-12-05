import Image from "next/image";
import Header from "../../../components/Header"; // Import the header component

export default function CorporateValuesPage() {
  return (
    <main className="min-h-screen relative pt-[80px] bg-[#38373f]">
      <Header />
      <div className="container mx-auto">
        <div className="p-10 text-white relative">
          <h1 className="text-[64px] leading-[1.1]">Corporate Values</h1>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="flex">
            <div className="w-1/2">
              <div className="p-6 prose prose-xl text-white prose-h4:text-white prose-h4:text-2xl prose-h4:mb-10">
                <h4>Vision</h4>
                <p>
                  We focus on the market and cater only the best to our
                  customers.
                </p>
                <p>Yield predictable earnings for our shareholders.</p>
                <p>
                  And provides a dynamic and inspiring environment for our
                  employees.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="p-6 prose prose-xl text-white prose-h4:text-white prose-h4:text-2xl prose-h4:mb-10">
                <h4>Mission</h4>
                <p>To be the leader in various industries we operate in</p>
                <p>
                  Creating an integrated supply chain solution by incorporating
                  efficient yet environmentally friendly investment
                </p>
                <p>
                  And provide the best quality commodities with reliable
                  logistics services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
