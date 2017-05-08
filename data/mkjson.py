#!/usr/bin/python
# -*- coding: utf-8 -*-

import csv
import json
import random
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


def random_cls():
    return 'col-%s' % random.randint(1,6)

def parse_events(csvfname):
    csv_in = csv.reader(file(csvfname, 'r'))
    fields = csv_in.next()
    lines = []
    for line in csv_in:
        line_d = dict(zip(fields, line))
        if not line_d['end']: line_d['end'] = line_d['start']
        line_d['start'] = '01/01/%s' % line_d['start']
        line_d['end'] = '31/01/%s' % line_d['end']
        cls = ['events']
        cls.append(random_cls())
        cls.append(line_d['type'].replace('&',''))
        cls.append(line_d['nationality'])
        lines.append(dict(
            start=line_d['start'],
            end=line_d['end'],
            name=line_d['name'],
            description=line_d['description'],
            cls=' '.join([c for c in cls if c]),
            image=line_d['image'],
            ))

    return lines

def parse_artworks(csvfname):
    csv_in = csv.reader(file(csvfname, 'r'))
    fields = csv_in.next()
    lines = []
    for line in csv_in:
        line_d = dict(zip(fields, line))
        if not line_d['end']: line_d['end'] = line_d['start']
        line_d['start'] = '01/01/%s' % line_d['start']
        line_d['end'] = '31/01/%s' % line_d['end']
        cls = ['artworks']
        cls.append(random_cls())
        lines.append(dict(
            start=line_d['start'],
            end=line_d['end'],
            name=line_d['name'],
            description=' '.join([line_d['first'], line_d['last']]),
            cls=' '.join([c for c in cls if c]),
            image=line_d['image'],
            ))

    return lines

def parse_styles(csvfname):
    csv_in = csv.reader(file(csvfname, 'r'))
    fields = csv_in.next()
    lines = []
    for line in csv_in:
        line_d = dict(zip(fields, line))
        if not line_d['end']: line_d['end'] = line_d['start']
        line_d['start'] = '01/01/%s' % line_d['start']
        line_d['end'] = '31/01/%s' % line_d['end']
        cls = ['styles']
        cls.append(random_cls())
        lines.append(dict(
            start=line_d['start'],
            end=line_d['end'],
            name=line_d['name'],
            cls=' '.join([c for c in cls if c]),
            ))

    return lines

if __name__ == '__main__':
    data = parse_events('events.csv')
    data.extend(parse_artworks('artworks.csv'))
    data.extend(parse_styles('styles.csv'))
    file('data.js', 'w').write('var EVENTS=%s;' % json.dumps(data))

    #try:
    #    csvfname = sys.argv[1]
    #except:
    #    print 'nejni csv'
    #    sys.exit(2)
    #mkjson(csvfname)
