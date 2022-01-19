import { Link } from "react-router-dom";
import './index.less';

const ThreeList = () => {

  const listdemo = [
    { id: 1, name: '场景', url: '/three/demo' },
    { id: 2, name: '线', url: '/three/line' },
    { id: 3, name: '文字', url: '/three/text' },
    { id: 4, name: '线', url: '/three/line' },
  ];

  return (
    <div className="three">
      <div className='three-title'>
        <div>3D demo</div>
      </div>
      <div className="three-list">
        <div className="three-list-content">
          {
            listdemo.map((item, index) => {
              return (
                <div key={index} className='three-list-content-item'>
                  <Link to={item.url}>
                    <span>{item.name}</span>
                  </Link>
                </div>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default ThreeList;