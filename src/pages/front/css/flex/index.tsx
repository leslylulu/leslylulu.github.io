import "./index.less";

const FlexDemo = () => {
  return (
    <div className="flex">
      <div className="algin-items">
        align-items: center;
        <p>这是一个p标签 </p>
        <div>这是一个div标签</div>
        <div>这是一个p标签</div>
        <span>这是一个span标签</span>
        <div>
          <p>这是一个p在div里面的</p>
        </div>
      </div>
      <br/>
      <div className="algin-content">
        align-content: center;
        <p>这是一个p标签 </p>
        <div>这是一个div标签</div>
        <span>这是一个span标签</span>
        <div>
          <p>这是一个p在div里面的</p>
        </div>
      </div>
      <br/>
      <br/>
      <div style={{color: '#000', textAlign: "center"}}>justify-content</div>
      <div className="justify-content">
        <span>这是一个span标签</span>
      </div>
      <br/>
      <div className="justify-content">
        <div>这是一个div标签</div>
        <div>这是一个p标签</div>
        <span>这是一个span标签</span>
      </div>
      <br/>
      <div style={{color: '#000', textAlign: "center"}}>justify-items</div>
      <div className="justify-items">
        <span>这是一个p标签 </span>
        <p style={{textAlign: 'center'}}>这是一个p标签 </p>
      </div>
      <br/>
      <div className="justify-items">
        div里面只有justify-items
      </div>
      <br/>
      <div className='textAlign'>
        div里只是textAlign: 'center'
      </div>
    </div>
  );
};

export default FlexDemo;
