import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LuBadgeDollarSign, LuLayoutDashboard, LuNotepadText, LuStickyNote } from "react-icons/lu";
import { BadgePercent, Bell, ChevronDown, ChevronsLeft, ChevronsRight, Link2 } from "lucide-react";
import { IoMdSettings } from "react-icons/io";
import { FiUsers } from "react-icons/fi";

import { AiOutlineAudit } from "react-icons/ai";
import { useGetLoggedUserQuery } from "../../redux/features/baseApi";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const {data:loggedUser} = useGetLoggedUserQuery();
  console.log(loggedUser)
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      items: [
        { name: "Dashboard", icon: <LuLayoutDashboard size={20} />, path: "/admin/admin_home" },
        { name: "User Management", icon: <FiUsers  size={20} />, path: "/admin/users" },
        { name: "Form View", icon: <LuNotepadText  size={20} />, path: "/admin/forms" },
        { name: "Payment", icon: <LuBadgeDollarSign   size={20} />, path: "/admin/payment" },
        { name: "Document", icon: <LuStickyNote     size={20} />, path: "/admin/document" },
        { name: "Submission", icon: <AiOutlineAudit   size={20} />, path: "/admin/submission" },

        { 
          name: "Settings",
          icon: <IoMdSettings size={20} />, 
          path: "/admin/settings",
          submenu: true,
          children: [
            {
              name: "Privacy Policy",
              icon: null,
              path: "/admin/settings/privacy_policy",
            },
            {
              name: "Terms & Conditions",
              icon: null,
              path: "/admin/settings/terms_conditions",
            },
          ]
        },
      ],
    },
  ];


  const handleLogOut = () =>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    navigate("/login")
  }
  useEffect(() => {
    // Check both main items and submenu items for current route
    const allItems = menuItems[0].items;
    let currentItem = allItems.find(item => item.path === location.pathname);
    
    if (!currentItem) {
      allItems.forEach(item => {
        if (item.submenu && item.children) {
          const submenuItem = item.children.find(child => child.path === location.pathname);
          if (submenuItem) {
            currentItem = submenuItem;
          }
        }
      });
    }

    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleItemClick = (itemName, path) => {
    setSelectedItem(itemName);
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-76"
        } bg-[#0A3161] border-r border-gray-200 transition-all duration-500 ease-in-out`}
      >
        <div className="h-16 pt-20 flex items-center justify-center px-4 ">
          <div className="flex items-center justify-center gap-2">
            <Link 
            to="/"
              className={`transform transition-all duration-500 ${
                isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
              }`}
            >
              <img src="https://i.ibb.co.com/RZzJHnG/Group-2147225243.png"  alt="Logo" className="h-[130px] w-[120px] " />
            </Link>
          </div>
        </div>

  
     <nav className="p-4 md:mt-20 pt-10">
  {menuItems.map((section, idx) => (
    <div key={idx} className="mb-8">
      <ul className="space-y-2">
        {section.items.map((item, itemIdx) => (
          <li key={itemIdx} className="w-full">
            {item.submenu ? (
              <div className="dropdown">
                <div tabIndex={0} role="button">
                  <div
                    className={`flex items-center w-[260px] gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 group relative transition-all duration-300 ${
                      selectedItem === item.name ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    <span
                      className={`group-hover:text-gray-700 transition-colors duration-300 ${
                        selectedItem === item.name ? "text-[#0A3161]" : "text-white"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`transform transition-all duration-500 ${
                        isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                      } whitespace-nowrap group-hover:text-gray-700 ${
                        selectedItem === item.name ? "text-[#0A3161]" : "text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </div>
                {!isCollapsed && (
                  <ul tabIndex={0} className="dropdown-content ms-5 menu p-2 shadow bg-base-100 rounded-box w-[210px] mt-1 z-50">
                    {item.children.map((child, childIdx) => (
                      <li key={childIdx}>
                        <Link
                          to={child.path}
                          onClick={() => handleItemClick(child.name, child.path)}
                          className={`flex items-center gap-2 px-3 py-2 my-1 transition-all duration-300 ${
                            location.pathname === child.path 
                              ? "bg-gray-200 text-[#0A3161] font-semibold" 
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {child.icon}
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={() => handleItemClick(item.name, item.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 group relative transition-all duration-300 ${
                  selectedItem === item.name ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                <span
                  className={`group-hover:text-gray-700 transition-colors duration-300 ${
                    selectedItem === item.name ? "text-[#0A3161]" : "text-white"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`transform transition-all duration-500 ${
                    isCollapsed ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
                  } whitespace-nowrap group-hover:text-gray-700 ${
                    selectedItem === item.name ? "text-[#0A3161]" : "text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  ))}
</nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-300"
              >
                {isCollapsed ? <ChevronsRight size={20} /> : <ChevronsLeft size={20} />}
              </button>
              <div className="flex flex-col">
                <span className="text-gray-700 font-bold text-xl">{selectedItem}</span>
                <h1>
                  Hi, Welcome <span className="text-[#B28D28] font-bold">{loggedUser?.name}</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4 me-10">
              {/* <Link to="/admin/notification">
              <button className="p-2 bg-[#FAE08C1A] hover:bg-[#f8de91] border-2 border-[#B28D2833] rounded-full transition-colors duration-300">
                <Bell size={24} className="text-[#B28D28]" />
              </button>
              </Link> */}
              <div className="flex items-center justify-center gap-2">
                <div className="w-12">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="rounded-full"
                    alt="Admin Avatar"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-[14px]">{loggedUser?.name}</h2>
                  <p className="text-gray-900 text-[13px]">{loggedUser?.email}</p>
                </div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button">
                    <ChevronDown size={20} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content mt-4 menu bg-base-200 rounded-box z-50 w-32 p-2 shadow-md border border-gray-400"
                  >
                    <li>
                      <Link to="/admin/profile" className="text-gray-700 hover:text-gray-900">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                       onClick={handleLogOut}
                       className="text-gray-700 hover:text-gray-900">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}