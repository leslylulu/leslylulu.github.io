import { Row, Col } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { sister, empty } from '../../../assets/pic/home/index';
import './index.less';

const AnnualSummary = () => {
  let navigate = useNavigate();

  const backToPrevious = () => {
    navigate("/home");
  };

  const backToIndex = () => {
    navigate("/");
  };

  return (
    <div className='page'>
      <div className='previous' onClick={backToPrevious}>
        <LeftCircleOutlined />
        <span>上一页</span>
      </div>
      <div className='previous' onClick={backToIndex}>
        <LeftCircleOutlined />
        <span>回到首页</span>
      </div>
      <div className='summary'>
        <p className='summary-title'>
          <div className='summary-title-text'>2021年度总结  📋</div>
        </p>
        <div className='summary-article'>
          <Row gutter={10}>
            <Col span={16}>
              <p>2021年在我印象中最深刻的就是我在东莞出差，吃不好、睡不好、混吃等死的状态，
                倒不是外界因素直接导致的，但是多多少少会有点。总之这段时间过的非常糟糕，80%的不开心源自于我的产品经理，</p>
              <p>不自律更容易导致焦虑，这样的恶性循环一遍又一遍，然后增加内耗，时间久了就会非常的压抑和不幸福，甚至会产生一点罪恶感</p>
              <p>不管怎么说，2021还是有很多看得到希望的一年</p>
            </Col>
            <Col span={8}>
              <div className='summary-logo'>2021</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={sister} alt='姐妹' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-03-13</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>姐妹出街</div>
              <div>初中开始玩的好姐妹在南京聚一聚</div>
              <div>老周最近想在南京定居，可是我觉得杭州和南京差距不是很大，而且机会没有杭州多</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-03-21</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>接胖胖回家</div>
              <div>初衷：为了建军在家不那么孤单，因为我们每天早出晚归的，一出去就是一天，虽然说猫咪不需要长时间陪伴，但是我觉得猫咪还是需要人陪的。</div>
              <div>想了很久都没有想到一个合适的名字，于是频繁的叫 “ 胖胖 ”</div>
              <div>小名就叫 “ 胖胖 ”了, 之所以叫这个名字是因为胖胖看起来圆滚滚的🐽</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-04-04</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>我们搬家了</div>
              <div>我们搬家了，预算：4000/月，实际租到了3300/月的房子</div>
              <div>房子在7楼，没有电梯，不叫搬家公司真的搬不上去</div>
              <div>后面就开始后悔了，房子老还破旧，家具损耗已经比较严重了，但是为了每个月比预期少700块钱一直在将就，打算房子到期就准备换了</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-04-06</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>第一次坐飞机， 也是第一次出差</div>
              <div>没有坐飞机之前觉得能坐一次飞机很厉害，说明你的出行的价值大于这张机票</div>
              <div>最后，为了见一面家人，男朋友，咬咬牙买机票</div>
              <div>以前没有出差过，觉得出差不会很可怕吧，我一定比别人强，可事实就是我很想回到那个生活饮食休闲娱乐一应俱全的家🙇‍♀️</div>
              <div>回头看过来，这一次出差给我年收入额外增加4.8w(补贴 + 奖金), 实际能存下来的大概只有一半</div>
              <div>有了这次体验之后，我可能以后都不会再出差了。</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-05-02</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>建军生病了</div>
              <div>呼吸道感染，打喷嚏，鼻涕眼泪一起流，黄黄的，精神也不好，呆在床底下睡觉</div>
              <div>五一的时候就是来回跑给建军看病，抽血，吃药，滴眼液</div>
              <div>花了2000左右，但是这个钱能把建军的病治好，一点都不会含糊</div>
              <div>孩子生病了只能眼看着心疼，以后会更加注意家里的卫生，现在我们外出骑车回来都会用洗手液好好洗手再去摸儿子</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-05-20</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>拍立得</div>
              <div>虽然嘴上说着不要，但是收到还是蛮开心的</div>
              <div>后来和姐妹一起拍，加上仙女棒拍夜景才会更好看</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-06-12</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>音乐会</div>
              <div>第一次和老周一起听音乐会，听得是他喜欢的歌手</div>
              <div>穿情侣装，去好吃的餐厅，大概是所有情侣都会做的事情</div>
            </Col>
          </Row>
          <Row gutter={10} style={{ paddingTop: 20 }}>
            <Col span={8}>
              <div className='summary-pic'>
                <img src={empty} alt='胖胖' />
              </div>
            </Col>
            <Col span={16} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 'bold', fontFamily: 'math' }}>2021-06-17</div>
              <div style={{ fontWeight: 'bold', fontFamily: 'SimHei' }}>老周生日</div>
              <div>我不知道该送些啥，我就用拾柒app写了本书，但是结果不尽如人意</div>
              <div>我以为我的文字很强大，可是实际上我的文字很鸡肋，同时写了一个悲剧</div>
              <div>下次还是精心选礼物吧</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AnnualSummary;