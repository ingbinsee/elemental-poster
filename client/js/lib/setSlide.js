/* ----------------------------- setNameText 함수 ----------------------------- */

function setNameText(node, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof value !== 'string') {
    throw new TypeError(
      'setNameText 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (!value) {
    SyntaxError('setNameText 함수의 두 번째 인수는 필수값입니다.');
  }

  node.textContent = value;
}

/* ------------------------------- setImage 함수 ------------------------------ */

function setImage(node, src, alt) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof src !== 'string' || typeof alt !== 'string') {
    throw new TypeError(
      'setImage 함수의 두 번째 인수와 세번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (!/\bjpg|jpeg|png|svg|gif\b/g.test(src)) {
    throw new TypeError(
      'setImage 함수의 두 번째 인수는 jpg, jpeg, png, svg, gif 확장자여야 합니다.'
    );
  }

  if (!alt) {
    throw new SyntaxError('setImage 함수의 세 번째 인수는 필수값입니다.');
  }

  attr(node, 'src', src);
  attr(node, 'alt', alt);
}

/* ------------------------------- setAudio 함수 ------------------------------ */

function setAudio(node, src, boolean) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof src !== 'string') {
    throw new TypeError(
      'setAudio 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (!/\bm4a|mp3|flac|wav\b/g.test(src)) {
    throw new TypeError(
      'setAudio 함수의 두 번째 인수는 m4a, mp3, flac, wav 확장자여야 합니다.'
    );
  }

  if (typeof boolean !== 'boolean') {
    throw new TypeError(
      'setAudio 함수의 세번째 인수는 불리언 타입이어야 합니다.'
    );
  }

  attr(node, 'src', src);
  attr(node, 'autoplay', boolean);
}

/* ------------------------------ setBgColor 함수 ----------------------------- */

function setBgColor(node, angle, colorA, colorB = '#000') {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof angle !== 'string') {
    throw new TypeError(
      'setBgColor 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  node.style.background = `linear-gradient(${angle}, ${colorA}, ${colorB})`;
}
