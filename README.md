# 영화 엘리멘탈 포스터

## 결과

![mission02_Elemental Movie Poster](https://github.com/ingbin-github/js-homework/assets/128195013/89509fde-b254-444e-b739-123b705687c6)

## 활용

<img src="https://skillicons.dev/icons?i=html,css,js,git,github"/>

## 주제

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성합니다.
- [index.html 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/index.html)
- [main.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/main.js)

## 목표

- [x] 이벤트 위임 방식을 사용하여 클릭 이벤트를 거는 방법에 대해 학습합니다.
- [x] 클릭 시 포스터별 텍스트를 변경하는 방법에 대해 학습합니다.
- [x] 클릭 시 포스터별 배경 색상을 변경하는 방법에 대해 학습합니다.
- [x] 클릭 시 포스터 이미지와 대체텍스트를 변경하는 방법에 대해 학습합니다.
- [x] 클릭 시 포스터에서 오디오가 자동재생될 수 있는 방법에 대해 학습합니다.
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

## 기능

- 4개의 포스터를 클릭 시 해당 포스터의 텍스트, 이미지, 배경 색상, 오디오가 변경됩니다.
- 재사용 가능한 함수를 활용하여 클릭 시 변경되는 내용을 처리합니다.

  ### 텍스트 변경 함수

  ```js
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
  ```

  ### 이미지 변경 함수

  ```js
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
  ```

  ### 배경 색상 변경 함수

  ```js
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
  ```

  ### 오디오 변경 함수

  ```js
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
  ```

- 재사용 가능한 함수는 용도별로 파일을 분리합니다.
  - [getNode.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/lib/getNode.js)
  - [attr.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/lib/attr.js)
  - [bindEvent.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/lib/bindEvent.js)
  - [class.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/lib/class.js)
  - [setSlide.js 바로가기](https://github.com/ingbin-github/js-homework/blob/main/mission02/poster/client/js/lib/setSlide.js)
