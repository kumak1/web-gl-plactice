import {config} from './components/config.es6';
import {vertexShader} from './components/shader-vertex.es6';
import {fragmentShader} from './components/shader-fragment.es6';
import threeWrapper from './components/wrapper-three.es6';
import {meshCube} from './components/mesh-cube.es6';

window.addEventListener("DOMContentLoaded", () => {
    let three = new threeWrapper();
    document.body.appendChild(three.renderer.domElement);

    three.scene.add(three.getCameraPerspective());
    three.scene.add(three.getLightDirectional());
    three.scene.add(meshCube);

    three.render();

    const halfWidth = config.width * 0.5;
    const halfHeight = config.height * 0.5;
    window.addEventListener('mousemove', (e) => {
        const mouseX = ( e.clientX - halfWidth );
        const mouseY = ( e.clientY - halfHeight );
        meshCube.rotation.x = mouseY * 0.005;
        meshCube.rotation.y = mouseX * 0.005;

        three.render();
    }, false);
}, false);
