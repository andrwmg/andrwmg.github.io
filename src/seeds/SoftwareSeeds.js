import rpgimage from '../images/rpgImage.png'
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

const websites = [
    {
        wide: false,
        src: [v2],
        title: 'Tesla Mart',
        body: ['The Tesla Mart CRUD webapp was built using React for the frontend framework, while Node and MongoDB were used for the backend. All RESTful routes are completed using Express. This was an individual effort that represents the culmination of two bootcamps and individual research.',
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
        wide: true,
        src: [rpgimage],
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
    },

    // {
    //     wide: false,
    //     src: [v1],
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