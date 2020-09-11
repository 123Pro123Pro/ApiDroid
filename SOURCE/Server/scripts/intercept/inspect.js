var sendback = { "methodInfo": [] }
var cell = null
var inspect_signature = "-methods_of_class-"
setTimeout(function() {
    Java.perform(function() {
        var c_{{clazz_hook.encode('utf-8').hex()}} = Java.use("{{clazz_name}}");

        ///
        var targetClass = "{{clazz_name}}";
        var methods = c_{{clazz_hook.encode('utf-8').hex()}}.class.getDeclaredMethods();
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
        console.log("parsedMethod: ", parsedMethod, " index: ", method_index);        
        ///
        
        var overloadz_{{clazz_hook.encode('utf-8').hex()}} = eval('c_{{clazz_hook.encode('utf-8').hex()}}[parsedMethod].overloads');
        var ovl_count_{{clazz_hook.encode('utf-8').hex()}} = overloadz_{{clazz_hook.encode('utf-8').hex()}}.length;

        for (var i = 0; i < ovl_count_{{clazz_hook.encode('utf-8').hex()}}; i++) {
            // add 'm_' for "var 123 ""  --> "var m_123" 
            var m_{{ method_hook.encode('utf-8').hex() }} = eval('c_{{clazz_hook.encode('utf-8').hex()}}[parsedMethod].overloads[i]')
            var arg_dump = ''
            var arg_type = []
            var ret_type = m_{{ method_hook.encode('utf-8').hex() }}.returnType['className']

            for (var index = 0; index < m_{{ method_hook.encode('utf-8').hex() }}.argumentTypes.length; index++) {
                arg_type.push(m_{{ method_hook.encode('utf-8').hex() }}.argumentTypes[index]["className"])
            }

            cell = { "Arg": JSON.stringify(arg_type), "Return Value": JSON.stringify(ret_type) }
            sendback.methodInfo.push(cell)
            }

            send(inspect_signature + JSON.stringify(sendback))
    });
}, 0);