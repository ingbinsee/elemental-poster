/* ------------------------------- getAttr 함수 ------------------------------- */

function getAttr(node, prop) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new TypeError(
      'getAttr 함수의 두 번째 인자는 문자 타입이어야 합니다.'
    );
  }
  return node.getAttribute(prop);
}

/* ------------------------------- setAttr 함수 ------------------------------- */

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title' && prop !== 'autoplay') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

/* --------------------------------- attr 함수 -------------------------------- */

function attr(node, prop, value) {
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
