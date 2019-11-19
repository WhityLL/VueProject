//编码字符串
var getEncodeString = function (string) {
    var b = new Base664();
    var base64String = b.encode(string);
    return base64String.LisheAllReplace("\\+","LISHEA").LisheAllReplace("/","LISHEB").LisheAllReplace("=","LISHEC");
};
//解码字符串
var getDecodeString = function (encodeString) {
    var base64String = encodeString.LisheAllReplace("LISHEA","\\+").LisheAllReplace("LISHEB","/").LisheAllReplace("LISHEC","=");
    var b= new Base664();
    return b.decode(base64String);
};

window.getEncodeString = getEncodeString;
window.getDecodeString = getDecodeString;