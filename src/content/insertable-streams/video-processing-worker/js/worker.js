/*
 *  Copyright (c) 2021 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
importScripts('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js')
importScripts('../../video-processing/js/webgl-background-blur.js');
importScripts('../../video-processing/js/webgpu-background-blur.js');
importScripts('../../video-processing/js/canvas-transform.js');
importScripts('../../video-processing/js/simple-transforms.js');
importScripts('../../video-processing/js/webcodec-transform.js');
importScripts('../../video-processing/js/webgl-transform.js/');
importScripts('../../video-processing/js/webnn-deeplabv3.js');
importScripts('../../../../js/third_party/numpy.js');

'use strict';

let frameTransform = null;

async function transform(frame, controller) {
  if (frameTransform) {
    await frameTransform.transform(frame, controller);
  }
}

onmessage = async (event) => {
  const {operation, transformType} = event.data;
  if (operation === 'start') {
    switch (transformType) {
      case 'webgl':
        frameTransform = new WebGLTransform();
        break;
      case 'webgl-background-blur':
        frameTransform = new WebGLBackgroundBlurTransform();
        break;
      case 'webgpu-background-blur':
        frameTransform = new WebGPUBackgroundBlurTransform();
        break;
      case 'canvas2d':
        frameTransform = new CanvasTransform();
        break;
      case 'drop':
        // Defined in simple-transforms.js.
        frameTransform = new DropTransform();
        break;
      case 'noop':
        // Defined in simple-transforms.js.
        frameTransform = new NullTransform();
        break;
      case 'delay':
        // Defined in simple-transforms.js.
        frameTransform = new DelayTransform();
        break;
      case 'webcodec':
        // Defined in webcodec-transform.js
        frameTransform = new WebCodecTransform();
        break;
      default:
        throw new Error(`unknown transform ${transformType}`);
        break;
    }
    frameTransform.init();
    const {readable, writable} = event.data;
      readable
          .pipeThrough(new TransformStream({transform}))
          .pipeTo(writable);
  } else if (operation === 'stop') {
    frameTransform.destroy();
    frameTransform = null;
  } else {
    throw new Error(`unknown operation ${operation}`);
  }
};
