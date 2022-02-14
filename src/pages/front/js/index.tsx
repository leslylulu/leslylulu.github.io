import { Collapse, Row, Col } from 'antd';
import './index.less'

const { Panel } = Collapse;

const titleList = [
  { name: 'react事件机制', type: 'done' },
  { name: 'react class 组件为什么需要绑定this', type: 'done' },
  { name: '合成事件', type: 'done' },
  { name: ' HOC （高阶组件） VS props render VS hooks? 为什么要不断的迭代？ ', type: 'done' },
  { name: 'hooks 不要在循环、条件判断或者子函数中调用？ ', type: 'done' },
  { name: 'Promise 原理', type: 'ES6' },
  { name: '深拷贝 VS 浅拷贝？', type: 'js' },
];

const difficultyList = [
  { name: 'React-Fiber的理解', star: 1 },
];


const titleNodeList = titleList.map((item, index: number) => {
  return (
    <span key={index}>
      <span>{index + 1}、</span>
      <span>{item.name}</span>
    </span>
  )
});


const JSCatalog = () => {

  return (
    <div>
      <Row>
        <Col span={12}>
          <div className='js-title'>必考：</div>
          <Collapse className='react-card' defaultActiveKey={[`${titleList.length}`]}>
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
                <span style={{ fontWeight: 'bold' }}>render props：</span>
                <ul>
                  <li>在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术</li>
                  <li>数据共享、代码复用，将组件内的state作为props传递给调用者，将渲染逻辑交给调用者。</li>
                  <li>提供一个函数 prop 来动态的确定要渲染什么 —— 一个 render prop。</li>
                  <li style={{ fontWeight: 'bold' }}>render prop 是一个用于告知组件需要渲染什么内容的函数 prop</li>
                  <li style={{ fontWeight: 'bold' }}>将 Render Props 与 React.PureComponent 一起使用时要小心</li>
                </ul>
                <span style={{ fontWeight: 'bold' }}>hooks：</span>
                <ul>
                  <li>在不编写 class 的情况下使用 state 以及其他的 React 特性。</li>
                  <li style={{ fontWeight: 'bold' }}>hook只能在组件顶层使用，不可在分支语句中使用</li>
                  <li>在函数组件里“钩入” React state 及生命周期等特性的函数</li>

                  <span style={{ fontWeight: 'bold' }}>useState：</span>
                  <li></li>
                  <span style={{ fontWeight: 'bold' }}>useEffect：</span>
                  <li>在完成对 DOM 的更改后运行你的“副作用”函数</li>
                  <li>由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state</li>
                  <li>React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候</li>
                  <li>通过返回一个函数来指定如何“清除”副作用</li>
                  <li style={{ fontWeight: 'bold' }}>只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用</li>
                  <li style={{ fontWeight: 'bold' }}>只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用（除自定义组件）</li>
                  <span style={{ fontWeight: 'bold' }}>useContext</span>
                  <li>不使用组件嵌套就可以订阅 React 的 Context。</li>
                  <span style={{ fontWeight: 'bold' }}>useCallback：</span>
                  <li></li>
                  <span style={{ fontWeight: 'bold' }}>useMemo</span>
                  <li></li>
                </ul>
              </p>
            </Panel>
            <Panel header={titleNodeList[4]} key="5">
              <p>
              </p>
            </Panel>
            <Panel header={titleNodeList[5]} key="6">
              <p>

              </p>
            </Panel>
          </Collapse>
        </Col>

        <Col span={12}>
          <div className='js-title'>难点：</div>
          <Collapse className='react-card' defaultActiveKey={[`${titleList.length}`]}>
            {
              difficultyList.map((item, index) => <Panel header={item.name} key={index}>
                <p>code</p>
              </Panel>)
            }
          </Collapse>
        </Col>
      </Row>



    </div>
  );
}

export default JSCatalog;