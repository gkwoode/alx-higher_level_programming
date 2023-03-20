#!/usr/bin/python3

import MySQLdb
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    db = MySQLdb.connect(host="localhost", user=username, passwd=password, db=database, port=3306)
    c = db.cursor()
    c.execute("SELECT * FROM states WHERE name LIKE '{}' ORDER BY id ASC".format(state_name))

    rows = c.fetchall()
    for row in rows:
        print(row)


    # Close all connections
    c.close()
    db.close()
