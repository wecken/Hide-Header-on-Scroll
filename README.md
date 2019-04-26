# Hide-Header-on-Scroll
This is a JS/jQuery function to hide your website header when scroll-down, and show it when scroll-up.
You need to load jQuery on your website to user this feature.

The script adds html class called "hide" to header element when scroll-down is performed.
And, it removes the class "hide" from header element when scroll-up is performed.
The script contains setTimeout so it doesn't judge the scroll direction every frames.
This timeout helps with Safari issue, where bouncing scroll makes unwanted header behavior. 
You can add CSS as example below to hide your header.

//Example
header.hide {
  top: -53px; //Height of your header
  transition-duration: 0.2; //Duration of the transition
}
