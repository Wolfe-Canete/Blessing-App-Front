# The Bite-Sized Book Of Itty Bitty Blessings
#### GA-SEI-Project-Four: Capstone
#### Tyler Wolfe | Joachim Canete

## Welcome
Welcome to **The Bite-Sized Book Of Itty Bitty Blessings (BoB)**. This we app is your personal place to discover and share itty bitty blessings that make the day a little bit better! The concept of this app was founded on a principle in mental health awareness known as [mindfulness](https://www.mindful.org/what-is-mindfulness/), a commonly practiced exercise in grounding one's self in both serenity and strife. Everyday people from all walks of life (strugglers, survivors, or people in pursuit of peace) practice mindfulness in all sorts of ways, but the most familiar approach is to recognize the blessings one has experienced, big and small. Through this app, you will be able to share your blessing(s) and what it means to you. Others will be able to view and share as well! **(BoB)** was developed by **Tyler Wolfe** and **Joachim Canete**.

## About
**(BoB)** was written in `React` and incorporates the usage of `JavaScript`, `React-Bootstrap`, and `CSS` with dependencies managed via `npm` . While `React` operates on the front-end, `PostgreSQL` operates in the back-end managed by `Django REST Framework` written in `Python`.

You can view the **(BoB)** [HERE]()!

## Deployment
**(BoB)** Was deployed through [Heroku](https://www.heroku.com/), a publishing platform for interactive web-apps.

## Interaction
Upon visiting **(BoB)**, the user will be presented with the **Home Page** which features a little bit of information about what "mindfulness" is. In addition to short definition provided by *Oxford Languages* as well as more information on the purpose of being "mindful", there is a will also be offered a opportunity  to "**Share A Blessing**" at the bottom of the page, linking the user to the **Blessing Create Page**.

![blessed_create]()

It is required that the user fill out all fields provided in order to successful submit a new blessing. Having done so, the user may click the "**Submit**" button which will then route the user to the **Blessing List Page**. The most recent blessing will be shown at the top, as the **Blessing List Page** implements a "Last In, First Out" sorting method. From here the user may select any listed blessing to view and/or submit comments by click on the "**Share Your Thoughts**" link!

![blessed_list]()

