import Vue from 'vue/dist/vue.js';
import { backgrounds } from './backgroundData.js';
import { ikonyglowne } from './icons.js';

var app = new Vue({
    el: '#app',
    data: () => {
        return{
            message:"hello vue",
            appbackground: {
                src: backgrounds[0]
            },
            ikon1: {
                src: ikonyglowne.first,
                src2: ikonyglowne.firtscliced,
                seen: true,
                hover: false
              },
              ikon2: {
                src: ikonyglowne.second,
                src2: ikonyglowne.secondcliced,
                seen: true,
                hover: false
              },
              ikon3: {
                src: ikonyglowne.third,
                src2: ikonyglowne.thirdcliced,
                seen: true,
                hover: false
              },
              video: {

                src: "",
                seen: false
              },
              buttonforward1:{
                seen: false
              },
              buttonreverse1:{
                seen: false
              },
              buttonforward2:{
                seen: false
              },
              buttonreverse2:{
                seen: false
              },
              buttonforward3:{
                seen: false
              },
              buttonreverse3:{
                seen: false
              }
        }
    },
    methods: {
      ikon1change1: function(){

      },
      ikon2change1: function(){
        this.ikon2.hover = false;
        this.appbackground.src = backgrounds[1];
        this.ikon1.seen = false;
        this.ikon3.seen = false;
        this.video.seen = true;
        this.buttonreverse2.seen = true;
        this.buttonforward2.seen = true;
      },
      ikon3change1: function(){
        this.ikon3.hover = false;
      this.appbackground.src = backgrounds[1];
      this.ikon1.seen = false;
      this.ikon2.seen = false;
      this.video.seen = true;
      this.buttonreverse3.seen = true;
      this.buttonforward3.seen = true;      
      }
        }
})