import colored
from enum import Enum
from colored import stylize

import frida
import sys
import requests
import json
# import IPython
import jinja2
import os
import datetime
from flask import render_template, request
import argparse

if sys.version_info >= (3, 8):
    import html as cgi
else:
    import cgi

Error = colored.fg("red") + colored.attr("bold")
Info = colored.fg("green") + colored.attr("bold")
MightBeImportant = colored.fg("blue") + colored.attr("bold")

linebreak = "h0us3l1nebr3ak"
codeblock = "h0us3bl0ck"
delimiter = "h4oar3ud0ing"

class dynamicHookOption(Enum):
    only_new = "new"
    only_existing = "existing"
    both = "all"
