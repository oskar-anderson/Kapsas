export default class Template {
    getSettings;
    getKeyframes;
    getScript;

    constructor(getSettingsFunc, getKeyframesFunc, getScriptFunc) {
      this.getSettings = getSettingsFunc;
      this.getKeyframes = getKeyframesFunc;
      this.getScript = getScriptFunc;
    }

  }