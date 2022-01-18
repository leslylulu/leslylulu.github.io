import { Row, Col } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
// import { sister, empty, pp1, move, camera, music } from "../../../assets/pic/home/index";
import { sister, empty } from "../../../assets/pic/home/index";

import "./index.less";

const AnnualSummary = () => {
  let navigate = useNavigate();

  const backToPrevious = () => {
    navigate("/home");
  };

  const backToIndex = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <div className="previous" onClick={backToPrevious}>
        <LeftCircleOutlined />
        <span>上一页</span>
      </div>
      <div className="previous" onClick={backToIndex}>
        <LeftCircleOutlined />
        <span>回到首页</span>
      </div>
      <div className="summary">
        <p className="summary-title">
          <div className="summary-title-text">2021年度总结 📋</div>
        </p>
        <div className="summary-article">
          <Row gutter={10}>
            <Col span={16}>
              <p>
                2021年在我印象中最深刻的就是我在东莞出差，吃不好、睡不好、混吃等死的状态，
                倒不是外界因素直接导致的，但是多多少少会有点。总之这段时间过的非常糟糕，80%的不开心源自于我的产品经理，
              </p>
              <p>
                不自律更容易导致焦虑，这样的恶性循环一遍又一遍，然后增加内耗，时间久了就会非常的压抑和不幸福，甚至会产生一点罪恶感
              </p>
              <p>不管怎么说，2021还是有很多看得到希望的一年</p>
            </Col>
            <Col span={8}>
              <div className="summary-logo">2021</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={sister} alt="姐妹" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-03-13
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                姐妹出街
              </div>
              <div>初中开始玩的好姐妹在南京聚一 聚</div>
              <div>
                老周最近想在南京定居，可是我觉得杭州和南京差距不是很大，而且机会没有杭州多
              </div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-03-21
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                接胖胖回家
              </div>
              <div>
                初衷：为了建军在家不那么孤单，因为我们每天早出晚归的，一出去就是一天，虽然说猫咪不需要长时间陪伴，但是我觉得猫咪还是需要人陪的。
              </div>
              <div>想了很久都没有想到一个合适的名字，于是频繁的叫 “ 胖胖 ”</div>
              <div>
                小名就叫 “ 胖胖 ”了, 之所以叫这个名字是因为胖胖看起来圆滚滚的🐽
              </div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="搬家" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-04-04
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                我们搬家了
              </div>
              <div>我们搬家了，预算：4000/月，实际租到了3300/月的房子</div>
              <div>房子在7楼，没有电梯，不叫搬家公司真的搬不上去</div>
              <div>
                后面就开始后悔了，房子老还破旧，家具损耗已经比较严重了，但是为了每个月比预期少700块钱一直在将就，打算房子到期就准备换了
              </div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-04-06
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                第一次坐飞机， 也是第一次出差
              </div>
              <div>
                没有坐飞机之前觉得能坐一次飞机很厉害，说明你的出行的价值大于这张机票
              </div>
              <div>最后，为了见一面家人，男朋友，咬咬牙买机票</div>
              <div>
                以前没有出差过，觉得出差不会很可怕吧，我一定比别人强，可事实就是我很想回到那个生活饮食休闲娱乐一应俱全的家🙇‍♀️
              </div>
              <div>
                回头看过来，这一次出差给我年收入额外增加4.8w(补贴 + 奖金),
                实际能存下来的大概只有一半
              </div>
              <div>有了这次体验之后，我可能以后都不会再出差了。</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-05-02
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                建军生病了
              </div>
              <div>
                呼吸道感染，打喷嚏，鼻涕眼泪一起流，黄黄的，精神也不好，呆在床底下睡觉
              </div>
              <div>五一的时候就是来回跑给建军看病，抽血，吃药，滴眼液</div>
              <div>
                花了2000左右，但是这个钱能把建军的病治好，一点都不会含糊
              </div>
              <div>
                孩子生病了只能眼看着心疼，以后会更加注意家里的卫生，现在我们外出骑车回来都会用洗手液好好洗手再去摸儿子
              </div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="camera" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-05-20
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                拍立得
              </div>
              <div>虽然嘴上说着不要，但是收到还是蛮开心的</div>
              <div>后来和姐妹一起拍，加上仙女棒拍夜景才会更好看</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="music" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-06-12
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                音乐会
              </div>
              <div>第一次和老周一起听音乐会，听得是他喜欢的歌手</div>
              <div>穿情侣装，去好吃的餐厅，做什么事情都会陪着我</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-06-17
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                老周生日
              </div>
              <div>
                我不知道该送些啥，我就用拾柒app写了本书，但是结果不尽如人意
              </div>
              <div>
                我以为我的文字很强大，可是实际上我的文字很鸡肋，同时写了一个悲剧
              </div>
              <div>下次还是精心选礼物吧</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-07-04
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                东莞出差
              </div>
              <div>其实只是换了一个地方出差，需要重买生活用品，买的都是必需品</div>
              <div>对于一些 提升幸福感没用的东西就是舍不得买，因为买了也带不走</div>
              <div>本以为出差能瘦一些，但是只是我以为，饿了还是会想方设法去觅食</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-07-04
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                东莞出差
              </div>
              <div>其实只是换了一个地方出差，需要重买生活用品，买的都是必需品</div>
              <div>对于一些 提升幸福感没用的东西就是舍不得买，因为买了也带不走</div>
              <div>本以为出差能瘦一些，但是只是我以为，饿了还是会想方设法去觅食</div>
              <div>我开始自己烫头，眼会手不会，烫完之后，完全就是大后悔，啥也不是</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-07-23
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                我回家了
              </div>
              <div>我回的是安徽淮北，是我的家乡，是我从小长大的地方</div>
              <div>在家的这几天就和我爸妈还有我姐呆在一起，上班之后，只要和家人呆在一起就是很开心的</div>
              <div>在家就是研究吃啥，玩啥，穿啥，根本不会有工作的烦恼困扰我</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-09-03
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                杭州
              </div>
              <div>又一次回杭州了，项目接近尾声，所以的大部分时间是在杭州度过的</div>
              <div>我的相册里多了儿子们和老周的照片</div>
              <div>9月在我生日的时候收到了老周送的iwatch，我很开心，但是对于合上圆环我依然是没有动力🤦‍♀️，对于我来说只是一个装饰品，和纯纯的看时间而已</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-09-03
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                杭州
              </div>
              <div>又一次回杭州了，项目接近尾声，所以的大部分时间是在杭州度过的</div>
              <div>我的相册里多了儿子们和老周的照片</div>
              <div>9月在我生日的时候收到了老周送的iwatch，我很开心，但是对于合上圆环我依然是没有动力🤦‍♀️，对于我来说只是一个装饰品，和纯纯的看时间而已</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-10-04
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                大学室友结婚了
              </div>
              <div>这是我们寝室第一个结婚的</div>
              <div>第一次见老芮，一眼就看出老芮是个逗比</div>
              <div>这是我第一次当伴娘，我是寝室最矮的，我买了双很难穿的恨天高，五分钟就走不动路了</div>
              <div>后悔买了这双鞋，后面也二手出不去</div>
              <div>但是结婚的这一天，前前后后真的还挺累，早上6点到晚上10点多，很难撑住了，一直对外social，最后就是累到不想说话</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className="summary-pic">
                <img src={empty} alt="胖胖" />
              </div>
            </Col>
            <Col span={10} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: "bold", fontFamily: "math" }}>
                2021-10-22
              </div>
              <div style={{ fontWeight: "bold", fontFamily: "SimHei" }}>
                老周公司篮球赛
              </div>
              <div>为了这次打篮球终于穿上了心心念念的乔丹</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default AnnualSummary;
