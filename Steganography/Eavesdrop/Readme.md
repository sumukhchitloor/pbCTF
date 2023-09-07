# Eavesdrop

> Samukh and Samath were sharing files on a private network that only they had access to. However, Sagar managed to hack into their network and started intercepting network requests. He has captured the network requests and is seeking your assistance in locating the flag. <br/>
> Flag Format: pbCTF{a-zA-Z0-9}

# Solution

There is a [pcap file](https://en.wikipedia.org/wiki/Pcap) that is provided to you along with this question. This challenge has two ways to solve the problem.

## Method 1

This is a method that uses the [Wireshark tool](https://www.wireshark.org/). Open the pcap file in the Wireshark tool and follow the TCP stream. 

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/b45a49d4-f286-41c5-9767-a5474058acb1)

You find the flag in the first TCP stream itself.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/ed109735-cc71-4ca1-8d77-2d8a6d743b51)

> Flag : pbCTF{y0u_g0t_u5}

## Method 2

This method uses the tool [strings](https://www.javatpoint.com/linux-strings-command#:~:text=Linux%20strings%20command%20is%20used,text%20from%20an%20executable%20file.) to get the flag with the help of the grep command.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/9a17a3a5-cf62-426d-acfc-cd0dec898308)


> Flag : pbCTF{y0u_g0t_u5}
