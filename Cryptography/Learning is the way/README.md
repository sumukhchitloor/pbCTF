# PBCTF V1
## Learning is the way
>aHR0cHM6Ly9wYXN0ZWJpbi5jb20vMTQ4YTRUUVA=
>
>Everything comes with a message in life
>
>Flag Format : pbCTF{[A-Za-z0-9]}

# Solution

`aHR0cHM6Ly9wYXN0ZWJpbi5jb20vMTQ4YTRUUVA=` This is a Cryptography challenge based on the category so you can use any tool available online to identify what this string is.
In this case I'm using `https://gchq.github.io/CyberChef/`. Here is a common trick while using Cyberchef just paste a string you find is suspicious in the input feild (no need of a recipe) and if a *wand* appears next to the output section then it means it a very commonly used encryption and tool decodes it for you.


![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/6df493c5-0fb0-4e73-9c53-176a424dbc74)


With that being said this is a baby level challenge we don't expect you to know about online tools and stuff so let's take it from a newbies perspective.
What is the first question that popped up in your head when you read the question ? 
`What is this string?` probably something similar to this. Let's just ask the most popular tool everyone has been using in recent times.


![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/bf9d668d-fe84-4049-937d-d27179e46583)


We find the link `https://pastebin.com/148a4TQP`. On this link we find genuine learning material and on scrolling to the end of the list of resources you will find the flag `pbCTF{never_stop_learning}`

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/3b52f370-b5ae-4966-a02e-4ba09d2d2d52)


>Flag : pbCTF{never_stop_learning}
>
>Hope these resources will help u Never_Stop_Learning :)
