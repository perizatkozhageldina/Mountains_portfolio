import Vue from "vue";
import Flickity from 'vue-flickity';

const reviewsBlock = {
    template: "#reviews-block",
    props: ["review"]
};

new Vue({
    el: "#reviews-slider-component",
    template: "#reviews-slider",
    data: () => ({
        reviews: [],
        flickityOptions: {
            initialIndex: 0,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            groupCells: true,
            contain: true
        }
    }),
    methods: {
        makeArrayWithRequiredImages(data) {
            return data.map(item=> {
                const requiredPic = require(`../images/content/${item.photo}`)
                item.photo = requiredPic;

                return item;
            });
        },
        next() {
            this.$refs.flickity.next();
          },
          
          previous() {
            this.$refs.flickity.previous();
        }
    },
    components:  { 
        reviewsBlock,
        Flickity
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrayWithRequiredImages(data);
    }
});