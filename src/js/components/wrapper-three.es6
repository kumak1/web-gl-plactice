import {config} from './config.es6';

export default
class threeWrapper {
    constructor() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(
            config.width,
            config.height
        );
        this.scene = new THREE.Scene();
        this.camera = {};
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    getCameraPerspective(x = config.camera.position.x,
                         y = config.camera.position.y,
                         z = config.camera.position.z,
                         angle = config.camera.viewAngle,
                         aspect = config.camera.aspect,
                         near = config.camera.near,
                         far = config.camera.far) {
        let camera = new THREE.PerspectiveCamera(angle,aspect,near,far);
        camera.position.x = x;
        camera.position.y = y;
        camera.position.z = z;
        this.camera = camera;

        return camera;
    }

    getLightDirectional(x = config.light.position.x,
                        y = config.light.position.y,
                        z = config.light.position.z,
                        hex = config.light.hex,
                        intensity = config.light.intensity) {
        let light = new THREE.DirectionalLight(
            hex,
            intensity
        );
        light.position.x = x;
        light.position.y = y;
        light.position.z = z;

        return light;
    }
}