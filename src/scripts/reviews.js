import Vue from "vue";
import Flickity from 'vue-flickity';

const reviewBlock = {
    template: "#review-block",
    props: ["review"]
};

new Vue({
    el: "#reviews-slider-component",
    template: "#reviews-slider",
    data: {
        reviews: [],
        flickityOptions: {
            initialIndex: 0,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: false,
            groupCells: true,
        },
        currentIndex: 1
    },
    methods: {
        onInit() {
            this.$refs.flickity.on('change', (event) => {
              this.currentIndex = event
      
            if (!this.$refs.flickity.$flickity.nextButton.isEnabled)
                this.currentIndex = this.reviews.length
            })
        },
        makeArrayWithRequiredImages(data) {
            return data.map(item=> {
                const requiredPic = require(`../images/content/${item.photo}`)
                item.photo = requiredPic;

                return item;
            })
        },
        next() {
            this.$refs.flickity.next()
          },
          
          previous() {
            this.$refs.flickity.previous()
        }
    },
    components:  { 
        reviewBlock,
        Flickity
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrayWithRequiredImages(data);
    }
});