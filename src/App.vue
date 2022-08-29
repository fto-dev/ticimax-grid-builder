<script setup>
    import {ref, reactive} from 'vue';
    import Draggable from "vuedraggable"

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
    const gridList = reactive([]);

    //const maxInnerRowGridItem = 6;
    const hoverClass = "selected-row";

    let addItemStatus = ref(false);
    let mouseHovering = ref(false);

    let rowMoving = ref(false);

    /*

    const gridList = reactive([
        {
            "rowId": 1,
            "rowItems":[{
            "id": 10,
            "svgattr": "M100,0V50H0V0Z",
            "kolon": [
                {
                    "id": "25yl85j",
                    "width": 100
                }
            ]
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
        }],
        },
        {
            "rowId": 1,
            "rowItems":[{
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
            }]
        },
        {
            "rowId": 1,
            "rowItems":[{
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
            }]
        },
        {
            "rowId": 1,
            "rowItems":[{
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
            }]
        },
        {
            "rowId": 1,
            "rowItems":[{
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
            }],
        },
        {
            "rowId": 14,
            "rowItems":[{
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
            }]
        }
    ]);
*/



    function hovering(status) {
        mouseHovering.value = status;
    }

    function findLastId() {
        if(gridList.length > 0){
            let id = [];
            for (let i = 0; gridList.length > i; i++){
                id.push(gridList[i].rowId);
            }
            return Math.max(...id)+1
        } else{
            return 1;
        }
    }



    //create item

    function createNewItem(addAfterIndex) {
        //let newItem =
    }

    function addItem(rowItem) {
        // @todo missed id
        rowItem.rowItems[0].kolon.push(sectionData[0])
    }


    function createRow(rowItems,index) {
        let newRow;

        if (rowItems) {
            newRow = {
                "rowId": findLastId(),
                "rowItems": [rowItems],
            };
            gridList.push(newRow);
        } else {
            newRow = {
                "rowId": findLastId(),
                "rowItems": [sectionData[0]],
            };
            gridList.splice((index+1), 0,newRow);
        }
    }

    function removeRow(index) {
        gridList.splice(index, 1);
    }

    function changeRowStatus(status) {
        addItemStatus.value = status;
    }

    function addRow(item) {
        createRow(item,null );
        changeRowStatus(false)
    }



</script>

<template>

    <div class="uk-flex-inline uk-flex-wrap uk-width-1-1">
        <section class="uk-flex-1 uk-section uk-padding-large uk-overflow-hidden">
            <div class="uk-container uk-container-expand ">
                <div class="grid-area uk-text-center">
                    <div class="uk-width-1-1" v-if="gridList.length == 0">
                        There is no any row.
                    </div>

                    <div v-else>
                        <draggable
                                :list="gridList"
                                handle=".moveClass"
                                group="rowGroup"
                                item-key="id" #item="{element, index}" >
                            <div class="uk-grid uk-grid-small" :class="rowMoving ? 'rowline' : ''" uk-grid >
                                <div class="uk-width-1-1 column" v-for="subItem in element.rowItems">
                                    <div class="uk-position-top-center">
                                        <div class="edit-button uk-padding-small">
                                            <ul class="uk-subnav uk-margin-remove">
                                                <li @click="createRow(null,index)" class="uk-padding-remove"><span uk-icon="icon: plus; ratio:0.8"></span></li>
                                                <li class="moveClass"><span uk-icon="icon: move; ratio:0.8"></span></li>
                                                <li @click="removeRow(index)"><span uk-icon="icon: close; ratio:0.8"></span></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <draggable
                                                v-if="element.rowItems[0].kolon.length > 0"
                                                :set="parentElement = element"
                                               :list="element.rowItems[0].kolon"
                                               handle=".itemMoveClass"
                                               group="itemGroup"
                                               class="uk-grid uk-grid-collapse"
                                               :class="
                                                element.rowItems[0].id == '21' ||
                                                element.rowItems[0].id == '22' ||
                                                element.rowItems[0].id == '31' ||
                                                element.rowItems[0].id == '32' ||
                                                element.rowItems[0].id == '33' ||
                                                element.rowItems[0].id == '50' ||
                                                element.rowItems[0].id == '34' ? 'uk-child-width-auto' : 'uk-child-width-expand' "
                                               item-key="id"
                                               #item="{element, index}" uk-grid  >
                                            <div :class="element.width == '33' ? 'uuk-flex-expand' : element.width == '66' ? 'uk-flex-1' : '' " :style="`width: ${element.width}%`" @@mouseout="hovering(false)"  @@mouseover="hovering(true)">
                                                <div class="uk-padding-small inner-selection" >
                                                    <div class="edit-button move-button uk-padding-small">
                                                        <ul class="uk-subnav uk-margin-remove">
                                                            <li class="itemMoveClass uk-padding-remove"><span uk-icon="icon: move; ratio:0.8" ></span></li>
                                                        </ul>
                                                    </div>

                                                    <div class="column-item uk-position-relative"  @mouseout="hovering(false)"  @mouseover="hovering(true)">
                                                        <div class="uk-position-center uk-text-center" @mouseout="hovering(false)" @mouseover="hovering(true)">
                                                            <span uk-icon="icon: plus-circle; ratio:1.5" @mouseout="hovering(false)" @mouseover="hovering(true)"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </draggable>
                                    <div class="uk-width-1-1" v-else>
                                        There is no any row item.
                                        <div class="uk-margin-top">
                                            <span uk-icon="icon: plus-circle; ratio:1.5" @click="addItem(element,index)" ></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </draggable>
                    </div>
                </div>
            </div>
        </section>
    </div>


    <div class="uk-container uk-margin-large-top uk-margin-large-bottom">
        <div class="selection-area uk-position-relative">
            <div class="uk-position-center uk-text-center" v-if="!addItemStatus" @click="changeRowStatus(true)">
                <span uk-icon="icon: plus-circle; ratio:1.5"></span>
                <h4 class="uk-margin-small-top uk-margin-remove-bottom">Yeni Satır Ekle</h4>
            </div>

            <button class="uk-position-top-right uk-position-medium" type="button" uk-close v-if="addItemStatus"
                    @click="changeRowStatus(false)"></button>
            <div class="uk-text-center" v-if="addItemStatus">
                SATIR YAPISINI SEÇİNİZ
            </div>

            <div class="uk-container uk-container-xsmall uk-margin-top" v-if="addItemStatus">
                <div class="uk-grid uk-grid-small" uk-grid>
                    <div class="uk-width-1-6" v-for="item in sectionData">
                        <svg @click="addRow(item)" :id="item.id" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 100 50">
                            <path :d="item.svgattr"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="less">

    @primary-color: #00c0c0;
    @dashed-border-color: #747474;

    @import 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.13.7/css/uikit.min.css';

    body {
        background-color: #fff;
    }

    code {
        white-space: pre-wrap !important;
    }

    .rowline {
        background-color: #00fff21f;
    }

    .selection-area {
        border: 1px dashed @dashed-border-color;
        padding: 40px 40px 75px 40px;
    }

    //.selected-row{}
    .column {
        padding: 10px 0;

        &:hover,
        &:focus,
        &:active {
            position: relative;

            &:before,
            &:after {
                content: "";
                width: 150vw;
                height: 1px;
                background-color: @primary-color;
                position: absolute;
                left: -10vw;
            }

            &:before {
                top: 0px
            }

            &:after {
                bottom: 1px;
            }

            .uk-position-top-center > .edit-button {
                display: inline-block;
            }
        }
    }

    .column-item {
        border: 1px dashed @dashed-border-color;
        min-height: 50px;
    }

    .inner-selection {
        position: relative;

        &:hover,
        &:focus,
        &:active {
            .edit-button {
                display: inline-block;
            }
        }

        &:hover {
            &:before,
            &:after {
                content: "";
                top: -9px;
                position: absolute;
                width: 1px;
                height: calc(100% + 18px);
                border-color: green;
            }

            &:before {
                left: 0;
                padding-left: inherit;
                border-left: 2px dashed;
            }

            &:after {
                right: 0;
                padding-right: inherit;
                border-right: 2px dashed;
            }
        }
    }

    .uk-subnav > * > :first-child {
        color: #fff;
    }

    svg {
        cursor: pointer;
    }

    svg path {
        fill: #747474;
        transition: .5s;
    }

    svg:hover path {
        fill: #000;
    }

    .edit-button {
        display: none;
        background-color: @primary-color;
        transform: translateY(-100%);


        /*.selected-row &{
            display:block;
        }*/

        .inner-selection & {
            top: -9px;
            left: 0;
            z-index: 1;

            position: absolute;
        }
    }

    .move-button {
        transform: translateY(0);
    }
</style>
