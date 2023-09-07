# JWT blunder

> To organize the pbCTF event, we sought John's expertise to set up the website's authentication. However, there was a little hiccup in the way he handled the JWT token. Here's what happened:

> When you send a GET request to https://jwt-jjsh.onrender.com/auth, it gives you an important key, like a secret code.<br/>
> Now, when you send a POST request to the same place, using the same information, something unexpected occurs. If you're recognized as the admin, it spills out the flag! Sounds pretty interesting, right?<br/>
> Flag Format : pbCTF{[a-zA-Z0-9]}

# Solution

On a normal `GET` request to https://jwt-jjsh.onrender.com/auth, we will get this JSON 
```json
{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsInNpZ25hdHVyZSI6IjVlYmUyMjk0ZWNkMGUwZjA4ZWFiNzY5MGQyYTZlZTY5IiwiZXhwIjoxNjk0MDIwMzA1fQ.zXzEX8JCFDYmKFgrAf2kxHRodGga_gpxF7izR8Paz3U","token_type":"bearer"}
```

The access_token is a [JWT Token](https://en.wikipedia.org/wiki/JSON_Web_Token). We can go paste this token on the https://jwt.io/ website.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/9d2cbac8-4dc3-4648-8e18-cb833d7a2252)

You see the role is `user` and if you change it to `admin` and do a `POST` request to https://jwt-jjsh.onrender.com/auth you will get an invalid token message because the signature is invalid.
In the above image, we see there is a signature in the payload.

```
"signature": "5ebe2294ecd0e0f08eab7690d2a6ee69"
```

`5ebe2294ecd0e0f08eab7690d2a6ee69` is an MD5 hash that when decoded gets `secret`

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/1e49fccc-568b-487d-a671-2cc96319f8fe)

Finally, change the role from `user` to `admin`. Additionally, put the `secret` in the signature.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/c9c23145-679d-4100-8d58-a82f7ed0e03f)

This is a valid token now, Replace the old token with the new token and do a `POST` request to the https://jwt-jjsh.onrender.com/auth link and you will get the flag

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/204b19bc-2ec1-49b7-b8f0-9761c9a96bb8)

> Flag: pbCTF{y0u_4re_adm1n}

