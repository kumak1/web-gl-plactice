import {vertexShader} from './shader-vertex.es6';
import {fragmentShader} from './shader-fragment.es6';

const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshLambertMaterial({
    color: 0x662200,
    fragmentShader: fragmentShader,
    vertexShader: vertexShader
});

export var meshCube = new THREE.Mesh(geometry, material);
