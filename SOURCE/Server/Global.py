from flask import Flask, Response, request, abort, render_template_string, send_from_directory
from flask_socketio import SocketIO, emit
import flask_login
from threading import Lock
import uuid

class Global:
	def __init__(self):
		self.session = None
		self.device_manager = None
		self.device_dict = {}
		self.device = None
		self.packagename = ""        # can have up to 1 package for each session
		self.script_to_load = ''
		self.script = None
		self.stetho_script_object = None
		self.monitor_script_object = None
		self.preload_script_object = None
		self.enum_script_to_load = ''
		self.hook_script = ''
		self.hook_script_mini = ''
		self.hook_script_multi = ''
		self.intercept_script = ''
		self.monitor_script = ''
		self.preload_script = ''
		self.enum_class = ''
		self.enum_class_pattern = ''
		self.enum_option = ''
		self.onMessageException = ''
		self.html_output = ""
		self.messages = []
		self.monitor_message = {"FILEIO":[], "IPC": [], "WEBVIEW":[],"SQL":[], "HTTP":[], "MISC":[], "SHAREDPREFERENCES": []}
		self.monitor_queue = set()
		self.new_hookmsg = False
		self.enum_messages = []
		self.new_inspect = False
		self.inspect_result = ''
		self.new_intercept = False
		self.new_intercept_msg = ''
		self.new_intercept_time = ''
		self.intercept_exception = ''
		self.new_repl_signal = False
		self.new_repl_msg = ''
		self.new_repl_time = ''
		self.hooks_list = []
		self.hook_conf = {}
		self.enum_conf = {}
		self.inspect_conf = {"classname": "", "methodname": "", "overloadIndex": 0, "packagename": ""}
		self.env_conf = {"filesDirectory": "", "cacheDirectory": "", "externalCacheDirectory": "", "codeCacheDirectory": "", "packageCodePath": ""}
		self.monitor_conf = {
							  "SWITCH_FILEIO": 1,
							  "SWITCH_HTTP": 1,
							  "SWITCH_WEBVIEW": 1,
							  "SWITCH_SQL": 1,
							  "SWITCH_IPC": 1,
							  "SWITCH_MISC": 1,
							  "SWITCH_SHAREDPREFERENCES": 1
							}
		self.monitor_refresh = 0
		self.preload_conf = {"PRELOAD_STETHO": 0, "PRELOAD_SSLSTRIP": 1, "PRELOAD_SETPROXY" : 0}
		self.gating_option = False
		self.spawn = None 		# experimental
		self.test = None
		

app_global = Global()

app = Flask(__name__)
async_mode = None
socketio = SocketIO(app, async_mode=async_mode)
login_manager = flask_login.LoginManager()
login_manager.init_app(app)

thread = None
thread_lock = Lock()
random_token = uuid.uuid4().hex
# random_token = "deadbeef"

# with open('./templates/env.html') as f:
# 	env_html = f.read()
# with open('./templates/enum.html') as f:
#     enum_html = f.read()
# with open('./templates/hooks.html') as f:
#     hooks_html = f.read()
# with open('./templates/intercepts.html') as f:
#     intercepts_html = f.read()
# with open('./templates/preload.html') as f:
# 	preload_html = f.read()
# with open('./templates/monitor.html') as f:
# 	monitor_html = f.read()



