
function enumAllClasses() {
    var allClasses = [];
    var classes = Java.enumerateLoadedClassesSync();

    classes.forEach(function(aClass) {
        try {
            var className = aClass.replace(/\//g, ".");
        } catch (err) {}
        allClasses.push(className);
    });

    return allClasses;
}

function enumClassLoaders(){
    var allClassLoaders = []
    var classLoaders = Java.enumerateClassLoadersSync()

    classLoaders.forEach(function(cl) {
        allClassLoaders.push(cl);
    });

    return allClassLoaders;
}

function enumDexClasses(apk_path) {
    var BaseDexClassLoader = Java.use("dalvik.system.BaseDexClassLoader");
    var DexFile = Java.use("dalvik.system.DexFile");
    var df = DexFile.$new(apk_path);
    var en = df.entries()

    var dexClasses = []
    while(en.hasMoreElements()){
        dexClasses.push(en.nextElement());
    }

    return dexClasses;
}

function findClasses(pattern) {
    var allClasses = enumAllClasses();
    var foundClasses = [];

    allClasses.forEach(function(aClass) {
        try {
            if (aClass.match(pattern)) {
                foundClasses.push(aClass);
            }
        } catch (err) {}
    });

    return foundClasses;
}

function enumMethods(targetClass) {
    var hook = Java.use(targetClass);
    var ownMethods = hook.class.getDeclaredMethods();
    hook.$dispose;

    return ownMethods;
}

function enumLibSo(lib_name){
    exports = Module.enumerateExportsSync(lib_name);
    var foundObj = []
    for(i=0; i<exports.length; i++){
        foundObj.push(String(exports[i].name) + " : " + String(exports[i].address))
    }
    return foundObj
}


function hex_to_ascii(str1)
 {
    var hex  = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
 }


setTimeout(function() {
    Java.perform(function() {
        var sendback = ''
        var classname_return = ''
        var methods_return = ''
        var enum_signature = '-enumeration_script-'
       
        
        // enumerate all classes
	    var a = enumAllClasses();
	    a.forEach(function(s) {
            if (s){classname_return += JSON.stringify(s) + '\n'}
	    });
        sendback = enum_signature + classname_return

        
        send(sendback)
    });
}, 0);