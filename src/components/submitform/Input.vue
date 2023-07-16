<template>
  <div class="l-contents form inquiry lazyloaded">
    <form id="form1" class="inputForm">
      <section class="c-title_page">
        <h1 class="c-titleText">まとめてお問い合わせ</h1>
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
            ※こちらはお客様専用のお問い合わせフォームとなっております。<br
              class="spNon"
            />同業者様からのお問い合わせ・資料請求は、ご遠慮くださいますようお願い申し上げます。
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
                    v-model="formData.last_name"
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
                  required="is-must"
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
                    name="address_prefecture"
                    v-model="formData.address_prefecture"
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
                  v-model="formData.address_city_number"
                  type="text"
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
                    style="width: 80px"
                    required="required"
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
                    style="width: 80px"
                    required="required"
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
                    style="width: 80px"
                    required="required"
                    name="phone3"
                    type="text"
                    v-model="formData.phone3"
                  />
                </p>

                <!-- <p class="c-dataErrorText">エラーテキスト
   </p> -->
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
                    v-model="formData.fax_fax1"
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
                    v-model="formData.fax_fax2"
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
                  <p class="c-form_select">
                    <select
                      name="inspection_minute"
                      v-model="formData.inspection_minute"
                    >
                      <option value="" selected="selected">選択</option>
                      <option value="9:00">9:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                  </p>
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
import "@/assets/utils/picker.js";
import "@/assets/utils/picker.date";
import "@/assets/utils/picker.time";
import "@/assets/utils/legacy.js";
import "@/assets/utils/pick_jp.js";
import "@/assets/css/pickdate.css";
import err_icon from "@/assets/img/icon_alert.svg";


export default {
  name: "KaruizawaFormInput",

  data() {
    return {
      err_icon,
      formData: {
        last_name: "",
        first_name: "",
        last_name_kana: "",
        first_name_kana: "",
        mail: "",
        contact_type: "",
        address1: "",
        address2: "",
        address_prefecture: "",
        address_city: "",
        address_city_number: "",
        address_city_detail: "",
        phone1: "",
        phone2: "",
        phone3: "",
        fax_fax1: "",
        fax_fax2: "",
        fax_fax3: "",
        inspection_date:'',
        inspection_minute: "",
        before_already: "",
        before_past_person: "",
        customer_opinion: "",
      },
      picker: null,
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      const start_date = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
      const picker = $(".p-picker-input").pickadate({
        disable: [
          { from: [0, 0, 0], to: start_date },
          { from: [2022, 11, 26], to: [2023, 0, "03"] },
        ],
      });
      this.picker = picker;
    },
    addressChange() {
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
      this.formData.inspection_date = this.picker.get()[0].value
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
        localStorage.setItem("input", JSON.stringify(this.formData));
        this.$router.push({
          path: "/karuizawa/submitform/confirm",
          query: { id: 1 },
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
      console.log(this.formData);
    },
  },
};
</script>

<style scoped>
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
