import { Link, useNavigate } from "react-router-dom";
import { LeftCircleOutlined } from "@ant-design/icons";
import { box, demo } from '../../../assets/pic/three/index';
import './index.less';

const ThreeList = () => {

  const listdemo = [
    { id: 1, name: '场景', url: '/three/demo', gif: box },
    // { id: 2, name: '线', url: '/three/line', gif: box },
    { id: 3, name: '图元', url: '/three/geometry', gif: demo },
    // { id: 4, name: '线', url: '/three/line', gif: demo },
  ];

  const handleJump = () => {
    window.open('https://threejs.org/manual/#zh/primitives');
  }
  let navigate = useNavigate();
  const handleBackIndex = () => {
    navigate('/');
  }

  return (
    <div className="three">
      <div className='three-title'>
        <div className='three-title-back' onClick={handleBackIndex}>
          <LeftCircleOutlined />
          <span>返回首页</span>
        </div>
        <div>3D demo</div>
        <div className='three-title-info'>
          <div>还记得我的网页课题就是在网页里实现3D效果，但是我没有实现🤦‍♀️</div>
          <div>我的毕业设计也是要做一些模型，但是一行代码都没有，所以我的毕设跑题了🤦‍♀️</div>
          <div>现在想逐渐的想要实现，因为这些东西做出来就是很 “ 哇塞 ”，谁不想做个cool girl😎呢</div>
          <div>右边展示的是我跟着
            <span onClick={handleJump} style={{ color: '#0d8fea', fontWeight: 'bold', cursor: 'pointer' }}>官方文档</span>
            一点一点跟着敲代码实现的，你也可以做到👋
          </div>
        </div>
      </div>
      <div className="three-list">
        <div className="three-list-content">
          {
            listdemo.map((item, index) => {
              return (
                <Link key={index} to={item.url} className='three-list-content-item'>
                  <div>
                    <img src={item.gif} alt="box" />
                  </div>
                  <div className='three-list-content-item-title'>{item.name}</div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ThreeList;