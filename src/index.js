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
        }
    },
    methods: {
      ikon1change1: function(){

      },
      ikon2change1: function(){

      },
      ikon3change1: function(){
        
      }
        }
})