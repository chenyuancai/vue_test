<template>
<div class="content">
    <div class="content_all">
        <div class="content_all_style">
            <div class="content_all_ymw">
                <div class="content_all_Data">
                    <div class="content_all_Data_style">
                        <div class="content_all_Data_year">
                            <select id="yearselect" v-model="nowYear">
                                <option> {{nowYear}}</option>
                                <option v-for="(item,index) in nearyear" :key="index" :value="item">{{item}}</option>
                            </select>
                        </div>
                        <div class="content_all_Data_year_span"><span>年</span></div>
                        <div class="content_all_Data_month">
                            <select id="monthselect" v-model="nowMonth">
                                <option>{{nowMonth}}</option>
                                <option class="op1" v-for="(item,index) in Mmonth" :key="index">{{item}}</option>
                            </select>
                        </div>
                        <div class="content_all_Data_month_span"><span>月</span></div>
                    </div>
                    <div class="content_back" @click="back">回到当日</div>
                </div>

                <div class="content_kuang_five_p7" v-if="p7">
                    <div class="content_kuang_five_pp7">
                        <span v-for="(item,index) in Mmeek" :key="index">{{item}}</span>

                    </div>
                    <!--<span></span>-->
                </div>
            </div>

            <div class="content_kuang_five" v-if="cfive">
                <div class="content_kuang_five_style">
                    <div class="content_kuang_five_first">
                        <div class="content_kuang_five_p1">
                            <div class="content_kuang_five_p1_one">{{Allday[0].lastMonthDay}}
                                <button class="content_btn">+</button>
                            </div>
                            <div class="content_kuang_five_p1_two">{{Allday[1].lastMonthDay}}
                                <button class="content_btn">+</button>
                            </div>
                            <div class="content_kuang_five_p1_three">{{Allday[2].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p1_four">{{Allday[3].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p1_five">{{Allday[4].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p1_six">{{Allday[5].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p1_seven">{{Allday[6].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>
                    <div class="content_kuang_five_second">
                        <div class="content_kuang_five_p2">
                            <div class="content_kuang_five_p2_one">{{Allday[7].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_two">{{Allday[8].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_three">{{Allday[9].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_four">{{Allday[10].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_five">{{Allday[11].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_six">{{Allday[12].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p2_seven">{{Allday[13].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_five_third">
                        <div class="content_kuang_five_p3">
                            <div class="content_kuang_five_p3_one">{{Allday[14].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_two">{{Allday[15].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_three">{{Allday[16].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_four">{{Allday[17].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_five">{{Allday[18].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_six">{{Allday[19].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p3_seven">{{Allday[20].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_five_fourth">
                        <div class="content_kuang_five_p4">
                            <div class="content_kuang_five_p4_one">{{Allday[21].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_two">{{Allday[22].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_three">{{Allday[23].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_four">{{Allday[24].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_five">{{Allday[25].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_six">{{Allday[26].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p4_seven">{{Allday[27].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_five_fifth">
                        <div class="content_kuang_five_p5">
                            <div class="content_kuang_five_p5_one">{{Allday[28].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_two">{{Allday[29].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_three">{{Allday[30].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_four">{{Allday[31].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_five">{{Allday[32].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_six">{{Allday[33].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_five_p5_seven">{{Allday[34].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="content_kuang_six" v-if="csix">
                <div class="content_kuang_six_style">
                    <div class="content_kuang_six_first">
                        <div class="content_kuang_six_pp1">
                            <div class="content_kuang_six_pp1_one">{{Allday[0].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_two">{{Allday[1].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_three">{{Allday[2].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_four">{{Allday[3].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_five">{{Allday[4].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_six">{{Allday[5].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_seven">{{Allday[6].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_six_second">
                        <div class="content_kuang_six_pp2">
                            <div class="content_kuang_six_pp2_one">{{Allday[7].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_two">{{Allday[8].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_three">{{Allday[9].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_four">{{Allday[10].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_five">{{Allday[11].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_six">{{Allday[12].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_seven">{{Allday[13].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_six_third">
                        <div class="content_kuang_six_pp3">
                            <div class="content_kuang_six_pp2_one">{{Allday[14].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_two">{{Allday[15].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_three">{{Allday[16].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_four">{{Allday[17].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_five">{{Allday[18].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_six">{{Allday[19].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_seven">{{Allday[20].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_six_fourth">
                        <div class="content_kuang_six_pp4">
                            <div class="content_kuang_six_pp2_one">{{Allday[21].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_two">{{Allday[22].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_three">{{Allday[23].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_four">{{Allday[24].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_five">{{Allday[25].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_six">{{Allday[26].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp2_seven">{{Allday[27].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_six_fifth">
                        <div class="content_kuang_six_pp5">
                            <div class="content_kuang_six_pp1_one">{{Allday[28].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_two">{{Allday[29].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_three">{{Allday[30].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_four">{{Allday[31].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_five">{{Allday[32].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_six">{{Allday[33].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_seven">{{Allday[34].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                    <div class="content_kuang_six_sixth">
                        <div class="content_kuang_six_pp6">
                            <div class="content_kuang_six_pp1_one">{{Allday[35].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_two">{{Allday[36].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_three">{{Allday[37].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_four">{{Allday[38].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_five">{{Allday[39].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_six">{{Allday[40].lastMonthDay}}<button class="content_btn">+</button></div>
                            <div class="content_kuang_six_pp1_seven">{{Allday[41].lastMonthDay}}<button class="content_btn">+</button></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>

    <!-- <div class="ceshi1" @click="ceshi1" ref="ceshi1">少于等于35天</div>
    <div class="ceshi2" @click="ceshi2" ref="ceshi1">大于35天</div>-->

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
            // nowYearswitck: "",
            // nowMonthswitch: "",

        };

    },

    watch: {
        nowYear(val, oldval) {
            console.log("nowYearswitck()...")
            this.nowYear = this.nowYear;
            // this.nowMonth = this.nowMonth;
            // alert(this.nowYear)
            console.log("改变年：" + this.nowYear)
            console.log("改变年：" + this.nowMonth)
            var dayC = this.getdayT(this.nowYear, this.nowMonth);
            // alert(dayC)
            //获取第一天周几
            var dday = this.Currentweek(this.nowYear, this.nowMonth, 1);
            //获取天数
            var mday = this.manyday(this.nowYear, this.nowMonth);
            //本月最后一天周几
            var last = this.Currentweek(this.nowYear, this.nowMonth, this.manyday(this.nowYear, this.nowMonth));
            var dm = mday + dday + (6 - last);
            console.log(this.nowYear + "年" + this.nowMonth + "月分的天数为" + mday)
            console.log(this.nowYear + "年" + this.nowMonth + "月分日历的天数为" + dm)
            var ddm = mday + dday;
            console.log(this.nowYear + "年" + this.nowMonth + "月分上个月剩下天数加这个月的天数为" + ddm)
            // alert("dm :" + dm + "---ddm:" + ddm)
            console.log("y前置：" + dm)
            // if (dm > 35) {

            // } else {

            // }

            if (dm > 35) {
                // this.cfive = true;
                // this.csix = false;
                if (dday == 0) {
                    if (this.nowMonth < 12) {
                        this.getTAlldaytwo(this.nowYear, this.nowMonth, this.nowYear, this.nowMonth + 1, dm);
                    } else if (this.nowMonth == 12) {
                        this.getTAlldaytwo(this.nowYear, this.nowMonth, this.nowYear + 1, 1, dm);
                    }
                } else if (last == 6) {
                    if (this.nowMonth > 1) {
                        this.getTAlldayone(this.nowYear, this.nowMonth - 1, this.nowYear, this.nowMonth, dm);
                    } else if (this.nowMonth == 1) {
                        this.getTAlldayone(this.nowYear - 1, 12, this.nowYear, this.nowMonth, dm);
                    }
                } else {
                    if (this.nowMonth < 12 && this.nowMonth > 1) {
                        this.getTAllday(this.nowYear, this.nowMonth - 1, this.nowYear, this.nowMonth, this.nowYear, this.nowMonth + 1, dm);
                    } else if (this.nowMonth == 1) {
                        this.getTAllday(this.nowYear - 1, 12, this.nowYear, this.nowMonth, this.nowYear, this.nowMonth + 1, dm);
                    } else if (this.nowMonth == 12) {
                        this.getTAllday(this.nowYear, this.nowMonth - 1, this.nowYear, this.nowMonth, this.nowYear + 1, 1, dm);
                    }
                }
            } else {
                // this.cfive = false;
                // this.csix = true;
                if (dday == 0 || last == 6) {
                    this.getfourwek();
                } else {
                    if (this.nowMonth < 12 && this.nowMonth > 1) {
                        console.log(111111111)
                        this.getTAllday(this.nowYear, this.nowMonth - 1, this.nowYear, this.nowMonth, this.nowYear, this.nowMonth + 1, dm);
                    } else if (this.nowMonth == 1) {
                        this.getTAllday(this.nowYear - 1, 12, this.nowYear, this.nowMonth, this.nowYear, this.nowMonth + 1, dm);
                    } else if (this.nowMonth == 12) {
                        this.getTAllday(this.nowYear, this.nowMonth - 1, this.nowYear, this.nowMonth, this.nowYear + 1, 1, dm);
                    }
                }
            }
            // this.StartTime();

            console.log(this.Allday)
        },
        nowMonth(val, oldval) {
            console.log("comenowMonthswitch()...")
            this.nowMonth = this.nowMonth;
            // alert(this.nowMonth)
            console.log("改变月：" + this.nowYear)
            console.log("改变月：" + this.nowMonth)
            var dayC = this.getdayT(this.nowYear, this.nowMonth);

            // alert(dayC)
            //获取第一天周几
            var dday = this.Currentweek(this.nowYear, this.nowMonth, 1);

            //获取天数
            var mday = this.manyday(this.nowYear, this.nowMonth);

            //本月最后一天周几
            var last = this.Currentweek(this.nowYear, this.nowMonth, this.manyday(this.nowYear, this.nowMonth));

            var dm = mday + dday + (6 - last);
            console.log(this.nowYear + "年" + this.nowMonth + "月分的天数为" + mday)
            console.log(this.nowYear + "年" + this.nowMonth + "月分日历的天数为" + dm)
            var ddm = mday + dday;
            console.log(this.nowYear + "年" + this.nowMonth + "月分上个月剩下天数加这个月的天数为" + ddm)
            // alert("dm :" + dm + "---ddm:" + ddm)
            // console.log(dm)

            console.log("前置条件：" + dm)
            if (dm > 35) {
                // alert(34)
                // this.cfive = true;
                // this.csix = false;
                // if (dday == 0) {
                //     if (this.nowMonth < 12) {
                //         this.getTAlldaytwo(parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                //     } else {
                //         this.getTAlldaytwo(parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear) + 1, 1, dm);
                //     }
                // } else if (last == 6) {
                //     if (this.nowMonth > 1) {
                //         this.getTAlldayone(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), dm);
                //     } else {
                //         this.getTAlldayone(parseInt(this.nowYear) - 1, 12, parseInt(this.nowYear), parseInt(this.nowMonth), dm);
                //     }
                // } else 
                // {
                if (parseInt(this.nowMonth) < 12 && parseInt(this.nowMonth) > 1) {

                    this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                } else if (parseInt(this.nowMonth) == 1) {
                    this.getTAllday(parseInt(this.nowYear) - 1, 12, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                } else if (parseInt(this.nowMonth) == 12) {
                    this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear) + 1, 1, dm);
                }
                // }
            } else if (dm <= 35) {
                console.log("dday:" + dday)
                console.log("this.nowMonth" + this.nowMonth)
                // alert(36)
                // this.cfive = false;
                // this.csix = true;
                // var ythismonth = parseInt(this.nowYear);
                // var nextmonth = ythismonth + 1;
                // console.log("lastyear" + nextmonth)
                // console.log("lastyear111" + this.nowYear + 1)
                console.log(this.nowYear + "年" + this.nowMonth + "月分的天数为" + mday)
                if (dday == 0) {
                    if (mday == 28) {
                        this.getfourwek();
                    } else {
                        if (parseInt(this.nowMonth) < 12 && parseInt(this.nowMonth) > 1) {

                            this.getonewek(parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                        } else if (parseInt(this.nowMonth) == 1) {
                            this.getonewek(parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                        } else if (parseInt(this.nowMonth) == 12) {
                            this.getonewek(parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear) + 1, 1, dm);
                        }

                        // if (parseInt(this.nowMonth) < 12 && parseInt(this.nowMonth) > 1) {
                        //     console.log(2222)
                        //     this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                        // } else if (parseInt(this.nowMonth) == 1) {
                        //     this.getTAllday(parseInt(this.nowYear) - 1, 12, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                        // } else if (parseInt(this.nowMonth) == 12) {
                        //     this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear) + 1, 1, dm);
                        // }
                    }

                } else {
                    if (parseInt(this.nowMonth) < 12 && parseInt(this.nowMonth) > 1) {
                        console.log(2222)
                        this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                    } else if (parseInt(this.nowMonth) == 1) {
                        this.getTAllday(parseInt(this.nowYear) - 1, 12, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear), parseInt(this.nowMonth) + 1, dm);
                    } else if (parseInt(this.nowMonth) == 12) {
                        this.getTAllday(parseInt(this.nowYear), parseInt(this.nowMonth) - 1, parseInt(this.nowYear), parseInt(this.nowMonth), parseInt(this.nowYear) + 1, 1, dm);
                    }
                }
            }
            // this.StartTime();
            console.log(this.Allday)
        }

    },

    methods: {

        currentTime() {
            // setInterval(this.StartTime, 50000);
            console.log("更新时间到...")
        },
        StartTime() {

            this.Mmonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.Mmeek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
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
            console.log("今年:" + this.nowYear)
            console.log("今月:" + this.nowMonth)
            console.log("本月第一天:" + this.Currentweek(this.nowYear, this.nowMonth, 1))
            console.log("最后一天:" + this.Currentweek(this.nowYear, this.nowMonth, this.manyday(this.nowYear, this.nowMonth)))
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

            console.log("zuiyhou" + firstDayOfCurMonth)
            console.log(lastDayOfCurMonth)
        },

        //判断这一月有几周
        mangweek() {

        },

        //28天情况,刚好周天为一号的情况
        getfourwek() {
            this.Allday = [];
            for (var i = 25; i <= 31; i++) {
                this.Allday.push({
                    lastMonthDay: i,
                    flag: "after"
                });
            }
            for (var ii = 1; ii <= 28; ii++) {
                this.Allday.push({
                    lastMonthDay: ii,
                    flag: "this"
                });
            }
            console.log(this.Allday)
            // return Allday;
        },
        //第一天为周日
        getonewek(thisyear, thismounth, lastyear, lastmonth, day) {
            this.Allday = [];
            //获取天数
            var ddday1 = this.manyday(thisyear, thismounth);
            for (var i = 1; i <= ddday1; i++) {
                this.Allday.push({
                    lastMonthDay: i,
                    flag: "after"
                });
            }
            for (var ii = 1; ii <= day - ddday1; ii++) {
                this.Allday.push({
                    lastMonthDay: ii,
                    flag: "this"
                });
            }
            console.log(this.Allday)
            // return Allday;
        },
        //各个月有多少天(三个月)
        getTAllday(afteryear, aftermonth, thisyear, thismonth, lastyear, lastmonth, day) {
            this.Allday = [];
            console.log("传过来的天数：" + day)
            // console.log(this.Allday)
            // console.log("----")
            // console.log(this.Allday.push(1, 2, 3))
            // console.log("----")
            // console.log(this.Allday.push(1, 2, 3, 4, 5))
            //获取周几
            var wwweek1 = this.Currentweek(afteryear, aftermonth, 1);
            var wwweek2 = this.Currentweek(thisyear, thismonth, 1);
            var wwweek3 = this.Currentweek(lastyear, lastmonth, 1);
            console.log("firstday:" + wwweek2)
            //获取天数
            var ddday1 = this.manyday(afteryear, aftermonth);
            var ddday2 = this.manyday(thisyear, thismonth);
            var ddday3 = this.manyday(lastyear, lastmonth);
            console.log("afterdayT:" + ddday1)
            console.log("afteryear：" + afteryear)
            console.log("aftermonth：" + aftermonth)
            console.log("thisyear：" + thisyear)
            console.log("thismonth：" + thismonth)
            console.log("lastyear：" + lastyear)
            console.log("lastmonth：" + lastmonth)
            console.log("本月天数：" + ddday2)
            // if (month > 1 && month < 12) {

            // }
            var aa = 6 - wwweek2;
            if ((ddday1 - wwweek2) !== ddday1) {
                for (var i = ddday1 - wwweek2 + 1; i <= ddday1; i++) {
                    this.Allday.push({
                        lastMonthDay: i,
                        flag: "after"
                    });

                }
            }

            for (var ii = 1; ii <= ddday2; ii++) {
                this.Allday.push({
                    lastMonthDay: ii,
                    flag: "this"
                });
            }
            var that = this;
            if ((day - aa - ddday2) !== 0) {
                for (var iii = 1; iii <= day - aa - ddday2; iii++) {
                    that.Allday.push({
                        lastMonthDay: iii,
                        flag: "last"
                    });
                }
            }

            console.log(this.Allday)
            // return this.Allday;
        },

        //获取两个月的情况（上两个月）
        getTAlldayone(afteryear, aftermonth, thisyear, thismonth, day) {
            this.Allday = [];
            //获取周几
            var wwweek1 = this.Currentweek(afteryear, aftermonth, 1);
            var wwweek2 = this.Currentweek(thisyear, thismonth, 1);
            //获取天数
            var ddday1 = this.manyday(afteryear, aftermonth);
            var ddday2 = this.manyday(thisyear, thismonth);
            var aa = 6 - wwweek2;
            for (var i = ddday1 - aa; i <= ddday1; i++) {
                this.Allday.push({
                    lastMonthDay: i,
                    flag: "after"
                });
            }
            for (var ii = 1; ii <= ddday2; ii++) {
                this.Allday.push({
                    lastMonthDay: ii,
                    flag: "this"
                });
            }
            console.log(this.Allday)
            return this.Allday;
            // alert(this.Allday[0].lastMonthDay)
        },

        //获取两个月的情况（下两个月）
        getTAlldaytwo(thisryear, thismonth, lastyear, lastmonth, day) {
            this.Allday = [];
            //获取周几
            var wwweek1 = this.Currentweek(thisryear, thismonth, 1);
            var wwweek2 = this.Currentweek(lastyear, lastmonth, 1);
            //获取天数
            var ddday1 = this.manyday(thisryear, thismonth);
            var ddday2 = this.manyday(lastyear, lastmonth);
            var aa = 7 - wwweek2;
            for (var i = 1; i <= ddday1; i++) {
                this.Allday.push({
                    lastMonthDay: i,
                    flag: "this"
                });
            }
            for (ii = 1; i <= aa; ii++) {
                this.Allday.push({
                    lastMonthDay: ii,
                    flag: "last"
                });
            }
            console.log(this.Allday);
            // return Allday;
            // alert(this.Allday[0].lastMonthDay)
        },

        //获取输入这个月份的天数
        getdayT(year, month) {
            month = parseInt(month, 10);
            var ab = new Date(year, month, 0);
            var q = ab.getDate();
            console.log("comegetdayT()...")
            return q;
        },

        //获取

        //打包近五十年的年份
        getnearyear(data) {
            for (var i = data - 49; i < data + 49; i++) {
                this.nearyear.push(i);
            }

            console.log("comegetnearyear():" + this.nearyear)
            // console.log(this.nearyear)
            // return this.nearyear;
        },

        //判断多少天
        manyday(year, month) {
            var day = new Date(year, month, 0);
            var many = day.getDate();
            console.log("comemanyday()...")
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
            console.log("comeCurrentweek()...")
            var aa = weekDay[dt.getDay()];
            console.log(aa)
            return aa;
        },

        formatDateTime(value) {
            var date = new Date();
            var year = data.getFullYear();
            console.log(year)
            return date.getFullYear();
        },

        back() {
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay(); //星期几
            this.nowMonth = mm;
            this.nowYear == yy;
            console.log("comeback()...")
            console.log("backmonth" + this.nowMonth)
            console.log("backyear:" + this.nowYear)

            // this.StartTime();
            // alert(this.getTAlldayone(2020, 10, 2020, 11, 30))
        }

    },

    mounted() {
        this.currentTime();
        this.StartTime();
    },

    // 销毁定时器
    beforeDestroy: function () {
        if (this.getDate) {
            console.log("销毁定时器")
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    }

}
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
    width: 900px;
    height: 600px;
    display: flex;
    justify-content: center;
    border: grey 1px solid;
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

.content_all_style .content_all_ymw .content_kuang_five_p7 {
    // border: yellow 1px solid;
    width: 770px;
    height: 80px;
    display: flex;
    justify-content: center;
}

.content_all_style .content_all_ymw .content_kuang_five_p7 .content_kuang_five_pp7 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.content_all_style .content_all_ymw .content_kuang_five_p7 .content_kuang_five_pp7 span {
    display: flex;
    flex: 0.1428;
    height: 80px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content .content_kuang_five {
    width: 768px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: grey 1px solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_first .content_kuang_five_p1 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_first .content_kuang_five_p1 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_first .content_kuang_five_p1 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;

}

.content_all .content_all_style .content_kuang_five .content_kuang_five_first .content_kuang_five_p1 div:hover+.content_btn {
    display: block;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_second .content_kuang_five_p2 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_second .content_kuang_five_p2 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_second .content_kuang_five_p2 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_third .content_kuang_five_p3 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_third .content_kuang_five_p3 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_third .content_kuang_five_p3 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fourth .content_kuang_five_p4 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fourth .content_kuang_five_p4 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fourth .content_kuang_five_p4 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fifth .content_kuang_five_p5 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fifth .content_kuang_five_p5 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_five .content_kuang_five_fifth .content_kuang_five_p5 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content .content_kuang_six {
    width: 770px;
    height: 476px;
    display: flex;
    justify-content: center;
    align-content: center;
    // border: green 1px solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_first .content_kuang_six_pp1 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_first .content_kuang_six_pp1 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_first .content_kuang_six_pp1 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_second .content_kuang_six_pp2 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_second .content_kuang_six_pp2 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_second .content_kuang_six_pp2 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_third .content_kuang_six_pp3 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_third .content_kuang_six_pp3 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_third .content_kuang_six_pp3 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fourth .content_kuang_six_pp4 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fourth .content_kuang_six_pp4 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fourth .content_kuang_six_pp4 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fifth .content_kuang_six_pp5 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fifth .content_kuang_six_pp5 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_fifth .content_kuang_six_pp5 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_sixth .content_kuang_six_pp6 {
    width: 770px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_sixth .content_kuang_six_pp6 div {
    display: flex;
    flex: 0.1428;
    height: 68px;
    justify-content: center;
    align-items: center;
    border: 1px grey solid;
}

.content_all .content_all_style .content_kuang_six .content_kuang_six_sixth .content_kuang_six_pp6 div:hover {
    cursor: pointer;
    margin-top: 3px;
    border-radius: 6px;
    background-color: #caf8ca;
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
    right: 440px;
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
