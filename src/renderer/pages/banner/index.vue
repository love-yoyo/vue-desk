<style scoped>
    .title {
        font-size: 26px;
        font-weight: bolder;
    }
    .panel-tool {
        padding: 0 10px;
    }
    .panel-tool-plus {
        height: 32px;
        line-height: 32px;
        padding: 0px 2px;
        font-size: 14px;
        color: #a4a4a4;
    }
    .preview-panel {
        background-color: #e0e0e0;
        width: 100%;
        height: 800px;
        position: relative;
        overflow: auto;
    }

    .preview-frame {
        position: absolute;
        background-color: #fff;
        top: 40px;
        left: 50%;
        width: 375px;
        height: 812px;
        transform: scale(0.6) translateX(-50%);
        transform-origin: left top;
        overflow: auto;
    }

    .preview-img {
    }

    .browser-size {
        display: inline-block;
    }
</style>
<template>
    <layout>
        <Content>
            <Row>
                <Col span="12" class="panel-tool">
                    <Row>
                        <Col span="24" class="title">工具区</Col>
                    </Row>
                    <br>
                    <Row type="flex" justify="start">
                        <Col span="6">
                            <Select @on-change="onChangeBrowser">
                                <Option v-for="item in browserList" :value="item.name" :key="item.name">{{ item.name }}</Option>
                            </Select>
                        </Col>
                        <Col span="2" style="margin-left: 20px"><Input v-model="currentBrowser.width" :disabled="currentBrowser.disabled" placeholder="default size"></Input></Col>
                        <div class="panel-tool-plus">x</div>
                        <Col span="2"><Input v-model="currentBrowser.height" :disabled="currentBrowser.disabled" placeholder="default size"></Input></Col>
                        <Col span="4" style="margin-left: 20px">
                            <Select @on-change="onChangeScale">
                                <Option v-for="item in scaleList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                        <Col span="4" style="margin-left: 20px">
                            <Select @on-change="onChangeBannerType">
                                <Option v-for="item in bannerBgTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </Col>
                    </Row>
                    <br>
                    <Row>
                        <Col span="24"><Button @click="changeBg">更换背景</Button></Col>
                    </Row>
                </Col>
                <Col span="12">
                    <div class="preview-panel">
                        <!-- <div class="preview-frame" :style="{ width: `${currentBrowser.width}px`, height: `${currentBrowser.height}px` }"> -->
                        <div class="preview-frame" :style="previewFrameStyle">
                            <img :src="`file://${ bannerBg }`" alt="" class="preview-img" :style="previewImgStyle">
                        </div>
                    </div>
                </Col>
            </Row>
        </Content>
    </layout>
</template>
<script>
    import { mapState } from 'vuex';
    import layout from '@/components/layout/index';

    export default {
        data() {
            return {
                currentBrowser: {},
                formatBrowserList: undefined,
                currentScale: '1',
                currentBannerType: 'cover'
            }
        },
        components: { layout },
        computed: {
            ...mapState('banner', {
                bannerBg: state => state.bannerBg,
                browserList: state => state.browserList,
                scaleList: state => state.scaleList,
                bannerBgTypeList: state => state.bannerBgTypeList
            }),
            previewFrameStyle() {
                return {
                    width: `${this.currentBrowser.width}px`,
                    height: `${this.currentBrowser.height}px`,
                    transform: `scale(${this.currentScale}) translateX(-50%)`
                }
            },
            previewImgStyle() {
                let imgStyle = {
                    width: '100%'
                };
                if (this.currentBannerType === 'cover') {
                    imgStyle.height = '100%';
                }
                return imgStyle;
            }
        },
        methods: {
            changeBg() {
                let result = this.$electron.remote.dialog.showOpenDialog({properties: ['openFile']});
                console.log(result);
                if (result && result.length > 0) {
                    this.$store.commit('banner/SET_BANNER_BG', { value: result[0] });
                }
            },
            getFormatBrowserList(browserList) {
                this.formatBrowserList = {};
                for (let i = 0; i < browserList.length; i++) {
                    let item = browserList[i];
                    this.formatBrowserList[item.name] = item;
                }

                return this.formatBrowserList;
            },
            onChangeBrowser(value) {
                console.log(value);
                let formatList = this.getFormatBrowserList(this.browserList);
                this.currentBrowser = formatList[value];
            },
            onChangeScale(value) {
                console.log(`[ banner ] scale: ${value}`);
                this.currentScale = value;
            },
            onChangeBannerType(value) {
                console.log(`[ banner ] bannerType: ${value}`);
                this.currentBannerType = value;
            }
        }
    }
</script>