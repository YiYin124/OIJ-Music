// 名称格式验证
function nameFormatValidation(name) {
    var re = /^[\w\u3100-\u312F\u4E00-\u9FCC\uF900-\uFAFF\u2F00-\u2FDF\u1100-\u11FF\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u3190-\u319F\uA4D0-\uA4FF\u16F00-\u16F9F]+$/i
    return re.test(name);
}

// 邮箱格式验证
function mailFormatValidation(mail) {
    // cn-alu.c@qq.com.com
    var re = /^(\w+\-|\w+\.)*\w+@(\w+\-|\w+\.)*\w+\.\w+$/i
    return re.test(mail);
}

// 密码格式验证
function passwordFormatValidation(password) {
    var re;
    var lv = 0;
    // 检测非法字符
    re = /[^\w\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/
    if (re.test(password)) return 0;
    // 检测密码中是否包含字母
    re = /[A-Za-z]/
    if (re.test(password)) lv++;
    // 检测密码中是否包含数字
    re = /\d/
    if (re.test(password)) lv++;
    // 检测密码中是否包含符号
    re = /[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/
    if (re.test(password)) lv++;
    return lv;
}