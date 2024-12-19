import React from "react";

function Mine() {
  const likedItems = [
    { title: "这真的是正规平台吗？为什么我没在其他地方见过它？", content: "那天，微信收到一个自称“投资顾问”的陌生人消息。他发来一个投资平台的链接，说回报率高达40%，并附上了一些看起来真实的投资案例。我心动了，毕竟我也想增值自己的资产。我犹豫着，但看着他提供的官网链接，页面设计得很专业，想了想觉得没有问题，于是我决定试试，投资了1万元。几天过去了，我的账户没有任何变化，李建明却开始变得不那么热心了。每次联系他，回复都很慢。“这平台真的可信吗？为什么他总是说在‘处理’？”我再次试图联系平台客服，却发现电话一直没人接。最后，我发现网站打不开，李建明的微信也被拉黑。" },
    { title: "高薪工作背后，竟是一个精心编织的骗局", content: "那天，我在招聘网站上看到了一则非常吸引人的职位，薪资待遇极好，而且职位要求看似很适合我。我投了简历，不久后收到了一个招聘公司的电话，面试很顺利，招聘经理告诉我，公司决定聘用我，并要求我支付一定的“培训费”才能正式入职。我当时有些犹豫，但考虑到薪资诱人，我最终还是转了钱过去。然后我接到一个“人力资源部”的电话，说是我已经通过了所有的审核，培训费不算高，继续支付就可以开始工作了。然而，等我再次联系他们时，电话和邮件全都无法接通。网站也消失了，所谓的公司也不复存在。我终于明白自己被骗了，钱和机会都一去不复返。" },
    { title: "“我中了大奖”，结果被假冒客服骗走了奖品", content: "一天，我正在刷朋友圈，突然看到一个推送：“恭喜您成为我们的幸运用户，中奖了！立即联系客服领取奖励！”消息来源看起来很正规，还有公司的logo和宣传链接。我点开链接后，发现自己真的“中奖”了——奖品是价值数千元的电子产品。兴奋之余，我立刻按照页面上的提示添加了客服联系，客服告诉我需要支付一些“邮费”和“保险费”才能领取奖品。听起来很合理，我毫不犹豫地转账了几百元。过了几天，奖品依然没有收到，客服却以各种理由推脱，不停要求我再支付其他费用。最终，我发现对方的号码已经无法接通，网站也消失得无影无踪。我这才明白，所谓的“大奖”根本是个精心设计的骗局，而我成了其中的一个受害者。" },
    { title: "这个链接看起来很正规，应该没问题吧？", content: "那天，我正在电商平台上购物，突然收到一个客服消息，说我的账户出现异常，需要立即处理，否则将被冻结。客服提供了一个链接，让我登录确认身份。页面看起来跟官网一模一样，连客服的语气也显得非常专业。我没多想，就输入了个人信息和银行卡号。没过几天，我发现银行卡上的余额大幅减少，立即意识到自己上当了，但是这个过程看起来又很正常，到底哪里出错了呀？" },
  ];

  const collectedItems = [
    { title: "他是我认识的朋友，为什么我就没有怀疑他？", content: "那天，我在社交软件上认识了一个叫“张峰”的男人。他看起来成熟稳重，言谈举止温文尔雅，甚至发了一些他出差的照片。他说自己在国外工作，很孤单，希望能找一个聊得来的朋友。我对他的关心产生了好感，我们聊得越来越多。几个月后，他突然告诉我遇到了紧急情况，需要我帮忙转账几千元来解决医疗费用。。尽管内心有些犹豫，我还是决定帮助他，因为他说等事情解决后会立即还我。然而，转账后他便消失了。打电话给他，微信也拉黑了。“为什么我没有问过他其他人？为什么不曾怀疑过他突然的‘困难’？”我痛苦地想。" },
    { title: "这个链接看起来很正规，应该没问题吧？", content: "那天，我正在电商平台上购物，突然收到一个客服消息，说我的账户出现异常，需要立即处理，否则将被冻结。客服提供了一个链接，让我登录确认身份。页面看起来跟官网一模一样，连客服的语气也显得非常专业。我没多想，就输入了个人信息和银行卡号。没过几天，我发现银行卡上的余额大幅减少，立即意识到自己上当了，但是这个过程看起来又很正常，到底哪里出错了呀？" },
    { title: "高薪工作背后，竟是一个精心编织的骗局", content: "那天，我在招聘网站上看到了一则非常吸引人的职位，薪资待遇极好，而且职位要求看似很适合我。我投了简历，不久后收到了一个招聘公司的电话，面试很顺利，招聘经理告诉我，公司决定聘用我，并要求我支付一定的“培训费”才能正式入职。我当时有些犹豫，但考虑到薪资诱人，我最终还是转了钱过去。然后我接到一个“人力资源部”的电话，说是我已经通过了所有的审核，培训费不算高，继续支付就可以开始工作了。然而，等我再次联系他们时，电话和邮件全都无法接通。网站也消失了，所谓的公司也不复存在。我终于明白自己被骗了，钱和机会都一去不复返。" },
    { title: "这真的是正规平台吗？为什么我没在其他地方见过它？", content: "，并附上了一些看起来真实的投资案例。我心动了，毕竟我也想增值自己的资产。我犹豫着，但看着他提供的官网链接，页面设计得很专业，想了想觉得没有问题，于是我决定试试，投资了1万元。几天过去了，我的账户没有任何变化，李建明却开始变得不那么热心了。每次联系他，回复都很慢。“这平台真的可信吗？为什么他总是说在‘处理’？”我再次试图联系平台客服，却发现电话一直没人接。最后，我发现网站打不开，李建明的微信也被拉黑。" },
  ];

  const myQuestions = [
    { title: "如果我在社交平台上认识了一个人，他突然提到需要借钱或者请求我帮助他解决财务问题，我还想保持我的善良，怎么帮助他呢？", content: "这是我提出的第一个问题。" },
    { title: "当我收到一个“中奖通知”，要求先支付税费或手续费才能领取奖品，我该如何判断它是不是骗局？", content: "这是我提出的第二个问题。" },
  ];

  const myAnswers = [
    { title: "中奖诈骗有哪些常见的形式？", content: "中奖诈骗通常会通过“需要缴纳税费或手续费”的方式引导受害者支付费用。任何要求你提前支付费用才能领取奖品的通知，都极有可能是诈骗。" },
    { title: "网络情感诈骗是如何引人中招的？", content: "网络情感诈骗往往通过快速建立情感联系，让你感到彼此亲密，从而获得你的信任。无论对方多么真诚，都不要轻易借钱，尤其是没有见面或深入了解的人。" },
    { title: "什么是网恋诈骗？", content: "网恋诈骗往往通过建立深厚的情感联系来消除警惕，最终通过“投资机会”或“紧急财务困难”来诱导受害者借钱或投资。保持警觉，不要轻易相信没有见过面的人。" },
  ];

  const followedUsers = [
    {
      id: 1,
      img: "/images/anonymous/头像3.jpg",
      name: "心灵旅行者",
      description: "社会心理学专家，分析诈骗者心理与动机。",
    },
    {
      id: 2,
      img: "/images/anonymous/头像4.jpg",
      name: "旅行咖啡馆",
      description: "医学专家，帮助分析健康类诈骗事件。",
    },
    {
      id: 3,
      img: "/images/anonymous/头像5.jpg",
      name: "生活拼图",
      description: "IT 技术专家，专注于网络诈骗与数据安全领域。",
    },
  ];



  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-md mx-auto px-4 pt-16">
        {/* 个人名片 */}
        <div className="bg-white rounded-lg shadow-md p-4 flex gap-4 mb-8">
          {/* 左侧头像 */}
          <img
            src="/images/mine/我的头像.jpg"
            alt="个人头像"
            className="w-24 h-24 object-cover rounded-full"
          />
          {/* 右侧文本介绍 */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold pl-2">孙小鱼</h1>
            <p className="text-gray-600 mt-2 pl-2">
              心动不是理由，理智才是钥匙。
            </p>
            <div className="flex justify-between mt-4 max-w-lg mx-auto">
              <p className="text-gray-600 mt-1">
                我的关注：67
              </p>
              <p className="text-gray-600 mt-1">
                我的粉丝：29
              </p>
              <p className="text-gray-600 mt-1">
                我的收藏：187
              </p>
              <p className="text-gray-600 mt-1">
                我的问答：32
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左侧内容 */}
          <div>
            {/* 我赞过的 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">我赞过的</h2>
              <div className="flex flex-wrap gap-4">
                {likedItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-gray-800 w-72"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content.length > 50 ? (item.content.substring(0,50)+"...") : item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 我收藏的 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">我收藏的</h2>
              <div className="flex flex-wrap gap-4">
                {collectedItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-gray-800 w-72"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content.length > 50 ? (item.content.substring(0,50)+"...") : item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 我关注的 */}
            <div>
              <h2 className="text-xl font-bold mb-4">我关注的</h2>
              <div className="flex flex-wrap gap-4">
                {followedUsers.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white rounded-lg shadow-md p-4 flex gap-4 w-72"
                  >
                    {/* 左侧头像 */}
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    {/* 右侧文本 */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{user.name}</h3>
                      <p className="text-gray-600 text-sm">{user.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div>
            {/* 我的提问 */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">我的提问</h2>
              <div className="flex flex-wrap gap-4">
                {myQuestions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-gray-800 w-72"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          
                  </div>
                ))}
              </div>
            </div>

            {/* 我的回答 */}
            <div>
              <h2 className="text-xl font-bold mb-4">我的回答</h2>
              <div className="flex flex-wrap gap-4">
                {myAnswers.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-4 text-gray-800 w-72"
                  >
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content.length > 50 ? (item.content.substring(0,50)+"...") : item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mine;