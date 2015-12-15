import Home from '../pages/Home';

import PageIndex from '../pages/PagesIndex';

import HyperlinkPage from '../pages/action/HyperlinkPage';
import ButtonPage from '../pages/action/ButtonPage';
import SliderPage from '../pages/action/SliderPage';

import TextBoxPage from '../pages/input/TextBoxPage';

export default class Pages {}

Pages.Home = {
    component: Home,
    name: 'RN-UWP Demo'
};

Pages.Hyperlink = {
    component: HyperlinkPage,
    name: 'Hyperlink Demo'
};

Pages.Button = {
    component: ButtonPage,
    name: 'Button Demo'
};

Pages.Slider = {
    component: SliderPage,
    name: 'Slider Demo'
};

Pages.TextBox = {
    component: TextBoxPage,
    name: 'TextBox Demo'
};

Pages.ActionIndex = {
    component:   PageIndex,
    name: 'ACTIONS',
    params: {
        pages: [
            {text: 'HyperLink', page: Pages.Hyperlink},
            {text: 'Button', page: Pages.Button}
        ]
    }
};