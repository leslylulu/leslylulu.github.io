import "./index.less";

const Flex1Demo = () => {
  return (
    <div className="flex">
      <div className="introduction">
        <div>
          flex属性是flex-grow，flex-shrink和flex-basis这3个CSS属性的缩写
        </div>
        <div>flex:1等同于flex:1 1 0%</div>
        <div>flex:1 2等同于flex:1 2 0%</div>
      </div>
      <div className="box">
        <div className="box-left">我是左边</div>
        <div className="box-right">我是右边 flex: 1;</div>
      </div>
      <div className="box">
        <div className="box-left">我是左边</div>
        <div className="box-right">我是右边 fflex:1 1 0%</div>
      </div>
      <div className="box1">
        <div className="box1-left">我是左边</div>
        <div className="box1-middle"> 我是中间</div>
        <div className="box1-right"> 我是右边</div>
      </div>
    </div>
  );
};

export default Flex1Demo;
