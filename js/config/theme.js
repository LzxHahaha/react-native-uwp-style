//import {styles, colors, fontSize} from './light.style';
import * as theme from './dark.style';

export default class Theme {
    static get colors() {
        return theme.colors;
    }

    static get styles() {
        return theme.styles;
    }

    static get fontSize() {
        return theme.fontSize;
    }

    static get isDarkStyle() {
        return theme.isDarkStyle;
    }
}