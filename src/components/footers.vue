<template>
    <footer style="height: 510px;" class="l-footer">
        <div class="l-footer_inner main lazyloaded">
            <div class="l-footer_logo lazyloaded">
                <a href="" target="_blank">
                    <img src="https://www.royal-resort.co.jp/src/img/common/logo_group01.svg" alt="ロイヤルハウジンググループ" width="76"
                        height="60" loading="lazy" class=" lazyloaded">
                    <p>ロイヤルハウジング<br>グループ</p>
                </a>
            </div>
            <div class="l-footer_navWrap lazyloaded">
            </div>
        </div>
        <p @click="backToTop" id="pageTopBoth" style="">
            <a href="#">ページ<br class="spDisNon">トップへ</a>
        </p>
        <div class="l-footer_inner sub lazyloaded">
            <p class="l-footer_copy">
                <small>Copyright (C) karuizawa.</small>
            </p>
        </div>
    </footer>
</template>
<script>
export default {
    name: '',
    components: {

    },
    mixins: [],
    props: {

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
        backToTop() {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
};
</script>
<style lang='' scoped>
</style>