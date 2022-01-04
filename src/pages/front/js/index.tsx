import { Tabs } from 'antd';
import './index.less'
const { TabPane } = Tabs;


const JSCatalog = () => {

  return (
    <div>
      <Tabs defaultActiveKey="1" tabPosition="left" className='title'>
        {[...Array.from({ length: 30 }, (v, i) => i)].map(i => (
          <TabPane tab={`这个是标题-${i}`} key={i} disabled={i === 28}>
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default JSCatalog;