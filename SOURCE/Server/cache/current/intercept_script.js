var retval = null
var ret_constructor = null
var tmp_obj = null
var fields = null
var clazz_Thread = null
var clazz = null
var field = null
var BaseDexClassLoader = null
var Toast = null
var Log = null

function setRetval(ret){
    if (retval != null){
        retval = ret_constructor(ret);
        console.log("retval overriden..");
    }
    
}

function inspectObject(obj){
    tmp_obj = obj
    fields = Java.cast(tmp_obj.getClass(), clazz).getDeclaredFields();
    console.log("inspectObject ... ")
    return fields
}

function getStackTrace(){
    return clazz_Thread.currentThread().getStackTrace().toString().replace(/,/g, '\n')
}

setTimeout(function() {
    Java.perform(function() {
        // Get Java class wrappers
        Toast = Java.use("android.widget.Toast")
        Log = Java.use("android.util.Log")
        var ActivityThread = Java.use('android.app.ActivityThread');
        var app = ActivityThread.currentApplication();
        var context = null
        if (app != null){
            context = app.getApplicationContext();
        }
        console.log("In da house..intercept.js")
        var c_436f72655574696c735f686f6f6b = Java.use("com.zing.zalocore.utils.cryptology.CoreUtils");

        ///
        var targetClass = "com.zing.zalocore.utils.cryptology.CoreUtils";
        var methods = c_436f72655574696c735f686f6f6b.class.getDeclaredMethods();
        c_436f72655574696c735f686f6f6b.$dispose();

        var parsedMethods = [];
        methods.forEach(function (method) {
            var methodStr = method.toString();
            var methodReplace = methodStr.replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1];
             parsedMethods.push(methodReplace);
        });
        /// method_name = "put__1"
        var method_index = "encodeHttpParamsNative___7".split("___")[1];
        var parsedMethod = parsedMethods[method_index];
        console.log("Intercept - parsedMethod: ", parsedMethod, " index: ", method_index);  
        ///

        clazz_Thread = Java.use("java.lang.Thread");
        var clazz_Exception = Java.use("java.lang.Exception");
        clazz = Java.use("java.lang.Class");
        field = Java.use("java.lang.reflect.Field");
        BaseDexClassLoader = Java.use("dalvik.system.BaseDexClassLoader");
        var overloadz_436f72655574696c735f686f6f6b = eval("c_436f72655574696c735f686f6f6b[parsedMethod].overloads");
        var ovl_count_436f72655574696c735f686f6f6b = overloadz_436f72655574696c735f686f6f6b.length;
        var intercept_signature = "-time_for_time-"
        var timestamp_signature = "-the_time_for_now-"
        var repl_signature = "-cant_have_a_shell-"

        var timestamp = Date.now()
        var recv_time = ''
        var recv_data = ''
        var recv_option = ''

        var c_436f72655574696c735f686f6f6b_656e636f646548747470506172616d734e61746976655f5f5f375f686f6f6b = eval('c_436f72655574696c735f686f6f6b[parsedMethod].overloads[0]')
                    
        c_436f72655574696c735f686f6f6b_656e636f646548747470506172616d734e61746976655f5f5f375f686f6f6b.implementation = function() {
            var sendback = ''
            var args = arguments
            var retval = null
            var eval_result = null
            var eval_packet = null
            // retval = eval('this.encodeHttpParamsNative___7.apply(this, arguments)')
            try {
                retval = eval('this[parsedMethod].apply(this, arguments)')
                console.log("[INTERCEPT]retval: ", retval)
                // retval = eval('this.$init.apply(this, arguments)')
            } catch (err) {
                retval = null
                console.log("Exception - cannot compute retval.." + JSON.stringify(err))
            }
            if (retval != null){
                ret_constructor = retval.constructor;
            }
            sendback = intercept_signature + JSON.stringify(args) + timestamp_signature + timestamp
            send(sendback)

            while (true){
                var op = recv('input', function(value) {
                recv_time = value.time
                recv_data = value.payload
                recv_option = value.option
                // console.log("[App Recv]  " + recv_option + ": "+ recv_data + "at time: " + JSON.stringify(recv_time))
                });
                op.wait();

                if(recv_option == "terminate"){
                    try {
                        console.log("[+ Frida ] Debug  Re-calculate retval!")
                        retval = eval('this[parsedMethod].apply(this, arguments)')
                        // retval = eval('this.$init.apply(this, arguments)')
                    } catch (err) {
                        // retval = null
                        console.log("Exception - cannot compute retval.." + JSON.stringify(err))
                    }
                    break
                }
                else if(recv_option == "intercept_param"){
                    if (recv_time == timestamp){
                        var arg_len = args.length
                        var recv_arg = JSON.parse(recv_data)
                        for (var i=0; i < arg_len; i++ ){
                            args[i] = args[i].constructor(recv_arg[i])
                        }
                        retval = eval('this[parsedMethod].apply(this, args)')
                        
                        console.log("[+ Frida ] Debug  retval being overwritten!" + JSON.stringify(typeof(retval)) + " : " + JSON.stringify(retval))
                        }else{
                            console.log("[Frida]Timestamp mismatch.." + JSON.stringify(timestamp) + ' vs ' + recv_time)
                            retval = eval('this[parsedMethod].apply(this, arguments)')
                        }
                        break  
                    }
                else{
                    try {
                        eval_result = String(eval(recv_data))
                        // console.log(eval_result)
                    } catch (err) {
                        eval_result = ''
                        console.log("Exception caught in frida.." + JSON.stringify(err))
                    }
                    eval_packet = {eval_input: recv_data, eval_output: eval_result, eval_time: recv_time}
                    send(repl_signature + JSON.stringify(eval_packet))  
                }
            }
            
            console.log(String(retval))
            return retval;
            }
            
    });
}, 0);

