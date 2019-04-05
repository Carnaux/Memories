var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera( 75, 500/400, 0.1, 1000 );

var renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( 500, 400 );
let renderDiv2 = document.getElementById("renderDiv2");
renderDiv2.appendChild( renderer2.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene2.add( cube );

camera2.position.z = 5;

var controls2 = new THREE.OrbitControls( camera2 );
controls2.enableZoom = false;

var animate2 = function () {
    requestAnimationFrame( animate2 );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer2.render( scene2, camera2 );
};

animate2();