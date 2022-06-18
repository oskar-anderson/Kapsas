export default class BaseTemplate {
    GetStyle() {
        let text = `:root {
    --animation-duration: 4000ms;
    --bg-color: #ffffff;
    --animation-delay: 0ms;  /* Experimental */
} `;
        return text;
    }

    GetScript(useSplitting) {
        let model = [
            useSplitting ? 'data-splitting' : '', 
            useSplitting ? 'Splitting() /* from splitting.js */' : '', 
    ]
        let text = "" +
`function PutTextIntoRender() {
  let elementInputText = document.querySelector("#input-text-textarea");
  let rows = elementInputText.innerHTML.split('<br>');
  let outputAreaText = rows.map(row => '<div class="notbs-row">' + row + '</div>').join('');
  let outputArea = document.querySelector("#input-to-output-text-render");
  outputArea.innerHTML = '<div ${model[0]}>' + outputAreaText + '</div>';
}

function Start() {
  PutTextIntoRender();
  /* Your custom function here */
  ${model[1]}
}

Start();
`
      return text;
  
    }
}