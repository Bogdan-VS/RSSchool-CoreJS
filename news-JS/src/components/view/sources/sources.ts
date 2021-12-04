import './sources.css';
import { ISourceItem } from '../../interface/interface'


class Sources {
    draw(data: ISourceItem[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: any = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
