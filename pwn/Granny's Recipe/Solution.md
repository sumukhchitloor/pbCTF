# Solution
## Connecting to server
It asks what do you want? If we give input program exits.
If we try to overflow it exits from netcat connection showing possiblities of bufferoverflow.
## Reversing using Ghidra
When we see functions on ghigra we can see `win()` and `vuln()` function.

![pwn1](https://github.com/sumukhchitloor/pbCTF/assets/72266248/9b9f1533-3d11-4af6-aeee-6ad929427ca5)


This confirms that this is classic ret2win challange.

## Offest of EIP

We can get to know the exact offset value of EIP using **pwngdb** <br>
1. cyclic 200
2. Run with the payload given by above command.

![pwn2](https://github.com/sumukhchitloor/pbCTF/assets/72266248/c1ec6671-d992-4686-a494-5ed1978e15fa)


3. So get offset of 'laaa'. Which is 44

![pwn3](https://github.com/sumukhchitloor/pbCTF/assets/72266248/4010c4d5-7c74-493a-8330-5323acb44cc0)



## Getting address of win()
So fire up the **pwngdb** and get address of win function. So win() function is at `0x565561e9`

![pwn4](https://github.com/sumukhchitloor/pbCTF/assets/72266248/6537fe2b-3695-4c9b-9fb2-157c0aedffff)



## Exploitation

`python2 -c 'print "A"*44 + "\xe9\x61\x55\x56"`

and send it to server.

![pwn5](https://github.com/sumukhchitloor/pbCTF/assets/72266248/4cb7432d-3c7a-4ba2-9f52-ca176dfbd0ea)

And we get the flag.

## Conclusions
This was classic ret2win and for more details about this, read it here:
[Link](https://www.sumukhchitloor.me/binary-exploitation/introduction-to-buffer-overflow)
