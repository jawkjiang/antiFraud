import React from "react";

function Anonymous() {
  const leftColumnData = [
    {
      id: 1,
      img: "/images/anonymous/OIP.jpg",
      title: "这真的是正规平台吗？为什么我没在其他地方见过它？",
      description: "那天，微信收到一个自称“投资顾问”的陌生人消息。他发来一个投资平台的链接，说回报率高达40%，并附上了一些看起来真实的投资案例。我心动了，毕竟我也想增值自己的资产。我犹豫着，但看着他提供的官网链接，页面设计得很专业，想了想觉得没有问题，于是我决定试试，投资了1万元。几天过去了，我的账户没有任何变化，李建明却开始变得不那么热心了。每次联系他，回复都很慢。“这平台真的可信吗？为什么他总是说在‘处理’？”我再次试图联系平台客服，却发现电话一直没人接。最后，我发现网站打不开，李建明的微信也被拉黑。",
    },
    {
      id: 2,
      img: "/images/anonymous/OIP.jpg",
      title: "他是我认识的朋友，为什么我就没有怀疑他？",
      description: "那天，我在社交软件上认识了一个叫“张峰”的男人。他看起来成熟稳重，言谈举止温文尔雅，甚至发了一些他出差的照片。他说自己在国外工作，很孤单，希望能找一个聊得来的朋友。我对他的关心产生了好感，我们聊得越来越多。几个月后，他突然告诉我遇到了紧急情况，需要我帮忙转账几千元来解决医疗费用。。尽管内心有些犹豫，我还是决定帮助他，因为他说等事情解决后会立即还我。然而，转账后他便消失了。打电话给他，微信也拉黑了。“为什么我没有问过他其他人？为什么不曾怀疑过他突然的‘困难’？”我痛苦地想。",
    },
    {
      id: 3,
      img: "/images/anonymous/OIP.jpg",
      title: "怎么会有公司让新人先交钱呢？这不是很不合常理吗？",
      description: "我在一个招聘平台上看到了一条兼职广告，职位是“文案编辑”。工资开得非常高，还能在家工作，时间自由。“这简直是我梦寐以求的工作！”我立刻和对方联系了。他要求我支付一笔“入职培训费”，说是公司规定，所有新员工都需要先交这笔钱，但他态度非常热情，甚至说“很多员工都通过这个兼职赚到了不错的钱”。我决定试一试，把钱转了过去。之后，我不仅没收到任何培训资料，连职位也没了踪影。每次联系对方，他都说“系统出错”，这到底怎么回事？",
    },
    {
      id: 4,
      img: "/images/anonymous/OIP.jpg",
      title: "这个链接看起来很正规，应该没问题吧？",
      description: "那天，我正在电商平台上购物，突然收到一个客服消息，说我的账户出现异常，需要立即处理，否则将被冻结。客服提供了一个链接，让我登录确认身份。页面看起来跟官网一模一样，连客服的语气也显得非常专业。我没多想，就输入了个人信息和银行卡号。没过几天，我发现银行卡上的余额大幅减少，立即意识到自己上当了，但是这个过程看起来又很正常，到底哪里出错了呀？",
    },
  ];

  const rightColumnData = [
    {
      id: 1,
      img: "/images/anonymous/头像1.jpg",
      name: "阿宇说故事",
      description: "资深反诈专家，擅长电信诈骗与金融犯罪分析。",
    },
    {
      id: 2,
      img: "/images/anonymous/头像2.jpg",
      name: "小桐的探索",
      description: "专业法律顾问，为诈骗受害者提供法律援助。",
    },
    {
      id: 3,
      img: "/images/anonymous/头像3.jpg",
      name: "心灵旅行者",
      description: "社会心理学专家，分析诈骗者心理与动机。",
    },
    {
      id: 4,
      img: "/images/anonymous/头像4.jpg",
      name: "旅行咖啡馆",
      description: "医学专家，帮助分析健康类诈骗事件。",
    },
    {
      id: 5,
      img: "/images/anonymous/头像5.jpg",
      name: "生活拼图",
      description: "IT 技术专家，专注于网络诈骗与数据安全领域。",
    },
    {
      id: 6,
      img: "/images/anonymous/头像6.jpg",
      name: "创意工作坊",
      description: "资深记者，擅长揭秘大型诈骗集团内幕。",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 pt-24">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        匿名探问
      </h1>
      
      {/* 文本框 */}
      <div className="relative bg-white rounded-lg shadow-md p-4 mb-6 mx-auto" style={{ maxWidth: "800px" }}>
          {/* 默认文本 */}
          <textarea
            placeholder="提个问题吧！"
            className="w-full h-24 border border-gray-300 rounded-lg p-2 resize-none focus:outline-none"
          ></textarea>

          {/* 工具栏 */}
          <div className="absolute bottom-2 right-2 flex gap-2">
            {/* 拖拽文件 */}
            <button
              className="flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-gray-300 rounded-full"
              title="拖拽文件"
            >
              📂
            </button>
            {/* @某人 */}
            <button
              className="flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-gray-300 rounded-full"
              title="@某人"
            >
              @
            </button>

            {/* 添加tag */}
            <button
              className="flex items-center justify-center w-8 h-8 bg-gray-50 hover:bg-gray-300 rounded-full"
              title="添加tag"
            >
              #
            </button>

            {/* 发送 */}
            <button
              className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white hover:bg-blue-600 rounded-full"
              title="发送"
            >
              ➤
            </button>
          </div>
        </div>

        {/* 按钮布局 */}
        <div className="flex justify-between mt-4 max-w-lg mx-auto">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            筛选
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            最新
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            最热
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            视频
          </button>
        </div>

      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {/* 左侧列 */}
        <div className="col-span-2 flex flex-col gap-6 pr-4 border-r-2 border-gray-300">
          {leftColumnData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md flex gap-4 p-4"
            >
              {/* 左侧图片 */}
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              {/* 右侧文字 */}
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 右侧列 */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* 标题 */}
          <h2 className="text-xl font-bold text-center text-gray-800">
            咨询专区
          </h2>

          {rightColumnData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md flex gap-4 p-4"
            >
              {/* 左侧图片 */}
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              {/* 右侧文字与按钮 */}
              <div className="flex-1 flex flex-col justify-between">
                {/* 专家介绍 */}
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {/* 按钮区域 */}
                <div className="flex gap-2 mt-4">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    关注
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                    咨询
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Anonymous;
