import { Collapse } from 'antd';
import './index.less'

const { Panel } = Collapse;

const titleList = [
  { id: 1, name: 'react事件机制', type: 'easy' },
  { id: 2, name: '合并两个有序链表2', type: 'easy2' }
];


const titleNodeList = titleList.map((item, index) => {
  return (
    <span>
      <span>{item.id}、</span>
      <span>{item.name}</span>
      {/* <span>{item.type}</span> */}
    </span>
  )
});


const JSCatalog = () => {

  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Panel header={titleNodeList[0]} key="1">
          <p>并不是将click事件绑定到了div的真实DOM上</p>
        </Panel>
        <Panel header={titleNodeList[1]} key="2">
          <p>code</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default JSCatalog;