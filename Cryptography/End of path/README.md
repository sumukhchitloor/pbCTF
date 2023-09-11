# PBCTF V1

## End of path 

>The guard told me someone was here to meet me but now I stand on these cross roads with a feeling that I must proceed on the right path but I also know going left holds the key to proceed on the right path. This should lead to a roundabout where I have to turn and rotate to find the 13 st..
>
>Flag Format : pbCTF{[A-Za-z0-9]}
>
>Link : https://github.com/Holmes9329 


# Solution

`Going left holds the key to proceed on the right path` this seems like a cipher which uses a key so let's find the key from the left path first. Now to find these paths..On visiting the github link given we see the user has 5 repositories
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/c00c5c7d-6c21-48db-bf29-6a230adeee55)

On viting the repositories we find that most of them are empty and when we land on the `Former_Roman_Dictator` repository (Strange name let's keep this is mind) we get to see this
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/0729b140-64b9-4474-b88a-c952542997fe)

Now that we have the left and the right image let's get to finding that key in the left image..
![Left](https://github.com/sumukhchitloor/pbCTF/assets/84336892/309c9bb3-be93-446e-ae75-0dd0c2b6f5b7)

To take a closer look at the image let's use some stegno tools. I'm using the https://www.aperisolve.com/ website. On uploading the image and reading the information it holds i find this
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/cf3a70ff-1e73-45c1-aa46-44ed74e4474c)


There is .txt file in this and on downloading this file and opening it we find the following 
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/bf2d0efd-e264-401d-8e17-05feb9eb74d9)


So let us note that our key is `123` and proceed to the next image



![Right](https://github.com/sumukhchitloor/pbCTF/assets/84336892/024c0c3d-bb40-47ee-9324-432a97c9f3c1)


To take a closer look at the image let's use some stegno tools. I'm using the https://www.aperisolve.com/ website. On uploading the image and reading the information it holds i find this

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/1b753dfd-658a-474a-a6f6-74626ac8d20d)


There is Cipher.txt file in this (We can confirm that it is a cipher) and on downloading this file and opening it we find the following

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/ae424f60-1e5d-420f-8dbc-41d7afa0155b)


Ok now we have `vhIZL{O_cgy_n3x3}` But as we read in the file it says "First let us conquer this dictator". Now who is this dictator might this be related to the name of the repsitory let's perform a google search
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/e61c4f7f-554e-4f2f-b6f5-6402adbc3e7f)


Ok now how does Gaius Julius Caesar relate to all this ? Is there a cipher based on him or with the same name ? Let's perform another Google search 

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/9ea12a2a-3cfe-44f1-a645-601cdc8cb5e9)


Yes there is now let's try to decode `vhIZL{O_cgy_n3x3}` . Searching for Caesar cipher decoder you will land on a page similar to this https://www.dcode.fr/caesar-cipher . So from the question we can see that we are supposed to crack the cipher first and then "rotate around the roundabout" (That's some weird english) let's get to that later first to crack the cipher we can see tool asks us a Cipher text and a Key we have both of these let's try it out .

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/1d117df5-830a-47ec-aa2c-3a4de4b1f880)


We obtain 2 strings of text let's keep them both for now `coPGS{V_jnf_u3e3}` and `oaBSE{H_vzr_g3q3}` . Ok now let's come to the wierd english part `This should lead to a roundabout where I have to turn and rotate to find the 13 st..` What could this mean ? We can see the key words rotate dosen't fit in the sentence and mayebe the 13 st also has something to do with this..Is there something that has to do with rotate and 13 ? Again using out trusty friend Google searching about it will help us to know there is something called as Rot13 cipher.
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/2bcb20d1-e7d9-4d59-a6d4-83f19287e6e5)



Let's try Rot-13 with the strings we obtained. I'll be using https://gchq.github.io/CyberChef/ for this and we can see the following results 
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/bbe24d2f-cab6-446e-ad40-07a7c67e4578)

We can see the first string translates to the flag

>Flag : pbCTF{I_was_h3r3}



>Happy Hacking :)
