import { useEffect } from "react";
import {
	WebGLRenderer,
	ACESFilmicToneMapping,
	sRGBEncoding,
	PerspectiveCamera,
	PMREMGenerator,
	Scene,
	Color,
	GridHelper,
	environments,
	// MeshoptDecoder,
} from "three"; // 裸导入
// import modePath from "../../../assets/model";
import coffeemat from '../../../assets/model/coffeemat.glb';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
// import MeshoptDecoder from 'three/examples/jsm/libs/meshopt_decoder.module.js';
// @ts-ignore
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import "./index.less";

const ExternalMdels = () => {
  let camera: any, scene: any, renderer: any;

  const init = () => {
    const container = document.createElement( 'div' );
    document.body.appendChild( container );
		renderer = new WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.toneMapping = ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.outputEncoding = sRGBEncoding;
		container.appendChild( renderer.domElement );


		camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.set( 0, 100, 0 );

		const environment = new RoomEnvironment();
		const pmremGenerator = new PMREMGenerator( renderer );

		scene = new Scene();
		scene.background = new Color( 0xbbbbbb );
		scene.environment = pmremGenerator.fromScene( environment ).texture;

		const grid = new GridHelper( 500, 10, 0xffffff, 0xffffff );
		grid.material.opacity = 0.5;
		grid.material.depthWrite = false;
		grid.material.transparent = true;
		scene.add( grid );

		const ktx2Loader = new KTX2Loader()
					.setTranscoderPath( 'js/libs/basis/' )
					.detectSupport( renderer );
		const loader = new GLTFLoader();
		// const loader = new GLTFLoader().setPath( '../../../assets/model/' );
		loader.setKTX2Loader( ktx2Loader );
		loader.setMeshoptDecoder( MeshoptDecoder );
		loader.load( coffeemat, function ( gltf: any ) {
			// coffeemat.glb was produced from the source scene using gltfpack:
			// gltfpack -i coffeemat/scene.gltf -o coffeemat.glb -cc -tc
			// The resulting model uses EXT_meshopt_compression (for geometry) and KHR_texture_basisu (for texture compression using ETC1S/BasisLZ)
			gltf.scene.position.y = 8;
			scene.add( gltf.scene );
			render();

		} );
		const controls = new OrbitControls( camera, renderer.domElement );
		controls.addEventListener( 'change', render ); // use if there is no animation loop
		controls.minDistance = 400;
		controls.maxDistance = 1000;
		controls.target.set( 10, 90, - 16 );
		controls.update();

		window.addEventListener( 'resize', onWindowResize );

  };

	const onWindowResize = () => {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		render();

	}

  const render = () => {
		renderer.render( scene, camera );
	};

  useEffect(() => {
    init();
    render();
  }, []);

  return (
    <div>
      <div>
        <canvas id="external" width="1800" height="700"></canvas>
      </div>
    </div>
  );
};

export default ExternalMdels;
