import { useState, useMemo } from "react";
import { Button } from "antd";

import "./index.less";

const Son = (props: any) => {
  const { value } = props;
  console.log("son 渲染了");
  return (
    <div>
      <div>this is son value = {value}</div>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  const cachedValue = useMemo(() => {
    return value;
  }, [value]);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleAddValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <div>this is count = {count}</div>
      <div>this is value = {value}</div>
      <Button onClick={handleAddCount}>add count</Button>
      <Button onClick={handleAddValue}>add value</Button>
      <Son value={cachedValue} />
    </div>
  );
};

const UseMemoDemo = () => {
  return (
    <div className="use-memo">
      <p>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</p>
      <p>它仅会在某个依赖项改变时才重新计算 memoized 值。</p>
      <p>如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值</p>
      <p>会在组件第一次渲染的时候执行</p>
      <p>
        <Parent />
      </p>
    </div>
  );
};

export default UseMemoDemo;
