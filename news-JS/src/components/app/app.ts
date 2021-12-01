import AppController from '../controller/controller';
import { AppView } from '../view/appView';

interface IApp {
    controller: AppController,
    view: AppView,
    start(): void,
}

class App implements IApp {
    controller: AppController;
    view: AppView
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: void) => this.view.drawNews(data)));
        this.controller.getSources((data: void) => this.view.drawSources(data));
    }
}

export default App;
