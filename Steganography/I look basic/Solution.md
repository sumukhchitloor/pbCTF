# Solution:

The file has hidden file inside it. It can be extracted using Steghide tool,

```steghide extract -sf I_am_basic.jpg``` with no password

![gojo1](https://github.com/sumukhchitloor/pbCTF/assets/72266248/7393001d-53bd-45bf-9061-de44c5a4ee66)



We'll get `secret.txt`

Seceret.txt has: `E+2167XKD7F^Jc8FC/l@I/`

If we use cyberchef to analyze it:

![gojo2](https://github.com/sumukhchitloor/pbCTF/assets/72266248/e4fa655d-34c5-441b-9ef9-21cf31aa593d)


we'll get the flag: pbCTF{y0u_g0t_m3}
