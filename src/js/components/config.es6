const width = window.innerWidth;
const height = window.innerHeight;

export var config = {
    width: width,
    height: height,
    scene: {
    },
    camera: {
        viewAngle: 80,
        aspect: width / height,
        near: 1,
        far: 1000,
        position: {
            x: 0,
            y: 0,
            z: 500
        }
    },
    light: {
        hex: 0xffffff,
        intensity: 5,
        position: {
            x: -1,
            y: 2,
            z: 3
        }
    }
};