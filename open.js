(() => {
  const w = 300;
  const h = 150;
  const headerH = 56;
  const trueH = h + headerH;
  const vw = screen.width;
  const vh = screen.height;
  const xLen = Math.floor(vw/w);
  const yLen = Math.floor(vh/trueH);
  for(let x = 0; x < xLen; x++) {
    for(let y = 0; y < yLen; y++) {
      const left = w * x + (vw % w) * (x / (xLen - 1));
      const top = trueH * y + (vh % trueH) * (y / (yLen - 1));
      const win = window.open("https://google.com", "_blank", `width=${w},height=${h},left=${left},top=${top}`);
      setTimeout(() => win.close(), (yLen * x + y) * 1000);
    }
  }
})()