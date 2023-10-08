import {RouterLink,RouterView} from 'vue-router';
import {defineComponent} from 'vue';

const App = () => {
    return <>
        <RouterLink to={'/sub-vue'}>subVue</RouterLink>
        <RouterLink to={'/sub-react'}>subReact</RouterLink>
        <RouterView />
    </>;
};

export default App;
