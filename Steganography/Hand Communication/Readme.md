# Hand Communication

> I have been fond of the various hand gestures and the special meaning it denotes. So I decided to make a program around it and now it has become a mode of communication in a secret organization. 🥶<br/> 
> Flag Format : pbCTF{[a-zA-Z0-9]}

# Solution

We have provided you with an image along with the question. Using a common tool `steghide` we can get out the hidden information in the image.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/3f875363-ced5-4c9c-84a2-6401f7788cee)

You see that it has extracted `finger_binary.py.gz` which is a zipped file. Extract the content from the zip file.

```bash
gzip -d finger_binary.py.gz
```

There is a python file `finger_binary.py` that we got. Open it and you see an `Email` in the Python code which is a little unusual.

```
Email

To: spammimic

From: Admin 

Message : Dear Business person , We know you are interested in 
receiving amazing information . If you are not interested 
in our publications and wish to be removed from our 
lists, simply do NOT respond and ignore this mail ! 
This mail is being sent in compliance with Senate bill 
1621 ; Title 9 ; Section 305 ! This is not multi-level 
marketing . Why work for somebody else when you can 
become rich as few as 10 months ! Have you ever noticed 
more people than ever are surfing the web & more people 
than ever are surfing the web . Well, now is your chance 
to capitalize on this ! We will help you turn your 
business into an E-BUSINESS and deliver goods right 
to the customer's doorstep ! The best thing about our 
system is that it is absolutely risk free for you . 
But don't believe us . Mr Simpson who resides in Utah 
tried us and says "I've been poor and I've been rich 
- rich is better" ! This offer is 100% legal . You 
have no reason not to act now ! Sign up a friend and 
your friend will be rich too . Thank-you for your serious 
consideration of our offer ! Dear Internet user , Your 
email address has been submitted to us indicating your 
interest in our publication ! If you are not interested 
in our publications and wish to be removed from our 
lists, simply do NOT respond and ignore this mail ! 
This mail is being sent in compliance with Senate bill 
1625 ; Title 2 ; Section 302 . This is different than 
anything else you've seen ! Why work for somebody else 
when you can become rich inside 91 days ! Have you 
ever noticed people love convenience and how many people 
you know are on the Internet ! Well, now is your chance 
to capitalize on this . We will help you increase customer 
response by 150% plus turn your business into an E-BUSINESS 
. You can begin at absolutely no cost to you ! But 
don't believe us . Ms Simpson who resides in Louisiana 
tried us and says "I've been poor and I've been rich 
- rich is better" ! We are licensed to operate in all 
states . Do not delay - order today ! Sign up a friend 
and you'll get a discount of 50% . Thank-you for your 
serious consideration of our offer .  

```

Notice , the email is from the `Admin` and it going to `spammimic`

> Spam Mimic is a process that the people over at spammimic.com have developed to encode and decode e-mail messages to be disguised as spam.

If you search spammimic in google you will get this website which is named the same as [spammimic](https://www.spammimic.com/). On that website decode the message in the email and you will get the flag.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/3322c8e1-a499-4b79-bf74-dcfa3ad1a1a4)

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/d49e9432-c5d5-46fa-a459-c44ba0cfcf19)

> Flag : pbCTF{sp4m_m1m1c}

