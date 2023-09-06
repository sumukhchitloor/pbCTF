# Click Me

> The world of "File Hunt Enigma" beckons, challenging your keen perception. The sacred bytes of the executable with persistence whisper secrets held within a myriad of files.

# Solution

You have been provided with two types of files clickme.exe and click. These are two types of binary files that can be run in Windows and Linux resp. This solution is divided into 2 parts, solving it in both Windows and Linux. In addition to this, there is an alternative method.

## Window Solution
   
 The Windows Defender might be a pain while downloading the exe file, the only workaround, is to close the real-time protection while installing it. On successfully installing the executable file, as the title of the question suggests `Click Me`, so just click the file. 
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/a8c23944-444d-4dae-920c-bb7b2754fd53)

 We notice that this executable has created a file named `you`, On viewing the content of the file, we find this.
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/0fd3b80c-0701-4c96-a638-fdf67fbfba99)

 If you keep clicking the executable file multiple times, multiple files are created.
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/858f624e-12ab-4292-acd3-e94ecaa5e9ba)

 Files have been created in the order `you`,`found`,`something`,`in`,`these`,`files`. On viewing the file content we get the flag.
 ![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/ac31ca72-3f42-41f3-9ab0-2d17962159ab)

 It says The Flag: pbCTF{p3rsist4nt_1s_the_k3y}

> Flag : pbCTF{p3rsist4nt_1s_the_k3y}

## Linux Solution

- Run the following command after installing the binary file.

```bash
chmod +x clickme
```
- Run the file six times, as the title of the challenge suggests `Click Me`
```bash
for i in {1..6}; do ./clickme; done
```
- View the files created
  
![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/4a9cb9ac-5696-422b-b684-11d8eea9ae93)

- View the file content
  
![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/04ad82c5-b830-493d-b94f-b156ed5e293c)



> Flag : pbCTF{p3rsist4nt_1s_the_k3y}

## Alternative Method

If you force open the clickme.exe in any text editor and find the word `pb`, the flag will be seen along with some other garbage value.
![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/8865e9be-4a6a-4892-927d-fdc205c8bc05)
![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/667e88b8-a79e-4fbb-a287-d8f9a5a53ccc)

> Flag : pbCTF{p3rsist4nt_1s_the_k3y}
