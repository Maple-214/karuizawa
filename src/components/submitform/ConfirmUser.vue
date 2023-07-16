<template>
  <div class="l-contents form inquiry lazyloaded" style="margin-top: 0px">
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
                    name="estate_kind"
                    type="radio"
                    value="マンション"
                    disabled
                    :checked="formData?.estate_kind === 'マンション'"
                  />
                  <label class="" for="inquiries-ace-property-type-1"
                    >マンション</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-2"
                    name="estate_kind"
                    type="radio"
                    value="土地"
                    :checked="formData?.estate_kind === '土地'"
                    disabled
                  />
                  <label class="" for="inquiries-ace-property-type-2"
                    >土地</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-3"
                    name="estate_kind"
                    type="radio"
                    value="戸建"
                    disabled
                    :checked="formData?.estate_kind === '戸建'"
                  />
                  <label class="" for="inquiries-ace-property-type-3"
                    >戸建</label
                  >
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="inquiries-ace-property-type-4"
                    name="estate_kind"
                    type="radio"
                    disabled
                    value="投資・事業用"
                    :checked="formData?.estate_kind === '投資・事業用'"
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
                    disabled
                    name="estate_address_zip1"
                    type="text"
                    :value="formData?.address3"
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
                    disabled
                    :value="formData?.address4"
                  />
                </p>
              </div>
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate">
                  <input
                    id="estate_address_city"
                    class="c-form_text"
                    placeholder="市区町村"
                    maxlength="64"
                    name="estate_address_city"
                    type="text"
                    disabled
                    :value="formData?.estate_address_prefecture"
                  />
                </p>
                <p class="p-form_separate">
                  <input
                    id="estate_address_city"
                    class="c-form_text"
                    placeholder="市区町村"
                    maxlength="64"
                    name="estate_address_city"
                    type="text"
                    disabled
                    :value="formData?.estate_address_city"
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
                  disabled
                  :value="formData?.estate_address_city_number"
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
                  :value="formData?.estate_address_city_detail"
                  disabled
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
                    disabled
                    :value="formData?.mansion_name"
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
                    disabled
                    :value="formData?.mansion_tou"
                  /><span class="p-form_separateText">号棟</span>
                </p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text"
                    maxlength="16"
                    name="mansion_room"
                    disabled
                    type="text"
                    :value="formData?.mansion_room"
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
                    :value="formData?.mansion_area"
                    disabled
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
                    disabled
                    type="text"
                    :value="formData?.mansion_layout"
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
                    disabled
                    :checked="formData?.mansion_nengo === '平成'"

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
                    disabled
                    :checked="formData?.mansion_nengo === '昭和'"
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
                    disabled
                    :checked="formData.mansion_nengo === '西暦'"
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
                    :value="formData?.mansion_year"
                    disabled
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
                    disabled
                    :value="formData?.build_build_area"
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
                    disabled
                    :value="formData?.build_land_area"
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
                    disabled
                    :value="formData?.build_name"
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
                    disabled
                    :value="formData?.build_block"
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
                    disabled
                    :checked="formData?.build_nengo === '平成'"
                    
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
                    disabled
                    :checked="formData?.build_nengo === '昭和'"
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
                    disabled
                    :checked="formData?.build_nengo === '西暦'"

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
                    disabled
                    :value="formData?.build_year"
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
                    disabled
                    :value="formData?.land_land_area"
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
                    :value="formData?.land_name"
                    disabled
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
                    disabled
                    :value="formData?.land_block"
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
                  :value="formData?.sell_price"
                  disabled
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
                    disabled
                    :value="formData?.last_name"
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">名</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name"
                    type="text"
                    disabled
                    :value="formData?.first_name"
                  />
                </p>
              </div>
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
                    disabled
                    :value="formData?.last_name_kana"
                  />
                </p>
                <p class="p-form_separate">
                  <span class="p-form_separateText">メイ</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    name="first_name_kana"
                    type="text"
                    disabled
                    :value="formData?.first_name_kana"
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
                    value="E-mail"
                    :checked="formData?.contact_type === 'E-mail'"
                    disabled
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
                    value="FAX"
                    disabled
                    :checked="formData?.contact_type === 'FAX'"
                  />
                  <label class="" for="contact-type-3">FAX</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-4"
                    name="contact_type"
                    type="radio"
                    value="郵送"
                    disabled
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
                    id="address_zip1"
                    name="address_zip1"
                    disabled
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
                    name="address_zip2"
                    type="text"
                    disabled
                    :value="formData?.address2"
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
                    name="address_city"
                    type="text"
                    disabled
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
                    disabled
                    :value="formData?.phone1"
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
                    :value="formData?.phone2"
                    disabled
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
                    disabled
                    :value="formData?.phone3"
                  />
                </p>
              </div>
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
                    disabled
                    :value="formData?.fax_fax2"
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
                    disabled
                    :checked="formData?.customer_gender === '男性'"
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
                    :checked="formData?.customer_gender === '女性'"
                    disabled
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
                    disabled
                    :value="formData?.customer_age"
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
                      disabled
                      :checked="formData?.customer_job === '会社員'"
                    />
                    <label for="inquiries-etc-job-type-1">会社員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-2"
                      name="customer_job"
                      type="radio"
                      value="会社役員"
                      disabled
                      :checked="formData?.customer_job === '会社役員'"
                    />
                    <label for="inquiries-etc-job-type-2">会社役員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-3"
                      name="customer_job"
                      type="radio"
                      value="経営者"
                      disabled
                      :checked="formData?.customer_job === '経営者'"
                    />
                    <label for="inquiries-etc-job-type-3">経営者</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-4"
                      name="customer_job"
                      type="radio"
                      disabled
                      value="公務員"
                      :checked="formData?.customer_job === '公務員'"
                    />
                    <label for="inquiries-etc-job-type-4">公務員</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-5"
                      name="customer_job"
                      type="radio"
                      disabled
                      value="教職"
                      :checked="formData?.customer_job === '教職'"
                    />
                    <label for="inquiries-etc-job-type-5">教職</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-6"
                      name="customer_job"
                      type="radio"
                      disabled
                      :checked="formData?.customer_job === '医者'"
                      value="医者"
                    />
                    <label for="inquiries-etc-job-type-6">医者</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-7"
                      name="customer_job"
                      type="radio"
                      disabled
                      :checked="formData?.customer_job === '弁護士・会計士・税理士等'"
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
                      disabled
                      :checked="formData?.customer_job === '自由業'"
                      value="自由業"
                    />
                    <label for="inquiries-etc-job-type-8">自由業</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-9"
                      name="customer_job"
                      type="radio"
                      disabled
                      value="無職"
                      :checked="formData?.customer_job === '無職'"
                    />
                    <label for="inquiries-etc-job-type-9">無職</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      id="inquiries-etc-job-type-10"
                      name="customer_job"
                      type="radio"
                      value="その他"
                      :checked="formData?.customer_job === 'その他'"
                      disabled
                    />
                    <label for="inquiries-etc-job-type-10">その他</label>
                  </li>
                  <li class="c-form_listItem c-form_radio">
                    <input
                      class="c-form_text"
                      maxlength="16"
                      name="customer_job_text"
                      type="text"
                      disabled
                      :value="formData?.customer_job_text"
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
                      disabled
                      :checked="formData?.customer_media_internet?.includes('ロイヤルハウジングホームページ')"
                    />
                    <label for="inquiries-etc-contact-json-1"
                      >ロイヤルハウジングホームページ</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-2"
                      name="customer_media_internet[]"
                      disabled
                      type="checkbox"
                      value="YAHOO！不動産"
                      :checked="formData?.customer_media_internet?.includes('YAHOO！不動産')"
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
                      disabled
                      :checked="formData?.customer_media_internet?.includes('SUUMO')"
                    />
                    <label for="inquiries-etc-contact-json-3">SUUMO</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-4"
                      name="customer_media_internet[]"
                      type="checkbox"
                      disabled
                      :checked="formData?.customer_media_internet?.includes('検索サイト')"
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
                      disabled
                      :checked="formData?.customer_media_internet?.includes('検索サイト(Yahoo!)')"
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
                      :checked="formData?.customer_media_internet?.includes('その他インターネット')"
                      disabled
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
                      :checked="formData?.customer_media_other?.includes('新聞折込チラシ')"
                      disabled
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
                      disabled
                      :checked="formData?.customer_media_other?.includes('ポスティング')"
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
                      :checked="formData?.customer_media_other?.includes('駅前配布チラシ')"
                      disabled
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
                      disabled
                      :checked="formData?.customer_media_other?.includes('現地看板')"
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
                      disabled
                      value="誘導看板"
                      :checked="formData?.customer_media_other?.includes('誘導看板')"
                    />
                    <label for="inquiries-etc-contact-json-other-5"
                      >誘導看板</label
                    >
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-6"
                      name="customer_media_other[]"
                      disabled
                      :checked="formData?.customer_media_other?.includes('交通(電車・バス)広告')"
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
                      :checked="formData?.customer_media_other?.includes('駅広告')"
                      disabled
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
                      :checked="formData?.customer_media_other?.includes('紹介')"
                      value="紹介"
                      disabled
                    />
                    <label for="inquiries-etc-contact-json-other-8">紹介</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-9"
                      disabled
                      name="customer_media_other[]"
                      type="checkbox"
                      value="雑誌"
                      :checked="formData?.customer_media_other?.includes('雑誌')"
                    />
                    <label for="inquiries-etc-contact-json-other-9">雑誌</label>
                  </li>
                  <li class="c-form_listItem">
                    <input
                      id="inquiries-etc-contact-json-other-10"
                      name="customer_media_other[]"
                      type="checkbox"
                      value="ダイレクトメール"
                      :checked="formData?.customer_media_other?.includes('ダイレクトメール')"
                      disabled
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
                      disabled
                      :checked="formData?.customer_media_other?.includes('その他')"
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
                    disabled
                    :checked="formData?.customer_buy === '良いものがあればいつでも'"
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
                    disabled
                    :checked="formData?.customer_buy === '半年以内に購入予定'"
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
                    disabled
                    :checked="formData?.customer_buy === '一年以内に購入予定'"
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
                    disabled
                    :checked="formData?.customer_buy === '購入の予定はない'"
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
                  disabled
                  :value="formData?.customer_opinion"
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

      <section class="l-innerWrap l-contSection">
        <div class="l-form_btnBox">
          <p class="c-btn">
            <input
              class="c-btn_prev fm-submit"
              type="button"
              value="この内容で送信"
              @click="submit_handler"
            />
          </p>
        </div>

        <div class="l-form_btnBox">
          <p class="c-btn c-btn_sub">
            <input
              class="c-btn_prev_sub fm-submit"
              type="button"
              @click="back_handler"
              value="入力内容を修正する"
            />
          </p>
        </div>
      </section>
    </form>
  </div>
</template>
<script>
export default {
  name: "KaruizawaInputUser",

  data() {
    return {
      formData: {},
    };
  },

  mounted() {
    this.formData = JSON.parse(localStorage.getItem('input_user'))
    console.log(this.formData);
  },
  beforeUnmount() {
    localStorage.removeItem("input_user");
  },

  methods: {
    submit_handler() {
      // console.log(this.formData);
      this.$router.replace({ path: "/karuizawa/submitform/finish" });
      localStorage.removeItem("input_user");
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    back_handler() {
      this.$router.back();
      // this.$router.replace({ path: "/karuizawa/submitform/input_user" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
form .l-form_item dd {
  display: block;
}

form .l-form_btnBox {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
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

form .l-form_btnBox .c-btn .c-clicked {
  background: #aaa;
  color: #fff;
  border: solid 1px #aaa;
  cursor: default;
}

form .l-form_btnBox .c-btn .c-btn_prev_sub {
  position: relative;
  display: inline-block;
  background: #fff;
  color: #e9546b;
  border: solid 1px #e9546b;
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
  font-family: "icomoon" !important;
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
</style>
