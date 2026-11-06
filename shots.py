#!/usr/bin/env python3
"""Wego QA: capture key pages via Chromium CDP. Run on CT141 (chromium --headless=new --remote-debugging-port=9222)."""
import base64, json, sys, time, urllib.request
import websocket

CDP = "http://127.0.0.1:9222"

def http(path, method="GET"):
    req = urllib.request.Request(CDP + path, method=method)
    with urllib.request.urlopen(req, timeout=10) as r:
        return json.load(r)

class Page:
    def __init__(self, target):
        self.ws = websocket.create_connection(target["webSocketDebuggerUrl"], timeout=60)
        self.i = 0
    def cmd(self, m, **p):
        self.i += 1
        self.ws.send(json.dumps({"id": self.i, "method": m, "params": p}))
        while True:
            r = json.loads(self.ws.recv())
            if r.get("id") == self.i:
                if "error" in r: raise RuntimeError(r["error"])
                return r.get("result", {})

def shot(url, out, w=1440, h=900, theme=None, wait=2.0):
    t = http("/json/new?about:blank", "PUT")
    p = Page(t)
    p.cmd("Emulation.setDeviceMetricsOverride", width=w, height=h, deviceScaleFactor=1, mobile=(w < 500))
    p.cmd("Page.navigate", url=url)
    time.sleep(wait)
    if theme == "light":
        p.cmd("Runtime.evaluate", expression="document.documentElement.classList.replace('dark','light');document.documentElement.style.colorScheme='light';localStorage.setItem('wego-theme','light');")
        time.sleep(0.6)
    b64 = p.cmd("Page.captureScreenshot", format="png")["data"]
    open(out, "wb").write(base64.b64decode(b64))
    p.ws.close()
    print(out)

base = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:3100"
shot(base + "/", "/tmp/wego-home-dark.png")
shot(base + "/", "/tmp/wego-home-light.png", theme="light")
shot(base + "/", "/tmp/wego-home-mobile.png", w=390, h=844)
shot(base + "/about", "/tmp/wego-about.png")
shot(base + "/insights", "/tmp/wego-insights.png")
