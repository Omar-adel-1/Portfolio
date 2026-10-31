const IMG={
 "nectar": "assets/img/nectar-store.webp",
 "stude": "assets/img/stude-mate.webp",
 "looma": "assets/img/looma.webp",
 "todo": "assets/img/todo-list-app.webp",
 "geo": "assets/img/geometric-data-visualization-system.webp",
 "sms": "assets/img/student-management-system.webp"
};
/* Projects: facts come from each repository README / file listing. Edit here. */
const P=[
{k:'nectar',t:'Nectar Store',c:'Mobile app · E-commerce',col:'#3ddc84',g:'https://github.com/Omar-adel-1/Nectar-Store',d:'A Flutter grocery shopping application connected to Firebase Authentication and Google Sign-In. It was my final project during the NTI Flutter training.',s:['Flutter','Dart','Firebase','Cloud Firestore','Figma'],f:['Firebase Authentication and Google Sign-In, as described in the README.','Standard Flutter project (android, ios, web, lib, test) with Firebase configuration.','The cover shows the home, favorites and cart screens.']},
{k:'stude',t:'Stude-Mate',c:'Mobile app · UI concept',col:'#7c6cff',g:'https://github.com/Omar-adel-1/Stude-Mate',d:'StudyMate is a student-focused learning companion UI concept built with Flutter. It covers course discovery, learning progress and the learner profile.',s:['Flutter','Dart','Flutter SVG','Firebase Core','Shared Preferences','Figma'],f:['Screens: splash, onboarding, login, sign up, home dashboard, drawer, My Courses, course details, profile and settings.','Consistent purple visual identity with clear course cards.','The README states this is a UI concept and does not claim every screen or feature is fully implemented.']},
{k:'looma',t:'LOOMA',c:'Mobile app · E-commerce UI',col:'#d8c3a0',g:'https://github.com/Omar-adel-1/LOOMA',d:'A Flutter project focused on mobile application UI implementation and training screens, presented as a fashion e-commerce interface.',s:['Flutter','Dart','Figma'],f:['The cover shows the home, product detail, categories and cart screens.']},
{k:'todo',t:'TO-DO List App',c:'Desktop app · Python',col:'#2cf2a0',g:'https://github.com/Omar-adel-1/TO-DO-ListAPP',d:'A desktop task manager built with Python and Tkinter, with a dark charcoal-and-cyan interface. Tasks are saved automatically to a JSON file.',s:['Python','Tkinter','JSON'],f:['Add, edit, delete and complete tasks, with instant auto-save to tasks.json.','Right-click context menu, Enter to add, Delete key to remove, double-click to toggle status.','Filter between all tasks and completed only.','Split into UI (main.py), data layer (task_manager.py) and settings (settings.py).']},
{k:'geo',t:'Geometric Data Visualization System',c:'Desktop app · Java',col:'#6c8cff',g:'https://github.com/Omar-adel-1/Geometric-Data-Visualization-System',d:'A Java Swing application that loads geometric shape data from text files, draws the shapes on a responsive panel and generates area reports. It demonstrates object-oriented design.',s:['Java','Swing','File I/O'],f:['Circle and Cube classes share a Drawable interface, so shapes are handled polymorphically.','A custom DrawingPanel wraps, centres and scrolls shapes as the window changes.','A dashboard to load, calculate, save and view, writing a sum-of-areas report.']},
{k:'sms',t:'Student Management System',c:'Console app · C++',col:'#3aa0ff',g:'https://github.com/Omar-adel-1/Student-Management-System',d:'A C++ console application for managing student records through a menu-driven interface, built around object-oriented design.',s:['C++','STL','OOP'],f:['Add, view and remove students by ID. Records hold name, ID, grade and a nested address.','Departments (IT, CS, IS, SE, MM) are handled with enums and input validation.','Records live in a std::vector, with declarations and implementation split across headers and source files.']}
];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const mob=()=>innerWidth<760||innerWidth/innerHeight<1,N=P.length;
gsap.registerPlugin(ScrollTrigger);
const intro={z:rm?0:9},fx={reveal:rm?1:0,boost:0};let lastT=performance.now(),mx=0,my=0,hover=-1,act=-1,gl=false,stops=[[0,0],[1,0]],sel=-1,selY=0,GEO={m:false,s0:1,s1:.7,xR:3,yR:0,off:3,D:11};

/* ---------- loader ---------- */
let loaded=0,total=N+1,shown=0,fin=0;
const done=()=>{loaded++};
document.fonts&&document.fonts.ready.then(done,done);
if(!document.fonts)done();
function finish(){
 if(fin)return;fin=1;
 const unlock=()=>document.body.classList.remove('lock','il');
 if(rm){$('#ld').remove();unlock();fx.reveal=1;return}
 gsap.timeline()
  .to('#ld',{opacity:0,duration:.6,onComplete:()=>$('#ld').remove()},0)
  .add(unlock,.3)
  .to(fx,{reveal:1,duration:2.4,ease:'power2.out'},0)
  .fromTo(fx,{boost:9},{boost:0,duration:2.2,ease:'power3.out'},0)
  .to(intro,{z:0,duration:2.8,ease:'expo.out'},0)
  .from('.rvh',{y:24,opacity:0,stagger:.12,duration:1,ease:'power3.out'},.4);
}
/* handwritten signature: custom Bezier paths, drawn stroke by stroke */
const SIG=[{"w":607,"ch":[{"d":"M8.0 238 C30.9 204.0 61.7 142.0 104.2 102.0","w":1.6,"u":0},{"d":"M104.2 102 C157.1 56.0 224.0 78.0 209.9 160.0","w":2.8,"u":0},{"d":"M209.9 160.0 C197.0 236.0 128.0 282.0 77.7 246.0","w":3.8,"u":0},{"d":"M77.7 246.0 C35.4 216.0 52.2 132.0 120.0 92.0","w":2.8,"u":0},{"d":"M206.0 260 C218.2 245.0 240.7 190.0 253.6 160.0","w":2.0,"u":1},{"d":"M253.6 160.0 C248.9 195.0 241.9 230.0 238.6 258.0","w":3.8,"u":0},{"d":"M238.6 258.0 C250.5 210.0 277.0 158.0 304.2 160.0","w":2.2,"u":0},{"d":"M304.2 160.0 C326.8 162.0 309.3 215.0 300.7 258.0","w":3.8,"u":0},{"d":"M300.7 258.0 C312.6 210.0 339.1 158.0 366.3 160.0","w":2.2,"u":0},{"d":"M366.3 160.0 C388.9 162.0 371.4 215.0 365.5 256.0","w":3.8,"u":0},{"d":"M365.5 256.0 C365.8 266.0 380.0 264.0 390.0 260.0","w":2.0,"u":0},{"d":"M390.0 260 C407.7 252.0 435.5 205.0 470.5 168.0","w":2.0,"u":0},{"d":"M470.5 168.0 C440.0 148.0 406.6 200.0 408.2 238.0","w":2.6,"u":0},{"d":"M408.2 238.0 C410.6 272.0 454.3 272.0 475.1 214.0","w":3.2,"u":0},{"d":"M475.1 214.0 C480.2 200.0 481.5 182.0 482.4 166.0","w":2.4,"u":0},{"d":"M482.4 166.0 C476.9 205.0 465.3 240.0 470.9 258.0","w":3.8,"u":0},{"d":"M470.9 258.0 C473.9 266.0 486.2 262.0 493.5 260.0","w":2.0,"u":0},{"d":"M493.5 260 C505.7 245.0 525.9 190.0 538.8 160.0","w":2.0,"u":0},{"d":"M538.8 160.0 C534.1 195.0 527.1 230.0 523.8 258.0","w":3.8,"u":0},{"d":"M523.8 258.0 C534.7 215.0 561.8 160.0 587.1 160.0","w":2.2,"u":0},{"d":"M587.1 160.0 C598.6 160.0 603.5 170.0 595.4 176.0","w":2.0,"u":0}]},{"w":599,"ch":[{"d":"M8.0 262 C58.5 205.0 125.8 110.0 175.3 58.0","w":2.0,"u":1},{"d":"M175.3 58.0 C172.4 130.0 164.3 205.0 178.2 262.0","w":3.8,"u":0},{"d":"M57.9 208 C106.3 196.0 157.2 206.0 215.2 192.0","w":2.2,"u":0},{"d":"M304.3 172 C265.4 148.0 227.8 198.0 229.4 236.0","w":2.6,"u":1},{"d":"M229.4 236.0 C231.8 270.0 273.6 268.0 298.1 226.0","w":3.2,"u":0},{"d":"M298.1 226.0 C310.2 200.0 332.8 110.0 347.8 58.0","w":2.4,"u":0},{"d":"M347.8 58.0 C354.5 36.0 374.8 38.0 367.7 62.0","w":2.4,"u":0},{"d":"M367.7 62.0 C351.8 130.0 331.2 210.0 326.6 256.0","w":3.8,"u":0},{"d":"M326.6 256.0 C326.5 268.0 343.8 262.0 355.7 260.0","w":2.0,"u":0},{"d":"M355.7 260 C360.4 248.0 362.8 236.0 369.0 228.0","w":2.0,"u":0},{"d":"M369.0 228.0 C398.9 228.0 433.9 214.0 436.8 188.0","w":2.6,"u":0},{"d":"M436.8 188.0 C439.7 162.0 399.1 158.0 379.2 200.0","w":2.8,"u":0},{"d":"M379.2 200.0 C362.8 236.0 394.3 274.0 436.3 248.0","w":3.2,"u":0},{"d":"M436.3 248.0 C444.0 244.0 447.0 252.0 452.3 260.0","w":2.0,"u":0},{"d":"M452.3 260 C472.8 238.0 522.0 130.0 556.6 72.0","w":2.0,"u":0},{"d":"M556.6 72.0 C576.5 30.0 606.0 32.0 582.2 82.0","w":2.4,"u":0},{"d":"M582.2 82.0 C556.8 140.0 513.2 220.0 521.0 250.0","w":3.6,"u":0},{"d":"M521.0 250.0 C522.8 264.0 539.3 262.0 551.2 260.0","w":2.0,"u":0}]},{"w":1035,"ch":[{"d":"M22.5 262 C73.0 205.0 140.3 110.0 189.8 58.0","w":2.0,"u":1},{"d":"M189.8 58.0 C186.9 130.0 178.8 205.0 192.7 262.0","w":3.8,"u":0},{"d":"M72.4 208 C120.8 196.0 171.7 206.0 229.7 192.0","w":2.2,"u":0},{"d":"M227.6 260 C256.3 220.0 301.6 120.0 337.7 66.0","w":2.0,"u":1},{"d":"M337.7 66.0 C356.4 30.0 385.1 36.0 361.7 84.0","w":2.4,"u":0},{"d":"M361.7 84.0 C337.0 150.0 308.9 210.0 295.9 252.0","w":3.8,"u":0},{"d":"M295.9 252.0 C300.6 240.0 336.4 176.0 370.2 168.0","w":2.2,"u":0},{"d":"M370.2 168.0 C406.3 160.0 390.6 250.0 330.7 262.0","w":3.2,"u":0},{"d":"M330.7 262.0 C346.4 264.0 356.0 262.0 370.2 260.0","w":2.0,"u":0},{"d":"M370.2 260 C384.1 248.0 408.8 205.0 435.0 166.0","w":2.0,"u":0},{"d":"M435.0 166.0 C403.7 150.0 370.4 236.0 412.0 258.0","w":2.8,"u":0},{"d":"M412.0 258.0 C441.4 272.0 474.8 220.0 447.2 174.0","w":3.2,"u":0},{"d":"M447.2 174.0 C457.5 180.0 463.3 220.0 469.1 260.0","w":2.2,"u":0},{"d":"M469.1 260 C484.6 240.0 503.8 190.0 516.3 162.0","w":2.0,"u":0},{"d":"M516.3 162.0 C511.0 200.0 504.0 235.0 517.1 250.0","w":3.6,"u":0},{"d":"M517.1 250.0 C532.3 266.0 553.0 220.0 569.2 162.0","w":2.6,"u":0},{"d":"M569.2 162.0 C563.9 200.0 555.9 240.0 556.9 258.0","w":3.8,"u":0},{"d":"M556.9 258.0 C561.8 268.0 576.8 262.0 584.1 260.0","w":2.0,"u":0},{"d":"M584.1 260 C599.6 240.0 623.4 190.0 637.8 164.0","w":2.0,"u":0},{"d":"M637.8 164.0 C655.8 166.0 678.8 166.0 698.4 160.0","w":2.2,"u":0},{"d":"M698.4 160.0 C669.4 190.0 627.7 226.0 606.4 252.0","w":3.4,"u":0},{"d":"M606.4 252.0 C615.8 274.0 658.0 270.0 694.5 260.0","w":2.2,"u":0},{"d":"M694.5 260 C699.2 248.0 701.6 236.0 707.8 228.0","w":2.0,"u":0},{"d":"M707.8 228.0 C737.7 228.0 772.7 214.0 775.6 188.0","w":2.6,"u":0},{"d":"M775.6 188.0 C778.5 162.0 737.9 158.0 718.0 200.0","w":2.8,"u":0},{"d":"M718.0 200.0 C701.6 236.0 733.1 274.0 775.1 248.0","w":3.2,"u":0},{"d":"M775.1 248.0 C782.8 244.0 785.8 252.0 791.1 260.0","w":2.0,"u":0},{"d":"M791.1 260 C806.6 240.0 823.8 200.0 840.2 164.0","w":2.0,"u":0},{"d":"M840.2 164.0 C835.3 200.0 825.4 238.0 831.0 256.0","w":3.4,"u":0},{"d":"M831.0 256.0 C833.6 266.0 845.9 262.0 855.5 260.0","w":2.0,"u":0},{"d":"M953.6 172 C914.7 148.0 877.1 198.0 878.7 236.0","w":2.6,"u":1},{"d":"M878.7 236.0 C881.1 270.0 922.9 268.0 947.4 226.0","w":3.2,"u":0},{"d":"M947.4 226.0 C959.5 200.0 982.1 110.0 997.1 58.0","w":2.4,"u":0},{"d":"M997.1 58.0 C1003.8 36.0 1024.1 38.0 1017.0 62.0","w":2.4,"u":0},{"d":"M1017.0 62.0 C1001.1 130.0 980.5 210.0 975.9 256.0","w":3.8,"u":0},{"d":"M975.9 256.0 C975.8 268.0 993.1 262.0 1005.0 260.0","w":2.0,"u":0},{"d":"M1005.0 260 C1048.6 272.0 1039.8 316.0 877.2 324.0","w":1.8,"u":0},{"d":"M877.2 324.0 C610.7 334.0 347.0 330.0 120.2 314.0","w":1.4,"u":0},{"d":"M120.2 314.0 C52.0 310.0 29.8 306.0 8.0 300.0","w":1.0,"u":0},{"d":"M852.4 126 C853.4 124 855.4 124 856.4 127","w":5.2,"u":1}]}];
const sv=$('#sig'),NS='http://www.w3.org/2000/svg',GAP=70;
const wg=SIG.map(w=>{const g=document.createElementNS(NS,'g');sv.append(g);
 return {g,w:w.w,ps:w.ch.map(c=>{const p=document.createElementNS(NS,'path');p.setAttribute('d',c.d);p.__w=c.w;p.__u=c.u;g.append(p);return p})}});
const pen=document.createElementNS(NS,'circle');pen.id='pen';pen.setAttribute('r',5);sv.append(pen);
let pos=[[0,0],[0,0],[0,0]];
function sigLayout(){
 const W=SIG.map(w=>w.w),n=innerWidth>=900?1:innerWidth>=640?2:3;
 pos=n===1?[[0,0],[W[0]+GAP,0],[W[0]+W[1]+GAP*2,0]]:n===2?[[0,0],[W[0]+GAP*.5,0],[0,300]]:[[0,0],[0,300],[0,600]];
 const vw=n===1?W[0]+W[1]+W[2]+GAP*2:n===2?Math.max(W[0]+W[1]+GAP*.5,W[2]):Math.max(...W),vh=(n===1?0:n===2?1:2)*300+330;
 wg.forEach((o,i)=>o.g.setAttribute('transform',`translate(${pos[i][0]} ${pos[i][1]})`));
 sv.setAttribute('viewBox',`0 10 ${vw} ${vh}`);
 const px=(sv.clientWidth||vw)/vw,f=Math.max(1,1.7/(2.6*px));
 wg.forEach(o=>o.ps.forEach(p=>p.setAttribute('stroke-width',(p.__w*f).toFixed(2))));
}
sigLayout();addEventListener('resize',sigLayout);
const strokes=wg.flatMap((o,wi)=>o.ps.map(p=>({p,wi,len:p.getTotalLength(),u:p.__u})));
const settle=()=>strokes.forEach(s=>{s.p.style.strokeDasharray='none';s.p.style.strokeDashoffset=0});
if(rm)settle();
else{
 strokes.forEach(s=>{s.p.style.strokeDasharray=`${s.len+.5} ${s.len+10}`;s.p.style.strokeDashoffset=s.len+6});
 const tl=gsap.timeline({delay:.2,onComplete:settle});
 strokes.forEach(s=>{
  if(s.u)tl.to({},{duration:.07});
  const o={v:s.len+6};
  tl.to(o,{v:0,duration:Math.max(.07,s.len/3400)*(s.p.__w>3?1.12:1),ease:'power1.inOut',
   onStart:()=>{pen.style.opacity=1},
   onUpdate:()=>{s.p.style.strokeDashoffset=o.v;const pt=s.p.getPointAtLength(clamp(s.len-o.v,0,s.len));pen.setAttribute('cx',pt.x+pos[s.wi][0]);pen.setAttribute('cy',pt.y+pos[s.wi][1])}});
 });
 tl.to(pen,{opacity:0,duration:.5});
}
const t0=performance.now();
gsap.ticker.add(()=>{if(fin)return;const p=loaded>=total?1:loaded/total;shown+=(p-shown)*.08;if(p===1&&shown>.995||performance.now()-t0>9000){shown=1;$('#ldn').textContent='100';$('#bar i').style.transform='scaleX(1)';finish();return}
 $('#ldn').textContent=String(Math.round(shown*100)).padStart(3,'0');$('#bar i').style.transform=`scaleX(${shown})`});

/* ---------- three.js scene ---------- */
let R,sc,cam,pl1,stars,planes=[],rings=[],ray,mp={x:9,y:9},accent;
function initGL(){
 try{if(!window.THREE)throw 0;R=new THREE.WebGLRenderer({canvas:$('#gl'),antialias:!mob(),powerPreference:'high-performance'})}catch(e){return false}
 R.outputEncoding=THREE.sRGBEncoding;R.setPixelRatio(Math.min(devicePixelRatio,mob()?1.5:1.75));
 sc=new THREE.Scene();sc.background=new THREE.Color(0x070a10);sc.fog=new THREE.FogExp2(0x070a10,.011);
 cam=new THREE.PerspectiveCamera(50,1,.1,400);sc.add(cam);sc.add(new THREE.AmbientLight(0x6f86a6,.8));
 pl1=new THREE.PointLight(0x5ac8fa,1.8,70);pl1.position.set(4,3,2);cam.add(pl1);
 const pl2=new THREE.PointLight(0xffd7b0,1.1,70);pl2.position.set(-5,-2,3);cam.add(pl2);accent=new THREE.Color(0x5ac8fa);
 ray=new THREE.Raycaster();
 const n=mob()?900:2400,pos=new Float32Array(n*3);
 for(let i=0;i<n;i++){pos[i*3]=(Math.random()-.5)*64;pos[i*3+1]=(Math.random()-.5)*42;pos[i*3+2]=10-Math.random()*205}
 const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(pos,3));
 stars=new THREE.Points(sg,new THREE.PointsMaterial({size:.07,color:0xbfe6ff,transparent:true,opacity:.85,depthWrite:false}));sc.add(stars);
 const ld=new THREE.TextureLoader(),an=R.capabilities.getMaxAnisotropy();
 P.forEach((p,i)=>{
  const g=new THREE.Group(),col=new THREE.Color(p.col),mat=new THREE.MeshBasicMaterial({color:0x111418,transparent:true,depthWrite:false,fog:false});
  const mesh=new THREE.Mesh(new THREE.PlaneGeometry(9,9*941/1672),mat);mesh.userData.i=i;
  ld.load(IMG[p.k],t=>{t.encoding=THREE.sRGBEncoding;t.anisotropy=an;mat.map=t;mat.color.set(0xffffff);mat.needsUpdate=true;done()},undefined,()=>{p.err=1;$('#err').textContent='One project image could not be loaded.';$('#err').style.display='block';done()});
  const edge=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry),new THREE.LineBasicMaterial({color:col,transparent:true,fog:false}));
  const glow=new THREE.Mesh(new THREE.PlaneGeometry(9.8,5.9),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.1,blending:THREE.AdditiveBlending,depthWrite:false,fog:false}));glow.position.z=-.05;
  g.add(glow,mesh,edge);g.userData={mesh,mat,edge,glow,h:0,sel:0};sc.add(g);planes.push(g);
 });
 const ring=(z,r,c,k)=>{for(let j=0;j<k;j++){const t=new THREE.Mesh(new THREE.TorusGeometry(r-j*.9,.045,8,140),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.85-j*.14}));t.position.z=z-j*2.2;t.userData.o=.85-j*.14;sc.add(t);rings.push(t)}};
 ring(-100,6.5,0x5ac8fa,4);ring(-182,7,0xece9e1,5);
 buildFX();return true;
}
const WV=`attribute vec3 aP;attribute float aR;uniform float uTime,uPx,uRev,uO;varying float vA;varying float vH;
void main(){vec3 p=aP;float h=sin(p.x*.45+uTime*.8)*.45+sin(p.z*.3-uTime*.6)*.55+sin((p.x+p.z)*.2+uTime*.4)*.4;p.y+=h*uRev;
vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;float d=-mv.z;
gl_PointSize=uPx*(1.3+aR*1.2)*(14./max(d,1.));vA=smoothstep(55.,8.,d)*smoothstep(1.,3.,d)*uRev*uO*(.4+aR*.6);vH=h;}`,
DV=`attribute vec3 aP;attribute float aR;uniform float uTime,uPx,uRev;varying float vA;varying float vH;
void main(){vec3 p=aP;p.y=mod(p.y+uTime*(.12+aR*.25)+7.,14.)-7.;p.x+=sin(uTime*.3+aR*20.)*.5;
vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;float d=-mv.z;
gl_PointSize=uPx*(1.5+aR*2.5)*(10./max(d,1.));vA=smoothstep(40.,6.,d)*smoothstep(1.,4.,d)*uRev*(.25+aR*.6);vH=aR*1.2;}`,
PF=`precision mediump float;varying float vA;varying float vH;
void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(mix(vec3(.35,.78,.98),vec3(1.),smoothstep(.2,1.1,vH)),smoothstep(.5,.05,r)*vA);}`,
TV=`attribute vec3 aP;attribute float aT;attribute float aS;uniform float uTime,uRev;varying float vA;
void main(){vec3 p=aP;p.z=mod(aP.z+uTime*aS,60.)-60.-(1.-aT)*(1.5+aS*.35);
vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;float d=-mv.z;vA=aT*smoothstep(60.,10.,d)*smoothstep(1.,6.,d)*uRev*.8;}`,
TF=`precision mediump float;varying float vA;void main(){gl_FragColor=vec4(.6,.88,1.,vA);}`;
let fxm=[],trT=0;
function buildFX(){
 const px=R.getPixelRatio(),m=mob(),A=(a,k)=>new THREE.BufferAttribute(a,k),
 mat=(vs,fs)=>new THREE.ShaderMaterial({vertexShader:vs,fragmentShader:fs,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0},uPx:{value:px},uRev:{value:0},uO:{value:1}}}),
 geo=(P,extra)=>{const g=new THREE.BufferGeometry();g.setAttribute('position',A(P,3));g.setAttribute('aP',A(P,3));for(const k in extra)g.setAttribute(k,A(extra[k],1));return g};
 const nx=m?70:120,nz=m?36:56,W=new Float32Array(nx*nz*3),Wr=new Float32Array(nx*nz);
 for(let i=0;i<nx;i++)for(let j=0;j<nz;j++){const k=i*nz+j;W[k*3]=(i/(nx-1)-.5)*50+(Math.random()-.5)*.3;W[k*3+2]=-1-j/(nz-1)*50+(Math.random()-.5)*.3;Wr[k]=Math.random()}
 const wv=new THREE.Points(geo(W,{aR:Wr}),mat(WV,PF));wv.position.set(0,-3.4,0);
 const nd=m?450:900,D=new Float32Array(nd*3),Dr=new Float32Array(nd);
 for(let i=0;i<nd;i++){D[i*3]=(Math.random()-.5)*30;D[i*3+1]=(Math.random()-.5)*14;D[i*3+2]=-2-Math.random()*38;Dr[i]=Math.random()}
 const dust=new THREE.Points(geo(D,{aR:Dr}),mat(DV,PF));
 const nt=m?36:72,T=new Float32Array(nt*6),Tt=new Float32Array(nt*2),Ts=new Float32Array(nt*2);
 for(let i=0;i<nt;i++){let x,y;do{x=(Math.random()-.5)*34;y=(Math.random()-.5)*18}while(Math.hypot(x,y)<3);const z=Math.random()*60,s=4+Math.random()*10;
  for(let v=0;v<2;v++){T.set([x,y,z],(i*2+v)*3);Tt[i*2+v]=v;Ts[i*2+v]=s}}
 const tr=new THREE.LineSegments(geo(T,{aT:Tt,aS:Ts}),mat(TV,TF));
 [wv,dust,tr].forEach(o=>{o.frustumCulled=false;cam.add(o)});fxm=[wv.material,dust.material,tr.material];
}
function fxUpdate(t,dt,vel){
 const o=clamp(1-scrollY/innerHeight*.75,.25,1);trT+=dt*(.5+fx.boost+vel*4);
 const [w,d,r]=fxm;w.uniforms.uTime.value=t-cam.position.z*.15;w.uniforms.uRev.value=fx.reveal;w.uniforms.uO.value=o;
 d.uniforms.uTime.value=t;d.uniforms.uRev.value=fx.reveal*(.5+.5*o);r.uniforms.uTime.value=trT;r.uniforms.uRev.value=fx.reveal;
}
function layout(){
 document.documentElement.dataset.layout=mob()?'stack':'split';
 const vh=innerHeight,top=e=>e.getBoundingClientRect().top+scrollY,w=$('#work'),wt=top(w),S=w.offsetHeight-vh,D=mob()?9:11;
 stops=[[0,0],[wt,-14+D],[wt+S,-14-16*(N-1)+D],[top($('#about')),-118],[top($('#experience')),-134],[top($('#contact')),-152],[Math.max(top($('#contact'))+1,document.documentElement.scrollHeight-vh),-170]];
 if(!gl)return;
 const m=mob(),a=innerWidth/innerHeight;R.setSize(innerWidth,innerHeight,false);cam.aspect=a;cam.fov=m?62:50;cam.updateProjectionMatrix();
 const tan=Math.tan((cam.fov/2)*Math.PI/180),halfW=D*tan*a,s=m?clamp(halfW*2*.95/9,.4,1):clamp(a*.5,.5,.9);
 const vH=2*D*tan,W0=m?Math.min(halfW*2*.92,.5*vH/.5628):Math.min(halfW*2*.62,.62*vH/.5628),W1=m?W0*.85:Math.min(W0*.72,halfW*2*.46);
 GEO={m,s0:W0/9,s1:W1/9,xR:m?0:halfW-halfW*.14-W1/2,yR:m?vH*.2:0,off:halfW*(m?.22:.34),D};
 planes.forEach((g,i)=>g.position.z=-14-16*i);
 const bot=innerHeight/2+((W1*.5628/2-GEO.yR)/vH)*innerHeight;document.documentElement.style.setProperty('--capmax',m?Math.max(160,innerHeight-83-bot-14)+'px':'');
}
const zAt=y=>{for(let i=1;i<stops.length;i++)if(y<=stops[i][0]){const a=stops[i-1],b=stops[i];return a[1]+(b[1]-a[1])*clamp((y-a[0])/Math.max(1,b[0]-a[0]))}return stops[stops.length-1][1]};
function pick(){ray.setFromCamera(new THREE.Vector2(mp.x,mp.y),cam);const h=ray.intersectObjects(planes.filter(g=>g.visible&&g.userData.mat.opacity>.5).map(g=>g.userData.mesh));return h.length?h[0].object.userData.i:-1}
const cur=matchMedia('(pointer:fine)').matches&&!rm?Object.assign(document.createElement('div'),{className:'cur'}):null;
function frame(){
 requestAnimationFrame(frame);
 const t=rm?0:performance.now()/1000,tz=zAt(scrollY)+intro.z,vel=Math.min(Math.abs(zAt(scrollY)+intro.z-cam.position.z)/6,3),now=performance.now(),dt=Math.min(.05,(now-lastT)/1000);lastT=now;
 cam.position.z+=(tz-cam.position.z)*(rm?1:.1);
 if(!rm){cam.position.x+=(mx*.7-cam.position.x)*.05;cam.position.y+=(my*.4-cam.position.y)*.05}
 cam.lookAt(rm?0:mx*.5,rm?0:my*.3,cam.position.z-12);
 if(cur&&!mob()){const i=scrollY>stops[1][0]-200&&scrollY<stops[3][0]?pick():-1;hover=i}
 const ph=clamp((scrollY/innerHeight-.25)/.6),sa=Math.max(...planes.map(q=>q.userData.sel));
 planes.forEach((g,i)=>{const u=g.userData,d=cam.position.z-g.position.z,o=clamp((d-2.5)/3)*clamp((60-d)/30)*ph*(1-sa*(1-u.sel));
  u.mat.opacity=o;u.edge.material.opacity=o*.9;u.glow.material.opacity=o*(.1+.12*u.sel);g.visible=o>.01;
  u.h+=((hover===i?1:0)-u.h)*.1;
  const c=clamp(1-Math.abs(d-GEO.D)/8),x0=(i%2?1:-1)*(1-c)*GEO.off,sl=u.sel;
  g.position.x=x0*(1-sl)+GEO.xR*sl;g.position.y=GEO.yR*sl+(rm?0:Math.sin(t*.6+i)*.12);
  g.rotation.y=(GEO.m?0:-.22)*sl+(1-c)*(i%2?-.25:.25)*(1-sl)+(rm?0:mx*.06*(1-sl*.5));
  g.scale.setScalar((GEO.s0+(GEO.s1-GEO.s0)*sl)*(1+u.h*.04*(1-sl)))});
 rings.forEach((r,i)=>{r.rotation.z=t*.1*(i%2?1:-1);r.material.opacity=r.userData.o*(1-.85*sa)});
 stars.rotation.z=t*.004;pl1.color.lerp(accent,.05);
 fxUpdate(t,rm?0:dt,vel);
 R.render(sc,cam);
}

/* ---------- project UI ---------- */
const dlg=$('#dlg');
function setAccent(i){const p=P[i];document.documentElement.style.setProperty('--pa',p.col);if(accent)accent.set(p.col);$('#cn').textContent=(i+1)+' of '+N;$('#cnt').textContent=(i+1)+' / '+N}
function fillCap(i){const p=P[i];$('#cc').textContent=p.c;$('#ct').textContent=p.t;$('#cd').textContent=p.d;$('#cs').innerHTML=p.s.map(x=>'<li>'+x+'</li>').join('');
 $('#cg').href=p.g;$('#cg').setAttribute('aria-label','View '+p.t+' on GitHub');$('#co').setAttribute('aria-label','Open '+p.t+' case study')}
/* selection state: idle (centred, no details) -> selected (cover right, details left) -> navigating (closes while scrolling on) */
const setState=s=>{$('#work').dataset.state=s};setState('idle');
const lbl=()=>sel>=0?'Close':(hover===act?'Open':'Go');
function openSel(i){
 if(!gl||sel>=0||i!==act)return;
 sel=i;selY=scrollY;setState('selected');fillCap(i);
 const u=planes[i].userData,cap=$('#cap');
 gsap.killTweensOf(u,'sel');gsap.to(u,{sel:1,duration:rm?.01:1.3,ease:'expo.inOut'});
 gsap.killTweensOf(cap);gsap.set(cap,{visibility:'visible',opacity:1});
 gsap.fromTo('#cap > *',{y:36,opacity:0},{y:0,opacity:1,duration:rm?.01:.9,stagger:rm?0:.07,delay:rm?0:.4,ease:'power3.out',overwrite:true});
 $('#tg').textContent='Close details';$('#tg').setAttribute('aria-pressed','true');$('#hint').style.opacity=0;
}
function closeSel(nav){
 if(sel<0)return;const i=sel;sel=-1;if(nav)setState('navigating');
 const u=planes[i].userData,cap=$('#cap');gsap.killTweensOf(u,'sel');
 gsap.to(u,{sel:0,duration:rm?.01:1,ease:'expo.inOut',onComplete:()=>{if(sel<0)setState('idle')}});
 gsap.to('#cap > *',{y:-14,opacity:0,duration:rm?.01:.3,overwrite:true});
 gsap.to(cap,{opacity:0,duration:.01,delay:rm?0:.3,onComplete:()=>{if(sel<0)cap.style.visibility='hidden'}});
 $('#tg').textContent='Open details';$('#tg').setAttribute('aria-pressed','false');$('#hint').style.opacity=1;
}
function openCS(i,e){
 const p=P[i],x=e&&e.clientX||innerWidth/2,y=e&&e.clientY||innerHeight/2;
 dlg.innerHTML=`<button class="btn" id="x">Close</button><div class="cs"><div><p class="mut">${p.c}</p><h2>${p.t}</h2><p>${p.d}</p><ul class="f">${p.f.map(q=>'<li>'+q+'</li>').join('')}</ul><ul class="tags" style="margin-bottom:1.6rem">${p.s.map(q=>'<li>'+q+'</li>').join('')}</ul><a class="btn" style="--pa:${p.col}" href="${p.g}" target="_blank" rel="noopener">View on GitHub</a></div><img src="${IMG[p.k]}" alt="${p.t} project cover"></div>`;
 dlg.showModal();$('#x').onclick=closeCS;
 if(!rm)gsap.fromTo(dlg,{clipPath:`circle(0% at ${x}px ${y}px)`},{clipPath:`circle(150% at ${x}px ${y}px)`,duration:.9,ease:'power3.inOut'});
 $('#x').focus();
}
function closeCS(){rm?dlg.close():gsap.to(dlg,{clipPath:'circle(0% at 100% 0)',duration:.6,ease:'power3.inOut',onComplete:()=>dlg.close()})}
dlg.addEventListener('cancel',e=>{e.preventDefault();closeCS()});
const goto=i=>{const w=$('#work'),wt=w.getBoundingClientRect().top+scrollY,S=w.offsetHeight-innerHeight;scrollTo({top:wt+(clamp(i,0,N-1)/(N-1))*S,behavior:rm?'auto':'smooth'})};
$('#co').onclick=e=>openCS(Math.max(0,act),e);$('#cx').onclick=()=>closeSel();$('#tg').onclick=()=>sel>=0?closeSel():openSel(act);
addEventListener('scroll',()=>{if(sel>=0&&Math.abs(scrollY-selY)>innerHeight*.15)closeSel(true)},{passive:true});
addEventListener('keydown',e=>{if(dlg.open||/INPUT|TEXTAREA/.test(document.activeElement.tagName))return;const r=$('#work').getBoundingClientRect();if(r.top>innerHeight*.5||r.bottom<innerHeight*.5)return;
 if(e.key==='ArrowRight'){e.preventDefault();goto(act+1)}else if(e.key==='ArrowLeft'){e.preventDefault();goto(act-1)}else if(e.key==='Escape'&&sel>=0)closeSel()});$('#pv').onclick=()=>goto(act-1);$('#nx').onclick=()=>goto(act+1);

/* ---------- input ---------- */
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=-(e.clientY/innerHeight*2-1);mp.x=mx;mp.y=my});
addEventListener('click',e=>{if(!gl||e.target.closest('a,button,input,textarea,label,form,dialog,nav,#cap,.ctl,#menu'))return;const wr=$('#work').getBoundingClientRect();if(wr.top>innerHeight*.5||wr.bottom<innerHeight*.5||document.body.classList.contains('lock'))return;mp.x=e.clientX/innerWidth*2-1;mp.y=-(e.clientY/innerHeight*2-1);const i=pick();if(i<0)return;if(i!==act)goto(i);else sel>=0?closeSel():openSel(i)});
if(cur){document.body.append(cur);const cx=gsap.quickTo(cur,'x',{duration:.35}),cy=gsap.quickTo(cur,'y',{duration:.35});
 addEventListener('pointermove',e=>{cx(e.clientX);cy(e.clientY)});
 document.addEventListener('pointerover',e=>{const hv=hover>=0&&!e.target.closest('a,button,input,textarea,#cap,.ctl');gsap.to(cur,{scale:hv?2:e.target.closest('a,button,input,textarea')?1.6:1,duration:.3});cur.textContent=hv?lbl():''});
 gsap.ticker.add(()=>{if(hover>=0)cur.textContent=lbl();else if(cur.textContent)cur.textContent=''})}
const mb=$('#mb'),menu=$('#menu');
mb.onclick=()=>{const o=menu.classList.toggle('open');mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu';document.body.classList.toggle('lock',o)};
$$('#menu a').forEach(a=>a.onclick=()=>mb.click());
$('#f').addEventListener('submit',e=>{e.preventDefault();const f=e.target;
 const body=`${f.m.value}\n\n— ${f.n.value} (${f.e.value})`;
 location.href=`mailto:oaabouzeid@gmail.com?subject=${encodeURIComponent(f.s.value)}&body=${encodeURIComponent(body)}`;
 $('#st').textContent='Opening your email app to send this message.'});

/* ---------- boot ---------- */
gl=initGL();
if(!gl){document.body.classList.add('nogl');total=1;
 $('#fb').innerHTML=P.map(p=>`<article><img src="${IMG[p.k]}" alt="${p.t} project cover" loading="lazy"><h3 style="font-size:2.6rem;margin:1rem 0 .4rem">${p.t}</h3><p class="mut">${p.c}</p><p>${p.d}</p><p style="margin-top:.8rem"><a class="btn" href="${p.g}" target="_blank" rel="noopener">View on GitHub</a></p></article>`).join('');
 $('#err').textContent='3D is unavailable on this device, so projects are shown as a list.';$('#err').style.display='block'}
setAccent(0);act=0;layout();
if(gl){frame();addEventListener('resize',()=>{layout();ScrollTrigger.refresh()})}
document.fonts&&document.fonts.ready.then(()=>{layout();ScrollTrigger.refresh()});
ScrollTrigger.addEventListener('refresh',layout);

/* ---------- scroll choreography ---------- */
ScrollTrigger.create({trigger:'#work',start:'top top',end:'bottom bottom',onUpdate:s=>{const i=Math.round(clamp(s.progress)*(N-1));if(i!==act){act=i;setAccent(i);if(sel>=0)closeSel(true)}}});
const links=$$('.links a');
['home','work','about','experience','contact'].forEach(id=>ScrollTrigger.create({trigger:'#'+id,start:'top 50%',end:'bottom 50%',onToggle:s=>s.isActive&&links.forEach(a=>a.classList.toggle('on',a.dataset.s===id))}));
if(!rm){
 $$('.rv').forEach(el=>gsap.from(el,{y:50,opacity:0,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
 gsap.fromTo('.tl-line',{scaleY:0},{scaleY:1,ease:'none',scrollTrigger:{trigger:'.tl ol',start:'top 70%',end:'bottom 70%',scrub:true}});
 gsap.to('.sigw',{z:650,rotationX:-6,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom 25%',scrub:true}});
 gsap.fromTo('.hb',{y:0,opacity:1},{y:-60,opacity:0,ease:'none',immediateRender:false,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom 45%',scrub:true}});
}
