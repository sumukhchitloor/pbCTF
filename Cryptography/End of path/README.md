# PBCTF V1

## End of path 

>The guard told me someone was here to meet me but now I stand on these cross roads with a feeling that I must proceed on the right path but I also know going left holds the key to proceed on the right path. This should lead to a roundabout where I have to turn and rotate to find the 13 st..
>
>Flag Format : pbCTF{[A-Za-z0-9]}
>
>Link : https://github.com/Holmes9329 


# Solution

`Going left holds the key to proceed on the right path` this seems like a cipher which uses a key so let's find the key from the left path first. Now to find the these paths..On visiting the github link given we see the user has 5 repositories
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/3cdecc1d-713e-4877-bb03-dae30738929e)
On viting the repositories we find that most of them are empty and when we land on the `Former_Roman_Dictator` repository (Strange name let's keep this is mind) we get to see this
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/08ad73dd-cff9-4455-93c4-fd7ec05b2aac)
Now that we have the left and the right image let's get to finding that key in the left image..

![264979981-5f868ddd-c496-4c7c-afbe-15fadcd443f7 (1)](https://github.com/sumukhchitloor/pbCTF/assets/84336892/0028fd9d-3caa-45df-8dfe-7fdf2d55062a)

To take a closer look at the image let's use some stegno tools. I'm using the https://www.aperisolve.com/ website. On uploading the image and reading the information it holds i find this
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/2f642de0-01cb-4598-ae8e-8e9d911e99d0)

There is .txt file in this and on downloading this file and opening it we find the following 
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/841664df-b853-49f0-980f-94358bf78ce2)

So let us note that our key is `123` and proceed to the next image



![264984261-58a5c7f0-bea8-4c84-bd44-d42f970a30d7 (1)](https://github.com/sumukhchitloor/pbCTF/assets/84336892/8d1eabdf-c924-4fe6-b0c0-85a1689a2796)

To take a closer look at the image let's use some stegno tools. I'm using the https://www.aperisolve.com/ website. On uploading the image and reading the information it holds i find this

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/80a57222-33d9-4f5c-aecd-483df71740c0)

There is Cipher.txt file in this (We can confirm that it is a cipher) and on downloading this file and opening it we find the following

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/50b4f9ad-0b6f-4026-b4b5-8b3372794325)

Ok now we have `vhIZL{O_cgy_n3x3}` But as we read in the file it says "First let us conquer this dictator". Now who is this dictator might this be related to the name of the repsitory let's perform a google search
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/6ead5594-ae16-4a32-a83a-d851d26fcd5c)

Ok now how does Gaius Julius Caesar relate to all this ? Is there a cipher based on him or with the same name ? Let's perform another Google search 

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/8e0b874b-7717-419b-9280-112f95ceb0d1)

Yes there is now let's try to decode `vhIZL{O_cgy_n3x3}` . Searching for Caesar cipher decoder you will land on a page similar to this https://www.dcode.fr/caesar-cipher . So from the question we can see that we are supposed to crack the cipher first and then "rotate around the roundabout" (That's some weird english) let's get to that later first to crack the cipher we can see tool asks us a Cipher text and a Key we have both of these let's try it out .

![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/f8c3863f-0880-441e-bc94-7358ec53b869)

We obtain 2 strings of text let's keep them both for now `coPGS{V_jnf_u3e3}` and `oaBSE{H_vzr_g3q3}` . Ok now let's come to the wierd english part `This should lead to a roundabout where I have to turn and rotate to find the 13 st..` What could this mean ? We can see the key words rotate dosen't fit in the sentence and mayebe the 13 st also has something to do with this..Is there something that has to do with rotate and 13 ? Again using out trusty friend Google searching about it will help us to know there is something called as Rot13 cipher.
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/a206f021-c9d5-4c0b-9338-97e72d501a10)


Let's try Rot-13 with the strings we obtained. I'll be using https://gchq.github.io/CyberChef/ for this and we can see the following results 
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/101e1b48-601c-4ebe-967d-701f973ec9b0)













