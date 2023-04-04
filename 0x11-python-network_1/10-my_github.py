#!/usr/bin/python3
"""
Python script that takes your GitHub credentials 
(username and password) and uses the GitHub API to display your id
"""

import sys
import requests
from requests.auth import HTTPBasicAuth

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    url = "https://api.github.com/user"
    res = requests.get(url, auth=(username, password))

    if res.status_code == 200:
        user = res.json()
        print("GitHub ID:", user["id"])
    else:
        print("Error:", res.json()["message"])

