# How to run the project?
There are 3 ways of run the project.

The first one: run the app in the browser that will open a chrome tab where you will see the app.

The second one: you can run the app with iOS in a simulator or real iPhone.

The third one: you can run the app in Android emulator or real android phone.

## Clone the project
Open your terminal and go to the folder where you want to clone the project, for this guide we will use Documents folder.
```bash
cd Documents

git clone https://github.com/AlexBuenrostro12/ionic-mobile-app.git
```
Once the project was cloned locally open the project folder.
```bash
cd ionic-mobile-app
```

## Checkout to the develop branch
Develop branch will be the branch where we will merge our changes.

```bash
git pull origin && git checkout develop
```
> **Important**: Any new branch should be born from develop.

## Install Ionic CLI
if you already have the Ionic CLI please skip this step.
```bash
npm install -g @ionic/cli
```

## Install dependencies
```bash
npm install
```

## Run app in Browser
```bash
ionic serve
```

## Run app in iOS
```bash
ionic cap sync && ionic cap open ios
```
> **Important**: You will need to install Xcode.

## Run app in Android
```bash
ionic cap sync && ionic cap open android
```
> **Important**: You will need to install Android Studio.