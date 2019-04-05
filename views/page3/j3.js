var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera( 75, 500/400, 0.1, 1000 );

var renderer3 = new THREE.WebGLRenderer();
renderer3.setSize( 500, 400 );
let renderDiv3 = document.getElementById("renderDiv3");
renderDiv3.appendChild( renderer3.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: new THREE.Color('rgb(219,219,219)'), transparent: true, opacity: 0.6 } );
var cube2 = new THREE.Mesh( geometry, material );
scene3.add( cube2 );
var edges3 = new THREE.EdgesGeometry( geometry );
var line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: new THREE.Color('rgb(0,0,0)') } ) );
line3.material.linewidth = 5;
cube2.add( line3 );

camera3.position.z = 5;

var controls3 = new THREE.OrbitControls( camera3 );
controls3.enableZoom = false;

var sky2 = new THREE.CubeGeometry(1000, 1000, 1000);

    
var cubeMaterials2 = [
    // back side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }),
    // front side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }), 
    // Top side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }), 
    // Bottom side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }), 
    // right side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }), 
    // left side
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load('assets/imgs/paper.png'),
      side: THREE.DoubleSide
    }) 
  ];

//add cube & materials
var cubeMaterial2 = new THREE.MeshFaceMaterial(cubeMaterials2);
var mesh2 = new THREE.Mesh(sky2, cubeMaterial2);
scene3.add(mesh2);

renderDiv3.addEventListener('mouseover', mouseOver3);
renderDiv3.addEventListener('mouseleave', mouseLeave3);

var animate3 = function () {
    requestAnimationFrame( animate3 );

    

    renderer3.render( scene3, camera3 );
};

function mouseOver3(e){
    e.preventDefault();
    controls3.enabled = true;
}
function mouseLeave3(e){
    e.preventDefault();
    controls3.enabled = false;
}

animate3();