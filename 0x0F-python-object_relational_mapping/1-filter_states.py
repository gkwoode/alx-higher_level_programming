#!/usr/bin/python3

import MySQLdb
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]

    db = MySQLdb.connect(host="localhost", user=username, passwd=password, db=database, port=3306)
    c = db.cursor()
    c.execute("SELECT * FROM states WHERE name LIKE 'N' ORDER BY id ASC")

    rows = c.fetchall()
    for row in rows:
        if row[1][0] == "N":
            print(row)


    # Close all connections
    c.close()
    db.close()
