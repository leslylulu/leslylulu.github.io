import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'; // 裸导入
import './index.less';
// import { WEBGL } from '../../comp/webGL/index';

const ThreeDemo = () => {
  // if (WEBGL.isWebGLAvailable()) {
  //   // Initiate function or other initializations here
  //   // animate();
  // } else {
  //   const warning = WEBGL.getWebGLErrorMessage();
  //   document.getElementById('demo').appendChild(warning);
  // }
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x565611 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 6;
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  return (
    <div>
      <div className='title'>
        <span>欢迎来到我的空间</span>
      </div>
    </div>
  );
}

export default ThreeDemo;