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
    props: ["works", "currentWork","currentIndex"]
};

const tags = {
    template: "#slider-tags",
    props: ['tags']
};

const info = {
    template: "#slider-info",
    components: {tags},
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.tags.split(', ');
        }
    }
};

new Vue ({
    el: "#slider-component",
    template: '#slider-container',
    components: {display, info},
    data: () => ({
        works: [],
        currentIndex: 0
    }),
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoop(value);
        }
    },
    methods: {
        makeInfiniteLoop(value) {
            const worksAmount = this.works.length;
            if(value < 0) this.currentIndex = worksAmount - 1;
            if(value > worksAmount - 1) this.currentIndex = 0;
        },
        makeArrayWithRequiredImages(data) {
            return data.map(item=> {
                const requiredPic = require(`../images/content/${item.photo}`)
                item.photo = requiredPic;

                return item;
            });
        },
        handleSlide(direction) {
            if (direction === "prev") {
                this.currentIndex--;
            } else {
                this.currentIndex++;
            }
        }
    },
    created() {
        const data = require("../data/works.json")
        this.works = this.makeArrayWithRequiredImages(data);
    }
});