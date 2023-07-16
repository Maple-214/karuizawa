<template>
  <div class="l-contents form inquiry lazyloaded" style="margin-top: 0px">
    <form id="form1" class="inputForm">
      <section class="c-title_page">
        <h1 class="c-titleText">メールでクイック査定</h1>
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

        <div
          v-if="
            !(
              formData.last_name &&
              formData.first_name &&
              formData.mail &&
              formData.phone1 &&
              formData.phone2 &&
              formData.phone3
            )
          "
          class="c-form-error"
        >
          <p>
            <img :src="err_icon" alt="！" />
            入力内容を確認してください。
          </p>
        </div>

        <div class="c-titleLead">
          <p>
            必要事項をご入力の上、<br
              class="u-onlyMobile"
            />一番下の「確認画面へ進む」ボタンを押してください。
          </p>

          <p class="form-cap">
            ※当社では、主に北佐久郡軽井沢町および北佐久郡御代田町の土地、戸建、マンションをお取り扱いしております。<br />上記地域外の物件は、査定およびお取り扱いができない場合がございますので予めご了承くださいませ。
          </p>
        </div>
      </section>

      <section class="l-innerWrap l-contSection">
        <div class="p-form_rowWrap">
          <div class="c-title_sub">
            <h2 class="c-titleText">
              査定希望物件についての情報をご入力ください。
            </h2>
          </div>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">物件種別</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-1"
                    @click="() => disp_estate_kind(null)"
                    name="estate_kind"
                    type="radio"
                    value="マンション"
                    v-model="formData.estate_kind"
                  />
                  <label class="" for="inquiries-ace-property-type-1"
                    >マンション</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-2"
                    @click="() => disp_estate_kind(null)"
                    name="estate_kind"
                    type="radio"
                    value="土地"
                    v-model="formData.estate_kind"
                  />
                  <label class="" for="inquiries-ace-property-type-2"
                    >土地</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-3"
                    @click="() => disp_estate_kind(null)"
                    name="estate_kind"
                    type="radio"
                    value="戸建"
                    v-model="formData.estate_kind"
                  />
                  <label class="" for="inquiries-ace-property-type-3"
                    >戸建</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-4"
                    @click="() => disp_estate_kind(null)"
                    name="estate_kind"
                    type="radio"
                    value="投資・事業用"
                    v-model="formData.estate_kind"
                  />
                  <label class="" for="inquiries-ace-property-type-4"
                    >投資・事業用</label
                  >
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">物件所在地</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <span class="p-form_separateText">〒</span>
                  <input
                    id="estate_address_zip1"
                    class="c-form_text address1"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 80px"
                    name="estate_address_zip1"
                    type="text"
                    @input="() => address_change('estate')"
                    v-model="formData.address3"
                  />

                  <span class="p-form_separateText">―</span>
                  <input
                    id="estate_address_zip2"
                    class="c-form_text address2"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 100px"
                    name="estate_address_zip2"
                    type="text"
                    v-model="formData.address4"
                    @input="() => address_change('estate')"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate c-form_select">
                  <select
                    id="estate_address_prefecture"
                    name="estate_address_prefecture"
                    v-model="formData.estate_address_prefecture"
                  >
                    <option value="" selected disabled>選択</option>
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
                    id="estate_address_city"
                    class="c-form_text"
                    placeholder="市区町村"
                    maxlength="64"
                    name="estate_address_city"
                    type="text"
                    v-model="formData.estate_address_city"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner">
                <input
                  id="estate_address_city_number"
                  class="c-form_text fm-sizeWide"
                  placeholder="番地"
                  maxlength="64"
                  name="estate_address_city_number"
                  type="text"
                  v-model="formData.estate_address_city_number"
                />
              </div>
              <div class="p-rowBox_inner">
                <input
                  id="estate_address_city_detail"
                  class="c-form_text fm-sizeWide"
                  placeholder="建物・号室"
                  maxlength="64"
                  name="estate_address_city_detail"
                  type="text"
                  v-model="formData.estate_address_city_detail"
                />
              </div>
            </dd>
          </dl>

          <dl class="p-form_row mansion_parts">
            <dt class="p-form_rowTitle">マンションの方</dt>
            <dd class="p-form_rowBox">
              <p class="c-form_tits">マンション名</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate fm-size50per">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="mansion_name"
                    type="text"
                    v-model="formData.mansion_name"
                  />
                </p>
              </div>
              <p class="c-form_tits">棟室</p>
              <div class="p-rowBox_inner p-form_spBlock">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="mansion_tou"
                    type="text"
                    v-model="formData.mansion_tou"
                  /><span class="p-form_separateText">号棟</span>
                </p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="mansion_room"
                    v-model="formData.mansion_room"
                    type="text"
                  /><span class="p-form_separateText">号室</span>
                </p>
              </div>
              <p class="c-form_tits">専有面積</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    step="any"
                    name="mansion_area"
                    type="number"
                    v-model="formData.mansion_area"
                  /><span class="p-form_separateText">m²</span>
                </p>
              </div>
              <p class="c-form_tits">間取り</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="mansion_layout"
                    v-model="formData.mansion_layout"
                    type="text"
                  />
                </p>
              </div>
              <p class="c-form_tits">築年月日</p>
              <div class="p-rowBox_inner p-form_spBlock">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-mansion-year-type-1"
                    class="fm-radio__item"
                    name="mansion_nengo"
                    type="radio"
                    value="平成"
                    v-model="formData.mansion_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-mansion-year-type-1"
                    >平成</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-mansion-year-type-2"
                    class="fm-radio__item"
                    name="mansion_nengo"
                    type="radio"
                    value="昭和"
                    v-model="formData.mansion_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-mansion-year-type-2"
                    >昭和</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-mansion-year-type-9"
                    class="fm-radio__item"
                    name="mansion_nengo"
                    type="radio"
                    value="西暦"
                    v-model="formData.mansion_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-mansion-year-type-9"
                    >西暦</label
                  >
                </p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-address2"
                    inputmode="numeric"
                    pattern="\d*"
                    name="mansion_year"
                    type="number"
                    v-model="formData.mansion_year"
                  />

                  <span class="p-form_separateText">年</span>
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row build_parts">
            <dt class="p-form_rowTitle">戸建の方</dt>
            <dd class="p-form_rowBox">
              <p class="c-form_tits">建物面積</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    step="any"
                    name="build_build_area"
                    type="number"
                    v-model="formData.build_build_area"
                  /><span class="separate-text">m²</span>
                </p>
              </div>
              <p class="c-form_tits">土地面積</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    step="any"
                    name="build_land_area"
                    type="number"
                    v-model="formData.build_land_area"
                  /><span class="separate-text">m²</span>
                </p>
              </div>

              <p class="c-form_tits">分譲地名</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate fm-size50per">
                  <input
                    class="c-form_text fm-sizeWide"
                    maxlength="16"
                    name="build_name"
                    type="text"
                    v-model="formData.build_name"
                  />
                </p>
              </div>

              <p class="c-form_tits">区画番号</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-sizeWide"
                    maxlength="16"
                    name="build_block"
                    type="text"
                    v-model="formData.build_block"
                  />
                </p>
              </div>

              <p class="c-form_tits">築年月日</p>
              <div class="p-rowBox_inner p-form_spBlock">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-build-year-type-1"
                    class="fm-radio__item"
                    name="build_nengo"
                    type="radio"
                    value="平成"
                    v-model="formData.build_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-build-year-type-1"
                    >平成</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-build-year-type-2"
                    class="fm-radio__item"
                    name="build_nengo"
                    type="radio"
                    value="昭和"
                    v-model="formData.build_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-build-year-type-2"
                    >昭和</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-ms-build-year-type-9"
                    class="fm-radio__item"
                    name="build_nengo"
                    type="radio"
                    value="西暦"
                    v-model="formData.build_nengo"
                  />
                  <label
                    class="fm-radio"
                    for="inquiries-ace-ms-build-year-type-9"
                    >西暦</label
                  >
                </p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-address2"
                    inputmode="numeric"
                    pattern="\d*"
                    name="build_year"
                    type="number"
                    v-model="formData.build_year"
                  />

                  <span class="p-form_separateText">年</span>
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row land_parts">
            <dt class="p-form_rowTitle">土地の方</dt>
            <dd class="p-form_rowBox">
              <p class="c-form_tits">土地面積</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate"></p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    step="any"
                    name="land_land_area"
                    type="number"
                    v-model="formData.land_land_area"
                  /><span class="separate-text">m²</span>
                </p>
              </div>
              <p class="c-form_tits">分譲地名</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate fm-size50per">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="land_name"
                    type="text"
                    v-model="formData.land_name"
                  />
                </p>
              </div>
              <p class="c-form_tits">区画番号</p>
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="land_block"
                    type="text"
                    v-model="formData.land_block"
                  />
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt id="price_title" class="p-form_rowTitle">ご希望売却価格</dt>
            <dd class="p-form_rowBox">
              <p>
                <input
                  id="city"
                  class="c-form_text"
                  maxlength="64"
                  name="sell_price"
                  type="number"
                  v-model="formData.sell_price"
                />

                <span class="p-form_separateText">円</span>
              </p>
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
                    v-model="formData.last_name"
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
              <p v-if="!formData.first_name" class="c-dataErrorText">
                <i class="iconimage-alert"></i>姓を入力してください。
              </p>
              <p v-if="!formData.last_name" class="c-dataErrorText">
                <i class="iconimage-alert"></i>名を入力してください。
              </p>

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
                    v-model="formData.last_name_kana"
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
              <p v-if="!formData.mail" class="c-dataErrorText">
                <i class="iconimage-alert"></i> メールを正しく入力してください。
              </p>
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
                    v-model="formData.address1"
                    type="text"
                    @change="address_change"
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
                    @change="address_change"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate c-form_select">
                  <select
                    v-model="formData.address_prefecture"
                    id="address_prefecture"
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
                    type="text"
                    v-model="formData.phone3"
                  />
                </p>
              </div>
              <p v-if="!formData.phone1" class="c-dataErrorText">
                <i class="iconimage-alert"></i>電話番号1を入力してください。
              </p>
              <p v-if="!formData.phone2" class="c-dataErrorText">
                <i class="iconimage-alert"></i>電話番号2を入力してください。
              </p>
              <p v-if="!formData.phone3" class="c-dataErrorText">
                <i class="iconimage-alert"></i>電話番号3を入力してください。
              </p>
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
            <h2 class="c-titleText">
              よろしければ、以下の項目もお答えください。
            </h2>
          </div>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">性別</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquizries-etc-sex-type-1"
                    name="customer_gender"
                    type="radio"
                    value="男性"
                    v-model="formData.customer_gender"
                  />
                  <label class="fm-radio" for="inquizries-etc-sex-type-1"
                    >男性</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquizries-etc-sex-type-2"
                    name="customer_gender"
                    type="radio"
                    value="女性"
                    v-model="formData.customer_gender"
                  />
                  <label class="fm-radio" for="inquizries-etc-sex-type-2"
                    >女性</label
                  >
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">ご年齢</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    name="customer_age"
                    type="number"
                    v-model="formData.customer_age"
                  />
                  <span class="p-form_separateText">歳</span>
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt id="price_title" class="p-form_rowTitle">ご職業</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <ul class="c-form_list">
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-1"
                      name="customer_job"
                      type="radio"
                      value="会社員"
                      v-model="formData.customer_job"
                    />
                    <label for="inquiries-etc-job-type-1">会社員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-2"
                      name="customer_job"
                      type="radio"
                      value="会社役員"
                      v-model="formData.customer_job"
                    />
                    <label for="inquiries-etc-job-type-2">会社役員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-3"
                      name="customer_job"
                      type="radio"
                      value="経営者"
                      v-model="formData.customer_job"
                    />
                    <label for="inquiries-etc-job-type-3">経営者</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-4"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="公務員"
                    />
                    <label for="inquiries-etc-job-type-4">公務員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-5"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="教職"
                    />
                    <label for="inquiries-etc-job-type-5">教職</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-6"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="医者"
                    />
                    <label for="inquiries-etc-job-type-6">医者</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-7"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="弁護士・会計士・税理士等"
                    />
                    <label for="inquiries-etc-job-type-7"
                      >弁護士・会計士・税理士等</label
                    >
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-8"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="自由業"
                    />
                    <label for="inquiries-etc-job-type-8">自由業</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-9"
                      name="customer_job"
                      type="radio"
                      v-model="formData.customer_job"
                      value="無職"
                    />
                    <label for="inquiries-etc-job-type-9">無職</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-10"
                      name="customer_job"
                      type="radio"
                      value="その他"
                      v-model="formData.customer_job"
                    />
                    <label for="inquiries-etc-job-type-10">その他</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      class="c-form_text"
                      maxlength="16"
                      name="customer_job_text"
                      type="text"
                      v-model="formData.customer_job_text"
                    />
                  </li>
                </ul>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">
              弊社を何でお知りになりましたか？<br />
              (複数選択可能)
            </dt>
            <dd class="p-form_rowBox white">
              <p class="c-form_tits">インターネット</p>
              <div class="p-rowBox_inner">
                <ul class="c-form_list c-form_checkBox c-form_checkBox">
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-1"
                      name="customer_media_internet[]"
                      type="checkbox"
                      value="ロイヤルハウジングホームページ"
                      v-model="formData.customer_media_internet"
                    />
                    <label for="inquiries-etc-contact-json-1"
                      >ロイヤルハウジングホームページ</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-2"
                      name="customer_media_internet[]"
                      v-model="formData.customer_media_internet"
                      type="checkbox"
                      value="YAHOO！不動産"
                    />
                    <label for="inquiries-etc-contact-json-2"
                      >YAHOO！不動産</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-3"
                      name="customer_media_internet[]"
                      type="checkbox"
                      value="SUUMO"
                      v-model="formData.customer_media_internet"
                    />
                    <label for="inquiries-etc-contact-json-3">SUUMO</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-4"
                      name="customer_media_internet[]"
                      type="checkbox"
                      v-model="formData.customer_media_internet"
                      value="検索サイト(google)"
                    />
                    <label for="inquiries-etc-contact-json-4"
                      >検索サイト(google)</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-5"
                      name="customer_media_internet[]"
                      v-model="formData.customer_media_internet"
                      type="checkbox"
                      value="検索サイト(Yahoo!)"
                    />
                    <label for="inquiries-etc-contact-json-5"
                      >検索サイト(Yahoo!)</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-6"
                      name="customer_media_internet[]"
                      type="checkbox"
                      v-model="formData.customer_media_internet"
                      value="その他インターネット"
                    />
                    <label for="inquiries-etc-contact-json-6"
                      >その他インターネット</label
                    >
                  </li>
                </ul>
              </div>
              <p class="c-form_tits">インターネット以外</p>
              <div class="p-rowBox_inner">
                <ul class="c-form_list c-form_checkBox c-form_checkBox">
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-1"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="新聞折込チラシ"
                      v-model="formData.customer_media_other"
                    />
                    <label for="inquiries-etc-contact-json-other-1"
                      >新聞折込チラシ</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-2"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="ポスティング"
                      v-model="formData.customer_media_other"
                    />
                    <label for="inquiries-etc-contact-json-other-2"
                      >ポスティング</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-3"
                      name="customer_media_other[]"
                      type="checkbox"
                      v-model="formData.customer_media_other"
                      value="駅前配布チラシ"
                    />
                    <label for="inquiries-etc-contact-json-other-3"
                      >駅前配布チラシ</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-4"
                      name="customer_media_other[]"
                      type="checkbox"
                      v-model="formData.customer_media_other"
                      value="現地看板"
                    />
                    <label for="inquiries-etc-contact-json-other-4"
                      >現地看板</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-5"
                      name="customer_media_other[]"
                      type="checkbox"
                      v-model="formData.customer_media_other"
                      value="誘導看板"
                    />
                    <label for="inquiries-etc-contact-json-other-5"
                      >誘導看板</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-6"
                      name="customer_media_other[]"
                      v-model="formData.customer_media_other"
                      type="checkbox"
                      value="交通(電車・バス)広告"
                    />
                    <label for="inquiries-etc-contact-json-other-6"
                      >交通(電車・バス)広告</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-7"
                      name="customer_media_other[]"
                      type="checkbox"
                      v-model="formData.customer_media_other"
                      value="駅広告"
                    />
                    <label for="inquiries-etc-contact-json-other-7"
                      >駅広告</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-8"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="紹介"
                      v-model="formData.customer_media_other"
                    />
                    <label for="inquiries-etc-contact-json-other-8">紹介</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-9"
                      v-model="formData.customer_media_other"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="雑誌"
                    />
                    <label for="inquiries-etc-contact-json-other-9">雑誌</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-10"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="ダイレクトメール"
                      v-model="formData.customer_media_other"
                    />
                    <label for="inquiries-etc-contact-json-other-10"
                      >ダイレクトメール</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-11"
                      name="customer_media_other[]"
                      type="checkbox"
                      v-model="formData.customer_media_other"
                      value="その他"
                    />
                    <label for="inquiries-etc-contact-json-other-11"
                      >その他</label
                    >
                  </li>
                </ul>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">購入のご予定</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner all2col">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-etc-buy-type-1"
                    name="customer_buy"
                    type="radio"
                    value="良いものがあればいつでも"
                    v-model="formData.customer_buy"
                  />
                  <label class="" for="inquiries-etc-buy-type-1"
                    >良いものがあればいつでも</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-etc-buy-type-2"
                    name="customer_buy"
                    type="radio"
                    value="半年以内に購入予定"
                    v-model="formData.customer_buy"
                  />
                  <label class="" for="inquiries-etc-buy-type-2"
                    >半年以内に購入予定</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-etc-buy-type-3"
                    name="customer_buy"
                    type="radio"
                    value="一年以内に購入予定"
                    v-model="formData.customer_buy"
                  />
                  <label class="" for="inquiries-etc-buy-type-3"
                    >一年以内に購入予定</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-etc-buy-type-4"
                    name="customer_buy"
                    type="radio"
                    value="購入の予定はない"
                    v-model="formData.customer_buy"
                  />
                  <label class="" for="inquiries-etc-buy-type-4"
                    >購入の予定はない</label
                  >
                </p>
              </div>
            </dd>
          </dl>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">その他、ご希望・質問</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner">
                <textarea
                  class="fm-textarea"
                  rows="5"
                  name="customer_opinion"
                  cols="50"
                  v-model="formData.customer_opinion"
                ></textarea>
              </div>
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

      <div class="l-form_btnBox">
        <p class="c-btn">
          <input
            class="c-btn_prev fm-submit"
            type="button"
            value="確認画面へ進む"
            @click="submit_handler"
          />
        </p>
      </div>
    </form>
  </div>
</template>
<script>
import err_icon from "@/assets/img/icon_alert.svg";
export default {
  name: "KaruizawaInputUser",

  data() {
    return {
      err_icon,
      formData: {
        estate_kind: "",
        last_name: "",
        first_name: "",
        mail: "",
        phone1: "",
        phone2: "",
        phone3: "",
        address1: "",
        address2: "",
        address3: "",
        address4: "",
        address_prefecture: "",
        estate_address_prefecture: "",
        estate_address_city: "",
        address_city: "",
        estate_address_city_number: "",
        address_city_number: "",
        estate_address_city_detail: "",
        address_city_detail: "",
        mansion_name: "",
        mansion_tou: "",
        mansion_room: "",
        mansion_year: "",
        mansion_nengo: "",
        mansion_layout: "",
        mansion_area: "",
        build_build_area: "",
        build_land_area: "",
        build_name: "",
        build_block: "",
        build_nengo: "",
        build_year: "",
        land_land_area: "",
        land_name: "",
        land_block: "",
        sell_price: "",
        last_name_kana: "",
        first_name_kana: "",
        contact_type: "",
        fax_fax1: "",
        fax_fax2: "",
        fax_fax3: "",
        customer_gender: "",
        customer_age: "",
        customer_job: "",
        customer_job_text: "",
        customer_media_internet: [],
        customer_media_other: [],
        customer_buy: "",
        customer_opinion: "",
      },
    };
  },

  mounted() {
    this.disp_estate_kind("");
  },

  methods: {
    disp_estate_kind(default_value) {
      let prop_name = $("input[name=estate_kind]:checked").val();
      if (default_value != null) {
        prop_name = default_value;
      }
      if (prop_name === "1") {
        $(".mansion_parts").show();
        $(".build_parts").hide();
        $(".land_parts").hide();
      } else if (prop_name === "2") {
        $(".mansion_parts").hide();
        $(".build_parts").hide();
        $(".land_parts").show();
      } else if (prop_name === "3") {
        $(".mansion_parts").hide();
        $(".build_parts").show();
        $(".land_parts").hide();
      } else {
        $(".mansion_parts").show();
        $(".build_parts").show();
        $(".land_parts").show();
      }
    },
    address_change(type) {
      let lines, prefecture, city, city_detail, address;
      if (type === "estate") {
        lines = this.formData.address3 + this.formData.address4;
        prefecture = "#estate_address_prefecture";
        city = "#estate_address_city";
        city_detail = "#estate_address_city_detail";
      } else {
        lines = this.formData.address1 + this.formData.address2;
        prefecture = "#address_prefecture";
        city = "#address_city";
        city_detail = "#address_city_detail";
      }
      if (lines.length == 7 && !isNaN(lines)) {
        this.set_address(lines, prefecture, city, city_detail, type);
      }
    },
    // 郵便番号から住所を取得
    set_address(lines, prefecture_id, city_id, city_detail_id, type) {
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
                    if (type === "estate") {
                      _this.formData.estate_address_prefecture =
                        obj[i]["long_name"];
                    } else {
                      _this.formData.address_prefecture = obj[i]["long_name"];
                    }
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
            if (type === "estate") {
              _this.formData.estate_address_city = city_name + city_name_detail;
            } else {
              _this.formData.address_city = city_name + city_name_detail;
            }
            // $(city_id).val(city_name + city_name_detail);
          } else {
            return false;
          }
        });
    },
    submit_handler() {
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
        localStorage.setItem("input_user", JSON.stringify(this.formData));
        this.$router.push({ path: "/karuizawa/submitform/confirm_user" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }

      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
/* 問い合わせフォーム 入力エラー */
.c-form-error {
  background-color: #fdf2f4;
  width: 100%;
  max-width: 1040px;
  margin: 20px auto 0;
  padding: 40px 20px;
}

.c-form-error p {
  color: #e9546b;
  font-size: 1.8rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>
