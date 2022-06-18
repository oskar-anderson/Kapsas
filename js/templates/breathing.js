import BaseTemplate from "./baseTemplate.js";

export default class Breathing {
    GetStyle() {
        let text = `${new BaseTemplate().GetStyle()}
        
.char {  /* This class name is added by splitting.js */
  animation: breathing var(--animation-duration) infinite both; /* breathe is defined in js */
  animation-delay: calc((var(--char-index) + 1) * var(--animation-delay));
  animation-play-state: var(--animation-play-state);
}`;
        return text;
    }

    GetKeyframes() {
        let text = `@keyframes breathing {
    0%, 100% {
    font-variation-settings: 'wght' 100;
    font-size: 100px;
    color: #0000FF;
}

60% {
    font-variation-settings: 'wght' 700;
    font-size: 200px;
    color: #FF0000;
}
}
    `;
        return text;
      }

    GetScript() {
        return new BaseTemplate().GetScript(true);
    }
}