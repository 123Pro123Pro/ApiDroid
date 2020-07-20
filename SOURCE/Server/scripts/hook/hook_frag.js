
			/* Begin: {{clazz_name}}.{{method_name}} - {{clazz_name}}.{{method_name.encode('utf-8').hex() }} */
			{% if is_dynamic %}
			var c_{{clazz_hook.encode('utf-8').hex()}} = factory.use("{{clazz_name}}");
			{% else %}
			var c_{{clazz_hook.encode('utf-8').hex()}} = Java.use("{{clazz_name}}");
			{% endif %}

			///
			var targetClass = "{{clazz_name}}";
		    var methods = c_{{clazz_hook.encode('utf-8').hex()}}.class.getDeclaredMethods();
		    //console.log(methods);
		    c_{{clazz_hook.encode('utf-8').hex()}}.$dispose();

		    var parsedMethods = [];
		    methods.forEach(function (method) {
		        var methodStr = method.toString();
		        var methodReplace = methodStr.replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1];
		         parsedMethods.push(methodReplace);
		    });
		    /// method_name = "put__1"
		    var method_index = "{{method_name}}".split("___")[1];
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


			var overloadz_{{clazz_hook.encode('utf-8').hex()}} = eval("c_{{clazz_hook.encode('utf-8').hex()}}[parsedMethod].overloads");
			var ovl_count_{{clazz_hook.encode('utf-8').hex()}} = overloadz_{{clazz_hook.encode('utf-8').hex()}}.length;
			var c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }} = null

			var cell = {}

			{% if overload_type%}
			var c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }} = eval("c_{{clazz_hook.encode('utf-8').hex()}}[parsedMethod].overload({{overload_type}})")
			c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.implementation = function () {
				var sendback = ''
				var hook_signature = '-hook_scripting-'
				var method_info = ''
				var arg_dump = ''
				var arg_type = ''
				var ret_type = String(c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.returnType['className'])
				var retval = null

				for (var index = 0; index < arguments.length; index++) {
					arg_type += ('arg' + index.toString() + ":" + String(typeof(arguments[index])) + ' ')
					arg_dump += ("arg" + index.toString() + ":" + String(arguments[index]) + linebreak)
				}
				method_info += "Reverse Call Stack: " + linebreak + getCaller() + linebreak + linebreak + c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.methodName + '( ' + arg_type+ ') '
				// var retval = eval('this.{{ method_name }}.apply(this, arguments)')
				try {
					retval = eval('this[parsedMethod].apply(this, arguments)')
				} catch (err) {
					retval = null
					console.log("Exception - cannot compute retval.." + String(err))
				}
				var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
				cell = {"method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

				sendback = hook_signature + JSON.stringify(cell)
				console.log(method_info);
				send(sendback)
				return retval;
			}
			{% else %}
			send("There are " + ovl_count_{{clazz_hook.encode('utf-8').hex()}}.toString() + " methods to hook");
			for (var i = 0; i < ovl_count_{{clazz_hook.encode('utf-8').hex()}}; i++) {
				var c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }} = eval('c_{{clazz_hook.encode('utf-8').hex()}}[parsedMethod].overloads[i]')
				c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.implementation = function () {
					var sendback = ''
					var hook_signature = '-hook_scripting-'
					var method_info = ''
					var arg_dump = ''
					var arg_type = ''
					var ret_type = String(c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.returnType['className'])
					var retval = null
					for (var index = 0; index < arguments.length; index++) {
						arg_type += ('arg' + index.toString() + ":" + String(typeof(arguments[index])) + ' ')
						arg_dump += ("arg" + index.toString() + ":" + String(arguments[index]) + linebreak)
					}
					method_info += "Reverse Call Stack: " + linebreak + getCaller() + linebreak + linebreak + c_{{clazz_hook.encode('utf-8').hex()}}_{{ method_hook.encode('utf-8').hex() }}.methodName + '( ' + arg_type+ ') '
					// var retval = eval('this.{{ method_name }}.apply(this, arguments)')
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
			{% endif %}
			/* End: {{clazz_name}}.{{method_name}} -{{clazz_name}}.{{method_name.encode('utf-8').hex()}} */