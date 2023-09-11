# PBCTF V1

## Good ol' Scarlet

> I received a message today from an old friend...he wan't the most sane person in the world.
> He used to say he wanted to make video and audio for a living.
> Well here is the audio he sent me can you help me find his message?
> I wonder what newest messages he has for me.
>
> Flag Format : pbCTF{[A-Za-z0-9]}
>



https://github.com/sumukhchitloor/pbCTF/assets/84336892/1b098db5-1277-461a-8563-166b43b12aee



>The audio here is in mp4 format convert it to .wav to use it (https://cloudconvert.com/mp4-to-wav). It was given in .wav format during the CTF hence no need to change the format over there.

 ## Solution



 First we see that the challenge is name `Good ol' Scarlet` is Scarlet the name of the old friend let's keep this as a clue and proceed.
 On listening to the audio file we can listen to a series of beeps (Which are dots and dashes).
 Thus concluding this is Morse Code, doing a simple google search we can use a website to decode this.
 https://morsecode.world/international/decoder/audio-decoder-adaptive.html This is one of them. 
 After we upload the file and decoded we get this message `CRAZY I WAS CRAZY ONCE`.


 
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/0fcdf16e-38a8-4d08-974e-c653888a1870)


 
 Once again reading the question we can see that the friend was into making Audio (which is given) and Video
 so if we think about someone making videos YouTube would be the first place to search and searching 
 `CRAZY I WAS CRAZY ONCE` on YouTube we find many videos and one of them from a very old channel (15 yrs to be precise)
 and the channel also belongs to someone called `Scarlet Grunt` 


 
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/1d209d19-3a22-4ad4-bd7b-83365fb55c8a)

on watching the video and reading the `newest` comments (also a clue from the question)



![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/2f34f904-55f8-472e-b903-18f4c12d5a67)

we can see that a comment by the user `@user-gb1pg8es1j` who has commented the flag.


![image](https://github.com/sumukhchitloor/pbCTF/assets/84336892/62a7b8fa-b627-48d7-8698-29832e6355f0)




 > Flag : pbCTF{i_was_crazy_ONC3}
