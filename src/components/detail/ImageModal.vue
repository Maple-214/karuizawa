<template>
  <div
    class="l-slider-modal"
    id="js-swiper-modal"
    aria-hidden="true"
    style="visibility: hidden; opacity: 0"
    ref="modalRef"
    v-if="detail_list.length > 0"
  >
    <div
      class="l-slider-modal__overlay lazyloaded"
      tabindex="-1"
      data-micromodal-close
    >
      <div
        class="l-slider-modal__container lazyloaded"
        aria-modal="true"
        role="dialog"
      >
        <button
          data-micromodal-close
          aria-label="閉じる"
          aria-modal="true"
          class="l-slider-modal__close-btn"
        ></button>
        <div class="p-modal-slider lazyloaded">
          <div class="p-modal-slider__main-wrap lazyloaded">
            <div class="p-modal-slider__main">
              <div
                class="p-modal-slider__slide-item"
                v-for="item in detail_list"
                :key="item.url"
              >
                <figure>
                  <div class="__img lazyloaded">
                    <img :src="item.url" class="ls-is-cached lazyloaded" />
                  </div>
                  <figcaption>{{ detail_desc }}</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="p-modal-slider__thumb">
            <div
              class="p-modal-slider__thumb-item lazyload"
              v-for="item in detail_list"
              :key="item.url"
            >
              <span>
                <img :src="item.url" alt="" class="lazyload" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "/src/assets/utils/jquery-match-height.js";
import "/src/assets/slick/slick.min.js";
import "/src/assets/slick/slick-theme.css";
import "/src/assets/slick/slick.css";
export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    detail_list: Array,
    detail_desc: String
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    detail_list(_new, _old) {
      if (_new.length > 0) {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
  },
  mounted() {},
  methods: {
    init() {
      // モーダル要素が無ければ処理中断
      if (!$("#js-swiper-modal").length) return;

      const sliderMainSelector = "#js-swiper-modal .p-modal-slider__main"; // スライダー メイン
      const sliderThumbSelector = "#js-swiper-modal .p-modal-slider__thumb"; // スライダー サムネイル

      const slideCountClass = "p-modal-slider__slide-count"; // スライド総数の親のクラス
      const nowCountClass = "_now"; // 現在のスライド番号
      const allCountClass = "_all"; // 全てのスライド数

      // microModal初期化
      MicroModal.init({
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
        openClass: "is-active",
        onShow: function (_modal, _btn) {
          if (_modal.id === "js-swiper-modal") {
            console.log(99, _btn.dataset);
            $(sliderMainSelector).slick(
              "slickGoTo",
              Number(_btn.dataset.index)
            );
          }
        },
      });
      // slick（メイン）初期化
      $(sliderMainSelector)
        .on("init", function (_ev, _slick) {
          $(this).append(
            `<div style="padding: 5px 10px;left: 10px;top: 10px;color: #fff;font-size: 12px;text-align: right; background-color: rgba(0, 0, 0, .8);border-radius: 4px; position: absolute" class="${slideCountClass}"><span class="${nowCountClass}"></span> / <span class="${allCountClass}"></span></div>`
          );
          $(`.${nowCountClass}`).text(_slick.currentSlide + 1);
          $(`.${allCountClass}`).text(_slick.slideCount);
        })
        // 初期化
        .not(".slick-initialized")
        .slick({
          asNavFor: sliderThumbSelector,
        })
        // スライド切替時にスライド番号更新
        .on("beforeChange", function (_ev, _slick, _currentSlide, _nextSlide) {
          console.log({ _ev, _slick, _currentSlide, _nextSlide });
          $(`.${nowCountClass}`).text(_nextSlide + 1);
        });

      // slick（サムネイル）初期化
      $(sliderThumbSelector)
        .not(".slick-initialized")
        .slick({
          slidesToShow: 6,
          arrows: false,
          asNavFor: sliderMainSelector,
          focusOnSelect: true,
          responsive: [
            {
              breakpoint: 640, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 5,
              },
            },
          ],
        });
    },
  },
};
</script>

<style scoped>
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
