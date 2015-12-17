import Home from '../pages/Home';

import PageIndex from '../pages/PagesIndex';

import HyperlinkPage from '../pages/action/HyperlinkPage';
import ButtonPage from '../pages/action/ButtonPage';
import SliderPage from '../pages/action/SliderPage';

import TextBoxPage from '../pages/input/TextBoxPage';
import PasswordBoxPage from '../pages/input/PasswordBoxPage';

import NavPanePage from '../pages/navigation/NavPanPage';

import ProgressPage from '../pages/progress/ProgressBarPage';

import CheckBoxPage from '../pages/toggle/CheckBoxPage';
import RadioButtonPage from '../pages/toggle/RadioButtonPage';
import RadioGroupPage from '../pages/toggle/RadioGroupPage';
import ToggleSwitchPage from '../pages/toggle/ToggleSwitchPage';

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
    name: 'NavPane Demo'
};

Pages.NavigatorIndex = {
    component: PageIndex,
    name: 'NAVIGATOR',
    params: {
        pages: [
            {text: 'NavPane', page: Pages.NavPane}
        ]
    }
};

Pages.Progress = {
    component: ProgressPage,
    name: 'Progress Demo'
};

Pages.ProgressIndex = {
    component: PageIndex,
    name: 'PROGRESS',
    params: {
        pages: [
            {text: 'ProgressBar', page: Pages.Progress}
        ]
    }
};


Pages.ChechBox = {
    component: CheckBoxPage,
    name: 'CheckBox Demo'
};

Pages.RadioButton = {
    component: RadioButtonPage,
    name: 'Radio Button Demo'
};

Pages.RadioGroup = {
    component: RadioGroupPage,
    name: 'Radio Group Demo'
};

Pages.ToggleSwitch = {
    component: ToggleSwitchPage,
    name: 'Radio Group Demo'
};

Pages.ToggleIndex = {
    component: PageIndex,
    name: 'TOGGLES',
    params: {
        pages: [
            {text: 'CheckBox', page: Pages.ChechBox},
            {text: 'RadioButton', page: Pages.RadioButton},
            {text: 'RadioGroup', page: Pages.RadioGroup},
            {text: 'ToggleSwitch', page: Pages.ToggleSwitch}
        ]
    }
};
