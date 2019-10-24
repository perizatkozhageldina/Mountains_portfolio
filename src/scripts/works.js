import Vue from "vue";

const thumbs = {
    template: "#slider-thumbs",
    props: ["works", "currentWork"],
    computed: {
        reverseWorks() {
            return [...this.works].reverse();
        }
    }
};

const btns = {
    template: "#slider-btns"
};

const display = {
    template: "#slider-display",
    components: {thumbs, btns},
    props: ["works", "currentWork"]
};

const tags = {
    template: "#slider-tags"
};

const info = {
    template: "#slider-info",
    components: {tags},
    props: ["currentWork"]
};

new Vue ({
    el: "#slider-component",
    template: '#slider-container',
    components: {display, info},
    data: () => ({
        works: [],
        currentWork: {},
        currentIndex: 0
    }),
    methods: {
        makeArrayWithRequiredImages(data) {
            return data.map(item=> {
                const requiredPic = require(`../images/content/${item.photo}`)
                item.photo = requiredPic;

                return item;
            })
        }
    },
    created() {
        const data = require("../data/works.json")
        this.works = this.makeArrayWithRequiredImages(data);

        this.currentWork = this.works[this.currentIndex];
    }
});