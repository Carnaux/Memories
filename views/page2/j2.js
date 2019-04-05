var scene2 = new THREE.Scene();
var camera2 = new THREE.PerspectiveCamera( 75, 500/400, 0.1, 1000 );

var renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( 500, 400 );
let renderDiv2 = document.getElementById("renderDiv2");
renderDiv2.appendChild( renderer2.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: new THREE.Color('rgb(219,219,219)'), transparent: true, opacity: 0.6 } );
var cube = new THREE.Mesh( geometry, material );
scene2.add( cube );
var edges = new THREE.EdgesGeometry( geometry );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: new THREE.Color('rgb(0,0,0)') } ) );
line.material.linewidth = 5;
cube.add( line );

camera2.position.z = 5;

var controls2 = new THREE.OrbitControls( camera2 );
controls2.enableZoom = false;

var sky = new THREE.CubeGeometry(1000, 1000, 1000);

    
var cubeMaterials = [
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
var cubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
var mesh = new THREE.Mesh(sky, cubeMaterial);
scene2.add(mesh);


renderDiv2.addEventListener('mouseover', mouseOver);
renderDiv2.addEventListener('mouseleave', mouseLeave);

var animate2 = function () {
    requestAnimationFrame( animate2 );
    renderer2.render( scene2, camera2 );
};

function mouseOver(e){
    e.preventDefault();
    controls2.enabled = true;
}
function mouseLeave(e){
    e.preventDefault();
    controls2.enabled = false;
}

animate2();