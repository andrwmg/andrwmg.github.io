import v1 from './v1Cover-min.jpg'
import v2 from './Cover-min.jpg'
import rpg from './rpgImage.png'


const websites = [
    {
        name: 'Tesla Mart V2',
        url: 'https://teslamartv2.herokuapp.com',
        detailsUrl: '/sw/portfolio/teslamartv2',
        github: 'https://github.com/andrwmg/teslamart',
        image: v2,
        description: "I rebuilt Tesla Mart from scratch after completing my second bootcamp to use React, MUI and modular components to make the code easier to follow and the web app more polished. New features include: profile pictures, reordering of listing images, messaging between users, and more!"
    },
    {
        name: 'Simple Role-Playing Game',
        url: 'https://basicrpgproject.herokuapp.com/',
        github: 'https://github.com/andrwmg/simplerpggame',
        image: rpg,
        description: 'In order to build this simple role-playing game (RPG), I learned how to use the Tiled app to design a map and vanilla JavaScript to implement the mechanics. Use the A, W, S, and D keys to "move" around the map and try not to get caught in the grassy patch (work in progress)!'
    },
    {
        name: 'Tesla Mart',
        url: 'https://teslamart.herokuapp.com',
        image: v1,
        description: "Tesla Mart was built following my first web dev bootcamp. Tesla Mart is a CRUD web app where current and future Tesla owners can buy and sell their vehicles. The frontend was designed using HTML, CSS, Bootstrap, and JavaScript, while the backend was created using NodeJS, Express, and MongoDB."
    }
]

export default websites