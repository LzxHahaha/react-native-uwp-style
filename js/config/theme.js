import {styles, colors, fontSize} from './light.style';

export default class Theme {
    static get colors() {
        return colors;
    }

    static get styles() {
        return styles;
    }

    static get fontSize() {
        return fontSize;
    }
}