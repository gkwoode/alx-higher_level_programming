#!/usr/bin/python3
"""
Python script that takes your GitHub credentials (username and password) 
and uses the GitHub API to display your id
"""

import sys
import requests

if __name__ == '__main__':
    letter = "" if len(sys.argv) == 1 else sys.argv[1]
    payload = {"q": letter}

    res = requests.post("http://8c5a4091af87.69e084c4.alx-cod.online:5000/search_user", data=payload)
    try:
        response = res.json()
        if not response:
            print("No result")
        else:
            print("[{}] {}".format(response.get("id"), response.get("name")))
    except ValueError:
        print("Not a valid JSON")
