CXX := g++
ARCH_V8 := '-DV8_TARGET_ARCH_IA32'
DEBUG := '-DENABLE_DEBUGGER_SUPPORT' '-DDEBUG'
preparser_flag :=  '-DENABLE_DISASSEMBLER' '-DV8_ENABLE_CHECKS' '-DOBJECT_PRINT' '-DVERIFY_HEAP' '-DENABLE_EXTRA_CHECKS'
common_flag := -Wall -Werror -W -Wno-unused-parameter -Wnon-virtual-dtor -pthread -fno-rtti -fno-exceptions -pedantic -ansi -m32 -g -O0 -Wall -Werror -W -Wno-unused-parameter -Wnon-virtual-dtor -Woverloaded-virtual 
src := allocation.cc \
atomicops_internals_x86_gcc.cc \
bignum.cc \
bignum-dtoa.cc \
cached-powers.cc \
conversions.cc \
diy-fp.cc \
dtoa.cc \
fast-dtoa.cc \
fixed-dtoa.cc \
once.cc \
preparse-data.cc \
preparser.cc \
preparser-api.cc \
scanner.cc \
strtod.cc \
token.cc \
unicode.cc \
utils.cc 

obj := $(addsuffix .o, $(addprefix obj/,$(basename $(src))))

all: preparserLib

obj/%.o: src/%.cc
	$(CXX) $(ARCH_V8) $(DEBUG)  $(preparser_flag) -I../src $(common_flag) -c $< -o $@ ;

preparserLib: $(obj)
	ar crsT obj/libpreparser_lib.a $(obj);
	g++ $(ARCH_V8) $(DEBUG) $(common_flag) -c -o obj/preparser-process.o preparser-process.cc
	g++ -pthread -m32  -o preparser -Wl,--start-group obj/preparser-process.o obj/libpreparser_lib.a -Wl,--end-group
clean:
	rm -f obj/libpreparser_lib.a;
	rm -f obj/*.o;
	rm -f preparser;
