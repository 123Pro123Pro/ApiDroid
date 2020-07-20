var clazz_Thread = null
var linebreak = "h0us3l1nebr3ak"
function getTime(){

    var date = new Date();
    var ret = '';
    ret = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString() + ":" + date.getMilliseconds()

    return ret
}

function getCaller(){
	return clazz_Thread.currentThread().getStackTrace().slice(2,17).reverse().toString().replace(/,/g,linebreak);
}

setTimeout(function() {
    Java.perform(function() {
    	clazz_Thread = Java.use("java.lang.Thread");
    	console.log("In da house..monitor_tpl.js")
		try{
			var File_hook = Java.use("java.io.File");
			var overloadz_File_hook = eval("File_hook.$init.overloads");
			var ovl_count_File_hook = overloadz_File_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_File_hook; i++) {
				var File_hook_$init_hook = File_hook.$init.overloads[i]
			    File_hook_$init_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(File_hook_$init_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + File_hook_$init_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += File_hook_$init_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.$init.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.$init.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "fileIO", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [File_hook.$init] => " + err);
		}
		

		try{
			var File_hook = Java.use("java.io.File");
			var overloadz_File_hook = eval("File_hook.createTempFile.overloads");
			var ovl_count_File_hook = overloadz_File_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_File_hook; i++) {
				var File_hook_createTempFile_hook = File_hook.createTempFile.overloads[i]
			    File_hook_createTempFile_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(File_hook_createTempFile_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + File_hook_createTempFile_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += File_hook_createTempFile_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.createTempFile.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.createTempFile.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "fileIO", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [File_hook.createTempFile] => " + err);
		}
		

		try{
			var FileWriter_hook = Java.use("java.io.FileWriter");
			var overloadz_FileWriter_hook = eval("FileWriter_hook.$init.overloads");
			var ovl_count_FileWriter_hook = overloadz_FileWriter_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_FileWriter_hook; i++) {
				var FileWriter_hook_$init_hook = FileWriter_hook.$init.overloads[i]
			    FileWriter_hook_$init_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(FileWriter_hook_$init_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + FileWriter_hook_$init_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += FileWriter_hook_$init_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.$init.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.$init.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "fileIO", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [FileWriter_hook.$init] => " + err);
		}
		

		try{
			var FileWriter_hook = Java.use("java.io.FileWriter");
			var overloadz_FileWriter_hook = eval("FileWriter_hook.write.overloads");
			var ovl_count_FileWriter_hook = overloadz_FileWriter_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_FileWriter_hook; i++) {
				var FileWriter_hook_write_hook = FileWriter_hook.write.overloads[i]
			    FileWriter_hook_write_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(FileWriter_hook_write_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + FileWriter_hook_write_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += FileWriter_hook_write_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.write.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.write.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "fileIO", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [FileWriter_hook.write] => " + err);
		}
		

		try{
			var File_hook = Java.use("java.io.File");
			var overloadz_File_hook = eval("File_hook.delete.overloads");
			var ovl_count_File_hook = overloadz_File_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_File_hook; i++) {
				var File_hook_delete_hook = File_hook.delete.overloads[i]
			    File_hook_delete_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(File_hook_delete_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + File_hook_delete_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += File_hook_delete_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.delete.apply(this, arguments)')
			        try {
			        	
				        console.log("[Monitor]..")
				        console.log(this.getAbsolutePath());
retval=true;
				        
				        if (retval == null){
			                retval = eval('this.delete.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "fileIO", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [File_hook.delete] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.putString.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_putString_hook = SharedPreferencesImpl$EditorImpl_hook.putString.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_putString_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_putString_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_putString_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_putString_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putString.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putString.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.putString] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.putBoolean.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_putBoolean_hook = SharedPreferencesImpl$EditorImpl_hook.putBoolean.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_putBoolean_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_putBoolean_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_putBoolean_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_putBoolean_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putBoolean.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putBoolean.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.putBoolean] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.putInt.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_putInt_hook = SharedPreferencesImpl$EditorImpl_hook.putInt.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_putInt_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_putInt_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_putInt_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_putInt_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putInt.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putInt.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.putInt] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.putLong.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_putLong_hook = SharedPreferencesImpl$EditorImpl_hook.putLong.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_putLong_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_putLong_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_putLong_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_putLong_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putLong.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putLong.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.putLong] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.putFloat.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_putFloat_hook = SharedPreferencesImpl$EditorImpl_hook.putFloat.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_putFloat_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_putFloat_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_putFloat_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_putFloat_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putFloat.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putFloat.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.putFloat] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.commit.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_commit_hook = SharedPreferencesImpl$EditorImpl_hook.commit.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_commit_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_commit_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_commit_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_commit_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.commit.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.commit.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.commit] => " + err);
		}
		

		try{
			var SharedPreferencesImpl$EditorImpl_hook = Java.use("android.app.SharedPreferencesImpl$EditorImpl");
			var overloadz_SharedPreferencesImpl$EditorImpl_hook = eval("SharedPreferencesImpl$EditorImpl_hook.apply.overloads");
			var ovl_count_SharedPreferencesImpl$EditorImpl_hook = overloadz_SharedPreferencesImpl$EditorImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl$EditorImpl_hook; i++) {
				var SharedPreferencesImpl$EditorImpl_hook_apply_hook = SharedPreferencesImpl$EditorImpl_hook.apply.overloads[i]
			    SharedPreferencesImpl$EditorImpl_hook_apply_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl$EditorImpl_hook_apply_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl$EditorImpl_hook_apply_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl$EditorImpl_hook_apply_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.apply.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.apply.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl$EditorImpl_hook.apply] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getString.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getString_hook = SharedPreferencesImpl_hook.getString.overloads[i]
			    SharedPreferencesImpl_hook_getString_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getString_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getString_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getString_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getString.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getString.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getString] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getStringSet.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getStringSet_hook = SharedPreferencesImpl_hook.getStringSet.overloads[i]
			    SharedPreferencesImpl_hook_getStringSet_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getStringSet_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getStringSet_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getStringSet_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getStringSet.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getStringSet.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getStringSet] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getBoolean.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getBoolean_hook = SharedPreferencesImpl_hook.getBoolean.overloads[i]
			    SharedPreferencesImpl_hook_getBoolean_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getBoolean_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getBoolean_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getBoolean_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getBoolean.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getBoolean.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getBoolean] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getFloat.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getFloat_hook = SharedPreferencesImpl_hook.getFloat.overloads[i]
			    SharedPreferencesImpl_hook_getFloat_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getFloat_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getFloat_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getFloat_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getFloat.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getFloat.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getFloat] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getLong.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getLong_hook = SharedPreferencesImpl_hook.getLong.overloads[i]
			    SharedPreferencesImpl_hook_getLong_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getLong_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getLong_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getLong_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getLong.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getLong.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getLong] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.getStringSet.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_getStringSet_hook = SharedPreferencesImpl_hook.getStringSet.overloads[i]
			    SharedPreferencesImpl_hook_getStringSet_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_getStringSet_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_getStringSet_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_getStringSet_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getStringSet.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getStringSet.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.getStringSet] => " + err);
		}
		

		try{
			var SharedPreferencesImpl_hook = Java.use("android.app.SharedPreferencesImpl");
			var overloadz_SharedPreferencesImpl_hook = eval("SharedPreferencesImpl_hook.contains.overloads");
			var ovl_count_SharedPreferencesImpl_hook = overloadz_SharedPreferencesImpl_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SharedPreferencesImpl_hook; i++) {
				var SharedPreferencesImpl_hook_contains_hook = SharedPreferencesImpl_hook.contains.overloads[i]
			    SharedPreferencesImpl_hook_contains_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SharedPreferencesImpl_hook_contains_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SharedPreferencesImpl_hook_contains_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SharedPreferencesImpl_hook_contains_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.contains.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.contains.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SHAREDPREFERENCES", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SharedPreferencesImpl_hook.contains] => " + err);
		}
		

		try{
			var HttpURLConnection_hook = Java.use("java.net.HttpURLConnection");
			var overloadz_HttpURLConnection_hook = eval("HttpURLConnection_hook.$init.overloads");
			var ovl_count_HttpURLConnection_hook = overloadz_HttpURLConnection_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_HttpURLConnection_hook; i++) {
				var HttpURLConnection_hook_$init_hook = HttpURLConnection_hook.$init.overloads[i]
			    HttpURLConnection_hook_$init_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(HttpURLConnection_hook_$init_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + HttpURLConnection_hook_$init_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += HttpURLConnection_hook_$init_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.$init.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.$init.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "HTTP", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [HttpURLConnection_hook.$init] => " + err);
		}
		

		try{
			var OkHttpClient_hook = Java.use("com.android.okhttp.OkHttpClient");
			var overloadz_OkHttpClient_hook = eval("OkHttpClient_hook.open.overloads");
			var ovl_count_OkHttpClient_hook = overloadz_OkHttpClient_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_OkHttpClient_hook; i++) {
				var OkHttpClient_hook_open_hook = OkHttpClient_hook.open.overloads[i]
			    OkHttpClient_hook_open_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(OkHttpClient_hook_open_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + OkHttpClient_hook_open_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += OkHttpClient_hook_open_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.open.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.open.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "HTTP", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [OkHttpClient_hook.open] => " + err);
		}
		

		try{
			var OkHttpClient_hook = Java.use("okhttp3.OkHttpClient");
			var overloadz_OkHttpClient_hook = eval("OkHttpClient_hook.newCall.overloads");
			var ovl_count_OkHttpClient_hook = overloadz_OkHttpClient_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_OkHttpClient_hook; i++) {
				var OkHttpClient_hook_newCall_hook = OkHttpClient_hook.newCall.overloads[i]
			    OkHttpClient_hook_newCall_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(OkHttpClient_hook_newCall_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + OkHttpClient_hook_newCall_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += OkHttpClient_hook_newCall_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.newCall.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.newCall.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "HTTP", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [OkHttpClient_hook.newCall] => " + err);
		}
		

		try{
			var WebView_hook = Java.use("android.webkit.WebView");
			var overloadz_WebView_hook = eval("WebView_hook.loadUrl.overloads");
			var ovl_count_WebView_hook = overloadz_WebView_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_WebView_hook; i++) {
				var WebView_hook_loadUrl_hook = WebView_hook.loadUrl.overloads[i]
			    WebView_hook_loadUrl_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(WebView_hook_loadUrl_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + WebView_hook_loadUrl_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += WebView_hook_loadUrl_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.loadUrl.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.loadUrl.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "WEBVIEW", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [WebView_hook.loadUrl] => " + err);
		}
		

		try{
			var WebView_hook = Java.use("android.webkit.WebView");
			var overloadz_WebView_hook = eval("WebView_hook.addJavascriptInterface.overloads");
			var ovl_count_WebView_hook = overloadz_WebView_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_WebView_hook; i++) {
				var WebView_hook_addJavascriptInterface_hook = WebView_hook.addJavascriptInterface.overloads[i]
			    WebView_hook_addJavascriptInterface_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(WebView_hook_addJavascriptInterface_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + WebView_hook_addJavascriptInterface_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += WebView_hook_addJavascriptInterface_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.addJavascriptInterface.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.addJavascriptInterface.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "WEBVIEW", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [WebView_hook.addJavascriptInterface] => " + err);
		}
		

		try{
			var WebView_hook = Java.use("android.webkit.WebView");
			var overloadz_WebView_hook = eval("WebView_hook.loadDataWithBaseURL.overloads");
			var ovl_count_WebView_hook = overloadz_WebView_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_WebView_hook; i++) {
				var WebView_hook_loadDataWithBaseURL_hook = WebView_hook.loadDataWithBaseURL.overloads[i]
			    WebView_hook_loadDataWithBaseURL_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(WebView_hook_loadDataWithBaseURL_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + WebView_hook_loadDataWithBaseURL_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += WebView_hook_loadDataWithBaseURL_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.loadDataWithBaseURL.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.loadDataWithBaseURL.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "WEBVIEW", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [WebView_hook.loadDataWithBaseURL] => " + err);
		}
		

		try{
			var WebView_hook = Java.use("android.webkit.WebView");
			var overloadz_WebView_hook = eval("WebView_hook.loadData.overloads");
			var ovl_count_WebView_hook = overloadz_WebView_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_WebView_hook; i++) {
				var WebView_hook_loadData_hook = WebView_hook.loadData.overloads[i]
			    WebView_hook_loadData_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(WebView_hook_loadData_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + WebView_hook_loadData_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += WebView_hook_loadData_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.loadData.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.loadData.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "WEBVIEW", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [WebView_hook.loadData] => " + err);
		}
		

		try{
			var WebView_hook = Java.use("android.webkit.WebView");
			var overloadz_WebView_hook = eval("WebView_hook.evaluateJavascript.overloads");
			var ovl_count_WebView_hook = overloadz_WebView_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_WebView_hook; i++) {
				var WebView_hook_evaluateJavascript_hook = WebView_hook.evaluateJavascript.overloads[i]
			    WebView_hook_evaluateJavascript_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(WebView_hook_evaluateJavascript_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + WebView_hook_evaluateJavascript_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += WebView_hook_evaluateJavascript_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.evaluateJavascript.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.evaluateJavascript.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "WEBVIEW", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [WebView_hook.evaluateJavascript] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("android.database.sqlite.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.execSQL.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_execSQL_hook = SQLiteDatabase_hook.execSQL.overloads[i]
			    SQLiteDatabase_hook_execSQL_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_execSQL_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_execSQL_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_execSQL_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.execSQL.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.execSQL.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.execSQL] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("android.database.sqlite.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.update.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_update_hook = SQLiteDatabase_hook.update.overloads[i]
			    SQLiteDatabase_hook_update_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_update_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_update_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_update_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.update.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.update.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.update] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("android.database.sqlite.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.insert.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_insert_hook = SQLiteDatabase_hook.insert.overloads[i]
			    SQLiteDatabase_hook_insert_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_insert_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_insert_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_insert_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.insert.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.insert.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.insert] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("android.database.sqlite.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.query.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_query_hook = SQLiteDatabase_hook.query.overloads[i]
			    SQLiteDatabase_hook_query_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_query_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_query_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_query_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.query.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.query.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.query] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("net.sqlcipher.database.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.execSQL.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_execSQL_hook = SQLiteDatabase_hook.execSQL.overloads[i]
			    SQLiteDatabase_hook_execSQL_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_execSQL_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_execSQL_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_execSQL_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.execSQL.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.execSQL.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.execSQL] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("net.sqlcipher.database.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.openOrCreateDatabase.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_openOrCreateDatabase_hook = SQLiteDatabase_hook.openOrCreateDatabase.overloads[i]
			    SQLiteDatabase_hook_openOrCreateDatabase_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_openOrCreateDatabase_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_openOrCreateDatabase_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_openOrCreateDatabase_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.openOrCreateDatabase.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.openOrCreateDatabase.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.openOrCreateDatabase] => " + err);
		}
		

		try{
			var SQLiteDatabase_hook = Java.use("net.sqlcipher.database.SQLiteDatabase");
			var overloadz_SQLiteDatabase_hook = eval("SQLiteDatabase_hook.rawQuery.overloads");
			var ovl_count_SQLiteDatabase_hook = overloadz_SQLiteDatabase_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_SQLiteDatabase_hook; i++) {
				var SQLiteDatabase_hook_rawQuery_hook = SQLiteDatabase_hook.rawQuery.overloads[i]
			    SQLiteDatabase_hook_rawQuery_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(SQLiteDatabase_hook_rawQuery_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + SQLiteDatabase_hook_rawQuery_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += SQLiteDatabase_hook_rawQuery_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.rawQuery.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.rawQuery.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "SQL", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [SQLiteDatabase_hook.rawQuery] => " + err);
		}
		

		try{
			var ContextWrapper_hook = Java.use("android.content.ContextWrapper");
			var overloadz_ContextWrapper_hook = eval("ContextWrapper_hook.startActivities.overloads");
			var ovl_count_ContextWrapper_hook = overloadz_ContextWrapper_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_ContextWrapper_hook; i++) {
				var ContextWrapper_hook_startActivities_hook = ContextWrapper_hook.startActivities.overloads[i]
			    ContextWrapper_hook_startActivities_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(ContextWrapper_hook_startActivities_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + ContextWrapper_hook_startActivities_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += ContextWrapper_hook_startActivities_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.startActivities.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.startActivities.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [ContextWrapper_hook.startActivities] => " + err);
		}
		

		try{
			var ContextWrapper_hook = Java.use("android.content.ContextWrapper");
			var overloadz_ContextWrapper_hook = eval("ContextWrapper_hook.startService.overloads");
			var ovl_count_ContextWrapper_hook = overloadz_ContextWrapper_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_ContextWrapper_hook; i++) {
				var ContextWrapper_hook_startService_hook = ContextWrapper_hook.startService.overloads[i]
			    ContextWrapper_hook_startService_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(ContextWrapper_hook_startService_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + ContextWrapper_hook_startService_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += ContextWrapper_hook_startService_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.startService.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.startService.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [ContextWrapper_hook.startService] => " + err);
		}
		

		try{
			var ContextWrapper_hook = Java.use("android.content.ContextWrapper");
			var overloadz_ContextWrapper_hook = eval("ContextWrapper_hook.startActivity.overloads");
			var ovl_count_ContextWrapper_hook = overloadz_ContextWrapper_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_ContextWrapper_hook; i++) {
				var ContextWrapper_hook_startActivity_hook = ContextWrapper_hook.startActivity.overloads[i]
			    ContextWrapper_hook_startActivity_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(ContextWrapper_hook_startActivity_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + ContextWrapper_hook_startActivity_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += ContextWrapper_hook_startActivity_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.startActivity.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.startActivity.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [ContextWrapper_hook.startActivity] => " + err);
		}
		

		try{
			var ContextWrapper_hook = Java.use("android.content.ContextWrapper");
			var overloadz_ContextWrapper_hook = eval("ContextWrapper_hook.sendBroadcast.overloads");
			var ovl_count_ContextWrapper_hook = overloadz_ContextWrapper_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_ContextWrapper_hook; i++) {
				var ContextWrapper_hook_sendBroadcast_hook = ContextWrapper_hook.sendBroadcast.overloads[i]
			    ContextWrapper_hook_sendBroadcast_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(ContextWrapper_hook_sendBroadcast_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + ContextWrapper_hook_sendBroadcast_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += ContextWrapper_hook_sendBroadcast_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.sendBroadcast.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.sendBroadcast.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [ContextWrapper_hook.sendBroadcast] => " + err);
		}
		

		try{
			var ContextWrapper_hook = Java.use("android.content.ContextWrapper");
			var overloadz_ContextWrapper_hook = eval("ContextWrapper_hook.registerReceiver.overloads");
			var ovl_count_ContextWrapper_hook = overloadz_ContextWrapper_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_ContextWrapper_hook; i++) {
				var ContextWrapper_hook_registerReceiver_hook = ContextWrapper_hook.registerReceiver.overloads[i]
			    ContextWrapper_hook_registerReceiver_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(ContextWrapper_hook_registerReceiver_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + ContextWrapper_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += ContextWrapper_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.registerReceiver.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.registerReceiver.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [ContextWrapper_hook.registerReceiver] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.getStringExtra.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_getStringExtra_hook = Intent_hook.getStringExtra.overloads[i]
			    Intent_hook_getStringExtra_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_getStringExtra_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_getStringExtra_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_getStringExtra_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getStringExtra.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getStringExtra.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.getStringExtra] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.getStringArrayExtra.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_getStringArrayExtra_hook = Intent_hook.getStringArrayExtra.overloads[i]
			    Intent_hook_getStringArrayExtra_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_getStringArrayExtra_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_getStringArrayExtra_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_getStringArrayExtra_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.getStringArrayExtra.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.getStringArrayExtra.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.getStringArrayExtra] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.putExtra.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_putExtra_hook = Intent_hook.putExtra.overloads[i]
			    Intent_hook_putExtra_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_putExtra_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_putExtra_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_putExtra_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.putExtra.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.putExtra.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.putExtra] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.parseUri.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_parseUri_hook = Intent_hook.parseUri.overloads[i]
			    Intent_hook_parseUri_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_parseUri_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_parseUri_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_parseUri_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.parseUri.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.parseUri.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.parseUri] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.registerReceiver.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_registerReceiver_hook = Intent_hook.registerReceiver.overloads[i]
			    Intent_hook_registerReceiver_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_registerReceiver_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.registerReceiver.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.registerReceiver.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.registerReceiver] => " + err);
		}
		

		try{
			var Intent_hook = Java.use("android.content.Intent");
			var overloadz_Intent_hook = eval("Intent_hook.registerReceiver.overloads");
			var ovl_count_Intent_hook = overloadz_Intent_hook.length;
			

			var cell = {}

			for (var i = 0; i < ovl_count_Intent_hook; i++) {
				var Intent_hook_registerReceiver_hook = Intent_hook.registerReceiver.overloads[i]
			    Intent_hook_registerReceiver_hook.implementation = function () {
			    	var sendback = ''
			    	var method_info = ''
			    	var arg_dump = ''
			    	var arg_type = ''
			    	var ret_type = String(Intent_hook_registerReceiver_hook.returnType['className'])
			    	var retval = null

			        for (var index = 0; index < arguments.length; index++) {
			        	arg_type += ('argType' + index.toString() + " : " + String(typeof(arguments[index])) + ' ')
			        	arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
			        }
			        method_info += getCaller() + linebreak + Intent_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '
			        // method_info += Intent_hook_registerReceiver_hook.methodName + '( ' + arg_type+ ') '

			        // var retval = eval('this.registerReceiver.apply(this, arguments)')
			        try {
			        	
				        if (retval == null){
			                retval = eval('this.registerReceiver.apply(this, arguments)')
				        }
		            } catch (err) {
		                retval = null
		                console.log("Exception - cannot compute retval.." + String(err))
		            }
			        var retval_dump = "(" + ret_type + ') : ' + String(retval) + linebreak + "@ " + getTime()
			        cell = {"monitor_type": "IPC", "method_info" : method_info, "arg_dump" : arg_dump, "retval_dump" : retval_dump}

			        sendback = JSON.stringify(cell)
			        send(sendback)
			        return retval;
			    }
			}
		}catch(err){
			console.log("Caught Monitor exception: [Intent_hook.registerReceiver] => " + err);
		}
		


    });
}, 0);