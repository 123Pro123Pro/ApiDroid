from Global import app_global, app, socketio, random_token
from Static import *
from Util import *
from Sock import *
from sys import argv
import uuid, flask_login
from flask import Flask, Response, request, abort, render_template_string, send_from_directory

import logging

log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)


@app.route('/')
def hello():
    if str(request.remote_addr) == "127.0.0.1":
        # no dns rebinding
        return refresh()
    else:
        return ''

@app.route('/screenshot', methods=['GET'])
def screenshot():
    filename = "./save_data/screenshot/screen.png"
    try:
        w = int(request.args['w'])
        h = int(request.args['h'])
    except (KeyError, ValueError):
        return send_from_directory('.', filename)

    try:
        im = Image.open(filename)
        im.thumbnail((w, h), Image.ANTIALIAS)
        io = StringIO.StringIO()
        im.save(io, format='JPEG')
        return Response(io.getvalue(), mimetype='image/jpeg')

    except IOError:
        abort(404)

    return send_from_directory('.', filename)

@app.route('/messages', methods=['GET'])
def message():
    return json.dumps(app_global.messages)

@app.route('/monitor', methods=['GET'])
def monitor():
    return json.dumps(app_global.monitor_message)

@app.route('/AutoRefresh', methods=['GET'])
def autoRefresh():
    return str(app_global.monitor_refresh)

@app.route('/enum_messages', methods=['GET'])
def enum_message():
    return ''.join(str(e) for e in app_global.enum_messages)

@app.route('/hook_conf', methods=['GET'])
def hook_config():
    return json.dumps(app_global.hook_conf)

@app.route('/monitor_conf', methods=['GET'])
def monitor_config():
    return json.dumps(app_global.monitor_conf)

@app.route('/preload_conf', methods=['GET'])
def preload_config():
    return json.dumps(app_global.preload_conf)


# For debugging purpose
@app.route('/script', methods=['GET'])
def getDaScript():
    return app_global.script_to_load

@app.route('/hook_script', methods=['GET'])
def getHookScript():
    try:
        with open("./cache/current/hook_script.js",'r', encoding='utf-8') as f:
            app_global.hook_script = f.read()
    except Exception as e:
        app_global.hook_script = str(e)
        
    if checkok():
        return app_global.hook_script
    else:
        return "Please double check you have input the packagename and hooks info"


@app.route('/hook_script_multi', methods=['GET'])
def getHookScriptMulti():
    try:
        with open("./cache/current/hook_script_multi.js",'r', encoding='utf-8') as f:
            app_global.hook_script_multi = f.read()
    except Exception as e:
        app_global.hook_script_multi = str(e)
        
    if checkok():
        return app_global.hook_script_multi
    else:
        return "Please double check you have input the packagename and hooks info"

@app.route('/hook_script_mini', methods=['GET'])
def getHookScriptMini():
    try:
        with open("./cache/current/hook_script_mini.js",'r', encoding='utf-8') as f:
            app_global.hook_script_mini = f.read()
    except Exception as e:
        app_global.hook_script_mini = str(e)
        
    if checkok():
        return app_global.hook_script_mini
    else:
        return "Please double check you have input the packagename and hooks info"

@app.route('/enum_script', methods=['GET'])
def getEnumScript():
    option = app_global.enum_option
    build_enum_script(option, app_global.enum_class, app_global.enum_class_pattern)
    return app_global.enum_script_to_load

@app.route('/package', methods=['GET'])
def getpkg():
    return app_global.packagename

@app.route('/hook_clear', methods=['GET'])
def hook_clear():
    app_global.hooks_list = []
    update_conf()

    return refresh()

@app.route('/hook', methods=['POST'])
def hook():
    app_global.device = frida.get_usb_device()
    class_name = str(request.form.get('classname'))
    method_name = str(request.form.get('methodname')) 
    if (method_name != 'None') & (class_name != 'None'):
        hook_dict = {"classname": class_name, "methodname": method_name}
        app_global.hooks_list.append(hook_dict)
        update_conf()
        app_global.script_to_load = ''

    return refresh()

@app.route('/load_script', methods=['POST'])
def loadscript():
    app_global.device = frida.get_usb_device()

    app_global.script_to_load = str(request.form.get('script'))
    load_script()
    return refresh()

def main():
    print ("""
    ``````````````````````````````````````````````````````````````````````        
    Log Debug for API-Droid !!!!

    ``````````````````````````````````````````````````````````````````````    

    """)
    init_conf()
    init_cache()
    if app_global.packagename == "":
        with open('./config/hook_conf.json','r', encoding='utf-8') as f:
            hook_conf_rd = f.read()
            if hook_conf_rd != "":
                try:
                    app_global.hook_conf = json.loads(hook_conf_rd)
                except Exception as e:
                    print (stylize("[!]hook_conf invalid format",Error))
        with open('./config/enum_conf.json','r', encoding='utf-8') as f:
            enum_conf_rd = f.read()
            if enum_conf_rd != "":
                try:
                    app_global.enum_conf = json.loads(enum_conf_rd)
                except Exception as e:
                    print (stylize("[!]enum_conf invalid format",Error))
    with open('./config/intercept_conf.json','r', encoding='utf-8') as f:
        intercept_conf_rd = f.read()
        if intercept_conf_rd != "":
            try:
                app_global.inspect_conf = json.loads(intercept_conf_rd)
            except Exception as e:
                print (stylize("[!]intercept_conf invalid format",Error))
    with open('./config/monitor_conf.json','r', encoding='utf-8') as f:
        monitor_conf_rd = f.read()
        if monitor_conf_rd != "":
            try:
                app_global.monitor_conf = json.loads(monitor_conf_rd)
            except Exception as e:
                print (stylize("[!]monitor_conf invalid format",Error))
    init_settings()
    
    host = "127.0.0.1"
    if len(argv) > 1:
        port = int(argv[1])
    else:
        port  = 5001
    print (stylize("[+] Web hooking API-Droid UIT: http://127.0.0.1:{}".format(port), Info))

    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    socketio.run(app, host = host, port = port, debug=False)
    

if __name__ == '__main__':
    # build_monitor_script()
    main()
