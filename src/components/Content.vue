<template>
<div class="content">
    <div class="content_all">
        <div class="content_all_style">
            <div class="content_all_ymw">
                <div class="content_all_Data">
                    <div class="content_all_Data_style">
                        <div class="content_all_Data_year">
                            <select id="yearselect" v-model="nowYear">
                                <option>{{ nowYear }}</option>
                                <option v-for="(item, index) in nearyear" :key="index" :value="item">
                                    {{ item }}
                                </option>
                            </select>
                        </div>
                        <div class="content_all_Data_year_span"><span>年</span></div>
                        <div class="content_all_Data_month">
                            <select id="monthselect" v-model="nowMonth">
                                <option>{{ nowMonth }}</option>
                                <option class="op1" v-for="(item, index) in Mmonth" :key="index">
                                    {{ item }}
                                </option>
                            </select>
                        </div>
                        <div class="content_all_Data_month_span"><span>月</span></div>
                    </div>
                    <div class="content_back" @click="back">回到当日</div>
                </div>

                <div class="content_kuang_five_dath" v-if="p7">
                    <div class="content_kuang_five_nowdath">
                        <span v-for="(item, index) in Mmeek" :key="index">{{
                item
              }}</span>
                    </div>
                    <!--<span></span>-->
                </div>
            </div>

            <div class="content_kuang_five_dath" v-if="cfive">
                <div class="content_kuang_five_style">
                    <div class="content_kuang_five_nowdath">
                        <div class="quanquan" v-for="(item, index) in stryear" :key="index" :value="stryear[index]">
                            {{ item.yes }}
                            <span class="test" @click="onTest">+</span>
                            <div class="show" v-show="item.flag"></div>
                            <div class="showgrey" v-show="item.flags"></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Coment",
    component: {},
    data() {
        return {
            cfive: true,
            csix: false,
            p7: "1",
            tag1: true,
            tag2: true,
            date: "",
            nowDate: "", // 当前日期
            nowTime: "", // 当前时间
            nowWeek: "", // 当前星期
            nowYear: "", //当前年
            nowMonth: "", //当前月
            Mmonth: [],
            Mmeek: [],
            nearyear: [],
            Allday: [],
            stryear: [],
            // nowYearswitck: "",
            // nowMonthswitch: "",
        };
    },

    watch: {

        nowYear(val, oldval) {
            console.log("nowYearswitck()...");
            this.nowYear = this.nowYear;
            // this.nowMonth = this.nowMonth;
            // alert(this.nowYear)
            console.log("改变年：" + this.nowYear);
            console.log("改变年：" + this.nowMonth);
            var dayC = this.getdayT(this.nowYear, this.nowMonth);
            // alert(dayC)
            //上一月的天数
            var sday = 0;
            var mmmonth = 0;
            var mmyear = 0;
            var smonth = 0;
            var flage = false;
            var fflage = true;
            if (parseInt(this.nowMonth) == 1) {
                sday = this.manyday(this.nowYear - 1, 12);
                mmyear = this.nowYear - 1;
                mmmonth = 12;
                // alert(mmyear)
            } else if (parseInt(this.nowMonth) > 1 && parseInt(this.nowMonth) < 12) {
                sday = this.manyday(this.nowYear, this.nowMonth - 1);
                mmyear = this.nowYear;
                mmmonth = parseInt(this.nowMonth) + 1;
            } else {
                sday = this.manyday(this.nowYear, this.nowMonth - 1);
                mmyear = this.nowYear + 1;
                mmmonth = 1;
            }
            //获取第一天周几
            var dday = this.Currentweek(this.nowYear, this.nowMonth, 1);
            //获取天数
            var mday = this.manyday(this.nowYear, this.nowMonth);
            //本月最后一天周几
            var last = this.Currentweek(
                this.nowYear,
                this.nowMonth,
                this.manyday(this.nowYear, this.nowMonth)
            );
            var dm = mday + dday + (6 - last);
            console.log(this.nowYear + "年" + this.nowMonth + "月分的天数为" + mday);
            console.log(
                this.nowYear + "年" + this.nowMonth + "月分日历的天数为" + dm
            );
            var ddm = mday + dday;
            console.log(
                this.nowYear +
                "年" +
                this.nowMonth +
                "月分上个月剩下天数加这个月的天数为" +
                ddm
            );
            // alert("dm :" + dm + "---ddm:" + ddm)
            console.log("y前置：" + dm);
            console.log("-----------------");
            console.log(parseInt(this.nowYear) % 4);
            var stryear = [];
            if (parseInt(this.nowYear) % 4 == 0) {
                console.log("闰年");
                console.log(this.stryear);
            } else {
                console.log("平年");
            }
            // alert(this.nowYear == new Date().getFullYear())
            // alert(this.nowMonth == new Date().getMonth() + 1)
            // alert(new Date().getMonth() + 1)
            // alert(new Date().getDate())

            this.stryear = [];
            if (dday == 0) {
                this.stryear = [];
            } else {
                fflage = true;
                for (var i = sday - dday + 1; i <= sday; i++) {
                    this.stryear.push({
                        yes: i,
                        ssyear: mmyear,
                        ssdate: this.nowMonth - 1,
                        ssday: i,
                        flag: flage,
                        flags: fflage
                    });
                }
            }

            for (var i = 1; i <= mday; i++) {
                if (mmyear == new Date().getFullYear() && mmmonth - 1 == new Date().getMonth() + 1 && new Date().getDate() == i) {
                    flage = true;
                } else {
                    flage = false;
                }

                if (mmyear == new Date().getFullYear() && mmmonth - 1 == new Date().getMonth() + 1) {
                    fflage = false;
                } else {
                    fflage = true;
                }
                this.stryear.push({
                    yes: i,
                    ssyear: this.nowYear,
                    ssdate: mmmonth - 1,
                    ssday: i,
                    flag: flage,
                    flags: fflage
                });
            }
            if (last < 6) {
                fflage = true;
                for (var i = 1; i <= 6 - last; i++) {
                    this.stryear.push({
                        yes: i,
                        ssyear: mmyear,
                        ssdate: mmmonth,
                        ssday: i,
                        flag: flage,
                        flags: fflage
                    });
                }
            }
            // this.StartTime();

            if (this.nowYear) {}

            console.log(this.Allday);
        },
        nowMonth(val, oldval) {
            console.log("comenowMonthswitch()...");
            this.nowMonth = this.nowMonth;
            // alert(this.nowMonth)
            console.log("改变月：" + this.nowYear);
            console.log("改变月：" + this.nowMonth);
            var dayC = this.getdayT(this.nowYear, this.nowMonth);

            // alert(dayC)
            //获取第一天周几
            var dday = this.Currentweek(this.nowYear, this.nowMonth, 1);
            //上一月的天数
            var sday = 0;
            var mmmonth = 0;
            var mmyear = 0;
            var smonth = 0;
            var flage = false;
            var fflage = true;
            if (parseInt(this.nowMonth) == 1) {
                sday = this.manyday(this.nowYear - 1, 12);
                mmyear = this.nowYear - 1;
                mmmonth = 12;
                // alert(mmyear)
            } else if (parseInt(this.nowMonth) > 1 && parseInt(this.nowMonth) < 12) {
                sday = this.manyday(this.nowYear, this.nowMonth - 1);
                mmyear = this.nowYear;
                mmmonth = parseInt(this.nowMonth) + 1;
            } else {
                sday = this.manyday(this.nowYear, this.nowMonth - 1);
                mmyear = this.nowYear + 1;
                mmmonth = 1;
            }
            //这一月获取天数
            var mday = this.manyday(this.nowYear, this.nowMonth);

            //本月最后一天周几
            var last = this.Currentweek(
                this.nowYear,
                this.nowMonth,
                this.manyday(this.nowYear, this.nowMonth)
            );

            var dm = mday + dday + (6 - last);
            console.log(
                this.nowYear + "年" + this.nowMonth + "月分上一月的天数为" + sday
            );
            console.log(this.nowYear + "年" + this.nowMonth + "月分的天数为" + mday);
            console.log(
                this.nowYear + "年" + this.nowMonth + "月分日历的天数为" + dm
            );
            console.log(this.nowYear + "年" + this.nowMonth + "第一天为周" + dday);
            console.log(this.nowYear + "年" + this.nowMonth + "最后一天为周" + last);
            var ddm = mday + dday;
            console.log(
                this.nowYear +
                "年" +
                this.nowMonth +
                "月分上个月剩下天数加这个月的天数为" +
                ddm
            );
            // alert("dm :" + dm + "---ddm:" + ddm)
            // console.log(dm)

            console.log("前置条件：" + dm);
            this.stryear = [];
            if (dday == 0) {
                this.stryear = [];
            } else {
                for (var i = sday - dday + 1; i <= sday; i++) {
                    this.stryear.push({
                        yes: i,
                        ssyear: mmyear - 1,
                        ssdate: this.nowMonth - 1,
                        ssday: i,
                        flag: flage,
                        flags: fflage
                    });
                }
            }

            for (var i = 1; i <= mday; i++) {
                if (mmyear == new Date().getFullYear() && mmmonth - 1 == new Date().getMonth() + 1 && new Date().getDate() == i) {
                    flage = true;
                } else {
                    flage = false;
                }

                if (mmyear == new Date().getFullYear() && mmmonth - 1 == new Date().getMonth() + 1) {
                    fflage = false;
                } else {
                    fflage = true;
                }

                this.stryear.push({
                    yes: i,
                    ssyear: this.nowYear,
                    ssdate: mmmonth - 1,
                    ssday: i,
                    flag: flage,
                    flags: fflage
                });
            }
            if (last < 6) {
                for (var i = 1; i <= 6 - last; i++) {
                    this.stryear.push({
                        yes: i,
                        ssyear: mmyear,
                        ssdate: mmmonth,
                        ssday: i,
                        flag: flage,
                        flags: fflage
                    });
                }
            }

            console.log(this.stryear);
            console.log("length" + this.stryear.length);

            if (parseInt(this.nowYear) % 4 == 0) {
                console.log("闰年");
            } else {}
            // this.StartTime();
            console.log(this.Allday);
        },

    },

    methods: {
        onTest() {
            this.$Ruler.Alert("这是一个提示").then((ret) => {
                console.log("then", ret);
            }).catch((e) => {
                console.log("catch", e);
            });
        },
        currentTime() {
            // setInterval(this.StartTime, 50000);
            console.log("更新时间到...");
        },
        StartTime() {
            this.Mmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.Mmeek = [
                "星期日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
            ];
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay(); //星期几
            // console.log(new Date(2020, 9, 0).getDay())
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10 ?
                "0" + new Date().getMinutes() :
                new Date().getMinutes();
            if (week == 1) {
                this.nowWeek = "星期一";
            } else if (week == 2) {
                this.nowWeek = "星期二";
            } else if (week == 3) {
                this.nowWeek = "星期三";
            } else if (week == 4) {
                this.nowWeek = "星期四";
            } else if (week == 5) {
                this.nowWeek = "星期五";
            } else if (week == 6) {
                this.nowWeek = "星期六";
            } else {
                this.nowWeek = "星期日";
            }

            _this.nowTime = hh + ":" + mf;
            _this.nowDate = yy + "-" + mm + "-" + dd;
            _this.nowYear = yy;
            _this.nowMonth = mm;
            // this.nowYearswitck = yy;
            // this.nowMonthswitch = mm
            console.log("今年:" + this.nowYear);
            console.log("今月:" + this.nowMonth);
            console.log(
                "本月第一天:" + this.Currentweek(this.nowYear, this.nowMonth, 1)
            );
            console.log(
                "最后一天:" +
                this.Currentweek(
                    this.nowYear,
                    this.nowMonth,
                    this.manyday(this.nowYear, this.nowMonth)
                )
            );
            // console.log(this.Currentweek(2020, 11, 2))

            //上下50年打包
            this.getnearyear(yy);

            //判断这个月有几周
        },

        //获取输入这天的这月第一天以及最后一天的号数
        getdayFL(yyear, mmonth) {
            let nowdays = new Date(yyear, mmonth, 0);
            let year = nowdays.getFullYear();
            let month = nowdays.getMonth() + 1;
            month = month > 9 ? month : "0" + month;

            let firstDayOfCurMonth = `${year}-${month}-01`;
            let lastDay = new Date(year, month, 0);
            let lastDayOfCurMonth = `${year}-${month}-${lastDay.getDate()}`;

            console.log("zuiyhou" + firstDayOfCurMonth);
            console.log(lastDayOfCurMonth);
        },

        //判断这一月有几周
        mangweek() {},

        //获取输入这个月份的天数
        getdayT(year, month) {
            month = parseInt(month, 10);
            var ab = new Date(year, month, 0);
            var q = ab.getDate();
            console.log("comegetdayT()...");
            return q;
        },

        //获取

        //打包近五十年的年份
        getnearyear(data) {
            for (var i = data - 49; i < data + 49; i++) {
                this.nearyear.push(i);
            }

            console.log("comegetnearyear():" + this.nearyear);
            // console.log(this.nearyear)
            // return this.nearyear;
        },

        //判断多少天
        manyday(year, month) {
            var day = new Date(year, month, 0);
            var many = day.getDate();
            console.log("comemanyday()...");
            return many;
        },

        //获取这一月第一天
        CurrentMonthFirst() {
            var date = new Date();
            date.setDate(1);
            return date.setDate(1);
        },

        //获取这一天是周几
        Currentweek(year, month, date) {
            // var year = 2011,
            //     month = 6,
            //     date = 23;
            var dt = new Date(year, month - 1, date),
                dt2 = new Date();
            // var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            var weekDay = [0, 1, 2, 3, 4, 5, 6];
            // alert(weekDay[dt.getDay()] + "\r\n" + weekDay[dt2.getDay()]);
            console.log("comeCurrentweek()...");
            var aa = weekDay[dt.getDay()];
            console.log(aa);
            return aa;
        },

        formatDateTime(value) {
            var date = new Date();
            var year = data.getFullYear();
            console.log(year);
            return date.getFullYear();
        },

        back() {
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay(); //星期几
            this.nowMonth = mm;
            this.nowYear == yy;
            console.log("comeback()...");
            console.log("backmonth" + this.nowMonth);
            console.log("backyear:" + this.nowYear);
            this.StartTime();
        },
        showColor(data) {

        }
    },

    mounted() {
        this.currentTime();
        this.StartTime();

    },

    // 销毁定时器
    beforeDestroy: function () {
        if (this.getDate) {
            console.log("销毁定时器");
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    },
};
</script>

<style lang="scss" scoped>
.ceshi1:hover {
    cursor: pointer;
}

.ceshi2:hover {
    cursor: pointer;
}

.content {
    width: 100%;
    height: 100px;
    padding: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.content_all {
    // background-color: blue;
    width: 870px;
    height: 660px;
    display: flex;
    justify-content: center;
    border: grey 1px solid;
    border-radius: 20px;
}

.content_all .content_all_Data_style {
    // border: pink 1px solid;
    width: 770px;
    height: 80px;
    display: flex;
    justify-content: center;
}

.content_all_style .content_all_ymw .content_all_Data {
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style {
    width: 300px;
    // border: 1px red solid;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style div {
    display: flex;
    flex: 0.25;
    justify-content: center;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style .content_all_Data_year select {
    outline: none;
    appearance: none;
    border: 0;
    // display: block;
    // position: relative;
    width: 70px;
    height: 30px;
    font-size: 30px;
    background-color: #f2f6f2;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style .content_all_Data_year_span span {
    font-size: 30px;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style .content_all_Data_month select {
    outline: none;
    appearance: none;
    border: 0;
    // display: block;
    // position: relative;
    width: 50px;
    height: 30px;
    font-size: 30px;
    text-align: center;
    background-color: #f2f6f2;
    border-radius: 20px;
}

.content_all_style .content_all_ymw .content_all_Data .content_all_Data_style .content_all_Data_month_span span {
    font-size: 30px;
}

.content_all_style .content_all_ymw .content_kuang_five_dath {
    // border: yellow 1px solid;
    width: 870px;
    height: 80px;
    display: flex;
    justify-content: center;
}

.content_all_style .content_all_ymw .content_kuang_five_dath .content_kuang_five_nowdath {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all_style .content_all_ymw .content_kuang_five_dath .content_kuang_five_nowdath span {
    width: 132px;
    line-height: 80px;
    height: 80px;
    text-align: center;
    box-sizing: border-box;
    border: 1px grey solid;
    position: relative;
}

.content_all_style .content_all_ymw .content_kuang_five_dath .content_kuang_five_nowdath div {
    width: 132px;
    line-height: 80px;
    height: 80px;
    text-align: center;
    box-sizing: border-box;
    border: 1px grey solid;
    position: relative;
}

.quanquan {
    display: inline-block;
    width: 122.27px;
    text-align: center;
    height: 80px;
    line-height: 80px;
    border: 1px grey solid;
    border-radius: 5px;
}

.quanquan:hover {
    position: relative;
    top: -2px;
    background-color: pink;
    opacity: 0.8;
    border-radius: 10px;
}

// .quanquan::after {
//     content: "";
//     position: absolute;
//     width: 20px;
//     height: 20px;
//     // background-color: #004aff;
//     border-radius: 50px;
//     cursor: pointer;
// }

.test {
    width: 20px;
    height: 20px;
    line-height: 20px;
    right: 10px;
    // background-color: red;
    display: none;
    border-radius: 50px;
    position: absolute;
}

.show {
    display: inline-block;
    background-color: red;
    width: 25px;
    height: 25px;
    border-radius: 50px;
    position: relative;
    top: 5px;
    right: 25px;
    opacity: 0.5;
}

.showgrey {
    // // display: inline-block;
    // background-color: grey;
    // width: 122.27px;
    // // text-align: center;
    // height: 80px;
    // opacity: 0.2;
    // position: relative;
    // top: -80px;
}

.quanquan:hover .test {
    background-color: aqua;
    cursor: pointer;
    display: inline-block;
}

.content .content_kuang_five {
    width: 768px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: grey 1px solid;
}

.content_back {
    background-color: pink;
    width: 140px;
    height: 60px;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 480px;
    font-size: 20px;
    border-radius: 40px;
}

.content_back:hover {
    cursor: pointer;
    margin-top: 3px;
    background-color: #caf8ca;
}

.content_btn {
    width: 20px;
    height: 20px;
    border-radius: 3px;
    font-size: 10px;
    color: green;
    font-weight: bold;
    background-color: #f2f6f2;
    // outline: 0 none;
    position: absolute;
    margin-left: 40px;
    margin-top: -20px;
    display: none;
}

.content_btn:hover {
    cursor: pointer;
}

.content_btn:hover {
    display: block;
}
</style>
