# Dayananda Sagar College of Engineering Camera Connection

> The college has a page that's supposed to show a live preview of the 26 cameras in the alumni section, but it seems to be having trouble. Your mission is to find the elusive IP address hidden in the link and unlock the flag along with the website path that led you there. Keep your eyes peeled and use your Google-fu skills to track down the IP address.

> Eg: If the ip address is 1.1.1.1 and website link that led you there is www.abc.com/display/preview ,then the flag will be pbCTF{1.1.1.1_display_preview} <br/>
> Flag Format : pbCTF{[a-zA-Z0-9]}

# Solution

You need to find a page that shows a live preview of 26 cameras in the DSCE website and it also mentions using Google-Fu in the alumni section
> Google-fu (uncountable) (informal) Skill in using search engines (especially Google) to quickly find useful information on the Internet. quotations

To find the desired website with the IP address, we can normally Google search and find the answer, but there is another way to find it quicker, using Google-Fu/Google Dorks. 

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/aa64aa07-3365-4b16-a526-ff0eb3c236c0)

```text
-----------------------
Break down of the query
------------------------

site:dsce.edu.in: This operator instructs Google to restrict the search to a specific website, in this case, dsce.edu.in. It ensures that search results will only come from this particular domain.

intitle:video: This operator tells Google to look for web pages where the word "video" appears in the title of the page. It helps filter results to show pages that are likely related to videos in some way.

inurl:alumni: This operator instructs Google to look for web pages where the word "alumni" appears in the URL of the page. It helps narrow down results to pages that are likely related to the alumni section of the website.
```
On clicking the link we see a URL that has the ip `172.25.30.204`

![image](https://github.com/sumukhchitloor/pbCTF/assets/76547134/bfcde16a-bbf0-42ed-8916-e94ba905984b)

> Flag : pbCTF{172.25.30.204_alumni_91-main-menu-content_474-bideo-survillance}



