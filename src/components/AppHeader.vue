<template>
    <header
        class="header border-b-2 border-chrblue-300"
    >
        <div class="container mx-auto">
            <div class="flex">
                <div class="logo px-3">
                    <router-link to="/">
                        <img src="./../assets/images/logo.png" />
                    </router-link>
                </div>
                <div class="flex-grow flex justify-center">
                    <app-nav></app-nav>
                </div>
                <div class="flex">
                    <app-meta></app-meta>
                </div>
            </div>
        </div>
        <div
            v-if="menuActive"
            class="subnav flex justify-center"
            :class="{active: menuActive}"
            @mouseenter="showMenu"
            @mouseleave="clearMenu"
        >
            <div class="container mx-auto my-2 bg-white">
                <component v-bind:is="currentMenu"></component>
            </div>
        </div>
    </header>
</template>

<script>
    import debounce from 'lodash/debounce';
    import AppNav from './AppNav'
    import AppMeta from './AppMeta'
    import MenuHomes from './Menus/MenuHomes'
    import MenuProducts from './Menus/MenuProducts'
    import MenuApplications from './Menus/MenuApplications'
    import MenuCompany from './Menus/MenuCompany'
    import MenuMarkets from './Menus/MenuMarkets'
    import MenuResources from './Menus/MenuResources'
    import {mapActions, mapGetters} from "vuex";
    export default {
        components: {
            AppNav,
            AppMeta,
            MenuHomes,
            MenuProducts,
            MenuApplications,
            MenuMarkets,
            MenuResources,
            MenuCompany
        },
        data() {
            return {
                scrolling: false
            }
        },
        created () {
            this.handleDebouncedScroll = debounce(this.handleScroll, 100);
            window.addEventListener('scroll', this.handleDebouncedScroll);
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleDebouncedScroll);
        },
        computed: {
            ...mapGetters('app', {
                menuActive: 'showMenu'
            }),
            currentMenu: function() {
                return "menu-" + this.menuActive;
            }
        },
        methods: {
            ...mapActions('app', ['setMenu','clearMenu']),
            showMenu() {
                this.setMenu(this.menuActive);
            },
            handleScroll() {
                if(window.scrollY > 0) {
                    this.scrolling = true
                } else {
                    this.scrolling = false
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        background:white;
        padding:0.75rem;
        position: fixed;
        z-index: 90;
        top: 0;
        width: 100%;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }

    .scrolling {
        height: 50px;
        padding:5px;
        box-shadow: 0 0 5px rgba(0,0,0,0.5);
    }

    .logo {
        height: 75px;
    }

    .logo img {
        height:  100%;
        width: auto;
    }

    .scrolling .logo
    {
        height: 40px;
    }

    .subnav {
        visibility: hidden;
        transition: all .5s ease-in-out;
        opacity: 0;
        position: absolute;
        left: 0;
        width: 100%;
        top: calc(100% - 10px);
        z-index: 90;
    }

    .active {
        visibility: visible;
        opacity: 1;
    }
</style>