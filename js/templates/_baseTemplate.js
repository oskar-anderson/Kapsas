export default class BaseTemplate {
    GetStyle() {
        let text = `:root {
    --row-height: 200px;
    --animation-duration: 4000ms;
    --bg-color: #ffffff;
    --animation-delay: 0ms;  /* Experimental */
    --font-uploaded: "Kapsas", "IBM Plex Sans";
    --animation-play-state: 'running';
} 
#input-to-output-text-render {
    font-size: 20vw;
}`;
        return text;
    }
}