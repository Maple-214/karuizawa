<template>
  <div class="l-detail">
    <div class="l-container estateDetail">
      <main>
        <section class="c-resultDetail_head l-innerWrap">
          <div class="c-titleBox lazyloaded">
            <div class="l-flex_picup lazyloaded">
              <ul class="p-pickupLabel">
                <li class="c-pickupLabel_num">物件番号：A16-12</li>
              </ul>
            </div>
            <h1 class="c-title">東雲交差点近隣　土地</h1>
            <p class="c-titleLead">
              商売から住居まで様々な用途で利用可能なエリア！<br />
              軽井沢駅から約650ｍ徒歩約9分の好立地！
            </p>
            <ul class="p-categoryLabel-tag">
              <li class="c-categoryLabel-tag_item">管理費無し</li>
              <li class="c-categoryLabel-tag_item">おすすめ</li>
              <li class="c-categoryLabel-tag_item">平坦地</li>
              <li class="c-categoryLabel-tag_item">永住したい</li>
              <li class="c-categoryLabel-tag_item">スーパーに近い</li>
              <li class="c-categoryLabel-tag_item">駐車場有</li>
              <li class="c-categoryLabel-tag_item">角地</li>
              <li class="c-categoryLabel-tag_item">100坪以下</li>
              <li class="c-categoryLabel-tag_item">日当たり良好</li>
              <li class="c-categoryLabel-tag_item">
                駅から歩ける（徒歩15分以内）
              </li>
            </ul>
          </div>
          <div class="c-btnBox lazyloaded">
            <div class="c-btn_favorite lazyloaded">
              <a
                href="javascript:void(0)"
                onclick="add_favorite('sell','2105565966390000017552');"
                class="navi_favo"
              >
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="レイヤー_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 80 80"
                    style="enable-background: new 0 0 80 80"
                    xml:space="preserve"
                    class="js-deSvg icon_fav ls-is-cached lazyloaded replaced-svg"
                  >
                    <path
                      class="st0"
                      d="M40.5,71.3c-6.5-4.2-35-23.8-35-44.5c0-8.4,4.7-17.5,15-17.5c8.4,0,17.5,5.7,17.5,15c0,1.4,1.1,2.5,2.5,2.5  c1.4,0,2.5-1.1,2.5-2.5c0-9.3,9.1-15,17.5-15c10.3,0,15,9.1,15,17.5C75.5,47.5,47,67.1,40.5,71.3z"
                    ></path>
                    <path
                      class="st1"
                      d="M60.5,4.2c-8.7,0-16.3,4.4-20,10.8c-3.7-6.4-11.3-10.8-20-10.8c-13.1,0-20,11.3-20,22.5  c0,26.1,37.1,48.7,38.7,49.6c0.4,0.2,0.8,0.4,1.3,0.4c0.4,0,0.9-0.1,1.3-0.4c1.6-0.9,38.7-23.5,38.7-49.6  C80.5,15.6,73.6,4.2,60.5,4.2z M40.5,71.3c-6.5-4.2-35-23.8-35-44.5c0-8.4,4.7-17.5,15-17.5c8.4,0,17.5,5.7,17.5,15  c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5c0-9.3,9.1-15,17.5-15c10.3,0,15,9.1,15,17.5C75.5,47.5,47,67.1,40.5,71.3z"
                    ></path>
                  </svg>
                </p>
                <p class="c-text">お気に入り<br />追加</p>
              </a>
            </div>
            <div class="c-btn_printing lazyloaded">
              <a
                href="javascript:void(0)"
                onclick="print_window();return false;"
              >
                <p class="icon-print01"></p>
                <p class="c-text">印刷する</p>
              </a>
            </div>
          </div>
        </section>
        <section class="c-resultDetail_outline l-innerWrap">
          <div class="c-resultDetail_outline_img lazyloaded">
            <div
              class="js-modalWrap_estateDetail_head atami p-mv-photo lazyloaded"
            >
              <button
                class="js-modalWrap_estateDetail_item"
                type="button"
                data-index="0"
                data-micromodal-trigger="js-swiper-modal"
              >
                <img
                  src="https://royal-h.es-img.jp/sale/img/2105565966390000017552/0000000002105565966390000017552_10.jpg?iid=464459707"
                  alt=""
                  data-src="https://royal-h.es-img.jp/sale/img/2105565966390000017552/0000000002105565966390000017552_10.jpg?iid=464459707"
                  class="lazyloaded"
                /><noscript
                  ><img
                    src="https://royal-h.es-img.jp/sale/img/2105565966390000017552/0000000002105565966390000017552_10.jpg?iid=464459707"
                    alt=""
                    data-eio="l"
                /></noscript>
                <!-- <p class="c-caption">商売可能な近隣商業地域！町内では希少な物件です！</p> --></button
              ><button
                class="p-mv-photo__floor-plan-btn c-floor-plan-btn"
                type="button"
                data-micromodal-trigger="js-floor-plan-modal"
                role="button"
              >
                <img
                  :src="iconFloorPlan"
                  alt=""
                  width="24"
                  height="24"
                  loading="lazy"
                  class="ls-is-cached lazyloaded"
                />
                <span>間取り</span>
              </button>
            </div>
            <p class="c-caption estateDetail_mv-caption"></p>
            <p class="c-caption">
              商売可能な近隣商業地域！町内では希少な物件です！
            </p>
            <p></p>
          </div>
          <div class="c-resultDetail_outline_text lazyloaded">
            <dl class="outline_main">
              <dt class="c-price">価格</dt>
              <dd>
                <span class="u-wf_num">6,800</span>万円

                <a href="#simulation" class="simulation-btn"
                  >￥ローンシミュレーション</a
                >
              </dd>

              <dt>土地面積</dt>
              <dd>266.12m²</dd>
            </dl>
            <ul class="outline_sub">
              <li class="c-location">旧軽井沢</li>
              <li class="c-traffic">北陸新幹線「軽井沢」駅 徒歩約9分</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import iconFloorPlan from "../../assets/img/icon_floor-plan.svg";
export default {
  name: "",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      iconFloorPlan,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.st0 {
  fill: #ffffff;
}
.st1 {
  fill: #e9546b;
}
.estateDetail .c-resultDetail_head {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head {
    flex-direction: column;
  }
}

.estateDetail .c-resultDetail_head .c-title {
  margin-top: 10px;
  font-family: "Noto Serif JP", serif;
  font-weight: 600;
  font-size: 3.4rem;
}

@media screen and (max-width: 1024px) {
  .estateDetail .c-resultDetail_head .c-title {
    font-size: 3.2rem;
  }
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-title {
    font-size: 2.2rem;
  }
}

.estateDetail .c-resultDetail_head .c-titleLead {
  font-size: 18px;
  font-size: 1.8rem;
  color: #7c6400;
  margin: 1em 0;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-titleLead {
    font-size: 16px;
    font-size: 1.6rem;
  }
}

.estateDetail .c-resultDetail_head .l-flex_picup {
  align-items: center;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .l-flex_picup {
    flex-direction: column;
    align-items: flex-start;
  }
}

.estateDetail .c-resultDetail_head .p-pickupLabel {
  margin-right: 15px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .p-pickupLabel {
    order: 2;
    margin-top: 10px;
  }
}

.estateDetail .c-resultDetail_head .c-message {
  font-size: 1.4rem;
}

.estateDetail .c-resultDetail_head .c-message .num {
  color: #e9546b;
}

.estateDetail .c-resultDetail_head .p-categoryLabel {
  margin-top: 20px;
}

.estateDetail .c-resultDetail_head .c-btnBox {
  display: flex;
  position: fixed;
  z-index: 999;
  right: 15px;
}

/*@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-btnBox {
    position: fixed;
    z-index: 999;
    right: 15px;
  }
}*/
/*@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-btnBox {
    position: absolute;
    right: 20px;
    margin-top: 0;
  }
}*/
.c-titleBox + .c-btnBox {
  margin-top: 0;
}

.estateDetail .c-resultDetail_head .c-btnBox .c-btn_favorite {
  margin-right: 10px;
}

.c-btn_favorite .c-text {
  /*.estateDetail .c-resultDetail_head .c-btnBox .c-btn_favorite .c-text {*/
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-btnBox .c-btn_favorite {
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_head .c-btnBox .c-btn_printing {
    display: none;
  }
}

.estateDetail .c-resultDetail_outline {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline {
    display: block;
  }
}

.estateDetail .c-resultDetail_outline_img {
  width: 65%;
}

.estateDetail .c-resultDetail_outline_img .slick-dotted.slick-slider {
  margin-bottom: 0;
}

.estateDetail .c-resultDetail_outline_img .slick-prev,
.estateDetail .c-resultDetail_outline_img .slick-next {
  display: block;
  background: #555555;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.estateDetail .c-resultDetail_outline_img .slick-prev {
  left: -25px;
}

.estateDetail .c-resultDetail_outline_img .slick-next {
  right: -25px;
}

.estateDetail .c-resultDetail_outline_img .slick-prev::before,
.estateDetail .c-resultDetail_outline_img .slick-next::before {
  width: 10px;
  height: 10px;
  border-color: #fff;
}

.estateDetail .c-resultDetail_outline_img .cboxElement {
  width: 680px;
  height: 420px;
  display: block;
}

.estateDetail .c-resultDetail_outline_img .cboxElement img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-size: cover !important;
  object-position: center;
}

@media screen and (max-width: 1040px) {
  .estateDetail .c-resultDetail_outline_img .cboxElement {
    width: 100%;
    height: 50vw;
  }
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_img {
    width: 100%;
    margin-bottom: 40px;
  }

  .estateDetail .js-sliderWrap_estateDetail {
    margin: 0 -25px 25px;
    width: calc(100% + 50px);
  }

  .estateDetail .c-resultDetail_outline_img .slick-prev,
  .estateDetail .c-resultDetail_outline_img .slick-next {
    display: none !important;
  }
}

.estateDetail .c-resultDetail_outline_text {
  width: 35%;
  padding-left: 30px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text {
    width: 100%;
    padding-left: 0;
    display: flex;
  }
}

@media screen and (max-width: 480px) {
  .estateDetail .c-resultDetail_outline_text {
    display: block;
  }
}

.estateDetail .c-resultDetail_outline_text .outline_main {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  border-top: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text .outline_main {
    width: 50%;
    padding: 0;
  }
}

@media screen and (max-width: 480px) {
  .estateDetail .c-resultDetail_outline_text .outline_main {
    width: 100%;
  }
}

.estateDetail .c-resultDetail_outline_text .outline_main .u-wf_num {
  font-size: 3rem;
  color: #e9546b;
}

.estateDetail .c-resultDetail_outline_text .outline_main dt {
  width: 30%;
  font-weight: bold;
  font-size: 1.6rem;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text .outline_main dt {
    padding-left: 15px;
    /*padding: 10px 0;*/
  }
}

.estateDetail .c-resultDetail_outline_text .outline_main dt.c-price {
  min-height: 84px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text .outline_main dt.c-price {
    min-height: 84px;
  }
}

.estateDetail .c-resultDetail_outline_text .outline_main dd {
  width: 70%;
  border-bottom: 1px solid #ddd;
  padding: 10px 15px 10px 0;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text .outline_main dd {
    /*padding: 10px 0;*/
  }
}

.estateDetail .c-resultDetail_outline_text .outline_sub {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_outline_text .outline_sub {
    width: 50%;
    padding: 10px;
  }
}

@media screen and (max-width: 480px) {
  .estateDetail .c-resultDetail_outline_text .outline_sub {
    width: 100%;
    margin-top: 0;
  }
}

.estateDetail .c-resultDetail_outline_text .outline_sub a {
  color: #4d7326;
  text-decoration: underline;
  font-weight: bold;
}

.estateDetail .c-resultDetail_outline_text .outline_sub a:hover {
  text-decoration: none;
}

.estateDetail .c-resultDetail_outline_text .outline_sub li {
  display: inline-block;
  position: relative;
  line-height: 1.5;
  padding-left: 20px;
  text-indent: -10px;
}

.estateDetail .c-resultDetail_outline_text .outline_sub li::before {
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  vertical-align: baseline;
  font-size: inherit;
  margin-right: 3px;
  color: #4d7326;
}

.estateDetail .c-resultDetail_outline_text .outline_sub li.c-location::before {
  content: "\e907";
  font-weight: bold;
}

.estateDetail .c-resultDetail_outline_text .outline_sub li.c-traffic::before {
  content: "\e910";
}

.estateDetail .c-resultDetail_outline_text .outline_sub li.c-structure::before {
  content: "\e911";
  font-weight: bold;
}

.estateDetail .c-resultDetail_outline_text .outline_link-btn {
  margin-top: 10px;
}

.estateDetail .c-resultDetail_outline_text .outline_link-btn li {
  margin-bottom: 5px;
}

.estateDetail .c-resultDetail_outline_text .outline_link-btn a {
  display: block;
  color: #4d7326;
  border: 1px solid #4d7326;
  border-radius: 3px;
  padding: 7px 10px 7px 30px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjNGQ3MzI2IiBkPSJNMTIgMGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMSAxNS44ODl2LTIuMjIzcy0zLjc4LS4xMTQtNyAzLjMzM2MxLjUxMy02LjU4NyA3LTcuNzc4IDctNy43Nzh2LTIuMjIxbDUgNC40MjUtNSA0LjQ2NHoiLz48L3N2Zz4=)
    no-repeat 10px center;
  background-size: 16px;
  font-weight: bold;
  transition: 0.3s;
}

.estateDetail .c-resultDetail_outline_text .outline_link-btn a:hover {
  background-color: #f2f9ec;
}

.estateDetail .c-resultDetail_outline_text .outline_link-btn a.ico-movie {
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgMTgiPgo8cGF0aCBmaWxsPSIjZjAwIiBkPSJNMjIuNiwxLjdDMjEuNCwwLjgsMTcuMSwwLDEyLDBTMi42LDAuOCwxLjQsMS43QzAuMiwyLjYsMCw2LjcsMCw5czAuMiw2LjQsMS40LDcuM0MyLjYsMTcuMiw2LjksMTgsMTIsMTggczkuNC0wLjgsMTAuNi0xLjdjMS4xLTAuOSwxLjQtNSwxLjQtNy4zUzIzLjgsMi42LDIyLjYsMS43eiBNMTUuNiw5LjFMMTAsMTIuNGMwLDAtMC4xLDAtMC4xLDBzLTAuMS0wLjEtMC4xLTAuMVY5VjUuNyBjMCwwLDAtMC4xLDAuMS0wLjFjMCwwLDAuMSwwLDAuMSwwbDUuNiwzLjNjMCwwLDAuMSwwLjEsMC4xLDAuMUMxNS43LDksMTUuNiw5LjEsMTUuNiw5LjF6Ii8+Cjwvc3ZnPgo=)
    no-repeat 8px center;
  background-size: 18px;
}

.estateDetail .c-resultDetail_point {
  /*margin-top: 30px;*/
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_point {
    flex-wrap: wrap;
  }
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 100%;
  padding: 10px;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem.price {
  /*display: flex;
  align-items: center;
  justify-content: center;*/
  width: 30%;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem.madori {
  width: 15%;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem.space {
  width: 15%;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other {
  justify-content: left;
  width: 40%;
  text-align: left;
  line-height: 1.5;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other li:before {
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  vertical-align: text-bottom;
  font-size: inherit;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem.other
  .c-pin:before {
  content: "\e907";
  font-weight: bold;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem.other
  .c-traffic:before {
  content: "\e910";
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem.other
  .c-structure:before {
  content: "\e911";
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.price {
    width: 33%;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.madori {
    width: 33%;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.space {
    width: 33%;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.space::after {
    background: transparent;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other {
    width: 100%;
    padding: 10px 0;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 0;
    top: 0;
  }

  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other li {
    display: inline-block;
    margin-right: 0.8em;
    font-weight: bold;
  }
}

@media screen and (max-width: 480px) {
  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem.other li {
    font-size: 14px;
    font-size: 1.4rem;
  }

  .estateDetail .c-resultDetail_tag {
    font-size: 0;
  }

  .estateDetail .c-resultDetail_tag li {
    font-size: 12px;
    font-size: 1.2rem;
  }
}

/*@media screen and (max-width: 768px) {
  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem {
    width: 50%;
    padding: 10px;
    font-size: 1.2rem;
  }
  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem:nth-of-type(2n)::after {
    display: none;
  }
  .estateDetail .c-resultDetail_point .c-resultDetail_pointItem:nth-of-type(n + 3) {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
}*/
.estateDetail .c-resultDetail_point .c-resultDetail_pointItem::after {
  content: "";
  display: inline-block;
  width: 1px;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem:last-of-type::after {
  display: none;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem a {
  text-decoration: underline;
  color: #4d7326;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem .c-icon {
  display: block;
  /* height: 22px; */
  /*margin-bottom: 5px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #e6e6e6;*/
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem .c-icon::before {
  display: inline-block;
  font-size: 2.5rem;
  color: #4d7326;
  vertical-align: baseline;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem
  .icon-floor01::before {
  font-size: 2.2rem;
  font-weight: bold;
}

/* .estateDetail .c-resultDetail_point .c-resultDetail_pointItem .icon-occupied01::before {
  font-size: 1.8rem;
} */
.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem
  .icon-traffic01::before {
  font-size: 2.2rem;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem
  .icon-pin01::before {
  font-size: 2.2rem;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem
  .icon-structure01::before {
  font-size: 2.2rem;
}

.estateDetail
  .c-resultDetail_point
  .c-resultDetail_pointItem
  .c-price
  .u-wf_num {
  font-size: 4rem;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem .c-tits {
  display: block;
  font-size: 1.4rem;
  margin-bottom: 3px;
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem .c-price .c-tits {
  font-size: 1.6rem;
}

@media screen and (max-width: 768px) {
  .estateDetail
    .c-resultDetail_point
    .c-resultDetail_pointItem
    .c-price
    .u-wf_num {
    font-size: 2.6rem;
  }
}

.estateDetail .c-resultDetail_point .c-resultDetail_pointItem .c-text {
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.2;
}

.estateDetail .c-resultDetail_tag {
  margin-top: 10px;
}

.estateDetail .p-categoryLabel-tag {
  margin-top: 10px;
}

.estateDetail .p-categoryLabel-tag li {
  font-size: 1.4rem;
  /*font-weight: normal;*/
}

.estateDetail .c-resultDetail_tag li {
  display: inline-block;
  line-height: 1.5;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20preserveAspectRatio%3D%22xMinYMid%22%3E%3Cpath%20fill%3D%22%234d7326%22%20d%3D%22M14.101%2024l-14.101-14.105v-9.895h9.855l14.145%2014.101c-3.3%203.299-6.6%206.599-9.899%209.899zm-4.659-23h-8.442v8.481l13.101%2013.105%208.484-8.484c-4.381-4.368-8.762-8.735-13.143-13.102zm-1.702%203.204c.975.976.975%202.56%200%203.536-.976.975-2.56.975-3.536%200-.976-.976-.976-2.56%200-3.536s2.56-.976%203.536%200zm-.708.707c.586.586.586%201.536%200%202.121-.585.586-1.535.586-2.121%200-.585-.585-.585-1.535%200-2.121.586-.585%201.536-.585%202.121%200z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 1em;
  padding-left: 1.1em;
}

.estateDetail .c-resultDetail_tag li:not(:last-child) {
  margin-right: 0.6em;
}

.estateDetail .c-video {
  margin-top: 50px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-video {
    margin-top: 40px;
  }
}

.c-youtube {
  width: 680px;
  margin: auto;
  position: relative;
  background-color: black;
}

.c-youtube-thum {
  margin-left: 15.5%;
}

@media screen and (max-width: 768px) {
  .c-youtube {
    width: 100%;
  }

  .c-youtube-thum {
    margin-left: 0;
  }
}

.estateDetail .c-youtbe {
  margin-top: 50px;
}

.estateDetail .c-youtbe img {
  width: 680px;
  height: 360px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-youtbe {
    margin-top: 40px;
  }
}

.estateDetail .c-youtbe-ico {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -40px 0 0 -40px;
}

.estateDetail .c-youtbe-ico img {
  width: 80px;
  height: 80px;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-youtbe-ico {
    position: absolute;
    margin: -30px 0 0 -30px;
  }

  .estateDetail .c-youtbe-ico img {
    width: 60px;
    height: 60px;
  }
}

/*
.estateDetail .c-youtbe-time {
  position: absolute;
  right: 7%;
  bottom: 0;
  margin: 0 !important;
  padding: 4px 16px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  font-size: 1.4rem;
}
@media screen and (max-width: 768px) {
  .estateDetail .c-youtbe-time {
    right: 0%;
  }
}
*/
.estateDetail .files {
  justify-content: space-between;
  flex-wrap: wrap;
}

.estateDetail .files .c-pic_scaling {
  width: 480px;
  height: 550px;
}

@media screen and (max-width: 1040px) {
  .estateDetail .files .c-pic_scaling {
    margin: auto auto 30px;
  }
}

@media screen and (max-width: 768px) {
  .estateDetail .files .c-pic_scaling {
    margin: auto auto;
    height: auto;
    max-height: 300px;
  }
}

.estateDetail .files .c-pic_scaling img {
  max-width: 100%;
  max-height: 100%;
}

.estateDetail .files .l-flex_item.comment {
  width: 470px;
  width: calc(100% - 480px - 30px);
}

.estateDetail .files .l-flex_item.comment .comment_item:not(:last-child) {
  margin-bottom: 15px;
}

@media screen and (max-width: 1040px) {
  .estateDetail .files .l-flex_item.comment {
    width: 100%;
  }
}

.estateDetail .files .l-flex_item.comment .c-boxBg_bluBri + .c-boxBg_bluBri {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .estateDetail .files .l-flex_item.comment .c-boxBg_bluBri + .c-boxBg_bluBri {
    margin-top: 20px;
  }
}

.estateDetail #info_detail * + .c-title_sub {
  margin-top: 40px;
}

.estateDetail
  #info_detail
  .l-table
  .c-dataTable.c-dataTable_deco
  th.c-price-total
  + td {
  color: #e9546b;
}

.estateDetail
  #info_detail
  .l-table
  .c-dataTable.c-dataTable_deco
  th.c-price-total {
  background: #fadce0;
  /*color: #fff;*/
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .estateDetail #info_detail .l-table .c-price-box {
    position: relative;
  }

  .estateDetail #info_detail .l-table .c-price-box tr:last-child {
    padding-bottom: 39.5px;
  }

  .estateDetail #info_detail .l-table .c-price-box th.c-price-total {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .estateDetail #info_detail .l-table .c-price-box th.c-price-total + td {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

@media screen and (min-width: 768px) {
  .estateDetail #info_detail .l-table .c-dataTable.c-dataTable_deco th {
    width: 140px;
  }

  .estateDetail
    #info_detail
    .l-table
    .c-dataTable.c-dataTable_deco
    th.c-price-total
    + td {
    border-bottom: 1px solid #dedede;
  }
}

.estateDetail #info_access {
  margin-top: 50px;
}

.estateDetail #info_access .c-infoBox_data {
  overflow: hidden;
  margin-top: 10px;
}

.estateDetail #info_access .c-infoBox_data dt {
  float: left;
  font-weight: bold;
}

.estateDetail #info_access .c-infoBox_data dd {
  margin-left: 3em;
}

.estateDetail .c-map_difference {
  margin-top: 50px;
  padding: 10px;
  border: 1px solid #d6d6d6;
}

.estateDetail .c-map_google iframe {
  width: 100%;
  height: 430px;
}

@media screen and (max-width: 1040px) {
  .estateDetail .c-map_google iframe {
    height: 250px;
  }
}

.estateDetail .c-price_total {
  text-align: right;
  margin-top: 20px;
  color: #4d7326;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .estateDetail .c-lag .l-innerWrap + .l-innerWrap {
    margin-top: 70px;
  }
}

.mansionList .p-mapWrap_api {
  display: flex;
}

.mansionList .c-map {
  position: relative;
}

.mansionList .c-map .c-map-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.mansionList .c-map svg {
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .mansionList .p-mapWrap_api {
    display: block;
  }
}

.mansionList #map_content {
  display: block;
}

.mansionList #map_content .gm-style .gm-style-iw-c {
  padding: 0;
  border-radius: 3px;
  max-height: none !important;
}

.mansionList #map_content .gm-style .gm-style-iw-d {
  overflow: auto !important;
  max-height: none !important;
}

.mansionList #map_content .gm-ui-hover-effect {
  width: 24px !important;
  height: 24px !important;
  top: 0 !important;
  right: 0 !important;
}

.mansionList #map_content .gm-ui-hover-effect img {
  width: 24px !important;
  height: 24px !important;
  margin: 0 !important;
}

.mansionList #map_content .infoWindow {
  padding: 20px 20px;
  width: 210px;
}

@media screen and (max-width: 768px) {
  .mansionList #map_content .infoWindow {
    width: auto;
    padding: 10px;
  }
}

.mansionList #map_content .infoWindow .name {
  font-weight: bold;
  color: #4d7326;
  font-size: 1.6rem;
}

.mansionList #map_content .infoWindow .pic {
  width: 100%;
  margin-top: 10px;
  text-align: center;
}

.mansionList #map_content .infoWindow .pic img {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .mansionList #map_content .infoWindow .pic img {
    width: 60%;
  }
}

.mansionList #map_content .infoWindow .link {
  display: block;
  font-size: 1.4rem;
  background: #e9546b;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
  margin-top: 10px;
}

/* 物件詳細フロートパーツ */
@media screen and (max-width: 768px) {
  .l-detail .c-fixBtn .c-fixBtn_item.item-mail {
    display: none;
  }
}

.l-detail .l-container {
  overflow: inherit;
}

.l-detail .l-container main {
  overflow: hidden;
}

.c-fixBtn .item-tel {
  display: flex;
  margin-bottom: 10px;
  box-shadow: 0 0 1px 1px #fff;
  border-radius: 5px 0 0 5px;
}

.c-fixBtn .item-tel dt {
  margin: 0;
  width: 110px;
  display: block;
  background: #4d7326;
  border-radius: 5px 0 0 5px;
  color: #fff;
  text-align: center;
  padding: 8px;
  border: solid 1px #4d7326;
}

.c-fixBtn .item-tel .icon-phone01 {
  margin-top: 5px;
  display: block;
}

.c-fixBtn .item-tel .icon-phone01::before {
  color: #fff;
  font-size: 4rem;
}

.c-fixBtn .item-tel dt.acTriger {
  cursor: pointer;
  transition: 0.3s;
}

.c-fixBtn .item-tel dt.acTriger:hover {
  background: #f2f9ec;
  color: #4d7326;
  transition: 0.3s;
}

.c-fixBtn .item-tel dt.acTriger:hover .icon-phone01::before {
  color: #4d7326;
}

.c-fixBtn .item-tel dt.acTriger + dd {
  display: none;
}

.c-fixBtn .item-tel dd {
  padding: 8px 24px;
  background: #fff;
  border: solid 1px #4d7326;
  border-left: none;
  border-right: none;
  text-align: center;
}

.c-fixBtn .item-tel dd a {
  display: block;
  color: #333;
}

.c-fixBtn .item-tel-no {
  margin-top: 5px;
  font-family: "Roboto Condensed", sans-serif;
  color: #4d7326;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;
}

.float-contact {
  background: #fff;
  postion: -webkit-sticky;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #ccc;
  padding: 10px 0;
  text-align: center;
  z-index: 99;
}

@media screen and (max-width: 768px) {
  .float-contact {
    padding: 10px 5px;
  }
}

.float-contact .l-flex {
  width: 1040px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex {
    width: 100%;
    align-items: stretch;
  }
}

.float-contact .l-flex .l-flex_item {
  width: 33%;
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex .l-flex_item {
    width: 100%;
    display: flex;
  }

  .float-contact .l-flex .l-flex_item p {
    display: flex;
    width: 100%;
  }

  .float-contact .l-flex .l-flex_item a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .float-contact .l-flex .l-flex_item + .l-flex_item {
    margin-left: 5px;
  }
}

.float-contact .l-flex .l-flex_item.c-tel {
  position: relative;
  padding-right: 30px;
}

@media screen and (max-width: 1024px) {
  .float-contact .l-flex .l-flex_item.c-tel {
    width: 38%;
    padding-right: 15px;
  }
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex .l-flex_item.c-tel {
    width: 100%;
    padding-right: 0;
  }
}

.float-contact .l-flex .c-tel a {
  display: block;
  padding: 0;
  font-size: 3.2rem;
  font-family: "Roboto Condensed", sans-serif;
  color: #4d7326;
  line-height: 1;
}

@media screen and (max-width: 1024px) {
  .float-contact .l-flex .c-tel a {
    display: flex;
    border: 1px solid #4d7326;
    border-radius: 5px;
    font-size: 1.6rem;
    font-weight: bold;
  }
}

.float-contact .l-flex .c-tel a .icon-phone01::before {
  font-size: 0.8em;
  color: #4d7326;
}

.float-contact .l-flex .c-tel .c-text {
  margin-top: 0;
  color: #555;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
}

.float-contact .l-flex .l-flex_item.c-mail a {
  border: solid 2px #e9546b;
}

.float-contact .l-flex .l-flex_item.c-mail a:hover::before {
  color: #e9546b;
}

@media screen and (max-width: 1024px) {
  .float-contact .l-flex .l-flex_item.c-mail {
    width: 32%;
  }
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex .l-flex_item.c-mail {
    width: 100%;
    padding-left: 0;
  }
}

.float-contact .l-flex .c-favorite {
  padding-left: 30px;
}

@media screen and (max-width: 1024px) {
  .float-contact .l-flex .l-flex_item.c-favorite {
    width: 30%;
    padding-left: 10px;
  }
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex .l-flex_item.c-favorite {
    width: 100%;
    padding-left: 0;
    padding-top: 15px;
  }
}

.float-contact .l-flex .c-mail a,
.float-contact .l-flex .c-favorite a {
  display: block;
  line-height: 1;
  padding: 15px 15px;
  font-size: 1.8rem !important;
}

@media screen and (max-width: 1024px) {
  .float-contact .l-flex .c-mail a,
  .float-contact .l-flex .c-favorite a {
    font-size: 1.4rem !important;
    display: block;
    padding: 10px 0;
  }
}

.float-contact .l-flex .c-mail a::before,
.float-contact .l-flex .c-favorite a::before {
  color: #ffffff;
  font-size: 2rem;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}

.float-contact .l-flex .c-favorite a::before {
  color: #e9546b;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

@media screen and (max-width: 768px) {
  .float-contact .l-flex .c-mail a::after,
  .float-contact .l-flex .c-favorite a::after {
    display: none;
  }
}

/* 全てをチェック */
.c-allCheck {
  display: flex;
}

.c-allCheck .c-speechBubble {
  padding: 0 !important;
}

.c-allCheck .c-form_check-txtInline label {
  font-size: 1.6rem;
  line-height: 1;
  padding: 16px 15px 16px 43px;
}

.c-allCheck .c-form_check-txtInline label::before {
  width: 18px;
  height: 18px;
  left: 15px;
}

.c-allCheck .c-form_check-txtInline label::after {
  left: 20px;
}

.c-allCheck a.c-linkBtn_emp {
  margin-left: 10px;
  padding: 10px 25px 10px 15px;
}

.c-allCheck a.c-linkBtn_emp::after {
  right: 10px;
}

@media screen and (max-width: 768px) {
  .c-allCheck {
    width: 100%;
    margin-bottom: 30px;
    justify-content: space-between;
  }

  .c-allCheck > * {
    width: 49%;
  }

  .c-allCheck .c-form_check-txtInline label {
    width: 100%;
  }

  .c-allCheck a.c-linkBtn_emp {
    margin: 0;
    width: 100%;
  }
}

/* rent改修 */
.c-dataTable_rent {
  border-top: 1px solid #dedede;
}

.c-dataTable_rent > li {
  border-bottom: 1px solid #dedede;
  padding: 12px 5px;
  font-size: 1.4rem;
  line-height: 1.4;
}

.c-dataTable_rent .c-price {
  font-size: 1.4rem;
}

.c-dataTable_rent .c-price-info {
  display: flex;
  flex-wrap: wrap;
}

.c-dataTable_rent .c-price-info dl {
  display: flex;
}

.c-dataTable_rent .c-price-info dl:not(:last-child)::after {
  margin: 0 0.2em;
  content: "/";
  display: inline-block;
}

.c-dataTable_rent .c-price-info dd {
  padding: 0 0 0 0.2em;
  font-weight: bold;
}

.c-dataTable_rent .c-add > li:not(:first-child) {
  margin-top: 0.5em;
}

.c-dataTable_rent .c-pin,
.c-dataTable_rent .c-traffic {
  text-indent: -1.2em;
  margin-left: 1.2em;
}

.c-dataTable_rent .c-pin::before {
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: bottom;
  font-size: inherit;
  content: "\e907";
  font-weight: bold;
  width: 1em;
  text-align: center;
  margin-right: 0.2em;
}

.c-dataTable_rent .c-traffic::before {
  font-family: "icomoon" !important;
  speak: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: bottom;
  font-size: inherit;
  content: "\e910";
  width: 1em;
  text-align: center;
  margin-right: 0.2em;
}

/* トップ改修 */
.c-notice {
  margin-bottom: 15px;
  padding: 5px 10px;
  background: #f2f9ec;
  text-align: center;
}

.c-notice p:not(:first-child) {
  border-top: 1px dotted #4d7326;
}

.c-notice a {
  padding: 10px 5px;
  display: block;
  color: #4d7326;
  line-height: 1.2;
  text-decoration: underline;
}

.c-notice a:hover {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .c-notice {
    text-align: left;
  }
}

/* フロートパーツ */
.contactBox {
  position: fixed;
  bottom: 0;
  width: 100%;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  background: #4d7326;
}

@media only screen and (min-width: 560px) {
  .contactBox .container-fix {
    padding: 0 5%;
  }
}

.contactBox .contact-inner {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 50px;
}

@media only screen and (min-width: 1120px) {
  .contactBox .contact-inner {
    height: 100px;
  }
}

.contactBox .contact-inner .contact-tel {
  display: table-cell;
  vertical-align: middle;
  width: 70%;
  padding: 0 0.5em;
}

.contactBox .contact-inner .contact-tel .text-num {
  display: inline-block;
  color: #d4b572;
  font-size: 8vw;
  line-height: 1;
  white-space: nowrap;
  vertical-align: bottom;
  padding-left: 0.96em;
  position: relative;
}

.contactBox .contact-inner .contact-tel .text-num:before {
  content: "";
  font-family: FontAwesome;
  font-size: 0.8em;
  color: #d4b572;
  text-decoration: none;
  position: absolute;
  left: 0;
  top: 0;
  line-height: inherit;
}

.contactBox .contact-inner .contact-tel .text-num:before {
  margin-top: 4px;
}

.contactBox .contact-inner .contact-tel .text-sub {
  color: #fff;
  font-size: 10px;
  margin-bottom: 0;
  line-height: 1;
  letter-spacing: -0.1;
}

@media only screen and (min-width: 560px) {
  .contactBox .contact-inner .contact-tel {
    width: 50%;
  }

  .contactBox .contact-inner .contact-tel .text-num {
    font-size: 5.5vw;
  }
}

@media only screen and (min-width: 1120px) {
  .contactBox .contact-inner .contact-tel .text-num {
    font-size: 60px;
  }

  .contactBox .contact-inner .contact-tel .text-num:hover {
    text-decoration: none;
    cursor: auto;
  }

  .contactBox .contact-inner .contact-tel .text-sub {
    font-size: 14px;
  }
}

.contactBox .contact-inner .contact-mail {
  display: table-cell;
  vertical-align: middle;
  width: 30%;
}

.contactBox .contact-inner .contact-mail .btn-conversion {
  color: #4d7326 !important;
  display: block;
  margin-top: 7px;
  padding: 0.5em 1em;
  font-size: 3vw;
}

@media only screen and (min-width: 560px) {
  .contactBox .contact-inner .contact-mail {
    width: 50%;
  }

  .contactBox .contact-inner .contact-mail .btn-conversion {
    padding: 0.5em;
    font-size: 2vw;
    text-align: center;
  }
}

@media only screen and (min-width: 1120px) {
  .contactBox .contact-inner .contact-mail .btn-conversion {
    font-size: 26px;
  }
}

/* マンションカタログ間取り追加 */
.mansion_madori img {
  width: auto;
  max-height: 700px;
}

.mansion_madori .l-flex_item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mansion_madori_img {
  width: 100%;
  flex: 1 0 0%;
  display: grid;
  place-items: center;
}

.mansion_madori .c-caption {
  margin-top: 1em;
}

/* 問い合わせフォーム STEP */
.c-form-step {
  display: flex;
  justify-content: center;
  background-color: #f2f9ec;
  width: 100%;
  max-width: 1040px;
  margin: 40px auto 0;
  padding: 40px 20px;
}

@media screen and (max-width: 768px) {
  .c-form-step {
    margin-top: 20px;
    padding: 30px 15px;
  }
}

.c-form-step_list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .c-form-step_list {
    max-width: 320px;
  }
}

.c-form-step_list::before {
  content: "";
  background-color: #d6d6d6;
  width: calc(100% - 110px);
  /* 110 = 左右の●からはみ出た部分の合計 = 1item 160pxから●の50pxを引いて/2したら1itemのはみ出た数値が出る */
  height: 1px;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 768px) {
  .c-form-step_list::before {
    width: calc(100% - 80px);
    top: 20px;
  }
}

.c-form-step_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .c-form-step_item {
    width: 120px;
  }
}

.c-form-step_num {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 100vmax;
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 768px) {
  .c-form-step_num {
    font-size: 17px;
    width: 40px;
    height: 40px;
  }
}

.c-form-step_item.is-current .c-form-step_num {
  color: #fff;
  background-color: #4d7326;
}

.c-form-step_label {
  display: block;
  font-size: 17px;
  text-align: center;
  margin-top: 8px;
}

@media screen and (max-width: 768px) {
  .c-form-step_label {
    font-size: 14px;
  }
}

.c-form-step_item.is-current .c-form-step_label {
  color: #4d7326;
  font-weight: bold;
}
/*
ãƒ¢ãƒ¼ãƒ€ãƒ«&ã‚¹ãƒ©ã‚¤ãƒ€ãƒ¼ã«é–¢ã™ã‚‹CSS
ä½¿ç”¨ãƒšãƒ¼ã‚¸ä¾‹ï¼š/atami/estate_list_atami/rent/estate_detail/index.html
*/

/* ################################################################################ */
/* ãƒ¢ãƒ¼ãƒ€ãƒ«ã®ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆ */
/* ################################################################################ */

.l-slider-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
}
.l-slider-modal.is-active {
  visibility: visible !important;
  opacity: 1 !important;
}
.l-slider-modal__overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
}
.l-slider-modal[aria-hidden="true"] .l-slider-modal__overlay {
  animation: fadeOut 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
.l-slider-modal[aria-hidden="false"] .l-slider-modal__overlay {
  animation: fadeIn 0.3s ease-in-out;
  animation-fill-mode: both;
}
.l-slider-modal__container {
  background-color: #fff;
  width: 80%;
  max-width: 900px;
  position: relative;
}
@media screen and (max-width: 767px) {
  .l-slider-modal__container {
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    height: 100%;
  }
}
.l-slider-modal[aria-hidden="true"] .l-slider-modal__container {
  animation: fadeOut 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
.l-slider-modal[aria-hidden="false"] .l-slider-modal__container {
  animation: fadeIn 0.3s ease-in-out;
  animation-fill-mode: both;
}
.l-slider-modal__close-btn {
  width: 40px;
  height: 40px;
  position: absolute;
  top: -5px;
  right: -50px;
  transition: opacity 0.2s;
}
@media screen and (max-width: 767px) {
  .l-slider-modal__close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.l-slider-modal__close-btn:hover {
  opacity: 0.7;
}
.l-slider-modal__close-btn::before,
.l-slider-modal__close-btn::after {
  content: "";
  display: block;
  background-color: #fff;
  width: 100%;
  height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
@media screen and (max-width: 767px) {
  .l-slider-modal__close-btn::before,
  .l-slider-modal__close-btn::after {
    background-color: #000;
  }
}
.l-slider-modal__close-btn::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* ################################################################################ */
/* ãƒ¢ãƒ¼ãƒ€ãƒ«ã®ä¸­ã®ã‚¹ãƒ©ã‚¤ãƒ€ãƒ¼ */
/* ################################################################################ */

.p-modal-slider {
  position: relative;
}
.p-modal-slider__slide-count {
  color: #fff;
  font-size: 12px;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
}
@media screen and (max-width: 767px) {
  .p-modal-slider__slide-count {
    position: fixed;
  }
}
@media screen and (max-width: 767px) {
  .p-modal-slider__main-wrap {
    margin-top: 27vh;
  }
}
@media screen and (max-width: 767px) {
  .p-modal-slider__main .slick-arrow {
    width: 40px;
    height: 40px;
    top: 40%;
  }
  .p-modal-slider__main .slick-arrow.slick-prev {
    left: 20px;
  }
  .p-modal-slider__main .slick-arrow.slick-next {
    right: 20px;
  }
}
.p-modal-slider__main .slick-arrow::before {
  border-left: solid 3px #fff;
  border-bottom: solid 3px #fff;
  opacity: 1 !important;
  transition: opacity 0.2s;
}
@media screen and (max-width: 767px) {
  .p-modal-slider__main .slick-arrow::before {
    border-left: solid 3px #000;
    border-bottom: solid 3px #000;
  }
}
.p-modal-slider__main .slick-arrow:hover::before {
  opacity: 0.7 !important;
}
.p-modal-slider__slide-item {
  cursor: grab;
}
.p-modal-slider__slide-item:active {
  cursor: grabbing;
}
.p-modal-slider__slide-item figure {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.p-modal-slider__slide-item figure .__img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65vh;
  max-height: 500px;
}
.p-modal-slider__slide-item figure .__img img {
  width: auto;
  height: auto;
  max-height: 100%;
}
@media screen and (max-width: 767px) {
  .p-modal-slider__slide-item figure .__img {
    height: 35vh;
  }
}
.p-modal-slider__slide-item figure figcaption {
  display: block;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  padding: 20px 15px;
  width: 100%;
}
@media screen and (max-width: 767px) {
  .p-modal-slider__slide-item figure figcaption {
    text-align: left;
  }
}
.p-modal-slider__thumb {
  background-color: #f5f5f5;
  padding: 10px;
}
.p-modal-slider__thumb-item {
  cursor: pointer;
  transition: opacity 0.2s;
}
.p-modal-slider__thumb-item:hover {
  opacity: 0.7;
}
.p-modal-slider__thumb-item span {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0 5px;
}
.p-modal-slider__thumb-item img {
  width: auto;
  height: 100px;
  object-fit: cover;
}
@media screen and (max-width: 767px) {
  .p-modal-slider__thumb-item img {
    height: 17vw;
  }
}

.p-mv-photo {
  position: relative;
}
.p-mv-photo__floor-plan-btn {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 98;
}
@media screen and (max-width: 767px) {
  .p-mv-photo__floor-plan-btn {
    bottom: 10px;
    left: 10px;
  }
}

.c-floor-plan-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background-color: #273d7a;
  border-radius: 100vmax;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  width: 60px;
  height: 60px;
  transition: opacity 0.2s;
}
.c-floor-plan-btn:hover {
  opacity: 0.9;
}
.c-floor-plan-btn img {
  width: 24px;
}
.c-floor-plan-btn span {
  font-size: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
