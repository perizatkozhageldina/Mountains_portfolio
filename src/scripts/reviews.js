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
            initialIndex: 3,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            contain: true,
            // groupCells: 2
            // any options from Flickity can be used
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