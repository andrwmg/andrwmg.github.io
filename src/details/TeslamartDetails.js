import { blue, deepPurple, orange, red, teal, yellow } from "material-ui-colors"
import profile from './Profile.png'
import messages from './Messages.png'
import listings from './Listings.png'
import details from './Details.png'
import newForm from './New.png'
import edit from './Edit.png'

const teslamartDetails = [
//     {
//     imageUrl: 'https://res.cloudinary.com/deuft4auk/image/upload/v1671405453/Personal%20Website/cray_arrange_s8krcq.png',
//     heading: 'Overview', 
//     text: [

//         'The Tesla Mart V2 CRUD webapp was built using React for the frontend framework and Node for the backend. All RESTful routes are completed using Express with a MongoDB database. This was an individual effort that represents the culmination of two bootcamps and hundreds of hours of research. Building this webapp was a great learning experience and I am very proud of the result.',

//         'Features that I have not yet added include:',

//         'Reset password email',
//         'Multiple selections on a filter'
//         ,
//         'Listing status',
//         'Comment replies',
//         "‘My Listings’ page",
//         "‘Favorites’ page'",

//         'If you have any feedback, please feel free to contact me. I am open to all criticism and look forward to resolving any issues through continued learning.'

//     ]
// },

{
    imageUrl: profile,
    background: '#ffe0b2' || orange[100],
    color: '#ef6c00' || orange[800],
    heading: 'Profile', 
    text: [

        "Tesla Mart’s user authentication is built on Express. On registration, email, username, password, and an optional profile picture are submitted. The new user’s password is hashed and the user is stored in the database.",

        "If no picture is uploaded, the user profile picture defaults as the first letter of their username over a randomly generated background color. This profile picture is visible in the navbar, messages they send, and comments they leave."

    ]
},

{
    imageUrl: messages,
    background: '#e3f2fd' || blue[50],
    color: '#1976d2' || blue[700],
    heading: 'Messaging', 
    text: [

        "The user-to-user messaging feature was built from scratch. Each user model has an inbox and outbox, which is used to populate a list of conversations with unique contacts and the most recent message in each conversation.",

        "When a conversation is selected from the conversation list, the messages with that contact are presented in a familiar fashion, though the automatic scrolling is a work in progress."

    ]
},


{
    imageUrl: listings,
    background: '#ffebee' || red[50],
    color: '#c62828' || red[800],
    heading: 'Listings', 
    text: [
        "When the user goes to the listings page, the listings are pulled from the database and presented as cards. All of the select components in the filter bar are off and the cards are sorted from lowest price to highest price by default.",

        "The filter drawer is made up of select inputs that are customized from one component through its props. If the user adds any filters, a button to remove all filters is visible. The user can also sort the listings by price, mileage, and date added.",

        "The options of each filter are dynamic; for example, if you filter the listings to only show Model 3s, the list of options for the year filter are limited to only years that the Model 3 was produced.",
    ]
},

{
    imageUrl: newForm,
    background: '#e0f2f1' || teal[50],
    color: '#00695c' || teal[800],
    heading: "New Listing", 
    text: [

        "If a user is logged in, the new listing button will take them to the new listing form, which uses the same select component and dynamic options as the listings screen’s filter bar. The form will not submit without the user adding the required inputs.",

        "The location field utilizes autocomplete from the Google Maps API. When a user starts typing in the field, the API shows a list of suggested options. The user must select an option from the list to avoid GIGO.",

        "When images are selected, thumbnails of those images appear in the image upload section. These can be dragged and dropped to modify the order or deleted by selecting the X button in the top right-hand corner of each thumbnail.",

        // "When the form is submitted, the images are uploaded to a Cloudinary account, the returned data is added to the request body, and the listing is added to the MongoDB database. Default images are added if no images are uploaded."
    ]
},

{
    imageUrl: details,
    background: '#fff9c4' || yellow[100],
    color: '#f57f17' || yellow[900],
    heading: "Listing Details", 
    text: [

        "The listing details screen is made up of a gallery of images, a list of the details, and a comments section. The gallery was designed from scratch and allows the user to see larger images of the vehicle.",

        "Users can leave comments if they are logged in. A delete button on the comment is visible only to the author of that comment.",

        "All users will see a back button above the gallery. If a user is logged in, they will also see a Send Message button to send a message to the listing author. If the user viewing the listing is that listing’s author, they will see Edit and Delete buttons instead.",
    ]
},

{
    imageUrl: edit,
    background: '#ede7f6' || deepPurple[50],
    color: '#4527a0' || deepPurple[800],
    heading: "Edit Listing", 
    text: [

        "When the author of a listing selects the edit button, the edit listing form is rendered. This uses the same component as the new listing form and is pre-populated with the information from the current listing.",

        "The user can change any of the fields with the same requirements as the new listing. Images can be added, deleted, and reordered in this screen as well. Upon submission, only newly added images will be uploaded to the Cloudinary account.",

        "When the changes are saved, the listing is found by its ID and the request body (containing only changes made) is used to update the listing in the database. The user is then sent back to the updated listing page."

    ]
}
]

export default teslamartDetails