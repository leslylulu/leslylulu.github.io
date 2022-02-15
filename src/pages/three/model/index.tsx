import { qiangAll, xiaofangshuan, tietu } from '../../../assets/pic/three/index'
import './index.less';

const Model = () => {
    return (
        <div className='model'>
            <p>
                这是一些我在建模时期做的模型，还有一些拿不出来或者丢失了已经。
            </p>
            <img src={xiaofangshuan} />
            <h4>这个是我从0到1的第一个模型</h4>
            <div>流程：中模 - 高模 - 法线贴图（UV）- 低模 - 颜色贴图 - 粗糙度贴图 - 金属度贴图 </div>
            <img src={qiangAll} />
            <h4>这个是我的第二个模型，稍微复杂一些</h4>
            <img src={tietu} />
            <h4>这个是我的第三个模型的低模贴图展开</h4>
            <div>手写部分是我自己写的注释</div>
        </div>
    )

}

export default Model;