import { Link } from "react-router-dom";
import Navigator from '../../../comp/navigator/index';
import './index.less';

const ArticleList = () => {

  const list2021 = [
    { id: 1, name: '2021年度总结', url: '/home/anan' },
  ];

  const list2022 = [
    { id: 1, name: '周记', url: '/home/weekly' },
    { id: 2, name: '🏃‍♀️如何过好这一生', url: '/home/wholelife' },
  ]

  return (
    <div className="home-box" style={{ height: '100vh' }}>
      <Navigator previousUrl="/" />
      <div className="home-title">
        <span>📷</span>
        <span style={{ marginLeft: 20 }}>2022</span>
      </div>
      <div className="home-list" >
        {
          list2022.map((item, index) => {
            return (
              <div key={index} className='home-list-item'>
                <Link to={item.url}>
                  <span>{item.name}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className="home-title">
        <span>👀</span>
        <span style={{ marginLeft: 20 }}>2021</span>
      </div>
      <div className="home-list">
        {
          list2021.map((item, index) => {
            return (
              <div key={index} className='home-list-item'>
                <Link to={item.url}>
                  <span>{item.name}</span>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default ArticleList;