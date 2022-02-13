import { useState } from 'react';
import { Menu } from 'antd';
import './index.less';

const Header = () => {

  const [current, setCurrent] = useState('js');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu className='front-menu' theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="js" >
        JS
      </Menu.Item>
      <Menu.Item key="html" >
        HTML
      </Menu.Item>
      <Menu.Item key="css" >
        CSS
      </Menu.Item>
      <Menu.Item key="browser">
        BROWSER
      </Menu.Item>
    </Menu>
  )
}

export default Header;