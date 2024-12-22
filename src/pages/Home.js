import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const Cards = [
    { id: 1, title: "神秘女人", img: `${process.env.PUBLIC_URL}/images/home/剪影1.png` },
    { id: 2, title: "正义警察", img: `${process.env.PUBLIC_URL}/images/home/剪影2.png` },
    { id: 3, title: "刷爆黑卡", img: `${process.env.PUBLIC_URL}/images/home/剪影3.png` },
    { id: 4, title: "美妆代购", img: `${process.env.PUBLIC_URL}/images/home/剪影4.png` },
  ];

  const videos = [
    { id: 1, title: "“诈”往“诈”来", img: `${process.env.PUBLIC_URL}/images/videos/视频1.jpg`, link: `${process.env.PUBLIC_URL}/videos/视频1.mp4` },
    { id: 2, title: "屏幕彼岸", img: `${process.env.PUBLIC_URL}/images/videos/视频2.jpg`, link: `${process.env.PUBLIC_URL}/videos/视频2.mp4` },
    { id: 3, title: "魔镜啊魔镜", img: `${process.env.PUBLIC_URL}/images/videos/视频3.jpg`, link: `${process.env.PUBLIC_URL}/videos/视频3.mp4` },
    { id: 4, title: "重生之我再也不卷了", img: `${process.env.PUBLIC_URL}/images/videos/视频4.jpg`, link: `${process.env.PUBLIC_URL}/videos/视频4.mp4` },
  ];

  return (
    <div>
      {/* 上方“匿名的朋友”部分 */}
      <section className="relative h-[1080px] overflow-hidden pt-24 border-b-2 border-gray-300 py-8">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* 背景图片容器 */}
          <div
            className="absolute inset-0 bg-center bg-no-repeat mx-auto bg-gray-50"
            style={{
              backgroundImage: `url('${process.env.PUBLIC_URL}/images/home/首页首图.png')`,
              backgroundSize: "auto 100%",
            }}
          ></div>
        </div>
      </section>

      {/* 中间“他们是谁”部分 */}
      <section className="py-12 bg-gray-50 border-b-2 border-gray-300">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* 栏目标题 */}
          <div className="relative text-center mb-6">
            <h2 className="text-3xl font-bold">他们是谁？</h2>
            <span className="absolute inset-0 top-6 left-0 text-gray-400 text-lg uppercase opacity-30 pointer-events-none">
              Who Are They
            </span>
          </div>

          {/* 卡片区域 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {Cards.map((card) => (
                <Link to="/who" key={card.id} className="block">
                  <div
                    key={card.id}
                    className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-3/4 rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

      {/* 新增“匿名探问”部分 */}
      <section className="py-12 bg-gray-50 border-b-2 border-gray-300">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* 栏目标题 */}
          <div className="relative text-center mb-6">
            <h2 className="text-3xl font-bold">匿名探问</h2>
            <span className="absolute inset-0 top-6 left-0 text-gray-400 text-lg uppercase opacity-30 pointer-events-none">
              Anonymous Inquiry
            </span>
          </div>

          {/* 第一张卡片 */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <Link to="/anonymous" className="block">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/匿名探问左侧图.png`}
                alt="探问图片1"
                className="w-48 h-auto rounded-lg"
              />
            </Link>
            <p className="text-gray-700 text-lg flex-1 border-l-2 pl-2 pr-2 border-gray-300">
              该不该借钱给她？
            </p>
          </div>

          {/* 第二张卡片 */}
          <div className="flex flex-col sm:flex-row-reverse items-center gap-6 border border-gray-300 p-4 rounded-lg shadow-md bg-white">
            <Link to="/anonymous" className="block">
              <img
                src={`${process.env.PUBLIC_URL}/images/home/匿名探问右侧图.png`}
                alt="探问图片2"
                className="w-48 h-auto rounded-lg"
              />
            </Link>
            <p className="text-gray-700 text-lg flex-1 border-r-2 pr-2 pl-2 border-gray-300">
              我在交友网站认识了一个人，我们聊得很好，而且都觉得彼此是对方共度余生的人，我们越来越走进彼此的内心，她每天都会陪我聊到很晚，有天她说她父母重病要借一大笔钱，我好纠结，我都没见过她父母，该怎么办？
            </p>
          </div>
        </div>
      </section>

      {/* 新增“法眼洞察”部分 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* 栏目标题 */}
          <div className="relative text-center mb-6">
            <h2 className="text-3xl font-bold">法眼洞察</h2>
            <span className="absolute inset-0 top-6 left-0 text-gray-400 text-lg uppercase opacity-30 pointer-events-none">
              Insight
            </span>
            <h2 className="text-lg pt-4">
              来源：
              <span className="text-blue-600 hover:underline cursor-pointer">
                @尔虞我诈诈诈
              </span>
            </h2>
          </div>

          {/* 视频布局 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
            {videos.map((video) => (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold">{video.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
