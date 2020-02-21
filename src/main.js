import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";

import Vue from 'vue'
import sliderReviews from './templates/components/main.vue'

new Vue({
  el: '#slider-reviews',
    render: h => h(sliderReviews),
});

