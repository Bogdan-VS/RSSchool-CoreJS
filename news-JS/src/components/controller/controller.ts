// import { node } from 'webpack';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: () => void) {
        super.getResp(
            {
                endpoint: 'sources',
                options: {}
            },
            callback
        );
    }

    getNews(e: Event, callback: () => void) {
        let target: EventTarget = e.target;
        const newsContainer: EventTarget = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as Element).classList.contains('source__item')) {
                const sourceId = (target as Element).getAttribute('data-source-id');
                if ((newsContainer as Element).getAttribute('data-source') !== sourceId) {
                    (newsContainer as Element).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as ParentNode).parentNode;
        }
    }
}

export default AppController;
