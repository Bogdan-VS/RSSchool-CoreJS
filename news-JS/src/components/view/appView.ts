import News from './news/news';
import Sources from './sources/sources';
import { Iarticle } from './news/news';


export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: {articles: Iarticle[]}): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:{sources: {name: string, id: string}[]}) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
