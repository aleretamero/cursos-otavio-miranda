function ePaisagem(l, a) {
  if (l > a) {
    return true;
  } else {
    return false;
  }
}

console.log(ePaisagem(720, 720));

const ePaisagem2 = (l, a) => l > a;

console.log(ePaisagem2(1080, 720));
