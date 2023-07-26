from flask import Flask, jsonify
from sds011 import SDS011
import atexit

app = Flask(__name__)

sensor = SDS011("/dev/tty.usbserial-0001", use_query_mode=True)
sensor.sleep(sleep=False)

@app.route("/")
def query_pm():
    pm25, pm10 = sensor.query()
    response = jsonify({ "pm25": pm25, "pm10": pm10 })
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@atexit.register
def sensor_sleep():
    sensor.sleep()