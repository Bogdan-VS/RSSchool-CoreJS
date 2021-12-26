const snowmax = 40;
const snowcolor = new Array('#b9dff5', '#7fc7ff', '#7fb1ff', '#7fc7ff', '#b9dff5');
const snowtype = new Array('Times');
const snowletter = '&#10052;';
const sinkspeed = 0.4;
const snowmaxsize = 20;
const snowminsize = 5;
const snowingzone = 3;

// const treePage = document.getElementById('tree-page');
const toysPage = document.getElementById('toys-page');
const snowBtn = document.querySelector('.snow');
const christmasBg = document.querySelector('.christmas-bg-current');
let snowFlag = false;
let init = true;

const snow: any[] = new Array();
let marginbottom: number;
let marginright: number;
let timer: any;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
const randommaker  = (range: number) => {
  const rand: number = Math.floor(range * Math.random());
  return rand;
}
const initsnow = () => {

  if (init) {
    snowFlag = true;
    init = false;
    marginbottom = document.documentElement.clientHeight + 50;
    marginright = document.body.clientWidth - 15;
    let snowsizerange = snowmaxsize - snowminsize;
    for (let i: number = 0; i <= snowmax; i++) {
      crds[i] = 0;
      lftrght[i] = Math.random() * 15;
      x_mv[i] = 0.03 + Math.random() / 10;
      snow[i] = document.getElementById('s' + i);
      snow[i].classList.add('snow-item');
      snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
      snow[i].size = randommaker(snowsizerange) + snowminsize;
      snow[i].style.fontSize = snow[i].size + 'px';
      snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
      snow[i].style.zIndex = '1000';
      snow[i].sink = (sinkspeed * snow[i].size) / 5;
      snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4;
      snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
      snow[i].style.left = snow[i].posx + 'px';
      snow[i].style.top = snow[i].posy + 'px';
      christmasBg.append(snow[i])
    }
  }

  movesnow();
}

const movesnow = () => {
  for (let i: number = 0; i <= snowmax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
    snow[i].style.top = snow[i].posy + 'px';

    if (
      snow[i].posy >= marginbottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
    ) {
      snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4;
      snow[i].posy = 0;
    }
  }
  timer = setTimeout(() => {
    movesnow();
  }, 50);
}

for (let i: number = 0; i <= snowmax; i++) {
  document.body.insertAdjacentHTML(
    'beforeend',
    "<span id='s" + i + "' style='user-select:none;position:fixed;top:-" + snowmaxsize + "'>" + snowletter + '</span>'
  );
}

window.onload = initsnow;

snowBtn.addEventListener('click', (event) => {
  const snowItems = document.querySelectorAll('.snow-item');
  OnOffSnow(snowItems);
})

const OnOffSnow = (items: NodeListOf<Element>) => {
  if (snowFlag) {
    snowFlag = false;
    clearTimeout(timer);
    items.forEach(element => {
      (element as any).style.display = 'none';
    });
  } else {
    snowFlag = true;
    initsnow();
    items.forEach(element => {
      (element as any).style.display = 'block';
    });
  }
}

// treePage.addEventListener('click', () => {
//   const snowItems = document.querySelectorAll('.snow-item');
//   OnOffSnow(snowItems);
// })

toysPage.addEventListener('click', () => {
  const snowItems = document.querySelectorAll('.snow-item');
  snowFlag = false;
  clearTimeout(timer);
  snowItems.forEach(element => {
    (element as any).style.display = 'none';
  });
})
// window.onload = initsnow;
