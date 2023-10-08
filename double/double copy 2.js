(() => {
  /* config定義 ----------- */
  const Mode = { autoPilot: 1, idle: 2, parking: 3, home: 4 };
  Object.freeze(Mode);
  const Action = { forward: 38, back: 40, panLeft: 37, panRight: 39, up: 82, down: 70 };
  Object.freeze(Action);
  /* config定義 ----------- */


  /* 変数定義 -------------- */
  let mode = Mode.home;
  let controlBtn, batteryTxt;
  let autoPilotRotationTimer, autoPilotForwardTimer;
  const exitBtn = document.getElementById("exitDockMessage");
  const parkBtn = document.getElementById("parkButton");
  const batteryBtn = document.getElementById("sessionBatteryButton");
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
    console.log(btr);
    batteryTxt.textContent = `${btr}%`;
  };

  const startAutoPilot = (e) => {
    if (e) e.stopPropagation();
    console.log("[AUTOPILOT]: Start auto pilot");
    if (mode == Mode.home && getIsDocking()) {
      exitBtn.click();
      console.log("[AUTOPILOT]: Exit dock");
    }

    const createKeyEvent = (event, keyCode) => {
      return new KeyboardEvent(event, {
        keyCode,
        bubbles: true,
        cancelable: true,
      });
    };

    const rotate = (time, callback) => {
      const keyCode = Math.random() < .5 ? Action.panLeft : Action.panRight;
      document.body.dispatchEvent(createKeyEvent("keydown", keyCode));
      console.log(createKeyEvent("keydown", keyCode));
      console.log("[AUTOPILOT]: Start Rotating ...");
      if (autoPilotRotationTimer != null) clearTimeout(autoPilotRotationTimer);
      autoPilotRotationTimer = setTimeout(() => {
        console.log("[AUTOPILOT]: End Rotating ...");
        document.body.dispatchEvent(createKeyEvent("keyup", keyCode));
        callback(getRandomNumber(5000, 10000), rotate);
      }, time);
    };

    const goForwardBack = (time, callback) => {
      const keyCode = Math.random() < .8 ? Action.forward : Action.back;
      document.body.dispatchEvent(createKeyEvent("keydown", keyCode));
      console.log("[AUTOPILOT]: Start Going ...");
      if (autoPilotForwardTimer != null) clearTimeout(autoPilotForwardTimer);
      autoPilotForwardTimer = setTimeout(() => {
        console.log("[AUTOPILOT]: End Going ...");
        document.body.dispatchEvent(createKeyEvent("keyup", keyCode));
        callback(getRandomNumber(5000, 10000), goForwardBack);
      }, time);
    };

    controlBtn.textContent = "STOP";
    mode = Mode.autoPilot;

    controlBtn.removeEventListener("click", startAutoPilot);
    window.addEventListener("click", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutoPilotは強制終了 */

    rotate(5000, goForwardBack);
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
  };
  /* 関数定義 -------------- */


  /* 初期化 ---------------- */
  const init = () => {
    createUI();
    setInterval(checkBattery, 10000);
    checkBattery();
    controlBtn.addEventListener("click", startAutoPilot);
    window.addEventListener("keydown", (e) => {
      console.log("keydown event " + e.target);
    });
  };

  init();
  /* 初期化 ---------------- */

})();