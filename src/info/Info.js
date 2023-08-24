import self from "../img/profile.png"
import mock1 from "../img/project1.png"
import mock2 from "../img/project2.png"
import mock3 from "../img/project3.png"
import mock4 from "../img/project4.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Zar Hlei Sang",
    lastName: "",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Web Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Myanmar'
        },
        {
            emoji: "💼",
            text: "Web Developer"
        },
        {
            emoji: "📧",
            text: "zarhleisang96@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/BenRoSang",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/zar-hlei-sang-0aab93233",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Zar Hlei Sang. I'm a Web Developer for Google. I studied Technological University at Kalaymyo, I enjoy long walks on the beach, and I believe Technologies make life easier in daily life. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'nextjs', 'PHP', 'git', 'github', 'bootstrap', 'Jquery', 'html5', 'css3', 'tailwindcss'],
            exposedTo: ['nodejs', 'Laravel', 'Vue']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'Football',
            emoji: '⚽'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://chat-app-4e3a4.web.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/BenRoSang/chat-app", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://cryptoverse-blush.vercel.app",
            source: "https://github.com/BenRoSang/cryptoverse",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://ecommerce-front-seven-rho.vercel.app",
            source: "https://github.com/BenRoSang/ecommerce-front",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://ecommerce-admin-amber-two.vercel.app",
            // source: "https://github.com/paytonjewell",
            image: mock4,
            loginInfo: 'User Name: Admin, Password: nextauth'
        },
    ]
}