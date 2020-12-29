<template>
    <div
        class="px-2 cursor-pointer flex items-center"
        @mouseenter="showMenu"
        @mouseleave="clearMenu"
        @click="goToLink"
    >
        <div class="mr-2">{{ label }}</div>
        <font-awesome-icon
            v-if="subnav"
            icon="chevron-down"
            class="text-xs text-gray-400"
        />
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        props: {
            label: {
                default: 'menu'
            },
            route: {
                default: 'home'
            },
            subnav: {
                default: false
            }
        },
        methods: {
            ...mapActions('app', ['setMenu','clearMenu']),
            showMenu() {
                if(this.subnav) {
                    this.setMenu(this.subnav);
                }
            },
            goToLink() {
                if(this.$route.name != this.route) {
                    this.$router.push({ name: this.route });
                }
            }
        }
    }
</script>
