import { blue, deepPurple, orange, red, teal, yellow } from "material-ui-colors"
import profile from './ProfileTransparent.png'
import messages from './MessagesTransparent.png'
import listings from './ListingsTransparent.png'
import details from './DetailsTransparent.png'
import newForm from './NewTransparent.png'
import edit from './EditTransparent.png'

const teslaMartV2 = [{
    imageUrl: 'https://res.cloudinary.com/deuft4auk/image/upload/v1671405453/Personal%20Website/cray_arrange_s8krcq.png',
    heading: 'Overview', 
    text: [

        'The Tesla Mart V2 CRUD webapp was built using React for the frontend framework and Node for the backend. All RESTful routes are completed using Express with a MongoDB database. This was an individual effort that represents the culmination of two bootcamps and hundreds of hours of research. Building this webapp was a great learning experience and I am very proud of the result.',

        'Features that I have not yet added include:',

        'Reset password email',
        'Multiple selections on a filter'
        ,
        'Listing status',
        'Comment replies',
        "‘My Listings’ page",
        "‘Favorites’ page'",

        'If you have any feedback, please feel free to contact me. I am open to all criticism and look forward to resolving any issues through continued learning.'

    ]
},

{
    imageUrl: profile,
    background: orange[100],
    color: orange[800],
    heading: 'Profile', 
    text: [

        "Tesla Mart’s user authentication system is built on PassportJS. When a new user registers for an account, they input their email, username, and a password. They can also select a profile picture. After selecting the submit button, the new user’s password is hashed with a salt, and the user is added to the MongoDB database.",

        "The user profile picture defaults as the first letter of their username over a randomly generated background color. If the user adds an image during registration or through the Profile screen, that image will appear instead. This is visible in the navbar, messages they send, and comments they leave."

    ]
},

{
    imageUrl: messages,
    background: blue[50],
    color: blue[700],
    heading: 'Messaging', 
    text: [

        "The user-to-user messaging feature was built from scratch. Each user model has an attribute that contains his/her messages.",

        "When a user sends a message to the listing author, that message has body, to, and from attibutes. It is added to the messages attribute of both the sender and the recipient's user model.",

        "Upon opening the messages screen, a list of all unique contacts is created. Conversations are built from the messages who's to or from attribute is equal to a unique contact, and the conversation list is made up of the most recent message in each of those conversations.",

        "When a conversation is selected from the conversation list, the conversation is presented in a familiar fashion, though the automatic scrolling is a work in progress."

    ]
},


{
    imageUrl: listings,
    background: red[50],
    color: red[800],
    heading: 'Listings', 
    text: [

        "When entering the Listings screen, an array of all the listings is grabbed from the MongoDB database and mapped over to present each listing as a card. All of the select components in the filter bar are off and the cards are sorted from lowest price to highest price by default.",

        "The filter bar is made up of one select component that is customized through props. If the user adds any filters, a button to remove all filters is visible to easily get view all of the listings again. The user can also sort the listings by price, mileage, and date added.",

        "The options of each filter are dynamic; for example, if you filter the listings to only show Model 3s, the list of options for the year filter are limited to only years that the Model 3 was produced. This is also the case for the trim and interior filter options.",

        "Selecting a listing card will take the user to that listing’s detail screen. The new listing button in the bottom right-hand corner will take the user to the new listing screen if they are logged in, or to the login screen if they are not."

    ]
},

{
    imageUrl: newForm,
    background: teal[50],
    color: teal[800],
    heading: "New Listing", 
    text: [

        "If a user is logged in and selects the new listing button, they will be taken to the new listing form. This form uses the same select component and dynamic options as the Listings screen’s filter bar. All of the fields are required (except the description and images sections), so the form will not submit without the user making selections and entering mileage, location and price.",

        "The location field utilizes autocomplete from the Google Maps API. When a user starts typing in the field, the API shows a list of suggested options. The user must select an option from the list to avoid GIGO. If the user leaves the field without selecting an option, the field changes back to the empty state and the form will not submit due to its required attribute.",

        "When images are selected, thumbnails of those images appear in the image upload section. These can be dragged and dropped to modify the order or deleted by selecting the button in the top right-hand corner of each thumbnail.",

        "When the form is submitted, the images are uploaded to a Cloudinary account, the returned data is added to the request body, and the listing is added to the MongoDB database. If no images are added, two default images are added based on the selected model."

    ]
},

{
    imageUrl: details,
    background: yellow[100],
    color: yellow[900],
    heading: "Listing Details", 
    text: [

        "The listing details screen is made up of a gallery of images, a list of the details and description, and a comments section. The gallery was designed from scratch and allows the user to see larger images of the vehicle. The details and comments sections are separated into tabs.",

        "If a user is logged in, they can leave a comment. If this occurs, the comment is added to the comments attribute of the listing model. The comment model itself has body and author attributes. A delete button on the comment is visible only to the author of that comment.",

        "All users will see a back button whether they are logged in or not. If a user is logged in, they will also see a Send Message button. This allows the user to send a message to the listing author. If the user viewing the listing is that listing’s author, they will see Edit and Delete buttons instead.",

        "The Edit button will take the user to the Edit Listing screen and the Delete button opens a modal that requires the user to confirm his/her intent to delete the listing."

    ]
},

{
    imageUrl: edit,
    background: deepPurple[50],
    color: deepPurple[800],
    heading: "Edit Listing", 
    text: [

        "When the listing edit button is selected by the author, the user is taken to the edit listing form. This uses the same component as the new listing form and is pre-populated with the information from the current listing.",

        "The user can change any of the fields with the same requirements as the new listing. Images can be added, deleted, and reordered in this screen as well. Upon submission, newly added images will be uploaded to Cloudinary, while existing images will not be reuploaded.",

        "When the changes are saved, the listing is found by its ID and the request body (containing only changes made) is used to update the listing in the MongoDB database. The user is then sent back to the listing page where the updated information is now shown."

    ]
}
]

export default teslaMartV2