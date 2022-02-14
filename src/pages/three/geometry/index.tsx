/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshPhongMaterial,
  DirectionalLight,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  DoubleSide,
  // Shape,
  // ExtrudeGeometry,
  IcosahedronGeometry,
  Vector2,
  LatheGeometry,
  OctahedronGeometry, // 八面体 参数： radius, detail
  PolyhedronGeometry, // 将一些环绕着中心点的三角形投影到球体上
  SphereGeometry, // 球体 三个参数：radius，widthSegments，heightSegments
  TetrahedronGeometry, // 四面体 参数：radius 
  TorusGeometry, // 甜甜圈 参数： radius, tubeRadius, radialSegments, tubularSegments
  TorusKnotGeometry, // 环形节 参数： radius, tubeRadius， tubularSegments， radialSegments， p, q
  // TubeGeometry, // 圆环沿着路径 参数：path, tubularSegments, radius, radialSegments, closed
  // EdgesGeometry, // 一个工具对象，将一个几何体作为输入，生成面夹角大于某个阈值的那条边。
  // FontLoader,
  // TextGeometry, // 3D 文字 参数： font, size, height, curveSegments, bevelEnabled, bevelThickness, bevelSize, bevelSegments
  // PlaneGeometry, 二维平面 参数: width, height 
  // RingGeometry, // 中间有洞的2D圆盘 参数： innerRadius, outerRadius, thetaSegments(分成几等分的圆)
  Mesh
} from 'three'; // 裸导入
import './index.less';

const Geometry = () => {

  const objects: any = [];
  const createMaterial = () => {
    const material = new MeshPhongMaterial({
      side: DoubleSide, // side: THREE.DoubleSide 传给材质。这告诉 Three.js 绘制组成形状的三角形的两个
    });
    const hue = Math.random();
    const saturation = 1;
    const luminance = .5;
    material.color.setHSL(hue, saturation, luminance);
    return material;
  }

  useEffect(() => {
    initScene();
  }, []);

  const initScene = () => {
    const scene = new Scene();
    scene.background = new Color(0xFFE2E2); // 修改背景颜色
    const fov = 40;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    const canvas = window.document.getElementById('geometry');
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 摄像机默认指向Z轴负方向
    camera.position.z = 120;

    const addObject = (x: any, y: any, z: any, obj: any) => {
      obj.position.x = x;
      obj.position.y = y;
      obj.position.z = z;
      scene.add(obj);
      objects.push(obj);
    }

    const addSolidGeometry = (x: any, y: any, z: any, geometry: any) => {
      const mesh = new Mesh(geometry, createMaterial());
      addObject(x, y, z, mesh);
    }

    // 平行光
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);

    // 长方体
    const width = 4;
    const height = 4;
    const depth = 8;
    addSolidGeometry(-40, 30, -1, new BoxGeometry(width, height, depth));

    //  圆形
    const radius = 4;
    const segments = 12;
    addSolidGeometry(-30, 30, -1, new CircleGeometry(radius, segments));


    // 缺口圆形
    const thetaStart = Math.PI * 0.25;  // ui: thetaStart
    const thetaLength = Math.PI * 1.5;  // ui: thetaLength
    addSolidGeometry(-20, 30, -1, new CircleGeometry(radius, segments, thetaStart, thetaLength));

    // 锥形
    // const height = 1;
    const radialSegments = 32;
    addSolidGeometry(-10, 30, -1, new ConeGeometry(radius, segments, radialSegments));

    // 锥形2
    const heightSegments = 2;
    const openEnded = true;
    addSolidGeometry(0, 30, -1, new ConeGeometry(radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength));
   

    // 圆柱
    const radiusTop = 1;  // ui: radiusTop
    const radiusBottom = 3;  // ui: radiusBottom
    addSolidGeometry(10, 30, -1, new CylinderGeometry(radiusTop, radiusBottom, 6, radialSegments));

    // 缺口圆柱
    addSolidGeometry(20, 30, -1, new CylinderGeometry(
      radiusTop, radiusBottom, 6, radialSegments, heightSegments, openEnded, thetaStart, thetaLength));
  
    // 十二面体
    addSolidGeometry(30, 30, -1, new DodecahedronGeometry(radius));

    const detail = 2;  // ui: detail
    addSolidGeometry(40, 30, -1, new DodecahedronGeometry(radius, 2));

    // 二十面体
    addSolidGeometry(-40, 20, -1, new IcosahedronGeometry(4));

    addSolidGeometry(-30, 20, -1, new IcosahedronGeometry(4, 2));

    
    // 酒瓶、玻璃杯
    const points = [];
    for (let i = 0; i < 6; ++i) {
      points.push(new Vector2(Math.sin(i * 0.1) * 0.5 + 1, (i - 5) * 1));
    }
    addSolidGeometry(-20, 20, -1, new LatheGeometry(points));

    // 八面体
    addSolidGeometry(-10, 20, -1, new OctahedronGeometry(radius));


    const verticesOfCube = [
      -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1,
      -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1,
    ];
    const indicesOfFaces = [
      2, 1, 0, 0, 3, 2,
      0, 4, 7, 7, 3, 0,
      0, 1, 5, 5, 4, 0,
      1, 2, 6, 6, 5, 1,
      2, 3, 7, 7, 6, 2,
      4, 5, 6, 6, 7, 4,
    ];
    addSolidGeometry(0, 20, -1, new PolyhedronGeometry(verticesOfCube, indicesOfFaces, radius, detail));

    // 球体
    addSolidGeometry(10, 20, -1, new SphereGeometry(radius, 128, 1));

    // 四面体
    addSolidGeometry(20, 20, -1, new TetrahedronGeometry(4));

    // 圆环体（甜甜圈）
    const TorRadius = 4;
    const tubeRadius = 1;  // ui: tubeRadius
    const torradialSegments = 6;  // ui: radialSegments
    const tubularSegments = 48;  // ui: tubularSegments
    addSolidGeometry(30, 20, -1, new TorusGeometry(TorRadius, tubeRadius, torradialSegments, tubularSegments));

    // 环形节
    const torradius = 3;  // ui: radius
    const tubeRadius2 = 1;  // ui: tubeRadius
    const tubularSegments2 = 64;  // ui: tubularSegments
    const radialSegments3 = 8;  // ui: radialSegments
    const p = 2;  // ui: p
    const q = 3;  // ui: q
    addSolidGeometry(42, 20, -1, new TorusKnotGeometry(
      torradius, tubeRadius2, tubularSegments2, radialSegments3, p, q
    ));

    const resizeRendererToDisplaySize = (renderer: any) => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    const render = (time: any) => {
      time *= 0.001;

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      objects.forEach((obj: any, ndx: any) => {
        const speed = .1 + ndx * .05;
        const rot = time * speed;
        obj.rotation.x = rot + 1;
        obj.rotation.y = rot;
        obj.rotation.z = rot;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

  }



  return (
    <div>
      <canvas id="geometry" width="1800" height="700"/>
    </div>
  );

}

export default Geometry;