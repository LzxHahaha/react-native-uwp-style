# React-Native UWP Style

![Demo](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/demo_image/demo.gif)

## About

Some react-native's components with Windows 10 style. You can get the design templates at [Windows Dev Center](https://dev.windows.com/en-us/design/assets).

> **Watch out:** this project are only tested on android before. If you want use it on iOS,
you should test it by yourself.

## How to use

### Get demo app (Like the UIExplorer)
```
$ npm install
$ react-native start
$ react-native run-android
```

### Use the components
> Copy the **`js/components/*`** and **`js/config/*`** to your project.

## What this project have

### Router

You can use the `<NavPan />` component to jump between each page,
only need to modify the `config/pages.js`.

### Theme

Now only have one preset theme, but I will provides other soon. You can also config your theme,
just need to add a style file and modify the `config/theme.js`.

### Icons

There have 189 preset icons can let you choose, you can find they at `js/components/symbol/icons`.

> Only have black icon now, the white icon will be soon.

### Components

> There are completed components, more will be soon.

* Actions
    * [Hyperlink](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/action/Hyperlink.js)
    * [Button](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/action/Button.js)
    * [Slider](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/action/Slider.js)
* Input fields
    * [TextBox](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/input/TextBox.js)
    * [PasswordBox](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/input/PasswordBox.js)
* Navigation
    * [NavPane](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/navigator/NavPane.js)
    * [CommandBar](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/navigator/CommandBar.js)
* Overlays
    * [Dialog](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/overlays/Dialog.js)
* Progress
    * [ProgressBar](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/progress/ProgressBar.js)
* Toggle
    * [CheckBox](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/toggle/CheckBox.js)
    * [RadioButton](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/toggle/RadioButton.js)
    * [ToggleSwitch](https://github.com/LzxHahaha/react-native-uwp-style/blob/master/js/components/toggle/ToggleSwitch.js)

## TODO

### Components

* ComboBox
* DatePicker
    * DatePicker
    * TimePicker
* AutoSuggest
* Hub
* Tabs
* Pivot

### Document

Wiki is on the way.

### Other

* Add setting mechanism for the application.
