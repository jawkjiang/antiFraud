import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // 引入搜索图标

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="ccontainer mx-auto flex justify-between items-center px-4 py-3">
        {/* 导航按钮 */}
        <ul className="flex space-x-4">
          {[
            { name: "首页", path: "/" },
            { name: "他们是谁", path: "/who" },
            { name: "骗局档案", path: "/archive" },
            { name: "匿名探问", path: "/anonymous" },
            { name: "我的", path: "/mine" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-4 py-2 rounded ${
                  location.pathname === item.path
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 搜索框 */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="搜索......"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="p-2 rounded bg-gray-800 text-white">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
