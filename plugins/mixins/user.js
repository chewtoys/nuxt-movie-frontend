import Vue from 'vue';

import {mapGetters} from 'vuex';

const User = {
    install(Vue, option) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    loggedIn: 'auth/authenticated',
                    user: 'auth/user'
                })
            },
        })
    }
};

Vue.use(User);