<template>
  <div class="l-contents">
    <section class="c-title_page">
      <h1 class="c-titleText">お問い合わせ 完了</h1>
      <div class="c-form-step">
        <ol class="c-form-step_list">
          <li class="c-form-step_item">
            <span class="c-form-step_num">1</span>
            <span class="c-form-step_label u-onlyMobile">入力</span>
            <span class="c-form-step_label u-onlyPc">お客様情報の入力</span>
          </li>
          <li class="c-form-step_item">
            <span class="c-form-step_num">2</span>
            <span class="c-form-step_label u-onlyMobile">内容確認</span>
            <span class="c-form-step_label u-onlyPc">入力内容の内容確認</span>
          </li>
          <li class="c-form-step_item is-current">
            <span class="c-form-step_num">3</span>
            <span class="c-form-step_label u-onlyMobile">完了</span>
            <span class="c-form-step_label u-onlyPc">お問い合わせ完了</span>
          </li>
        </ol>
      </div>
    </section>
    <section class="l-innerWrap l-contSection c-message">
      <p class="c-tits_sizeL">
        この度は、ロイヤルリゾートへお問い合わせいただき、<br />誠にありがとうございます。
      </p>

      <p class="c-text">
        お問い合わせ正常に送信し、入力いただきましたメールアドレスに受付完了のメールを自動送信しました。
      </p>
      <p class="c-text">
        受付完了メールが届いているかご確認くださいますようお願いいたします。
      </p>
    </section>
    <section class="l-innerWrap l-contSection u-alC">
      <div class="c-boxLine">
        <h2 class="c-tits">【受付完了メールが届いていない場合】</h2>
        <p class="c-text">
          しばらく時間をおいても「受付完了メール」が届かない時はメールアドレスの入力間違いなどの可能性があります。
        </p>
        <p class="c-text">
          その場合は、お手数ですがメールアドレスに入力間違いがないかご確認のうえ、
          再度お問い合わせいただきますようお願いいたします。
        </p>
        <p class="c-text">
          また、お問い合わせいただきました内容につきましては、できる限りすぐ回答させていただきますが、返答までに数日かかる場合があります。<br />
          何卒、了承ください。
        </p>
      </div>
    </section>
  </div>
  <!-- <PageType4/> -->

</template>

<script>
import PageType4 from '../errorpage/PageType404.vue'

export default {
  name: "KaruizawaFinish",

  data() {
    return {};
  },
  components: {
    PageType4,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
