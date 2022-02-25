import { useState } from 'react';
import JSCatalog from './js/index';
import Demo from './demo/index';
import './index.less';



const Front = () => {
  const menuArray = [
    // { name: 'js', key: 'js' },
    { name: 'demo', key: 'demo' },
  ]

  const [current, setCurrent] = useState(menuArray[0].key);

  const handleClick = (e: string) => {
    setCurrent(e);
  };

  return (
    <div className='front'>
      <div className='front-menu'>
        {
          menuArray.map((item, index) => {
            const selected = current === item.key;
            return <div className={`front-menu-item ${selected ? 'front-menu-item-selected' : ''}`} onClick={() => handleClick(item.key)} key={item.key} >{item.name}</div>
          })
        }
      </div>
      {
        current === 'js' && <JSCatalog />
      }
      {
        current === 'demo' && <Demo />
      }
    </div>
  );
}

export default Front;