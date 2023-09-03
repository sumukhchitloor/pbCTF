# PBCTF V1

## Good ol' Scarlet

> I received a message today from an old friend...he wan't the most sane person in the world.
> He used to say he wanted to make video and audio for a living.
> Well here is the audio he sent me can you help me find his message?
> I wonder what newest messages he has for me.
>
> Flag Format : pbCTF{[A-Za-z0-9]}
>
> 
 ## Solution

 First we see that the challenge is name `Good ol' Scarlet` is Scarlet the name of the old friend let's keep this as a clue and proceed.
 On listening to the audio file we can listen to a series of beeps (Which are dots and dashes).
 Thus concluding this is Morse Code, doing a simple google search we can use a website to decode this.
 https://morsecode.world/international/decoder/audio-decoder-adaptive.html This is one of them. 
 After we upload the file and decoded we get this message `CRAZY I WAS CRAZY ONCE`.


 
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/7644f10e-fced-40e7-938e-7b47e04618dc)

 
 Once again reading the question we can see that the friend was into making Audio (which is given) and Video
 so if we think about someone making videos YouTube would be the first place to search and searching 
 `CRAZY I WAS CRAZY ONCE` on YouTube we find many videos and one of them from a very old channel (15 yrs to be precise)
 and the channel also belongs to someone called `Scarlet Grunt` 


 
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/4f8c6fd0-b1d3-4d6f-9f91-d014039331a7)
on watching the video and reading the `newest` comments (also a clue ffrom the question)



![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/39fa3723-f648-436e-98ba-8c0ef586c616)
we can see that a comment by the user `@user-gb1pg8es1j` who has commented the flag.


![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/899d4fef-7bf7-4fd9-bd9a-65f57c1450d4)



 > Flag : pbCTF{i_was_crazy_ONC3}
