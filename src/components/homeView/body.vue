<template>
    <div class="l-contents tenpoTop lazyloaded">
        <section class="js-sliderWrap_carousel">
            <div class="js-slider_carouselPic lazyloaded">
                <div class="js-slider_carouselPicItem c-pic lazyload" v-for="item in items" :key="item.id">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div class="tenchi lazyload">
                            <img :src="item.src" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div class="js-slider_carouselPicNav lazyloaded">
                <div class="js-slider_carouselPicNavItem" v-for="item in items" :key="item.id">
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <div class="l-flex lazyload" style="height: 223px;">
                            <div class="l-flex_item c-textBox lazyload">
                                <ul class="c-data">
                                    <li class="c-tits u-wf_notoSerif">野村別荘地 戸建</li>
                                </ul>
                                <p class="c-lead">快適なリゾートライフが楽しめる塩沢エリアに佇む２LDKの一戸建て別荘です！
                                    利便性の良い立地で、別荘利用だけでなく通年利用にもお勧めの一戸建て物件です！
                                </p>
                            </div>
                            <div class="l-flex_item c-categoryBox lazyload">
                                <p class="c-location">中軽井沢（南部）</p>
                                <p class="c-price"><span class="u-wf_num">2,380</span>万円
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        <section class="l-innerWrap l-contSection l-etcWrap">
            <h2 class="l-mainCopy">
                <span class="inline-b">軽井沢エリアの</span>
                <span class="inline-b">不動産・別荘・マンション・土地など、</span>
                <span class="inline-b">リゾート物件の売買・賃貸のことなら</span>
                <span class="inline-b">ロイヤルリゾートへ。</span>
            </h2>
            <div class="l-etc lazyloaded">
                <div class="p-no1 lazyloaded">
                    <img :src="imgBadgeSrc" alt="リゾート仲介物件HP掲載数No.1 ※1" class=" lazyloaded">
                </div>
                <div class="p-tenpoNum -num2 lazyloaded">
                    <dl class="p-tenpoNum_inner">
                        <dt class="p-tenpoNum_title">売買</dt>
                        <dd class="p-tenpoNum_main"><span class="p-tenpoNum_num">402</span>件</dd>
                    </dl>
                    <dl class="p-tenpoNum_inner">
                        <dt class="p-tenpoNum_title">賃貸</dt>
                        <dd class="p-tenpoNum_main"><span class="p-tenpoNum_num">75</span>件</dd>
                    </dl>
                    <p class="p-att">※2</p>
                </div>
                <div class="p-news lazyloaded">
                    ◇ご案内について◇<br>
                    いつも当店のホームページをご覧いただき誠にありがとうございます。<br>
                    物件案内につきましては、当日のご案内および前日の案内予約の場合、ご見学ができない場合があります。<br>
                    また、事前のご予約でも売主様の都合により日時を変更していただく事がございますので、ご理解の程よろしくお願いいたします。<br>

                </div>
            </div>
            <p class="p-att">※1.熱海・軽井沢・伊東・箱根のリゾート物件で仲介会社がネット上で公開している掲載数の合計　※2.現在登録している物件数（商談中の物件含む）</p>
        </section>
        <section class="l-contSection" style="overflow: hidden;">
            <div class="l-innerWrap lazyloaded">
                <div class="js-slider_carousel lazyloaded ">
                    <div class="p-card lazyloaded" v-for="item in jsSliderCarousel" :key="item.id">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <div class="c-card_pic lazyloaded">
                                <div class="tenchi lazyloaded">
                                    <img src="https://www.royal-resort.co.jp/wp-content/uploads/2021/12/thumb12.jpg"
                                        class="attachment-medium size-medium lazyloading" alt="事業用地・店舗・ペンション・アパート特集"
                                        loading="lazy">
                                </div>
                            </div>
                            <div class="heightLine c-card_txt lazyloaded">
                                <p class="c-tits">事業用地・店舗・ペンション・アパート特集</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import "/src/assets/slick/slick.min.js"
import "/src/assets/slick/slick-theme.css"
import "/src/assets/slick/slick.css"
import "/src/assets/utils/jquery-match-height.js"


import imgBadge from '@/assets/img/badge_a1_g.png'
export default {
    name: '',
    components: {

    },
    mixins: [],
    props: {

    },
    data() {
        return {
            items: [
                { id: 1, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 2, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 3, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 4, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 5, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 6, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 7, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 8, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 9, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 10, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 11, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 12, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 13, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 14, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 15, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 16, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 17, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
            ],
            jsSliderCarousel: [
                { id: 1, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 2, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 3, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 4, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 5, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 6, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 7, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 8, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 9, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 10, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
                { id: 11, src: 'https://royal-h.es-img.jp/sale/img/2105565966390000015373/0000000002105565966390000015373_10.jpg?iid=19273583&size=600x400' },
            ],
            imgBadge,
        }
    },
    computed: {
        imgBadgeSrc() {
            return this.imgBadge
        }

    },
    watch: {

    },
    mounted() {
        this.adaptHeight()
        this.initSlick()
    },
    methods: {
        initSlick() {
            $(".js-slider_carouselPic")
                .not(".slick-initialized")
                .slick({
                    asNavFor: ".js-slider_carouselPicNav",
                    infinite: true,
                    centerPadding: "100px",
                    centerMode: true,
                    slidesToShow: 3,
                    arrows: false,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 2,
                                centerMode: true,
                                centerPadding: "100px",
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 1040,
                            settings: {
                                variableWidth: false,
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
                                variableWidth: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "30px",
                                dots: true,
                                arrow: false,
                            },
                        },
                    ],
                });

            $(".js-slider_carouselPicNav")
                .not(".slick-initialized")
                .slick({
                    asNavFor: ".js-slider_carouselPic",
                    centerPadding: "100px",
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    waitForAnimate: false,
                    autoplay: true,
                    focusOnSelect: true,
                    arrows: true,
                    responsive: [

                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 2,
                                centerMode: true,
                                centerPadding: "100px",
                                arrows: true,
                            },
                        },

                        {
                            breakpoint: 1040,
                            settings: {
                                arrow: false,
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: false,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrow: false,
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: false,
                            },
                        },
                    ],
                });

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
        },
        adaptHeight() {
            $(".js-slider_carousel .new_list").matchHeight();
            $(".js-slider_carousel .p-card").matchHeight();
            $(".js-slider_carouselPicNav .js-slider_carouselPicNavItem .l-flex").matchHeight();
        }
    }
};
</script>
<style scoped></style>