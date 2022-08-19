<script setup>

import { ref, reactive } from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);

//on load item data
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
const hoverClass = "selected-row";

let addItemStatus = ref(false);
let mouseHovering = ref(false);
//let addRowStatus = ref(false) ;
const gridList = reactive(
    [
       /* {"rowId":1,"rowOrder":1,"rowItems":[{
            "id":20,"svgattr":"M49,0V50H0V0Z M100,0V50H51V0Z","kolon": [
                {"id":"r79ev3o","width":50},
                {"id":"4m4im7j","width":50}
            ]
            }]
        },
        {"rowId":2,"rowOrder":2,"rowItems":[{
                "id":20,"svgattr":"M49,0V50H0V0Z M100,0V50H51V0Z","kolon": [
                    {"id":"r79ev3o","width":50},
                    {"id":"4m4im7j","width":50}
                ]
            }]
        },
        {"rowId":3,"rowOrder":3,"rowItems":[{"id":40,"svgattr":"M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z","kolon":[{"id":"0bz8jj1","width":25},{"id":"p4fybdh","width":25},{"id":"ffiosh2","width":25},{"id":"fcnorwk","width":25}]}
                    ]
                    }*/
    ]
);



function hovering(status) {
    mouseHovering.value = status;
}

// mouseenter&focus add class selected-row
/*function mouseenter(getItem,hoverEvent) {
    hoverEvent.target.classList.add(hoverClass);
}

function mouseLeave(getItem,mouseEvent) {
    if(mouseHovering) return;

    if (mouseEvent.target.classList.contains(hoverClass)) {
        mouseEvent.target.classList.remove(hoverClass)
    }
}*/


function findLastId() {
    return gridList.length+1;
}

function findLastOrder() {
    if(!gridList.length) return 1;
    return gridList.length+1;
}

function createRow(rowItems) {
    if(rowItems){
        let newItem = {
            "rowId": findLastId(),
            "rowOrder": findLastOrder(),
            "rowItems": [rowItems],
        };
        gridList.push(newItem);
    } else {

        // @todo: append new item to after current item next
        let newItem = {
            "rowId": findLastId(),
            "rowOrder": findLastOrder(),
            "rowItems": [
                {
                    "id":10,
                    "svgattr":"M100,0V50H0V0Z",
                    "kolon":[
                        {"id":"25yl85j","width":100}
                    ]
                }
            ],
        };
        gridList.push(newItem);
    }
}

function removeRow(item) {
    gridList.find(function (gridItem,gridIndex) {
        if(gridItem.rowId == item.rowId){
            gridList.splice(gridIndex,1);
        }
    })
}

function changeRowStatus(status) {
    addItemStatus.value = status;
}

function addRow(item) {
    createRow(item);
    changeRowStatus(false)
}

</script>

<template>
    <!--<h1>{{ mouseHovering }} , {{ gridList.length }}</h1>-->
    <section class="uk-section uk-overflow-hidden uk-margin-large-top">
        <div class="uk-container uk-container-expand ">
            <div class="grid-area uk-text-center" uk-sortable="handle: .moveClass">
                <div class="uk-width-1-1" v-if="gridList.length == 0">
                    There is no any row.
                </div>
                <div class="uk-grid uk-grid-small clm" uk-grid v-else v-for="item in gridList">
                    <div class="uk-width-1-1 column selected-row" @@mouseleave="mouseLeave(subItem,$event)" @@mouseenter="mouseenter(subItem,$event)" v-for="subItem in item.rowItems" v-if="item.rowItems">
                        <div class="uk-position-top-center">
                            <div class="edit-button uk-padding-small">
                                <ul class="uk-subnav uk-margin-remove">
                                    <li @click="createRow()" class="uk-padding-remove"><span uk-icon="icon: plus; ratio:0.8" ></span></li>
                                    <li class="moveClass"><span uk-icon="icon: move; ratio:0.8" ></span></li>
                                    <li @click="removeRow(item)"><span uk-icon="icon: close; ratio:0.8" ></span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="uk-grid uk-grid-small" uk-grid @mouseout="hovering(false)"  @mouseover="hovering(true)">
                            <div :class="`uk-width-1-${subItem.kolon.length}`" v-for="column in subItem.kolon" @mouseout="hovering(false)"  @mouseover="hovering(true)">
                                <div class="column-item uk-position-relative"  @mouseout="hovering(false)"  @mouseover="hovering(true)">
                                    <div class="uk-position-center uk-text-center" @mouseout="hovering(false)"  @mouseover="hovering(true)">
                                        <span uk-icon="icon: plus-circle; ratio:1.5" @mouseout="hovering(false)"  @mouseover="hovering(true)"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-1" v-else>
                        There is no any row item.
                    </div>
                </div>

            </div>
        </div>
    </section>


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



<style lang="less">

    @primary-color: aqua;
    @dashed-border-color: #747474;

    @import 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.13.7/css/uikit.min.css';

    body{
        background-color: #fff;
    }

    .selection-area{
        border: 1px dashed @dashed-border-color;
        padding: 40px 40px 75px 40px;
    }

    .column{
        padding: 10px 0;
    }

    .column-item{
        border:1px dashed @dashed-border-color;
        min-height: 50px;
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

    .selected-row{
        position:relative;

        &:before,
        &:after{
            content: "";
            width: 150vw;
            height: 1px;
            background-color: aqua;
            position: absolute;
            left: -10vw;
        }

        &:before{
            top:0px
        }

        &:after{
            bottom:1px;
        }
    }

    .edit-button{
        display: none;
        background-color: @primary-color;
        transform: translateY(-100%);
        top: 0;
        display: inline-block;
        .selected-row &{
            display:block;
        }
    }
</style>
