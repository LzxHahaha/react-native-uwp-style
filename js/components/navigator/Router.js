import Pages from './../../config/pages';
import NavPan from './NavPane';

export default class Router {
    static goto(page, params = null) {
        let router = NavPan.instance;

        if (router) {
            let route = {
                ...page,
                params: {
                    ...params
                }
            };

            router.gotoPage(route);
        }
    }

    static goBack() {
        let router = NavPan.instance;
        if (router) {
            return router.goBack();
        }
    }
}
