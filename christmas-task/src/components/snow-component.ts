import { snowSettings } from "../modules/const";
import { snowProperties } from "../modules/const";

const toysPage = document.getElementById('toys-page');
const snowBtn = document.querySelector('.snow');
const christmasBg = document.querySelector('.christmas-bg-current');

const randommaker = (range: number) => {
  const rand: number = Math.floor(range * Math.random());
  return rand;
}

const initsnow = () => {
  if (snowProperties.init) {
    snowProperties.snowFlag = true;
    snowProperties.init = false;
    snowProperties.marginBottom = document.documentElement.clientHeight + 50;
    snowProperties.marginRight = document.body.clientWidth - 15;
    let snowsizerange = snowSettings.snowMaxSize - snowSettings.snowMinSize;

    for (let i: number = 0; i <= snowSettings.snowMax; i++) {
      snowProperties.crds[i] = 0;
      snowProperties.leftRight[i] = Math.random() * 15;
      snowProperties.xMv[i] = 0.03 + Math.random() / 10;
      snowSettings.snow[i] = document.getElementById('s' + i);
      snowSettings.snow[i].classList.add('snow-item');
      snowSettings.snow[i].style.fontFamily = snowSettings.snowType[randommaker(snowSettings.snowType.length)];
      snowSettings.snow[i].size = randommaker(snowsizerange) + snowSettings.snowMinSize;
      snowSettings.snow[i].style.fontSize = snowSettings.snow[i].size + 'px';
      snowSettings.snow[i].style.color = snowSettings.snowColor[randommaker(snowSettings.snowColor.length)];
      snowSettings.snow[i].style.zIndex = '1000';
      snowSettings.snow[i].sink = (snowSettings.sinkSpeed * snowSettings.snow[i].size) / 5;
      snowSettings.snow[i].posx = randommaker(snowProperties.marginRight / 2 - snowSettings.snow[i].size) + snowProperties.marginRight / 4;
      snowSettings.snow[i].posy = randommaker(2 * snowProperties.marginBottom - snowProperties.marginBottom - 2 * snowSettings.snow[i].size);
      snowSettings.snow[i].style.left = snowSettings.snow[i].posx + 'px';
      snowSettings.snow[i].style.top = snowSettings.snow[i].posy + 'px';
      christmasBg.append(snowSettings.snow[i])
    }
  }

  movesnow();
}

const movesnow = () => {
  for (let i: number = 0; i <= snowSettings.snowMax; i++) {
    snowProperties.crds[i] += snowProperties.xMv[i];
    snowSettings.snow[i].posy += snowSettings.snow[i].sink;
    snowSettings.snow[i].style.left = snowSettings.snow[i].posx + snowProperties.leftRight[i] * Math.sin(snowProperties.crds[i]) + 'px';
    snowSettings.snow[i].style.top = snowSettings.snow[i].posy + 'px';
    const compareSnowPosY = snowSettings.snow[i].posy >= snowProperties.marginBottom - 2 * snowSettings.snow[i].size;
    const compareSnowStyleLeft = parseInt(snowSettings.snow[i].style.left) > snowProperties.marginRight - 3 * snowProperties.leftRight[i];

    if (compareSnowPosY || compareSnowStyleLeft) {
      snowSettings.snow[i].posx = randommaker(snowProperties.marginRight / 2 - snowSettings.snow[i].size) + snowProperties.marginRight / 4;
      snowSettings.snow[i].posy = 0;
    }
  }
  snowProperties.timer = setTimeout(() => {
    movesnow();
  }, 50);
}

for (let i: number = 0; i <= snowSettings.snowMax; i++) {
  document.body.insertAdjacentHTML(
    'beforeend',
    "<span id='s" + i + "' style='user-select:none;position:fixed;top:-" + snowSettings.snowMaxSize + "'>" + snowSettings.snowLetter + '</span>'
  );
}

window.onload = initsnow;

snowBtn.addEventListener('click', () => {
  const snowItems: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.snow-item');
  OnOffSnow(snowItems);
})

const OnOffSnow = (items: NodeListOf<HTMLTemplateElement>) => {
  if (snowProperties.snowFlag) {
    addClearTimeout(items);
  } else {
    snowProperties.snowFlag = true;
    initsnow();
    items.forEach(element => {
      (element as any).style.display = 'block';
    });
  }
}

toysPage.addEventListener('click', () => {
  const snowItems: NodeListOf<HTMLTemplateElement> = document.querySelectorAll('.snow-item');
  addClearTimeout(snowItems);
})

const addClearTimeout = (items:NodeListOf<HTMLTemplateElement>) => {
  snowProperties.snowFlag = false;
  clearTimeout(snowProperties.timer);
  items.forEach(element => {
    element.style.display = 'none';
  });
}
