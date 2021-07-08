# Just for TS and my sanity

COMPILER = tsc
SRC = $(wildcard ts/*.ts)

build:
	$(COMPILER)

clean:
	rm -rf *.js *.js.map