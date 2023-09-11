# Solution
## Home page:
Homepage has something written in German, we can ask our uncle Google what it is:
Welcome to the secret society!!!
Hello!, do you know the secret code? What is it? The machine can only understand the mother tongue.

**The machine can only understand the mother tongue**. So this might be a hint.
How about we change the header language to german and try our luck.

![hitler1](https://github.com/sumukhchitloor/pbCTF/assets/72266248/4444ead8-d605-4631-bc0d-3fb446210373)


So we got something  `Die <b>geheime</b> Abfrage sollte immer hail_hitler lauten` <br>
It says: `The <b>secret</b> query should always be hail_hitler` 

Basically its telling secret query should be `hail_hitler` <br>
Okay lets again use curl with query as hail_hitler with secret as query parameter

![hitler2](https://github.com/sumukhchitloor/pbCTF/assets/72266248/304a80e4-4bb1-4472-8e74-b3e30a45d719)


Yayyyy!!! <br>
We got the flag
