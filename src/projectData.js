import Rocketto from './images/rocketto.jpg';
import betterttt from './images/betterttt.jpg';
import gitreadme from './images/gitreadme.jpg';
import dictionary from './images/dictionary.jpg';
import reddat from './images/reddat-desktop.jpg';
import fixIt from './images/fix-it-screenshot.png';
import leetbot from './images/leetbot.jpg';
import jsIcon from './icon/js-icon-mobile.svg';
import reactIcon from './icon/React-icon-mobile.svg';
import htmlIcon from './icon/html-icon-mobile.svg';
import cssIcon from './icon/css-icon-mobile.svg';
import sassIcon from './icon/sass-icon-mobile.svg';
import firebaseIcon from './icon/firebase.svg';
import socketioIcon from './icon/socketio.svg';
import nodeJS from './icon/nodejs.png';
import nodeJsIcon from './icon/nodejs.png';
import mongoDBIcon from './icon/mongodb.svg';



export const projects = [

    {
        id: 1,
        name: "Reddat",
        image: reddat,
        languages: [reactIcon, nodeJsIcon, mongoDBIcon, socketioIcon],
        type: "fullstack",
        content: "A social media mobile web app that based on Reddit UI with chat, follow, upvote, comment features",
        link: "https://reddat.vercel.app/landingpage"
    },
    {
        id: 2,
        name: "Better Tic Tac Toe",
        image: betterttt,
        languages: [reactIcon, sassIcon, firebaseIcon, socketioIcon, jsIcon],
        type: "web",
        content: "A multiplayer online tic-tac-toe game that user can create rooms, join rooms through ID, find & join other rooms in real-time ",
        link: "https://betterttt.com/"
    },
    {
        id: 3,
        name: "LeetBot",
        image: leetbot,
        languages: [nodeJS],
        type: "bot",
        content: "A Discord bot that send Leetcode questions by custom commands from users including difficulty + popularity ",
        link: "https://github.com/anhduy1202/LeetBot"
    },
    {
        id: 4,
        name: "Fix-It-Dude",
        image: fixIt,
        languages: [jsIcon],
        type: "game",
        content: "Game submission for FallTy 24hrs Game Jam hosted by CSUF Video Game Dev Club, built with Kaboom.js",
        link: "https://replit.com/@anhduy1202/Fix-it-Dude"
    },
    {
        id: 5,
        name: "Git Readme",
        image: gitreadme,
        languages: [reactIcon, htmlIcon, sassIcon, jsIcon],
        type: "web",
        content: "A website that helps you customize Github Readme easier by copy-pasting existing code",
        link: "https://gitmee.netlify.app/"

    },
    {
        id: 6,
        name: "Your Dictionary",
        image: dictionary,
        languages: [reactIcon, htmlIcon, cssIcon, jsIcon],
        type: "web",
        content: "A dictionary web app that users can search words in 12 languages with dark mode included !!!",
        link: "https://your-dictionary.netlify.app/"

    },
    {
        id: 7,
        name: "Rocketto",
        image: Rocketto,
        languages: [htmlIcon, jsIcon],
        type: "game",
        content: "A funny game that is built entirely with vanilla Javascript with menu, scores, gameover,...",
        link: "https://rocketto.netlify.app"
    },
    





]
