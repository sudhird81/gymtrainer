import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSearch } from "react-icons/md";
import Dropdown from "../../UI/Dropdown";

const Navbar = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="p-4 bg-[#5c3eb8] flex items-center justify-between">
      <div className="text-white font-bold capitalize">
        <div className="flex gap-x-4 items-center">
          <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {pathSegments.slice(1).map((segment, index) => (
                <li key={index}>
                  <div className="flex items-center">
                    <Link
                      href={"/" + pathSegments.slice(0, index + 2).join("/")}
                      className="flex items-center text-white hover:text-black"
                    >
                      <span className="text-sm font-medium">{segment}/</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-20">
        <div className="flex items-center gap-4 bg-white px-3 py-2 rounded-sm">
          <MdSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-black focus:outline-none"
          />
        </div>
        <div className="flex gap-3">
          {/* <MdOutlineChat size={20} className="text-white" />
        <MdNotifications size={20} className="text-white" />
        <MdPublic size={20} className="text-white" /> */}
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
