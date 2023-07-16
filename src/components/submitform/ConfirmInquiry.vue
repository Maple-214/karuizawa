<template>
  <div class="l-contents form inquiry lazyloaded">
    <form id="form1" class="inputForm">
      <section class="c-title_page">
        <h1 class="c-titleText">お問い合わせ 内容確認</h1>
        <div class="c-form-step">
          <ol class="c-form-step_list">
            <li class="c-form-step_item">
              <span class="c-form-step_num">1</span>
              <span class="c-form-step_label u-onlyMobile">入力</span>
              <span class="c-form-step_label u-onlyPc">お客様情報の入力</span>
            </li>
            <li class="c-form-step_item is-current">
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
            />一番下の「この内容で送信」ボタンを押してください。
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
                :value="formData?.customer_opinion"
                disabled
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
                    type="text"
                    :value="formData?.last_name"
                    disabled
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">名</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name"
                    type="text"
                    :value="formData?.first_name"
                    disabled
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
                    type="text"
                    :value="formData?.last_name_kana"
                    disabled
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">メイ</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name_kana"
                    type="text"
                    :value="formData?.first_name_kana"
                    disabled
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
                  disabled
                  :value="formData?.mail"
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
                    disabled
                    value="E-mail"
                    :checked="formData?.contact_type === 'E-mail'"
                  />
                  <label class="" for="contact-type-1">E-mail</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-2"
                    name="contact_type"
                    type="radio"
                    value="電話"
                    disabled
                    :checked="formData?.contact_type === '電話'"
                  />
                  <label class="" for="contact-type-2">電話</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-3"
                    name="contact_type"
                    type="radio"
                    disabled
                    value="FAX"
                    :checked="formData?.contact_type === 'FAX'"
                  />
                  <label class="" for="contact-type-3">FAX</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-4"
                    name="contact_type"
                    type="radio"
                    disabled
                    value="郵送"
                    :checked="formData?.contact_type === '郵送'"
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
                    disabled
                    id="address_zip1"
                    name="address_zip1"
                    type="text"
                    :value="formData?.address1"
                  />

                  <span class="p-form_separateText">―</span>
                  <input
                    class="c-form_text address2"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 100px"
                    id="address_zip2"
                    disabled
                    name="address_zip2"
                    :value="formData?.address2"
                    type="text"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate">
                  <input
                    id="address_prefecture"
                    class="c-form_text"
                    placeholder="县"
                    maxlength="64"
                    name="address_prefecture"
                    type="text"
                    disabled
                    :value="formData?.address_prefecture"
                  />
                </p>
                <p class="p-form_separate">
                  <input
                    id="address_city"
                    class="c-form_text"
                    placeholder="市区町村"
                    maxlength="64"
                    disabled
                    name="address_city"
                    type="text"
                    :value="formData?.address_city"
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
                  disabled
                  :value="formData?.address_city_number"
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
                  disabled
                  :value="formData?.address_city_detail"
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
                    :value="formData?.phone1"
                    disabled
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="phone2"
                    :value="formData?.phone2"
                    disabled
                    type="text"
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    name="phone3"
                    type="text"
                    :value="formData?.phone3"
                    disabled
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
                    disabled
                    :value="formData?.fax_fax1"
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
                    :value="formData?.fax_fax2"
                    disabled
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
                    :value="formData?.fax_fax3"
                    disabled
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
                    disabled
                    value="あり"
                    :checked="formData?.before_already === 'あり'"
                  />
                  <label class="" for="past-type-1">あり</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="past-type-2"
                    name="before_already"
                    type="radio"
                    value="なし"
                    disabled
                    :checked="formData?.before_already === 'なし'"
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
                  disabled
                  type="text"
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
      </section>
      <section class="l-innerWrap l-contSection">
        <div class="l-form_btnBox">
          <p class="c-btn">
            <input
              class="c-btn_prev fm-submit"
              type="button"
              value="この内容で送信"
              @click="submitHandler"
            />
          </p>
        </div>

        <div class="l-form_btnBox">
          <p class="c-btn c-btn_sub">
            <input
              class="c-btn_prev_sub fm-submit"
              type="button"
              value="入力内容を修正する"
              @click="backHandler"
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
      formData: {},
    };
  },

  mounted() {
    this.formData = JSON.parse(localStorage.getItem("input_inquiry"));
    console.log(this.formData);
  },
  beforeUnmount() {
    localStorage.removeItem("input_inquiry");
  },

  methods: {
    backHandler() {
      this.$router.back();
      // this.$router.replace({ path: "/karuizawa/submitform/input_user" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    submitHandler() {
      this.$router.replace({ path: "/karuizawa/submitform/finish" });
      localStorage.removeItem("input_inquiry");
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
form .l-form_btnBox + .l-form_btnBox {
  margin-top: 10px;
}

form .l-form_btnBox .c-btn {
  text-align: center;
  position: relative;
  padding: 10px 0;
}
form .l-form_btnBox .c-btn::after {
  transition: 0.3s;
  content: "";
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 15px;
  margin: auto;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
form .l-form_btnBox .c-btn:hover::after {
  border-top: 1px solid #e9546b;
  border-right: 1px solid #e9546b;
}

form .l-form_btnBox .c-clicked:hover::after {
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
}

form .l-form_btnBox .c-btn_sub::after {
  transition: 0.3s;
  content: "";
  width: 8px;
  height: 8px;
  border-top: 1px solid #e9546b;
  border-right: 1px solid #e9546b;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -235px;
  margin: auto;
  -webkit-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  transform: rotate(225deg);
}

form .l-form_btnBox .c-btn input {
  width: 100%;
  display: block;
  padding: 10px 15px;
  background: #d6d6d6;
  border-radius: 5px;
  position: relative;
  font-weight: bold;
}

form .l-form_btnBox .c-btn .c-btn_prev {
  position: relative;
  display: inline-block;
  background: #e9546b;
  color: #ffffff;
  border: solid 1px #e9546b;
  padding: 10px 20px;
}
form .l-form_btnBox .c-btn .c-btn_prev_sub {
  position: relative;
  display: inline-block;
  background:  #fff;;
  color: #e9546b;
  border: solid 1px  #e9546b;
  padding: 10px 20px;
}

form .l-form_btnBox .c-btn .c-btn_prev:hover {
  background: #fff;
  color: #e9546b;  
}

form .l-form_btnBox .c-btn .c-btn_prev.fm-submit {
  padding: 20px 30px;
  min-width: 300px;
}

form .l-form_btnBox .c-btn .c-btn_prev_sub:hover {
  background: #fadce0;
  color: #e9546b;
}
form .l-form_btnBox .c-btn .c-clicked:hover {
  background: #aaa;
  color: #fff;
  border: solid 1px #aaa;
}


form .l-form_btnBox .c-btn .c-btn_prev_sub.fm-submit {
  padding: 20px 30px;
  min-width: 300px;
}

@media screen and (max-width: 768px) {
  form .l-form_btnBox .c-btn .c-btn_prev.fm-submit {
    width: 100%;
  }

  form .l-form_btnBox .c-btn .c-btn_prev_sub.fm-submit {
    width: 100%;
  }

}

form .l-form_btnBox .c-btn.c-btn_single {
  width: 100%;
}

@media screen and (min-width: 768px) {
  form .l-form_btnBox .c-btn.c-btn_single {
    width: 48%;
  }
}

form .l-form_btnBox .c-btn.c-btn_single input {
  background: #4d7326;
  color: #ffffff;
}

form .l-form_btnBox .c-btn.c-btn_search {
  width: auto;
  min-width: 300px;
  position: relative;
  padding: 0;
}

form .l-form_btnBox .c-btn.c-btn_search input {
  background: #e9546b;
  color: #ffffff;
  border: 1px solid #e9546b;
}

form .l-form_btnBox .c-btn.c-btn_search input:hover {
  /*opacity: 0.75;*/
  background: #fff;
  color: #e9546b;
  cursor: pointer;
}
form .l-form_btnBox .c-btn.c-btn_search:hover::before {
  color: #e9546b;
}

form .l-form_btnBox .c-btn.c-btn_search::before {
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e909";
  font-size: 1.8rem;
  color: #ffffff;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

@media screen and (max-width: 768px) {
  form .l-form_btnBox.col3 {
    flex-direction: column;
  }
}

form .l-form_btnBox.col3 .c-btn {
  width: 100%;
  margin-bottom: 20px;
  margin-right: 20px;
}

form .l-form_btnBox.col3 .c-btn:last-child {
  margin-bottom: 0;
  margin-right: 0;
}

@media screen and (min-width: 1040px) {
  form .l-form_btnBox.col3 .c-btn {
    width: 30%;
    margin-bottom: 0;
  }

  form .l-form_btnBox.col3 .c-btn:last-child {
    margin-right: 0;
  }
}

form .l-form_btnBox.justify-center {
  justify-content: center;
}

form .l-form_customerInfo .l-form_item+.l-form_item {
  margin-top: 10px;
  padding-top: 10px;
}

form .l-form_customerInfo .l-form_item dt {
  font-size: 1.4rem;
  margin-bottom: 0;
  color: #4d7326;
}

form .l-form_customerInfo .l-form_item dd {
  font-size: 1.6rem;
}

form .l-flex_form {
  justify-items: center;
}

form .c-form_listSubItem {
  padding: 10px;
}

form .c-form_listItem {
  display: block;
}

form ul.c-form_list {
  margin-bottom: -10px;
}

form ul.c-form_list .c-form_listItem {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.c-form_kind li:not(:nth-child(4n)) {
	margin-right: 15px;
}
.c-form_area li:not(:nth-child(4n)) {
	margin-right: 15px;
}
.c-form_area.l-flex_6col li:not(:nth-child(6n)) {
	margin-right: 15px;
}
.c-form_area li {
	margin-bottom: 15px;
}
.c-lag-wh {
	background: #fff!important;
	padding: 0 !important;
	margin-bottom: 0 !important;
}
.c-searchBox_item {
	margin-top: 20px;
}
.search-block {
	margin: 50px 0;
}
@media screen and (max-width: 768px) {
	form .l-flex_form.sp2col {
		margin-top: -10px;
		justify-content: space-between !important;
	}
	form .l-flex_form.sp2col > li {
		margin-top: 10px;
		width: calc(50% - 5px);
	}
	form .l-flex_form.sp2col > li:not(:nth-child(4n)) {
		margin-right: 0;
	}
	form .c-form_area.sp2col > li {
		margin-bottom: 0;
	}
	form .c-form_area.sp2col > li:not(:nth-child(6n)) {
		margin-right: 0;
	}
}
</style>
