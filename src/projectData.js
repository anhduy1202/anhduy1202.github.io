import justListIt from './images/job-filter.jpg';
import faqCard from './images/faq.jpg';
import Rocketto from './images/rocketto.jpg';
import reviewSection from './images/review section.jpg';
import baseApparel from './images/baseapparel.jpg';
import splitTip from './images/tipsplit.jpg';
import dictionary from './images/dictionary.jpg';
import jsIcon from './icon/js-icon-mobile.svg';
import reactIcon from './icon/React-icon-mobile.svg';
import htmlIcon from './icon/html-icon-mobile.svg';
import cssIcon from './icon/css-icon-mobile.svg';
import sassIcon from './icon/sass-icon-mobile.svg';


export const projects = [

    {
        id: 1,
        name: "Your Dictionary",
        image: dictionary,
        languages: [reactIcon, htmlIcon, cssIcon, jsIcon],
        type: "frontend",
        content: "A dictionary web app that users can search words in 12 languages with dark mode included !!!",
        link: "https://your-dictionary.netlify.app/"

    },
    {
        id: 2,
        name: "Just List It",
        image: justListIt,
        languages: [reactIcon, htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A job listing website that ultizing the filter method to view the tags for the specific roles, languages, position,...",
        link: "https://job-filtering.netlify.app/"

    },
    {
        id: 3,
        name: "Split Your Tip",
        image: splitTip,
        languages:  [reactIcon, htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A tip splitting app that you can use to calculate your bill total and tips with your friends",
        link: "https://splityourtip.netlify.app"
    },
    {
        id: 4,
        name: "FAQ Card",
        image: faqCard,
        languages: [htmlIcon, sassIcon, jsIcon],
        type: "frontend",
        content: "A simple frequently asked questions card that will automatically close if another question is clicked.",
        link: "https://faq-accordion-form.netlify.app/"

    },
    {
        id: 5,
        name: "Rocketto",
        image: Rocketto,
        languages: [htmlIcon, jsIcon],
        type: "frontend",
        content: "A funny game that is built entirely with vanilla Javascript with menu, scores, gameover,...",
        link: "https://rocketto.netlify.app"


    },
    {
        id: 6,
        name: "Review Section",
        image: reviewSection,
        languages: [htmlIcon, cssIcon],
        type: "frontend",
        content: "A simple review section website that utilizes CSS Grid & CSS Flexbox to display the reviews.",
        link: "https://review-section-grid.netlify.app/"
    },

    {
        id: 7,
        name: "Base Apparel",
        image: baseApparel,
        languages: [htmlIcon, cssIcon, jsIcon],
        type: "frontend",
        content: "A simple landing page that has email verification feature to avoid invalid emails, untyped emails.",
        link: "https://apparel-email.netlify.app"

    },






]