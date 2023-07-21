<template>
    <ul :class="className">
        <li v-if="dataSource.length > 0" v-for="item in dataSource" :key="item.id" class="p-card p-card-none">
            <a href="">
                <!-- <img :src="item.src" alt="" loading="lazy" class=" lazyloaded"> -->
                <div style="width: 245px; height: 100px;background-color: antiquewhite;"></div>
                
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: '',
    components: {

    },
    mixins: [],
    props: {
        dataSource: Array,
        className: String
    },
    data() {
        return {

        }
    },
    computed: {

    },
    watch: {

    },
    mounted() {
    },
    methods: {

    }
};
</script>
<style lang='' scoped>
</style>