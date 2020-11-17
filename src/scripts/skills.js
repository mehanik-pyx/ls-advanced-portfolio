console.log('this is skills module');

import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawColoredCircle() {
      const circle = this.$refs["color-circle"];
      // const dashArray = parseInt(
        // getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      // );
      // const percent = (dashArray / 100) * (100 - this.skillPercent);

      // circle.style.strokeDashoffset = percent;
      // console.log(skillPercent);
      // console.log(this.strokeDashoffset);
      // circle.style.strokeDashoffset = this.skillPercent + ' 100';
      circle.style.strokeDasharray = this.skillPercent + ' 100';
      // console.log(this.asd);
      // console.log(asd);
      // circle.style.strokeDasharray = asd; easyyyyyyy
    }
  },
  mounted() {
    this.drawColoredCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skillsRow: Object
  }
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  components: {
    skillsRow
  },
  data() {
    return {
      allSkills: {}
    };
  },
  created() {
    const data = require("../data/skills.json");
    this.allSkills = data;
  }
});
