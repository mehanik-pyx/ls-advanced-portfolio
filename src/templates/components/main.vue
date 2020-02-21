<template lang="pug">
  #slider-reviews
    .attach
      .slider_case
        v-slider(v-bind="options")
          -
            var reviews = [
              ['1', 'Ковальчук Дмитрий', 'Основатель Loftschool', 'Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!'],
              ['2', 'Владимир Сабанцев', 'Преподаватель', 'Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах.'],
              ['1', 'Иван Иванов', 'Учредитель Loftschool', 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и'],
              ['2', 'Петр Петров', 'Укротитель', 'Триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии'],
            ]
          each author in reviews
            .item.reviews-slider__item.reviews-item
              .reviews-item__text 
                p #{author[3]}
              .reviews-item__author
                img(src=`../../images/content/photo${author[0]}.png`).reviews-item__photo
                .reviews-item__info
                  .reviews-item__name #{author[1]}
                  .reviews-item__post #{author[2]}
      //- pre {{options}}
</template>

<script>
  console.log('this is main.vue module');
  import slider from './slider.vue';
  export default {
    name: 'sliderReviews',
    data () {
      return {
        options: {
          items: 4,
          margin: 70,
          nav: true,
          dots: false,
          loop: false,
          // timing: 'cubic-bezier(0, 0.72, 0.64, 1.06)',
          offset: 1,
          prevNav: '<',
          nextNav: '>',
          sibling: false,
          responsive : {
            0: {
              items: 1
            },  // 1 слайд на w до 768(а не 480), иначе отображается оче криво.
            768: { 
              items: 2
            }
          }
        }
      }
    },
    components: {
      'v-slider': slider,
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    border:0;
    max-height: 99999999px;
    -webkit-font-smoothing: antialiased;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #sliderReviews {
    font-family: "Roboto", Arial, sans-serif;
    font-size: 14px;
  }
  .attach {
    width: 100%;
    max-width: 1000px;
    /*width: 63.85%;*/
    min-width: 480px;
    /*padding: 50px 15px;*/
    /*padding-left: 20px;*/
    /*margin: 0 auto;*/
    position: relative;
  }
  .slider_case {
    margin-bottom: 40px;
  }
  .item {
    /*min-height: 218px;
    @include tablets {
      min-height: unset;
    }*/
    /*background: #00800b;*/
    text-align: start;
    /*padding: 100px 0;*/
    /*color: #fff;*/
    font-size: 26px;
    font-style: italic;
    font-weight: 300;
  }
  .item.active {
    /*background: #ff3f4d;*/
  }
  .item.super {
    /*background: #04a0c5;*/
  }
  pre {
    border:1px solid #eee;
    padding:15px;
    background: #f5f5f5;
  }
</style>