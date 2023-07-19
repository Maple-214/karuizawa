<template>
  <div>
    <form action="">
      <div class="c-lag l-contSection lazyloaded">
        <div class="c-headArea noFlex lazyloaded">
          <div class="p-headArea_title lazyloaded">
            <div class="c-title_pageOther lazyloaded">
              <h1 class="c-titleText">お気に入り一覧 - 売買</h1>
            </div>
          </div>
          <div class="c-resultContlor u-onlyPc lazyloaded">
            <div class="c-item second lazyloaded">
              <div class="c-allCheck lazyloaded">
                <div class="c-speechBubble c-form_check-txtInline lazyloaded">
                  <p>
                    <input
                      type="checkbox"
                      id="checkbox_all01"
                      name="area"
                      @change="check_all"
                    /><label for="checkbox_all01">全てをチェック</label>
                  </p>
                </div>
                <p>
                  <a
                    href=""
                    @click.prevent="multi_inquiry"
                    class="c-linkBtn_emp c-linkBtn_off"
                    >まとめて資料請求</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="l-sideNone l-innerWrap lazyloaded">
          <main class="l-mainCont">
            <div class="c-resultContlor u-onlyMobile lazyload">
              <div class="c-item second lazyload">
                <div class="c-allCheck lazyload">
                  <div class="c-speechBubble c-form_check-txtInline lazyload">
                    <p>
                      <input
                        type="checkbox"
                        id="checkbox_all02"
                        name="area2"
                        @click="check_all"
                      /><label for="checkbox_all02">全てをチェック</label>
                    </p>
                  </div>
                  <p>
                    <a
                      href="javascript:void(0)"
                      @click.prevent="multi_inquiry"
                      class="c-linkBtn_emp c-linkBtn_off"
                      >まとめて資料請求</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <section v-if="favLists.length > 0">
              <div
                v-for="item in favLists"
                :key="item._id"
                class="p-card_resultBox tap-item lazyloaded"
              >
                <div class="c-card_resultBox-head lazyloaded">
                  <p class="c-form_checkBox c-form_checkBox-simple">
                    <input
                      class="estate"
                      type="checkbox"
                      @change="inputChange"
                      id="check_2105565966390000015129"
                      name="estate_id[]"
                      value="2105565966390000015129"
                    /><label for="check_2105565966390000015129"></label>
                  </p>
                  <div class="c-titleBox lazyloaded">
                    <ul class="p-pickupLabel">
                      <li class="c-pickupLabel_num">
                        物件番号：{{ item._id }}
                      </li>
                    </ul>
                    <h4 class="c-title u-wf_notoSerif">
                      <a :href="'/#/karuizawa/detail/' + item._id" class="tap-item-link" target="_blank">{{
                        item.name
                      }}</a>
                    </h4>
                    <p class="c-lead">
                      {{ item.desc }}
                    </p>

                    <ul class="p-categoryLabel">
                      <li
                        v-for="tag in item.tag"
                        :key="tag"
                        class="c-categoryLabel_item hint--info"
                        data-hint='"永住したい"'
                      >
                        {{ tag }}
                      </li>
                    </ul>
                  </div>
                  <div class="c-btn_favorite lazyloaded">
                    <a
                      href="#note1"
                      class="non-scroll is-active"
                      id="2105565966390000015129_favorite"
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
                          class="js-deSvg icon_fav lazyloaded replaced-svg"
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
                </div>
                <div class="c-card_resultInner lazyloaded">
                  <div class="p-picBox lazyloaded">
                    <div class="p-picBox_2col lazyloaded">
                      <div class="l-flex_item c-pic lazyloaded">
                        <img
                          :src="item.preview_image.url"
                          alt=""
                          class="lazyloaded"
                        />
                      </div>
                      <div class="l-flex_item c-pic lazyloaded">
                        <img
                          :src="item.indoor_map_desc[0].url"
                          alt=""
                          class="lazyloaded"
                        />
                      </div>
                    </div>
                    <div class="p-picBox_3col lazyloaded">
                      <div class="l-flex_item c-pic lazyloaded">
                        <img
                          :src="item.indoor_map_desc[1].url"
                          alt=""
                          class="lazyloaded"
                        />
                      </div>
                      <div class="l-flex_item c-pic lazyloaded">
                        <img
                          :src="item.indoor_map_desc[2].url"
                          alt=""
                          class="lazyloaded"
                        />
                      </div>
                      <div class="l-flex_item c-pic lazyloaded">
                        <img
                          :src="item.indoor_map_desc[3].url"
                          alt=""
                          class="lazyloaded"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="l-table lazyloaded">
                    <table class="c-dataTable c-dataTable_deco">
                      <tbody>
                        <tr>
                          <th>価格</th>
                          <td class="c-price">
                            <span class="u-wf_num">{{ item.price }}</span>万円
                          </td>
                        </tr>
                        <tr>
                          <th>所在地</th>
                          <td>{{ item.location }}</td>
                        </tr>
                        <tr>
                          <th>最寄り駅</th>
                          <td>{{ item.transportation }}</td>
                        </tr>
                        <tr>
                          <th>間取り</th>
                          <td>{{ item.floor_plan }}</td>
                        </tr>
                        <tr>
                          <th>土地面積</th>
                          <td>{{ item.Land_area + "m²" }}</td>
                        </tr>
                        <tr>
                          <th>建物面積</th>
                          <td>{{ item.construction_area + "m²" }}</td>
                        </tr>
                        <tr>
                          <th>築年月</th>
                          <td>{{ item.time }}</td>
                        </tr>
                        <tr>
                          <th>階数</th>
                          <td>{{ item.House_structure }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section v-if="!(favLists.length > 0)">
              <div
                v-for="item in idsTotal"
                :key="item"
                class="p-card_resultBox tap-item lazyloaded"
              >
              <el-skeleton :rows="13" animated />
              </div>
              
            </section>

            <div class="c-footArea lazyloaded">
              <div class="c-resultContlor lazyloaded">
                <div class="c-item lazyloaded">
                  <div class="c-allCheck lazyloaded">
                    <div
                      class="c-speechBubble c-form_check-txtInline lazyloaded"
                    >
                      <p>
                        <input
                          type="checkbox"
                          id="checkbox_all03"
                          name="area3"
                          @click="check_all"
                        /><label for="checkbox_all03">全てをチェック</label>
                      </p>
                    </div>
                    <p>
                      <a
                        href="javascript:void(0)"
                        class="c-linkBtn_emp c-linkBtn_off"
                        >まとめて資料請求</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <section
              id="info_contact"
              class="c-lag l-contSection karuizawa_inq_f"
            >
              <div class="l-innerWrap lazyloaded">
                <div class="c-title_headingSimple lazyloaded">
                  <h2 class="c-titleText">お問い合わせ</h2>
                </div>
                <div
                  class="l-flex_2col l-flex_itemSize02 l-flex_spBlock c-tenpoList lazyloaded"
                >
                  <div class="l-flex_item js-spAcco lazyloaded">
                    <div class="c-title js-spAccoTitle lazyloaded">
                      <h2 class="c-titleText">ロイヤルリゾート 軽井沢駅前店</h2>
                    </div>
                    <div class="js-spAccoCont lazyload">
                      <p class="c-lead">
                        リフォーム、全て同じ建物内にてご相談いただけます。
                      </p>

                      <div class="l-table lazyload">
                        <table class="c-dataTable">
                          <tbody>
                            <tr>
                              <th>電話</th>
                              <td class="tel">0120-98-2311</td>
                            </tr>
                            <tr>
                              <th>営業時間</th>
                              <td>9:00～20:00 年中無休（年末年始除く）</td>
                            </tr>
                            <tr>
                              <th>住所</th>
                              <td>
                                〒389-0104　長野県北佐久郡軽井沢町軽井沢東7-1　油屋ビル1F
                              </td>
                            </tr>
                            <tr>
                              <th>アクセス</th>
                              <td>JR軽井沢駅 徒歩1分</td>
                            </tr>
                            <tr>
                              <th>電話（代）</th>
                              <td>0267-41-2311</td>
                            </tr>
                            <tr>
                              <th>FAX</th>
                              <td>0267-41-2312</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="l-flex_item js-spAcco lazyloaded">
                    <div class="js-spAccoCont lazyloaded">
                      <ul class="l-btnBox">
                        <li class="l-flex_item">
                          <a
                            href="/#/karuizawa/submitform/input_inquiry"
                            class="c-btn_block c-linkBtn_emp"
                            target="_blank"
                            >お問い合わせ</a
                          >
                        </li>
                        <li class="l-flex_item">
                          <a
                            href="/#/karuizawa/submitform/input_user"
                            class="c-btn_block c-linkBtn_emp"
                            target="_blank"
                            >簡単ネット査定</a
                          >
                        </li>
                        <li class="l-flex_item">
                          <a
                            href="#"
                            class="c-btn_block c-linkBtn_emp"
                            target="_blank"
                            >即金買取査定</a
                          >
                        </li>
                        <li class="l-flex_item">
                          <a
                            href="#"
                            class="c-btn_block c-linkBtn_emp"
                            target="_blank"
                            >リフォームのご相談</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </form>
    <!-- <p id="note1" class="js-toolTip">お気に入りに追加しました</p> -->
  </div>
</template>

<script>
import { getFavList as getFavListLocal, setFavList } from "@/utils/cookies.ts";
import { getFavLists } from "@/apis/index.ts";

export default {
  name: "KaruizawaIndex",

  data() {
    return {
      favLists: [],
      idsTotal:0,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    async init() {
      $(".c-allCheck .c-linkBtn_emp")?.addClass("c-linkBtn_off");
      const ids = getFavListLocal();
      this.idsTotal = ids?.length || 0
      console.log(ids);
      const res = await getFavLists({ ids });
      if (res.msg === "success") {
        this.favLists = res.data;
      }
    },
    check_all(elem) {
      this.estate_check_all(elem.target);
    },
    estate_check_all(elem) {
      if ($(elem).prop("checked")) {
        $(".estate").prop("checked", true);
        $("[id^=checkbox_all]").prop("checked", true);
        $(".c-allCheck .c-linkBtn_emp").removeClass("c-linkBtn_off");
      } else {
        $(".estate").prop("checked", false);
        $("[id^=checkbox_all]").prop("checked", false);
        $(".c-allCheck .c-linkBtn_emp").addClass("c-linkBtn_off");
      }
    },
    estate_check() {
      var cnt = $(".estate").length;
      var cnt_checked = $(".estate:checked").length;

      console.log(cnt_checked);
      if (cnt_checked <= 0) {
        $(".c-allCheck .c-linkBtn_emp").addClass("c-linkBtn_off");
      } else {
        $(".c-allCheck .c-linkBtn_emp").removeClass("c-linkBtn_off");
      }
    },
    inputChange() {
      this.estate_check();
    },

    multi_inquiry() {
      let checked = false;
      //	var prop = $(this).prop('checked');
      $('input[name="estate_id[]"]').each(function () {
        if ($(this).prop("checked")) {
          console.log($(this).val());
          $("<input>")
            .attr({
              type: "hidden",
              name: "id",
              value: $(this).val(),
            })
            .appendTo("#multi_inquiry_form");
          checked = true;
        }
      });

      if (checked == false) {
        alert("物件を選択してください。");
        return;
      }
      //   $("#multi_inquiry_form").submit();
    },
  },
};
</script>
<style scoped>
.st0 {
  fill: #ffffff;
}
.st1 {
  fill: #e9546b;
}
</style>
