## Benchmark of some http frameworks

Three routes are tested : 
- /big : return a big json object (354Ko)
- /small : return a small json object (2Ko)
- /hello : return `{hello : 'world'}`

Data sent back by both /big and /small routes are real-world data (anonymized) corresponding some of our real application responses. 

### Results

Pc : Intel(R) Core i7-6500U CPU 2.50GHZ 2.59GHZ 8.00Go RAM  
OS : Windows 10

**express 4.15.4**

```
$ npm run test-perf

> frameworks-benchmark@0.0.0 test-perf C:\node-projects\frameworks-benchmark
> autocannon -c 100 -d 5 localhost:3000/big && autocannon -c 100 -d 5 localhost:3000/small && autocannon -c 100 -d 5 localhost:3000/hello

Running 5s test @ http://localhost:3000/big
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 190.27  39.06   327
Req/Sec      515.21  15.11   538
Bytes/Sec    89.3 MB 3.14 MB 96.5 MB

3k requests in 5s, 446 MB read
Running 5s test @ http://localhost:3000/small
100 connections

Stat         Avg     Stdev  Max
Latency (ms) 10.59   2.36   38
Req/Sec      9032.8  216.84 9319
Bytes/Sec    8.57 MB 157 kB 8.91 MB

45k requests in 5s, 42.3 MB read

Running 5s test @ http://localhost:3000/hello
100 connections

Stat         Avg      Stdev Max
Latency (ms) 9.4      2.28  34
Req/Sec      10071.21 60    10183
Bytes/Sec    2.29 MB  0 B   2.36 MB

50k requests in 5s, 11.5 MB read

```

fastify
```
$ npm run test-perf

> frameworks-benchmark@0.0.0 test-perf C:\node-projects\frameworks-benchmark
> autocannon -c 100 -d 5 localhost:3000/big && autocannon -c 100 -d 5 localhost:3000/small && autocannon -c 100 -d 5 localhost:3000/hello

Running 5s test @ http://localhost:3000/big
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 242.19  33.54   339
Req/Sec      400.8   32.55   435
Bytes/Sec    69.4 MB 6.09 MB 75.5 MB

2k requests in 5s, 347 MB read

Running 5s test @ http://localhost:3000/small
100 connections

Stat         Avg      Stdev   Max
Latency (ms) 4.88     1.54    32
Req/Sec      18562.41 2378.39 20671
Bytes/Sec    15.8 MB  2.05 MB 17.8 MB

93k requests in 5s, 79.4 MB read

Running 5s test @ http://localhost:3000/hello
100 connections

Stat         Avg     Stdev   Max
Latency (ms) 3.15    1.19    33
Req/Sec      27620.8 1860.15 28815
Bytes/Sec    4.18 MB 288 kB  4.46 MB

138k requests in 5s, 20.6 MB read
```

### Conclusion

- Fastify beats express in 'small' and 'hello' tests.  
- However concerning the 'big' test, Express is sligthly better.