var canvas = document.querySelector('canvas')
canvas.width = 350
canvas.height = 350
var c = canvas.getContext('2d')
const xinput = document.getElementById('rangex')
const yinput = document.getElementById('rangey')
const zinput = document.getElementById('rangez')

const FOREground = "#10ff10"

ranx = 0
rany = 0
ranz = 0

xinput.addEventListener('input', e => {
  ranx = Number(e.target.value);
});
yinput.addEventListener('input', e => {
  rany = Number(e.target.value);
});
zinput.addEventListener('input', e => {
  ranz = Number(e.target.value);
});

function clear(){c.clearRect(0,0,canvas.width, canvas.height)}

function point({x,y}){
  const s = 5
  c.fillStyle = FOREground;
  c.fillRect(x + s/2,y + s/2,s,s)
}

function line(p1,p2){
  c.strokeStyle = FOREground;
  c.beginPath()
  c.moveTo(p1.x,p1.y)
  c.lineTo(p2.x,p2.y)
  c.stroke()
}

function onscreen(p){
  return {
    x: (((p.x + 1)/2)* canvas.width),
    y: ((1 -(p.y + 1)/2)* canvas.height),
  }
}

function make3d({x,y,z}){
  return {
    x: x/z,
    y: y/z
  }
}

function rotate_z({x,y,z},tetha,centerz){
  let s = Math.sin(tetha);
  let c = Math.cos(tetha);
  const shiftz = z - centerz;
  
  const newz = x * c - shiftz * s;
  const newx = x * s + shiftz * c;
  
  return{
  x: newx,
  y,
  z: newz + centerz
  }
  
}

function rotate_y({x,y,z},tetha,centery){
  let s = Math.sin(tetha);
  let c = Math.cos(tetha);
  const shifty = y - centery;
  
  const newy = x * c - shifty * s;
  const newx = x * s + shifty * c;
  
  return{
  x: newx,
  y: newy + centery,
  z 
  }
  
}

function rotate_x({x,y,z},tetha,centerx){
  let s = Math.sin(tetha);
  let c = Math.cos(tetha);
  const shiftx = x - centerx;
  
  const newy = y * c - shiftx * s;
  const newx = y * s + shiftx * c;
  
  return{
  x: newx + centerx,
  y: newy,
  z
  }
  
}

function wireframe(){
for (const f of faces) {
    for (let i = 0; i < f.length; i++){
      
      const a = points[f[i]];
      const b = points[f[(i+1)% f.length]];
      line(
      onscreen(make3d(
      rotate_x(
      rotate_z(
      rotate_y(b,angley,centery),
      anglez,centerz),
      anglex,centerx
      ))),
      onscreen(make3d(
      rotate_x(
      rotate_z(
      rotate_y(a,angley,centery),
      anglez,centerz),
      anglex,centerx
      )))
      )
    }}}

const plane1 = 2
const plane2 = 3
function


 make_cube(cube_x,cube_y,cube_z,depth,length, height){
    // MAKE A NEW CODE, THIS ONE SUCKS(i mean look at it it's gonna take forever for me to make a simple cube-making function you better start with a better one now that you understand this better)
}


const points = [
  {x: 0.5, y: 0.5, z: plane2},
  {x: -0.5, y: 0.5, z: plane2},
  {x: 0.5, y: -0.5, z: plane2},
  {x: -0.5, y: -0.5, z: plane2},
  
  {x: 0.5, y: 0.5, z: plane1},
  {x: -0.5, y: 0.5, z: plane1},
  {x: 0.5, y: -0.5, z: plane1},
  {x: -0.5, y: -0.5, z: plane1},
]

const faces = [
[4,5,7,6],[0,1,3,2],
[0,2,6,4],[1,3,7,5],
[2,3,7,6],[0,1,5,4]]
const edges = [
[0,2],[1,3],[4,6],[5,7],
[0,1],[2,3],[4,5],[6,7]]


const FPS = 60;
var zd = 0;
const dt = 1/FPS
let anglex = 0;
let angley = 0;
let anglez = 0;
var centerx = (-0.5 + 0.5)/2
var centery = (-0.5 + 0.5)/2
var centerz = (plane2 + plane1)/2







function animate(){
  clear()
  
  anglex = ranx//(Math.sin(zd+ Math.PI/1))/2
  angley = rany//(Math.sin(zd+ Math.PI/2))/2
  anglez = ranz//(Math.sin(zd))/2
  
  wireframe()
  
  zd += 2*dt
  setTimeout(animate, 1000/FPS)
}
setTimeout(animate, 1000/FPS)
