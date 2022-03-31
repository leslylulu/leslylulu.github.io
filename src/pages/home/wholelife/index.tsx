import Navigator from '../../../comp/navigator';
import "./index.less";

const WholeLife = () => {
  return (
    <div className="whole">
      <div className="whole-page" >
        <Navigator justifyContent='center' previousUrl="/home" />
        <span className="whole-page-title">👋 如何过好这一生 👩‍💻</span>
        <div>从我毕业开始就在思考这个问题</div>
        <div className="whole-page-main">
          <p>这个标题的含义很大，问的很宽，解释很多，但是这个问题是没有答案的，谁也不知道未来发生什么，谁都做不了最正确的决策</p>
          <p>而我们能做的就是让当下的自己快乐，让当下觉得在未来这个是重要的，让当下的每一步都在为想要的生活做积累</p>
          <p>大多数有走错的时候，懈怠的时候，甚至退步的过程，可是这都是我们的人生，永远往前走，没有回头路。</p>
        </div>
      </div>
    </div>
  );
};

export default WholeLife;
