// stars.js

function createStarField() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.zIndex = '-1';
    document.body.appendChild(renderer.domElement);

    // Create star geometry and subtle, rounded material
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.7,           // Smaller size for subtle effect
        transparent: true,
        opacity: 0.6,        // Lower opacity for subtlety
        sizeAttenuation: true,
    });

    // Generate random star positions
    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
        const x = THREE.MathUtils.randFloatSpread(200);
        const y = THREE.MathUtils.randFloatSpread(200);
        const z = THREE.MathUtils.randFloatSpread(200);
        starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    function animate() {
        requestAnimationFrame(animate);
        stars.rotation.x += 0.0003;
        stars.rotation.y += 0.0003;
        renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    animate();
}

export default createStarField;
