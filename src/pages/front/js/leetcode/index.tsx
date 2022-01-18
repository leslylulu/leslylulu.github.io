import { Collapse } from 'antd'
import './index.less';
const { Panel } = Collapse;

const Leetcode = () => {

  const titleList = [
    { id: 21, name: '合并两个有序链表', type: 'easy' },
    { id: 22, name: '合并两个有序链表2', type: 'easy2' }

  ];

  const titleNodeList = titleList.map((item, index) => {
    return (
      <span>
        <span>{item.id}</span>
        <span>{item.name}</span>
        <span>{item.type}</span>
      </span>
    )
  });

  return (
    <div className="code">
      <Collapse defaultActiveKey={['1']}>
        <Panel header={titleNodeList[0]} key="1">
          <p>1212</p>
        </Panel>
        <Panel header={titleNodeList[1]} key="2">
          <p>code</p>
        </Panel>
      </Collapse>
    </div>
  )

}

export default Leetcode