var Color = {
    RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
    Light: {
        Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
    }
};

/**
 *
 * @param input. 
 *      If an object is passed it will print as json 
 * @param kwargs  options map {
 *     -l level: string;   log/warn/error
 *     -i indent: boolean;     print JSON prettify
 *     -c color: @see ColorMap
 * }
 */
var LOG = function (input, kwargs) {
    kwargs = kwargs || {};
    var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
    if (typeof input === 'object')
        input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
    if (kwargs['c'])
        input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
    console[logLevel](input);
};

var printBacktrace = function () {
    Java.perform(function() {
        var android_util_Log = Java.use('android.util.Log'), java_lang_Exception = Java.use('java.lang.Exception');
        // getting stacktrace by throwing an exception
        LOG(android_util_Log.getStackTraceString(java_lang_Exception.$new()), { c: Color.Gray });
    });
};

function getTime(){
    var date = new Date();
    var ret = '';
    ret = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString() + ":" + date.getMilliseconds()
    return ret
}

function traceClass(targetClass) {
    var hook;
    try {
        hook = Java.use(targetClass);
    } catch (e) {
        console.error("trace class failed", e);
        return;
    }
    //list methods
    var methods = hook.class.getDeclaredMethods();
    //console.log(methods);
    hook.$dispose();

    var parsedMethods = [];
    methods.forEach(function (method) {
        var methodStr = method.toString();
        var methodReplace = methodStr.replace(targetClass + ".", "TOKEN").match(/\sTOKEN(.*)\(/)[1];
         parsedMethods.push(methodReplace);
    });

    //console.log("zzzzzzzz")
    //console.log(parsedMethods)
    
    var i = 0;
    var uniqBy_ = uniqBy(parsedMethods, JSON.stringify);
    for (var i = uniqBy_.length - 1; i >= 0; i--) {
        traceMethod(targetClass + '.' + uniqBy_[i]);
    }
    uniqBy(parsedMethods, JSON.stringify).forEach(function (targetMethod) {
        traceMethod(targetClass + '.' + targetMethod);        
    });
    
    /*
    var uniqBy_ = uniqBy(parsedMethods, JSON.stringify);
    traceMethod(targetClass + '.' + uniqBy_[0]);    
    */
}

function traceMethod(targetClassMethod) {
    var delim = targetClassMethod.lastIndexOf('.');
    if (delim === -1)
        return;

    var targetClass = targetClassMethod.slice(0, delim);
    var targetMethod = targetClassMethod.slice(delim + 1, targetClassMethod.length);

    var hook = Java.use(targetClass);
    var overloadCount = hook[targetMethod].overloads.length;
    //console.log(hook[targetMethod].overloads);
    // LOG({ tracing: targetClassMethod, overloaded: overloadCount }, { c: Color.Green });

    for (var i = 0; i < overloadCount; i++) {
        hook[targetMethod].overloads[i].implementation = function () {


            var threadef = Java.use('java.lang.Thread');
            var threadinstance = threadef.$new();
            function Where(stack){
                var at = "";
                for(var i = 0; i < stack.length; ++i){
                    at += stack[i].toString() + "\n";
                }
                return at
            }
                

            var log = { '#': targetClassMethod, args: [] };
			//LOG(">>> Hook to class: " + targetClassMethod, { c: Color.Blue });
			
			
            for (var j = 0; j < arguments.length; j++) {
                var arg = arguments[j];
                // quick&dirty fix for java.io.StringWriter char[].toString() impl because frida prints [object Object]
                if (j === 0 && arguments[j]) {
                    if (arguments[j].toString() === '[object Object]') {
                        var s = [];
                        for (var k = 0, l = arguments[j].length; k < l; k++) {
                            s.push(arguments[j][k]);
                        }
                        arg = s.join('');
                    }
                }
                log.args.push({ index: j, object: arg, string: arg ? arg.toString(): 'null'});
            }

            var retval;
            try {
                retval = this[targetMethod].apply(this, arguments); // might crash (Frida bug?)
                log.returns = { value: retval, string: retval ? retval.toString() : null };
            } catch (e) {
                console.error(e);
            }
			
            
            // var stack = threadinstance.currentThread().getStackTrace();
            // var full_call_stack = Where(stack);
            // send("Full call stack:" + full_call_stack) ; 
            // console.log("Full call stack__:" + full_call_stack);


            ///
            var sendback = ''
            var hook_signature = '-hook_multi_scripting-'
            var cell = {}
            var arg_type = ''
            
            for (var index = 0; index < arguments.length; index++) {
                    arg_type += (String(typeof(arguments[index])) + ', ')
                    //arg_dump += ("arg" + index.toString() + ": " + String(arguments[index]) + linebreak)
            }

            /// 
              
			var argsJSON = JSON.stringify(log.args);
            
            var matchInput = "111222||abcd".split("||")
            var matchOutput = "111222||abcd".split("||")
            var check_input = 0

            for (var i = matchInput.length - 1; i >= 0; i--) {
                if(argsJSON.search(matchInput[i])>=0 ){
                    //LOG("--- " + targetClassMethod + " Args: " + argsJSON, { c: Color.Blue });
                    check_input = 1
                }
            }

            if (check_input==1){
                cell = {"method_info" : targetClassMethod, "arg_dump" : argsJSON, "type":"input", "time": getTime(), "arg_type":arg_type}
                sendback = hook_signature + JSON.stringify(cell)
                send(sendback)
            }

            

            // if(argsJSON.search("xxxxxx")>0 || argsJSON.search("Successfull")>0 || argsJSON.search("3375106")>0){
            //     LOG("--- " + targetClassMethod + " Args: " + argsJSON, { c: Color.Blue });
            // }
            // if (encodeURI(targetClassMethod).search("o.dL.%CB%8A")>=0)
            // {
                // LOG("--- " + targetClassMethod + " Args: " + argsJSON, { c: Color.Blue });
            // }
            
           // LOG("--- " + targetClassMethod + " Args: " + argsJSON, { c: Color.Blue });
            
            var returnsJSON = JSON.stringify(log.returns);
            var check_output = 0

            for (var i = matchOutput.length - 1; i >= 0; i--) {
                if(returnsJSON.search(matchOutput[i])>=0 ){
                    // LOG("--- " + targetClassMethod + " Return: " + returnsJSON, { c: Color.Blue });
                    check_output = 1
                }
            }

            if(check_output==1){
                cell = {"method_info" : targetClassMethod, "arg_dump" : returnsJSON,  "type":"output", "time": getTime(), "arg_type":arg_type}
                sendback = hook_signature + JSON.stringify(cell)
                send(sendback)              
            }
            // if(returnsJSON.search("xxxxxx")>0 ||  returnsJSON.search("Successfull")>0 || returnsJSON.search("3375106")>0){
            //     LOG("--- " + targetClassMethod + " Return: " + returnsJSON, { c: Color.Blue });
            // }
            // if (encodeURI(targetClassMethod).search("o.dL.Ã Â¥Â±")>=0)
            // {
            //     LOG("--- " + targetClassMethod + " Return: " + returnsJSON, { c: Color.Blue });
            // }
            
               // LOG("--- " + targetClassMethod + " Return: " + returnsJSON, { c: Color.Blue });
            return retval;
        }
    }
}
 
// remove duplicates from array
function uniqBy(array, key) {
    var seen = {};
    return array.filter(function (item) {
        var k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
    });
}


var Main = function() {
    Java.perform(function () { // avoid java.lang.ClassNotFoundException
        ['d.l.b.ai', 'c.a.a.a.a.b.m', 'com.f.a.o', 'c.a.a.a.a.b.n', 'com.vnpay.vpbank.e.a', 'com.f.a.p', 'com.vnpay.vpbank.activity.Saving.ActivitySaving', 'c.a.a.a.a.b.o', 'com.f.a.q', 'c.a.a.a.a.b.p', 'com.vnpay.vpbank.activity.Qrcode.QRActivity', 'com.f.a.r', 'c.a.a.a.a.b.q', 'com.vnpay.vpbank.e.d', 'c.a.a.a.a.b.r', 'com.f.a.t', 'com.vnpay.vpbank.activity.Setting.a.a', 'com.f.a.v', 'c.a.a.a.a.b.u', 'com.vnpay.vpbank.e.h', 'com.f.a.w', 'c.a.a.a.a.b.v', 'com.vnpay.vpbank.e.i', 'com.e.b.b.c.a', 'com.f.a.x', 'com.vnpay.vpbank.activity.Setting.SettingBDSDActivity', 'com.vnpay.vpbank.e.j', 'com.vnpay.vpbank.activity.Transfer.ActivityTransfer', 'c.a.a.a.a.d.c', 'com.f.a.z', 'com.vnpay.vpbank.e', 'c.a.a.a.a.d.d', 'com.vnpay.vpbank.f', 'com.e.b.b.c.e', 'c.a.a.a.a.d.g', 'c.a.a.a.a.d.h', 'com.vnpay.vpbank.j', 'com.vnpay.b.dt', 'c.a.a.a.a.d.j', 'com.vnpay.c.c', 'com.vnpay.vpbank.activity.CardService.ActivityRegisterCard', 'com.vnpay.vpbank.entity.MenuModel', 'com.e.b.a.a.a.a', 'c.a.a.a.a.d.l', 'com.vnpay.c.e', 'c.a.a.a.a.d.m', 'com.vnpay.c.f', 'com.e.b.a.a.a.c', 'com.vnpay.vpbank.activity.CardService.ActivityLockUnlockCard', 'com.vnpay.c.g', 'com.vnpay.c.h', 'com.vnpay.vntalk.a.a', 'com.vnpay.c.i', 'com.vnpay.vpbank.customize.o', 'com.vnpay.vntalk.activity.FormActivity', 'com.vnpay.vpbank.customize.r']
        .forEach(traceClass);
		
    });
};

Java.perform(Main);