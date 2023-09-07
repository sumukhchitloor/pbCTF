# Registration Portal

> Your mission is to access a registration portal set up by the pbCTF administrator. This portal generates a PDF with important user credentials. Your objective is to extract these credentials and discover the hidden flag. However, there's a catch: the admin consistently forgets the credentials and has created an endpoint to retrieve them. To make things more challenging, the admin always accesses this endpoint on a specific machine where  https://pbctf.tech/ is deployed. Can you find the flag in this scenario?<br/>
>Link: https://registration-portal.onrender.com/<br/>
> Flag Format : pbCTF{[a-zA-Z0-9]}

# Solution

The link opens a registration portal, which redirects you to a welcome page and there is a download pdf button. If you have access to the admin account of the pbCTF you will get the flag.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/d7ce2a35-7192-4d8a-a837-bd76d107771b)

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/e41ec54a-b3a9-4593-b8f4-3544b6cac022)

The PDF has some redacted text.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/e2a9998d-f62f-42ee-afac-4f2c1c82c21b)

In the welcome page, there is a static folder in the sources. Where in `styles.css` file there is an endpoint.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/5a7556bd-08ee-4113-8ccd-83f28f098296)

If you remember `admin always accesses this endpoint on a specific machine where  https://pbctf.tech/ is deployed` . This gives us a hint the IP could be the machine `https://pbctf.tech/` is deployed. To find the IP address we will use `nslookup tool`.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/4050a732-753c-4f5d-95e7-e172320df317)

Use any of the ip address `72.67.175.17` or `104.21.64.32` in the endpoint `/iforgotpassword?ip=`

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/b53d8ce9-0b7b-4e96-ba3e-c03ddca4a93f)

In the above image we get the admin username and password. Here is the catch the password is in Base64. If you decode it, you will give get `pbctfadmin`. Now we have the username and the password of the admin, but the registration page also asks for the email ID. As the question states the `registration portal set up by the pbCTF administrator`, the emails you received from us during the registration process were from `admin@pbctf.tech`.
Now if you register with these credentials in the portal.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/b83b4a89-0636-405c-a534-d7bfca380dac)

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/084a9ef2-8ead-4c82-b424-4ad75291a518)

Now check the PDF.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/1a31b615-e1a2-4c6e-bf02-d72cec8e68ee)

The username and password are redacted here. If you want to see the content behind it then just select all the text by pressing `Ctrl+A` and copy with `Ctrl+C` and paste in the notepad. You will find the password having the flag.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/360ae42f-e1fe-485f-87a8-ef369f77b423)

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/e970e011-eabe-483c-84b8-47d4170d5cbc)

> Flag : pbCTF{Y0u_c4n_r34d_th1s}
