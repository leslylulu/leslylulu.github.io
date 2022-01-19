import { useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshPhongMaterial,
  DirectionalLight,
  Mesh
} from 'three'; // 裸导入
import './index.less';
// import { WEBGL } from '../../comp/webGL/index';

const ThreeScene = () => {
  // if (WEBGL.isWebGLAvailable()) {
  //   // Initiate function or other initializations here
  //   // animate();
  // } else {
  //   const warning = WEBGL.getWebGLErrorMessage();
  //   document.getElementById('demo').appendChild(warning);
  // }

  const initScene = () => {
    const scene = new Scene();
    /**
     * PerspectiveCamera
     * 第一个参数： fov = 视野范围
     * 第二个参数：aspect = 画布的宽高比,相机默认值2 
     * 第三个参数：near = 0.1 平面
     * 第四个参数：far = 5 远平面
     */
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = window.document.getElementById('cube');
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 2);
    // MeshBasicMaterial 不会受光源影响 
    // MeshPhongMaterial 受光源影响
    // const material = new MeshBasicMaterial({ color: 0xffc0cb });
    // const material = new MeshPhongMaterial({ color: 0xffc0cb });
    // const cube = new Mesh(geometry, material);

    const makeInstance = (geometry: any, color: any, x: any) => {
      const material = new MeshPhongMaterial({ color });
      const cube = new Mesh(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    }
    // 一个网格对象包括了几何体 = geometry 和 材质 = material
    const cubes = [
      makeInstance(geometry, 0xF7F7E8, -6),
      makeInstance(geometry, 0xC7CFB7, -2),
      makeInstance(geometry, 0x9DAD7F, 2),
      makeInstance(geometry, 0x557174, 6),
    ]
    // 将网格添加到场景中
    scene.add(cubes);
    // 摄像机默认指向Z轴负方向
    camera.position.z = 6;

    const color = 0xFFFFFF;
    const intensity = 1;
    // 平行光
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
    // requestAnimationFrame 需要显示的动画，传入一个函数作为回调
    const animate = (time: any) => {
      time *= 0.001;
      cubes.forEach((item, index) => {
        const speed = 1 + index * 0.1;
        const rot = time * speed;
        item.rotation.x = rot;
        item.rotation.y = rot;
        item.rotation.z = rot;
      })
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate(1);
  }

  useEffect(() => {
    initScene()
  }, [])

  return (
    <div>
      <div className='title'>this is cube demo</div>
      <div>
        <canvas id="cube" width="1800" height="700"></canvas>
      </div>
    </div>
  );

}

export default ThreeScene;