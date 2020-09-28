<template>
    <div>
        <div ref="three" style="position: fixed;top:0;left:0;width: 100vw;height: 100vh"></div>
        <div class="jq" v-if="show">景区{{index}}</div>
    </div>
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
            group2: null,
            index:0,
            show:false
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
            // this.scene.add(new THREE.AxesHelper(300));

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
                let mesh1 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture2}));
                let mesh2 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture3}));
                let mesh3 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture5}));
                let mesh4 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture6}));
                let mesh11 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh11s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh12 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh12s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh13 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh13s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh14 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh14s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh15 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh15s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh16 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh16s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh17 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh17s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh18 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh18s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                let mesh19 = new THREE.Sprite(new THREE.SpriteMaterial({map: texture1}));
                let mesh19s = new THREE.Sprite(new THREE.SpriteMaterial({map: texture4}));
                mesh11.position.set(-25, -38, 43)
                mesh11.name = 'mesh1'
                mesh11s.position.set(-25, -38, 43)
                mesh11s.name = 'mesh1-1'
                mesh11s.visible = false

                mesh12.position.set(-10, -38, 65)
                mesh12.name = 'mesh2'
                mesh12s.position.set(-10, -38, 65)
                mesh12s.name = 'mesh2-2'
                mesh12s.visible = false

                mesh13.position.set(-55, -38, 0)
                mesh13.name = 'mesh3'
                mesh13s.position.set(-55, -38, 0)
                mesh13s.name = 'mesh3-3'
                mesh13s.visible = false

                mesh14.position.set(-20, -38, 30)
                mesh14.name = 'mesh4'
                mesh14s.position.set(-20, -38, 30)
                mesh14s.name = 'mesh4-4'
                mesh14s.visible = false

                mesh15.position.set(0, -38, 70)
                mesh15.name = 'mesh5'
                mesh15s.position.set(0, -38, 70)
                mesh15s.name = 'mesh5-5'
                mesh15s.visible = false

                mesh16.position.set(-35, -38, 20)
                mesh16.name = 'mesh6'
                mesh16s.position.set(-35, -38, 20)
                mesh16s.name = 'mesh6-6'
                mesh16s.visible = false

                mesh17.position.set(-30, -38, 53)
                mesh17.name = 'mesh7'
                mesh17s.position.set(-30, -38, 53)
                mesh17s.name = 'mesh7-7'
                mesh17s.visible = false

                mesh18.position.set(-80, -38, -30)
                mesh18.name = 'mesh8'
                mesh18s.position.set(-80, -38, -30)
                mesh18s.name = 'mesh8-8'
                mesh18s.visible = false

                mesh19.position.set(-45, -38, 25)
                mesh19.name = 'mesh9'
                mesh19s.position.set(-45, -38, 25)
                mesh19s.name = 'mesh9-9'
                mesh19s.visible = false

                mesh1.position.set(150, -30, 70)
                mesh2.position.set(-150, -20, 0)
                mesh3.position.set(150, -30, 70)
                mesh4.position.set(-150, -20, 0)
                mesh1.name = 'mesh100'
                mesh2.name = 'mesh101'
                mesh3.name = 'mesh100-100'
                mesh4.name = 'mesh101-101'

                mesh3.visible = false
                mesh4.visible = false
                this.group.add(mesh1)
                this.group.add(mesh2)
                this.group.add(mesh11)
                this.group.add(mesh12)
                this.group.add(mesh13)
                this.group.add(mesh14)
                this.group.add(mesh15)
                this.group.add(mesh16)
                this.group.add(mesh17)
                this.group.add(mesh18)
                this.group.add(mesh19)
                this.group2.add(mesh3)
                this.group2.add(mesh4)
                this.group2.add(mesh11s)
                this.group2.add(mesh12s)
                this.group2.add(mesh13s)
                this.group2.add(mesh14s)
                this.group2.add(mesh15s)
                this.group2.add(mesh16s)
                this.group2.add(mesh17s)
                this.group2.add(mesh18s)
                this.group2.add(mesh19s)
                for(let item of [...this.group.children,...this.group2.children]){
                    item.scale.set(15, 25, 1);
                }
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
                    this.show = false
                    const name = intersects[0].object.name
                    if (name.split('-')[1] < 100) {
                        this.$emit('changepPanoramic', {
                            type:1,
                            name
                        })
                    }
                    if (name.split('-')[1] == 100) {
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
                        if (item.name == name + '-' + name.split('mesh')[1]) {
                            item.visible = true
                        } else {
                            item.visible = false
                        }
                        this.show = true
                        this.index = name.split('mesh')[1]
                    }
                } else {
                    for (let item of this.group2.children) {
                        item.visible = false
                    }
                    this.show = false
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
.jq{
    position: fixed;
    top: 30%;
    left: 50%;
    width: 6em;
    line-height: 40px;
    text-align: center;
    z-index: 999999;
    color: #fff;
    border-radius: 10px;
    background-color: rgba(0,0,0,.7);
}
</style>