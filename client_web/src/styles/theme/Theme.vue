<template>
    <div ref="container" class="container" @scroll="setIndicator" @mouseover="hoverContents = true" @mouseleave="hoverContents = false">
        <div class="header">
            <div class="title">Preview</div>

            <div class="tab">
                <span :class="[{'label':true}, {'selected':previewType == 'component'}]" @click="changePreviewTab('component')">
                    COMPONENTS
                    <div class="selected-line"></div>
                </span>
                <span :class="[{'label':true}, {'selected':previewType == 'theme'}]" @click="changePreviewTab('theme')">
                    THEME VALUES
                    <div class="selected-line"></div>
                </span>
                <ur-text-field ref="search" class="search"
                    v-show="false"
                    underline searchable placeholder="Search Component" no-shake
                    v-model="searchKeyword" :rules="searchValidRule" message-style="light"
                    @enter="searchCategory" @click-icon="searchCategory" />
            </div>

            <div class="underline"></div>
            
        </div>

        <div class="main" v-show="previewType == 'component'">
            <div class="contents">

                <div ref="COMMON" class="category">
                    <div class="category-name">
                        COMMON
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Text
                            </div>
                            <div class="component-sample">
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="ACCORDION" class="category">
                    <div class="category-name">
                        ACCORDION
                    </div>
                    <div class="category-samples vertical">
                        <div class="component">
                            <div class="component-name">
                                Single Line
                            </div>
                            <div class="component-sample">
                                <ur-list-item style="width:800px;" expandable>
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__title">
                                            Lorem ipsum dolor sit amet
                                        </div>
                                    </div>
                                    <template v-slot:expand>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                        </p>
                                    </template>
                                </ur-list-item>
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                Multi Line
                            </div>
                            <div class="component-sample">
                                <ur-list-item style="width:800px;" expandable>
                                    <ur-checkbox size="medium" v-model="accordionChecked" />
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__title">KIM DA JUNG</div>
                                        <div class="list-item__contents__text list-item__contents__body">Senier staff / Solution Group</div>
                                    </div>
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__text">Samsung SDS</div>
                                        <div class="list-item__contents__text">Senier staff / Solution Group</div>
                                    </div>
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__text">2018-08-01 ~ 2021-07-30</div>
                                    </div>
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__text">Confirm</div>
                                    </div>
                                    <template v-slot:expand>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Location
                                            </div>
                                            <div class="list-item__contents__text">
                                                Dallas TX.
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Event Date/Time
                                            </div>
                                            <div class="list-item__contents__text">
                                                10/4 ~ 10/5
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Shipper
                                            </div>
                                            <div class="list-item__contents__text">
                                                SAMSUNG ELECTRONIC (SEA)
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Total Loss
                                            </div>
                                            <div class="list-item__contents__text">
                                                $ 130,320.24 USD
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Event Outline
                                            </div>
                                            <div class="list-item__contents__text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__row">
                                            <div class="list-item__contents__label">
                                                Event Handling
                                            </div>
                                            <div class="list-item__contents__text">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </div>
                                        </div>
                                        <div class="list-item__contents list-item__contents__action">
                                            <ur-button color="primary" shape="solid">BUTTON</ur-button>
                                        </div>
                                    </template>
                                </ur-list-item>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="BADGE" class="category">
                    <div class="category-name">
                        BADGE
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name" style="margin-bottom: 8px;">
                                Notification Badge
                            </div>
                            <div class="component-sample">
                                <ur-notification-badge value="N">MENU</ur-notification-badge>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Status Badge
                            </div>
                            <div class="component-sample">
                                <ur-badge color="success" text="Success" shape="dot" style="margin-right: 8px;" />
                                <span style="margin-right: 36px;">Success</span>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Identification Badge
                            </div>
                            <div class="component-sample">
                                <ur-badge color="processing" text="Official" shape="identifier" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="BUTTON" class="category">
                    <div class="category-name">
                        BUTTON
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Border
                            </div>
                            <div class="component-sample">
                                <ur-button shape="border" color="primary">Button</ur-button>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Solid
                            </div>
                            <div class="component-sample">
                                <ur-button shape="solid" color="primary">Button</ur-button>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Borderless
                            </div>
                            <div class="component-sample">
                                <ur-button shape="borderless" color="primary">Button</ur-button>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Segmented
                            </div>
                            <div class="component-sample">
                                <ur-segment-wrapper solid primary v-model="segmentedValue">
                                    <ur-segment-button value="1">Button 1</ur-segment-button>
                                    <ur-segment-button value="2">Button 2</ur-segment-button>
                                    <ur-segment-button value="3">Button 3</ur-segment-button>
                                </ur-segment-wrapper>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Floating
                            </div>
                            <div class="component-sample">
                                <ur-floating-button primary >
                                    <ur-icon icon="add" iconType="picto" sm />
                                </ur-floating-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="CARD" class="category">
                    <div class="category-name">
                        CARD
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Image
                            </div>
                            <div class="component-sample">
                                <ur-card class="ur-card--top-media" style="width: 306px;">
                                    <div style="margin: 8px;">
                                        <div class="ur-card__contents-image" style="position: relative;">
                                            <img class="ur-card__media" src="../../../public/images/thumb_92x52.png"/>
                                            <span class="ur-card__tag" style="position: absolute; bottom: 4px; right: 4px;">Retail</span>
                                        </div>
                                        <div class="ur-card__contents-text">
                                            <div class="ur-card__header">
                                                Lorem ipsum
                                            </div>
                                            <div class="ur-card__body">
                                                Lorem Ipsum is simply  now on
                                            </div>
                                        </div>
                                    </div>
                                </ur-card>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Text
                            </div>
                            <div class="component-sample">
                                <ur-card style="width: 464px;">
                                    <div class="ur-card__contents">
                                        <div class="ur-card__header">
                                            Lorem Ipsum is dummy text of the
                                            printing and typesetting industry.
                                        </div>
                                        <div class="ur-card__body body1">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </div>
                                        <div class="ur-card__body body2">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown...
                                        </div>
                                    </div>
                                </ur-card>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Image + Text
                            </div>
                            <div class="component-sample">
                                <ur-card style="width: 304px;">
                                    <div class="ur-card__contents">
                                        <div class="ur-card__profile">
                                            <img src="../../../public/images/avatar_68x68.png" class="ur-card__avatar"/>
                                            <div class="ur-card__name">
                                                Tiffany Yoo
                                            </div>
                                            <div class="ur-card__second">
                                                cx.opus@example.com
                                            </div>
                                        </div>
                                        <img class="ur-card__media" src="../../../public/images/thumb_92x52.png"/>
                                        <div class="ur-card__body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry
                                        </div>
                                    </div>
                                </ur-card>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Image + Text + Action
                            </div>
                            <div class="component-sample">
                                <ur-card style="width: 304px;">
                                    <div class="ur-card__contents">
                                        <div class="ur-card__profile">
                                            <img src="../../../public/images/avatar_68x68.png" class="ur-card__avatar"/>
                                            <div class="ur-card__name">
                                                Tiffany Yoo
                                            </div>
                                            <div class="ur-card__second">
                                                cx.opus@example.com
                                            </div>
                                        </div>
                                        <img class="ur-card__media" src="../../../public/images/thumb_92x52.png"/>
                                        <div class="ur-card__body">
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry
                                        </div>
                                        <div class="ur-card__action">
                                            이진호<hr v/>
                                            <ur-icon>display_password</ur-icon> 50<hr v/>
                                            <ur-icon>recommend</ur-icon> 0<hr v/>
                                            <ur-icon>comment</ur-icon> 3
                                        </div>
                                    </div>
                                </ur-card>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="CHECKBOX" class="category">
                    <div class="category-name">
                        CHECKBOX
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-checkbox style="margin-right:60px;">sample</ur-checkbox>
                                <ur-checkbox checked>sample</ur-checkbox>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="CHIP" class="category">
                    <div class="category-name">
                        CHIP
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Input
                            </div>
                            <div class="component-sample">
                                <ur-input-chip icon="map">Seoul</ur-input-chip>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Filter
                            </div>
                            <div class="component-sample">
                                <ur-filter-chip>Seoul</ur-filter-chip>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="DATEPICKER" class="category">
                    <div class="category-name">
                        DATE PICKER
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Single
                            </div>
                            <div class="component-sample">
                                <ur-date-picker v-model="dateValue"/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Date Range
                            </div>
                            <div class="component-sample">
                                <ur-range-picker v-model="dateRangeValue"/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Week
                            </div>
                            <div class="component-sample">
                                <ur-week-picker />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Year
                            </div>
                            <div class="component-sample">
                                <ur-month-picker />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Quater
                            </div>
                            <div class="component-sample">
                                <ur-quarter-picker />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Decade
                            </div>
                            <div class="component-sample">
                                <ur-year-picker v-model="dateDecade" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Time Picker - Stepper
                            </div>
                            <div class="component-sample">
                                <ur-time-picker v-model="dateTime" :meridiem="dateTimeMeridiem" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Time Picker - Dropdown
                            </div>
                            <div class="component-sample">
                                <ur-time-picker v-model="dateTime" mode="dropdown" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="DROPDOWNLIST" class="category">
                    <div class="category-name">
                        DROPDOWN LIST
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Single Selection
                            </div>
                            <div class="component-sample">
                                <ur-dropdown style="width: 200px;" :items="dropdownSingleItems" v-model="dropdownSingleValue"/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Multi Selection
                            </div>
                            <div class="component-sample">
                                <ur-multi-dropdown style="width: 200px;" :items="dropdownMultiItems" v-model="dropdownMultiValue"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="FORM" class="category">
                    <div class="category-name">
                        FORM
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample" style="width: 900px; flex-direction: column; align-items: stretch;">
                                <ur-form-box>
                                    <ur-form-item label="Label"> Simple Text </ur-form-item>
                                    <ur-form-item label="TextField">
                                        <ur-text-field v-model="formData.txt"/>
                                    </ur-form-item>
                                    <ur-form-item label="Dropdown" required>
                                        <ur-dropdown :items="formData.dds" v-model="formData.dd"/>
                                    </ur-form-item>
                                    <ur-form-item label="Date">
                                        <ur-date-picker v-model="formData.dt" />
                                    </ur-form-item>
                                    <ur-form-item label="Radio">
                                        <ur-radio v-model="formData.r" value="1">01</ur-radio>
                                        <ur-radio v-model="formData.r" value="2">02</ur-radio>
                                        <ur-radio v-model="formData.r" value="3">03</ur-radio>
                                    </ur-form-item>
                                    <ur-form-item label="Checkbox">
                                        <label slot="label">
                                            <ur-checkbox v-model="formData.chk">Option</ur-checkbox>
                                        </label>
                                    </ur-form-item>
                                </ur-form-box>
                                <ur-action-bar>
                                    <ur-button>Submit</ur-button>
                                </ur-action-bar>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div ref="GNB" class="category">
                    <div class="category-name">
                        GNB
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Menu
                            </div>
                            <div class="component-sample" style="width: 900px; height: 90px;">
                                <ur-gnb :top-menu="gnbMenus" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Search
                            </div>
                            <div class="component-sample" style="width: 900px; height: 90px;">
                                <ur-gnb :top-menu="gnbMenus" search />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Hambuger
                            </div>
                            <div class="component-sample" style="width: 900px; height: 90px;">
                                <ur-gnb :top-menu="gnbMenus" hamburger />
                            </div>
                        </div>
                    </div>
                </div> -->

                <div ref="LIST" class="category">
                    <div class="category-name">
                        LIST
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample" style="width: 800px; height: 90px;">
                                <ur-list-item style="width:700px;" :height="80" :check="listCheckValue">
                                    <img class="list-item__thumb" src="../../../public/images/thumb_52x52.png"/>
                                    <div class="list-item__contents">
                                        <div class="list-item__contents__title">
                                            Lorem ipsum dolor sit amet
                                        </div>
                                        <div class="list-item__contents__text">
                                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        </div>
                                    </div>
                                    <div class="list-item__support">
                                        <ur-icon class="tr90" sm>collapse_menu</ur-icon>
                                    </div>
                                </ur-list-item>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div ref="LNB" class="category">
                    <div class="category-name">
                        LNB
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                1 Depth
                            </div>
                            <div class="component-sample" style="width:272px; height: 500px;">
                                <ur-lnb :side-menu="lnbDepth1SideMenu" />
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                2 Depth
                            </div>
                            <div class="component-sample" style="width:272px; height: 500px;">
                                <ur-lnb :side-menu="lnbDepth2SideMenu" />
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                3 Depth
                            </div>
                            <div class="component-sample" style="width:272px; height: 500px;">
                                <ur-lnb :side-menu="lnbDepth3SideMenu" />
                            </div>
                        </div>
                    </div>
                </div> -->

                <div ref="PAGINATION" class="category">
                    <div class="category-name">
                        PAGINATION
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-pagination :pagination="basicPagination">border</ur-pagination>
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                Simple
                            </div>
                            <div class="component-sample">
                                <ur-pagination simple :pagination="basicPagination">border</ur-pagination>
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                Dot
                            </div>
                            <div class="component-sample">
                                <ur-carousel>
                                    <ur-carousel-item>
                                        <img src="../../../public/images/food/food_0.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item>
                                        <img src="../../../public/images/food/food_1.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item>
                                        <img src="../../../public/images/food/food_2.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item>
                                        <img src="../../../public/images/food/food_3.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item>
                                        <img src="../../../public/images/food/food_4.png"/>
                                    </ur-carousel-item>
                                </ur-carousel>
                            </div>
                        </div>

                        <div class="component">
                            <div class="component-name">
                                Thumbnail
                            </div>
                            <div class="component-sample">
                                <ur-carousel thumbnail>
                                    <ur-carousel-item thumb="img/food_0.png">
                                        <img src="../../../public/images/food/food_0.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_1.png">
                                        <img src="../../../public/images/food/food_1.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_2.png">
                                        <img src="../../../public/images/food/food_2.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_3.png">
                                        <img src="../../../public/images/food/food_3.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_4.png">
                                        <img src="../../../public/images/food/food_4.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_5.png">
                                        <img src="../../../public/images/food/food_5.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_6.png">
                                        <img src="../../../public/images/food/food_6.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_7.png">
                                        <img src="../../../public/images/food/food_7.png"/>
                                    </ur-carousel-item>
                                    <ur-carousel-item thumb="img/food_8.png">
                                        <img src="../../../public/images/food/food_8.png"/>
                                    </ur-carousel-item>
                                </ur-carousel>
                            </div>
                        </div>

                    </div>
                </div>

                <div ref="POPUP" class="category">
                    <div class="category-name">
                        POPUP
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-button @click="openModal">Click me</ur-button>
                                <ur-modal ref="modal" title="Title" dragable>
                                    <template>
                                        If you are a Samsung employee, please use your company
                                        Email (Knox ID@samsung.com) as your Samsung Account
                                        ID. <b>Sign In with Knox ID</b>
                                    </template>
                                    <template slot="action">
                                        <ur-button @click="closeModal">Cancel</ur-button>
                                        <ur-button @click="closeModal" main>Okay</ur-button>
                                    </template>
                                </ur-modal>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="PROGRESS" class="category">
                    <div class="category-name">
                        PROGRESS
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Circular
                            </div>
                            <div class="component-sample">
                                <ur-determinate-progress shape="circle" 
                                    :value="60"
                                    message="Loading"
                                    messageDirection="bottom"/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Linear
                            </div>
                            <div class="component-sample">
                                <ur-determinate-progress shape="line"  
                                    :value="60"
                                    message="Loading"
                                    messageDirection="bottom" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="RADIOBUTTON" class="category">
                    <div class="category-name">
                        RADIO BUTTON
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-radio-wrapper v-model="radioValue">
                                    <ur-radio value="1">Radio 1 </ur-radio>
                                    <ur-radio value="2">Radio 2 </ur-radio>
                                    <ur-radio value="3">Radio 3 </ur-radio>
                                </ur-radio-wrapper>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="SLIDER" class="category">
                    <div class="category-name">
                        SLIDER
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Single Value
                            </div>
                            <div class="component-sample">
                                <ur-slider v-model="sliderSingleValue" type="single" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Range Value
                            </div>
                            <div class="component-sample">
                                <ur-slider v-model="sliderRangeValue" type="range" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Number + Predefined Values
                            </div>
                            <div class="component-sample">
                                <ur-slider v-model="sliderNumberValue" tick />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Input Value + Predefined Values
                            </div>
                            <div class="component-sample">
                                <ur-slider v-model="sliderInputValue" type="single" tick tickMarkStyle="bar" :tickLabel="0" />
                                <ur-stepper v-model="sliderInputValue" no-control size="small" :min="0" :max="100"
                                    style="margin-left: 18px; width: 60px;"/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Number + Input Value + Predefined Values
                            </div>
                            <div class="component-sample">
                                <ur-slider v-model="sliderInputNumberValue" tick />
                                <ur-stepper v-model="sliderInputNumberValue" no-control size="small" :min="0" :max="100"
                                    style="margin-left: 18px; width: 60px;"/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div ref="STEP" class="category">
                    <div class="category-name">
                        STEP
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-step-box :steps="basicSteps">
                                    <ur-step-item>
                                        <ur-box :title="'Step 1'">
                                            <p>Step 1 contents</p>
                                        </ur-box>
                                    </ur-step-item>
                                    <ur-step-item>
                                        <ur-box :title="'Step 2'">
                                            <p>Step 2 contents</p>
                                        </ur-box>
                                    </ur-step-item>
                                    <ur-step-item>
                                        <ur-box :title="'Step 3'">
                                            <p>Step 3 contents</p>
                                        </ur-box>
                                    </ur-step-item>
                                    <ur-step-item>
                                        <ur-box :title="'Step 4'">
                                            <p>Step 4 contents</p>
                                        </ur-box>
                                    </ur-step-item>
                                </ur-step-box>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Validation
                            </div>
                            <div class="component-sample">
                                <ur-step-box componentid="<%= UID %>" :steps="validationSteps">
                                    <ur-step-item>
                                        <p>Step 1 Validated</p> <ur-switch v-model="validationSteps[0].valid"/>
                                    </ur-step-item>
                                    <ur-step-item>
                                        <p>Step 2 Validated</p> <ur-switch v-model="validationSteps[1].valid"/>
                                    </ur-step-item>
                                    <ur-step-item>
                                        <p>Step 3</p>
                                    </ur-step-item>
                                </ur-step-box>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div ref="STEPPER" class="category">
                    <div class="category-name">
                        STEPPER
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Up &amp; Down
                            </div>
                            <div class="component-sample">
                                <ur-stepper v-model="stepperUpdownValue" control-type='updown'/>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Add &amp; Subtract
                            </div>
                            <div class="component-sample">
                                <ur-stepper v-model="stepperAddsubtractValue" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="SWITCH" class="category">
                    <div class="category-name">
                        SWITCH
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-switch v-model="switchValue" >Switch</ur-switch>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Labeled
                            </div>
                            <div class="component-sample">
                                <ur-switch v-model="switchLabelValue" labeled>Switch</ur-switch>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div ref="TAB" class="category">
                    <div class="category-name">
                        TAB
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic - Label + Icon
                            </div>
                            <div class="component-sample">
                                <ur-tab-box :default-idx="1" >
                                    <template v-for="item in tabBasicList">
                                        <ur-tab-label :idx="item.key" :key="item.key">
                                            <ur-icon :icon="item.icon"/>
                                            <span>{{item.label}}</span>
                                        </ur-tab-label>
                                        <ur-tab-content :idx="item.key" :key="item.key">
                                            <small>Sample contents</small>
                                            <h4>{{item.contents}}</h4>
                                        </ur-tab-content>
                                    </template>
                                </ur-tab-box>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Underline
                            </div>
                            <div class="component-sample">
                                <ur-tab-box :default-idx="1" shape="underline">
                                    <template v-for="item in tabBasicList">
                                        <ur-tab-label :idx="item.key" :key="item.key">
                                            <ur-icon :icon="item.icon"/>
                                            <span>{{item.label}}</span>
                                        </ur-tab-label>
                                        <ur-tab-content :idx="item.key" :key="item.key">
                                            <small>Sample contents</small>
                                            <h4>{{item.contents}}</h4>
                                        </ur-tab-content>
                                    </template>
                                </ur-tab-box>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Editable
                            </div>
                            <div class="component-sample">
                                <ur-tab-box ref="tabbox" :default-idx="1" shape="underline">
                                    <template v-for="item in tabEditableList">
                                        <ur-tab-label :idx="item.key" :key="item.key" :style="[item.edit ? {'padding-right': '40px'} : {}]">
                                            <template v-if="item.edit">
                                                <ur-text-field v-model="item.label" @keydown.enter="toggleTabEdit(item)" underline/>
                                                <ur-icon icon="check" class="tab-icon" @click="toggleTabEdit(item)"/>
                                            </template>
                                            <template v-else>
                                                <span @dblclick="toggleTabEdit(item)">{{item.label}}</span>
                                                <ur-icon icon="close" class="tab-icon" @click="delTab(item.key)"/>
                                            </template>
                                        </ur-tab-label>
                                        <ur-tab-content :idx="item.key" :key="item.key">
                                            <small>Sample contents</small>
                                            <h4>{{item.contents}}</h4>
                                        </ur-tab-content>
                                    </template>
                                    <ur-tab-label :idx="-1" @click="addTab" class="action-tab-label">
                                        <ur-icon>add</ur-icon>
                                    </ur-tab-label>
                                </ur-tab-box>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div ref="TABLE" class="category">
                    <div class="category-name">
                        TABLE
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample" style="width: 850px; display: flex; flex-flow:column nowrap;">
                                <ur-table :headers="tableBasicHeaders" :items="tableBasicItems" v-model="tableBasicValue" @change="tableBasicChangeRowPerPage" :pagination="tableBasicPage">
                                </ur-table>
                                <ur-pagination :pagination="tableBasicPage" @move="tableBasicChangeCurrentPage"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="TEXTFIELD" class="category">
                    <div class="category-name">
                        TEXT FIELD
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Border
                            </div>
                            <div class="component-sample">
                                <ur-text-field placeholder="Hint text" />
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Underline
                            </div>
                            <div class="component-sample">
                                <ur-text-field underline placeholder="Hint text" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="TITLE" class="category">
                    <div class="category-name">
                        TITLE
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <div class="preview-title">
                                    <div>Title</div>
                                    <ur-text-field type="searchable" placeholder="Search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="TOOLTIP" class="category">
                    <div class="category-name">
                        TOOLTIP
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Label
                            </div>
                            <div class="component-sample">
                                <ur-icon-button b-less large prim id="we-have-no-idea-yet">information</ur-icon-button>
                                <ur-tooltip target-id="we-have-no-idea-yet" mover bottom>
                                    We do not need information yet.
                                </ur-tooltip>
                            </div>
                        </div>
                        <div class="component">
                            <div class="component-name">
                                Information
                            </div>
                            <div class="component-sample">
                                <ur-icon-button b-less large prim id="we-have-no-idea-yet2">information</ur-icon-button>
                                <ur-tooltip target-id="we-have-no-idea-yet2" manual-close bottom>
                                    We do not need information yet.
                                </ur-tooltip>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref="TREE" class="category">
                    <div class="category-name">
                        TREE
                    </div>
                    <div class="category-samples">
                        <div class="component">
                            <div class="component-name">
                                Basic
                            </div>
                            <div class="component-sample">
                                <ur-tree v-model="treeBasicData" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="category" style="height: calc(100vh - 356px);"></div>

            </div>
        </div>

        <div class="main" v-show="previewType == 'theme'">
            <div class="themes contents">

                <div class="category">
                    <div class="category-name">
                        COLOR
                    </div>
                    <div class="category-samples">

                        <div class="theme">
                            <div class="name">
                                Primary Color
                            </div>
                            <div class="sample">
                                <div class="color-box primary" />
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Sub Color
                            </div>
                            <div class="sample">
                                <div class="color-box sub--tint-01" />
                                <div class="color-box sub--tint-02" />
                                <div class="color-box sub--tint-03" />
                                <div class="color-box sub--tint-04" />
                                <div class="color-box sub--tint-05" />
                                <div class="color-box sub--shade-01" />
                                <div class="color-box sub--shade-02" />
                                <div class="color-box sub--shade-03" />
                                <div class="color-box sub--shade-04" />
                                <div class="color-box sub--shade-05" />
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Point Color
                            </div>
                            <div class="sample">
                                <div class="color-box point" />
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Status Color
                            </div>
                            <div class="sample">
                                <div class="color-box status--error" />
                                <div class="color-box status--warning" />
                                <div class="color-box status--success" />
                                <div class="color-box status--processing" />
                                <div class="color-box status--default" />
                                <div class="color-box status--notification" />
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Base Color
                            </div>
                            <div class="sample">
                                <div class="color-box base--black" />
                                <div class="color-box base--gray-90" />
                                <div class="color-box base--gray-80" />
                                <div class="color-box base--gray-70" />
                                <div class="color-box base--gray-60" />
                                <div class="color-box base--gray-50" />
                                <div class="color-box base--gray-40" />
                                <div class="color-box base--gray-30" />
                                <div class="color-box base--gray-20" />
                                <div class="color-box base--gray-10" />
                                <div class="color-box base--white" />
                            </div>
                        </div>

                    </div>
                </div>

                <div class="category" style="margin-top: 60px;">
                    <div class="category-name">
                        TYPOGRAPHY
                    </div>
                    <div class="category-samples">
                        <div class="theme">
                            <div class="name">
                                Font Size
                            </div>
                            <div class="sample horizontal">
                                <span class="font-box size--base">Base Font Size</span>
                                <h1 class="font-box">H1 Hero</h1>
                                <h2 class="font-box">H2 Headline</h2>
                                <h3 class="font-box">H3 Headline</h3>
                                <h4 class="font-box">H4 Headline</h4>
                                <h5 class="font-box">H5 Headline</h5>
                                <h6 class="font-box">H6 Headline</h6>
                                <span class="font-box size--gnb-menu">GNB Menu</span>
                                <span class="font-box size--lnb-menu-1">LNB Menu 1</span>
                                <span class="font-box size--lnb-menu-2">LNB Menu 2</span>
                                <span class="font-box size--page-title">Page Title</span>
                                <span class="font-box size--page-sub-title">Sub Title</span>
                                <span class="font-box size--body">Body 1</span>
                                <span class="font-box size--body--sub-01">Body 2</span>
                                <span class="font-box size--body--sub-02">Body 3</span>
                                <span class="font-box size--body--form-input">Form Input</span>
                                <span class="font-box size--body--form-label">Form Label</span>
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Line Height
                            </div>
                            <div class="sample horizontal">
                                <div class="font-box line-height--title"><b>Title</b><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</div>
                                <div class="font-box line-height--body"><b>Body Text</b><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</div>
                            </div>
                        </div>

                        <div class="theme">
                            <div class="name">
                                Font Weight
                            </div>
                            <div class="sample horizontal">
                                <span class="font-box weight--bold">Bold</span>
                                <span class="font-box weight--medium">Medium</span>
                                <span class="font-box weight--regular">Regular</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div class="indicates"
            :class="[
                {'sticky': isIndicateSticky}, 
                {'absolute': !isIndicateSticky},
                {'hover': hoverContents}
            ]" 
            :style="[{'top': ( !isIndicateSticky ? (108 - scrollPosition) : 0 ) + 'px'}]"
            v-show="previewType === 'component'" @wheel="wheelOnIndicater"
        >
            <div class="title">INDEX</div>
            <div v-for="category in categories" :key="category.name"
                :class="[{'item':true},{'located':category === focusedCategory}]" @click="moveToCategory(category.name)">
                {{category.name}}
            </div>
        </div>

        <ur-floating-button class="button-top" v-show="isScrolled"
            @click="moveToTop">
            <ur-icon icon="slide_up" sm/>
            <span>TOP</span>
        </ur-floating-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {name: 'Common'         , ref: 'COMMON'      , scrollPosition: 0},
                    {name: 'Accordion'      , ref: 'ACCORDION'   , scrollPosition: 100},
                    {name: 'Badge'          , ref: 'BADGE'       , scrollPosition: 200},
                    {name: 'Button'         , ref: 'BUTTON'      , scrollPosition: 540},
                    {name: 'Card'           , ref: 'CARD'        , scrollPosition: 880},
                    {name: 'Checkbox'       , ref: 'CHECKBOX'    , scrollPosition: 1220},
                    {name: 'Chip'           , ref: 'CHIP'        , scrollPosition: 1560},
                    {name: 'Date Picker'    , ref: 'DATEPICKER'  , scrollPosition: 1900},
                    {name: 'Dropdown List'  , ref: 'DROPDOWNLIST', scrollPosition: 2240},
                    {name: 'Form'           , ref: 'FORM'        , scrollPosition: 2358},
                    // {name: 'GNB'            , ref: 'GNB'         , scrollPosition: 9999},
                    {name: 'List'           , ref: 'LIST'        , scrollPosition: 9999},
                    // {name: 'LNB'            , ref: 'LNB'         , scrollPosition: 9999},
                    {name: 'Pagination'     , ref: 'PAGINATION'  , scrollPosition: 9999},
                    {name: 'Popup'          , ref: 'POPUP'       , scrollPosition: 9999},
                    {name: 'Progress'       , ref: 'PROGRESS'    , scrollPosition: 9999},
                    {name: 'Radio Button'   , ref: 'RADIOBUTTON' , scrollPosition: 9999},
                    {name: 'Slider'         , ref: 'SLIDER'      , scrollPosition: 9999},
                    // {name: 'Step'           , ref: 'STEP'        , scrollPosition: 9999},
                    {name: 'Stepper'        , ref: 'STEPPER'     , scrollPosition: 9999},
                    {name: 'Switch'         , ref: 'SWITCH'      , scrollPosition: 9999},
                    // {name: 'Tab'            , ref: 'TAB'         , scrollPosition: 9999},
                    {name: 'Table'          , ref: 'TABLE'       , scrollPosition: 9999},
                    {name: 'Text Field'     , ref: 'TEXTFIELD'   , scrollPosition: 9999},
                    {name: 'Title'          , ref: 'TITLE'       , scrollPosition: 9999},
                    {name: 'Tooltip'        , ref: 'TOOLTIP'     , scrollPosition: 9999},
                    {name: 'Tree'           , ref: 'TREE'        , scrollPosition: 9999}
                ],
                focusedCategory: null,
                searchKeyword: '',
                searchedCategory: null,
                searchValidRule: [
                    (v) => !!this.searchedCategory || '검색결과가 없습니다.'
                ],

                previewType: 'component',

                accordionChecked: false,
                segmentedValue: '1',
                dateValue: '',
                dateRangeValue: ['',''],
                dateYear: '',
                dateWeek: '',
                dateMonth: '',
                dateQuarter: '',
                dateDecade: '',

                dateTime: '10:50',
                dateTimeMeridiem: 'AM',

                dropdownSingleItems: ['ace', 'boss', 'crew', 'duck', 'eagle'],
                dropdownSingleValue: 'ace',
                dropdownMultiItems: [
                    {checked:false, value:'ace',text:'ace'},
                    {checked:false, value:'boss',text:'boss'},
                    {checked:false, value:'crew',text:'crew'},
                    {checked:false, value:'duck',text:'duck'},
                    {checked:false, value:'eagle',text:'eagle'}
                ],
                dropdownMultiValue: [],

                gnbMenus: [{
                    'name': 'Menu1',
                    'url': '/gnb01',
                    'displayYn': 'Y',
                    'hasChild': false,
                    'children': []
                }, {
                    'name': 'Menu2',
                    'url': '/lnb/menu02',
                    'displayYn': 'Y',
                    'hasChild': false,
                    'children': []
                }, {
                    'name': 'Menu3',
                    'url': '/menu03',
                    'displayYn': 'Y',
                    'hasChild': false,
                    'children': []
                }, {
                    'name': 'Menu4',
                    'url': '/menu04',
                    'displayYn': 'Y',
                    'hasChild': false,
                    'children': []
                }],

                listCheckValue: false,

                lnbDepth1SideMenu: [
                    [
                        {
                            'name': 'LNB Menu1',
                            'url': '/lnb/menu01',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': false,
                            'children': []
                        },
                        {
                            'name': 'LNB Menu2',
                            'url': '/lnb/menu02',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': false,
                            'children': []
                        },
                        {
                            'name': 'LNB Menu3',
                            'url': '/lnb/menu03',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': false,
                            'children': []
                        }
                    ]
                ],
                lnbDepth2SideMenu: [
                    [
                        {
                            'name': 'LNB Menu1',
                            'url': '/lnb/menu01',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu1-1',
                                    'url': '/lnb/menu01/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                },
                                {
                                    'name': 'LNB Menu1-2',
                                    'url': '/lnb/menu01/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                }
                            ]
                        },
                        {
                            'name': 'LNB Menu2',
                            'url': '/lnb/menu02',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu2-1',
                                    'url': '/lnb/menu02/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                },
                                {
                                    'name': 'LNB Menu2-2',
                                    'url': '/lnb/menu02/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                }
                            ]
                        },
                        {
                            'name': 'LNB Menu3',
                            'url': '/lnb/menu03',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu3-1',
                                    'url': '/lnb/menu03/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                },
                                {
                                    'name': 'LNB Menu3-2',
                                    'url': '/lnb/menu03/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': false,
                                    'children': []
                                }
                            ]
                        },
                    ]
                ],
                lnbDepth3SideMenu: [
                    [
                        {
                            'name': 'LNB Menu1',
                            'url': '/lnb/menu01',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu1-1',
                                    'url': '/lnb/menu01/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu1-1-1',
                                            'url': '/lnb/menu01/menu01/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu1-1-2',
                                            'url': '/lnb/menu01/menu01/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                },
                                {
                                    'name': 'LNB Menu1-2',
                                    'url': '/lnb/menu01/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu1-2-1',
                                            'url': '/lnb/menu01/menu02/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu1-2-2',
                                            'url': '/lnb/menu01/menu02/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'name': 'LNB Menu2',
                            'url': '/lnb/menu02',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu2-1',
                                    'url': '/lnb/menu02/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu2-1-1',
                                            'url': '/lnb/menu02/menu01/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu2-1-2',
                                            'url': '/lnb/menu02/menu01/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                },
                                {
                                    'name': 'LNB Menu2-2',
                                    'url': '/lnb/menu02/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu2-2-1',
                                            'url': '/lnb/menu02/menu02/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu2-2-2',
                                            'url': '/lnb/menu02/menu02/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            'name': 'LNB Menu3',
                            'url': '/lnb/menu03',
                            'displayYn': 'Y',
                            'fold': true,
                            'hasChild': true,
                            'children': [
                                {
                                    'name': 'LNB Menu3-1',
                                    'url': '/lnb/menu03/menu01',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu3-1-1',
                                            'url': '/lnb/menu03/menu01/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu3-1-2',
                                            'url': '/lnb/menu03/menu01/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                },
                                {
                                    'name': 'LNB Menu3-2',
                                    'url': '/lnb/menu03/menu02',
                                    'displayYn': 'Y',
                                    'fold': true,
                                    'hasChild': true,
                                    'children': [
                                        {
                                            'name': 'LNB Menu3-2-1',
                                            'url': '/lnb/menu03/menu02/menu01',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        },
                                        {
                                            'name': 'LNB Menu3-2-2',
                                            'url': '/lnb/menu03/menu02/menu02',
                                            'displayYn': 'Y',
                                            'fold': true,
                                            'hasChild': false,
                                            'children': []
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                ],
                
                basicPagination: {
                    rowsPerPage: 10,
                    currentPage: 1,
                    totalPages: 5,
                    totalItems: 50
                },

                radioValue: '1',

                sliderSingleValue: 50,
                sliderRangeValue: [30, 70],
                sliderNumberValue: 50,
                sliderInputValue: 60,
                sliderInputNumberValue: 60,

                basicSteps: ["Select preset", "Choose column","Page setting","Preview & Save"],
                validationSteps: [
                    {name: 'Step 1', valid: false}, 
                    {name: 'Step 2', valid: false}, 
                    'Step 3'
                ],

                stepperUpdownValue: 0,
                stepperAddsubtractValue: 0,

                switchValue: true,
                switchLabelValue: false,

                tabBasicList: [
                    {key: 1, label: 'Tab_1', icon: 'cart', contents: "Contents 1"},
                    {key: 2, label: 'Tab_2', icon: 'cart', contents: "Contents 2"},
                    {key: 3, label: 'Tab_3', icon: 'cart', contents: "Contents 3"}
                ],
                tabLastIndex: 4,
                tabEditableList: [
                    {key: 1, label: 'Label 1', contents: "Contents 1", edit: false},
                    {key: 2, label: 'Label 2', contents: "Contents 2", edit: false},
                    {key: 3, label: 'Label 3', contents: "Contents 3", edit: false}
                ],

                formData: {
                    txt: '',
                    dd: null,
                    dt: '',
                    r: null,
                    chk: false,
                    dds: [ 'Item 1','Item 2','Item 3' ]
                },
                
                tableBasicValue: [],
                tableBasicHeaders: [
                    {text: 'No',    value: 'no'   , width: '150px'},
                    {text: 'Name',  value: 'name'},
                    {text: 'Phone', value: 'phone', width:"200px"},
                    {text: 'Grade', value: 'grade', width:"100px"},
                    {text: 'Rank',  value: 'level', width:"100px"}
                ],
                tableBasicItems: [
                    {no: 1, name: 'Grey', phone: '010-1234-5678', grade: 'B', level: 'CL2'},
                    {no: 2, name: 'Blue', phone: '010-1111-1111', grade: 'A', level: 'CL1'},
                    {no: 3, name: 'White', phone: '010-2222-2222', grade: 'C', level: 'CL3'},
                    {no: 4, name: 'Red', phone: '010-3333-3333', grade: 'A+', level: 'CL0'}
                ],
                tableBasicPage: {
                    rowsPerPage: 10,
                    currentPage: 1,
                    totalPages: 1,
                    totalItems: 0
                },
                
                treeBasicData : [
                    {
                        "treeInfo": {
                            "key": "node",
                            "parentKey": "",
                            "name": "Parent",
                            "depth": 0,
                            "seq": 1,
                            "searched": false,
                            "selected": false,
                            "checked": false,
                            "hasChild": true,
                            "expanded": true,
                            "inlineEdit": false
                        },
                        "contents": {},
                        "children": [{
                                "treeInfo": {
                                    "key": "node.child1",
                                    "parentKey": "node",
                                    "name": "Child 1",
                                    "depth": 1,
                                    "seq": 1,
                                    "searched": false,
                                    "selected": false,
                                    "checked": false,
                                    "hasChild": false,
                                    "expanded": false,
                                    "inlineEdit": false
                                },
                                "contents": {},
                                "children": []
                            }, {
                                "treeInfo": {
                                    "key": "node.child2",
                                    "parentKey": "node",
                                    "name": "Child 2",
                                    "depth": 1,
                                    "seq": 2,
                                    "searched": false,
                                    "selected": false,
                                    "checked": false,
                                    "hasChild": false,
                                    "expanded": false,
                                    "inlineEdit": false
                                },
                                "contents": {},
                                "children": []
                            }
                            
                        ]
                    }
                ],
                
                isScrolled: false,
                isIndicateSticky: false,
                hoverContents: false,

                scrollPosition: 0
            }
        },
        mounted () {
            this.focusedCategory = this.categories[0]
        },
        methods: {
            getCategoryScrollPosition() {
                const categoryList =  this.categories.map(category => {
                    category.scrollFrom = this.$refs[category.ref].offsetTop + 88
                    category.scrollTo = category.scrollFrom + this.$refs[category.ref].offsetHeight - 1
                    return category
                })
                categoryList[0].scrollFrom = 0
                categoryList[categoryList.length-1].scrollTo = 99999

                return categoryList
            },
            setIndicator() {
                // const scrollTop = document.documentElement.scrollTop
                const scrollTop = this.$refs.container.scrollTop
                this.scrollPosition = scrollTop
                if (scrollTop > 0) this.isScrolled = true
                else this.isScrolled = false

                if (scrollTop > 108) this.isIndicateSticky = true
                else this.isIndicateSticky = false

                const category = this.getCategoryScrollPosition().find(category => category.scrollTo >= scrollTop)
                this.focusedCategory = category
            },
            wheelOnIndicater(event) {
                event.preventDefault()
                const scrollTop = this.$refs.container.scrollTop
                this.$refs.container.scroll({
                    top: scrollTop + event.deltaY
                })
            },
            moveToCategory(name) {
                const category = this.getCategoryScrollPosition().find(category => category.name === name)
                this.$refs.container.scroll({
                    top: category.scrollFrom,
                    left: 0,
                    behavior: 'smooth'
                })
            },

            searchCategory(keyword) {
                this.searchedCategory = this.categories.find(category => 
                    category.name.indexOf(keyword.toUpperCase()) === 0
                )
                this.$refs.search.validate()
                if(this.$refs.search.isValid()) this.moveToCategory(this.searchedCategory.name)
            },

            changePreviewTab(previewType) {
                this.previewType = previewType
            },

            moveToTop() {
                this.$refs.container.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                })
            },

            openModal()  { this.$refs.modal.open(); },
            closeModal() { this.$refs.modal.close(); },

            addTab() {
                var idx = this.tabLastIndex++;
                var o = {key: idx, label: 'New tab '+ idx, edit: false, contents: 'new Contents ' + idx,};
                this.tabEditableList.push(o);
                var tabbox = this.$refs.tabbox;
                this.$nextTick(function() {
                    tabbox.setIdx(idx);
                })
            },
            delTab(idx) {
                var arr = this.tabEditableList;
                arr.find(function (t,i){
                    if(t.key === idx) {
                        arr.splice(i,1);
                        return true;
                    } else {
                        return false;
                    }
                })
            },
            toggleTabEdit(item){
                item.edit = !item.edit;
            },

            tableBasicChangeRowPerPage(rows){
                let page = this.tableBasicPage;
                this.tableBasicPage.rowsPerPage = rows;
                this.tableBasicPage.totalPages = Math.ceil(page.totalItems/page.rowsPerPage);
                // need logic for table data reload( maybe, you can use ajax )
            },
            tableBasicChangeCurrentPage(page){
                this.tableBasicPage.currentPage = page;
                // need logic for table data reload( maybe, you can use ajax )
            }
        },
    }
</script>

<style lang="scss">
@import './theme.scss';

.container {
    background-color: #ffffff;
    position: absolute;
    padding: 30px 32px;
    min-width: 100vw;

    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.container:hover {
    overflow: auto;
    margin-right: -8px;
    margin-bottom: -8px;
}
.container::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
.container::-webkit-scrollbar-corner {
    background-color:rgba(0, 0, 0, 0.1)
}
.container::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
}
.container::-webkit-scrollbar-track {
    background-color:rgba(0, 0, 0, 0.1);
}
.header {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    font-family: 'Segoe UI';
}
.header .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    margin-bottom: 15px;
}
.header .underline {
    position: absolute;
    bottom: 0;
    opacity: 0.1;
    height: 1px;
    width: 100%;

    background-color: #000000;
}
.header .tab {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
}
.header .tab .label {
    font-size: 16px;
    font-weight: normal;
    line-height: 21px;
    padding-bottom: 10px;
    
    position: relative;
}
.header .tab .label .selected-line {
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 100%;
    opacity: 0;
    background-color: #000000;
}
.header .tab .label:hover {
    cursor: pointer;
}
.header .tab .label + .label {
    margin-left: 40px;
}
.header .tab .label.selected {
    font-weight: bold;
}
.header .tab .label.selected .selected-line {
    opacity: 1;
}
.header .search {
    width: 250px;
    margin-left: auto;
}

.main {
    position: relative;
    margin-top: 30px;
    min-width: 1340px;
    padding-right: 208px;
}

.contents {
    flex-shrink: 0;
}
.category {
    display: flex;
    flex-flow: row nowrap;
}
.category .category-name {
    width: 200px;
    flex-shrink: 0;
    font-size: 13px;
    font-weight: bold;
    font-family: 'Segoe UI';
}
.category .category-samples {
    display: flex;
    flex-flow: row wrap;
    // align-items: center;
    justify-content: stretch;
    flex-grow: 1;
    flex-shrink: 1;
}
.category .category-samples.vertical {
    flex-flow: column nowrap;
}
.category.temp {
    height: 300px;
}

.component {
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 0;
    margin-right: 90px;
    margin-bottom: 60px;
}
.component .component-name,
.themes .theme .name {
    font-size: 13px;
    font-weight: bold;
    color: #5a5a5a;
    font-family: 'Segoe UI';
}
.component .component-sample {
    margin-top: 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: relative;
}
.category-samples.vertical .component + .component {
    margin-right: 0;
}

.themes .theme {
    display: flex;
    flex-flow: column nowrap;
    flex-shrink: 0;
}
.themes .category-samples {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
}
.themes .theme + .theme {
    margin-top: 20px;
}
.themes .theme .sample {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;
}
.themes .theme .sample.horizontal {
    flex-direction: column;
}
.themes .theme .sample .color-box {
    height: 60px;
    width: 60px;
    border-radius: 2px;
}
.themes .theme .sample .color-box + .color-box {
    margin-left: 10px;
}
.themes .theme .sample .font-box + .font-box {
    margin-top: 10px;
}
.color-box.primary { background-color: $color--primary; }
.color-box.sub--tint-01 { background-color: $color--primary--tint-01; }
.color-box.sub--tint-02 { background-color: $color--primary--tint-02; }
.color-box.sub--tint-03 { background-color: $color--primary--tint-03; }
.color-box.sub--tint-04 { background-color: $color--primary--tint-04; }
.color-box.sub--tint-05 { background-color: $color--primary--tint-05; }
.color-box.sub--shade-01 { background-color: $color--primary--shade-01; }
.color-box.sub--shade-02 { background-color: $color--primary--shade-02; }
.color-box.sub--shade-03 { background-color: $color--primary--shade-03; }
.color-box.sub--shade-04 { background-color: $color--primary--shade-04; }
.color-box.sub--shade-05 { background-color: $color--primary--shade-05; }
.color-box.point { background-color: $color--point; }
.color-box.status--error { background-color: $color--status--error; }
.color-box.status--warning { background-color: $color--status--warning; }
.color-box.status--success { background-color: $color--status--success; }
.color-box.status--processing { background-color: $color--status--processing; }
.color-box.status--default { background-color: $color--status--default; }
.color-box.status--notification { background-color: $color--status--notification; }
.color-box.base--black { background-color: $color--black; }
.color-box.base--gray-90 { background-color: $color--gray--90; }
.color-box.base--gray-80 { background-color: $color--gray--80; }
.color-box.base--gray-70 { background-color: $color--gray--70; }
.color-box.base--gray-60 { background-color: $color--gray--60; }
.color-box.base--gray-50 { background-color: $color--gray--50; }
.color-box.base--gray-40 { background-color: $color--gray--40; }
.color-box.base--gray-30 { background-color: $color--gray--30; }
.color-box.base--gray-20 { background-color: $color--gray--20; }
.color-box.base--gray-10 { background-color: $color--gray--10; }
.color-box.base--white { background-color: $color--white; }

.font-box { color: #797979 }
.font-box.size--base{ font-size: $font-size--base }
.font-box.size--gnb-menu{ font-size: $font-size--gnb-menu }
.font-box.size--lnb-menu-1{ font-size: $font-size--lnb-menu-1 }
.font-box.size--lnb-menu-2{ font-size: $font-size--lnb-menu-2 }
.font-box.size--page-title{ font-size: $font-size--page-title }
.font-box.size--page-sub-title{ font-size: $font-size--page-sub-title }
.font-box.size--body{ font-size: $font-size--body }
.font-box.size--body--sub-01{ font-size: $font-size--body--sub-01 }
.font-box.size--body--sub-02{ font-size: $font-size--body--sub-02 }
.font-box.size--body--form-input{ font-size: $font-size--form--input }
.font-box.size--body--form-label{ font-size: $font-size--form--label }

.font-box.line-height--title{ line-height: $line-height--title; width: 200px; }
.font-box.line-height--body{ line-height: $line-height--body-text; width: 200px; }

.font-box.weight--bold{ font-size: 28px; font-weight: $font-weight--bold; }
.font-box.weight--medium{ font-size: 28px; font-weight: $font-weight--medium; }
.font-box.weight--regular{ font-size: 28px; font-weight: $font-weight--regular; }

.indicates {
    position: fixed;
    top: 108px;
    right: 0px;
    bottom: 0px;
    width: 216px;
    padding-top: 30px;
    padding-left: 46px;
    background-color: #ffffff;

    display: flex;
    flex-flow: column nowrap;
    font-family: 'Segoe UI';
    z-index: 9999;
}
.indicates.sticky {
    position: fixed;
    top: 0px;
}
.indicates.sticky.hover {
    right: 8px;
    bottom: 8px;
    width: 208px;
}
.indicates.absolute.hover {
    right: 8px;
    bottom: 8px;
    width: 208px;
}
.indicates .title {
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 10px;
    font-weight: bold;
}
.indicates .dot {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #d6d6d6;
}
.indicates .dot .tooltip {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-weight: normal;
    padding: 5px;
    border-radius: 3px;

    position: absolute;
    z-index: 1;
    
    transform: translate(-110%, -40%);
}
.indicates .dot:hover {
    cursor: pointer;
}
.indicates .dot:hover .tooltip {
    visibility: visible;
}
.indicates .dot.located {
    background-color: #707070;
}
.indicates .dot + .dot {
    margin-top: 7px;
}

.indicates .item {
    font-size: 13px;
    color: #5a5a5a;
    line-height: 22px;
    transition: 0.1s;
}
.indicates .item:hover {
    cursor: pointer;
    text-decoration: underline;
}
.indicates .item.located {
    color: #3e84f7;
    font-weight: bold;
}

.button-top {
    position: fixed;
    width: 64px;
    height: 64px;
    right: 32px;
    bottom: 20px;

    color: #000000;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 1);
    border: solid 1px #dbdbdb;
    background-color: #ffffff;
    z-index: 99999;
}
.button-top span {
    font-size: 12px;
    line-height: 18px;
}
.button-top:hover {
    cursor: pointer;
    background-color: $color--primary--tint-01;
    border-color: #dbdbdb;
}

.ur-lnb {
    top: 0;
    overflow-y: auto;
}
.ur-lnb__menu-list-wrapper {
    overflow-x: hidden;
}
.ur-radio {
    margin-right: 12px;
}
.ur-tab__label.action-tab-label {min-width:0;}
.tab-icon {margin-left:10px;font-size:12px;}
.preview-title {
    left: 0px;
    padding: 0px 20px;

    top: 295px;
    width: 800px;;
    height: 64px;
    font-size: 32px;
    font-weight: 700;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>