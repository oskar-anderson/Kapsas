import BaseTemplate from "./baseTemplate.js";

export default class MultiExpandOpacity {

   GetStyle() {
    let text = `${new BaseTemplate().GetStyle()}

.notbs-row {
    font-size: 169px; /* Where does this come from ??? */
    opacity: 0.7;
    position: relative;
    animation-play-state: var(--animation-play-state) !important;
    text-transform: uppercase;
}

[data-row="1"] {
    color: #ff1d1d;
    font-family: "Arial";
    animation: row1 6s linear infinite;
}

[data-row="2"] {
    color: #7d1aff;
    font-family: "Helvetica";
    animation: row2 6s linear infinite;
}

[data-row="3"] {
    color: #17ffaf;
    font-family: "Kapsas";
    animation: row3 6s linear infinite;
}

[data-row="4"] {
    color: #fff817;
    font-family: "Roboto";
    animation: row4 6s linear infinite;
}
`;
    return text;
  }

  GetKeyframes() {
    let text = `@keyframes row1 {
  0%, 50%, 100%  { 
    top: 300px;
  }
  60%, 80% {
    top: 200px;
  }
  95% {
    top: 310px;
  }
}
@keyframes row2 {
  0%, 50%, 100%  { 
    top: 100px;
  }
  60%, 80% {
    top: 150px;
  }
  95% {
    top: 90px;
  }
}
@keyframes row3 {
  0%, 50%, 100%  { 
    bottom: 100px;
  }
  60%, 80% {
    bottom: 150px;
  }
  95% {
    bottom: 90px;
  }
}
@keyframes row4 {
  0%, 50%, 100%  { 
    bottom: 300px;
  }
  60%, 80% {
    bottom: 200px;
  }
  95% {
    bottom: 310px;
  }
}
`;
    return text;
  }

  GetScript() {
    return new BaseTemplate().GetScript(false);
  }

  
  GetText() {
    return ['Kapsas', 'Kapsas', 'Kapsas', 'Kapsas'];
  }
}