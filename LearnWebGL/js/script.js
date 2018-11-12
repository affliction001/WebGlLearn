'use strict';

const width = document.querySelector('body').clientWidth;
const height = document.querySelector('body').clientHeight;

const canvas = document.getElementById('canvas');
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

function initWebGL(canvas) {
  let gl = null;

  try {
    // Попытаться получить стандартный контекст. Если не получится, попробовать получить экспериментальный.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}

  // Если мы не получили контекст GL, завершить работу
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
    gl = null;
  }

  return gl;
}

const gl = initWebGL(canvas);

if (gl) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
}
