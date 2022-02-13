import { Collapse } from 'antd';
import './index.less'

const { Panel } = Collapse;

const titleList = [
  { id: 1, name: 'react事件机制', type: 'easy' },
  { id: 2, name: 'react class 组件为什么需要绑定this', type: 'easy2' },
  { id: 3, name: '合成事件', type: 'easy2' },
  { id: 4, name: ' HOC （高阶组件） VS props render VS hooks? 为什么要不断的迭代？ ', type: 'easy2' }


];


const titleNodeList = titleList.map((item, index: number) => {
  return (
    <span key={index}>
      <span>{index + 1}、</span>
      <span>{item.name}</span>
      {/* <span>{item.type}</span> */}
    </span>
  )
});


const JSCatalog = () => {

  return (
    <div>
      <Collapse defaultActiveKey={[`${titleList.length}`]}>
        <Panel header={titleNodeList[0]} key="1">
          <p>并不是将click事件绑定到了div的真实DOM上</p>
          <p>不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault</p>
          <p>在这里，e 是一个合成事件。不需要担心跨浏览器的兼容性问题</p>
          <p>因此如果不想要是事件冒泡的话应该调用event.preventDefault()方法，而不是调用event.stopProppagation()方法。</p>
          <p>e：如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。</p>
        </Panel>
        <Panel header={titleNodeList[1]} key="2">
          <p>code</p>
        </Panel>
        <Panel header={titleNodeList[2]} key="3">
          <p style={{ fontWeight: 'bold' }}>
            参考：
            <a href="https://zh-hans.reactjs.org/docs/events.html">合成事件相关属性 </a>
          </p>
          <p>它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()</p>
          <p>onFocus、onBlur 焦点事件在 React DOM 上的所有元素都有效，不只是表单元素。</p>
          <p>
            <span style={{ fontWeight: 'bold' }}>优点：</span>
            <ul>
              <li>兼容所有浏览器，更好的跨平台</li>
              <li>方便 react 统一管理和事务机制，统一注册和销毁</li>
            </ul>
          </p>
        </Panel>
        <Panel header={titleNodeList[3]} key="4">
          <p>
            <span style={{ fontWeight: 'bold' }}>HOC：</span>
            <ul>
              <li>基于 React 的组合特性而形成的设计模式。参数是组件，返回新的组件，例如redux 的 connect</li>
              <li>请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。</li>
              <li>HOC 是纯函数，没有副作用</li>
              <li>const ConnectedComment = connect(commentSelector, commentActions)(CommentList); === const enhance = connect(commentListSelector, commentListActions) + const ConnectedComment = enhance(CommentList); </li>
              <li> connect 是一个返回高阶组件的高阶函数！</li>
              <li>不要在 render 方法中使用 HOC - 重新挂载组件会导致该组件及其所有子组件的状态丢失</li>
              <li>但这对于 refs 并不适用。那是因为 ref 实际上并不是一个 prop - 就像 key 一样，它是由 React 专门处理的。如果将 ref 添加到 HOC 的返回组件中，则 ref 引用指向容器组件，而不是被包装组件。</li>
            </ul>
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default JSCatalog;