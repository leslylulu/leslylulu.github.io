import { useState, memo, useRef, useEffect, useCallback } from "react";
import {  Input } from "antd";
import "./index.less";

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
    <div className='son-btn' onClick={onClick}>
      <p>很重的组件，不优化会死的那种</p>
    </div>
  );
});

const Box = () => {
  const [text, setText] = useState("Initial value");
  const textRef = useRef(text);
  // handleSubmit由原来直接依赖text变成了依赖textRef，因为每次re-render时textRef不变，所以handleSubmit不变；
  const handleSubmit = useCallback(() => {
    console.log(`Text: ${textRef.current}`); // BUG：每次输出都是初始值
  }, [textRef]);

  // const handleSubmit = useCallback(() => {
  //   console.log(`Text: ${textRef.current}`); // BUG：每次输出都是初始值
  // }, []);

  useEffect(() => {
    console.log("update text");
    textRef.current = text;
  }, [text]);

  return (
    <div className="box">
      this is Box
      <Input
        value={text}
        placeholder="请输入"
        onChange={(e) => setText(e.target.value)}
      />
      <SonTree onClick={handleSubmit} />
    </div>
  );
};


const useEventCallback: any = (fn: any) => {
  const ref = useRef(fn);
  
  useEffect(() => {
      // 每次re-render都会执行这里（逻辑简不影响性能），保证fn永远是最新的
      ref.current = fn;
  })

  return useCallback(() => {
      ref.current && ref.current(); // 通过ref.current访问最新的回调函数
  }, [])
}

const Mix = () => {
  const [text, setText] = useState("Initial value");

  const handleSubmit = useEventCallback(() => {
    console.log(`Text: ${text}`);
  }, [text]);

  return (
    <div className="mix">
      <p>useRef+useEffect这种解决方式可以形成一种固定的“模式”</p>
      <p>通过useRef保持变化的值</p>
      <p>通过useEffect更新变化的值;</p>
      <p>通过useCallback返回固定的callback。</p>
      <Input
        value={text}
        placeholder="请输入"
        onChange={(e) => setText(e.target.value)}
      />
      <SonTree onClick={handleSubmit} />
    </div>
  );
};

const UseRefDemo = () => {
  return (
    <div className="ref">
      <div>const refContainer = useRef(initialValue);</div>
      <div>其 .current 属性被初始化为传入的参数（initialValue）</div>
      <div>请记住，当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。</div>
      <Box />
      <Mix />
    </div>
  );
};

export default UseRefDemo;
