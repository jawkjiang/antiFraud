import React, { useState } from "react";

function Who() {
  // 定义卡片数据
  const Cards = [
    { id: 1, title: "神秘女人", img: "/images/home/剪影1.png" },
    { id: 2, title: "正义警察", img: "/images/home/剪影2.png" },
    { id: 3, title: "刷爆黑卡", img: "/images/home/剪影3.png" },
    { id: 4, title: "美妆代购", img: "/images/home/剪影4.png" },
  ];

  // 定义分页数据
  const pages = [
    {
      img: "/images/who/第一个选择题左边的美女图.png",
      text: "你是一个平平无奇的大学生，日复一日重复着单调的生活。突然有一天，你收到了一条微信好友申请。对方自称是你的高中同学，你怀着好奇的心点开她的朋友圈主页，惊奇地发现竟是一位阳关开朗的漂亮女孩，名叫X。",
      options: ["A. 怀着窃喜的心情立刻通过好友申请", "B. 淡定地回复她，你认错人了", "C. 果断拒绝申请，当作没看到"],
    },
    {
      img: "images/who/第二个选择题右边的热恋图.png",
      text: "和X相谈几周，她向你袒露了更多的个人信息，谈到了自己的家庭和生活。渐渐地你被x的热情真诚所打动，她开始走进你的心房。你迷恋上和她聊天的感觉。突然有一天，她向你哭诉最近生活的困难并开口向你借800元渡过困难。",
      options: ["A. 你决定相信X，迅速打款800元", "B. 热心安慰，但拒绝了X的借款申请", "C. 疑心骤起，停止与X的聊天"],
    },
    {
      img: "images/who/最后一个选择题左边被诈骗图片.png",
      text: "给x打款后，发现她的聊天态度由热情极速转向冷淡。你的心中涌起了焦虑与委屈的情绪，向她发消息询问原因，回应你的却只有沉默。三天后，当你再一次鼓起勇气向x发消息时，一个红色感叹号出现了。",
      options: ["A.破口大骂，陷入失恋的痛苦", "B.发现不对劲，向辅导员求助", "C.怕丢了面子，一个人默默承受后果"],
    },
    {
      img: "",
      text: "线上“恋人”未见面，拉你转账是诈骗。",
      options: ["明白了"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(0); // 当前页索引
  const [firstOptionCount, setFirstOptionCount] = useState(0); // 连续选择第一个选项的次数
  const [selectedOption, setSelectedOption] = useState(""); // 当前选中选项

  // 处理选项选择
  const handleOptionSelect = (option, index) => {
    setSelectedOption(option); // 设置选中的选项

    if (index === 0) {
      setFirstOptionCount((prev) => prev + 1); // 增加第一个选项的计数
    } else {
      setFirstOptionCount(0); // 选择非第一个选项时重置计数
    }

    // 自动跳转到下一页
    if (currentPage < pages.length - 1) {
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setSelectedOption(""); // 清空选项
      }, 500); // 延迟跳转，给予用户反馈时间
    }
  };

  return (
    <div>
      {/* 顶部四张卡片 */}
      <section className="py-12 bg-gray-50 border-b border-gray-300">
        <div className="max-w-screen-2xl mx-auto px-4 pt-12">
          <h2 className="text-3xl font-bold text-center mb-6">他们是谁？</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Cards.map((card) => (
              <div
                key={card.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-3/4 rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 横向布局 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto px-4">
          {currentPage === 3 && firstOptionCount >= 3 ? (
            // 新布局：只显示文字
            <div className="text-center">
              <p className="text-gray-900 text-2xl font-bold">
                {pages[currentPage].text}
              </p>
            </div>
          ) : (
            // 默认横向布局
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* 左侧图片 */}
              <img
                src={pages[currentPage].img}
                alt={`问题 ${currentPage + 1}`}
                className="w-full sm:w-1/4 rounded-lg shadow-md"
              />

              {/* 右侧内容 */}
              <div className="flex-1 flex flex-col gap-6">
                {/* 问题文本 */}
                <p className="text-gray-700 text-lg">
                  {pages[currentPage].text}
                </p>

                {/* 单项选择题 */}
                <form className="flex flex-col gap-4">
                  {pages[currentPage].options.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <input
                        type="radio"
                        name="question"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionSelect(option, index)}
                        className="w-5 h-5 accent-blue-500"
                      />
                      {option}
                    </label>
                  ))}
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Who;