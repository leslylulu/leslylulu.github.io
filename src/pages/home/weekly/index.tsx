import { Tabs } from 'antd';
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import './index.less';

const { TabPane } = Tabs;

const Weekly = () => {
  let navigate = useNavigate();

  const backToPrevious = () => {
    navigate("/home");
  };

  const backToIndex = () => {
    navigate("/");
  };

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
        <br/>
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
    }
  ]

  return (
    <div className='week'>
      <div className="previous" onClick={backToPrevious}>
        <LeftCircleOutlined />
        <span>上一页</span>
      </div>
      <div className="previous" onClick={backToIndex}>
        <LeftCircleOutlined />
        <span>回到首页</span>
      </div>
      <Tabs tabPosition='left' defaultActiveKey="1" >
          {menuList.map((item, index) => (
            <TabPane tab={item.title} key={index} >
              {
                item.node
              }
            </TabPane>
          ))}
        </Tabs>

      {/* <h1>this is Weekly comp</h1>
      <p>瑞士著名心理学家卡尔·荣格说过：“人们会想尽办法，各种荒谬的办法，来避免面对自己的灵魂。”</p>
      <p>但他还说过：“只有直面灵魂的人，才会觉醒。”</p> */}
    </div>
  );
}

export default Weekly;