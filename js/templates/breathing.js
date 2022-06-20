import BaseTemplate from "./baseTemplate.js";

export default class Breathing {
    GetStyle() {
        let text = '' + 
`${new BaseTemplate().GetStyle()}
        
.notbs-row {
    font-size: 200px; /* This has to match max fontsize from animation, otherwise letters start moving vertically affecting the rows */
    margin-bottom: -100px; /* This sets the height between 2 rows without causing overflow from parent div like with height attribute */
}

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
    color: #f6ddcc;
}

60% {
    font-variation-settings: 'wght' 700;
    font-size: 200px;
    color: #eb515d;
}`;
        return text;
      }

    GetScript() {
        return new BaseTemplate().GetScript(true);
    }
}