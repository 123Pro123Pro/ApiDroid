var context = null
var env_signature = "load_environment_script"
var applicationName = null

Java.perform(function() {
    console.log("Loading..env.js")
    var ActivityThread = Java.use('android.app.ActivityThread');
    var Application = Java.use('android.app.Application')
    var app = ActivityThread.currentApplication();
    // Inspired by https://github.com/sensepost/objection
    if (app != null) {
        context = app.getApplicationContext();
        var launchIntent = context.getPackageManager().getLaunchIntentForPackage("com.vnpay.bidv");
        // var app_classname = launchIntent.getComponent().getClassName();
        // This may necessarity return the correct class name; if not; change this yourself after decompiling the apk
        var app_classname = app.getClass().toString().split(' ')[1];
        var data = {
            filesDirectory: context.getFilesDir().getAbsolutePath().toString(),
            cacheDirectory: context.getCacheDir().getAbsolutePath().toString(),
            externalCacheDirectory: context.getExternalCacheDir().getAbsolutePath().toString(),
            codeCacheDirectory: 'getCodeCacheDir' in context ? context.getCodeCacheDir().getAbsolutePath().toString() : 'N/A',
            obbDir: context.getObbDir().getAbsolutePath().toString(),
            packageCodePath: context.getPackageCodePath().toString(),
            applicationName: app_classname
            // applicationName: String(context).split('@')[0]
        };

        send(env_signature + JSON.stringify(data))
    } else {
        console.log("Hooked too early, no context yet!")
    }

});