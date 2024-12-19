import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Navbar /> {/* 全局导航栏 */}
      <main className="min-h-screen">
        <Outlet /> {/* 渲染当前页面 */}
      </main>
      <Footer /> {/* 全局页尾 */}
    </div>
  );
}

export default Layout;
