import Home from '../pages/Home';

import PageIndex from '../pages/PagesIndex';

import HyperlinkPage from '../pages/action/HyperlinkPage';
import ButtonPage from '../pages/action/ButtonPage';
import SliderPage from '../pages/action/SliderPage';

import TextBoxPage from '../pages/input/TextBoxPage';
import PasswordBoxPage from '../pages/input/PasswordBoxPage';

import NavPanePage from '../pages/navigation/NavPanPage';

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

Pages.ActionIndex = {
    component:   PageIndex,
    name: 'ACTIONS',
    params: {
        pages: [
            {text: 'HyperLink', page: Pages.Hyperlink},
            {text: 'Button', page: Pages.Button},
            {text: 'Slider', page: Pages.Slider}
        ]
    }
};

Pages.TextBox = {
    component: TextBoxPage,
    name: 'TextBox Demo'
};

Pages.PasswordBox = {
    component: PasswordBoxPage,
    name: 'PasswordBox Demo'
};

Pages.InputIndex = {
    component: PageIndex,
    name: 'INPUT FIELDS',
    params: {
        pages: [
            {text: 'TextBox', page: Pages.TextBox},
            {text: 'PasswordBox', page: Pages.PasswordBox}
        ]
    }
};

Pages.NavPane = {
    component: NavPanePage,
    name: 'NAV PANE DEMO'
};

Pages.NavigatorIndex = {
    component: PageIndex,
    name: 'NAVIGATOR FIELDS',
    params: {
        pages: [
            {text: 'NavPane', page: Pages.NavPane}
        ]
    }
};
