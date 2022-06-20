export default class Template {
    getSettings;
    getKeyframes;
    getScript;
    textArr;

    constructor(getSettingsFunc, getKeyframesFunc, getScriptFunc, textArr) {
      this.getSettings = getSettingsFunc;
      this.getKeyframes = getKeyframesFunc;
      this.getScript = getScriptFunc;
      this.textArr = textArr;
    }

  }