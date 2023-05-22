<template>
  <section :class="SectionClassName">
    <!-- 首页标题 -->
    <div v-if="!sourceData.isdetail" class="c-title_heading lazyloaded">
      <h3 v-show="sourceData" class="c-titleText">{{ sourceData?.title }}</h3>
    </div>
    <!-- 详情页标题 -->
    <div v-if="sourceData.isdetail" class="l-innerWrap">
      <div class="c-title_sub lazyloaded">
        <h4 class="c-titleText">{{ sourceData.detailTitle }}</h4>
      </div>
      <div class="js-slider_carousel lazyloaded">
        <div
          v-if="sourceData.ary.length > 0"
          class="p-card p-card_property lazyloaded"
          v-for="item in sourceData?.ary"
          :key="item.id"
        >
          <a
            href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/estate_detail_2105565966390000015869"
            target="_blank"
            tabindex="0"
          >
            <div class="c-card_pic c-badge_movie c-badge_360 lazyloaded">
              <div class="tenchi lazyloaded">
                <img
                  src="https://royal-h.es-img.jp/sale/img/2105565966390000015869/0000000002105565966390000015869_10.jpg?iid=522000328&amp;size=334x217"
                  alt=""
                  class="ls-is-cached lazyloaded"
                />
              </div>
              <p class="img-ab">
                <img
                  src="https://www.royal-resort.co.jp/src/img/common/icon-video.png"
                  width="40"
                  height="40"
                  alt="You Tubeのアイコン"
                  loading="lazy"
                  class="ls-is-cached lazyloaded"
                />
              </p>
            </div>
            <div class="c-card_txt lazyloaded">
              <p class="c-tits">千ヶ滝西区　からまつの森　アメリカンハウス</p>
              <p class="c-lead">
                太陽光発電、全館集中冷暖房で一年中快適！ビルトインガレージ設備！ドッグランあり！
              </p>
            </div>
            <div class="c-card_data lazyloaded">
              <p class="c-price"><span class="u-wf_num">8,250</span>万円</p>

              <ul class="floorSpace_itemWrap">
                <li class="c-card_location">中軽井沢（北部） /3LDK</li>
                <li class="c-card_area">建物：196.52m² 土地 : 1013m²</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div v-show="!sourceData.isdetail" class="js-slider_carousel lazyloaded">
      <div
        v-show="sourceData.ary.length > 0"
        class="p-card p-card_property lazyloaded"
        v-for="item in sourceData?.ary"
        :key="item.id"
      >
        <a href="" target="_blank" tabindex="0">
          <div class="c-card_pic c-badge_movie c-badge_360 lazyloaded">
            <div class="tenchi lazyloaded">
              <img
                src="https://royal-h.es-img.jp/sale/img/2105565966390000017606/0000000002105565966390000017606_10.jpg?iid=3983873889&amp;size=334x217"
                alt=""
                class="lazyloaded"
              />
            </div>
            <p class="img-ab"></p>
          </div>
          <!-- <div class="heightLine1 c-card_txt lazyload"> -->
          <div class="c-card_txt heightLine1 lazyloaded">
            <p class="c-tits">千ヶ滝西区別荘地　戸建</p>
            <p class="c-lead">
              2階リビングからアクセスする天空デッキは必見！緑に囲まれたプライベート空間と小川のせせらぎに癒されて下さい！
            </p>
          </div>
          <div class="c-card_data lazyloaded">
            <p class="c-price"><span class="u-wf_num">6,200</span>万円</p>
            <ul class="floorSpace_itemWrap">
              <li class="c-card_location">中軽井沢（北部） /2LDK</li>
              <li class="c-card_area">建物：115.79m² 土地 : 726m²</li>
            </ul>
          </div>
        </a>
      </div>
    </div>
    <p v-show="sourceData.showAll" class="c-btnBox">
      <a href="" class="c-linkBtn_prev">全て表示</a>
    </p>
  </section>
</template>
<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    sourceData: Object,
    SectionClassName: String,
  },
  data() {
    return {
      // SectionClassName : 'l-contSection'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.init();
    this.$adaptHeight();
    console.log({ uu: this.sourceData });
  },
  methods: {
    init() {
      this.initSlick();
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
    },
  },
};
</script>
<style lang="" scoped></style>
