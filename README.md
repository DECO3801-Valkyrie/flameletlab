# FlameLetLab Mobile Application

This is the repository for FlameLetLab mobile application. The project uses Ionic Angular.


## Development

* Node >= 16 
* Ionic CLI

Install Ionic CLI first:

`npm install -g @ionic/cli`

If you just cloned the project run:

Install all the dependencies

`npm install` 

Run the dev server. This will give you live-reload as well

`ionic serve`

This is the command you have to run everytime you need to develop



## Helpful links

### Developer Documentation
#### The Angular Documentation

RTFM as the saying goes in IT. So please if you get stuck consult the angular documentation.
90% of the time what you need is probably on there.

[Google Angular Doc](https://angular.io/docs)

#### Don't Re-invent the Wheel Please!
If you are looking for some UI components, chances is that it's available on the Ionic documentation.
Check out this list of components and UI docs for Ionic:

[Ionic UI Components](https://ionicframework.com/docs/components)

### But how do I do X? 😕
Often times we will get stuck, but don't worry the internet is full of lots of helpful articles.
However, to make life easy we will use a few reference implementations to guide us.

#### Ionic Conference App

The ionic conference app is a full featured app built by the ionic team which includes many
mobile apps features such as a sidemenu, tabs, modals and many more. You can use it to understand how to structure
the project and also how to build pages.

The idea would be to look at how they have done things and try and replicate it in this codebase.

[Ionic Conference App](https://github.com/ionic-team/ionic-conference-app)

#### Matt Raible 21 Points App
This is a full application with API access via REST and is a good example to look at when working with services.
In Angular unlike React we don't need redux as state can easily be propagated through service providers.

This project shows how to implement services and how you can consume them in your pages.

It's a recommended example to look at because it uses Spring Boot as a backend. Which FlameletLab also uses.

[21 Points App](https://github.com/mraible/21-points/tree/main/src/main/webapp)
