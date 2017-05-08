#!/usr/bin/python
# -*- coding: utf-8 -*-

import csv
import json
import sys


def mkjson(csvfname):
    basename = csvfname.split('.')[0]
    csv_in = csv.reader(file(csvfname, 'r'))
    fields = csv_in.next()
    lines = []
    for line in csv_in:
        line_d = dict(zip(fields, line))
        if not line_d['end']: line_d['end'] = line_d['start']
        line_d['start'] = '01/01/%s' % line_d['start']
        line_d['end'] = '31/01/%s' % line_d['end']
        lines.append(line_d)
    json.dump(lines, file('%s.js' % basename, 'w'))


if __name__ == '__main__':

    try:
        csvfname = sys.argv[1]
    except:
        print 'nejni csv'
        sys.exit(2)
    mkjson(csvfname)
