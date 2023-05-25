<template>
  <form
    method="POST"
    action="https://www.royal-resort.co.jp/inquiry/karuizawa/multi/finish"
    accept-charset="UTF-8"
    id="form1"
    class="inputForm form"
  >
    <input
      name="_token"
      type="hidden"
      value="ZTomEAvU7X6ZF0p7Epv8WqvqRfxkNGdKvhOCmLjh"
    />

    <input
      name="_token"
      type="hidden"
      value="ZTomEAvU7X6ZF0p7Epv8WqvqRfxkNGdKvhOCmLjh"
    />
    <input
      name="multi"
      type="hidden"
      value="2105565966390000015129,2105565966390000016966"
    />
    <input
      name="estate_id"
      type="hidden"
      value="2105565966390000015129,2105565966390000016966"
    />
    <input name="last_name" type="hidden" value="1" />
    <input name="first_name" type="hidden" value="1" />
    <input name="last_name_kana" type="hidden" value="ヤマダ" />
    <input name="first_name_kana" type="hidden" value="タロウ" />
    <input name="mail" type="hidden" value="info@royal-resort.co.jp" />
    <input name="contact_type" type="hidden" value="1" />
    <input name="address_zip1" type="hidden" value="11" />
    <input name="address_zip2" type="hidden" value="11" />
    <input name="address_prefecture" type="hidden" value="02" />
    <input name="address_city" type="hidden" value="11" />
    <input name="address_city_number" type="hidden" value="11" />
    <input name="address_city_detail" type="hidden" value="11" />
    <input name="phone1" type="hidden" value="1" />
    <input name="phone2" type="hidden" value="1" />
    <input name="phone3" type="hidden" value="1" />
    <input name="fax_fax1" type="hidden" value="11" />
    <input name="fax_fax2" type="hidden" value="11" />
    <input name="fax_fax3" type="hidden" value="11" />
    <input name="inspection_date" type="hidden" value="2023年05月25日" />
    <input name="inspection_date_submit" type="hidden" value="2023年05月25日" />
    <input name="inspection_minute" type="hidden" value="10:00" />
    <input name="before_already" type="hidden" value="1" />
    <input name="before_past_person" type="hidden" value="111" />
    <input name="demand" type="hidden" value="1111" />
    <input name="area" type="hidden" value="karuizawa" />

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
    <section class="l-innerWrap">
      <table class="pg-contact">
        <colgroup>
          <col width="20%" />
          <col width="60%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th class="no">お問い合わせ番号</th>
            <th>物件名</th>
            <th class="price">価格</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="no">C1-406</td>
            <td>千ヶ滝西区別荘地　戸建</td>
            <td class="price">7,980万円</td>
          </tr>
          <input name="multi[]" type="hidden" value="2105565966390000015129" />
          <input
            name="estate_id[]"
            type="hidden"
            value="2105565966390000015129"
          />
          <tr>
            <td class="no">F1-402</td>
            <td>追分上の原　戸建</td>
            <td class="price">3,150万円</td>
          </tr>
          <input name="multi[]" type="hidden" value="2105565966390000016966" />
          <input
            name="estate_id[]"
            type="hidden"
            value="2105565966390000016966"
          />
        </tbody>
      </table>
    </section>

    <section class="l-innerWrap l-contSection">
      <div class="p-form_rowWrap">
        <div class="c-title_sub">
          <h2 class="c-titleText">お客様の情報をご入力ください。</h2>
        </div>

        <dl class="p-form_row is-must">
          <dt class="p-form_rowTitle">お名前</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">1　1</p>
          </dd>
        </dl>

        <dl class="p-form_row">
          <dt class="p-form_rowTitle">フリガナ</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">ヤマダ　タロウ</p>
          </dd>
        </dl>

        <dl class="p-form_row is-must">
          <dt class="p-form_rowTitle">メールアドレス</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">info@royal-resort.co.jp</p>
          </dd>
        </dl>

        <dl class="p-form_row">
          <dt class="p-form_rowTitle">ご希望の連絡方法</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">E-mail</p>
          </dd>
        </dl>

        <dl class="p-form_row">
          <dt class="p-form_rowTitle">ご住所</dt>
          <dd class="p-form_rowBox">
            <div class="p-rowBox_inner">
              <p class="p-form_separate">
                <span class="p-form_separateText">〒</span>
                11
                <span class="p-form_separateText">―</span>
                11
              </p>
            </div>
            <div class="p-rowBox_inner">
              <p class="p-form_separate">青森県</p>
              <p class="p-form_separate">11</p>
            </div>
            <div class="p-rowBox_inner">11</div>
            <div class="p-rowBox_inner">11</div>
          </dd>
        </dl>

        <dl class="p-form_row is-must">
          <dt class="p-form_rowTitle">電話番号</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">1-1-1</p>
          </dd>
        </dl>

        <dl class="p-form_row">
          <dt class="p-form_rowTitle">FAX</dt>
          <dd class="p-form_rowBox">
            <p class="p-form_separate">11-11-11</p>
          </dd>
        </dl>
      </div>
    </section>

    <section class="l-innerWrap l-contSection">
      <div class="p-form_rowWrap">
        <div class="c-title_sub">
          <h2 class="c-titleText">見学をご希望の方</h2>
        </div>

        <dl class="p-form_row">
          <dt class="p-form_rowTitle">見学をご希望の方</dt>
          <dd class="p-form_rowBox">
            <div class="p-rowBox_inner sp2col">
              2023年05月25日 10:00
              <p class="p-form_separateText">時頃希望</p>
            </div>

            <!-- <p class="c-dataErrorText">エラーテキスト
    </p> -->
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
            <div class="p-rowBox_inner">あり</div>
            <p class="c-form_tits">担当者がおわかりであればご記入ください。</p>
            <p class="p-form_separate">111</p>
          </dd>
        </dl>
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
          <dd class="p-form_rowBox">1111</dd>
        </dl>
      </div>
    </section>

    <section class="l-innerWrap l-contSection">
      <div class="l-form_btnBox">
        <p class="c-btn">
          <input
            class="c-btn_prev fm-submit"
            type="submit"
            value="この内容で送信"
          />
        </p>
      </div>

      <div class="l-form_btnBox">
        <p class="c-btn">
          <input
            class="c-btn_prev fm-submit"
            type="button"
            value="入力内容を修正する"
            @click="goBackHandler"
          />
        </p>
      </div>
    </section>
  </form>
</template>

<script>
export default {
  name: "KaruizawaConfirm",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    goBackHandler() {
      this.$router.back();
    //   document.documentElement.scrollTop = 0;
    //   document.body.scrollTop = 0;
    },
  },
};
</script>

<style scoped></style>
