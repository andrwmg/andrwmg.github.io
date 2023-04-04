import { blue, deepPurple, orange, red, teal, yellow } from "material-ui-colors"
import profile from './ProfileTrimmed.png'
import messages from './MessagesTrimmed.png'
import listings from './ListingsTrimmed.png'
import details from './DetailsTrimmed.png'
import newForm from './NewTrimmed.png'
import edit from './EditTrimmed.png'

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

        "Tesla Mart’s user authentication is built on PassportJS. When a new user registers for an account, they input their email, username, and a password. They can also select a profile picture. On submission, the new user’s password is hashed, a salt is added, and the user is stored in the database.",

        "The user profile picture defaults as the first letter of their username over a randomly generated background color. If the user adds an image during registration or through the Profile screen, that image will appear instead. This is visible in the navbar, messages they send, and comments they leave."

    ]
},

{
    imageUrl: messages,
    background: '#e3f2fd' || blue[50],
    color: '#1976d2' || blue[700],
    heading: 'Messaging', 
    text: [

        "The user-to-user messaging feature was built from scratch. Each user model has an attribute that contains his/her messages. When a user sends a message to the listing author, it is added to the messages attribute of both the sender and the recipient's user model.",

        "Upon opening the messages screen, a list of all unique contacts is created. Conversations are built from the messages who's to or from attribute is equal to a unique contact, and the conversation list is made up of the most recent message in each conversation.",

        "When a conversation is selected from the conversation list, the conversation is presented in a familiar fashion, though the automatic scrolling is a work in progress."

    ]
},


{
    imageUrl: listings,
    background: '#ffebee' || red[50],
    color: '#c62828' || red[800],
    heading: 'Listings', 
    text: [

        "When listings screen is rendered, an array of all the listings is grabbed from the database and mapped over to present each listing as a card. All of the select components in the filter bar are off and the cards are sorted from lowest price to highest price by default.",

        "The filter bar is made up of one select component that is customized through props. If the user adds any filters, a button to remove all filters is visible to easily get view all of the listings again. The user can also sort the listings by price, mileage, and date added.",

        "The options of each filter are dynamic; for example, if you filter the listings to only show Model 3s, the list of options for the year filter are limited to only years that the Model 3 was produced.",

        "Selecting a listing card will take the user to that listing’s detail screen. The new listing button in the bottom right-hand corner will take the user to the new listing screen if they are logged in, or to the login screen if they are not."

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

        "When the form is submitted, the images are uploaded to a Cloudinary account, the returned data is added to the request body, and the listing is added to the MongoDB database. Default images are added if no images are uploaded."
    ]
},

{
    imageUrl: details,
    background: '#fff9c4' || yellow[100],
    color: '#f57f17' || yellow[900],
    heading: "Listing Details", 
    text: [

        "The listing details screen is made up of a gallery of images, a list of the details and description, and a comments section. The gallery was designed from scratch and allows the user to see larger images of the vehicle. The details and comments sections are separated into tabs.",

        "If a logged in user leaves a comment, the comment is added to the comments attribute of the listing model. A delete button on the comment is visible only to the author of that comment.",

        "All users will see a back button whether they are logged in or not. If a user is logged in, they will also see a Send Message button to send a message to the listing author. If the user viewing the listing is that listing’s author, they will see Edit and Delete buttons instead.",

        "The Edit button will take the user to the edit listing screen and the delete button opens a modal that requires the user to confirm deletion."

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