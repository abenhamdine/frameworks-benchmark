## Benchmark of some http frameworks

Three routes are tested : 
- /big : return a big json object (354Ko)
- /small : return a small json object (2Ko)
- /hello : return `{hello : 'world'}`

Data sent back by both /big and /small routes are real-world data (anonymized) corresponding some of our real application responses. 

### Results

Updated 19/09/2017

Node : 8.5.0  
Pc : Intel(R) Core i7-6500U CPU 2.50GHZ 2.59GHZ 8.00Go RAM  
OS : Windows 10

3 runs : only the results of third run are kept.  

**express 4.15.4**

```
npm run test-perf-express

> frameworks-benchmark@0.0.0 test-perf-express C:\node-projects\frameworks-benchmark
> autocannon -c 100 -d 5 localhost:3000/big && autocannon -c 100 -d 5 localhost:3000/small && autocannon -c 100 -d 5 localhost:3000/
hello

Running 5s test @ http://localhost:3000/big
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 169.47  50.65   379
Req/Sec      577.6   23.07   601
Bytes/Sec    98.6 MB 4.59 MB 105 MB

3k requests in 5s, 493 MB read
Running 5s test @ http://localhost:3000/small
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 9.15    3.32    49
Req/Sec      10336.4 1511.37 11119
Bytes/Sec    8.89 MB 1.38 MB 9.96 MB

52k requests in 5s, 44.1 MB read
Running 5s test @ http://localhost:3000/hello
100 connections

Stat         Avg     Stdev  Max
Latency (ms) 8.12    2.95   43
Req/Sec      11610.4 832.47 12383
Bytes/Sec    2.16 MB 156 kB 2.36 MB

58k requests in 5s, 10.9 MB read

```

fastify 0.27
```
$ npm run test-perf-fastify

> frameworks-benchmark@0.0.0 test-perf-fastify C:\node-projects\frameworks-benchmark
> autocannon -c 100 -d 5 localhost:3000/big && autocannon -c 100 -d 5 localhost:3000/bigschema && autocannon -c 100 -d 5 localhost:3
000/small && autocannon -c 100 -d 5 localhost:3000/hello

Running 5s test @ http://localhost:3000/big
100 connections

Stat         Avg    Stdev   Max
Latency (ms) 194.49 13.32   238
Req/Sec      507.8  26.2    533
Bytes/Sec    86 MB  4.59 MB 92.3 MB

3k requests in 5s, 434 MB read

Running 5s test @ http://localhost:3000/bigschema
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 171.4   10.6    215
Req/Sec      580.21  39.6    600
Bytes/Sec    70.7 MB 5.45 MB 75.5 MB

3k requests in 5s, 345 MB read

Running 5s test @ http://localhost:3000/small
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 4.04    1.55    37
Req/Sec      22388.8 1850.55 23535
Bytes/Sec    18.6 MB 1.57 MB 19.9 MB

112k requests in 5s, 91.2 MB read

Running 5s test @ http://localhost:3000/hello
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 2.96    1.45    39
Req/Sec      28804.8 2243.12 30671
Bytes/Sec    4.29 MB 360 kB  4.72 MB

144k requests in 5s, 21.5 MB read
```

### Conclusion

- **Fastify beats express in 'small' and 'hello' tests.**  
- **However concerning the 'big' test, Express is sligthly better.**
- **With big response, Fastify can only match Express performance by using schema validation (route /bigschema in the tests) which allows to enable faster Json stringification**