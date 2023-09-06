# Solution
## Home page:
Homepage has something written in German, we can ask our uncle Google what it is:
Welcome to the secret society!!!
Hello!, do you know the secret code? What is it? The machine can only understand the mother tongue.

**The machine can only understand the mother tongue**. So this might be a hint.
How about we change the header language to german and try our luck.

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/55f96d24-6fe5-4468-bd15-7b3a1295349f)

So we got something  `Die <b>geheime</b> Abfrage sollte immer hail_hitler lauten` <br>
It says: `The <b>secret</b> query should always be hail_hitler` 

Basically its telling secret query should be `hail_hitler` <br>
Okay lets again use curl with query as hail_hitler with secret as query parameter

![image](https://github.com/sumukhchitloor/pbCTF/assets/72266248/9f22edfc-97e2-4239-80cb-f31d6aee422f)

Yayyyy!!! <br>
We got the flag
