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
            group: null,
            group2: null
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
            this.group2 = new THREE.Group()
            //环境光
            this.scene.add(new THREE.AmbientLight(0xffffff));
            //辅助线
            this.scene.add(new THREE.AxesHelper(300));

            new OBJLoader().load(process.env.BASE_URL + 'model/scene.obj', (obj) => {
                new THREE.TextureLoader().load(process.env.BASE_URL + 'model/scene.jpg', (texture) => {
                    var material = new THREE.MeshLambertMaterial({
                        map: texture,
                    }); //材质对象Material
                    var mesh = new THREE.Mesh(obj.children[0].geometry, material); //网格模型对象Mesh
                    mesh.name = 'shan'
                    mesh.position.set(0, -50, 0)
                    this.scene.add(mesh)

                    const geometry = new THREE.SphereBufferGeometry(800, 600, 40);
                    geometry.scale(-1, 1, 1);

                    new THREE.TextureLoader().load(process.env.BASE_URL + 'model/bg.jpg', map => {
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
            const promiseArr = []
            const arr = ['b1', 'b2', 'b3', 'b11', 'b22', 'b33']
            for (let i = 0; i < 6; i++) {
                promiseArr.push(new Promise(resolve => {
                    new THREE.TextureLoader().load(process.env.BASE_URL + 'model/' + arr[i] + '.png', res => {
                        resolve(res)
                    })
                }))
            }
            Promise.all(promiseArr).then(([texture1, texture2, texture3, texture4, texture5, texture6]) => {
                let mesh1 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh2 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture2}));
                let mesh3 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture3}));
                let mesh4 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh5 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture5}));
                let mesh6 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture6}));
                mesh1.position.set(100, -25, 70)
                mesh2.position.set(0, -25, 70)
                mesh3.position.set(-50, -25, 0)
                mesh4.position.set(100, -25, 70)
                mesh5.position.set(0, -25, 70)
                mesh6.position.set(-50, -25, 0)
                mesh1.scale.set(30, 50, 1);
                mesh2.scale.set(30, 50, 1);
                mesh3.scale.set(30, 50, 1);
                mesh4.scale.set(30, 50, 1);
                mesh5.scale.set(30, 50, 1);
                mesh6.scale.set(30, 50, 1);
                mesh1.name = 'a1'
                mesh2.name = 'a2'
                mesh3.name = 'a3'
                mesh4.name = 'aa1'
                mesh5.name = 'aa2'
                mesh6.name = 'aa3'
                mesh4.visible = false
                mesh5.visible = false
                mesh6.visible = false
                this.group.add(mesh1)
                this.group.add(mesh2)
                this.group.add(mesh3)
                this.group2.add(mesh4)
                this.group2.add(mesh5)
                this.group2.add(mesh6)
            }).then(() => {
                this.createCamera()
            })
        },
        //创建相机对象
        createCamera() {
            const width = this.$refs.three.clientWidth
            const height = this.$refs.three.clientHeight
            var k = width / height; //窗口宽高比
            //创建相机对象
            this.camera = new THREE.PerspectiveCamera(45, k, 0.1, 10000);
            this.camera.position.set(170, 208, 342); //设置相机位置
            this.camera.lookAt(this.scene.position);
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
            this.scene.add(this.group2);
            this.createcControls()

            this.renderer.domElement.addEventListener('dblclick', event => {
                event.preventDefault();
                const raycaster = new THREE.Raycaster();
                const mouse = new THREE.Vector2();
                //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
                mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, this.camera);
                const intersects = raycaster.intersectObjects(this.group2.children, true);
                if (intersects.length > 0) {
                    const name = intersects[0].object.name
                    if (name == 'aa1') {
                        this.$emit('changepPanoramic', {
                            type:1,
                            name
                        })
                    }
                    if (name == 'aa2') {
                        this.$emit('changepPanoramic', {
                            type:2,
                            name
                        })
                    }
                }
                this.render()
            }, false);

            this.renderer.domElement.addEventListener('mousemove', event => {
                event.preventDefault();
                const raycaster = new THREE.Raycaster();
                const mouse = new THREE.Vector2();
                //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
                mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, this.camera);
                const intersects = raycaster.intersectObjects(this.group.children, true);
                if (intersects.length > 0) {
                    const name = intersects[0].object.name
                    for (let item of this.group2.children) {
                        if (item.name == 'a' + name) {
                            item.visible = true
                        } else {
                            item.visible = false
                        }
                    }
                } else {
                    for (let item of this.group2.children) {
                        item.visible = false
                    }
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