var scene3 = new THREE.Scene();
var camera3 = new THREE.PerspectiveCamera( 75, 500/400, 0.1, 1000 );

var renderer3 = new THREE.WebGLRenderer();
renderer3.setSize( 500, 400 );
let renderDiv3 = document.getElementById("renderDiv3");
renderDiv3.appendChild( renderer3.domElement );

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

var mtlLoader2 = new THREE.MTLLoader();
mtlLoader2.setPath( 'assets/models/' );
var url = "house2.mtl";
mtlLoader2.load( url, function( materials ) {

    materials.preload();

    var objLoader2 = new THREE.OBJLoader();
    objLoader2.setMaterials( materials );
    objLoader2.setPath( 'assets/models/' );
    objLoader2.load( 'house2.obj', function ( object ) {

        
       
        object.traverse( function ( child ) {

            if ( child instanceof THREE.Mesh ) {
                child.material.color = new THREE.Color('rgb(219,219,219)'); 
                child.material.transparent = true;
                child.material.opacity = 0.3; 
                scene3.add(child);
                var edges = new THREE.EdgesGeometry( child.geometry );
                var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: new THREE.Color('rgb(0,0,0)') } ) );
                line.material.linewidth = 5;
                child.add( line );
            }
        } );

    });

});

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