/*
 *  Copyright (c) 2021 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

/* global MediaStreamTrackProcessor, MediaStreamTrackGenerator */
if (typeof MediaStreamTrackProcessor === 'undefined' ||
    typeof MediaStreamTrackGenerator === 'undefined') {
  alert(
      'Your browser does not support the experimental MediaStreamTrack API ' +
      'for Insertable Streams of Media. See the note at the bottom of the ' +
      'page.');
}

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const localVideo = document.getElementById('localVideo');
const croppedVideo = document.getElementById('croppedVideo');
const transformSelector = document.getElementById('transformSelector');

const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
const updateFPS = (now, metadata) => {
  stats.update();
  croppedVideo.requestVideoFrameCallback(updateFPS);
};
croppedVideo.requestVideoFrameCallback(updateFPS);

const worker = new Worker('./js/worker.js', {name: 'Video processing worker'});
worker.addEventListener('message', function handleMsgFromWorker(msg) {
  if (msg.data.error) {
    alert(msg.data.error);
  }
});
let stream = null;
startButton.addEventListener('click', async () => {
  stream = await navigator.mediaDevices.getUserMedia({audio: false, video: true});
  localVideo.srcObject = stream;

  const [track] = stream.getTracks();
  const processor = new MediaStreamTrackProcessor({track});
  const {readable} = processor;

  const generator = new MediaStreamTrackGenerator({kind: 'video'});
  const {writable} = generator;
  croppedVideo.srcObject = new MediaStream([generator]);

  worker.postMessage({
    operation: 'start',
    transformType: transformSelector.value,
    readable,
    writable,
  }, [readable, writable]);
  stopButton.disabled = false;
  startButton.disabled = true;
});

stopButton.addEventListener('click', async () => {
  localVideo.pause();
  localVideo.srcObject = null;
  croppedVideo.pause();
  croppedVideo.srcObject = null;
  if (stream) {
    stream.getTracks().forEach(t => t.stop());
  }
  worker.postMessage({operation: 'stop'});
  stopButton.disabled = true;
  startButton.disabled = false;
});
