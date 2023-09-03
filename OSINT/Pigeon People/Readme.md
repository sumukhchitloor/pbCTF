# Pigeon People

>Welcome, digital detectives, to the heart of Tokyo's urban jungle! Picture this: the rhythmic flutter of pigeons' wings, the hum of street life, and one vigilant observer capturing nature's nuances. Embark on a quest within an image of Tokyo's lively streets. One observer stands out among the crowd—a sentinel of serenity amidst the urban rhythm. Shift your view to the left. A person, adorned in a colored hoodie, immortalizes plant life with a camera's lens, heavier than a pigeon and wearing purple shoes with pink ribbon in his pocket

>Your task is to find the color of the hoodie and answer the puzzle like pbCTF{color_hoodie}
 Eg: If it is a black hoodie then the flag will be pbCTF{black_hoodie}

![peigon](https://github.com/sumukhchitloor/pbCTF/assets/76547134/a466f027-ad0e-4be1-891a-502c5b1ea0f7)

# Solution

The title of the question is Pigeon People and by looking at the image provided, there is a people wearing pigeon masks on their heads. On googling them out this is the result we find.
![pigeon-people-google-result](https://github.com/sumukhchitloor/pbCTF/assets/76547134/d782ac03-32be-48bd-81be-46fb5bdb1355)


Here you see that there are a lot of similar images that the challenge has provided. Also If you look through the links indexed, we see that this image was taken in Japan which is referenced as 
` Tokyo's urban jungle`  in the question.

You can also reverse search in Google with the image that we have provided. On doing that we get these results.

![Pasted image 20230903145356](https://github.com/sumukhchitloor/pbCTF/assets/76547134/2fac9136-28a4-40ec-95f9-a5d8fd3b2d14)


Here we get all the websites that have this image, You can choose any website that will provide you with a Street view of the exact image in Google Map. We will proceed with the [Wired Google Earth](https://www.weirdgoogleearth.com/2014/12/24/japanese-bird-people/) website. 

![Pasted image 20230903145822](https://github.com/sumukhchitloor/pbCTF/assets/76547134/12967875-075c-4fb7-878e-2fa0c18f2eb5)

We can see the exact view of the image in the website embedded in Google Maps, the question asked us to move our view to the left and when we do so. We can see a man holding a camera.

![Pasted image 20230903150305](https://github.com/sumukhchitloor/pbCTF/assets/76547134/ade8ebe9-ce77-4df6-b8c8-f44029149acf)

This man matches exactly with the description `A person, adorned in a colored hoodie, immortalizes plant life with a camera's lens, heavier than a pigeon and wearing purple shoes with pink ribbon in his pocket`. Therefore the color of the hoodie is red.

> Flag is pbCTF{red_hoodie}
