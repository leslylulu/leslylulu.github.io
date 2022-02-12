import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from 'three';

const LineDemo = () => {
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);
  const scene = new Scene();
  // 对于线条来说， 能使用的材质只有LineBasicMaterial  ||  LineDashedMaterial。
  const material = new LineBasicMaterial({ color: 0x0000ff });
  const points = [];
  // 线是画在每一对连续的顶点之间的，而不是在第一个顶点和最后一个顶点之间绘制线条（线条并未闭合）。 ???
  points.push(new Vector3(-10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));
  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
  return (
    <div>
      this is line demo
    </div>
  )
}

export default LineDemo;