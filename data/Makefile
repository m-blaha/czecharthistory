CATALOGS=$(shell ls *.csv | sed 's/\.csv$$/.js/g')

all: $(CATALOGS)

%.js: %.csv
	./mkjson.py $<
