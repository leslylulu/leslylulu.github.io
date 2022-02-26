import { useState, memo, useEffect, useCallback } from "react";
import { Button, Input } from "antd";
import "./index.less";

const Son = (props: any) => {
  const { handleClick } = props;
  console.log("son render");
  return (
    <div>
      <p>this is son</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
};

const MemoSon = memo(Son);

const Parent = () => {
  const [clickCount, increaseCount] = useState(0);
  // 没有使用`useCallback`，每次渲染都会重新创建内部函数
  // const handleClick = () => {
  //     console.log('handleClick');
  //     increaseCount(clickCount + 1);
  // }

  // 使用`useCallback`，但也每次渲染都会重新创建内部函数作为`useCallback`的实参
  // useCallback其实是利用memoize减少不必要的子组件重新渲染
  const handleClick = useCallback(() => {
    console.log("handleClick");
    increaseCount(clickCount + 1);
  }, []);

  return (
    <div className="parent">
      <p>clickCount === {clickCount}</p>
      {/* <Son handleClick={handleClick} /> */}
      <MemoSon handleClick={handleClick} />
    </div>
  );
};

const SonTree = memo((props: any) => {
  console.log(" SonTree render");
  const { onClick } = props;
  const dateBegin = Date.now();
  // 很重的组件，不优化会死的那种，真的会死人
  while (Date.now() - dateBegin < 600) {}
  useEffect(() => {
    console.log(" SonTree render --- DONE🥵");
  });

  return (
    <div onClick={onClick}>
      <p>很重的组件，不优化会死的那种</p>
    </div>
  );
});

const Box = () => {
  const [text, setText] = useState("Initial value");

  const handleSubmit = useCallback(() => {
    console.log(`Text: ${text}`); // BUG：每次输出都是初始值
  }, [text]);

  return (
    <div className="box">
      this is Box
      <Input
        value={text}
        placeholder="请输入"
        onChange={(e) => setText(e.target.value)}
      />
      {/* <Button className='sub-click' onClick={handleSubmit}>this is a useCallback(fn, deps)(可以点击我🙆‍♀️！)</Button>  */}
      <SonTree onClick={handleSubmit} />
    </div>
  );
};

const UseCallBackDemo = () => {
  return (
    <div className="call-back">
      <p>{`const memoizedCallback = useCallback(  () => { doSomething(a, b); }, [a, b], );`}</p>
      <p>
        把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的
        memoized 版本
      </p>
      <p>回调函数仅在某个依赖项改变时才会更新。</p>
      <p>函数组件过多内部函数导致的性能问题</p>
      <p>
        <strong>不管是否使用useCallback，都无法避免重新创建内部函数</strong>
      </p>
      <Parent />
      <div />
      <Box />
    </div>
  );
};

export default UseCallBackDemo;
