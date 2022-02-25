import { useState, memo } from "react"

import './index.less';

const Son = (props: any) => {
  const { numA, noUseClick } = props;
  console.log("Son 渲染了");
  return (
    <div className="son" >
      <div>this is son Node：</div>
      <div onClick={noUseClick} >props numA = {numA}</div>
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

  const noUseClick = () => {};

  return (
    <div className='parent'>
      <div>this is Parent Node: </div>
      <div>this is numA: {numA}</div>
      <div className="parent-num-b" onClick={handleAdd}>this is numB: {numB}(我是一个可点击的)</div>
      {/* <Son numA={numA} /> */}
      <WarpperSon noUseClick={noUseClick} numA={numA} />
    </div>
  )
}

const UseMemoHook = () => {
  return (
    <div className="memo">
      <div>useMemo是来解决什么问题的？</div>
      <div>“减少组件重新渲染时不必要的函数计算”。</div>
      <Parent/>
    </div>
  )
}

export default UseMemoHook;