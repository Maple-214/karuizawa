<template>
  <div class="l-contents form inquiry lazyloaded">
    <form id="form1" class="inputForm">
      <section class="c-title_page">
        <h1 class="c-titleText">お問い合わせ</h1>
        <div class="c-form-step">
          <ol class="c-form-step_list">
            <li class="c-form-step_item is-current">
              <span class="c-form-step_num">1</span>
              <span class="c-form-step_label u-onlyMobile">入力</span>
              <span class="c-form-step_label u-onlyPc">お客様情報の入力</span>
            </li>
            <li class="c-form-step_item">
              <span class="c-form-step_num">2</span>
              <span class="c-form-step_label u-onlyMobile">内容確認</span>
              <span class="c-form-step_label u-onlyPc">入力内容の内容確認</span>
            </li>
            <li class="c-form-step_item">
              <span class="c-form-step_num">3</span>
              <span class="c-form-step_label u-onlyMobile">完了</span>
              <span class="c-form-step_label u-onlyPc">お問い合わせ完了</span>
            </li>
          </ol>
        </div>

        <div class="c-titleLead">
          <p>
            必要事項をご入力の上、<br
              class="u-onlyMobile"
            />一番下の「確認画面へ進む」ボタンを押してください。
          </p>
        </div>
      </section>

      <section class="l-innerWrap l-contSection">
        <div class="p-form_rowWrap">
          <div class="c-title_sub">
            <h2 class="c-titleText">
              ご質問、ご要望などがございましたら、ご記入ください
            </h2>
          </div>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">ご質問・ご要望等</dt>
            <dd class="p-form_rowBox">
              <textarea
                class="input400"
                name="demand"
                cols="50"
                rows="10"
                v-model="formData.customer_opinion"
              ></textarea>
            </dd>
          </dl>
        </div>
      </section>

      <section class="l-innerWrap l-contSection">
        <div class="p-form_rowWrap">
          <div class="c-title_sub">
            <h2 class="c-titleText">お客様の情報をご入力ください。</h2>
          </div>

          <dl class="p-form_row is-must">
            <dt class="p-form_rowTitle">お名前</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <span class="p-form_separateText">姓</span>

                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="last_name"
                    v-model="formData.last_name"
                    type="text"
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">名</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name"
                    type="text"
                    v-model="formData.first_name"
                  />
                </p>
              </div>
              <p class="c-text_example">例）山田　太郎</p>

              <!-- <p class="c-dataErrorText">エラーテキスト
 </p> -->
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">フリガナ</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <span class="p-form_separateText">セイ</span>

                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="last_name_kana"
                    v-model="formData.last_name_kana"
                    type="text"
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">メイ</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name_kana"
                    type="text"
                    v-model="formData.first_name_kana"
                  />
                </p>
              </div>
              <p class="c-text_example">例）ヤマダ　タロウ</p>

              <!-- <p class="c-dataErrorText">エラーテキスト
 </p> -->
            </dd>
          </dl>

          <dl class="p-form_row is-must">
            <dt class="p-form_rowTitle">メールアドレス</dt>
            <dd class="p-form_rowBox">
              <p class="p-form_block">
                <input
                  maxlength="255"
                  class="c-form_text fm-sizeWide"
                  name="mail"
                  type="email"
                  v-model="formData.mail"
                />
              </p>
              <p class="c-text_example">例）info@royal-resort.co.jp</p>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">ご希望の連絡方法</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-1"
                    name="contact_type"
                    type="radio"
                    value="E-mail"
                    v-model="formData.contact_type"
                  />
                  <label class="" for="contact-type-1">E-mail</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-2"
                    name="contact_type"
                    type="radio"
                    value="電話"
                    v-model="formData.contact_type"
                  />
                  <label class="" for="contact-type-2">電話</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-3"
                    name="contact_type"
                    type="radio"
                    value="FAX"
                    v-model="formData.contact_type"
                  />
                  <label class="" for="contact-type-3">FAX</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-4"
                    name="contact_type"
                    type="radio"
                    value="郵送"
                    v-model="formData.contact_type"
                  />
                  <label class="" for="contact-type-4">郵送</label>
                </p>
              </div>

              <ul class="c-list_asterisk">
                <li>希望の連絡方法に該当する欄にご入力ください。</li>
              </ul>
              <!-- <p class="c-dataErrorText">エラーテキスト
 </p> -->
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">ご住所</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <span class="p-form_separateText">〒</span>

                  <input
                    class="c-form_text address1"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 80px"
                    id="address_zip1"
                    name="address_zip1"
                    type="text"
                    v-model="formData.address1"
                    @change="addressChange"
                  />

                  <span class="p-form_separateText">―</span>
                  <input
                    class="c-form_text address2"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 100px"
                    id="address_zip2"
                    name="address_zip2"
                    type="text"
                    v-model="formData.address2"
                    @change="addressChange"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate c-form_select">
                  <select
                    id="address_prefecture"
                    v-model="formData.address_prefecture"
                    name="address_prefecture"
                  >
                    <option value="" selected="selected">選択</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都">東京都</option>
                    <option value="神奈川県">神奈川県</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                  </select>
                </p>
                <p class="p-form_separate">
                  <input
                    id="address_city"
                    class="c-form_text"
                    placeholder="市区町村"
                    maxlength="64"
                    name="address_city"
                    type="text"
                    v-model="formData.address_city"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner">
                <input
                  id="address_city_number"
                  class="c-form_text fm-sizeWide"
                  placeholder="番地"
                  maxlength="64"
                  name="address_city_number"
                  type="text"
                  v-model="formData.address_city_number"
                />
              </div>
              <div class="p-rowBox_inner">
                <input
                  id="address_city_detail"
                  class="c-form_text fm-sizeWide"
                  placeholder="建物・号室"
                  maxlength="64"
                  name="address_city_detail"
                  type="text"
                  v-model="formData.address_city_detail"
                />
              </div>
            </dd>
          </dl>

          <dl class="p-form_row is-must">
            <dt class="p-form_rowTitle">電話番号</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="phone1"
                    type="text"
                    v-model="formData.phone1"
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="phone2"
                    type="text"
                    v-model="formData.phone2"
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="phone3"
                    v-model="formData.phone3"
                    type="text"
                  />
                </p>
              </div>

              <!-- <p class="c-dataErrorText">エラーテキスト
 </p> -->
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">FAX</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="fax_fax1"
                    type="text"
                    v-model="formData.fax_fax1"
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="fax_fax2"
                    type="text"
                    v-model="formData.fax_fax2"
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="fax_fax3"
                    type="text"
                    v-model="formData.fax_fax3"
                  />
                </p>

                <!-- <p class="c-dataErrorText">エラーテキスト
 </p> -->
              </div>
            </dd>
          </dl>
        </div>
      </section>

      <section class="l-innerWrap l-contSection">
        <div class="p-form_rowWrap">
          <div class="c-title_sub">
            <h2 class="c-titleText">過去にお問い合わせはございましたか？</h2>
          </div>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">
              有無<br class="u-onlyPc" />
              (担当者)
            </dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="past-type-1"
                    name="before_already"
                    type="radio"
                    value="あり"
                    v-model="formData.before_already"
                  />
                  <label class="" for="past-type-1">あり</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="past-type-2"
                    name="before_already"
                    type="radio"
                    value="なし"
                    v-model="formData.before_already"
                  />
                  <label class="" for="past-type-2">なし</label>
                </p>
              </div>
              <p class="c-form_tits">
                担当者がおわかりであればご記入ください。
              </p>
              <p class="p-form_separate">
                <input
                  class="c-form_text"
                  maxlength="32"
                  id="past-person"
                  name="before_past_person"
                  type="text"
                  v-model="formData.before_past_person"
                />
              </p>
            </dd>
          </dl>
        </div>
      </section>

      <section class="l-innerWrap l-contSection">
        <div class="c-boxLine privacy">
          <div class="c-title_sub">
            <h2 class="c-titletext">個人情報のお取り扱いについて</h2>
          </div>
          <p class="c-text">
            お問い合わせにあたっては、当社の<a
              tareget="__blank"
              href="/privacy/"
              >個人情報のお取り扱いについて</a
            >をご確認いただいた上で、下の「送信」ボタンをクリックしてください。<br />個人情報の送信は、ssl暗号化通信により保護されております。
          </p>
        </div>
        <div class="l-form_btnBox">
          <p class="c-btn">
            <input
              class="c-btn_prev fm-submit"
              type="button"
              value="確認画面へ進む"
              @click="submitHandler"
            />
          </p>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: "KaruizawaInputInquiry",

  data() {
    return {
      formData: {
        last_name: "",
        first_name: "",
        mail: "",
        phone1: "",
        phone2: "",
        phone3: "",
        customer_opinion: "",
        address1: "",
        address2: "",
        contact_type: "",
        address_prefecture: "",
        address_city: "",
        address_city_number: "",
        address_city_detail: "",
        fax_fax1: "",
        fax_fax2: "",
        fax_fax3: "",
        before_already: "",
        before_past_person:''
      },
    };
  },

  mounted() {
    console.log(111);
  },

  methods: {
    addressChange() {
      console.log(111);
      let lines, prefecture, city, city_detail, address;
      lines = this.formData.address1 + this.formData.address2;
      prefecture = "#address_prefecture";
      city = "#address_city";
      city_detail = "#address_city_detail";
      if (lines.length == 7 && !isNaN(lines)) {
        this.set_address(lines, prefecture, city, city_detail);
      }
    },
    set_address(lines, prefecture_id, city_id, city_detail_id) {
      fetch(`https://www.royal-resort.co.jp/inquiry/zip?zip=${lines}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status == "OK") {
            const obj = res.results[0].address_components;
            if (obj.length < 3) {
              alert("正しい郵便番号を入力してください");
              return false;
            }
            let prefecture = "";
            let city = "";
            let oaza = "";
            const _this = this;
            $(prefecture_id + " option")
              .filter(function (index) {
                for (let i = 0; i < obj.length; i++) {
                  // 配列の長さ分の繰り返し
                  if ($(this).text() === obj[i]["long_name"]) {
                    _this.formData.address_prefecture = obj[i]["long_name"];
                  }
                }
              })
              .prop("selected", true);

            let city_name = "";
            for (let i = obj.length - 1; i >= 0; i--) {
              if (obj[i].types.indexOf("locality") >= 0) {
                city_name = city_name + obj[i]["long_name"];
              }
            }
            let city_name_detail = "";
            for (let i = obj.length - 1; i >= 0; i--) {
              if (obj[i].types.indexOf("sublocality") >= 0) {
                city_name_detail = city_name_detail + obj[i]["long_name"];
              }
            }
            _this.formData.address_city = city_name + city_name_detail;
            // $(city_id).val(city_name + city_name_detail);
          } else {
            return false;
          }
        });
    },
    submitHandler() {
      if (
        !(
          this.formData.last_name &&
          this.formData.first_name &&
          this.formData.mail &&
          this.formData.phone1 &&
          this.formData.phone2 &&
          this.formData.phone3
        )
      ) {
        alert("入力内容を確認してください。");
      } else {
        localStorage.setItem("input_inquiry", JSON.stringify(this.formData));
        this.$router.push({ path: "/karuizawa/submitform/confirm_inquiry" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      console.log(this.formData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
