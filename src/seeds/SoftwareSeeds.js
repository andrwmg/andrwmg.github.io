import rpgimage from '../images/rpgeez.png'
import v2 from '../images/Cover-min.jpg'
import rpgDetails from '../details/RPGDetails'
import teslaMartV2 from '../details/TeslamartDetails'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import node from '../images/node.png'
import mui from '../images/mui.png'
import careerpivot from '../images/careerpivot.png'
import teslamart from '../images/teslamart.png'
import teslamartDark from '../images/teslamartDark.png'
import spotifyles from '../images/spotifyles.png'
import kallaborative from '../images/kallaborative.png'


const websites = [
    {
        wide: false,
        light: [teslamart],
        dark: [teslamartDark],
        title: 'Tesla Mart',
        body: ['Tesla Mart is a CRUD webapp where Tesla owners can buy and sell their vehicles. The app includes user accounts, listings, comments, user-to-user messages, and more!'
        // was built using React for the frontend framework, while Node and MongoDB were used for the backend. All RESTful routes are completed using Express. This was an individual effort that represents the culmination of two bootcamps and individual research.',
            //     'Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 
            // 'The frontend was designed using React and MUI, while the backend was created using NodeJS, Express, and MongoDB.'
        ],
        bullets: [
            'Features that I have not yet added include:',
            'Reset password email',
            'Multiple selections on a filter',
            'Listing status',
            'Comment replies',
            "‘My Listings’ page",
            "‘Favorites’ page'",
        ],
        view: 'https://teslamartv2.herokuapp.com',
        chips: [react, mui, node, mongodb, express],
        details: teslaMartV2,
        github: 'https://github.com/andrwmg/teslamart',
    },
    {
        wide: false,
        light: [spotifyles],
        dark: [spotifyles],
        title: 'Spotifyles',
        body: ['Spotifyles utilizes the Spotify API to allow users to view the songs in their Spotify playlists and back them up to CSV files. The dashboard showcases user playlists similar to the Spotify app.',
            //     'Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 
            // 'The frontend was designed using React and MUI, while the baleckend was created using NodeJS, Express, and MongoDB.'
        ],
        bullets: [
            'Features that I have not yet added include:',
            'Reset password email',
            'Multiple selections on a filter',
            'Listing status',
            'Comment replies',
            "‘My Listings’ page",
            "‘Favorites’ page'",
        ],
        view: 'https://spotifyles.herokuapp.com',
        chips: [react, mui],
        details: null,
        github: 'https://github.com/andrwmg/spotifyles',
    },

    {
        wide: true,
        light: [kallaborative],
        dark: [kallaborative],
        title: 'Kallaborative Design',
        body: ['Kallaborative Design is a web dev freelancing company co-founded by myself and a UI/UX Product Designer. We are using this company as an opportunity to help the community and learn even more about our disciplines.'],
        bullets: [
            'HTML',
            'Vanilla JavaScript',
        ],
        chips: [react, mui],
        view: 'https://www.kallaborativedesign.io',
        details: null,
        github: 'https://github.com/andrwmg/kallaborative',
    },

    // {
    //     wide: true,
    //     light: [careerpivot],
    //     dark: [careerpivot],
    //     title: 'CareerPivot',
    //     body: ['CareerPivot is an ongoing callaboration between myself, a product designer, and a product manager. On completion, this site will be a community for people to share resources, job listings, and experiences pertaining to career transitioning.'],
    //     bullets: [
    //         'HTML',
    //         'Vanilla JavaScript',
    //     ],
    //     chips: [react, mui, node, mongodb, express],
    //     view: 'https://www.careerpivot.io',
    //     details: null,
    //     github: 'https://github.com/andrwmg/careerpivot',
    // },
    {
        wide: true,
        light: [rpgimage],
        dark: [rpgimage],
        title: 'Simple RPG',
        body: ['To build this role-playing game (RPG), I designed the map in the Tiled app and the mechanics with vanilla JavaScript. Use the arrow keys to move your character around the map and watch out for monsters in the grassy patch!'],
        bullets: [
            'HTML',
            'Vanilla JavaScript',
        ],
        chips: [html, css, javascript],
        view: 'https://basicrpgproject.herokuapp.com/',
        details: rpgDetails,
        github: 'https://github.com/andrwmg/simplerpggame',
    }

    // {
    //     wide: false,
    //     light: [v1],
    //     title: 'Tesla Mart',
    //     bullets: [
    //         'HTML',
    //         'CSS',
    //         "JavaScript",
    //         'Bootstrap',
    //         'Node',
    //         'Express',
    //         'MongoDB'
    //     ],
    //     body: ['Tesla Mart was built following my first web dev bootcamp. Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 'The frontend was designed using HTML, CSS, Bootstrap, and JavaScript, while the backend was created using NodeJS, Express, and MongoDB.'],
    //     view: 'https://teslamart.herokuapp.com',
    //     details: '',
    //     github: ''
    // }
]

export default websites