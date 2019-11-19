let Base64 = require('js-base64').Base64;
let mixin = {
    data() {
        return {};
    },
    filters: {
        formatDate: function (time, fmt) {
            var date = new Date(time);
            if (!fmt) {
                fmt = 'yyyy-MM-dd hh:mm'
            }
            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;

        },
        currency: function (value, currency, decimals) {
            const digitsRE = /(\d{3})(?=\d)/g;
            var y = String(value).indexOf(".") + 1;//获取小数点的位置
            var count = String(value).length - y;//获取小数点后的个数
            value = parseFloat(value);
            if (!isFinite(value) || (!value && value !== 0)) return '';
            currency = currency != null ? currency : '';
            if (y > 0) {
                if (count == 1) {
                    decimals = 1
                } else {
                    decimals = decimals != null ? decimals : 2;
                }
            } else {
                decimals = 0;
            }
            var stringified = Math.abs(value).toFixed(decimals);
            var _int = decimals
                ? stringified.slice(0, -1 - decimals)
                : stringified
            var i = _int.length % 3
            var head = i > 0
                ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
                : ''
            var _float = decimals
                ? stringified.slice(-1 - decimals)
                : ''
            var sign = value < 0 ? '-' : ''

            return sign + currency + head +
                _int.slice(i).replace(digitsRE, '$1,') +
                _float
        }
    },
    methods: {
        loadPage(param) {
            this.$router.push(param);
        },

        //route replace
        loadPageReplace(param){
            if(typeof param == 'string' &&param.indexOf('/#/') >= 0){
                //VUE_LOCATION  global.js  参数（微商城链接）
                VUE_LOCATION = 'http://127.0.0.1:8087'
                window.location.href= VUE_LOCATION + param;
            }else{
                this.$router.replace(param);
            }
        },

        appBack() {
            window.history.back();
        },
        togoHome() {
            this.$router.push({path: '/'})
        },
        //编码字符串
        getEncodeString: function (string) {
            var base64String = Base64.encode(string);
            return base64String.LisheAllReplace("\\+", "LISHEA").LisheAllReplace("/", "LISHEB").LisheAllReplace("=", "LISHEC");
        },
        //解码字符串
        getDecodeString: function (encodeString) {
            var base64String = encodeString.LisheAllReplace("LISHEA", "\\+").LisheAllReplace("LISHEB", "/").LisheAllReplace("LISHEC", "=");
            return Base64.decode(base64String);
        },
        // 手机号码格式转化为 344 格式 （188 3886 9199）
        formatPhone: function (phoneNumber) {
            var tel = phoneNumber.toString();
            let PhoneIsshow = localStorage.PhoneIsshow;
            if (PhoneIsshow == 2) {
                tel = tel.substring(0, 3) + '<span style="padding:2px;"></span>****<span style="padding:2px;"></span>' + tel.substring(7, 11);
            } else {
                tel = tel.substring(0, 3) + '<span style="padding:2px;"></span>' + tel.substring(3, 7) + '<span style="padding:2px;"></span>' + tel.substring(7, 11);
            }
            return tel;
        },

        /**
         *  格式化时间
         * @param time 时间戳
         * @param fmt  格式化样式  默认为 'yyyy-MM-dd hh:mm'
         * @returns {*} 格式化后的时间
         */
        formatDate: function (time, fmt) {
            var date = new Date(time);
            if (!fmt) {
                fmt = 'yyyy-MM-dd hh:mm'
            }
            var o = {
                "M+": date.getMonth() + 1, //月份
                "d+": date.getDate(), //日
                "h+": date.getHours(), //小时
                "m+": date.getMinutes(), //分
                "s+": date.getSeconds(), //秒
                "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                "S": date.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        },

        //
        /**
         * 获取时间的第一天和最后一天
         * @param timeStamp   时间戳
         * @returns {Date[]}  [传入日期的月份的第一天，传入日期月份的第一天最后一天]
         */
        getMonthFirstLastDay(timeStamp) {
            let date = timeStamp;
            let m = date.getMonth() + 1;
            let y = date.getFullYear();

            var firstDay = new Date(y, m - 1, 1);//这个月的第一天
            var currentMonth = firstDay.getMonth(); //取得月份数
            var lastDay = new Date(firstDay.getFullYear(), currentMonth + 1, 0);//是0而不是-1

            firstDay = this.formatDate(firstDay, "yyyy-MM-dd");//格式化
            lastDay = this.formatDate(lastDay, "yyyy-MM-dd");//格式化
            return [firstDay, lastDay];
        },
    }
};
export default mixin;
