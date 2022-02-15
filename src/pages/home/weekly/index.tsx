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
      <Tabs tabPosition='left' defaultActiveKey="1" style={{ height: 220 }}>
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