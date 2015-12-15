import Pages from './config/pages';
import NavPan from './components/NavPane';

export default class Router {
    static goto(page, params = null) {
        let router = NavPan.instance;

        if (params) {
            page.params = params;
        }

        router.gotoPage(page);
    }

    static goBack() {
        let router = NavPan.instance;
        router.goBack();
    }
}
