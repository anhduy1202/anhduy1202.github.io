import justListIt from './images/job-filter.jpg';
import faqCard from './images/faq.jpg';
import Rocketto from './images/rocketto.jpg';
import betterttt from './images/betterttt.jpg';
import splitTip from './images/tipsplit.jpg';
import dictionary from './images/dictionary.jpg';
import jsIcon from './icon/js-icon-mobile.svg';
import reactIcon from './icon/React-icon-mobile.svg';
import htmlIcon from './icon/html-icon-mobile.svg';
import cssIcon from './icon/css-icon-mobile.svg';
import sassIcon from './icon/sass-icon-mobile.svg';
import firebaseIcon from './icon/firebase.svg';
import socketioIcon from './icon/socketio.svg';

export const projects = [

    {
        id: 1,
        name: "Better Tic Tac Toe",
        image: betterttt,
        languages: [reactIcon, sassIcon, firebaseIcon, socketioIcon, jsIcon],
        type: "fullstack",
        content: "A multiplayer online tic-tac-toe game that user can create rooms, join rooms through ID, find & join other rooms in real-time ",
        link: "https://betterttt.com/"
    },
    {
        id: 2,
        name: "Your Dictionary",
        image: dictionary,
        languages: [reactIcon, htmlIcon, cssIcon, jsIcon],
        type: "frontend",
        content: "A dictionary web app that users can search words in 12 languages with dark mode included !!!",
        link: "https://your-dictionary.netlify.app/"

    },
    {
        id: 3,
        name: "Just List It",
        image: justListIt,
        languages: [reactIcon, htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A job listing website that ultizing the filter method to view the tags for the specific roles, languages, position,...",
        link: "https://job-filtering.netlify.app/"

    },
    {
        id: 4,
        name: "Split Your Tip",
        image: splitTip,
        languages:  [reactIcon, htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A tip splitting app that you can use to calculate your bill total and tips with your friends",
        link: "https://splityourtip.netlify.app"
    },
    {
        id: 5,
        name: "FAQ Card",
        image: faqCard,
        languages: [htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A simple frequently asked questions card that will automatically close if another question is clicked.",
        link: "https://faq-accordion-form.netlify.app/"

    },
    {
        id: 6,
        name: "Rocketto",
        image: Rocketto,
        languages: [htmlIcon, jsIcon],
        type: "frontend",
        content: "A funny game that is built entirely with vanilla Javascript with menu, scores, gameover,...",
        link: "https://rocketto.netlify.app"


    },
    





]