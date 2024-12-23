import React from "react";

function Archive() {
  const columnData = [
    {
      id: 1,
      title: "神“稳赚不赔”的投资，结果赔了全家当初的积蓄",
      description:
        "我一直在网上寻找能赚点外快的机会，偶然在一个微信群里看到有人分享了一个“稳赚不赔”的投资平台。群主看起来很专业，分享了很多所谓的成功案例，甚至有“高大上”的数据和分析图。为了验证平台的可靠性，我私信了几个已经投资的人，他们都说赚了不少钱，鼓励我也试试。我心动了，便转了几千块钱过去。刚开始，平台上的数据和回报确实看起来很诱人，几天后，我的账户显示有了增长。我开始加大投入，甚至借了一些钱投入其中。可就在我准备提现的时候，平台突然出现“技术问题”，客服回复我说要等待一段时间。再后来，我再也联系不上客服，平台也消失了。我才意识到自己已经被骗了，辛辛苦苦的积蓄几乎全都打了水漂。",
    },
    {
      id: 2,
      title: "我爱上了“她”，结果只爱上了一个骗子",
      description:
        "我在某个交友网站上认识了一个女孩，叫琳琳。她说自己在国外工作，因为工作忙，没有时间交朋友，所以来这个网站试试看。我们每天聊得很开心，她时常发一些看起来很真实的照片，分享她的生活和心情。我逐渐对她产生了感情，虽然我们从未见过面，但我已经相信她是真心的。有一天，她说自己生病了，需要做手术，但由于没有保险，需要一些钱。她说只是暂时的借款，等手术后她会还我。为了帮助她，我把存款里的大部分钱都汇给了她，甚至还向朋友借了一些。过了几天，我试图联系她，却始终得不到回应。最后，她的账户也被封了，我才意识到自己掉进了一个精心设计的陷阱。",
    },
    {
      id: 3,
      title: "高薪工作背后，竟是一个精心编织的骗局",
      description:
        "那天，我在招聘网站上看到了一则非常吸引人的职位，薪资待遇极好，而且职位要求看似很适合我。我投了简历，不久后收到了一个招聘公司的电话，面试很顺利，招聘经理告诉我，公司决定聘用我，并要求我支付一定的“培训费”才能正式入职。我当时有些犹豫，但考虑到薪资诱人，我最终还是转了钱过去。然后我接到一个“人力资源部”的电话，说是我已经通过了所有的审核，培训费不算高，继续支付就可以开始工作了。然而，等我再次联系他们时，电话和邮件全都无法接通。网站也消失了，所谓的公司也不复存在。我终于明白自己被骗了，钱和机会都一去不复返。",
    },
    {
      id: 4,
      title: "“免费试用”的化妆品，最后让我负债累累",
      description:
        "我在社交媒体上看到一则广告，宣传一款效果神奇的护肤品，声称“首次注册即可免费试用”。我一直对护肤有些兴趣，看到这么好的机会，立马点开了链接。网站上的产品图片很精美，还有很多好评，配文写着“只需支付少量运费，送你价值几百的护肤套装”。我心想这么便宜，值得一试，于是填写了个人信息并支付了几块钱的运费。没想到几天后，我收到了包裹，不仅仅是一个试用装，竟然是整整一套昂贵的护肤品！我还没来得及拆开使用，银行就开始扣款了。原来“免费试用”只是一种诱饵，接下来每个月会自动扣款。更可怕的是，这些商品的价格比市场价高出很多。几个月后，我的信用卡账单高得离谱，我才发现这家网站早就设下了陷阱，根本没想给我退货或者退款。我愣是没能还清这笔账，陷入了巨大的经济困境。",
    },
    {
      id: 5,
      title: "“你的包裹被扣留了”，我被“物流公司”骗了几千块",
      description:
        "那天，手机突然收到一条短信：“您的包裹被海关扣留，请尽快支付清关费用以便提货。”我心里一紧，最近确实网购了几个东西，想着可能是其中一个被海关查验了。短信里还附上了客服电话，我便拨打过去。电话接通后，那头的工作人员很有耐心，告诉我包裹涉及到跨境交易，必须缴纳一笔“清关费用”。他还说如果不支付，包裹将被退回或销毁。考虑到我已经等了很久的商品，我没有多想，按照他们的要求转账了几千块钱。但几天后，我一直没有收到包裹，打电话过去问时，对方已经不接了。再一查，发现那个所谓的“物流公司”是个假冒的骗局。我才意识到自己不仅没收到包裹，还被骗走了这笔钱。",
    },
    {
      id: 6,
      title: "“我中了大奖”，结果被假冒客服骗走了奖品",
      description:
        "一天，我正在刷朋友圈，突然看到一个推送：“恭喜您成为我们的幸运用户，中奖了！立即联系客服领取奖励！”消息来源看起来很正规，还有公司的logo和宣传链接。我点开链接后，发现自己真的“中奖”了——奖品是价值数千元的电子产品。兴奋之余，我立刻按照页面上的提示添加了客服联系，客服告诉我需要支付一些“邮费”和“保险费”才能领取奖品。听起来很合理，我毫不犹豫地转账了几百元。过了几天，奖品依然没有收到，客服却以各种理由推脱，不停要求我再支付其他费用。最终，我发现对方的号码已经无法接通，网站也消失得无影无踪。我这才明白，所谓的“大奖”根本是个精心设计的骗局，而我成了其中的一个受害者。",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 pt-24">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        骗局档案
      </h1>

      {/* 文本框 */}
      <div className="relative bg-white rounded-lg shadow-md p-4 mb-6 mx-auto" style={{ maxWidth: "800px" }}>
          {/* 默认文本 */}
          <textarea
            placeholder="说说你的故事吧！"
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

      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-2 gap-8 pt-12">
        {/* 左侧列 */}
        <div className="flex flex-col gap-8 border-r-2 border-gray-300 pr-4">
          {columnData
            .filter((_, index) => index % 2 === 0) // 偶数索引分配到左列
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
        </div>

        {/* 右侧列 */}
        <div className="flex flex-col gap-8 pt-16 pl-2">
          {columnData
            .filter((_, index) => index % 2 !== 0) // 奇数索引分配到右列
            .map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;