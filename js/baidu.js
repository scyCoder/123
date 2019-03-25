/**
			 * 登录校验
			 */
			function checkAll() {
				if (!checkUsername()) {
					document.getElementById("userInfo").innerHTML = "请输入手机/邮箱/用户名<br />"
					return false;
				}
				
				if (!checkPWD()) {
					document.getElementById("userInfo").innerHTML = "请输入密码<br />"
					return false;
				}
				return true;
			}
			
			/**
			 * 用户名校验
			 */
			function checkUsername() {
				var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
				var username = document.getElementById("username")
				var isTrue = reg.test(username.value);
				if (!isTrue) {
					document.getElementById("userInfo").innerHTML = "用户名只能字母开头<br />"
				} else {
					document.getElementById("userInfo").innerHTML = "&nbsp;<br />"
				}
				return isTrue;
			}
			
			/**
			 * 密码校验
			 */
			function checkPWD() {
				var reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{6,18}$/;
				var password = document.getElementById("password")
            	var isTrue = reg.test(password.value);
				if (!isTrue) {
					document.getElementById("pwdInfo").innerHTML = "密码格式不正确"
				} else {
					document.getElementById("pwdInfo").innerHTML = "&nbsp;<br />"
				}
			}
			
			/**
			 * 聚焦
			 * @param {Object} id   获得span标签
			 */
			function foucsInput(id) {
				document.getElementById(id.id).innerHTML = "&nbsp;<br />"
			}