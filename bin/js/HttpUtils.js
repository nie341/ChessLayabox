/*
* name;
*/
var HttpUtils = (function () {
    function HttpUtils() {
        this.baseurl = "http://localhost:8888";
        this.http = new Laya.HttpRequest();
        this.http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
        this.http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
        this.http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
    }
    HttpUtils.prototype.sendPost = function (pars) {
        var par = this.parsToStr(pars);
        this.http.send(this.baseurl, par, 'post', 'json', ["Content-Type", "application/json"]);
    };
    HttpUtils.prototype.sendGet = function (pars) {
        var par = this.parsToStr(pars);
        this.http.send(this.baseurl + "?" + par, null, 'get', 'json', ["Content-Type", "application/json"]);
    };
    HttpUtils.prototype.parsToStr = function (pars) {
        var par = "";
        for (var i = 0; i < pars.length; i++) {
            par += pars[i][0] + "=" + pars[i][1];
            if (i < pars.length - 2) {
                par += "&";
            }
        }
        console.log("par:", par);
        return par;
    };
    HttpUtils.prototype.onHttpRequestProgress = function (e) {
        console.log(e);
    };
    HttpUtils.prototype.onHttpRequestComplete = function (e) {
        console.log(this.http.data);
    };
    HttpUtils.prototype.onHttpRequestError = function (e) {
        console.log(e);
    };
    return HttpUtils;
}());
//# sourceMappingURL=HttpUtils.js.map