<template>
  <header class="l-header h-sticky l-header_tenpo karuizawa">
    <div class="l-header_nav-tempo lazyloaded">
      <div class="l-header_inner lazyloaded">
        <div class="l-header_tenpoName lazyloaded">
          <a href="/">
            <p class="c-header_tenpoName-main u-wf_en">Karuizawa</p>
            <h1 class="c-header_tenpoName-sub">軽井沢駅前店</h1>
          </a>
        </div>
        <nav class="l-nav_tenpo">
          <div class="l-nav_tenpoInner megamenu lazyloaded">
            <ul
              itemtype="https://www.schema.org/SiteNavigationElement"
              class="l-nav_menu"
            >
              <li itemprop="name" class="l-nav_menu_secondBtn nav-buy">
                <div itemprop="url" class="is-btn lazyloaded">
                  買いたい<span class="c-menu_arrow"></span>
                </div>

                <div class="l-nav_menu_secondWrap l-buy lazyload">
                  <div class="l-buy_inner lazyload">
                    <div class="l-buy_2nd lazyload">
                      <dl class="l-buy_2nd_list list-type">
                        <dt>種別から探す</dt>
                        <dd><a class="type-mansion" href="">マンション</a></dd>
                        <dd><a class="type-house" href="">戸建</a></dd>
                        <dd><a class="type-land" href="">土地</a></dd>
                        <dd>
                          <a class="type-investment" href="">投資・事業用</a>
                        </dd>
                      </dl>
                      <dl class="l-buy_2nd_list list-map">
                        <dt>地図から探す</dt>
                        <dd><a href="area_map/">地図から物件を探す</a></dd>
                        <dd><a href="mansion_map/">マンションカタログ</a></dd>
                        <dd><a href="villa_map/">別荘地カタログ</a></dd>
                      </dl>
                      <dl class="l-buy_2nd_list list-other">
                        <dt>その他の探し方</dt>
                        <dd><a href="">条件から探す</a></dd>
                        <dd><a href="">特集から探す</a></dd>
                        <dd><a href="">人気ランキングから探す</a></dd>
                        <dd>
                          <a href="" target="_blank">希望条件を登録する</a>
                        </dd>
                        <dd class="c-textSearch">
                          <form
                            action="estate_list_karuizawa/sell/"
                            class="l-form"
                            id="form_sell"
                            mehod="get"
                          >
                            <input
                              id="sbox1"
                              name="keyword"
                              type="text"
                              placeholder="マンション名、自社管理番号で検索"
                              class="c-textSearch_input"
                            />
                            <input
                              type="submit"
                              value="検索"
                              name=""
                              class="c-textSearch_btn"
                            />
                          </form>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <p class="c-linkClose">閉じる</p>
                </div>
              </li>

              <li itemprop="name" class="l-nav_menu_secondBtn nav-rent">
                <div itemprop="url" class="is-btn lazyloaded">
                  借りたい<span class="c-menu_arrow"></span>
                </div>
                <div class="l-nav_menu_secondWrap l-rentVer02 lazyload">
                  <div class="l-rentVer02_inner lazyload">
                    <div class="l-rentVer02_2nd lazyload">
                      <dl class="l-rentVer02_2nd_list list-type">
                        <dt>種別から探す</dt>
                        <dd>
                          <a
                            class="type-mansion"
                            href="estate_list_karuizawa/rent/?kind_code=1"
                            >アパート・マンション</a
                          >
                        </dd>
                        <dd>
                          <a
                            class="type-house"
                            href="estate_list_karuizawa/rent/?kind_code=2"
                            >戸建・テラスハウス</a
                          >
                        </dd>
                        <dd>
                          <a
                            class="type-parking"
                            href="estate_list_karuizawa/rent/?kind_code=3"
                            >駐車場</a
                          >
                        </dd>
                        <dd>
                          <a
                            class="type-investment"
                            href="estate_list_karuizawa/rent/?kind_code=4"
                            >事業用</a
                          >
                        </dd>
                      </dl>
                      <dl class="l-rentVer02_2nd_list list-map">
                        <dt>地図から探す</dt>
                        <dd><a href="area_map_rent/">地図から物件を探す</a></dd>
                        <dd><a href="mansion_map/">マンションカタログ</a></dd>
                        <dd><a href="villa_map/">別荘地カタログ</a></dd>
                      </dl>
                      <dl class="l-rentVer02_2nd_list list-other">
                        <dt>その他の探し方</dt>
                        <dd>
                          <a
                            class="type-season"
                            href="estate_list_karuizawa/rent/?kind_code[]=1&amp;kind_code[]=2&amp;kodawari[]=117"
                            >シーズン貸し</a
                          >
                        </dd>
                        <dd><a href="">条件から探す</a></dd>
                        <dd class="c-textSearch">
                          <form
                            action="estate_list_karuizawa/rent/"
                            class="l-form"
                            id="form_rent"
                            mehod="get"
                          >
                            <input
                              id="sbox1"
                              name="keyword"
                              type="text"
                              placeholder="マンション名、自社管理番号で検索"
                              class="c-textSearch_input"
                            />
                            <input
                              type="submit"
                              value="検索"
                              name=""
                              class="c-textSearch_btn"
                            />
                          </form>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <p class="c-linkClose">閉じる</p>
                </div>
              </li>

              <li itemprop="name" class="l-nav_menu_secondBtn nav-sell">
                <div itemprop="url" class="is-btn lazyloaded">
                  売りたい<span class="c-menu_arrow"></span>
                </div>

                <div class="l-nav_menu_secondWrap l-sell lazyload">
                  <div class="l-sell_inner lazyload">
                    <div class="l-sell_2nd lazyload">
                      <dl class="l-sell_2nd_list">
                        <dt class="u-wf_notoSerif">ご所有の不動産のご売却</dt>
                        <dd>
                          <p>
                            現在、軽井沢エリアの売却物件が不足しており、多くの購入希望のお客様にお待ちいただいている状況です。
                          </p>
                          <p>
                            もしもご売却をご検討でしたら、コロナ禍の今こそ好条件でご売却できるチャンスです！
                          </p>
                          <a class="c-linkBtn_prev" href="sellproperty/"
                            >ロイヤルの売却とは</a
                          >
                        </dd>
                      </dl>
                    </div>
                    <div class="l-sell_3rd lazyload">
                      <dl class="l-sell_3rd_list list-main">
                        <dt>ご売却について</dt>
                        <dd><a href="">ロイヤルが選ばれる理由</a></dd>
                        <dd><a href="">ご売却の流れ</a></dd>
                        <dd><a href="">成約事例のご紹介</a></dd>
                        <dd><a href="">ご購入希望者の声</a></dd>
                        <dd><a href="">よくあるご質問</a></dd>
                      </dl>
                      <dl class="l-sell_3rd_list list-cv">
                        <dt>査定について</dt>
                        <dd>
                          <a class="cv-default" href="" target="_blank">
                            <span class="text-sub"
                              >まずは60秒でカンタン査定</span
                            >
                            <span class="text-main"
                              >無料で売却査定スタート</span
                            >
                          </a>
                        </dd>
                        <dd>
                          <a class="cv-both" href="" target="_blank">
                            <span class="text-sub">売却と賃貸を同時に査定</span>
                            <span class="text-main">どっちも査定</span>
                          </a>
                        </dd>
                        <dd>
                          <a class="cv-instantly" href="" target="_blank">
                            <span class="text-sub"
                              >お手持ちの不動産をすぐに現金化</span
                            >
                            <span class="text-main">即金買取査定</span>
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <p class="c-linkClose">閉じる</p>
                </div>
              </li>

              <li itemprop="name" class="l-nav_menu_secondBtn nav-lend">
                <div itemprop="url" class="is-btn lazyloaded">
                  貸したい<span class="c-menu_arrow"></span>
                </div>

                <div class="l-nav_menu_secondWrap l-lend lazyload">
                  <div class="l-lend_inner lazyload">
                    <div class="l-lend_2nd lazyload">
                      <dl class="l-lend_2nd_list">
                        <dt class="u-wf_notoSerif">
                          ご所有の不動産の<br />賃貸経営
                        </dt>
                        <dd>
                          <p>
                            軽井沢の賃貸募集・管理はロイヤルリゾートにお任せください。当社はリゾート不動産専門の仲介会社です。
                            貸したいとお考えのオーナー様。集客に強い駅前店舗ロイヤルリゾートにお任せ下さい。
                          </p>
                          <a class="c-linkBtn_prev" href="/karuizawa/lend/"
                            >ロイヤルの賃貸経営とは</a
                          >
                        </dd>
                      </dl>
                    </div>
                    <div class="l-lend_3rd lazyload">
                      <dl class="l-lend_3rd_list list-main">
                        <dt class="title-sm">賃貸経営について</dt>
                        <dd>
                          <a href="sellproperty/owner1/"
                            >ロイヤルが選ばれる理由</a
                          >
                        </dd>
                        <dd>
                          <a href="lend/agreementflowrent/">賃貸経営の流れ</a>
                        </dd>
                        <dd><a href="faq/">よくあるご質問</a></dd>
                      </dl>
                      <dl class="l-lend_3rd_list list-cv">
                        <dt>査定について</dt>
                        <dd>
                          <a
                            class="cv-default"
                            href="https://www.royal-resort.co.jp/inquiry/karuizawa/quick/rent/input/"
                            target="_blank"
                          >
                            <span class="text-sub"
                              >まずは60秒でカンタン査定</span
                            >
                            <span class="text-main"
                              >無料で賃料査定スタート</span
                            >
                          </a>
                        </dd>
                        <dd>
                          <a
                            class="cv-both"
                            href="https://www.royal-resort.co.jp/inquiry/karuizawa/both/input/"
                            target="_blank"
                          >
                            <span class="text-sub">売却と賃貸を同時に査定</span>
                            <span class="text-main">どっちも査定</span>
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <p class="c-linkClose">閉じる</p>
                </div>
              </li>
              <li itemprop="name">
                <a href="" class="tenpo">店舗案内</a>
              </li>
            </ul>
            <div class="c-fixBtn_today u-onlyMobile lazyload">
              <a href="" class="icon-info01">今日の軽井沢</a>
            </div>
          </div>
          <div class="l-nav_tenpoInner areaSelect lazyload">
            <nav class="l-nav_mobile">
              <ul
                itemtype="https://www.schema.org/SiteNavigationElement"
                class="l-nav_menu"
              >
                <li itemprop="name" class="">
                  <a href="" itemprop="url" class="-active">熱海・湯河原</a>
                </li>
                <li itemprop="name" class="">
                  <a href="" itemprop="url">伊東・伊豆高原</a>
                </li>
                <li itemprop="name" class="">
                  <a href="" itemprop="url">箱根</a>
                </li>
                <li itemprop="name" class="">
                  <a href="" itemprop="url">軽井沢</a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
        <div v-if="renderFavHeader.includes(path)" class="c-fixBtn lazyloaded">
          <a
            class="c-fixBtn_item item-mail"
            :href="`/karuizawa/submitform/input?_id=${this.$route.params.id}&form=detail`"
            target="_blank"
          >
            <span class="item_icon">
              <img :src="icon1" alt="" class="lazyloaded" />
            </span>
            <span class="item_text">メールで<br />お問い合わせ</span>
          </a>
          <a
            class="c-fixBtn_item item-favorite"
            href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/favo_list"
          >
            <span class="item_icon">
              <img :src="icon2" alt="" class="lazyloaded" />
              <span class="item_icon_num" id="fav_cnt">{{ favTotal }}</span>
            </span>
            <span class="item_text"
              >お気に入り<br /><span class="spNon">一覧</span></span
            >
          </a>
          <div class="spNon lazyloaded">
            <dl class="item-tel">
              <dt class="acTriger">
                <span class="icon-phone01"></span>無料通話
              </dt>
              <dd>
                <a href="tel:0120-98-2311" class="">
                  <p class="item-tel-no">0120-98-2311</p>
                  <p>9:00～20:00 年中無休（年末年始除く）</p>
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div class="l-navBtn lazyload">
          <div class="c-hamburger c-hamburger_tenpo lazyload" id="btn01">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import $ from "jquery";
import icon1 from "@/assets/img/icon_mail.svg";
import icon2 from "@/assets/img/icon_fav02.svg";
import { mapState } from 'vuex';

export default {
  name: "",
  components: {},
  mixins: [],
  props: {
    path: String,
  },
  data() {
    return {
      icon1,
      icon2,
      renderFavHeader: ["detail", "favlist"],
    };
  },
  computed: {
    ...mapState(['favTotal'])
  },
  watch: {},
  mounted() {
    this.headerClick();
    this.freePhoneHandler()
  },
  beforeDestroy() {
  },
  methods: {
    headerClick() {
      // 菜单栏切换
      $(".l-nav_menu_secondBtn > .is-btn").append(
        '<span class="c-menu_arrow"></span>'
      );
      $(".c-hamburger_normal").on("click", function () {
        $(this).toggleClass("active");
        $(".l-nav").slideToggle();
      });
      $(".c-hamburger_tenpo").on("click", function () {
        $(this).toggleClass("active");
        $(this).parents(".l-header_nav-tempo").toggleClass("active");

        $(".l-nav_tenpo").slideToggle();
      });

      // header一系列交互
      $(".l-nav_menu_secondBtn > .is-btn").on("click", function () {
        var resultActiveMenu = $(".l-nav_tenpo").find(".-active");
        var secondBtn = $(this).parent(".l-nav_menu_secondBtn");
        if ($(secondBtn).hasClass("-active")) {
          $(secondBtn).removeClass("-active");
          $(this)
            .next(".l-nav_menu_secondWrap")
            .slideUp()
            .removeClass("-active");
        } else if (resultActiveMenu.length) {
          $(".l-nav_menu_secondBtn").not(this).removeClass("-active");
          $(".l-nav_menu_secondWrap").slideUp().removeClass("-active");
          $(secondBtn).toggleClass("-active");
          $(this)
            .next(".l-nav_menu_secondWrap")
            .slideToggle()
            .toggleClass("-active");
          return false;
        } else {
          $(secondBtn).toggleClass("-active");
          $(this)
            .next(".l-nav_menu_secondWrap")
            .slideToggle()
            .toggleClass("-active");
          return false;
        }
      });
      $(".c-linkClose").on("click", function () {
        $(".l-nav_menu_secondBtn").not(this).removeClass("-active");
        $(".l-nav_menu_secondWrap").slideUp().removeClass("-active");
      });
    },
    headerFollow() {
      var $win = $(window),
        $main = $(".l-contents"),
        $nav = $(".l-header_nav-tempo"),
        navHeight = $nav.outerHeight(),
        navPos = $nav.offset().top,
        fixedClass = "is-fixed";
      $win.on("load scroll", function () {
        var value = $(this).scrollTop();
        if (value > navPos) {
          $nav.addClass(fixedClass);
          $main.css("margin-top", navHeight);
        } else {
          $nav.removeClass(fixedClass);
          $main.css("margin-top", "0");
        }
      });
    },
    freePhoneHandler() {
      $(".acTriger").on("click", function () {
        $(this).next().fadeToggle("fast");
        $(this).toggleClass("active");
      });
    },
  },
};
</script>
