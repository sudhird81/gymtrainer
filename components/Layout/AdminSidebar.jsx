import Image from "next/image";
import { useState } from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdSupervisedUserCircle,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Dashboard",
    list: [
      {
        title: "Dashboard",
        path: "/admind/dashboard",
        icon: <MdDashboard  size={22}  color="white" />,
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        title: "Client",
        path: "/admind/dashboard/client",
        icon: <MdSupervisedUserCircle color="white" size={22}/>,
      },
      {
        title: "Trainer",
        path: "/admind/dashboard/trainer",
        icon: <MdAccountCircle color="white" size={22} />,
      },
     
    ],
  },
  // {
  //   title: "Analytics",
  //   list: [
  //     {
  //       title: "Revenue",
  //       path: "#",
  //       icon: <MdWork />,
  //     },
  //   ],
  // },
  // {
  //   title: "User",
  //   list: [
  //     {
  //       title: "Settings",
  //       path: "#",
  //       icon: <MdOutlineSettings color="white"/>,
  //     },
  //   ],
  // },
];




const Sidebar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleSubMenu = (title) => {
    setActiveSubMenu(activeSubMenu === title ? null : title);
  };

  const renderSubMenu = (list, isActive) => {
    return (
      <ul className={`${isActive ? "block" : "hidden"}`}>
        {isActive &&
          list &&
          list?.map((item) => <MenuLink item={item} key={item.title} />)}
      </ul>
    );
  };

  return (
    <div className="sticky top-0 right-0 left-0">
      <div className="flex items-center gap-20 mb-10">
        {/* <Image
          className="rounded-full object-cover"
          src={"/noavatar.webp"}
          alt=""
          width="50"
          height="50"
        /> */}
        <div className="flex flex-col">
          <span className="text-white text-sm">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <div className="flex items-center justify-between">
              <span
                className={`text-white font-bold text-lg my-2 cursor-pointer ${activeSubMenu === cat.title ? 'text-white' : 'text-white'}`}
                onClick={() => toggleSubMenu(cat.title)}
              >
                {cat.title}
              </span>
              {cat.list.length > 0 && (
                <button
                  onClick={() => toggleSubMenu(cat.title)}
                  className="focus:outline-none"
                >
                  {activeSubMenu === cat.title ? (
                    <MdKeyboardArrowUp  color="white"/>
                  ) : (
                    <MdKeyboardArrowDown color="white"/>
                  )}
                </button>
              )}
            </div>
            {renderSubMenu(
              cat.list,
              activeSubMenu === cat.title
            )}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Sidebar;
