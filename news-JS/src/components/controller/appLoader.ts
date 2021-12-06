import Loader from './loader';

class AppLoader extends Loader {
    constructor () {
        super(
            'https://nodenews.herokuapp.com/', {
                apiKey: '1f4f16b3d3824a1db59f2e77c807c782',
        });
    }
}

export default AppLoader;
