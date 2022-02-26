import { useState, memo } from "react"

import './index.less';

const Son = (props: any) => {
  const { numA, noUseClick, text } = props;
  console.log(Math.random());
  console.log(text);
  return (
    <div className="son" >
      <div>this is son Node：</div>
      <div >props numA = {numA}</div>
      {/* <div onClick={noUseClick} >props numA = {numA}</div> */}
    </div>
  ) 
};

const WarpperSon = memo(Son);

const Parent = () => {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(10);


  const handleAdd = () => {
    setNumB(numB + 1);
  }

  const noUseClick = () => {
    // console.log(Math.random())
  };

  return (
    <div className='parent'>
      <div>this is Parent Node: </div>
      <div>this is numA: {numA}</div>
      <div className="parent-num-b" onClick={handleAdd}>this is numB: {numB} (我是一个可点击的,只会修改numB) </div>
      {/* <Son noUseClick={noUseClick} numB={numB} numA={numA} text={'没有 noUseClick 没有memo 没有numB 包裹的组件被渲染了'} /> */}
      <WarpperSon numB={numB} numA={numA} text={'有 numB 包裹的组件被渲染了, 就算Son组件没有使用numB这个变量，但是numB发生变化了还是引起重新渲染'} />
      <WarpperSon numA={numA} text={'没有 numB 包裹的组件被渲染了'} />
      {/* <WarpperSon noUseClick={noUseClick} numA={numA} text={'WarpperSon noUseClick numA 包裹的组件被渲染了，无论函数是否变化，都会重新渲染'} /> */}
      {/* <WarpperSon numA={numA} text={'WarpperSon numA 包裹的组件被渲染了'} /> */}
    </div>
  )
}

const UseMemoHook = () => {
  return (
    <div className="memo">
      <div>React.memo是高阶组件</div>
      <div>如果你的组件在相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用</div>
      <div>仅检查 props 变更</div>
      <div>如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer 或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染。</div>
      <Parent/>
    </div>
  )
}

export default UseMemoHook;