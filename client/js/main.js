const body = getNode('body');
const nickName = getNode('.nickName');
const navigation = getNode('.nav');
const image = getNode('.visual img');
const audio = getNode('.visual audio');
const list = getNodes('li');

function handleSlider(e) {
  const li = e.target.closest('li');
  if (!li) return;

  const index = attr(li, 'data-index');

  list.forEach((li) => removeClass(li, 'is-active'));

  addClass(li, 'is-active');

  setNameText(nickName, `${data[index - 1].name}`);

  setImage(
    image,
    `./assets/${data[index - 1].name.toLowerCase()}.jpeg`,
    `${data[index - 1].alt}`
  );

  setAudio(
    audio,
    `./assets/audio/${data[index - 1].name.toLowerCase()}.m4a`,
    true
  );

  setBgColor(
    body,
    'to bottom',
    data[index - 1].color[0],
    data[index - 1].color[1]
  );
}

bindEvent(navigation, 'click', handleSlider);
