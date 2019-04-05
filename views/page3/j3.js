var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera( 75, 500/400, 0.1, 1000 );

var renderer3 = new THREE.WebGLRenderer();
renderer3.setSize( 500, 400 );
let renderDiv3 = document.getElementById("renderDiv3");
renderDiv3.appendChild( renderer3.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene3.add( cube );

camera3.position.z = 5;

var controls3 = new THREE.OrbitControls( camera3 );
controls3.enableZoom = false;

var animate3 = function () {
    requestAnimationFrame( animate3 );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer3.render( scene3, camera3 );
};

animate3();