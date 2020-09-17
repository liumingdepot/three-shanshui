<template>
    <div ref="three" style="position: fixed;top:0;left:0;width: 100vw;height: 100vh"></div>
</template>

<script>
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'

export default {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            group: null
        }
    },
    mounted() {
        this.createScene()
    },
    methods: {
        //创建场景
        createScene() {
            this.scene = new THREE.Scene()
            this.group = new THREE.Group()
            //环境光
            this.scene.add(new THREE.AmbientLight(0xffffff));
            //辅助线
            this.scene.add(new THREE.AxesHelper(10000));

            new OBJLoader().load(process.env.BASE_URL + 'model/scene.obj', (obj) => {
                new THREE.TextureLoader().load(process.env.BASE_URL + 'model/scene.png', (texture) => {
                    var material = new THREE.MeshLambertMaterial({
                        map: texture,
                    }); //材质对象Material
                    var mesh = new THREE.Mesh(obj.children[0].geometry, material); //网格模型对象Mesh
                    mesh.name = 'shan'
                    mesh.position.set(0, -50, 0)
                    this.scene.add(mesh)

                    const geometry = new THREE.SphereBufferGeometry(800, 600, 40);
                    geometry.scale(-1, 1, 1);

                    new THREE.TextureLoader().load(process.env.BASE_URL + 'model/bg.jpg',map=>{
                        var material1 = new THREE.MeshBasicMaterial({
                            map
                        });
                        var mesh1 = new THREE.Mesh(geometry, material1);
                        this.scene.add(mesh1);
                        this.createPlane()
                    })
                })
            })
        },
        createPlane() {
            new THREE.TextureLoader().load(process.env.BASE_URL + 'model/1111.png', (texture) => {
                texture.needsUpdate = true; //注意这句不能少
                let material = new THREE.SpriteMaterial({
                    map: texture
                });
                let mesh = new THREE.Sprite(material);
                // console.log(mesh);
                mesh.position.set(0, -25, 70)
                mesh.scale.set(30, 50, 1);
                mesh.name = 'a1'
                this.group.add(mesh)
                this.createCamera()
            });
        },
        //创建相机对象
        createCamera() {
            const width = this.$refs.three.clientWidth
            const height = this.$refs.three.clientHeight
            var k = width / height; //窗口宽高比
            //创建相机对象
            this.camera = new THREE.PerspectiveCamera(45, k, 0.1, 10000);
            this.camera.position.set(170, 208, 342); //设置相机位置
            // this.camera.lookAt(this.scene.position);
            this.createRenderer()
        },
        createRenderer() {
            const width = this.$refs.three.clientWidth
            const height = this.$refs.three.clientHeight
            this.renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true
            });
            // this.renderer.outputEncoding = THREE.sRGBEncoding;
            this.renderer.setSize(width, height); //设置渲染区域尺寸
            this.renderer.setClearColor(0xb9d3ff, 0); //设置背景颜色
            this.$refs.three.appendChild(this.renderer.domElement); //body元素中插入canvas对象

            this.scene.add(this.group);
            this.createcControls()

            this.renderer.domElement.addEventListener('dblclick', event => {
                event.preventDefault();
                const raycaster = new THREE.Raycaster();
                const mouse = new THREE.Vector2();
                //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
                mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, this.camera);
                const intersects = raycaster.intersectObjects(this.group.children, true);
                if (intersects.length > 0) {
                    this.$emit('changepPanoramic', true)
                }
                this.render()
            }, false);
        },
        createcControls() {
            //创建控件对象  相机对象camera作为参数   控件可以监听鼠标的变化，改变相机对象的属性
            const controls = new OrbitControls(this.camera, this.renderer.domElement);
            controls.enablePan = false;
            // controls.enableZoom = false;
            //缩放范围
            controls.minDistance = 100;
            controls.maxDistance = 800;
            // 上下旋转范围
            controls.minPolarAngle = Math.PI * (30 / 180);
            controls.maxPolarAngle = Math.PI * (80 / 180);
            // 左右旋转范围
            controls.minAzimuthAngle = -Math.PI * (100 / 180);
            controls.maxAzimuthAngle = Math.PI * (100 / 180);
            //监听鼠标事件，触发渲染函数，更新canvas画布渲染效果
            controls.addEventListener('change', () => {
                this.render()
            });
            this.render()

            window.THREE = this.THREE
            window.scene = this.scene
            window.renderer = this.renderer
        },
        render() {
            this.renderer.render(this.scene, this.camera);
        }
    }
}
</script>

<style scoped>

</style>