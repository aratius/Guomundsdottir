javascript: (() => {

  /* 変数定義 ------------------ */
  let controlBtn, stateTxt, container;
  const exitBtn = document.getElementById("exitDockMessage");
  const parkBtn = document.getElementById("parkButton");
  const batteryBtn = document.getElementById("sessionBatteryButton");
  const singleActionEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  /* 変数定義 ------------------ */


  /* 関数定義 -------------- */
  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
  /* 関数定義 -------------- */


  /* bundle.jsから --------- */
  const __deployKickstands = (() => deployKickstands)();
  const __retractKickstands = (() => retractKickstands)();
  const __kickstandState = (() => kickstandState)();
  const __kDRCommandTargetDrive = (() => kDRCommandTargetDrive)();
  const __sendCommandWithData = (() => sendCommandWithData)();
  const __drawDepth = (() => drawDepth)();
  /* bundle.jsから --------- */


  /* クラス定義 ------------- */
  class Double3 {

    static get states() { return { autoPilot: 1, idle: 2, parking: 3, home: 4 }; }
    static get actions() { return { forward: 38, backward: 40, panLeft: 37, panRight: 39, up: 82, down: 70 }; }
    static get actionTypes() { return { go: 1, rotate: 2/*, upDown: 3*/ }; }
    static createActionEvent(event, keyCode) {
      const keyEvent = event == "start" ? "keydown" : event == "end" ? "keyup" : "";
      if (keyEvent == "") console.warn("##### Unknown event #####");
      return new KeyboardEvent(keyEvent, {
        keyCode,
        bubbles: true,
        cancelable: true,
      });
    };

    state = Double3.states.home;
    _actionTimer;
    _currentActionCode;
    _dockPosition = { x: 1.0652568100820683, y: 0.19972206896042588 };

    get battery() {
      return Number(batteryBtn.title.replace(/(.*)%/, "$1"));
    }
    get isDocking() {
      return exitBtn.style.display != "none";
    }
    get isParking() {
      return kickstandState == kDRKickstand_stateDeployed;
    }
    get stateStr() {
      return Object.keys(Double3.states).find(k => Double3.states[k] == this.state);
    }
    get actionStr() {
      return Object.keys(Double3.actions).find(k => Double3.actions[k] == this._currentActionCode) || "---";
    }
    get dockId() {
      console.log("__drawDepth");
      console.log(__drawDepth);
      const objects = __drawDepth.gp.scene.children;
      for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        console.log(object.name, object);
        if (!("name" in object)) continue;
        if (object.name.indexOf("dock_") >= 0) {
          console.log("find", parseInt(object.name.replace("dock_", "")));
          return parseInt(object.name.replace("dock_", ""));
        }
      }
      return -1;
    }

    constructor() { }

    startAction(actionCode) {
      if (this._currentActionCode != null) this.endAction();  /* とりあえず同時にできるのは */

      const keyEvent = Double3.createActionEvent("start", actionCode);
      this._currentActionCode = actionCode;
      document.body.dispatchEvent(keyEvent);
    }

    endAction() {
      const keyEvent = Double3.createActionEvent("end", this._currentActionCode);
      document.body.dispatchEvent(keyEvent);
      this._currentActionCode = null;
    }

    exitDock() {
      exitBtn.dispatchEvent(singleActionEvent);
    }

    startAutoPilot() {
      console.log("[AUTOPILOT]: Start auto pilot");
      if (this._actionTimer != null) clearTimeout(this._actionTimer);
      if (this.state == Double3.states.home && this.isDocking) {
        exitDock();
        console.log("[AUTOPILOT]: Exit dock");
        /* TDOO: exitボタン出てない時は後退したら抜けられる, 非同期でやらないと */
      }
      this.state = Double3.states.autoPilot;

      const action = (type, time) => {
        if (this._actionTimer != null) clearTimeout(this._actionTimer);

        const actionCode = type == Double3.actionTypes.go ?
          Math.random() < .5 ? Double3.actions.forward : Double3.actions.backward :
          type == Double3.actionTypes.rotate ?
            Math.random() < .5 ? Double3.actions.panLeft : Double3.actions.panRight :
            type == Double3.actionTypes.upDown ?
              Math.random() < .5 ? Double3.actions.up : Double3.actions.down :
              null;

        const actionKey = Object.keys(Double3.actionTypes).find(k => Double3.actionTypes[k] == type);

        this.startAction(actionCode);
        console.log("[AUTOPILOT]: Start action " + actionKey);

        this._actionTimer = setTimeout(() => {
          if (this._actionTimer != null) clearTimeout(this._actionTimer);
          this.endAction();
          console.log("[AUTOPILOT]: End action " + actionKey);
          /* インターバル */
          const intervalTime = getRandomNumber(1000, 10000);
          this._actionTimer = setTimeout(() => {
            /* 次のアクションを今回のアクション以外から選択 */
            const actionTypesCopied = { ...Double3.actionTypes };
            delete actionTypesCopied[actionKey];
            const nextActionTypeArr = Object.keys(actionTypesCopied);
            const nextActionType = Double3.actionTypes[nextActionTypeArr[Math.floor(Math.random() * nextActionTypeArr.length)]];
            const actionTime = getRandomNumber(5000, 10000);
            action(nextActionType, actionTime);
          }, intervalTime);
        }, time);
      };

      const actionType = Double3.actionTypes.go;
      const t = getRandomNumber(5000, 10000);
      action(actionType, t);
    }

    endAutoPilot() {
      console.log("[AUTOPILOT]: End auto pilot");
      if (this._actionTimer != null) clearTimeout(this._actionTimer);
      this.state = Double3.states.idle;
      this.endAction();
    }

    park() {
      __deployKickstands();
      this.state = Double3.states.parking;
    }

    unPark() {
      __retractKickstands();
      this.state = Double3.states.idle;
    }

    goDock() {
      /* 家に帰る処理 */
      __sendCommandWithData(__kDRCommandTargetDrive, this._dockPosition);
    }

    dock() {
      /* TODO: 帰れたらdockのボタンを押したいがcanvas内にボタンがある */
      if (this.dockId < 0) return;
      /* NOTE: 3Dモデルにホバーがないと動かない */
      __sendCommandWithData(__kDRCommandTargetDrive, { dockId: this.dockId });

      /* TODO: 非同期でステート戻せたらいいんだけど... */
      /* this.state = Double3.states.home; */
    }

    setDockPosition(p) {
      if (!("x" in p) || !("y" in p)) {
        console.warn("##### Unexpected position #####");
        return;
      }
      this._dockPosition = p;
    }

    _exec(event) {
      document.body.dispatchEvent(event);
    }

  }
  /* クラス定義 ------------- */


  /* 初期化 ---------------- */
  const init = () => {

    const double3 = new Double3();
    window.double3 = double3;

    const createUI = () => {
      container = document.createElement("div");
      container.style.position = "absolute";
      container.style.right = "20px";
      container.style.bottom = "20px";
      container.style.display = "flex";
      container.style.flexDirection = "row";
      container.style.justifyContent = "flex-end";
      container.style.alignItems = "center";
      container.style.zIndex = 100;

      controlBtn = document.createElement("button");
      controlBtn.textContent = "AUTOPILOT";
      controlBtn.style.display = "inline-block";
      controlBtn.style.width = "150px";
      controlBtn.style.height = "50px";
      controlBtn.style.fontSize = "20px";
      controlBtn.style.borderRadius = "25px";
      controlBtn.style.borderRadius = 2;
      controlBtn.style.border = "2px solid";
      controlBtn.style.background = "transparent";

      stateTxt = document.createElement("p");
      stateTxt.style.display = "inline-block";
      stateTxt.style.marginRight = "20px";
      stateTxt.style.fontSize = "20px";

      container.appendChild(stateTxt);
      container.appendChild(controlBtn);
      document.body.appendChild(container);
    };

    const checkState = () => {
      stateTxt.textContent = `battery:${double3.battery}%, state:${double3.stateStr}, action:${double3.actionStr}`;
      if (double3.battery < 20) {
        /* TDOO: 自動で帰宅したい */
      }
    };

    const startAutoPilot = (e) => {
      if (e) e.stopPropagation();
      double3.startAutoPilot();
      controlBtn.textContent = "STOP";
      controlBtn.removeEventListener("click", startAutoPilot);
      window.addEventListener("click", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutoPilotは強制終了 */
    };

    const endAutoPilot = (e) => {
      if (e) e.stopPropagation();
      double3.endAutoPilot();
      controlBtn.textContent = "AUTOPILOT";
      controlBtn.addEventListener("click", startAutoPilot);
      window.removeEventListener("click", endAutoPilot);  /* いかなるクリックイベントでも発生したらAutobPilotは強制終了 */
    };

    createUI();
    setInterval(checkState, 1000);
    checkState();
    controlBtn.addEventListener("click", startAutoPilot);
  };

  init();
  /* 初期化 ---------------- */

})();