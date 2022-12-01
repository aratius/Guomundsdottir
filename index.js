(() => {

  /**
   * @license
   * Copyright 2010-2022 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).THREE={})}(this,(function(t){"use strict";const e="147dev",i=100,n=300,r=301,s=302,a=303,o=304,l=306,c=1e3,h=1001,u=1002,d=1003,p=1004,m=1005,f=1006,g=1007,v=1008,x=1009,_=1012,y=1014,M=1015,b=1016,S=1020,w=1023,T=1026,A=1027,E=33776,C=33777,L=33778,R=33779,P=35840,I=35841,D=35842,N=35843,O=37492,z=37496,U=37808,B=37809,F=37810,k=37811,G=37812,V=37813,H=37814,W=37815,j=37816,q=37817,X=37818,Y=37819,Z=37820,J=37821,K=36492,$=2300,Q=2301,tt=2302,et=2400,it=2401,nt=2402,rt=2500,st=2501,at=3e3,ot=3001,lt="srgb",ct="srgb-linear",ht=7680,ut=35044,dt="300 es",pt=1035;class mt{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const i=this._listeners;void 0===i[t]&&(i[t]=[]),-1===i[t].indexOf(e)&&i[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1;const i=this._listeners;return void 0!==i[t]&&-1!==i[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const i=this._listeners[t];if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const i=e.slice(0);for(let e=0,n=i.length;e<n;e++)i[e].call(this,t);t.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gt=1234567;const vt=Math.PI/180,xt=180/Math.PI;function _t(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(ft[255&t]+ft[t>>8&255]+ft[t>>16&255]+ft[t>>24&255]+"-"+ft[255&e]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[63&i|128]+ft[i>>8&255]+"-"+ft[i>>16&255]+ft[i>>24&255]+ft[255&n]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function yt(t,e,i){return Math.max(e,Math.min(i,t))}function Mt(t,e){return(t%e+e)%e}function bt(t,e,i){return(1-i)*t+i*e}function St(t){return 0==(t&t-1)&&0!==t}function wt(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Tt(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function At(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Et(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error("Invalid component type.")}}var Ct=Object.freeze({__proto__:null,DEG2RAD:vt,RAD2DEG:xt,generateUUID:_t,clamp:yt,euclideanModulo:Mt,mapLinear:function(t,e,i,n,r){return n+(t-e)*(r-n)/(i-e)},inverseLerp:function(t,e,i){return t!==e?(i-t)/(e-t):0},lerp:bt,damp:function(t,e,i,n){return bt(t,e,1-Math.exp(-i*n))},pingpong:function(t,e=1){return e-Math.abs(Mt(t,2*e)-e)},smoothstep:function(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e))*t*(3-2*t)},smootherstep:function(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(gt=t);let e=gt+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*vt},radToDeg:function(t){return t*xt},isPowerOfTwo:St,ceilPowerOfTwo:wt,floorPowerOfTwo:Tt,setQuaternionFromProperEuler:function(t,e,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":t.set(o*h,l*u,l*d,o*c);break;case"YZY":t.set(l*d,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*d,o*h,o*c);break;case"XZX":t.set(o*h,l*m,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*m,o*c);break;case"ZYZ":t.set(l*m,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Et,denormalize:At});class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*i-s*n+t.x,this.y=r*n+s*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rt{constructor(){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,n,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=i,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],h=i[7],u=i[2],d=i[5],p=i[8],m=n[0],f=n[3],g=n[6],v=n[1],x=n[4],_=n[7],y=n[2],M=n[5],b=n[8];return r[0]=s*m+a*v+o*y,r[3]=s*f+a*x+o*M,r[6]=s*g+a*_+o*b,r[1]=l*m+c*v+h*y,r[4]=l*f+c*x+h*M,r[7]=l*g+c*_+h*b,r[2]=u*m+d*v+p*y,r[5]=u*f+d*x+p*M,r[8]=u*g+d*_+p*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-i*r*c+i*a*o+n*r*l-n*s*o}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,u=a*o-c*r,d=l*r-s*o,p=e*h+i*u+n*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return t[0]=h*m,t[1]=(n*l-c*i)*m,t[2]=(a*i-n*s)*m,t[3]=u*m,t[4]=(c*e-n*o)*m,t[5]=(n*r-a*e)*m,t[6]=d*m,t[7]=(i*o-l*e)*m,t[8]=(s*e-i*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(i*o,i*l,-i*(o*s+l*a)+s+t,-n*l,n*o,-n*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Pt.makeScale(t,e)),this}rotate(t){return this.premultiply(Pt.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pt.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let t=0;t<9;t++)if(e[t]!==i[t])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}const Pt=new Rt;function It(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}const Dt={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};function Nt(t,e){return new Dt[t](e)}function Ot(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zt(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Ut(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}const Bt={[lt]:{[ct]:zt},[ct]:{[lt]:Ut}},Ft={legacyMode:!0,get workingColorSpace(){return ct},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,i){if(this.legacyMode||e===i||!e||!i)return t;if(Bt[e]&&void 0!==Bt[e][i]){const n=Bt[e][i];return t.r=n(t.r),t.g=n(t.g),t.b=n(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},kt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={r:0,g:0,b:0},Vt={h:0,s:0,l:0},Ht={h:0,s:0,l:0};function Wt(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+6*(e-t)*(2/3-i):t}function jt(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===e&&void 0===i?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Ft.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Ft.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ft.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Ft.workingColorSpace){if(t=Mt(t,1),e=yt(e,0,1),i=yt(i,0,1),0===e)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+e):i+e-i*e,r=2*i-n;this.r=Wt(r,n,t+1/3),this.g=Wt(r,n,t),this.b=Wt(r,n,t-1/3)}return Ft.toWorkingColorSpace(this,n),this}setStyle(t,e="srgb"){function i(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let t;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(t[1],10))/255,this.g=Math.min(255,parseInt(t[2],10))/255,this.b=Math.min(255,parseInt(t[3],10))/255,Ft.toWorkingColorSpace(this,e),i(t[4]),this;if(t=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(t[1],10))/100,this.g=Math.min(100,parseInt(t[2],10))/100,this.b=Math.min(100,parseInt(t[3],10))/100,Ft.toWorkingColorSpace(this,e),i(t[4]),this;break;case"hsl":case"hsla":if(t=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const n=parseFloat(t[1])/360,r=parseFloat(t[2])/100,s=parseFloat(t[3])/100;return i(t[4]),this.setHSL(n,r,s,e)}}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const t=n[1],i=t.length;if(3===i)return this.r=parseInt(t.charAt(0)+t.charAt(0),16)/255,this.g=parseInt(t.charAt(1)+t.charAt(1),16)/255,this.b=parseInt(t.charAt(2)+t.charAt(2),16)/255,Ft.toWorkingColorSpace(this,e),this;if(6===i)return this.r=parseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=parseInt(t.charAt(2)+t.charAt(3),16)/255,this.b=parseInt(t.charAt(4)+t.charAt(5),16)/255,Ft.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e="srgb"){const i=kt[t.toLowerCase()];return void 0!==i?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zt(t.r),this.g=zt(t.g),this.b=zt(t.b),this}copyLinearToSRGB(t){return this.r=Ut(t.r),this.g=Ut(t.g),this.b=Ut(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Ft.fromWorkingColorSpace(jt(this,Gt),t),yt(255*Gt.r,0,255)<<16^yt(255*Gt.g,0,255)<<8^yt(255*Gt.b,0,255)<<0}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ft.workingColorSpace){Ft.fromWorkingColorSpace(jt(this,Gt),e);const i=Gt.r,n=Gt.g,r=Gt.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const t=s-a;switch(l=c<=.5?t/(s+a):t/(2-s-a),s){case i:o=(n-r)/t+(n<r?6:0);break;case n:o=(r-i)/t+2;break;case r:o=(i-n)/t+4}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(jt(this,Gt),e),t.r=Gt.r,t.g=Gt.g,t.b=Gt.b,t}getStyle(t="srgb"){return Ft.fromWorkingColorSpace(jt(this,Gt),t),t!==lt?`color(${t} ${Gt.r} ${Gt.g} ${Gt.b})`:`rgb(${255*Gt.r|0},${255*Gt.g|0},${255*Gt.b|0})`}offsetHSL(t,e,i){return this.getHSL(Vt),Vt.h+=t,Vt.s+=e,Vt.l+=i,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Vt),t.getHSL(Ht);const i=bt(Vt.h,Ht.h,e),n=bt(Vt.s,Ht.s,e),r=bt(Vt.l,Ht.l,e);return this.setHSL(i,n,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let Xt;qt.NAMES=kt;class Yt{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===Xt&&(Xt=Ot("canvas")),Xt.width=t.width,Xt.height=t.height;const i=Xt.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Xt}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=Ot("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let t=0;t<r.length;t++)r[t]=255*zt(r[t]/255);return i.putImageData(n,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*zt(e[t]/255)):e[t]=zt(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Zt{constructor(t=null){this.isSource=!0,this.uuid=_t(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(null!==n){let t;if(Array.isArray(n)){t=[];for(let e=0,i=n.length;e<i;e++)n[e].isDataTexture?t.push(Jt(n[e].image)):t.push(Jt(n[e]))}else t=Jt(n);i.url=t}return e||(t.images[this.uuid]=i),i}}function Jt(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?Yt.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kt=0;class $t extends mt{constructor(t=$t.DEFAULT_IMAGE,e=$t.DEFAULT_MAPPING,i=1001,n=1001,r=1006,s=1008,a=1023,o=1009,l=$t.DEFAULT_ANISOTROPY,c=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=_t(),this.name="",this.source=new Zt(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==n)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case c:t.x=t.x-Math.floor(t.x);break;case h:t.x=t.x<0?0:1;break;case u:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case c:t.y=t.y-Math.floor(t.y);break;case h:t.y=t.y<0?0:1;break;case u:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null,$t.DEFAULT_MAPPING=n,$t.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,i=0,n=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*e+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*e+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*e+s[7]*i+s[11]*n+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const s=.01,a=.1,o=t.elements,l=o[0],c=o[4],h=o[8],u=o[1],d=o[5],p=o[9],m=o[2],f=o[6],g=o[10];if(Math.abs(c-u)<s&&Math.abs(h-m)<s&&Math.abs(p-f)<s){if(Math.abs(c+u)<a&&Math.abs(h+m)<a&&Math.abs(p+f)<a&&Math.abs(l+d+g-3)<a)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,o=(d+1)/2,v=(g+1)/2,x=(c+u)/4,_=(h+m)/4,y=(p+f)/4;return t>o&&t>v?t<s?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(t),n=x/i,r=_/i):o>v?o<s?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(o),i=x/n,r=y/n):v<s?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(v),i=_/r,n=y/r),this.set(i,n,r,e),this}let v=Math.sqrt((f-p)*(f-p)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(v)<.001&&(v=1),this.x=(f-p)/v,this.y=(h-m)/v,this.z=(u-c)/v,this.w=Math.acos((l+d+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class te extends mt{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const n={width:t,height:e,depth:1};this.texture=new $t(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==i.generateMipmaps&&i.generateMipmaps,this.texture.internalFormat=void 0!==i.internalFormat?i.internalFormat:null,this.texture.minFilter=void 0!==i.minFilter?i.minFilter:f,this.depthBuffer=void 0===i.depthBuffer||i.depthBuffer,this.stencilBuffer=void 0!==i.stencilBuffer&&i.stencilBuffer,this.depthTexture=void 0!==i.depthTexture?i.depthTexture:null,this.samples=void 0!==i.samples?i.samples:0}setSize(t,e,i=1){this.width===t&&this.height===e&&this.depth===i||(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zt(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ee extends $t{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=d,this.minFilter=d,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ie extends $t{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=d,this.minFilter=d,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ne{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,s,a){let o=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3];const u=r[s+0],d=r[s+1],p=r[s+2],m=r[s+3];if(0===a)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===a)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=m);if(h!==m||o!==u||l!==d||c!==p){let t=1-a;const e=o*u+l*d+c*p+h*m,i=e>=0?1:-1,n=1-e*e;if(n>Number.EPSILON){const r=Math.sqrt(n),s=Math.atan2(r,e*i);t=Math.sin(t*s)/r,a=Math.sin(a*s)/r}const r=a*i;if(o=o*t+u*r,l=l*t+d*r,c=c*t+p*r,h=h*t+m*r,t===1-a){const t=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=t,l*=t,c*=t,h*=t}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,s){const a=i[n],o=i[n+1],l=i[n+2],c=i[n+3],h=r[s],u=r[s+1],d=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*d-l*u,t[e+1]=o*p+c*u+l*h-a*d,t[e+2]=l*p+c*d+a*u-o*h,t[e+3]=c*p-a*h-o*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(i/2),c=a(n/2),h=a(r/2),u=o(i/2),d=o(n/2),p=o(r/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=i+a+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-o)*t,this._y=(r-l)*t,this._z=(s-n)*t}else if(i>a&&i>h){const t=2*Math.sqrt(1+i-a-h);this._w=(c-o)/t,this._x=.25*t,this._y=(n+s)/t,this._z=(r+l)/t}else if(a>h){const t=2*Math.sqrt(1+a-i-h);this._w=(r-l)/t,this._x=(n+s)/t,this._y=.25*t,this._z=(o+c)/t}else{const t=2*Math.sqrt(1+h-i-a);this._w=(s-n)/t,this._x=(r+l)/t,this._y=(o+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(0===i)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=i*c+s*a+n*l-r*o,this._y=n*c+s*o+r*a-i*l,this._z=r*c+s*l+i*o-n*a,this._w=s*c-i*a-n*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const i=this._x,n=this._y,r=this._z,s=this._w;let a=s*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*i+e*this._x,this._y=t*n+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,e=0,i=0){re.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return void 0===i&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ae.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ae.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,s=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=o*e+s*n-a*i,c=o*i+a*e-r*n,h=o*n+r*i-s*e,u=-r*e-s*i-a*n;return this.x=l*o+u*-r+c*-a-h*-s,this.y=c*o+u*-s+h*-r-l*-a,this.z=h*o+u*-a+l*-s-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=n*o-r*a,this.y=r*s-i*o,this.z=i*a-n*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return se.copy(this).projectOnVector(t),this.sub(se)}reflect(t){return this.sub(se.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=2*(Math.random()-.5),e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const se=new re,ae=new ne;class oe{constructor(t=new re(1/0,1/0,1/0),e=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,n=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=t.length;o<l;o+=3){const l=t[o],c=t[o+1],h=t[o+2];l<e&&(e=l),c<i&&(i=c),h<n&&(n=h),l>r&&(r=l),c>s&&(s=c),h>a&&(a=h)}return this.min.set(e,i,n),this.max.set(r,s,a),this}setFromBufferAttribute(t){let e=1/0,i=1/0,n=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=t.count;o<l;o++){const l=t.getX(o),c=t.getY(o),h=t.getZ(o);l<e&&(e=l),c<i&&(i=c),h<n&&(n=h),l>r&&(r=l),c>s&&(s=c),h>a&&(a=h)}return this.min.set(e,i,n),this.max.set(r,s,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ce.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(void 0!==i)if(e&&null!=i.attributes&&void 0!==i.attributes.position){const e=i.attributes.position;for(let i=0,n=e.count;i<n;i++)ce.fromBufferAttribute(e,i).applyMatrix4(t.matrixWorld),this.expandByPoint(ce)}else null===i.bounceingBox&&i.computebounceingBox(),he.copy(i.bounceingBox),he.applyMatrix4(t.matrixWorld),this.union(he);const n=t.children;for(let t=0,i=n.length;t<i;t++)this.expandByObject(n[t],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ce),ce.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ve),xe.subVectors(this.max,ve),ue.subVectors(t.a,ve),de.subVectors(t.b,ve),pe.subVectors(t.c,ve),me.subVectors(de,ue),fe.subVectors(pe,de),ge.subVectors(ue,pe);let e=[0,-me.z,me.y,0,-fe.z,fe.y,0,-ge.z,ge.y,me.z,0,-me.x,fe.z,0,-fe.x,ge.z,0,-ge.x,-me.y,me.x,0,-fe.y,fe.x,0,-ge.y,ge.x,0];return!!Me(e,ue,de,pe,xe)&&(e=[1,0,0,0,1,0,0,0,1],!!Me(e,ue,de,pe,xe)&&(_e.crossVectors(me,fe),e=[_e.x,_e.y,_e.z],Me(e,ue,de,pe,xe)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return ce.copy(t).clamp(this.min,this.max).sub(t).length()}getbounceingSphere(t){return this.getCenter(t.center),t.radius=.5*this.getSize(ce).length(),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(le[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),le[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),le[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),le[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),le[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),le[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),le[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),le[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(le)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const le=[new re,new re,new re,new re,new re,new re,new re,new re],ce=new re,he=new oe,ue=new re,de=new re,pe=new re,me=new re,fe=new re,ge=new re,ve=new re,xe=new re,_e=new re,ye=new re;function Me(t,e,i,n,r){for(let s=0,a=t.length-3;s<=a;s+=3){ye.fromArray(t,s);const a=r.x*Math.abs(ye.x)+r.y*Math.abs(ye.y)+r.z*Math.abs(ye.z),o=e.dot(ye),l=i.dot(ye),c=n.dot(ye);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const be=new oe,Se=new re,we=new re;class Te{constructor(t=new re,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;void 0!==e?i.copy(e):be.setFromPoints(t).getCenter(i);let n=0;for(let e=0,r=t.length;e<r;e++)n=Math.max(n,i.distanceToSquared(t[e]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getbounceingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Se.subVectors(t,this.center);const e=Se.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=.5*(t-this.radius);this.center.addScaledVector(Se,i/t),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(we.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Se.copy(t.center).add(we)),this.expandByPoint(Se.copy(t.center).sub(we))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const Ae=new re,Ee=new re,Ce=new re,Le=new re,Re=new re,Pe=new re,Ie=new re;class De{constructor(t=new re,e=new re(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ae)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ae.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ae.copy(this.direction).multiplyScalar(e).add(this.origin),Ae.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ee.copy(t).add(e).multiplyScalar(.5),Ce.copy(e).sub(t).normalize(),Le.copy(this.origin).sub(Ee);const r=.5*t.distanceTo(e),s=-this.direction.dot(Ce),a=Le.dot(this.direction),o=-Le.dot(Ce),l=Le.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*o-a,u=s*a-o,p=r*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*a)+u*(s*h+u+2*o)+l}else u=r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-p?(h=Math.max(0,-(-s*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=p?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(s*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=s>0?-r:r,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*o)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),n&&n.copy(Ce).multiplyScalar(u).add(Ee),d}intersectSphere(t,e){Ae.subVectors(t.center,this.origin);const i=Ae.dot(this.direction),n=Ae.dot(Ae)-i*i,r=t.radius*t.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return a<0&&o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return null===i?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);if(0===e)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(r=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),i>s||r>n?null:((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(a=(t.min.z-u.z)*h,o=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,o=(t.min.z-u.z)*h),i>o||a>n?null:((a>i||i!=i)&&(i=a),(o<n||n!=n)&&(n=o),n<0?null:this.at(i>=0?i:n,e)))}intersectsBox(t){return null!==this.intersectBox(t,Ae)}intersectTriangle(t,e,i,n,r){Re.subVectors(e,t),Pe.subVectors(i,t),Ie.crossVectors(Re,Pe);let s,a=this.direction.dot(Ie);if(a>0){if(n)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Le.subVectors(this.origin,t);const o=s*this.direction.dot(Pe.crossVectors(Le,Pe));if(o<0)return null;const l=s*this.direction.dot(Re.cross(Le));if(l<0)return null;if(o+l>a)return null;const c=-s*Le.dot(Ie);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class Ne{constructor(){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,n,r,s,a,o,l,c,h,u,d,p,m,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=m,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new Ne).fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/Oe.setFromMatrixColumn(t,0).length(),r=1/Oe.setFromMatrixColumn(t,1).length(),s=1/Oe.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*s,e[9]=i[9]*s,e[10]=i[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,s=Math.cos(i),a=Math.sin(i),o=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=s*c,i=s*h,n=a*c,r=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=i+n*l,e[5]=t-r*l,e[9]=-a*o,e[2]=r-t*l,e[6]=n+i*l,e[10]=s*o}else if("YXZ"===t.order){const t=o*c,i=o*h,n=l*c,r=l*h;e[0]=t+r*a,e[4]=n*a-i,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=i*a-n,e[6]=r+t*a,e[10]=s*o}else if("ZXY"===t.order){const t=o*c,i=o*h,n=l*c,r=l*h;e[0]=t-r*a,e[4]=-s*h,e[8]=n+i*a,e[1]=i+n*a,e[5]=s*c,e[9]=r-t*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if("ZYX"===t.order){const t=s*c,i=s*h,n=a*c,r=a*h;e[0]=o*c,e[4]=n*l-i,e[8]=t*l+r,e[1]=o*h,e[5]=r*l+t,e[9]=i*l-n,e[2]=-l,e[6]=a*o,e[10]=s*o}else if("YZX"===t.order){const t=s*o,i=s*l,n=a*o,r=a*l;e[0]=o*c,e[4]=r-t*h,e[8]=n*h+i,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=i*h+n,e[10]=t-r*h}else if("XZY"===t.order){const t=s*o,i=s*l,n=a*o,r=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=s*c,e[9]=i*h-n,e[2]=n*h-i,e[6]=a*c,e[10]=r*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ue,t,Be)}lookAt(t,e,i){const n=this.elements;return Ge.subVectors(t,e),0===Ge.lengthSq()&&(Ge.z=1),Ge.normalize(),Fe.crossVectors(i,Ge),0===Fe.lengthSq()&&(1===Math.abs(i.z)?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Fe.crossVectors(i,Ge)),Fe.normalize(),ke.crossVectors(Ge,Fe),n[0]=Fe.x,n[4]=ke.x,n[8]=Ge.x,n[1]=Fe.y,n[5]=ke.y,n[9]=Ge.y,n[2]=Fe.z,n[6]=ke.z,n[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,s=i[0],a=i[4],o=i[8],l=i[12],c=i[1],h=i[5],u=i[9],d=i[13],p=i[2],m=i[6],f=i[10],g=i[14],v=i[3],x=i[7],_=i[11],y=i[15],M=n[0],b=n[4],S=n[8],w=n[12],T=n[1],A=n[5],E=n[9],C=n[13],L=n[2],R=n[6],P=n[10],I=n[14],D=n[3],N=n[7],O=n[11],z=n[15];return r[0]=s*M+a*T+o*L+l*D,r[4]=s*b+a*A+o*R+l*N,r[8]=s*S+a*E+o*P+l*O,r[12]=s*w+a*C+o*I+l*z,r[1]=c*M+h*T+u*L+d*D,r[5]=c*b+h*A+u*R+d*N,r[9]=c*S+h*E+u*P+d*O,r[13]=c*w+h*C+u*I+d*z,r[2]=p*M+m*T+f*L+g*D,r[6]=p*b+m*A+f*R+g*N,r[10]=p*S+m*E+f*P+g*O,r[14]=p*w+m*C+f*I+g*z,r[3]=v*M+x*T+_*L+y*D,r[7]=v*b+x*A+_*R+y*N,r[11]=v*S+x*E+_*P+y*O,r[15]=v*w+x*C+_*I+y*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*o*h-n*l*h-r*a*u+i*l*u+n*a*d-i*o*d)+t[7]*(+e*o*d-e*l*u+r*s*u-n*s*d+n*l*c-r*o*c)+t[11]*(+e*l*h-e*a*d-r*s*h+i*s*d+r*a*c-i*l*c)+t[15]*(-n*a*c-e*o*h+e*a*u+n*s*h-i*s*u+i*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],m=t[13],f=t[14],g=t[15],v=h*f*l-m*u*l+m*o*d-a*f*d-h*o*g+a*u*g,x=p*u*l-c*f*l-p*o*d+s*f*d+c*o*g-s*u*g,_=c*m*l-p*h*l+p*a*d-s*m*d-c*a*g+s*h*g,y=p*h*o-c*m*o-p*a*u+s*m*u+c*a*f-s*h*f,M=e*v+i*x+n*_+r*y;if(0===M)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=v*b,t[1]=(m*u*r-h*f*r-m*n*d+i*f*d+h*n*g-i*u*g)*b,t[2]=(a*f*r-m*o*r+m*n*l-i*f*l-a*n*g+i*o*g)*b,t[3]=(h*o*r-a*u*r-h*n*l+i*u*l+a*n*d-i*o*d)*b,t[4]=x*b,t[5]=(c*f*r-p*u*r+p*n*d-e*f*d-c*n*g+e*u*g)*b,t[6]=(p*o*r-s*f*r-p*n*l+e*f*l+s*n*g-e*o*g)*b,t[7]=(s*u*r-c*o*r+c*n*l-e*u*l-s*n*d+e*o*d)*b,t[8]=_*b,t[9]=(p*h*r-c*m*r-p*i*d+e*m*d+c*i*g-e*h*g)*b,t[10]=(s*m*r-p*a*r+p*i*l-e*m*l-s*i*g+e*a*g)*b,t[11]=(c*a*r-s*h*r-c*i*l+e*h*l+s*i*d-e*a*d)*b,t[12]=y*b,t[13]=(c*m*n-p*h*n+p*i*u-e*m*u-c*i*f+e*h*f)*b,t[14]=(p*a*n-s*m*n-p*i*o+e*m*o+s*i*f-e*a*f)*b,t[15]=(s*h*n-c*a*n+c*i*o-e*h*o-s*i*u+e*a*u)*b,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+i,l*a-n*o,l*o+n*a,0,l*a+n*o,c*a+i,c*o-n*s,0,l*o-n*a,c*o+n*s,r*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,s){return this.set(1,i,r,0,t,1,s,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,u=r*l,d=r*c,p=r*h,m=s*c,f=s*h,g=a*h,v=o*l,x=o*c,_=o*h,y=i.x,M=i.y,b=i.z;return n[0]=(1-(m+g))*y,n[1]=(d+_)*y,n[2]=(p-x)*y,n[3]=0,n[4]=(d-_)*M,n[5]=(1-(u+g))*M,n[6]=(f+v)*M,n[7]=0,n[8]=(p+x)*b,n[9]=(f-v)*b,n[10]=(1-(u+m))*b,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=Oe.set(n[0],n[1],n[2]).length();const s=Oe.set(n[4],n[5],n[6]).length(),a=Oe.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],ze.copy(this);const o=1/r,l=1/s,c=1/a;return ze.elements[0]*=o,ze.elements[1]*=o,ze.elements[2]*=o,ze.elements[4]*=l,ze.elements[5]*=l,ze.elements[6]*=l,ze.elements[8]*=c,ze.elements[9]*=c,ze.elements[10]*=c,e.setFromRotationMatrix(ze),i.x=r,i.y=s,i.z=a,this}makePerspective(t,e,i,n,r,s){const a=this.elements,o=2*r/(e-t),l=2*r/(i-n),c=(e+t)/(e-t),h=(i+n)/(i-n),u=-(s+r)/(s-r),d=-2*s*r/(s-r);return a[0]=o,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,n,r,s){const a=this.elements,o=1/(e-t),l=1/(i-n),c=1/(s-r),h=(e+t)*o,u=(i+n)*l,d=(s+r)*c;return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let t=0;t<16;t++)if(e[t]!==i[t])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Oe=new re,ze=new Ne,Ue=new re(0,0,0),Be=new re(1,1,1),Fe=new re,ke=new re,Ge=new re,Ve=new Ne,He=new ne;class We{constructor(t=0,e=0,i=0,n=We.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],s=n[4],a=n[8],o=n[1],l=n[5],c=n[9],h=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!0===i&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ve.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ve,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return He.setFromEuler(this),this.setFromQuaternion(He,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}We.DefaultOrder="XYZ",We.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class je{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return 0!=(this.mask&t.mask)}isEnabled(t){return 0!=(this.mask&(1<<t|0))}}let qe=0;const Xe=new re,Ye=new ne,Ze=new Ne,Je=new re,Ke=new re,$e=new re,Qe=new ne,ti=new re(1,0,0),ei=new re(0,1,0),ii=new re(0,0,1),ni={type:"added"},ri={type:"removed"};class si extends mt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qe++}),this.uuid=_t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DefaultUp.clone();const t=new re,e=new We,i=new ne,n=new re(1,1,1);e._onChange((function(){i.setFromEuler(e,!1)})),i._onChange((function(){e.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Rt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=si.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=si.DefaultMatrixWorldAutoUpdate,this.layers=new je,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ye.setFromAxisAngle(t,e),this.quaternion.multiply(Ye),this}rotateOnWorldAxis(t,e){return Ye.setFromAxisAngle(t,e),this.quaternion.premultiply(Ye),this}rotateX(t){return this.rotateOnAxis(ti,t)}rotateY(t){return this.rotateOnAxis(ei,t)}rotateZ(t){return this.rotateOnAxis(ii,t)}translateOnAxis(t,e){return Xe.copy(t).applyQuaternion(this.quaternion),this.position.add(Xe.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ti,t)}translateY(t){return this.translateOnAxis(ei,t)}translateZ(t){return this.translateOnAxis(ii,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Je.copy(t):Je.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Ke.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ze.lookAt(Ke,Je,this.up):Ze.lookAt(Je,Ke,this.up),this.quaternion.setFromRotationMatrix(Ze),n&&(Ze.extractRotation(n.matrixWorld),Ye.setFromRotationMatrix(Ze),this.quaternion.premultiply(Ye.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ni)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ri)),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ri)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ze),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const n=this.children[i].getObjectByProperty(t,e);if(void 0!==n)return n}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ke,t,$e),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ke,Qe,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const n=e[i];!0!==n.matrixWorldAutoUpdate&&!0!==t||n.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(!0===t&&null!==i&&!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,i=t.length;e<i;e++){const i=t[e];!0===i.matrixWorldAutoUpdate&&i.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=void 0===t||"string"==typeof t,i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};function r(e,i){return void 0===e[i.uuid]&&(e[i.uuid]=i.toJSON(t)),i.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(n.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const i=e.shapes;if(Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const n=i[e];r(t.shapes,n)}else r(t.shapes,i)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let i=0,n=this.material.length;i<n;i++)e.push(r(t.materials,this.material[i]));n.material=e}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let e=0;e<this.children.length;e++)n.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let e=0;e<this.animations.length;e++){const i=this.animations[e];n.animations.push(r(t.animations,i))}}if(e){const e=s(t.geometries),n=s(t.materials),r=s(t.textures),a=s(t.images),o=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(i.geometries=e),n.length>0&&(i.materials=n),r.length>0&&(i.textures=r),a.length>0&&(i.images=a),o.length>0&&(i.shapes=o),l.length>0&&(i.skeletons=l),c.length>0&&(i.animations=c),h.length>0&&(i.nodes=h)}return i.object=n,i;function s(t){const e=[];for(const i in t){const n=t[i];delete n.metadata,e.push(n)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}}si.DefaultUp=new re(0,1,0),si.DefaultMatrixAutoUpdate=!0,si.DefaultMatrixWorldAutoUpdate=!0;const ai=new re,oi=new re,li=new re,ci=new re,hi=new re,ui=new re,di=new re,pi=new re,mi=new re,fi=new re;class gi{constructor(t=new re,e=new re,i=new re){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ai.subVectors(t,e),n.cross(ai);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){ai.subVectors(n,e),oi.subVectors(i,e),li.subVectors(t,e);const s=ai.dot(ai),a=ai.dot(oi),o=ai.dot(li),l=oi.dot(oi),c=oi.dot(li),h=s*l-a*a;if(0===h)return r.set(-2,-1,-1);const u=1/h,d=(l*o-a*c)*u,p=(s*c-a*o)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(t,e,i,n,r,s,a,o){return this.getBarycoord(t,e,i,n,ci),o.set(0,0),o.addScaledVector(r,ci.x),o.addScaledVector(s,ci.y),o.addScaledVector(a,ci.z),o}static isFrontFacing(t,e,i,n){return ai.subVectors(i,e),oi.subVectors(t,e),ai.cross(oi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),.5*ai.cross(oi).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gi.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return gi.getUV(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let s,a;hi.subVectors(n,i),ui.subVectors(r,i),pi.subVectors(t,i);const o=hi.dot(pi),l=ui.dot(pi);if(o<=0&&l<=0)return e.copy(i);mi.subVectors(t,n);const c=hi.dot(mi),h=ui.dot(mi);if(c>=0&&h<=c)return e.copy(n);const u=o*h-c*l;if(u<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(i).addScaledVector(hi,s);fi.subVectors(t,r);const d=hi.dot(fi),p=ui.dot(fi);if(p>=0&&d<=p)return e.copy(r);const m=d*l-o*p;if(m<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(ui,a);const f=c*p-d*h;if(f<=0&&h-c>=0&&d-p>=0)return di.subVectors(r,n),a=(h-c)/(h-c+(d-p)),e.copy(n).addScaledVector(di,a);const g=1/(f+m+u);return s=m*g,a=u*g,e.copy(i).addScaledVector(hi,s).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let vi=0;class xi extends mt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vi++}),this.uuid=_t(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ht,this.stencilZFail=ht,this.stencilZPass=ht,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const i=t[e];if(void 0===i){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const n=this[e];void 0!==n?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i:console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.")}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function n(t){const e=[];for(const i in t){const n=t[i];delete n.metadata,e.push(n)}return e}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),void 0!==this.roughness&&(i.roughness=this.roughness),void 0!==this.metalness&&(i.metalness=this.metalness),void 0!==this.sheen&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(i.shininess=this.shininess),void 0!==this.clearcoat&&(i.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(i.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(i.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(i.combine=this.combine)),void 0!==this.envMapIntensity&&(i.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(i.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(i.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(i.size=this.size),null!==this.shadowSide&&(i.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(i.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(i.blending=this.blending),0!==this.side&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),!0===this.transparent&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(i.rotation=this.rotation),!0===this.polygonOffset&&(i.polygonOffset=!0),0!==this.polygonOffsetFactor&&(i.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(i.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(i.linewidth=this.linewidth),void 0!==this.dashSize&&(i.dashSize=this.dashSize),void 0!==this.gapSize&&(i.gapSize=this.gapSize),void 0!==this.scale&&(i.scale=this.scale),!0===this.dithering&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(i.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(i.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(i.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(i.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(i.flatShading=this.flatShading),!1===this.visible&&(i.visible=!1),!1===this.toneMapped&&(i.toneMapped=!1),!1===this.fog&&(i.fog=!1),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),e){const e=n(t.textures),r=n(t.images);e.length>0&&(i.textures=e),r.length>0&&(i.images=r)}return i}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(null!==e){const t=e.length;i=new Array(t);for(let n=0;n!==t;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}}class _i extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yi=new re,Mi=new Lt;class bi{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=!0===i,this.usage=ut,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,i=this.count;e<i;e++)Mi.fromBufferAttribute(this,e),Mi.applyMatrix3(t),this.setXY(e,Mi.x,Mi.y);else if(3===this.itemSize)for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix3(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix4(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyNormalMatrix(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.transformDirection(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=At(e,this.array)),e}setX(t,e){return this.normalized&&(e=Et(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=At(e,this.array)),e}setY(t,e){return this.normalized&&(e=Et(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=At(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Et(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=At(e,this.array)),e}setW(t,e){return this.normalized&&(e=Et(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array),n=Et(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(t.name=this.name),this.usage!==ut&&(t.usage=this.usage),0===this.updateRange.offset&&-1===this.updateRange.count||(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Si extends bi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wi extends bi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ti extends bi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ai=0;const Ei=new Ne,Ci=new si,Li=new re,Ri=new oe,Pi=new oe,Ii=new re;class Di extends mt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ai++}),this.uuid=_t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.bounceingBox=null,this.bounceingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(It(t)?wi:Si)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(void 0!==i){const e=(new Rt).getNormalMatrix(t);i.applyNormalMatrix(e),i.needsUpdate=!0}const n=this.attributes.tangent;return void 0!==n&&(n.transformDirection(t),n.needsUpdate=!0),null!==this.bounceingBox&&this.computebounceingBox(),null!==this.bounceingSphere&&this.computebounceingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,i){return Ei.makeTranslation(t,e,i),this.applyMatrix4(Ei),this}scale(t,e,i){return Ei.makeScale(t,e,i),this.applyMatrix4(Ei),this}lookAt(t){return Ci.lookAt(t),Ci.updateMatrix(),this.applyMatrix4(Ci.matrix),this}center(){return this.computebounceingBox(),this.bounceingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const n=t[i];e.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Ti(e,3)),this}computebounceingBox(){null===this.bounceingBox&&(this.bounceingBox=new oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computebounceingBox(): GLBufferAttribute requires a manual bounceing box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.bounceingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));if(void 0!==t){if(this.bounceingBox.setFromBufferAttribute(t),e)for(let t=0,i=e.length;t<i;t++){const i=e[t];Ri.setFromBufferAttribute(i),this.morphTargetsRelative?(Ii.addVectors(this.bounceingBox.min,Ri.min),this.bounceingBox.expandByPoint(Ii),Ii.addVectors(this.bounceingBox.max,Ri.max),this.bounceingBox.expandByPoint(Ii)):(this.bounceingBox.expandByPoint(Ri.min),this.bounceingBox.expandByPoint(Ri.max))}}else this.bounceingBox.makeEmpty();(isNaN(this.bounceingBox.min.x)||isNaN(this.bounceingBox.min.y)||isNaN(this.bounceingBox.min.z))&&console.error('THREE.BufferGeometry.computebounceingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computebounceingSphere(){null===this.bounceingSphere&&(this.bounceingSphere=new Te);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computebounceingSphere(): GLBufferAttribute requires a manual bounceing sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.bounceingSphere.set(new re,1/0);if(t){const i=this.bounceingSphere.center;if(Ri.setFromBufferAttribute(t),e)for(let t=0,i=e.length;t<i;t++){const i=e[t];Pi.setFromBufferAttribute(i),this.morphTargetsRelative?(Ii.addVectors(Ri.min,Pi.min),Ri.expandByPoint(Ii),Ii.addVectors(Ri.max,Pi.max),Ri.expandByPoint(Ii)):(Ri.expandByPoint(Pi.min),Ri.expandByPoint(Pi.max))}Ri.getCenter(i);let n=0;for(let e=0,r=t.count;e<r;e++)Ii.fromBufferAttribute(t,e),n=Math.max(n,i.distanceToSquared(Ii));if(e)for(let r=0,s=e.length;r<s;r++){const s=e[r],a=this.morphTargetsRelative;for(let e=0,r=s.count;e<r;e++)Ii.fromBufferAttribute(s,e),a&&(Li.fromBufferAttribute(t,e),Ii.add(Li)),n=Math.max(n,i.distanceToSquared(Ii))}this.bounceingSphere.radius=Math.sqrt(n),isNaN(this.bounceingSphere.radius)&&console.error('THREE.BufferGeometry.computebounceingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const i=t.array,n=e.position.array,r=e.normal.array,s=e.uv.array,a=n.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new bi(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,l=[],c=[];for(let t=0;t<a;t++)l[t]=new re,c[t]=new re;const h=new re,u=new re,d=new re,p=new Lt,m=new Lt,f=new Lt,g=new re,v=new re;function x(t,e,i){h.fromArray(n,3*t),u.fromArray(n,3*e),d.fromArray(n,3*i),p.fromArray(s,2*t),m.fromArray(s,2*e),f.fromArray(s,2*i),u.sub(h),d.sub(h),m.sub(p),f.sub(p);const r=1/(m.x*f.y-f.x*m.y);isFinite(r)&&(g.copy(u).multiplyScalar(f.y).addScaledVector(d,-m.y).multiplyScalar(r),v.copy(d).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(r),l[t].add(g),l[e].add(g),l[i].add(g),c[t].add(v),c[e].add(v),c[i].add(v))}let _=this.groups;0===_.length&&(_=[{start:0,count:i.length}]);for(let t=0,e=_.length;t<e;++t){const e=_[t],n=e.start;for(let t=n,r=n+e.count;t<r;t+=3)x(i[t+0],i[t+1],i[t+2])}const y=new re,M=new re,b=new re,S=new re;function w(t){b.fromArray(r,3*t),S.copy(b);const e=l[t];y.copy(e),y.sub(b.multiplyScalar(b.dot(e))).normalize(),M.crossVectors(S,e);const i=M.dot(c[t])<0?-1:1;o[4*t]=y.x,o[4*t+1]=y.y,o[4*t+2]=y.z,o[4*t+3]=i}for(let t=0,e=_.length;t<e;++t){const e=_[t],n=e.start;for(let t=n,r=n+e.count;t<r;t+=3)w(i[t+0]),w(i[t+1]),w(i[t+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let i=this.getAttribute("normal");if(void 0===i)i=new bi(new Float32Array(3*e.count),3),this.setAttribute("normal",i);else for(let t=0,e=i.count;t<e;t++)i.setXYZ(t,0,0,0);const n=new re,r=new re,s=new re,a=new re,o=new re,l=new re,c=new re,h=new re;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,d),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),a.fromBufferAttribute(i,d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,m),a.add(c),o.add(c),l.add(c),i.setXYZ(d,a.x,a.y,a.z),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let t=0,a=e.count;t<a;t+=3)n.fromBufferAttribute(e,t+0),r.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,r),h.subVectors(n,r),c.cross(h),i.setXYZ(t+0,c.x,c.y,c.z),i.setXYZ(t+1,c.x,c.y,c.z),i.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ii.fromBufferAttribute(t,e),Ii.normalize(),t.setXYZ(e,Ii.x,Ii.y,Ii.z)}toNonIndexed(){function t(t,e){const i=t.array,n=t.itemSize,r=t.normalized,s=new i.constructor(e.length*n);let a=0,o=0;for(let r=0,l=e.length;r<l;r++){a=t.isInterleavedBufferAttribute?e[r]*t.data.stride+t.offset:e[r]*n;for(let t=0;t<n;t++)s[o++]=i[a++]}return new bi(s,n,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Di,i=this.index.array,n=this.attributes;for(const r in n){const s=t(n[r],i);e.setAttribute(r,s)}const r=this.morphAttributes;for(const n in r){const s=[],a=r[n];for(let e=0,n=a.length;e<n;e++){const n=t(a[e],i);s.push(n)}e.morphAttributes[n]=s}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,i=s.length;t<i;t++){const i=s[t];e.addGroup(i.start,i.count,i.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const i in e)void 0!==e[i]&&(t[i]=e[i]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const e in i){const n=i[e];t.data.attributes[e]=n.toJSON(t.data)}const n={};let r=!1;for(const e in this.morphAttributes){const i=this.morphAttributes[e],s=[];for(let e=0,n=i.length;e<n;e++){const n=i[e];s.push(n.toJSON(t.data))}s.length>0&&(n[e]=s,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.bounceingSphere;return null!==a&&(t.data.bounceingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.bounceingBox=null,this.bounceingSphere=null;const e={};this.name=t.name;const i=t.index;null!==i&&this.setIndex(i.clone(e));const n=t.attributes;for(const t in n){const i=n[t];this.setAttribute(t,i.clone(e))}const r=t.morphAttributes;for(const t in r){const i=[],n=r[t];for(let t=0,r=n.length;t<r;t++)i.push(n[t].clone(e));this.morphAttributes[t]=i}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex)}const a=t.bounceingBox;null!==a&&(this.bounceingBox=a.clone());const o=t.bounceingSphere;return null!==o&&(this.bounceingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,void 0!==t.parameters&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ni=new Ne,Oi=new De,zi=new Te,Ui=new re,Bi=new re,Fi=new re,ki=new re,Gi=new re,Vi=new re,Hi=new re,Wi=new re,ji=new re,qi=new Lt,Xi=new Lt,Yi=new Lt,Zi=new re,Ji=new re;class Ki extends si{constructor(t=new Di,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=i.length;t<e;t++){const e=i[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;if(void 0===n)return;if(null===i.bounceingSphere&&i.computebounceingSphere(),zi.copy(i.bounceingSphere),zi.applyMatrix4(r),!1===t.ray.intersectsSphere(zi))return;if(Ni.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Ni),null!==i.bounceingBox&&!1===Oi.intersectsBox(i.bounceingBox))return;let s;const a=i.index,o=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative,h=i.attributes.uv,u=i.attributes.uv2,d=i.groups,p=i.drawRange;if(null!==a)if(Array.isArray(n))for(let i=0,r=d.length;i<r;i++){const r=d[i],m=n[r.materialIndex];for(let i=Math.max(r.start,p.start),n=Math.min(a.count,Math.min(r.start+r.count,p.start+p.count));i<n;i+=3){const n=a.getX(i),d=a.getX(i+1),p=a.getX(i+2);s=$i(this,m,t,Oi,o,l,c,h,u,n,d,p),s&&(s.faceIndex=Math.floor(i/3),s.face.materialIndex=r.materialIndex,e.push(s))}}else{for(let i=Math.max(0,p.start),r=Math.min(a.count,p.start+p.count);i<r;i+=3){const r=a.getX(i),d=a.getX(i+1),p=a.getX(i+2);s=$i(this,n,t,Oi,o,l,c,h,u,r,d,p),s&&(s.faceIndex=Math.floor(i/3),e.push(s))}}else if(void 0!==o)if(Array.isArray(n))for(let i=0,r=d.length;i<r;i++){const r=d[i],a=n[r.materialIndex];for(let i=Math.max(r.start,p.start),n=Math.min(o.count,Math.min(r.start+r.count,p.start+p.count));i<n;i+=3){s=$i(this,a,t,Oi,o,l,c,h,u,i,i+1,i+2),s&&(s.faceIndex=Math.floor(i/3),s.face.materialIndex=r.materialIndex,e.push(s))}}else{for(let i=Math.max(0,p.start),r=Math.min(o.count,p.start+p.count);i<r;i+=3){s=$i(this,n,t,Oi,o,l,c,h,u,i,i+1,i+2),s&&(s.faceIndex=Math.floor(i/3),e.push(s))}}}}function $i(t,e,i,n,r,s,a,o,l,c,h,u){Ui.fromBufferAttribute(r,c),Bi.fromBufferAttribute(r,h),Fi.fromBufferAttribute(r,u);const d=t.morphTargetInfluences;if(s&&d){Hi.set(0,0,0),Wi.set(0,0,0),ji.set(0,0,0);for(let t=0,e=s.length;t<e;t++){const e=d[t],i=s[t];0!==e&&(ki.fromBufferAttribute(i,c),Gi.fromBufferAttribute(i,h),Vi.fromBufferAttribute(i,u),a?(Hi.addScaledVector(ki,e),Wi.addScaledVector(Gi,e),ji.addScaledVector(Vi,e)):(Hi.addScaledVector(ki.sub(Ui),e),Wi.addScaledVector(Gi.sub(Bi),e),ji.addScaledVector(Vi.sub(Fi),e)))}Ui.add(Hi),Bi.add(Wi),Fi.add(ji)}t.isSkinnedMesh&&(t.boneTransform(c,Ui),t.boneTransform(h,Bi),t.boneTransform(u,Fi));const p=function(t,e,i,n,r,s,a,o){let l;if(l=1===e.side?n.intersectTriangle(a,s,r,!0,o):n.intersectTriangle(r,s,a,2!==e.side,o),null===l)return null;Ji.copy(o),Ji.applyMatrix4(t.matrixWorld);const c=i.ray.origin.distanceTo(Ji);return c<i.near||c>i.far?null:{distance:c,point:Ji.clone(),object:t}}(t,e,i,n,Ui,Bi,Fi,Zi);if(p){o&&(qi.fromBufferAttribute(o,c),Xi.fromBufferAttribute(o,h),Yi.fromBufferAttribute(o,u),p.uv=gi.getUV(Zi,Ui,Bi,Fi,qi,Xi,Yi,new Lt)),l&&(qi.fromBufferAttribute(l,c),Xi.fromBufferAttribute(l,h),Yi.fromBufferAttribute(l,u),p.uv2=gi.getUV(Zi,Ui,Bi,Fi,qi,Xi,Yi,new Lt));const t={a:c,b:h,c:u,normal:new re,materialIndex:0};gi.getNormal(Ui,Bi,Fi,t.normal),p.face=t}return p}class Qi extends Di{constructor(t=1,e=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const a=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,i,n,r,s,p,m,f,g,v){const x=s/f,_=p/g,y=s/2,M=p/2,b=m/2,S=f+1,w=g+1;let T=0,A=0;const E=new re;for(let s=0;s<w;s++){const a=s*_-M;for(let o=0;o<S;o++){const u=o*x-y;E[t]=u*n,E[e]=a*r,E[i]=b,l.push(E.x,E.y,E.z),E[t]=0,E[e]=0,E[i]=m>0?1:-1,c.push(E.x,E.y,E.z),h.push(o/f),h.push(1-s/g),T+=1}}for(let t=0;t<g;t++)for(let e=0;e<f;e++){const i=u+e+S*t,n=u+e+S*(t+1),r=u+(e+1)+S*(t+1),s=u+(e+1)+S*t;o.push(i,n,s),o.push(n,r,s),A+=6}a.addGroup(d,A,v),d+=A,u+=T}p("z","y","x",-1,-1,i,e,t,s,r,0),p("z","y","x",1,-1,i,e,-t,s,r,1),p("x","z","y",1,1,t,i,e,n,s,2),p("x","z","y",1,-1,t,i,-e,n,s,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(o),this.setAttribute("position",new Ti(l,3)),this.setAttribute("normal",new Ti(c,3)),this.setAttribute("uv",new Ti(h,2))}static fromJSON(t){return new Qi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tn(t){const e={};for(const i in t){e[i]={};for(const n in t[i]){const r=t[i][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[i][n]=r.clone():Array.isArray(r)?e[i][n]=r.slice():e[i][n]=r}}return e}function en(t){const e={};for(let i=0;i<t.length;i++){const n=tn(t[i]);for(const t in n)e[t]=n[t]}return e}function nn(t){return null===t.getRenderTarget()&&t.outputEncoding===ot?lt:ct}const rn={clone:tn,merge:en};class sn extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tn(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const n=this.uniforms[i].value;n&&n.isTexture?e.uniforms[i]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[i]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[i]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[i]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[i]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[i]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[i]={type:"m4",value:n.toArray()}:e.uniforms[i]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const t in this.extensions)!0===this.extensions[t]&&(i[t]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class an extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}class on extends an{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*xt*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*vt*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*xt*Math.atan(Math.tan(.5*vt*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*vt*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,a=s.fullHeight;r+=s.offsetX*n/t,e-=s.offsetY*i/a,n*=s.width/t,i*=s.height/a}const a=this.filmOffset;0!==a&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ln=-90;class cn extends si{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new on(ln,1,t,e);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const r=new on(ln,1,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const s=new on(ln,1,t,e);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(0,1,0),this.add(s);const a=new on(ln,1,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const o=new on(ln,1,t,e);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const l=new on(ln,1,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){null===this.parent&&this.updateMatrixWorld();const i=this.renderTarget,[n,r,s,a,o,l]=this.children,c=t.getRenderTarget(),h=t.toneMapping,u=t.xr.enabled;t.toneMapping=0,t.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,s),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,o),i.texture.generateMipmaps=d,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(c),t.toneMapping=h,t.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class hn extends $t{constructor(t,e,i,n,s,a,o,l,c,h){super(t=void 0!==t?t:[],e=void 0!==e?e:r,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class un extends te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new hn(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:f}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:"\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"},n=new Qi(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:tn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Ki(n,r),a=e.minFilter;e.minFilter===v&&(e.minFilter=f);return new cn(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,n);t.setRenderTarget(r)}}const dn=new re,pn=new re,mn=new Rt;class fn{constructor(t=new re(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=dn.subVectors(i,e).cross(pn.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(dn),n=this.normal.dot(i);if(0===n)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mn.getNormalMatrix(t),n=this.coplanarPoint(dn).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const gn=new Te,vn=new re;class xn{constructor(t=new fn,e=new fn,i=new fn,n=new fn,r=new fn,s=new fn){this.planes=[t,e,i,n,r,s]}set(t,e,i,n,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],l=i[5],c=i[6],h=i[7],u=i[8],d=i[9],p=i[10],m=i[11],f=i[12],g=i[13],v=i[14],x=i[15];return e[0].setComponents(a-n,h-o,m-u,x-f).normalize(),e[1].setComponents(a+n,h+o,m+u,x+f).normalize(),e[2].setComponents(a+r,h+l,m+d,x+g).normalize(),e[3].setComponents(a-r,h-l,m-d,x-g).normalize(),e[4].setComponents(a-s,h-c,m-p,x-v).normalize(),e[5].setComponents(a+s,h+c,m+p,x+v).normalize(),this}intersectsObject(t){const e=t.geometry;return null===e.bounceingSphere&&e.computebounceingSphere(),gn.copy(e.bounceingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSprite(t){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let t=0;t<6;t++){if(e[t].distanceToPoint(i)<n)return!1}return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(vn.x=n.normal.x>0?t.max.x:t.min.x,vn.y=n.normal.y>0?t.max.y:t.min.y,vn.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(vn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function _n(){let t=null,e=!1,i=null,n=null;function r(e,s){i(e,s),n=t.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==i&&(n=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(t){i=t},setContext:function(e){t=e}}}function yn(t,e){const i=e.isWebGL2,n=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),n.get(t)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const i=n.get(e);i&&(t.deleteBuffer(i.buffer),n.delete(e))},update:function(e,r){if(e.isGLBufferAttribute){const t=n.get(e);return void((!t||t.version<e.version)&&n.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const s=n.get(e);void 0===s?n.set(e,function(e,n){const r=e.array,s=e.usage,a=t.createBuffer();let o;if(t.bindBuffer(n,a),t.bufferData(n,r,s),e.onUploadCallback(),r instanceof Float32Array)o=5126;else if(r instanceof Uint16Array)if(e.isFloat16BufferAttribute){if(!i)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");o=5131}else o=5123;else if(r instanceof Int16Array)o=5122;else if(r instanceof Uint32Array)o=5125;else if(r instanceof Int32Array)o=5124;else if(r instanceof Int8Array)o=5120;else if(r instanceof Uint8Array)o=5121;else{if(!(r instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);o=5121}return{buffer:a,type:o,bytesPerElement:r.BYTES_PER_ELEMENT,version:e.version}}(e,r)):s.version<e.version&&(!function(e,n,r){const s=n.array,a=n.updateRange;t.bindBuffer(r,e),-1===a.count?t.bufferSubData(r,0,s):(i?t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):t.bufferSubData(r,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),n.onUploadCallback()}(s.buffer,e,r),s.version=e.version)}}}class Mn extends Di{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,s=e/2,a=Math.floor(i),o=Math.floor(n),l=a+1,c=o+1,h=t/a,u=e/o,d=[],p=[],m=[],f=[];for(let t=0;t<c;t++){const e=t*u-s;for(let i=0;i<l;i++){const n=i*h-r;p.push(n,-e,0),m.push(0,0,1),f.push(i/a),f.push(1-t/o)}}for(let t=0;t<o;t++)for(let e=0;e<a;e++){const i=e+l*t,n=e+l*(t+1),r=e+1+l*(t+1),s=e+1+l*t;d.push(i,n,s),d.push(n,r,s)}this.setIndex(d),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(m,3)),this.setAttribute("uv",new Ti(f,2))}static fromJSON(t){return new Mn(t.width,t.height,t.widthSegments,t.heightSegments)}}const bn={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",alphatest_pars_fragment:"#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n\t\tfloat x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n\t\tfloat x2 = x * x;\n\t\tfloat x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n\t\treturn ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",iridescence_fragment:"#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,\t0.0556434,\n\t\t-1.5371385,\t1.8760108, -0.2040259,\n\t\t-0.4985314,\t0.0415560,\t1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",color_vertex:"#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",common:"#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",fog_vertex:"#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_fragment:"LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",lights_lambert_pars_fragment:"varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",map_fragment:"#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphcolor_vertex:"#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",normal_fragment_begin:"float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",normal_pars_fragment:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_pars_vertex:"#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",normal_vertex:"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",clearcoat_normal_fragment_begin:"#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",iridescence_pars_fragment:"#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",output_fragment:"#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",shadowmap_pars_vertex:"#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",shadowmap_vertex:"#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",transmission_fragment:"#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif",transmission_pars_fragment:"#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",background_frag:"uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",backgroundCube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",backgroundCube_frag:"#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshlambert_vert:"#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshlambert_frag:"#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshnormal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",meshnormal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",shadow_vert:"#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"},Sn={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rt},uv2Transform:{value:new Rt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rt}}},wn={basic:{uniforms:en([Sn.common,Sn.specularmap,Sn.envmap,Sn.aomap,Sn.lightmap,Sn.fog]),vertexShader:bn.meshbasic_vert,fragmentShader:bn.meshbasic_frag},lambert:{uniforms:en([Sn.common,Sn.specularmap,Sn.envmap,Sn.aomap,Sn.lightmap,Sn.emissivemap,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,Sn.fog,Sn.lights,{emissive:{value:new qt(0)}}]),vertexShader:bn.meshlambert_vert,fragmentShader:bn.meshlambert_frag},phong:{uniforms:en([Sn.common,Sn.specularmap,Sn.envmap,Sn.aomap,Sn.lightmap,Sn.emissivemap,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,Sn.fog,Sn.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:bn.meshphong_vert,fragmentShader:bn.meshphong_frag},standard:{uniforms:en([Sn.common,Sn.envmap,Sn.aomap,Sn.lightmap,Sn.emissivemap,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,Sn.roughnessmap,Sn.metalnessmap,Sn.fog,Sn.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bn.meshphysical_vert,fragmentShader:bn.meshphysical_frag},toon:{uniforms:en([Sn.common,Sn.aomap,Sn.lightmap,Sn.emissivemap,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,Sn.gradientmap,Sn.fog,Sn.lights,{emissive:{value:new qt(0)}}]),vertexShader:bn.meshtoon_vert,fragmentShader:bn.meshtoon_frag},matcap:{uniforms:en([Sn.common,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,Sn.fog,{matcap:{value:null}}]),vertexShader:bn.meshmatcap_vert,fragmentShader:bn.meshmatcap_frag},points:{uniforms:en([Sn.points,Sn.fog]),vertexShader:bn.points_vert,fragmentShader:bn.points_frag},dashed:{uniforms:en([Sn.common,Sn.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bn.linedashed_vert,fragmentShader:bn.linedashed_frag},depth:{uniforms:en([Sn.common,Sn.displacementmap]),vertexShader:bn.depth_vert,fragmentShader:bn.depth_frag},normal:{uniforms:en([Sn.common,Sn.bumpmap,Sn.normalmap,Sn.displacementmap,{opacity:{value:1}}]),vertexShader:bn.meshnormal_vert,fragmentShader:bn.meshnormal_frag},sprite:{uniforms:en([Sn.sprite,Sn.fog]),vertexShader:bn.sprite_vert,fragmentShader:bn.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bn.background_vert,fragmentShader:bn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bn.backgroundCube_vert,fragmentShader:bn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bn.cube_vert,fragmentShader:bn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bn.equirect_vert,fragmentShader:bn.equirect_frag},distanceRGBA:{uniforms:en([Sn.common,Sn.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bn.distanceRGBA_vert,fragmentShader:bn.distanceRGBA_frag},shadow:{uniforms:en([Sn.lights,Sn.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:bn.shadow_vert,fragmentShader:bn.shadow_frag}};wn.physical={uniforms:en([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bn.meshphysical_vert,fragmentShader:bn.meshphysical_frag};const Tn={r:0,b:0,g:0};function An(t,e,i,n,r,s,a){const o=new qt(0);let c,h,u=!0===s?0:1,d=null,p=0,m=null;function f(e,i){e.getRGB(Tn,nn(t)),n.buffers.color.setClear(Tn.r,Tn.g,Tn.b,i,a)}return{getClearColor:function(){return o},setClearColor:function(t,e=1){o.set(t),u=e,f(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(t){u=t,f(o,u)},render:function(n,s){let a=!1,g=!0===s.isScene?s.background:null;if(g&&g.isTexture){g=(s.backgroundBlurriness>0?i:e).get(g)}const v=t.xr,x=v.getSession&&v.getSession();x&&"additive"===x.environmentBlendMode&&(g=null),null===g?f(o,u):g&&g.isColor&&(f(g,1),a=!0),(t.autoClear||a)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===l)?(void 0===h&&(h=new Ki(new Qi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:tn(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(t,e,i){this.matrixWorld.copyPosition(i.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&!1===g.isRenderTargetTexture?-1:1,h.material.uniforms.backgroundBlurriness.value=s.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=s.backgroundIntensity,d===g&&p===g.version&&m===t.toneMapping||(h.material.needsUpdate=!0,d=g,p=g.version,m=t.toneMapping),h.layers.enableAll(),n.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(void 0===c&&(c=new Ki(new Mn(2,2),new sn({name:"BackgroundMaterial",uniforms:tn(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=s.backgroundIntensity,!0===g.matrixAutoUpdate&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),d===g&&p===g.version&&m===t.toneMapping||(c.material.needsUpdate=!0,d=g,p=g.version,m=t.toneMapping),c.layers.enableAll(),n.unshift(c,c.geometry,c.material,0,0,null))}}}function En(t,e,i,n){const r=t.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||null!==s,o={},l=p(null);let c=l,h=!1;function u(e){return n.isWebGL2?t.bindVertexArray(e):s.bindVertexArrayOES(e)}function d(e){return n.isWebGL2?t.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(t){const e=[],i=[],n=[];for(let t=0;t<r;t++)e[t]=0,i[t]=0,n[t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:i,attributeDivisors:n,object:t,attributes:{},index:null}}function m(){const t=c.newAttributes;for(let e=0,i=t.length;e<i;e++)t[e]=0}function f(t){g(t,0)}function g(i,r){const s=c.newAttributes,a=c.enabledAttributes,o=c.attributeDivisors;if(s[i]=1,0===a[i]&&(t.enableVertexAttribArray(i),a[i]=1),o[i]!==r){(n.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](i,r),o[i]=r}}function v(){const e=c.newAttributes,i=c.enabledAttributes;for(let n=0,r=i.length;n<r;n++)i[n]!==e[n]&&(t.disableVertexAttribArray(n),i[n]=0)}function x(e,i,r,s,a,o){!0!==n.isWebGL2||5124!==r&&5125!==r?t.vertexAttribPointer(e,i,r,s,a,o):t.vertexAttribIPointer(e,i,r,a,o)}function _(){y(),h=!0,c!==l&&(c=l,u(c.object))}function y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,d,_,y){let M=!1;if(a){const e=function(e,i,r){const a=!0===r.wireframe;let l=o[e.id];void 0===l&&(l={},o[e.id]=l);let c=l[i.id];void 0===c&&(c={},l[i.id]=c);let h=c[a];void 0===h&&(h=p(n.isWebGL2?t.createVertexArray():s.createVertexArrayOES()),c[a]=h);return h}(_,d,l);c!==e&&(c=e,u(c.object)),M=function(t,e,i,n){const r=c.attributes,s=e.attributes;let a=0;const o=i.getAttributes();for(const e in o){if(o[e].location>=0){const i=r[e];let n=s[e];if(void 0===n&&("instanceMatrix"===e&&t.instanceMatrix&&(n=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(n=t.instanceColor)),void 0===i)return!0;if(i.attribute!==n)return!0;if(n&&i.data!==n.data)return!0;a++}}return c.attributesNum!==a||c.index!==n}(r,_,d,y),M&&function(t,e,i,n){const r={},s=e.attributes;let a=0;const o=i.getAttributes();for(const e in o){if(o[e].location>=0){let i=s[e];void 0===i&&("instanceMatrix"===e&&t.instanceMatrix&&(i=t.instanceMatrix),"instanceColor"===e&&t.instanceColor&&(i=t.instanceColor));const n={};n.attribute=i,i&&i.data&&(n.data=i.data),r[e]=n,a++}}c.attributes=r,c.attributesNum=a,c.index=n}(r,_,d,y)}else{const t=!0===l.wireframe;c.geometry===_.id&&c.program===d.id&&c.wireframe===t||(c.geometry=_.id,c.program=d.id,c.wireframe=t,M=!0)}null!==y&&i.update(y,34963),(M||h)&&(h=!1,function(r,s,a,o){if(!1===n.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;m();const l=o.attributes,c=a.getAttributes(),h=s.defaultAttributeValues;for(const e in c){const n=c[e];if(n.location>=0){let s=l[e];if(void 0===s&&("instanceMatrix"===e&&r.instanceMatrix&&(s=r.instanceMatrix),"instanceColor"===e&&r.instanceColor&&(s=r.instanceColor)),void 0!==s){const e=s.normalized,a=s.itemSize,l=i.get(s);if(void 0===l)continue;const c=l.buffer,h=l.type,u=l.bytesPerElement;if(s.isInterleavedBufferAttribute){const i=s.data,l=i.stride,d=s.offset;if(i.isInstancedInterleavedBuffer){for(let t=0;t<n.locationSize;t++)g(n.location+t,i.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=i.meshPerAttribute*i.count)}else for(let t=0;t<n.locationSize;t++)f(n.location+t);t.bindBuffer(34962,c);for(let t=0;t<n.locationSize;t++)x(n.location+t,a/n.locationSize,h,e,l*u,(d+a/n.locationSize*t)*u)}else{if(s.isInstancedBufferAttribute){for(let t=0;t<n.locationSize;t++)g(n.location+t,s.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let t=0;t<n.locationSize;t++)f(n.location+t);t.bindBuffer(34962,c);for(let t=0;t<n.locationSize;t++)x(n.location+t,a/n.locationSize,h,e,a*u,a/n.locationSize*t*u)}}else if(void 0!==h){const i=h[e];if(void 0!==i)switch(i.length){case 2:t.vertexAttrib2fv(n.location,i);break;case 3:t.vertexAttrib3fv(n.location,i);break;case 4:t.vertexAttrib4fv(n.location,i);break;default:t.vertexAttrib1fv(n.location,i)}}}}v()}(r,l,d,_),null!==y&&t.bindBuffer(34963,i.get(y).buffer))},reset:_,resetDefaultState:y,dispose:function(){_();for(const t in o){const e=o[t];for(const t in e){const i=e[t];for(const t in i)d(i[t].object),delete i[t];delete e[t]}delete o[t]}},releaseStatesOfGeometry:function(t){if(void 0===o[t.id])return;const e=o[t.id];for(const t in e){const i=e[t];for(const t in i)d(i[t].object),delete i[t];delete e[t]}delete o[t.id]},releaseStatesOfProgram:function(t){for(const e in o){const i=o[e];if(void 0===i[t.id])continue;const n=i[t.id];for(const t in n)d(n[t].object),delete n[t];delete i[t.id]}},initAttributes:m,enableAttribute:f,disableUnusedAttributes:v}}function Cn(t,e,i,n){const r=n.isWebGL2;let s;this.setMode=function(t){s=t},this.render=function(e,n){t.drawArrays(s,e,n),i.update(n,s,1)},this.renderInstances=function(n,a,o){if(0===o)return;let l,c;if(r)l=t,c="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",null===l)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[c](s,n,a,o),i.update(a,s,o)}}function Ln(t,e,i){let n;function r(e){if("highp"===e){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";e="mediump"}return"mediump"===e&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s="undefined"!=typeof WebGL2RenderingContext&&t instanceof WebGL2RenderingContext||"undefined"!=typeof WebGL2ComputeRenderingContext&&t instanceof WebGL2ComputeRenderingContext;let a=void 0!==i.precision?i.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=s||e.has("WEBGL_draw_buffers"),c=!0===i.logarithmicDepthBuffer,h=t.getParameter(34930),u=t.getParameter(35660),d=t.getParameter(3379),p=t.getParameter(34076),m=t.getParameter(34921),f=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=u>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==n)return n;if(!0===e.has("EXT_texture_filter_anisotropic")){const i=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:x&&_,maxSamples:s?t.getParameter(36183):0}}function Rn(t){const e=this;let i=null,n=0,r=!1,s=!1;const a=new fn,o=new Rt,l={value:null,needsUpdate:!1};function c(){l.value!==i&&(l.value=i,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(t,i,n,r){const s=null!==t?t.length:0;let c=null;if(0!==s){if(c=l.value,!0!==r||null===c){const e=n+4*s,r=i.matrixWorldInverse;o.getNormalMatrix(r),(null===c||c.length<e)&&(c=new Float32Array(e));for(let e=0,i=n;e!==s;++e,i+=4)a.copy(t[e]).applyMatrix4(r,o),a.normal.toArray(c,i),c[i+3]=a.constant}l.value=c,l.needsUpdate=!0}return e.numPlanes=s,e.numIntersection=0,c}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(t,e,s){const a=0!==t.length||e||0!==n||r;return r=e,i=h(t,s,0),n=t.length,a},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(e,a,o){const u=e.clippingPlanes,d=e.clipIntersection,p=e.clipShadows,m=t.get(e);if(!r||null===u||0===u.length||s&&!p)s?h(null):c();else{const t=s?0:n,e=4*t;let r=m.clippingState||null;l.value=r,r=h(u,a,e,o);for(let t=0;t!==e;++t)r[t]=i[t];m.clippingState=r,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=t}}}function Pn(t){let e=new WeakMap;function i(t,e){return e===a?t.mapping=r:e===o&&(t.mapping=s),t}function n(t){const i=t.target;i.removeEventListener("dispose",n);const r=e.get(i);void 0!==r&&(e.delete(i),r.dispose())}return{get:function(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){const s=r.mapping;if(s===a||s===o){if(e.has(r)){return i(e.get(r).texture,r.mapping)}{const s=r.image;if(s&&s.height>0){const a=new un(s.height/2);return a.fromEquirectangularTexture(t,r),e.set(r,a),r.addEventListener("dispose",n),i(a.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}class In extends an{constructor(t=-1,e=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=null===t.view?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,s=i+t,a=n+e,o=n-e;if(null!==this.view&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=t*this.view.offsetX,s=r+t*this.view.width,a-=e*this.view.offsetY,o=a-e*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}}const Dn=[.125,.215,.35,.446,.526,.582],Nn=20,On=new In,zn=new qt;let Un=null;const Bn=(1+Math.sqrt(5))/2,Fn=1/Bn,kn=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,Bn,Fn),new re(0,Bn,-Fn),new re(Fn,0,Bn),new re(-Fn,0,Bn),new re(Bn,Fn,0),new re(-Bn,Fn,0)];class Gn{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Un=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=jn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=Wn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Un),t.scissorTest=!1,Hn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===r||t.mapping===s?this._setSize(0===t.image.length?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Un=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:f,minFilter:f,generateMipmaps:!1,type:b,format:w,encoding:at,depthBuffer:!1},n=Vn(t,e,i);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==t){null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=Vn(t,e,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(t){const e=[],i=[],n=[];let r=t;const s=t-4+1+Dn.length;for(let a=0;a<s;a++){const s=Math.pow(2,r);i.push(s);let o=1/s;a>t-4?o=Dn[a-t+4-1]:0===a&&(o=0),n.push(o);const l=1/(s-2),c=-l,h=1+l,u=[c,c,h,c,h,h,c,c,h,h,c,h],d=6,p=6,m=3,f=2,g=1,v=new Float32Array(m*p*d),x=new Float32Array(f*p*d),_=new Float32Array(g*p*d);for(let t=0;t<d;t++){const e=t%3*2/3-1,i=t>2?0:-1,n=[e,i,0,e+2/3,i,0,e+2/3,i+1,0,e,i,0,e+2/3,i+1,0,e,i+1,0];v.set(n,m*p*t),x.set(u,f*p*t);const r=[t,t,t,t,t,t];_.set(r,g*p*t)}const y=new Di;y.setAttribute("position",new bi(v,m)),y.setAttribute("uv",new bi(x,f)),y.setAttribute("faceIndex",new bi(_,g)),e.push(y),r>4&&r--}return{lodPlanes:e,sizeLods:i,sigmas:n}}(n)),this._blurMaterial=function(t,e,i){const n=new Float32Array(Nn),r=new re(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qn(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}(n,t,e)}return n}_compileMaterial(t){const e=new Ki(this._lodPlanes[0],t);this._renderer.compile(e,On)}_sceneToCubeUV(t,e,i,n){const r=new on(90,1,e,i),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,c=o.toneMapping;o.getClearColor(zn),o.toneMapping=0,o.autoClear=!1;const h=new _i({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Ki(new Qi,h);let d=!1;const p=t.background;p?p.isColor&&(h.color.copy(p),t.background=null,d=!0):(h.color.copy(zn),d=!0);for(let e=0;e<6;e++){const i=e%3;0===i?(r.up.set(0,s[e],0),r.lookAt(a[e],0,0)):1===i?(r.up.set(0,0,s[e]),r.lookAt(0,a[e],0)):(r.up.set(0,s[e],0),r.lookAt(0,0,a[e]));const l=this._cubeSize;Hn(n,i*l,e>2?l:0,l,l),o.setRenderTarget(n),d&&o.render(u,r),o.render(t,r)}u.geometry.dispose(),u.material.dispose(),o.toneMapping=c,o.autoClear=l,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===r||t.mapping===s;n?(null===this._cubemapMaterial&&(this._cubemapMaterial=jn()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===t.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=Wn());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Ki(this._lodPlanes[0],a);a.uniforms.envMap.value=t;const l=this._cubeSize;Hn(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,On)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const i=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),n=kn[(e-1)%kn.length];this._blur(t,e-1,e,i,n)}e.autoClear=i}_blur(t,e,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,i,n,"latitudinal",r),this._halfBlur(s,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,s,a){const o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new Ki(this._lodPlanes[n],l),h=l.uniforms,u=this._sizeLods[i]-1,d=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,p=r/d,m=isFinite(r)?1+Math.floor(3*p):Nn;m>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);const f=[];let g=0;for(let t=0;t<Nn;++t){const e=t/p,i=Math.exp(-e*e/2);f.push(i),0===t?g+=i:t<m&&(g+=2*i)}for(let t=0;t<f.length;t++)f[t]=f[t]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value="latitudinal"===s,a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=d,h.mipInt.value=v-i;const x=this._sizeLods[n];Hn(e,3*x*(n>v-4?n-v+4:0),4*(this._cubeSize-x),3*x,2*x),o.setRenderTarget(e),o.render(c,On)}}function Vn(t,e,i){const n=new te(t,e,i);return n.texture.mapping=l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hn(t,e,i,n,r){t.viewport.set(e,i,n,r),t.scissor.set(e,i,n,r)}function Wn(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qn(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function jn(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qn(),fragmentShader:"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",blending:0,depthTest:!1,depthWrite:!1})}function qn(){return"\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"}function Xn(t){let e=new WeakMap,i=null;function n(t){const i=t.target;i.removeEventListener("dispose",n);const r=e.get(i);void 0!==r&&(e.delete(i),r.dispose())}return{get:function(l){if(l&&l.isTexture){const c=l.mapping,h=c===a||c===o,u=c===r||c===s;if(h||u){if(l.isRenderTargetTexture&&!0===l.needsPMREMUpdate){l.needsPMREMUpdate=!1;let n=e.get(l);return null===i&&(i=new Gn(t)),n=h?i.fromEquirectangular(l,n):i.fromCubemap(l,n),e.set(l,n),n.texture}if(e.has(l))return e.get(l).texture;{const r=l.image;if(h&&r&&r.height>0||u&&r&&function(t){let e=0;const i=6;for(let n=0;n<i;n++)void 0!==t[n]&&e++;return e===i}(r)){null===i&&(i=new Gn(t));const r=h?i.fromEquirectangular(l):i.fromCubemap(l);return e.set(l,r),l.addEventListener("dispose",n),r.texture}return null}}}return l},dispose:function(){e=new WeakMap,null!==i&&(i.dispose(),i=null)}}}function Yn(t){const e={};function i(i){if(void 0!==e[i])return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(t){return null!==i(t)},init:function(t){t.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(t){const e=i(t);return null===e&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function Zn(t,e,i,n){const r={},s=new WeakMap;function a(t){const o=t.target;null!==o.index&&e.remove(o.index);for(const t in o.attributes)e.remove(o.attributes[t]);o.removeEventListener("dispose",a),delete r[o.id];const l=s.get(o);l&&(e.remove(l),s.delete(o)),n.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,i.memory.geometries--}function o(t){const i=[],n=t.index,r=t.attributes.position;let a=0;if(null!==n){const t=n.array;a=n.version;for(let e=0,n=t.length;e<n;e+=3){const n=t[e+0],r=t[e+1],s=t[e+2];i.push(n,r,r,s,s,n)}}else{const t=r.array;a=r.version;for(let e=0,n=t.length/3-1;e<n;e+=3){const t=e+0,n=e+1,r=e+2;i.push(t,n,n,r,r,t)}}const o=new(It(i)?wi:Si)(i,1);o.version=a;const l=s.get(t);l&&e.remove(l),s.set(t,o)}return{get:function(t,e){return!0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,i.memory.geometries++),e},update:function(t){const i=t.attributes;for(const t in i)e.update(i[t],34962);const n=t.morphAttributes;for(const t in n){const i=n[t];for(let t=0,n=i.length;t<n;t++)e.update(i[t],34962)}},getWireframeAttribute:function(t){const e=s.get(t);if(e){const i=t.index;null!==i&&e.version<i.version&&o(t)}else o(t);return s.get(t)}}}function Jn(t,e,i,n){const r=n.isWebGL2;let s,a,o;this.setMode=function(t){s=t},this.setIndex=function(t){a=t.type,o=t.bytesPerElement},this.render=function(e,n){t.drawElements(s,n,a,e*o),i.update(n,s,1)},this.renderInstances=function(n,l,c){if(0===c)return;let h,u;if(r)h=t,u="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",null===h)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[u](s,l,a,n*o,c),i.update(l,s,c)}}function Kn(t){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case 4:e.triangles+=n*(t/3);break;case 1:e.lines+=n*(t/2);break;case 3:e.lines+=n*(t-1);break;case 2:e.lines+=n*t;break;case 0:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function $n(t,e){return t[0]-e[0]}function Qn(t,e){return Math.abs(e[1])-Math.abs(t[1])}function tr(t,e,i){const n={},r=new Float32Array(8),s=new WeakMap,a=new Qt,o=[];for(let t=0;t<8;t++)o[t]=[t,0];return{update:function(l,c,h,u){const d=l.morphTargetInfluences;if(!0===e.isWebGL2){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=void 0!==p?p.length:0;let f=s.get(c);if(void 0===f||f.count!==m){void 0!==f&&f.texture.dispose();const x=void 0!==c.morphAttributes.position,_=void 0!==c.morphAttributes.normal,y=void 0!==c.morphAttributes.color,b=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let T=0;!0===x&&(T=1),!0===_&&(T=2),!0===y&&(T=3);let A=c.attributes.position.count*T,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*E*4*m),L=new ee(C,A,E,m);L.type=M,L.needsUpdate=!0;const R=4*T;for(let I=0;I<m;I++){const D=b[I],N=S[I],O=w[I],z=A*E*4*I;for(let U=0;U<D.count;U++){const B=U*R;!0===x&&(a.fromBufferAttribute(D,U),C[z+B+0]=a.x,C[z+B+1]=a.y,C[z+B+2]=a.z,C[z+B+3]=0),!0===_&&(a.fromBufferAttribute(N,U),C[z+B+4]=a.x,C[z+B+5]=a.y,C[z+B+6]=a.z,C[z+B+7]=0),!0===y&&(a.fromBufferAttribute(O,U),C[z+B+8]=a.x,C[z+B+9]=a.y,C[z+B+10]=a.z,C[z+B+11]=4===O.itemSize?a.w:1)}}function P(){L.dispose(),s.delete(c),c.removeEventListener("dispose",P)}f={count:m,texture:L,size:new Lt(A,E)},s.set(c,f),c.addEventListener("dispose",P)}let g=0;for(let F=0;F<d.length;F++)g+=d[F];const v=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(t,"morphTargetBaseInfluence",v),u.getUniforms().setValue(t,"morphTargetInfluences",d),u.getUniforms().setValue(t,"morphTargetsTexture",f.texture,i),u.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}else{const k=void 0===d?0:d.length;let G=n[c.id];if(void 0===G||G.length!==k){G=[];for(let q=0;q<k;q++)G[q]=[q,0];n[c.id]=G}for(let X=0;X<k;X++){const Y=G[X];Y[0]=X,Y[1]=d[X]}G.sort(Qn);for(let Z=0;Z<8;Z++)Z<k&&G[Z][1]?(o[Z][0]=G[Z][0],o[Z][1]=G[Z][1]):(o[Z][0]=Number.MAX_SAFE_INTEGER,o[Z][1]=0);o.sort($n);const V=c.morphAttributes.position,H=c.morphAttributes.normal;let W=0;for(let J=0;J<8;J++){const K=o[J],$=K[0],Q=K[1];$!==Number.MAX_SAFE_INTEGER&&Q?(V&&c.getAttribute("morphTarget"+J)!==V[$]&&c.setAttribute("morphTarget"+J,V[$]),H&&c.getAttribute("morphNormal"+J)!==H[$]&&c.setAttribute("morphNormal"+J,H[$]),r[J]=Q,W+=Q):(V&&!0===c.hasAttribute("morphTarget"+J)&&c.deleteAttribute("morphTarget"+J),H&&!0===c.hasAttribute("morphNormal"+J)&&c.deleteAttribute("morphNormal"+J),r[J]=0)}const j=c.morphTargetsRelative?1:1-W;u.getUniforms().setValue(t,"morphTargetBaseInfluence",j),u.getUniforms().setValue(t,"morphTargetInfluences",r)}}}}function er(t,e,i,n){let r=new WeakMap;function s(t){const e=t.target;e.removeEventListener("dispose",s),i.remove(e.instanceMatrix),null!==e.instanceColor&&i.remove(e.instanceColor)}return{update:function(t){const a=n.render.frame,o=t.geometry,l=e.get(t,o);return r.get(l)!==a&&(e.update(l),r.set(l,a)),t.isInstancedMesh&&(!1===t.hasEventListener("dispose",s)&&t.addEventListener("dispose",s),i.update(t.instanceMatrix,34962),null!==t.instanceColor&&i.update(t.instanceColor,34962)),l},dispose:function(){r=new WeakMap}}}const ir=new $t,nr=new ee,rr=new ie,sr=new hn,ar=[],or=[],lr=new Float32Array(16),cr=new Float32Array(9),hr=new Float32Array(4);function ur(t,e,i){const n=t[0];if(n<=0||n>0)return t;const r=e*i;let s=ar[r];if(void 0===s&&(s=new Float32Array(r),ar[r]=s),0!==e){n.toArray(s,0);for(let n=1,r=0;n!==e;++n)r+=i,t[n].toArray(s,r)}return s}function dr(t,e){if(t.length!==e.length)return!1;for(let i=0,n=t.length;i<n;i++)if(t[i]!==e[i])return!1;return!0}function pr(t,e){for(let i=0,n=e.length;i<n;i++)t[i]=e[i]}function mr(t,e){let i=or[e];void 0===i&&(i=new Int32Array(e),or[e]=i);for(let n=0;n!==e;++n)i[n]=t.allocateTextureUnit();return i}function fr(t,e){const i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function gr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dr(i,e))return;t.uniform2fv(this.addr,e),pr(i,e)}}function vr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(void 0!==e.r)i[0]===e.r&&i[1]===e.g&&i[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dr(i,e))return;t.uniform3fv(this.addr,e),pr(i,e)}}function xr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z&&i[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dr(i,e))return;t.uniform4fv(this.addr,e),pr(i,e)}}function _r(t,e){const i=this.cache,n=e.elements;if(void 0===n){if(dr(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),pr(i,e)}else{if(dr(i,n))return;hr.set(n),t.uniformMatrix2fv(this.addr,!1,hr),pr(i,n)}}function yr(t,e){const i=this.cache,n=e.elements;if(void 0===n){if(dr(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),pr(i,e)}else{if(dr(i,n))return;cr.set(n),t.uniformMatrix3fv(this.addr,!1,cr),pr(i,n)}}function Mr(t,e){const i=this.cache,n=e.elements;if(void 0===n){if(dr(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),pr(i,e)}else{if(dr(i,n))return;lr.set(n),t.uniformMatrix4fv(this.addr,!1,lr),pr(i,n)}}function br(t,e){const i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function Sr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dr(i,e))return;t.uniform2iv(this.addr,e),pr(i,e)}}function wr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dr(i,e))return;t.uniform3iv(this.addr,e),pr(i,e)}}function Tr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z&&i[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dr(i,e))return;t.uniform4iv(this.addr,e),pr(i,e)}}function Ar(t,e){const i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function Er(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dr(i,e))return;t.uniform2uiv(this.addr,e),pr(i,e)}}function Cr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dr(i,e))return;t.uniform3uiv(this.addr,e),pr(i,e)}}function Lr(t,e){const i=this.cache;if(void 0!==e.x)i[0]===e.x&&i[1]===e.y&&i[2]===e.z&&i[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dr(i,e))return;t.uniform4uiv(this.addr,e),pr(i,e)}}function Rr(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture2D(e||ir,r)}function Pr(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(e||rr,r)}function Ir(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(e||sr,r)}function Dr(t,e,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(t.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(e||nr,r)}function Nr(t,e){t.uniform1fv(this.addr,e)}function Or(t,e){const i=ur(e,this.size,2);t.uniform2fv(this.addr,i)}function zr(t,e){const i=ur(e,this.size,3);t.uniform3fv(this.addr,i)}function Ur(t,e){const i=ur(e,this.size,4);t.uniform4fv(this.addr,i)}function Br(t,e){const i=ur(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function Fr(t,e){const i=ur(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function kr(t,e){const i=ur(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function Gr(t,e){t.uniform1iv(this.addr,e)}function Vr(t,e){t.uniform2iv(this.addr,e)}function Hr(t,e){t.uniform3iv(this.addr,e)}function Wr(t,e){t.uniform4iv(this.addr,e)}function jr(t,e){t.uniform1uiv(this.addr,e)}function qr(t,e){t.uniform2uiv(this.addr,e)}function Xr(t,e){t.uniform3uiv(this.addr,e)}function Yr(t,e){t.uniform4uiv(this.addr,e)}function Zr(t,e,i){const n=this.cache,r=e.length,s=mr(i,r);dr(n,s)||(t.uniform1iv(this.addr,s),pr(n,s));for(let t=0;t!==r;++t)i.setTexture2D(e[t]||ir,s[t])}function Jr(t,e,i){const n=this.cache,r=e.length,s=mr(i,r);dr(n,s)||(t.uniform1iv(this.addr,s),pr(n,s));for(let t=0;t!==r;++t)i.setTexture3D(e[t]||rr,s[t])}function Kr(t,e,i){const n=this.cache,r=e.length,s=mr(i,r);dr(n,s)||(t.uniform1iv(this.addr,s),pr(n,s));for(let t=0;t!==r;++t)i.setTextureCube(e[t]||sr,s[t])}function $r(t,e,i){const n=this.cache,r=e.length,s=mr(i,r);dr(n,s)||(t.uniform1iv(this.addr,s),pr(n,s));for(let t=0;t!==r;++t)i.setTexture2DArray(e[t]||nr,s[t])}class Qr{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=function(t){switch(t){case 5126:return fr;case 35664:return gr;case 35665:return vr;case 35666:return xr;case 35674:return _r;case 35675:return yr;case 35676:return Mr;case 5124:case 35670:return br;case 35667:case 35671:return Sr;case 35668:case 35672:return wr;case 35669:case 35673:return Tr;case 5125:return Ar;case 36294:return Er;case 36295:return Cr;case 36296:return Lr;case 35678:case 36198:case 36298:case 36306:case 35682:return Rr;case 35679:case 36299:case 36307:return Pr;case 35680:case 36300:case 36308:case 36293:return Ir;case 36289:case 36303:case 36311:case 36292:return Dr}}(e.type)}}class ts{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=function(t){switch(t){case 5126:return Nr;case 35664:return Or;case 35665:return zr;case 35666:return Ur;case 35674:return Br;case 35675:return Fr;case 35676:return kr;case 5124:case 35670:return Gr;case 35667:case 35671:return Vr;case 35668:case 35672:return Hr;case 35669:case 35673:return Wr;case 5125:return jr;case 36294:return qr;case 36295:return Xr;case 36296:return Yr;case 35678:case 36198:case 36298:case 36306:case 35682:return Zr;case 35679:case 36299:case 36307:return Jr;case 35680:case 36300:case 36308:case 36293:return Kr;case 36289:case 36303:case 36311:case 36292:return $r}}(e.type)}}class es{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const s=n[r];s.setValue(t,e[s.id],i)}}}const is=/(\w+)(\])?(\[|\.)?/g;function ns(t,e){t.seq.push(e),t.map[e.id]=e}function rs(t,e,i){const n=t.name,r=n.length;for(is.lastIndex=0;;){const s=is.exec(n),a=is.lastIndex;let o=s[1];const l="]"===s[2],c=s[3];if(l&&(o|=0),void 0===c||"["===c&&a+2===r){ns(i,void 0===c?new Qr(o,t,e):new ts(o,t,e));break}{let t=i.map[o];void 0===t&&(t=new es(o),ns(i,t)),i=t}}}class ss{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let n=0;n<i;++n){const i=t.getActiveUniform(e,n);rs(i,t.getUniformLocation(e,i.name),this)}}setValue(t,e,i,n){const r=this.map[e];void 0!==r&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];void 0!==n&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,s=e.length;r!==s;++r){const s=e[r],a=i[s.id];!1!==a.needsUpdate&&s.setValue(t,a.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const r=t[n];r.id in e&&i.push(r)}return i}}function as(t,e,i){const n=t.createShader(e);return t.shaderSource(n,i),t.compileShader(n),n}let os=0;function ls(t,e,i){const n=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(n&&""===r)return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const n=parseInt(s[1]);return i.toUpperCase()+"\n\n"+r+"\n\n"+function(t,e){const i=t.split("\n"),n=[],r=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let t=r;t<s;t++){const r=t+1;n.push(`${r===e?">":" "} ${r}: ${i[t]}`)}return n.join("\n")}(t.getShaderSource(e),n)}return r}function cs(t,e){const i=function(t){switch(t){case at:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function hs(t,e){let i;switch(e){case 1:i="Linear";break;case 2:i="Reinhard";break;case 3:i="OptimizedCineon";break;case 4:i="ACESFilmic";break;case 5:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function us(t){return""!==t}function ds(t,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ps(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ms=/^[ \t]*#include +<([\w\d./]+)>/gm;function fs(t){return t.replace(ms,gs)}function gs(t,e){const i=bn[e];if(void 0===i)throw new Error("Can not resolve #include <"+e+">");return fs(i)}const vs=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xs(t){return t.replace(vs,_s)}function _s(t,e,i,n){let r="";for(let t=parseInt(e);t<parseInt(i);t++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+t+" ]").replace(/UNROLLED_LOOP_INDEX/g,t);return r}function ys(t){let e="precision "+t.precision+" float;\nprecision "+t.precision+" int;";return"highp"===t.precision?e+="\n#define HIGH_PRECISION":"mediump"===t.precision?e+="\n#define MEDIUM_PRECISION":"lowp"===t.precision&&(e+="\n#define LOW_PRECISION"),e}function Ms(t,e,i,n){const a=t.getContext(),o=i.defines;let c=i.vertexShader,h=i.fragmentShader;const u=function(t){let e="SHADOWMAP_TYPE_BASIC";return 1===t.shadowMapType?e="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?e="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(e="SHADOWMAP_TYPE_VSM"),e}(i),d=function(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case r:case s:e="ENVMAP_TYPE_CUBE";break;case l:e="ENVMAP_TYPE_CUBE_UV"}return e}(i),p=function(t){let e="ENVMAP_MODE_REFLECTION";t.envMap&&t.envMapMode===s&&(e="ENVMAP_MODE_REFRACTION");return e}(i),m=function(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD"}return e}(i),f=function(t){const e=t.envMapCubeUVHeight;if(null===e)return null;const i=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:n,maxMip:i}}(i),g=i.isWebGL2?"":function(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join("\n")}(i),v=function(t){const e=[];for(const i in t){const n=t[i];!1!==n&&e.push("#define "+i+" "+n)}return e.join("\n")}(o),x=a.createProgram();let _,y,M=i.glslVersion?"#version "+i.glslVersion+"\n":"";i.isRawShaderMaterial?(_=[v].filter(us).join("\n"),_.length>0&&(_+="\n"),y=[g,v].filter(us).join("\n"),y.length>0&&(y+="\n")):(_=[ys(i),"#define SHADER_NAME "+i.shaderName,v,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&!1===i.flatShading?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(us).join("\n"),y=[g,ys(i),"#define SHADER_NAME "+i.shaderName,v,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+p:"",i.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==i.toneMapping?"#define TONE_MAPPING":"",0!==i.toneMapping?bn.tonemapping_pars_fragment:"",0!==i.toneMapping?hs("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bn.encodings_pars_fragment,cs("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"","\n"].filter(us).join("\n")),c=fs(c),c=ds(c,i),c=ps(c,i),h=fs(h),h=ds(h,i),h=ps(h,i),c=xs(c),h=xs(h),i.isWebGL2&&!0!==i.isRawShaderMaterial&&(M="#version 300 es\n",_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join("\n")+"\n"+_,y=["#define varying in",i.glslVersion===dt?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join("\n")+"\n"+y);const b=M+y+h,S=as(a,35633,M+_+c),w=as(a,35632,b);if(a.attachShader(x,S),a.attachShader(x,w),void 0!==i.index0AttributeName?a.bindAttribLocation(x,0,i.index0AttributeName):!0===i.morphTargets&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x),t.debug.checkShaderErrors){const t=a.getProgramInfoLog(x).trim(),e=a.getShaderInfoLog(S).trim(),i=a.getShaderInfoLog(w).trim();let n=!0,r=!0;if(!1===a.getProgramParameter(x,35714)){n=!1;const e=ls(a,S,"vertex"),i=ls(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,35715)+"\n\nProgram Info Log: "+t+"\n"+e+"\n"+i)}else""!==t?console.warn("THREE.WebGLProgram: Program Info Log:",t):""!==e&&""!==i||(r=!1);r&&(this.diagnostics={runnable:n,programLog:t,vertexShader:{log:e,prefix:_},fragmentShader:{log:i,prefix:y}})}let T,A;return a.deleteShader(S),a.deleteShader(w),this.getUniforms=function(){return void 0===T&&(T=new ss(a,x)),T},this.getAttributes=function(){return void 0===A&&(A=function(t,e){const i={},n=t.getProgramParameter(e,35721);for(let r=0;r<n;r++){const n=t.getActiveAttrib(e,r),s=n.name;let a=1;35674===n.type&&(a=2),35675===n.type&&(a=3),35676===n.type&&(a=4),i[s]={type:n.type,location:t.getAttribLocation(e,s),locationSize:a}}return i}(a,x)),A},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.name=i.shaderName,this.id=os++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let bs=0;class Ss{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(t);return!1===s.has(n)&&(s.add(n),n.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const t of e)t.usedTimes--,0===t.usedTimes&&this.shaderCache.delete(t.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return void 0===i&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return void 0===i&&(i=new ws(t),e.set(t,i)),i}}class ws{constructor(t){this.id=bs++,this.code=t,this.usedTimes=0}}function Ts(t,e,i,n,r,s,a){const o=new je,c=new Ss,h=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(s,o,h,g,v){const x=g.fog,_=v.geometry,y=s.isMeshStandardMaterial?g.environment:null,M=(s.isMeshStandardMaterial?i:e).get(s.envMap||y),b=M&&M.mapping===l?M.image.height:null,S=f[s.type];null!==s.precision&&(m=r.getMaxPrecision(s.precision),m!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",m,"instead."));const w=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=void 0!==w?w.length:0;let A,E,C,L,R=0;if(void 0!==_.morphAttributes.position&&(R=1),void 0!==_.morphAttributes.normal&&(R=2),void 0!==_.morphAttributes.color&&(R=3),S){const t=wn[S];A=t.vertexShader,E=t.fragmentShader}else A=s.vertexShader,E=s.fragmentShader,c.update(s),C=c.getVertexShaderID(s),L=c.getFragmentShaderID(s);const P=t.getRenderTarget(),I=s.alphaTest>0,D=s.clearcoat>0,N=s.iridescence>0;return{isWebGL2:u,shaderID:S,shaderName:s.type,vertexShader:A,fragmentShader:E,defines:s.defines,customVertexShaderID:C,customFragmentShaderID:L,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:m,instancing:!0===v.isInstancedMesh,instancingColor:!0===v.isInstancedMesh&&null!==v.instanceColor,supportsVertexTextures:p,outputEncoding:null===P?t.outputEncoding:!0===P.isXRRenderTarget?P.texture.encoding:at,map:!!s.map,matcap:!!s.matcap,envMap:!!M,envMapMode:M&&M.mapping,envMapCubeUVHeight:b,lightMap:!!s.lightMap,aoMap:!!s.aoMap,emissiveMap:!!s.emissiveMap,bumpMap:!!s.bumpMap,normalMap:!!s.normalMap,objectSpaceNormalMap:1===s.normalMapType,tangentSpaceNormalMap:0===s.normalMapType,decodeVideoTexture:!!s.map&&!0===s.map.isVideoTexture&&s.map.encoding===ot,clearcoat:D,clearcoatMap:D&&!!s.clearcoatMap,clearcoatRoughnessMap:D&&!!s.clearcoatRoughnessMap,clearcoatNormalMap:D&&!!s.clearcoatNormalMap,iridescence:N,iridescenceMap:N&&!!s.iridescenceMap,iridescenceThicknessMap:N&&!!s.iridescenceThicknessMap,displacementMap:!!s.displacementMap,roughnessMap:!!s.roughnessMap,metalnessMap:!!s.metalnessMap,specularMap:!!s.specularMap,specularIntensityMap:!!s.specularIntensityMap,specularColorMap:!!s.specularColorMap,opaque:!1===s.transparent&&1===s.blending,alphaMap:!!s.alphaMap,alphaTest:I,gradientMap:!!s.gradientMap,sheen:s.sheen>0,sheenColorMap:!!s.sheenColorMap,sheenRoughnessMap:!!s.sheenRoughnessMap,transmission:s.transmission>0,transmissionMap:!!s.transmissionMap,thicknessMap:!!s.thicknessMap,combine:s.combine,vertexTangents:!!s.normalMap&&!!_.attributes.tangent,vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!_.attributes.color&&4===_.attributes.color.itemSize,vertexUvs:!!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatMap||s.clearcoatRoughnessMap||s.clearcoatNormalMap||s.iridescenceMap||s.iridescenceThicknessMap||s.displacementMap||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheenColorMap||s.sheenRoughnessMap),uvsVertexOnly:!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatNormalMap||s.iridescenceMap||s.iridescenceThicknessMap||s.transmission>0||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheen>0||s.sheenColorMap||s.sheenRoughnessMap||!s.displacementMap),fog:!!x,useFog:!0===s.fog,fogExp2:x&&x.isFogExp2,flatShading:!!s.flatShading,sizeAttenuation:s.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===v.isSkinnedMesh,morphTargets:void 0!==_.morphAttributes.position,morphNormals:void 0!==_.morphAttributes.normal,morphColors:void 0!==_.morphAttributes.color,morphTargetsCount:T,morphTextureStride:R,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:t.shadowMap.enabled&&h.length>0,shadowMapType:t.shadowMap.type,toneMapping:s.toneMapped?t.toneMapping:0,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:1===s.side,useDepthPacking:!!s.depthPacking,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:s.extensions&&s.extensions.derivatives,extensionFragDepth:s.extensions&&s.extensions.fragDepth,extensionDrawBuffers:s.extensions&&s.extensions.drawBuffers,extensionShaderTextureLOD:s.extensions&&s.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(e){const i=[];if(e.shaderID?i.push(e.shaderID):(i.push(e.customVertexShaderID),i.push(e.customFragmentShaderID)),void 0!==e.defines)for(const t in e.defines)i.push(t),i.push(e.defines[t]);return!1===e.isRawShaderMaterial&&(!function(t,e){t.push(e.precision),t.push(e.outputEncoding),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.combine),t.push(e.vertexUvs),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numSpotLightMaps),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.numSpotLightShadowsWithMaps),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection),t.push(e.depthPacking)}(i,e),function(t,e){o.disableAll(),e.isWebGL2&&o.enable(0);e.supportsVertexTextures&&o.enable(1);e.instancing&&o.enable(2);e.instancingColor&&o.enable(3);e.map&&o.enable(4);e.matcap&&o.enable(5);e.envMap&&o.enable(6);e.lightMap&&o.enable(7);e.aoMap&&o.enable(8);e.emissiveMap&&o.enable(9);e.bumpMap&&o.enable(10);e.normalMap&&o.enable(11);e.objectSpaceNormalMap&&o.enable(12);e.tangentSpaceNormalMap&&o.enable(13);e.clearcoat&&o.enable(14);e.clearcoatMap&&o.enable(15);e.clearcoatRoughnessMap&&o.enable(16);e.clearcoatNormalMap&&o.enable(17);e.iridescence&&o.enable(18);e.iridescenceMap&&o.enable(19);e.iridescenceThicknessMap&&o.enable(20);e.displacementMap&&o.enable(21);e.specularMap&&o.enable(22);e.roughnessMap&&o.enable(23);e.metalnessMap&&o.enable(24);e.gradientMap&&o.enable(25);e.alphaMap&&o.enable(26);e.alphaTest&&o.enable(27);e.vertexColors&&o.enable(28);e.vertexAlphas&&o.enable(29);e.vertexUvs&&o.enable(30);e.vertexTangents&&o.enable(31);e.uvsVertexOnly&&o.enable(32);t.push(o.mask),o.disableAll(),e.fog&&o.enable(0);e.useFog&&o.enable(1);e.flatShading&&o.enable(2);e.logarithmicDepthBuffer&&o.enable(3);e.skinning&&o.enable(4);e.morphTargets&&o.enable(5);e.morphNormals&&o.enable(6);e.morphColors&&o.enable(7);e.premultipliedAlpha&&o.enable(8);e.shadowMapEnabled&&o.enable(9);e.physicallyCorrectLights&&o.enable(10);e.doubleSided&&o.enable(11);e.flipSided&&o.enable(12);e.useDepthPacking&&o.enable(13);e.dithering&&o.enable(14);e.specularIntensityMap&&o.enable(15);e.specularColorMap&&o.enable(16);e.transmission&&o.enable(17);e.transmissionMap&&o.enable(18);e.thicknessMap&&o.enable(19);e.sheen&&o.enable(20);e.sheenColorMap&&o.enable(21);e.sheenRoughnessMap&&o.enable(22);e.decodeVideoTexture&&o.enable(23);e.opaque&&o.enable(24);t.push(o.mask)}(i,e),i.push(t.outputEncoding)),i.push(e.customProgramCacheKey),i.join()},getUniforms:function(t){const e=f[t.type];let i;if(e){const t=wn[e];i=rn.clone(t.uniforms)}else i=t.uniforms;return i},acquireProgram:function(e,i){let n;for(let t=0,e=h.length;t<e;t++){const e=h[t];if(e.cacheKey===i){n=e,++n.usedTimes;break}}return void 0===n&&(n=new Ms(t,i,e,s),h.push(n)),n},releaseProgram:function(t){if(0==--t.usedTimes){const e=h.indexOf(t);h[e]=h[h.length-1],h.pop(),t.destroy()}},releaseShaderCache:function(t){c.remove(t)},programs:h,dispose:function(){c.dispose()}}}function As(){let t=new WeakMap;return{get:function(e){let i=t.get(e);return void 0===i&&(i={},t.set(e,i)),i},remove:function(e){t.delete(e)},update:function(e,i,n){t.get(e)[i]=n},dispose:function(){t=new WeakMap}}}function Es(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Cs(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ls(){const t=[];let e=0;const i=[],n=[],r=[];function s(i,n,r,s,a,o){let l=t[e];return void 0===l?(l={id:i.id,object:i,geometry:n,material:r,groupOrder:s,renderOrder:i.renderOrder,z:a,group:o},t[e]=l):(l.id=i.id,l.object=i,l.geometry=n,l.material=r,l.groupOrder=s,l.renderOrder=i.renderOrder,l.z=a,l.group=o),e++,l}return{opaque:i,transmissive:n,transparent:r,init:function(){e=0,i.length=0,n.length=0,r.length=0},push:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?n.push(h):!0===a.transparent?r.push(h):i.push(h)},unshift:function(t,e,a,o,l,c){const h=s(t,e,a,o,l,c);a.transmission>0?n.unshift(h):!0===a.transparent?r.unshift(h):i.unshift(h)},finish:function(){for(let i=e,n=t.length;i<n;i++){const e=t[i];if(null===e.id)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}},sort:function(t,e){i.length>1&&i.sort(t||Es),n.length>1&&n.sort(e||Cs),r.length>1&&r.sort(e||Cs)}}}function Rs(){let t=new WeakMap;return{get:function(e,i){const n=t.get(e);let r;return void 0===n?(r=new Ls,t.set(e,[r])):i>=n.length?(r=new Ls,n.push(r)):r=n[i],r},dispose:function(){t=new WeakMap}}}function Ps(){const t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new re,color:new qt};break;case"SpotLight":i={position:new re,direction:new re,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new qt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":i={color:new qt,position:new re,halfWidth:new re,halfHeight:new re}}return t[e.id]=i,i}}}let Is=0;function Ds(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ns(t,e){const i=new Ps,n=function(){const t={};return{get:function(e){if(void 0!==t[e.id])return t[e.id];let i;switch(e.type){case"DirectionalLight":case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3}}return t[e.id]=i,i}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)r.probe.push(new re);const s=new re,a=new Ne,o=new Ne;return{setup:function(s,a){let o=0,l=0,c=0;for(let t=0;t<9;t++)r.probe[t].set(0,0,0);let h=0,u=0,d=0,p=0,m=0,f=0,g=0,v=0,x=0,_=0;s.sort(Ds);const y=!0!==a?Math.PI:1;for(let t=0,e=s.length;t<e;t++){const e=s[t],a=e.color,M=e.intensity,b=e.distance,S=e.shadow&&e.shadow.map?e.shadow.map.texture:null;if(e.isAmbientLight)o+=a.r*M*y,l+=a.g*M*y,c+=a.b*M*y;else if(e.isLightProbe)for(let t=0;t<9;t++)r.probe[t].addScaledVector(e.sh.coefficients[t],M);else if(e.isDirectionalLight){const t=i.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*y),e.castShadow){const t=e.shadow,i=n.get(e);i.shadowBias=t.bias,i.shadowNormalBias=t.normalBias,i.shadowRadius=t.radius,i.shadowMapSize=t.mapSize,r.directionalShadow[h]=i,r.directionalShadowMap[h]=S,r.directionalShadowMatrix[h]=e.shadow.matrix,f++}r.directional[h]=t,h++}else if(e.isSpotLight){const t=i.get(e);t.position.setFromMatrixPosition(e.matrixWorld),t.color.copy(a).multiplyScalar(M*y),t.distance=b,t.coneCos=Math.cos(e.angle),t.penumbraCos=Math.cos(e.angle*(1-e.penumbra)),t.decay=e.decay,r.spot[d]=t;const s=e.shadow;if(e.map&&(r.spotLightMap[x]=e.map,x++,s.updateMatrices(e),e.castShadow&&_++),r.spotLightMatrix[d]=s.matrix,e.castShadow){const t=n.get(e);t.shadowBias=s.bias,t.shadowNormalBias=s.normalBias,t.shadowRadius=s.radius,t.shadowMapSize=s.mapSize,r.spotShadow[d]=t,r.spotShadowMap[d]=S,v++}d++}else if(e.isRectAreaLight){const t=i.get(e);t.color.copy(a).multiplyScalar(M),t.halfWidth.set(.5*e.width,0,0),t.halfHeight.set(0,.5*e.height,0),r.rectArea[p]=t,p++}else if(e.isPointLight){const t=i.get(e);if(t.color.copy(e.color).multiplyScalar(e.intensity*y),t.distance=e.distance,t.decay=e.decay,e.castShadow){const t=e.shadow,i=n.get(e);i.shadowBias=t.bias,i.shadowNormalBias=t.normalBias,i.shadowRadius=t.radius,i.shadowMapSize=t.mapSize,i.shadowCameraNear=t.camera.near,i.shadowCameraFar=t.camera.far,r.pointShadow[u]=i,r.pointShadowMap[u]=S,r.pointShadowMatrix[u]=e.shadow.matrix,g++}r.point[u]=t,u++}else if(e.isHemisphereLight){const t=i.get(e);t.skyColor.copy(e.color).multiplyScalar(M*y),t.groundColor.copy(e.groundColor).multiplyScalar(M*y),r.hemi[m]=t,m++}}p>0&&(e.isWebGL2||!0===t.has("OES_texture_float_linear")?(r.rectAreaLTC1=Sn.LTC_FLOAT_1,r.rectAreaLTC2=Sn.LTC_FLOAT_2):!0===t.has("OES_texture_half_float_linear")?(r.rectAreaLTC1=Sn.LTC_HALF_1,r.rectAreaLTC2=Sn.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=o,r.ambient[1]=l,r.ambient[2]=c;const M=r.hash;M.directionalLength===h&&M.pointLength===u&&M.spotLength===d&&M.rectAreaLength===p&&M.hemiLength===m&&M.numDirectionalShadows===f&&M.numPointShadows===g&&M.numSpotShadows===v&&M.numSpotMaps===x||(r.directional.length=h,r.spot.length=d,r.rectArea.length=p,r.point.length=u,r.hemi.length=m,r.directionalShadow.length=f,r.directionalShadowMap.length=f,r.pointShadow.length=g,r.pointShadowMap.length=g,r.spotShadow.length=v,r.spotShadowMap.length=v,r.directionalShadowMatrix.length=f,r.pointShadowMatrix.length=g,r.spotLightMatrix.length=v+x-_,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=_,M.directionalLength=h,M.pointLength=u,M.spotLength=d,M.rectAreaLength=p,M.hemiLength=m,M.numDirectionalShadows=f,M.numPointShadows=g,M.numSpotShadows=v,M.numSpotMaps=x,r.version=Is++)},setupView:function(t,e){let i=0,n=0,l=0,c=0,h=0;const u=e.matrixWorldInverse;for(let e=0,d=t.length;e<d;e++){const d=t[e];if(d.isDirectionalLight){const t=r.directional[i];t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),i++}else if(d.isSpotLight){const t=r.spot[l];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),t.direction.setFromMatrixPosition(d.matrixWorld),s.setFromMatrixPosition(d.target.matrixWorld),t.direction.sub(s),t.direction.transformDirection(u),l++}else if(d.isRectAreaLight){const t=r.rectArea[c];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),o.identity(),a.copy(d.matrixWorld),a.premultiply(u),o.extractRotation(a),t.halfWidth.set(.5*d.width,0,0),t.halfHeight.set(0,.5*d.height,0),t.halfWidth.applyMatrix4(o),t.halfHeight.applyMatrix4(o),c++}else if(d.isPointLight){const t=r.point[n];t.position.setFromMatrixPosition(d.matrixWorld),t.position.applyMatrix4(u),n++}else if(d.isHemisphereLight){const t=r.hemi[h];t.direction.setFromMatrixPosition(d.matrixWorld),t.direction.transformDirection(u),h++}}},state:r}}function Os(t,e){const i=new Ns(t,e),n=[],r=[];return{init:function(){n.length=0,r.length=0},state:{lightsArray:n,shadowsArray:r,lights:i},setupLights:function(t){i.setup(n,t)},setupLightsView:function(t){i.setupView(n,t)},pushLight:function(t){n.push(t)},pushShadow:function(t){r.push(t)}}}function zs(t,e){let i=new WeakMap;return{get:function(n,r=0){const s=i.get(n);let a;return void 0===s?(a=new Os(t,e),i.set(n,[a])):r>=s.length?(a=new Os(t,e),s.push(a)):a=s[r],a},dispose:function(){i=new WeakMap}}}class Us extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bs extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new re,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Fs(t,e,i){let n=new xn;const r=new Lt,s=new Lt,a=new Qt,o=new Us({depthPacking:3201}),l=new Bs,c={},h=i.maxTextureSize,u={0:1,1:0,2:2},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const f=new Di;f.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ki(f,p),v=this;function x(i,n){const s=e.update(g);p.defines.VSM_SAMPLES!==i.blurSamples&&(p.defines.VSM_SAMPLES=i.blurSamples,m.defines.VSM_SAMPLES=i.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),null===i.mapPass&&(i.mapPass=new te(r.x,r.y)),p.uniforms.shadow_pass.value=i.map.texture,p.uniforms.resolution.value=i.mapSize,p.uniforms.radius.value=i.radius,t.setRenderTarget(i.mapPass),t.clear(),t.renderBufferDirect(n,null,s,p,g,null),m.uniforms.shadow_pass.value=i.mapPass.texture,m.uniforms.resolution.value=i.mapSize,m.uniforms.radius.value=i.radius,t.setRenderTarget(i.map),t.clear(),t.renderBufferDirect(n,null,s,m,g,null)}function _(e,i,n,r,s,a){let h=null;const d=!0===n.isPointLight?e.customDistanceMaterial:e.customDepthMaterial;if(h=void 0!==d?d:!0===n.isPointLight?l:o,t.localClippingEnabled&&!0===i.clipShadows&&Array.isArray(i.clippingPlanes)&&0!==i.clippingPlanes.length||i.displacementMap&&0!==i.displacementScale||i.alphaMap&&i.alphaTest>0||i.map&&i.alphaTest>0){const t=h.uuid,e=i.uuid;let n=c[t];void 0===n&&(n={},c[t]=n);let r=n[e];void 0===r&&(r=h.clone(),n[e]=r),h=r}return h.visible=i.visible,h.wireframe=i.wireframe,h.side=3===a?null!==i.shadowSide?i.shadowSide:i.side:null!==i.shadowSide?i.shadowSide:u[i.side],h.alphaMap=i.alphaMap,h.alphaTest=i.alphaTest,h.map=i.map,h.clipShadows=i.clipShadows,h.clippingPlanes=i.clippingPlanes,h.clipIntersection=i.clipIntersection,h.displacementMap=i.displacementMap,h.displacementScale=i.displacementScale,h.displacementBias=i.displacementBias,h.wireframeLinewidth=i.wireframeLinewidth,h.linewidth=i.linewidth,!0===n.isPointLight&&!0===h.isMeshDistanceMaterial&&(h.referencePosition.setFromMatrixPosition(n.matrixWorld),h.nearDistance=r,h.farDistance=s),h}function y(i,r,s,a,o){if(!1===i.visible)return;if(i.layers.test(r.layers)&&(i.isMesh||i.isLine||i.isPoints)&&(i.castShadow||i.receiveShadow&&3===o)&&(!i.frustumCulled||n.intersectsObject(i))){i.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,i.matrixWorld);const n=e.update(i),r=i.material;if(Array.isArray(r)){const e=n.groups;for(let l=0,c=e.length;l<c;l++){const c=e[l],h=r[c.materialIndex];if(h&&h.visible){const e=_(i,h,a,s.near,s.far,o);t.renderBufferDirect(s,null,n,e,i,c)}}}else if(r.visible){const e=_(i,r,a,s.near,s.far,o);t.renderBufferDirect(s,null,n,e,i,null)}}const l=i.children;for(let t=0,e=l.length;t<e;t++)y(l[t],r,s,a,o)}this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(e,i,o){if(!1===v.enabled)return;if(!1===v.autoUpdate&&!1===v.needsUpdate)return;if(0===e.length)return;const l=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);for(let l=0,c=e.length;l<c;l++){const c=e[l],u=c.shadow;if(void 0===u){console.warn("THREE.WebGLShadowMap:",c,"has no shadow.");continue}if(!1===u.autoUpdate&&!1===u.needsUpdate)continue;r.copy(u.mapSize);const m=u.getFrameExtents();if(r.multiply(m),s.copy(u.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/m.x),r.x=s.x*m.x,u.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/m.y),r.y=s.y*m.y,u.mapSize.y=s.y)),null===u.map){const t=3!==this.type?{minFilter:d,magFilter:d}:{};u.map=new te(r.x,r.y,t),u.map.texture.name=c.name+".shadowMap",u.camera.updateProjectionMatrix()}t.setRenderTarget(u.map),t.clear();const f=u.getViewportCount();for(let t=0;t<f;t++){const e=u.getViewport(t);a.set(s.x*e.x,s.y*e.y,s.x*e.z,s.y*e.w),p.viewport(a),u.updateMatrices(c,t),n=u.getFrustum(),y(i,o,u.camera,c,this.type)}!0!==u.isPointLightShadow&&3===this.type&&x(u,o),u.needsUpdate=!1}v.needsUpdate=!1,t.setRenderTarget(l,c,u)}}function ks(t,e,n){const r=n.isWebGL2;const s=new function(){let e=!1;const i=new Qt;let n=null;const r=new Qt(0,0,0,0);return{setMask:function(i){n===i||e||(t.colorMask(i,i,i,i),n=i)},setLocked:function(t){e=t},setClear:function(e,n,s,a,o){!0===o&&(e*=a,n*=a,s*=a),i.set(e,n,s,a),!1===r.equals(i)&&(t.clearColor(e,n,s,a),r.copy(i))},reset:function(){e=!1,n=null,r.set(-1,0,0,0)}}},a=new function(){let e=!1,i=null,n=null,r=null;return{setTest:function(t){t?G(2929):V(2929)},setMask:function(n){i===n||e||(t.depthMask(n),i=n)},setFunc:function(e){if(n!==e){switch(e){case 0:t.depthFunc(512);break;case 1:t.depthFunc(519);break;case 2:t.depthFunc(513);break;case 3:default:t.depthFunc(515);break;case 4:t.depthFunc(514);break;case 5:t.depthFunc(518);break;case 6:t.depthFunc(516);break;case 7:t.depthFunc(517)}n=e}},setLocked:function(t){e=t},setClear:function(e){r!==e&&(t.clearDepth(e),r=e)},reset:function(){e=!1,i=null,n=null,r=null}}},o=new function(){let e=!1,i=null,n=null,r=null,s=null,a=null,o=null,l=null,c=null;return{setTest:function(t){e||(t?G(2960):V(2960))},setMask:function(n){i===n||e||(t.stencilMask(n),i=n)},setFunc:function(e,i,a){n===e&&r===i&&s===a||(t.stencilFunc(e,i,a),n=e,r=i,s=a)},setOp:function(e,i,n){a===e&&o===i&&l===n||(t.stencilOp(e,i,n),a=e,o=i,l=n)},setLocked:function(t){e=t},setClear:function(e){c!==e&&(t.clearStencil(e),c=e)},reset:function(){e=!1,i=null,n=null,r=null,s=null,a=null,o=null,l=null,c=null}}},l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],m=null,f=!1,g=null,v=null,x=null,_=null,y=null,M=null,b=null,S=!1,w=null,T=null,A=null,E=null,C=null;const L=t.getParameter(35661);let R=!1,P=0;const I=t.getParameter(7938);-1!==I.indexOf("WebGL")?(P=parseFloat(/^WebGL (\d)/.exec(I)[1]),R=P>=1):-1!==I.indexOf("OpenGL ES")&&(P=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),R=P>=2);let D=null,N={};const O=t.getParameter(3088),z=t.getParameter(2978),U=(new Qt).fromArray(O),B=(new Qt).fromArray(z);function F(e,i,n){const r=new Uint8Array(4),s=t.createTexture();t.bindTexture(e,s),t.texParameteri(e,10241,9728),t.texParameteri(e,10240,9728);for(let e=0;e<n;e++)t.texImage2D(i+e,0,6408,1,1,0,6408,5121,r);return s}const k={};function G(e){!0!==h[e]&&(t.enable(e),h[e]=!0)}function V(e){!1!==h[e]&&(t.disable(e),h[e]=!1)}k[3553]=F(3553,3553,1),k[34067]=F(34067,34069,6),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),G(2929),a.setFunc(3),q(!1),X(1),G(2884),j(0);const H={[i]:32774,101:32778,102:32779};if(r)H[103]=32775,H[104]=32776;else{const t=e.get("EXT_blend_minmax");null!==t&&(H[103]=t.MIN_EXT,H[104]=t.MAX_EXT)}const W={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};function j(e,n,r,s,a,o,l,c){if(0!==e){if(!1===f&&(G(3042),f=!0),5===e)a=a||n,o=o||r,l=l||s,n===v&&a===y||(t.blendEquationSeparate(H[n],H[a]),v=n,y=a),r===x&&s===_&&o===M&&l===b||(t.blendFuncSeparate(W[r],W[s],W[o],W[l]),x=r,_=s,M=o,b=l),g=e,S=!1;else if(e!==g||c!==S){if(v===i&&y===i||(t.blendEquation(32774),v=i,y=i),c)switch(e){case 1:t.blendFuncSeparate(1,771,1,771);break;case 2:t.blendFunc(1,1);break;case 3:t.blendFuncSeparate(0,769,0,1);break;case 4:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}else switch(e){case 1:t.blendFuncSeparate(770,771,1,771);break;case 2:t.blendFunc(770,1);break;case 3:t.blendFuncSeparate(0,769,0,1);break;case 4:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",e)}x=null,_=null,M=null,b=null,g=e,S=c}}else!0===f&&(V(3042),f=!1)}function q(e){w!==e&&(e?t.frontFace(2304):t.frontFace(2305),w=e)}function X(e){0!==e?(G(2884),e!==T&&(1===e?t.cullFace(1029):2===e?t.cullFace(1028):t.cullFace(1032))):V(2884),T=e}function Y(e,i,n){e?(G(32823),E===i&&C===n||(t.polygonOffset(i,n),E=i,C=n)):V(32823)}return{buffers:{color:s,depth:a,stencil:o},enable:G,disable:V,bindFramebuffer:function(e,i){return u[e]!==i&&(t.bindFramebuffer(e,i),u[e]=i,r&&(36009===e&&(u[36160]=i),36160===e&&(u[36009]=i)),!0)},drawBuffers:function(i,r){let s=p,a=!1;if(i)if(s=d.get(r),void 0===s&&(s=[],d.set(r,s)),i.isWebGLMultipleRenderTargets){const t=i.texture;if(s.length!==t.length||36064!==s[0]){for(let e=0,i=t.length;e<i;e++)s[e]=36064+e;s.length=t.length,a=!0}}else 36064!==s[0]&&(s[0]=36064,a=!0);else 1029!==s[0]&&(s[0]=1029,a=!0);a&&(n.isWebGL2?t.drawBuffers(s):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(s))},useProgram:function(e){return m!==e&&(t.useProgram(e),m=e,!0)},setBlending:j,setMaterial:function(t,e){2===t.side?V(2884):G(2884);let i=1===t.side;e&&(i=!i),q(i),1===t.blending&&!1===t.transparent?j(0):j(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),s.setMask(t.colorWrite);const n=t.stencilWrite;o.setTest(n),n&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Y(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?G(32926):V(32926)},setFlipSided:q,setCullFace:X,setLineWidth:function(e){e!==A&&(R&&t.lineWidth(e),A=e)},setPolygonOffset:Y,setScissorTest:function(t){t?G(3089):V(3089)},activeTexture:function(e){void 0===e&&(e=33984+L-1),D!==e&&(t.activeTexture(e),D=e)},bindTexture:function(e,i,n){void 0===n&&(n=null===D?33984+L-1:D);let r=N[n];void 0===r&&(r={type:void 0,texture:void 0},N[n]=r),r.type===e&&r.texture===i||(D!==n&&(t.activeTexture(n),D=n),t.bindTexture(e,i||k[e]),r.type=e,r.texture=i)},unbindTexture:function(){const e=N[D];void 0!==e&&void 0!==e.type&&(t.bindTexture(e.type,null),e.type=void 0,e.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexImage3D:function(){try{t.compressedTexImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage2D:function(){try{t.texImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texImage3D:function(){try{t.texImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},updateUBOMapping:function(e,i){let n=c.get(i);void 0===n&&(n=new WeakMap,c.set(i,n));let r=n.get(e);void 0===r&&(r=t.getUniformBlockIndex(i,e.name),n.set(e,r))},uniformBlockBinding:function(e,i){const n=c.get(i).get(e);l.get(e)!==n&&(t.uniformBlockBinding(i,n,e.__bindingPointIndex),l.set(e,n))},texStorage2D:function(){try{t.texStorage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texStorage3D:function(){try{t.texStorage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage2D:function(){try{t.texSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},texSubImage3D:function(){try{t.texSubImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(t){console.error("THREE.WebGLState:",t)}},scissor:function(e){!1===U.equals(e)&&(t.scissor(e.x,e.y,e.z,e.w),U.copy(e))},viewport:function(e){!1===B.equals(e)&&(t.viewport(e.x,e.y,e.z,e.w),B.copy(e))},reset:function(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),!0===r&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},D=null,N={},u={},d=new WeakMap,p=[],m=null,f=!1,g=null,v=null,x=null,_=null,y=null,M=null,b=null,S=!1,w=null,T=null,A=null,E=null,C=null,U.set(0,0,t.canvas.width,t.canvas.height),B.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}}}function Gs(t,e,i,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,E=r.maxCubemapSize,C=r.maxTextureSize,L=r.maxSamples,R=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,P="undefined"!=typeof navigator&&/OculusBrowser/g.test(navigator.userAgent),I=new WeakMap;let D;const N=new WeakMap;let O=!1;try{O="undefined"!=typeof OffscreenCanvas&&null!==new OffscreenCanvas(1,1).getContext("2d")}catch(t){}function z(t,e){return O?new OffscreenCanvas(t,e):Ot("canvas")}function U(t,e,i,n){let r=1;if((t.width>n||t.height>n)&&(r=n/Math.max(t.width,t.height)),r<1||!0===e){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const n=e?Tt:Math.floor,s=n(r*t.width),a=n(r*t.height);void 0===D&&(D=z(s,a));const o=i?z(s,a):D;o.width=s,o.height=a;return o.getContext("2d").drawImage(t,0,0,s,a),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+s+"x"+a+")."),o}return"data"in t&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+")."),t}return t}function B(t){return St(t.width)&&St(t.height)}function F(t,e){return t.generateMipmaps&&e&&t.minFilter!==d&&t.minFilter!==f}function k(e){t.generateMipmap(e)}function G(i,n,r,s,a=!1){if(!1===o)return n;if(null!==i){if(void 0!==t[i])return t[i];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+i+"'")}let l=n;return 6403===n&&(5126===r&&(l=33326),5131===r&&(l=33325),5121===r&&(l=33321)),33319===n&&(5126===r&&(l=33328),5131===r&&(l=33327),5121===r&&(l=33323)),6408===n&&(5126===r&&(l=34836),5131===r&&(l=34842),5121===r&&(l=s===ot&&!1===a?35907:32856),32819===r&&(l=32854),32820===r&&(l=32855)),33325!==l&&33326!==l&&33327!==l&&33328!==l&&34842!==l&&34836!==l||e.get("EXT_color_buffer_float"),l}function V(t,e,i){return!0===F(t,i)||t.isFramebufferTexture&&t.minFilter!==d&&t.minFilter!==f?Math.log2(Math.max(e.width,e.height))+1:void 0!==t.mipmaps&&t.mipmaps.length>0?t.mipmaps.length:t.isCompressedTexture&&Array.isArray(t.image)?e.mipmaps.length:1}function H(t){return t===d||t===p||t===m?9728:9729}function W(t){const e=t.target;e.removeEventListener("dispose",W),function(t){const e=n.get(t);if(void 0===e.__webglInit)return;const i=t.source,r=N.get(i);if(r){const n=r[e.__cacheKey];n.usedTimes--,0===n.usedTimes&&q(t),0===Object.keys(r).length&&N.delete(i)}n.remove(t)}(e),e.isVideoTexture&&I.delete(e)}function j(e){const i=e.target;i.removeEventListener("dispose",j),function(e){const i=e.texture,r=n.get(e),s=n.get(i);void 0!==s.__webglTexture&&(t.deleteTexture(s.__webglTexture),a.memory.textures--);e.depthTexture&&e.depthTexture.dispose();if(e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++)t.deleteFramebuffer(r.__webglFramebuffer[e]),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer[e]);else{if(t.deleteFramebuffer(r.__webglFramebuffer),r.__webglDepthbuffer&&t.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&t.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let e=0;e<r.__webglColorRenderbuffer.length;e++)r.__webglColorRenderbuffer[e]&&t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);r.__webglDepthRenderbuffer&&t.deleteRenderbuffer(r.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,r=i.length;e<r;e++){const r=n.get(i[e]);r.__webglTexture&&(t.deleteTexture(r.__webglTexture),a.memory.textures--),n.remove(i[e])}n.remove(i),n.remove(e)}(i)}function q(e){const i=n.get(e);t.deleteTexture(i.__webglTexture);const r=e.source;delete N.get(r)[i.__cacheKey],a.memory.textures--}let X=0;function Y(t,e){const r=n.get(t);if(t.isVideoTexture&&function(t){const e=a.render.frame;I.get(t)!==e&&(I.set(t,e),t.update())}(t),!1===t.isRenderTargetTexture&&t.version>0&&r.__version!==t.version){const i=t.image;if(null===i)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(!1!==i.complete)return void Q(r,t,e);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}i.bindTexture(3553,r.__webglTexture,33984+e)}const Z={[c]:10497,[h]:33071,[u]:33648},J={[d]:9728,[p]:9984,[m]:9986,[f]:9729,[g]:9985,[v]:9987};function K(i,s,a){if(a?(t.texParameteri(i,10242,Z[s.wrapS]),t.texParameteri(i,10243,Z[s.wrapT]),32879!==i&&35866!==i||t.texParameteri(i,32882,Z[s.wrapR]),t.texParameteri(i,10240,J[s.magFilter]),t.texParameteri(i,10241,J[s.minFilter])):(t.texParameteri(i,10242,33071),t.texParameteri(i,10243,33071),32879!==i&&35866!==i||t.texParameteri(i,32882,33071),s.wrapS===h&&s.wrapT===h||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(i,10240,H(s.magFilter)),t.texParameteri(i,10241,H(s.minFilter)),s.minFilter!==d&&s.minFilter!==f&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),!0===e.has("EXT_texture_filter_anisotropic")){const a=e.get("EXT_texture_filter_anisotropic");if(s.type===M&&!1===e.has("OES_texture_float_linear"))return;if(!1===o&&s.type===b&&!1===e.has("OES_texture_half_float_linear"))return;(s.anisotropy>1||n.get(s).__currentAnisotropy)&&(t.texParameterf(i,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),n.get(s).__currentAnisotropy=s.anisotropy)}}function $(e,i){let n=!1;void 0===e.__webglInit&&(e.__webglInit=!0,i.addEventListener("dispose",W));const r=i.source;let s=N.get(r);void 0===s&&(s={},N.set(r,s));const o=function(t){const e=[];return e.push(t.wrapS),e.push(t.wrapT),e.push(t.wrapR||0),e.push(t.magFilter),e.push(t.minFilter),e.push(t.anisotropy),e.push(t.internalFormat),e.push(t.format),e.push(t.type),e.push(t.generateMipmaps),e.push(t.premultiplyAlpha),e.push(t.flipY),e.push(t.unpackAlignment),e.push(t.encoding),e.join()}(i);if(o!==e.__cacheKey){void 0===s[o]&&(s[o]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,n=!0),s[o].usedTimes++;const r=s[e.__cacheKey];void 0!==r&&(s[e.__cacheKey].usedTimes--,0===r.usedTimes&&q(i)),e.__cacheKey=o,e.__webglTexture=s[o].texture}return n}function Q(e,r,a){let l=3553;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(l=35866),r.isData3DTexture&&(l=32879);const c=$(e,r),u=r.source;i.bindTexture(l,e.__webglTexture,33984+a);const p=n.get(u);if(u.version!==p.__version||!0===c){i.activeTexture(33984+a),t.pixelStorei(37440,r.flipY),t.pixelStorei(37441,r.premultiplyAlpha),t.pixelStorei(3317,r.unpackAlignment),t.pixelStorei(37443,0);const e=function(t){return!o&&(t.wrapS!==h||t.wrapT!==h||t.minFilter!==d&&t.minFilter!==f)}(r)&&!1===B(r.image);let n=U(r.image,e,!1,C);n=st(r,n);const m=B(n)||o,g=s.convert(r.format,r.encoding);let v,x=s.convert(r.type),b=G(r.internalFormat,g,x,r.encoding,r.isVideoTexture);K(l,r,m);const E=r.mipmaps,L=o&&!0!==r.isVideoTexture,R=void 0===p.__version||!0===c,P=V(r,n,m);if(r.isDepthTexture)b=6402,o?b=r.type===M?36012:r.type===y?33190:r.type===S?35056:33189:r.type===M&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),r.format===T&&6402===b&&r.type!==_&&r.type!==y&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),r.type=y,x=s.convert(r.type)),r.format===A&&6402===b&&(b=34041,r.type!==S&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),r.type=S,x=s.convert(r.type))),R&&(L?i.texStorage2D(3553,1,b,n.width,n.height):i.texImage2D(3553,0,b,n.width,n.height,0,g,x,null));else if(r.isDataTexture)if(E.length>0&&m){L&&R&&i.texStorage2D(3553,P,b,E[0].width,E[0].height);for(let t=0,e=E.length;t<e;t++)v=E[t],L?i.texSubImage2D(3553,t,0,0,v.width,v.height,g,x,v.data):i.texImage2D(3553,t,b,v.width,v.height,0,g,x,v.data);r.generateMipmaps=!1}else L?(R&&i.texStorage2D(3553,P,b,n.width,n.height),i.texSubImage2D(3553,0,0,0,n.width,n.height,g,x,n.data)):i.texImage2D(3553,0,b,n.width,n.height,0,g,x,n.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){L&&R&&i.texStorage3D(35866,P,b,E[0].width,E[0].height,n.depth);for(let t=0,e=E.length;t<e;t++)v=E[t],r.format!==w?null!==g?L?i.compressedTexSubImage3D(35866,t,0,0,0,v.width,v.height,n.depth,g,v.data,0,0):i.compressedTexImage3D(35866,t,b,v.width,v.height,n.depth,0,v.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage3D(35866,t,0,0,0,v.width,v.height,n.depth,g,x,v.data):i.texImage3D(35866,t,b,v.width,v.height,n.depth,0,g,x,v.data)}else{L&&R&&i.texStorage2D(3553,P,b,E[0].width,E[0].height);for(let t=0,e=E.length;t<e;t++)v=E[t],r.format!==w?null!==g?L?i.compressedTexSubImage2D(3553,t,0,0,v.width,v.height,g,v.data):i.compressedTexImage2D(3553,t,b,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?i.texSubImage2D(3553,t,0,0,v.width,v.height,g,x,v.data):i.texImage2D(3553,t,b,v.width,v.height,0,g,x,v.data)}else if(r.isDataArrayTexture)L?(R&&i.texStorage3D(35866,P,b,n.width,n.height,n.depth),i.texSubImage3D(35866,0,0,0,0,n.width,n.height,n.depth,g,x,n.data)):i.texImage3D(35866,0,b,n.width,n.height,n.depth,0,g,x,n.data);else if(r.isData3DTexture)L?(R&&i.texStorage3D(32879,P,b,n.width,n.height,n.depth),i.texSubImage3D(32879,0,0,0,0,n.width,n.height,n.depth,g,x,n.data)):i.texImage3D(32879,0,b,n.width,n.height,n.depth,0,g,x,n.data);else if(r.isFramebufferTexture){if(R)if(L)i.texStorage2D(3553,P,b,n.width,n.height);else{let t=n.width,e=n.height;for(let n=0;n<P;n++)i.texImage2D(3553,n,b,t,e,0,g,x,null),t>>=1,e>>=1}}else if(E.length>0&&m){L&&R&&i.texStorage2D(3553,P,b,E[0].width,E[0].height);for(let t=0,e=E.length;t<e;t++)v=E[t],L?i.texSubImage2D(3553,t,0,0,g,x,v):i.texImage2D(3553,t,b,g,x,v);r.generateMipmaps=!1}else L?(R&&i.texStorage2D(3553,P,b,n.width,n.height),i.texSubImage2D(3553,0,0,0,g,x,n)):i.texImage2D(3553,0,b,g,x,n);F(r,m)&&k(l),p.__version=u.version,r.onUpdate&&r.onUpdate(r)}e.__version=r.version}function tt(e,r,a,o,l){const c=s.convert(a.format,a.encoding),h=s.convert(a.type),u=G(a.internalFormat,c,h,a.encoding);n.get(r).__hasExternalTextures||(32879===l||35866===l?i.texImage3D(l,0,u,r.width,r.height,r.depth,0,c,h,null):i.texImage2D(l,0,u,r.width,r.height,0,c,h,null)),i.bindFramebuffer(36160,e),rt(r)?R.framebufferTexture2DMultisampleEXT(36160,o,l,n.get(a).__webglTexture,0,nt(r)):(3553===l||l>=34069&&l<=34074)&&t.framebufferTexture2D(36160,o,l,n.get(a).__webglTexture,0),i.bindFramebuffer(36160,null)}function et(e,i,n){if(t.bindRenderbuffer(36161,e),i.depthBuffer&&!i.stencilBuffer){let r=33189;if(n||rt(i)){const e=i.depthTexture;e&&e.isDepthTexture&&(e.type===M?r=36012:e.type===y&&(r=33190));const n=nt(i);rt(i)?R.renderbufferStorageMultisampleEXT(36161,n,r,i.width,i.height):t.renderbufferStorageMultisample(36161,n,r,i.width,i.height)}else t.renderbufferStorage(36161,r,i.width,i.height);t.framebufferRenderbuffer(36160,36096,36161,e)}else if(i.depthBuffer&&i.stencilBuffer){const r=nt(i);n&&!1===rt(i)?t.renderbufferStorageMultisample(36161,r,35056,i.width,i.height):rt(i)?R.renderbufferStorageMultisampleEXT(36161,r,35056,i.width,i.height):t.renderbufferStorage(36161,34041,i.width,i.height),t.framebufferRenderbuffer(36160,33306,36161,e)}else{const e=!0===i.isWebGLMultipleRenderTargets?i.texture:[i.texture];for(let r=0;r<e.length;r++){const a=e[r],o=s.convert(a.format,a.encoding),l=s.convert(a.type),c=G(a.internalFormat,o,l,a.encoding),h=nt(i);n&&!1===rt(i)?t.renderbufferStorageMultisample(36161,h,c,i.width,i.height):rt(i)?R.renderbufferStorageMultisampleEXT(36161,h,c,i.width,i.height):t.renderbufferStorage(36161,c,i.width,i.height)}}t.bindRenderbuffer(36161,null)}function it(e){const r=n.get(e),s=!0===e.isWebGLCubeRenderTarget;if(e.depthTexture&&!r.__autoAllocateDepthBuffer){if(s)throw new Error("target.depthTexture not supported in Cube render targets");!function(e,r){if(r&&r.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(36160,e),!r.depthTexture||!r.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(r.depthTexture).__webglTexture&&r.depthTexture.image.width===r.width&&r.depthTexture.image.height===r.height||(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),Y(r.depthTexture,0);const s=n.get(r.depthTexture).__webglTexture,a=nt(r);if(r.depthTexture.format===T)rt(r)?R.framebufferTexture2DMultisampleEXT(36160,36096,3553,s,0,a):t.framebufferTexture2D(36160,36096,3553,s,0);else{if(r.depthTexture.format!==A)throw new Error("Unknown depthTexture format");rt(r)?R.framebufferTexture2DMultisampleEXT(36160,33306,3553,s,0,a):t.framebufferTexture2D(36160,33306,3553,s,0)}}(r.__webglFramebuffer,e)}else if(s){r.__webglDepthbuffer=[];for(let n=0;n<6;n++)i.bindFramebuffer(36160,r.__webglFramebuffer[n]),r.__webglDepthbuffer[n]=t.createRenderbuffer(),et(r.__webglDepthbuffer[n],e,!1)}else i.bindFramebuffer(36160,r.__webglFramebuffer),r.__webglDepthbuffer=t.createRenderbuffer(),et(r.__webglDepthbuffer,e,!1);i.bindFramebuffer(36160,null)}function nt(t){return Math.min(L,t.samples)}function rt(t){const i=n.get(t);return o&&t.samples>0&&!0===e.has("WEBGL_multisampled_render_to_texture")&&!1!==i.__useRenderToTexture}function st(t,i){const n=t.encoding,r=t.format,s=t.type;return!0===t.isCompressedTexture||!0===t.isVideoTexture||t.format===pt||n!==at&&(n===ot?!1===o?!0===e.has("EXT_sRGB")&&r===w?(t.format=pt,t.minFilter=f,t.generateMipmaps=!1):i=Yt.sRGBToLinear(i):r===w&&s===x||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",n)),i}this.allocateTextureUnit=function(){const t=X;return t>=l&&console.warn("THREE.WebGLTextures: Trying to use "+t+" texture units while this GPU supports only "+l),X+=1,t},this.resetTextureUnits=function(){X=0},this.setTexture2D=Y,this.setTexture2DArray=function(t,e){const r=n.get(t);t.version>0&&r.__version!==t.version?Q(r,t,e):i.bindTexture(35866,r.__webglTexture,33984+e)},this.setTexture3D=function(t,e){const r=n.get(t);t.version>0&&r.__version!==t.version?Q(r,t,e):i.bindTexture(32879,r.__webglTexture,33984+e)},this.setTextureCube=function(e,r){const a=n.get(e);e.version>0&&a.__version!==e.version?function(e,r,a){if(6!==r.image.length)return;const l=$(e,r),c=r.source;i.bindTexture(34067,e.__webglTexture,33984+a);const h=n.get(c);if(c.version!==h.__version||!0===l){i.activeTexture(33984+a),t.pixelStorei(37440,r.flipY),t.pixelStorei(37441,r.premultiplyAlpha),t.pixelStorei(3317,r.unpackAlignment),t.pixelStorei(37443,0);const e=r.isCompressedTexture||r.image[0].isCompressedTexture,n=r.image[0]&&r.image[0].isDataTexture,u=[];for(let t=0;t<6;t++)u[t]=e||n?n?r.image[t].image:r.image[t]:U(r.image[t],!1,!0,E),u[t]=st(r,u[t]);const d=u[0],p=B(d)||o,m=s.convert(r.format,r.encoding),f=s.convert(r.type),g=G(r.internalFormat,m,f,r.encoding),v=o&&!0!==r.isVideoTexture,x=void 0===h.__version||!0===l;let _,y=V(r,d,p);if(K(34067,r,p),e){v&&x&&i.texStorage2D(34067,y,g,d.width,d.height);for(let t=0;t<6;t++){_=u[t].mipmaps;for(let e=0;e<_.length;e++){const n=_[e];r.format!==w?null!==m?v?i.compressedTexSubImage2D(34069+t,e,0,0,n.width,n.height,m,n.data):i.compressedTexImage2D(34069+t,e,g,n.width,n.height,0,n.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?i.texSubImage2D(34069+t,e,0,0,n.width,n.height,m,f,n.data):i.texImage2D(34069+t,e,g,n.width,n.height,0,m,f,n.data)}}}else{_=r.mipmaps,v&&x&&(_.length>0&&y++,i.texStorage2D(34067,y,g,u[0].width,u[0].height));for(let t=0;t<6;t++)if(n){v?i.texSubImage2D(34069+t,0,0,0,u[t].width,u[t].height,m,f,u[t].data):i.texImage2D(34069+t,0,g,u[t].width,u[t].height,0,m,f,u[t].data);for(let e=0;e<_.length;e++){const n=_[e].image[t].image;v?i.texSubImage2D(34069+t,e+1,0,0,n.width,n.height,m,f,n.data):i.texImage2D(34069+t,e+1,g,n.width,n.height,0,m,f,n.data)}}else{v?i.texSubImage2D(34069+t,0,0,0,m,f,u[t]):i.texImage2D(34069+t,0,g,m,f,u[t]);for(let e=0;e<_.length;e++){const n=_[e];v?i.texSubImage2D(34069+t,e+1,0,0,m,f,n.image[t]):i.texImage2D(34069+t,e+1,g,m,f,n.image[t])}}}F(r,p)&&k(34067),h.__version=c.version,r.onUpdate&&r.onUpdate(r)}e.__version=r.version}(a,e,r):i.bindTexture(34067,a.__webglTexture,33984+r)},this.rebindTextures=function(t,e,i){const r=n.get(t);void 0!==e&&tt(r.__webglFramebuffer,t,t.texture,36064,3553),void 0!==i&&it(t)},this.setupRenderTarget=function(e){const l=e.texture,c=n.get(e),h=n.get(l);e.addEventListener("dispose",j),!0!==e.isWebGLMultipleRenderTargets&&(void 0===h.__webglTexture&&(h.__webglTexture=t.createTexture()),h.__version=l.version,a.memory.textures++);const u=!0===e.isWebGLCubeRenderTarget,d=!0===e.isWebGLMultipleRenderTargets,p=B(e)||o;if(u){c.__webglFramebuffer=[];for(let e=0;e<6;e++)c.__webglFramebuffer[e]=t.createFramebuffer()}else{if(c.__webglFramebuffer=t.createFramebuffer(),d)if(r.drawBuffers){const i=e.texture;for(let e=0,r=i.length;e<r;e++){const r=n.get(i[e]);void 0===r.__webglTexture&&(r.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&e.samples>0&&!1===rt(e)){const n=d?l:[l];c.__webglMultisampledFramebuffer=t.createFramebuffer(),c.__webglColorRenderbuffer=[],i.bindFramebuffer(36160,c.__webglMultisampledFramebuffer);for(let i=0;i<n.length;i++){const r=n[i];c.__webglColorRenderbuffer[i]=t.createRenderbuffer(),t.bindRenderbuffer(36161,c.__webglColorRenderbuffer[i]);const a=s.convert(r.format,r.encoding),o=s.convert(r.type),l=G(r.internalFormat,a,o,r.encoding,!0===e.isXRRenderTarget),h=nt(e);t.renderbufferStorageMultisample(36161,h,l,e.width,e.height),t.framebufferRenderbuffer(36160,36064+i,36161,c.__webglColorRenderbuffer[i])}t.bindRenderbuffer(36161,null),e.depthBuffer&&(c.__webglDepthRenderbuffer=t.createRenderbuffer(),et(c.__webglDepthRenderbuffer,e,!0)),i.bindFramebuffer(36160,null)}}if(u){i.bindTexture(34067,h.__webglTexture),K(34067,l,p);for(let t=0;t<6;t++)tt(c.__webglFramebuffer[t],e,l,36064,34069+t);F(l,p)&&k(34067),i.unbindTexture()}else if(d){const t=e.texture;for(let r=0,s=t.length;r<s;r++){const s=t[r],a=n.get(s);i.bindTexture(3553,a.__webglTexture),K(3553,s,p),tt(c.__webglFramebuffer,e,s,36064+r,3553),F(s,p)&&k(3553)}i.unbindTexture()}else{let t=3553;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o?t=e.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(t,h.__webglTexture),K(t,l,p),tt(c.__webglFramebuffer,e,l,36064,t),F(l,p)&&k(t),i.unbindTexture()}e.depthBuffer&&it(e)},this.updateRenderTargetMipmap=function(t){const e=B(t)||o,r=!0===t.isWebGLMultipleRenderTargets?t.texture:[t.texture];for(let s=0,a=r.length;s<a;s++){const a=r[s];if(F(a,e)){const e=t.isWebGLCubeRenderTarget?34067:3553,r=n.get(a).__webglTexture;i.bindTexture(e,r),k(e),i.unbindTexture()}}},this.updateMultisampleRenderTarget=function(e){if(o&&e.samples>0&&!1===rt(e)){const r=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],s=e.width,a=e.height;let o=16384;const l=[],c=e.stencilBuffer?33306:36096,h=n.get(e),u=!0===e.isWebGLMultipleRenderTargets;if(u)for(let e=0;e<r.length;e++)i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+e,36161,null),i.bindFramebuffer(36160,h.__webglFramebuffer),t.framebufferTexture2D(36009,36064+e,3553,null,0);i.bindFramebuffer(36008,h.__webglMultisampledFramebuffer),i.bindFramebuffer(36009,h.__webglFramebuffer);for(let i=0;i<r.length;i++){l.push(36064+i),e.depthBuffer&&l.push(c);const d=void 0!==h.__ignoreDepthValues&&h.__ignoreDepthValues;if(!1===d&&(e.depthBuffer&&(o|=256),e.stencilBuffer&&(o|=1024)),u&&t.framebufferRenderbuffer(36008,36064,36161,h.__webglColorRenderbuffer[i]),!0===d&&(t.invalidateFramebuffer(36008,[c]),t.invalidateFramebuffer(36009,[c])),u){const e=n.get(r[i]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,e,0)}t.blitFramebuffer(0,0,s,a,0,0,s,a,o,9728),P&&t.invalidateFramebuffer(36008,l)}if(i.bindFramebuffer(36008,null),i.bindFramebuffer(36009,null),u)for(let e=0;e<r.length;e++){i.bindFramebuffer(36160,h.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+e,36161,h.__webglColorRenderbuffer[e]);const s=n.get(r[e]).__webglTexture;i.bindFramebuffer(36160,h.__webglFramebuffer),t.framebufferTexture2D(36009,36064+e,3553,s,0)}i.bindFramebuffer(36009,h.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=rt}function Vs(t,e,i){const n=i.isWebGL2;return{convert:function(i,r=null){let s;if(i===x)return 5121;if(1017===i)return 32819;if(1018===i)return 32820;if(1010===i)return 5120;if(1011===i)return 5122;if(i===_)return 5123;if(1013===i)return 5124;if(i===y)return 5125;if(i===M)return 5126;if(i===b)return n?5131:(s=e.get("OES_texture_half_float"),null!==s?s.HALF_FLOAT_OES:null);if(1021===i)return 6406;if(i===w)return 6408;if(1024===i)return 6409;if(1025===i)return 6410;if(i===T)return 6402;if(i===A)return 34041;if(1022===i)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(i===pt)return s=e.get("EXT_sRGB"),null!==s?s.SRGB_ALPHA_EXT:null;if(1028===i)return 6403;if(1029===i)return 36244;if(1030===i)return 33319;if(1031===i)return 33320;if(1033===i)return 36249;if(i===E||i===C||i===L||i===R)if(r===ot){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),null===s)return null;if(i===E)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===C)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===L)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===R)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),null===s)return null;if(i===E)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===C)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===L)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===R)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===P||i===I||i===D||i===N){if(s=e.get("WEBGL_compressed_texture_pvrtc"),null===s)return null;if(i===P)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===I)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===D)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===N)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===i)return s=e.get("WEBGL_compressed_texture_etc1"),null!==s?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===O||i===z){if(s=e.get("WEBGL_compressed_texture_etc"),null===s)return null;if(i===O)return r===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===z)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(i===U||i===B||i===F||i===k||i===G||i===V||i===H||i===W||i===j||i===q||i===X||i===Y||i===Z||i===J){if(s=e.get("WEBGL_compressed_texture_astc"),null===s)return null;if(i===U)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===B)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===F)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===k)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===G)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===V)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===H)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===W)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===j)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===q)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===X)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Y)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Z)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===J)return r===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===K){if(s=e.get("EXT_texture_compression_bptc"),null===s)return null;if(i===K)return r===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}return i===S?n?34042:(s=e.get("WEBGL_depth_texture"),null!==s?s.UNSIGNED_INT_24_8_WEBGL:null):void 0!==t[i]?t[i]:null}}}class Hs extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ws extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const js={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState){if(l&&t.hand){s=!0;for(const n of t.hand.values()){const t=e.getJointPose(n,i),r=this._getHandJoint(l,n);null!==t&&(r.matrix.fromArray(t.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.jointRadius=t.radius),r.visible=null!==t}const n=l.joints["index-finger-tip"],r=l.joints["thumb-tip"],a=n.position.distanceTo(r.position),o=.02,c=.005;l.inputState.pinching&&a>o+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&a<=o-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else null!==o&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),null!==r&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));null!==a&&(n=e.getPose(t.targetRaySpace,i),null===n&&null!==r&&(n=r),null!==n&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(js)))}return null!==a&&(a.visible=null!==n),null!==o&&(o.visible=null!==r),null!==l&&(l.visible=null!==s),this}_getHandJoint(t,e){if(void 0===t.joints[e.jointName]){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Xs extends $t{constructor(t,e,i,n,r,s,a,o,l,c){if((c=void 0!==c?c:T)!==T&&c!==A)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===i&&c===T&&(i=y),void 0===i&&c===A&&(i=S),super(null,n,r,s,a,o,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=void 0!==a?a:d,this.minFilter=void 0!==o?o:d,this.flipY=!1,this.generateMipmaps=!1}}class Ys extends mt{constructor(t,e){super();const i=this;let n=null,r=1,s=!1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,p=null;const m=e.getContextAttributes();let f=null,g=null;const v=[],_=[],M=new Set,b=new Map,E=new on;E.layers.enable(1),E.viewport=new Qt;const C=new on;C.layers.enable(2),C.viewport=new Qt;const L=[E,C],R=new Hs;R.layers.enable(1),R.layers.enable(2);let P=null,I=null;function D(t){const e=_.indexOf(t.inputSource);if(-1===e)return;const i=v[e];void 0!==i&&i.dispatchEvent({type:t.type,data:t.inputSource})}function N(){n.removeEventListener("select",D),n.removeEventListener("selectstart",D),n.removeEventListener("selectend",D),n.removeEventListener("squeeze",D),n.removeEventListener("squeezestart",D),n.removeEventListener("squeezeend",D),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",O);for(let t=0;t<v.length;t++){const e=_[t];null!==e&&(_[t]=null,v[t].disconnect(e))}P=null,I=null,t.setRenderTarget(f),d=null,u=null,h=null,n=null,g=null,k.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}function O(t){for(let e=0;e<t.removed.length;e++){const i=t.removed[e],n=_.indexOf(i);n>=0&&(_[n]=null,v[n].disconnect(i))}for(let e=0;e<t.added.length;e++){const i=t.added[e];let n=_.indexOf(i);if(-1===n){for(let t=0;t<v.length;t++){if(t>=_.length){_.push(i),n=t;break}if(null===_[t]){_[t]=i,n=t;break}}if(-1===n)break}const r=v[n];r&&r.connect(i)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(t){let e=v[t];return void 0===e&&(e=new qs,v[t]=e),e.getTargetRaySpace()},this.getControllerGrip=function(t){let e=v[t];return void 0===e&&(e=new qs,v[t]=e),e.getGripSpace()},this.getHand=function(t){let e=v[t];return void 0===e&&(e=new qs,v[t]=e),e.getHandSpace()},this.setFramebufferScaleFactor=function(t,e=!1){r=t,s=e,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(t){o=t,!0===i.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(t){l=t},this.getBaseLayer=function(){return null!==u?u:d},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(c){if(n=c,null!==n){if(f=t.getRenderTarget(),n.addEventListener("select",D),n.addEventListener("selectstart",D),n.addEventListener("selectend",D),n.addEventListener("squeeze",D),n.addEventListener("squeezestart",D),n.addEventListener("squeezeend",D),n.addEventListener("end",N),n.addEventListener("inputsourceschange",O),!0!==m.xrCompatible&&await e.makeXRCompatible(),!0===s&&XRWebGLLayer.getNativeFramebufferScaleFactor){const t=XRWebGLLayer.getNativeFramebufferScaleFactor(n);t<r&&(r=t)}if(void 0===n.renderState.layers||!1===t.capabilities.isWebGL2){const i={antialias:void 0!==n.renderState.layers||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,e,i),n.updateRenderState({baseLayer:d}),g=new te(d.framebufferWidth,d.framebufferHeight,{format:w,type:x,encoding:t.outputEncoding,stencilBuffer:m.stencil})}else{let i=null,s=null,a=null;m.depth&&(a=m.stencil?35056:33190,i=m.stencil?A:T,s=m.stencil?S:y);const o={colorFormat:32856,depthFormat:a,scaleFactor:r};h=new XRWebGLBinding(n,e),u=h.createProjectionLayer(o),n.updateRenderState({layers:[u]}),g=new te(u.textureWidth,u.textureHeight,{format:w,type:x,depthTexture:new Xs(u.textureWidth,u.textureHeight,s,void 0,void 0,void 0,void 0,void 0,void 0,i),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});t.properties.get(g).__ignoreDepthValues=u.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await n.requestReferenceSpace(o),k.setContext(n),k.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};const z=new re,U=new re;function B(t,e){null===e?t.matrixWorld.copy(t.matrix):t.matrixWorld.multiplyMatrices(e.matrixWorld,t.matrix),t.matrixWorldInverse.copy(t.matrixWorld).invert()}this.updateCamera=function(t){if(null===n)return;R.near=C.near=E.near=t.near,R.far=C.far=E.far=t.far,P===R.near&&I===R.far||(n.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,I=R.far);const e=t.parent,i=R.cameras;B(R,e);for(let t=0;t<i.length;t++)B(i[t],e);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),t.matrix.copy(R.matrix),t.matrix.decompose(t.position,t.quaternion,t.scale);const r=t.children;for(let t=0,e=r.length;t<e;t++)r[t].updateMatrixWorld(!0);2===i.length?function(t,e,i){z.setFromMatrixPosition(e.matrixWorld),U.setFromMatrixPosition(i.matrixWorld);const n=z.distanceTo(U),r=e.projectionMatrix.elements,s=i.projectionMatrix.elements,a=r[14]/(r[10]-1),o=r[14]/(r[10]+1),l=(r[9]+1)/r[5],c=(r[9]-1)/r[5],h=(r[8]-1)/r[0],u=(s[8]+1)/s[0],d=a*h,p=a*u,m=n/(-h+u),f=m*-h;e.matrixWorld.decompose(t.position,t.quaternion,t.scale),t.translateX(f),t.translateZ(m),t.matrixWorld.compose(t.position,t.quaternion,t.scale),t.matrixWorldInverse.copy(t.matrixWorld).invert();const g=a+m,v=o+m,x=d-f,_=p+(n-f),y=l*o/v*g,M=c*o/v*g;t.projectionMatrix.makePerspective(x,_,y,M,g,v)}(R,E,C):R.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){return null!==u?u.fixedFoveation:null!==d?d.fixedFoveation:void 0},this.setFoveation=function(t){null!==u&&(u.fixedFoveation=t),null!==d&&void 0!==d.fixedFoveation&&(d.fixedFoveation=t)},this.getPlanes=function(){return M};let F=null;const k=new _n;k.setAnimationLoop((function(e,n){if(c=n.getViewerPose(l||a),p=n,null!==c){const e=c.views;null!==d&&(t.setRenderTargetFramebuffer(g,d.framebuffer),t.setRenderTarget(g));let i=!1;e.length!==R.cameras.length&&(R.cameras.length=0,i=!0);for(let n=0;n<e.length;n++){const r=e[n];let s=null;if(null!==d)s=d.getViewport(r);else{const e=h.getViewSubImage(u,r);s=e.viewport,0===n&&(t.setRenderTargetTextures(g,e.colorTexture,u.ignoreDepthValues?void 0:e.depthStencilTexture),t.setRenderTarget(g))}let a=L[n];void 0===a&&(a=new on,a.layers.enable(n),a.viewport=new Qt,L[n]=a),a.matrix.fromArray(r.transform.matrix),a.projectionMatrix.fromArray(r.projectionMatrix),a.viewport.set(s.x,s.y,s.width,s.height),0===n&&R.matrix.copy(a.matrix),!0===i&&R.cameras.push(a)}}for(let t=0;t<v.length;t++){const e=_[t],i=v[t];null!==e&&void 0!==i&&i.update(e,n,l||a)}if(F&&F(e,n),n.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:n.detectedPlanes});let t=null;for(const e of M)n.detectedPlanes.has(e)||(null===t&&(t=[]),t.push(e));if(null!==t)for(const e of t)M.delete(e),b.delete(e),i.dispatchEvent({type:"planeremoved",data:e});for(const t of n.detectedPlanes)if(M.has(t)){const e=b.get(t);t.lastChangedTime>e&&(b.set(t,t.lastChangedTime),i.dispatchEvent({type:"planechanged",data:t}))}else M.add(t),b.set(t,n.lastChangedTime),i.dispatchEvent({type:"planeadded",data:t})}p=null})),this.setAnimationLoop=function(t){F=t},this.dispose=function(){}}}function Zs(t,e){function i(i,n){i.opacity.value=n.opacity,n.color&&i.diffuse.value.copy(n.color),n.emissive&&i.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(i.map.value=n.map),n.alphaMap&&(i.alphaMap.value=n.alphaMap),n.bumpMap&&(i.bumpMap.value=n.bumpMap,i.bumpScale.value=n.bumpScale,1===n.side&&(i.bumpScale.value*=-1)),n.displacementMap&&(i.displacementMap.value=n.displacementMap,i.displacementScale.value=n.displacementScale,i.displacementBias.value=n.displacementBias),n.emissiveMap&&(i.emissiveMap.value=n.emissiveMap),n.normalMap&&(i.normalMap.value=n.normalMap,i.normalScale.value.copy(n.normalScale),1===n.side&&i.normalScale.value.negate()),n.specularMap&&(i.specularMap.value=n.specularMap),n.alphaTest>0&&(i.alphaTest.value=n.alphaTest);const r=e.get(n).envMap;if(r&&(i.envMap.value=r,i.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,i.reflectivity.value=n.reflectivity,i.ior.value=n.ior,i.refractionRatio.value=n.refractionRatio),n.lightMap){i.lightMap.value=n.lightMap;const e=!0!==t.physicallyCorrectLights?Math.PI:1;i.lightMapIntensity.value=n.lightMapIntensity*e}let s,a;n.aoMap&&(i.aoMap.value=n.aoMap,i.aoMapIntensity.value=n.aoMapIntensity),n.map?s=n.map:n.specularMap?s=n.specularMap:n.displacementMap?s=n.displacementMap:n.normalMap?s=n.normalMap:n.bumpMap?s=n.bumpMap:n.roughnessMap?s=n.roughnessMap:n.metalnessMap?s=n.metalnessMap:n.alphaMap?s=n.alphaMap:n.emissiveMap?s=n.emissiveMap:n.clearcoatMap?s=n.clearcoatMap:n.clearcoatNormalMap?s=n.clearcoatNormalMap:n.clearcoatRoughnessMap?s=n.clearcoatRoughnessMap:n.iridescenceMap?s=n.iridescenceMap:n.iridescenceThicknessMap?s=n.iridescenceThicknessMap:n.specularIntensityMap?s=n.specularIntensityMap:n.specularColorMap?s=n.specularColorMap:n.transmissionMap?s=n.transmissionMap:n.thicknessMap?s=n.thicknessMap:n.sheenColorMap?s=n.sheenColorMap:n.sheenRoughnessMap&&(s=n.sheenRoughnessMap),void 0!==s&&(s.isWebGLRenderTarget&&(s=s.texture),!0===s.matrixAutoUpdate&&s.updateMatrix(),i.uvTransform.value.copy(s.matrix)),n.aoMap?a=n.aoMap:n.lightMap&&(a=n.lightMap),void 0!==a&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),i.uv2Transform.value.copy(a.matrix))}return{refreshFogUniforms:function(e,i){i.color.getRGB(e.fogColor.value,nn(t)),i.isFog?(e.fogNear.value=i.near,e.fogFar.value=i.far):i.isFogExp2&&(e.fogDensity.value=i.density)},refreshMaterialUniforms:function(t,n,r,s,a){n.isMeshBasicMaterial||n.isMeshLambertMaterial?i(t,n):n.isMeshToonMaterial?(i(t,n),function(t,e){e.gradientMap&&(t.gradientMap.value=e.gradientMap)}(t,n)):n.isMeshPhongMaterial?(i(t,n),function(t,e){t.specular.value.copy(e.specular),t.shininess.value=Math.max(e.shininess,1e-4)}(t,n)):n.isMeshStandardMaterial?(i(t,n),function(t,i){t.roughness.value=i.roughness,t.metalness.value=i.metalness,i.roughnessMap&&(t.roughnessMap.value=i.roughnessMap);i.metalnessMap&&(t.metalnessMap.value=i.metalnessMap);e.get(i).envMap&&(t.envMapIntensity.value=i.envMapIntensity)}(t,n),n.isMeshPhysicalMaterial&&function(t,e,i){t.ior.value=e.ior,e.sheen>0&&(t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen),t.sheenRoughness.value=e.sheenRoughness,e.sheenColorMap&&(t.sheenColorMap.value=e.sheenColorMap),e.sheenRoughnessMap&&(t.sheenRoughnessMap.value=e.sheenRoughnessMap));e.clearcoat>0&&(t.clearcoat.value=e.clearcoat,t.clearcoatRoughness.value=e.clearcoatRoughness,e.clearcoatMap&&(t.clearcoatMap.value=e.clearcoatMap),e.clearcoatRoughnessMap&&(t.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap),e.clearcoatNormalMap&&(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),t.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&t.clearcoatNormalScale.value.negate()));e.iridescence>0&&(t.iridescence.value=e.iridescence,t.iridescenceIOR.value=e.iridescenceIOR,t.iridescenceThicknessMinimum.value=e.iridescenceThicknessRange[0],t.iridescenceThicknessMaximum.value=e.iridescenceThicknessRange[1],e.iridescenceMap&&(t.iridescenceMap.value=e.iridescenceMap),e.iridescenceThicknessMap&&(t.iridescenceThicknessMap.value=e.iridescenceThicknessMap));e.transmission>0&&(t.transmission.value=e.transmission,t.transmissionSamplerMap.value=i.texture,t.transmissionSamplerSize.value.set(i.width,i.height),e.transmissionMap&&(t.transmissionMap.value=e.transmissionMap),t.thickness.value=e.thickness,e.thicknessMap&&(t.thicknessMap.value=e.thicknessMap),t.attenuationDistance.value=e.attenuationDistance,t.attenuationColor.value.copy(e.attenuationColor));t.specularIntensity.value=e.specularIntensity,t.specularColor.value.copy(e.specularColor),e.specularIntensityMap&&(t.specularIntensityMap.value=e.specularIntensityMap);e.specularColorMap&&(t.specularColorMap.value=e.specularColorMap)}(t,n,a)):n.isMeshMatcapMaterial?(i(t,n),function(t,e){e.matcap&&(t.matcap.value=e.matcap)}(t,n)):n.isMeshDepthMaterial?i(t,n):n.isMeshDistanceMaterial?(i(t,n),function(t,e){t.referencePosition.value.copy(e.referencePosition),t.nearDistance.value=e.nearDistance,t.farDistance.value=e.farDistance}(t,n)):n.isMeshNormalMaterial?i(t,n):n.isLineBasicMaterial?(function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity}(t,n),n.isLineDashedMaterial&&function(t,e){t.dashSize.value=e.dashSize,t.totalSize.value=e.dashSize+e.gapSize,t.scale.value=e.scale}(t,n)):n.isPointsMaterial?function(t,e,i,n){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.size.value=e.size*i,t.scale.value=.5*n,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);let r;e.map?r=e.map:e.alphaMap&&(r=e.alphaMap);void 0!==r&&(!0===r.matrixAutoUpdate&&r.updateMatrix(),t.uvTransform.value.copy(r.matrix))}(t,n,r,s):n.isSpriteMaterial?function(t,e){t.diffuse.value.copy(e.color),t.opacity.value=e.opacity,t.rotation.value=e.rotation,e.map&&(t.map.value=e.map);e.alphaMap&&(t.alphaMap.value=e.alphaMap);e.alphaTest>0&&(t.alphaTest.value=e.alphaTest);let i;e.map?i=e.map:e.alphaMap&&(i=e.alphaMap);void 0!==i&&(!0===i.matrixAutoUpdate&&i.updateMatrix(),t.uvTransform.value.copy(i.matrix))}(t,n):n.isShadowMaterial?(t.color.value.copy(n.color),t.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}}}function Js(t,e,i,n){let r={},s={},a=[];const o=i.isWebGL2?t.getParameter(35375):0;function l(t,e,i){const n=t.value;if(void 0===i[e])return i[e]="number"==typeof n?n:n.clone(),!0;if("number"==typeof n){if(i[e]!==n)return i[e]=n,!0}else{const t=i[e];if(!1===t.equals(n))return t.copy(n),!0}return!1}function c(t){const e=t.value,i={bounceary:0,storage:0};return"number"==typeof e?(i.bounceary=4,i.storage=4):e.isVector2?(i.bounceary=8,i.storage=8):e.isVector3||e.isColor?(i.bounceary=16,i.storage=12):e.isVector4?(i.bounceary=16,i.storage=16):e.isMatrix3?(i.bounceary=48,i.storage=48):e.isMatrix4?(i.bounceary=64,i.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),i}function h(e){const i=e.target;i.removeEventListener("dispose",h);const n=a.indexOf(i.__bindingPointIndex);a.splice(n,1),t.deleteBuffer(r[i.id]),delete r[i.id],delete s[i.id]}return{bind:function(t,e){const i=e.program;n.uniformBlockBinding(t,i)},update:function(i,u){let d=r[i.id];void 0===d&&(!function(t){const e=t.uniforms;let i=0;const n=16;let r=0;for(let t=0,s=e.length;t<s;t++){const s=e[t],a=c(s);if(s.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),s.__offset=i,t>0){r=i%n;const t=n-r;0!==r&&t-a.bounceary<0&&(i+=n-r,s.__offset=i)}i+=a.storage}r=i%n,r>0&&(i+=n-r);t.__size=i,t.__cache={}}(i),d=function(e){const i=function(){for(let t=0;t<o;t++)if(-1===a.indexOf(t))return a.push(t),t;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();e.__bindingPointIndex=i;const n=t.createBuffer(),r=e.__size,s=e.usage;return t.bindBuffer(35345,n),t.bufferData(35345,r,s),t.bindBuffer(35345,null),t.bindBufferBase(35345,i,n),n}(i),r[i.id]=d,i.addEventListener("dispose",h));const p=u.program;n.updateUBOMapping(i,p);const m=e.render.frame;s[i.id]!==m&&(!function(e){const i=r[e.id],n=e.uniforms,s=e.__cache;t.bindBuffer(35345,i);for(let e=0,i=n.length;e<i;e++){const i=n[e];if(!0===l(i,e,s)){const e=i.value,n=i.__offset;"number"==typeof e?(i.__data[0]=e,t.bufferSubData(35345,n,i.__data)):(i.value.isMatrix3?(i.__data[0]=i.value.elements[0],i.__data[1]=i.value.elements[1],i.__data[2]=i.value.elements[2],i.__data[3]=i.value.elements[0],i.__data[4]=i.value.elements[3],i.__data[5]=i.value.elements[4],i.__data[6]=i.value.elements[5],i.__data[7]=i.value.elements[0],i.__data[8]=i.value.elements[6],i.__data[9]=i.value.elements[7],i.__data[10]=i.value.elements[8],i.__data[11]=i.value.elements[0]):e.toArray(i.__data),t.bufferSubData(35345,n,i.__data))}}t.bindBuffer(35345,null)}(i),s[i.id]=m)},dispose:function(){for(const e in r)t.deleteBuffer(r[e]);a=[],r={},s={}}}}function Ks(t={}){this.isWebGLRenderer=!0;const e=void 0!==t.canvas?t.canvas:function(){const t=Ot("canvas");return t.style.display="block",t}(),i=void 0!==t.context?t.context:null,n=void 0===t.depth||t.depth,r=void 0===t.stencil||t.stencil,s=void 0!==t.antialias&&t.antialias,a=void 0===t.premultipliedAlpha||t.premultipliedAlpha,o=void 0!==t.preserveDrawingBuffer&&t.preserveDrawingBuffer,l=void 0!==t.powerPreference?t.powerPreference:"default",c=void 0!==t.failIfMajorPerformanceCaveat&&t.failIfMajorPerformanceCaveat;let h;h=null!==i?i.getContextAttributes().alpha:void 0!==t.alpha&&t.alpha;let u=null,d=null;const p=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=at,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const f=this;let g=!1,_=0,y=0,S=null,T=-1,A=null;const E=new Qt,C=new Qt;let L=null,R=e.width,P=e.height,I=1,D=null,N=null;const O=new Qt(0,0,R,P),z=new Qt(0,0,R,P);let U=!1;const B=new xn;let F=!1,k=!1,G=null;const V=new Ne,H=new Lt,W=new re,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function q(){return null===S?I:1}let X,Y,Z,J,K,$,Q,tt,et,it,nt,rt,st,ot,lt,ct,ht,ut,dt,pt,mt,ft,gt,vt,xt=i;function _t(t,i){for(let n=0;n<t.length;n++){const r=t[n],s=e.getContext(r,i);if(null!==s)return s}return null}try{const t={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r147dev"),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),null===xt){const e=["webgl2","webgl","experimental-webgl"];if(!0===f.isWebGL1Renderer&&e.shift(),xt=_t(e,t),null===xt)throw _t(e)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}void 0===xt.getShaderPrecisionFormat&&(xt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(t){throw console.error("THREE.WebGLRenderer: "+t.message),t}function yt(){X=new Yn(xt),Y=new Ln(xt,X,t),X.init(Y),ft=new Vs(xt,X,Y),Z=new ks(xt,X,Y),J=new Kn,K=new As,$=new Gs(xt,X,Z,K,Y,ft,J),Q=new Pn(f),tt=new Xn(f),et=new yn(xt,Y),gt=new En(xt,X,et,Y),it=new Zn(xt,et,J,gt),nt=new er(xt,it,et,J),dt=new tr(xt,Y,$),ct=new Rn(K),rt=new Ts(f,Q,tt,X,Y,gt,ct),st=new Zs(f,K),ot=new Rs,lt=new zs(X,Y),ut=new An(f,Q,tt,Z,nt,h,a),ht=new Fs(f,nt,Y),vt=new Js(xt,J,Y,Z),pt=new Cn(xt,X,J,Y),mt=new Jn(xt,X,J,Y),J.programs=rt.programs,f.capabilities=Y,f.extensions=X,f.properties=K,f.renderLists=ot,f.shadowMap=ht,f.state=Z,f.info=J}yt();const Mt=new Ys(f,xt);function bt(t){t.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const t=J.autoReset,e=ht.enabled,i=ht.autoUpdate,n=ht.needsUpdate,r=ht.type;yt(),J.autoReset=t,ht.enabled=e,ht.autoUpdate=i,ht.needsUpdate=n,ht.type=r}function wt(t){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",t.statusMessage)}function At(t){const e=t.target;e.removeEventListener("dispose",At),function(t){(function(t){const e=K.get(t).programs;void 0!==e&&(e.forEach((function(t){rt.releaseProgram(t)})),t.isShaderMaterial&&rt.releaseShaderCache(t))})(t),K.remove(t)}(e)}this.xr=Mt,this.getContext=function(){return xt},this.getContextAttributes=function(){return xt.getContextAttributes()},this.forceContextLoss=function(){const t=X.get("WEBGL_lose_context");t&&t.loseContext()},this.forceContextRestore=function(){const t=X.get("WEBGL_lose_context");t&&t.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(t){void 0!==t&&(I=t,this.setSize(R,P,!1))},this.getSize=function(t){return t.set(R,P)},this.setSize=function(t,i,n){Mt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(R=t,P=i,e.width=Math.floor(t*I),e.height=Math.floor(i*I),!1!==n&&(e.style.width=t+"px",e.style.height=i+"px"),this.setViewport(0,0,t,i))},this.getDrawingBufferSize=function(t){return t.set(R*I,P*I).floor()},this.setDrawingBufferSize=function(t,i,n){R=t,P=i,I=n,e.width=Math.floor(t*n),e.height=Math.floor(i*n),this.setViewport(0,0,t,i)},this.getCurrentViewport=function(t){return t.copy(E)},this.getViewport=function(t){return t.copy(O)},this.setViewport=function(t,e,i,n){t.isVector4?O.set(t.x,t.y,t.z,t.w):O.set(t,e,i,n),Z.viewport(E.copy(O).multiplyScalar(I).floor())},this.getScissor=function(t){return t.copy(z)},this.setScissor=function(t,e,i,n){t.isVector4?z.set(t.x,t.y,t.z,t.w):z.set(t,e,i,n),Z.scissor(C.copy(z).multiplyScalar(I).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(t){Z.setScissorTest(U=t)},this.setOpaqueSort=function(t){D=t},this.setTransparentSort=function(t){N=t},this.getClearColor=function(t){return t.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(t=!0,e=!0,i=!0){let n=0;t&&(n|=16384),e&&(n|=256),i&&(n|=1024),xt.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),ot.dispose(),lt.dispose(),K.dispose(),Q.dispose(),tt.dispose(),nt.dispose(),gt.dispose(),vt.dispose(),rt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Ct),Mt.removeEventListener("sessionend",Rt),G&&(G.dispose(),G=null),Pt.stop()},this.renderBufferDirect=function(t,e,i,n,r,s){null===e&&(e=j);const a=r.isMesh&&r.matrixWorld.determinant()<0,o=function(t,e,i,n,r){!0!==e.isScene&&(e=j);$.resetTextureUnits();const s=e.fog,a=n.isMeshStandardMaterial?e.environment:null,o=null===S?f.outputEncoding:!0===S.isXRRenderTarget?S.texture.encoding:at,l=(n.isMeshStandardMaterial?tt:Q).get(n.envMap||a),c=!0===n.vertexColors&&!!i.attributes.color&&4===i.attributes.color.itemSize,h=!!n.normalMap&&!!i.attributes.tangent,u=!!i.morphAttributes.position,p=!!i.morphAttributes.normal,m=!!i.morphAttributes.color,g=n.toneMapped?f.toneMapping:0,v=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,x=void 0!==v?v.length:0,_=K.get(n),y=d.state.lights;if(!0===F&&(!0===k||t!==A)){const e=t===A&&n.id===T;ct.setState(n,t,e)}let M=!1;n.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version||_.outputEncoding!==o||r.isInstancedMesh&&!1===_.instancing?M=!0:r.isInstancedMesh||!0!==_.instancing?r.isSkinnedMesh&&!1===_.skinning?M=!0:r.isSkinnedMesh||!0!==_.skinning?_.envMap!==l||!0===n.fog&&_.fog!==s?M=!0:void 0===_.numClippingPlanes||_.numClippingPlanes===ct.numPlanes&&_.numIntersection===ct.numIntersection?(_.vertexAlphas!==c||_.vertexTangents!==h||_.morphTargets!==u||_.morphNormals!==p||_.morphColors!==m||_.toneMapping!==g||!0===Y.isWebGL2&&_.morphTargetsCount!==x)&&(M=!0):M=!0:M=!0:M=!0:(M=!0,_.__version=n.version);let b=_.currentProgram;!0===M&&(b=Ut(n,e,r));let w=!1,E=!1,C=!1;const L=b.getUniforms(),R=_.uniforms;Z.useProgram(b.program)&&(w=!0,E=!0,C=!0);n.id!==T&&(T=n.id,E=!0);if(w||A!==t){if(L.setValue(xt,"projectionMatrix",t.projectionMatrix),Y.logarithmicDepthBuffer&&L.setValue(xt,"logDepthBufFC",2/(Math.log(t.far+1)/Math.LN2)),A!==t&&(A=t,E=!0,C=!0),n.isShaderMaterial||n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshStandardMaterial||n.envMap){const e=L.map.cameraPosition;void 0!==e&&e.setValue(xt,W.setFromMatrixPosition(t.matrixWorld))}(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)&&L.setValue(xt,"isOrthographic",!0===t.isOrthographicCamera),(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial||n.isShadowMaterial||r.isSkinnedMesh)&&L.setValue(xt,"viewMatrix",t.matrixWorldInverse)}if(r.isSkinnedMesh){L.setOptional(xt,r,"bindMatrix"),L.setOptional(xt,r,"bindMatrixInverse");const t=r.skeleton;t&&(Y.floatVertexTextures?(null===t.boneTexture&&t.computeBoneTexture(),L.setValue(xt,"boneTexture",t.boneTexture,$),L.setValue(xt,"boneTextureSize",t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const D=i.morphAttributes;(void 0!==D.position||void 0!==D.normal||void 0!==D.color&&!0===Y.isWebGL2)&&dt.update(r,i,n,b);(E||_.receiveShadow!==r.receiveShadow)&&(_.receiveShadow=r.receiveShadow,L.setValue(xt,"receiveShadow",r.receiveShadow));n.isMeshGouraudMaterial&&null!==n.envMap&&(R.envMap.value=l,R.flipEnvMap.value=l.isCubeTexture&&!1===l.isRenderTargetTexture?-1:1);E&&(L.setValue(xt,"toneMappingExposure",f.toneMappingExposure),_.needsLights&&(O=C,(N=R).ambientLightColor.needsUpdate=O,N.lightProbe.needsUpdate=O,N.directionalLights.needsUpdate=O,N.directionalLightShadows.needsUpdate=O,N.pointLights.needsUpdate=O,N.pointLightShadows.needsUpdate=O,N.spotLights.needsUpdate=O,N.spotLightShadows.needsUpdate=O,N.rectAreaLights.needsUpdate=O,N.hemisphereLights.needsUpdate=O),s&&!0===n.fog&&st.refreshFogUniforms(R,s),st.refreshMaterialUniforms(R,n,I,P,G),ss.upload(xt,_.uniformsList,R,$));var N,O;n.isShaderMaterial&&!0===n.uniformsNeedUpdate&&(ss.upload(xt,_.uniformsList,R,$),n.uniformsNeedUpdate=!1);n.isSpriteMaterial&&L.setValue(xt,"center",r.center);if(L.setValue(xt,"modelViewMatrix",r.modelViewMatrix),L.setValue(xt,"normalMatrix",r.normalMatrix),L.setValue(xt,"modelMatrix",r.matrixWorld),n.isShaderMaterial||n.isRawShaderMaterial){const t=n.uniformsGroups;for(let e=0,i=t.length;e<i;e++)if(Y.isWebGL2){const i=t[e];vt.update(i,b),vt.bind(i,b)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return b}(t,e,i,n,r);Z.setMaterial(n,a);let l=i.index,c=1;!0===n.wireframe&&(l=it.getWireframeAttribute(i),c=2);const h=i.drawRange,u=i.attributes.position;let p=h.start*c,m=(h.start+h.count)*c;null!==s&&(p=Math.max(p,s.start*c),m=Math.min(m,(s.start+s.count)*c)),null!==l?(p=Math.max(p,0),m=Math.min(m,l.count)):null!=u&&(p=Math.max(p,0),m=Math.min(m,u.count));const g=m-p;if(g<0||g===1/0)return;let v;gt.setup(r,n,o,i,l);let x=pt;if(null!==l&&(v=et.get(l),x=mt,x.setIndex(v)),r.isMesh)!0===n.wireframe?(Z.setLineWidth(n.wireframeLinewidth*q()),x.setMode(1)):x.setMode(4);else if(r.isLine){let t=n.linewidth;void 0===t&&(t=1),Z.setLineWidth(t*q()),r.isLineSegments?x.setMode(1):r.isLineLoop?x.setMode(2):x.setMode(3)}else r.isPoints?x.setMode(0):r.isSprite&&x.setMode(4);if(r.isInstancedMesh)x.renderInstances(p,g,r.count);else if(i.isInstancedBufferGeometry){const t=void 0!==i._maxInstanceCount?i._maxInstanceCount:1/0,e=Math.min(i.instanceCount,t);x.renderInstances(p,g,e)}else x.render(p,g)},this.compile=function(t,e){function i(t,e,i){!0===t.transparent&&2===t.side?(t.side=1,t.needsUpdate=!0,Ut(t,e,i),t.side=0,t.needsUpdate=!0,Ut(t,e,i),t.side=2):Ut(t,e,i)}d=lt.get(t),d.init(),m.push(d),t.traverseVisible((function(t){t.isLight&&t.layers.test(e.layers)&&(d.pushLight(t),t.castShadow&&d.pushShadow(t))})),d.setupLights(f.physicallyCorrectLights),t.traverse((function(e){const n=e.material;if(n)if(Array.isArray(n))for(let r=0;r<n.length;r++){i(n[r],t,e)}else i(n,t,e)})),m.pop(),d=null};let Et=null;function Ct(){Pt.stop()}function Rt(){Pt.start()}const Pt=new _n;function It(t,e,i,n){if(!1===t.visible)return;if(t.layers.test(e.layers))if(t.isGroup)i=t.renderOrder;else if(t.isLOD)!0===t.autoUpdate&&t.update(e);else if(t.isLight)d.pushLight(t),t.castShadow&&d.pushShadow(t);else if(t.isSprite){if(!t.frustumCulled||B.intersectsSprite(t)){n&&W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);const e=nt.update(t),r=t.material;r.visible&&u.push(t,e,r,i,W.z,null)}}else if((t.isMesh||t.isLine||t.isPoints)&&(t.isSkinnedMesh&&t.skeleton.frame!==J.render.frame&&(t.skeleton.update(),t.skeleton.frame=J.render.frame),!t.frustumCulled||B.intersectsObject(t))){n&&W.setFromMatrixPosition(t.matrixWorld).applyMatrix4(V);const e=nt.update(t),r=t.material;if(Array.isArray(r)){const n=e.groups;for(let s=0,a=n.length;s<a;s++){const a=n[s],o=r[a.materialIndex];o&&o.visible&&u.push(t,e,o,i,W.z,a)}}else r.visible&&u.push(t,e,r,i,W.z,null)}const r=t.children;for(let t=0,s=r.length;t<s;t++)It(r[t],e,i,n)}function Dt(t,e,i,n){const r=t.opaque,a=t.transmissive,o=t.transparent;d.setupLightsView(i),a.length>0&&function(t,e,i){const n=Y.isWebGL2;null===G&&(G=new te(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?b:x,minFilter:v,samples:n&&!0===s?4:0}));f.getDrawingBufferSize(H),n?G.setSize(H.x,H.y):G.setSize(Tt(H.x),Tt(H.y));const r=f.getRenderTarget();f.setRenderTarget(G),f.clear();const a=f.toneMapping;f.toneMapping=0,Nt(t,e,i),f.toneMapping=a,$.updateMultisampleRenderTarget(G),$.updateRenderTargetMipmap(G),f.setRenderTarget(r)}(r,e,i),n&&Z.viewport(E.copy(n)),r.length>0&&Nt(r,e,i),a.length>0&&Nt(a,e,i),o.length>0&&Nt(o,e,i),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Nt(t,e,i){const n=!0===e.isScene?e.overrideMaterial:null;for(let r=0,s=t.length;r<s;r++){const s=t[r],a=s.object,o=s.geometry,l=null===n?s.material:n,c=s.group;a.layers.test(i.layers)&&zt(a,e,i,o,l,c)}}function zt(t,e,i,n,r,s){t.onBeforeRender(f,e,i,n,r,s),t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse,t.matrixWorld),t.normalMatrix.getNormalMatrix(t.modelViewMatrix),r.onBeforeRender(f,e,i,n,t,s),!0===r.transparent&&2===r.side?(r.side=1,r.needsUpdate=!0,f.renderBufferDirect(i,e,n,r,t,s),r.side=0,r.needsUpdate=!0,f.renderBufferDirect(i,e,n,r,t,s),r.side=2):f.renderBufferDirect(i,e,n,r,t,s),t.onAfterRender(f,e,i,n,r,s)}function Ut(t,e,i){!0!==e.isScene&&(e=j);const n=K.get(t),r=d.state.lights,s=d.state.shadowsArray,a=r.state.version,o=rt.getParameters(t,r.state,s,e,i),l=rt.getProgramCacheKey(o);let c=n.programs;n.environment=t.isMeshStandardMaterial?e.environment:null,n.fog=e.fog,n.envMap=(t.isMeshStandardMaterial?tt:Q).get(t.envMap||n.environment),void 0===c&&(t.addEventListener("dispose",At),c=new Map,n.programs=c);let h=c.get(l);if(void 0!==h){if(n.currentProgram===h&&n.lightsStateVersion===a)return Bt(t,o),h}else o.uniforms=rt.getUniforms(t),t.onBuild(i,o,f),t.onBeforeCompile(o,f),h=rt.acquireProgram(o,l),c.set(l,h),n.uniforms=o.uniforms;const u=n.uniforms;(t.isShaderMaterial||t.isRawShaderMaterial)&&!0!==t.clipping||(u.clippingPlanes=ct.uniform),Bt(t,o),n.needsLights=function(t){return t.isMeshLambertMaterial||t.isMeshToonMaterial||t.isMeshPhongMaterial||t.isMeshStandardMaterial||t.isShadowMaterial||t.isShaderMaterial&&!0===t.lights}(t),n.lightsStateVersion=a,n.needsLights&&(u.ambientLightColor.value=r.state.ambient,u.lightProbe.value=r.state.probe,u.directionalLights.value=r.state.directional,u.directionalLightShadows.value=r.state.directionalShadow,u.spotLights.value=r.state.spot,u.spotLightShadows.value=r.state.spotShadow,u.rectAreaLights.value=r.state.rectArea,u.ltc_1.value=r.state.rectAreaLTC1,u.ltc_2.value=r.state.rectAreaLTC2,u.pointLights.value=r.state.point,u.pointLightShadows.value=r.state.pointShadow,u.hemisphereLights.value=r.state.hemi,u.directionalShadowMap.value=r.state.directionalShadowMap,u.directionalShadowMatrix.value=r.state.directionalShadowMatrix,u.spotShadowMap.value=r.state.spotShadowMap,u.spotLightMatrix.value=r.state.spotLightMatrix,u.spotLightMap.value=r.state.spotLightMap,u.pointShadowMap.value=r.state.pointShadowMap,u.pointShadowMatrix.value=r.state.pointShadowMatrix);const p=h.getUniforms(),m=ss.seqWithValue(p.seq,u);return n.currentProgram=h,n.uniformsList=m,h}function Bt(t,e){const i=K.get(t);i.outputEncoding=e.outputEncoding,i.instancing=e.instancing,i.skinning=e.skinning,i.morphTargets=e.morphTargets,i.morphNormals=e.morphNormals,i.morphColors=e.morphColors,i.morphTargetsCount=e.morphTargetsCount,i.numClippingPlanes=e.numClippingPlanes,i.numIntersection=e.numClipIntersection,i.vertexAlphas=e.vertexAlphas,i.vertexTangents=e.vertexTangents,i.toneMapping=e.toneMapping}Pt.setAnimationLoop((function(t){Et&&Et(t)})),"undefined"!=typeof self&&Pt.setContext(self),this.setAnimationLoop=function(t){Et=t,Mt.setAnimationLoop(t),null===t?Pt.stop():Pt.start()},Mt.addEventListener("sessionstart",Ct),Mt.addEventListener("sessionend",Rt),this.render=function(t,e){if(void 0!==e&&!0!==e.isCamera)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(!0===g)return;!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),null===e.parent&&!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),!0===Mt.enabled&&!0===Mt.isPresenting&&(!0===Mt.cameraAutoUpdate&&Mt.updateCamera(e),e=Mt.getCamera()),!0===t.isScene&&t.onBeforeRender(f,t,e,S),d=lt.get(t,m.length),d.init(),m.push(d),V.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),B.setFromProjectionMatrix(V),k=this.localClippingEnabled,F=ct.init(this.clippingPlanes,k,e),u=ot.get(t,p.length),u.init(),p.push(u),It(t,e,0,f.sortObjects),u.finish(),!0===f.sortObjects&&u.sort(D,N),!0===F&&ct.beginShadows();const i=d.state.shadowsArray;if(ht.render(i,t,e),!0===F&&ct.endShadows(),!0===this.info.autoReset&&this.info.reset(),ut.render(u,t),d.setupLights(f.physicallyCorrectLights),e.isArrayCamera){const i=e.cameras;for(let e=0,n=i.length;e<n;e++){const n=i[e];Dt(u,t,n,n.viewport)}}else Dt(u,t,e);null!==S&&($.updateMultisampleRenderTarget(S),$.updateRenderTargetMipmap(S)),!0===t.isScene&&t.onAfterRender(f,t,e),gt.resetDefaultState(),T=-1,A=null,m.pop(),d=m.length>0?m[m.length-1]:null,p.pop(),u=p.length>0?p[p.length-1]:null},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(t,e,i){K.get(t.texture).__webglTexture=e,K.get(t.depthTexture).__webglTexture=i;const n=K.get(t);n.__hasExternalTextures=!0,n.__hasExternalTextures&&(n.__autoAllocateDepthBuffer=void 0===i,n.__autoAllocateDepthBuffer||!0===X.has("WEBGL_multisampled_render_to_texture")&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),n.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(t,e){const i=K.get(t);i.__webglFramebuffer=e,i.__useDefaultFramebuffer=void 0===e},this.setRenderTarget=function(t,e=0,i=0){S=t,_=e,y=i;let n=!0,r=null,s=!1,a=!1;if(t){const i=K.get(t);void 0!==i.__useDefaultFramebuffer?(Z.bindFramebuffer(36160,null),n=!1):void 0===i.__webglFramebuffer?$.setupRenderTarget(t):i.__hasExternalTextures&&$.rebindTextures(t,K.get(t.texture).__webglTexture,K.get(t.depthTexture).__webglTexture);const o=t.texture;(o.isData3DTexture||o.isDataArrayTexture||o.isCompressedArrayTexture)&&(a=!0);const l=K.get(t).__webglFramebuffer;t.isWebGLCubeRenderTarget?(r=l[e],s=!0):r=Y.isWebGL2&&t.samples>0&&!1===$.useMultisampledRTT(t)?K.get(t).__webglMultisampledFramebuffer:l,E.copy(t.viewport),C.copy(t.scissor),L=t.scissorTest}else E.copy(O).multiplyScalar(I).floor(),C.copy(z).multiplyScalar(I).floor(),L=U;if(Z.bindFramebuffer(36160,r)&&Y.drawBuffers&&n&&Z.drawBuffers(t,r),Z.viewport(E),Z.scissor(C),Z.setScissorTest(L),s){const n=K.get(t.texture);xt.framebufferTexture2D(36160,36064,34069+e,n.__webglTexture,i)}else if(a){const n=K.get(t.texture),r=e||0;xt.framebufferTextureLayer(36160,36064,n.__webglTexture,i||0,r)}T=-1},this.readRenderTargetPixels=function(t,e,i,n,r,s,a){if(!t||!t.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let o=K.get(t).__webglFramebuffer;if(t.isWebGLCubeRenderTarget&&void 0!==a&&(o=o[a]),o){Z.bindFramebuffer(36160,o);try{const a=t.texture,o=a.format,l=a.type;if(o!==w&&ft.convert(o)!==xt.getParameter(35739))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const c=l===b&&(X.has("EXT_color_buffer_half_float")||Y.isWebGL2&&X.has("EXT_color_buffer_float"));if(!(l===x||ft.convert(l)===xt.getParameter(35738)||l===M&&(Y.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float"))||c))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");e>=0&&e<=t.width-n&&i>=0&&i<=t.height-r&&xt.readPixels(e,i,n,r,ft.convert(o),ft.convert(l),s)}finally{const t=null!==S?K.get(S).__webglFramebuffer:null;Z.bindFramebuffer(36160,t)}}},this.copyFramebufferToTexture=function(t,e,i=0){const n=Math.pow(2,-i),r=Math.floor(e.image.width*n),s=Math.floor(e.image.height*n);$.setTexture2D(e,0),xt.copyTexSubImage2D(3553,i,0,0,t.x,t.y,r,s),Z.unbindTexture()},this.copyTextureToTexture=function(t,e,i,n=0){const r=e.image.width,s=e.image.height,a=ft.convert(i.format),o=ft.convert(i.type);$.setTexture2D(i,0),xt.pixelStorei(37440,i.flipY),xt.pixelStorei(37441,i.premultiplyAlpha),xt.pixelStorei(3317,i.unpackAlignment),e.isDataTexture?xt.texSubImage2D(3553,n,t.x,t.y,r,s,a,o,e.image.data):e.isCompressedTexture?xt.compressedTexSubImage2D(3553,n,t.x,t.y,e.mipmaps[0].width,e.mipmaps[0].height,a,e.mipmaps[0].data):xt.texSubImage2D(3553,n,t.x,t.y,a,o,e.image),0===n&&i.generateMipmaps&&xt.generateMipmap(3553),Z.unbindTexture()},this.copyTextureToTexture3D=function(t,e,i,n,r=0){if(f.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const s=t.max.x-t.min.x+1,a=t.max.y-t.min.y+1,o=t.max.z-t.min.z+1,l=ft.convert(n.format),c=ft.convert(n.type);let h;if(n.isData3DTexture)$.setTexture3D(n,0),h=32879;else{if(!n.isDataArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");$.setTexture2DArray(n,0),h=35866}xt.pixelStorei(37440,n.flipY),xt.pixelStorei(37441,n.premultiplyAlpha),xt.pixelStorei(3317,n.unpackAlignment);const u=xt.getParameter(3314),d=xt.getParameter(32878),p=xt.getParameter(3316),m=xt.getParameter(3315),g=xt.getParameter(32877),v=i.isCompressedTexture?i.mipmaps[0]:i.image;xt.pixelStorei(3314,v.width),xt.pixelStorei(32878,v.height),xt.pixelStorei(3316,t.min.x),xt.pixelStorei(3315,t.min.y),xt.pixelStorei(32877,t.min.z),i.isDataTexture||i.isData3DTexture?xt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,v.data):i.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),xt.compressedTexSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,v.data)):xt.texSubImage3D(h,r,e.x,e.y,e.z,s,a,o,l,c,v),xt.pixelStorei(3314,u),xt.pixelStorei(32878,d),xt.pixelStorei(3316,p),xt.pixelStorei(3315,m),xt.pixelStorei(32877,g),0===r&&n.generateMipmaps&&xt.generateMipmap(h),Z.unbindTexture()},this.initTexture=function(t){t.isCubeTexture?$.setTextureCube(t,0):t.isData3DTexture?$.setTexture3D(t,0):t.isDataArrayTexture||t.isCompressedArrayTexture?$.setTexture2DArray(t,0):$.setTexture2D(t,0),Z.unbindTexture()},this.resetState=function(){_=0,y=0,S=null,Z.reset(),gt.reset()},"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $s extends Ks{}$s.prototype.isWebGL1Renderer=!0;class Qs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new Qs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class ta{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=i}clone(){return new ta(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class ea extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class ia{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=ut,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_t()}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=_t()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=_t()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const na=new re;class ra{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=!0===n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix4(t),this.setXYZ(e,na.x,na.y,na.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyNormalMatrix(t),this.setXYZ(e,na.x,na.y,na.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.transformDirection(t),this.setXYZ(e,na.x,na.y,na.z);return this}setX(t,e){return this.normalized&&(e=Et(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Et(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Et(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Et(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=At(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=At(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=At(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=At(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array),n=Et(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Et(e,this.array),i=Et(i,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const i=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[i+e])}return new bi(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const i=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[i+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sa extends xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let aa;const oa=new re,la=new re,ca=new re,ha=new Lt,ua=new Lt,da=new Ne,pa=new re,ma=new re,fa=new re,ga=new Lt,va=new Lt,xa=new Lt;class _a extends si{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",void 0===aa){aa=new Di;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new ia(t,5);aa.setIndex([0,1,2,0,2,3]),aa.setAttribute("position",new ra(e,3,0,!1)),aa.setAttribute("uv",new ra(e,2,3,!1))}this.geometry=aa,this.material=void 0!==t?t:new sa,this.center=new Lt(.5,.5)}raycast(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),da.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&la.multiplyScalar(-ca.z);const i=this.material.rotation;let n,r;0!==i&&(r=Math.cos(i),n=Math.sin(i));const s=this.center;ya(pa.set(-.5,-.5,0),ca,s,la,n,r),ya(ma.set(.5,-.5,0),ca,s,la,n,r),ya(fa.set(.5,.5,0),ca,s,la,n,r),ga.set(0,0),va.set(1,0),xa.set(1,1);let a=t.ray.intersectTriangle(pa,ma,fa,!1,oa);if(null===a&&(ya(ma.set(-.5,.5,0),ca,s,la,n,r),va.set(0,1),a=t.ray.intersectTriangle(pa,fa,ma,!1,oa),null===a))return;const o=t.ray.origin.distanceTo(oa);o<t.near||o>t.far||e.push({distance:o,point:oa.clone(),uv:gi.getUV(oa,pa,ma,fa,ga,va,xa,new Lt),face:null,object:this})}copy(t,e){return super.copy(t,e),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}function ya(t,e,i,n,r,s){ha.subVectors(t,i).addScalar(.5).multiply(n),void 0!==r?(ua.x=s*ha.x-r*ha.y,ua.y=r*ha.x+s*ha.y):ua.copy(ha),t.copy(e),t.x+=ua.x,t.y+=ua.y,t.applyMatrix4(da)}const Ma=new re,ba=new re;class Sa extends si{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.addLevel(i.object.clone(),i.distance,i.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const n=this.levels;let r;for(r=0;r<n.length&&!(e<n[r].distance);r++);return n.splice(r,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,n;for(i=1,n=e.length;i<n;i++){let n=e[i].distance;if(e[i].object.visible&&(n-=n*e[i].hysteresis),t<n)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){Ma.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Ma);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Ma.setFromMatrixPosition(t.matrixWorld),ba.setFromMatrixPosition(this.matrixWorld);const i=Ma.distanceTo(ba)/t.zoom;let n,r;for(e[0].object.visible=!0,n=1,r=e.length;n<r;n++){let t=e[n].distance;if(e[n].object.visible&&(t-=t*e[n].hysteresis),!(i>=t))break;e[n-1].object.visible=!1,e[n].object.visible=!0}for(this._currentLevel=n-1;n<r;n++)e[n].object.visible=!1}}toJSON(t){const e=super.toJSON(t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];const i=this.levels;for(let t=0,n=i.length;t<n;t++){const n=i[t];e.object.levels.push({object:n.object.uuid,distance:n.distance,hysteresis:n.hysteresis})}return e}}const wa=new re,Ta=new Qt,Aa=new Qt,Ea=new re,Ca=new Ne;class La extends Ki{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Qt,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const n=1/t.manhattanLength();n!==1/0?t.multiplyScalar(n):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),"attached"===this.bindMode?this.bindMatrixInverse.copy(this.matrixWorld).invert():"detached"===this.bindMode?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const i=this.skeleton,n=this.geometry;Ta.fromBufferAttribute(n.attributes.skinIndex,t),Aa.fromBufferAttribute(n.attributes.skinWeight,t),wa.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let t=0;t<4;t++){const n=Aa.getComponent(t);if(0!==n){const r=Ta.getComponent(t);Ca.multiplyMatrices(i.bones[r].matrixWorld,i.boneInverses[r]),e.addScaledVector(Ea.copy(wa).applyMatrix4(Ca),n)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ra extends si{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pa extends $t{constructor(t=null,e=1,i=1,n,r,s,a,o,l=1003,c=1003,h,u){super(null,s,a,o,l,c,n,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ia=new Ne,Da=new Ne;class Na{constructor(t=[],e=[]){this.uuid=_t(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const e=new Ne;this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let n=0,r=t.length;n<r;n++){const r=t[n]?t[n].matrixWorld:Da;Ia.multiplyMatrices(r,e[n]),Ia.toArray(i,16*n)}null!==n&&(n.needsUpdate=!0)}clone(){return new Na(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=wt(t),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Pa(e,t,t,w,M);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this.boneTextureSize=t,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const n=t.bones[i];let r=e[n];void 0===r&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),r=new Ra),this.bones.push(r),this.boneInverses.push((new Ne).fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,r=e.length;n<r;n++){const r=e[n];t.bones.push(r.uuid);const s=i[n];t.boneInverses.push(s.toArray())}return t}}class Oa extends bi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const za=new Ne,Ua=new Ne,Ba=[],Fa=new Ne,ka=new Ki;class Ga extends Ki{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oa(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let t=0;t<i;t++)this.setMatrixAt(t,Fa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}raycast(t,e){const i=this.matrixWorld,n=this.count;if(ka.geometry=this.geometry,ka.material=this.material,void 0!==ka.material)for(let r=0;r<n;r++){this.getMatrixAt(r,za),Ua.multiplyMatrices(i,za),ka.matrixWorld=Ua,ka.raycast(t,Ba);for(let t=0,i=Ba.length;t<i;t++){const i=Ba[t];i.instanceId=r,i.object=this,e.push(i)}Ba.length=0}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new Oa(new Float32Array(3*this.instanceMatrix.count),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Va extends xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ha=new re,Wa=new re,ja=new Ne,qa=new De,Xa=new Te;class Ya extends si{constructor(t=new Di,e=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,i=[0];for(let t=1,n=e.count;t<n;t++)Ha.fromBufferAttribute(e,t-1),Wa.fromBufferAttribute(e,t),i[t]=i[t-1],i[t]+=Ha.distanceTo(Wa);t.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,s=i.drawRange;if(null===i.bounceingSphere&&i.computebounceingSphere(),Xa.copy(i.bounceingSphere),Xa.applyMatrix4(n),Xa.radius+=r,!1===t.ray.intersectsSphere(Xa))return;ja.copy(n).invert(),qa.copy(t.ray).applyMatrix4(ja);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=new re,c=new re,h=new re,u=new re,d=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(null!==p){for(let i=Math.max(0,s.start),n=Math.min(p.count,s.start+s.count)-1;i<n;i+=d){const n=p.getX(i),r=p.getX(i+1);l.fromBufferAttribute(m,n),c.fromBufferAttribute(m,r);if(qa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const s=t.ray.origin.distanceTo(u);s<t.near||s>t.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{for(let i=Math.max(0,s.start),n=Math.min(m.count,s.start+s.count)-1;i<n;i+=d){l.fromBufferAttribute(m,i),c.fromBufferAttribute(m,i+1);if(qa.distanceSqToSegment(l,c,u,h)>o)continue;u.applyMatrix4(this.matrixWorld);const n=t.ray.origin.distanceTo(u);n<t.near||n>t.far||e.push({distance:n,point:h.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=i.length;t<e;t++){const e=i[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}}const Za=new re,Ja=new re;class Ka extends Ya{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,i=[];for(let t=0,n=e.count;t<n;t+=2)Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,t+1),i[t]=0===t?0:i[t-1],i[t+1]=i[t]+Za.distanceTo(Ja);t.setAttribute("lineDistance",new Ti(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $a extends Ya{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qa extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const to=new Ne,eo=new De,io=new Te,no=new re;class ro extends si{constructor(t=new Di,e=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,s=i.drawRange;if(null===i.bounceingSphere&&i.computebounceingSphere(),io.copy(i.bounceingSphere),io.applyMatrix4(n),io.radius+=r,!1===t.ray.intersectsSphere(io))return;to.copy(n).invert(),eo.copy(t.ray).applyMatrix4(to);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,c=i.attributes.position;if(null!==l){for(let i=Math.max(0,s.start),r=Math.min(l.count,s.start+s.count);i<r;i++){const r=l.getX(i);no.fromBufferAttribute(c,r),so(no,r,o,n,t,e,this)}}else{for(let i=Math.max(0,s.start),r=Math.min(c.count,s.start+s.count);i<r;i++)no.fromBufferAttribute(c,i),so(no,i,o,n,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const i=t[e[0]];if(void 0!==i){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=i.length;t<e;t++){const e=i[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}}function so(t,e,i,n,r,s,a){const o=eo.distanceSqToPoint(t);if(o<i){const i=new re;eo.closestPointToPoint(t,i),i.applyMatrix4(n);const l=r.ray.origin.distanceTo(i);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:i,index:e,face:null,object:a})}}class ao extends $t{constructor(t,e,i,n,r,s,a,o,l,c,h,u){super(null,s,a,o,l,c,n,r,h,u),this.isCompressedTexture=!0,this.image={width:e,height:i},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class oo{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)i=this.getPoint(s/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let n=0;const r=i.length;let s;s=e||t*i[r-1];let a,o=0,l=r-1;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),a=i[n]-s,a<0)o=n+1;else{if(!(a>0)){l=n;break}l=n-1}if(n=l,i[n]===s)return n/(r-1);const c=i[n];return(n+(s-c)/(i[n+1]-c))/(r-1)}getTangent(t,e){const i=1e-4;let n=t-i,r=t+i;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=e||(s.isVector2?new Lt:new re);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new re,n=[],r=[],s=[],a=new re,o=new Ne;for(let e=0;e<=t;e++){const i=e/t;n[e]=this.getTangentAt(i,new re)}r[0]=new re,s[0]=new re;let l=Number.MAX_VALUE;const c=Math.abs(n[0].x),h=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let e=1;e<=t;e++){if(r[e]=r[e-1].clone(),s[e]=s[e-1].clone(),a.crossVectors(n[e-1],n[e]),a.length()>Number.EPSILON){a.normalize();const t=Math.acos(yt(n[e-1].dot(n[e]),-1,1));r[e].applyMatrix4(o.makeRotationAxis(a,t))}s[e].crossVectors(n[e],r[e])}if(!0===e){let e=Math.acos(yt(r[0].dot(r[t]),-1,1));e/=t,n[0].dot(a.crossVectors(r[0],r[t]))>0&&(e=-e);for(let i=1;i<=t;i++)r[i].applyMatrix4(o.makeRotationAxis(n[i],e*i)),s[i].crossVectors(n[i],r[i])}return{tangents:n,normals:r,binormals:s}}clone(){return(new this.constructor).copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lo extends oo{constructor(t=0,e=0,i=1,n=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e){const i=e||new Lt,n=2*Math.PI;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=s?0:n),!0!==this.aClockwise||s||(r===n?r=-n:r-=n);const a=this.aStartAngle+t*r;let o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(0!==this.aRotation){const t=Math.cos(this.aRotation),e=Math.sin(this.aRotation),i=o-this.aX,n=l-this.aY;o=i*t-n*e+this.aX,l=i*e+n*t+this.aY}return i.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class co extends lo{constructor(t,e,i,n,r,s){super(t,e,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function ho(){let t=0,e=0,i=0,n=0;function r(r,s,a,o){t=r,e=a,i=-3*r+3*s-2*a-o,n=2*r-2*s+a+o}return{initCatmullRom:function(t,e,i,n,s){r(e,i,s*(i-t),s*(n-e))},initNonuniformCatmullRom:function(t,e,i,n,s,a,o){let l=(e-t)/s-(i-t)/(s+a)+(i-e)/a,c=(i-e)/a-(n-e)/(a+o)+(n-i)/o;l*=a,c*=a,r(e,i,l,c)},calc:function(r){const s=r*r;return t+e*r+i*s+n*(s*r)}}}const uo=new re,po=new ho,mo=new ho,fo=new ho;class go extends oo{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new re){const i=e,n=this.points,r=n.length,s=(r-(this.closed?0:1))*t;let a,o,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:0===c&&l===r-1&&(l=r-2,c=1),this.closed||l>0?a=n[(l-1)%r]:(uo.subVectors(n[0],n[1]).add(n[0]),a=uo);const h=n[l%r],u=n[(l+1)%r];if(this.closed||l+2<r?o=n[(l+2)%r]:(uo.subVectors(n[r-1],n[r-2]).add(n[r-1]),o=uo),"centripetal"===this.curveType||"chordal"===this.curveType){const t="chordal"===this.curveType?.5:.25;let e=Math.pow(a.distanceToSquared(h),t),i=Math.pow(h.distanceToSquared(u),t),n=Math.pow(u.distanceToSquared(o),t);i<1e-4&&(i=1),e<1e-4&&(e=i),n<1e-4&&(n=i),po.initNonuniformCatmullRom(a.x,h.x,u.x,o.x,e,i,n),mo.initNonuniformCatmullRom(a.y,h.y,u.y,o.y,e,i,n),fo.initNonuniformCatmullRom(a.z,h.z,u.z,o.z,e,i,n)}else"catmullrom"===this.curveType&&(po.initCatmullRom(a.x,h.x,u.x,o.x,this.tension),mo.initCatmullRom(a.y,h.y,u.y,o.y,this.tension),fo.initCatmullRom(a.z,h.z,u.z,o.z,this.tension));return i.set(po.calc(c),mo.calc(c),fo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const i=t.points[e];this.points.push((new re).fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vo(t,e,i,n,r){const s=.5*(n-e),a=.5*(r-i),o=t*t;return(2*i-2*n+s+a)*(t*o)+(-3*i+3*n-2*s-a)*o+s*t+i}function xo(t,e,i,n){return function(t,e){const i=1-t;return i*i*e}(t,e)+function(t,e){return 2*(1-t)*t*e}(t,i)+function(t,e){return t*t*e}(t,n)}function _o(t,e,i,n,r){return function(t,e){const i=1-t;return i*i*i*e}(t,e)+function(t,e){const i=1-t;return 3*i*i*t*e}(t,i)+function(t,e){return 3*(1-t)*t*t*e}(t,n)+function(t,e){return t*t*t*e}(t,r)}class yo extends oo{constructor(t=new Lt,e=new Lt,i=new Lt,n=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Lt){const i=e,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(_o(t,n.x,r.x,s.x,a.x),_o(t,n.y,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mo extends oo{constructor(t=new re,e=new re,i=new re,n=new re){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new re){const i=e,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(_o(t,n.x,r.x,s.x,a.x),_o(t,n.y,r.y,s.y,a.y),_o(t,n.z,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bo extends oo{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const i=e;return 1===t?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new Lt;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class So extends oo{constructor(t=new re,e=new re){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new re){const i=e;return 1===t?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wo extends oo{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){const i=e,n=this.v0,r=this.v1,s=this.v2;return i.set(xo(t,n.x,r.x,s.x),xo(t,n.y,r.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class To extends oo{constructor(t=new re,e=new re,i=new re){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new re){const i=e,n=this.v0,r=this.v1,s=this.v2;return i.set(xo(t,n.x,r.x,s.x),xo(t,n.y,r.y,s.y),xo(t,n.z,r.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ao extends oo{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const i=e,n=this.points,r=(n.length-1)*t,s=Math.floor(r),a=r-s,o=n[0===s?s:s-1],l=n[s],c=n[s>n.length-2?n.length-1:s+1],h=n[s>n.length-3?n.length-1:s+2];return i.set(vo(a,o.x,l.x,c.x,h.x),vo(a,o.y,l.y,c.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const i=t.points[e];this.points.push((new Lt).fromArray(i))}return this}}var Eo=Object.freeze({__proto__:null,ArcCurve:co,CatmullRomCurve3:go,CubicBezierCurve:yo,CubicBezierCurve3:Mo,EllipseCurve:lo,LineCurve:bo,LineCurve3:So,QuadraticBezierCurve:wo,QuadraticBezierCurve3:To,SplineCurve:Ao});class Co extends oo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new bo(e,t))}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const t=n[r]-i,s=this.curves[r],a=s.getLength(),o=0===a?0:1-t/a;return s.getPointAt(o,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let t=0;t<o.length;t++){const n=o[t];i&&i.equals(n)||(e.push(n),i=n)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const i=t.curves[e];this.curves.push((new Eo[i.type]).fromJSON(i))}return this}}class Lo extends Co{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new bo(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new wo(this.currentPoint.clone(),new Lt(t,e),new Lt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,s){const a=new yo(this.currentPoint.clone(),new Lt(t,e),new Lt(i,n),new Lt(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ao(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,i,n,r,s),this}absarc(t,e,i,n,r,s){return this.absellipse(t,e,i,i,n,r,s),this}ellipse(t,e,i,n,r,s,a,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,i,n,r,s,a,o),this}absellipse(t,e,i,n,r,s,a,o){const l=new lo(t,e,i,n,r,s,a,o);if(this.curves.length>0){const t=l.getPoint(0);t.equals(this.currentPoint)||this.lineTo(t.x,t.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ro extends Di{constructor(t=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],e=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=yt(n,0,2*Math.PI);const r=[],s=[],a=[],o=[],l=[],c=1/e,h=new re,u=new Lt,d=new re,p=new re,m=new re;let f=0,g=0;for(let e=0;e<=t.length-1;e++)switch(e){case 0:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,m.copy(d),d.normalize(),o.push(d.x,d.y,d.z);break;case t.length-1:o.push(m.x,m.y,m.z);break;default:f=t[e+1].x-t[e].x,g=t[e+1].y-t[e].y,d.x=1*g,d.y=-f,d.z=0*g,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),o.push(d.x,d.y,d.z),m.copy(p)}for(let r=0;r<=e;r++){const d=i+r*c*n,p=Math.sin(d),m=Math.cos(d);for(let i=0;i<=t.length-1;i++){h.x=t[i].x*p,h.y=t[i].y,h.z=t[i].x*m,s.push(h.x,h.y,h.z),u.x=r/e,u.y=i/(t.length-1),a.push(u.x,u.y);const n=o[3*i+0]*p,c=o[3*i+1],d=o[3*i+0]*m;l.push(n,c,d)}}for(let i=0;i<e;i++)for(let e=0;e<t.length-1;e++){const n=e+i*t.length,s=n,a=n+t.length,o=n+t.length+1,l=n+1;r.push(s,a,l),r.push(o,l,a)}this.setIndex(r),this.setAttribute("position",new Ti(s,3)),this.setAttribute("uv",new Ti(a,2)),this.setAttribute("normal",new Ti(l,3))}static fromJSON(t){return new Ro(t.points,t.segments,t.phiStart,t.phiLength)}}class Po extends Ro{constructor(t=1,e=1,i=4,n=8){const r=new Lo;r.absarc(0,-e/2,t,1.5*Math.PI,0),r.absarc(0,e/2,t,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new Po(t.radius,t.length,t.capSegments,t.radialSegments)}}class Io extends Di{constructor(t=1,e=8,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],s=[],a=[],o=[],l=new re,c=new Lt;s.push(0,0,0),a.push(0,0,1),o.push(.5,.5);for(let r=0,h=3;r<=e;r++,h+=3){const u=i+r/e*n;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[h]/t+1)/2,c.y=(s[h+1]/t+1)/2,o.push(c.x,c.y)}for(let t=1;t<=e;t++)r.push(t,t+1,0);this.setIndex(r),this.setAttribute("position",new Ti(s,3)),this.setAttribute("normal",new Ti(a,3)),this.setAttribute("uv",new Ti(o,2))}static fromJSON(t){return new Io(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Do extends Di{constructor(t=1,e=1,i=1,n=8,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};const l=this;n=Math.floor(n),r=Math.floor(r);const c=[],h=[],u=[],d=[];let p=0;const m=[],f=i/2;let g=0;function v(i){const r=p,s=new Lt,m=new re;let v=0;const x=!0===i?t:e,_=!0===i?1:-1;for(let t=1;t<=n;t++)h.push(0,f*_,0),u.push(0,_,0),d.push(.5,.5),p++;const y=p;for(let t=0;t<=n;t++){const e=t/n*o+a,i=Math.cos(e),r=Math.sin(e);m.x=x*r,m.y=f*_,m.z=x*i,h.push(m.x,m.y,m.z),u.push(0,_,0),s.x=.5*i+.5,s.y=.5*r*_+.5,d.push(s.x,s.y),p++}for(let t=0;t<n;t++){const e=r+t,n=y+t;!0===i?c.push(n,n+1,e):c.push(n+1,n,e),v+=3}l.addGroup(g,v,!0===i?1:2),g+=v}!function(){const s=new re,v=new re;let x=0;const _=(e-t)/i;for(let l=0;l<=r;l++){const c=[],g=l/r,x=g*(e-t)+t;for(let t=0;t<=n;t++){const e=t/n,r=e*o+a,l=Math.sin(r),m=Math.cos(r);v.x=x*l,v.y=-g*i+f,v.z=x*m,h.push(v.x,v.y,v.z),s.set(l,_,m).normalize(),u.push(s.x,s.y,s.z),d.push(e,1-g),c.push(p++)}m.push(c)}for(let t=0;t<n;t++)for(let e=0;e<r;e++){const i=m[e][t],n=m[e+1][t],r=m[e+1][t+1],s=m[e][t+1];c.push(i,n,s),c.push(n,r,s),x+=6}l.addGroup(g,x,0),g+=x}(),!1===s&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Ti(h,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(d,2))}static fromJSON(t){return new Do(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class No extends Do{constructor(t=1,e=1,i=8,n=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,i,n,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new No(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends Di{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],s=[];function a(t,e,i,n){const r=n+1,s=[];for(let n=0;n<=r;n++){s[n]=[];const a=t.clone().lerp(i,n/r),o=e.clone().lerp(i,n/r),l=r-n;for(let t=0;t<=l;t++)s[n][t]=0===t&&n===r?a:a.clone().lerp(o,t/l)}for(let t=0;t<r;t++)for(let e=0;e<2*(r-t)-1;e++){const i=Math.floor(e/2);e%2==0?(o(s[t][i+1]),o(s[t+1][i]),o(s[t][i])):(o(s[t][i+1]),o(s[t+1][i+1]),o(s[t+1][i]))}}function o(t){r.push(t.x,t.y,t.z)}function l(e,i){const n=3*e;i.x=t[n+0],i.y=t[n+1],i.z=t[n+2]}function c(t,e,i,n){n<0&&1===t.x&&(s[e]=t.x-1),0===i.x&&0===i.z&&(s[e]=n/2/Math.PI+.5)}function h(t){return Math.atan2(t.z,-t.x)}!function(t){const i=new re,n=new re,r=new re;for(let s=0;s<e.length;s+=3)l(e[s+0],i),l(e[s+1],n),l(e[s+2],r),a(i,n,r,t)}(n),function(t){const e=new re;for(let i=0;i<r.length;i+=3)e.x=r[i+0],e.y=r[i+1],e.z=r[i+2],e.normalize().multiplyScalar(t),r[i+0]=e.x,r[i+1]=e.y,r[i+2]=e.z}(i),function(){const t=new re;for(let i=0;i<r.length;i+=3){t.x=r[i+0],t.y=r[i+1],t.z=r[i+2];const n=h(t)/2/Math.PI+.5,a=(e=t,Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))/Math.PI+.5);s.push(n,1-a)}var e;(function(){const t=new re,e=new re,i=new re,n=new re,a=new Lt,o=new Lt,l=new Lt;for(let u=0,d=0;u<r.length;u+=9,d+=6){t.set(r[u+0],r[u+1],r[u+2]),e.set(r[u+3],r[u+4],r[u+5]),i.set(r[u+6],r[u+7],r[u+8]),a.set(s[d+0],s[d+1]),o.set(s[d+2],s[d+3]),l.set(s[d+4],s[d+5]),n.copy(t).add(e).add(i).divideScalar(3);const p=h(n);c(a,d+0,t,p),c(o,d+2,e,p),c(l,d+4,i,p)}})(),function(){for(let t=0;t<s.length;t+=6){const e=s[t+0],i=s[t+2],n=s[t+4],r=Math.max(e,i,n),a=Math.min(e,i,n);r>.9&&a<.1&&(e<.2&&(s[t+0]+=1),i<.2&&(s[t+2]+=1),n<.2&&(s[t+4]+=1))}}()}(),this.setAttribute("position",new Ti(r,3)),this.setAttribute("normal",new Ti(r.slice(),3)),this.setAttribute("uv",new Ti(s,2)),0===n?this.computeVertexNormals():this.normalizeNormals()}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.details)}}class zo extends Oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zo(t.radius,t.detail)}}const Uo=new re,Bo=new re,Fo=new re,ko=new gi;class Go extends Di{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},null!==t){const i=4,n=Math.pow(10,i),r=Math.cos(vt*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},d=[];for(let t=0;t<o;t+=3){s?(l[0]=s.getX(t),l[1]=s.getX(t+1),l[2]=s.getX(t+2)):(l[0]=t,l[1]=t+1,l[2]=t+2);const{a:e,b:i,c:o}=ko;if(e.fromBufferAttribute(a,l[0]),i.fromBufferAttribute(a,l[1]),o.fromBufferAttribute(a,l[2]),ko.getNormal(Fo),h[0]=`${Math.round(e.x*n)},${Math.round(e.y*n)},${Math.round(e.z*n)}`,h[1]=`${Math.round(i.x*n)},${Math.round(i.y*n)},${Math.round(i.z*n)}`,h[2]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let t=0;t<3;t++){const e=(t+1)%3,i=h[t],n=h[e],s=ko[c[t]],a=ko[c[e]],o=`${i}_${n}`,p=`${n}_${i}`;p in u&&u[p]?(Fo.dot(u[p].normal)<=r&&(d.push(s.x,s.y,s.z),d.push(a.x,a.y,a.z)),u[p]=null):o in u||(u[o]={index0:l[t],index1:l[e],normal:Fo.clone()})}}for(const t in u)if(u[t]){const{index0:e,index1:i}=u[t];Uo.fromBufferAttribute(a,e),Bo.fromBufferAttribute(a,i),d.push(Uo.x,Uo.y,Uo.z),d.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new Ti(d,3))}}}class Vo extends Lo{constructor(t){super(t),this.uuid=_t(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const i=t.holes[e];this.holes.push((new Lo).fromJSON(i))}return this}}const Ho=function(t,e,i=2){const n=e&&e.length,r=n?e[0]*i:t.length;let s=Wo(t,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=function(t,e,i,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:t.length,c=Wo(t,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(el(c));for(r.sort(Ko),s=0;s<r.length;s++)i=$o(r[s],i);return i}(t,e,s,i)),t.length>80*i){o=c=t[0],l=h=t[1];for(let e=i;e<r;e+=i)u=t[e],d=t[e+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=0!==p?32767/p:0}return qo(s,a,i,o,l,p,0),a};function Wo(t,e,i,n,r){let s,a;if(r===function(t,e,i,n){let r=0;for(let s=e,a=i-n;s<i;s+=n)r+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return r}(t,e,i,n)>0)for(s=e;s<i;s+=n)a=ul(s,t[s],t[s+1],a);else for(s=i-n;s>=e;s-=n)a=ul(s,t[s],t[s+1],a);return a&&sl(a,a.next)&&(dl(a),a=a.next),a}function jo(t,e){if(!t)return t;e||(e=t);let i,n=t;do{if(i=!1,n.steiner||!sl(n,n.next)&&0!==rl(n.prev,n,n.next))n=n.next;else{if(dl(n),n=e=n.prev,n===n.next)break;i=!0}}while(i||n!==e);return e}function qo(t,e,i,n,r,s,a){if(!t)return;!a&&s&&function(t,e,i,n){let r=t;do{0===r.z&&(r.z=tl(r.x,r.y,e,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,function(t){let e,i,n,r,s,a,o,l,c=1;do{for(i=t,t=null,s=null,a=0;i;){for(a++,n=i,o=0,e=0;e<c&&(o++,n=n.nextZ,n);e++);for(l=c;o>0||l>0&&n;)0!==o&&(0===l||!n||i.z<=n.z)?(r=i,i=i.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=n}s.nextZ=null,c*=2}while(a>1)}(r)}(t,n,r,s);let o,l,c=t;for(;t.prev!==t.next;)if(o=t.prev,l=t.next,s?Yo(t,n,r,s):Xo(t))e.push(o.i/i|0),e.push(t.i/i|0),e.push(l.i/i|0),dl(t),t=l.next,c=l.next;else if((t=l)===c){a?1===a?qo(t=Zo(jo(t),e,i),e,i,n,r,s,2):2===a&&Jo(t,e,i,n,r,s):qo(jo(t),e,i,n,r,s,1);break}}function Xo(t){const e=t.prev,i=t,n=t.next;if(rl(e,i,n)>=0)return!1;const r=e.x,s=i.x,a=n.x,o=e.y,l=i.y,c=n.y,h=r<s?r<a?r:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&il(r,o,s,l,a,c,m.x,m.y)&&rl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Yo(t,e,i,n){const r=t.prev,s=t,a=t.next;if(rl(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,f=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,v=tl(p,m,e,i,n),x=tl(f,g,e,i,n);let _=t.prevZ,y=t.nextZ;for(;_&&_.z>=v&&y&&y.z<=x;){if(_.x>=p&&_.x<=f&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&il(o,h,l,u,c,d,_.x,_.y)&&rl(_.prev,_,_.next)>=0)return!1;if(_=_.prevZ,y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&il(o,h,l,u,c,d,y.x,y.y)&&rl(y.prev,y,y.next)>=0)return!1;y=y.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=f&&_.y>=m&&_.y<=g&&_!==r&&_!==a&&il(o,h,l,u,c,d,_.x,_.y)&&rl(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=f&&y.y>=m&&y.y<=g&&y!==r&&y!==a&&il(o,h,l,u,c,d,y.x,y.y)&&rl(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zo(t,e,i){let n=t;do{const r=n.prev,s=n.next.next;!sl(r,s)&&al(r,n,n.next,s)&&cl(r,s)&&cl(s,r)&&(e.push(r.i/i|0),e.push(n.i/i|0),e.push(s.i/i|0),dl(n),dl(n.next),n=t=s),n=n.next}while(n!==t);return jo(n)}function Jo(t,e,i,n,r,s){let a=t;do{let t=a.next.next;for(;t!==a.prev;){if(a.i!==t.i&&nl(a,t)){let o=hl(a,t);return a=jo(a,a.next),o=jo(o,o.next),qo(a,e,i,n,r,s,0),void qo(o,e,i,n,r,s,0)}t=t.next}a=a.next}while(a!==t)}function Ko(t,e){return t.x-e.x}function $o(t,e){const i=function(t,e){let i,n=e,r=-1/0;const s=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){const t=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(t<=s&&t>r&&(r=t,i=n.x<n.next.x?n:n.next,t===s))return i}n=n.next}while(n!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h,u=1/0;n=i;do{s>=n.x&&n.x>=l&&s!==n.x&&il(a<c?s:r,a,l,c,a<c?r:s,a,n.x,n.y)&&(h=Math.abs(a-n.y)/(s-n.x),cl(n,t)&&(h<u||h===u&&(n.x>i.x||n.x===i.x&&Qo(i,n)))&&(i=n,u=h)),n=n.next}while(n!==o);return i}(t,e);if(!i)return e;const n=hl(i,t);return jo(n,n.next),jo(i,i.next)}function Qo(t,e){return rl(t.prev,t,e.prev)<0&&rl(e.next,t,t.next)<0}function tl(t,e,i,n,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function el(t){let e=t,i=t;do{(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next}while(e!==t);return i}function il(t,e,i,n,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(n-o)>=(i-a)*(e-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function nl(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&al(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}(t,e)&&(cl(t,e)&&cl(e,t)&&function(t,e){let i=t,n=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do{i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next}while(i!==t);return n}(t,e)&&(rl(t.prev,t,e.prev)||rl(t,e.prev,e))||sl(t,e)&&rl(t.prev,t,t.next)>0&&rl(e.prev,e,e.next)>0)}function rl(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function sl(t,e){return t.x===e.x&&t.y===e.y}function al(t,e,i,n){const r=ll(rl(t,e,i)),s=ll(rl(t,e,n)),a=ll(rl(i,n,t)),o=ll(rl(i,n,e));return r!==s&&a!==o||(!(0!==r||!ol(t,i,e))||(!(0!==s||!ol(t,n,e))||(!(0!==a||!ol(i,t,n))||!(0!==o||!ol(i,e,n)))))}function ol(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function ll(t){return t>0?1:t<0?-1:0}function cl(t,e){return rl(t.prev,t,t.next)<0?rl(t,e,t.next)>=0&&rl(t,t.prev,e)>=0:rl(t,e,t.prev)<0||rl(t,t.next,e)<0}function hl(t,e){const i=new pl(t.i,t.x,t.y),n=new pl(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function ul(t,e,i,n){const r=new pl(t,e,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function dl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function pl(t,e,i){this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}class ml{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return.5*i}static isClockWise(t){return ml.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];fl(t),gl(i,t);let s=t.length;e.forEach(fl);for(let t=0;t<e.length;t++)n.push(s),s+=e[t].length,gl(i,e[t]);const a=Ho(i,n);for(let t=0;t<a.length;t+=3)r.push(a.slice(t,t+3));return r}}function fl(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function gl(t,e){for(let i=0;i<e.length;i++)t.push(e[i].x),t.push(e[i].y)}class vl extends Di{constructor(t=new Vo([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let e=0,i=t.length;e<i;e++){s(t[e])}function s(t){const s=[],a=void 0!==e.curveSegments?e.curveSegments:12,o=void 0!==e.steps?e.steps:1,l=void 0!==e.depth?e.depth:1;let c=void 0===e.bevelEnabled||e.bevelEnabled,h=void 0!==e.bevelThickness?e.bevelThickness:.2,u=void 0!==e.bevelSize?e.bevelSize:h-.1,d=void 0!==e.bevelOffset?e.bevelOffset:0,p=void 0!==e.bevelSegments?e.bevelSegments:3;const m=e.extrudePath,f=void 0!==e.UVGenerator?e.UVGenerator:xl;let g,v,x,_,y,M=!1;m&&(g=m.getSpacedPoints(o),M=!0,c=!1,v=m.computeFrenetFrames(o,!1),x=new re,_=new re,y=new re),c||(p=0,h=0,u=0,d=0);const b=t.extractPoints(a);let S=b.shape;const w=b.holes;if(!ml.isClockWise(S)){S=S.reverse();for(let t=0,e=w.length;t<e;t++){const e=w[t];ml.isClockWise(e)&&(w[t]=e.reverse())}}const T=ml.triangulateShape(S,w),A=S;for(let t=0,e=w.length;t<e;t++){const e=w[t];S=S.concat(e)}function E(t,e,i){return e||console.error("THREE.ExtrudeGeometry: vec does not exist"),e.clone().multiplyScalar(i).add(t)}const C=S.length,L=T.length;function R(t,e,i){let n,r,s;const a=t.x-e.x,o=t.y-e.y,l=i.x-t.x,c=i.y-t.y,h=a*a+o*o,u=a*c-o*l;if(Math.abs(u)>Number.EPSILON){const u=Math.sqrt(h),d=Math.sqrt(l*l+c*c),p=e.x-o/u,m=e.y+a/u,f=((i.x-c/d-p)*c-(i.y+l/d-m)*l)/(a*c-o*l);n=p+a*f-t.x,r=m+o*f-t.y;const g=n*n+r*r;if(g<=2)return new Lt(n,r);s=Math.sqrt(g/2)}else{let t=!1;a>Number.EPSILON?l>Number.EPSILON&&(t=!0):a<-Number.EPSILON?l<-Number.EPSILON&&(t=!0):Math.sign(o)===Math.sign(c)&&(t=!0),t?(n=-o,r=a,s=Math.sqrt(h)):(n=a,r=o,s=Math.sqrt(h/2))}return new Lt(n/s,r/s)}const P=[];for(let t=0,e=A.length,i=e-1,n=t+1;t<e;t++,i++,n++)i===e&&(i=0),n===e&&(n=0),P[t]=R(A[t],A[i],A[n]);const I=[];let D,N=P.concat();for(let t=0,e=w.length;t<e;t++){const e=w[t];D=[];for(let t=0,i=e.length,n=i-1,r=t+1;t<i;t++,n++,r++)n===i&&(n=0),r===i&&(r=0),D[t]=R(e[t],e[n],e[r]);I.push(D),N=N.concat(D)}for(let t=0;t<p;t++){const e=t/p,i=h*Math.cos(e*Math.PI/2),n=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=A.length;t<e;t++){const e=E(A[t],P[t],n);U(e.x,e.y,-i)}for(let t=0,e=w.length;t<e;t++){const e=w[t];D=I[t];for(let t=0,r=e.length;t<r;t++){const r=E(e[t],D[t],n);U(r.x,r.y,-i)}}}const O=u+d;for(let t=0;t<C;t++){const e=c?E(S[t],N[t],O):S[t];M?(_.copy(v.normals[0]).multiplyScalar(e.x),x.copy(v.binormals[0]).multiplyScalar(e.y),y.copy(g[0]).add(_).add(x),U(y.x,y.y,y.z)):U(e.x,e.y,0)}for(let t=1;t<=o;t++)for(let e=0;e<C;e++){const i=c?E(S[e],N[e],O):S[e];M?(_.copy(v.normals[t]).multiplyScalar(i.x),x.copy(v.binormals[t]).multiplyScalar(i.y),y.copy(g[t]).add(_).add(x),U(y.x,y.y,y.z)):U(i.x,i.y,l/o*t)}for(let t=p-1;t>=0;t--){const e=t/p,i=h*Math.cos(e*Math.PI/2),n=u*Math.sin(e*Math.PI/2)+d;for(let t=0,e=A.length;t<e;t++){const e=E(A[t],P[t],n);U(e.x,e.y,l+i)}for(let t=0,e=w.length;t<e;t++){const e=w[t];D=I[t];for(let t=0,r=e.length;t<r;t++){const r=E(e[t],D[t],n);M?U(r.x,r.y+g[o-1].y,g[o-1].x+i):U(r.x,r.y,l+i)}}}function z(t,e){let i=t.length;for(;--i>=0;){const n=i;let r=i-1;r<0&&(r=t.length-1);for(let t=0,i=o+2*p;t<i;t++){const i=C*t,s=C*(t+1);F(e+n+i,e+r+i,e+r+s,e+n+s)}}}function U(t,e,i){s.push(t),s.push(e),s.push(i)}function B(t,e,r){k(t),k(e),k(r);const s=n.length/3,a=f.generateTopUV(i,n,s-3,s-2,s-1);G(a[0]),G(a[1]),G(a[2])}function F(t,e,r,s){k(t),k(e),k(s),k(e),k(r),k(s);const a=n.length/3,o=f.generateSideWallUV(i,n,a-6,a-3,a-2,a-1);G(o[0]),G(o[1]),G(o[3]),G(o[1]),G(o[2]),G(o[3])}function k(t){n.push(s[3*t+0]),n.push(s[3*t+1]),n.push(s[3*t+2])}function G(t){r.push(t.x),r.push(t.y)}!function(){const t=n.length/3;if(c){let t=0,e=C*t;for(let t=0;t<L;t++){const i=T[t];B(i[2]+e,i[1]+e,i[0]+e)}t=o+2*p,e=C*t;for(let t=0;t<L;t++){const i=T[t];B(i[0]+e,i[1]+e,i[2]+e)}}else{for(let t=0;t<L;t++){const e=T[t];B(e[2],e[1],e[0])}for(let t=0;t<L;t++){const e=T[t];B(e[0]+C*o,e[1]+C*o,e[2]+C*o)}}i.addGroup(t,n.length/3-t,0)}(),function(){const t=n.length/3;let e=0;z(A,e),e+=A.length;for(let t=0,i=w.length;t<i;t++){const i=w[t];z(i,e),e+=i.length}i.addGroup(t,n.length/3-t,1)}()}this.setAttribute("position",new Ti(n,3)),this.setAttribute("uv",new Ti(r,2)),this.computeVertexNormals()}toJSON(){const t=super.toJSON();return function(t,e,i){if(i.shapes=[],Array.isArray(t))for(let e=0,n=t.length;e<n;e++){const n=t[e];i.shapes.push(n.uuid)}else i.shapes.push(t.uuid);i.options=Object.assign({},e),void 0!==e.extrudePath&&(i.options.extrudePath=e.extrudePath.toJSON());return i}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const r=e[t.shapes[n]];i.push(r)}const n=t.options.extrudePath;return void 0!==n&&(t.options.extrudePath=(new Eo[n.type]).fromJSON(n)),new vl(i,t.options)}}const xl={generateTopUV:function(t,e,i,n,r){const s=e[3*i],a=e[3*i+1],o=e[3*n],l=e[3*n+1],c=e[3*r],h=e[3*r+1];return[new Lt(s,a),new Lt(o,l),new Lt(c,h)]},generateSideWallUV:function(t,e,i,n,r,s){const a=e[3*i],o=e[3*i+1],l=e[3*i+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],f=e[3*s],g=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new Lt(a,1-l),new Lt(c,1-u),new Lt(d,1-m),new Lt(f,1-v)]:[new Lt(o,1-l),new Lt(h,1-u),new Lt(p,1-m),new Lt(g,1-v)]}};class _l extends Oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _l(t.radius,t.detail)}}class yl extends Oo{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yl(t.radius,t.detail)}}class Ml extends Di{constructor(t=.5,e=1,i=8,n=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:s},i=Math.max(3,i);const a=[],o=[],l=[],c=[];let h=t;const u=(e-t)/(n=Math.max(1,n)),d=new re,p=new Lt;for(let t=0;t<=n;t++){for(let t=0;t<=i;t++){const n=r+t/i*s;d.x=h*Math.cos(n),d.y=h*Math.sin(n),o.push(d.x,d.y,d.z),l.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,c.push(p.x,p.y)}h+=u}for(let t=0;t<n;t++){const e=t*(i+1);for(let t=0;t<i;t++){const n=t+e,r=n,s=n+i+1,o=n+i+2,l=n+1;a.push(r,s,l),a.push(s,o,l)}}this.setIndex(a),this.setAttribute("position",new Ti(o,3)),this.setAttribute("normal",new Ti(l,3)),this.setAttribute("uv",new Ti(c,2))}static fromJSON(t){return new Ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class bl extends Di{constructor(t=new Vo([new Lt(0,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],s=[];let a=0,o=0;if(!1===Array.isArray(t))l(t);else for(let e=0;e<t.length;e++)l(t[e]),this.addGroup(a,o,e),a+=o,o=0;function l(t){const a=n.length/3,l=t.extractPoints(e);let c=l.shape;const h=l.holes;!1===ml.isClockWise(c)&&(c=c.reverse());for(let t=0,e=h.length;t<e;t++){const e=h[t];!0===ml.isClockWise(e)&&(h[t]=e.reverse())}const u=ml.triangulateShape(c,h);for(let t=0,e=h.length;t<e;t++){const e=h[t];c=c.concat(e)}for(let t=0,e=c.length;t<e;t++){const e=c[t];n.push(e.x,e.y,0),r.push(0,0,1),s.push(e.x,e.y)}for(let t=0,e=u.length;t<e;t++){const e=u[t],n=e[0]+a,r=e[1]+a,s=e[2]+a;i.push(n,r,s),o+=3}}this.setIndex(i),this.setAttribute("position",new Ti(n,3)),this.setAttribute("normal",new Ti(r,3)),this.setAttribute("uv",new Ti(s,2))}toJSON(){const t=super.toJSON();return function(t,e){if(e.shapes=[],Array.isArray(t))for(let i=0,n=t.length;i<n;i++){const n=t[i];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}(this.parameters.shapes,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const r=e[t.shapes[n]];i.push(r)}return new bl(i,t.curveSegments)}}class Sl extends Di{constructor(t=1,e=32,i=16,n=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const o=Math.min(s+a,Math.PI);let l=0;const c=[],h=new re,u=new re,d=[],p=[],m=[],f=[];for(let d=0;d<=i;d++){const g=[],v=d/i;let x=0;0==d&&0==s?x=.5/e:d==i&&o==Math.PI&&(x=-.5/e);for(let i=0;i<=e;i++){const o=i/e;h.x=-t*Math.cos(n+o*r)*Math.sin(s+v*a),h.y=t*Math.cos(s+v*a),h.z=t*Math.sin(n+o*r)*Math.sin(s+v*a),p.push(h.x,h.y,h.z),u.copy(h).normalize(),m.push(u.x,u.y,u.z),f.push(o+x,1-v),g.push(l++)}c.push(g)}for(let t=0;t<i;t++)for(let n=0;n<e;n++){const e=c[t][n+1],r=c[t][n],a=c[t+1][n],l=c[t+1][n+1];(0!==t||s>0)&&d.push(e,r,l),(t!==i-1||o<Math.PI)&&d.push(r,a,l)}this.setIndex(d),this.setAttribute("position",new Ti(p,3)),this.setAttribute("normal",new Ti(m,3)),this.setAttribute("uv",new Ti(f,2))}static fromJSON(t){return new Sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wl extends Oo{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wl(t.radius,t.detail)}}class Tl extends Di{constructor(t=1,e=.4,i=8,n=6,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const s=[],a=[],o=[],l=[],c=new re,h=new re,u=new re;for(let s=0;s<=i;s++)for(let d=0;d<=n;d++){const p=d/n*r,m=s/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(p),h.y=(t+e*Math.cos(m))*Math.sin(p),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(p),c.y=t*Math.sin(p),u.subVectors(h,c).normalize(),o.push(u.x,u.y,u.z),l.push(d/n),l.push(s/i)}for(let t=1;t<=i;t++)for(let e=1;e<=n;e++){const i=(n+1)*t+e-1,r=(n+1)*(t-1)+e-1,a=(n+1)*(t-1)+e,o=(n+1)*t+e;s.push(i,r,o),s.push(r,a,o)}this.setIndex(s),this.setAttribute("position",new Ti(a,3)),this.setAttribute("normal",new Ti(o,3)),this.setAttribute("uv",new Ti(l,2))}static fromJSON(t){return new Tl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Al extends Di{constructor(t=1,e=.4,i=64,n=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:n,p:r,q:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new re,u=new re,d=new re,p=new re,m=new re,f=new re,g=new re;for(let a=0;a<=i;++a){const x=a/i*r*Math.PI*2;v(x,r,s,t,d),v(x+.01,r,s,t,p),f.subVectors(p,d),g.addVectors(p,d),m.crossVectors(f,g),g.crossVectors(m,f),m.normalize(),g.normalize();for(let t=0;t<=n;++t){const r=t/n*Math.PI*2,s=-e*Math.cos(r),p=e*Math.sin(r);h.x=d.x+(s*g.x+p*m.x),h.y=d.y+(s*g.y+p*m.y),h.z=d.z+(s*g.z+p*m.z),o.push(h.x,h.y,h.z),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(a/i),c.push(t/n)}}for(let t=1;t<=i;t++)for(let e=1;e<=n;e++){const i=(n+1)*(t-1)+(e-1),r=(n+1)*t+(e-1),s=(n+1)*t+e,o=(n+1)*(t-1)+e;a.push(i,r,o),a.push(r,s,o)}function v(t,e,i,n,r){const s=Math.cos(t),a=Math.sin(t),o=i/e*t,l=Math.cos(o);r.x=n*(2+l)*.5*s,r.y=n*(2+l)*a*.5,r.z=n*Math.sin(o)*.5}this.setIndex(a),this.setAttribute("position",new Ti(o,3)),this.setAttribute("normal",new Ti(l,3)),this.setAttribute("uv",new Ti(c,2))}static fromJSON(t){return new Al(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class El extends Di{constructor(t=new To(new re(-1,-1,0),new re(-1,1,0),new re(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};const s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const a=new re,o=new re,l=new Lt;let c=new re;const h=[],u=[],d=[],p=[];function m(r){c=t.getPointAt(r/e,c);const l=s.normals[r],d=s.binormals[r];for(let t=0;t<=n;t++){const e=t/n*Math.PI*2,r=Math.sin(e),s=-Math.cos(e);o.x=s*l.x+r*d.x,o.y=s*l.y+r*d.y,o.z=s*l.z+r*d.z,o.normalize(),u.push(o.x,o.y,o.z),a.x=c.x+i*o.x,a.y=c.y+i*o.y,a.z=c.z+i*o.z,h.push(a.x,a.y,a.z)}}!function(){for(let t=0;t<e;t++)m(t);m(!1===r?e:0),function(){for(let t=0;t<=e;t++)for(let i=0;i<=n;i++)l.x=t/e,l.y=i/n,d.push(l.x,l.y)}(),function(){for(let t=1;t<=e;t++)for(let e=1;e<=n;e++){const i=(n+1)*(t-1)+(e-1),r=(n+1)*t+(e-1),s=(n+1)*t+e,a=(n+1)*(t-1)+e;p.push(i,r,a),p.push(r,s,a)}}()}(),this.setIndex(p),this.setAttribute("position",new Ti(h,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(d,2))}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new El((new Eo[t.path.type]).fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Cl extends Di{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},null!==t){const e=[],i=new Set,n=new re,r=new re;if(null!==t.index){const s=t.attributes.position,a=t.index;let o=t.groups;0===o.length&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let t=0,l=o.length;t<l;++t){const l=o[t],c=l.start;for(let t=c,o=c+l.count;t<o;t+=3)for(let o=0;o<3;o++){const l=a.getX(t+o),c=a.getX(t+(o+1)%3);n.fromBufferAttribute(s,l),r.fromBufferAttribute(s,c),!0===Ll(n,r,i)&&(e.push(n.x,n.y,n.z),e.push(r.x,r.y,r.z))}}}else{const s=t.attributes.position;for(let t=0,a=s.count/3;t<a;t++)for(let a=0;a<3;a++){const o=3*t+a,l=3*t+(a+1)%3;n.fromBufferAttribute(s,o),r.fromBufferAttribute(s,l),!0===Ll(n,r,i)&&(e.push(n.x,n.y,n.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ti(e,3))}}}function Ll(t,e,i){const n=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return!0!==i.has(n)&&!0!==i.has(r)&&(i.add(n),i.add(r),!0)}var Rl=Object.freeze({__proto__:null,BoxGeometry:Qi,CapsuleGeometry:Po,CircleGeometry:Io,ConeGeometry:No,CylinderGeometry:Do,DodecahedronGeometry:zo,EdgesGeometry:Go,ExtrudeGeometry:vl,IcosahedronGeometry:_l,LatheGeometry:Ro,OctahedronGeometry:yl,PlaneGeometry:Mn,PolyhedronGeometry:Oo,RingGeometry:Ml,ShapeGeometry:bl,SphereGeometry:Sl,TetrahedronGeometry:wl,TorusGeometry:Tl,TorusKnotGeometry:Al,TubeGeometry:El,WireframeGeometry:Cl});class Pl extends xi{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Il extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dl extends xi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nl extends Dl{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ol extends xi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zl extends xi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ul extends xi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Bl extends xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fl extends xi{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new qt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kl extends Va{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function Gl(t,e,i){return Hl(t)?new t.constructor(t.subarray(e,void 0!==i?i:t.length)):t.slice(e,i)}function Vl(t,e,i){return!t||!i&&t.constructor===e?t:"number"==typeof e.BYTES_PER_ELEMENT?new e(t):Array.prototype.slice.call(t)}function Hl(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Wl(t){const e=t.length,i=new Array(e);for(let t=0;t!==e;++t)i[t]=t;return i.sort((function(e,i){return t[e]-t[i]})),i}function jl(t,e,i){const n=t.length,r=new t.constructor(n);for(let s=0,a=0;a!==n;++s){const n=i[s]*e;for(let i=0;i!==e;++i)r[a++]=t[n+i]}return r}function ql(t,e,i,n){let r=1,s=t[0];for(;void 0!==s&&void 0===s[n];)s=t[r++];if(void 0===s)return;let a=s[n];if(void 0!==a)if(Array.isArray(a))do{a=s[n],void 0!==a&&(e.push(s.time),i.push.apply(i,a)),s=t[r++]}while(void 0!==s);else if(void 0!==a.toArray)do{a=s[n],void 0!==a&&(e.push(s.time),a.toArray(i,i.length)),s=t[r++]}while(void 0!==s);else do{a=s[n],void 0!==a&&(e.push(s.time),i.push(a)),s=t[r++]}while(void 0!==s)}var Xl=Object.freeze({__proto__:null,arraySlice:Gl,convertArray:Vl,isTypedArray:Hl,getKeyframeOrder:Wl,sortedArray:jl,flattenJSON:ql,subclip:function(t,e,i,n,r=30){const s=t.clone();s.name=e;const a=[];for(let t=0;t<s.tracks.length;++t){const e=s.tracks[t],o=e.getValueSize(),l=[],c=[];for(let t=0;t<e.times.length;++t){const s=e.times[t]*r;if(!(s<i||s>=n)){l.push(e.times[t]);for(let i=0;i<o;++i)c.push(e.values[t*o+i])}}0!==l.length&&(e.times=Vl(l,e.times.constructor),e.values=Vl(c,e.values.constructor),a.push(e))}s.tracks=a;let o=1/0;for(let t=0;t<s.tracks.length;++t)o>s.tracks[t].times[0]&&(o=s.tracks[t].times[0]);for(let t=0;t<s.tracks.length;++t)s.tracks[t].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(t,e=0,i=t,n=30){n<=0&&(n=30);const r=i.tracks.length,s=e/n;for(let e=0;e<r;++e){const n=i.tracks[e],r=n.ValueTypeName;if("bool"===r||"string"===r)continue;const a=t.tracks.find((function(t){return t.name===n.name&&t.ValueTypeName===r}));if(void 0===a)continue;let o=0;const l=n.getValueSize();n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(o=l/3);let c=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(c=h/3);const u=n.times.length-1;let d;if(s<=n.times[0]){const t=o,e=l-o;d=Gl(n.values,t,e)}else if(s>=n.times[u]){const t=u*l+o,e=t+l-o;d=Gl(n.values,t,e)}else{const t=n.createInterpolant(),e=o,i=l-o;t.evaluate(s),d=Gl(t.resultBuffer,e,i)}if("quaternion"===r){(new ne).fromArray(d).normalize().conjugate().toArray(d)}const p=a.times.length;for(let t=0;t<p;++t){const e=t*h+c;if("quaternion"===r)ne.multiplyQuaternionsFlat(a.values,e,d,0,a.values,e);else{const t=h-2*c;for(let i=0;i<t;++i)a.values[e+i]-=d[i]}}}return t.blendMode=st,t}});class Yl{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=void 0!==n?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],r=e[i-1];t:{e:{let s;i:{n:if(!(t<n)){for(let s=i+2;;){if(void 0===n){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(r=n,n=e[++i],t<n)break e}s=e.length;break i}if(t>=r)break t;{const a=e[1];t<a&&(i=2,r=a);for(let s=i-2;;){if(void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(i===s)break;if(n=r,r=e[--i-1],t>=r)break e}s=i,i=0}}for(;i<s;){const n=i+s>>>1;t<e[n]?s=n:i=n+1}if(n=e[i],r=e[i-1],void 0===r)return this._cachedIndex=0,this.copySampleValue_(0);if(void 0===n)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let t=0;t!==n;++t)e[t]=i[r+t];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zl extends Yl{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:et,endingEnd:et}}intervalChanged_(t,e,i){const n=this.parameterPositions;let r=t-2,s=t+1,a=n[r],o=n[s];if(void 0===a)switch(this.getSettings_().endingStart){case it:r=t,a=2*e-i;break;case nt:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(void 0===o)switch(this.getSettings_().endingEnd){case it:s=t,o=2*i-e;break;case nt:s=1,o=i+n[1]-n[0];break;default:s=t-1,o=e}const l=.5*(i-e),c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-i),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-e)/(n-e),m=p*p,f=m*p,g=-u*f+2*u*m-u*p,v=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*p+1,x=(-1-d)*f+(1.5+d)*m+.5*p,_=d*f-d*m;for(let t=0;t!==a;++t)r[t]=g*s[c+t]+v*s[l+t]+x*s[o+t]+_*s[h+t];return r}}class Jl extends Yl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(i-e)/(n-e),h=1-c;for(let t=0;t!==a;++t)r[t]=s[l+t]*h+s[o+t]*c;return r}}class Kl extends Yl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class $l{constructor(t,e,i,n){if(void 0===t)throw new Error("THREE.KeyframeTrack: track name is undefined");if(void 0===e||0===e.length)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vl(e,this.TimeBufferType),this.values=Vl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vl(t.times,Array),values:Vl(t.values,Array)};const e=t.getInterpolation();e!==t.DefaultInterpolation&&(i.interpolation=e)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $:e=this.InterpolantFactoryMethodDiscrete;break;case Q:e=this.InterpolantFactoryMethodLinear;break;case tt:e=this.InterpolantFactoryMethodSmooth}if(void 0===e){const e="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant){if(t===this.DefaultInterpolation)throw new Error(e);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",e),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $;case this.InterpolantFactoryMethodLinear:return Q;case this.InterpolantFactoryMethodSmooth:return tt}}getValueSize(){return this.values.length/this.times.length}shift(t){if(0!==t){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(1!==t){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<t;)++r;for(;-1!==s&&i[s]>e;)--s;if(++s,0!==r||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const t=this.getValueSize();this.times=Gl(i,r,s),this.values=Gl(this.values,r*t,s*t)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,r=i.length;0===r&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let e=0;e!==r;e++){const n=i[e];if("number"==typeof n&&isNaN(n)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,e,n),t=!1;break}if(null!==s&&s>n){console.error("THREE.KeyframeTrack: Out of order keys.",this,e,n,s),t=!1;break}s=n}if(void 0!==n&&Hl(n))for(let e=0,i=n.length;e!==i;++e){const i=n[e];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,e,i),t=!1;break}}return t}optimize(){const t=Gl(this.times),e=Gl(this.values),i=this.getValueSize(),n=this.getInterpolation()===tt,r=t.length-1;let s=1;for(let a=1;a<r;++a){let r=!1;const o=t[a];if(o!==t[a+1]&&(1!==a||o!==t[0]))if(n)r=!0;else{const t=a*i,n=t-i,s=t+i;for(let a=0;a!==i;++a){const i=e[t+a];if(i!==e[n+a]||i!==e[s+a]){r=!0;break}}}if(r){if(a!==s){t[s]=t[a];const n=a*i,r=s*i;for(let t=0;t!==i;++t)e[r+t]=e[n+t]}++s}}if(r>0){t[s]=t[r];for(let t=r*i,n=s*i,a=0;a!==i;++a)e[n+a]=e[t+a];++s}return s!==t.length?(this.times=Gl(t,0,s),this.values=Gl(e,0,s*i)):(this.times=t,this.values=e),this}clone(){const t=Gl(this.times,0),e=Gl(this.values,0),i=new(0,this.constructor)(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}$l.prototype.TimeBufferType=Float32Array,$l.prototype.ValueBufferType=Float32Array,$l.prototype.DefaultInterpolation=Q;class Ql extends $l{}Ql.prototype.ValueTypeName="bool",Ql.prototype.ValueBufferType=Array,Ql.prototype.DefaultInterpolation=$,Ql.prototype.InterpolantFactoryMethodLinear=void 0,Ql.prototype.InterpolantFactoryMethodSmooth=void 0;class tc extends $l{}tc.prototype.ValueTypeName="color";class ec extends $l{}ec.prototype.ValueTypeName="number";class ic extends Yl{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-e)/(n-e);let l=t*a;for(let t=l+a;l!==t;l+=4)ne.slerpFlat(r,0,s,l-a,s,l,o);return r}}class nc extends $l{InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}}nc.prototype.ValueTypeName="quaternion",nc.prototype.DefaultInterpolation=Q,nc.prototype.InterpolantFactoryMethodSmooth=void 0;class rc extends $l{}rc.prototype.ValueTypeName="string",rc.prototype.ValueBufferType=Array,rc.prototype.DefaultInterpolation=$,rc.prototype.InterpolantFactoryMethodLinear=void 0,rc.prototype.InterpolantFactoryMethodSmooth=void 0;class sc extends $l{}sc.prototype.ValueTypeName="vector";class ac{constructor(t,e=-1,i,n=2500){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=_t(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let t=0,r=i.length;t!==r;++t)e.push(oc(i[t]).scale(n));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let t=0,n=i.length;t!==n;++t)e.push($l.toJSON(i[t]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const r=e.length,s=[];for(let t=0;t<r;t++){let a=[],o=[];a.push((t+r-1)%r,t,(t+1)%r),o.push(0,1,0);const l=Wl(a);a=jl(a,1,l),o=jl(o,1,l),n||0!==a[0]||(a.push(r),o.push(o[0])),s.push(new ec(".morphTargetInfluences["+e[t].name+"]",a,o).scale(1/i))}return new this(t,-1,s)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const e=t;i=e.geometry&&e.geometry.animations||e.animations}for(let t=0;t<i.length;t++)if(i[t].name===e)return i[t];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let e=0,i=t.length;e<i;e++){const i=t[e],s=i.name.match(r);if(s&&s.length>1){const t=s[1];let e=n[t];e||(n[t]=e=[]),e.push(i)}}const s=[];for(const t in n)s.push(this.CreateFromMorphTargetSequence(t,n[t],e,i));return s}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(t,e,i,n,r){if(0!==i.length){const s=[],a=[];ql(i,s,a,n),0!==s.length&&r.push(new t(e,s,a))}},n=[],r=t.name||"default",s=t.fps||30,a=t.blendMode;let o=t.length||-1;const l=t.hierarchy||[];for(let t=0;t<l.length;t++){const r=l[t].keys;if(r&&0!==r.length)if(r[0].morphTargets){const t={};let e;for(e=0;e<r.length;e++)if(r[e].morphTargets)for(let i=0;i<r[e].morphTargets.length;i++)t[r[e].morphTargets[i]]=-1;for(const i in t){const t=[],s=[];for(let n=0;n!==r[e].morphTargets.length;++n){const n=r[e];t.push(n.time),s.push(n.morphTarget===i?1:0)}n.push(new ec(".morphTargetInfluence["+i+"]",t,s))}o=t.length*s}else{const s=".bones["+e[t].name+"]";i(sc,s+".position",r,"pos",n),i(nc,s+".quaternion",r,"rot",n),i(sc,s+".scale",r,"scl",n)}}if(0===n.length)return null;return new this(r,o,n,a)}resetDuration(){let t=0;for(let e=0,i=this.tracks.length;e!==i;++e){const i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oc(t){if(void 0===t.type)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ec;case"vector":case"vector2":case"vector3":case"vector4":return sc;case"color":return tc;case"quaternion":return nc;case"bool":case"boolean":return Ql;case"string":return rc}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(t.type);if(void 0===t.times){const e=[],i=[];ql(t.keys,e,i,"value"),t.times=e,t.values=i}return void 0!==e.parse?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const lc={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class cc{constructor(t,e,i){const n=this;let r,s=!1,a=0,o=0;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(t){o++,!1===s&&void 0!==n.onStart&&n.onStart(t,a,o),s=!0},this.itemEnd=function(t){a++,void 0!==n.onProgress&&n.onProgress(t,a,o),a===o&&(s=!1,void 0!==n.onLoad&&n.onLoad())},this.itemError=function(t){void 0!==n.onError&&n.onError(t)},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return l.push(t,e),this},this.removeHandler=function(t){const e=l.indexOf(t);return-1!==e&&l.splice(e,2),this},this.getHandler=function(t){for(let e=0,i=l.length;e<i;e+=2){const i=l[e],n=l[e+1];if(i.global&&(i.lastIndex=0),i.test(t))return n}return null}}}const hc=new cc;class uc{constructor(t){this.manager=void 0!==t?t:hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise((function(n,r){i.load(t,n,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const dc={};class pc extends Error{constructor(t,e){super(t),this.response=e}}class mc extends uc{constructor(t){super(t)}load(t,e,i,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=lc.get(t);if(void 0!==r)return this.manager.itemStart(t),setTimeout((()=>{e&&e(r),this.manager.itemEnd(t)}),0),r;if(void 0!==dc[t])return void dc[t].push({onLoad:e,onProgress:i,onError:n});dc[t]=[],dc[t].push({onLoad:e,onProgress:i,onError:n});const s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,o=this.responseType;fetch(s).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const i=dc[t],n=e.body.getReader(),r=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),s=r?parseInt(r):0,a=0!==s;let o=0;const l=new ReadableStream({start(t){!function e(){n.read().then((({done:n,value:r})=>{if(n)t.close();else{o+=r.byteLength;const n=new ProgressEvent("progress",{lengthComputable:a,loaded:o,total:s});for(let t=0,e=i.length;t<e;t++){const e=i[t];e.onProgress&&e.onProgress(n)}t.enqueue(r),e()}}))}()}});return new Response(l)}throw new pc(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)})).then((t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)));case"json":return t.json();default:if(void 0===a)return t.text();{const e=/charset="?([^;"\s]*)"?/i.exec(a),i=e&&e[1]?e[1].toLowerCase():void 0,n=new TextDecoder(i);return t.arrayBuffer().then((t=>n.decode(t)))}}})).then((e=>{lc.add(t,e);const i=dc[t];delete dc[t];for(let t=0,n=i.length;t<n;t++){const n=i[t];n.onLoad&&n.onLoad(e)}})).catch((e=>{const i=dc[t];if(void 0===i)throw this.manager.itemError(t),e;delete dc[t];for(let t=0,n=i.length;t<n;t++){const n=i[t];n.onError&&n.onError(e)}this.manager.itemError(t)})).finally((()=>{this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class fc extends uc{constructor(t){super(t)}load(t,e,i,n){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=lc.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s;const a=Ot("img");function o(){c(),lc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(e){c(),n&&n(e),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class gc extends si{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,void 0!==this.groundColor&&(e.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(e.object.distance=this.distance),void 0!==this.angle&&(e.object.angle=this.angle),void 0!==this.decay&&(e.object.decay=this.decay),void 0!==this.penumbra&&(e.object.penumbra=this.penumbra),void 0!==this.shadow&&(e.object.shadow=this.shadow.toJSON()),e}}class vc extends gc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(si.DefaultUp),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xc=new Ne,_c=new re,yc=new re;class Mc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xn,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const t={};return 0!==this.bias&&(t.bias=this.bias),0!==this.normalBias&&(t.normalBias=this.normalBias),1!==this.radius&&(t.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bc extends Mc{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=2*xt*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;i===e.fov&&n===e.aspect&&r===e.far||(e.fov=i,e.aspect=n,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sc extends gc{constructor(t,e,i=0,n=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(si.DefaultUp),this.updateMatrix(),this.target=new si,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wc=new Ne,Tc=new re,Ac=new re;class Ec extends Mc{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new re(1,0,0),new re(-1,0,0),new re(0,0,1),new re(0,0,-1),new re(0,1,0),new re(0,-1,0)],this._cubeUps=[new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,1,0),new re(0,0,1),new re(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tc.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tc),Ac.copy(i.position),Ac.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ac),i.updateMatrixWorld(),n.makeTranslation(-Tc.x,-Tc.y,-Tc.z),wc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Cc extends gc{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Ec}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Lc extends Mc{constructor(){super(new In(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rc extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(si.DefaultUp),this.updateMatrix(),this.target=new si,this.shadow=new Lc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Pc extends gc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ic extends gc{constructor(t,e,i=10,n=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Dc{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new re)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const i=t.x,n=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.282095),e.addScaledVector(s[1],.488603*n),e.addScaledVector(s[2],.488603*r),e.addScaledVector(s[3],.488603*i),e.addScaledVector(s[4],i*n*1.092548),e.addScaledVector(s[5],n*r*1.092548),e.addScaledVector(s[6],.315392*(3*r*r-1)),e.addScaledVector(s[7],i*r*1.092548),e.addScaledVector(s[8],.546274*(i*i-n*n)),e}getIrradianceAt(t,e){const i=t.x,n=t.y,r=t.z,s=this.coefficients;return e.copy(s[0]).multiplyScalar(.886227),e.addScaledVector(s[1],1.023328*n),e.addScaledVector(s[2],1.023328*r),e.addScaledVector(s[3],1.023328*i),e.addScaledVector(s[4],.858086*i*n),e.addScaledVector(s[5],.858086*n*r),e.addScaledVector(s[6],.743125*r*r-.247708),e.addScaledVector(s[7],.858086*i*r),e.addScaledVector(s[8],.429043*(i*i-n*n)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(t.coefficients[i],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let i=0;i<9;i++)this.coefficients[i].lerp(t.coefficients[i],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return(new this.constructor).copy(this)}fromArray(t,e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(t,e+3*n);return this}toArray(t=[],e=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(t,e+3*n);return t}static getBasisAt(t,e){const i=t.x,n=t.y,r=t.z;e[0]=.282095,e[1]=.488603*n,e[2]=.488603*r,e[3]=.488603*i,e[4]=1.092548*i*n,e[5]=1.092548*n*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*i*r,e[8]=.546274*(i*i-n*n)}}class Nc extends gc{constructor(t=new Dc,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class Oc extends uc{constructor(t){super(t),this.textures={}}load(t,e,i,n){const r=this,s=new mc(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(i){try{e(r.parse(JSON.parse(i)))}catch(e){n?n(e):console.error(e),r.manager.itemError(t)}}),i,n)}parse(t){const e=this.textures;function i(t){return void 0===e[t]&&console.warn("THREE.MaterialLoader: Undefined texture",t),e[t]}const n=Oc.createMaterialFromType(t.type);if(void 0!==t.uuid&&(n.uuid=t.uuid),void 0!==t.name&&(n.name=t.name),void 0!==t.color&&void 0!==n.color&&n.color.setHex(t.color),void 0!==t.roughness&&(n.roughness=t.roughness),void 0!==t.metalness&&(n.metalness=t.metalness),void 0!==t.sheen&&(n.sheen=t.sheen),void 0!==t.sheenColor&&(n.sheenColor=(new qt).setHex(t.sheenColor)),void 0!==t.sheenRoughness&&(n.sheenRoughness=t.sheenRoughness),void 0!==t.emissive&&void 0!==n.emissive&&n.emissive.setHex(t.emissive),void 0!==t.specular&&void 0!==n.specular&&n.specular.setHex(t.specular),void 0!==t.specularIntensity&&(n.specularIntensity=t.specularIntensity),void 0!==t.specularColor&&void 0!==n.specularColor&&n.specularColor.setHex(t.specularColor),void 0!==t.shininess&&(n.shininess=t.shininess),void 0!==t.clearcoat&&(n.clearcoat=t.clearcoat),void 0!==t.clearcoatRoughness&&(n.clearcoatRoughness=t.clearcoatRoughness),void 0!==t.iridescence&&(n.iridescence=t.iridescence),void 0!==t.iridescenceIOR&&(n.iridescenceIOR=t.iridescenceIOR),void 0!==t.iridescenceThicknessRange&&(n.iridescenceThicknessRange=t.iridescenceThicknessRange),void 0!==t.transmission&&(n.transmission=t.transmission),void 0!==t.thickness&&(n.thickness=t.thickness),void 0!==t.attenuationDistance&&(n.attenuationDistance=t.attenuationDistance),void 0!==t.attenuationColor&&void 0!==n.attenuationColor&&n.attenuationColor.setHex(t.attenuationColor),void 0!==t.fog&&(n.fog=t.fog),void 0!==t.flatShading&&(n.flatShading=t.flatShading),void 0!==t.blending&&(n.blending=t.blending),void 0!==t.combine&&(n.combine=t.combine),void 0!==t.side&&(n.side=t.side),void 0!==t.shadowSide&&(n.shadowSide=t.shadowSide),void 0!==t.opacity&&(n.opacity=t.opacity),void 0!==t.transparent&&(n.transparent=t.transparent),void 0!==t.alphaTest&&(n.alphaTest=t.alphaTest),void 0!==t.depthTest&&(n.depthTest=t.depthTest),void 0!==t.depthWrite&&(n.depthWrite=t.depthWrite),void 0!==t.colorWrite&&(n.colorWrite=t.colorWrite),void 0!==t.stencilWrite&&(n.stencilWrite=t.stencilWrite),void 0!==t.stencilWriteMask&&(n.stencilWriteMask=t.stencilWriteMask),void 0!==t.stencilFunc&&(n.stencilFunc=t.stencilFunc),void 0!==t.stencilRef&&(n.stencilRef=t.stencilRef),void 0!==t.stencilFuncMask&&(n.stencilFuncMask=t.stencilFuncMask),void 0!==t.stencilFail&&(n.stencilFail=t.stencilFail),void 0!==t.stencilZFail&&(n.stencilZFail=t.stencilZFail),void 0!==t.stencilZPass&&(n.stencilZPass=t.stencilZPass),void 0!==t.wireframe&&(n.wireframe=t.wireframe),void 0!==t.wireframeLinewidth&&(n.wireframeLinewidth=t.wireframeLinewidth),void 0!==t.wireframeLinecap&&(n.wireframeLinecap=t.wireframeLinecap),void 0!==t.wireframeLinejoin&&(n.wireframeLinejoin=t.wireframeLinejoin),void 0!==t.rotation&&(n.rotation=t.rotation),1!==t.linewidth&&(n.linewidth=t.linewidth),void 0!==t.dashSize&&(n.dashSize=t.dashSize),void 0!==t.gapSize&&(n.gapSize=t.gapSize),void 0!==t.scale&&(n.scale=t.scale),void 0!==t.polygonOffset&&(n.polygonOffset=t.polygonOffset),void 0!==t.polygonOffsetFactor&&(n.polygonOffsetFactor=t.polygonOffsetFactor),void 0!==t.polygonOffsetUnits&&(n.polygonOffsetUnits=t.polygonOffsetUnits),void 0!==t.dithering&&(n.dithering=t.dithering),void 0!==t.alphaToCoverage&&(n.alphaToCoverage=t.alphaToCoverage),void 0!==t.premultipliedAlpha&&(n.premultipliedAlpha=t.premultipliedAlpha),void 0!==t.visible&&(n.visible=t.visible),void 0!==t.toneMapped&&(n.toneMapped=t.toneMapped),void 0!==t.userData&&(n.userData=t.userData),void 0!==t.vertexColors&&("number"==typeof t.vertexColors?n.vertexColors=t.vertexColors>0:n.vertexColors=t.vertexColors),void 0!==t.uniforms)for(const e in t.uniforms){const r=t.uniforms[e];switch(n.uniforms[e]={},r.type){case"t":n.uniforms[e].value=i(r.value);break;case"c":n.uniforms[e].value=(new qt).setHex(r.value);break;case"v2":n.uniforms[e].value=(new Lt).fromArray(r.value);break;case"v3":n.uniforms[e].value=(new re).fromArray(r.value);break;case"v4":n.uniforms[e].value=(new Qt).fromArray(r.value);break;case"m3":n.uniforms[e].value=(new Rt).fromArray(r.value);break;case"m4":n.uniforms[e].value=(new Ne).fromArray(r.value);break;default:n.uniforms[e].value=r.value}}if(void 0!==t.defines&&(n.defines=t.defines),void 0!==t.vertexShader&&(n.vertexShader=t.vertexShader),void 0!==t.fragmentShader&&(n.fragmentShader=t.fragmentShader),void 0!==t.glslVersion&&(n.glslVersion=t.glslVersion),void 0!==t.extensions)for(const e in t.extensions)n.extensions[e]=t.extensions[e];if(void 0!==t.size&&(n.size=t.size),void 0!==t.sizeAttenuation&&(n.sizeAttenuation=t.sizeAttenuation),void 0!==t.map&&(n.map=i(t.map)),void 0!==t.matcap&&(n.matcap=i(t.matcap)),void 0!==t.alphaMap&&(n.alphaMap=i(t.alphaMap)),void 0!==t.bumpMap&&(n.bumpMap=i(t.bumpMap)),void 0!==t.bumpScale&&(n.bumpScale=t.bumpScale),void 0!==t.normalMap&&(n.normalMap=i(t.normalMap)),void 0!==t.normalMapType&&(n.normalMapType=t.normalMapType),void 0!==t.normalScale){let e=t.normalScale;!1===Array.isArray(e)&&(e=[e,e]),n.normalScale=(new Lt).fromArray(e)}return void 0!==t.displacementMap&&(n.displacementMap=i(t.displacementMap)),void 0!==t.displacementScale&&(n.displacementScale=t.displacementScale),void 0!==t.displacementBias&&(n.displacementBias=t.displacementBias),void 0!==t.roughnessMap&&(n.roughnessMap=i(t.roughnessMap)),void 0!==t.metalnessMap&&(n.metalnessMap=i(t.metalnessMap)),void 0!==t.emissiveMap&&(n.emissiveMap=i(t.emissiveMap)),void 0!==t.emissiveIntensity&&(n.emissiveIntensity=t.emissiveIntensity),void 0!==t.specularMap&&(n.specularMap=i(t.specularMap)),void 0!==t.specularIntensityMap&&(n.specularIntensityMap=i(t.specularIntensityMap)),void 0!==t.specularColorMap&&(n.specularColorMap=i(t.specularColorMap)),void 0!==t.envMap&&(n.envMap=i(t.envMap)),void 0!==t.envMapIntensity&&(n.envMapIntensity=t.envMapIntensity),void 0!==t.reflectivity&&(n.reflectivity=t.reflectivity),void 0!==t.refractionRatio&&(n.refractionRatio=t.refractionRatio),void 0!==t.lightMap&&(n.lightMap=i(t.lightMap)),void 0!==t.lightMapIntensity&&(n.lightMapIntensity=t.lightMapIntensity),void 0!==t.aoMap&&(n.aoMap=i(t.aoMap)),void 0!==t.aoMapIntensity&&(n.aoMapIntensity=t.aoMapIntensity),void 0!==t.gradientMap&&(n.gradientMap=i(t.gradientMap)),void 0!==t.clearcoatMap&&(n.clearcoatMap=i(t.clearcoatMap)),void 0!==t.clearcoatRoughnessMap&&(n.clearcoatRoughnessMap=i(t.clearcoatRoughnessMap)),void 0!==t.clearcoatNormalMap&&(n.clearcoatNormalMap=i(t.clearcoatNormalMap)),void 0!==t.clearcoatNormalScale&&(n.clearcoatNormalScale=(new Lt).fromArray(t.clearcoatNormalScale)),void 0!==t.iridescenceMap&&(n.iridescenceMap=i(t.iridescenceMap)),void 0!==t.iridescenceThicknessMap&&(n.iridescenceThicknessMap=i(t.iridescenceThicknessMap)),void 0!==t.transmissionMap&&(n.transmissionMap=i(t.transmissionMap)),void 0!==t.thicknessMap&&(n.thicknessMap=i(t.thicknessMap)),void 0!==t.sheenColorMap&&(n.sheenColorMap=i(t.sheenColorMap)),void 0!==t.sheenRoughnessMap&&(n.sheenRoughnessMap=i(t.sheenRoughnessMap)),n}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){return new{ShadowMaterial:Pl,SpriteMaterial:sa,RawShaderMaterial:Il,ShaderMaterial:sn,PointsMaterial:Qa,MeshPhysicalMaterial:Nl,MeshStandardMaterial:Dl,MeshPhongMaterial:Ol,MeshToonMaterial:zl,MeshNormalMaterial:Ul,MeshLambertMaterial:Bl,MeshDepthMaterial:Us,MeshDistanceMaterial:Bs,MeshBasicMaterial:_i,MeshMatcapMaterial:Fl,LineDashedMaterial:kl,LineBasicMaterial:Va,Material:xi}[t]}}class zc{static decodeText(t){if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);let e="";for(let i=0,n=t.length;i<n;i++)e+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(e))}catch(t){return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return-1===e?"./":t.slice(0,e+1)}static resolveURL(t,e){return"string"!=typeof t||""===t?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Uc extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Bc extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=new mc(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(t,(function(i){try{e(r.parse(JSON.parse(i)))}catch(e){n?n(e):console.error(e),r.manager.itemError(t)}}),i,n)}parse(t){const e={},i={};function n(t,n){if(void 0!==e[n])return e[n];const r=t.interleavedBuffers[n],s=function(t,e){if(void 0!==i[e])return i[e];const n=t.arrayBuffers[e],r=new Uint32Array(n).buffer;return i[e]=r,r}(t,r.buffer),a=Nt(r.type,s),o=new ia(a,r.stride);return o.uuid=r.uuid,e[n]=o,o}const r=t.isInstancedBufferGeometry?new Uc:new Di,s=t.data.index;if(void 0!==s){const t=Nt(s.type,s.array);r.setIndex(new bi(t,1))}const a=t.data.attributes;for(const e in a){const i=a[e];let s;if(i.isInterleavedBufferAttribute){const e=n(t.data,i.data);s=new ra(e,i.itemSize,i.offset,i.normalized)}else{const t=Nt(i.type,i.array);s=new(i.isInstancedBufferAttribute?Oa:bi)(t,i.itemSize,i.normalized)}void 0!==i.name&&(s.name=i.name),void 0!==i.usage&&s.setUsage(i.usage),void 0!==i.updateRange&&(s.updateRange.offset=i.updateRange.offset,s.updateRange.count=i.updateRange.count),r.setAttribute(e,s)}const o=t.data.morphAttributes;if(o)for(const e in o){const i=o[e],s=[];for(let e=0,r=i.length;e<r;e++){const r=i[e];let a;if(r.isInterleavedBufferAttribute){const e=n(t.data,r.data);a=new ra(e,r.itemSize,r.offset,r.normalized)}else{const t=Nt(r.type,r.array);a=new bi(t,r.itemSize,r.normalized)}void 0!==r.name&&(a.name=r.name),s.push(a)}r.morphAttributes[e]=s}t.data.morphTargetsRelative&&(r.morphTargetsRelative=!0);const l=t.data.groups||t.data.drawcalls||t.data.offsets;if(void 0!==l)for(let t=0,e=l.length;t!==e;++t){const e=l[t];r.addGroup(e.start,e.count,e.materialIndex)}const c=t.data.bounceingSphere;if(void 0!==c){const t=new re;void 0!==c.center&&t.fromArray(c.center),r.bounceingSphere=new Te(t,c.radius)}return t.name&&(r.name=t.name),t.userData&&(r.userData=t.userData),r}}const Fc={UVMapping:n,CubeReflectionMapping:r,CubeRefractionMapping:s,EquirectangularReflectionMapping:a,EquirectangularRefractionMapping:o,CubeUVReflectionMapping:l},kc={RepeatWrapping:c,ClampToEdgeWrapping:h,MirroredRepeatWrapping:u},Gc={NearestFilter:d,NearestMipmapNearestFilter:p,NearestMipmapLinearFilter:m,LinearFilter:f,LinearMipmapNearestFilter:g,LinearMipmapLinearFilter:v};let Vc;class Hc{static getContext(){return void 0===Vc&&(Vc=new(window.AudioContext||window.webkitAudioContext)),Vc}static setContext(t){Vc=t}}const Wc=new Ne,jc=new Ne,qc=new Ne;class Xc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yc(){return("undefined"==typeof performance?Date:performance).now()}const Zc=new re,Jc=new ne,Kc=new re,$c=new re;class Qc extends si{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(!0===this.isPlaying)return void console.warn("THREE.Audio: Audio is already playing.");if(!1===this.hasPlaybackControl)return void console.warn("THREE.Audio: this Audio has no playback control.");this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("THREE.Audio: this Audio has no playback control.")}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("THREE.Audio: this Audio has no playback control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),!0===this._connected?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(!1!==this.hasPlaybackControl)return this.playbackRate=t,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("THREE.Audio: this Audio has no playback control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(!1!==this.hasPlaybackControl)return this.loop=t,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("THREE.Audio: this Audio has no playback control.")}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const th=new re,eh=new ne,ih=new re,nh=new re;class rh{constructor(t,e,i){let n,r,s;switch(this.binding=t,this.valueSize=i,e){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const i=this.buffer,n=this.valueSize,r=t*n+n;let s=this.cumulativeWeight;if(0===s){for(let t=0;t!==n;++t)i[r+t]=i[t];s=e}else{s+=e;const t=e/s;this._mixBufferRegion(i,r,0,t,n)}this.cumulativeWeight=s}accumulateAdditive(t){const e=this.buffer,i=this.valueSize,n=i*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity(),this._mixBufferRegionAdditive(e,n,0,t,i),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,i=this.buffer,n=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const t=e*this._origIndex;this._mixBufferRegion(i,n,t,1-r,e)}s>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*e,1,e);for(let t=e,r=e+e;t!==r;++t)if(i[t]!==i[t+e]){a.setValue(i,n);break}}saveOriginalState(){const t=this.binding,e=this.buffer,i=this.valueSize,n=i*this._origIndex;t.getValue(e,n);for(let t=i,r=n;t!==r;++t)e[t]=e[n+t%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let i=t;i<e;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[e+i]=this.buffer[t+i]}_select(t,e,i,n,r){if(n>=.5)for(let n=0;n!==r;++n)t[e+n]=t[i+n]}_slerp(t,e,i,n){ne.slerpFlat(t,e,t,e,t,i,n)}_slerpAdditive(t,e,i,n,r){const s=this._workIndex*r;ne.multiplyQuaternionsFlat(t,s,t,e,t,i),ne.slerpFlat(t,e,t,e,t,s,n)}_lerp(t,e,i,n,r){const s=1-n;for(let a=0;a!==r;++a){const r=e+a;t[r]=t[r]*s+t[i+a]*n}}_lerpAdditive(t,e,i,n,r){for(let s=0;s!==r;++s){const r=e+s;t[r]=t[r]+t[i+s]*n}}}const sh="\\[\\]\\.:\\/",ah=new RegExp("[\\[\\]\\.:\\/]","g"),oh="[^\\[\\]\\.:\\/]",lh="[^"+sh.replace("\\.","")+"]",ch=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",oh)+/(WCOD+)?/.source.replace("WCOD",lh)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oh)+"$"),hh=["material","materials","bones","map"];class uh{constructor(t,e,i){this.path=e,this.parsedPath=i||uh.parseTrackName(e),this.node=uh.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbounce,this.setValue=this._setValue_unbounce}static create(t,e,i){return t&&t.isAnimationObjectGroup?new uh.Composite(t,e,i):new uh(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ah,"")}static parseTrackName(t){const e=ch.exec(t);if(null===e)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(void 0!==n&&-1!==n){const t=i.nodeName.substring(n+1);-1!==hh.indexOf(t)&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=t)}if(null===i.propertyName||0===i.propertyName.length)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(void 0===e||""===e||"."===e||-1===e||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(void 0!==i)return i}if(t.children){const i=function(t){for(let n=0;n<t.length;n++){const r=t[n];if(r.name===e||r.uuid===e)return r;const s=i(r.children);if(s)return s}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbounce(t,e){this.bind(),this.getValue(t,e)}_setValue_unbounce(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let r=e.propertyIndex;if(t||(t=uh.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");if(i){let n=e.objectIndex;switch(i){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let e=0;e<t.length;e++)if(t[e].name===n){n=e;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(void 0===t[i])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[i]}if(void 0!==n){if(void 0===t[n])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[n]}}const s=t[n];if(void 0===s){const i=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+i+"."+n+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,void 0!==t.needsUpdate?a=this.Versioning.NeedsUpdate:void 0!==t.matrixWorldNeedsUpdate&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==r){if("morphTargetInfluences"===n){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);void 0!==t.morphTargetDictionary[r]&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else void 0!==s.fromArray&&void 0!==s.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbounce,this.setValue=this._setValue_unbounce}}uh.Composite=class{constructor(t,e,i){const n=i||uh.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];void 0!==n&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},uh.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},uh.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},uh.prototype.GetterByBindingType=[uh.prototype._getValue_direct,uh.prototype._getValue_array,uh.prototype._getValue_arrayElement,uh.prototype._getValue_toArray],uh.prototype.SetterByBindingTypeAndVersioning=[[uh.prototype._setValue_direct,uh.prototype._setValue_direct_setNeedsUpdate,uh.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[uh.prototype._setValue_array,uh.prototype._setValue_array_setNeedsUpdate,uh.prototype._setValue_array_setMatrixWorldNeedsUpdate],[uh.prototype._setValue_arrayElement,uh.prototype._setValue_arrayElement_setNeedsUpdate,uh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[uh.prototype._setValue_fromArray,uh.prototype._setValue_fromArray_setNeedsUpdate,uh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dh{constructor(t,e,i=null,n=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=i,this.blendMode=n;const r=e.tracks,s=r.length,a=new Array(s),o={endingStart:et,endingEnd:et};for(let t=0;t!==s;++t){const e=r[t].createInterpolant(null);a[t]=e,e.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,i){if(t.fadeOut(e),this.fadeIn(e),i){const i=this._clip.duration,n=t._clip.duration,r=n/i,s=i/n;t.warp(1,r,e),this.warp(s,1,e)}return this}crossFadeTo(t,e,i){return t.crossFadeFrom(this,e,i)}stopFading(){const t=this._weightInterpolant;return null!==t&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,i){const n=this._mixer,r=n.time,s=this.timeScale;let a=this._timeScaleInterpolant;null===a&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,o[1]=r+i,l[0]=t/s,l[1]=e/s,this}stopWarping(){const t=this._timeScaleInterpolant;return null!==t&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,i,n){if(!this.enabled)return void this._updateWeight(t);const r=this._startTime;if(null!==r){const n=(t-r)*i;n<0||0===i?e=0:(this._startTime=null,e=i*n)}e*=this._updateTimeScale(t);const s=this._updateTime(e),a=this._updateWeight(t);if(a>0){const t=this._interpolants,e=this._propertyBindings;if(this.blendMode===st)for(let i=0,n=t.length;i!==n;++i)t[i].evaluate(s),e[i].accumulateAdditive(a);else for(let i=0,r=t.length;i!==r;++i)t[i].evaluate(s),e[i].accumulate(n,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const i=this._weightInterpolant;if(null!==i){const n=i.evaluate(t)[0];e*=n,t>i.parameterPositions[1]&&(this.stopFading(),0===n&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const i=this._timeScaleInterpolant;if(null!==i){e*=i.evaluate(t)[0],t>i.parameterPositions[1]&&(this.stopWarping(),0===e?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,i=this.loop;let n=this.time+t,r=this._loopCount;const s=2202===i;if(0===t)return-1===r?n:s&&1==(1&r)?e-n:n;if(2200===i){-1===r&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(n>=e)n=e;else{if(!(n<0)){this.time=n;break t}n=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(-1===r&&(t>=0?(r=0,this._setEndings(!0,0===this.repetitions,s)):this._setEndings(0===this.repetitions,!0,s)),n>=e||n<0){const i=Math.floor(n/e);n-=e*i,r+=Math.abs(i);const a=this.repetitions-r;if(a<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=t>0?e:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(1===a){const e=t<0;this._setEndings(e,!e,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:i})}}else this.time=n;if(s&&1==(1&r))return e-n}return n}_setEndings(t,e,i){const n=this._interpolantSettings;i?(n.endingStart=it,n.endingEnd=it):(n.endingStart=t?this.zeroSlopeAtStart?it:et:nt,n.endingEnd=e?this.zeroSlopeAtEnd?it:et:nt)}_scheduleFading(t,e,i){const n=this._mixer,r=n.time;let s=this._weightInterpolant;null===s&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,o=s.sampleValues;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=i,this}}const ph=new Float32Array(1);class mh{constructor(t){this.value=t}clone(){return new mh(void 0===this.value.clone?this.value:this.value.clone())}}let fh=0;function gh(t,e){return t.distance-e.distance}function vh(t,e,i,n){if(t.layers.test(e.layers)&&t.raycast(e,i),!0===n){const n=t.children;for(let t=0,r=n.length;t<r;t++)vh(n[t],e,i,!0)}}const xh=new Lt;const _h=new re,yh=new re;const Mh=new re;const bh=new re,Sh=new Ne,wh=new Ne;function Th(t){const e=[];!0===t.isBone&&e.push(t);for(let i=0;i<t.children.length;i++)e.push.apply(e,Th(t.children[i]));return e}const Ah=new re,Eh=new qt,Ch=new qt;const Lh=new re,Rh=new re,Ph=new re;const Ih=new re,Dh=new an;function Nh(t,e,i,n,r,s,a){Ih.set(r,s,a).unproject(n);const o=e[t];if(void 0!==o){const t=i.getAttribute("position");for(let e=0,i=o.length;e<i;e++)t.setXYZ(o[e],Ih.x,Ih.y,Ih.z)}}const Oh=new oe;const zh=new re;let Uh,Bh;const Fh=kh();function kh(){const t=new ArrayBuffer(4),e=new Float32Array(t),i=new Uint32Array(t),n=new Uint32Array(512),r=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(n[t]=0,n[256|t]=32768,r[t]=24,r[256|t]=24):e<-14?(n[t]=1024>>-e-14,n[256|t]=1024>>-e-14|32768,r[t]=-e-1,r[256|t]=-e-1):e<=15?(n[t]=e+15<<10,n[256|t]=e+15<<10|32768,r[t]=13,r[256|t]=13):e<128?(n[t]=31744,n[256|t]=64512,r[t]=24,r[256|t]=24):(n[t]=31744,n[256|t]=64512,r[t]=13,r[256|t]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,i=0;for(;0==(8388608&e);)e<<=1,i-=8388608;e&=-8388609,i+=947912704,s[t]=e|i}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)a[t]=t<<23;a[31]=1199570944,a[32]=2147483648;for(let t=33;t<63;++t)a[t]=2147483648+(t-32<<23);a[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(o[t]=1024);return{floatView:e,uint32View:i,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Gh=Object.freeze({__proto__:null,toHalfFloat:function(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=yt(t,-65504,65504),Fh.floatView[0]=t;const e=Fh.uint32View[0],i=e>>23&511;return Fh.baseTable[i]+((8388607&e)>>Fh.shiftTable[i])},fromHalfFloat:function(t){const e=t>>10;return Fh.uint32View[0]=Fh.mantissaTable[Fh.offsetTable[e]+(1023&t)]+Fh.exponentTable[e],Fh.floatView[0]}});"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:e}})),"undefined"!=typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=e),t.ACESFilmicToneMapping=4,t.AddEquation=i,t.AddOperation=2,t.AdditiveAnimationBlendMode=st,t.AdditiveBlending=2,t.AlphaFormat=1021,t.AlwaysDepth=1,t.AlwaysStencilFunc=519,t.AmbientLight=Pc,t.AmbientLightProbe=class extends Nc{constructor(t,e=1){super(void 0,e),this.isAmbientLightProbe=!0;const i=(new qt).set(t);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}},t.AnimationClip=ac,t.AnimationLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=new mc(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(i){try{e(r.parse(JSON.parse(i)))}catch(e){n?n(e):console.error(e),r.manager.itemError(t)}}),i,n)}parse(t){const e=[];for(let i=0;i<t.length;i++){const n=ac.parse(t[i]);e.push(n)}return e}},t.AnimationMixer=class extends mt{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const i=t._localRoot||this._root,n=t._clip.tracks,r=n.length,s=t._propertyBindings,a=t._interpolants,o=i.uuid,l=this._bindingsByRootAndName;let c=l[o];void 0===c&&(c={},l[o]=c);for(let t=0;t!==r;++t){const r=n[t],l=r.name;let h=c[l];if(void 0!==h)++h.referenceCount,s[t]=h;else{if(h=s[t],void 0!==h){null===h._cacheIndex&&(++h.referenceCount,this._addInactiveBinding(h,o,l));continue}const n=e&&e._propertyBindings[t].binding.parsedPath;h=new rh(uh.create(i,l,n),r.ValueTypeName,r.getValueSize()),++h.referenceCount,this._addInactiveBinding(h,o,l),s[t]=h}a[t].resultBuffer=h.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(null===t._cacheIndex){const e=(t._localRoot||this._root).uuid,i=t._clip.uuid,n=this._actionsByClip[i];this._bindAction(t,n&&n.knownActions[0]),this._addInactiveAction(t,i,e)}const e=t._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const i=e[t];0==i.useCount++&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const i=e[t];0==--i.useCount&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return null!==e&&e<this._nActiveActions}_addInactiveAction(t,e,i){const n=this._actions,r=this._actionsByClip;let s=r[e];if(void 0===s)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{const e=s.knownActions;t._byClipCacheIndex=e.length,e.push(t)}t._cacheIndex=n.length,n.push(t),s.actionByRoot[i]=t}_removeInactiveAction(t){const e=this._actions,i=e[e.length-1],n=t._cacheIndex;i._cacheIndex=n,e[n]=i,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null;delete a.actionByRoot[(t._localRoot||this._root).uuid],0===o.length&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let t=0,i=e.length;t!==i;++t){const i=e[t];0==--i.referenceCount&&this._removeInactiveBinding(i)}}_lendAction(t){const e=this._actions,i=t._cacheIndex,n=this._nActiveActions++,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_takeBackAction(t){const e=this._actions,i=t._cacheIndex,n=--this._nActiveActions,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_addInactiveBinding(t,e,i){const n=this._bindingsByRootAndName,r=this._bindings;let s=n[e];void 0===s&&(s={},n[e]=s),s[i]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,i=t.binding,n=i.rootNode.uuid,r=i.path,s=this._bindingsByRootAndName,a=s[n],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],0===Object.keys(a).length&&delete s[n]}_lendBinding(t){const e=this._bindings,i=t._cacheIndex,n=this._nActiveBindings++,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_takeBackBinding(t){const e=this._bindings,i=t._cacheIndex,n=--this._nActiveBindings,r=e[n];t._cacheIndex=n,e[n]=t,r._cacheIndex=i,e[i]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let i=t[e];return void 0===i&&(i=new Jl(new Float32Array(2),new Float32Array(2),1,ph),i.__cacheIndex=e,t[e]=i),i}_takeBackControlInterpolant(t){const e=this._controlInterpolants,i=t.__cacheIndex,n=--this._nActiveControlInterpolants,r=e[n];t.__cacheIndex=n,e[n]=t,r.__cacheIndex=i,e[i]=r}clipAction(t,e,i){const n=e||this._root,r=n.uuid;let s="string"==typeof t?ac.findByName(n,t):t;const a=null!==s?s.uuid:t,o=this._actionsByClip[a];let l=null;if(void 0===i&&(i=null!==s?s.blendMode:rt),void 0!==o){const t=o.actionByRoot[r];if(void 0!==t&&t.blendMode===i)return t;l=o.knownActions[0],null===s&&(s=l._clip)}if(null===s)return null;const c=new dh(this,s,e,i);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(t,e){const i=e||this._root,n=i.uuid,r="string"==typeof t?ac.findByName(i,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return void 0!==a&&a.actionByRoot[n]||null}stopAllAction(){const t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;const e=this._actions,i=this._nActiveActions,n=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let a=0;a!==i;++a){e[a]._update(n,t,r,s)}const a=this._bindings,o=this._nActiveBindings;for(let t=0;t!==o;++t)a[t].apply(s);return this}setTime(t){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,i=t.uuid,n=this._actionsByClip,r=n[i];if(void 0!==r){const t=r.knownActions;for(let i=0,n=t.length;i!==n;++i){const n=t[i];this._deactivateAction(n);const r=n._cacheIndex,s=e[e.length-1];n._cacheIndex=null,n._byClipCacheIndex=null,s._cacheIndex=r,e[r]=s,e.pop(),this._removeInactiveBindingsForAction(n)}delete n[i]}}uncacheRoot(t){const e=t.uuid,i=this._actionsByClip;for(const t in i){const n=i[t].actionByRoot[e];void 0!==n&&(this._deactivateAction(n),this._removeInactiveAction(n))}const n=this._bindingsByRootAndName[e];if(void 0!==n)for(const t in n){const e=n[t];e.restoreOriginalState(),this._removeInactiveBinding(e)}}uncacheAction(t,e){const i=this.existingAction(t,e);null!==i&&(this._deactivateAction(i),this._removeInactiveAction(i))}},t.AnimationObjectGroup=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=_t(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let e=0,i=arguments.length;e!==i;++e)t[arguments[e].uuid]=e;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,s=r.length;let a,o=t.length,l=this.nCachedObjects_;for(let c=0,h=arguments.length;c!==h;++c){const h=arguments[c],u=h.uuid;let d=e[u];if(void 0===d){d=o++,e[u]=d,t.push(h);for(let t=0,e=s;t!==e;++t)r[t].push(new uh(h,i[t],n[t]))}else if(d<l){a=t[d];const o=--l,c=t[o];e[c.uuid]=d,t[d]=c,e[u]=o,t[o]=h;for(let t=0,e=s;t!==e;++t){const e=r[t],s=e[o];let a=e[d];e[d]=s,void 0===a&&(a=new uh(h,i[t],n[t])),e[o]=a}}else t[d]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let s=0,a=arguments.length;s!==a;++s){const a=arguments[s],o=a.uuid,l=e[o];if(void 0!==l&&l>=r){const s=r++,c=t[s];e[c.uuid]=l,t[l]=c,e[o]=s,t[s]=a;for(let t=0,e=n;t!==e;++t){const e=i[t],n=e[s],r=e[l];e[l]=n,e[s]=r}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,s=t.length;for(let a=0,o=arguments.length;a!==o;++a){const o=arguments[a].uuid,l=e[o];if(void 0!==l)if(delete e[o],l<r){const a=--r,o=t[a],c=--s,h=t[c];e[o.uuid]=l,t[l]=o,e[h.uuid]=a,t[a]=h,t.pop();for(let t=0,e=n;t!==e;++t){const e=i[t],n=e[a],r=e[c];e[l]=n,e[a]=r,e.pop()}}else{const r=--s,a=t[r];r>0&&(e[a.uuid]=l),t[l]=a,t.pop();for(let t=0,e=n;t!==e;++t){const e=i[t];e[l]=e[r],e.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const i=this._bindingsIndicesByPath;let n=i[t];const r=this._bindings;if(void 0!==n)return r[n];const s=this._paths,a=this._parsedPaths,o=this._objects,l=o.length,c=this.nCachedObjects_,h=new Array(l);n=r.length,i[t]=n,s.push(t),a.push(e),r.push(h);for(let i=c,n=o.length;i!==n;++i){const n=o[i];h[i]=new uh(n,t,e)}return h}unsubscribe_(t){const e=this._bindingsIndicesByPath,i=e[t];if(void 0!==i){const n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length-1,o=s[a];e[t[a]]=i,s[i]=o,s.pop(),r[i]=r[a],r.pop(),n[i]=n[a],n.pop()}}},t.AnimationUtils=Xl,t.ArcCurve=co,t.ArrayCamera=Hs,t.ArrowHelper=class extends si{constructor(t=new re(0,0,1),e=new re(0,0,0),i=1,n=16776960,r=.2*i,s=.2*r){super(),this.type="ArrowHelper",void 0===Uh&&(Uh=new Di,Uh.setAttribute("position",new Ti([0,0,0,0,1,0],3)),Bh=new Do(0,.5,1,5,1),Bh.translate(0,-.5,0)),this.position.copy(e),this.line=new Ya(Uh,new Va({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ki(Bh,new _i({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,s)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{zh.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(zh,e)}}setLength(t,e=.2*t,i=.2*e){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},t.Audio=Qc,t.AudioAnalyser=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let i=0;i<e.length;i++)t+=e[i];return t/e.length}},t.AudioContext=Hc,t.AudioListener=class extends si{constructor(){super(),this.type="AudioListener",this.context=Hc.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Xc}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Zc,Jc,Kc),$c.set(0,0,-1).applyQuaternion(Jc),e.positionX){const t=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Zc.x,t),e.positionY.linearRampToValueAtTime(Zc.y,t),e.positionZ.linearRampToValueAtTime(Zc.z,t),e.forwardX.linearRampToValueAtTime($c.x,t),e.forwardY.linearRampToValueAtTime($c.y,t),e.forwardZ.linearRampToValueAtTime($c.z,t),e.upX.linearRampToValueAtTime(i.x,t),e.upY.linearRampToValueAtTime(i.y,t),e.upZ.linearRampToValueAtTime(i.z,t)}else e.setPosition(Zc.x,Zc.y,Zc.z),e.setOrientation($c.x,$c.y,$c.z,i.x,i.y,i.z)}},t.AudioLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=new mc(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(i){try{const t=i.slice(0);Hc.getContext().decodeAudioData(t,(function(t){e(t)}))}catch(e){n?n(e):console.error(e),r.manager.itemError(t)}}),i,n)}},t.AxesHelper=class extends Ka{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=new Di;i.setAttribute("position",new Ti(e,3)),i.setAttribute("color",new Ti([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));super(i,new Va({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(t,e,i){const n=new qt,r=this.geometry.attributes.color.array;return n.set(t),n.toArray(r,0),n.toArray(r,3),n.set(e),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BackSide=1,t.BasicDepthPacking=3200,t.BasicShadowMap=0,t.Bone=Ra,t.BooleanKeyframeTrack=Ql,t.Box2=class{constructor(t=new Lt(1/0,1/0),e=new Lt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=xh.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return xh.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},t.Box3=oe,t.Box3Helper=class extends Ka{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Di;n.setIndex(new bi(i,1)),n.setAttribute("position",new Ti([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3)),super(n,new Va({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computebounceingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BoxBufferGeometry=class extends Qi{constructor(t,e,i,n,r,s){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(t,e,i,n,r,s)}},t.BoxGeometry=Qi,t.BoxHelper=class extends Ka{constructor(t,e=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(24),r=new Di;r.setIndex(new bi(i,1)),r.setAttribute("position",new bi(n,3)),super(r,new Va({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(void 0!==t&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),void 0!==this.object&&Oh.setFromObject(this.object),Oh.isEmpty())return;const e=Oh.min,i=Oh.max,n=this.geometry.attributes.position,r=n.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=e.x,r[4]=i.y,r[5]=i.z,r[6]=e.x,r[7]=e.y,r[8]=i.z,r[9]=i.x,r[10]=e.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=e.z,r[15]=e.x,r[16]=i.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=i.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computebounceingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},t.BufferAttribute=bi,t.BufferGeometry=Di,t.BufferGeometryLoader=Bc,t.ByteType=1010,t.Cache=lc,t.Camera=an,t.CameraHelper=class extends Ka{constructor(t){const e=new Di,i=new Va({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],s={};function a(t,e){o(t),o(e)}function o(t){n.push(0,0,0),r.push(0,0,0),void 0===s[t]&&(s[t]=[]),s[t].push(n.length/3-1)}a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4"),e.setAttribute("position",new Ti(n,3)),e.setAttribute("color",new Ti(r,3)),super(e,i),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const l=new qt(16755200),c=new qt(16711680),h=new qt(43775),u=new qt(16777215),d=new qt(3355443);this.setColors(l,c,h,u,d)}setColors(t,e,i,n,r){const s=this.geometry.getAttribute("color");s.setXYZ(0,t.r,t.g,t.b),s.setXYZ(1,t.r,t.g,t.b),s.setXYZ(2,t.r,t.g,t.b),s.setXYZ(3,t.r,t.g,t.b),s.setXYZ(4,t.r,t.g,t.b),s.setXYZ(5,t.r,t.g,t.b),s.setXYZ(6,t.r,t.g,t.b),s.setXYZ(7,t.r,t.g,t.b),s.setXYZ(8,t.r,t.g,t.b),s.setXYZ(9,t.r,t.g,t.b),s.setXYZ(10,t.r,t.g,t.b),s.setXYZ(11,t.r,t.g,t.b),s.setXYZ(12,t.r,t.g,t.b),s.setXYZ(13,t.r,t.g,t.b),s.setXYZ(14,t.r,t.g,t.b),s.setXYZ(15,t.r,t.g,t.b),s.setXYZ(16,t.r,t.g,t.b),s.setXYZ(17,t.r,t.g,t.b),s.setXYZ(18,t.r,t.g,t.b),s.setXYZ(19,t.r,t.g,t.b),s.setXYZ(20,t.r,t.g,t.b),s.setXYZ(21,t.r,t.g,t.b),s.setXYZ(22,t.r,t.g,t.b),s.setXYZ(23,t.r,t.g,t.b),s.setXYZ(24,e.r,e.g,e.b),s.setXYZ(25,e.r,e.g,e.b),s.setXYZ(26,e.r,e.g,e.b),s.setXYZ(27,e.r,e.g,e.b),s.setXYZ(28,e.r,e.g,e.b),s.setXYZ(29,e.r,e.g,e.b),s.setXYZ(30,e.r,e.g,e.b),s.setXYZ(31,e.r,e.g,e.b),s.setXYZ(32,i.r,i.g,i.b),s.setXYZ(33,i.r,i.g,i.b),s.setXYZ(34,i.r,i.g,i.b),s.setXYZ(35,i.r,i.g,i.b),s.setXYZ(36,i.r,i.g,i.b),s.setXYZ(37,i.r,i.g,i.b),s.setXYZ(38,n.r,n.g,n.b),s.setXYZ(39,n.r,n.g,n.b),s.setXYZ(40,r.r,r.g,r.b),s.setXYZ(41,r.r,r.g,r.b),s.setXYZ(42,r.r,r.g,r.b),s.setXYZ(43,r.r,r.g,r.b),s.setXYZ(44,r.r,r.g,r.b),s.setXYZ(45,r.r,r.g,r.b),s.setXYZ(46,r.r,r.g,r.b),s.setXYZ(47,r.r,r.g,r.b),s.setXYZ(48,r.r,r.g,r.b),s.setXYZ(49,r.r,r.g,r.b),s.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap;Dh.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Nh("c",e,t,Dh,0,0,-1),Nh("t",e,t,Dh,0,0,1),Nh("n1",e,t,Dh,-1,-1,-1),Nh("n2",e,t,Dh,1,-1,-1),Nh("n3",e,t,Dh,-1,1,-1),Nh("n4",e,t,Dh,1,1,-1),Nh("f1",e,t,Dh,-1,-1,1),Nh("f2",e,t,Dh,1,-1,1),Nh("f3",e,t,Dh,-1,1,1),Nh("f4",e,t,Dh,1,1,1),Nh("u1",e,t,Dh,.7,1.1,-1),Nh("u2",e,t,Dh,-.7,1.1,-1),Nh("u3",e,t,Dh,0,2,-1),Nh("cf1",e,t,Dh,-1,0,1),Nh("cf2",e,t,Dh,1,0,1),Nh("cf3",e,t,Dh,0,-1,1),Nh("cf4",e,t,Dh,0,1,1),Nh("cn1",e,t,Dh,-1,0,-1),Nh("cn2",e,t,Dh,1,0,-1),Nh("cn3",e,t,Dh,0,-1,-1),Nh("cn4",e,t,Dh,0,1,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}},t.CanvasTexture=class extends $t{constructor(t,e,i,n,r,s,a,o,l){super(t,e,i,n,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},t.CapsuleBufferGeometry=class extends Po{constructor(t,e,i,n){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(t,e,i,n)}},t.CapsuleGeometry=Po,t.CatmullRomCurve3=go,t.CineonToneMapping=3,t.CircleBufferGeometry=class extends Io{constructor(t,e,i,n){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(t,e,i,n)}},t.CircleGeometry=Io,t.ClampToEdgeWrapping=h,t.Clock=Xc,t.Color=qt,t.ColorKeyframeTrack=tc,t.ColorManagement=Ft,t.CompressedArrayTexture=class extends ao{constructor(t,e,i,n,r,s){super(t,e,i,r,s),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=h}},t.CompressedTexture=ao,t.CompressedTextureLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=[],a=new ao,o=new mc(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials);let l=0;function c(c){o.load(t[c],(function(t){const i=r.parse(t,!0);s[c]={width:i.width,height:i.height,format:i.format,mipmaps:i.mipmaps},l+=1,6===l&&(1===i.mipmapCount&&(a.minFilter=f),a.image=s,a.format=i.format,a.needsUpdate=!0,e&&e(a))}),i,n)}if(Array.isArray(t))for(let e=0,i=t.length;e<i;++e)c(e);else o.load(t,(function(t){const i=r.parse(t,!0);if(i.isCubemap){const t=i.mipmaps.length/i.mipmapCount;for(let e=0;e<t;e++){s[e]={mipmaps:[]};for(let t=0;t<i.mipmapCount;t++)s[e].mipmaps.push(i.mipmaps[e*i.mipmapCount+t]),s[e].format=i.format,s[e].width=i.width,s[e].height=i.height}a.image=s}else a.image.width=i.width,a.image.height=i.height,a.mipmaps=i.mipmaps;1===i.mipmapCount&&(a.minFilter=f),a.format=i.format,a.needsUpdate=!0,e&&e(a)}),i,n);return a}},t.ConeBufferGeometry=class extends No{constructor(t,e,i,n,r,s,a){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(t,e,i,n,r,s,a)}},t.ConeGeometry=No,t.CubeCamera=cn,t.CubeReflectionMapping=r,t.CubeRefractionMapping=s,t.CubeTexture=hn,t.CubeTextureLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=new hn,s=new fc(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function o(i){s.load(t[i],(function(t){r.images[i]=t,a++,6===a&&(r.needsUpdate=!0,e&&e(r))}),void 0,n)}for(let e=0;e<t.length;++e)o(e);return r}},t.CubeUVReflectionMapping=l,t.CubicBezierCurve=yo,t.CubicBezierCurve3=Mo,t.CubicInterpolant=Zl,t.CullFaceBack=1,t.CullFaceFront=2,t.CullFaceFrontBack=3,t.CullFaceNone=0,t.Curve=oo,t.CurvePath=Co,t.CustomBlending=5,t.CustomToneMapping=5,t.CylinderBufferGeometry=class extends Do{constructor(t,e,i,n,r,s,a,o){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(t,e,i,n,r,s,a,o)}},t.CylinderGeometry=Do,t.Cylindrical=class{constructor(t=1,e=0,i=0){return this.radius=t,this.theta=e,this.y=i,this}set(t,e,i){return this.radius=t,this.theta=e,this.y=i,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+i*i),this.theta=Math.atan2(t,i),this.y=e,this}clone(){return(new this.constructor).copy(this)}},t.Data3DTexture=ie,t.DataArrayTexture=ee,t.DataTexture=Pa,t.DataTexture2DArray=class extends ee{constructor(t,e,i,n){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(t,e,i,n)}},t.DataTexture3D=class extends ie{constructor(t,e,i,n){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(t,e,i,n)}},t.DataTextureLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=new Pa,a=new mc(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,(function(t){const i=r.parse(t);i&&(void 0!==i.image?s.image=i.image:void 0!==i.data&&(s.image.width=i.width,s.image.height=i.height,s.image.data=i.data),s.wrapS=void 0!==i.wrapS?i.wrapS:h,s.wrapT=void 0!==i.wrapT?i.wrapT:h,s.magFilter=void 0!==i.magFilter?i.magFilter:f,s.minFilter=void 0!==i.minFilter?i.minFilter:f,s.anisotropy=void 0!==i.anisotropy?i.anisotropy:1,void 0!==i.encoding&&(s.encoding=i.encoding),void 0!==i.flipY&&(s.flipY=i.flipY),void 0!==i.format&&(s.format=i.format),void 0!==i.type&&(s.type=i.type),void 0!==i.mipmaps&&(s.mipmaps=i.mipmaps,s.minFilter=v),1===i.mipmapCount&&(s.minFilter=f),void 0!==i.generateMipmaps&&(s.generateMipmaps=i.generateMipmaps),s.needsUpdate=!0,e&&e(s,i))}),i,n),s}},t.DataUtils=Gh,t.DecrementStencilOp=7683,t.DecrementWrapStencilOp=34056,t.DefaultLoadingManager=hc,t.DepthFormat=T,t.DepthStencilFormat=A,t.DepthTexture=Xs,t.DirectionalLight=Rc,t.DirectionalLightHelper=class extends si{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",void 0===e&&(e=1);let n=new Di;n.setAttribute("position",new Ti([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Va({fog:!1,toneMapped:!1});this.lightPlane=new Ya(n,r),this.add(this.lightPlane),n=new Di,n.setAttribute("position",new Ti([0,0,0,0,0,1],3)),this.targetLine=new Ya(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Lh.setFromMatrixPosition(this.light.matrixWorld),Rh.setFromMatrixPosition(this.light.target.matrixWorld),Ph.subVectors(Rh,Lh),this.lightPlane.lookAt(Rh),void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Rh),this.targetLine.scale.z=Ph.length()}},t.DiscreteInterpolant=Kl,t.DodecahedronBufferGeometry=class extends zo{constructor(t,e){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(t,e)}},t.DodecahedronGeometry=zo,t.DoubleSide=2,t.DstAlphaFactor=206,t.DstColorFactor=208,t.DynamicCopyUsage=35050,t.DynamicDrawUsage=35048,t.DynamicReadUsage=35049,t.EdgesGeometry=Go,t.EllipseCurve=lo,t.EqualDepth=4,t.EqualStencilFunc=514,t.EquirectangularReflectionMapping=a,t.EquirectangularRefractionMapping=o,t.Euler=We,t.EventDispatcher=mt,t.ExtrudeBufferGeometry=class extends vl{constructor(t,e){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(t,e)}},t.ExtrudeGeometry=vl,t.FileLoader=mc,t.Float16BufferAttribute=class extends bi{constructor(t,e,i){super(new Uint16Array(t),e,i),this.isFloat16BufferAttribute=!0}},t.Float32BufferAttribute=Ti,t.Float64BufferAttribute=class extends bi{constructor(t,e,i){super(new Float64Array(t),e,i)}},t.FloatType=M,t.Fog=ta,t.FogExp2=Qs,t.FramebufferTexture=class extends $t{constructor(t,e,i){super({width:t,height:e}),this.isFramebufferTexture=!0,this.format=i,this.magFilter=d,this.minFilter=d,this.generateMipmaps=!1,this.needsUpdate=!0}},t.FrontSide=0,t.Frustum=xn,t.GLBufferAttribute=class{constructor(t,e,i,n,r){this.isGLBufferAttribute=!0,this.buffer=t,this.type=e,this.itemSize=i,this.elementSize=n,this.count=r,this.version=0}set needsUpdate(t){!0===t&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},t.GLSL1="100",t.GLSL3=dt,t.GreaterDepth=6,t.GreaterEqualDepth=5,t.GreaterEqualStencilFunc=518,t.GreaterStencilFunc=516,t.GridHelper=class extends Ka{constructor(t=10,e=10,i=4473924,n=8947848){i=new qt(i),n=new qt(n);const r=e/2,s=t/e,a=t/2,o=[],l=[];for(let t=0,c=0,h=-a;t<=e;t++,h+=s){o.push(-a,0,h,a,0,h),o.push(h,0,-a,h,0,a);const e=t===r?i:n;e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3,e.toArray(l,c),c+=3}const c=new Di;c.setAttribute("position",new Ti(o,3)),c.setAttribute("color",new Ti(l,3));super(c,new Va({vertexColors:!0,toneMapped:!1})),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},t.Group=Ws,t.HalfFloatType=b,t.HemisphereLight=vc,t.HemisphereLightHelper=class extends si{constructor(t,e,i){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new yl(e);n.rotateY(.5*Math.PI),this.material=new _i({wireframe:!0,fog:!1,toneMapped:!1}),void 0===this.color&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),s=new Float32Array(3*r.count);n.setAttribute("color",new bi(s,3)),this.add(new Ki(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Eh.copy(this.light.color),Ch.copy(this.light.groundColor);for(let t=0,i=e.count;t<i;t++){const n=t<i/2?Eh:Ch;e.setXYZ(t,n.r,n.g,n.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(Ah.setFromMatrixPosition(this.light.matrixWorld).negate())}},t.HemisphereLightProbe=class extends Nc{constructor(t,e,i=1){super(void 0,i),this.isHemisphereLightProbe=!0;const n=(new qt).set(t),r=(new qt).set(e),s=new re(n.r,n.g,n.b),a=new re(r.r,r.g,r.b),o=Math.sqrt(Math.PI),l=o*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(o),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(l)}},t.IcosahedronBufferGeometry=class extends _l{constructor(t,e){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(t,e)}},t.IcosahedronGeometry=_l,t.ImageBitmapLoader=class extends uc{constructor(t){super(t),this.isImageBitmapLoader=!0,"undefined"==typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),"undefined"==typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,i,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=lc.get(t);if(void 0!==s)return r.manager.itemStart(t),setTimeout((function(){e&&e(s),r.manager.itemEnd(t)}),0),s;const a={};a.credentials="anonymous"===this.crossOrigin?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then((function(t){return t.blob()})).then((function(t){return createImageBitmap(t,Object.assign(r.options,{colorSpaceConversion:"none"}))})).then((function(i){lc.add(t,i),e&&e(i),r.manager.itemEnd(t)})).catch((function(e){n&&n(e),r.manager.itemError(t),r.manager.itemEnd(t)})),r.manager.itemStart(t)}},t.ImageLoader=fc,t.ImageUtils=Yt,t.ImmediateRenderObject=function(){console.error("THREE.ImmediateRenderObject has been removed.")},t.IncrementStencilOp=7682,t.IncrementWrapStencilOp=34055,t.InstancedBufferAttribute=Oa,t.InstancedBufferGeometry=Uc,t.InstancedInterleavedBuffer=class extends ia{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},t.InstancedMesh=Ga,t.Int16BufferAttribute=class extends bi{constructor(t,e,i){super(new Int16Array(t),e,i)}},t.Int32BufferAttribute=class extends bi{constructor(t,e,i){super(new Int32Array(t),e,i)}},t.Int8BufferAttribute=class extends bi{constructor(t,e,i){super(new Int8Array(t),e,i)}},t.IntType=1013,t.InterleavedBuffer=ia,t.InterleavedBufferAttribute=ra,t.Interpolant=Yl,t.InterpolateDiscrete=$,t.InterpolateLinear=Q,t.InterpolateSmooth=tt,t.InvertStencilOp=5386,t.KeepStencilOp=ht,t.KeyframeTrack=$l,t.LOD=Sa,t.LatheBufferGeometry=class extends Ro{constructor(t,e,i,n){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(t,e,i,n)}},t.LatheGeometry=Ro,t.Layers=je,t.LessDepth=2,t.LessEqualDepth=3,t.LessEqualStencilFunc=515,t.LessStencilFunc=513,t.Light=gc,t.LightProbe=Nc,t.Line=Ya,t.Line3=class{constructor(t=new re,e=new re){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){_h.subVectors(t,this.start),yh.subVectors(this.end,this.start);const i=yh.dot(yh);let n=yh.dot(_h)/i;return e&&(n=yt(n,0,1)),n}closestPointToPoint(t,e,i){const n=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return(new this.constructor).copy(this)}},t.LineBasicMaterial=Va,t.LineCurve=bo,t.LineCurve3=So,t.LineDashedMaterial=kl,t.LineLoop=$a,t.LineSegments=Ka,t.LinearEncoding=at,t.LinearFilter=f,t.LinearInterpolant=Jl,t.LinearMipMapLinearFilter=1008,t.LinearMipMapNearestFilter=1007,t.LinearMipmapLinearFilter=v,t.LinearMipmapNearestFilter=g,t.LinearSRGBColorSpace=ct,t.LinearToneMapping=1,t.Loader=uc,t.LoaderUtils=zc,t.LoadingManager=cc,t.LoopOnce=2200,t.LoopPingPong=2202,t.LoopRepeat=2201,t.LuminanceAlphaFormat=1025,t.LuminanceFormat=1024,t.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t.Material=xi,t.MaterialLoader=Oc,t.MathUtils=Ct,t.Matrix3=Rt,t.Matrix4=Ne,t.MaxEquation=104,t.Mesh=Ki,t.MeshBasicMaterial=_i,t.MeshDepthMaterial=Us,t.MeshDistanceMaterial=Bs,t.MeshLambertMaterial=Bl,t.MeshMatcapMaterial=Fl,t.MeshNormalMaterial=Ul,t.MeshPhongMaterial=Ol,t.MeshPhysicalMaterial=Nl,t.MeshStandardMaterial=Dl,t.MeshToonMaterial=zl,t.MinEquation=103,t.MirroredRepeatWrapping=u,t.MixOperation=1,t.MultiplyBlending=4,t.MultiplyOperation=0,t.NearestFilter=d,t.NearestMipMapLinearFilter=1005,t.NearestMipMapNearestFilter=1004,t.NearestMipmapLinearFilter=m,t.NearestMipmapNearestFilter=p,t.NeverDepth=0,t.NeverStencilFunc=512,t.NoBlending=0,t.NoColorSpace="",t.NoToneMapping=0,t.NormalAnimationBlendMode=rt,t.NormalBlending=1,t.NotEqualDepth=7,t.NotEqualStencilFunc=517,t.NumberKeyframeTrack=ec,t.Object3D=si,t.ObjectLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=this,s=""===this.path?zc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||s;const a=new mc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,(function(i){let s=null;try{s=JSON.parse(i)}catch(e){return void 0!==n&&n(e),void console.error("THREE:ObjectLoader: Can't parse "+t+".",e.message)}const a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())return void 0!==n&&n(new Error("THREE.ObjectLoader: Can't load "+t)),void console.error("THREE.ObjectLoader: Can't load "+t);r.parse(s,e)}),i,n)}async loadAsync(t,e){const i=""===this.path?zc.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const n=new mc(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const r=await n.loadAsync(t,e),s=JSON.parse(r),a=s.metadata;if(void 0===a||void 0===a.type||"geometry"===a.type.toLowerCase())throw new Error("THREE.ObjectLoader: Can't load "+t);return await this.parseAsync(s)}parse(t,e){const i=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,n),s=this.parseImages(t.images,(function(){void 0!==e&&e(l)})),a=this.parseTextures(t.textures,s),o=this.parseMaterials(t.materials,a),l=this.parseObject(t.object,r,o,a,i),c=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,c),void 0!==e){let t=!1;for(const e in s)if(s[e].data instanceof HTMLImageElement){t=!0;break}!1===t&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),n=this.parseGeometries(t.geometries,i),r=await this.parseImagesAsync(t.images),s=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,s),o=this.parseObject(t.object,n,a,s,e),l=this.parseSkeletons(t.skeletons,o);return this.bindSkeletons(o,l),o}parseShapes(t){const e={};if(void 0!==t)for(let i=0,n=t.length;i<n;i++){const n=(new Vo).fromJSON(t[i]);e[n.uuid]=n}return e}parseSkeletons(t,e){const i={},n={};if(e.traverse((function(t){t.isBone&&(n[t.uuid]=t)})),void 0!==t)for(let e=0,r=t.length;e<r;e++){const r=(new Na).fromJSON(t[e],n);i[r.uuid]=r}return i}parseGeometries(t,e){const i={};if(void 0!==t){const n=new Bc;for(let r=0,s=t.length;r<s;r++){let s;const a=t[r];switch(a.type){case"BufferGeometry":case"InstancedBufferGeometry":s=n.parse(a);break;default:a.type in Rl?s=Rl[a.type].fromJSON(a,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${a.type}"`)}s.uuid=a.uuid,void 0!==a.name&&(s.name=a.name),!0===s.isBufferGeometry&&void 0!==a.userData&&(s.userData=a.userData),i[a.uuid]=s}}return i}parseMaterials(t,e){const i={},n={};if(void 0!==t){const r=new Oc;r.setTextures(e);for(let e=0,s=t.length;e<s;e++){const s=t[e];void 0===i[s.uuid]&&(i[s.uuid]=r.parse(s)),n[s.uuid]=i[s.uuid]}}return n}parseAnimations(t){const e={};if(void 0!==t)for(let i=0;i<t.length;i++){const n=t[i],r=ac.parse(n);e[r.uuid]=r}return e}parseImages(t,e){const i=this,n={};let r;function s(t){if("string"==typeof t){const e=t;return function(t){return i.manager.itemStart(t),r.load(t,(function(){i.manager.itemEnd(t)}),void 0,(function(){i.manager.itemError(t),i.manager.itemEnd(t)}))}(/^(\/\/)|([a-z]+:(\/\/)?)/i.test(e)?e:i.resourcePath+e)}return t.data?{data:Nt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){const i=new cc(e);r=new fc(i),r.setCrossOrigin(this.crossOrigin);for(let e=0,i=t.length;e<i;e++){const i=t[e],r=i.url;if(Array.isArray(r)){const t=[];for(let e=0,i=r.length;e<i;e++){const i=s(r[e]);null!==i&&(i instanceof HTMLImageElement?t.push(i):t.push(new Pa(i.data,i.width,i.height)))}n[i.uuid]=new Zt(t)}else{const t=s(i.url);n[i.uuid]=new Zt(t)}}}return n}async parseImagesAsync(t){const e=this,i={};let n;async function r(t){if("string"==typeof t){const i=t,r=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(i)?i:e.resourcePath+i;return await n.loadAsync(r)}return t.data?{data:Nt(t.type,t.data),width:t.width,height:t.height}:null}if(void 0!==t&&t.length>0){n=new fc(this.manager),n.setCrossOrigin(this.crossOrigin);for(let e=0,n=t.length;e<n;e++){const n=t[e],s=n.url;if(Array.isArray(s)){const t=[];for(let e=0,i=s.length;e<i;e++){const i=s[e],n=await r(i);null!==n&&(n instanceof HTMLImageElement?t.push(n):t.push(new Pa(n.data,n.width,n.height)))}i[n.uuid]=new Zt(t)}else{const t=await r(n.url);i[n.uuid]=new Zt(t)}}}return i}parseTextures(t,e){function i(t,e){return"number"==typeof t?t:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",t),e[t])}const n={};if(void 0!==t)for(let r=0,s=t.length;r<s;r++){const s=t[r];void 0===s.image&&console.warn('THREE.ObjectLoader: No "image" specified for',s.uuid),void 0===e[s.image]&&console.warn("THREE.ObjectLoader: Undefined image",s.image);const a=e[s.image],o=a.data;let l;Array.isArray(o)?(l=new hn,6===o.length&&(l.needsUpdate=!0)):(l=o&&o.data?new Pa:new $t,o&&(l.needsUpdate=!0)),l.source=a,l.uuid=s.uuid,void 0!==s.name&&(l.name=s.name),void 0!==s.mapping&&(l.mapping=i(s.mapping,Fc)),void 0!==s.offset&&l.offset.fromArray(s.offset),void 0!==s.repeat&&l.repeat.fromArray(s.repeat),void 0!==s.center&&l.center.fromArray(s.center),void 0!==s.rotation&&(l.rotation=s.rotation),void 0!==s.wrap&&(l.wrapS=i(s.wrap[0],kc),l.wrapT=i(s.wrap[1],kc)),void 0!==s.format&&(l.format=s.format),void 0!==s.type&&(l.type=s.type),void 0!==s.encoding&&(l.encoding=s.encoding),void 0!==s.minFilter&&(l.minFilter=i(s.minFilter,Gc)),void 0!==s.magFilter&&(l.magFilter=i(s.magFilter,Gc)),void 0!==s.anisotropy&&(l.anisotropy=s.anisotropy),void 0!==s.flipY&&(l.flipY=s.flipY),void 0!==s.premultiplyAlpha&&(l.premultiplyAlpha=s.premultiplyAlpha),void 0!==s.unpackAlignment&&(l.unpackAlignment=s.unpackAlignment),void 0!==s.userData&&(l.userData=s.userData),n[s.uuid]=l}return n}parseObject(t,e,i,n,r){let s,a,o;function l(t){return void 0===e[t]&&console.warn("THREE.ObjectLoader: Undefined geometry",t),e[t]}function c(t){if(void 0!==t){if(Array.isArray(t)){const e=[];for(let n=0,r=t.length;n<r;n++){const r=t[n];void 0===i[r]&&console.warn("THREE.ObjectLoader: Undefined material",r),e.push(i[r])}return e}return void 0===i[t]&&console.warn("THREE.ObjectLoader: Undefined material",t),i[t]}}function h(t){return void 0===n[t]&&console.warn("THREE.ObjectLoader: Undefined texture",t),n[t]}switch(t.type){case"Scene":s=new ea,void 0!==t.background&&(Number.isInteger(t.background)?s.background=new qt(t.background):s.background=h(t.background)),void 0!==t.environment&&(s.environment=h(t.environment)),void 0!==t.fog&&("Fog"===t.fog.type?s.fog=new ta(t.fog.color,t.fog.near,t.fog.far):"FogExp2"===t.fog.type&&(s.fog=new Qs(t.fog.color,t.fog.density))),void 0!==t.backgroundBlurriness&&(s.backgroundBlurriness=t.backgroundBlurriness);break;case"PerspectiveCamera":s=new on(t.fov,t.aspect,t.near,t.far),void 0!==t.focus&&(s.focus=t.focus),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.filmGauge&&(s.filmGauge=t.filmGauge),void 0!==t.filmOffset&&(s.filmOffset=t.filmOffset),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"OrthographicCamera":s=new In(t.left,t.right,t.top,t.bottom,t.near,t.far),void 0!==t.zoom&&(s.zoom=t.zoom),void 0!==t.view&&(s.view=Object.assign({},t.view));break;case"AmbientLight":s=new Pc(t.color,t.intensity);break;case"DirectionalLight":s=new Rc(t.color,t.intensity);break;case"PointLight":s=new Cc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":s=new Ic(t.color,t.intensity,t.width,t.height);break;case"SpotLight":s=new Sc(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":s=new vc(t.color,t.groundColor,t.intensity);break;case"LightProbe":s=(new Nc).fromJSON(t);break;case"SkinnedMesh":a=l(t.geometry),o=c(t.material),s=new La(a,o),void 0!==t.bindMode&&(s.bindMode=t.bindMode),void 0!==t.bindMatrix&&s.bindMatrix.fromArray(t.bindMatrix),void 0!==t.skeleton&&(s.skeleton=t.skeleton);break;case"Mesh":a=l(t.geometry),o=c(t.material),s=new Ki(a,o);break;case"InstancedMesh":a=l(t.geometry),o=c(t.material);const e=t.count,i=t.instanceMatrix,n=t.instanceColor;s=new Ga(a,o,e),s.instanceMatrix=new Oa(new Float32Array(i.array),16),void 0!==n&&(s.instanceColor=new Oa(new Float32Array(n.array),n.itemSize));break;case"LOD":s=new Sa;break;case"Line":s=new Ya(l(t.geometry),c(t.material));break;case"LineLoop":s=new $a(l(t.geometry),c(t.material));break;case"LineSegments":s=new Ka(l(t.geometry),c(t.material));break;case"PointCloud":case"Points":s=new ro(l(t.geometry),c(t.material));break;case"Sprite":s=new _a(c(t.material));break;case"Group":s=new Ws;break;case"Bone":s=new Ra;break;default:s=new si}if(s.uuid=t.uuid,void 0!==t.name&&(s.name=t.name),void 0!==t.matrix?(s.matrix.fromArray(t.matrix),void 0!==t.matrixAutoUpdate&&(s.matrixAutoUpdate=t.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(void 0!==t.position&&s.position.fromArray(t.position),void 0!==t.rotation&&s.rotation.fromArray(t.rotation),void 0!==t.quaternion&&s.quaternion.fromArray(t.quaternion),void 0!==t.scale&&s.scale.fromArray(t.scale)),void 0!==t.castShadow&&(s.castShadow=t.castShadow),void 0!==t.receiveShadow&&(s.receiveShadow=t.receiveShadow),t.shadow&&(void 0!==t.shadow.bias&&(s.shadow.bias=t.shadow.bias),void 0!==t.shadow.normalBias&&(s.shadow.normalBias=t.shadow.normalBias),void 0!==t.shadow.radius&&(s.shadow.radius=t.shadow.radius),void 0!==t.shadow.mapSize&&s.shadow.mapSize.fromArray(t.shadow.mapSize),void 0!==t.shadow.camera&&(s.shadow.camera=this.parseObject(t.shadow.camera))),void 0!==t.visible&&(s.visible=t.visible),void 0!==t.frustumCulled&&(s.frustumCulled=t.frustumCulled),void 0!==t.renderOrder&&(s.renderOrder=t.renderOrder),void 0!==t.userData&&(s.userData=t.userData),void 0!==t.layers&&(s.layers.mask=t.layers),void 0!==t.children){const a=t.children;for(let t=0;t<a.length;t++)s.add(this.parseObject(a[t],e,i,n,r))}if(void 0!==t.animations){const e=t.animations;for(let t=0;t<e.length;t++){const i=e[t];s.animations.push(r[i])}}if("LOD"===t.type){void 0!==t.autoUpdate&&(s.autoUpdate=t.autoUpdate);const e=t.levels;for(let t=0;t<e.length;t++){const i=e[t],n=s.getObjectByProperty("uuid",i.object);void 0!==n&&s.addLevel(n,i.distance,i.hysteresis)}}return s}bindSkeletons(t,e){0!==Object.keys(e).length&&t.traverse((function(t){if(!0===t.isSkinnedMesh&&void 0!==t.skeleton){const i=e[t.skeleton];void 0===i?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",t.skeleton):t.bind(i,t.bindMatrix)}}))}},t.ObjectSpaceNormalMap=1,t.OctahedronBufferGeometry=class extends yl{constructor(t,e){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(t,e)}},t.OctahedronGeometry=yl,t.OneFactor=201,t.OneMinusDstAlphaFactor=207,t.OneMinusDstColorFactor=209,t.OneMinusSrcAlphaFactor=205,t.OneMinusSrcColorFactor=203,t.OrthographicCamera=In,t.PCFShadowMap=1,t.PCFSoftShadowMap=2,t.PMREMGenerator=Gn,t.Path=Lo,t.PerspectiveCamera=on,t.Plane=fn,t.PlaneBufferGeometry=class extends Mn{constructor(t,e,i,n){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(t,e,i,n)}},t.PlaneGeometry=Mn,t.PlaneHelper=class extends Ya{constructor(t,e=1,i=16776960){const n=i,r=new Di;r.setAttribute("position",new Ti([1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],3)),r.computebounceingSphere(),super(r,new Va({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const s=new Di;s.setAttribute("position",new Ti([1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],3)),s.computebounceingSphere(),this.add(new Ki(s,new _i({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},t.PointLight=Cc,t.PointLightHelper=class extends Ki{constructor(t,e,i){super(new Sl(e,4,2),new _i({wireframe:!0,fog:!1,toneMapped:!1})),this.light=t,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},t.Points=ro,t.PointsMaterial=Qa,t.PolarGridHelper=class extends Ka{constructor(t=10,e=16,i=8,n=64,r=4473924,s=8947848){r=new qt(r),s=new qt(s);const a=[],o=[];if(e>1)for(let i=0;i<e;i++){const n=i/e*(2*Math.PI),l=Math.sin(n)*t,c=Math.cos(n)*t;a.push(0,0,0),a.push(l,0,c);const h=1&i?r:s;o.push(h.r,h.g,h.b),o.push(h.r,h.g,h.b)}for(let e=0;e<i;e++){const l=1&e?r:s,c=t-t/i*e;for(let t=0;t<n;t++){let e=t/n*(2*Math.PI),i=Math.sin(e)*c,r=Math.cos(e)*c;a.push(i,0,r),o.push(l.r,l.g,l.b),e=(t+1)/n*(2*Math.PI),i=Math.sin(e)*c,r=Math.cos(e)*c,a.push(i,0,r),o.push(l.r,l.g,l.b)}}const l=new Di;l.setAttribute("position",new Ti(a,3)),l.setAttribute("color",new Ti(o,3));super(l,new Va({vertexColors:!0,toneMapped:!1})),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},t.PolyhedronBufferGeometry=class extends Oo{constructor(t,e,i,n){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(t,e,i,n)}},t.PolyhedronGeometry=Oo,t.PositionalAudio=class extends Qc{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(th,eh,ih),nh.set(0,0,1).applyQuaternion(eh);const e=this.panner;if(e.positionX){const t=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(th.x,t),e.positionY.linearRampToValueAtTime(th.y,t),e.positionZ.linearRampToValueAtTime(th.z,t),e.orientationX.linearRampToValueAtTime(nh.x,t),e.orientationY.linearRampToValueAtTime(nh.y,t),e.orientationZ.linearRampToValueAtTime(nh.z,t)}else e.setPosition(th.x,th.y,th.z),e.setOrientation(nh.x,nh.y,nh.z)}},t.PropertyBinding=uh,t.PropertyMixer=rh,t.QuadraticBezierCurve=wo,t.QuadraticBezierCurve3=To,t.Quaternion=ne,t.QuaternionKeyframeTrack=nc,t.QuaternionLinearInterpolant=ic,t.REVISION=e,t.RGBADepthPacking=3201,t.RGBAFormat=w,t.RGBAIntegerFormat=1033,t.RGBA_ASTC_10x10_Format=Y,t.RGBA_ASTC_10x5_Format=j,t.RGBA_ASTC_10x6_Format=q,t.RGBA_ASTC_10x8_Format=X,t.RGBA_ASTC_12x10_Format=Z,t.RGBA_ASTC_12x12_Format=J,t.RGBA_ASTC_4x4_Format=U,t.RGBA_ASTC_5x4_Format=B,t.RGBA_ASTC_5x5_Format=F,t.RGBA_ASTC_6x5_Format=k,t.RGBA_ASTC_6x6_Format=G,t.RGBA_ASTC_8x5_Format=V,t.RGBA_ASTC_8x6_Format=H,t.RGBA_ASTC_8x8_Format=W,t.RGBA_BPTC_Format=K,t.RGBA_ETC2_EAC_Format=z,t.RGBA_PVRTC_2BPPV1_Format=N,t.RGBA_PVRTC_4BPPV1_Format=D,t.RGBA_S3TC_DXT1_Format=C,t.RGBA_S3TC_DXT3_Format=L,t.RGBA_S3TC_DXT5_Format=R,t.RGBFormat=1022,t.RGB_ETC1_Format=36196,t.RGB_ETC2_Format=O,t.RGB_PVRTC_2BPPV1_Format=I,t.RGB_PVRTC_4BPPV1_Format=P,t.RGB_S3TC_DXT1_Format=E,t.RGFormat=1030,t.RGIntegerFormat=1031,t.RawShaderMaterial=Il,t.Ray=De,t.Raycaster=class{constructor(t,e,i=0,n=1/0){this.ray=new De(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new je,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return vh(t,this,i,e),i.sort(gh),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)vh(t[n],this,i,e);return i.sort(gh),i}},t.RectAreaLight=Ic,t.RedFormat=1028,t.RedIntegerFormat=1029,t.ReinhardToneMapping=2,t.RepeatWrapping=c,t.ReplaceStencilOp=7681,t.ReverseSubtractEquation=102,t.RingBufferGeometry=class extends Ml{constructor(t,e,i,n,r,s){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(t,e,i,n,r,s)}},t.RingGeometry=Ml,t.SRGBColorSpace=lt,t.Scene=ea,t.ShaderChunk=bn,t.ShaderLib=wn,t.ShaderMaterial=sn,t.ShadowMaterial=Pl,t.Shape=Vo,t.ShapeBufferGeometry=class extends bl{constructor(t,e){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(t,e)}},t.ShapeGeometry=bl,t.ShapePath=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Lo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,n){return this.currentPath.quadraticCurveTo(t,e,i,n),this}bezierCurveTo(t,e,i,n,r,s){return this.currentPath.bezierCurveTo(t,e,i,n,r,s),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(t,e){const i=e.length;let n=!1;for(let r=i-1,s=0;s<i;r=s++){let i=e[r],a=e[s],o=a.x-i.x,l=a.y-i.y;if(Math.abs(l)>Number.EPSILON){if(l<0&&(i=e[s],o=-o,a=e[r],l=-l),t.y<i.y||t.y>a.y)continue;if(t.y===i.y){if(t.x===i.x)return!0}else{const e=l*(t.x-i.x)-o*(t.y-i.y);if(0===e)return!0;if(e<0)continue;n=!n}}else{if(t.y!==i.y)continue;if(a.x<=t.x&&t.x<=i.x||i.x<=t.x&&t.x<=a.x)return!0}}return n}const i=ml.isClockWise,n=this.subPaths;if(0===n.length)return[];let r,s,a;const o=[];if(1===n.length)return s=n[0],a=new Vo,a.curves=s.curves,o.push(a),o;let l=!i(n[0].getPoints());l=t?!l:l;const c=[],h=[];let u,d,p=[],m=0;h[m]=void 0,p[m]=[];for(let e=0,a=n.length;e<a;e++)s=n[e],u=s.getPoints(),r=i(u),r=t?!r:r,r?(!l&&h[m]&&m++,h[m]={s:new Vo,p:u},h[m].s.curves=s.curves,l&&m++,p[m]=[]):p[m].push({h:s,p:u[0]});if(!h[0])return function(t){const e=[];for(let i=0,n=t.length;i<n;i++){const n=t[i],r=new Vo;r.curves=n.curves,e.push(r)}return e}(n);if(h.length>1){let t=!1,i=0;for(let t=0,e=h.length;t<e;t++)c[t]=[];for(let n=0,r=h.length;n<r;n++){const r=p[n];for(let s=0;s<r.length;s++){const a=r[s];let o=!0;for(let r=0;r<h.length;r++)e(a.p,h[r].p)&&(n!==r&&i++,o?(o=!1,c[r].push(a)):t=!0);o&&c[n].push(a)}}i>0&&!1===t&&(p=c)}for(let t=0,e=h.length;t<e;t++){a=h[t].s,o.push(a),d=p[t];for(let t=0,e=d.length;t<e;t++)a.holes.push(d[t].h)}return o}},t.ShapeUtils=ml,t.ShortType=1011,t.Skeleton=Na,t.SkeletonHelper=class extends Ka{constructor(t){const e=Th(t),i=new Di,n=[],r=[],s=new qt(0,0,1),a=new qt(0,1,0);for(let t=0;t<e.length;t++){const i=e[t];i.parent&&i.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}i.setAttribute("position",new Ti(n,3)),i.setAttribute("color",new Ti(r,3));super(i,new Va({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0})),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,i=this.geometry,n=i.getAttribute("position");wh.copy(this.root.matrixWorld).invert();for(let t=0,i=0;t<e.length;t++){const r=e[t];r.parent&&r.parent.isBone&&(Sh.multiplyMatrices(wh,r.matrixWorld),bh.setFromMatrixPosition(Sh),n.setXYZ(i,bh.x,bh.y,bh.z),Sh.multiplyMatrices(wh,r.parent.matrixWorld),bh.setFromMatrixPosition(Sh),n.setXYZ(i+1,bh.x,bh.y,bh.z),i+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}},t.SkinnedMesh=La,t.Source=Zt,t.Sphere=Te,t.SphereBufferGeometry=class extends Sl{constructor(t,e,i,n,r,s,a){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(t,e,i,n,r,s,a)}},t.SphereGeometry=Sl,t.Spherical=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){const t=1e-6;return this.phi=Math.max(t,Math.min(Math.PI-t,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),0===this.radius?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(yt(e/this.radius,-1,1))),this}clone(){return(new this.constructor).copy(this)}},t.SphericalHarmonics3=Dc,t.SplineCurve=Ao,t.SpotLight=Sc,t.SpotLightHelper=class extends si{constructor(t,e){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const i=new Di,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let t=0,e=1,i=32;t<i;t++,e++){const r=t/i*Math.PI*2,s=e/i*Math.PI*2;n.push(Math.cos(r),Math.sin(r),1,Math.cos(s),Math.sin(s),1)}i.setAttribute("position",new Ti(n,3));const r=new Va({fog:!1,toneMapped:!1});this.cone=new Ka(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Mh.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Mh),void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},t.Sprite=_a,t.SpriteMaterial=sa,t.SrcAlphaFactor=204,t.SrcAlphaSaturateFactor=210,t.SrcColorFactor=202,t.StaticCopyUsage=35046,t.StaticDrawUsage=ut,t.StaticReadUsage=35045,t.StereoCamera=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new on,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new on,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,qc.copy(t.projectionMatrix);const i=e.eyeSep/2,n=i*e.near/e.focus,r=e.near*Math.tan(vt*e.fov*.5)/e.zoom;let s,a;jc.elements[12]=-i,Wc.elements[12]=i,s=-r*e.aspect+n,a=r*e.aspect+n,qc.elements[0]=2*e.near/(a-s),qc.elements[8]=(a+s)/(a-s),this.cameraL.projectionMatrix.copy(qc),s=-r*e.aspect-n,a=r*e.aspect-n,qc.elements[0]=2*e.near/(a-s),qc.elements[8]=(a+s)/(a-s),this.cameraR.projectionMatrix.copy(qc)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(jc),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Wc)}},t.StreamCopyUsage=35042,t.StreamDrawUsage=35040,t.StreamReadUsage=35041,t.StringKeyframeTrack=rc,t.SubtractEquation=101,t.SubtractiveBlending=3,t.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},t.TangentSpaceNormalMap=0,t.TetrahedronBufferGeometry=class extends wl{constructor(t,e){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(t,e)}},t.TetrahedronGeometry=wl,t.Texture=$t,t.TextureLoader=class extends uc{constructor(t){super(t)}load(t,e,i,n){const r=new $t,s=new fc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r)}),i,n),r}},t.TorusBufferGeometry=class extends Tl{constructor(t,e,i,n,r){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(t,e,i,n,r)}},t.TorusGeometry=Tl,t.TorusKnotBufferGeometry=class extends Al{constructor(t,e,i,n,r,s){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(t,e,i,n,r,s)}},t.TorusKnotGeometry=Al,t.Triangle=gi,t.TriangleFanDrawMode=2,t.TriangleStripDrawMode=1,t.TrianglesDrawMode=0,t.TubeBufferGeometry=class extends El{constructor(t,e,i,n,r){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(t,e,i,n,r)}},t.TubeGeometry=El,t.UVMapping=n,t.Uint16BufferAttribute=Si,t.Uint32BufferAttribute=wi,t.Uint8BufferAttribute=class extends bi{constructor(t,e,i){super(new Uint8Array(t),e,i)}},t.Uint8ClampedBufferAttribute=class extends bi{constructor(t,e,i){super(new Uint8ClampedArray(t),e,i)}},t.Uniform=mh,t.UniformsGroup=class extends mt{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:fh++}),this.name="",this.usage=ut,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return-1!==e&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let t=0,i=e.length;t<i;t++)this.uniforms.push(e[t].clone());return this}clone(){return(new this.constructor).copy(this)}},t.UniformsLib=Sn,t.UniformsUtils=rn,t.UnsignedByteType=x,t.UnsignedInt248Type=S,t.UnsignedIntType=y,t.UnsignedShort4444Type=1017,t.UnsignedShort5551Type=1018,t.UnsignedShortType=_,t.VSMShadowMap=3,t.Vector2=Lt,t.Vector3=re,t.Vector4=Qt,t.VectorKeyframeTrack=sc,t.VideoTexture=class extends $t{constructor(t,e,i,n,r,s,a,o,l){super(t,e,i,n,r,s,a,o,l),this.isVideoTexture=!0,this.minFilter=void 0!==s?s:f,this.magFilter=void 0!==r?r:f,this.generateMipmaps=!1;const c=this;"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback((function e(){c.needsUpdate=!0,t.requestVideoFrameCallback(e)}))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;!1==="requestVideoFrameCallback"in t&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},t.WebGL1Renderer=$s,t.WebGL3DRenderTarget=class extends te{constructor(t=1,e=1,i=1){super(t,e),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new ie(null,t,e,i),this.texture.isRenderTargetTexture=!0}},t.WebGLArrayRenderTarget=class extends te{constructor(t=1,e=1,i=1){super(t,e),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new ee(null,t,e,i),this.texture.isRenderTargetTexture=!0}},t.WebGLCubeRenderTarget=un,t.WebGLMultipleRenderTargets=class extends te{constructor(t=1,e=1,i=1,n={}){super(t,e,n),this.isWebGLMultipleRenderTargets=!0;const r=this.texture;this.texture=[];for(let t=0;t<i;t++)this.texture[t]=r.clone(),this.texture[t].isRenderTargetTexture=!0}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.texture.length;n<r;n++)this.texture[n].image.width=t,this.texture[n].image.height=e,this.texture[n].image.depth=i;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let e=0,i=t.texture.length;e<i;e++)this.texture[e]=t.texture[e].clone(),this.texture[e].isRenderTargetTexture=!0;return this}},t.WebGLMultisampleRenderTarget=class extends te{constructor(t,e,i){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(t,e,i),this.samples=4}},t.WebGLRenderTarget=te,t.WebGLRenderer=Ks,t.WebGLUtils=Vs,t.WireframeGeometry=Cl,t.WrapAroundEnding=nt,t.ZeroCurvatureEnding=et,t.ZeroFactor=200,t.ZeroSlopeEnding=it,t.ZeroStencilOp=0,t._SRGBAFormat=pt,t.sRGBEncoding=ot,Object.defineProperty(t,"__esModule",{value:!0})}));

  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.window = global.window || {}));
  }(this, (function (exports) { 'use strict';

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    /*!
     * GSAP 3.11.3
     * https://greensock.com
     *
     * @license Copyright 2008-2022, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
    */
    var _config = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
        _defaults = {
      duration: .5,
      overwrite: false,
      delay: 0
    },
        _suppressOverwrites,
        _reverting,
        _context,
        _bigNum = 1e8,
        _tinyNum = 1 / _bigNum,
        _2PI = Math.PI * 2,
        _HALF_PI = _2PI / 4,
        _gsID = 0,
        _sqrt = Math.sqrt,
        _cos = Math.cos,
        _sin = Math.sin,
        _isString = function _isString(value) {
      return typeof value === "string";
    },
        _isFunction = function _isFunction(value) {
      return typeof value === "function";
    },
        _isNumber = function _isNumber(value) {
      return typeof value === "number";
    },
        _isUndefined = function _isUndefined(value) {
      return typeof value === "undefined";
    },
        _isObject = function _isObject(value) {
      return typeof value === "object";
    },
        _isNotFalse = function _isNotFalse(value) {
      return value !== false;
    },
        _windowExists = function _windowExists() {
      return typeof window !== "undefined";
    },
        _isFuncOrString = function _isFuncOrString(value) {
      return _isFunction(value) || _isString(value);
    },
        _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
        _isArray = Array.isArray,
        _strictNumExp = /(?:-?\.?\d|\.)+/gi,
        _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        _relExp = /[+-]=-?[.\d]+/,
        _delimitedValueExp = /[^,'"\[\]\s]+/gi,
        _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        _globalTimeline,
        _win,
        _coreInitted,
        _doc,
        _globals = {},
        _installScope = {},
        _coreReady,
        _install = function _install(scope) {
      return (_installScope = _merge(scope, _globals)) && gsap;
    },
        _missingPlugin = function _missingPlugin(property, value) {
      return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
    },
        _warn = function _warn(message, suppress) {
      return !suppress && console.warn(message);
    },
        _addGlobal = function _addGlobal(name, obj) {
      return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
    },
        _emptyFunc = function _emptyFunc() {
      return 0;
    },
        _startAtRevertConfig = {
      suppressEvents: true,
      isStart: true,
      kill: false
    },
        _revertConfigNoKill = {
      suppressEvents: true,
      kill: false
    },
        _revertConfig = {
      suppressEvents: true
    },
        _reservedProps = {},
        _lazyTweens = [],
        _lazyLookup = {},
        _lastRenderedFrame,
        _plugins = {},
        _effects = {},
        _nextGCFrame = 30,
        _harnessPlugins = [],
        _callbackNames = "",
        _harness = function _harness(targets) {
      var target = targets[0],
          harnessPlugin,
          i;
      _isObject(target) || _isFunction(target) || (targets = [targets]);

      if (!(harnessPlugin = (target._gsap || {}).harness)) {
        i = _harnessPlugins.length;

        while (i-- && !_harnessPlugins[i].targetTest(target)) {}

        harnessPlugin = _harnessPlugins[i];
      }

      i = targets.length;

      while (i--) {
        targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
      }

      return targets;
    },
        _getCache = function _getCache(target) {
      return target._gsap || _harness(toArray(target))[0]._gsap;
    },
        _getProperty = function _getProperty(target, property, v) {
      return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
    },
        _forEachName = function _forEachName(names, func) {
      return (names = names.split(",")).forEach(func) || names;
    },
        _round = function _round(value) {
      return Math.round(value * 100000) / 100000 || 0;
    },
        _roundPrecise = function _roundPrecise(value) {
      return Math.round(value * 10000000) / 10000000 || 0;
    },
        _parseRelative = function _parseRelative(start, value) {
      var operator = value.charAt(0),
          end = parseFloat(value.substr(2));
      start = parseFloat(start);
      return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
    },
        _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
      var l = toFind.length,
          i = 0;

      for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

      return i < l;
    },
        _lazyRender = function _lazyRender() {
      var l = _lazyTweens.length,
          a = _lazyTweens.slice(0),
          i,
          tween;

      _lazyLookup = {};
      _lazyTweens.length = 0;

      for (i = 0; i < l; i++) {
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
      }
    },
        _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
      _lazyTweens.length && _lazyRender();
      animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
      _lazyTweens.length && _lazyRender();
    },
        _numericIfPossible = function _numericIfPossible(value) {
      var n = parseFloat(value);
      return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
    },
        _passThrough = function _passThrough(p) {
      return p;
    },
        _setDefaults = function _setDefaults(obj, defaults) {
      for (var p in defaults) {
        p in obj || (obj[p] = defaults[p]);
      }

      return obj;
    },
        _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
      return function (obj, defaults) {
        for (var p in defaults) {
          p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
        }
      };
    },
        _merge = function _merge(base, toMerge) {
      for (var p in toMerge) {
        base[p] = toMerge[p];
      }

      return base;
    },
        _mergeDeep = function _mergeDeep(base, toMerge) {
      for (var p in toMerge) {
        p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
      }

      return base;
    },
        _copyExcluding = function _copyExcluding(obj, excluding) {
      var copy = {},
          p;

      for (p in obj) {
        p in excluding || (copy[p] = obj[p]);
      }

      return copy;
    },
        _inheritDefaults = function _inheritDefaults(vars) {
      var parent = vars.parent || _globalTimeline,
          func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

      if (_isNotFalse(vars.inherit)) {
        while (parent) {
          func(vars, parent.vars.defaults);
          parent = parent.parent || parent._dp;
        }
      }

      return vars;
    },
        _arraysMatch = function _arraysMatch(a1, a2) {
      var i = a1.length,
          match = i === a2.length;

      while (match && i-- && a1[i] === a2[i]) {}

      return i < 0;
    },
        _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }

      if (lastProp === void 0) {
        lastProp = "_last";
      }

      var prev = parent[lastProp],
          t;

      if (sortBy) {
        t = child[sortBy];

        while (prev && prev[sortBy] > t) {
          prev = prev._prev;
        }
      }

      if (prev) {
        child._next = prev._next;
        prev._next = child;
      } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
      }

      if (child._next) {
        child._next._prev = child;
      } else {
        parent[lastProp] = child;
      }

      child._prev = prev;
      child.parent = child._dp = parent;
      return child;
    },
        _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
      if (firstProp === void 0) {
        firstProp = "_first";
      }

      if (lastProp === void 0) {
        lastProp = "_last";
      }

      var prev = child._prev,
          next = child._next;

      if (prev) {
        prev._next = next;
      } else if (parent[firstProp] === child) {
        parent[firstProp] = next;
      }

      if (next) {
        next._prev = prev;
      } else if (parent[lastProp] === child) {
        parent[lastProp] = prev;
      }

      child._next = child._prev = child.parent = null;
    },
        _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
      child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
      child._act = 0;
    },
        _uncache = function _uncache(animation, child) {
      if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        var a = animation;

        while (a) {
          a._dirty = 1;
          a = a.parent;
        }
      }

      return animation;
    },
        _recacheAncestors = function _recacheAncestors(animation) {
      var parent = animation.parent;

      while (parent && parent.parent) {
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
      }

      return animation;
    },
        _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
      return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
    },
        _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
      return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
    },
        _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
      return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
    },
        _animationCycle = function _animationCycle(tTime, cycleDuration) {
      var whole = Math.floor(tTime /= cycleDuration);
      return tTime && whole === tTime ? whole - 1 : whole;
    },
        _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
      return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
    },
        _setEnd = function _setEnd(animation) {
      return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
    },
        _alignPlayhead = function _alignPlayhead(animation, totalTime) {
      var parent = animation._dp;

      if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

        _setEnd(animation);

        parent._dirty || _uncache(parent, animation);
      }

      return animation;
    },
        _postAddChecks = function _postAddChecks(timeline, child) {
      var t;

      if (child._time || child._initted && !child._dur) {
        t = _parentToChildTotalTime(timeline.rawTime(), child);

        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
          child.render(t, true);
        }
      }

      if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        if (timeline._dur < timeline.duration()) {
          t = timeline;

          while (t._dp) {
            t.rawTime() >= 0 && t.totalTime(t._tTime);
            t = t._dp;
          }
        }

        timeline._zTime = -_tinyNum;
      }
    },
        _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
      child.parent && _removeFromParent(child);
      child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
      child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

      _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

      _isFromOrFromStart(child) || (timeline._recent = child);
      skipChecks || _postAddChecks(timeline, child);
      timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
      return timeline;
    },
        _scrollTrigger = function _scrollTrigger(animation, trigger) {
      return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
    },
        _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
      _initTween(tween, time, tTime);

      if (!tween._initted) {
        return 1;
      }

      if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);

        tween._lazy = [tTime, suppressEvents];
        return 1;
      }
    },
        _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
      var parent = _ref.parent;
      return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
    },
        _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
      var data = _ref2.data;
      return data === "isFromStart" || data === "isStart";
    },
        _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
      var prevRatio = tween.ratio,
          ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
          repeatDelay = tween._rDelay,
          tTime = 0,
          pt,
          iteration,
          prevIteration;

      if (repeatDelay && tween._repeat) {
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
          prevRatio = 1 - ratio;
          tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
      }

      if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
          return;
        }

        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
        suppressEvents || (suppressEvents = totalTime && !prevIteration);
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
          ratio && _removeFromParent(tween, 1);

          if (!suppressEvents && !_reverting) {
            _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

            tween._prom && tween._prom();
          }
        }
      } else if (!tween._zTime) {
        tween._zTime = totalTime;
      }
    },
        _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
      var child;

      if (time > prevTime) {
        child = animation._first;

        while (child && child._start <= time) {
          if (child.data === "isPause" && child._start > prevTime) {
            return child;
          }

          child = child._next;
        }
      } else {
        child = animation._last;

        while (child && child._start >= time) {
          if (child.data === "isPause" && child._start < prevTime) {
            return child;
          }

          child = child._prev;
        }
      }
    },
        _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
      var repeat = animation._repeat,
          dur = _roundPrecise(duration) || 0,
          totalProgress = animation._tTime / animation._tDur;
      totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
      animation._dur = dur;
      animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
      totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
      animation.parent && _setEnd(animation);
      skipUncache || _uncache(animation.parent, animation);
      return animation;
    },
        _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
      return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
    },
        _zeroPosition = {
      _start: 0,
      endTime: _emptyFunc,
      totalDuration: _emptyFunc
    },
        _parsePosition = function _parsePosition(animation, position, percentAnimation) {
      var labels = animation.labels,
          recent = animation._recent || _zeroPosition,
          clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
          i,
          offset,
          isPercent;

      if (_isString(position) && (isNaN(position) || position in labels)) {
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");

        if (offset === "<" || offset === ">") {
          i >= 0 && (position = position.replace(/=/, ""));
          return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }

        if (i < 0) {
          position in labels || (labels[position] = clippedDuration);
          return labels[position];
        }

        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

        if (isPercent && percentAnimation) {
          offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        }

        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
      }

      return position == null ? clippedDuration : +position;
    },
        _createTweenType = function _createTweenType(type, params, timeline) {
      var isLegacy = _isNumber(params[1]),
          varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
          vars = params[varsIndex],
          irVars,
          parent;

      isLegacy && (vars.duration = params[1]);
      vars.parent = timeline;

      if (type) {
        irVars = vars;
        parent = timeline;

        while (parent && !("immediateRender" in irVars)) {
          irVars = parent.vars.defaults || {};
          parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }

        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
      }

      return new Tween(params[0], vars, params[varsIndex + 1]);
    },
        _conditionalReturn = function _conditionalReturn(value, func) {
      return value || value === 0 ? func(value) : func;
    },
        _clamp = function _clamp(min, max, value) {
      return value < min ? min : value > max ? max : value;
    },
        getUnit = function getUnit(value, v) {
      return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
    },
        clamp = function clamp(min, max, value) {
      return _conditionalReturn(value, function (v) {
        return _clamp(min, max, v);
      });
    },
        _slice = [].slice,
        _isArrayLike = function _isArrayLike(value, nonEmpty) {
      return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
    },
        _flatten = function _flatten(ar, leaveStrings, accumulator) {
      if (accumulator === void 0) {
        accumulator = [];
      }

      return ar.forEach(function (value) {
        var _accumulator;

        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
      }) || accumulator;
    },
        toArray = function toArray(value, scope, leaveStrings) {
      return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
    },
        selector = function selector(value) {
      value = toArray(value)[0] || _warn("Invalid scope") || {};
      return function (v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
      };
    },
        shuffle = function shuffle(a) {
      return a.sort(function () {
        return .5 - Math.random();
      });
    },
        distribute = function distribute(v) {
      if (_isFunction(v)) {
        return v;
      }

      var vars = _isObject(v) ? v : {
        each: v
      },
          ease = _parseEase(vars.ease),
          from = vars.from || 0,
          base = parseFloat(vars.base) || 0,
          cache = {},
          isDecimal = from > 0 && from < 1,
          ratios = isNaN(from) || isDecimal,
          axis = vars.axis,
          ratioX = from,
          ratioY = from;

      if (_isString(from)) {
        ratioX = ratioY = {
          center: .5,
          edges: .5,
          end: 1
        }[from] || 0;
      } else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
      }

      return function (i, target, a) {
        var l = (a || vars).length,
            distances = cache[l],
            originX,
            originY,
            x,
            y,
            d,
            j,
            max,
            min,
            wrapAt;

        if (!distances) {
          wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

          if (!wrapAt) {
            max = -_bigNum;

            while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

            wrapAt--;
          }

          distances = cache[l] = [];
          originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
          originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
          max = 0;
          min = _bigNum;

          for (j = 0; j < l; j++) {
            x = j % wrapAt - originX;
            y = originY - (j / wrapAt | 0);
            distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
            d > max && (max = d);
            d < min && (min = d);
          }

          from === "random" && shuffle(distances);
          distances.max = max - min;
          distances.min = min;
          distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
          distances.b = l < 0 ? base - l : base;
          distances.u = getUnit(vars.amount || vars.each) || 0;
          ease = ease && l < 0 ? _invertEase(ease) : ease;
        }

        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
      };
    },
        _roundModifier = function _roundModifier(v) {
      var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
      return function (raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
      };
    },
        snap = function snap(snapTo, value) {
      var isArray = _isArray(snapTo),
          radius,
          is2D;

      if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;

        if (snapTo.values) {
          snapTo = toArray(snapTo.values);

          if (is2D = !_isNumber(snapTo[0])) {
            radius *= radius;
          }
        } else {
          snapTo = _roundModifier(snapTo.increment);
        }
      }

      return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
      } : function (raw) {
        var x = parseFloat(is2D ? raw.x : raw),
            y = parseFloat(is2D ? raw.y : 0),
            min = _bigNum,
            closest = 0,
            i = snapTo.length,
            dx,
            dy;

        while (i--) {
          if (is2D) {
            dx = snapTo[i].x - x;
            dy = snapTo[i].y - y;
            dx = dx * dx + dy * dy;
          } else {
            dx = Math.abs(snapTo[i] - x);
          }

          if (dx < min) {
            min = dx;
            closest = i;
          }
        }

        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
      });
    },
        random = function random(min, max, roundingIncrement, returnFunction) {
      return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
      });
    },
        pipe = function pipe() {
      for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
      }

      return function (value) {
        return functions.reduce(function (v, f) {
          return f(v);
        }, value);
      };
    },
        unitize = function unitize(func, unit) {
      return function (value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
      };
    },
        normalize = function normalize(min, max, value) {
      return mapRange(min, max, 0, 1, value);
    },
        _wrapArray = function _wrapArray(a, wrapper, value) {
      return _conditionalReturn(value, function (index) {
        return a[~~wrapper(index)];
      });
    },
        wrap = function wrap(min, max, value) {
      var range = max - min;
      return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
        return (range + (value - min) % range) % range + min;
      });
    },
        wrapYoyo = function wrapYoyo(min, max, value) {
      var range = max - min,
          total = range * 2;
      return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
      });
    },
        _replaceRandom = function _replaceRandom(value) {
      var prev = 0,
          s = "",
          i,
          nums,
          end,
          isArray;

      while (~(i = value.indexOf("random(", prev))) {
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
      }

      return s + value.substr(prev, value.length - prev);
    },
        mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
      var inRange = inMax - inMin,
          outRange = outMax - outMin;
      return _conditionalReturn(value, function (value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
      });
    },
        interpolate = function interpolate(start, end, progress, mutate) {
      var func = isNaN(start + end) ? 0 : function (p) {
        return (1 - p) * start + p * end;
      };

      if (!func) {
        var isString = _isString(start),
            master = {},
            p,
            i,
            interpolators,
            l,
            il;

        progress === true && (mutate = 1) && (progress = null);

        if (isString) {
          start = {
            p: start
          };
          end = {
            p: end
          };
        } else if (_isArray(start) && !_isArray(end)) {
          interpolators = [];
          l = start.length;
          il = l - 2;

          for (i = 1; i < l; i++) {
            interpolators.push(interpolate(start[i - 1], start[i]));
          }

          l--;

          func = function func(p) {
            p *= l;
            var i = Math.min(il, ~~p);
            return interpolators[i](p - i);
          };

          progress = end;
        } else if (!mutate) {
          start = _merge(_isArray(start) ? [] : {}, start);
        }

        if (!interpolators) {
          for (p in end) {
            _addPropTween.call(master, start, p, "get", end[p]);
          }

          func = function func(p) {
            return _renderPropTweens(p, master) || (isString ? start.p : start);
          };
        }
      }

      return _conditionalReturn(progress, func);
    },
        _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
      var labels = timeline.labels,
          min = _bigNum,
          p,
          distance,
          label;

      for (p in labels) {
        distance = labels[p] - fromTime;

        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
          label = p;
          min = distance;
        }
      }

      return label;
    },
        _callback = function _callback(animation, type, executeLazyFirst) {
      var v = animation.vars,
          callback = v[type],
          prevContext = _context,
          context = animation._ctx,
          params,
          scope,
          result;

      if (!callback) {
        return;
      }

      params = v[type + "Params"];
      scope = v.callbackScope || animation;
      executeLazyFirst && _lazyTweens.length && _lazyRender();
      context && (_context = context);
      result = params ? callback.apply(scope, params) : callback.call(scope);
      _context = prevContext;
      return result;
    },
        _interrupt = function _interrupt(animation) {
      _removeFromParent(animation);

      animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
      animation.progress() < 1 && _callback(animation, "onInterrupt");
      return animation;
    },
        _quickTween,
        _createPlugin = function _createPlugin(config) {
      config = !config.name && config["default"] || config;

      var name = config.name,
          isFunc = _isFunction(config),
          Plugin = name && !isFunc && config.init ? function () {
        this._props = [];
      } : config,
          instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      },
          statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };

      _wake();

      if (config !== Plugin) {
        if (_plugins[name]) {
          return;
        }

        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

        _plugins[Plugin.prop = name] = Plugin;

        if (config.targetTest) {
          _harnessPlugins.push(Plugin);

          _reservedProps[name] = 1;
        }

        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }

      _addGlobal(name, Plugin);

      config.register && config.register(gsap, Plugin, PropTween);
    },
        _255 = 255,
        _colorLookup = {
      aqua: [0, _255, _255],
      lime: [0, _255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, _255],
      navy: [0, 0, 128],
      white: [_255, _255, _255],
      olive: [128, 128, 0],
      yellow: [_255, _255, 0],
      orange: [_255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [_255, 0, 0],
      pink: [_255, 192, 203],
      cyan: [0, _255, _255],
      transparent: [_255, _255, _255, 0]
    },
        _hue = function _hue(h, m1, m2) {
      h += h < 0 ? 1 : h > 1 ? -1 : 0;
      return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
    },
        splitColor = function splitColor(v, toHSL, forceAlpha) {
      var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
          r,
          g,
          b,
          h,
          s,
          l,
          max,
          min,
          d,
          wasHSL;

      if (!a) {
        if (v.substr(-1) === ",") {
          v = v.substr(0, v.length - 1);
        }

        if (_colorLookup[v]) {
          a = _colorLookup[v];
        } else if (v.charAt(0) === "#") {
          if (v.length < 6) {
            r = v.charAt(1);
            g = v.charAt(2);
            b = v.charAt(3);
            v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
          }

          if (v.length === 9) {
            a = parseInt(v.substr(1, 6), 16);
            return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
          }

          v = parseInt(v.substr(1), 16);
          a = [v >> 16, v >> 8 & _255, v & _255];
        } else if (v.substr(0, 3) === "hsl") {
          a = wasHSL = v.match(_strictNumExp);

          if (!toHSL) {
            h = +a[0] % 360 / 360;
            s = +a[1] / 100;
            l = +a[2] / 100;
            g = l <= .5 ? l * (s + 1) : l + s - l * s;
            r = l * 2 - g;
            a.length > 3 && (a[3] *= 1);
            a[0] = _hue(h + 1 / 3, r, g);
            a[1] = _hue(h, r, g);
            a[2] = _hue(h - 1 / 3, r, g);
          } else if (~v.indexOf("=")) {
            a = v.match(_numExp);
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
          }
        } else {
          a = v.match(_strictNumExp) || _colorLookup.transparent;
        }

        a = a.map(Number);
      }

      if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;

        if (max === min) {
          h = s = 0;
        } else {
          d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
          h *= 60;
        }

        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
      }

      forceAlpha && a.length < 4 && (a[3] = 1);
      return a;
    },
        _colorOrderData = function _colorOrderData(v) {
      var values = [],
          c = [],
          i = -1;
      v.split(_colorExp).forEach(function (v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
      });
      values.c = c;
      return values;
    },
        _formatColors = function _formatColors(s, toHSL, orderMatchData) {
      var result = "",
          colors = (s + result).match(_colorExp),
          type = toHSL ? "hsla(" : "rgba(",
          i = 0,
          c,
          shell,
          d,
          l;

      if (!colors) {
        return s;
      }

      colors = colors.map(function (color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
      });

      if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;

        if (c.join(result) !== d.c.join(result)) {
          shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
          l = shell.length - 1;

          for (; i < l; i++) {
            result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
          }
        }
      }

      if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + colors[i];
        }
      }

      return result + shell[l];
    },
        _colorExp = function () {
      var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
          p;

      for (p in _colorLookup) {
        s += "|" + p + "\\b";
      }

      return new RegExp(s + ")", "gi");
    }(),
        _hslExp = /hsl[a]?\(/,
        _colorStringFilter = function _colorStringFilter(a) {
      var combined = a.join(" "),
          toHSL;
      _colorExp.lastIndex = 0;

      if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
        return true;
      }
    },
        _tickerActive,
        _ticker = function () {
      var _getTime = Date.now,
          _lagThreshold = 500,
          _adjustedLag = 33,
          _startTime = _getTime(),
          _lastUpdate = _startTime,
          _gap = 1000 / 240,
          _nextTime = _gap,
          _listeners = [],
          _id,
          _req,
          _raf,
          _self,
          _delta,
          _i,
          _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate,
            manual = v === true,
            overlap,
            dispatch,
            time,
            frame;

        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;

        if (overlap > 0 || manual) {
          frame = ++_self.frame;
          _delta = time - _self.time * 1000;
          _self.time = time = time / 1000;
          _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
          dispatch = 1;
        }

        manual || (_id = _req(_tick));

        if (dispatch) {
          for (_i = 0; _i < _listeners.length; _i++) {
            _listeners[_i](time, _delta, frame, v);
          }
        }
      };

      _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
          _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
          return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
          if (_coreReady) {
            if (!_coreInitted && _windowExists()) {
              _win = _coreInitted = window;
              _doc = _win.document || {};
              _globals.gsap = gsap;
              (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

              _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

              _raf = _win.requestAnimationFrame;
            }

            _id && _self.sleep();

            _req = _raf || function (f) {
              return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
            };

            _tickerActive = 1;

            _tick(2);
          }
        },
        sleep: function sleep() {
          (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
          _tickerActive = 0;
          _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
          _lagThreshold = threshold || 1 / _tinyNum;
          _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
          _gap = 1000 / (_fps || 240);
          _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
          var func = once ? function (t, d, f, v) {
            callback(t, d, f, v);

            _self.remove(func);
          } : callback;

          _self.remove(callback);

          _listeners[prioritize ? "unshift" : "push"](func);

          _wake();

          return func;
        },
        remove: function remove(callback, i) {
          ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
      };
      return _self;
    }(),
        _wake = function _wake() {
      return !_tickerActive && _ticker.wake();
    },
        _easeMap = {},
        _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
        _quotesExp = /["']/g,
        _parseObjectInString = function _parseObjectInString(value) {
      var obj = {},
          split = value.substr(1, value.length - 3).split(":"),
          key = split[0],
          i = 1,
          l = split.length,
          index,
          val,
          parsedVal;

      for (; i < l; i++) {
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
      }

      return obj;
    },
        _valueInParentheses = function _valueInParentheses(value) {
      var open = value.indexOf("(") + 1,
          close = value.indexOf(")"),
          nested = value.indexOf("(", open);
      return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
    },
        _configEaseFromString = function _configEaseFromString(name) {
      var split = (name + "").split("("),
          ease = _easeMap[split[0]];
      return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
    },
        _invertEase = function _invertEase(ease) {
      return function (p) {
        return 1 - ease(1 - p);
      };
    },
        _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
      var child = timeline._first,
          ease;

      while (child) {
        if (child instanceof Timeline) {
          _propagateYoyoEase(child, isYoyo);
        } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
          if (child.timeline) {
            _propagateYoyoEase(child.timeline, isYoyo);
          } else {
            ease = child._ease;
            child._ease = child._yEase;
            child._yEase = ease;
            child._yoyo = isYoyo;
          }
        }

        child = child._next;
      }
    },
        _parseEase = function _parseEase(ease, defaultEase) {
      return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
    },
        _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
      if (easeOut === void 0) {
        easeOut = function easeOut(p) {
          return 1 - easeIn(1 - p);
        };
      }

      if (easeInOut === void 0) {
        easeInOut = function easeInOut(p) {
          return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
      }

      var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
      },
          lowercaseName;

      _forEachName(names, function (name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

        for (var p in ease) {
          _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        }
      });

      return ease;
    },
        _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
      return function (p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
      };
    },
        _configElastic = function _configElastic(type, amplitude, period) {
      var p1 = amplitude >= 1 ? amplitude : 1,
          p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
          p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
          easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
      },
          ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);

      p2 = _2PI / p2;

      ease.config = function (amplitude, period) {
        return _configElastic(type, amplitude, period);
      };

      return ease;
    },
        _configBack = function _configBack(type, overshoot) {
      if (overshoot === void 0) {
        overshoot = 1.70158;
      }

      var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
      },
          ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
      } : _easeInOutFromOut(easeOut);

      ease.config = function (overshoot) {
        return _configBack(type, overshoot);
      };

      return ease;
    };

    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
      var power = i < 5 ? i + 1 : i;

      _insertEase(name + ",Power" + (power - 1), i ? function (p) {
        return Math.pow(p, power);
      } : function (p) {
        return p;
      }, function (p) {
        return 1 - Math.pow(1 - p, power);
      }, function (p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
      });
    });

    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

    (function (n, c) {
      var n1 = 1 / c,
          n2 = 2 * n1,
          n3 = 2.5 * n1,
          easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
      };

      _insertEase("Bounce", function (p) {
        return 1 - easeOut(1 - p);
      }, easeOut);
    })(7.5625, 2.75);

    _insertEase("Expo", function (p) {
      return p ? Math.pow(2, 10 * (p - 1)) : 0;
    });

    _insertEase("Circ", function (p) {
      return -(_sqrt(1 - p * p) - 1);
    });

    _insertEase("Sine", function (p) {
      return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
    });

    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
      config: function config(steps, immediateStart) {
        if (steps === void 0) {
          steps = 1;
        }

        var p1 = 1 / steps,
            p2 = steps + (immediateStart ? 0 : 1),
            p3 = immediateStart ? 1 : 0,
            max = 1 - _tinyNum;
        return function (p) {
          return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
      }
    };
    _defaults.ease = _easeMap["quad.out"];

    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
      return _callbackNames += name + "," + name + "Params,";
    });

    var GSCache = function GSCache(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    var Animation = function () {
      function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;

        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }

        this._ts = 1;

        _setDuration(this, +vars.duration, 1, 1);

        this.data = vars.data;

        if (_context) {
          this._ctx = _context;

          _context.data.push(this);
        }

        _tickerActive || _ticker.wake();
      }

      var _proto = Animation.prototype;

      _proto.delay = function delay(value) {
        if (value || value === 0) {
          this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }

        return this._delay;
      };

      _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
      };

      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
          return this._tDur;
        }

        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
      };

      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();

        if (!arguments.length) {
          return this._tTime;
        }

        var parent = this._dp;

        if (parent && parent.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);

          !parent._dp || parent.parent || _postAddChecks(parent, this);

          while (parent && parent.parent) {
            if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
              parent.totalTime(parent._tTime, true);
            }

            parent = parent.parent;
          }

          if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
            _addToTimeline(this._dp, this, this._start - this._delay);
          }
        }

        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
          this._ts || (this._pTime = _totalTime);

          _lazySafeRender(this, _totalTime, suppressEvents);
        }

        return this;
      };

      _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
      };

      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
      };

      _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
      };

      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;

        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
      };

      _proto.timeScale = function timeScale(value) {
        if (!arguments.length) {
          return this._rts === -_tinyNum ? 0 : this._rts;
        }

        if (this._rts === value) {
          return this;
        }

        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
        this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

        _setEnd(this);

        return _recacheAncestors(this);
      };

      _proto.paused = function paused(value) {
        if (!arguments.length) {
          return this._ps;
        }

        if (this._ps !== value) {
          this._ps = value;

          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
            this._ts = this._act = 0;
          } else {
            _wake();

            this._ts = this._rts;
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
          }
        }

        return this;
      };

      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = value;
          var parent = this.parent || this._dp;
          parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
          return this;
        }

        return this._start;
      };

      _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      };

      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp;
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
      };

      _proto.revert = function revert(config) {
        if (config === void 0) {
          config = _revertConfig;
        }

        var prevIsReverting = _reverting;
        _reverting = config;

        if (this._initted || this._startAt) {
          this.timeline && this.timeline.revert(config);
          this.totalTime(-0.01, config.suppressEvents);
        }

        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
      };

      _proto.globalTime = function globalTime(rawTime) {
        var animation = this,
            time = arguments.length ? rawTime : animation.rawTime();

        while (animation) {
          time = animation._start + time / (animation._ts || 1);
          animation = animation._dp;
        }

        return !this.parent && this.vars.immediateRender ? -1 : time;
      };

      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === Infinity ? -2 : value;
          return _onUpdateTotalDuration(this);
        }

        return this._repeat === -2 ? Infinity : this._repeat;
      };

      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          var time = this._time;
          this._rDelay = value;

          _onUpdateTotalDuration(this);

          return time ? this.time(time) : this;
        }

        return this._rDelay;
      };

      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }

        return this._yoyo;
      };

      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
      };

      _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
      };

      _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
      };

      _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };

      _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };

      _proto.resume = function resume() {
        return this.paused(false);
      };

      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
          return this;
        }

        return this._rts < 0;
      };

      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };

      _proto.isActive = function isActive() {
        var parent = this.parent || this._dp,
            start = this._start,
            rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
      };

      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;

        if (arguments.length > 1) {
          if (!callback) {
            delete vars[type];
          } else {
            vars[type] = callback;
            params && (vars[type + "Params"] = params);
            type === "onUpdate" && (this._onUpdate = callback);
          }

          return this;
        }

        return vars[type];
      };

      _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function (resolve) {
          var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
              _resolve = function _resolve() {
            var _then = self.then;
            self.then = null;
            _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
            resolve(f);
            self.then = _then;
          };

          if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
            _resolve();
          } else {
            self._prom = _resolve;
          }
        });
      };

      _proto.kill = function kill() {
        _interrupt(this);
      };

      return Animation;
    }();

    _setDefaults(Animation.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1
    });

    var Timeline = function (_Animation) {
      _inheritsLoose(Timeline, _Animation);

      function Timeline(vars, position) {
        var _this;

        if (vars === void 0) {
          vars = {};
        }

        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }

      var _proto2 = Timeline.prototype;

      _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);

        return this;
      };

      _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);

        return this;
      };

      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);

        return this;
      };

      _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
      };

      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
      };

      _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
      };

      _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
      };

      _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
      };

      _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time,
            tDur = this._dirty ? this.totalDuration() : this._tDur,
            dur = this._dur,
            tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
            crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
            time,
            child,
            next,
            iteration,
            cycleDuration,
            prevPaused,
            pauseTween,
            timeScale,
            prevStart,
            prevIteration,
            yoyo,
            isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }

          time = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;

          if (crossingStart) {
            dur || (prevTime = this._zTime);
            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }

          if (this._repeat) {
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;

            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }

            time = _roundPrecise(tTime % cycleDuration);

            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);

              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }

              time > dur && (time = dur);
            }

            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

            if (yoyo && iteration & 1) {
              time = dur - time;
              isYoyo = 1;
            }

            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && prevIteration & 1,
                  doesWrap = rewinding === (yoyo && iteration & 1);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : dur;
              this._lock = 1;
              this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
              this._tTime = tTime;
              !suppressEvents && this.parent && _callback(this, "onRepeat");
              this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

              if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                return this;
              }

              dur = this._dur;
              tDur = this._tDur;

              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -0.0001;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }

              this._lock = 0;

              if (!this._ts && !prevPaused) {
                return this;
              }

              _propagateYoyoEase(this, isYoyo);
            }
          }

          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

            if (pauseTween) {
              tTime -= time - (time = pauseTween._start);
            }
          }

          this._tTime = tTime;
          this._time = time;
          this._act = !timeScale;

          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0;
          }

          if (!prevTime && time && !suppressEvents) {
            _callback(this, "onStart");

            if (this._tTime !== tTime) {
              return this;
            }
          }

          if (time >= prevTime && totalTime >= 0) {
            child = this._first;

            while (child) {
              next = child._next;

              if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }

                child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

                if (time !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum);
                  break;
                }
              }

              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time;

            while (child) {
              next = child._prev;

              if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }

                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));

                if (time !== this._time || !this._ts && !prevPaused) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                  break;
                }
              }

              child = next;
            }
          }

          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

            if (this._ts) {
              this._start = prevStart;

              _setEnd(this);

              return this.render(totalTime, suppressEvents, force);
            }
          }

          this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
          if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }

        return this;
      };

      _proto2.add = function add(child, position) {
        var _this2 = this;

        _isNumber(position) || (position = _parsePosition(this, position, child));

        if (!(child instanceof Animation)) {
          if (_isArray(child)) {
            child.forEach(function (obj) {
              return _this2.add(obj, position);
            });
            return this;
          }

          if (_isString(child)) {
            return this.addLabel(child, position);
          }

          if (_isFunction(child)) {
            child = Tween.delayedCall(0, child);
          } else {
            return this;
          }
        }

        return this !== child ? _addToTimeline(this, child, position) : this;
      };

      _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
          nested = true;
        }

        if (tweens === void 0) {
          tweens = true;
        }

        if (timelines === void 0) {
          timelines = true;
        }

        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = -_bigNum;
        }

        var a = [],
            child = this._first;

        while (child) {
          if (child._start >= ignoreBeforeTime) {
            if (child instanceof Tween) {
              tweens && a.push(child);
            } else {
              timelines && a.push(child);
              nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
            }
          }

          child = child._next;
        }

        return a;
      };

      _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1),
            i = animations.length;

        while (i--) {
          if (animations[i].vars.id === id) {
            return animations[i];
          }
        }
      };

      _proto2.remove = function remove(child) {
        if (_isString(child)) {
          return this.removeLabel(child);
        }

        if (_isFunction(child)) {
          return this.killTweensOf(child);
        }

        _removeLinkedListItem(this, child);

        if (child === this._recent) {
          this._recent = this._last;
        }

        return _uncache(this);
      };

      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
          return this._tTime;
        }

        this._forcing = 1;

        if (!this._dp && this._ts) {
          this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }

        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

        this._forcing = 0;
        return this;
      };

      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
      };

      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };

      _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
      };

      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);

        while (child) {
          if (child._start === position && child.data === "isPause") {
            _removeFromParent(child);
          }

          child = child._next;
        }
      };

      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive),
            i = tweens.length;

        while (i--) {
          _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }

        return this;
      };

      _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [],
            parsedTargets = toArray(targets),
            child = this._first,
            isGlobalTime = _isNumber(onlyActive),
            children;

        while (child) {
          if (child instanceof Tween) {
            if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
              a.push(child);
            }
          } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
            a.push.apply(a, children);
          }

          child = child._next;
        }

        return a;
      };

      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};

        var tl = this,
            endTime = _parsePosition(tl, position),
            _vars = vars,
            startAt = _vars.startAt,
            _onStart = _vars.onStart,
            onStartParams = _vars.onStartParams,
            immediateRender = _vars.immediateRender,
            initted,
            tween = Tween.to(tl, _setDefaults({
          ease: vars.ease || "none",
          lazy: false,
          immediateRender: false,
          time: endTime,
          overwrite: "auto",
          duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
          onStart: function onStart() {
            tl.pause();

            if (!initted) {
              var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
              tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
              initted = 1;
            }

            _onStart && _onStart.apply(tween, onStartParams || []);
          }
        }, vars));

        return immediateRender ? tween.render(0) : tween;
      };

      _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
          startAt: {
            time: _parsePosition(this, fromPosition)
          }
        }, vars));
      };

      _proto2.recent = function recent() {
        return this._recent;
      };

      _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
          afterTime = this._time;
        }

        return _getLabelInDirection(this, _parsePosition(this, afterTime));
      };

      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
          beforeTime = this._time;
        }

        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
      };

      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
      };

      _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = 0;
        }

        var child = this._first,
            labels = this.labels,
            p;

        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }

          child = child._next;
        }

        if (adjustLabels) {
          for (p in labels) {
            if (labels[p] >= ignoreBeforeTime) {
              labels[p] += amount;
            }
          }
        }

        return _uncache(this);
      };

      _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;

        while (child) {
          child.invalidate(soft);
          child = child._next;
        }

        return _Animation.prototype.invalidate.call(this, soft);
      };

      _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
          includeLabels = true;
        }

        var child = this._first,
            next;

        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }

        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };

      _proto2.totalDuration = function totalDuration(value) {
        var max = 0,
            self = this,
            child = self._last,
            prevStart = _bigNum,
            prev,
            start,
            parent;

        if (arguments.length) {
          return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }

        if (self._dirty) {
          parent = self.parent;

          while (child) {
            prev = child._prev;
            child._dirty && child.totalDuration();
            start = child._start;

            if (start > prevStart && self._sort && child._ts && !self._lock) {
              self._lock = 1;
              _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
            } else {
              prevStart = start;
            }

            if (start < 0 && child._ts) {
              max -= start;

              if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                self._start += start / self._ts;
                self._time -= start;
                self._tTime -= start;
              }

              self.shiftChildren(-start, false, -1e999);
              prevStart = 0;
            }

            child._end > max && child._ts && (max = child._end);
            child = prev;
          }

          _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

          self._dirty = 0;
        }

        return self._tDur;
      };

      Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
          _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

          _lastRenderedFrame = _ticker.frame;
        }

        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }

            child || _ticker.sleep();
          }
        }
      };

      return Timeline;
    }(Animation);

    _setDefaults(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });

    var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
      var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
          index = 0,
          matchIndex = 0,
          result,
          startNums,
          color,
          endNum,
          chunk,
          startNum,
          hasRandom,
          a;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";

      if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop);
        start = a[0];
        end = a[1];
      }

      startNums = start.match(_complexStringNumExp) || [];

      while (result = _complexStringNumExp.exec(end)) {
        endNum = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color = 1;
        }

        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0;
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
            m: color && color < 4 ? Math.round : 0
          };
          index = _complexStringNumExp.lastIndex;
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
      pt.fp = funcParam;

      if (_relExp.test(end) || hasRandom) {
        pt.e = 0;
      }

      this._pt = pt;
      return pt;
    },
        _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
      _isFunction(end) && (end = end(index || 0, target, targets));
      var currentValue = target[prop],
          parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
          setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
          pt;

      if (_isString(end)) {
        if (~end.indexOf("random(")) {
          end = _replaceRandom(end);
        }

        if (end.charAt(1) === "=") {
          pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

          if (pt || pt === 0) {
            end = pt;
          }
        }
      }

      if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
          pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
          funcParam && (pt.fp = funcParam);
          modifier && pt.modifier(modifier, this, target);
          return this._pt = pt;
        }

        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
      }
    },
        _processVars = function _processVars(vars, index, target, targets, tween) {
      _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

      if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
        return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
      }

      var copy = {},
          p;

      for (p in vars) {
        copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
      }

      return copy;
    },
        _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
      var plugin, pt, ptLookup, i;

      if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

        if (tween !== _quickTween) {
          ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
          i = plugin._props.length;

          while (i--) {
            ptLookup[plugin._props[i]] = pt;
          }
        }
      }

      return plugin;
    },
        _overwritingTween,
        _forceAllPropTweens,
        _initTween = function _initTween(tween, time, tTime) {
      var vars = tween.vars,
          ease = vars.ease,
          startAt = vars.startAt,
          immediateRender = vars.immediateRender,
          lazy = vars.lazy,
          onUpdate = vars.onUpdate,
          onUpdateParams = vars.onUpdateParams,
          callbackScope = vars.callbackScope,
          runBackwards = vars.runBackwards,
          yoyoEase = vars.yoyoEase,
          keyframes = vars.keyframes,
          autoRevert = vars.autoRevert,
          dur = tween._dur,
          prevStartAt = tween._startAt,
          targets = tween._targets,
          parent = tween.parent,
          fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
          autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
          tl = tween.timeline,
          cleanVars,
          i,
          p,
          pt,
          target,
          hasPriority,
          gsData,
          harness,
          plugin,
          ptLookup,
          index,
          harnessVars,
          overwritten;
      tl && (!keyframes || !ease) && (ease = "none");
      tween._ease = _parseEase(ease, _defaults.ease);
      tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

      if (yoyoEase && tween._yoyo && !tween._repeat) {
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
      }

      tween._from = !tl && !!vars.runBackwards;

      if (!tl || keyframes && !vars.stagger) {
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop];
        cleanVars = _copyExcluding(vars, _reservedProps);

        if (prevStartAt) {
          prevStartAt._zTime < 0 && prevStartAt.progress(1);
          time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
          prevStartAt._lazy = 0;
        }

        if (startAt) {
          _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
            data: "isStart",
            overwrite: false,
            parent: parent,
            immediateRender: true,
            lazy: _isNotFalse(lazy),
            startAt: null,
            delay: 0,
            onUpdate: onUpdate,
            onUpdateParams: onUpdateParams,
            callbackScope: callbackScope,
            stagger: 0
          }, startAt)));

          tween._startAt._dp = 0;
          time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);

          if (immediateRender) {
            if (dur && time <= 0 && tTime <= 0) {
              time && (tween._zTime = time);
              return;
            }
          }
        } else if (runBackwards && dur) {
          if (!prevStartAt) {
            time && (immediateRender = false);
            p = _setDefaults({
              overwrite: false,
              data: "isFromStart",
              lazy: immediateRender && _isNotFalse(lazy),
              immediateRender: immediateRender,
              stagger: 0,
              parent: parent
            }, cleanVars);
            harnessVars && (p[harness.prop] = harnessVars);

            _removeFromParent(tween._startAt = Tween.set(targets, p));

            tween._startAt._dp = 0;
            time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
            tween._zTime = time;

            if (!immediateRender) {
              _initTween(tween._startAt, _tinyNum, _tinyNum);
            } else if (!time) {
              return;
            }
          }
        }

        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;

        for (i = 0; i < targets.length; i++) {
          target = targets[i];
          gsData = target._gsap || _harness(targets)[i]._gsap;
          tween._ptLookup[i] = ptLookup = {};
          _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
          index = fullTargets === targets ? i : fullTargets.indexOf(target);

          if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
            tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

            plugin._props.forEach(function (name) {
              ptLookup[name] = pt;
            });

            plugin.priority && (hasPriority = 1);
          }

          if (!harness || harnessVars) {
            for (p in cleanVars) {
              if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                plugin.priority && (hasPriority = 1);
              } else {
                ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
              }
            }
          }

          tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

          if (autoOverwrite && tween._pt) {
            _overwritingTween = tween;

            _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));

            overwritten = !tween.parent;
            _overwritingTween = 0;
          }

          tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }

        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween);
      }

      tween._onUpdate = onUpdate;
      tween._initted = (!tween._op || tween._pt) && !overwritten;
      keyframes && time <= 0 && tl.render(_bigNum, true, true);
    },
        _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
      var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
          pt,
          rootPT,
          lookup,
          i;

      if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;

        while (i--) {
          pt = lookup[i][property];

          if (pt && pt.d && pt.d._pt) {
            pt = pt.d._pt;

            while (pt && pt.p !== property && pt.fp !== property) {
              pt = pt._next;
            }
          }

          if (!pt) {
            _forceAllPropTweens = 1;
            tween.vars[property] = "+=0";

            _initTween(tween, time);

            _forceAllPropTweens = 0;
            return 1;
          }

          ptCache.push(pt);
        }
      }

      i = ptCache.length;

      while (i--) {
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT;
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
      }
    },
        _addAliasesToVars = function _addAliasesToVars(targets, vars) {
      var harness = targets[0] ? _getCache(targets[0]).harness : 0,
          propertyAliases = harness && harness.aliases,
          copy,
          p,
          i,
          aliases;

      if (!propertyAliases) {
        return vars;
      }

      copy = _merge({}, vars);

      for (p in propertyAliases) {
        if (p in copy) {
          aliases = propertyAliases[p].split(",");
          i = aliases.length;

          while (i--) {
            copy[aliases[i]] = copy[p];
          }
        }
      }

      return copy;
    },
        _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
      var ease = obj.ease || easeEach || "power1.inOut",
          p,
          a;

      if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []);
        obj.forEach(function (value, i) {
          return a.push({
            t: i / (obj.length - 1) * 100,
            v: value,
            e: ease
          });
        });
      } else {
        for (p in obj) {
          a = allProps[p] || (allProps[p] = []);
          p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
          });
        }
      }
    },
        _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
      return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
    },
        _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        _staggerPropsToSkip = {};

    _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
      return _staggerPropsToSkip[name] = 1;
    });

    var Tween = function (_Animation2) {
      _inheritsLoose(Tween, _Animation2);

      function Tween(targets, vars, position, skipInherit) {
        var _this3;

        if (typeof vars === "number") {
          position.duration = vars;
          vars = position;
          position = null;
        }

        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars,
            duration = _this3$vars.duration,
            delay = _this3$vars.delay,
            immediateRender = _this3$vars.immediateRender,
            stagger = _this3$vars.stagger,
            overwrite = _this3$vars.overwrite,
            keyframes = _this3$vars.keyframes,
            defaults = _this3$vars.defaults,
            scrollTrigger = _this3$vars.scrollTrigger,
            yoyoEase = _this3$vars.yoyoEase,
            parent = vars.parent || _globalTimeline,
            parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
            tl,
            i,
            copy,
            l,
            p,
            curTarget,
            staggerFunc,
            staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = [];
        _this3._overwrite = overwrite;

        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          vars = _this3.vars;
          tl = _this3.timeline = new Timeline({
            data: "nested",
            defaults: defaults || {},
            targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;

          if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            l = parsedTargets.length;
            staggerFunc = stagger && distribute(stagger);

            if (_isObject(stagger)) {
              for (p in stagger) {
                if (~_staggerTweenProps.indexOf(p)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p] = stagger[p];
                }
              }
            }

            for (i = 0; i < l; i++) {
              copy = _copyExcluding(vars, _staggerPropsToSkip);
              copy.stagger = 0;
              yoyoEase && (copy.yoyoEase = yoyoEase);
              staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
              curTarget = parsedTargets[i];
              copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
              copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

              if (!stagger && l === 1 && copy.delay) {
                _this3._delay = delay = copy.delay;
                _this3._start += delay;
                copy.delay = 0;
              }

              tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
              tl._ease = _easeMap.none;
            }

            tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
          } else if (keyframes) {
            _inheritDefaults(_setDefaults(tl.vars.defaults, {
              ease: "none"
            }));

            tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
            var time = 0,
                a,
                kf,
                v;

            if (_isArray(keyframes)) {
              keyframes.forEach(function (frame) {
                return tl.to(parsedTargets, frame, ">");
              });
              tl.duration();
            } else {
              copy = {};

              for (p in keyframes) {
                p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
              }

              for (p in copy) {
                a = copy[p].sort(function (a, b) {
                  return a.t - b.t;
                });
                time = 0;

                for (i = 0; i < a.length; i++) {
                  kf = a[i];
                  v = {
                    ease: kf.e,
                    duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                  };
                  v[p] = kf.v;
                  tl.to(parsedTargets, v, time);
                  time += v.duration;
                }
              }

              tl.duration() < duration && tl.to({}, {
                duration: duration - tl.duration()
              });
            }
          }

          duration || _this3.duration(duration = tl.duration());
        } else {
          _this3.timeline = 0;
        }

        if (overwrite === true && !_suppressOverwrites) {
          _overwritingTween = _assertThisInitialized(_this3);

          _globalTimeline.killTweensOf(parsedTargets);

          _overwritingTween = 0;
        }

        _addToTimeline(parent, _assertThisInitialized(_this3), position);

        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);

        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
          _this3._tTime = -_tinyNum;

          _this3.render(Math.max(0, -delay) || 0);
        }

        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }

      var _proto3 = Tween.prototype;

      _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time,
            tDur = this._tDur,
            dur = this._dur,
            isNegative = totalTime < 0,
            tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
            time,
            pt,
            iteration,
            cycleDuration,
            prevIteration,
            isYoyo,
            ratio,
            timeline,
            yoyoEase;

        if (!dur) {
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
          time = tTime;
          timeline = this.timeline;

          if (this._repeat) {
            cycleDuration = dur + this._rDelay;

            if (this._repeat < -1 && isNegative) {
              return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
            }

            time = _roundPrecise(tTime % cycleDuration);

            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);

              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }

              time > dur && (time = dur);
            }

            isYoyo = this._yoyo && iteration & 1;

            if (isYoyo) {
              yoyoEase = this._yEase;
              time = dur - time;
            }

            prevIteration = _animationCycle(this._tTime, cycleDuration);

            if (time === prevTime && !force && this._initted) {
              this._tTime = tTime;
              return this;
            }

            if (iteration !== prevIteration) {
              timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

              if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                this._lock = force = 1;
                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
              }
            }
          }

          if (!this._initted) {
            if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
              this._tTime = 0;
              return this;
            }

            if (prevTime !== this._time) {
              return this;
            }

            if (dur !== this._dur) {
              return this.render(totalTime, suppressEvents, force);
            }
          }

          this._tTime = tTime;
          this._time = time;

          if (!this._act && this._ts) {
            this._act = 1;
            this._lazy = 0;
          }

          this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

          if (this._from) {
            this.ratio = ratio = 1 - ratio;
          }

          if (time && !prevTime && !suppressEvents) {
            _callback(this, "onStart");

            if (this._tTime !== tTime) {
              return this;
            }
          }

          pt = this._pt;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }

          timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

          if (this._onUpdate && !suppressEvents) {
            isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);

            _callback(this, "onUpdate");
          }

          this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
            (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

            if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
              _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }

        return this;
      };

      _proto3.targets = function targets() {
        return this._targets;
      };

      _proto3.invalidate = function invalidate(soft) {
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
      };

      _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur);

        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
          return this.resetTo(property, value, start, startIsRelative);
        }

        _alignPlayhead(this, 0);

        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
      };

      _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
          vars = "all";
        }

        if (!targets && (!vars || vars === "all")) {
          this._lazy = this._pt = 0;
          return this.parent ? _interrupt(this) : this;
        }

        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
          this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
          return this;
        }

        var parsedTargets = this._targets,
            killingTargets = targets ? toArray(targets) : parsedTargets,
            propTweenLookup = this._ptLookup,
            firstPT = this._pt,
            overwrittenProps,
            curLookup,
            curOverwriteProps,
            props,
            p,
            pt,
            i;

        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
          vars === "all" && (this._pt = 0);
          return _interrupt(this);
        }

        overwrittenProps = this._op = this._op || [];

        if (vars !== "all") {
          if (_isString(vars)) {
            p = {};

            _forEachName(vars, function (name) {
              return p[name] = 1;
            });

            vars = p;
          }

          vars = _addAliasesToVars(parsedTargets, vars);
        }

        i = parsedTargets.length;

        while (i--) {
          if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];

            if (vars === "all") {
              overwrittenProps[i] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
              props = vars;
            }

            for (p in props) {
              pt = curLookup && curLookup[p];

              if (pt) {
                if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                  _removeLinkedListItem(this, pt, "_pt");
                }

                delete curLookup[p];
              }

              if (curOverwriteProps !== "all") {
                curOverwriteProps[p] = 1;
              }
            }
          }
        }

        this._initted && !this._pt && firstPT && _interrupt(this);
        return this;
      };

      Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
      };

      Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
      };

      Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay: delay,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope
        });
      };

      Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
      };

      Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
      };

      Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };

      return Tween;
    }(Animation);

    _setDefaults(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    });

    _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
      Tween[name] = function () {
        var tl = new Timeline(),
            params = _slice.call(arguments, 0);

        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });

    var _setterPlain = function _setterPlain(target, property, value) {
      return target[property] = value;
    },
        _setterFunc = function _setterFunc(target, property, value) {
      return target[property](value);
    },
        _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
      return target[property](data.fp, value);
    },
        _setterAttribute = function _setterAttribute(target, property, value) {
      return target.setAttribute(property, value);
    },
        _getSetter = function _getSetter(target, property) {
      return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
    },
        _renderPlain = function _renderPlain(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
    },
        _renderBoolean = function _renderBoolean(ratio, data) {
      return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
    },
        _renderComplexString = function _renderComplexString(ratio, data) {
      var pt = data._pt,
          s = "";

      if (!ratio && data.b) {
        s = data.b;
      } else if (ratio === 1 && data.e) {
        s = data.e;
      } else {
        while (pt) {
          s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
          pt = pt._next;
        }

        s += data.c;
      }

      data.set(data.t, data.p, s, data);
    },
        _renderPropTweens = function _renderPropTweens(ratio, data) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    },
        _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
      var pt = this._pt,
          next;

      while (pt) {
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
      }
    },
        _killPropTweensOf = function _killPropTweensOf(property) {
      var pt = this._pt,
          hasNonDependentRemaining,
          next;

      while (pt) {
        next = pt._next;

        if (pt.p === property && !pt.op || pt.op === property) {
          _removeLinkedListItem(this, pt, "_pt");
        } else if (!pt.dep) {
          hasNonDependentRemaining = 1;
        }

        pt = next;
      }

      return !hasNonDependentRemaining;
    },
        _setterWithModifier = function _setterWithModifier(target, property, value, data) {
      data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
    },
        _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
      var pt = parent._pt,
          next,
          pt2,
          first,
          last;

      while (pt) {
        next = pt._next;
        pt2 = first;

        while (pt2 && pt2.pr > pt.pr) {
          pt2 = pt2._next;
        }

        if (pt._prev = pt2 ? pt2._prev : last) {
          pt._prev._next = pt;
        } else {
          first = pt;
        }

        if (pt._next = pt2) {
          pt2._prev = pt;
        } else {
          last = pt;
        }

        pt = next;
      }

      parent._pt = first;
    };

    var PropTween = function () {
      function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;

        if (next) {
          next._prev = this;
        }
      }

      var _proto4 = PropTween.prototype;

      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set;
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target;
        this.tween = tween;
      };

      return PropTween;
    }();

    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
      return _reservedProps[name] = 1;
    });

    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults,
      autoRemoveChildren: true,
      id: "root",
      smoothChildTiming: true
    });
    _config.stringFilter = _colorStringFilter;

    var _media = [],
        _listeners = {},
        _emptyArray = [],
        _lastMediaTime = 0,
        _dispatch = function _dispatch(type) {
      return (_listeners[type] || _emptyArray).map(function (f) {
        return f();
      });
    },
        _onMediaChange = function _onMediaChange() {
      var time = Date.now(),
          matches = [];

      if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");

        _media.forEach(function (c) {
          var queries = c.queries,
              conditions = c.conditions,
              match,
              p,
              anyMatch,
              toggled;

          for (p in queries) {
            match = _win.matchMedia(queries[p]).matches;
            match && (anyMatch = 1);

            if (match !== conditions[p]) {
              conditions[p] = match;
              toggled = 1;
            }
          }

          if (toggled) {
            c.revert();
            anyMatch && matches.push(c);
          }
        });

        _dispatch("matchMediaRevert");

        matches.forEach(function (c) {
          return c.onMatch(c);
        });
        _lastMediaTime = time;

        _dispatch("matchMedia");
      }
    };

    var Context = function () {
      function Context(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = [];
        this.isReverted = false;
        func && this.add(func);
      }

      var _proto5 = Context.prototype;

      _proto5.add = function add(name, func, scope) {
        if (_isFunction(name)) {
          scope = func;
          func = name;
          name = _isFunction;
        }

        var self = this,
            f = function f() {
          var prev = _context,
              prevSelector = self.selector,
              result;
          prev && prev !== self && prev.data.push(self);
          scope && (self.selector = selector(scope));
          _context = self;
          result = func.apply(self, arguments);
          _isFunction(result) && self._r.push(result);
          _context = prev;
          self.selector = prevSelector;
          self.isReverted = false;
          return result;
        };

        self.last = f;
        return name === _isFunction ? f(self) : name ? self[name] = f : f;
      };

      _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
      };

      _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function (e) {
          return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
      };

      _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
      };

      _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;

        if (revert) {
          var tweens = this.getTweens();
          this.data.forEach(function (t) {
            if (t.data === "isFlip") {
              t.revert();
              t.getChildren(true, true, false).forEach(function (tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          });
          tweens.map(function (t) {
            return {
              g: t.globalTime(0),
              t: t
            };
          }).sort(function (a, b) {
            return b.g - a.g || -1;
          }).forEach(function (o) {
            return o.t.revert(revert);
          });
          this.data.forEach(function (e) {
            return !(e instanceof Animation) && e.revert && e.revert(revert);
          });

          this._r.forEach(function (f) {
            return f(revert, _this4);
          });

          this.isReverted = true;
        } else {
          this.data.forEach(function (e) {
            return e.kill && e.kill();
          });
        }

        this.clear();

        if (matchMedia) {
          var i = _media.indexOf(this);

          !!~i && _media.splice(i, 1);
        }
      };

      _proto5.revert = function revert(config) {
        this.kill(config || {});
      };

      return Context;
    }();

    var MatchMedia = function () {
      function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
      }

      var _proto6 = MatchMedia.prototype;

      _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
          matches: conditions
        });
        var context = new Context(0, scope || this.scope),
            cond = context.conditions = {},
            mq,
            p,
            active;
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;

        for (p in conditions) {
          if (p === "all") {
            active = 1;
          } else {
            mq = _win.matchMedia(conditions[p]);

            if (mq) {
              _media.indexOf(context) < 0 && _media.push(context);
              (cond[p] = mq.matches) && (active = 1);
              mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
          }
        }

        active && func(context);
        return this;
      };

      _proto6.revert = function revert(config) {
        this.kill(config || {});
      };

      _proto6.kill = function kill(revert) {
        this.contexts.forEach(function (c) {
          return c.kill(revert, true);
        });
      };

      return MatchMedia;
    }();

    var _gsap = {
      registerPlugin: function registerPlugin() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        args.forEach(function (config) {
          return _createPlugin(config);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]);

        var getter = _getCache(target || {}).get,
            format = unit ? _passThrough : _numericIfPossible;

        unit === "native" && (unit = "");
        return !target ? target : !property ? function (property, unit, uncache) {
          return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      },
      quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);

        if (target.length > 1) {
          var setters = target.map(function (t) {
            return gsap.quickSetter(t, property, unit);
          }),
              l = setters.length;
          return function (value) {
            var i = l;

            while (i--) {
              setters[i](value);
            }
          };
        }

        target = target[0] || {};

        var Plugin = _plugins[property],
            cache = _getCache(target),
            p = cache.harness && (cache.harness.aliases || {})[property] || property,
            setter = Plugin ? function (value) {
          var p = new Plugin();
          _quickTween._pt = 0;
          p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
          p.render(1, p);
          _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);

        return Plugin ? setter : function (value) {
          return setter(target, p, unit ? value + unit : value, cache, 1);
        };
      },
      quickTo: function quickTo(target, property, vars) {
        var _merge2;

        var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
            func = function func(value, start, startIsRelative) {
          return tween.resetTo(property, value, start, startIsRelative);
        };

        func.tween = tween;
        return func;
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
      },
      config: function config(value) {
        return _mergeDeep(_config, value || {});
      },
      registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name,
            effect = _ref3.effect,
            plugins = _ref3.plugins,
            defaults = _ref3.defaults,
            extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function (pluginName) {
          return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });

        _effects[name] = function (targets, vars, tl) {
          return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };

        if (extendTimeline) {
          Timeline.prototype[name] = function (targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
          };
        }
      },
      registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
      },
      parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
      },
      getById: function getById(id) {
        return _globalTimeline.getById(id);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
          vars = {};
        }

        var tl = new Timeline(vars),
            child,
            next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

        _globalTimeline.remove(tl);

        tl._dp = 0;
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;

        while (child) {
          next = child._next;

          if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
            _addToTimeline(tl, child, child._start - child._delay);
          }

          child = next;
        }

        _addToTimeline(_globalTimeline, tl, 0);

        return tl;
      },
      context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
      },
      matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function (c) {
          var cond = c.conditions,
              found,
              p;

          for (p in cond) {
            if (cond[p]) {
              cond[p] = false;
              found = 1;
            }
          }

          found && c.revert();
        }) || _onMediaChange();
      },
      addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
      },
      removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type],
            i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
      },
      utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function reverting() {
          return _reverting;
        },
        context: function context(toAdd) {
          if (toAdd && _context) {
            _context.data.push(toAdd);

            toAdd._ctx = _context;
          }

          return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
          return _suppressOverwrites = value;
        }
      }
    };

    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
      return _gsap[name] = Tween[name];
    });

    _ticker.add(Timeline.updateRoot);

    _quickTween = _gsap.to({}, {
      duration: 0
    });

    var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
      var pt = plugin._pt;

      while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
      }

      return pt;
    },
        _addModifiers = function _addModifiers(tween, modifiers) {
      var targets = tween._targets,
          p,
          i,
          pt;

      for (p in modifiers) {
        i = targets.length;

        while (i--) {
          pt = tween._ptLookup[i][p];

          if (pt && (pt = pt.d)) {
            if (pt._pt) {
              pt = _getPluginPropTween(pt, p);
            }

            pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
          }
        }
      }
    },
        _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
      return {
        name: name,
        rawVars: 1,
        init: function init(target, vars, tween) {
          tween._onInit = function (tween) {
            var temp, p;

            if (_isString(vars)) {
              temp = {};

              _forEachName(vars, function (name) {
                return temp[name] = 1;
              });

              vars = temp;
            }

            if (modifier) {
              temp = {};

              for (p in vars) {
                temp[p] = modifier(vars[p]);
              }

              vars = temp;
            }

            _addModifiers(tween, vars);
          };
        }
      };
    };

    var gsap = _gsap.registerPlugin({
      name: "attr",
      init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;

        for (p in vars) {
          v = target.getAttribute(p) || "";
          pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
          pt.op = p;
          pt.b = v;

          this._props.push(p);
        }
      },
      render: function render(ratio, data) {
        var pt = data._pt;

        while (pt) {
          _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
          pt = pt._next;
        }
      }
    }, {
      name: "endArray",
      init: function init(target, value) {
        var i = value.length;

        while (i--) {
          this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
        }
      }
    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
    Tween.version = Timeline.version = gsap.version = "3.11.3";
    _coreReady = 1;
    _windowExists() && _wake();
    var Power0 = _easeMap.Power0,
        Power1 = _easeMap.Power1,
        Power2 = _easeMap.Power2,
        Power3 = _easeMap.Power3,
        Power4 = _easeMap.Power4,
        Linear = _easeMap.Linear,
        Quad = _easeMap.Quad,
        Cubic = _easeMap.Cubic,
        Quart = _easeMap.Quart,
        Quint = _easeMap.Quint,
        Strong = _easeMap.Strong,
        Elastic = _easeMap.Elastic,
        Back = _easeMap.Back,
        SteppedEase = _easeMap.SteppedEase,
        Bounce = _easeMap.Bounce,
        Sine = _easeMap.Sine,
        Expo = _easeMap.Expo,
        Circ = _easeMap.Circ;

    var _win$1,
        _doc$1,
        _docElement,
        _pluginInitted,
        _tempDiv,
        _tempDivStyler,
        _recentSetterPlugin,
        _reverting$1,
        _windowExists$1 = function _windowExists() {
      return typeof window !== "undefined";
    },
        _transformProps = {},
        _RAD2DEG = 180 / Math.PI,
        _DEG2RAD = Math.PI / 180,
        _atan2 = Math.atan2,
        _bigNum$1 = 1e8,
        _capsExp = /([A-Z])/g,
        _horizontalExp = /(left|right|width|margin|padding|x)/i,
        _complexExp = /[\s,\(]\S/,
        _propertyAliases = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
        _renderCSSProp = function _renderCSSProp(ratio, data) {
      return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    },
        _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
      return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
    },
        _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
      return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
    },
        _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
      var value = data.s + data.c * ratio;
      data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
    },
        _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
      return data.set(data.t, data.p, ratio ? data.e : data.b, data);
    },
        _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
      return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
    },
        _setterCSSStyle = function _setterCSSStyle(target, property, value) {
      return target.style[property] = value;
    },
        _setterCSSProp = function _setterCSSProp(target, property, value) {
      return target.style.setProperty(property, value);
    },
        _setterTransform = function _setterTransform(target, property, value) {
      return target._gsap[property] = value;
    },
        _setterScale = function _setterScale(target, property, value) {
      return target._gsap.scaleX = target._gsap.scaleY = value;
    },
        _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache.scaleX = cache.scaleY = value;
      cache.renderTransform(ratio, cache);
    },
        _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
      var cache = target._gsap;
      cache[property] = value;
      cache.renderTransform(ratio, cache);
    },
        _transformProp = "transform",
        _transformOriginProp = _transformProp + "Origin",
        _saveStyle = function _saveStyle(property, isNotCSS) {
      var _this = this;

      var target = this.target,
          style = target.style;

      if (property in _transformProps) {
        this.tfm = this.tfm || {};

        if (property !== "transform") {
          property = _propertyAliases[property] || property;
          ~property.indexOf(",") ? property.split(",").forEach(function (a) {
            return _this.tfm[a] = _get(target, a);
          }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
        }

        if (this.props.indexOf(_transformProp) >= 0) {
          return;
        }

        if (target._gsap.svg) {
          this.svgo = target.getAttribute("data-svg-origin");
          this.props.push(_transformOriginProp, isNotCSS, "");
        }

        property = _transformProp;
      }

      (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
    },
        _removeIndependentTransforms = function _removeIndependentTransforms(style) {
      if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
      }
    },
        _revertStyle = function _revertStyle() {
      var props = this.props,
          target = this.target,
          style = target.style,
          cache = target._gsap,
          i,
          p;

      for (i = 0; i < props.length; i += 3) {
        props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
      }

      if (this.tfm) {
        for (p in this.tfm) {
          cache[p] = this.tfm[p];
        }

        if (cache.svg) {
          cache.renderTransform();
          target.setAttribute("data-svg-origin", this.svgo || "");
        }

        i = _reverting$1();

        if (i && !i.isStart && !style[_transformProp]) {
          _removeIndependentTransforms(style);

          cache.uncache = 1;
        }
      }
    },
        _getStyleSaver = function _getStyleSaver(target, properties) {
      var saver = {
        target: target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
      };
      properties && properties.split(",").forEach(function (p) {
        return saver.save(p);
      });
      return saver;
    },
        _supports3D,
        _createElement = function _createElement(type, ns) {
      var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
      return e.style ? e : _doc$1.createElement(type);
    },
        _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
      var cs = getComputedStyle(target);
      return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
    },
        _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
        _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
      var e = element || _tempDiv,
          s = e.style,
          i = 5;

      if (property in s && !preferPrefix) {
        return property;
      }

      property = property.charAt(0).toUpperCase() + property.substr(1);

      while (i-- && !(_prefixes[i] + property in s)) {}

      return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
    },
        _initCore = function _initCore() {
      if (_windowExists$1() && window.document) {
        _win$1 = window;
        _doc$1 = _win$1.document;
        _docElement = _doc$1.documentElement;
        _tempDiv = _createElement("div") || {
          style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting$1 = gsap.core.reverting;
        _pluginInitted = 1;
      }
    },
        _getBBoxHack = function _getBBoxHack(swapIfPossible) {
      var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          oldParent = this.parentNode,
          oldSibling = this.nextSibling,
          oldCSS = this.style.cssText,
          bbox;

      _docElement.appendChild(svg);

      svg.appendChild(this);
      this.style.display = "block";

      if (swapIfPossible) {
        try {
          bbox = this.getBBox();
          this._gsapBBox = this.getBBox;
          this.getBBox = _getBBoxHack;
        } catch (e) {}
      } else if (this._gsapBBox) {
        bbox = this._gsapBBox();
      }

      if (oldParent) {
        if (oldSibling) {
          oldParent.insertBefore(this, oldSibling);
        } else {
          oldParent.appendChild(this);
        }
      }

      _docElement.removeChild(svg);

      this.style.cssText = oldCSS;
      return bbox;
    },
        _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
      var i = attributesArray.length;

      while (i--) {
        if (target.hasAttribute(attributesArray[i])) {
          return target.getAttribute(attributesArray[i]);
        }
      }
    },
        _getBBox = function _getBBox(target) {
      var bounds;

      try {
        bounds = target.getBBox();
      } catch (error) {
        bounds = _getBBoxHack.call(target, true);
      }

      bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
      return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
        y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      } : bounds;
    },
        _isSVG = function _isSVG(e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
    },
        _removeProperty = function _removeProperty(target, property) {
      if (property) {
        var style = target.style;

        if (property in _transformProps && property !== _transformOriginProp) {
          property = _transformProp;
        }

        if (style.removeProperty) {
          if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
            property = "-" + property;
          }

          style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        } else {
          style.removeAttribute(property);
        }
      }
    },
        _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
      var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
      plugin._pt = pt;
      pt.b = beginning;
      pt.e = end;

      plugin._props.push(property);

      return pt;
    },
        _nonConvertibleUnits = {
      deg: 1,
      rad: 1,
      turn: 1
    },
        _nonStandardLayouts = {
      grid: 1,
      flex: 1
    },
        _convertToUnit = function _convertToUnit(target, property, value, unit) {
      var curValue = parseFloat(value) || 0,
          curUnit = (value + "").trim().substr((curValue + "").length) || "px",
          style = _tempDiv.style,
          horizontal = _horizontalExp.test(property),
          isRootSVG = target.tagName.toLowerCase() === "svg",
          measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
          amount = 100,
          toPixels = unit === "px",
          toPercent = unit === "%",
          px,
          parent,
          cache,
          isSVG;

      if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
        return curValue;
      }

      curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
      isSVG = target.getCTM && _isSVG(target);

      if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
      }

      style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
      parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

      if (isSVG) {
        parent = (target.ownerSVGElement || {}).parentNode;
      }

      if (!parent || parent === _doc$1 || !parent.appendChild) {
        parent = _doc$1.body;
      }

      cache = parent._gsap;

      if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
        return _round(curValue / cache.width * amount);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";

        if (horizontal && toPercent) {
          cache = _getCache(parent);
          cache.time = _ticker.time;
          cache.width = parent[measureProperty];
        }
      }

      return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
    },
        _get = function _get(target, property, unit, uncache) {
      var value;
      _pluginInitted || _initCore();

      if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];

        if (~property.indexOf(",")) {
          property = property.split(",")[0];
        }
      }

      if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
      } else {
        value = target.style[property];

        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
          value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
        }
      }

      return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
    },
        _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
      if (!start || start === "none") {
        var p = _checkPropPrefix(prop, target, 1),
            s = p && _getComputedProperty(target, p, 1);

        if (s && s !== start) {
          prop = p;
          start = s;
        } else if (prop === "borderColor") {
          start = _getComputedProperty(target, "borderTopColor");
        }
      }

      var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
          index = 0,
          matchIndex = 0,
          a,
          result,
          startValues,
          startNum,
          color,
          startValue,
          endValue,
          endNum,
          chunk,
          endUnit,
          startUnit,
          endValues;
      pt.b = start;
      pt.e = end;
      start += "";
      end += "";

      if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
      }

      a = [start, end];

      _colorStringFilter(a);

      start = a[0];
      end = a[1];
      startValues = start.match(_numWithUnitExp) || [];
      endValues = end.match(_numWithUnitExp) || [];

      if (endValues.length) {
        while (result = _numWithUnitExp.exec(end)) {
          endValue = result[0];
          chunk = end.substring(index, result.index);

          if (color) {
            color = (color + 1) % 5;
          } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
            color = 1;
          }

          if (endValue !== (startValue = startValues[matchIndex++] || "")) {
            startNum = parseFloat(startValue) || 0;
            startUnit = startValue.substr((startNum + "").length);
            endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
            endNum = parseFloat(endValue);
            endUnit = endValue.substr((endNum + "").length);
            index = _numWithUnitExp.lastIndex - endUnit.length;

            if (!endUnit) {
              endUnit = endUnit || _config.units[prop] || startUnit;

              if (index === end.length) {
                end += endUnit;
                pt.e += endUnit;
              }
            }

            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
            }

            pt._pt = {
              _next: pt._pt,
              p: chunk || matchIndex === 1 ? chunk : ",",
              s: startNum,
              c: endNum - startNum,
              m: color && color < 4 || prop === "zIndex" ? Math.round : 0
            };
          }
        }

        pt.c = index < end.length ? end.substring(index, end.length) : "";
      } else {
        pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
      }

      _relExp.test(end) && (pt.e = 0);
      this._pt = pt;
      return pt;
    },
        _keywordToPercent = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
        _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
      var split = value.split(" "),
          x = split[0],
          y = split[1] || "50%";

      if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        value = x;
        x = y;
        y = value;
      }

      split[0] = _keywordToPercent[x] || x;
      split[1] = _keywordToPercent[y] || y;
      return split.join(" ");
    },
        _renderClearProps = function _renderClearProps(ratio, data) {
      if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t,
            style = target.style,
            props = data.u,
            cache = target._gsap,
            prop,
            clearTransforms,
            i;

        if (props === "all" || props === true) {
          style.cssText = "";
          clearTransforms = 1;
        } else {
          props = props.split(",");
          i = props.length;

          while (--i > -1) {
            prop = props[i];

            if (_transformProps[prop]) {
              clearTransforms = 1;
              prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
            }

            _removeProperty(target, prop);
          }
        }

        if (clearTransforms) {
          _removeProperty(target, _transformProp);

          if (cache) {
            cache.svg && target.removeAttribute("transform");

            _parseTransform(target, 1);

            cache.uncache = 1;

            _removeIndependentTransforms(style);
          }
        }
      }
    },
        _specialProps = {
      clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
          var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
          pt.u = endValue;
          pt.pr = -10;
          pt.tween = tween;

          plugin._props.push(property);

          return 1;
        }
      }
    },
        _identity2DMatrix = [1, 0, 0, 1, 0, 0],
        _rotationalProperties = {},
        _isNullTransform = function _isNullTransform(value) {
      return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
    },
        _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
      var matrixString = _getComputedProperty(target, _transformProp);

      return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
    },
        _getMatrix = function _getMatrix(target, force2D) {
      var cache = target._gsap || _getCache(target),
          style = target.style,
          matrix = _getComputedTransformMatrixAsArray(target),
          parent,
          nextSibling,
          temp,
          addedToDOM;

      if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix;
        matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
      } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;

        if (!parent || !target.offsetParent) {
          addedToDOM = 1;
          nextSibling = target.nextElementSibling;

          _docElement.appendChild(target);
        }

        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");

        if (addedToDOM) {
          nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
      }

      return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
    },
        _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
      var cache = target._gsap,
          matrix = matrixArray || _getMatrix(target, true),
          xOriginOld = cache.xOrigin || 0,
          yOriginOld = cache.yOrigin || 0,
          xOffsetOld = cache.xOffset || 0,
          yOffsetOld = cache.yOffset || 0,
          a = matrix[0],
          b = matrix[1],
          c = matrix[2],
          d = matrix[3],
          tx = matrix[4],
          ty = matrix[5],
          originSplit = origin.split(" "),
          xOrigin = parseFloat(originSplit[0]) || 0,
          yOrigin = parseFloat(originSplit[1]) || 0,
          bounds,
          determinant,
          x,
          y;

      if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
      } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
      }

      if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
      } else {
        cache.xOffset = cache.yOffset = 0;
      }

      cache.xOrigin = xOrigin;
      cache.yOrigin = yOrigin;
      cache.smooth = !!smooth;
      cache.origin = origin;
      cache.originIsAbsolute = !!originIsAbsolute;
      target.style[_transformOriginProp] = "0px 0px";

      if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
      }

      target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
    },
        _parseTransform = function _parseTransform(target, uncache) {
      var cache = target._gsap || new GSCache(target);

      if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
      }

      var style = target.style,
          invertedScaleX = cache.scaleX < 0,
          px = "px",
          deg = "deg",
          cs = getComputedStyle(target),
          origin = _getComputedProperty(target, _transformOriginProp) || "0",
          x,
          y,
          z,
          scaleX,
          scaleY,
          rotation,
          rotationX,
          rotationY,
          skewX,
          skewY,
          perspective,
          xOrigin,
          yOrigin,
          matrix,
          angle,
          cos,
          sin,
          a,
          b,
          c,
          d,
          a12,
          a22,
          t1,
          t2,
          t3,
          a13,
          a23,
          a33,
          a42,
          a43,
          a32;
      x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
      scaleX = scaleY = 1;
      cache.svg = !!(target.getCTM && _isSVG(target));

      if (cs.translate) {
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
          style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        }

        style.scale = style.rotate = style.translate = "none";
      }

      matrix = _getMatrix(target, cache.svg);

      if (cache.svg) {
        if (cache.uncache) {
          t2 = target.getBBox();
          origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
          t1 = "";
        } else {
          t1 = !uncache && target.getAttribute("data-svg-origin");
        }

        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
      }

      xOrigin = cache.xOrigin || 0;
      yOrigin = cache.yOrigin || 0;

      if (matrix !== _identity2DMatrix) {
        a = matrix[0];
        b = matrix[1];
        c = matrix[2];
        d = matrix[3];
        x = a12 = matrix[4];
        y = a22 = matrix[5];

        if (matrix.length === 6) {
          scaleX = Math.sqrt(a * a + b * b);
          scaleY = Math.sqrt(d * d + c * c);
          rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
          skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
          skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

          if (cache.svg) {
            x -= xOrigin - (xOrigin * a + yOrigin * c);
            y -= yOrigin - (xOrigin * b + yOrigin * d);
          }
        } else {
          a32 = matrix[6];
          a42 = matrix[7];
          a13 = matrix[8];
          a23 = matrix[9];
          a33 = matrix[10];
          a43 = matrix[11];
          x = matrix[12];
          y = matrix[13];
          z = matrix[14];
          angle = _atan2(a32, a33);
          rotationX = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a12 * cos + a13 * sin;
            t2 = a22 * cos + a23 * sin;
            t3 = a32 * cos + a33 * sin;
            a13 = a12 * -sin + a13 * cos;
            a23 = a22 * -sin + a23 * cos;
            a33 = a32 * -sin + a33 * cos;
            a43 = a42 * -sin + a43 * cos;
            a12 = t1;
            a22 = t2;
            a32 = t3;
          }

          angle = _atan2(-c, a33);
          rotationY = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(-angle);
            sin = Math.sin(-angle);
            t1 = a * cos - a13 * sin;
            t2 = b * cos - a23 * sin;
            t3 = c * cos - a33 * sin;
            a43 = d * sin + a43 * cos;
            a = t1;
            b = t2;
            c = t3;
          }

          angle = _atan2(b, a);
          rotation = angle * _RAD2DEG;

          if (angle) {
            cos = Math.cos(angle);
            sin = Math.sin(angle);
            t1 = a * cos + b * sin;
            t2 = a12 * cos + a22 * sin;
            b = b * cos - a * sin;
            a22 = a22 * cos - a12 * sin;
            a = t1;
            a12 = t2;
          }

          if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
            rotationX = rotation = 0;
            rotationY = 180 - rotationY;
          }

          scaleX = _round(Math.sqrt(a * a + b * b + c * c));
          scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
          angle = _atan2(a12, a22);
          skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
          perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }

        if (cache.svg) {
          t1 = target.getAttribute("transform");
          cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
          t1 && target.setAttribute("transform", t1);
        }
      }

      if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
          scaleX *= -1;
          skewX += rotation <= 0 ? 180 : -180;
          rotation += rotation <= 0 ? 180 : -180;
        } else {
          scaleY *= -1;
          skewX += skewX <= 0 ? 180 : -180;
        }
      }

      uncache = uncache || cache.uncache;
      cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
      cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
      cache.z = z + px;
      cache.scaleX = _round(scaleX);
      cache.scaleY = _round(scaleY);
      cache.rotation = _round(rotation) + deg;
      cache.rotationX = _round(rotationX) + deg;
      cache.rotationY = _round(rotationY) + deg;
      cache.skewX = skewX + deg;
      cache.skewY = skewY + deg;
      cache.transformPerspective = perspective + px;

      if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
      }

      cache.xOffset = cache.yOffset = 0;
      cache.force3D = _config.force3D;
      cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
      cache.uncache = 0;
      return cache;
    },
        _firstTwoOnly = function _firstTwoOnly(value) {
      return (value = value.split(" "))[0] + " " + value[1];
    },
        _addPxTranslate = function _addPxTranslate(target, start, value) {
      var unit = getUnit(start);
      return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
    },
        _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
      cache.z = "0px";
      cache.rotationY = cache.rotationX = "0deg";
      cache.force3D = 0;

      _renderCSSTransforms(ratio, cache);
    },
        _zeroDeg = "0deg",
        _zeroPx = "0px",
        _endParenthesis = ") ",
        _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
      var _ref = cache || this,
          xPercent = _ref.xPercent,
          yPercent = _ref.yPercent,
          x = _ref.x,
          y = _ref.y,
          z = _ref.z,
          rotation = _ref.rotation,
          rotationY = _ref.rotationY,
          rotationX = _ref.rotationX,
          skewX = _ref.skewX,
          skewY = _ref.skewY,
          scaleX = _ref.scaleX,
          scaleY = _ref.scaleY,
          transformPerspective = _ref.transformPerspective,
          force3D = _ref.force3D,
          target = _ref.target,
          zOrigin = _ref.zOrigin,
          transforms = "",
          use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

      if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD,
            a13 = Math.sin(angle),
            a33 = Math.cos(angle),
            cos;

        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
      }

      if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
      }

      if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
      }

      if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
      }

      if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
      }

      if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
      }

      if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
      }

      if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
      }

      if (scaleX !== 1 || scaleY !== 1) {
        transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
      }

      target.style[_transformProp] = transforms || "translate(0, 0)";
    },
        _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
      var _ref2 = cache || this,
          xPercent = _ref2.xPercent,
          yPercent = _ref2.yPercent,
          x = _ref2.x,
          y = _ref2.y,
          rotation = _ref2.rotation,
          skewX = _ref2.skewX,
          skewY = _ref2.skewY,
          scaleX = _ref2.scaleX,
          scaleY = _ref2.scaleY,
          target = _ref2.target,
          xOrigin = _ref2.xOrigin,
          yOrigin = _ref2.yOrigin,
          xOffset = _ref2.xOffset,
          yOffset = _ref2.yOffset,
          forceCSS = _ref2.forceCSS,
          tx = parseFloat(x),
          ty = parseFloat(y),
          a11,
          a21,
          a12,
          a22,
          temp;

      rotation = parseFloat(rotation);
      skewX = parseFloat(skewX);
      skewY = parseFloat(skewY);

      if (skewY) {
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
      }

      if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;

        if (skewX) {
          skewY *= _DEG2RAD;
          temp = Math.tan(skewX - skewY);
          temp = Math.sqrt(1 + temp * temp);
          a12 *= temp;
          a22 *= temp;

          if (skewY) {
            temp = Math.tan(skewY);
            temp = Math.sqrt(1 + temp * temp);
            a11 *= temp;
            a21 *= temp;
          }
        }

        a11 = _round(a11);
        a21 = _round(a21);
        a12 = _round(a12);
        a22 = _round(a22);
      } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
      }

      if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
      }

      if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
      }

      if (xPercent || yPercent) {
        temp = target.getBBox();
        tx = _round(tx + xPercent / 100 * temp.width);
        ty = _round(ty + yPercent / 100 * temp.height);
      }

      temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
      target.setAttribute("transform", temp);
      forceCSS && (target.style[_transformProp] = temp);
    },
        _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
      var cap = 360,
          isString = _isString(endValue),
          endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
          change = endNum - startNum,
          finalValue = startNum + change + "deg",
          direction,
          pt;

      if (isString) {
        direction = endValue.split("_")[1];

        if (direction === "short") {
          change %= cap;

          if (change !== change % (cap / 2)) {
            change += change < 0 ? cap : -cap;
          }
        }

        if (direction === "cw" && change < 0) {
          change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        } else if (direction === "ccw" && change > 0) {
          change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        }
      }

      plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
      pt.e = finalValue;
      pt.u = "deg";

      plugin._props.push(property);

      return pt;
    },
        _assign = function _assign(target, source) {
      for (var p in source) {
        target[p] = source[p];
      }

      return target;
    },
        _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
      var startCache = _assign({}, target._gsap),
          exclude = "perspective,force3D,transformOrigin,svgOrigin",
          style = target.style,
          endCache,
          p,
          startValue,
          endValue,
          startNum,
          endNum,
          startUnit,
          endUnit;

      if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);

        _removeProperty(target, _transformProp);

        target.setAttribute("transform", startValue);
      } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
      }

      for (p in _transformProps) {
        startValue = startCache[p];
        endValue = endCache[p];

        if (startValue !== endValue && exclude.indexOf(p) < 0) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
          startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
          endNum = parseFloat(endValue);
          plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
          plugin._pt.u = endUnit || 0;

          plugin._props.push(p);
        }
      }

      _assign(endCache, startCache);
    };

    _forEachName("padding,margin,Width,Radius", function (name, index) {
      var t = "Top",
          r = "Right",
          b = "Bottom",
          l = "Left",
          props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
        return index < 2 ? name + side : "border" + side + name;
      });

      _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
        var a, vars;

        if (arguments.length < 4) {
          a = props.map(function (prop) {
            return _get(plugin, prop, property);
          });
          vars = a.join(" ");
          return vars.split(a[0]).length === 5 ? a[0] : vars;
        }

        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function (prop, i) {
          return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
      };
    });

    var CSSPlugin = {
      name: "css",
      register: _initCore,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init(target, vars, tween, index, targets) {
        var props = this._props,
            style = target.style,
            startAt = tween.vars.startAt,
            startValue,
            endValue,
            endNum,
            startNum,
            type,
            specialProp,
            p,
            startUnit,
            endUnit,
            relative,
            isTransformRelated,
            transformPropTween,
            cache,
            smooth,
            hasPriority,
            inlineProps;
        _pluginInitted || _initCore();
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;

        for (p in vars) {
          if (p === "autoRound") {
            continue;
          }

          endValue = vars[p];

          if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
            continue;
          }

          type = typeof endValue;
          specialProp = _specialProps[p];

          if (type === "function") {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }

          if (type === "string" && ~endValue.indexOf("random(")) {
            endValue = _replaceRandom(endValue);
          }

          if (specialProp) {
            specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
          } else if (p.substr(0, 2) === "--") {
            startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
            endValue += "";
            _colorExp.lastIndex = 0;

            if (!_colorExp.test(startValue)) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
            }

            endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
            this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
            props.push(p);
            inlineProps.push(p, 0, style[p]);
          } else if (type !== "undefined") {
            if (startAt && p in startAt) {
              startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
              _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
              getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
              (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
            } else {
              startValue = _get(target, p);
            }

            startNum = parseFloat(startValue);
            relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);

            if (p in _propertyAliases) {
              if (p === "autoAlpha") {
                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                  startNum = 0;
                }

                inlineProps.push("visibility", 0, style.visibility);

                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
              }

              if (p !== "scale" && p !== "transform") {
                p = _propertyAliases[p];
                ~p.indexOf(",") && (p = p.split(",")[0]);
              }
            }

            isTransformRelated = p in _transformProps;

            if (isTransformRelated) {
              this.styles.save(p);

              if (!transformPropTween) {
                cache = target._gsap;
                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                smooth = vars.smoothOrigin !== false && cache.smooth;
                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                transformPropTween.dep = 1;
              }

              if (p === "scale") {
                this._pt = new PropTween(this._pt, cache, "scaleY", startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum || 0, _renderCSSProp);
                this._pt.u = 0;
                props.push("scaleY", p);
                p += "X";
              } else if (p === "transformOrigin") {
                inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                endValue = _convertKeywordsToPercentages(endValue);

                if (cache.svg) {
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                } else {
                  endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                  endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                  _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                }

                continue;
              } else if (p === "svgOrigin") {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);

                continue;
              } else if (p in _rotationalProperties) {
                _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

                continue;
              } else if (p === "smoothOrigin") {
                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

                continue;
              } else if (p === "force3D") {
                cache[p] = endValue;
                continue;
              } else if (p === "transform") {
                _addRawTransformPTs(this, endValue, target);

                continue;
              }
            } else if (!(p in style)) {
              p = _checkPropPrefix(p) || p;
            }

            if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
              startUnit = (startValue + "").substr((startNum + "").length);
              endNum || (endNum = 0);
              endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
              startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
              this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
              this._pt.u = endUnit || 0;

              if (startUnit !== endUnit && endUnit !== "%") {
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p in style)) {
              if (p in target) {
                this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
              } else {
                _missingPlugin(p, endValue);

                continue;
              }
            } else {
              _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
            }

            isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
            props.push(p);
          }
        }

        hasPriority && _sortPropTweensByPriority(this);
      },
      render: function render(ratio, data) {
        if (data.tween._time || !_reverting$1()) {
          var pt = data._pt;

          while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
          }
        } else {
          data.styles.revert();
        }
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
      },
      core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
      }
    };
    gsap.utils.checkPrefix = _checkPropPrefix;
    gsap.core.getStyleSaver = _getStyleSaver;

    (function (positionAndScale, rotation, others, aliases) {
      var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
        _transformProps[name] = 1;
      });

      _forEachName(rotation, function (name) {
        _config.units[name] = "deg";
        _rotationalProperties[name] = 1;
      });

      _propertyAliases[all[13]] = positionAndScale + "," + rotation;

      _forEachName(aliases, function (name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
      });
    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

    _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
      _config.units[name] = "px";
    });

    gsap.registerPlugin(CSSPlugin);

    var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
        TweenMaxWithCSS = gsapWithCSS.core.Tween;

    exports.Back = Back;
    exports.Bounce = Bounce;
    exports.CSSPlugin = CSSPlugin;
    exports.Circ = Circ;
    exports.Cubic = Cubic;
    exports.Elastic = Elastic;
    exports.Expo = Expo;
    exports.Linear = Linear;
    exports.Power0 = Power0;
    exports.Power1 = Power1;
    exports.Power2 = Power2;
    exports.Power3 = Power3;
    exports.Power4 = Power4;
    exports.Quad = Quad;
    exports.Quart = Quart;
    exports.Quint = Quint;
    exports.Sine = Sine;
    exports.SteppedEase = SteppedEase;
    exports.Strong = Strong;
    exports.TimelineLite = Timeline;
    exports.TimelineMax = Timeline;
    exports.TweenLite = Tween;
    exports.TweenMax = TweenMaxWithCSS;
    exports.default = gsapWithCSS;
    exports.gsap = gsapWithCSS;

    if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

  })));


  let canvas, renderer, scene, camera, dirLight, startTime;
  const elements = [];
  const elementTweens = [];
  const balls = [];
  const PERSPECTIVE = 1000;

  const FREE_FALL = (v0, time) => {
    const G = -9.8 * 2;
    return v0 + G * time;
  };

  function Ball (time) {
    const geometry = new THREE.SphereGeometry(1, 30, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0xcccccc });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.multiplyScalar(Math.random() * 5 + 5);

    this.mesh = mesh;
    this._v0 = Math.random() * 4 + 1;
    this.vel = new THREE.Vector3((Math.random()-.5) * 3, this._v0, 0);
    this.bounceFloorTime = 0;
    this._simulationTime = time;
    this.bounceds = [];
    this.simulate = (time) => {
      this.vel.setY(FREE_FALL(this._v0, time - this._simulationTime));
      this.mesh.position.add(this.vel);
    };
    this.bounce = (time) => {
      this.vel.multiply(new THREE.Vector3(1, -1, 1));
      this._v0 = this.vel.y * .5;
      this._simulationTime = time;
    };
    this.destroy = () => {
      this.mesh.material.dispose();
    };
    this.checkFloorCollision = (floorY) => {
      return (
        this.mesh.position.y - this.mesh.scale.y/2 <= floorY &&
        this.vel.y < 0
      );
    };
    this.checkElementCollision = (elementRect) => {
      const top = innerHeight/2 - elementRect.top;
      const left = -innerWidth/2 + elementRect.left;
      const right = left + elementRect.width;
      const {x, y} = this.mesh.position;
      return (
        y - this.mesh.scale.y/2 <= top &&
        y - this.mesh.scale.y/2 >= top - this.mesh.scale.y &&
        x > left && x < right &&
        this.vel.y < 0
      );
    };
    this.getEffect2Element = (elementRect) => {
      const left = -innerWidth/2 + elementRect.left;
      const width = elementRect.width;
      const center = left + width/2;
      return - (center - this.mesh.position.x) / width;
    };
  };

  const init = () => {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.right = 0;
    canvas.style.bottom = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "100";
    canvas.style.mixBlendMode = "exclusion";

    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(devicePixelRatio);
    renderer.setSize(innerWidth, innerHeight);
    renderer.setClearAlpha(0);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      (180 * (2 * Math.atan(innerHeight / 2 / PERSPECTIVE))) / Math.PI,
      innerWidth / innerHeight,
      0.001,
      2000,
    );
    camera.position.set(0, 0, PERSPECTIVE);
    camera.lookAt(0, 0, 0);
    dirLight = new THREE.DirectionalLight(0xffcccc, .8);
    dirLight.position.set(100, 100, 100);
    dirLight.lookAt(0, 0, 0);
    const ambLight = new THREE.AmbientLight(0xffffff, .3);
    scene.add(dirLight, ambLight);

    startTime = Date.now() / 1000;

    elements.push(...document.querySelectorAll("section"), ...document.querySelectorAll("article"));
    elementTweens.push(...elements.map(_ => null));

    window.addEventListener("click", onClick);
  };

  const onClick = (e) => {
    for(let i = 0; i < 10; i++) {
      const ball = new Ball(Date.now() / 1000 - startTime);
      ball.mesh.position.set(e.clientX - innerWidth/2, -e.clientY + innerHeight/2, 0);
      scene.add(ball.mesh);
      balls.push(ball);
    }
  };

  const render = () => {
    const time = Date.now() / 1000 - startTime;
    balls.forEach((b, i) => {
      b.simulate(time);
      if(b.bounceFloorTime < 5) {
        if(b.checkFloorCollision(-innerHeight/2)) {
          b.bounce(time);
          b.bounceFloorTime ++;
        } else {
          elements.forEach(element => {
            for(let i = 0; i < b.bounceds.length; i++) {
              if(element == b.bounceds[i]) return;
            }
            const elementRect = element.getBoundingClientRect();
            if(b.checkElementCollision(elementRect)) {
              b.bounce(time);
              b.bounceds.push(element);
              const effect = b.getEffect2Element(elementRect);
              if(elementTweens[i] != null) elementTweens[i].kill();
              elementTweens[i] = gsap.timeline()
                .to(element, {y: "+=2", rotate: `+=${effect * .5}`, duration: .1})
                .to(element, {y: 0, rotate: 0, duration: 1});
            }
          });
        }
      } else {
        if (b.checkFloorCollision(-innerHeight/2 - b.mesh.scale.y)) {
          b.destroy();
          scene.remove(b.mesh);
          balls.splice(i, 1);
        }
      }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  init();
  render();

})();
