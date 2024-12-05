import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "About Us",
    submenu: [
      ["Brief Profile", "/about/brief-profile"],
      ["Corporate Values", "/about/corporate-values"],
    ],
  },
  {
    title: "Subsidiaries",
    link: "/subsidiaries",
    submenu: [
      ["Property", "/subsidiaries/property"],
      ["Property Management", "/subsidiaries/property-management"],
    ],
  },
  { title: "Affiliates", link: "/affiliates" },
  {
    title: "Upcoming Projects",
    submenu: [
      ["4 Stars Hotel Ballroom", "/projects/4-stars-hotel-ballroom"],
      [
        "4 Stars Hotel Lobby & Facilities",
        "/projects/4-stars-hotel-lobby-facilities",
      ],
      ["3 Stars Hotel Project", "/projects/3-stars-hotel-project"],
    ],
  },
  { title: "Contact Us", link: "/contact" },
];

const linkClassName =
  "flex px-4 py-3 text-nowrap hover:bg-transparent active:!bg-transparent active:!text-black";
const subLinkClassName = "flex px-4 py-2 text-base leading-tight";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8">
      <div className="bg-white">
        <div className="container mx-auto">
          <nav className="navbar bg-base-100 pl-10 pr-4 py-0 min-h-min">
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
            <div className="flex flex-1 justify-end">
              <ul className="flex px-1 py-0 text-base gap-x-2">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    {item.submenu ? ( // Check if submenu exists
                      <div className="dropdown dropdown-hover">
                        {item.link ? ( // Check if top-level link exists
                          <Link
                            tabIndex={0}
                            href={item.link}
                            className={linkClassName}
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <div
                            tabIndex={0}
                            role="button"
                            className={linkClassName}
                          >
                            {item.title}
                          </div> // No top-level link, just display the title
                        )}
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow"
                        >
                          {item.submenu.map(([text, link]) => (
                            <li key={link}>
                              <Link href={link} className={subLinkClassName}>
                                {text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      // No submenu
                      <Link href={item.link} className={linkClassName}>
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
