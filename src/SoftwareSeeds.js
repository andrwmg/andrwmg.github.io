import rpgimage from './rpgImage.png'
import v1 from './v1Cover-min.jpg'
import v2 from './Cover-min.jpg'

const websites = [
    {
        wide: false,
        src: [v2],
        title: 'Tesla Mart V2',
        body: ['Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles.', 'The frontend was designed using React and MUI, while the backend was created using NodeJS, Express, and MongoDB.'],
        bullets: [
            'React',
            'JavaScript',
            'Node',
            'Express',
            'MongoDB'
        ],
        view: 'https://teslamartv2.herokuapp.com',
        details: '/sw/portfolio/teslamartv2',
        github: 'https://github.com/andrwmg/teslamart',
    },

    {
        wide: true,
        src: [rpgimage],
        title: 'Simple Role-Playing Game',
        body: ['In order to build this simple role-playing game (RPG), I learned how to use the Tiled app to design a map and vanilla JavaScript to implement the mechanics.', 'Use the A,W,S,D keys to "move" around the map and try not to get caught in the grassy patch!'],
        bullets: [
            'Vanilla JavaScript',
        ],
        view: 'https://basicrpgproject.herokuapp.com/',
        details: '',
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