import { blue, red } from "material-ui-colors"
import rpg1 from './rpg1.png'
import rpg2 from './rpg2.png'

const rpgDetails = [

{
    imageUrl: rpg1,
    background: blue[50],
    color: blue[700],
    heading: 'Overview', 
    text: [

        "Use the arrow keys to move around the map. Collision blocks are continuously being listened for, so don't worry about falling off the island!",

        "You can walk behind the trees and fences, up the stairs to the plateau, and onto the dock to look out over the sea.",

        "I would like to add boat functionality in the future to allow the user to travel to different islands across the map!"

    ]
},


{
    imageUrl: rpg2,
    background: red[50],
    color: red[800],
    heading: 'Battle', 
    text: [

        "Take a stroll through the grassy patch and you may encounter a monster. This will initiate the battle sequence where you can use your monster to protect yourself!",

        "Your monster and the enemy each have their own unique attacks. The enemy selects one of their attacks at random, so be careful!",

        "Once you deplete all of the enemy's health (or you fail and your monster dies), the battle sequence ends, your monster's health is restored, and you continue to explore the island."

    ]
}
]

export default rpgDetails