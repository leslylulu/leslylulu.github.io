import { useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshPhongMaterial,
  DirectionalLight,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  Shape,
  ExtrudeGeometry,
  IcosahedronGeometry,
  Vector2,
  LatheGeometry,
  Mesh
} from 'three'; // 裸导入
import './index.less';

const Geometry = () => {

  const initScene = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const canvas = window.document.getElementById('geometry');
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 长方体
    const geometry = new BoxGeometry(1, 1, 2, 1, 1, 1);
    const material = new MeshPhongMaterial({ color: 0xffc0cb });
    const cube = new Mesh(geometry, material);
    cube.position.y = 4;
    cube.position.x = -4;
    scene.add(cube);

    //  圆形
    const radius = 1;
    const segments = 12;
    const circleGeometry = new CircleGeometry(radius, segments);
    const circlMaterial = new MeshPhongMaterial({ color: 0x8785A2 });
    const circlePie = new Mesh(circleGeometry, circlMaterial);
    circlePie.position.y = 4;
    circlePie.position.x = 0;
    scene.add(circlePie);

    // 缺口圆形
    const thetaStart = Math.PI * 0.25;  // ui: thetaStart
    const thetaLength = Math.PI * 1.5;  // ui: thetaLength
    const circleGeometry2 = new CircleGeometry(radius, segments, thetaStart, thetaLength);
    const circlMaterial2 = new MeshPhongMaterial({ color: 0xF6F6F6 });
    const circlePie2 = new Mesh(circleGeometry2, circlMaterial2);
    circlePie2.position.y = 4;
    circlePie2.position.x = 4;
    scene.add(circlePie2);

    // 锥形
    const height = 1;
    const radialSegments = 32;
    const geometry2 = new ConeGeometry(radius, height, radialSegments);
    const circlMaterial3 = new MeshPhongMaterial({ color: 0x9DAD7F });
    const coneGeometry = new Mesh(geometry2, circlMaterial3);
    coneGeometry.position.y = 0;
    coneGeometry.position.x = -4;
    scene.add(coneGeometry);

    // 锥形2
    const heightSegments = 2; 
    const openEnded = true; 
    const geometry3 = new ConeGeometry(
      radius, height,
      radialSegments, heightSegments,
      openEnded,
      thetaStart, thetaLength);
    const circlMaterial4 = new MeshPhongMaterial({ color: 0xD9F9F4 });
    const coneGeometry1 = new Mesh(geometry3, circlMaterial4);
    coneGeometry1.position.y = 0;
    coneGeometry1.position.x = 0;
    scene.add(coneGeometry1);

    // 圆柱
    const radiusTop = 1;  // ui: radiusTop
    const radiusBottom = 1;  // ui: radiusBottom
    const radialSegments1 = 16;
    const geometry4 = new CylinderGeometry(
        radiusTop, radiusBottom, height, radialSegments1);
    const circlMaterial5 = new MeshPhongMaterial({ color: 0xFF9C91 });
    const cylinderGeometry1 = new Mesh(geometry4, circlMaterial5);
    cylinderGeometry1.position.y = 0;
    cylinderGeometry1.position.x = 4;
    scene.add(cylinderGeometry1);

    // 缺口圆柱
    const geometry5 = new CylinderGeometry(
        radiusTop, radiusBottom, height,
        radialSegments, heightSegments,
        openEnded,
        thetaStart, thetaLength);
    const circlMaterial6 = new MeshPhongMaterial({ color: 0xD4ECDD });
    const cylinderGeometry2 = new Mesh(geometry5, circlMaterial6);
    cylinderGeometry2.position.y = -4;
    cylinderGeometry2.position.x = -4;
    scene.add(cylinderGeometry2);

    // 十二面体
    const geometry6 = new DodecahedronGeometry(radius);
    const material7 = new MeshPhongMaterial({ color: 0xFF7878 });
    const dodecahedronGeometry = new Mesh(geometry6, material7);
    dodecahedronGeometry.position.y = -4;
    dodecahedronGeometry.position.x = 0;
    scene.add(dodecahedronGeometry);

    const detail = 2;  // ui: detail
    const geometry8 = new DodecahedronGeometry(radius, detail);
    const material8 = new MeshPhongMaterial({ color: 0x8843F2 });
    const dodecahedronGeometry2 = new Mesh(geometry8, material8);
    dodecahedronGeometry2.position.y = -4;
    dodecahedronGeometry2.position.x = 4;
    scene.add(dodecahedronGeometry2);

    // 二十面体
    const geometry10 = new IcosahedronGeometry(radius);
    const material10 = new MeshPhongMaterial({ color: 0xBAFFB4 });
    const icosahedronGeometry = new Mesh(geometry10, material10);
    icosahedronGeometry.position.y = -8;
    icosahedronGeometry.position.x = -4;
    scene.add(icosahedronGeometry);

    const geometry11 = new IcosahedronGeometry(radius, detail);
    const material11 = new MeshPhongMaterial({ color: 0x84DFFF });
    const icosahedronGeometry2 = new Mesh(geometry11, material11);
    icosahedronGeometry2.position.y = -8;
    icosahedronGeometry2.position.x = 0;
    scene.add(icosahedronGeometry2);

    const points = [];
    for (let i = 0; i < 6; ++i) {
      points.push(new Vector2(Math.sin(i * 0.1) * 0.5 + 1, (i - 5) * .8));
    }
    const geometry12 = new LatheGeometry(points);
    const material12 = new MeshPhongMaterial({ color: 0x516BEB });
    const latheGeometry1 = new Mesh(geometry12, material12);
    latheGeometry1.position.y = -8;
    latheGeometry1.position.x = 4;
    scene.add(latheGeometry1);

    const shape = new Shape();
    const x = -2.5;
    const y = -5;
    shape.moveTo(x + 2.5, y + 2.5);
    shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
    shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
    shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
    shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
    shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
    shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
    const extrudeSettings = {
      steps: 2,  // ui: steps
      depth: 2,  // ui: depth
      bevelEnabled: true,  // ui: bevelEnabled
      bevelThickness: 1,  // ui: bevelThickness
      bevelSize: 1,  // ui: bevelSize
      bevelSegments: 2,  // ui: bevelSegments
    };
    const geometry9 = new ExtrudeGeometry(shape, extrudeSettings);
    const material9 = new MeshPhongMaterial({ color: 0x8843F2 });
    const heart = new Mesh(geometry9, material9);
    heart.position.y = -8;
    heart.position.x = -4;
    // scene.add(heart);

    // 摄像机默认指向Z轴负方向
    camera.position.z = 20;
    const color = 0xFFFFFF;
    const intensity = 1;
    // 平行光
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
    // requestAnimationFrame 需要显示的动画，传入一个函数作为回调
    const animate = (time: any) => {
      time *= 0.0005;
      cube.rotation.x = time;
      cube.rotation.z = time;
      cube.rotation.y = time;

      circlePie.rotation.x = time;
      circlePie.rotation.z = time;
      circlePie.rotation.y = time;

      circlePie2.rotation.x = time - 0.001;
      circlePie2.rotation.y = time - 0.001;
      circlePie2.rotation.z = time - 0.001;

      coneGeometry.rotation.x = time;
      coneGeometry.rotation.z = time;
      coneGeometry.rotation.y = time;

      coneGeometry1.rotation.x = time;
      coneGeometry1.rotation.z = time;
      coneGeometry1.rotation.y = time;

      cylinderGeometry1.rotation.x = time;
      cylinderGeometry1.rotation.z = time;
      cylinderGeometry1.rotation.y = time;
      
      cylinderGeometry2.rotation.x = time;
      cylinderGeometry2.rotation.z = time;
      cylinderGeometry2.rotation.y = time;

      dodecahedronGeometry.rotation.x = time;
      dodecahedronGeometry.rotation.z = time;
      dodecahedronGeometry.rotation.y = time;

      dodecahedronGeometry2.rotation.x = time;
      dodecahedronGeometry2.rotation.z = time;
      dodecahedronGeometry2.rotation.y = time;

      heart.rotation.x = time;
      heart.rotation.z = time;
      heart.rotation.y = time;

      icosahedronGeometry.rotation.x = time;
      icosahedronGeometry.rotation.z = time;
      icosahedronGeometry.rotation.y = time;

      icosahedronGeometry2.rotation.x = time;
      icosahedronGeometry2.rotation.z = time;
      icosahedronGeometry2.rotation.y = time;

      latheGeometry1.rotation.x = time;
      latheGeometry1.rotation.z = time;
      latheGeometry1.rotation.y = time;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate(0.1);
  }

  useEffect(() => {
    initScene()
  }, [])

  return (
    <div>
      <div className='title'>this is geometry demo</div>
      <div>
        <canvas id="geometry" width="1800" height="700"></canvas>
      </div>
    </div>
  );

}

export default Geometry;