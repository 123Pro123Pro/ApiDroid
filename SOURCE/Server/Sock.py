from Global import app_global, socketio, thread, thread_lock, random_token, login_manager
from flask_socketio import SocketIO, emit
from flask_socketio import disconnect
from Static import *
from Util import *
import functools
import hmac
from flask_login import current_user, login_user, UserMixin
from flask_socketio import disconnect
import pathlib

class User(UserMixin):

    def __init__(self, id):
        self.id = id
        
    def __repr__(self):
        return "User: %s" % (self.id)

session_user = User(random_token)

@login_manager.user_loader
def user_loader(uuid):
    if uuid != session_user.id:
        return

    return session_user

def authenticated_only(f):
    @functools.wraps(f)
    def wrapped(*args, **kwargs):
        if not current_user.is_authenticated:
            disconnect()
        else:
            return f(*args, **kwargs)
    return wrapped

@socketio.on('connect', namespace='/eventBus')
def sock_connect():
    emit('log', {'data': 'Connected'})

@socketio.on('authentication', namespace='/eventBus')
def sock_auth(msg):
    uuid = str(msg.get('uuid'))
    # print (stylize("[+] Login.. with uuid : {}".format(uuid), Info))
    if hmac.compare_digest(str(uuid), str(random_token)):
        this_user = User(uuid)
        login_user(this_user)
        emit("authenticated..")
    else:
        emit("auth_failed..")



@socketio.on('enableAutoRefresh', namespace='/eventBus')
@authenticated_only
def enableAutoRefresh():
    app_global.monitor_refresh = 1

@socketio.on('diableAutoRefresh', namespace='/eventBus')
@authenticated_only
def diableAutoRefresh():
    app_global.monitor_refresh = 0


@socketio.on('refresh_device', namespace='/eventBus')
@authenticated_only
def refresh_device():
    getDevice()
    # emit('update_device', {'data': cgi.escape(str(app_global.device))})

@socketio.on('check_monitor_running', namespace='/eventBus')
@authenticated_only
def check_monitor_running():
    # not working, app_global.monitor_script.unload() won't destroy it, did not find a destroy script method
    print (stylize("[+]Checking if Monitor is running...", Info))
    IPython.embed()
    if (app_global.monitor_script != '') & (app_global.monitor_script != None):
        emit('monitor_running_status', {'running': 1})
    else:
        emit('monitor_running_status', {'running': 0})
    # getDevice()


@socketio.on('set_device_id', namespace='/eventBus')
@authenticated_only
def set_device(msg):
    # clean up script for previous devices
    unload_script()
    device_id = msg.get('id')
    setDevice(device_id)
    # emit('update_device', {'data': cgi.escape(str(app_global.device))})

@socketio.on('setPackage', namespace='/eventBus')
@authenticated_only
def setpkg(msg):
    app_global.package_name = msg.get('packagename')
    setPackage(app_global.package_name)

    emit('update_package', {'data': cgi.escape(str(app_global.package_name))})

@socketio.on("setEnumConfig", namespace='/eventBus')
@authenticated_only
def update_EnumConfig(message):
    enum_option = message.get('option')
    class_to_find = message.get('class_to_find')
    class_pattern = message.get('class_pattern')
    if class_to_find != None:
        app_global.enum_class = class_to_find if ('.' in class_to_find) else app_global.packagename + '.' + class_to_find
    if class_pattern != None:
        app_global.enum_class_pattern = class_pattern
    if enum_option != None:
        app_global.enum_option = enum_option
    update_conf()
    emit("EnumConfigDone")

@socketio.on('get_monitor_message', namespace='/eventBus')
@authenticated_only
def get_monitor_message():
    # ret_html = render_template('history.html', tree=make_tree(path,'enum'))
    # emit('update_monitor_message', {'mon_type': mon_type.upper(), 'monitor_message': app_global.monitor_message})
    emit('update_monitor_message', {'monitor_message': app_global.monitor_message, 'monitor_new': list(app_global.monitor_queue)})
    app_global.monitor_queue = set()

@socketio.on('get_enum_history', namespace='/eventBus')
@authenticated_only
def get_enum_history():
    path = './cache/enum'
    ret_html = render_template('history.html', tree=make_tree(path,'enum'))
    emit("update_enum_history", {'data': ret_html})

@socketio.on('get_hooks_history', namespace='/eventBus')
@authenticated_only
def hooks_history():
    path = './cache/hook'
    ret_html = render_template('history.html', tree=make_tree(path,'hook'))
    emit("update_hooks_history", {'data': ret_html})

@socketio.on('get_intercept_history', namespace='/eventBus')
@authenticated_only
def get_intercept_history():
    path = './cache/intercept'
    ret_html = render_template('history.html', tree=make_tree(path,'intercept'))
    emit("update_intercept_history", {'data': ret_html})


@socketio.on('get_history_script', namespace='/eventBus')
@authenticated_only
def get_history_script(data):
    path = data.get("filepath")
    option = data.get("option")
    try:
        with open(path,'r') as f:
            script_content = f.read()
            emit("update_script_content",{'script': script_content, "option": option})
    except Exception as e:
        emit("update_script_content",{'script': "[!] Failed to get script: " + str(e), "option": option})

@socketio.on('save_script', namespace='/eventBus')
@authenticated_only
def save_script(save_script_data):
    option = save_script_data.get("option")
    filename = save_script_data.get("filename")
    if (filename):
        filename = os.path.split(filename)[1]
    script = save_script_data.get("script")

    if option == "hook":
        try:
            with open("./cache/hook/" + filename, 'w') as f:
                f.write(script)
        except Exception as e:
            raise e
    elif option == "enum":
        
        try:
            with open("./cache/enum/" + filename, 'w') as f:
                f.write(script)
        except Exception as e:
            raise e
    elif option == "intercept":
        try:
            with open("./cache/intercept/" + filename, 'w') as f:
                f.write(script)
        except Exception as e:
            raise e
    else:
        print (stylize("Failed to save the file!", Error))

@socketio.on('deleteScript', namespace='/eventBus')
@authenticated_only
def deleteScript(data):
    path = data.get('path')
    if path != None:
        if path.startswith('./cache/enum'):
            fn = './cache/enum/' + os.path.basename(path)
            op = "enum"

        elif path.startswith('./cache/hook'):
            fn = './cache/hook/' + os.path.basename(path)
            op = "hook"

        elif path.startswith('./cache/intercept'):
            fn = './cache/intercept/' + os.path.basename(path)
            op = "intercept"
        else:
            return
    else:
        emit('new_error_message',{'data' : "[!] What are you trying to delete?"})
        return

    try:
        os.remove(fn)
        emit("refresh_history_script",{'option': op})
    except Exception as e:
        emit('new_error_message',{'data' : "[!] Cannot delete: " + str(e)})

@socketio.on('gen_script', namespace='/eventBus')
@authenticated_only
def gen_script(message):
    app_global.hooks_list = message.get('hooks_list')
    update_conf()
    app_global.script_to_load = ''
    app_global.hooks_list = app_global.hook_conf.get('hooks_list')
    build_hook_script()
    emit("update_hooks")

@socketio.on('gen_script_mini', namespace='/eventBus')
@authenticated_only
def gen_script_mini(message):
    app_global.hooks_list = message.get('hooks_list')
    update_conf()
    app_global.script_to_load = ''
    app_global.hooks_list = app_global.hook_conf.get('hooks_list')
    build_hook_mini_script()
    emit("update_hooks_mini")

@socketio.on('unload_script', namespace='/eventBus')
@authenticated_only
def doUnload():
    print (stylize("[+]Unloading script..", Info))
    unload_script()

@socketio.on('clear_hookMessage', namespace='/eventBus')
@authenticated_only
def clear_hookMessage():
    app_global.messages = []
    print (stylize("[+] Hook Message Cleard", Info))

@socketio.on('clear_monitorMessage', namespace='/eventBus')
@authenticated_only
def clear_monitorMessage(message):
    clear_type = message.get('monitor_type').upper()
    if (clear_type != None) & (clear_type in app_global.monitor_message.keys()):
        app_global.monitor_message[clear_type] = []
    

@socketio.on('clear_EnumMessage', namespace='/eventBus')
@authenticated_only
def clear_EnumMessage():
    app_global.enum_messages = []

@socketio.on('quitRepl', namespace = '/eventBus')
@authenticated_only
def doneRepl():
    quitRepl()

@socketio.on('loadHookScript', namespace='/eventBus')
@authenticated_only
def doLoadHook(message):
    clear_hook_msg()
    j_script = message.get('script')
    if j_script != None:
        app_global.script_to_load = j_script
        app_global.hook_script = j_script
        cache_script("hooks_cache", app_global.hook_script)
        try:
            load_script()
        except Exception as e:
            print ("doLoadHook exception caught!" + str(e))
            clear_hook_msg()
            hook_exception = {"exception" : str(e)}
            app_global.messages.insert(0,hook_exception)

            emit("new_hook_message",hook_exception)


@socketio.on('loadHookMultiScript', namespace='/eventBus')
@authenticated_only
def loadHookMultiScript(message):
    #clear_hook_msg()
    j_script = message.get('script')
    if j_script != None:
        app_global.script_to_load = j_script
        app_global.hook_script = j_script
        cache_script("hooks_cache_multi", app_global.hook_script)
        try:
            load_script()
        except Exception as e:
            print ("doLoadHook exception caught!" + str(e))
            #clear_hook_msg()
            hook_exception = {"exception" : str(e)}
            app_global.messages.insert(0,hook_exception)

            emit("new_hook_message",hook_exception)



@socketio.on('loadEnumScript', namespace='/eventBus')
@authenticated_only
def doLoadEnum(message):
    j_script = message.get('script')
    if j_script != None:
        app_global.script_to_load = j_script
        app_global.enum_script_to_load = j_script
        app_global.enum_messages = []
        cache_script("enum_cache", app_global.enum_script_to_load)
        try:
            load_script()
        except Exception as e:
            doLoadEnum_exception = {"exception" : str(e)}
            app_global.enum_messages = [ ]
            app_global.enum_messages.insert(0,doLoadEnum_exception)
            emit("update_enum_messages")

@socketio.on('doEnv', namespace='/eventBus')
def doEnv():
    # with open('./scripts/enum/env.js') as f:
    #     app_global.script_to_load = f.read()
    app_global.script_to_load = build_env_script()
    try:
        load_script()
    except Exception as e:
        # IPython.embed()
        emit('update_env_info',{'error': cgi.escape("[!]load_script Exception: {}".format(str(e)))})

@socketio.on('loadStetho', namespace='/eventBus')
def doLoadStetho():

    try:
        preload_stetho_script()
    except Exception as e:
        # IPython.embed()
        emit('sideload_stetho_error',{'error': cgi.escape("[!]preload_stetho_script Exception: {}".format(str(e)))})

@socketio.on('runpreload', namespace='/eventBus')
def runpreload(preload_message):
    app_global.preload_conf = preload_message.get('preload_settings')
    update_conf()
    try:
        run_preload_script()
    except Exception as e:
        # IPython.embed()
        emit('runpreload',{'error': cgi.escape("[!]preload_script Exception: {}".format(str(e)))})


@socketio.on('loadMonitor', namespace='/eventBus')
def doloadMonitor(monitor_message):
    app_global.monitor_conf = monitor_message.get('monitor_settings')
    update_conf()
    try:
        loadMonitor()
        # check_monitor_running()
    except Exception as e:
        # IPython.embed()
        emit('doloadMonitor',{'error': cgi.escape("[!]doloadMonitor Exception: {}".format(str(e)))})


@socketio.on('endpreload', namespace='/eventBus')
def endpreload():
    app_global.preload_conf = {"PRELOAD_STETHO": 0, "PRELOAD_SSLSTRIP": 1, "PRELOAD_SETPROXY" : 0}
    update_conf()
    try:
        unload_script("preload")
        # check_monitor_running()
    except Exception as e:
        # IPython.embed()
        emit('endpreload',{'error': cgi.escape("[!]endpreload Exception: {}".format(str(e)))})


@socketio.on('unloadMonitor', namespace='/eventBus')
def dounloadMonitor():
    app_global.monitor_conf = {"SWITCH_FILEIO": 0, "SWITCH_HTTP": 0, "SWITCH_MISC": 0, "SWITCH_WEBVIEW": 0, "SWITCH_SQL": 0, "SWITCH_IPC": 0}
    update_conf()
    try:
        unload_script("monitor")
        # check_monitor_running()
    except Exception as e:
        # IPython.embed()
        emit('dounloadMonitor',{'error': cgi.escape("[!]dounloadMonitor Exception: {}".format(str(e)))})

@socketio.on('doInspect', namespace='/eventBus')
@authenticated_only
def doInspect(message):

    app_global.device = frida.get_usb_device()

    app_global.onMessageException = ''
    ins_classname = message.get('ins_classname')
    ins_methodname = message.get('ins_methodname')

    if (ins_classname != None) & (ins_methodname != None):
        app_global.inspect_conf['classname'] = ins_classname 
        app_global.inspect_conf['methodname'] = ins_methodname

        update_conf()

        app_global.inspect_result = 'Please wait'
        app_global.script_to_load = prepare_script_fragment(ins_classname, ins_methodname, "inspect")
        try:
            load_script()
        except Exception as e:
            app_global.inspect_result = "<p><code>[!] Exception: {}</code></p>".format(str(e))
            print (stylize("Exception caught in doInspect: {}".format(e), Info))
            update_inspect_result = {'classname': app_global.inspect_conf["classname"], 'methodname' : app_global.inspect_conf["methodname"], 'inspect_result': (str(app_global.inspect_result))}
            cache_inspect_html()
            socketio.emit('update_inspect_result', update_inspect_result, namespace='/eventBus')
            app_global.onMessageException = ''

@socketio.on('fetchInspect', namespace='/eventBus')
@authenticated_only
def fetchInspect():
    overloadIndex = app_global.inspect_conf.get("overloadIndex")
    if app_global.inspect_result == '':
        with open("./config/inspect_cache.html",'w+') as f:
            app_global.inspect_result = f.read()


    update_inspect_result = {'classname': app_global.inspect_conf["classname"], 'methodname' : app_global.inspect_conf["methodname"], 'inspect_result': app_global.inspect_result, 'overloadIndex' : overloadIndex}
    emit('update_inspect_result', update_inspect_result)


@socketio.on('genIntercept', namespace='/eventBus')
@authenticated_only
def genIntercept(message):
    ins_methodindex = message.get('intercept_index')
    if (ins_methodindex != None):
        app_global.inspect_conf['overloadIndex'] = int(ins_methodindex)
    else:
        app_global.inspect_conf['overloadIndex'] = 0
    update_conf()

    with open('./config/intercept_conf.json') as f:
        intercept_conf = f.read()
        try:
            j_intercept = json.loads(intercept_conf)
        except Exception as e:
            raise e

    print (stylize("[+]Lets do intercept",Info))
    clazz_name = j_intercept.get("classname")
    methodname = j_intercept.get("methodname")
    overloadIndex = j_intercept.get("overloadIndex")

    if overloadIndex == None:
        overloadIndex = 0
    app_global.intercept_script = prepare_script_fragment(clazz_name, methodname, "intercept", overloadIndex)
    socketio.emit('update_intercept_script', {'script': app_global.intercept_script}, namespace='/eventBus')

   
@socketio.on('load_intercept_script', namespace='/eventBus')
@authenticated_only
def load_intercept_script(message):
    app_global.intercept_script = message.get('script')
    app_global.script_to_load = message.get('script')
    #print(app_global.intercept_script)
    cache_script("intercept_cache", app_global.intercept_script)
    try:
        load_script()
    except Exception as e:
        app_global.intercept_exception = "[!] intercept_exception: {}".format(str(e))
        socketio.emit('new_intercept', {'data': app_global.intercept_exception, 'time': app_global.new_intercept_time}, namespace='/eventBus')



@socketio.on('intercept_param', namespace='/eventBus')
@authenticated_only
def sock_intercept(message):

    j_option = message['option']
    j_param = message['data']
    time_stamp = message['time'].replace('"','')
    if (j_option == "intercept_param"):
        print (stylize("[+] Posting {} @ {} to Frida..".format(json.loads(j_param),time_stamp),Info))

        app_global.script.post({'type': 'input', 'payload': json.loads(j_param), 'time': time_stamp, 'option': "intercept_param"})
    elif (j_option == "intercept_repl"):
        print (stylize("[+] Posting {} to Frida REPL..".format(j_param),Info))
        app_global.script.post({'type': 'input', 'payload': j_param, 'time': time_stamp, 'option': "intercept_repl"})



@socketio.on('save_class_filtered', namespace='/eventBus')
@authenticated_only
def save_class_filtered(message):
    save_class(message)


@socketio.on('load_class_filtered', namespace='/eventBus')
@authenticated_only
def load_class_filtered():
    print("Load_class_filtered")
    load_class()



@socketio.on('save_class_all', namespace='/eventBus')
@authenticated_only
def save_class_all(message):
    save_class(message)


@socketio.on('load_class_all', namespace='/eventBus')
@authenticated_only
def load_class_all():
    load_class()


@socketio.on('list_all_applications', namespace='/eventBus')
@authenticated_only
def list_all_applications():
    listAllApplications()

@socketio.on('run_js_emit', namespace='/eventBus')
@authenticated_only
def run_js_emit():
    app_global.script_to_load = 'console.log("xxxxxxxxxxxx")'
    try:
        load_script()
    except Exception as e:
        print("Error: ", e)


@socketio.on('gen_script_multi_hooks', namespace='/eventBus')
@authenticated_only
def gen_script_multi_hooks(message):
    
    try:
        #print(message)
        build_multi_hook_script(message)
        emit("update_hooks_multi")
        #load_script()
    except Exception as e:
        print("Error: ", e)


@socketio.on('list_method_class', namespace='/eventBus')
@authenticated_only
def list_method_class(message):
    
    try:
        #print(message)
        load_method_class_script(message)
        emit("load_list_method_class")
        #load_script()
    except Exception as e:
        print("Error: ", e)


@socketio.on('takeScreencapture', namespace='/eventBus')
@authenticated_only
def takeScreencapture():
    print("Taken Screenshot!!!")
    os.system('adb exec-out screencap -p > ./save_data/screenshot/screen.png')
    emit("taken_screenshot", namespace='/eventBus')
    os.system('cp ./save_data/screenshot/screen.png ./save_data/screenshot/screenshot'+str(datetime.datetime.now()).replace(" ","_").replace(":",".")+'.png')

@socketio.on('getCurrentPath', namespace='/eventBus')
@authenticated_only
def getCurrentPath():
    __path = str(pathlib.Path().absolute())
    print(__path)
    emit("returnCurrentPath", {"current_path": __path})



@socketio.on('downloadBaseApk', namespace='/eventBus')
@authenticated_only
def downloadBaseApk(message):
    print("downloading base.apk!!!")
    try:
        os.system('mkdir "./save_data/apk/'+message.get('app_id')+'/"')
        os.system('adb pull '+message.get('path')+' ./save_data/apk/'+message.get('app_id')+'/')
        emit("downloadApkDone", namespace='/eventBus')
    except Exception as e:
        print("Error: ", e)