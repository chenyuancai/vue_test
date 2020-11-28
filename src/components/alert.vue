<template>
<div class="_alert" v-show="visible">
    <div class="wind-alert">
        <div class="wind-alert-bg"></div>
        <div class="wind-alert-dialog animate-scale">
            <div class="wind-alert-title">{{title}}</div>
            <div class="wind-alert-contenta">{{contenta}}
                <select>
                    <option class="op_yellow">一般</option>
                    <option class="op_orange">重要</option>
                    <option class="op_red">紧急</option>
                </select>

            </div>
            <div class="wind-alert-content">{{content}}
                <input id="materialSearch" type="text" @keyup.enter="search" @input="search($event)">
            </div>
            <div class="wind-alert-btn" @click="close">{{btn}}</div>
            <div class="wind-alert-clbtn" @click="close">{{clbtn}}</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "rule_alert",
    data() {
        return {
            title: '添加你的日程',
            contenta: '重要性：',
            content: '内容:',
            btn: '确定',
            clbtn: '关闭',
            visible: false
        }
    },
    methods: {

        search: function (event) {
            //方法一：直接通过event.data可以获得文本内容
            if (event.data != null) {
                this.materialName = event.data;
            }
            //方法二：获取DOM对象取value值
            this.materialName = event.currentTarget.value;
            //方法三：通过js获取
            this.materialName = document.getElementById("materialSearch").value;

            // alert(this.materialName)

        },

        close() {
            this.visible = false;
            this._promise && this._promise.resolve()
        }
    },
    watch: {
        '$route'() {
            this.close();
        }
    }
}
</script>

<style>
.wind-alert-dialog {
    top: 30%;
    width: 50%;
    left: 50%;
    opacity: 1;
    position: fixed;
    margin-left: -25%;
    font-size: 14px;
    text-align: center;
    font-family: 'Microsoft Yahei';
    background: #FFFFFF;
    border-radius: 8px;
    z-index: 999999999;
    box-sizing: content-box;
}

.wind-alert-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    display: block;
    position: fixed;
    z-index: 999999998;
    background-color: #000000;
}

.op_yellow {
    background-color: yellow;
}

.op_orange {
    background-color: orange;
}

.op_red {
    background-color: red;
}

.wind-alert-title {
    font-size: 17px;
    padding: 20px 5px 0;
}

.wind-alert-contenta {
    padding: 5px 15px 20px 15px;
    border-bottom: 1px solid #ededed;
    position: relative;
    margin-right: 85px;
    letter-spacing: 5px;
}

.wind-alert-content {
    padding: 5px 15px 20px 15px;
    border-bottom: 1px solid #ededed;
    margin-top: 10px;
    letter-spacing: 5px;
}

.wind-alert-clbtn {
    color: #0582cd;
    font-size: 15px;
    line-height: 40px;
    font-weight: bold;
    margin-left: 130px;
    margin-top: -10px;
}

.wind-alert-clbtn:hover {
    cursor: pointer;
}

.wind-alert-btn {
    color: #0582cd;
    font-size: 15px;
    line-height: 40px;
    font-weight: bold;
    position: relative;
    top: 30px;
}

.wind-alert-btn:hover {
    cursor: pointer;
}

.animate-scale {
    animation-name: scale;
    animation-duration: 0.375s;
}

@keyframes scale {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}
</style>
