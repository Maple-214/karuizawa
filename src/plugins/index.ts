// @ts-ignore
import type _Vue from "vue";
import $ from 'jquery';
import 'jquery-match-height';

export const adaptHeightPlugin = {
    install: (vue: typeof _Vue, options: any): void => {
        vue.prototype.$adaptHeight = function (params: any) {
            $(".js-slider_carousel .new_list")?.matchHeight();
            $(".js-slider_carousel .p-card")?.matchHeight();
            $(".js-slider_carouselPicNav .js-slider_carouselPicNavItem .l-flex")?.matchHeight();
        };
    },
};