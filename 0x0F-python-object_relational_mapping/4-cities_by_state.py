#!/usr/bin/python3

import MySQLdb
import sys

if __name__ == '__main__':
    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    
    db = MySQLdb.connect(host="localhost", user=username, passwd=password, db=database, port=3306)
    c = db.cursor()
    c.execute("SELECT cities.id, cities.name, states.name FROM cities JOIN states ON cities.state_id = states.id ORDER BY cities.id ASC")

    rows = c.fetchall()
    for row in rows:
        print(row)


    # Close all connections
    c.close()
    db.close()
