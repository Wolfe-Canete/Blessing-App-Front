# The Bite-Sized Book Of Itty Bitty Blessings
#### GA-SEI-Project-Four: Capstone
#### Tyler Wolfe | Joachim Canete

## Welcome
Welcome to **The Bite-Sized Book Of Itty Bitty Blessings (BoB)**. This we app is your personal place to discover and share itty bitty blessings that make the day a little bit better! The concept of this app was founded on a principle in mental health awareness known as [mindfulness](https://www.mindful.org/what-is-mindfulness/), a commonly practiced exercise in grounding one's self in both serenity and strife. Everyday people from all walks of life (strugglers, survivors, or people in pursuit of peace) practice mindfulness in all sorts of ways, but the most familiar approach is to recognize the blessings one has experienced, big and small. Through this app, you will be able to share your blessing(s) and what it means to you. Others will be able to view and share as well! **(BoB)** was developed by **Tyler Wolfe** and **Joachim Canete**.

## About
**(BoB)** was written in `React` and incorporates the usage of `JavaScript`, `React-Bootstrap`, and `CSS` with dependencies managed via `npm` . While `React` operates on the front-end, `PostgreSQL` operates in the back-end managed by `Django REST Framework` written in `Python`.

You can view the **(BoB)** [HERE](https://itty-bitty-blessings.herokuapp.com/)!

## Deployment
**(BoB)** Was deployed through [Heroku](https://www.heroku.com/), a publishing platform for interactive web-apps.

## Interaction
Upon visiting **(BoB)**, the user will be presented with the **Home Page** which features a little bit of information about what "mindfulness" is. In addition to short definition provided by *Oxford Languages* as well as more information on the purpose of being "mindful", there is a will also be offered a opportunity  to "**Share A Blessing**" at the bottom of the page, linking the user to the **Blessing Create Page**.

![blessed_home](https://i.imgur.com/b5zGHLr.png)

It is required that the user fill out all fields provided in order to successful submit a new blessing. Having done so, the user may click the "**Submit**" button which will then route the user to the **Blessing List Page**.

![blessed_form](https://i.imgur.com/fwRsojb.png)

 The most recent blessing will be shown at the top, as the **Blessing List Page** implements a "*Last In, First Out*" sorting method. From here the user may select any listed blessing to view and/or submit comments by clicking on the "**Share Your Thoughts**" link!

![blessed_list](https://i.imgur.com/IxLHLKU.png)

By selecting the "**Share Your Thoughts**" link, the user will be brought to the **Blessing Detail Page** which renders both the individual blessing itself as well as all affiliated comments posted to the blessing. The user will be allowed to enter in new comments which will be posted to the blessing upon refreshing the page. These comments are unique to the blessing they are commented onto and will not render onto other blessings. A blessing with no comments will only provide the option to add new comments. While there is an option to delete the present blessing, this feature is currently available to all users, and thus, will affect *all* users!

![blessed_details](https://i.imgur.com/t37zTI2.png)

At any point in time, the user may access the **Navigation Bar** located at the top of the screen. The **Navigation Bar** will allow the user to choose between creating a new blessing, view all blessings, view a thorough and comprehensive list on available support provided by a plethora of mental-health resources, or view the about page featuring the creators of **(BoB)**! Should the user wish to return to the **Home Page**, they can click on the main title, which will then route them to the **Home Page**.

![blessed_navigation](https://i.imgur.com/E9hVQje.png)

## Development

**(BoB)**'s functionality was built to accomodate **full `CRUD`** functionality via **RESTful** services, allowing its users to _create_, _read_, _update_, and _delete_ information available in the web-app. using `React` to host the front-end components, a component hierarchy was mapped out to focus on allowing for the user's ease of use and navigation. Routing the user from any of the developed components with an ever-present **Navigation Bar** that provide access to all pages inbtween allowed for an approachable user experience.

![blessed_hierarchy](https://i.imgur.com/vmQvmi1.png)

_Back-end_ scaffolding was designed to provide the _front-end_ with **RESTful API** functionality. Utilizing `PostgreSQL` to create and store this information, API calls were made in the **Blessing List Page**, **Blessing Detail Page**, and **Blessing Edit Page** components to render consistent information for all users. The API is hosted via `Django REST Framework` for readibility and ease of use, which can be viewed [HERE](https://nameless-citadel-52825.herokuapp.com/blessings/)!

![blessed_framework](https://i.imgur.com/8SDWNKn.png)

## User Stories

- [x] As a user, I want to be able to view the blessings I and other users have written.
- [x] As a user, I want to be able to view the comments I have made on other people's posts and vice versa.
- [x] As a user, I want to be able to comment on my and other people's posts and vice versa
- [x] As a user, I want to be able to find resources on what mindfulness is.
- [x] As a user, I want to navigate my collection of blessing with ease.
- [x] As a user, I want to be able to comfortably access and view these blessing from my phone.
- [x] As a user, as a user, I want to be able to comment on my and other people's comments and vice versa
