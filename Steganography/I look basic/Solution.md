# Solution:

The file has hidden file inside it. It can be extracted using Steghide tool,

```steghide extract -sf I_am_basic.jpg``` with no password

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/7b6be4da-3d39-42ae-9229-e7f54f45e82f)


We'll get `secret.txt`

Seceret.txt has: `E+2167XKD7F^Jc8FC/l@I/`

If we use cyberchef to analyze it:

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/6795f12e-dc94-4ffa-b4b4-f0069b72af43)

we'll get the flag: pbCTF{y0u_g0t_m3}
