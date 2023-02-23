import rpgimage from './rpgImage.png'
import v1 from './v1Cover-min.jpg'
import v2 from './Cover-min.jpg'
import rpgDetails from './RPGDetails'
import teslaMartV2 from './TeslamartDetails'

const websites = [
    {
        wide: false,
        src: [v2],
        title: 'Tesla Mart',
        body: ['Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 'The frontend was designed using React and MUI, while the backend was created using NodeJS, Express, and MongoDB.'],
        bullets: [
            'React',
            'JavaScript',
            'Node',
            'Express',
            'MongoDB'
        ],
        view: 'https://teslamartv2.herokuapp.com',
        details: teslaMartV2,
        github: 'https://github.com/andrwmg/teslamart',
    },

    {
        wide: true,
        src: [rpgimage],
        title: 'Simple RPG',
        body: ['To build this role-playing game (RPG), I designed the map in the Tiled app and the mechanics with vanilla JavaScript.', 'Use the arrow keys to move your character around the map and watch out for monsters in the grassy patch!'],
        bullets: [
            'Vanilla JavaScript',
        ],
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