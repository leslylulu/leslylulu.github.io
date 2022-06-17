import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import Navigator from '../../../comp/navigator/index';
import { isMobile } from '../../../util/index';
import { computer } from '../../../assets/pic/home'
import './index.less';

const { TabPane } = Tabs;

const Weekly = () => {
  const [mode, setMode] = useState<'left' | 'right' | 'top' | 'bottom'>('left');

  useEffect(() => {
    if (isMobile()) {
      setMode('top')
    }
    console.log('isMobile === ', isMobile());
  }, []);

  const menuList = [
    {
      title: '02/7 - 02/13',
      node: <div className='node'>
        上班了🤦‍♀️
      </div>
    },
    {
      title: '02/14 - 02/20',
      node: <div className='node'>
        <p>瑞士著名心理学家卡尔·荣格说过：“人们会想尽办法，各种荒谬的办法，来避免面对自己的灵魂。”</p>
        <p>但他还说过：“只有直面灵魂的人，才会觉醒。”</p>
        <br />
        <p>最近看到很多关于面试的准备：
          <ul>
            <li>
              <a target='_blank' href='https://www.freecodecamp.org/news/why-i-studied-full-time-for-8-months-for-a-google-interview-cc662ce9bb13' rel="noreferrer">为什么我为谷歌面试全日制学习了 8 个月</a>
            </li>
          </ul>
        </p>
        <p>无意中得知同事最近学到凌晨3:00，突然觉得我努力的还不够，不然怎么在一群面试的人中脱颖而出。</p>
        <p>甩几个最近访问的链接吧</p>
        <p>
          <a target='_blank' href='https://vue3js.cn/interview/' rel="noreferrer">web前端面试 - 面试官系列</a>
        </p>
        <p>
          <a target='_blank' href='https://www.yuque.com/cuggz/interview/lph6i8' rel="noreferrer">前端面试题之性能优化篇</a>
        </p>
        <p>
          <a target='_blank' href='https://zhuanlan.zhihu.com/p/258068663' rel="noreferrer">32个手撕JS，彻底摆脱初级前端</a>
        </p>
        <p>
          <a target='_blank' href='https://febook.hzfe.org/awesome-interview/' rel="noreferrer">剑指前端 Offer</a>
        </p>
      </div>
    },
    {
      title: '02/21 - 02/27',
      node: <div className='node'>
        <p>这周有许多的面试</p>
        <p>身边四个同事提了离职</p>
      </div>
    },
    {
      title: '...',
      node: <div className='node'>
        鸽鸽鸽鸽鸽
      </div>
    },
    {
      title: '03/21 - 03/27',
      node: <div className='node'>
        <p>最近脑子里想了很多事情，面对了很多事情，也解决了很多事情，对自己认识也逐渐清晰</p>
        <strong className='title' >工作</strong>
        <p>关于影响我最直接的事情就是，现在同事拿到和我下家同一家的offer，但是却比我高了2k，自己心里却一直愤愤不平，可是事实是：别人的本事得来的</p>
        <p>晚上翻来覆去睡不着，告诉自己一定要和自己和解💆‍♀️，为什么要和解而不是继续纠结呢？</p>
        <p>因为他可以学习学到凌晨3-5点，他已经比我多准备了1-2个月的时间刷题，我的面试只是短短3-4周就结束了</p>
        <p>我觉得这个事情就可以到此结束了，别人努力别人拿得多，我心里不好受是因为我也想那么多，也不甘心承认自己那么菜</p>
        <p>菜不菜看中有什么用呢，再看中到最后不过是每个月发到手扣完五险一金，交掉房租，补上基金，剩余的一些而已</p>

        <strong className='title' >变漂亮</strong>
        <p>夏天近在眼前，可是我的体重还是没有下来，很久没化妆了，美瞳也没囤货了，夏天的小裙子也只有两条</p>
        <p>越去考虑这些，就会变成我焦虑的事情🤯，做女人好难🤦‍♀️</p>

        <strong className='title' >搬家</strong>
        <p>搬完家之后，需要买的东西越来越多，哪里都是要花的钱，都是该花的</p>
        <p>昨天建军吐了，吃的太快了，这次搬家感觉孩子们适应的还行，还是有待观察</p>
      </div>
    },
    {
      title: '03/28 - 04/05',
      node: <div className='node'>
        <p>这一周整个就是浑浑噩噩，严重浮躁 + 中度焦虑</p>
        <p>我不是找到工作了吗，把之前计划准备做的事情都实施起来呀？为什么我不去做？因为我实在不知道干什么了，积累了太多的事情</p>
        <p>比如：画画、看书、学英语、健身，那么多事情可以做，但是都没有手机好玩🤦‍♀️</p>

        <strong className='title' >疫情</strong>
        <p>计划4月8号之后回淮北，可是现在的疫情一天比一天严重，回不去了，准备了好久的计划被打乱就很难受</p>

        <strong className='title' >不动就会焦虑</strong>
        <p>04/05我在家躺了一天，主要我是纯生生的躺，躺着嗑瓜子追剧，躺着吃水果追剧，躺着睡觉</p>
        <p>睡醒的我异常的焦虑，啥也不想干，都很晚了，第二天还要去上班</p>
        <p>跑去刷了个碗，平复下了心情，觉得自己突然变有用了，就没有那么焦虑了</p>
        <p>这咋办呀，难道是劳碌命🤦‍♀️</p>

        <strong className='title' >咖啡机上头</strong>
        <p>最近执着于买咖啡机，看了测评觉得自己没必要，起不来还穷，重点是知道这些之后还是想买😂</p>

        <strong className='title' >交接</strong>
        <p>早点交接就早点离职，我也不着急入职或者晚点离职了，就歇歇吧</p>

        <strong className='title' >日积月累</strong>
        <p>https://segmentfault.com/a/1190000023716452</p>
      </div>
    },
    {
      title: '04/06 - 04/08',
      node: <div className='node'>
        <div>
          <strong className='title' >日积月累</strong>
        </div>
        <div>
          这是一个nvm配置的链接，踩坑结束
          <a href='https://segmentfault.com/a/1190000023716452' target='_blank'>链接</a>
        </div>
      </div>
    },
    {
      title: '...',
      node: <div className='node'>
        没有意外的，我又鸽鸽鸽鸽鸽鸽鸽鸽鸽鸽鸽鸽了，但是没有杭州三号线鸽王厉害，我只是两个月而已
      </div>
    },
    {
      title: '04/08 - 06/17',
      node: <div className='node'>
        <div>已经很久没有更新了, 今天我来更新的我的烂摊子了🙃</div>
        <strong className='title' >新环境</strong>
        <p>
          <ul>
            <li>入职之后，我感到非常的局促，尽管我有三年的工作经验，我也束手束脚的，因为我不知道大家都是什么水平，生怕一张嘴就会显得我很笨</li>
            <li>我是我们组第一个女孩子，我不知道和他们聊什么，虽然并不是聊一些和性别关系很紧密的话题，可是我觉得我说的，他们会很难认同我，然后就冷场尬住，还不如不说话</li>
            <li>发的笔记本是新的，显示器我就不多说了，哒咩🙅‍♀️， 我不满意</li>
            <div>
              <img className='pic' src={computer} alt="computer" />
            </div>
            <li>工位是满意的，有了小柜子，头顶的空调也是想开就开</li>
            <li>我一直以为我是老白菜，遇到一群新的同事之后，我发现是老不那么菜😶‍🌫️</li>
            <li>说实话，技术能力是有一点点提升的，同时对自己也开始越来越自信，一点点吧，完全是来源于工作的那种</li>
            <li>但是我对我的技术成长还是有点担忧，因为这边的前端是完全的依赖于框架，框架是别人开发的，之所以项目可以跑是前人栽树，后人乘凉罢了</li>
          </ul>
        </p>
        <strong className='title' >新小区</strong>
        <p>
          <ul>
            <li>搬家之后，通勤时间变长，1小时45分钟 --- 1小时10分钟 --- 50分钟,时间逐渐变少，但是这个时间也没有很近</li>
            <li>我们租了两室一厅，我觉得完全没有必要了，一室一厅 加一个很大仓库就行，另外一个卧室完全没人住，只是为了储物</li>
            <li>搬家真是一个月新鲜感，钱包空了就不想打扫了，而且我和我对象两个人对于家居的收纳打理完全是两个不一样的观念</li>
            <li>我很气的点就是：女孩谁不想自己的卧室干干净净，温馨，香香的，但是我对象完全没有概念，他觉得有当然好，没有也无所谓，他这个无所谓就会觉得凭什么让他住进来🤷‍♀️</li>
            <br/>
          </ul>
        </p>
      </div>
    },
  ]

  return (
    <div className='week'>
      <Navigator previousUrl="/home" />
      <Tabs tabPosition={mode} className='title-tab' defaultActiveKey={`${menuList.length - 1}`} >
        {menuList.map((item, index) => (
          <TabPane tab={item.title} key={index} >
            {
              item.node
            }
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default Weekly;