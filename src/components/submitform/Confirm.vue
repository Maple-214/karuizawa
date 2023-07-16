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
            <input
              name="multi[]"
              type="hidden"
              value="2105565966390000015129"
            />
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
            <input
              name="multi[]"
              type="hidden"
              value="2105565966390000016966"
            />
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
              <div class="p-rowBox_inner">
                <p class="p-form_separate">
                  <span class="p-form_separateText">姓</span>
                  <input
                    maxlength="64"
                    class="c-form_text fm-name"
                    required="required"
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
                    required="required"
                    name="first_name"
                    type="text"
                    :value="formData?.first_name"
                    disabled
                  />
                </p>
              </div>
              <p class="c-text_example">例）山田　太郎</p>
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
                  required="is-must"
                  maxlength="255"
                  class="c-form_text fm-sizeWide"
                  name="mail"
                  type="email"
                  :value="formData?.mail"
                  disabled
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
                    :checked="formData?.contact_type === '電話'"
                    disabled
                  />
                  <label class="" for="contact-type-2">電話</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-3"
                    name="contact_type"
                    type="radio"
                    value="FAX"
                    :checked="formData?.contact_type === 'FAX'"
                    disabled
                  />
                  <label class="" for="contact-type-3">FAX</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="contact-type-4"
                    name="contact_type"
                    type="radio"
                    value="郵送"
                    :checked="formData?.contact_type === '郵送'"
                    disabled
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
                    disabled
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
                  :value="formData?.address_city_number"
                  disabled
                />
              </div>
              <div class="p-rowBox_inner">
                <input
                  id="address_city_detail"
                  class="c-form_text fm-sizeWide"
                  placeholder="建物・号室"
                  maxlength="64"
                  name="address_city_detail"
                  :value="formData?.address_city_detail"
                  disabled
                  type="text"
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
                    style="width: 80px"
                    required="required"
                    name="phone1"
                    :value="formData?.phone1"
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
                    style="width: 80px"
                    required="required"
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
                    style="width: 80px"
                    required="required"
                    name="phone3"
                    type="text"
                    :value="formData?.phone3"
                    disabled
                  />
                </p>

                <!-- <p class="c-dataErrorText">エラーテキスト
   </p> -->
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
                    style="width: 80px"
                    name="fax_fax1"
                    type="text"
                    :value="formData?.fax_fax1"
                    disabled
                  />
                </p>
                <p class="p-form_separate">-</p>
                <p class="p-form_separate">
                  <input
                    class="c-form_text fm-tel"
                    inputmode="numeric"
                    pattern="\d*"
                    style="width: 80px"
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
                    style="width: 80px"
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
            <h2 class="c-titleText">見学をご希望の方</h2>
          </div>

          <dl class="p-form_row">
            <dt class="p-form_rowTitle">見学をご希望の方</dt>
            <dd class="p-form_rowBox">
              <div class="p-rowBox_inner sp2col">
                <p class="p-form_separate p-picker">
                  <input
                    class="c-form_text p-picker-input picker__input"
                    id="inspection_date"
                    name="inspection_date"
                    type="text"
                    readonly=""
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-readonly="false"
                    aria-owns="inspection_date_root"
                    :value="formData?.inspection_date"
                    disabled
                  />
                </p>

                <div
                  class="picker"
                  id="inspection_date_root"
                  aria-hidden="true"
                >
                  <div class="picker__holder" tabindex="-1">
                    <div class="picker__frame">
                      <div class="picker__wrap">
                        <div class="picker__box">
                          <div class="picker__header">
                            <div class="picker__month">5月</div>
                            <div class="picker__year">2023</div>
                            <div
                              class="picker__nav--prev"
                              data-nav="-1"
                              role="button"
                              aria-controls="inspection_date_table"
                              title="Previous month"
                            ></div>
                            <div
                              class="picker__nav--next"
                              data-nav="1"
                              role="button"
                              aria-controls="inspection_date_table"
                              title="Next month"
                            ></div>
                          </div>
                          <table
                            class="picker__table"
                            id="inspection_date_table"
                            role="grid"
                            aria-controls="inspection_date"
                            aria-readonly="true"
                          >
                            <thead>
                              <tr>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="月曜日"
                                >
                                  月
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="火曜日"
                                >
                                  火
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="水曜日"
                                >
                                  水
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="木曜日"
                                >
                                  木
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="金曜日"
                                >
                                  金
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="土曜日"
                                >
                                  土
                                </th>
                                <th
                                  class="picker__weekday"
                                  scope="col"
                                  title="日曜日"
                                >
                                  日
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1682866800000"
                                    role="gridcell"
                                    aria-label="2023年05月01日"
                                    aria-disabled="true"
                                  >
                                    1
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1682953200000"
                                    role="gridcell"
                                    aria-label="2023年05月02日"
                                    aria-disabled="true"
                                  >
                                    2
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683039600000"
                                    role="gridcell"
                                    aria-label="2023年05月03日"
                                    aria-disabled="true"
                                  >
                                    3
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683126000000"
                                    role="gridcell"
                                    aria-label="2023年05月04日"
                                    aria-disabled="true"
                                  >
                                    4
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683212400000"
                                    role="gridcell"
                                    aria-label="2023年05月05日"
                                    aria-disabled="true"
                                  >
                                    5
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683298800000"
                                    role="gridcell"
                                    aria-label="2023年05月06日"
                                    aria-disabled="true"
                                  >
                                    6
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683385200000"
                                    role="gridcell"
                                    aria-label="2023年05月07日"
                                    aria-disabled="true"
                                  >
                                    7
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683471600000"
                                    role="gridcell"
                                    aria-label="2023年05月08日"
                                    aria-disabled="true"
                                  >
                                    8
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683558000000"
                                    role="gridcell"
                                    aria-label="2023年05月09日"
                                    aria-disabled="true"
                                  >
                                    9
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683644400000"
                                    role="gridcell"
                                    aria-label="2023年05月10日"
                                    aria-disabled="true"
                                  >
                                    10
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683730800000"
                                    role="gridcell"
                                    aria-label="2023年05月11日"
                                    aria-disabled="true"
                                  >
                                    11
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683817200000"
                                    role="gridcell"
                                    aria-label="2023年05月12日"
                                    aria-disabled="true"
                                  >
                                    12
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683903600000"
                                    role="gridcell"
                                    aria-label="2023年05月13日"
                                    aria-disabled="true"
                                  >
                                    13
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1683990000000"
                                    role="gridcell"
                                    aria-label="2023年05月14日"
                                    aria-disabled="true"
                                  >
                                    14
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684076400000"
                                    role="gridcell"
                                    aria-label="2023年05月15日"
                                    aria-disabled="true"
                                  >
                                    15
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684162800000"
                                    role="gridcell"
                                    aria-label="2023年05月16日"
                                    aria-disabled="true"
                                  >
                                    16
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684249200000"
                                    role="gridcell"
                                    aria-label="2023年05月17日"
                                    aria-disabled="true"
                                  >
                                    17
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684335600000"
                                    role="gridcell"
                                    aria-label="2023年05月18日"
                                    aria-disabled="true"
                                  >
                                    18
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684422000000"
                                    role="gridcell"
                                    aria-label="2023年05月19日"
                                    aria-disabled="true"
                                  >
                                    19
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684508400000"
                                    role="gridcell"
                                    aria-label="2023年05月20日"
                                    aria-disabled="true"
                                  >
                                    20
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684594800000"
                                    role="gridcell"
                                    aria-label="2023年05月21日"
                                    aria-disabled="true"
                                  >
                                    21
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684681200000"
                                    role="gridcell"
                                    aria-label="2023年05月22日"
                                    aria-disabled="true"
                                  >
                                    22
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--disabled"
                                    data-pick="1684767600000"
                                    role="gridcell"
                                    aria-label="2023年05月23日"
                                    aria-disabled="true"
                                  >
                                    23
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus picker__day--today picker__day--highlighted"
                                    data-pick="1684854000000"
                                    role="gridcell"
                                    aria-label="2023年05月24日"
                                    aria-activedescendant="true"
                                  >
                                    24
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1684940400000"
                                    role="gridcell"
                                    aria-label="2023年05月25日"
                                  >
                                    25
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685026800000"
                                    role="gridcell"
                                    aria-label="2023年05月26日"
                                  >
                                    26
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685113200000"
                                    role="gridcell"
                                    aria-label="2023年05月27日"
                                  >
                                    27
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685199600000"
                                    role="gridcell"
                                    aria-label="2023年05月28日"
                                  >
                                    28
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685286000000"
                                    role="gridcell"
                                    aria-label="2023年05月29日"
                                  >
                                    29
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685372400000"
                                    role="gridcell"
                                    aria-label="2023年05月30日"
                                  >
                                    30
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--infocus"
                                    data-pick="1685458800000"
                                    role="gridcell"
                                    aria-label="2023年05月31日"
                                  >
                                    31
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685545200000"
                                    role="gridcell"
                                    aria-label="2023年06月01日"
                                  >
                                    1
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685631600000"
                                    role="gridcell"
                                    aria-label="2023年06月02日"
                                  >
                                    2
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685718000000"
                                    role="gridcell"
                                    aria-label="2023年06月03日"
                                  >
                                    3
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685804400000"
                                    role="gridcell"
                                    aria-label="2023年06月04日"
                                  >
                                    4
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685890800000"
                                    role="gridcell"
                                    aria-label="2023年06月05日"
                                  >
                                    5
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1685977200000"
                                    role="gridcell"
                                    aria-label="2023年06月06日"
                                  >
                                    6
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1686063600000"
                                    role="gridcell"
                                    aria-label="2023年06月07日"
                                  >
                                    7
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1686150000000"
                                    role="gridcell"
                                    aria-label="2023年06月08日"
                                  >
                                    8
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1686236400000"
                                    role="gridcell"
                                    aria-label="2023年06月09日"
                                  >
                                    9
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1686322800000"
                                    role="gridcell"
                                    aria-label="2023年06月10日"
                                  >
                                    10
                                  </div>
                                </td>
                                <td role="presentation">
                                  <div
                                    class="picker__day picker__day--outfocus"
                                    data-pick="1686409200000"
                                    role="gridcell"
                                    aria-label="2023年06月11日"
                                  >
                                    11
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div class="picker__footer">
                            <button
                              class="picker__button--today"
                              type="button"
                              data-pick="1684854000000"
                              disabled=""
                              aria-controls="inspection_date"
                            >
                              今日</button
                            ><button
                              class="picker__button--clear"
                              type="button"
                              data-clear="1"
                              disabled=""
                              aria-controls="inspection_date"
                            >
                              消去</button
                            ><button
                              class="picker__button--close"
                              type="button"
                              data-close="true"
                              disabled=""
                              aria-controls="inspection_date"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="inspection_date_submit" />
                <div class="p-form_separate">
                  <input
                    id="inspection_minute"
                    class="c-form_text"
                    placeholder=""
                    maxlength="64"
                    name="inspection_minute"
                    type="text"
                    disabled
                    :value="formData?.inspection_minute"
                  />
                  <p class="p-form_separateText">時頃希望</p>
                </div>
              </div>

              <p class="c-text_example">
                ※当日・翌日のご見学案内につきましてはご要望にそえない場合があります。
              </p>

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
              <div class="p-rowBox_inner">
                <p class="p-form_separate c-form_radio">
                  <input
                    id="past-type-1"
                    name="before_already"
                    type="radio"
                    value="あり"
                    :checked="formData?.before_already === 'あり'"
                    disabled
                  />
                  <label class="" for="past-type-1">あり</label>
                </p>
                <p class="p-form_separate c-form_radio">
                  <input
                    id="past-type-2"
                    name="before_already"
                    type="radio"
                    value="なし"
                    :checked="formData?.before_already === 'なし'"
                    disabled
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
                  disabled
                  :value="formData?.before_past_person"
                />
              </p>
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
             @click="goBackHandler"
            />
          </p>
        </div>
      </section>
    </form>
  </div>
  <!-- <PageType4/> -->
</template>

<script>
import PageType4 from "../errorpage/PageType404.vue";
export default {
  name: "KaruizawaConfirm",
  components: {
    PageType4,
  },

  data() {
    return {
      formData: {},
    };
  },

  mounted() {
    this.formData = JSON.parse(localStorage.getItem("input"));
    console.log(this.formData);
  },
  beforeUnmount() {
    localStorage.removeItem("input");
  },

  methods: {
    goBackHandler() {
      this.$router.back();
      // this.$router.replace({ path: "/karuizawa/submitform/input_user" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
    submitHandler() {
      this.$router.replace({ path: "/karuizawa/submitform/finish" });
      localStorage.removeItem("input");
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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

form .l-form_customerInfo .l-form_item + .l-form_item {
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
  background: #fff !important;
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
