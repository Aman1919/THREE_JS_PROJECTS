import * as THREE from "three";


class Init{
    /**
     * camera,scene,renderer,orbitcontrol
     */
    constructor(){
        this.camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(window.innerWidth,window,innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

     onWindowResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    }


}