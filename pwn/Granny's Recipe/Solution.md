# Solution
## Connecting to server
It asks what do you want? If we give input program exits.
If we try to overflow it exits from netcat connection showing possiblities of bufferoverflow.
## Reversing using Ghidra
When we see functions on ghigra we can see `win()` and `vuln()` function.

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/bb929f38-5a4d-4f12-a00f-ac62b5729491)

This confirms that this is classic ret2win challange.

## Offest of EIP

We can get to know the exact offset value of EIP using **pwngdb** <br>
1. cyclic 200
2. Run with the payload given by above command.

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/3411618b-1d11-4f08-bc4c-b2ad44088525)

3. So get offset of 'laaa'. Which is 44

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/daf57162-1063-42ce-8268-ee32e3070ebd)


## Getting address of win()
So fire up the **pwngdb** and get address of win function. So win() function is at `0x565561e9`

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/36777de0-c8fa-42a7-be12-6633b10a3f76)


## Exploitation

`python2 -c 'print "A"*44 + "\xe9\x61\x55\x56"`

and send it to server.

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/374e6930-6278-4760-a56b-7c16c951c82f)

And we get the flag.

## Conclusions
This was classic ret2win and for more details about this, read it here:
[Link](https://www.sumukhchitloor.me/binary-exploitation/introduction-to-buffer-overflow)
