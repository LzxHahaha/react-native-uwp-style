import * as white from './light.style';
import * as dark from './dark.style';

export default class Theme {
    static theme = white;

    static get colors() {
        return Theme.theme.colors;
    }

    static get styles() {
        return Theme.theme.styles;
    }

    static get fontSize() {
        return Theme.theme.fontSize;
    }

    static get isDarkStyle() {
        return Theme.theme.isDarkStyle;
    }
}