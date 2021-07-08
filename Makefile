# Just for TS and my sanity

COMPILER = tsc
SRC = $(wildcard ts/*.ts)

build:
	$(COMPILER) $(SRC)

clean:
	rm -rf ts/*.js