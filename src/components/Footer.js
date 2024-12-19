import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  // 导航栏内容复用
  const navigationLinks = [
    { name: "首页", path: "/" },
    { name: "他们是谁", path: "/who" },
    { name: "骗局档案", path: "/archive" },
    { name: "匿名探问", path: "/anonymous" },
    { name: "我的", path: "/mine" },
  ];

  return (
    <footer className="bg-gray-100 py-8 border-t-2 border-gray-300">
      <div className="container mx-auto px-4">
        {/* Footer 上部内容 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ABOUT US */}
          <div>
            <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
            <p className="text-gray-600">
            匿名的“朋友”——你真的了解网络另一端的他吗？是一个专注于信息安全和网络反诈骗的教育平台网站，旨在帮助用户识别和防范来自网络上的匿名诈骗。通过生动的“朋友”剪影案例、骗局档案、匿名探问为用户提供全面的防骗知识及故事。
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-bold mb-4">NAVIGATION</h3>
            <div className="grid grid-cols-3 gap-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-blue-600 hover:underline text-center"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT US */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            <p className="text-gray-600">
            地址：武汉大学新闻与传播学院实验室
            </p>
            <p className="text-gray-600">
            电话：027-68752685
            </p>
            <p className="text-gray-600">
            邮箱：2371171257@qq.com
            </p>
          </div>
        </div>

        {/* Footer 下部版权信息 */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600">
          © 2024 Anonymous Friends. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
