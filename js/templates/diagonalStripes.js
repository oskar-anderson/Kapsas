import BaseTemplate from "./_baseTemplate.js";

export default class DiagonalStripes {

   GetStyle() {
    let text = `${new BaseTemplate().GetStyle()}
    
#input-to-output-text-render {
  background: linear-gradient(
    -45deg, 
    #4bc0c8 25%, 
    #feac5e 25%, 
    #feac5e 50%, 
    #4bc0c8 50%, 
    #4bc0c8 75%, 
    #feac5e 75%, 
    #feac5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 20px 20px;
  background-position: 0 0;
  animation: stripes 1s linear infinite;
  animation-play-state: var(--animation-play-state);
}
`;
    return text;
  }

  GetKeyframes() {
    let text = `@keyframes stripes {
  0% { 
    background-position: 0 0, 0 0, 0 0;
  }
  100% { 
    background-position: 20px 0, 20px 0, 20px 0;
  }
}
`;
    return text;
  }


}