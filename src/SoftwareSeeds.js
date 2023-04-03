import rpgimage from './rpgImage.png'
import v1 from './v1Cover-min.jpg'
import v2 from './Cover-min.jpg'
import rpgDetails from './RPGDetails'
import teslaMartV2 from './TeslamartDetails'
import react from './react.png'
import html from './html.png'
import css from './css.png'
import javascript from './javascript.png'
import python from './python.png'
import mongodb from './mongodb.png'
import express from './express.png'
import node from './node.png'
import bootstrap from './bootstrap.png'
import mui from './mui.png'
import illustrator from './illustrator.png'
import photoshop from './photoshop.png'
import c from './c.png'

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

    {
        wide: false,
        src: [v1],
        title: 'Tesla Mart',
        bullets: [
            'HTML',
            'CSS',
            "JavaScript",
            'Bootstrap',
            'Node',
            'Express',
            'MongoDB'
        ],
        body: ['Tesla Mart was built following my first web dev bootcamp. Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 'The frontend was designed using HTML, CSS, Bootstrap, and JavaScript, while the backend was created using NodeJS, Express, and MongoDB.'],
        view: 'https://teslamart.herokuapp.com',
        details: '',
        github: ''
    }
]

export default websites