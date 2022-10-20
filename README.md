# MidJourney Javascript Scraper
## What is this?
This is the old javascript file I've used in the past to scrape contents from MidJourney's gallery [https://www.midjourney.com/app/](https://www.midjourney.com/app/)

## How do I use this?
To use, you should first goto the gallery, make sure you are signed in then goto the community feed and pick the sorting method you'd like (hot, new, top etc.)
Then scroll to the bottom of the page (it isn't infinite) or as far as you'd like.
Open up the debugging console in chrome by right clicking anywhere, pressing inspect element then pressing console at the top
Before loading the javascript file, you should download an autoclicker, any would work and set it to automatically click the screen around every second.
Finally load up the javascript file by pasting it in the console and then press Enter.

## Why use an autoclicker?
I couldn't figure out a better way to get prompts so I made this script press the copy prompt to clipboard button and then read the clipboard every time. However, after a few seconds of inactivity, chrome won't let you change the clipboard contents and an autoclicker helps you bypass this security feature.

## Limitations
The script won't stop working unless an alert popup is triggered or it crashes.
The script won't notify you when the scraping is finished
Since MidJourney have grown heavily, their gallery has became less stable and they have implemented some limitations like setting the scroll limit to 2500 images compared to the previous 10000+ limit meaning that you can only scrape 2500 images at most at a time.

### This is outdated work
I no longer use or maintain this script as it is much easier to use requests to call the MJ API directly and compile the results using your own methods.
The only reason I'd see someone use this over calling the API directly is to save a small number of images once without having to setup python or its dependencies.
