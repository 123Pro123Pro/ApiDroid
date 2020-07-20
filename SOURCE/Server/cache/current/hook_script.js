var clazz_Thread = null
var linebreak = "h0us3l1nebr3ak"
function getTime(){
    var date = new Date();
    var ret = '';
    ret = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString() + ":" + date.getMilliseconds()
    return ret
}

function getCaller(){
	return clazz_Thread.currentThread().getStackTrace().slice(2,5).reverse().toString().replace(/,/g,linebreak);
}

function miniLog(methodname, arg_type, arg_dump, ret_type, retvar){
    console.log('[+]' + methodname + "(" + arg_type + ")")
    console.log("Return: (" + ret_type + ")" + retvar)
    console.log(arg_dump)
}

setTimeout(function() {
    Java.perform(function() {
    	console.log("In da house..hook_tpl.js")
    	clazz_Thread = Java.use("java.lang.Thread");
    	var DexClassLoader = Java.use("dalvik.system.DexClassLoader");

			/* Begin: com.facebook.react.bridge.JavaMethodWrapper.invoke___12 - com.facebook.react.bridge.JavaMethodWrapper.696e766f6b655f5f5f3132 */
			
			var c_4a6176614d6574686f64577261707065725f686f6f6b = Java.use("com.facebook.react.bridge.JavaMethodWrapper");
			

			///
			var targetClass = "com.facebook.react.bridge.JavaMethodWrapper";
		    var methods = c_4a6176614d6574686f64577261707065725f686f6f6b.class.getDeclaredMethods();
		    //console.log(methods);
		    c_4a6176614d6574686f64577261707065725f686f6f6b.$dispose();

		    var parsedMethods = [];
		    methods.forEach(function (method) {
		        var methodStr = method.toString();
		        var methodReplace = methodStr.replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1];
		         parsedMethods.push(methodReplace);
		    });
		    /// method_name = "put__1"
		    var method_index = "invoke___12".split("___")[1];
		    var parsedMethod = parsedMethods[method_index];
		    console.log(method_index);
		    var str2hex = function (str)
			  {
				var arr1 = [];
				for (var n = 0, l = str.length; n < l; n ++) 
			     {
					var hex = Number(str.charCodeAt(n)).toString(16);
					arr1.push(hex);
				 }
				return arr1.join('');
			   }
			
			///


			var overloadz_4a6176614d6574686f64577261707065725f686f6f6b = eval("c_4a6176614d6574686f64577261707065725f686f6f6b[parsedMethod].overloads");
			var ovl_count_4a6176614d6574686f64577261707065725f686f6f6b = overloadz_4a6176614d6574686f64577261707065725f686f6f6b.length;
			var c_4a6176614d6574686f64577261707065725f686f6f6b_696e766f6b655f5f5f31325f686f6f6b = null

			var cell = {}

			
			send("There are " + ovl_count_4a6176614d6574686f64577261707065725f686f6f6b.toString() + " methods to hook");
			for (var i = 0; i < ovl_count_4a6176614d6574686f64577261707065725f686f6f6b; i++) {
				var c_4a6176614d6574686f64577261707065725f686f6f6b_696e766f6b655f5f5f31325f686f6f6b = eval('c_4a6176614d6574686f64577261707065725f686f6f6b[parsedMethod].overloads[i]')
				c_4a6176614d6574686f64577261707065725f686f6f6b_696e766f6b655f5f5f31325f686f6f6b.implementation = function () {
					var sendback = ''
					var hook_signature = '-hook_scripting-'
					var method_info = ''
					var arg_dump = ''
					var arg_type = ''
					var ret_type = String(c_4a6176614d6574686f64577261707065725f686f6f6b_696e766f6b655f5f5f31325f686f6f6b.returnType['className'])
					var retval = null
					for (var index = 0; index < arguments.length; index++) {
						arg_type += ('arg' + index.toString() + ":" + String(typeof(arguments[index])) + ' ')
						arg_dump += ("arg" + index.toString() + ":" + String(arguments[index]) + linebreak)
					}
					method_info += "Reverse Call Stack: " + linebreak + getCaller() + linebreak + linebreak + c_4a6176614d6574686f64577261707065725f686f6f6b_696e766f6b655f5f5f31325f686f6f6b.methodName + '( ' + arg_type+ ') '
					// var retval = eval('this.invoke___12.apply(this, arguments)')
					try {
						retval = eval('this[parsedMethod].apply(this, arguments)')
					} catch (err) {
						retval = null
						console.log("Exception - cannot compute retval.." + String(err))
					}
					var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
					cell = {"method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

					sendback = hook_signature + JSON.stringify(cell)
					console.log(cell);
					send(sendback)
					return retval;
				}
			}
			
			/* End: com.facebook.react.bridge.JavaMethodWrapper.invoke___12 -com.facebook.react.bridge.JavaMethodWrapper.696e766f6b655f5f5f3132 */

    });
}, 0);

