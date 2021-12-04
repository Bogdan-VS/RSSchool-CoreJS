export interface ISource {
  category: string;
  country: string;
  description: string;
  id: string
  language: string;
  name: string;
  url: string;
}

export interface ISourceItem {
  id: string;
  name: string;
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISourceItem;
  id: string;
  name: string;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IData {
  status: string;
  totalResults?: number;
  articles?: IArticle[];
  sources?: ISource[];
}
