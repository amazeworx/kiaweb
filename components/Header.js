import Image from "next/image";
import Link from "next/link"; // Import Link for better SEO

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8">
      <div className="bg-white">
        <div className="container mx-auto">
          <nav className="navbar bg-base-100 pl-10 pr-4">
            <div className="flex-1">
              <Link href="/">
                <Image
                  src="/images/logo-kia.png"
                  alt="PT Karunia Indo Alam"
                  width={402}
                  height={54}
                  className="h-[28px] w-auto"
                />
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 py-0 text-base">
                <li>
                  <Link
                    href="/about"
                    className="hover:bg-transparent active:!bg-transparent active:!text-black"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/subsidiaries"
                    className="hover:bg-transparent active:!bg-transparent active:!text-black"
                  >
                    Subsidiaries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliates"
                    className="hover:bg-transparent active:!bg-transparent active:!text-black"
                  >
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:bg-transparent active:!bg-transparent active:!text-black"
                  >
                    Upcoming Projects
                  </Link>
                </li>
                {/* {[
                  {
                    title: "Subsidiaries",
                    links: ["/subsidiary1", "/subsidiary2"],
                  },
                  {
                    title: "Affiliates",
                    links: ["/affiliate1", "/affiliate2"],
                  },
                  {
                    title: "Upcoming Projects",
                    links: ["/project1", "/project2"],
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <details>
                      <summary className="hover:bg-transparent active:!bg-transparent active:!text-black">
                        {item.title}
                      </summary>
                      <ul className="bg-base-100 rounded-t-none w-full p-2 !mt-0">
                        {item.links.map((link) => (
                          <li key={link}>
                            <Link
                              className="hover:bg-transparent active:!bg-transparent active:!text-black"
                              href={link}
                            >
                              {link.replace(/^\/+/, "")}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))} */}
                <li>
                  <Link
                    className="hover:bg-transparent active:!bg-transparent active:!text-black"
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
