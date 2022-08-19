<script setup>

import { ref, reactive } from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

const sectionData = [
  {
    "id": 10,
    "svgattr": "M100,0V50H0V0Z",
    "kolon": [
      {
        "id": "25yl85j",
        "width": 100
      }
    ]
  },
  {
    "id": 20,
    "svgattr": "M49,0V50H0V0Z M100,0V50H51V0Z",
    "kolon": [
      {
        "id": "r79ev3o",
        "width": 50
      },
      {
        "id": "4m4im7j",
        "width": 50
      }
    ]
  },
  {
    "id": 30,
    "svgattr": "M32, 0V50H0V0Z M66, 0V50H34V0Z M100, 0V50H68V0Z",
    "kolon": [
      {
        "id": "jtm2zsp",
        "width": 33
      },
      {
        "id": "t5jl0xn",
        "width": 33
      },
      {
        "id": "w6kx27y",
        "width": 33
      }
    ]
  },
  {
    "id": 40,
    "svgattr": "M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z",
    "kolon": [
      {
        "id": "0bz8jj1",
        "width": 25
      },
      {
        "id": "p4fybdh",
        "width": 25
      },
      {
        "id": "ffiosh2",
        "width": 25
      },
      {
        "id": "fcnorwk",
        "width": 25
      }
    ]
  },
  {
    "id": 21,
    "svgattr": "M32.6667,0V50H0V0Z M100,0V50H34.6667V0Z",
    "kolon": [
      {
        "id": "j33w2jz",
        "width": 33
      },
      {
        "id": "rj3g584",
        "width": 66
      }
    ]
  },
  {
    "id": 22,
    "svgattr": "M65.3333,0V50H0V0Z M100,0V50H67.3333V0Z",
    "kolon": [
      {
        "id": "vrltrrg",
        "width": 66
      },
      {
        "id": "xw928p2",
        "width": 33
      }
    ]
  },
  {
    "id": 31,
    "svgattr": "M24,0V50H0V0Z M50,0V50H26V0Z M100,0V50H52V0Z",
    "kolon": [
      {
        "id": "hz8kkmu",
        "width": 25
      },
      {
        "id": "02y2tgi",
        "width": 25
      },
      {
        "id": "ggyvyuf",
        "width": 50
      }
    ]
  },
  {
    "id": 32,
    "svgattr": "M48,0V50H0V0Z M74,0V50H50V0Z M100,0V50H76V0Z",
    "kolon": [
      {
        "id": "i5rjm94",
        "width": 50
      },
      {
        "id": "tx5xcin",
        "width": 25
      },
      {
        "id": "o9fhpnq",
        "width": 25
      }
    ]

  },
  {
    "id": 33,
    "svgattr": "M24,0V50H0V0Z M74,0V50H26V0Z M100,0V50H76V0Z",
    "kolon": [
      {
        "id": "kmxv5sb",
        "width": 25
      },
      {
        "id": "yaokxjc",
        "width": 50
      },
      {
        "id": "1vojm7u",
        "width": 25
      }
    ]
  },
  {
    "id": 50,
    "svgattr": "M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z",
    "kolon": [
      {
        "id": "3nzkwr3",
        "width": 20
      },
      {
        "id": "f6wxqjm",
        "width": 20
      },
      {
        "id": "zi9ez97",
        "width": 20
      },
      {
        "id": "303zqdq",
        "width": 20
      },
      {
        "id": "gih4omv",
        "width": 20
      }
    ]
  },
  {
    "id": 60,
    "svgattr": "M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z",
    "kolon": [
      {
        "id": "26czmnf",
        "width": 16
      },
      {
        "id": "siqjy6s",
        "width": 16
      },
      {
        "id": "a5x2s94",
        "width": 16
      },
      {
        "id": "js2dnp6",
        "width": 16
      },
      {
        "id": "9ss96cy",
        "width": 16
      },
      {
        "id": "qt3essn",
        "width": 16
      }
    ]
  },
  {
    "id": 34,
    "svgattr": "M16,0V50H0V0Z M82,0V50H18V0Z M100,0V50H84V0Z",
    "kolon": [
      {
        "id": "tenhw8n",
        "width": 16
      },
      {
        "id": "xconz6z",
        "width": 66
      },
      {
        "id": "vkilnfi",
        "width": 16
      }
    ]
  }
];
const maxInnerRowGridItem = 6;

let addItemStatus = ref(false) ;
//let addRowStatus = ref(false) ;
const gridList = reactive([]);


function createRow(rowItems) {
    gridList.push(rowItems);
}

function changeRowStatus(status) {
    addItemStatus.value = status;
}

function addRow(item) {

    createRow(item);
    console.log("Kolon " + item.kolon.length);
    changeRowStatus(false)
}

</script>

<template>
    <div class="uk-container uk-container-expand uk-margin-top">
        <div class="grid-area uk-text-center">
            <div v-if="gridList.length == 0">
                There is no any grid item.
            </div>
            <div v-else class="uk-width-1-6" v-for="item in gridList">
                <svg @click="addRow(item)" :id="item.id" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path :d="item.svgattr" /></svg>
            </div>
        </div>
    </div>


    <div class="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div class="selection-area uk-position-relative" >
            <div class="uk-position-center uk-text-center" v-if="!addItemStatus" @click="changeRowStatus(true)">
                <span uk-icon="icon: plus-circle; ratio:1.5" ></span>
                <h4 class="uk-margin-small-top uk-margin-remove-bottom">Yeni Satır Ekle</h4>
            </div>


            <button class="uk-position-top-right uk-position-medium" type="button" uk-close v-if="addItemStatus" @click="changeRowStatus(false)"></button>

            <div class="uk-text-center" v-if="addItemStatus">
                SATIR YAPISINI SEÇİNİZ
            </div>


            <div class="uk-container uk-container-xsmall uk-margin-top" v-if="addItemStatus">
              <div class="uk-grid uk-grid-small" uk-grid>
                <div class="uk-width-1-6" v-for="item in sectionData">
                  <svg @click="addRow(item)" :id="item.id" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50"><path :d="item.svgattr" /></svg>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>



<style>
    @import 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.13.7/css/uikit.min.css';

    body{
        background-color: #fff;
    }

    .selection-area{
        border: 1px dashed #747474;
        padding: 40px 40px 75px 40px;
    }

    svg{
        cursor: pointer;
    }

    svg path{
        fill:#747474;
        transition: .5s;
    }

    svg:hover path{
        fill:#000;
    }
</style>
