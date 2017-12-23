// 一个时间的过滤器插件
export default function(Vue) {
    Vue.filter("date", function(tplDate) {
        let date = new Date(tplDate);
        return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() } `;
    });
};