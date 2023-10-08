(() => {
  /* config定義 ----------- */
  const Mode = { autoPilot: 1, idle: 2, parking: 3, home: 4 };
  Object.freeze(Mode);
  const Action = { forward: "ArrowUp", back: "ArrowDown", panLeft: "ArrowLeft", panRight: "ArrowRight", raise: { key: "R", code: "KeyR" }, lower: { key: "F", code: "KeyF" } };
  Object.freeze(Action);
  /* config定義 ----------- */


  /* 変数定義 -------------- */
  let mode = Mode.home;
  let controlBtn, batteryTxt;
  let autoPilotRotationTimer, autoPilotForwardTimer;
  const exitBtn = document.getElementById("exitDockMessage");
  const parkBtn = document.getElementById("parkButton");
  const batteryBtn = document.getElementById("sessionBatteryButton");
  const forwardBtn = document.getElementById("driveControlsForward");
  const backwardBtn = document.getElementById("driveControlsBackward");
  const leftBtn = document.getElementById("driveControlsLeft");
  const rightBtn = document.getElementById("driveControlsRight");
  const mousedownEvent = new Event('mousedown', {
    'bubbles': true,
    'cancelable': true
  });
  const mouseupEvent = new Event('mouseup', {
    'bubbles': true,
    'cancelable': true
  });
  /* 変数定義 -------------- */


  /* 関数定義 -------------- */
  const getBattery = () => Number(batteryBtn.title.replace(/(.*)%/, "$1"));
  const getIsDocking = () => exitBtn.style.display != "none";
  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const createUI = () => {
    controlBtn = document.createElement("button");
    controlBtn.textContent = "AUTOPILOT";
    controlBtn.style.display = "inline-block";
    controlBtn.style.width = "150px";
    controlBtn.style.height = "50px";
    controlBtn.style.position = "absolute";
    controlBtn.style.right = "20px";
    controlBtn.style.bottom = "20px";
    controlBtn.style.zIndex = 100;
    controlBtn.style.fontSize = "20px";
    controlBtn.style.borderRadius = "25px";
    controlBtn.style.borderRadius = 2;
    controlBtn.style.border = "2px solid";
    controlBtn.style.background = "black";

    batteryTxt = document.createElement("p");
    batteryTxt.textContent = "-1%";
    batteryTxt.style.display = "inline-block";
    batteryTxt.style.width = "150px";
    batteryTxt.style.height = "50px";
    batteryTxt.style.position = "absolute";
    batteryTxt.style.right = "200px";
    batteryTxt.style.bottom = "20px";
    batteryTxt.style.zIndex = 100;
    batteryTxt.style.fontSize = "20px";

    document.body.appendChild(controlBtn);
    document.body.appendChild(batteryTxt);
  };

  const checkBattery = () => {
    const btr = getBattery();
    batteryTxt.textContent = `${btr}%`;
  };

  const startAutoPilot = (e) => {
    if (e) e.stopPropagation();
    console.log("[AUTOPILOT]: Start auto pilot");
    if (mode == Mode.home && getIsDocking()) {
      exitBtn.click();
      console.log("[AUTOPILOT]: Exit dock");
    }

    const rotate = (time, callback) => {
      console.log("[AUTOPILOT]: Start Rotating ...");
      const btn = Math.random() < .5 ? leftBtn : rightBtn;
      btn.dispatchEvent(mousedownEvent);
      if (autoPilotRotationTimer != null) clearTimeout(autoPilotRotationTimer);
      autoPilotRotationTimer = setTimeout(() => {
        console.log("[AUTOPILOT]: End Rotating ...");
        btn.dispatchEvent(mouseupEvent);
        callback(getRandomNumber(5000, 10000), rotate);
      }, time);
    };

    const goForwardBackward = (time, callback) => {
      console.log("[AUTOPILOT]: Start Going ...");
      const btn = Math.random() < .8 ? forwardBtn : backwardBtn;
      btn.dispatchEvent(mousedownEvent);
      if (autoPilotForwardTimer != null) clearTimeout(autoPilotForwardTimer);
      autoPilotForwardTimer = setTimeout(() => {
        console.log("[AUTOPILOT]: End Going ...");
        btn.dispatchEvent(mouseupEvent);
        callback(getRandomNumber(5000, 10000), goForwardBackward);
      }, time);
    };

    controlBtn.textContent = "STOP";
    mode = Mode.autoPilot;

    controlBtn.removeEventListener("click", startAutoPilot);
    window.addEventListener("click", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutoPilotは強制終了 */
    window.addEventListener("mousedown", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutoPilotは強制終了 */

    rotate(5000, goForwardBackward);
  };

  const endAutoPilot = (e) => {
    if (e) e.stopPropagation();
    console.log("[AUTOPILOT]: End auto pilot");
    if (autoPilotRotationTimer != null) clearTimeout(autoPilotRotationTimer);
    if (autoPilotForwardTimer != null) clearTimeout(autoPilotForwardTimer);

    controlBtn.textContent = "AUTOPILOT";
    mode = Mode.freeze;

    controlBtn.addEventListener("click", startAutoPilot);
    window.removeEventListener("click", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutobPilotは強制終了 */
    window.removeEventListener("mousedown", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutoPilotは強制終了 */
  };
  /* 関数定義 -------------- */


  /* 初期化 ---------------- */
  const init = () => {
    createUI();
    setInterval(checkBattery, 10000);
    checkBattery();
    controlBtn.addEventListener("click", startAutoPilot);
  };

  init();
  /* 初期化 ---------------- */

})();