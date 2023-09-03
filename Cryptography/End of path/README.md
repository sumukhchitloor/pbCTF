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

To take a closer look at the image let's use some stegno tools. I'm using the https://www.aperisolve.com/ website on uploading the image and reading the information it holds i find this
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/2f642de0-01cb-4598-ae8e-8e9d911e99d0)

There is .txt file in this and on downloading this file and opening it we find the following 
![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/841664df-b853-49f0-980f-94358bf78ce2)

So let us note that our key is `123` and proceed to the next image







