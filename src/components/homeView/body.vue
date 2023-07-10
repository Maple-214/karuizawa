<template>
  <div class="l-contents tenpoTop" style="padding-bottom: 0px">
    <!-- 首页banner轮播 -->
    <section v-if="swiper1.length > 0" class="js-sliderWrap_carousel">
      <div class="js-slider_carouselPic">
        <div
          class="js-slider_carouselPicItem c-pic"
          v-for="item in swiper1"
          :key="item._id"
        >
          <a :href="'/#/karuizawa/detail/' + item._id" target="_blank">
            <div class="tenchi">
              <img :src="item.preview_image.url" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div class="js-slider_carouselPicNav">
        <div
          class="js-slider_carouselPicNavItem"
          v-for="item in swiper1"
          :key="item._id"
        >
          <a href="" target="_blank" rel="noopener noreferrer">
            <div class="l-flex lazyload">
              <div class="l-flex_item c-textBox lazyload">
                <ul class="c-data">
                  <li class="c-tits u-wf_notoSerif">{{ item.name }}</li>
                </ul>
                <p class="c-lead">
                  {{ item.desc }}
                </p>
              </div>
              <div class="l-flex_item c-categoryBox lazyload">
                <p class="c-location">{{ item.station }}</p>
                <p class="c-price">
                  <span class="u-wf_num">{{ item.price }}</span
                  >万円
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section v-if="loading" class="js-sliderWrap_carousel">
      <div class="js-slider_carouselPic">
        <div
          class="js-slider_carouselPicItem c-pic"
          v-for="item in 5"
          :key="item"
        >
          <el-skeleton style="" animated>
            <template slot="template">
              <el-skeleton-item variant="image" style="height: 340px" />
            </template>
          </el-skeleton>
          <el-skeleton :rows="4" animated />
        </div>
      </div>
    </section>
    <!--  軽井沢エリアの不動産 -->
    <section class="l-innerWrap l-contSection l-etcWrap">
      <h2 class="l-mainCopy">
        <span class="inline-b">軽井沢エリアの</span>
        <span class="inline-b">不動産・別荘・マンション・土地など、</span>
        <span class="inline-b">リゾート物件の売買・賃貸のことなら</span>
        <span class="inline-b">ロイヤルリゾートへ。</span>
      </h2>
      <div class="l-etc">
        <div class="p-no1">
          <img
            :src="imgBadgeSrc"
            alt="リゾート仲介物件HP掲載数No.1 ※1"
            class=""
          />
        </div>
        <div class="p-tenpoNum -num2 lazyloaded">
          <dl class="p-tenpoNum_inner">
            <dt class="p-tenpoNum_title">売買</dt>
            <dd class="p-tenpoNum_main">
              <span class="p-tenpoNum_num">402</span>件
            </dd>
          </dl>
          <dl class="p-tenpoNum_inner">
            <dt class="p-tenpoNum_title">賃貸</dt>
            <dd class="p-tenpoNum_main">
              <span class="p-tenpoNum_num">75</span>件
            </dd>
          </dl>
          <p class="p-att">※2</p>
        </div>
        <div class="p-news lazyloaded">
          ◇ご案内について◇<br />
          いつも当店のホームページをご覧いただき誠にありがとうございます。<br />
          物件案内につきましては、当日のご案内および前日の案内予約の場合、ご見学ができない場合があります。<br />
          また、事前のご予約でも売主様の都合により日時を変更していただく事がございますので、ご理解の程よろしくお願いいたします。<br />
        </div>
      </div>
      <p class="p-att">
        ※1.熱海・軽井沢・伊東・箱根のリゾート物件で仲介会社がネット上で公開している掲載数の合計　※2.現在登録している物件数（商談中の物件含む）
      </p>
    </section>
    <!--  -->
    <section class="pg-areatop-wrapper l-container" style="margin-bottom: 20px">
      <div class="l-innerWrap lazyloaded">
        <a href="/" target="_blank">
          <img
            src="https://www.royal-resort.co.jp/src/img/karuizawa/top/ardebaran_pc.png?ver=1_01"
            alt="アルデバラン軽井沢 軽井沢駅徒歩9分 全16邸 6/5（月）登録販売開始！"
            width="1000"
            height="190"
            data-src="https://www.royal-resort.co.jp/src/img/karuizawa/top/ardebaran_pc.png?ver=1_01"
            loading="lazy"
            class="ls-is-cached lazyloaded"
          />
        </a>
      </div>
    </section>
    <!-- adv1  -->
    <div class="l-contSection l-innerWrap lazyloaded">
      <ul class="c-tabMenu_nav">
        <li class="tab_item is-active">PICK UP</li>
        <li class="tab_item">買いたい</li>
        <li class="tab_item">借りたい</li>
        <li class="tab_item">売りたい</li>
        <li class="tab_item">貸したい</li>
      </ul>
    </div>
    <div style="overflow-x: hidden;" class="c-lag c-lag_pdTnone lazyloaded">
      <div class="l-innerWrap lazyloaded">
        <section class="">
          <div class="p-tabMenu c-tabMenu_content lazyloaded">
            <div
              class="tab_content lazyloaded is-show"
              id="tab1_content"
              style="display: block"
            >
              <Pickup
                :loading="loading"
                :sourceData="sourceData1"
                sectionClassName="l-contSection"
              />
              <Pickup
                :loading="loading"
                :sourceData="sourceData2"
                sectionClassName="l-contSection"
              />
              <Pickup
                :loading="loading"
                :sourceData="sourceData3"
                sectionClassName="l-contSection"
              />
              <Pickup
                :loading="loading"
                :sourceData="sourceData4"
                sectionClassName="l-contSection"
              />
              <Pickup
                :loading="loading"
                :sourceData="sourceData5"
                sectionClassName="l-contSection"
              />
            </div>
            <div
              class="tab_content lazyloaded"
              id="tab2_content"
              style="display: none"
            >
              <div class="tab_content_description l-form lazyloaded">
                <div class="c-searchBox_item lazyloaded">
                  <div class="c-title_sub lazyloaded">
                    <h3 class="c-titleText">
                      <span class="icon-conditions01"></span>種別から探す
                    </h3>
                  </div>
                  <ul class="c-linkList l-flex_3col">
                    <li class="l-flex_item">
                      <a
                        href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/?kind_code=1"
                        class="c-linkBtn_prev"
                        >マンション</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/?kind_code=2"
                        class="c-linkBtn_prev"
                        >戸建</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/?kind_code=3"
                        class="c-linkBtn_prev"
                        >土地</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="https://www.royal-resort.co.jp/karuizawa/estate_list_karuizawa/sell/?kind_code=4"
                        class="c-linkBtn_prev"
                        >投資・事業用</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="c-searchBox_item lazyloaded">
                  <div class="c-title_sub lazyloaded">
                    <h3 class="c-titleText">
                      <span class="icon-pin01"></span>エリアから物件を探す
                    </h3>
                  </div>
                  <div class="c-map u-onlyPc lazyloaded">
                    <img
                      src="https://www.royal-resort.co.jp/src/img/karuizawa/map/map_karuizawa.svg"
                      alt=""
                      width="1366"
                      height="1016"
                      class="c-map-img lazyloaded"
                      data-src="https://www.royal-resort.co.jp/src/img/karuizawa/map/map_karuizawa.svg"
                      loading="lazy"
                    /><noscript
                      ><img
                        src="https://www.royal-resort.co.jp/src/img/karuizawa/map/map_karuizawa.svg"
                        alt=""
                        width="1366"
                        height="1016"
                        class="c-map-img"
                        data-eio="l"
                    /></noscript>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 1366 1016"
                    >
                      <g
                        id="eca8646f-bf1e-4a46-9813-6fb440db125b"
                        data-name="btn"
                      >
                        <a href="">
                          <rect
                            id="a6ea23e2-140e-459f-9d4e-e8cf480e43b4"
                            data-name="中軽井沢南"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="609.5"
                            y="527.75"
                            width="218"
                            height="199"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="a1965bdd-ac6d-42b1-8c4c-53594ae0e9fd"
                            data-name="北軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="502.5"
                            y="-1.25"
                            width="367"
                            height="170"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="b94a6a0a-69a8-4e4f-9c45-a60f5e676727"
                            data-name="御代田"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="116.5"
                            y="298.75"
                            width="226"
                            height="456"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="afb76b53-5bdf-4890-aacc-f9e56b341838"
                            data-name="西軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="359.5"
                            y="395.75"
                            width="232"
                            height="465"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="eba70927-75dd-4cd3-bf63-388f8a8dd196"
                            data-name="軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="845.5"
                            y="498.75"
                            width="293"
                            height="187"
                          ></rect>
                        </a>
                        <a href="">
                          <polygon
                            id="a8e59bd9-7424-408f-a641-4f4f71b88609"
                            data-name="南軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            points="846.5 703.75 846.5 744.75 610.5 744.75 610.5 984.75 1139.5 984.75 1139.5 873.75 1139.5 744.75 1139.5 703.75 846.5 703.75"
                          ></polygon>
                        </a>
                        <a href="">
                          <rect
                            id="e2d450fb-0b4c-4a0b-8219-2b12622ca14e"
                            data-name="旧軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="845.5"
                            y="187.75"
                            width="293"
                            height="291"
                          ></rect>
                        </a>
                        <a href="">
                          <polygon
                            id="f63b1e90-c541-479d-ba54-bf3cdfff808f"
                            data-name="中軽井沢北"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            points="478.5 187.75 478.5 377.75 609.5 377.75 609.5 519.75 827.5 520.75 827.5 187.75 478.5 187.75"
                          ></polygon>
                        </a>
                        <a href="">
                          <rect
                            id="b913081d-c191-4b7b-921c-673e08ab6afe"
                            data-name="その他"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="156.5"
                            y="879.75"
                            width="186"
                            height="105"
                          ></rect>
                        </a>
                      </g>
                    </svg>
                  </div>
                  <ul class="c-linkList l-flex_3col u-onlyMobile">
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">旧軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">中軽井沢北</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">中軽井沢南</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">新軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">南軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">西軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">北軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">御代田</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">その他</a>
                    </li>
                  </ul>
                </div>
                <div class="c-searchBox_item lazyload">
                  <form
                    action="/karuizawa/estate_list_karuizawa/sell/"
                    id="search_sell_tab"
                  >
                    <h3 class="c-tits">フリーワード検索</h3>
                    <div class="c-textSearch lazyload">
                      <input
                        id="sbox1"
                        name="keyword"
                        type="text"
                        placeholder="キーワードを入力"
                      />
                    </div>
                    <div class="l-form_btnBox lazyload">
                      <p class="c-btn c-btn_search">
                        <input type="button" value="検索" name="" class="" />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="tab_content lazyloaded"
              id="tab3_content"
              style="display: none"
            >
              <div class="tab_content_description l-form lazyloaded">
                <div class="c-searchBox_item lazyloaded">
                  <div class="c-title_sub lazyloaded">
                    <h3 class="c-titleText">
                      <span class="icon-conditions01"></span>種別から探す
                    </h3>
                  </div>
                  <ul class="c-linkList l-flex_3col">
                    <li class="l-flex_item">
                      <a
                        href="/karuizawa/estate_list_karuizawa/rent/?kind_code=1"
                        class="c-linkBtn_prev"
                        >アパート・マンション</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="/karuizawa/estate_list_karuizawa/rent/?kind_code=2"
                        class="c-linkBtn_prev"
                        >戸建・テラスハウス</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="/karuizawa/estate_list_karuizawa/rent/?kind_code=3"
                        class="c-linkBtn_prev"
                        >駐車場</a
                      >
                    </li>
                    <li class="l-flex_item">
                      <a
                        href="/karuizawa/estate_list_karuizawa/rent/?kind_code=4"
                        class="c-linkBtn_prev"
                        >事業用</a
                      >
                    </li>
                    <!--                                                 <li class="l-flex_item"><a href="" class="c-linkBtn_prev">シーズン貸し</a></li> -->
                  </ul>
                </div>
                <div class="c-searchBox_item lazyloaded">
                  <div class="c-title_sub lazyloaded">
                    <h3 class="c-titleText">
                      <span class="icon-pin01"></span>エリアから物件を探す
                    </h3>
                  </div>
                  <div class="c-map u-onlyPc lazyloaded">
                    <img
                      src="https://www.royal-resort.co.jp/src/img/karuizawa/map/map_karuizawa.svg"
                      alt=""
                      width="1366"
                      height="1016"
                      class="c-map-img lazyloaded"
                      loading="lazy"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 1366 1016"
                    >
                      <g
                        id="eca8646f-bf1e-4a46-9813-6fb440db125b"
                        data-name="btn"
                      >
                        <a href="">
                          <rect
                            id="a6ea23e2-140e-459f-9d4e-e8cf480e43b4"
                            data-name="中軽井沢南"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="609.5"
                            y="527.75"
                            width="218"
                            height="199"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="a1965bdd-ac6d-42b1-8c4c-53594ae0e9fd"
                            data-name="北軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="502.5"
                            y="-1.25"
                            width="367"
                            height="170"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="b94a6a0a-69a8-4e4f-9c45-a60f5e676727"
                            data-name="御代田"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="116.5"
                            y="298.75"
                            width="226"
                            height="456"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="afb76b53-5bdf-4890-aacc-f9e56b341838"
                            data-name="西軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="359.5"
                            y="395.75"
                            width="232"
                            height="465"
                          ></rect>
                        </a>
                        <a href="">
                          <rect
                            id="eba70927-75dd-4cd3-bf63-388f8a8dd196"
                            data-name="軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="845.5"
                            y="498.75"
                            width="293"
                            height="187"
                          ></rect>
                        </a>
                        <a href="">
                          <polygon
                            id="a8e59bd9-7424-408f-a641-4f4f71b88609"
                            data-name="南軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            points="846.5 703.75 846.5 744.75 610.5 744.75 610.5 984.75 1139.5 984.75 1139.5 873.75 1139.5 744.75 1139.5 703.75 846.5 703.75"
                          ></polygon>
                        </a>
                        <a href="">
                          <rect
                            id="e2d450fb-0b4c-4a0b-8219-2b12622ca14e"
                            data-name="旧軽井沢"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="845.5"
                            y="187.75"
                            width="293"
                            height="291"
                          ></rect>
                        </a>
                        <a href="">
                          <polygon
                            id="f63b1e90-c541-479d-ba54-bf3cdfff808f"
                            data-name="中軽井沢北"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            points="478.5 187.75 478.5 377.75 609.5 377.75 609.5 519.75 827.5 520.75 827.5 187.75 478.5 187.75"
                          ></polygon>
                        </a>
                        <a href="">
                          <rect
                            id="b913081d-c191-4b7b-921c-673e08ab6afe"
                            data-name="その他"
                            class="bff42b12-84e4-4c42-b421-7ba1593b5383"
                            x="156.5"
                            y="879.75"
                            width="186"
                            height="105"
                          ></rect>
                        </a>
                      </g>
                    </svg>
                  </div>
                  <ul class="c-linkList l-flex_3col u-onlyMobile">
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">旧軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">中軽井沢北</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">中軽井沢南</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">新軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">南軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">西軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">北軽井沢</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">御代田</a>
                    </li>
                    <li class="l-flex_item">
                      <a href="" class="c-linkBtn_prev">その他</a>
                    </li>
                  </ul>
                </div>
                <div class="c-searchBox_item lazyloaded">
                  <form action="" id="search_rent_tab">
                    <h3 class="c-tits">フリーワード検索</h3>
                    <div class="c-textSearch lazyloaded">
                      <input
                        id="sbox1"
                        name="keyword"
                        type="text"
                        placeholder="キーワードを入力"
                      />
                    </div>
                    <div class="l-form_btnBox lazyloaded">
                      <p class="c-btn c-btn_search">
                        <input type="button" value="検索" name="" class="" />
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="tab_content lazyloaded"
              id="tab4_content"
              style="display: none"
            >
              <div class="tab_content_description l-form lazyloaded">
                <div class="l-sell lazyloaded">
                  <div class="l-sell_inner lazyloaded">
                    <div class="l-sell_2nd lazyloaded">
                      <dl class="l-sell_2nd_list">
                        <dt class="u-wf_notoSerif">
                          リゾートマンション・<br />別荘のご売却
                        </dt>
                        <dd>
                          <p>
                            ロイヤルリゾートでは軽井沢に別荘を持ちたいというお問い合わせが急増しており、前月も数多くのご成約をいただきました。
                          </p>
                          <p>
                            現在、軽井沢エリアの売却物件が不足しており、多くの購入希望のお客様にお待ちいただいている状況です。
                          </p>
                          <p>
                            もしもご売却をご検討でしたら、コロナ禍の今こそ好条件でご売却できるチャンスです！
                          </p>
                          <a class="c-linkBtn_prev" href=""
                            >ロイヤルの売却とは</a
                          >
                        </dd>
                      </dl>
                    </div>
                    <div class="l-sell_3rd lazyloaded">
                      <dl class="l-sell_3rd_list list-main">
                        <dt>ご売却について</dt>
                        <dd><a href="">ロイヤルが選ばれる理由</a></dd>
                        <dd><a href="">売却の流れ</a></dd>
                        <dd><a href="">成約事例</a></dd>
                        <dd><a href="">購入希望者の声</a></dd>
                      </dl>
                      <dl class="l-sell_3rd_list list-cv">
                        <dt>査定について</dt>
                        <dd>
                          <a class="cv-default" href="">
                            <span class="text-sub"
                              >まずは60秒でカンタン査定</span
                            >
                            <span class="text-main"
                              >無料で売却査定スタート</span
                            >
                          </a>
                        </dd>
                        <dd>
                          <a class="cv-both" href="">
                            <span class="text-sub">売却と賃貸を同時に査定</span>
                            <span class="text-main">どっちも査定</span>
                          </a>
                        </dd>
                        <dd>
                          <a class="cv-instantly" href="">
                            <span class="text-sub"
                              >お手持ちの不動産をすぐに現金化</span
                            >
                            <span class="text-main">即金買取査定</span>
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab_content lazyloaded"
              id="tab5_content"
              style="display: none"
            >
              <div class="l-lend lazyloaded">
                <div class="l-lend_inner lazyloaded">
                  <div class="l-lend_2nd lazyloaded">
                    <dl class="l-lend_2nd_list">
                      <dt class="u-wf_notoSerif">
                        リゾートマンション・<br />別荘の賃貸経営
                      </dt>
                      <dd>
                        <p>
                          軽井沢の賃貸募集・管理はロイヤルリゾートにお任せください。当社はリゾート不動産専門の仲介会社です。<br />貸したいとお考えのオーナー様。集客に強い駅前店舗ロイヤルリゾートにお任せ下さい。
                        </p>
                        <a class="c-linkBtn_prev" href=""
                          >ロイヤルの賃貸経営とは</a
                        >
                      </dd>
                    </dl>
                  </div>
                  <div class="l-lend_3rd lazyloaded">
                    <dl class="l-lend_3rd_list list-main">
                      <dt>賃貸経営について</dt>
                      <dd><a href="">ロイヤルが選ばれる理由</a></dd>
                      <dd><a href="">賃貸経営の流れ</a></dd>
                      <dd><a href="">よくあるご質問</a></dd>
                    </dl>
                    <dl class="l-lend_3rd_list list-cv">
                      <dt>査定について</dt>
                      <dd>
                        <a class="cv-default" href="">
                          <span class="text-sub">まずは60秒でカンタン査定</span>
                          <span class="text-main">無料で売却査定スタート</span>
                        </a>
                      </dd>
                      <dd>
                        <a class="cv-both" href="">
                          <span class="text-sub">売却と賃貸を同時に査定</span>
                          <span class="text-main">どっちも査定</span>
                        </a>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="l-contSection p-specialCont">
          <Advlists
            :dataSource="advlists1"
            :className="'p-specialCont_bnr bnr-col3'"
          />
          <Advlists :dataSource="advlists2" :className="'p-specialCont_bnr'" />
          <Advlists :dataSource="advlists3" :className="'p-specialCont_bnr'" />
          <Advlists :dataSource="advlists4" :className="'p-specialCont_bnr'" />
          <Advlists
            :dataSource="advlists5"
            :className="'p-specialCont_bnr bnr-col3'"
          />
        </section>
      </div>
    </div>
    <!-- <Footers /> -->
  </div>
</template>
<script>
import "/src/assets/slick/slick.min.js";
import "/src/assets/utils/jquery-match-height.js";
import "/src/assets/slick/slick-theme.css";
import "/src/assets/slick/slick.css";
import Pickup from "./pickup.vue";
import Advlists from "./advlists.vue";
// import Footers from './footers.vue'
import imgBadge from "@/assets/img/badge_a1_g.png";
import { getHourses } from "@/apis/index.ts";

export default {
  name: "",
  components: {
    Pickup,
    Advlists,
    // Footers
  },
  mixins: [],
  props: {},
  data() {
    return {
      loading: true,
      swiper1: [],
      allList: [],
      imgBadge,
      sourceData1: {
        title: "新着物件",
        showAll: true,
        isdetail: false,
      },
      sourceData2: {
        title: "営業担当のオススメ物件",
        showAll: true,
        isdetail: false,
      },
      sourceData3: {
        title: "価格変更",
        showAll: true,
        isdetail: false,
      },
      sourceData4: {
        title: "新着賃貸物件",
        showAll: true,
        isdetail: false,
      },
      sourceData5: {
        title: "おすすめ賃貸物件",
        showAll: true,
        isdetail: false,
      },
      advlists1: [
        {
          id: 1,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-resortwork.jpg.webp",
        },
        {
          id: 2,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-resortwork.jpg.webp",
        },
        {
          id: 3,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-resortwork.jpg.webp",
        },
      ],
      advlists2: [
        {
          id: 1,
          src: "https://www.royal-resort.co.jp/src/img/bnr/bnr-ranking-r.gif.webp",
        },
        {
          id: 2,
          src: "https://www.royal-resort.co.jp/src/img/bnr/bnr-ranking-r.gif.webp",
        },
        {
          id: 3,
          src: "https://www.royal-resort.co.jp/src/img/bnr/bnr-ranking-r.gif.webp",
        },
        {
          id: 4,
          src: "https://www.royal-resort.co.jp/src/img/bnr/bnr-ranking-r.gif.webp",
        },
      ],
      advlists3: [
        {
          id: 1,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-blog.jpg.webp",
        },
        {
          id: 2,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-blog.jpg.webp",
        },
        {
          id: 3,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-blog.jpg.webp",
        },
        {
          id: 4,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-blog.jpg.webp",
        },
      ],
      advlists4: [
        {
          id: 1,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-rs.jpg.webp",
        },
        {
          id: 2,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-rs.jpg.webp",
        },
        {
          id: 3,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-rs.jpg.webp",
        },
        {
          id: 4,
          src: "https://www.royal-resort.co.jp/src/img/static/feature-karuizawa/bnr-karuizawa-rs.jpg.webp",
        },
      ],
      advlists5: [
        {
          id: 1,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-recruit.png.webp",
        },
        {
          id: 2,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-recruit.png.webp",
        },
        {
          id: 3,
          src: "https://www.royal-resort.co.jp/src/img/topic_images/karuizawa/bnr-recruit.png.webp",
        },
      ],
      listQuery: {
        getall: true,
      },
    };
  },
  computed: {
    imgBadgeSrc() {
      return this.imgBadge;
    },
  },
  watch: {},
  mounted() {
    this.initSlick();
    this.getList();
    this.$adaptHeight();
    this.cLagPdTnoneHandler();
  },
  methods: {
    initSlick() {
      $(".js-slider_carouselPic")
        .not(".slick-initialized")
        .slick({
          asNavFor: ".js-slider_carouselPicNav",
          infinite: true,
          centerPadding: "100px",
          lazyLoad: "ondemand",
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
          lazyLoad: "ondemand",
          slidesToShow: 3,
          slidesToScroll: 1,
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

      $(".js-slider_carousel_pickup")
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
    cLagPdTnoneHandler() {
      $(".is-show").show();
      $(".tab_item").on("click", function () {
        $(".is-active").removeClass("is-active");
        $(this).addClass("is-active").fadeIn();
        $(".is-show").removeClass("is-show").hide();
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $(".tab_content").eq(index).addClass("is-show").fadeIn();
      });
    },
    async getList() {
      const data = await getHourses(this.listQuery);
      this.allList = data.data.data;
      this.swiper1 = this.allList.filter((i) => i.pic_type === "1");
      this.sourceData1 = {
        ...this.sourceData1,
        ary: this.allList.filter((i) => i.pic_type === "2"),
      };
      this.sourceData2 = {
        ...this.sourceData2,
        ary: this.allList.filter((i) => i.pic_type === "3"),
      };
      this.sourceData3 = {
        ...this.sourceData3,
        ary: this.allList.filter((i) => i.pic_type === "4"),
      };
      this.sourceData4 = {
        ...this.sourceData4,
        ary: this.allList.filter((i) => i.pic_type === "5"),
      };
      this.sourceData5 = {
        ...this.sourceData5,
        ary: this.allList.filter((i) => i.pic_type === "6"),
      };

      this.$nextTick(() => {
        this.loading = false;
        this.initSlick();
      });
    },
  },
};
</script>
<style scoped></style>
