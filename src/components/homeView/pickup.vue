<template>
  <section :class="sectionClassName">
    <div class="l-innerWrap lazyloaded">
      <!-- 首页标题 -->
      <div
        v-if="!sourceData.isdetail && sourceData.title"
        class="c-title_heading"
      >
        <h3 v-show="sourceData" class="c-titleText">{{ sourceData?.title }}</h3>
      </div>

      <!-- 详情页标题 -->
      <div v-if="sourceData.isdetail && sourceData.ary" class="l-innerWrap">
        <div class="c-title_sub">
          <h4 class="c-titleText">{{ sourceData.detailTitle }}</h4>
        </div>

        <div class="js-slider_carousel_pickup">
          <div
            class="p-card p-card_property"
            v-for="item in sourceData?.ary"
            :key="item._id"
          >
            <a
              :href="'/#/karuizawa/detail/' + item._id"
              target="_blank"
              tabindex="0"
            >
              <div class="c-card_pic c-badge_movie c-badge_360">
                <div class="tenchi">
                  <img :src="item.preview_image.url" alt="" />
                </div>
                <p class="img-ab">
                  <img
                    src="https://www.royal-resort.co.jp/src/img/common/icon-video.png"
                    width="40"
                    height="40"
                    alt="You Tubeのアイコン"
                    loading="lazy"
                    class="ls-is-cached"
                  />
                </p>
              </div>
              <div class="c-card_txt">
                <p class="c-tits">{{ item.name }}</p>
                <p class="c-lead">
                  {{ item.desc }}
                </p>
              </div>
              <div class="c-card_data">
                <p class="c-price">
                  <span class="u-wf_num">{{ item.price }}</span
                  >万円
                </p>

                <ul class="floorSpace_itemWrap">
                  <li class="c-card_location">
                    {{ item.station }} /{{ item.floor_plan }}
                  </li>
                  <li class="c-card_area">
                    建物：{{ item.construction_area }}m² 土地 :
                    {{ item.Land_area }}m²
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- 轮播元素 -->
      <div
        v-if="!sourceData.isdetail && sourceData.ary"
        class="js-slider_carousel_pickup"
      >
        <div
          class="p-card p-card_property"
          v-for="item in sourceData?.ary"
          :key="item.id"
        >
          <a
            :href="'/#/karuizawa/detail/' + item._id"
            target="_blank"
            tabindex="0"
          >
            <div class="c-card_pic c-badge_movie c-badge_360">
              <div class="tenchi">
                <img :src="item.preview_image.url" alt="" />
              </div>
              <p class="img-ab"></p>
            </div>
            <div class="c-card_txt heightLine1">
              <p class="c-tits">{{ item.name }}</p>
              <p class="c-lead">
                {{ item.desc }}
              </p>
            </div>
            <div class="c-card_data">
              <p class="c-price">
                <span class="u-wf_num">{{ item.price }}</span
                >万円
              </p>
              <ul class="floorSpace_itemWrap">
                <li class="c-card_location">
                  {{ item.station }} /{{ item.floor_plan }}
                </li>
                <li class="c-card_area">
                  建物：{{ item.construction_area }}m² 土地 :
                  {{ item.Land_area }}m²
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      <!-- 骨架屏  -->
      <!-- class="js-slider_carousel_pickup_loading .js-slider_carousel" -->
      <div
        v-if="!sourceData.isdetail && loading"
        class="js-slider_carousel_pickup"
      >
        <div class="p-card p-card_property" v-for="item in 5" :key="item">
          <el-skeleton style="" animated>
            <template slot="template">
              <el-skeleton-item variant="image" style="height: 220px" />
            </template>
          </el-skeleton>
          <el-skeleton :rows="4" animated />
        </div>
      </div>

      <p v-show="sourceData.showAll" class="c-btnBox">
        <a href="" class="c-linkBtn_prev">全て表示</a>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    sourceData: Object,
    sectionClassName: String,
    loading: Boolean,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
  },
  mounted() {
  },
  methods: {
    // init() {},
    // initSlickLoading() {
    //   $(".js-slider_carousel_pickup_loading")
    //     .not(".slick-initialized")
    //     .slick({
    //       adaptiveHeight: false,
    //       infinite: true,
    //       dots: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       responsive: [
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             centerPadding: "100px",
    //             dots: true,
    //             arrow: false,
    //           },
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             centerPadding: "50px",
    //             dots: true,
    //             arrow: false,
    //           },
    //         },
    //       ],
    //     });
    // },
    // initSlick() {
    //   $(".js-slider_carousel_pickup")
    //     .not(".slick-initialized")
    //     .slick({
    //       adaptiveHeight: false,
    //       infinite: true,
    //       dots: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       responsive: [
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             centerPadding: "100px",
    //             dots: true,
    //             arrow: false,
    //           },
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             centerMode: true,
    //             centerPadding: "50px",
    //             dots: true,
    //             arrow: false,
    //           },
    //         },
    //       ],
    //     });
    // },
    
  },
};
</script>
<style lang="" scoped></style>
