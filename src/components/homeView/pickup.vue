<template>
    <section class="l-contSection">
        <div class="c-title_heading lazyloaded">
            <h3 v-if="sourceData" class="c-titleText">{{ sourceData?.title }}</h3>
        </div>
        <div class="js-slider_carousel lazyloaded ">
            <div v-if="sourceData.ary.length > 0" class="p-card p-card_property lazyloaded" v-for="item in sourceData?.ary" :key="item.id">
                <a href="" target="_blank" tabindex="0">
                    <div class="c-card_pic c-badge_movie c-badge_360 lazyloaded">
                        <div class="tenchi lazyloaded">
                            <img src="https://royal-h.es-img.jp/sale/img/2105565966390000017606/0000000002105565966390000017606_10.jpg?iid=3983873889&amp;size=334x217"
                                alt="" class=" lazyloaded">
                        </div>
                        <p class="img-ab">
                        </p>
                    </div>
                    <!-- <div class="heightLine1 c-card_txt lazyload"> -->
                    <div class="c-card_txt heightLine1 lazyloaded">
                        <p class="c-tits">千ヶ滝西区別荘地　戸建</p>
                        <p class="c-lead">2階リビングからアクセスする天空デッキは必見！緑に囲まれたプライベート空間と小川のせせらぎに癒されて下さい！</p>
                    </div>
                    <div class="c-card_data lazyloaded">
                        <p class="c-price">
                            <span class="u-wf_num">6,200</span>万円
                        </p>
                        <ul class="floorSpace_itemWrap">
                            <li class="c-card_location"> 中軽井沢（北部）
                                /2LDK
                            </li>
                            <li class="c-card_area">
                                建物：115.79m²
                                土地 : 726m²
                            </li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
        <p class="c-btnBox">
            <a href="" class="c-linkBtn_prev">全て表示</a>
        </p>
    </section>
</template>
<script>
export default {
    name: '',
    components: {

    },
    mixins: [],
    props: {
        sourceData: Object,
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
        this.init()
        this.$adaptHeight()
    },
    methods: {
        init() {
            this.initSlick()
        },
        initSlick() {
            $(".js-slider_carousel")
                .not(".slick-initialized")
                .slick({
                    adaptiveHeight: false,
                    infinite: true,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "100px",
                                dots: true,
                                arrow: false,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "50px",
                                dots: true,
                                arrow: false,
                            },
                        },
                    ],
                });
        }

    }
};
</script>
<style lang='' scoped>
</style>