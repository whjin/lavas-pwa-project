import Vue from 'vue';

import Skeleton from 'D:\\AndyWu\\FrontEnd\\Lavas\\pwa-project\\core\\Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
