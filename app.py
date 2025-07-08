from flask import Flask, render_template, request, jsonify
import requests
from datetime import datetime, timedelta
import random

app = Flask(__name__)

# Mock API key (replace with real API key from exchangerate-api.com)
API_KEY = 'your_api_key_here'
BASE_URL = 'https://v6.exchangerate-api.com/v6'

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/convert')
def convert():
    from_curr = request.args.get('from', 'USD')
    to_curr = request.args.get('to', 'EUR')
    amount = float(request.args.get('amount', 1))
    
    try:
        # Simulate conversion (real app would use API)
        rates = {
            'USD': 1.0,
            'EUR': 0.93,
            'GBP': 0.80,
            'JPY': 148.50,
            'CAD': 1.37,
            'AUD': 1.56,
            'INR': 83.29
        }
        
        if from_curr not in rates or to_curr not in rates:
            return jsonify({"success": False, "message": "Invalid currency code"})
        
        rate = rates[to_curr] / rates[from_curr]
        result = amount * rate
        
        return jsonify({
            "success": True,
            "result": result,
            "rate": rate,
            "from": from_curr,
            "to": to_curr
        })
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})

@app.route('/latest')
def latest_rates():
    try:
        # Simulate API response (replace with actual API call)
        return jsonify({
            "success": True,
            "rates": {
                'USD': 1.0,
                'EUR': 0.93,
                'GBP': 0.80,
                'JPY': 148.50,
                'CAD': 1.37,
                'AUD': 1.56,
                'INR': 83.29
            }
        })
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})

@app.route('/historical')
def historical_data():
    date = request.args.get('date', 'latest')
    
    try:
        # Simulate historical data (real app would use API)
        base_rates = {
            'USD': 1.0,
            'EUR': 0.93 + random.uniform(-0.05, 0.05),
            'GBP': 0.80 + random.uniform(-0.03, 0.03),
            'JPY': 148.50 + random.uniform(-5, 5),
            'CAD': 1.37 + random.uniform(-0.04, 0.04)
        }
        
        return jsonify({
            "success": True,
            "date": date,
            "rates": base_rates
        })
    except Exception as e:
        return jsonify({"success": False, "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
