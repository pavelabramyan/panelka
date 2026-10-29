(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="170",Fu=0,dl=1,Ou=2,Bu=0,Oc=1,Bc=2,zn=3,ci=0,Ke=1,Tn=2,ai=0,ar=1,Va=2,pl=3,ml=4,zu=5,Ei=100,ku=101,Gu=102,Hu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,Wa=204,Xa=205,$u=206,Zu=207,Ju=208,Ku=209,ju=210,Qu=211,th=212,eh=213,nh=214,qa=0,Ya=1,$a=2,cr=3,Za=4,Ja=5,Ka=6,ja=7,zc=0,ih=1,rh=2,oi=0,sh=1,ah=2,oh=3,kc=4,lh=5,ch=6,uh=7,Gc=300,ur=301,hr=302,Qa=303,to=304,Qs=306,Ws=1e3,wi=1001,eo=1002,Mn=1003,hh=1004,ss=1005,wn=1006,sa=1007,Ai=1008,qn=1009,Hc=1010,Vc=1011,Wr=1012,Vo=1013,Ci=1014,Hn=1015,jr=1016,Wo=1017,Xo=1018,fr=1020,Wc=35902,Xc=1021,qc=1022,yn=1023,Yc=1024,$c=1025,or=1026,dr=1027,Zc=1028,qo=1029,Jc=1030,Yo=1031,$o=1033,Fs=33776,Os=33777,Bs=33778,zs=33779,no=35840,io=35841,ro=35842,so=35843,ao=36196,oo=37492,lo=37496,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,vo=37816,xo=37817,yo=37818,Mo=37819,So=37820,bo=37821,ks=36492,Eo=36494,To=36495,Kc=36283,wo=36284,Ao=36285,Ro=36286,fh=3200,dh=3201,jc=0,ph=1,ri="",Ze="srgb",_r="srgb-linear",ta="linear",ae="srgb",Fi=7680,gl=519,mh=512,gh=513,_h=514,Qc=515,vh=516,xh=517,yh=518,Mh=519,Co=35044,_l="300 es",Vn=2e3,Xs=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vl=1234567;const Or=Math.PI/180,pr=180/Math.PI;function An(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Zo(i,t){return(i%t+t)%t}function Sh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function bh(i,t,e){return i!==t?(e-i)/(t-i):0}function Br(i,t,e){return(1-e)*i+e*t}function Eh(i,t,e,n){return Br(i,t,1-Math.exp(-e*n))}function Th(i,t=1){return t-Math.abs(Zo(i,t*2)-t)}function wh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ah(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ch(i,t){return i+Math.random()*(t-i)}function Ph(i){return i*(.5-Math.random())}function Lh(i){i!==void 0&&(vl=i);let t=vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dh(i){return i*Or}function Ih(i){return i*pr}function Uh(i){return(i&i-1)===0&&i!==0}function Nh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oh(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),m=s((n-t)/2),p=a((n-t)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bh={DEG2RAD:Or,RAD2DEG:pr,generateUUID:An,clamp:De,euclideanModulo:Zo,mapLinear:Sh,inverseLerp:bh,lerp:Br,damp:Eh,pingpong:Th,smoothstep:wh,smootherstep:Ah,randInt:Rh,randFloat:Ch,randFloatSpread:Ph,seededRandom:Lh,degToRad:Dh,radToDeg:Ih,isPowerOfTwo:Uh,ceilPowerOfTwo:Nh,floorPowerOfTwo:Fh,setQuaternionFromProperEuler:Oh,normalize:se,denormalize:xn};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,r,s,a,o,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],p=n[8],_=r[0],g=r[3],d=r[6],E=r[1],S=r[4],v=r[7],U=r[2],R=r[5],A=r[8];return s[0]=a*_+o*E+l*U,s[3]=a*g+o*S+l*R,s[6]=a*d+o*v+l*A,s[1]=c*_+u*E+h*U,s[4]=c*g+u*S+h*R,s[7]=c*d+u*v+h*A,s[2]=f*_+m*E+p*U,s[5]=f*g+m*S+p*R,s[8]=f*d+m*v+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,p=e*h+n*f+r*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ht;function tu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zh(){const i=qs("canvas");return i.style.display="block",i}const xl={};function Ur(i){i in xl||(xl[i]=!0,console.warn(i))}function kh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const yl=[.64,.33,.3,.6,.15,.06],Ml=[.2126,.7152,.0722],Sl=[.3127,.329],bl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[_r]:{primaries:yl,whitePoint:Sl,transfer:ta,toXYZ:bl,fromXYZ:El,luminanceCoefficients:Ml,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:yl,whitePoint:Sl,transfer:ae,toXYZ:bl,fromXYZ:El,luminanceCoefficients:Ml,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}});let Oi;class Vh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=qs("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wh=0;class eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oa(r[a].image)):s.push(oa(r[a]))}else s=oa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class qe extends vr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=wi,r=wi,s=wn,a=Ai,o=yn,l=qn,c=qe.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=An(),this.name="",this.source=new eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Gc;qe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,r=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],p=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(m+1)/2,U=(d+1)/2,R=(u+f)/4,A=(h+_)/4,D=(p+g)/4;return S>v&&S>U?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=R/n,s=A/n):v>U?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=D/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=A/s,r=D/s),this.set(n,r,s,e),this}let E=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-p)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qh extends vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new qe(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nu extends qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yh extends qe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],p=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=p,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==p){let g=1-o;const d=l*f+c*m+u*p+h*_,E=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const U=Math.sqrt(S),R=Math.atan2(U,d*E);g=Math.sin(g*R)/U,o=Math.sin(o*R)/U}const v=o*E;if(l=l*g+f*v,c=c*g+m*v,u=u*g+p*v,h=h*g+_*v,g===1-o){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],p=s[a+3];return t[e]=o*p+u*h+l*m-c*f,t[e+1]=l*p+u*f+c*h-o*m,t[e+2]=c*p+u*m+o*f-l*h,t[e+3]=u*p-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),m=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*p,this._y=c*m*h-f*u*p,this._z=c*u*p+f*m*h,this._w=c*u*h-f*m*p;break;case"YXZ":this._x=f*u*h+c*m*p,this._y=c*m*h-f*u*p,this._z=c*u*p-f*m*h,this._w=c*u*h+f*m*p;break;case"ZXY":this._x=f*u*h-c*m*p,this._y=c*m*h+f*u*p,this._z=c*u*p+f*m*h,this._w=c*u*h-f*m*p;break;case"ZYX":this._x=f*u*h-c*m*p,this._y=c*m*h+f*u*p,this._z=c*u*p-f*m*h,this._w=c*u*h+f*m*p;break;case"YZX":this._x=f*u*h+c*m*p,this._y=c*m*h+f*u*p,this._z=c*u*p-f*m*h,this._w=c*u*h-f*m*p;break;case"XZY":this._x=f*u*h-c*m*p,this._y=c*m*h-f*u*p,this._z=c*u*p+f*m*h,this._w=c*u*h+f*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),u=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new I,Tl=new Qr;class ts{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),os.subVectors(this.max,Er),Bi.subVectors(t.a,Er),zi.subVectors(t.b,Er),ki.subVectors(t.c,Er),jn.subVectors(zi,Bi),Qn.subVectors(ki,zi),gi.subVectors(Bi,ki);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-gi.z,gi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,gi.z,0,-gi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-gi.y,gi.x,0];return!ca(e,Bi,zi,ki,os)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Bi,zi,ki,os))?!1:(ls.crossVectors(jn,Qn),e=[ls.x,ls.y,ls.z],ca(e,Bi,zi,ki,os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new I,new I,new I,new I,new I,new I,new I,new I],pn=new I,as=new ts,Bi=new I,zi=new I,ki=new I,jn=new I,Qn=new I,gi=new I,Er=new I,os=new I,ls=new I,_i=new I;function ca(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){_i.fromArray(i,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const $h=new ts,Tr=new I,ua=new I;class Jo{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(ua)),this.expandByPoint(Tr.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new I,ha=new I,cs=new I,ti=new I,fa=new I,us=new I,da=new I;class iu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ha.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(ha);const s=t.distanceTo(e)*.5,a=-this.direction.dot(cs),o=ti.dot(this.direction),l=-ti.dot(cs),c=ti.lengthSq(),u=Math.abs(1-a*a);let h,f,m,p;if(u>0)if(h=a*l-o,f=a*o-l,p=s*u,h>=0)if(f>=-p)if(f<=p){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ha).addScaledVector(cs,f),m}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),r=Nn.dot(Nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,r,s){fa.subVectors(e,t),us.subVectors(n,t),da.crossVectors(fa,us);let a=this.direction.dot(da),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ti.subVectors(this.origin,t);const l=o*this.direction.dot(us.crossVectors(ti,us));if(l<0)return null;const c=o*this.direction.dot(fa.cross(ti));if(c<0||l+c>a)return null;const u=-o*ti.dot(da);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,r,s,a,o,l,c,u,h,f,m,p,_,g){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,u,h,f,m,p,_,g)}set(t,e,n,r,s,a,o,l,c,u,h,f,m,p,_,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=p,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),a=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*h,p=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+p*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=p+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,p=c*u,_=c*h;e[0]=f+_*o,e[4]=p*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-p,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,p=c*u,_=c*h;e[0]=f-_*o,e[4]=-a*h,e[8]=p+m*o,e[1]=m+p*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,p=o*u,_=o*h;e[0]=l*u,e[4]=p*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+p,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*l,m=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=m*h-p,e[2]=p*h-m,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zh,t,Jh)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),ei.crossVectors(n,Qe),ei.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),ei.crossVectors(n,Qe)),ei.normalize(),hs.crossVectors(Qe,ei),r[0]=ei.x,r[4]=hs.x,r[8]=Qe.x,r[1]=ei.y,r[5]=hs.y,r[9]=Qe.y,r[2]=ei.z,r[6]=hs.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],p=n[2],_=n[6],g=n[10],d=n[14],E=n[3],S=n[7],v=n[11],U=n[15],R=r[0],A=r[4],D=r[8],b=r[12],y=r[1],L=r[5],z=r[9],O=r[13],H=r[2],Y=r[6],W=r[10],j=r[14],V=r[3],ct=r[7],gt=r[11],wt=r[15];return s[0]=a*R+o*y+l*H+c*V,s[4]=a*A+o*L+l*Y+c*ct,s[8]=a*D+o*z+l*W+c*gt,s[12]=a*b+o*O+l*j+c*wt,s[1]=u*R+h*y+f*H+m*V,s[5]=u*A+h*L+f*Y+m*ct,s[9]=u*D+h*z+f*W+m*gt,s[13]=u*b+h*O+f*j+m*wt,s[2]=p*R+_*y+g*H+d*V,s[6]=p*A+_*L+g*Y+d*ct,s[10]=p*D+_*z+g*W+d*gt,s[14]=p*b+_*O+g*j+d*wt,s[3]=E*R+S*y+v*H+U*V,s[7]=E*A+S*L+v*Y+U*ct,s[11]=E*D+S*z+v*W+U*gt,s[15]=E*b+S*O+v*j+U*wt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],p=t[3],_=t[7],g=t[11],d=t[15];return p*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*m-n*l*m)+_*(+e*l*m-e*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+g*(+e*c*h-e*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+d*(-r*o*u-e*l*h+e*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],p=t[12],_=t[13],g=t[14],d=t[15],E=h*g*c-_*f*c+_*l*m-o*g*m-h*l*d+o*f*d,S=p*f*c-u*g*c-p*l*m+a*g*m+u*l*d-a*f*d,v=u*_*c-p*h*c+p*o*m-a*_*m-u*o*d+a*h*d,U=p*h*l-u*_*l-p*o*f+a*_*f+u*o*g-a*h*g,R=e*E+n*S+r*v+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*f*s-h*g*s-_*r*m+n*g*m+h*r*d-n*f*d)*A,t[2]=(o*g*s-_*l*s+_*r*c-n*g*c-o*r*d+n*l*d)*A,t[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*m-n*l*m)*A,t[4]=S*A,t[5]=(u*g*s-p*f*s+p*r*m-e*g*m-u*r*d+e*f*d)*A,t[6]=(p*l*s-a*g*s-p*r*c+e*g*c+a*r*d-e*l*d)*A,t[7]=(a*f*s-u*l*s+u*r*c-e*f*c-a*r*m+e*l*m)*A,t[8]=v*A,t[9]=(p*h*s-u*_*s-p*n*m+e*_*m+u*n*d-e*h*d)*A,t[10]=(a*_*s-p*o*s+p*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*m-e*o*m)*A,t[12]=U*A,t[13]=(u*_*r-p*h*r+p*n*f-e*_*f-u*n*g+e*h*g)*A,t[14]=(p*o*r-a*_*r-p*n*l+e*_*l+a*n*g-e*o*g)*A,t[15]=(a*h*r-u*o*r+u*n*l-e*h*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,p=s*h,_=a*u,g=a*h,d=o*h,E=l*c,S=l*u,v=l*h,U=n.x,R=n.y,A=n.z;return r[0]=(1-(_+d))*U,r[1]=(m+v)*U,r[2]=(p-S)*U,r[3]=0,r[4]=(m-v)*R,r[5]=(1-(f+d))*R,r[6]=(g+E)*R,r[7]=0,r[8]=(p+S)*A,r[9]=(g-E)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const a=Gi.set(r[4],r[5],r[6]).length(),o=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],mn.copy(this);const c=1/s,u=1/a,h=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Vn){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let m,p;if(o===Vn)m=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===Xs)m=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Vn){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(a-s),f=(e+t)*c,m=(n+r)*u;let p,_;if(o===Vn)p=(a+s)*h,_=-2*h;else if(o===Xs)p=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new I,mn=new de,Zh=new I(0,0,0),Jh=new I(1,1,1),ei=new I,hs=new I,Qe=new I,wl=new de,Al=new Qr;class Rn{constructor(t=0,e=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kh=0;const Rl=new I,Hi=new Qr,Fn=new de,fs=new I,wr=new I,jh=new I,Qh=new Qr,Cl=new I(1,0,0),Pl=new I(0,1,0),Ll=new I(0,0,1),Dl={type:"added"},tf={type:"removed"},Vi={type:"childadded",child:null},pa={type:"childremoved",child:null};class Ae extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new Rn,n=new Qr,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(wr,fs,this.up):Fn.lookAt(fs,wr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Hi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new I,On=new I,ma=new I,Bn=new I,Wi=new I,Xi=new I,Il=new I,ga=new I,_a=new I,va=new I,xa=new le,ya=new le,Ma=new le;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){gn.subVectors(r,e),On.subVectors(n,e),ma.subVectors(t,e);const a=gn.dot(gn),o=gn.dot(On),l=gn.dot(ma),c=On.dot(On),u=On.dot(ma),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,p=(a*u-o*l)*f;return s.set(1-m-p,p,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return xa.setScalar(0),ya.setScalar(0),Ma.setScalar(0),xa.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(xa,s.x),a.addScaledVector(ya,s.y),a.addScaledVector(Ma,s.z),a}static isFrontFacing(t,e,n,r){return gn.subVectors(n,e),On.subVectors(t,e),gn.cross(On).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),gn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Wi.subVectors(r,n),Xi.subVectors(s,n),ga.subVectors(t,n);const l=Wi.dot(ga),c=Xi.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,r);const u=Wi.dot(_a),h=Xi.dot(_a);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Wi,a);va.subVectors(t,s);const m=Wi.dot(va),p=Xi.dot(va);if(p>=0&&m<=p)return e.copy(s);const _=m*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Xi,o);const g=u*p-m*h;if(g<=0&&h-u>=0&&m-p>=0)return Il.subVectors(s,r),o=(h-u)/(h-u+(m-p)),e.copy(r).addScaledVector(Il,o);const d=1/(g+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Zo(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Sa(a,s,t+1/3),this.g=Sa(a,s,t),this.b=Sa(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Qt.fromWorkingColorSpace(Oe.copy(this),t),Math.round(De(Oe.r*255,0,255))*65536+Math.round(De(Oe.g*255,0,255))*256+Math.round(De(Oe.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,r=Oe.g,s=Oe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ze){Qt.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,r=Oe.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(ds);const n=Br(ni.h,ds.h,e),r=Br(ni.s,ds.s,e),s=Br(ni.l,ds.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Wt;Wt.NAMES=ru;let ef=0;class xr extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=An(),this.name="",this.blending=ar,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ys extends xr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new I,ps=new at;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class su extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class au extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ie extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nf=0;const cn=new de,ba=new Ae,qi=new I,tn=new ts,Ar=new ts,Pe=new I;class an extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tu(t)?au:su)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return ba.lookAt(t),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(tn.min,Ar.min),tn.expandByPoint(Pe),Pe.addVectors(tn.max,Ar.max),tn.expandByPoint(Pe)):(tn.expandByPoint(Ar.min),tn.expandByPoint(Ar.max))}tn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Pe.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Pe.add(qi)),r=Math.max(r,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,f=new at,m=new at,p=new at,_=new I,g=new I;function d(D,b,y){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(f),p.sub(f);const L=1/(m.x*p.y-p.x*m.y);isFinite(L)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(L),g.copy(h).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(L),o[D].add(_),o[b].add(_),o[y].add(_),l[D].add(g),l[b].add(g),l[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,b=E.length;D<b;++D){const y=E[D],L=y.start,z=y.count;for(let O=L,H=L+z;O<H;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new I,v=new I,U=new I,R=new I;function A(D){U.fromBufferAttribute(r,D),R.copy(U);const b=o[D];S.copy(b),S.sub(U.multiplyScalar(U.dot(b))).normalize(),v.crossVectors(R,b);const L=v.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,b=E.length;D<b;++D){const y=E[D],L=y.start,z=y.count;for(let O=L,H=L+z;O<H;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)f[p++]=c[m++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ul=new de,vi=new iu,ms=new Jo,Nl=new I,gs=new I,_s=new I,vs=new I,Ea=new I,xs=new I,Fl=new I,ys=new I;class rn extends Ae{constructor(t=new an,e=new Ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){xs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Ea.fromBufferAttribute(h,t),a?xs.addScaledVector(Ea,u):xs.addScaledVector(Ea.sub(e),u))}e.add(xs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),vi.copy(t.ray).recast(t.near),!(ms.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ms,Nl)===null||vi.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Ul.copy(s).invert(),vi.copy(t.ray).applyMatrix4(Ul),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],d=a[g.materialIndex],E=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,U=S;v<U;v+=3){const R=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);r=Ms(this,d,t,n,c,u,h,R,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let g=p,d=_;g<d;g+=3){const E=o.getX(g),S=o.getX(g+1),v=o.getX(g+2);r=Ms(this,a,t,n,c,u,h,E,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],d=a[g.materialIndex],E=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=E,U=S;v<U;v+=3){const R=v,A=v+1,D=v+2;r=Ms(this,d,t,n,c,u,h,R,A,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const p=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let g=p,d=_;g<d;g+=3){const E=g,S=g+1,v=g+2;r=Ms(this,a,t,n,c,u,h,E,S,v),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function rf(i,t,e,n,r,s,a,o){let l;if(t.side===Ke?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===ci,o),l===null)return null;ys.copy(o),ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ys);return c<e.near||c>e.far?null:{distance:c,point:ys.clone(),object:i}}function Ms(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,gs),i.getVertexPosition(l,_s),i.getVertexPosition(c,vs);const u=rf(i,t,e,n,gs,_s,vs,Fl);if(u){const h=new I;un.getBarycoord(Fl,gs,_s,vs,h),r&&(u.uv=un.getInterpolatedAttribute(r,o,l,c,h,new at)),s&&(u.uv1=un.getInterpolatedAttribute(s,o,l,c,h,new at)),a&&(u.normal=un.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};un.getNormal(gs,_s,vs,f.normal),u.face=f,u.barycoord=h}return u}class Ii extends an{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;p("z","y","x",-1,-1,n,e,t,a,s,0),p("z","y","x",1,-1,n,e,-t,a,s,1),p("x","z","y",1,1,t,n,e,r,a,2),p("x","z","y",1,-1,t,n,-e,r,a,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(h,2));function p(_,g,d,E,S,v,U,R,A,D,b){const y=v/A,L=U/D,z=v/2,O=U/2,H=R/2,Y=A+1,W=D+1;let j=0,V=0;const ct=new I;for(let gt=0;gt<W;gt++){const wt=gt*L-O;for(let kt=0;kt<Y;kt++){const Zt=kt*y-z;ct[_]=Zt*E,ct[g]=wt*S,ct[d]=H,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[g]=0,ct[d]=R>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(kt/A),h.push(1-gt/D),j+=1}}for(let gt=0;gt<D;gt++)for(let wt=0;wt<A;wt++){const kt=f+wt+Y*gt,Zt=f+wt+Y*(gt+1),J=f+(wt+1)+Y*(gt+1),st=f+(wt+1)+Y*gt;l.push(kt,Zt,st),l.push(Zt,J,st),V+=6}o.addGroup(m,V,b),m+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=mr(i[e]);for(const r in n)t[r]=n[r]}return t}function sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const af={clone:mr,merge:We};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends xr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new I,Ol=new at,Bl=new at;class Je extends lu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Ol,Bl),e.subVectors(Bl,Ol)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Or*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,$i=1;class cf extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Je(Yi,$i,t,e);r.layers=this.layers,this.add(r);const s=new Je(Yi,$i,t,e);s.layers=this.layers,this.add(s);const a=new Je(Yi,$i,t,e);a.layers=this.layers,this.add(a);const o=new Je(Yi,$i,t,e);o.layers=this.layers,this.add(o);const l=new Je(Yi,$i,t,e);l.layers=this.layers,this.add(l);const c=new Je(Yi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class cu extends qe{constructor(t,e,n,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new cu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ii(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ai});s.uniforms.tEquirect.value=e;const a=new rn(r,s),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=wn),new cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const Ta=new I,hf=new I,ff=new Ht;class Si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ta.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ff.getNormalMatrix(t),r=this.coplanarPoint(Ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Jo,Ss=new I;class jo{constructor(t=new Si,e=new Si,n=new Si,r=new Si,s=new Si,a=new Si){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],m=r[8],p=r[9],_=r[10],g=r[11],d=r[12],E=r[13],S=r[14],v=r[15];if(n[0].setComponents(l-s,f-c,g-m,v-d).normalize(),n[1].setComponents(l+s,f+c,g+m,v+d).normalize(),n[2].setComponents(l+a,f+u,g+p,v+E).normalize(),n[3].setComponents(l-a,f-u,g-p,v-E).normalize(),n[4].setComponents(l-o,f-h,g-_,v-S).normalize(),e===Vn)n[5].setComponents(l+o,f+h,g+_,v+S).normalize();else if(e===Xs)n[5].setComponents(o,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ss.x=r.normal.x>0?t.max.x:t.min.x,Ss.y=r.normal.y>0?t.max.y:t.min.y,Ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uu(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function df(i){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,p)=>m.start-p.start);let f=0;for(let m=1;m<h.length;m++){const p=h[f],_=h[m];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,p=h.length;m<p;m++){const _=h[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ge extends an{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=t/o,f=e/l,m=[],p=[],_=[],g=[];for(let d=0;d<u;d++){const E=d*f-a;for(let S=0;S<c;S++){const v=S*h-s;p.push(v,-E,0),_.push(0,0,1),g.push(S/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const S=E+c*d,v=E+c*(d+1),U=E+1+c*(d+1),R=E+1+c*d;m.push(S,v,R),m.push(v,U,R)}this.setIndex(m),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,id=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ad=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ad=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:Sf,batching_vertex:bf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Pf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:If,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:kf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:$f,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:ad,envmap_vertex:Jf,fog_vertex:Kf,fog_pars_vertex:jf,fog_fragment:Qf,fog_pars_fragment:td,gradientmap_pars_fragment:ed,lightmap_pars_fragment:nd,lights_lambert_fragment:id,lights_lambert_pars_fragment:rd,lights_pars_begin:sd,lights_toon_fragment:od,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:ud,lights_physical_fragment:hd,lights_physical_pars_fragment:fd,lights_fragment_begin:dd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:yd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphinstance_vertex:wd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Cd,morphtarget_vertex:Pd,normal_fragment_begin:Ld,normal_fragment_maps:Dd,normal_pars_fragment:Id,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:kd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:qd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:Kd,shadowmask_pars_fragment:jd,skinbase_vertex:Qd,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:yp,distanceRGBA_vert:Mp,distanceRGBA_frag:Sp,equirect_vert:bp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Pp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:kp,points_vert:Gp,points_frag:Hp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},bn={basic:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:We([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:We([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:We([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:We([vt.points,vt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:We([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:We([vt.common,vt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:We([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:We([vt.sprite,vt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:We([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:We([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};bn.physical={uniforms:We([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const bs={r:0,b:0,g:0},yi=new Rn,Yp=new de;function $p(i,t,e,n,r,s,a){const o=new Wt(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function p(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const v=p(E);v===null?d(o,l):v&&v.isColor&&(d(v,1),S=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===Qs)?(u===void 0&&(u=new rn(new Ii(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:mr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(S.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(yi)),u.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ae,(h!==v||f!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new rn(new Ge(2,2),new ui({name:"BackgroundMaterial",uniforms:mr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(bs,ou(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:_,addToRenderList:g}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(y,L,z,O,H){let Y=!1;const W=h(O,z,L);s!==W&&(s=W,c(s.object)),Y=m(y,O,z,H),Y&&p(y,O,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,L,z,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,L,z){const O=z.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let Y=H[L.id];Y===void 0&&(Y={},H[L.id]=Y);let W=Y[O];return W===void 0&&(W=f(l()),Y[O]=W),W}function f(y){const L=[],z=[],O=[];for(let H=0;H<e;H++)L[H]=0,z[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,L,z,O){const H=s.attributes,Y=L.attributes;let W=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){const gt=H[V];let wt=Y[V];if(wt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor)),gt===void 0||gt.attribute!==wt||wt&&gt.data!==wt.data)return!0;W++}return s.attributesNum!==W||s.index!==O}function p(y,L,z,O){const H={},Y=L.attributes;let W=0;const j=z.getAttributes();for(const V in j)if(j[V].location>=0){let gt=Y[V];gt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor));const wt={};wt.attribute=gt,gt&&gt.data&&(wt.data=gt.data),H[V]=wt,W++}s.attributes=H,s.attributesNum=W,s.index=O}function _(){const y=s.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function g(y){d(y,0)}function d(y,L){const z=s.newAttributes,O=s.enabledAttributes,H=s.attributeDivisors;z[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),H[y]!==L&&(i.vertexAttribDivisor(y,L),H[y]=L)}function E(){const y=s.newAttributes,L=s.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==y[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function S(y,L,z,O,H,Y,W){W===!0?i.vertexAttribIPointer(y,L,z,H,Y):i.vertexAttribPointer(y,L,z,O,H,Y)}function v(y,L,z,O){_();const H=O.attributes,Y=z.getAttributes(),W=L.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let ct=H[j];if(ct===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const gt=ct.normalized,wt=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;const Zt=kt.buffer,J=kt.type,st=kt.bytesPerElement,yt=J===i.INT||J===i.UNSIGNED_INT||ct.gpuType===Vo;if(ct.isInterleavedBufferAttribute){const lt=ct.data,Ct=lt.stride,Nt=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)d(V.location+It,lt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<V.locationSize;It++)g(V.location+It);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let It=0;It<V.locationSize;It++)S(V.location+It,wt/V.locationSize,J,gt,Ct*st,(Nt+wt/V.locationSize*It)*st,yt)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)d(V.location+lt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<V.locationSize;lt++)g(V.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let lt=0;lt<V.locationSize;lt++)S(V.location+lt,wt/V.locationSize,J,gt,wt*st,wt/V.locationSize*lt*st,yt)}}else if(W!==void 0){const gt=W[j];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(V.location,gt);break;case 3:i.vertexAttrib3fv(V.location,gt);break;case 4:i.vertexAttrib4fv(V.location,gt);break;default:i.vertexAttrib1fv(V.location,gt)}}}}E()}function U(){D();for(const y in n){const L=n[y];for(const z in L){const O=L[z];for(const H in O)u(O[H].object),delete O[H];delete L[z]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const z in L){const O=L[z];for(const H in O)u(O[H].object),delete O[H];delete L[z]}delete n[y.id]}function A(y){for(const L in n){const z=n[L];if(z[y.id]===void 0)continue;const O=z[y.id];for(const H in O)u(O[H].object),delete O[H];delete z[y.id]}}function D(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function Jp(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];e.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)a(c[p],u[p],f[p]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_]*f[_];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Kp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=p>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:U,maxSamples:R}}function jp(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Si,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const E=s?0:n,S=E*4;let v=d.clippingState||null;l.value=v,v=u(p,f,S,m);for(let U=0;U!==S;++U)v[U]=e[U];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const d=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<d)&&(g=new Float32Array(d));for(let S=0,v=m;S!==_;++S,v+=4)a.copy(h[S]).applyMatrix4(E,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Qp(i){let t=new WeakMap;function e(a,o){return o===Qa?a.mapping=ur:o===to&&(a.mapping=hr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qa||o===to)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class tm extends lu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const er=4,zl=[.125,.215,.35,.446,.526,.582],Ti=20,wa=new tm,kl=new Wt;let Aa=null,Ra=0,Ca=0,Pa=!1;const bi=(1+Math.sqrt(5))/2,Zi=1/bi,Gl=[new I(-bi,Zi,0),new I(bi,Zi,0),new I(-Zi,0,bi),new I(Zi,0,bi),new I(0,bi,-Zi),new I(0,bi,Zi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:jr,format:yn,colorSpace:_r,depthBuffer:!1},r=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(s)),this._blurMaterial=nm(s,t,e)}return r}_compileMaterial(t){const e=new rn(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,r){const o=new Je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kl),u.toneMapping=oi,u.autoClear=!1;const m=new Ys({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),p=new rn(new Ii,m);let _=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,_=!0):(m.color.copy(kl),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;Es(r,E*S,d>2?S:0,S,S),u.setRenderTarget(r),_&&u.render(p,o),u.render(t,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ur||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new rn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gl[(r-s-1)%Gl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),_=s/p,g=isFinite(s)?1+Math.floor(u*_):Ti;g>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const d=[];let E=0;for(let A=0;A<Ti;++A){const D=A/_,b=Math.exp(-D*D/2);d.push(b),A===0?E+=b:A<g&&(E+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=p,f.mipInt.value=S-n;const v=this._sizeLods[r],U=3*v*(r>S-er?r-S+er:0),R=4*(this._cubeSize-v);Es(e,U,R,3*v,2*v),l.setRenderTarget(e),l.render(h,wa)}}function em(i){const t=[],e=[],n=[];let r=i;const s=i-er+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-er?l=zl[a-i+er-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,p=6,_=3,g=2,d=1,E=new Float32Array(_*p*m),S=new Float32Array(g*p*m),v=new Float32Array(d*p*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,D=R>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(b,_*p*R),S.set(f,g*p*R);const y=[R,R,R,R,R,R];v.set(y,d*p*R)}const U=new an;U.setAttribute("position",new hn(E,_)),U.setAttribute("uv",new hn(S,g)),U.setAttribute("faceIndex",new hn(v,d)),t.push(U),r>er&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vl(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function nm(i,t,e){const n=new Float32Array(Ti),r=new I(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Wl(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Xl(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function im(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Qa||l===to,u=l===ur||l===hr;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Hl(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Hl(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function sm(i,t,e,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const p in f.attributes)t.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,d=_.length;g<d;g++)t.remove(_[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const p in m){const _=m[p];for(let g=0,d=_.length;g<d;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,p=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let S=0,v=E.length;S<v;S+=3){const U=E[S+0],R=E[S+1],A=E[S+2];f.push(U,R,R,A,A,U)}}else if(p!==void 0){const E=p.array;_=p.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const U=S+0,R=S+1,A=S+2;f.push(U,R,R,A,A,U)}}else return;const g=new(tu(f)?au:su)(f,1);g.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,g)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function am(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*a),e.update(m,n,1)}function c(f,m,p){p!==0&&(i.drawElementsInstanced(n,m,s,f*a,p),e.update(m,n,p))}function u(f,m,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,p);let g=0;for(let d=0;d<p;d++)g+=m[d];e.update(g,n,1)}function h(f,m,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,p);let d=0;for(let E=0;E<p;E++)d+=m[E]*_[E];e.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function lm(i,t,e){const n=new WeakMap,r=new le;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let U=o.attributes.position.count*v,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*R*4*h),D=new nu(A,U,R,h);D.type=Hn,D.needsUpdate=!0;const b=v*4;for(let L=0;L<h;L++){const z=d[L],O=E[L],H=S[L],Y=U*R*4*L;for(let W=0;W<z.count;W++){const j=W*b;p===!0&&(r.fromBufferAttribute(z,W),A[Y+j+0]=r.x,A[Y+j+1]=r.y,A[Y+j+2]=r.z,A[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(O,W),A[Y+j+4]=r.x,A[Y+j+5]=r.y,A[Y+j+6]=r.z,A[Y+j+7]=0),g===!0&&(r.fromBufferAttribute(H,W),A[Y+j+8]=r.x,A[Y+j+9]=r.y,A[Y+j+10]=r.z,A[Y+j+11]=H.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new at(U,R)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function cm(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class hu extends qe{constructor(t,e,n,r,s,a,o,l,c,u=or){if(u!==or&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===or&&(n=Ci),n===void 0&&u===dr&&(n=fr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fu=new qe,ql=new hu(1,1),du=new nu,pu=new Yh,mu=new cu,Yl=[],$l=[],Zl=new Float32Array(16),Jl=new Float32Array(9),Kl=new Float32Array(4);function yr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Yl[r];if(s===void 0&&(s=new Float32Array(r),Yl[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=$l[t];e===void 0&&(e=new Int32Array(t),$l[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),Ce(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Jl.set(n),i.uniformMatrix3fv(this.addr,!1,Jl),Ce(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),Ce(e,n)}}function _m(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=Qc,s=ql):s=fu,e.setTexture2D(t||s,r)}function wm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||pu,r)}function Am(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||mu,r)}function Rm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||du,r)}function Cm(i){switch(i){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return _m;case 35667:case 35671:return vm;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return Sm;case 36295:return bm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Pm(i,t){i.uniform1fv(this.addr,t)}function Lm(i,t){const e=yr(t,this.size,2);i.uniform2fv(this.addr,e)}function Dm(i,t){const e=yr(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=yr(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){const e=yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){const e=yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fm(i,t){const e=yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Om(i,t){i.uniform1iv(this.addr,t)}function Bm(i,t){i.uniform2iv(this.addr,t)}function zm(i,t){i.uniform3iv(this.addr,t)}function km(i,t){i.uniform4iv(this.addr,t)}function Gm(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Vm(i,t){i.uniform3uiv(this.addr,t)}function Wm(i,t){i.uniform4uiv(this.addr,t)}function Xm(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||fu,s[a])}function qm(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||pu,s[a])}function Ym(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||mu,s[a])}function $m(i,t,e){const n=this.cache,r=t.length,s=ea(e,r);Re(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||du,s[a])}function Zm(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return km;case 5125:return Gm;case 36294:return Hm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function jl(i,t){i.seq.push(t),i.map[t.id]=t}function Qm(i,t,e){const n=i.name,r=n.length;for(La.lastIndex=0;;){const s=La.exec(n),a=La.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){jl(e,c===void 0?new Jm(o,i,t):new Km(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new jm(o),jl(e,h)),e=h}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Qm(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t0=37297;let e0=0;function n0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const tc=new Ht;function i0(i){Qt._getMatrix(tc,Qt.workingColorSpace,i);const t=`mat3( ${tc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ec(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+n0(i.getShaderSource(t),a)}else return r}function r0(i,t){const e=i0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function s0(i,t){let e;switch(t){case sh:e="Linear";break;case ah:e="Reinhard";break;case oh:e="Cineon";break;case kc:e="ACESFilmic";break;case ch:e="AgX";break;case uh:e="Neutral";break;case lh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ts=new I;function a0(){Qt.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),t=Ts.y.toFixed(4),e=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function l0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Nr(i){return i!==""}function nc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(i){return i.replace(u0,f0)}const h0=new Map;function f0(i,t){let e=Vt[t];if(e===void 0){const n=h0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Po(e)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(d0,p0)}function p0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function v0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zc:t="ENVMAP_BLENDING_MULTIPLY";break;case ih:t="ENVMAP_BLENDING_MIX";break;case rh:t="ENVMAP_BLENDING_ADD";break}return t}function x0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=m0(e),c=g0(e),u=_0(e),h=v0(e),f=x0(e),m=o0(e),p=l0(s),_=r.createProgram();let g,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Nr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(g=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==oi?s0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,r0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),a=Po(a),a=nc(a,e),a=ic(a,e),o=Po(o),o=nc(o,e),o=ic(o,e),a=rc(a),o=rc(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=E+g+a,v=E+d+o,U=Ql(r,r.VERTEX_SHADER,S),R=Ql(r,r.FRAGMENT_SHADER,v);r.attachShader(_,U),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(U).trim(),H=r.getShaderInfoLog(R).trim();let Y=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,U,R);else{const j=ec(r,U,"vertex"),V=ec(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+j+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:d}})}r.deleteShader(U),r.deleteShader(R),D=new Gs(r,_),b=c0(r,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,t0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let M0=0;class S0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function E0(i,t,e,n,r,s,a){const o=new Ko,l=new S0,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,y,L,z,O){const H=z.fog,Y=O.geometry,W=b.isMeshStandardMaterial?z.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),V=j&&j.mapping===Qs?j.image.height:null,ct=p[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=gt!==void 0?gt.length:0;let kt=0;Y.morphAttributes.position!==void 0&&(kt=1),Y.morphAttributes.normal!==void 0&&(kt=2),Y.morphAttributes.color!==void 0&&(kt=3);let Zt,J,st,yt;if(ct){const ee=bn[ct];Zt=ee.vertexShader,J=ee.fragmentShader}else Zt=b.vertexShader,J=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);const lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Xt=!!b.map,Q=!!b.matcap,et=!!j,w=!!b.aoMap,Rt=!!b.lightMap,nt=!!b.bumpMap,_t=!!b.normalMap,ht=!!b.displacementMap,Ut=!!b.emissiveMap,St=!!b.metalnessMap,T=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,Z=b.dispersion>0,tt=b.iridescence>0,$=b.sheen>0,Et=b.transmission>0,dt=x&&!!b.anisotropyMap,xt=B&&!!b.clearcoatMap,Ft=B&&!!b.clearcoatNormalMap,it=B&&!!b.clearcoatRoughnessMap,bt=tt&&!!b.iridescenceMap,Lt=tt&&!!b.iridescenceThicknessMap,Dt=$&&!!b.sheenColorMap,Tt=$&&!!b.sheenRoughnessMap,qt=!!b.specularMap,Bt=!!b.specularColorMap,ne=!!b.specularIntensityMap,N=Et&&!!b.transmissionMap,pt=Et&&!!b.thicknessMap,X=!!b.gradientMap,K=!!b.alphaMap,ut=b.alphaTest>0,ft=!!b.alphaHash,zt=!!b.extensions;let Jt=oi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const _e={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:J,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:_r,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:Q,envMap:et,envMapMode:et&&j.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:Rt,bumpMap:nt,normalMap:_t,displacementMap:f&&ht,emissiveMap:Ut,normalMapObjectSpace:_t&&b.normalMapType===ph,normalMapTangentSpace:_t&&b.normalMapType===jc,metalnessMap:St,roughnessMap:T,anisotropy:x,anisotropyMap:dt,clearcoat:B,clearcoatMap:xt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:it,dispersion:Z,iridescence:tt,iridescenceMap:bt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:Tt,specularMap:qt,specularColorMap:Bt,specularIntensityMap:ne,transmission:Et,transmissionMap:N,thicknessMap:pt,gradientMap:X,opaque:b.transparent===!1&&b.blending===ar&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ft,combine:b.combine,mapUv:Xt&&_(b.map.channel),aoMapUv:w&&_(b.aoMap.channel),lightMapUv:Rt&&_(b.lightMap.channel),bumpMapUv:nt&&_(b.bumpMap.channel),normalMapUv:_t&&_(b.normalMap.channel),displacementMapUv:ht&&_(b.displacementMap.channel),emissiveMapUv:Ut&&_(b.emissiveMap.channel),metalnessMapUv:St&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:dt&&_(b.anisotropyMap.channel),clearcoatMapUv:xt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(b.sheenRoughnessMap.channel),specularMapUv:qt&&_(b.specularMap.channel),specularColorMapUv:Bt&&_(b.specularColorMap.channel),specularIntensityMapUv:ne&&_(b.specularIntensityMap.channel),transmissionMapUv:N&&_(b.transmissionMap.channel),thicknessMapUv:pt&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(_t||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Xt||K),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===ae,decodeVideoTextureEmissive:Ut&&b.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(b.emissiveMap.colorSpace)===ae,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tn,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(E(y,b),S(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const y=p[b.type];let L;if(y){const z=bn[y];L=af.clone(z.uniforms)}else L=b.uniforms;return L}function U(b,y){let L;for(let z=0,O=u.length;z<O;z++){const H=u[z];if(H.cacheKey===y){L=H,++L.usedTimes;break}}return L===void 0&&(L=new y0(i,y,b,s),u.push(L)),L}function R(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:D}}function T0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function w0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,f,m,p,_,g){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=p,d.renderOrder=h.renderOrder,d.z=_,d.group=g),t++,d}function o(h,f,m,p,_,g){const d=a(h,f,m,p,_,g);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(h,f,m,p,_,g){const d=a(h,f,m,p,_,g);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||w0),n.length>1&&n.sort(f||ac),r.length>1&&r.sort(f||ac)}function u(){for(let h=t,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function A0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new oc,i.set(n,[a])):r>=s.length?(a=new oc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i){const t=new R0,e=C0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new de,a=new de;function o(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,p=0,_=0,g=0,d=0,E=0,S=0,v=0,U=0,R=0,A=0;c.sort(L0);for(let b=0,y=c.length;b<y;b++){const L=c[b],z=L.color,O=L.intensity,H=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*O,h+=z.g*O,f+=z.b*O;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],O);A++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(z).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const j=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,j.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(z).multiplyScalar(O),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=W,g++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const j=L.shadow,V=e.get(L);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=L.shadow.matrix,S++}n.point[p]=W,p++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(O),W.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==d||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==v||D.numSpotMaps!==U||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+U-R,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=d,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=v,D.numSpotMaps=U,D.numLightProbes=A,n.version=P0++)}function l(c,u){let h=0,f=0,m=0,p=0,_=0;const g=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const S=c[d];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(S.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function lc(i){const t=new D0(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function I0(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new lc(i),t.set(r,[o])):s>=a.length?(o=new lc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class U0 extends xr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N0 extends xr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function B0(i,t,e){let n=new jo;const r=new at,s=new at,a=new le,o=new U0({depthPacking:dh}),l=new N0,c={},u=e.maxTextureSize,h={[ci]:Ke,[Ke]:ci,[Tn]:Tn},f=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:F0,fragmentShader:O0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const p=new an;p.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rn(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let d=this.type;this.render=function(R,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ai),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==zn&&this.type===zn,H=d===zn&&this.type!==zn;for(let Y=0,W=R.length;Y<W;Y++){const j=R[Y],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ct=V.getFrameExtents();if(r.multiply(ct),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,V.mapSize.y=s.y)),V.map===null||O===!0||H===!0){const wt=this.type!==zn?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new Pi(r.x,r.y,wt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const gt=V.getViewportCount();for(let wt=0;wt<gt;wt++){const kt=V.getViewport(wt);a.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),z.viewport(a),V.updateMatrices(j,wt),n=V.getFrustum(),v(A,D,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===zn&&E(V,D),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(b,y,L)};function E(R,A){const D=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,m,_,null)}function S(R,A,D,b){let y=null;const L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,O=A.uuid;let H=c[z];H===void 0&&(H={},c[z]=H);let Y=H[O];Y===void 0&&(Y=y.clone(),H[O]=Y,A.addEventListener("dispose",U)),y=Y}if(y.visible=A.visible,y.wireframe=A.wireframe,b===zn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=D}return y}function v(R,A,D,b,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===zn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const O=t.update(R),H=R.material;if(Array.isArray(H)){const Y=O.groups;for(let W=0,j=Y.length;W<j;W++){const V=Y[W],ct=H[V.materialIndex];if(ct&&ct.visible){const gt=S(R,ct,b,y);R.onBeforeShadow(i,R,A,D,O,gt,V),i.renderBufferDirect(D,null,O,gt,R,V),R.onAfterShadow(i,R,A,D,O,gt,V)}}}else if(H.visible){const Y=S(R,H,b,y);R.onBeforeShadow(i,R,A,D,O,Y,null),i.renderBufferDirect(D,null,O,Y,R,null),R.onAfterShadow(i,R,A,D,O,Y,null)}}const z=R.children;for(let O=0,H=z.length;O<H;O++)v(z[O],A,D,b,y)}function U(R){R.target.removeEventListener("dispose",U);for(const D in c){const b=c[D],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const z0={[qa]:Ya,[$a]:Ka,[Za]:ja,[cr]:Ja,[Ya]:qa,[Ka]:$a,[ja]:Za,[Ja]:cr};function k0(i,t){function e(){let N=!1;const pt=new le;let X=null;const K=new le(0,0,0,0);return{setMask:function(ut){X!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){N=ut},setClear:function(ut,ft,zt,Jt,_e){_e===!0&&(ut*=Jt,ft*=Jt,zt*=Jt),pt.set(ut,ft,zt,Jt),K.equals(pt)===!1&&(i.clearColor(ut,ft,zt,Jt),K.copy(pt))},reset:function(){N=!1,X=null,K.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,X=null,K=null,ut=null;return{setReversed:function(ft){if(pt!==ft){const zt=t.get("EXT_clip_control");pt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const Jt=ut;ut=null,this.setClear(Jt)}pt=ft},getReversed:function(){return pt},setTest:function(ft){ft?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ft){X!==ft&&!N&&(i.depthMask(ft),X=ft)},setFunc:function(ft){if(pt&&(ft=z0[ft]),K!==ft){switch(ft){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ft}},setLocked:function(ft){N=ft},setClear:function(ft){ut!==ft&&(pt&&(ft=1-ft),i.clearDepth(ft),ut=ft)},reset:function(){N=!1,X=null,K=null,ut=null,pt=!1}}}function r(){let N=!1,pt=null,X=null,K=null,ut=null,ft=null,zt=null,Jt=null,_e=null;return{setTest:function(ee){N||(ee?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ee){pt!==ee&&!N&&(i.stencilMask(ee),pt=ee)},setFunc:function(ee,Ue,Ne){(X!==ee||K!==Ue||ut!==Ne)&&(i.stencilFunc(ee,Ue,Ne),X=ee,K=Ue,ut=Ne)},setOp:function(ee,Ue,Ne){(ft!==ee||zt!==Ue||Jt!==Ne)&&(i.stencilOp(ee,Ue,Ne),ft=ee,zt=Ue,Jt=Ne)},setLocked:function(ee){N=ee},setClear:function(ee){_e!==ee&&(i.clearStencil(ee),_e=ee)},reset:function(){N=!1,pt=null,X=null,K=null,ut=null,ft=null,zt=null,Jt=null,_e=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],p=null,_=!1,g=null,d=null,E=null,S=null,v=null,U=null,R=null,A=new Wt(0,0,0),D=0,b=!1,y=null,L=null,z=null,O=null,H=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let ct=null,gt={};const wt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Zt=new le().fromArray(wt),J=new le().fromArray(kt);function st(N,pt,X,K){const ut=new Uint8Array(4),ft=i.createTexture();i.bindTexture(N,ft),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<X;zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(pt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ft}const yt={};yt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(cr),nt(!1),_t(dl),lt(i.CULL_FACE),w(ai);function lt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Ct(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Nt(N,pt){return h[N]!==pt?(i.bindFramebuffer(N,pt),h[N]=pt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function It(N,pt){let X=m,K=!1;if(N){X=f.get(pt),X===void 0&&(X=[],f.set(pt,X));const ut=N.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,zt=ut.length;ft<zt;ft++)X[ft]=i.COLOR_ATTACHMENT0+ft;X.length=ut.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function Xt(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const Q={[Ei]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Gu]:i.FUNC_REVERSE_SUBTRACT};Q[Hu]=i.MIN,Q[Vu]=i.MAX;const et={[Wu]:i.ZERO,[Xu]:i.ONE,[qu]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[ju]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[$u]:i.DST_ALPHA,[Yu]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[Qu]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function w(N,pt,X,K,ut,ft,zt,Jt,_e,ee){if(N===ai){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),N!==zu){if(N!==g||ee!==b){if((d!==Ei||v!==Ei)&&(i.blendEquation(i.FUNC_ADD),d=Ei,v=Ei),ee)switch(N){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ml:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,S=null,U=null,R=null,A.set(0,0,0),D=0,g=N,b=ee}return}ut=ut||pt,ft=ft||X,zt=zt||K,(pt!==d||ut!==v)&&(i.blendEquationSeparate(Q[pt],Q[ut]),d=pt,v=ut),(X!==E||K!==S||ft!==U||zt!==R)&&(i.blendFuncSeparate(et[X],et[K],et[ft],et[zt]),E=X,S=K,U=ft,R=zt),(Jt.equals(A)===!1||_e!==D)&&(i.blendColor(Jt.r,Jt.g,Jt.b,_e),A.copy(Jt),D=_e),g=N,b=!1}function Rt(N,pt){N.side===Tn?Ct(i.CULL_FACE):lt(i.CULL_FACE);let X=N.side===Ke;pt&&(X=!X),nt(X),N.blending===ar&&N.transparent===!1?w(ai):w(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const K=N.stencilWrite;o.setTest(K),K&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function _t(N){N!==Fu?(lt(i.CULL_FACE),N!==L&&(N===dl?i.cullFace(i.BACK):N===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),L=N}function ht(N){N!==z&&(W&&i.lineWidth(N),z=N)}function Ut(N,pt,X){N?(lt(i.POLYGON_OFFSET_FILL),(O!==pt||H!==X)&&(i.polygonOffset(pt,X),O=pt,H=X)):Ct(i.POLYGON_OFFSET_FILL)}function St(N){N?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+Y-1),ct!==N&&(i.activeTexture(N),ct=N)}function x(N,pt,X){X===void 0&&(ct===null?X=i.TEXTURE0+Y-1:X=ct);let K=gt[X];K===void 0&&(K={type:void 0,texture:void 0},gt[X]=K),(K.type!==N||K.texture!==pt)&&(ct!==X&&(i.activeTexture(X),ct=X),i.bindTexture(N,pt||yt[N]),K.type=N,K.texture=pt)}function B(){const N=gt[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(N){Zt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Zt.copy(N))}function Tt(N){J.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),J.copy(N))}function qt(N,pt){let X=c.get(pt);X===void 0&&(X=new WeakMap,c.set(pt,X));let K=X.get(N);K===void 0&&(K=i.getUniformBlockIndex(pt,N.name),X.set(N,K))}function Bt(N,pt){const K=c.get(pt).get(N);l.get(pt)!==K&&(i.uniformBlockBinding(pt,K,N.__bindingPointIndex),l.set(pt,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ct=null,gt={},h={},f=new WeakMap,m=[],p=null,_=!1,g=null,d=null,E=null,S=null,v=null,U=null,R=null,A=new Wt(0,0,0),D=0,b=!1,y=null,L=null,z=null,O=null,H=null,Zt.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:lt,disable:Ct,bindFramebuffer:Nt,drawBuffers:It,useProgram:Xt,setBlending:w,setMaterial:Rt,setFlipSided:nt,setCullFace:_t,setLineWidth:ht,setPolygonOffset:Ut,setScissorTest:St,activeTexture:T,bindTexture:x,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:bt,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Bt,texStorage2D:Ft,texStorage3D:it,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Dt,viewport:Tt,reset:ne}}function cc(i,t,e,n){const r=G0(n);switch(e){case Xc:return i*t;case Yc:return i*t;case $c:return i*t*2;case Zc:return i*t/r.components*r.byteLength;case qo:return i*t/r.components*r.byteLength;case Jc:return i*t*2/r.components*r.byteLength;case Yo:return i*t*2/r.components*r.byteLength;case qc:return i*t*3/r.components*r.byteLength;case yn:return i*t*4/r.components*r.byteLength;case $o:return i*t*4/r.components*r.byteLength;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case io:case so:return Math.max(i,16)*Math.max(t,8)/4;case no:case ro:return Math.max(i,8)*Math.max(t,8)/2;case ao:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ks:case Eo:case To:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kc:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function G0(i){switch(i){case qn:case Hc:return{byteLength:1,components:1};case Wr:case Vc:case jr:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Ci:case Vo:case Hn:return{byteLength:4,components:1};case Wc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H0(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,x){return m?new OffscreenCanvas(T,x):qs("canvas")}function _(T,x,B){let Z=1;const tt=St(T);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*tt.width),Et=Math.floor(Z*tt.height);h===void 0&&(h=p($,Et));const dt=x?p($,Et):h;return dt.width=$,dt.height=Et,dt.getContext("2d").drawImage(T,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Et+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function g(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,x,B,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),x===i.RGBA){const Et=tt?ta:Qt.getTransfer(Z);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Et===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(T,x){let B;return T?x===null||x===Ci||x===fr?B=i.DEPTH24_STENCIL8:x===Hn?B=i.DEPTH32F_STENCIL8:x===Wr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ci||x===fr?B=i.DEPTH_COMPONENT24:x===Hn?B=i.DEPTH_COMPONENT32F:x===Wr&&(B=i.DEPTH_COMPONENT16),B}function U(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==wn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),D(x),x.isVideoTexture&&u.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),y(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,Z=f.get(B);if(Z){const tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(T),Object.keys(Z).length===0&&f.delete(B)}n.remove(T)}function b(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,Z=f.get(B);delete Z[x.__cacheKey],a.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const $=n.get(B[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(T)}let L=0;function z(){L=0}function O(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const B=n.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(B,T,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function W(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function j(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){J(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function V(T,x){const B=n.get(T);if(T.version>0&&B.__version!==T.version){st(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const ct={[Ws]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},gt={[Mn]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},wt={[mh]:i.NEVER,[Mh]:i.ALWAYS,[gh]:i.LESS,[Qc]:i.LEQUAL,[_h]:i.EQUAL,[yh]:i.GEQUAL,[vh]:i.GREATER,[xh]:i.NOTEQUAL};function kt(T,x){if(x.type===Hn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===wn||x.magFilter===sa||x.magFilter===ss||x.magFilter===Ai||x.minFilter===wn||x.minFilter===sa||x.minFilter===ss||x.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ct[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ct[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ct[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,gt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==ss&&x.minFilter!==Ai||x.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const $=H(x);if($!==T.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[$].usedTimes++;const Et=tt[T.__cacheKey];Et!==void 0&&(tt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&b(x)),T.__cacheKey=$,T.__webglTexture=tt[$].texture}return B}function J(T,x,B){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Zt(T,x),$=x.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const Et=n.get($);if($.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const dt=Qt.getPrimaries(Qt.workingColorSpace),xt=x.colorSpace===ri?null:Qt.getPrimaries(x.colorSpace),Ft=x.colorSpace===ri||dt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let it=_(x.image,!1,r.maxTextureSize);it=Ut(x,it);const bt=s.convert(x.format,x.colorSpace),Lt=s.convert(x.type);let Dt=S(x.internalFormat,bt,Lt,x.colorSpace,x.isVideoTexture);kt(Z,x);let Tt;const qt=x.mipmaps,Bt=x.isVideoTexture!==!0,ne=Et.__version===void 0||tt===!0,N=$.dataReady,pt=U(x,it);if(x.isDepthTexture)Dt=v(x.format===dr,x.type),ne&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,bt,Lt,null));else if(x.isDataTexture)if(qt.length>0){Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,qt[0].width,qt[0].height);for(let X=0,K=qt.length;X<K;X++)Tt=qt[X],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,bt,Lt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,Tt.width,Tt.height,0,bt,Lt,Tt.data);x.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,it.width,it.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,bt,Lt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,it.width,it.height,0,bt,Lt,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Dt,qt[0].width,qt[0].height,it.depth);for(let X=0,K=qt.length;X<K;X++)if(Tt=qt[X],x.format!==yn)if(bt!==null)if(Bt){if(N)if(x.layerUpdates.size>0){const ut=cc(Tt.width,Tt.height,x.format,x.type);for(const ft of x.layerUpdates){const zt=Tt.data.subarray(ft*ut/Tt.data.BYTES_PER_ELEMENT,(ft+1)*ut/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ft,Tt.width,Tt.height,1,bt,zt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,it.depth,bt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Dt,Tt.width,Tt.height,it.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,it.depth,bt,Lt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Dt,Tt.width,Tt.height,it.depth,0,bt,Lt,Tt.data)}else{Bt&&ne&&e.texStorage2D(i.TEXTURE_2D,pt,Dt,qt[0].width,qt[0].height);for(let X=0,K=qt.length;X<K;X++)Tt=qt[X],x.format!==yn?bt!==null?Bt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Dt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,bt,Lt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Dt,Tt.width,Tt.height,0,bt,Lt,Tt.data)}else if(x.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Dt,it.width,it.height,it.depth),N)if(x.layerUpdates.size>0){const X=cc(it.width,it.height,x.format,x.type);for(const K of x.layerUpdates){const ut=it.data.subarray(K*X/it.data.BYTES_PER_ELEMENT,(K+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,bt,Lt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,bt,Lt,it.data);else if(x.isData3DTexture)Bt?(ne&&e.texStorage3D(i.TEXTURE_3D,pt,Dt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,bt,Lt,it.data);else if(x.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(i.TEXTURE_2D,pt,Dt,it.width,it.height);else{let X=it.width,K=it.height;for(let ut=0;ut<pt;ut++)e.texImage2D(i.TEXTURE_2D,ut,Dt,X,K,0,bt,Lt,null),X>>=1,K>>=1}}else if(qt.length>0){if(Bt&&ne){const X=St(qt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Dt,X.width,X.height)}for(let X=0,K=qt.length;X<K;X++)Tt=qt[X],Bt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,bt,Lt,Tt):e.texImage2D(i.TEXTURE_2D,X,Dt,bt,Lt,Tt);x.generateMipmaps=!1}else if(Bt){if(ne){const X=St(it);e.texStorage2D(i.TEXTURE_2D,pt,Dt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,Dt,bt,Lt,it);g(x)&&d(Z),Et.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,B){if(x.image.length!==6)return;const Z=Zt(T,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const Et=Qt.getPrimaries(Qt.workingColorSpace),dt=x.colorSpace===ri?null:Qt.getPrimaries(x.colorSpace),xt=x.colorSpace===ri||Et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Ft=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let K=0;K<6;K++)!Ft&&!it?bt[K]=_(x.image[K],!0,r.maxCubemapSize):bt[K]=it?x.image[K].image:x.image[K],bt[K]=Ut(x,bt[K]);const Lt=bt[0],Dt=s.convert(x.format,x.colorSpace),Tt=s.convert(x.type),qt=S(x.internalFormat,Dt,Tt,x.colorSpace),Bt=x.isVideoTexture!==!0,ne=$.__version===void 0||Z===!0,N=tt.dataReady;let pt=U(x,Lt);kt(i.TEXTURE_CUBE_MAP,x);let X;if(Ft){Bt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,qt,Lt.width,Lt.height);for(let K=0;K<6;K++){X=bt[K].mipmaps;for(let ut=0;ut<X.length;ut++){const ft=X[ut];x.format!==yn?Dt!==null?Bt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,qt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ft.width,ft.height,Dt,Tt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,qt,ft.width,ft.height,0,Dt,Tt,ft.data)}}}else{if(X=x.mipmaps,Bt&&ne){X.length>0&&pt++;const K=St(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt[K].width,bt[K].height,Dt,Tt,bt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,bt[K].width,bt[K].height,0,Dt,Tt,bt[K].data);for(let ut=0;ut<X.length;ut++){const zt=X[ut].image[K].image;Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,zt.width,zt.height,Dt,Tt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,qt,zt.width,zt.height,0,Dt,Tt,zt.data)}}else{Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,Tt,bt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,Dt,Tt,bt[K]);for(let ut=0;ut<X.length;ut++){const ft=X[ut];Bt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt,Tt,ft.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,qt,Dt,Tt,ft.image[K])}}}g(x)&&d(i.TEXTURE_CUBE_MAP),$.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function yt(T,x,B,Z,tt,$){const Et=s.convert(B.format,B.colorSpace),dt=s.convert(B.type),xt=S(B.internalFormat,Et,dt,B.colorSpace),Ft=n.get(x),it=n.get(B);if(it.__renderTarget=x,!Ft.__hasExternalTextures){const bt=Math.max(1,x.width>>$),Lt=Math.max(1,x.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,xt,bt,Lt,x.depth,0,Et,dt,null):e.texImage2D(tt,$,xt,bt,Lt,0,Et,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,it.__webglTexture,0,nt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,it.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=v(x.stencilBuffer,tt),Et=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=nt(x);_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{const Z=x.textures;for(let tt=0;tt<Z.length;tt++){const $=Z[tt],Et=s.convert($.format,$.colorSpace),dt=s.convert($.type),xt=S($.internalFormat,Et,dt,$.colorSpace),Ft=nt(x);B&&_t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,xt,x.width,x.height):_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,xt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const tt=Z.__webglTexture,$=nt(x);if(x.depthTexture.format===or)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===dr)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,T)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(T,x,B){const Z=n.get(T);x!==void 0&&yt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Nt(T)}function Xt(T){const x=T.texture,B=n.get(T),Z=n.get(x);T.addEventListener("dispose",A);const tt=T.textures,$=T.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let xt=0;xt<x.mipmaps.length;xt++)B.__webglFramebuffer[dt][xt]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<x.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let dt=0,xt=tt.length;dt<xt;dt++){const Ft=n.get(tt[dt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&_t(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){const xt=tt[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Ft=s.convert(xt.format,xt.colorSpace),it=s.convert(xt.type),bt=S(xt.internalFormat,Ft,it,xt.colorSpace,T.isXRRenderTarget===!0),Lt=nt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,bt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(i.TEXTURE_CUBE_MAP,x);for(let dt=0;dt<6;dt++)if(x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)yt(B.__webglFramebuffer[dt][xt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else yt(B.__webglFramebuffer[dt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,xt=tt.length;dt<xt;dt++){const Ft=tt[dt],it=n.get(Ft);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),kt(i.TEXTURE_2D,Ft),yt(B.__webglFramebuffer,T,Ft,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(Ft)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),kt(dt,x),x.mipmaps&&x.mipmaps.length>0)for(let xt=0;xt<x.mipmaps.length;xt++)yt(B.__webglFramebuffer[xt],T,x,i.COLOR_ATTACHMENT0,dt,xt);else yt(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,dt,0);g(x)&&d(dt),e.unbindTexture()}T.depthBuffer&&Nt(T)}function Q(T){const x=T.textures;for(let B=0,Z=x.length;B<Z;B++){const tt=x[B];if(g(tt)){const $=E(T),Et=n.get(tt).__webglTexture;e.bindTexture($,Et),d($),e.unbindTexture()}}}const et=[],w=[];function Rt(T){if(T.samples>0){if(_t(T)===!1){const x=T.textures,B=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),dt=x.length>1;if(dt)for(let xt=0;xt<x.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Ft=n.get(x[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),l===!0&&(et.length=0,w.length=0,et.push(i.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push($),w.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<x.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Ft=n.get(x[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function nt(T){return Math.min(r.maxSamples,T.samples)}function _t(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Ut(T,x){const B=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==_r&&B!==ri&&(Qt.getTransfer(B)===ae?(Z!==yn||tt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=_t}function V0(i,t){function e(n,r=ri){let s;const a=Qt.getTransfer(r);if(n===qn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===jr)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===yn)return i.RGBA;if(n===Yc)return i.LUMINANCE;if(n===$c)return i.LUMINANCE_ALPHA;if(n===or)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Fs||n===Os||n===Bs||n===zs)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===ro||n===so)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ao||n===oo||n===lo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ao||n===oo)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===Mo||n===So||n===bo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===co)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ks||n===Eo||n===To)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ks)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===wo||n===Ao||n===Ro)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class W0 extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),d=this._getHandJoint(c,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,p=.005;c.inputState.pinching&&f>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ui({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rn(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends vr{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,p=null;const _=new $0,g=e.getContextAttributes();let d=null,E=null;const S=[],v=[],U=new at;let R=null;const A=new Je;A.viewport=new le;const D=new Je;D.viewport=new le;const b=[A,D],y=new W0;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=S[J];return st===void 0&&(st=new Da,S[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=S[J];return st===void 0&&(st=new Da,S[J]=st),st.getGripSpace()},this.getHand=function(J){let st=S[J];return st===void 0&&(st=new Da,S[J]=st),st.getHandSpace()};function O(J){const st=v.indexOf(J.inputSource);if(st===-1)return;const yt=S[st];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||a),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Y);for(let J=0;J<S.length;J++){const st=v[J];st!==null&&(v[J]=null,S[J].disconnect(st))}L=null,z=null,_.reset(),t.setRenderTarget(d),m=null,f=null,h=null,r=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Pi(m.framebufferWidth,m.framebufferHeight,{format:yn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,yt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?dr:or,yt=g.stencil?fr:Ci);const Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(Ct),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Pi(f.textureWidth,f.textureHeight,{format:yn,type:qn,depthTexture:new hu(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Zt.setContext(r),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(J){for(let st=0;st<J.removed.length;st++){const yt=J.removed[st],lt=v.indexOf(yt);lt>=0&&(v[lt]=null,S[lt].disconnect(yt))}for(let st=0;st<J.added.length;st++){const yt=J.added[st];let lt=v.indexOf(yt);if(lt===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=v.length){v.push(yt),lt=Nt;break}else if(v[Nt]===null){v[Nt]=yt,lt=Nt;break}if(lt===-1)break}const Ct=S[lt];Ct&&Ct.connect(yt)}}const W=new I,j=new I;function V(J,st,yt){W.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);const lt=W.distanceTo(j),Ct=st.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,It=Ct[14]/(Ct[10]-1),Xt=Ct[14]/(Ct[10]+1),Q=(Ct[9]+1)/Ct[5],et=(Ct[9]-1)/Ct[5],w=(Ct[8]-1)/Ct[0],Rt=(Nt[8]+1)/Nt[0],nt=It*w,_t=It*Rt,ht=lt/(-w+Rt),Ut=ht*-w;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const St=It+ht,T=Xt+ht,x=nt-Ut,B=_t+(lt-Ut),Z=Q*Xt/T*St,tt=et*Xt/T*St;J.projectionMatrix.makePerspective(x,B,Z,tt,St,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ct(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let st=J.near,yt=J.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=D.near=A.near=st,y.far=D.far=A.far=yt,(L!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,z=y.far),A.layers.mask=J.layers.mask|2,D.layers.mask=J.layers.mask|4,y.layers.mask=A.layers.mask|D.layers.mask;const lt=J.parent,Ct=y.cameras;ct(y,lt);for(let Nt=0;Nt<Ct.length;Nt++)ct(Ct[Nt],lt);Ct.length===2?V(y,A,D):y.projectionMatrix.copy(A.projectionMatrix),gt(J,y,lt)};function gt(J,st,yt){yt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let wt=null;function kt(J,st){if(u=st.getViewerPose(c||a),p=st,u!==null){const yt=u.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let lt=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Nt=0;Nt<yt.length;Nt++){const It=yt[Nt];let Xt=null;if(m!==null)Xt=m.getViewport(It);else{const et=h.getViewSubImage(f,It);Xt=et.viewport,Nt===0&&(t.setRenderTargetTextures(E,et.colorTexture,f.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(E))}let Q=b[Nt];Q===void 0&&(Q=new Je,Q.layers.enable(Nt),Q.viewport=new le,b[Nt]=Q),Q.matrix.fromArray(It.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(It.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Nt===0&&(y.matrix.copy(Q.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Q)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Nt=h.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,r.renderState)}}for(let yt=0;yt<S.length;yt++){const lt=v[yt],Ct=S[yt];lt!==null&&Ct!==void 0&&Ct.update(lt,st,c||a)}wt&&wt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),p=null}const Zt=new uu;Zt.setAnimationLoop(kt),this.setAnimationLoop=function(J){wt=J},this.dispose=function(){}}}const Mi=new Rn,J0=new de;function K0(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ou(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,E,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),h(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,v)):d.isMeshMatcapMaterial?(s(g,d),p(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),_(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,E,S):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ke&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ke&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const E=t.get(d),S=E.envMap,v=E.envMapRotation;S&&(g.envMap.value=S,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),g.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Mi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,E,S){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*E,g.scale.value=S*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,E){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const E=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function j0(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=r[E.id];v===void 0&&(p(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",g));const U=S.program;n.updateUBOMapping(E,U);const R=t.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const S=h();E.__bindingPointIndex=S;const v=i.createBuffer(),U=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=r[E.id],v=E.uniforms,U=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,A=v.length;R<A;R++){const D=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(m(L,R,b,U)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let Y=0;Y<O.length;Y++){const W=O[Y],j=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+H,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,S,v,U){const R=E.value,A=S+"_"+v;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const D=U[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return U[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function p(E){const S=E.uniforms;let v=0;const U=16;for(let A=0,D=S.length;A<D;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,L=b.length;y<L;y++){const z=b[y],O=Array.isArray(z.value)?z.value:[z.value];for(let H=0,Y=O.length;H<Y;H++){const W=O[H],j=_(W),V=v%U,ct=V%j.boundary,gt=V+ct;v+=ct,gt!==0&&U-gt<j.storage&&(v+=U-gt),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=j.storage}}}const R=v%U;return R>0&&(v+=U-R),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function g(E){const S=E.target;S.removeEventListener("dispose",g);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Q0{constructor(t={}){const{canvas:e=zh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=oi,this.toneMappingExposure=1;const v=this;let U=!1,R=0,A=0,D=null,b=-1,y=null;const L=new le,z=new le;let O=null;const H=new Wt(0);let Y=0,W=e.width,j=e.height,V=1,ct=null,gt=null;const wt=new le(0,0,W,j),kt=new le(0,0,W,j);let Zt=!1;const J=new jo;let st=!1,yt=!1;const lt=new de,Ct=new de,Nt=new I,It=new le,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function et(){return D===null?V:1}let w=n;function Rt(M,F){return e.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ft,!1),w===null){const F="webgl2";if(w=Rt(F,M),w===null)throw Rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let nt,_t,ht,Ut,St,T,x,B,Z,tt,$,Et,dt,xt,Ft,it,bt,Lt,Dt,Tt,qt,Bt,ne,N;function pt(){nt=new rm(w),nt.init(),Bt=new V0(w,nt),_t=new Kp(w,nt,t,Bt),ht=new k0(w,nt),_t.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Ut=new om(w),St=new T0,T=new H0(w,nt,ht,St,_t,Bt,Ut),x=new Qp(v),B=new im(v),Z=new df(w),ne=new Zp(w,Z),tt=new sm(w,Z,Ut,ne),$=new cm(w,tt,Z,Ut),Dt=new lm(w,_t,T),it=new jp(St),Et=new E0(v,x,B,nt,_t,ne,it),dt=new K0(v,St),xt=new A0,Ft=new I0(nt),Lt=new $p(v,x,B,ht,$,m,l),bt=new B0(v,$,_t),N=new j0(w,Ut,_t,ht),Tt=new Jp(w,nt,Ut),qt=new am(w,nt,Ut),Ut.programs=Et.programs,v.capabilities=_t,v.extensions=nt,v.properties=St,v.renderLists=xt,v.shadowMap=bt,v.state=ht,v.info=Ut}pt();const X=new Z0(v,w);this.xr=X,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(W,j,!1))},this.getSize=function(M){return M.set(W,j)},this.setSize=function(M,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,j=F,e.width=Math.floor(M*V),e.height=Math.floor(F*V),G===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(W*V,j*V).floor()},this.setDrawingBufferSize=function(M,F,G){W=M,j=F,V=G,e.width=Math.floor(M*G),e.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(wt)},this.setViewport=function(M,F,G,P){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,F,G,P),ht.viewport(L.copy(wt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,F,G,P){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,F,G,P),ht.scissor(z.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){ht.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){gt=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(M=!0,F=!0,G=!0){let P=0;if(M){let C=!1;if(D!==null){const q=D.texture.format;C=q===$o||q===Yo||q===qo}if(C){const q=D.texture.type,ot=q===qn||q===Ci||q===Wr||q===fr||q===Wo||q===Xo,mt=Lt.getClearColor(),rt=Lt.getClearAlpha(),Mt=mt.r,Gt=mt.g,At=mt.b;ot?(p[0]=Mt,p[1]=Gt,p[2]=At,p[3]=rt,w.clearBufferuiv(w.COLOR,0,p)):(_[0]=Mt,_[1]=Gt,_[2]=At,_[3]=rt,w.clearBufferiv(w.COLOR,0,_))}else P|=w.COLOR_BUFFER_BIT}F&&(P|=w.DEPTH_BUFFER_BIT),G&&(P|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),Ft.dispose(),St.dispose(),x.dispose(),B.dispose(),$.dispose(),ne.dispose(),N.dispose(),Et.dispose(),X.dispose(),X.removeEventListener("sessionstart",te),X.removeEventListener("sessionend",Mr),Pn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=Ut.autoReset,F=bt.enabled,G=bt.autoUpdate,P=bt.needsUpdate,C=bt.type;pt(),Ut.autoReset=M,bt.enabled=F,bt.autoUpdate=G,bt.needsUpdate=P,bt.type=C}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const F=M.target;F.removeEventListener("dispose",zt),Jt(F)}function Jt(M){_e(M),St.remove(M)}function _e(M){const F=St.get(M).programs;F!==void 0&&(F.forEach(function(G){Et.releaseProgram(G)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,P,C,q){F===null&&(F=Xt);const ot=C.isMesh&&C.matrixWorld.determinant()<0,mt=Zn(M,F,G,P,C);ht.setMaterial(P,ot);let rt=G.index,Mt=1;if(P.wireframe===!0){if(rt=tt.getWireframeAttribute(G),rt===void 0)return;Mt=2}const Gt=G.drawRange,At=G.attributes.position;let Yt=Gt.start*Mt,he=(Gt.start+Gt.count)*Mt;q!==null&&(Yt=Math.max(Yt,q.start*Mt),he=Math.min(he,(q.start+q.count)*Mt)),rt!==null?(Yt=Math.max(Yt,0),he=Math.min(he,rt.count)):At!=null&&(Yt=Math.max(Yt,0),he=Math.min(he,At.count));const pe=he-Yt;if(pe<0||pe===1/0)return;ne.setup(C,P,mt,G,rt);let $e,ie=Tt;if(rt!==null&&($e=Z.get(rt),ie=qt,ie.setIndex($e)),C.isMesh)P.wireframe===!0?(ht.setLineWidth(P.wireframeLinewidth*et()),ie.setMode(w.LINES)):ie.setMode(w.TRIANGLES);else if(C.isLine){let Pt=P.linewidth;Pt===void 0&&(Pt=1),ht.setLineWidth(Pt*et()),C.isLineSegments?ie.setMode(w.LINES):C.isLineLoop?ie.setMode(w.LINE_LOOP):ie.setMode(w.LINE_STRIP)}else C.isPoints?ie.setMode(w.POINTS):C.isSprite&&ie.setMode(w.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)ie.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ie.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const Pt=C._multiDrawStarts,In=C._multiDrawCounts,re=C._multiDrawCount,dn=rt?Z.get(rt).bytesPerElement:1,Ni=St.get(P).currentProgram.getUniforms();for(let je=0;je<re;je++)Ni.setValue(w,"_gl_DrawID",je),ie.render(Pt[je]/dn,In[je])}else if(C.isInstancedMesh)ie.renderInstances(Yt,pe,C.count);else if(G.isInstancedBufferGeometry){const Pt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,In=Math.min(G.instanceCount,Pt);ie.renderInstances(Yt,pe,In)}else ie.render(Yt,pe)};function ee(M,F,G){M.transparent===!0&&M.side===Tn&&M.forceSinglePass===!1?(M.side=Ke,M.needsUpdate=!0,$n(M,F,G),M.side=ci,M.needsUpdate=!0,$n(M,F,G),M.side=Tn):$n(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),d=Ft.get(G),d.init(F),S.push(d),G.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(d.pushLight(C),C.castShadow&&d.pushShadow(C))}),M!==G&&M.traverseVisible(function(C){C.isLight&&C.layers.test(F.layers)&&(d.pushLight(C),C.castShadow&&d.pushShadow(C))}),d.setupLights();const P=new Set;return M.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const q=C.material;if(q)if(Array.isArray(q))for(let ot=0;ot<q.length;ot++){const mt=q[ot];ee(mt,G,C),P.add(mt)}else ee(q,G,C),P.add(q)}),S.pop(),d=null,P},this.compileAsync=function(M,F,G=null){const P=this.compile(M,F,G);return new Promise(C=>{function q(){if(P.forEach(function(ot){St.get(ot).currentProgram.isReady()&&P.delete(ot)}),P.size===0){C(M);return}setTimeout(q,10)}nt.get("KHR_parallel_shader_compile")!==null?q():setTimeout(q,10)})};let Ue=null;function Ne(M){Ue&&Ue(M)}function te(){Pn.stop()}function Mr(){Pn.start()}const Pn=new uu;Pn.setAnimationLoop(Ne),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(M){Ue=M,X.setAnimationLoop(M),M===null?Pn.stop():Pn.start()},X.addEventListener("sessionstart",te),X.addEventListener("sessionend",Mr),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,F,D),d=Ft.get(M,S.length),d.init(F),S.push(d),Ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,st=it.init(this.clippingPlanes,yt),g=xt.get(M,E.length),g.init(),E.push(g),X.enabled===!0&&X.isPresenting===!0){const q=v.xr.getDepthSensingMesh();q!==null&&Ln(q,F,-1/0,v.sortObjects)}Ln(M,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ct,gt),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&Lt.addToRenderList(g,M),this.info.render.frame++,st===!0&&it.beginShadows();const G=d.state.shadowsArray;bt.render(G,M,F),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const P=g.opaque,C=g.transmissive;if(d.setupLights(),F.isArrayCamera){const q=F.cameras;if(C.length>0)for(let ot=0,mt=q.length;ot<mt;ot++){const rt=q[ot];di(P,C,M,rt)}Q&&Lt.render(M);for(let ot=0,mt=q.length;ot<mt;ot++){const rt=q[ot];fn(g,M,rt,rt.viewport)}}else C.length>0&&di(P,C,M,F),Q&&Lt.render(M),fn(g,M,F);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,F),ne.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],st===!0&&it.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Ln(M,F,G,P){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){P&&It.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const ot=$.update(M),mt=M.material;mt.visible&&g.push(M,ot,mt,G,It.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||J.intersectsObject(M))){const ot=$.update(M),mt=M.material;if(P&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),It.copy(M.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),It.copy(ot.boundingSphere.center)),It.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(mt)){const rt=ot.groups;for(let Mt=0,Gt=rt.length;Mt<Gt;Mt++){const At=rt[Mt],Yt=mt[At.materialIndex];Yt&&Yt.visible&&g.push(M,ot,Yt,G,It.z,At)}}else mt.visible&&g.push(M,ot,mt,G,It.z,null)}}const q=M.children;for(let ot=0,mt=q.length;ot<mt;ot++)Ln(q[ot],F,G,P)}function fn(M,F,G,P){const C=M.opaque,q=M.transmissive,ot=M.transparent;d.setupLightsView(G),st===!0&&it.setGlobalState(v.clippingPlanes,G),P&&ht.viewport(L.copy(P)),C.length>0&&Dn(C,F,G),q.length>0&&Dn(q,F,G),ot.length>0&&Dn(ot,F,G),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function di(M,F,G,P){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[P.id]===void 0&&(d.state.transmissionRenderTarget[P.id]=new Pi(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?jr:qn,minFilter:Ai,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const q=d.state.transmissionRenderTarget[P.id],ot=P.viewport||L;q.setSize(ot.z,ot.w);const mt=v.getRenderTarget();v.setRenderTarget(q),v.getClearColor(H),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Lt.render(G);const rt=v.toneMapping;v.toneMapping=oi;const Mt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),d.setupLightsView(P),st===!0&&it.setGlobalState(v.clippingPlanes,P),Dn(M,G,P),T.updateMultisampleRenderTarget(q),T.updateRenderTargetMipmap(q),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,Yt=F.length;At<Yt;At++){const he=F[At],pe=he.object,$e=he.geometry,ie=he.material,Pt=he.group;if(ie.side===Tn&&pe.layers.test(P.layers)){const In=ie.side;ie.side=Ke,ie.needsUpdate=!0,pi(pe,G,P,$e,ie,Pt),ie.side=In,ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(T.updateMultisampleRenderTarget(q),T.updateRenderTargetMipmap(q))}v.setRenderTarget(mt),v.setClearColor(H,Y),Mt!==void 0&&(P.viewport=Mt),v.toneMapping=rt}function Dn(M,F,G){const P=F.isScene===!0?F.overrideMaterial:null;for(let C=0,q=M.length;C<q;C++){const ot=M[C],mt=ot.object,rt=ot.geometry,Mt=P===null?ot.material:P,Gt=ot.group;mt.layers.test(G.layers)&&pi(mt,F,G,rt,Mt,Gt)}}function pi(M,F,G,P,C,q){M.onBeforeRender(v,F,G,P,C,q),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),C.onBeforeRender(v,F,G,P,M,q),C.transparent===!0&&C.side===Tn&&C.forceSinglePass===!1?(C.side=Ke,C.needsUpdate=!0,v.renderBufferDirect(G,F,P,C,M,q),C.side=ci,C.needsUpdate=!0,v.renderBufferDirect(G,F,P,C,M,q),C.side=Tn):v.renderBufferDirect(G,F,P,C,M,q),M.onAfterRender(v,F,G,P,C,q)}function $n(M,F,G){F.isScene!==!0&&(F=Xt);const P=St.get(M),C=d.state.lights,q=d.state.shadowsArray,ot=C.state.version,mt=Et.getParameters(M,C.state,q,F,G),rt=Et.getProgramCacheKey(mt);let Mt=P.programs;P.environment=M.isMeshStandardMaterial?F.environment:null,P.fog=F.fog,P.envMap=(M.isMeshStandardMaterial?B:x).get(M.envMap||P.environment),P.envMapRotation=P.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",zt),Mt=new Map,P.programs=Mt);let Gt=Mt.get(rt);if(Gt!==void 0){if(P.currentProgram===Gt&&P.lightsStateVersion===ot)return mi(M,mt),Gt}else mt.uniforms=Et.getUniforms(M),M.onBeforeCompile(mt,v),Gt=Et.acquireProgram(mt,rt),Mt.set(rt,Gt),P.uniforms=mt.uniforms;const At=P.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=it.uniform),mi(M,mt),P.needsLights=rs(M),P.lightsStateVersion=ot,P.needsLights&&(At.ambientLightColor.value=C.state.ambient,At.lightProbe.value=C.state.probe,At.directionalLights.value=C.state.directional,At.directionalLightShadows.value=C.state.directionalShadow,At.spotLights.value=C.state.spot,At.spotLightShadows.value=C.state.spotShadow,At.rectAreaLights.value=C.state.rectArea,At.ltc_1.value=C.state.rectAreaLTC1,At.ltc_2.value=C.state.rectAreaLTC2,At.pointLights.value=C.state.point,At.pointLightShadows.value=C.state.pointShadow,At.hemisphereLights.value=C.state.hemi,At.directionalShadowMap.value=C.state.directionalShadowMap,At.directionalShadowMatrix.value=C.state.directionalShadowMatrix,At.spotShadowMap.value=C.state.spotShadowMap,At.spotLightMatrix.value=C.state.spotLightMatrix,At.spotLightMap.value=C.state.spotLightMap,At.pointShadowMap.value=C.state.pointShadowMap,At.pointShadowMatrix.value=C.state.pointShadowMatrix),P.currentProgram=Gt,P.uniformsList=null,Gt}function Ui(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Gs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function mi(M,F){const G=St.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Zn(M,F,G,P,C){F.isScene!==!0&&(F=Xt),T.resetTextureUnits();const q=F.fog,ot=P.isMeshStandardMaterial?F.environment:null,mt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_r,rt=(P.isMeshStandardMaterial?B:x).get(P.envMap||ot),Mt=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Gt=!!G.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),At=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,he=!!G.morphAttributes.color;let pe=oi;P.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pe=v.toneMapping);const $e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=$e!==void 0?$e.length:0,Pt=St.get(P),In=d.state.lights;if(st===!0&&(yt===!0||M!==y)){const ln=M===y&&P.id===b;it.setState(P,M,ln)}let re=!1;P.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==In.state.version||Pt.outputColorSpace!==mt||C.isBatchedMesh&&Pt.batching===!1||!C.isBatchedMesh&&Pt.batching===!0||C.isBatchedMesh&&Pt.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&Pt.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&Pt.instancing===!1||!C.isInstancedMesh&&Pt.instancing===!0||C.isSkinnedMesh&&Pt.skinning===!1||!C.isSkinnedMesh&&Pt.skinning===!0||C.isInstancedMesh&&Pt.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&Pt.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&Pt.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&Pt.instancingMorph===!1&&C.morphTexture!==null||Pt.envMap!==rt||P.fog===!0&&Pt.fog!==q||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Mt||Pt.vertexTangents!==Gt||Pt.morphTargets!==At||Pt.morphNormals!==Yt||Pt.morphColors!==he||Pt.toneMapping!==pe||Pt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Pt.__version=P.version);let dn=Pt.currentProgram;re===!0&&(dn=$n(P,F,C));let Ni=!1,je=!1,Sr=!1;const me=dn.getUniforms(),Sn=Pt.uniforms;if(ht.useProgram(dn.program)&&(Ni=!0,je=!0,Sr=!0),P.id!==b&&(b=P.id,je=!0),Ni||y!==M){ht.buffers.depth.getReversed()?(lt.copy(M.projectionMatrix),Gh(lt),Hh(lt),me.setValue(w,"projectionMatrix",lt)):me.setValue(w,"projectionMatrix",M.projectionMatrix),me.setValue(w,"viewMatrix",M.matrixWorldInverse);const Jn=me.map.cameraPosition;Jn!==void 0&&Jn.setValue(w,Nt.setFromMatrixPosition(M.matrixWorld)),_t.logarithmicDepthBuffer&&me.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&me.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,je=!0,Sr=!0)}if(C.isSkinnedMesh){me.setOptional(w,C,"bindMatrix"),me.setOptional(w,C,"bindMatrixInverse");const ln=C.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),me.setValue(w,"boneTexture",ln.boneTexture,T))}C.isBatchedMesh&&(me.setOptional(w,C,"batchingTexture"),me.setValue(w,"batchingTexture",C._matricesTexture,T),me.setOptional(w,C,"batchingIdTexture"),me.setValue(w,"batchingIdTexture",C._indirectTexture,T),me.setOptional(w,C,"batchingColorTexture"),C._colorsTexture!==null&&me.setValue(w,"batchingColorTexture",C._colorsTexture,T));const br=G.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0)&&Dt.update(C,G,dn),(je||Pt.receiveShadow!==C.receiveShadow)&&(Pt.receiveShadow=C.receiveShadow,me.setValue(w,"receiveShadow",C.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(Sn.envMap.value=rt,Sn.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),P.isMeshStandardMaterial&&P.envMap===null&&F.environment!==null&&(Sn.envMapIntensity.value=F.environmentIntensity),je&&(me.setValue(w,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&is(Sn,Sr),q&&P.fog===!0&&dt.refreshFogUniforms(Sn,q),dt.refreshMaterialUniforms(Sn,P,V,j,d.state.transmissionRenderTarget[M.id]),Gs.upload(w,Ui(Pt),Sn,T)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Gs.upload(w,Ui(Pt),Sn,T),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&me.setValue(w,"center",C.center),me.setValue(w,"modelViewMatrix",C.modelViewMatrix),me.setValue(w,"normalMatrix",C.normalMatrix),me.setValue(w,"modelMatrix",C.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const ln=P.uniformsGroups;for(let Jn=0,Kn=ln.length;Jn<Kn;Jn++){const fl=ln[Jn];N.update(fl,dn),N.bind(fl,dn)}}return dn}function is(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function rs(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,F,G){St.get(M.texture).__webglTexture=F,St.get(M.depthTexture).__webglTexture=G;const P=St.get(M);P.__hasExternalTextures=!0,P.__autoAllocateDepthBuffer=G===void 0,P.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const G=St.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,G=0){D=M,R=F,A=G;let P=!0,C=null,q=!1,ot=!1;if(M){const rt=St.get(M);if(rt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(w.FRAMEBUFFER,null),P=!1;else if(rt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(rt.__hasExternalTextures)T.rebindTextures(M,St.get(M.texture).__webglTexture,St.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(rt.__boundDepthTexture!==At){if(At!==null&&St.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ot=!0);const Gt=St.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?C=Gt[F][G]:C=Gt[F],q=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?C=St.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?C=Gt[G]:C=Gt,L.copy(M.viewport),z.copy(M.scissor),O=M.scissorTest}else L.copy(wt).multiplyScalar(V).floor(),z.copy(kt).multiplyScalar(V).floor(),O=Zt;if(ht.bindFramebuffer(w.FRAMEBUFFER,C)&&P&&ht.drawBuffers(M,C),ht.viewport(L),ht.scissor(z),ht.setScissorTest(O),q){const rt=St.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+F,rt.__webglTexture,G)}else if(ot){const rt=St.get(M.texture),Mt=F||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,rt.__webglTexture,G||0,Mt)}b=-1},this.readRenderTargetPixels=function(M,F,G,P,C,q,ot){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(mt=mt[ot]),mt){ht.bindFramebuffer(w.FRAMEBUFFER,mt);try{const rt=M.texture,Mt=rt.format,Gt=rt.type;if(!_t.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-P&&G>=0&&G<=M.height-C&&w.readPixels(F,G,P,C,Bt.convert(Mt),Bt.convert(Gt),q)}finally{const rt=D!==null?St.get(D).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,P,C,q,ot){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=St.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(mt=mt[ot]),mt){const rt=M.texture,Mt=rt.format,Gt=rt.type;if(!_t.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-P&&G>=0&&G<=M.height-C){ht.bindFramebuffer(w.FRAMEBUFFER,mt);const At=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.bufferData(w.PIXEL_PACK_BUFFER,q.byteLength,w.STREAM_READ),w.readPixels(F,G,P,C,Bt.convert(Mt),Bt.convert(Gt),0);const Yt=D!==null?St.get(D).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,Yt);const he=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await kh(w,he,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,At),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,q),w.deleteBuffer(At),w.deleteSync(he),q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,G=0){M.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const P=Math.pow(2,-G),C=Math.floor(M.image.width*P),q=Math.floor(M.image.height*P),ot=F!==null?F.x:0,mt=F!==null?F.y:0;T.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,ot,mt,C,q),ht.unbindTexture()},this.copyTextureToTexture=function(M,F,G=null,P=null,C=0){M.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1],F=arguments[2],C=arguments[3]||0,G=null);let q,ot,mt,rt,Mt,Gt,At,Yt,he;const pe=M.isCompressedTexture?M.mipmaps[C]:M.image;G!==null?(q=G.max.x-G.min.x,ot=G.max.y-G.min.y,mt=G.isBox3?G.max.z-G.min.z:1,rt=G.min.x,Mt=G.min.y,Gt=G.isBox3?G.min.z:0):(q=pe.width,ot=pe.height,mt=pe.depth||1,rt=0,Mt=0,Gt=0),P!==null?(At=P.x,Yt=P.y,he=P.z):(At=0,Yt=0,he=0);const $e=Bt.convert(F.format),ie=Bt.convert(F.type);let Pt;F.isData3DTexture?(T.setTexture3D(F,0),Pt=w.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Pt=w.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,F.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,F.unpackAlignment);const In=w.getParameter(w.UNPACK_ROW_LENGTH),re=w.getParameter(w.UNPACK_IMAGE_HEIGHT),dn=w.getParameter(w.UNPACK_SKIP_PIXELS),Ni=w.getParameter(w.UNPACK_SKIP_ROWS),je=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,pe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,rt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Mt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Gt);const Sr=M.isDataArrayTexture||M.isData3DTexture,me=F.isDataArrayTexture||F.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Sn=St.get(M),br=St.get(F),ln=St.get(Sn.__renderTarget),Jn=St.get(br.__renderTarget);ht.bindFramebuffer(w.READ_FRAMEBUFFER,ln.__webglFramebuffer),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Kn=0;Kn<mt;Kn++)Sr&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.get(M).__webglTexture,C,Gt+Kn),M.isDepthTexture?(me&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,St.get(F).__webglTexture,C,he+Kn),w.blitFramebuffer(rt,Mt,q,ot,At,Yt,q,ot,w.DEPTH_BUFFER_BIT,w.NEAREST)):me?w.copyTexSubImage3D(Pt,C,At,Yt,he+Kn,rt,Mt,q,ot):w.copyTexSubImage2D(Pt,C,At,Yt,he+Kn,rt,Mt,q,ot);ht.bindFramebuffer(w.READ_FRAMEBUFFER,null),ht.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else me?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(Pt,C,At,Yt,he,q,ot,mt,$e,ie,pe.data):F.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,C,At,Yt,he,q,ot,mt,$e,pe.data):w.texSubImage3D(Pt,C,At,Yt,he,q,ot,mt,$e,ie,pe):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,C,At,Yt,q,ot,$e,ie,pe.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,C,At,Yt,pe.width,pe.height,$e,pe.data):w.texSubImage2D(w.TEXTURE_2D,C,At,Yt,q,ot,$e,ie,pe);w.pixelStorei(w.UNPACK_ROW_LENGTH,In),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,re),w.pixelStorei(w.UNPACK_SKIP_PIXELS,dn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ni),w.pixelStorei(w.UNPACK_SKIP_IMAGES,je),C===0&&F.generateMipmaps&&w.generateMipmap(Pt),ht.unbindTexture()},this.copyTextureToTexture3D=function(M,F,G=null,P=null,C=0){return M.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,P=arguments[1]||null,M=arguments[2],F=arguments[3],C=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,G,P,C)},this.initRenderTarget=function(M){St.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),ht.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,ht.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class tl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tg extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Co,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new I;class $s{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=xn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gu extends xr{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ji;const Rr=new I,Ki=new I,ji=new I,Qi=new at,Cr=new at,_u=new de,ws=new I,Pr=new I,As=new I,uc=new at,Ia=new at,hc=new at;class ng extends Ae{constructor(t=new gu){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eg(e,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new $s(n,3,0,!1)),Ji.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Ji,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),_u.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-ji.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Rs(ws.set(-.5,-.5,0),ji,a,Ki,r,s),Rs(Pr.set(.5,-.5,0),ji,a,Ki,r,s),Rs(As.set(.5,.5,0),ji,a,Ki,r,s),uc.set(0,0),Ia.set(1,0),hc.set(1,1);let o=t.ray.intersectTriangle(ws,Pr,As,!1,Rr);if(o===null&&(Rs(Pr.set(-.5,.5,0),ji,a,Ki,r,s),Ia.set(0,1),o=t.ray.intersectTriangle(ws,As,Pr,!1,Rr),o===null))return;const l=t.ray.origin.distanceTo(Rr);l<t.near||l>t.far||e.push({distance:l,point:Rr.clone(),uv:un.getInterpolation(Rr,ws,Pr,As,uc,Ia,hc,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rs(i,t,e,n,r,s){Qi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Cr.x=s*Qi.x-r*Qi.y,Cr.y=r*Qi.x+s*Qi.y):Cr.copy(Qi),i.copy(t),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(_u)}class ig extends qe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],f=n[r+1]-u,m=(a-u)/f;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,r=[],s=[],a=[],o=new I,l=new de;for(let m=0;m<=t;m++){const p=m/t;r[m]=this.getTangentAt(p,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(De(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,p))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(De(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],m*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class el extends Cn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rg extends el{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function nl(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,m*=u,r(a,o,f,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Cs=new I,Ua=new nl,Na=new nl,Fa=new nl;class sg extends Cn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Cs.subVectors(r[0],r[1]).add(r[0]),c=Cs);const h=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Cs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Ua.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,_,g),Na.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,_,g),Fa.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(Ua.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Na.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Fa.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Ua.calc(l),Na.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function ag(i,t){const e=1-i;return e*e*t}function og(i,t){return 2*(1-i)*i*t}function lg(i,t){return i*i*t}function zr(i,t,e,n){return ag(i,t)+og(i,e)+lg(i,n)}function cg(i,t){const e=1-i;return e*e*e*t}function ug(i,t){const e=1-i;return 3*e*e*i*t}function hg(i,t){return 3*(1-i)*i*i*t}function fg(i,t){return i*i*i*t}function kr(i,t,e,n,r){return cg(i,t)+ug(i,e)+hg(i,n)+fg(i,r)}class vu extends Cn{constructor(t=new at,e=new at,n=new at,r=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,r.x,s.x,a.x,o.x),kr(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends Cn{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(kr(t,r.x,s.x,a.x,o.x),kr(t,r.y,s.y,a.y,o.y),kr(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xu extends Cn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends Cn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(zr(t,r.x,s.x,a.x),zr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(zr(t,r.x,s.x,a.x),zr(t,r.y,s.y,a.y),zr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(fc(o,l.x,c.x,u.x,h.x),fc(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new at().fromArray(r))}return this}}var Lo=Object.freeze({__proto__:null,ArcCurve:rg,CatmullRomCurve3:sg,CubicBezierCurve:vu,CubicBezierCurve3:dg,EllipseCurve:el,LineCurve:xu,LineCurve3:pg,QuadraticBezierCurve:yu,QuadraticBezierCurve3:mg,SplineCurve:Mu});class gg extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Lo[r.type]().fromJSON(r))}return this}}class Do extends gg{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xu(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new yu(this.currentPoint.clone(),new at(t,e),new at(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new vu(this.currentPoint.clone(),new at(t,e),new at(n,r),new at(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new el(t,e,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class il extends an{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=De(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/e,h=new I,f=new at,m=new I,p=new I,_=new I;let g=0,d=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,m.x=d*1,m.y=-g,m.z=d*0,_.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[E+1].x-t[E].x,d=t[E+1].y-t[E].y,m.x=d*1,m.y=-g,m.z=d*0,p.copy(m),m.x+=_.x,m.y+=_.y,m.z+=_.z,m.normalize(),l.push(m.x,m.y,m.z),_.copy(p)}for(let E=0;E<=e;E++){const S=n+E*u*r,v=Math.sin(S),U=Math.cos(S);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*v,h.y=t[R].y,h.z=t[R].x*U,a.push(h.x,h.y,h.z),f.x=E/e,f.y=R/(t.length-1),o.push(f.x,f.y);const A=l[3*R+0]*v,D=l[3*R+1],b=l[3*R+0]*U;c.push(A,D,b)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const v=S+E*t.length,U=v,R=v+t.length,A=v+t.length+1,D=v+1;s.push(U,R,D),s.push(A,D,R)}this.setIndex(s),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.points,t.segments,t.phiStart,t.phiLength)}}class nr extends il{constructor(t=1,e=1,n=4,r=8){const s=new Do;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new nr(t.radius,t.length,t.capSegments,t.radialSegments)}}class es extends an{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let p=0;const _=[],g=n/2;let d=0;E(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ie(h,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(m,2));function E(){const v=new I,U=new I;let R=0;const A=(e-t)/n;for(let D=0;D<=s;D++){const b=[],y=D/s,L=y*(e-t)+t;for(let z=0;z<=r;z++){const O=z/r,H=O*l+o,Y=Math.sin(H),W=Math.cos(H);U.x=L*Y,U.y=-y*n+g,U.z=L*W,h.push(U.x,U.y,U.z),v.set(Y,A,W).normalize(),f.push(v.x,v.y,v.z),m.push(O,1-y),b.push(p++)}_.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){const y=_[b][D],L=_[b+1][D],z=_[b+1][D+1],O=_[b][D+1];(t>0||b!==0)&&(u.push(y,L,O),R+=3),(e>0||b!==s-1)&&(u.push(L,z,O),R+=3)}c.addGroup(d,R,0),d+=R}function S(v){const U=p,R=new at,A=new I;let D=0;const b=v===!0?t:e,y=v===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,g*y,0),f.push(0,y,0),m.push(.5,.5),p++;const L=p;for(let z=0;z<=r;z++){const H=z/r*l+o,Y=Math.cos(H),W=Math.sin(H);A.x=b*W,A.y=g*y,A.z=b*Y,h.push(A.x,A.y,A.z),f.push(0,y,0),R.x=Y*.5+.5,R.y=W*.5*y+.5,m.push(R.x,R.y),p++}for(let z=0;z<r;z++){const O=U+z,H=L+z;v===!0?u.push(H,H+1,O):u.push(H+1,H,O),D+=3}c.addGroup(d,D,v===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new es(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends es{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Gr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Su extends Do{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Do().fromJSON(r))}return this}}const _g={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=bu(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,m;if(n&&(s=Sg(i,t,s,e)),i.length>80*e){o=c=i[0],l=u=i[1];for(let p=e;p<r;p+=e)h=i[p],f=i[p+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Xr(s,a,e,o,l,m,0),a}};function bu(i,t,e,n,r){let s,a;if(r===Ig(i,t,e,n)>0)for(s=t;s<e;s+=n)a=dc(s,i[s],i[s+1],a);else for(s=e-n;s>=t;s-=n)a=dc(s,i[s],i[s+1],a);return a&&na(a,a.next)&&(Yr(a),a=a.next),a}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(na(e,e.next)||ve(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Ag(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?xg(i,n,r,s):vg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=yg(Li(i),t,e),Xr(i,t,e,n,r,s,2)):a===2&&Mg(i,t,e,n,r,s):Xr(Li(i),t,e,n,r,s,1);break}}}function vg(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,f=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=m&&ir(r,o,s,l,a,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function xg(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ve(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,p=u<h?u<f?u:f:h<f?h:f,_=o>l?o>c?o:c:l>c?l:c,g=u>h?u>f?u:f:h>f?h:f,d=Io(m,p,t,e,n),E=Io(_,g,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=d&&v&&v.z<=E;){if(S.x>=m&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==a&&ir(o,u,l,h,c,f,S.x,S.y)&&ve(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=m&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==a&&ir(o,u,l,h,c,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=d;){if(S.x>=m&&S.x<=_&&S.y>=p&&S.y<=g&&S!==r&&S!==a&&ir(o,u,l,h,c,f,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=m&&v.x<=_&&v.y>=p&&v.y<=g&&v!==r&&v!==a&&ir(o,u,l,h,c,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yg(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!na(r,s)&&Eu(r,n,n.next,s)&&qr(r,s)&&qr(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Yr(n),Yr(n.next),n=i=s),n=n.next}while(n!==i);return Li(n)}function Mg(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pg(a,o)){let l=Tu(a,o);a=Li(a,a.next),l=Li(l,l.next),Xr(a,t,e,n,r,s,0),Xr(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Sg(i,t,e,n){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=bu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Cg(c));for(r.sort(bg),s=0;s<r.length;s++)e=Eg(r[s],e);return e}function bg(i,t){return i.x-t.x}function Eg(i,t){const e=Tg(i,t);if(!e)return t;const n=Tu(e,i);return Li(n,n.next),Li(e,e.next)}function Tg(i,t){let e=t,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&ir(a<c?s:n,a,l,c,a<c?n:s,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(s-e.x),qr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&wg(r,e)))&&(r=e,u=h)),e=e.next;while(e!==o);return r}function wg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Ag(i,t,e,n){let r=i;do r.z===0&&(r.z=Io(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Rg(r)}function Rg(i){let t,e,n,r,s,a,o,l,c=1;do{for(e=i,i=null,s=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(a>1);return i}function Io(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Cg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ir(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function Pg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Lg(i,t)&&(qr(i,t)&&qr(t,i)&&Dg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||na(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function na(i,t){return i.x===t.x&&i.y===t.y}function Eu(i,t,e,n){const r=Ls(ve(i,t,e)),s=Ls(ve(i,t,n)),a=Ls(ve(e,n,i)),o=Ls(ve(e,n,t));return!!(r!==s&&a!==o||r===0&&Ps(i,e,t)||s===0&&Ps(i,n,t)||a===0&&Ps(e,i,n)||o===0&&Ps(e,t,n))}function Ps(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ls(i){return i>0?1:i<0?-1:0}function Lg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Dg(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Tu(i,t){const e=new Uo(i.i,i.x,i.y),n=new Uo(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function dc(i,t,e,n){const r=new Uo(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ig(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Hr{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Hr.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];pc(t),mc(n,t);let a=t.length;e.forEach(pc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,mc(n,e[l]);const o=_g.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class rl extends an{constructor(t=new Su([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ie(r,3)),this.setAttribute("uv",new Ie(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Ug;let S,v=!1,U,R,A,D;d&&(S=d.getSpacedPoints(u),v=!0,f=!1,U=d.computeFrenetFrames(u,!1),R=new I,A=new I,D=new I),f||(g=0,m=0,p=0,_=0);const b=o.extractPoints(c);let y=b.shape;const L=b.holes;if(!Hr.isClockWise(y)){y=y.reverse();for(let Q=0,et=L.length;Q<et;Q++){const w=L[Q];Hr.isClockWise(w)&&(L[Q]=w.reverse())}}const O=Hr.triangulateShape(y,L),H=y;for(let Q=0,et=L.length;Q<et;Q++){const w=L[Q];y=y.concat(w)}function Y(Q,et,w){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(et,w)}const W=y.length,j=O.length;function V(Q,et,w){let Rt,nt,_t;const ht=Q.x-et.x,Ut=Q.y-et.y,St=w.x-Q.x,T=w.y-Q.y,x=ht*ht+Ut*Ut,B=ht*T-Ut*St;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(x),tt=Math.sqrt(St*St+T*T),$=et.x-Ut/Z,Et=et.y+ht/Z,dt=w.x-T/tt,xt=w.y+St/tt,Ft=((dt-$)*T-(xt-Et)*St)/(ht*T-Ut*St);Rt=$+ht*Ft-Q.x,nt=Et+Ut*Ft-Q.y;const it=Rt*Rt+nt*nt;if(it<=2)return new at(Rt,nt);_t=Math.sqrt(it/2)}else{let Z=!1;ht>Number.EPSILON?St>Number.EPSILON&&(Z=!0):ht<-Number.EPSILON?St<-Number.EPSILON&&(Z=!0):Math.sign(Ut)===Math.sign(T)&&(Z=!0),Z?(Rt=-Ut,nt=ht,_t=Math.sqrt(x)):(Rt=ht,nt=Ut,_t=Math.sqrt(x/2))}return new at(Rt/_t,nt/_t)}const ct=[];for(let Q=0,et=H.length,w=et-1,Rt=Q+1;Q<et;Q++,w++,Rt++)w===et&&(w=0),Rt===et&&(Rt=0),ct[Q]=V(H[Q],H[w],H[Rt]);const gt=[];let wt,kt=ct.concat();for(let Q=0,et=L.length;Q<et;Q++){const w=L[Q];wt=[];for(let Rt=0,nt=w.length,_t=nt-1,ht=Rt+1;Rt<nt;Rt++,_t++,ht++)_t===nt&&(_t=0),ht===nt&&(ht=0),wt[Rt]=V(w[Rt],w[_t],w[ht]);gt.push(wt),kt=kt.concat(wt)}for(let Q=0;Q<g;Q++){const et=Q/g,w=m*Math.cos(et*Math.PI/2),Rt=p*Math.sin(et*Math.PI/2)+_;for(let nt=0,_t=H.length;nt<_t;nt++){const ht=Y(H[nt],ct[nt],Rt);lt(ht.x,ht.y,-w)}for(let nt=0,_t=L.length;nt<_t;nt++){const ht=L[nt];wt=gt[nt];for(let Ut=0,St=ht.length;Ut<St;Ut++){const T=Y(ht[Ut],wt[Ut],Rt);lt(T.x,T.y,-w)}}}const Zt=p+_;for(let Q=0;Q<W;Q++){const et=f?Y(y[Q],kt[Q],Zt):y[Q];v?(A.copy(U.normals[0]).multiplyScalar(et.x),R.copy(U.binormals[0]).multiplyScalar(et.y),D.copy(S[0]).add(A).add(R),lt(D.x,D.y,D.z)):lt(et.x,et.y,0)}for(let Q=1;Q<=u;Q++)for(let et=0;et<W;et++){const w=f?Y(y[et],kt[et],Zt):y[et];v?(A.copy(U.normals[Q]).multiplyScalar(w.x),R.copy(U.binormals[Q]).multiplyScalar(w.y),D.copy(S[Q]).add(A).add(R),lt(D.x,D.y,D.z)):lt(w.x,w.y,h/u*Q)}for(let Q=g-1;Q>=0;Q--){const et=Q/g,w=m*Math.cos(et*Math.PI/2),Rt=p*Math.sin(et*Math.PI/2)+_;for(let nt=0,_t=H.length;nt<_t;nt++){const ht=Y(H[nt],ct[nt],Rt);lt(ht.x,ht.y,h+w)}for(let nt=0,_t=L.length;nt<_t;nt++){const ht=L[nt];wt=gt[nt];for(let Ut=0,St=ht.length;Ut<St;Ut++){const T=Y(ht[Ut],wt[Ut],Rt);v?lt(T.x,T.y+S[u-1].y,S[u-1].x+w):lt(T.x,T.y,h+w)}}}J(),st();function J(){const Q=r.length/3;if(f){let et=0,w=W*et;for(let Rt=0;Rt<j;Rt++){const nt=O[Rt];Ct(nt[2]+w,nt[1]+w,nt[0]+w)}et=u+g*2,w=W*et;for(let Rt=0;Rt<j;Rt++){const nt=O[Rt];Ct(nt[0]+w,nt[1]+w,nt[2]+w)}}else{for(let et=0;et<j;et++){const w=O[et];Ct(w[2],w[1],w[0])}for(let et=0;et<j;et++){const w=O[et];Ct(w[0]+W*u,w[1]+W*u,w[2]+W*u)}}n.addGroup(Q,r.length/3-Q,0)}function st(){const Q=r.length/3;let et=0;yt(H,et),et+=H.length;for(let w=0,Rt=L.length;w<Rt;w++){const nt=L[w];yt(nt,et),et+=nt.length}n.addGroup(Q,r.length/3-Q,1)}function yt(Q,et){let w=Q.length;for(;--w>=0;){const Rt=w;let nt=w-1;nt<0&&(nt=Q.length-1);for(let _t=0,ht=u+g*2;_t<ht;_t++){const Ut=W*_t,St=W*(_t+1),T=et+Rt+Ut,x=et+nt+Ut,B=et+nt+St,Z=et+Rt+St;Nt(T,x,B,Z)}}}function lt(Q,et,w){l.push(Q),l.push(et),l.push(w)}function Ct(Q,et,w){It(Q),It(et),It(w);const Rt=r.length/3,nt=E.generateTopUV(n,r,Rt-3,Rt-2,Rt-1);Xt(nt[0]),Xt(nt[1]),Xt(nt[2])}function Nt(Q,et,w,Rt){It(Q),It(et),It(Rt),It(et),It(w),It(Rt);const nt=r.length/3,_t=E.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);Xt(_t[0]),Xt(_t[1]),Xt(_t[3]),Xt(_t[1]),Xt(_t[2]),Xt(_t[3])}function It(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Xt(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ng(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Lo[r.type]().fromJSON(r)),new rl(n,t.options)}}const Ug={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new at(s,a),new at(o,l),new at(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],m=t[r*3+1],p=t[r*3+2],_=t[s*3],g=t[s*3+1],d=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-h),new at(f,1-p),new at(_,1-d)]:[new at(o,1-l),new at(u,1-h),new at(m,1-p),new at(g,1-d)]}};function Ng(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _n extends an{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,f=new I,m=[],p=[],_=[],g=[];for(let d=0;d<=n;d++){const E=[],S=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const R=U/e;h.x=-t*Math.cos(r+R*s)*Math.sin(a+S*o),h.y=t*Math.cos(a+S*o),h.z=t*Math.sin(r+R*s)*Math.sin(a+S*o),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(R+v,1-S),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const S=u[d][E+1],v=u[d][E],U=u[d+1][E],R=u[d+1][E+1];(d!==0||a>0)&&m.push(S,v,R),(d!==n-1||l<Math.PI)&&m.push(v,U,R)}this.setIndex(m),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rr extends xr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Fg extends sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new de,gc=new I,_c=new I;class wu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;gc.setFromMatrixPosition(t.matrixWorld),e.position.copy(gc),_c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_c),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Og extends wu{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=pr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Bg extends sl{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Og}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vc=new de,Lr=new I,Ba=new I;class zg extends wu{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Lr),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),r.makeTranslation(-Lr.x,-Lr.y,-Lr.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}}class kg extends sl{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}const xc=new de;class Gg{constructor(t,e,n=0,r=1/0){this.ray=new iu(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ko,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(t,e=!0,n=[]){return No(t,this,n,e),n.sort(yc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)No(t[r],this,n,e);return n.sort(yc),n}}function yc(i,t){return i.distance-t.distance}function No(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)No(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);let Au=4;function on(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Hg(i){const t=on(i),e=Array.from({length:256},(l,c)=>c);for(let l=255;l>0;l--){const c=Math.floor(t()*(l+1));[e[l],e[c]]=[e[c],e[l]]}const n=new Uint16Array(512);for(let l=0;l<512;l++)n[l]=e[l&255];const r=new Float32Array(256);for(let l=0;l<256;l++)r[l]=t();const s=(l,c)=>r[n[(l&255)+n[c&255]]];function a(l,c,u=0,h=0){let f=Math.floor(l),m=Math.floor(c);const p=l-f,_=c-m;let g=f+1,d=m+1;u&&(f=(f%u+u)%u,g=(g%u+u)%u),h&&(m=(m%h+h)%h,d=(d%h+h)%h);const E=p*p*(3-2*p),S=_*_*(3-2*_),v=s(f,m),U=s(g,m),R=s(f,d),A=s(g,d);return v+(U-v)*E+(R-v)*S+(v-U-R+A)*E*S}function o(l,c,u=4,h=0,f=0){let m=0,p=.5,_=1,g=0;for(let d=0;d<u;d++)m+=p*a(l*_,c*_,h*_,f*_),g+=p,p*=.5,_*=2;return m/g}return{noise:a,fbm:o}}const ue=(i,t,e)=>{const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)},we=(i,t,e)=>i+(t-i)*e;function Ye(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}class Te{constructor(t,e){this.w=t,this.h=e,this.c=Ye(t,e),this.ctx=this.c.getContext("2d",{willReadFrequently:!0}),this.img=this.ctx.createImageData(t,e),this.d=this.img.data}set(t,e,n,r,s,a=255){const o=e*this.w+t<<2,l=this.d;l[o]=n,l[o+1]=r,l[o+2]=s,l[o+3]=a}flush(){return this.ctx.putImageData(this.img,0,0),this.c}}function $t(i,{srgb:t=!0,repeat:e=[1,1],wrap:n=!0}={}){const r=new ig(i);return t&&(r.colorSpace=Ze),n&&(r.wrapS=r.wrapT=Ws),r.repeat.set(e[0],e[1]),r.anisotropy=Au,r}function ns(i,t,e,n,r=!0){const s=new Te(t,e);for(let a=0;a<e;a++){const o=r?(a-1+e)%e:Math.max(0,a-1),l=r?(a+1)%e:Math.min(e-1,a+1);for(let c=0;c<t;c++){const u=r?(c-1+t)%t:Math.max(0,c-1),h=r?(c+1)%t:Math.min(t-1,c+1);let f=-(i[a*t+h]-i[a*t+u])*n,m=(i[l*t+c]-i[o*t+c])*n,p=1;const _=Math.hypot(f,m,p);f/=_,m/=_,p/=_,s.set(c,a,(f*.5+.5)*255,(m*.5+.5)*255,(p*.5+.5)*255)}}return s.flush()}function Vg(i){const n=new Te(1024,720),r=new Te(1024,720);for(let c=0;c<720;c++){const u=(1-(c+.5)/720)*2.8;for(let h=0;h<1024;h++){const f=h/1024,m=i.fbm(f*8,u*2,3,8),p=i.fbm(f*64,u*16,3,64),_=i.noise(f*256,u*64,256),g=1.5+(i.noise(f*32,5.5,32)-.5)*.012;let d,E,S,v;if(u<g-.008){const R=i.noise(f*2,u*90,2)-.5,A=.88+m*.16+(p-.5)*.05+(_-.5)*.025+R*.03;d=72*A,E=108*A,S=104*A,v=.32+p*.16;const D=ue(.42-u,0,.42),b=ue(i.fbm(f*48,u*14,3,48),.5,.74)*D;d=we(d,50,b*.6),E=we(E,55,b*.6),S=we(S,48,b*.6),v+=b*.3;const y=ue(.1-u,0,.1);d*=1-y*.4,E*=1-y*.4,S*=1-y*.4;const L=i.fbm(f*40,u*22,4,40)+D*.06+ue(u,g-.15,g)*.05,z=ue(L,.745,.757),O=ue(L,.715,.745)*(1-z);d=we(d,192,z),E=we(E,186,z),S=we(S,170,z),v=we(v,.9,z),d*=1-O*.3,E*=1-O*.3,S*=1-O*.3}else if(u<g+.008){const R=.9+p*.15;d=92*R,E=44*R,S=34*R,v=.4}else{const R=.92+m*.08+(p-.5)*.05+(_-.5)*.04;d=210*R,E=205*R,S=192*R,v=.93;const A=ue(i.fbm(f*5+3.3,u*1.3+7.1,4,5),.56,.8);d-=A*20,E-=A*30,S-=A*52;const D=ue(u,2,2.8)*(.5+m*.6);d-=D*34,E-=D*34,S-=D*31;const b=ue(i.fbm(f*20,u*6,3,20),.6,.8)*ue(.5-Math.abs(u-1.78),.2,.5);d-=b*26,E-=b*26,S-=b*24}n.set(h,c,d,E,S);const U=v*255;r.set(h,c,U,U,U)}}const s=n.flush(),a=s.getContext("2d"),o=on(5);a.lineWidth=1;for(let c=0;c<7;c++){let u=60+o()*904,h=720*(.05+o()*.38);a.strokeStyle=`rgba(70,62,52,${.35+o()*.3})`,a.beginPath(),a.moveTo(u,h);let f=o()*Math.PI*2;for(let m=0;m<18;m++)f+=(o()-.5)*1.1,u+=Math.cos(f)*6,h+=Math.sin(f)*6,a.lineTo(u,h);a.stroke()}const l=[1/4,1/2.8];return{map:$t(s,{repeat:l}),rough:$t(r.flush(),{srgb:!1,repeat:l})}}function Mc(i,t,e){const s=new Float32Array(65536);for(let a=0;a<256;a++)for(let o=0;o<256;o++){const l=o/256,c=a/256;s[a*256+o]=i.fbm(l*8,c*8,5,8,8)+.4*i.noise(l*128,c*128,128,128)}return $t(ns(s,256,256,e),{srgb:!1,repeat:[1/t,1/t]})}function Wg(i){const r=new Te(512,512),s=new Te(512,512),a=new Float32Array(512*512),o=on(99),l=Array.from({length:8*8},()=>({s:.88+o()*.18,wear:o(),crack:o()<.1,missing:o()<.02,cx:o()*64,cy:o()*64,ang:o()*Math.PI,ofs:o()*9}));for(let u=0;u<512;u++)for(let h=0;h<512;h++){const f=h/64|0,m=u/64|0,p=h-f*64+.5,_=u-m*64+.5,g=l[m*8+f],d=Math.min(p,_,64-p,64-_),E=h/512,S=u/512,v=i.fbm(E*6,S*6,4,6,6),U=i.noise(E*192,S*192,192,192);let R,A,D,b,y;if(d<2.2||g.missing){const O=.85+U*.2;R=80*O,A=76*O,D=70*O,b=.95,y=g.missing?.15:0}else{const H=(f+m&1)===0?[104,62,46]:[172,154,126],Y=g.s*(.94+U*.08)*(.92+v*.12);R=H[0]*Y,A=H[1]*Y,D=H[2]*Y;const W=ue(i.fbm(E*24+g.ofs,S*24,3,24,24),.55,.85)*(.4+g.wear*.6);if(R=we(R,R*1.1+14,W*.5),A=we(A,A*1.1+12,W*.5),D=we(D,D*1.1+10,W*.5),b=.4+W*.3+U*.06,y=ue(d,2.2,5.5),g.crack){const j=p-g.cx,V=_-g.cy;Math.abs(j*Math.sin(g.ang)-V*Math.cos(g.ang))<.9&&(R*=.45,A*=.45,D*=.45,y=.3,b=.9)}}const L=ue(v,.55,.8)*.28;R*=1-L,A*=1-L,D*=1-L,r.set(h,u,R,A,D);const z=b*255;s.set(h,u,z,z,z),a[u*512+h]=y}const c=[1/1.2,1/1.2];return{map:$t(r.flush(),{repeat:c}),rough:$t(s.flush(),{srgb:!1,repeat:c}),normal:$t(ns(a,512,512,1.4),{srgb:!1,repeat:c})}}function Xg(i){const e=new Te(512,512),n=new Te(512,512),r=new Float32Array(512*512);for(let c=0;c<512;c++)for(let u=0;u<512;u++){const h=u/512,f=c/512,m=i.fbm(h*4,f*4,4,4,4),p=i.fbm(h*32,f*32,3,32,32),_=i.noise(h*256,f*256,256,256),g=.78+m*.22+(p-.5)*.12+(_-.5)*.1,d=ue(i.fbm(h*6+4,f*6,4,6,6),.6,.8);e.set(u,c,124*g-d*18,121*g-d*20,114*g-d*22);const S=(.82-ue(m,.45,.7)*.28+_*.05)*255;n.set(u,c,S,S,S),r[c*512+u]=p*.7+_*.3}const s=e.flush(),a=s.getContext("2d"),o=on(21),l=["rgba(80,78,74,0.75)","rgba(168,164,154,0.75)","rgba(196,190,178,0.7)","rgba(108,96,84,0.7)","rgba(60,58,56,0.6)"];for(let c=0;c<2600;c++){const u=o()*512,h=o()*512,f=.5+o()*o()*2.4;a.fillStyle=l[o()*l.length|0];for(const m of[0,-512,512])for(const p of[0,-512,512])m&&Math.abs(u+m-512/2)>512/2+4||p&&Math.abs(h+p-512/2)>512/2+4||(a.beginPath(),a.arc(u+m,h+p,f,0,Math.PI*2),a.fill())}return{map:$t(s),rough:$t(n.flush(),{srgb:!1}),normal:$t(ns(r,512,512,2.2),{srgb:!1})}}function qg(i){const e=new Te(256,256);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const s=r/256,a=n/256,l=.92+i.fbm(s*3+11,a*3,4,3,3)*.1+(i.noise(s*128,a*128,128,128)-.5)*.04,c=ue(i.fbm(s*2+5,a*2+1,4,2,2),.6,.78);e.set(r,n,212*l-c*30,208*l-c*38,198*l-c*60)}return $t(e.flush())}const Fo=.86,Oo=1.995;function za(i,t,e){const s=new Te(256,594),a=new Te(256,594),o=new Float32Array(256*594),l=on(e),c=.15+l()*.45,u=.35+l()*.7,h=.02+l()*.025,f=.2;for(let m=0;m<594;m++)for(let p=0;p<256;p++){const _=(p+.5)/256*Fo,g=(1-(m+.5)/594)*Oo,d=Math.min(_,g,Fo-_,Oo-g),E=i.noise(_*420+e,g*420);let S,v=.42+E*.08,U,R=t[0],A=t[1],D=t[2];if(d<.05){const z=Math.abs(d-.042)<.007;U=z?.75:.3,S=z?.78:.82}else{const z=(_+g)/f,O=(_-g)/f,H=z-Math.floor(z),Y=O-Math.floor(O),W=Math.min(H,1-H),j=Math.min(Y,1-Y),V=Math.min(W,j);U=Math.sqrt(Math.min(1,V/.25)),S=.5+.5*U;const ct=Math.hypot(W,j)*f*.7071;if(ct<.011){const gt=1-ct/.011;R=150+60*gt,A=118+50*gt,D=64+30*gt,S=1,U=1+gt*.6,v=.28}}R*=S*(.95+E*.1),A*=S*(.95+E*.1),D*=S*(.95+E*.1);const b=ue(.2-Math.hypot(_-.74,g-1),0,.2)*.4;R=we(R,R*1.35+10,b),A=we(A,A*1.3+8,b),D=we(D,D*1.3+8,b),v+=b*.25,Math.hypot(_-c,g-u)<h*(.7+.6*i.noise(_*60+e,g*60))&&(R=186,A=164,D=108,v=.95,U=.45),s.set(p,m,R,A,D);const L=v*255;a.set(p,m,L,L,L),o[m*256+p]=U}return{map:$t(s.flush(),{wrap:!1}),rough:$t(a.flush(),{srgb:!1,wrap:!1}),normal:$t(ns(o,256,594,3.2,!1),{srgb:!1,wrap:!1})}}function Yg(i){const n=new Te(256,594),r=new Te(256,594),s=new Float32Array(256*594),a=[[.12,.74,.16,.9],[.12,.74,1.06,1.84]];for(let o=0;o<594;o++)for(let l=0;l<256;l++){const c=(l+.5)/256*Fo,u=(1-(o+.5)/594)*Oo,h=i.noise(c*70,u*70),f=i.fbm(c*3,u*3,3);let m=.5+(h-.5)*.35;for(const[d,E,S,v]of a){const U=Math.min(c-d,E-c,u-S,v-u);U>-.012&&U<.012&&(m+=.5*(1-Math.abs(U)/.012)*(U>0?1:-.6))}const p=.85+h*.25+f*.1,_=ue(i.noise(c*8,u*300),.82,.9)*.4;n.set(l,o,84*p+_*70,56*p+_*60,40*p+_*50);const g=(.38+h*.12+_*.3)*255;r.set(l,o,g,g,g),s[o*256+l]=m}return{map:$t(n.flush(),{wrap:!1}),rough:$t(r.flush(),{srgb:!1,wrap:!1}),normal:$t(ns(s,256,594,2.5,!1),{srgb:!1,wrap:!1})}}function $g(i){const n=new Te(128,568),r=new Te(128,568);for(let l=0;l<568;l++)for(let c=0;c<128;c++){const u=c/128,h=1-l/568,f=i.fbm(u*2+40,h*8,4),m=i.noise(u*90+40,h*400),p=ue(.12-h,0,.12),_=(.85+f*.18+(m-.5)*.05)*(1-p*.4);n.set(c,l,116*_,108*_,96*_);const g=(.48+f*.15+p*.3)*255;r.set(c,l,g,g,g)}const s=n.flush(),a=s.getContext("2d"),o=on(77);for(let l=0;l<40;l++){const c=o()*128,u=568*(.25+o()*.6),h=6+o()*40,f=(o()-.5)*1.2;a.strokeStyle=`rgba(200,195,185,${.15+o()*.35})`,a.lineWidth=.6+o()*.8,a.beginPath(),a.moveTo(c,u),a.lineTo(c+Math.cos(f)*h,u+Math.sin(f)*h),a.stroke()}return a.save(),a.translate(30,300),a.rotate(-.15),a.strokeStyle="rgba(210,205,195,0.45)",a.lineWidth=1.2,a.font='22px "Marker Felt", "Comic Sans MS", cursive',a.strokeText("Вика",0,0),a.restore(),{map:$t(s,{wrap:!1}),rough:$t(r.flush(),{srgb:!1,wrap:!1})}}function Zg(i){const n=new Te(256,400);for(let a=0;a<400;a++)for(let o=0;o<256;o++){const l=o/256,c=a/400,u=.86+i.fbm(l*4+70,c*6,4)*.2,h=ue(i.noise(l*30+70,c*4),.7,.9)*ue(c,.5,1)*.6;n.set(o,a,we(100*u,120,h),we(106*u,70,h),we(100*u,40,h))}const r=n.flush(),s=r.getContext("2d");return s.strokeStyle="rgba(30,32,30,0.8)",s.lineWidth=3,s.strokeRect(10,10,236,380),s.fillStyle="rgba(20,20,20,0.9)",s.beginPath(),s.arc(216,400/2,9,0,Math.PI*2),s.fill(),s.save(),s.translate(256/2,110),s.fillStyle="#e8c21e",s.strokeStyle="#111",s.lineWidth=6,s.beginPath(),s.moveTo(0,-50),s.lineTo(52,40),s.lineTo(-52,40),s.closePath(),s.fill(),s.stroke(),s.fillStyle="#111",s.beginPath(),s.moveTo(6,-28),s.lineTo(-14,6),s.lineTo(2,6),s.lineTo(-6,32),s.lineTo(16,-4),s.lineTo(0,-4),s.lineTo(10,-28),s.closePath(),s.fill(),s.restore(),s.fillStyle="rgba(25,25,25,0.85)",s.font="bold 28px Arial, sans-serif",s.textAlign="center",s.fillText("380 В",256/2,200),$t(r,{wrap:!1})}function Jg(i){const n=new Te(256,170);for(let r=0;r<170;r++)for(let s=0;s<256;s++){const a=s/256,o=r/170,l=Math.sin(s*.8)>.3?1:.75,c=Math.min(a,o,1-a,1-o)<.05?.7:1,u=ue(i.fbm(a*5+90,o*4,4),.45,.75)*ue(.5-Math.hypot(a-.5,o-.5),0,.4),h=l*c*(.85+i.noise(s*.7,r*.7)*.25);n.set(s,r,we(52*h,120,u*.5),we(46*h,108,u*.5),we(42*h,92,u*.5))}return $t(n.flush(),{wrap:!1})}function Kg(){const t=Ye(256,256),e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#05070e"),n.addColorStop(.55,"#0b0d16"),n.addColorStop(1,"#16131a"),e.fillStyle=n,e.fillRect(0,0,256,256);const r=on(31),s=(a,o,l,c,u)=>{const h=e.createRadialGradient(a,o,0,a,o,l);h.addColorStop(0,`rgba(${c},${u})`),h.addColorStop(1,`rgba(${c},0)`),e.fillStyle=h,e.fillRect(a-l,o-l,l*2,l*2)};s(256*.85,256*1,120,"255,140,50",.35);for(let a=0;a<6;a++)for(let o=0;o<9;o++){if(r()>.32)continue;const l=r()>.25;s(10+o*30+r()*6,40+a*34+r()*4,8+r()*6,l?"255,190,110":"140,160,230",.3+r()*.3)}for(let a=0;a<260;a++)e.fillStyle=`rgba(20,18,14,${r()*.35})`,e.beginPath(),e.arc(r()*256,r()*256,r()*2.2,0,Math.PI*2),e.fill();for(let a=0;a<14;a++){const o=r()*256;e.strokeStyle=`rgba(25,22,18,${.15+r()*.2})`,e.lineWidth=1+r()*3,e.beginPath(),e.moveTo(o,r()*256*.5),e.lineTo(o+(r()-.5)*6,256),e.stroke()}return $t(t,{wrap:!1})}function Ru(i,t,e,n){const r=on(n);i.fillStyle="#ebe5d4",i.fillRect(0,0,t,e);const s=i.createRadialGradient(t/2,e/2,Math.min(t,e)*.3,t/2,e/2,Math.max(t,e)*.75);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(150,120,60,0.35)"),i.fillStyle=s,i.fillRect(0,0,t,e);for(let a=0;a<400;a++)i.fillStyle=`rgba(90,80,60,${r()*.12})`,i.fillRect(r()*t,r()*e,1+r()*2,1+r()*2);i.fillStyle="rgba(230,220,170,0.55)",i.save(),i.translate(14,10),i.rotate(-.6),i.fillRect(-22,-8,44,16),i.restore(),i.save(),i.translate(t-14,10),i.rotate(.6),i.fillRect(-22,-8,44,16),i.restore()}function Sc(i,t){const r=Ye(256,362),s=r.getContext("2d");Ru(s,256,362,t),s.fillStyle="rgba(28,26,30,0.92)",s.textAlign="center",s.font='bold 22px "Courier New", Courier, monospace',s.fillText("ОБЪЯВЛЕНИЕ",256/2,46),s.textAlign="left",s.font='bold 13px "Courier New", Courier, monospace';let a=80;for(const[o,l]of i)s.font=`${l?"bold 14px":"bold 13px"} "Courier New", Courier, monospace`,s.fillText(o,22,a),a+=o===""?10:19;return $t(r,{wrap:!1})}function bc(i=["ЛИФТ НЕ","РАБОТАЕТ"],t="извините за неудобства"){const r=Ye(256,180),s=r.getContext("2d");return Ru(s,256,180,8),s.fillStyle="rgba(30,50,140,0.9)",s.textAlign="center",s.font='bold 34px "Marker Felt", "Comic Sans MS", cursive',s.save(),s.translate(256/2,78),s.rotate(-.04),s.fillText(i[0],0,0),s.fillText(i[1],0,40),s.restore(),s.font='15px "Marker Felt", "Comic Sans MS", cursive',s.fillText(t,256/2,158),$t(r,{wrap:!1})}function al(i,t,e,n,r,s=16){const a=i.getImageData(0,0,t,e),o=a.data;for(let l=0;l<e;l++)for(let c=0;c<t;c++){const u=(l*t+c)*4+3;if(!o[u])continue;const h=n.fbm(c/t*s+r,l/e*s,3);o[u]*=ue(h,.22,.42)*(.8+.2*n.noise(c*.6,l*.6+r))}i.putImageData(a,0,0)}function jg(i,t){const n=typeof i=="number"?i:[...String(i)].reduce((o,l)=>o+l.charCodeAt(0),0),r=Ye(256,256),s=r.getContext("2d",{willReadFrequently:!0});s.fillStyle="rgb(122,34,26)",s.font=`bold ${String(i).length>1?150:200}px "Arial Black", Impact, Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(String(i),256/2,256/2+8);const a=on(n*13);s.strokeStyle="rgba(122,34,26,0.75)";for(let o=0;o<3;o++){const l=78+a()*100,c=256/2+70;s.lineWidth=2+a()*2,s.beginPath(),s.moveTo(l,c),s.lineTo(l+(a()-.5)*2,c+12+a()*30),s.stroke()}return al(s,256,256,t,n%50*3.1),$t(r,{wrap:!1})}function Qg(i){const n=Ye(128,80),r=n.getContext("2d"),s=r.createLinearGradient(0,0,128,80);return s.addColorStop(0,"#d2d0c8"),s.addColorStop(.5,"#a9a7a0"),s.addColorStop(1,"#c4c2ba"),r.fillStyle=s,r.fillRect(0,0,128,80),r.strokeStyle="rgba(40,40,40,0.6)",r.lineWidth=4,r.strokeRect(2,2,124,76),r.fillStyle="#1a1a1a",r.font="bold 52px Arial, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(String(i),128/2,80/2+3),r.fillStyle="rgba(60,60,60,0.8)",r.beginPath(),r.arc(9,80/2,3,0,Math.PI*2),r.arc(119,80/2,3,0,Math.PI*2),r.fill(),$t(n,{wrap:!1})}function Ec(i,t){const r=Ye(512,256),s=r.getContext("2d",{willReadFrequently:!0});return s.fillStyle="rgba(28,44,150,0.92)",s.strokeStyle="rgba(28,44,150,0.92)",s.font='bold 76px "Marker Felt", "Comic Sans MS", "Segoe Print", cursive',s.save(),s.translate(24,112),s.rotate(-.07),s.fillText("Лена + Саша",0,0),s.restore(),t?(s.save(),s.translate(250,210),s.rotate(-.05),s.font='bold 84px "Marker Felt", "Comic Sans MS", "Segoe Print", cursive',s.fillText("+ ТЫ",0,0),s.restore()):(s.lineWidth=7,s.save(),s.translate(330,182),s.rotate(-.1),s.scale(1.3,1.3),s.beginPath(),s.moveTo(0,22),s.bezierCurveTo(-34,0,-26,-26,0,-10),s.bezierCurveTo(26,-26,34,0,0,22),s.stroke(),s.restore()),al(s,512,256,i,t?9:4,22),$t(r,{wrap:!1})}function t_(){const t=Ye(128,128),e=t.getContext("2d"),n=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.15,"rgba(255,255,255,0.45)"),n.addColorStop(.45,"rgba(255,255,255,0.08)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),$t(t,{wrap:!1})}function e_(i){const e=new Te(256,256);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const s=(r-128)/128,a=(n-256/2)/(256/2),o=Math.hypot(s,a);let l=Math.exp(-o*o*3.2)*.85+Math.exp(-o*o*30)*.5;l+=ue(.08-Math.abs(o-.62),0,.08)*.12,l*=.92+i.noise(r*.15,n*.15)*.16,l*=1-ue(o,.85,1);const c=Math.min(255,l*255);e.set(r,n,c,c,c)}return $t(e.flush(),{wrap:!1})}function n_(i){const e=new Te(256,256),n=49,r=13;for(let s=0;s<256;s++)for(let a=0;a<256;a++){const o=Math.floor(s/r),l=o%2*(n/2),c=Math.floor((a+l)/n),u=a+l-c*n,h=s-o*r,f=u<2||h<2,m=i.noise(c*3.7+o*1.3,o*2.1)*.25+.85+(i.noise(a*.4,s*.4)-.5)*.12;f?e.set(a,s,120*m,116*m,108*m):e.set(a,s,128*m,58*m,42*m)}return $t(e.flush(),{wrap:!1})}function i_(){const t=Ye(256,256),e=t.getContext("2d");e.fillStyle="rgba(12,12,14,0.96)",e.beginPath(),e.ellipse(128,120,40,52,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(128,250,100,70,0,Math.PI,0),e.fill(),e.fillRect(108,160,40,40),e.fillStyle="rgba(70,64,60,0.9)";for(const[n,r,s]of[[58,150,-.3],[198,150,.3]]){e.save(),e.translate(n,r),e.rotate(s),e.beginPath(),e.ellipse(0,10,17,22,0,0,Math.PI*2),e.fill();for(let a=0;a<4;a++)e.beginPath(),e.ellipse(-12+a*8,-20,3.5,13,0,0,Math.PI*2),e.fill();e.restore()}return e.fillStyle="rgba(200,200,190,0.55)",e.beginPath(),e.arc(114,116,3,0,Math.PI*2),e.arc(142,116,3,0,Math.PI*2),e.fill(),$t(t,{wrap:!1})}function r_(i,t,e,n,r,s,a){const o=Ye(t,e),l=o.getContext("2d",{willReadFrequently:!0});l.fillStyle=r,l.strokeStyle=r,l.font=n,l.textAlign="center",l.textBaseline="middle",l.save(),l.translate(t/2,e/2),l.rotate(-.03),l.fillText(i,0,0),l.restore();const c=on(a);for(let u=0;u<9;u++){const h=t*.1+c()*t*.8,f=e*.62;l.lineWidth=2+c()*2,l.beginPath(),l.moveTo(h,f),l.lineTo(h+(c()-.5)*2,f+8+c()*(e*.3)),l.stroke()}return al(l,t,e,s,a,20),$t(o,{wrap:!1})}function s_(){const e=Ye(512,340),n=e.getContext("2d"),r=on(66);n.fillStyle="rgba(88,18,12,0.85)";for(let s=0;s<7;s++){const a=50+s*68+r()*10,o=250-s*28+r()*20,l=(r()-.5)*.6;n.save(),n.translate(a,o),n.rotate(l),n.scale(s%2?-1:1,1),n.globalAlpha=.55+r()*.4,n.beginPath(),n.ellipse(0,12,19,24,0,0,Math.PI*2),n.fill();for(let c=0;c<4;c++)n.beginPath(),n.ellipse(-13+c*9,-24+Math.abs(c-1.5)*3,4,15,0,0,Math.PI*2),n.fill();n.beginPath(),n.ellipse(22,8,4.5,12,-.7,0,Math.PI*2),n.fill(),n.restore()}return $t(e,{wrap:!1})}function a_(){const e=Ye(256,512),n=e.getContext("2d");return n.shadowColor="rgba(0,0,0,0.75)",n.shadowBlur=16,n.shadowOffsetX=2e3,n.fillStyle="#000",n.translate(-2e3,0),n.beginPath(),n.ellipse(128,70,34,42,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(60,130),n.lineTo(196,130),n.lineTo(186,330),n.lineTo(70,330),n.closePath(),n.fill(),n.fillRect(40,140,26,190),n.fillRect(190,140,26,190),n.fillRect(80,320,40,180),n.fillRect(136,320,40,180),$t(e,{wrap:!1})}function o_(){const e=Ye(512,256),n=e.getContext("2d"),r=on(12),s=(a,o,l,c,u)=>{n.lineWidth=u,n.strokeStyle=`rgba(40,34,28,${.5+u*.12})`,n.beginPath(),n.moveTo(a,o);for(let h=0;h<c;h++)l+=(r()-.5)*.7,a+=Math.cos(l)*7,o+=Math.sin(l)*7,n.lineTo(a,o),r()<.08&&u>.8&&(n.stroke(),s(a,o,l+(r()-.5)*1.6,c*.5,u*.6),n.beginPath(),n.moveTo(a,o));n.stroke()};return s(20,130,0,70,3),$t(e,{wrap:!1})}function l_(i){const e=new Te(256,256);for(let n=0;n<256;n++)for(let r=0;r<256;r++){const s=(r-128)/128,a=(n-256*.35)/(256/2),o=Math.hypot(s*.9,a*.7),l=.55+(i.fbm(r/40+7,n/40,3)-.5)*.5,c=ue(l-o,0,.06);e.set(r,n,34,6,5,c*235)}return $t(e.flush(),{wrap:!1})}function c_(){const e=Ye(256,96),n=e.getContext("2d");return n.fillStyle="#138a3c",n.fillRect(0,0,256,96),n.fillStyle="#f2fff4",n.font="bold 58px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("ВЫХОД",256/2,96/2+3),$t(e,{wrap:!1})}function u_(){const e=Ye(256,400),n=e.getContext("2d");n.fillStyle="#1b1c1a",n.fillRect(0,0,256,400);for(let s=0;s<2;s++){const a=30+s*112,o=60;n.fillStyle="#d9d6cb",n.fillRect(a,o,86,120),n.fillStyle="#111",n.fillRect(a+10,o+20,66,22),n.fillStyle="#e8e2c8",n.font='bold 16px "Courier New", monospace',n.fillText(s?"04917":"13377",a+14,o+37),n.fillStyle="#333",n.font="10px Arial",n.fillText("СО-И446",a+20,o+70)}const r=on(4);for(let s=0;s<9;s++)n.strokeStyle=["#7a1a12","#1a3a7a","#222","#bba030"][s%4],n.lineWidth=3,n.beginPath(),n.moveTo(40+r()*180,190),n.bezierCurveTo(r()*256,260,r()*256,320,30+r()*200,400),n.stroke();return $t(e,{wrap:!1})}function h_(){const t=new Te(160,160);for(let e=0;e<160;e++)for(let n=0;n<160;n++){const r=Math.random()*255;t.set(n,e,r,r,r,255)}return t.flush().toDataURL()}function f_(i){Au=Math.min(8,i.capabilities.getMaxAnisotropy());const t=Hg(1337),e={};e.wall=Vg(t),e.plasterN=Mc(t,.5,5),e.ceilingN=Mc(t,.7,3),e.tiles=Wg(t),e.concrete=Xg(t),e.ceiling=qg(t),e.leather=[za(t,[74,38,28],3),za(t,[34,30,30],9),za(t,[96,32,30],17)],e.metalDoor=Yg(t),e.elevator=$g(t),e.panel=Zg(t),e.mat=Jg(t),e.night=Kg(),e.noticeGood=Sc([["Уважаемые жильцы!",!0],["",!1],["1. Свет в подъезде",!1],["   горит 30 секунд.",!1],["",!1],["2. Если всё как обычно —",!1],["   поднимайтесь.",!1],["",!1],["3. Если что-то не так —",!1],["   спускайтесь.",!1],["",!1],["4. Не оставайтесь",!1],["   в темноте.",!1],["",!1],["       Домоуправление",!0]],1),e.noticeBad=Sc([["Уважаемые жильцы!",!0],["",!1],["1. Свет вам больше",!1],["   не понадобится.",!1],["",!1],["2. Поднимайтесь.",!1],["",!1],["3. Поднимайтесь.",!1],["",!1],["4. МЫ ВИДИМ ВАС",!0],["   В ТЕМНОТЕ.",!0],["",!1],["       Домоуправление",!0]],1),e.liftSign=bc(),e.liftSignBad=bc(["ЛИФТ","ЖДЁТ ВАС"],"поднимайтесь, мы рядом"),e.bricks=n_(t),e.windowFace=i_(),e.scrawl=r_("ОГЛЯНИСЬ",512,110,'bold 92px "Marker Felt", "Comic Sans MS", cursive',"rgba(110,16,10,0.95)",t,31),e.hands=s_(),e.shadow=a_(),e.crack=o_(),e.puddle=l_(t),e.exitSign=c_(),e.panelInside=u_(),e.graffitiGood=Ec(t,!1),e.graffitiBad=Ec(t,!0),e.glow=t_(),e.flashCookie=e_(t);const n=new Map;e.number=s=>(n.has(s)||n.set(s,jg(s,t)),n.get(s));const r=new Map;return e.plate=s=>(r.has(s)||r.set(s,Qg(s)),r.get(s)),e}function ke(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new an;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!r.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(t){let m;if(e)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(e){let u=0;const h=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let p=0;p<m.count;++p)h.push(m.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Tc(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const m=[];for(let _=0;_<a[u].length;++_)m.push(a[u][_][f]);const p=Tc(m);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}return l}function Tc(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*e}const a=new t(s),o=new hn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let f=0,m=u.count;f<m;f++)for(let p=0;p<e;p++){const _=u.getComponent(f,p);o.setComponent(f+h,p,_)}}else a.set(u.array,l);l+=u.count*e}return r!==void 0&&(o.gpuType=r),o}const ye=2.8,Kt=ye/2,Fr=.2,Be=ye-Fr,Zs=8,li=Kt/Zs,oe=2.1,Di=oe/(Zs-1),d_=li/Di,Ee=1.35,Yn=.15,Se=oe+1.3,ge={x0:-4.6,x1:Ee,z0:-2.2,z1:0},wc=1.62,p_=.25,ia=30,Bo=5,Js=12,$r=48,Ac=[-.95,2.135,-1.1],ka={x:-2.6,z:-1,yaw:-Math.PI/2},Hs={home:{title:"ДОМА",text:"Квартира 48, двенадцатый этаж. Вы закрыли дверь и включили свет. Где-то внизу щёлкнул выключатель."},exit:{title:"ВЫХОД",text:"Подвальная дверь вывела во двор. Холодно, светает. Домой вы так и не попали — зато вы снаружи."},apt49:{title:"КВАРТИРА 49",text:"Внутри темно и тепло, пахнет пирогами. Кто-то сказал: «Наконец-то». Теперь вы живёте здесь."},thirteen:{title:"13 ЭТАЖ",text:"Ваша дверь была открыта, и вы вошли. В этом доме двенадцать этажей."}},Zr=[{id:1,floor:2,spot:"matA",text:["Лена!","Если найдёшь это — я ищу тебя каждую ночь.","Подъезд меняется, когда гаснет свет.","Запоминай всё: двери, номера, коврики.","— Саша"]},{id:2,floor:4,spot:"panel",text:["АКТ ОСМОТРА ЭЛЕКТРОЩИТКОВ","В доме 48 квартир.","Счётчиков в щитках — 49.","Источник потребления не установлен.","Электрик Пыжов, 14.03.1988"]},{id:3,floor:6,spot:"chute",text:["Не стучите в 49-ю.","Она стучит в ответ.","На третий раз — открывает."]},{id:4,floor:8,spot:"jar",text:["Лена ушла в 49-ю в ноябре 87-го.","Дверь была приоткрыта.","Внутри было темно и тепло.","Я не успел."]},{id:5,floor:10,spot:"radiator",text:["Через первый этаж не выйти.","Внизу всегда снова первый.","Но если спускаться упрямо —","дом сдаётся. Там подвал."]},{id:6,floor:11,spot:"stroller",text:["Выше двенадцатого ничего нет.","Если всё-таки поднимешься —","не заходи в свою дверь.","Она там всегда открыта."]}],Jr=[{id:"door49",tier:1,name:"Лишняя дверь 49",set:(i,t)=>{i.doors.X.group.visible=t}},{id:"doorAjar",tier:1,name:"Приоткрытая дверь",set:(i,t)=>{i.doors.B.pivot.rotation.y=t?-.5:0,i.doors.B.voidMesh.visible=t}},{id:"elevatorOpen",tier:1,name:"Открытый лифт",set:(i,t)=>{i.elev.leafL.visible=i.elev.leafR.visible=i.elev.sign.visible=!t,i.elev.void.visible=t}},{id:"redLight",tier:1,name:"Красная лампа",set:(i,t)=>{i.lamp.color=t?16722452:null}},{id:"figure",tier:1,name:"Силуэт у окна",set:(i,t)=>{i.figure.visible=t}},{id:"matCeiling",tier:1,name:"Коврик на потолке",set:(i,t)=>{i.matA.position.y=t?Be-.007:.006}},{id:"wallScrawl",tier:1,name:"Надпись «ОГЛЯНИСЬ»",set:(i,t)=>{i.decals.scrawl.visible=t}},{id:"handprints",tier:1,name:"Отпечатки ладоней",set:(i,t)=>{i.decals.hands.visible=t}},{id:"shoesMany",tier:1,name:"Много обуви",set:(i,t)=>{i.shoesMany.visible=t,i.shoes.visible=!t}},{id:"stoolCeiling",tier:1,name:"Табуретка на потолке",set:(i,t)=>{i.stool.position.y=t?Kt+2.6:Kt,i.stool.rotation.x=t?Math.PI:0}},{id:"cat",tier:1,name:"Чёрный кот",set:(i,t)=>{i.cat.visible=t}},{id:"windowBricked",tier:1,name:"Окно заложено кирпичом",set:(i,t)=>{i.bricks.visible=t}},{id:"bulbMissing",tier:1,name:"Нет лампочки",set:(i,t)=>{i.lamp.missing=t}},{id:"doorsAllOpen",tier:1,name:"Все двери приоткрыты",set:(i,t)=>{for(const e of["A","C","D"])i.doors[e].pivot.rotation.y=t?-.35:0,i.doors[e].voidMesh.visible=t}},{id:"numberMirrored",tier:2,name:"Зеркальный номер этажа",set:(i,t)=>{i.number.mesh.scale.x=t?-1:1}},{id:"graffitiChanged",tier:2,name:"«Лена + Саша + ТЫ»",set:(i,t,{T:e})=>{i.graffiti.mat.map=t?e.graffitiBad:e.graffitiGood}},{id:"shoesWatch",tier:2,name:"Ботинки следят",set:(i,t)=>{t||(i.shoes.rotation.y=Math.PI)}},{id:"knocking",tier:2,name:"Стук изнутри",set:()=>{}},{id:"noticeChanged",tier:2,name:"Другое объявление",set:(i,t,{T:e})=>{i.notice.mat.map=t?e.noticeBad:e.noticeGood}},{id:"noticeUpsideDown",tier:2,name:"Объявление вверх ногами",set:(i,t)=>{i.notice.mesh.rotation.z=t?Math.PI+.025:.025}},{id:"panelOpen",tier:2,name:"Щиток открыт",set:(i,t)=>{i.panel.forcedOpen=t}},{id:"chuteOpen",tier:2,name:"Мусоропровод открыт",set:(i,t)=>{i.chute.forcedOpen=t}},{id:"windowFace",tier:2,name:"Лицо за окном",set:(i,t)=>{i.windowFace.visible=t}},{id:"railingGap",tier:2,name:"Нет части перил",set:(i,t)=>{i.railGap.visible=!t}},{id:"footstepsBehind",tier:2,name:"Шаги за спиной",set:()=>{}},{id:"lightShort",tier:2,name:"Свет гаснет сразу",set:()=>{}},{id:"callButtonLit",tier:2,name:"Лифт кто-то вызвал",set:(i,t)=>{i.call.lit=t}},{id:"switchMissing",tier:2,name:"Нет выключателя",set:(i,t)=>{i.sw.visible=!t,i.swHole.visible=t}},{id:"lampSwing",tier:2,name:"Лампа качается",set:(i,t)=>{i.lamp.swing=t}},{id:"lampLow",tier:2,name:"Лампа висит низко",set:(i,t)=>{i.lamp.length=t?.85:.35}},{id:"strollerMoved",tier:2,name:"Коляска у лестницы",set:(i,t)=>{t?(i.stroller.position.set(.55,0,-.55),i.stroller.rotation.y=Math.PI/2):(i.stroller.position.set(-4.15,0,-.42),i.stroller.rotation.y=0)}},{id:"puddle",tier:2,name:"Лужа из-под двери",set:(i,t)=>{i.decals.puddle.visible=t}},{id:"shadowOnWall",tier:2,name:"Тень без человека",set:(i,t)=>{i.decals.shadow.visible=t}},{id:"liftSignChanged",tier:2,name:"«ЛИФТ ЖДЁТ ВАС»",set:(i,t,{T:e})=>{i.elev.signMat.map=t?e.liftSignBad:e.liftSign}},{id:"phoneRinging",tier:2,name:"Звонит телефон",set:()=>{}},{id:"tileTint",tier:2,name:"Плитка другого цвета",set:(i,t)=>{i.tileMat.color.set(t?9417983:16777215)}},{id:"plateWrong",tier:3,name:"Два одинаковых номера",set:(i,t)=>{i.plateWrong=t}},{id:"doorColor",tier:3,name:"Дверь другого цвета",set:(i,t,{M:e})=>{i.doors.A.leaf.material[4]=t?e.leather[1]:e.leather[2]}},{id:"tvSilent",tier:3,name:"Телевизор замолчал",set:(i,t)=>{i.tvSilent=t}},{id:"matMissing",tier:3,name:"Нет коврика",set:(i,t)=>{i.matD.visible=!t}},{id:"peepholeMissing",tier:3,name:"Нет глазка",set:(i,t)=>{i.doors.A.peephole.visible=!t}},{id:"handleSide",tier:3,name:"Ручка с другой стороны",set:(i,t)=>{i.doors.C.handleR.visible=!t,i.doors.C.handleL.visible=t}},{id:"noticeMissing",tier:3,name:"Объявление пропало",set:(i,t)=>{i.notice.mesh.visible=!t}},{id:"ceilingCrack",tier:3,name:"Трещина на потолке",set:(i,t)=>{i.decals.crack.visible=t}},{id:"plantDead",tier:3,name:"Засохший цветок",set:(i,t)=>{i.plantMat.color.set(t?3811864:5208634),i.plant.scale.set(1,t?.55:1,1)}},{id:"graffitiMissing",tier:3,name:"Надпись пропала",set:(i,t)=>{i.graffiti.mesh.visible=!t}},{id:"bulbCold",tier:3,name:"Холодный свет",set:(i,t)=>{t&&(i.lamp.color=13623551)}},{id:"wallTint",tier:3,name:"Стены чуть розовее",set:(i,t)=>{i.wallMat.color.set(t?16767184:16777215)}},{id:"eyesDark",tier:3,name:"Глаза в углу",set:(i,t)=>{i.eyes.visible=t}},{id:"doorbellMissing",tier:3,name:"Нет звонка",set:(i,t)=>{i.doors.B.bell.visible=!t}}],m_=Object.fromEntries(Jr.map(i=>[i.id,i]));function g_(i){return i<=4?[.8,.2,0]:i<=7?[.35,.5,.15]:i<=9?[.2,.45,.35]:[.1,.4,.5]}function __(i){return i<=3?.5:.55}function Le(i,t,e,n,r,s,a){const o=new Ge(i,t);if(e==="+x"?o.rotateY(Math.PI/2):e==="-x"?o.rotateY(-Math.PI/2):e==="-z"?o.rotateY(Math.PI):e==="+y"?o.rotateX(-Math.PI/2):e==="-y"&&o.rotateX(Math.PI/2),o.translate(n,r,s),a){const l=o.attributes.position,c=o.attributes.uv;for(let u=0;u<l.count;u++){const[h,f]=a(l.getX(u),l.getY(u),l.getZ(u));c.setXY(u,h,f)}}return o}function Ot(i,t,e,n,r,s,a=!1){const o=new Ii(i,t,e);if(a){const l=o.attributes.uv,c=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let u=0;u<6;u++)for(let h=0;h<4;h++){const f=u*4+h;l.setXY(f,l.getX(f)*c[u][0],l.getY(f)*c[u][1])}}return o.translate(n,r,s),o}const ze=(i,t,e,n=12)=>new es(i,t,e,n),fe=(i,t,e)=>new I(i,t,e);function nn(i,t,e,n){const r=i.distanceTo(t),s=new Ii(e,n,r),a=new Ae;return a.position.copy(i).add(t).multiplyScalar(.5),a.lookAt(t),a.updateMatrix(),s.applyMatrix4(a.matrix),s}function Rc(){const i=new Su;i.moveTo(0,-.175),i.lineTo(0,li);for(let t=0;t<Zs-1;t++)i.lineTo((t+1)*Di,(t+1)*li),t<Zs-2&&i.lineTo((t+1)*Di,(t+2)*li);return i.lineTo(oe,d_*oe-.175),i.closePath(),new rl(i,{depth:Ee-Yn,bevelEnabled:!1})}function v_(){const i=[],t=[],e=-Yn-.03,n=Yn+.03,r=.935;let s=0;for(let l=.12;l<oe;l+=.15,s++){const c=li*(Math.floor(l/Di)+1),u=r+l*Kt/oe;(s>=5&&s<=9?t:i).push(Ot(.016,u-c,.016,e,(c+u)/2,l));const h=Kt+li*(Math.floor((oe-l)/Di)+1),f=r+Kt+(oe-l)*Kt/oe;i.push(Ot(.016,f-h,.016,n,(h+f)/2,l))}i.push(Ot(.016,r,.016,0,r/2,-.01)),i.push(Ot(.016,r,.016,0,Kt+r/2,oe+.01));const a=r+.005,o=[nn(fe(e,a-.03,-.04),fe(e,a+Kt+.03,oe+.04),.05,.035),nn(fe(n,a+Kt+.03,oe+.04),fe(n,a+ye-.03,-.04),.05,.035),nn(fe(e-.03,a,-.02),fe(n+.03,a,-.02),.045,.035),nn(fe(e-.03,a+Kt,oe+.02),fe(n+.03,a+Kt,oe+.02),.045,.035)];return{balusters:ke(i),gap:ke(t),handrails:ke(o)}}function x_(){const i=[];for(let t=0;t<9;t++)i.push(Ot(.065,.5,.085,-.36+t*.09,Kt+.42,Se-.1));return i.push(Ot(.82,.03,.03,0,Kt+.64,Se-.1)),i.push(Ot(.82,.03,.03,0,Kt+.2,Se-.1)),i.push(Ot(.03,.9,.03,-.48,Kt+.45,Se-.05)),ke(i)}function Gn(i){return new rr({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,...i})}function y_(i){const t=n=>new rr(n),e=n=>t({map:n.map,roughnessMap:n.rough,normalMap:n.normal});return{wall:t({map:i.wall.map,roughnessMap:i.wall.rough,normalMap:i.plasterN,normalScale:new at(.12,.12)}),tiles:t({map:i.tiles.map,roughnessMap:i.tiles.rough,normalMap:i.tiles.normal}),concrete:t({map:i.concrete.map,roughnessMap:i.concrete.rough,normalMap:i.concrete.normal,normalScale:new at(.6,.6)}),ceiling:t({map:i.ceiling,roughness:.95,normalMap:i.ceilingN,normalScale:new at(.12,.12)}),frame:t({color:4863014,roughness:.6}),doorEdge:t({color:2365202,roughness:.65}),rail:t({color:2302755,roughness:.5,metalness:.5}),handrail:t({color:4072470,roughness:.42}),metal:t({color:12105390,roughness:.3,metalness:.85}),darkMetal:t({color:4867647,roughness:.5,metalness:.55}),plastic:t({color:13813672,roughness:.5}),socket:t({color:1709330,roughness:.4}),black:new Ys({color:0}),windowFrame:t({color:11840922,roughness:.8}),radiator:t({color:7113860,roughness:.38}),glass:t({color:658448,roughness:.12,emissive:16777215,emissiveMap:i.night,emissiveIntensity:1.1}),chute:t({color:5924192,roughness:.55,metalness:.25}),shoe:t({color:1840144,roughness:.42}),sole:t({color:920844,roughness:.8}),figure:t({color:131586,roughness:1}),mat:t({map:i.mat,roughness:.95}),panel:t({map:i.panel,roughness:.55,metalness:.3}),panelSide:t({color:6712166,roughness:.55,metalness:.3}),panelInside:t({map:i.panelInside,roughness:.8}),elevator:t({map:i.elevator.map,roughnessMap:i.elevator.rough,metalness:.4}),leather:i.leather.map(e),metalDoor:t({map:i.metalDoor.map,roughnessMap:i.metalDoor.rough,normalMap:i.metalDoor.normal,metalness:.35}),led:t({color:2228224,emissive:16719888,emissiveIntensity:3}),button:t({color:5904916,roughness:.35}),bellBase:t({color:13616552,roughness:.5}),bellButton:t({color:1381653,roughness:.35}),cable:t({color:1381653,roughness:.6}),wood:t({color:6965808,roughness:.7}),fabric:t({color:2306634,roughness:.85}),chrome:t({color:13619151,roughness:.25,metalness:.9}),rubber:t({color:789516,roughness:.9}),pot:t({color:15262938,roughness:.4}),jar:t({color:4872776,roughness:.08,metalness:.1,transparent:!0,opacity:.75}),cat:t({color:328965,roughness:.8}),eyes:t({color:1122816,emissive:12123968,emissiveIntensity:2.2}),pipe:t({color:7166536,roughness:.7,metalness:.3}),exitSign:t({color:0,emissive:16777215,emissiveMap:i.exitSign,emissiveIntensity:1.6}),bricks:t({map:i.bricks,roughness:.9}),windowFace:new Ys({map:i.windowFace,transparent:!0,depthWrite:!1}),liftSign:Gn({map:i.liftSign,roughness:.9}),scrawl:Gn({map:i.scrawl,roughness:.6}),hands:Gn({map:i.hands,roughness:.5}),shadow:Gn({map:i.shadow,roughness:1,color:0}),crack:Gn({map:i.crack,roughness:1}),puddle:Gn({map:i.puddle,roughness:.08,metalness:.2})}}const M_={back:(i,t,e)=>[[i,t,ge.z0+e],0],front:(i,t,e)=>[[i,t,ge.z1-e],Math.PI],left:(i,t,e)=>[[ge.x0+e,t,i],Math.PI/2],right:(i,t,e)=>[[ge.x1-e,t,i],-Math.PI/2],stairL:(i,t,e)=>[[-Ee+e,t,i],Math.PI/2]};function en(i,t,e,n,r=0){const[s,a]=M_[t](e,n,r);return i.position.set(s[0],s[1],s[2]),i.rotation.y=a,i}function Cc(i,t){return i.traverse(e=>{e.isMesh&&(e.userData={...t})}),i}function S_(i,t,e,n){const r=new ce,s=(R,A,D=r,b=!0)=>{const y=new rn(R,A);return y.castShadow=b,y.receiveShadow=!0,D.add(y),y},a=.88,o=2.02,l=.065,c=.035;s(Ot(l,o+l,c,-.47250000000000003,(o+l)/2,c/2),i.frame),s(Ot(l,o+l,c,a/2+l/2,(o+l)/2,c/2),i.frame),s(Ot(a+2*l,l,c,0,o+l/2,c/2),i.frame);const u=s(new Ge(a-.02,o-.02).translate(0,o/2,.004),i.black,r,!1);u.visible=!1,u.userData={action:"door",key:n};const h=new ce;h.position.set(-a/2+.01,0,.012),r.add(h);const f=a-.02,m=o-.015,p=i.doorEdge,_=s(Ot(f,m,.045,f/2,m/2,.0225),[p,p,p,p,t,p],h);_.userData={action:"door",key:n};const g=(R,A)=>{const D=new ce;return s(Ot(.034,.17,.006,R,.98,.048),i.metal,D),s(Ot(.13,.02,.02,R+A*.04,1.02,.07),i.metal,D),s(ze(.008,.008,.03,8).rotateX(Math.PI/2).translate(R,1.02,.055),i.metal,D),h.add(D),Cc(D,{action:"handle",key:n})},d=g(f-.075,-1),E=g(.075,1);E.visible=!1;const S=s(ze(.009,.011,.012).rotateX(Math.PI/2).translate(f/2,1.55,.05),i.metal,h);S.userData={action:"peephole",key:n};const v=new rn(new Ge(.085,.053),e);v.position.set(f/2,1.74,.0462),v.receiveShadow=!0,v.userData={action:"door",key:n},h.add(v);const U=new ce;return U.position.set(.66,1.45,0),s(Ot(.05,.075,.018,0,0,.009),i.bellBase,U),s(ze(.012,.012,.01).rotateX(Math.PI/2).translate(0,-.008,.02),i.bellButton,U),r.add(Cc(U,{action:"bell",key:n})),{group:r,pivot:h,leaf:_,voidMesh:u,handleR:d,handleL:E,peephole:S,bell:U,plate:v}}function b_(i,t,e){const n=new ce;n.position.y=e*ye;const r=[],s=i.wall.clone(),a=i.tiles.clone(),o=(P,C,{cast:q=!0,ray:ot=!1,parent:mt=n,data:rt=null}={})=>{const Mt=new rn(P,C);return Mt.castShadow=q,Mt.receiveShadow=!0,rt&&(Mt.userData=rt),(ot||rt)&&r.push(Mt),mt.add(Mt),Mt},l=P=>(P.traverse(C=>{C.isMesh&&r.push(C)}),P),c=ge.x1-ge.x0,u=ge.z1-ge.z0,h=(ge.x0+ge.x1)/2,f=(ge.z0+ge.z1)/2;o(Le(c,u,"+y",h,0,f,(P,C,q)=>[P,-q]),a,{ray:!0}),o(Le(c,u,"-y",h,Be,f,(P,C,q)=>[P,q]),i.ceiling,{ray:!0}),o(Le(2*Ee,Fr,"+z",0,-Fr/2,0,(P,C)=>[P,C]),i.concrete),o(Le(c,Be,"+z",h,Be/2,ge.z0,(P,C)=>[P,C]),s,{ray:!0}),o(Le(u,Be,"+x",ge.x0,Be/2,f,(P,C,q)=>[-q,C]),s,{ray:!0});const m=-Ee-ge.x0;o(Le(m,Be,"-z",(ge.x0-Ee)/2,Be/2,0,(P,C)=>[-P,C]),s,{ray:!0}),o(Le(u,Be,"-x",Ee,Be/2,f,(P,C,q)=>[q,C]),s,{ray:!0});const p=P=>P*Kt/oe,_=P=>Kt+(oe-P)*Kt/oe,g=Se-oe,d=(oe+Se)/2;o(Le(oe,ye,"-x",Ee,ye/2,oe/2,(P,C,q)=>[q,C-_(q)]),s,{ray:!0}),o(Le(g,ye,"-x",Ee,ye/2,d,(P,C,q)=>[q,C-Kt]),s,{ray:!0}),o(Le(oe,ye,"+x",-Ee,ye/2,oe/2,(P,C,q)=>[-q,C-p(q)]),s,{ray:!0}),o(Le(g,ye,"+x",-Ee,ye/2,d,(P,C,q)=>[-q,C-Kt]),s,{ray:!0}),o(Le(2*Ee,ye,"-z",0,Kt+ye/2,Se,(P,C)=>[-P,C-Kt]),s,{ray:!0}),o(Ot(2*Ee,Fr,g,0,Kt-Fr/2,d,!0),[i.concrete,i.concrete,a,i.ceiling,i.concrete,i.concrete],{ray:!0});const E=Rc();E.rotateY(-Math.PI/2).translate(-Yn,0,0),o(E,i.concrete,{ray:!0});const S=Rc();S.rotateY(Math.PI/2).translate(Yn,Kt,oe),o(S,i.concrete,{ray:!0});const v=v_(),U={action:"railing"};o(v.balusters,i.rail,{data:U});const R=o(v.gap,i.rail,{data:U});o(v.handrails,i.handrail,{data:U});const A=Kt+.85,D=Kt+2.15,b=.65,y=(A+D)/2,L=D-A;o(Le(2*b,L,"-z",0,y,Se-.05),i.glass,{cast:!1,data:{action:"window"}});const z=o(Le(2*b,L,"-z",0,y,Se-.056),i.bricks,{cast:!1,data:{action:"window"}});z.visible=!1;const O=new rn(Le(.62,.62,"-z",.12,y+.05,Se-.054),i.windowFace);O.visible=!1,n.add(O);const H=Se-.075;o(ke([Ot(.07,L+.07,.07,-b,y,H),Ot(.07,L+.07,.07,b,y,H),Ot(2*b+.07,.07,.07,0,D,H),Ot(2*b+.07,.07,.07,0,A,H),Ot(.06,L,.07,0,y,H),Ot(b,.05,.07,-b/2,A+L*.72,H),Ot(.05,L*.28,.07,-b/2,A+L*.86,H-.005)]),i.windowFrame,{data:{action:"window"}});const Y=A-.0325;o(Ot(2*b+.16,.035,.26,0,A-.05,Se-.13),i.windowFrame,{data:{action:"sill"}}),o(x_(),i.radiator,{data:{action:"radiator"}});const W=new rr({color:5208634,roughness:.6}),j=new ce;j.position.set(.38,Y,Se-.14),n.add(j),o(ze(.06,.048,.1).translate(0,.05,0),i.pot,{parent:j,data:{action:"plant"}});const V=new ce;V.position.y=.09,j.add(V);const ct=[];for(let P=0;P<7;P++){const C=P/7*Math.PI*2,q=new Gr(.014,.22,5).translate(0,.11,0);q.rotateZ(.35+P%2*.15),q.rotateY(C),ct.push(q)}o(ke(ct),W,{parent:V,data:{action:"plant"}}),o(ze(.04,.04,.11).translate(-.42,Y+.055,Se-.13),i.jar,{cast:!1,data:{action:"jar"}});const gt=new ce;gt.position.set(-.68,Kt,3),n.add(gt);const wt=[Ot(.32,.03,.32,0,.45,0)];for(const[P,C]of[[-.13,-.13],[.13,-.13],[-.13,.13],[.13,.13]])wt.push(Ot(.03,.435,.03,P,.2175,C));o(ke(wt),i.wood,{parent:gt,data:{action:"stool"}}),o(Ot(.42,ye,.42,-Ee+.21,ye/2,Se-.21),i.chute,{data:{action:"chute"}});const kt=o(Le(.3,.28,"-z",-Ee+.21,Kt+.86,Se-.421),i.black,{cast:!1}),Zt=new ce;Zt.position.set(-Ee+.21,Kt+.7,Se-.42),n.add(Zt),o(Ot(.34,.32,.05,0,.16,-.025),i.darkMetal,{parent:Zt,data:{action:"chute"}}),o(Ot(.2,.025,.03,0,.28,-.065),i.metal,{parent:Zt,data:{action:"chute"}});const[J,,st]=Ac,yt=new ce;yt.position.set(J,Be,st),n.add(yt),o(ze(.045,.05,.025,16).translate(0,-.0125,0),i.plastic,{parent:yt});const lt=o(ze(.004,.004,1,6),i.cable,{parent:yt}),Ct=new ce;yt.add(Ct),o(ze(.02,.018,.055).translate(0,-.0275,0),i.socket,{parent:Ct,data:{action:"bulb"}});const Nt=new rr({color:16183266,emissive:16753750,emissiveIntensity:0,roughness:.2}),It=o(new _n(.03,16,12).scale(1,1.25,1).translate(0,-.09,0),Nt,{cast:!1,parent:Ct,data:{action:"bulb"}}),Xt=new gu({map:t.glow,color:16763024,transparent:!0,depthWrite:!1,blending:Va,opacity:0}),Q=new ng(Xt);Q.scale.set(.6,.6,.6),Q.position.y=-.09,Ct.add(Q);const et=new kg(16756848,0,0,2);et.castShadow=!0,et.shadow.mapSize.set(512,512),et.shadow.bias=-.002,et.shadow.normalBias=.025,et.shadow.camera.near=.04,et.shadow.camera.far=12,et.shadow.autoUpdate=!1,n.add(et);const w={},Rt=[["D","left",-1.1,i.leather[0]],["A","back",-3.8,i.leather[2]],["B","back",-2.35,i.leather[1]],["C","back",-.9,i.metalDoor],["X","right",-.75,i.leather[1]]];for(const[P,C,q,ot]of Rt){const mt=new rr({map:t.plate(1),roughness:.35,metalness:.6}),rt=S_(i,ot,mt,P);rt.plateMat=mt,rt.defaultMat=ot,rt.leaf.material=rt.leaf.material.slice(),en(rt.group,C,q,0),n.add(l(rt.group)),w[P]=rt}w.X.group.visible=!1;const nt=new ce;en(nt,"front",-3.2,0),n.add(nt);{const ot=[Ot(.09,2.09,.05,-.495,1.045,.025),Ot(.09,2.09,.05,.495,1.045,.025),Ot(1.08,.09,.05,0,2.045,.025)];o(ke(ot),i.darkMetal,{parent:nt,data:{action:"liftDoor"}})}const _t=i.darkMetal,ht=o(Ot(.446,2,.03,-.225,1,.018),[_t,_t,_t,_t,i.elevator,_t],{parent:nt,data:{action:"liftDoor"}}),Ut=o(Ot(.446,2,.03,.225,1,.018),[_t,_t,_t,_t,i.elevator,_t],{parent:nt,data:{action:"liftDoor"}}),St=o(new Ge(.9,2).translate(0,1,.004),i.black,{parent:nt,cast:!1,data:{action:"liftVoid"}});St.visible=!1;const T=i.liftSign.clone(),x=o(new Ge(.22,.155),T,{parent:nt,cast:!1,data:{action:"liftSign"}});x.position.set(-.2,1.45,.0345),x.rotation.z=.04;const B=Gn({map:t.number(1),roughness:.6,side:Tn}),Z=o(new Ge(.36,.36),B,{cast:!1,data:{action:"number"}});en(Z,"front",-3.2,2.36,.004);const tt=new rr({color:2228224,emissive:16723984,emissiveIntensity:.15}),$=new ce;en($,"front",-2.5,1.15),n.add($),o(Ot(.085,.14,.012,0,0,.006),i.metal,{parent:$,data:{action:"lift"}}),o(ze(.016,.016,.01,20).rotateX(Math.PI/2).translate(0,-.015,.016),tt,{parent:$,data:{action:"lift"}});const Et=new ce;en(Et,"front",-1.7,1.2),n.add(Et),o(Ot(.075,.115,.014,0,0,.007),i.plastic,{parent:Et,data:{action:"switch"}}),o(ze(.019,.019,.012,20).rotateX(Math.PI/2).translate(0,-.01,.018),i.button,{parent:Et,data:{action:"switch"}}),o(new _n(.0045,8,6).translate(0,.032,.015),i.led,{parent:Et,cast:!1});const dt=new ce;en(dt,"front",-1.7,1.2),n.add(dt),o(new Ge(.06,.06).translate(0,0,.002),i.black,{parent:dt,cast:!1,data:{action:"swHole"}});for(let P=0;P<3;P++)o(ze(.003,.003,.09,5).rotateX(1.2+P*.2).rotateZ((P-1)*.5).translate((P-1)*.012,-.02,.03),[i.cable,i.button,i.metal][P],{parent:dt,data:{action:"swHole"}});dt.visible=!1;const xt=new ce;en(xt,"back",.95,1.6),n.add(xt);const Ft=i.panelSide,it={action:"panel"};o(Ot(.46,.72,.02,0,0,.01),[Ft,Ft,Ft,Ft,i.panelInside,Ft],{parent:xt,data:it}),o(ke([Ot(.02,.72,.1,-.22,0,.05),Ot(.02,.72,.1,.22,0,.05),Ot(.46,.02,.1,0,.35,.05),Ot(.46,.02,.1,0,-.35,.05)]),Ft,{parent:xt,data:it});const bt=new ce;bt.position.set(-.23,0,.1),xt.add(bt),o(Ot(.46,.72,.015,.23,0,.0075),[Ft,Ft,Ft,Ft,i.panel,Ft],{parent:bt,data:it}),o(Ot(.014,Be-1.96,.014,.12,(Be-1.96)/2+.36,.02),i.cable,{parent:xt});const Lt=Gn({map:t.noticeGood,roughness:.9}),Dt=o(new Ge(.21,.297),Lt,{cast:!1,data:{action:"notice"}});en(Dt,"right",-1.75,1.5,.004),Dt.rotation.z=.025;const Tt=Gn({map:t.graffitiGood,roughness:.5}),qt=o(new Ge(.9,.45),Tt,{cast:!1,data:{action:"graffiti"}});en(qt,"stairL",1.2,p(1.2)+1.8,.004);const Bt=o(Ot(.6,.012,.4,0,0,0),i.mat,{cast:!1,data:{action:"mat",key:"A"}});Bt.position.set(-3.8,.006,-1.93);const ne=o(Ot(.4,.012,.6,0,0,0),i.mat,{cast:!1,data:{action:"mat",key:"D"}});ne.position.set(-4.33,.006,-1.1);const N=(P,C,q,ot,mt)=>{const rt=new ce;rt.position.set(C,0,q),rt.rotation.y=ot,P.add(rt);for(const Mt of[-.065,.065])o(Ot(.095,.025,.28,Mt,.0125,0),i.sole,{parent:rt,data:{action:mt}}),o(new nr(.043,.13,4,10).rotateX(Math.PI/2).scale(1,.85,1).translate(Mt,.055,-.025),i.shoe,{parent:rt,data:{action:mt}});return rt},pt=N(n,-.72,-1.83,Math.PI,"shoes"),X=new ce;n.add(X);for(let P=0;P<8;P++)N(X,-4.2+P*.62,-1.75+P%2*.1,.1*(P%3),"shoesMany");X.visible=!1;const K=new ce;K.position.set(-4.15,0,-.42),n.add(K);{const P={action:"stroller"},C=new es(.19,.19,.36,12,1,!1,0,Math.PI).rotateX(Math.PI/2).rotateY(Math.PI/2).translate(.2,.69,0);o(ke([Ot(.62,.28,.36,0,.55,0),C]),i.fabric,{parent:K,data:P});const q=[];for(const[ot,mt]of[[-.22,-.19],[.22,-.19],[-.22,.19],[.22,.19]])q.push(ze(.1,.1,.03,14).rotateX(Math.PI/2).translate(ot,.1,mt));o(ke(q),i.rubber,{parent:K,data:P}),o(ke([nn(fe(-.28,.45,-.17),fe(.28,.45,-.17),.015,.015),nn(fe(-.28,.45,.17),fe(.28,.45,.17),.015,.015),nn(fe(-.22,.1,-.17),fe(-.1,.42,-.17),.015,.015),nn(fe(.22,.1,-.17),fe(.1,.42,-.17),.015,.015),nn(fe(-.22,.1,.17),fe(-.1,.42,.17),.015,.015),nn(fe(.22,.1,.17),fe(.1,.42,.17),.015,.015),nn(fe(-.3,.68,-.17),fe(-.48,.98,-.17),.015,.015),nn(fe(-.3,.68,.17),fe(-.48,.98,.17),.015,.015),nn(fe(-.48,.98,-.19),fe(-.48,.98,.19),.025,.025)]),i.chrome,{parent:K,data:P})}const ut=new ce;ut.position.set(.8,Kt,3),n.add(ut),o(new nr(.17,1.15,6,12).scale(1,1,.7).translate(0,.78,0),i.figure,{parent:ut}),o(new _n(.11,14,10).translate(0,1.66,0),i.figure,{parent:ut}),o(new nr(.045,.62,4,8).translate(-.22,1.08,0),i.figure,{parent:ut}),o(new nr(.045,.62,4,8).translate(.22,1.08,0),i.figure,{parent:ut}),ut.visible=!1;const ft=new ce;ft.position.set(-.02,Y,Se-.16),n.add(ft);{const P={action:"cat"};o(ke([new _n(.1,14,10).scale(.8,1.2,1).translate(0,.11,.02),new _n(.065,14,10).translate(0,.27,-.03),new Gr(.022,.05,6).translate(-.035,.33,-.03),new Gr(.022,.05,6).translate(.035,.33,-.03),ze(.012,.012,.22,6).rotateZ(Math.PI/2).translate(.08,.015,.06)]),i.cat,{parent:ft,data:P}),o(ke([new _n(.009,8,6).translate(-.022,.28,-.092),new _n(.009,8,6).translate(.022,.28,-.092)]),i.eyes,{parent:ft,cast:!1,data:P})}ft.visible=!1;const zt=o(ke([new _n(.008,8,6).translate(-.02,0,.02),new _n(.008,8,6).translate(.02,0,-.02)]),i.eyes,{cast:!1,data:{action:"eyes"}});zt.position.set(-4.42,.32,-2.02),zt.visible=!1;const Jt={};Jt.scrawl=o(new Ge(1.8,.39),i.scrawl,{cast:!1,data:{action:"scrawl"}}),en(Jt.scrawl,"back",-3.05,2.33,.005),Jt.hands=o(new Ge(1.1,.73),i.hands,{cast:!1,data:{action:"hands"}}),en(Jt.hands,"right",-.8,1.15,.005),Jt.shadow=o(new Ge(.92,1.85),i.shadow,{cast:!1,data:{action:"shadow"}}),en(Jt.shadow,"stairL",.9,p(.9)+.92,.006),Jt.crack=o(Le(2.4,1.2,"-y",-2.4,Be-.003,-1.1),i.crack,{cast:!1,data:{action:"crack"}}),Jt.puddle=o(Le(.9,.9,"+y",-.9,.004,-1.78),i.puddle,{cast:!1,data:{action:"puddle"}});for(const P in Jt)Jt[P].visible=!1;const _e=new ce;n.add(_e),o(ke([ze(.07,.07,c,12).rotateZ(Math.PI/2).translate(h,2.28,ge.z0+.12),ze(.05,.05,c,12).rotateZ(Math.PI/2).translate(h,2.46,ge.z0+.1),ze(.05,.05,Be,12).translate(ge.x0+.12,Be/2,-.2)]),i.pipe,{parent:_e,data:{action:"pipes"}});const ee=o(Ot(.44,.16,.04,0,0,0),[i.darkMetal,i.darkMetal,i.darkMetal,i.darkMetal,i.exitSign,i.darkMetal],{parent:_e,cast:!1,data:{action:"door",key:"B"}});en(ee,"back",-2.35,2.28,.02),_e.visible=!1;const Ue=P=>P.getWorldPosition(new I);n.updateMatrixWorld(!0);const Ne={tv:Ue(w.A.group).add(new I(0,1.2,-.4)),knock:Ue(w.D.group).add(new I(0,1.2,0)),phone:Ue(w.B.group).add(new I(0,1,-.6)),lift:Ue(nt).add(new I(0,1.5,.6)),lamp:new I(J,Ac[1]+n.position.y,st),switch:Ue(Et)},te={doors:w,elev:{leafL:ht,leafR:Ut,void:St,sign:x,signMat:T},number:{mesh:Z,mat:B},call:{lit:!1},sw:Et,swHole:dt,panel:{open:!1,forcedOpen:!1,angle:0},chute:{open:!1,forcedOpen:!1,angle:0},notice:{mesh:Dt,mat:Lt},graffiti:{mesh:qt,mat:Tt},matA:Bt,matD:ne,shoes:pt,shoesMany:X,stroller:K,figure:ut,cat:ft,stool:gt,plant:V,plantMat:W,bricks:z,windowFace:O,railGap:R,decals:Jt,eyes:zt,wallMat:s,tileMat:a,lamp:{color:null,missing:!1,swing:!1,length:.35},plateWrong:!1,tvSilent:!1},Mr={T:t,M:i},Pn=new Wt(16756848),Ln=new I;let fn=null,di=2,Dn=3,pi=1,$n=0,Ui=!1,mi=0,Zn=-1;const is=P=>{(Zn<0||Zn>P)&&(Zn=P)};function rs(){const P=te.lamp.length;lt.scale.y=P,lt.position.y=-.025-P/2,Ct.position.y=-.025-P,yt.updateMatrixWorld(!0),It.getWorldPosition(Ln),Ln.y-=n.position.y,et.position.set(Ln.x,Ln.y-.09,Ln.z)}function M(P,C=!0){fn=P;const q=P.floor;for(const Mt of["A","C","D"])w[Mt].group.visible=!0;w.B.leaf.material[4]=w.B.defaultMat,w.B.plate.visible=w.B.bell.visible=!0,w.C.pivot.rotation.y=0,w.C.voidMesh.visible=!1,w.X.pivot.rotation.y=0,w.X.voidMesh.visible=!1,nt.visible=$.visible=!0,Bt.visible=pt.visible=K.visible=Dt.visible=!0,_e.visible=!1,te.panel.open=te.chute.open=!1;for(const Mt of Jr)Mt.set(te,!1,Mr);const ot=Jr.find(Mt=>Mt.id===P.anomaly);ot&&ot.set(te,!0,Mr);const mt=Mt=>t.plate(Mt);if(w.D.plateMat.map=mt(4*q-3),w.A.plateMat.map=mt(4*q-2),w.B.plateMat.map=mt(te.plateWrong?4*q-2:4*q-1),w.C.plateMat.map=mt(4*q),w.X.plateMat.map=mt(49),B.map=t.number(P.special==="basement"?"П":q),P.special==="basement"){for(const Mt of["A","C","D"])w[Mt].group.visible=!1;w.B.leaf.material[4]=i.metalDoor,w.B.plate.visible=w.B.bell.visible=!1,nt.visible=$.visible=!1,Bt.visible=ne.visible=pt.visible=K.visible=Dt.visible=!1,_e.visible=!0}if(P.special==="thirteen"){for(const Mt of["A","B","C","D"])w[Mt].plateMat.map=mt($r);w.C.pivot.rotation.y=-.55,w.C.voidMesh.visible=!0,te.lamp.color=16722452,ut.visible=!0,Lt.map=t.noticeBad}P.open49&&(w.X.group.visible=!0,w.X.pivot.rotation.y=-.6,w.X.voidMesh.visible=!0),!C&&!P.special&&(te.lamp.color=null,te.lamp.missing=!1,te.lamp.swing=!1,te.lamp.length=.35);const rt=te.lamp.color===null?Pn:new Wt(te.lamp.color);et.color.copy(rt),Nt.emissive.copy(rt),Xt.color.copy(rt),It.visible=Q.visible=!te.lamp.missing,yt.rotation.set(0,0,0),rs(),et.shadow.autoUpdate=te.lamp.swing,Ui=!1,di=1.5,Dn=2,pi=1,et.shadow.needsUpdate=!0}function F(P){let C=te.lamp.missing?0:P;(fn==null?void 0:fn.special)==="basement"&&(C*=Math.random()<.08?.05:.45),et.intensity=13*C,Nt.emissiveIntensity=45*C,Xt.opacity=.75*C}function G(P,C){if(!fn)return;const q=fn.anomaly,ot=C.feetY-n.position.y,mt=(rt,Mt)=>C.pos.distanceTo(rt)<Mt;for(const[rt,Mt,Gt,At]of[[te.panel,bt,"y",-1.9],[te.chute,Zt,"x",-.75]]){const Yt=rt.open||rt.forcedOpen?At:0;Math.abs(rt.angle-Yt)>.001&&(rt.angle+=(Yt-rt.angle)*(1-Math.exp(-P*8)),Math.abs(rt.angle-Yt)<=.001&&(rt.angle=Yt),Mt.rotation[Gt]=rt.angle,is(.1))}kt.visible=Math.abs(te.chute.angle)>.05,q==="shoesWatch"&&(pt.rotation.y=Math.atan2(C.pos.x-pt.position.x,C.pos.z-pt.position.z),is(.25)),ft.visible&&(ft.rotation.y=Math.atan2(C.pos.x-ft.position.x,C.pos.z-ft.position.z)+Math.PI),ut.visible&&!Ui&&fn.special!=="thirteen"&&Math.hypot(C.pos.x-ut.position.x,C.pos.z-ut.position.z)<1.7&&Math.abs(ot-Kt)<1&&(Ui=!0,ut.visible=!1,et.shadow.needsUpdate=!0),q==="knocking"&&(di-=P,di<=0&&(di=5+Math.random()*3,C.isCurrent&&mt(Ne.knock,5.5)&&C.sound.knock(Ne.knock))),q==="phoneRinging"&&(Dn-=P,Dn<=0&&(Dn=4,C.isCurrent&&mt(Ne.phone,7)&&C.sound.phone(Ne.phone))),q==="callButtonLit"?(tt.emissiveIntensity=4,pi-=P,pi<=0&&(pi=8+Math.random()*4,C.isCurrent&&mt(Ne.lift,7)&&C.sound.motor(Ne.lift))):mi>0?(mi-=P,tt.emissiveIntensity=mi>0?4:.15):tt.emissiveIntensity=.15,te.lamp.swing&&($n+=P,yt.rotation.z=Math.sin($n*1.7)*.32,yt.rotation.x=Math.sin($n*1.1)*.08,rs()),Zn>=0&&(Zn-=P,Zn<0&&(et.shadow.needsUpdate=!0))}return{index:e,group:n,rayTargets:r,light:et,sound:Ne,doors:w,parts:te,get state(){return fn},apply:M,setLight:F,update:G,pressCall(){mi=.8},togglePanel(){return te.panel.open=!te.panel.open,te.panel.open||te.panel.forcedOpen},toggleChute(){return te.chute.open=!te.chute.open,te.chute.open||te.chute.forcedOpen}}}function E_(i,t){return t<=0?0:t>=oe?Kt:i<-Yn?li*(Math.floor(t/Di)+1):i>Yn?Kt+li*(Math.floor((oe-t)/Di)+1):null}function T_(i,t,e,n=.45){const r=E_(i,t);if(r===null)return e;let s=-1/0;const a=Math.floor(e/ye)-1;for(let o=a;o<=a+2;o++){const l=o*ye+r;l<=e+n&&l>s&&(s=l)}return s===-1/0?e:s}function Pc(i,t,e,n,r,s,a){const o=Math.max(n,Math.min(i,r)),l=Math.max(s,Math.min(t,a)),c=i-o,u=t-l;return c*c+u*u<e*e}function Lc(i,t){const e=p_,n=i>ge.x0+e&&i<ge.x1-e&&t>ge.z0+e&&t<ge.z1-e,r=i>-Ee+e&&i<Ee-e&&t>ge.z0+e&&t<Se-e;return!(!n&&!r||Pc(i,t,e,-Yn-.03,Yn+.03,0,oe)||Pc(i,t,e,-Ee,-Ee+.42,Se-.46,Se))}class w_{constructor(t){this.camera=t,this.running=!1,this.onStep=null,this.reset()}reset(){this.x=ka.x,this.z=ka.z,this.feetY=0,this.eyeY=wc,this.yaw=ka.yaw,this.pitch=-.05,this.vx=0,this.vz=0,this.phase=0,this.apply(0)}look(t,e){this.yaw-=t*.0021,this.pitch-=e*.0021,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch))}get onStairs(){return this.z>0&&this.z<oe}update(t,e){var d;let n=e.mx,r=e.mz;this.yaw+=e.turn*t*2.1,this.running=e.run;const s=Math.hypot(n,r);s>1&&(n/=s,r/=s);const a=this.running?2.6:1.45,o=Math.sin(this.yaw),l=Math.cos(this.yaw),c=(l*n+o*r)*a,u=(-o*n+l*r)*a,h=1-Math.exp(-t*(s>.05?9:12));this.vx+=(c-this.vx)*h,this.vz+=(u-this.vz)*h;const f=this.x+this.vx*t;Lc(f,this.z)?this.x=f:this.vx=0;const m=this.z+this.vz*t;Lc(this.x,m)?this.z=m:this.vz=0,this.feetY=T_(this.x,this.z,this.feetY);const p=Math.hypot(this.vx,this.vz),_=this.running?.85:.68,g=Math.floor(this.phase/Math.PI);this.phase+=p*t*Math.PI/_,Math.floor(this.phase/Math.PI)!==g&&p>.3&&((d=this.onStep)==null||d.call(this,this.onStairs,this.running)),this.apply(t,p)}apply(t,e=0){const n=this.feetY+wc;this.eyeY+=(n-this.eyeY)*(t?1-Math.exp(-t*14):1);const r=Math.min(1,e/1.45),s=Math.abs(Math.sin(this.phase))*.035*r-.017*r,a=Math.sin(this.phase)*.006*r;this.camera.position.set(this.x,this.eyeY+s,this.z),this.camera.rotation.set(this.pitch,this.yaw,a,"YXZ")}shift(t){this.feetY+=t,this.eyeY+=t,this.apply(1e-4)}}function A_(){const t=new ArrayBuffer(8864),e=new DataView(t),n=(r,s)=>{for(let a=0;a<s.length;a++)e.setUint8(r+a,s.charCodeAt(a))};return n(0,"RIFF"),e.setUint32(4,36+4410*2,!0),n(8,"WAVE"),n(12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,1,!0),e.setUint32(24,44100,!0),e.setUint32(28,88200,!0),e.setUint16(32,2,!0),e.setUint16(34,16,!0),n(36,"data"),e.setUint32(40,4410*2,!0),URL.createObjectURL(new Blob([t],{type:"audio/wav"}))}class R_{constructor(){this.ctx=null,this.loops=[],this.breathLevel=0,this.breathT=0,this.volume=1}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=.9*t)}start(){if(this.unlockIOS(),this.ctx){this.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t;this.resume();const n=e.createBufferSource();n.buffer=e.createBuffer(1,1,e.sampleRate),n.connect(e.destination),n.start(0);const r=()=>this.resume();for(const c of["pointerdown","touchend","keydown"])addEventListener(c,r,{passive:!0});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.resume()}),this.master=e.createGain(),this.master.gain.value=.9*this.volume,this.master.connect(e.destination),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(2.6,2.4),this.verbIn=e.createGain(),this.verbIn.connect(this.verb);const s=e.createGain();s.gain.value=.55,this.verb.connect(s).connect(this.master),this.white=this.noise(3,!1),this.brown=this.noise(5,!0);const a=this.src(this.brown,!0),o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=160;const l=e.createGain();l.gain.value=.22,a.connect(o).connect(l).connect(this.master)}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{}),this.silentEl&&this.silentEl.paused&&this.silentEl.play().catch(()=>{})}unlockIOS(){try{if(navigator.audioSession){navigator.audioSession.type="playback";return}}catch{}const t=/iP(hone|ad|od)/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;if(this.silentEl||!t)return;const e=new Audio(A_());e.loop=!0,e.setAttribute("playsinline",""),e.play().catch(()=>{}),this.silentEl=e}get ok(){return!!this.ctx}get now(){return this.ctx.currentTime}impulse(t,e){const n=this.ctx,r=Math.floor(n.sampleRate*t),s=n.createBuffer(2,r,n.sampleRate);for(let a=0;a<2;a++){const o=s.getChannelData(a);for(let l=0;l<r;l++){const c=l/r;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<400?l/400:1)}for(let l=0;l<6;l++){const c=Math.floor(n.sampleRate*(.008+Math.random()*.05));o[c]+=(Math.random()>.5?1:-1)*.6}}return s}noise(t,e){const n=this.ctx,r=Math.floor(n.sampleRate*t),s=n.createBuffer(1,r,n.sampleRate),a=s.getChannelData(0);let o=0;for(let l=0;l<r;l++){const c=Math.random()*2-1;e?(o=(o+.02*c)/1.02,a[l]=o*3.5):a[l]=c}return s}src(t,e=!1,n=0){const r=this.ctx.createBufferSource();return r.buffer=t,r.loop=e,r.start(this.now,n),r}panner(t){const e=this.ctx.createPanner();return e.panningModel="HRTF",e.distanceModel="inverse",e.refDistance=1,e.maxDistance=40,e.rolloffFactor=1.5,this.setPos(e,t),e}setPos(t,e){t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}out(t,e,n=.5){let r=t;if(e&&(r=this.panner(e),t.connect(r)),r.connect(this.master),n){const s=this.ctx.createGain();s.gain.value=n,r.connect(s).connect(this.verbIn)}}burst({pos:t=null,dur:e=.1,freq:n=800,type:r="lowpass",q:s=.7,gain:a=.4,send:o=.5,delay:l=0}){if(!this.ok)return;const c=this.now+l,u=this.ctx.createBufferSource();u.buffer=this.white;const h=this.ctx.createBiquadFilter();h.type=r,h.frequency.value=n,h.Q.value=s;const f=this.ctx.createGain();f.gain.setValueAtTime(1e-4,c),f.gain.exponentialRampToValueAtTime(a,c+.003),f.gain.exponentialRampToValueAtTime(1e-4,c+e),u.connect(h).connect(f),this.out(f,t,o),u.start(c,Math.random()*2),u.stop(c+e+.05)}thump({pos:t=null,f0:e=90,f1:n=45,dur:r=.12,gain:s=.4,send:a=.5,delay:o=0}){if(!this.ok)return;const l=this.now+o,c=this.ctx.createOscillator();c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(n,l+r);const u=this.ctx.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(s,l+.004),u.gain.exponentialRampToValueAtTime(1e-4,l+r),c.connect(u),this.out(u,t,a),c.start(l),c.stop(l+r+.05)}footstep(t,e){const n=e?1.25:1;this.burst({dur:.07,freq:700+Math.random()*600,gain:.22*n,send:.7}),this.burst({dur:.025,freq:3200+Math.random()*800,type:"highpass",gain:.05*n,send:.5}),this.thump({f0:t?110:85,f1:45,dur:.07,gain:(t?.32:.22)*n,send:.4})}click(t){this.burst({pos:t,dur:.015,freq:2500,type:"highpass",gain:.35,send:.4}),this.burst({pos:t,dur:.05,freq:420,type:"bandpass",q:3,gain:.5,send:.4,delay:.05})}relay(t){this.burst({pos:t,dur:.06,freq:300,type:"bandpass",q:2,gain:.5,send:.5})}knock(t,e=3){for(let n=0;n<e;n++){const r=n*.32+Math.random()*.04;this.thump({pos:t,f0:120,f1:55,dur:.13,gain:.9,send:.6,delay:r}),this.burst({pos:t,dur:.05,freq:500,gain:.5,send:.5,delay:r})}}sting(){if(!this.ok)return;this.thump({f0:60,f1:28,dur:1.8,gain:.7,send:.8});const t=this.now,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(2300,t),e.frequency.linearRampToValueAtTime(2150,t+2.5);const n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.03,t+.4),n.gain.exponentialRampToValueAtTime(1e-4,t+2.5),e.connect(n),this.out(n,null,.6),e.start(t),e.stop(t+2.6)}hum(t){const e=this.ctx,n=e.createOscillator();n.type="sawtooth",n.frequency.value=100;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=380;const s=e.createGain();return s.gain.value=0,n.connect(r).connect(s),this.out(s,t,.1),n.start(),{set:a=>s.gain.setTargetAtTime(a*.035,this.now,.03)}}tv(t){const e=this.ctx,n=this.src(this.white,!0,Math.random()*2),r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=650,r.Q.value=1.4;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900;const a=e.createGain();a.gain.value=0,n.connect(r).connect(s).connect(a),this.out(a,t,.3);const o={g:a,bp:r,t:0};return this.loops.push(o),o}tone({pos:t=null,freq:e,type:n="sine",dur:r=1,gain:s=.2,send:a=.5,delay:o=0,attack:l=.004}){if(!this.ok)return;const c=this.now+o,u=this.ctx.createOscillator();u.type=n,u.frequency.value=e;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(s,c+l),h.gain.exponentialRampToValueAtTime(1e-4,c+r),u.connect(h),this.out(h,t,a),u.start(c),u.stop(c+r+.05)}chime(t){this.tone({pos:t,freq:659,dur:.9,gain:.25}),this.tone({pos:t,freq:1318,dur:.5,gain:.05}),this.tone({pos:t,freq:523,dur:1.2,gain:.25,delay:.38}),this.tone({pos:t,freq:1046,dur:.6,gain:.05,delay:.38})}metal(t){for(const[e,n]of[[520,.22],[1340,.1],[2210,.06],[3050,.03]])this.tone({pos:t,freq:e*(.98+Math.random()*.04),dur:1.4,gain:n,send:.6})}clank(t){this.thump({pos:t,f0:150,f1:70,dur:.18,gain:.6,send:.6}),this.burst({pos:t,dur:.12,freq:900,type:"bandpass",q:2,gain:.4,send:.6}),this.tone({pos:t,freq:410,dur:.6,gain:.06,send:.6,delay:.01})}phone(t){if(!this.ok)return;const e=this.ctx,n=this.now,r=e.createGain();r.gain.value=0;const s=e.createOscillator();s.type="square",s.frequency.value=20;const a=e.createGain();a.gain.value=.05,s.connect(a).connect(r.gain);const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;for(const l of[1150,1720]){const c=e.createOscillator();c.type="triangle",c.frequency.value=l,c.connect(r),c.start(n),c.stop(n+1.6)}r.connect(o),this.out(o,t,.4),s.start(n),s.stop(n+1.6)}hiss(t){this.burst({pos:t,dur:.7,freq:2600,type:"highpass",gain:.25,send:.3})}creak(t){if(!this.ok)return;const e=this.now,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(170,e),n.frequency.linearRampToValueAtTime(310,e+.25),n.frequency.linearRampToValueAtTime(150,e+.55);const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=700,r.Q.value=5;const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.18,e+.05),s.gain.exponentialRampToValueAtTime(1e-4,e+.6),n.connect(r).connect(s),this.out(s,t,.5),n.start(e),n.stop(e+.65)}motor(t){if(!this.ok)return;const e=this.now,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=52;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=220;const s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(.25,e+.6),s.gain.setValueAtTime(.25,e+2.6),s.gain.linearRampToValueAtTime(1e-4,e+3.2),n.connect(r).connect(s),this.out(s,t,.4),n.start(e),n.stop(e+3.3),this.thump({pos:t,f0:90,f1:40,dur:.25,gain:.7,delay:3.2})}paper(){for(let t=0;t<3;t++)this.burst({dur:.06,freq:3500+Math.random()*2e3,type:"highpass",gain:.12,send:.1,delay:t*.07})}stepBehind(t){this.burst({pos:t,dur:.07,freq:650+Math.random()*400,gain:.18,send:.7}),this.thump({pos:t,f0:95,f1:45,dur:.07,gain:.2,send:.4})}breathe(t){this.breathLevel=t}update(t,e){if(!this.ok)return;const n=this.ctx.listener,r=e.matrixWorld.elements,s={x:r[12],y:r[13],z:r[14]},a={x:-r[8],y:-r[9],z:-r[10]},o={x:r[4],y:r[5],z:r[6]};n.positionX?(n.positionX.value=s.x,n.positionY.value=s.y,n.positionZ.value=s.z,n.forwardX.value=a.x,n.forwardY.value=a.y,n.forwardZ.value=a.z,n.upX.value=o.x,n.upY.value=o.y,n.upZ.value=o.z):(n.setPosition(s.x,s.y,s.z),n.setOrientation(a.x,a.y,a.z,o.x,o.y,o.z));for(const l of this.loops)if(l.t-=t,l.t<=0){l.t=.08+Math.random()*.22;const c=l.mute?0:Math.random()>.25?.05+Math.random()*.12:.005;l.g.gain.setTargetAtTime(c,this.now,.03),l.bp.frequency.setTargetAtTime(450+Math.random()*700,this.now,.05)}if(this.breathLevel>.01&&(this.breathT-=t,this.breathT<=0)){this.breathT=1.6+Math.random()*.6;const l=this.now,c=this.ctx.createBufferSource();c.buffer=this.white;const u=this.ctx.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*400,u.Q.value=.8;const h=this.ctx.createGain(),f=.12*this.breathLevel;h.gain.setValueAtTime(1e-4,l),h.gain.linearRampToValueAtTime(f,l+.55),h.gain.linearRampToValueAtTime(1e-4,l+1.2);const m=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;c.connect(u).connect(h),m?(m.pan.value=Math.random()>.5?.7:-.7,h.connect(m),m.connect(this.master)):h.connect(this.master),c.start(l,Math.random()*1.5),c.stop(l+1.3),this.breathLevel>.6&&this.thump({f0:55,f1:40,dur:.12,gain:.35*this.breathLevel,send:.1})}}}const Cu=()=>matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&matchMedia("(hover: none)").matches;class C_{constructor({canvas:t,settings:e,isPlaying:n,isReading:r,onLook:s,onUse:a,onFlash:o,onPause:l,onClose:c}){this.canvas=t,this.settings=e,this.keys=new Set,this.joy={id:null,ox:0,oy:0,x:0,y:0},this.lookId=null,this.last={x:0,y:0},this.touchMode=Cu(),this.hadLock=!1;const u=()=>n();addEventListener("keydown",p=>{if(r()){["KeyE","Space","Enter","Escape"].includes(p.code)&&(p.preventDefault(),c());return}u()&&(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(p.code)&&p.preventDefault(),!p.repeat&&["KeyE","Space","Enter"].includes(p.code)?a():!p.repeat&&p.code==="KeyF"?o():p.code==="Escape"&&!document.pointerLockElement&&l(),this.keys.add(p.code))}),addEventListener("keyup",p=>this.keys.delete(p.code)),addEventListener("blur",()=>this.reset()),document.addEventListener("visibilitychange",()=>this.reset()),t.addEventListener("mousedown",p=>{var _,g;if(!(this.touchMode&&((_=p.sourceCapabilities)!=null&&_.firesTouchEvents))){if(r()){c();return}u()&&(document.pointerLockElement===t?p.button===0&&a():Promise.resolve((g=t.requestPointerLock)==null?void 0:g.call(t)).catch(()=>{}))}}),addEventListener("mousemove",p=>{if(!u()||this.touchMode)return;if(document.pointerLockElement===t||p.buttons===1){const g=d=>Math.max(-150,Math.min(150,d));s(g(p.movementX)*this.settings.sens,g(p.movementY)*this.settings.sens)}}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===t?this.hadLock=!0:this.hadLock&&u()&&(this.hadLock=!1,l())}),t.addEventListener("wheel",p=>{if(p.preventDefault(),!u()||p.ctrlKey)return;const _=p.deltaMode===1?16:1;let g=p.webkitDirectionInvertedFromDevice??!0;this.settings.invertSwipe&&(g=!g);const d=g?-1:1;s(d*p.deltaX*_*1.1*this.settings.sens,d*p.deltaY*_*1.1*this.settings.sens)},{passive:!1}),this.ui={layer:document.getElementById("touch"),stick:document.getElementById("stick"),knob:document.getElementById("knob"),use:document.getElementById("btn-use"),flash:document.getElementById("btn-flash"),pause:document.getElementById("btn-pause")};const h=this.ui.layer;addEventListener("pointerdown",p=>{p.pointerType==="touch"&&!this.touchMode&&this.setTouchMode(!0)},!0),h.addEventListener("pointerdown",p=>{if(p.pointerType==="mouse"){this.setTouchMode(!1);return}if(this.setTouchMode(!0),r()){c();return}if(u()){p.preventDefault(),p.clientX<innerWidth*.45&&this.joy.id===null?(this.joy={id:p.pointerId,ox:p.clientX,oy:p.clientY,x:0,y:0},this.ui.stick.style.transform=`translate(${p.clientX}px, ${p.clientY}px)`,this.ui.stick.classList.add("on"),this.ui.knob.style.transform="translate(0px, 0px)"):this.lookId===null&&(this.lookId=p.pointerId,this.last={x:p.clientX,y:p.clientY});try{h.setPointerCapture(p.pointerId)}catch{}}}),h.addEventListener("pointermove",p=>{if(p.pointerId===this.joy.id){let g=p.clientX-this.joy.ox,d=p.clientY-this.joy.oy;const E=Math.hypot(g,d);this.joy.run=E>56*1.6,E>56&&(g*=56/E,d*=56/E),this.joy.x=g/56,this.joy.y=d/56,this.ui.knob.style.transform=`translate(${g}px, ${d}px)`}else if(p.pointerId===this.lookId){const _=p.clientX-this.last.x,g=p.clientY-this.last.y;this.last={x:p.clientX,y:p.clientY},s(_*1.9*this.settings.sens,g*1.9*this.settings.sens)}});const f=p=>{p.pointerId===this.joy.id&&(this.joy={id:null,ox:0,oy:0,x:0,y:0},this.ui.stick.classList.remove("on")),p.pointerId===this.lookId&&(this.lookId=null)};h.addEventListener("pointerup",f),h.addEventListener("pointercancel",f);const m=(p,_)=>p.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),_()});m(this.ui.use,()=>{r()?c():u()&&a()}),m(this.ui.flash,()=>{u()&&o()}),m(this.ui.pause,()=>{u()&&l()}),this.setTouchMode(this.touchMode)}setTouchMode(t){this.touchMode=t,document.body.classList.toggle("touch",t)}reset(){var t;this.keys.clear(),this.joy={id:null,ox:0,oy:0,x:0,y:0},this.lookId=null,(t=this.ui)==null||t.stick.classList.remove("on")}input(){const t=this.keys;let e=0,n=0,r=0;(t.has("KeyW")||t.has("ArrowUp"))&&(n-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n+=1),t.has("KeyA")&&(e-=1),t.has("KeyD")&&(e+=1),(t.has("ArrowLeft")||t.has("KeyQ"))&&(r+=1),t.has("ArrowRight")&&(r-=1),e+=this.joy.x,n+=this.joy.y;const s=t.has("ShiftLeft")||t.has("ShiftRight")||!!this.joy.run;return{mx:e,mz:n,turn:r,run:s}}}const tr=i=>i[Math.floor(Math.random()*i.length)];function P_(i){const{game:t,sound:e,ui:n}=i,r=p=>p.module.state||{},s=p=>r(p).anomaly;function a(p,_){const g=r(p);return g.special?null:Zr.find(d=>d.spot===_&&d.floor===g.floor&&!t.notes.has(d.id))||null}function o(p){return r(p).final&&p.key==="C"}function l(p){return r(p).special==="thirteen"&&p.key==="C"}function c(p){return r(p).special==="basement"&&p.key==="B"}function u(p){return p.key==="X"&&r(p).open49}function h(p){const _=s(p);switch(p.action){case"switch":return"Включить свет";case"swHole":return"Осмотреть провода";case"lift":return"Вызвать лифт";case"liftDoor":return"Открыть двери лифта";case"liftVoid":return"Заглянуть в шахту";case"liftSign":return"Прочитать бумажку";case"number":return"Номер этажа";case"door":return o(p)?`Открыть дверь (кв. ${$r})`:l(p)||u(p)?"Войти":c(p)?"Выйти во двор":"Постучать";case"handle":return o(p)?`Открыть дверь (кв. ${$r})`:"Подёргать ручку";case"peephole":return"Посмотреть в глазок";case"bell":return"Позвонить";case"mat":return _==="matCeiling"&&p.key==="A"?"Осмотреть коврик":"Поднять коврик";case"shoes":case"shoesMany":return"Осмотреть обувь";case"stroller":return"Заглянуть в коляску";case"panel":return p.module.parts.panel.open||p.module.parts.panel.forcedOpen?"Закрыть щиток":"Открыть щиток";case"notice":return"Прочитать объявление";case"graffiti":return"Прочитать надпись";case"window":return"Посмотреть в окно";case"sill":return"Осмотреть подоконник";case"jar":return"Заглянуть в банку";case"plant":return"Осмотреть цветок";case"radiator":return"Потрогать батарею";case"chute":return p.module.parts.chute.open||p.module.parts.chute.forcedOpen?"Закрыть мусоропровод":"Открыть мусоропровод";case"railing":return"Постучать по перилам";case"stool":return"Осмотреть табуретку";case"bulb":return"Посмотреть на лампочку";case"cat":return"Погладить кота";case"eyes":return"Что там?";case"pipes":return"Потрогать трубы";case"scrawl":case"hands":case"shadow":case"crack":case"puddle":return"Осмотреть";default:return""}}function f(p){const _=r(p);if(p.key==="X"){if(e.knock(p.point,2),_.knocked49){n.say("Тишина. Там ждут.");return}_.knocked49=!0,t.knock49++,t.knock49>=3?setTimeout(()=>{_.open49=!0,i.reapply(),e.creak(p.point),n.say("Дверь открылась сама.")},1500):(setTimeout(()=>e.knock(p.point,3),1400),n.say(t.knock49===1?"Кто-то стучит в ответ.":"За дверью шаги. Кто-то смотрит в глазок.",4));return}e.knock(p.point,2);const g=s(p),d={A:[_.special?"Тишина.":p.module.parts.tvSilent?"Тишина. Даже телевизор замолчал.":"За дверью бубнит телевизор. Никто не открывает."],B:g==="phoneRinging"?["Телефон за дверью звонит и звонит. Трубку не берут."]:["Тишина.","Кто-то подошёл к двери и замер."],C:["Никто не открывает.","Глухо. Железная дверь."],D:g==="knocking"?["Стук прекратился. Теперь слушают вас."]:["Тихо. Будто кто-то затаил дыхание."]};n.say(tr(d[p.key]||["Тишина."]))}function m(p){const _=s(p),g=r(p),d=E=>{const S=a(p,E);return S?(i.foundNote(S),!0):!1};switch(p.action){case"switch":i.pressSwitch(p);break;case"swHole":n.say("Выключателя нет. Из стены торчат провода.");break;case"lift":e.click(p.point),p.module.pressCall(),n.say(_==="callButtonLit"?"Кнопка уже горит. Лифт кто-то вызвал.":tr(["Лифт не едет.","Где-то наверху щёлкнуло. Лифт не едет."]));break;case"liftDoor":e.clank(p.point),n.say("Двери не поддаются.");break;case"liftVoid":n.say("Там пусто. Ни кабины, ни тросов. Только сквозняк снизу.",4);break;case"liftSign":n.say(_==="liftSignChanged"?"«ЛИФТ ЖДЁТ ВАС. Поднимайтесь, мы рядом».":"«ЛИФТ НЕ РАБОТАЕТ. Извините за неудобства».",4);break;case"number":g.special==="basement"?n.say("«П». Подвал."):n.say(_==="numberMirrored"?`Цифра «${g.floor}» написана зеркально.`:`Этаж ${g.floor}.`);break;case"door":case"handle":if(o(p)){i.endGame("home");break}if(l(p)){i.endGame("thirteen");break}if(u(p)){i.endGame("apt49");break}if(c(p)){i.endGame("exit");break}p.action==="handle"?(e.clank(p.point),n.say(tr(["Заперто.","Ручка не поворачивается."]))):f(p);break;case"peephole":n.say(p.key==="D"?"Темно. Потом — свет, будто кто-то отошёл от глазка.":p.key==="X"?"С той стороны в глазок смотрят на вас.":"В глазке темно.",4);break;case"bell":p.key==="B"?(e.click(p.point),n.say("Звонок не работает.")):(e.chime(p.point),n.say(p.key==="X"?"Звонок играет долго. Слишком долго.":"Звонок дребезжит. Никто не выходит."));break;case"mat":if(_==="matCeiling"&&p.key==="A"){n.say("Коврик прибит к потолку. Гвозди новые.");break}if(p.key==="A"&&d("matA"))break;e.burst({pos:p.point,dur:.15,freq:600,gain:.2}),n.say("Под ковриком пусто.");break;case"shoes":n.say(_==="shoesWatch"?"Носки ботинок повёрнуты к вам. Всегда к вам.":"Мужские ботинки, сорок третий. Ещё тёплые.",4);break;case"shoesMany":n.say("Восемь пар. Все мокрые, будто только что с улицы.",4);break;case"stroller":if(e.creak(p.point),d("stroller"))break;n.say(_==="strollerMoved"?"Коляска стоит на краю лестницы. Её кто-то выкатил.":"Пустая коляска. Одеяльце холодное.",4);break;case"panel":{const E=p.module.togglePanel();if(e.clank(p.point),E&&d("panel"))break;E&&n.say(_==="panelOpen"?"Щиток был открыт. Счётчики крутятся, хотя все спят.":"Два счётчика и куча проводов.");break}case"notice":e.paper(),_==="noticeUpsideDown"&&n.say("Объявление висит вверх ногами."),n.read(g.special==="thirteen"||_==="noticeChanged"?n.NOTICE_BAD:n.NOTICE_GOOD);break;case"graffiti":n.say(_==="graffitiChanged"?"«Лена + Саша + ТЫ». Последнее слово свежее.":"«Лена + Саша». Надписи лет тридцать.",4);break;case"window":_==="windowBricked"?n.say("Окно заложено кирпичом. Раствор ещё сырой."):_==="windowFace"?n.say(`За стеклом лицо. Снаружи. На ${g.floor}-м этаже.`,4):n.say(tr(["Двор, фонарь, тёмные окна напротив.","В доме напротив кто-то тоже стоит у окна.","Стекло холодное. Снаружи тихо, ни одной машины."]),4);break;case"sill":n.say("Подоконник в пепле и кругах от кружек.");break;case"jar":if(d("jar"))break;n.say("Банка-пепельница. Один окурок ещё тлеет.");break;case"plant":n.say(_==="plantDead"?"Алоэ засохло. Утром было зелёное.":"Алоэ в ведёрке из-под майонеза. Кто-то его поливает.",4);break;case"radiator":if(e.clank(p.point),d("radiator"))break;n.say(tr(["Батарея ледяная.","Батарея ледяная. В трубах что-то булькает."]));break;case"chute":{const E=p.module.toggleChute();if(e.clank(p.point),E&&d("chute"))break;E&&n.say(_==="chuteOpen"?"Ковш был открыт. Снизу что-то скребётся.":"Из мусоропровода тянет холодом.");break}case"railing":e.metal(p.point),n.say(_==="railingGap"?"Здесь не хватает прутьев. Пролёт уходит в темноту.":tr(["Перила липкие.","Звон уходит вниз и долго не стихает."]));break;case"stool":n.say(_==="stoolCeiling"?"Табуретка стоит на потолке. Как будто так и надо.":"Табуретка курильщиков. Ножки шатаются.");break;case"bulb":_==="bulbMissing"?n.say("Пустой патрон. Лампочку выкрутили."):_==="redLight"||g.special==="thirteen"?n.say("Лампочка красная. Её никто не менял."):n.say(t.lightOn?"Сорок ватт. Горячая.":"Лампочка остывает.");break;case"cat":e.hiss(p.point),n.say("Кот смотрит сквозь вас.");break;case"eyes":n.say("Две точки моргнули и погасли."),p.module.parts.eyes.visible=!1;break;case"pipes":n.say("Трубы горячие. Где-то внизу гудит котёл.");break;case"scrawl":n.say("«ОГЛЯНИСЬ». Краска ещё липкая.");break;case"hands":n.say("Отпечатки ладоней. Ведут к лестнице.");break;case"shadow":n.say("Тень есть, а того, кто её отбрасывает, нет.",4);break;case"crack":n.say("Трещина через весь потолок. Утром её не было.");break;case"puddle":n.say("Тёмная лужа из-под двери. Пахнет железом.");break}}return{label:h,use:m}}const jt=i=>document.getElementById(i),gr={get(i,t){try{const e=localStorage.getItem("panelka."+i);return e===null?t:JSON.parse(e)}catch{return t}},set(i,t){try{localStorage.setItem("panelka."+i,JSON.stringify(t))}catch{}}},He=Object.assign({sens:1,volume:1,invertSwipe:!1,quality:"auto"},gr.get("settings",{})),Ds=()=>gr.set("settings",He),Ri=He.quality==="low"||He.quality==="auto"&&Cu(),Vr=jt("scene"),sn=new Q0({canvas:Vr,antialias:!Ri,powerPreference:"high-performance"}),zo=Math.min(window.devicePixelRatio||1,Ri?1.25:1.5);let kn=zo;sn.setPixelRatio(kn);sn.setSize(Math.max(1,innerWidth),Math.max(1,innerHeight),!1);sn.shadowMap.enabled=!0;sn.shadowMap.type=Ri?Bu:Bc;sn.toneMapping=kc;sn.toneMappingExposure=1.15;sn.outputColorSpace=Ze;const si=new tg;si.background=new Wt(65793);si.fog=new tl(131586,.075);const xe=new Je(72,innerWidth/Math.max(1,innerHeight),.04,50);si.add(xe);jt("grain").style.backgroundImage=`url(${h_()})`;const Me=new R_;Me.setVolume(He.volume);const vn=new w_(xe);let Is,Dc,hi,Ks,Xe,ko,ol;const Pu=new Map,Kr=new I,Us=new I,k={mode:"loading",current:null,upper:null,lower:null,upper2:null,lower2:null,recent:[],mistakes:0,elapsed:0,lightOn:!0,lightTimer:ia,lightLevel:1,flick:0,flashOn:!1,battery:1,dark:0,knock49:0,audioReady:!1,hums:[],tvs:[],notes:new Set(gr.get("notes",[])),endings:new Set(gr.get("endings",[]))};function L_(i){const t=g_(i),e=Math.random(),n=e<t[0]?1:e<t[0]+t[1]?2:3;let r=Jr.filter(s=>s.tier===n&&!k.recent.includes(s.id));return r.length||(r=Jr.filter(s=>!k.recent.includes(s.id))),r[Math.floor(Math.random()*r.length)].id}function D_(i){return i>=Js?{floor:Js,anomaly:null,final:!0}:i<=1?{floor:1,anomaly:null}:{floor:i,anomaly:Math.random()<__(i)?L_(i):null}}function En(i,t){const e=t==="up";if(i.special==="basement")return e?{floor:1,anomaly:null}:{floor:0,special:"basement",anomaly:null};if(i.special==="thirteen")return e?{floor:13,special:"thirteen",anomaly:null}:{floor:Js,anomaly:null,final:!0};if(i.final)return e?{floor:13,special:"thirteen",anomaly:null}:{floor:1,anomaly:null,wrong:!0};if(i.floor===1&&!i.anomaly&&!e){const r=(i.down||0)+1;return r>=3?{floor:0,special:"basement",anomaly:null}:{floor:1,anomaly:null,down:r}}return e===(i.anomaly===null)?D_(i.floor+1):{floor:1,anomaly:null,wrong:!0}}function ra(){const i=[k.lower2,k.lower,k.current,k.upper,k.upper2];hi.forEach((t,e)=>{t.apply(i[e],e===2),k.tvs[e]&&(k.tvs[e].mute=t.parts.tvSilent||!!i[e].special)})}function Lu(){k.upper=En(k.current,"up"),k.lower=En(k.current,"down"),k.upper2=En(k.upper,"up"),k.lower2=En(k.lower,"down"),ra()}function Ic(i){const t=k.current,e=i==="up"?-ye:ye;if(i==="up"?(k.current=k.upper,k.upper=k.upper2,k.upper2=En(k.upper,"up"),k.lower=En(k.current,"down"),k.lower2=En(k.lower,"down")):(k.current=k.lower,k.lower=k.lower2,k.lower2=En(k.lower,"down"),k.upper=En(k.current,"up"),k.upper2=En(k.upper,"up")),vn.shift(e),Kr.y+=e,t.anomaly&&(k.recent.push(t.anomaly),k.recent.length>8&&k.recent.shift()),k.current.wrong){k.mistakes++,Me.sting();let n;t.final?n="Это был ваш этаж.":t.anomaly?n=`Вы пропустили странность: «${m_[t.anomaly].name}».`:n="Всё было как обычно — нужно было подниматься.",Xn.say(`${n} Снова первый этаж.`,5.5)}cl(),k.current.special==="basement"&&t.special!=="basement"&&Xn.say("Ступени кончились. Пахнет сыростью.",4),k.current.final&&!t.final&&Xn.say(`Ваш этаж. Квартира ${$r} — железная дверь.`,4),k.current.special==="thirteen"&&t.special!=="thirteen"&&Me.sting(),k.current.anomaly==="lightShort"&&k.lightTimer>Bo&&(k.lightTimer=Bo),ra()}function ll(){k.current={floor:1,anomaly:null},k.recent=[],k.mistakes=0,k.elapsed=0,k.knock49=0,k.lightOn=!0,k.lightTimer=ia,k.flick=0,k.battery=1,ul(!1),k.dark=0,vn.reset(),Kr.copy(xe.position),Lu()}let Uc=0;function cl(){const i=k.current,t=jt("floor");t.textContent=i.special==="basement"?"ПОДВАЛ":`ЭТАЖ ${i.floor}`,t.classList.add("show"),clearTimeout(Uc),Uc=setTimeout(()=>t.classList.remove("show"),2400)}function I_(i){var t;Me.click(i.point),k.lightOn||(k.flick=.3),k.lightOn=!0,k.lightTimer=((t=i.module.state)==null?void 0:t.anomaly)==="lightShort"?Bo:ia}const U_=new Wt(10465488),N_=new Wt(16770760);function F_(i,t){t&&k.lightOn&&(k.lightTimer-=i,k.lightTimer<=0&&(k.lightOn=!1,Me.relay(hi[2].sound.switch)));let e=k.lightOn?1:0;k.flick>0&&(k.flick-=i,e=Math.random()>.45?1:.08),k.lightLevel+=(e-k.lightLevel)*(1-Math.exp(-i*30));const n=k.lightLevel*(1+(Math.random()-.5)*.025);hi.forEach((r,s)=>{var a;r.setLight(n),(a=k.hums[s])==null||a.set(r.parts.lamp.missing?0:k.lightLevel)}),Ks.intensity=.03+.42*k.lightLevel,Ks.color.copy(U_).lerp(N_,k.lightLevel)}function ul(i){i&&k.battery<=0&&(Xn.say("Телефон сел."),i=!1),k.flashOn=i,Xe&&(Xe.shadow.autoUpdate=i),jt("battery").style.opacity=i||k.battery<.3?1:0,jt("btn-flash").classList.toggle("active",i)}function O_(i,t){t&&k.flashOn&&(k.battery=Math.max(0,k.battery-i/200),k.battery<=0&&(ul(!1),Me.click(xe.position)));let e=k.flashOn?24:0;k.flashOn&&k.battery<.15&&Math.random()<.08&&(e*=.25),Xe.intensity=e,Us.set(.17,-.2,.05).applyQuaternion(xe.quaternion).add(xe.position),Xe.position.copy(Us),Us.set(.02,-.06,-4).applyQuaternion(xe.quaternion).add(xe.position),Kr.lerp(Us,1-Math.exp(-i*13)),Xe.target.position.copy(Kr),jt("battery-fill").style.width=`${Math.round(k.battery*100)}%`}const B_=(i,t,e)=>{const n=Math.min(1,Math.max(0,(i-t)/(e-t)));return n*n*(3-2*n)};function z_(i){const t=k.lightLevel<.05&&!k.flashOn;k.dark=t?k.dark+i:Math.max(0,k.dark-i*3),Me.breathe(B_(k.dark,5,13)),jt("vignette").style.opacity=.75+.25*Math.min(1,k.dark/13),k.dark>15&&k_()}function k_(){k.mode="transition",Me.sting(),jt("fade").style.opacity=1,setTimeout(()=>{k.mistakes++,k.current={floor:1,anomaly:null},k.lightOn=!0,k.lightTimer=ia,k.dark=0,Me.breathe(0),vn.reset(),Kr.copy(xe.position),Lu(),jt("fade").style.opacity=0,k.mode="play",Xn.say("Вы снова на первом этаже. Не стойте в темноте.",4),cl()},1600)}const Vs=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);let Nc=0;const Xn={say(i,t=3.2){const e=jt("subtitle");e.textContent=i,e.classList.add("show"),clearTimeout(Nc),Nc=setTimeout(()=>e.classList.remove("show"),t*1e3)},read(i){k.mode="read",fi.reset(),jt("paper").className=`paper ${i.kind}`,jt("paper").innerHTML=`<h2>${Vs(i.title)}</h2>${i.lines.map(t=>t?`<p>${Vs(t)}</p>`:"<br>").join("")}${i.foot?`<p class="foot">${Vs(i.foot)}</p>`:""}`,jt("reader").classList.remove("hidden")},close(){jt("reader").classList.add("hidden"),k.mode==="read"&&(k.mode="play")},NOTICE_GOOD:{kind:"notice",title:"ОБЪЯВЛЕНИЕ",lines:["Уважаемые жильцы!","","1. Свет в подъезде горит 30 секунд.","2. Если всё как обычно — поднимайтесь.","3. Если что-то не так — спускайтесь.","4. Не оставайтесь в темноте.","","Домоуправление"]},NOTICE_BAD:{kind:"notice",title:"ОБЪЯВЛЕНИЕ",lines:["Уважаемые жильцы!","","1. Свет вам больше не понадобится.","2. Поднимайтесь.","3. Поднимайтесь.","4. МЫ ВИДИМ ВАС В ТЕМНОТЕ.","","Домоуправление"]}};function G_(i){k.notes.add(i.id),gr.set("notes",[...k.notes]),Me.paper(),Xn.read({kind:"note",title:`Записка ${i.id} из ${Zr.length}`,lines:i.text,foot:`Найдено записок: ${k.notes.size} из ${Zr.length}`})}const Go=new Gg;Go.far=1.9;const H_=new at(0,0);let sr=null;function V_(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}function W_(){Go.setFromCamera(H_,xe);const t=Go.intersectObjects(ko,!1).find(n=>V_(n.object));sr=null;let e="";t&&t.object.userData.action&&(sr={...t.object.userData,module:Pu.get(t.object),point:t.point.clone()},e=ol.label(sr),e||(sr=null)),jt("prompt").innerHTML=e?`<kbd>E</kbd> ${Vs(e)}`:"",jt("use-label").textContent=e,jt("btn-use").classList.toggle("ready",!!e)}function X_(){sr&&ol.use(sr)}function hl(i){jt("card").innerHTML=i,jt("screen").classList.remove("hidden")}function q_(){jt("screen").classList.add("hidden")}function Du(){return fi.touchMode?`<div class="keys">Левая половина экрана — идти (палец далеко за круг — бежать).<br>
      Правая половина — осматриваться.<br>✋ — действие · 🔦 — фонарик · кнопка вверху слева — пауза</div>`:`<div class="keys">
    <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> или <kbd>↑</kbd> <kbd>↓</kbd> — ходить · <kbd>←</kbd> <kbd>→</kbd> — поворачиваться · <kbd>Shift</kbd> — быстрее<br>
    Смотреть: мышь или свайп двумя пальцами по трекпаду<br>
    <kbd>E</kbd> / <kbd>Пробел</kbd> / клик — действие · <kbd>F</kbd> — фонарик · <kbd>Esc</kbd> — пауза
  </div>`}function Iu(){const i=[];return k.endings.size&&i.push(`Концовок: ${k.endings.size} из ${Object.keys(Hs).length}`),k.notes.size&&i.push(`Записок: ${k.notes.size} из ${Zr.length}`),i.length?`<p class="sub">${i.join(" · ")}</p>`:""}function Y_(){k.mode="intro",hl(`
    <h1>ПАНЕЛЬКА</h1>
    <p class="sub">Двенадцатиэтажка · ночь</p>
    <p>Поздно. Лифт не работает. Ваша квартира — <b>${$r}</b>, на <b>${Js} этаже</b>.</p>
    <p>Осмотритесь и запомните, как выглядит этаж. Дальше подъезд начнёт меняться. Всё вокруг можно трогать.</p>
    <div class="rules">
      <p>Всё как обычно — поднимайтесь.</p>
      <p>Что-то не так — спускайтесь.</p>
      <p>Ошиблись — снова на 1 этаже.</p>
      <p>Не оставайтесь в темноте.</p>
    </div>
    ${Du()}
    ${Iu()}
    <button id="go">Войти в подъезд</button>`),jt("go").onclick=js}function $_(){return`<div class="settings">
    <label>Чувствительность обзора <input type="range" id="set-sens" min="0.3" max="2.5" step="0.1" value="${He.sens}"></label>
    <label>Громкость <input type="range" id="set-vol" min="0" max="1.5" step="0.05" value="${He.volume}"></label>
    ${fi.touchMode?"":`<label class="check"><input type="checkbox" id="set-inv" ${He.invertSwipe?"checked":""}> Обратный свайп по трекпаду</label>`}
    <label>Графика
      <select id="set-q">
        <option value="auto" ${He.quality==="auto"?"selected":""}>Авто (${Ri?"экономная":"полная"})</option>
        <option value="high" ${He.quality==="high"?"selected":""}>Полная</option>
        <option value="low" ${He.quality==="low"?"selected":""}>Экономная</option>
      </select>
    </label>
  </div>`}function Z_(){jt("set-sens").oninput=i=>{He.sens=+i.target.value,Ds()},jt("set-vol").oninput=i=>{He.volume=+i.target.value,Me.setVolume(He.volume),Ds()},jt("set-inv")&&(jt("set-inv").onchange=i=>{He.invertSwipe=i.target.checked,Ds()}),jt("set-q").onchange=i=>{He.quality=i.target.value,Ds(),confirm("Чтобы сменить графику, игра перезапустится. Продолжить?")&&location.reload()}}function J_(){if(k.mode!=="play")return;k.mode="pause",fi.reset();const i=k.current.special==="basement"?"Подвал":`Этаж ${k.current.floor}`;hl(`<h1>ПАУЗА</h1><p class="sub">${i} · ошибок: ${k.mistakes}</p>
    ${Iu()}${$_()}${Du()}
    <div class="row"><button id="go">Продолжить</button><button id="restart" class="ghost">Начать заново</button></div>`),Z_(),jt("go").onclick=js,jt("restart").onclick=()=>{ll(),js()}}function K_(i){const t=Math.floor(i/60),e=Math.floor(i%60);return`${t}:${String(e).padStart(2,"0")}`}function j_(i){if(k.mode==="end")return;k.mode="end",fi.reset(),Me.creak(xe.position),jt("fade").style.opacity=1,document.pointerLockElement&&(fi.hadLock=!1,document.exitPointerLock());const t=!k.endings.has(i);k.endings.add(i),gr.set("endings",[...k.endings]);const e=Hs[i],n=Object.entries(Hs).map(([r,s])=>`<li class="${k.endings.has(r)?"got":""}">${k.endings.has(r)?s.title:"???"}</li>`).join("");setTimeout(()=>{hl(`
      <h1>${e.title}</h1>
      <p class="sub">${t?"Новая концовка":"Концовка"} · ${k.endings.size} из ${Object.keys(Hs).length}</p>
      <p>${e.text}</p>
      <p class="stats">Время: <b>${K_(k.elapsed)}</b> · Ошибок: <b>${k.mistakes}</b> · Записок: <b>${k.notes.size} из ${Zr.length}</b></p>
      <ul class="endings">${n}</ul>
      <button id="go">Сыграть ещё раз</button>`),jt("go").onclick=()=>{ll(),jt("fade").style.opacity=0,js()}},1100)}function js(){var i;if(Me.start(),!k.audioReady&&Me.ok&&(k.hums=hi.map(t=>Me.hum(t.sound.lamp)),k.tvs=hi.map(t=>Me.tv(t.sound.tv)),ra(),k.audioReady=!0),q_(),jt("fade").style.opacity=0,k.mode="play",k.elapsed===0&&cl(),fi.touchMode){const t=document.documentElement;!document.fullscreenElement&&t.requestFullscreen&&t.requestFullscreen({navigationUI:"hide"}).catch(()=>{})}else Promise.resolve((i=Vr.requestPointerLock)==null?void 0:i.call(Vr)).catch(()=>{})}const fi=new C_({canvas:Vr,settings:He,isPlaying:()=>k.mode==="play",isReading:()=>k.mode==="read",onLook:(i,t)=>vn.look(i,t),onUse:X_,onFlash:()=>{ul(!k.flashOn),Me.click(xe.position)},onPause:J_,onClose:()=>Xn.close()});jt("reader").addEventListener("pointerdown",i=>{(i.pointerType!=="mouse"||!document.pointerLockElement)&&Xn.close()});vn.onStep=(i,t)=>{var e;Me.footstep(i,t),((e=k.current)==null?void 0:e.anomaly)==="footstepsBehind"&&setTimeout(()=>{const n=new I(0,0,2.4).applyQuaternion(xe.quaternion).add(xe.position);n.y=xe.position.y-1.4,Me.stepBehind(n)},330)};function Uu(){if(!innerWidth||!innerHeight)return;sn.setSize(innerWidth,innerHeight,!1);const i=innerWidth/innerHeight;xe.aspect=i,xe.fov=i>=1?72:Math.min(98,2*Math.atan(Math.tan(Bh.degToRad(33))/i)*180/Math.PI),xe.updateProjectionMatrix()}addEventListener("resize",Uu);let Ns=0,Ga=0,Ha=0,Dr=0,Ir=0;function Q_(i){Ns+=i,Ga++,!(Ns<1)&&(Ha=Ga/Ns,Ns=0,Ga=0,!(k.mode!=="play"||document.visibilityState!=="visible")&&(Ha<45?(Dr++,Ir=0):Ha>58?(Ir++,Dr=0):Dr=Ir=0,Dr>=2&&kn>.6&&(kn=Math.max(.6,kn-.2),sn.setPixelRatio(kn),Dr=0),Ir>=6&&kn<zo&&(kn=Math.min(zo,kn+.1),sn.setPixelRatio(kn),Ir=0)))}let Fc=performance.now();function Nu(i){requestAnimationFrame(Nu);const t=Math.min(.05,(i-Fc)/1e3);Fc=i;const e=k.mode==="play";e?(vn.update(t,fi.input()),vn.feetY>=ye-.01&&vn.z<0?Ic("up"):vn.feetY<=-ye+.01&&vn.z<0&&Ic("down"),k.elapsed+=t,z_(t),W_()):jt("prompt").textContent="",xe.updateMatrixWorld(),F_(t,e),O_(t,e),hi.forEach((n,r)=>n.update(t,{pos:xe.position,feetY:vn.feetY,sound:Me,isCurrent:r===2})),Me.update(t,xe),sn.render(si,xe),Q_(t)}async function tv(){await new Promise(i=>setTimeout(i,50)),Is=f_(sn),Dc=y_(Is),hi=[-2,-1,0,1,2].map(i=>b_(Dc,Is,i)),ko=[];for(const i of hi){Ri&&i.light.shadow.mapSize.set(256,256),si.add(i.group);for(const t of i.rayTargets)ko.push(t),Pu.set(t,i)}Ks=new Fg(16770760,4864556,.4),si.add(Ks),Xe=new Bg(15659775,0,16,.5,.55,2),Xe.castShadow=!0,Xe.shadow.mapSize.set(Ri?256:512,Ri?256:512),Xe.shadow.bias=-4e-4,Xe.shadow.normalBias=.02,Xe.shadow.camera.near=.1,Xe.shadow.autoUpdate=!1,Xe.map=Is.flashCookie,si.add(Xe,Xe.target),ol=P_({game:k,sound:Me,ui:Xn,pressSwitch:I_,endGame:j_,foundNote:G_,reapply:ra}),ll(),Uu(),sn.compile(si,xe),Y_(),requestAnimationFrame(Nu)}tv();
