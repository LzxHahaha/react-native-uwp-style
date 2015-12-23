import Dialog from './Dialog';

export default class UWPDialog {
    static show(title: string, content: string,
                leftText: string = 'OK', leftPress = () => {},
                rightText: string = 'Cancel', rightPress = () => {}) {
        let dialog = Dialog.instance;
        dialog && dialog.show(title, content, leftText, leftPress, rightText, rightPress);
    }

    static hide() {
        let dialog = Dialog.instance;
        dialog && dialog.hide();
    }

    static get isOpen() {
        let dialog = Dialog.instance;
        return dialog && dialog.isOpen;
    }
}
