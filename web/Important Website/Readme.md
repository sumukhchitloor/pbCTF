# Important Website

> One of Samrath's friends discovered that his **important-website** had been mysteriously removed, but they recall that an archived snapshot was created before its removal. Can you help samrath find the content of the wepage that was removed?

> Link: https://samrathsacharya.me/<br/>
> Flag Format: pbCTF{[a-zA-Z0-9]}

# Solution

In the challenge, there is a link that is provided and redirected to Samrath's Website. Nothing of interest in the website.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/d2edf378-b6dd-40a0-b7e4-8eb6ca7495b9)

If you read the question properly `important-website` is removed, so we check the URL: https://samrathsacharya.me/important-website

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/d5db1997-ae6b-4a48-b114-b9ad9c789767)

It is a 404 page, so this page doesn't exist, if you noticed, it is mentioned that `an archived snapshot was created before its removal`.
> [!NOTE]
> The web archive contains complete websites, web pages, and documents. These are referred to as "snapshots". One webpage may contain many different snapshots - instances of that page as it existed at different points in time.

To view an archived snapshot of any website, we go to [Wayback Machine](https://archive.org/web/) Website and search if any snapshot was taken related to this URL.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/b9d5c5b3-839e-4e0c-b62b-5dda21287de5)

There is a web snapshot taken on 22 August 2023. If we view that snapshot then we see the flag.

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/2aafee8c-1e2d-4d2d-96ef-ec488083f16e)

> Flag : pbCTF{Th1$I&C0f1d3zt/@l}
