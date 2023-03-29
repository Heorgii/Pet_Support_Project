# Project Pet Support

The final project for the **React.Js and Node.Js** course of Full Stack
Developer students (IT school **GoIT**).

## Developers

- [Heorgii Rushchak](https://github.com/Heorgii)
- [Aleksandr Kadulin](https://github.com/NilKad)
- [Pavel Lesovoy](https://github.com/PavelLesovoy)
- [Julia Golban](https://github.com/JuliaGolban)
- [Ivan Bokhvalov](https://github.com/bokhvalov)
- [Ihor Malyuga](https://github.com/IhorMal)
- [Rudenko Serhii](https://github.com/rudenkoserhii)
- [Yurii Senenko](https://github.com/YuriiSenenko)
- [Vladislav Popov](https://github.com/StudentVlad5)
- [Roman Kashirin](https://github.com/RomanKashyrin)
- [Roman Vikulov](https://github.com/RomanVikulov)
- [Yaroslav Ostrovskiy](https://github.com/ReddenUA)

# Project preparation

## Technical task

### SharedLayout

The component renders to the "/" route. Contains a Header and wraps nested
routes with their corresponding pages

### Header

The Header component renders:

- Logo
- Navigation with components:
  - Nav - general navigation
  - UserNav - navigation for an AUTHORIZED user
  - AuthNav - navigation for UNAUTHORIZED user

It is necessary to implement a navigation block with the following routes:

- /news - public unlimited, redirects to NewsPage,
- /notices - public unlimited, redirects to NoticesPage
- /friends - public unlimited, redirects to OurFriendsPage On tablets and mobile
  versions, the component must be displayed in the burger menu A component that
  displays an app logo redirects to "/"

### AuthNav

The component renders a navigation block with routes:

- /register - public-restricted, redirects to RegisterPage
- /login - public-restricted, redirects to LoginPage

### UserNav

The component renders a navigation block with routes: - /user - private,
redirects to the UserPage page

### Registration

The component contains a form with the first part of the form fields and the
Next button and the Login navigation element the Next button - activates the
check for the validity of the information entered by the user. If they are
valid, the form displays the next part of the form fields, as well as the
Register and Back buttons. If the user enters invalid values, display this to
him in the form of a message the Back button - returns the user to the previous
fields of the form, filled with information that the user entered before the
Register button - activates a check for the validity of the information entered
by the user. If they are valid - registers the user. If the user enters invalid
values, display this to him in the form of a message Login navigation element -
redirects the user to the LoginPage All form fields are validated and
appropriate information is displayed to the user if the entered value is invalid
After registration, the user should be redirected to the UserPage. If a
registration error was received from the backend, the user must display the
relevant information and form of notification

### Login

The component is rendered via the /login route The login page contains an
AuthForm component The component contains a form with login fields and a Login
button and a Register navigation element the Login button - activates the check
for the validity of the information entered by the user. If they are valid -
sends a request to the backend regarding user authorization. If the user enters
invalid values, display this to him in the form of a message the Register
navigation element - redirects the user to the RegisterPage All fields of the
form are validated and display the appropriate information to the user if the
entered value is not valid After authorization, the user should be redirected to
the UserPage. If an authorization error was received from the backend, the user
must display the relevant information and form of notification

### Our Friends

The component renders to the /friends route Receives data from the backend and
displays a list of contact information about partners Clicking on the element
with working hours should open a window with a list of working hours. Elements
with contact information (address, email, phone) should be implemented in the
form of links with the addition of the :hover effect. Clicking on a link with an
address should redirect the user to a resource with a map in a separate browser
tab

### News

The component renders to the /news route The render component:

- field for searching news by keyword
- a list of news received from the backend If the search field is full, instead
  of the icon with a magnifying glass, a button with a cross icon should appear,
  clicking on which clears the search field. The search (filtering) of news by
  the content of the keyword in the news title takes place by submission. News
  should be sorted by date, new news at the beginning of the list. Click on the
  ReadMore link on the news card to redirect the user to the news resource on a
  separate browser tab

### Notices/Find Pet

The component renders to the /notices/:categoryName route The component renders:

- NoticesSearch search form
- NoticesCategoriesNav navigation block
- list of announcements NoticesCategoriesList
- a button to open a modal for creating an AddNoticeButton announcement During
  the first login to the page, the user should be redirected to the route
  /notices/sell and a list of sales announcements should be rendered

### NoticesSearch

The component renders a field for searching (filtering) the ad in the category
by the content of the keyword in the ad title. If the search field is full,
instead of the icon with a magnifying glass, a button with a cross icon should
appear, after clicking on which, the search field is cleared. The search
(filtering) of news by the content of the keyword in the news title takes place
by submission.

### NoticesCategoriesNav

The component renders a navigation block with routes:

- /notices/sell - opens the NoticesCategoryList component on the page with a
  list of sales announcements
- /notices/lost-found - opens the NoticesCategoryList component on the page with
  a list of found/searched announcements
- /notices/for-free - opens the NoticesCategoryList component on the page with a
  list of free announcements

### NoticesCategoriesList

The component renders a list of all announcements of the corresponding
category - NoticeCategoryItem, data on which it receives from the backend

### NoticeCategoryItem

The component renders an ad list element, a single ad card with a heart icon
(AddToFavorite) and LearnMore buttons Click on:

- heart icons (AddToFavorite):
- if the user is AUTHORIZED - depending on whether the corresponding ad is added
  to the favorites, the user adds or removes the ad from the favorites by
  clicking
- if the user is UNAUTHORIZED, a notification type message should be displayed
  to the user with information that the user needs to be authorized to use this
  functionality
- LearnMore - opens a modal to the user with a detailed description of this
  announcement - NoticeModal

### ModalNotice

The component will render a modal window with the full description of the
corresponding ad and the AddToFavorite and Contact components Elements with
contact information (e-mail, phone) of the author of the ad must be implemented
in the form of a link with the addition of the :hover effect.  
Click the AddToFavorite button:

- if the user is AUTHORIZED - depending on whether the corresponding ad is added
  to favorites, by clicking the user adds the ad to favorites or removes them
  from them
- if the user is UNAUTHORIZED, the user should display a message like the
  message that the user needs to be authorized to use this function The Contact
  button must be implemented as a link, when clicking on which the user must be
  redirected to a mobile device to make a phone call to the number of the user
  who created the ad The modal should be closed by the button to close the
  modal, by backdrop, and also by Escape

### AddNoticeButton

The component renders a button. For an AUTHORIZED user, clicking the button
opens the AddNoticeModal component For an UNAUTHORIZED user, clicking on the
button displays a notification type message with information that authorization
is required to use this functionality

### For an authorized user

### NoticesCategoriesNav

The component renders a navigation block with routes:

- /notices/favorite - opens the NoticesCategoryList component on the page with a
  list of announcements added to favorites
- /notices/own - opens the NoticesCategoryList component on the page with a list
  of announcements created by the user

### ModalNotice

The component renders a button to remove the ad if this ad was created by this
user. Clicking on the button removes the add

### ModalAddNotice

The component renders a modal to create a new ad with the first part of the form
fields and Next and Cancel buttons.

- the Cancel button should close the modal window. Also, the window must be
  closed modally by clicking on the close button of the modal, clicking on the
  backdrop, and also clicking on Escape
- the Next button - activates the check for the validity of the entered user
  information. If they are valid, display the next part of the form fields in
  the composition, as well as the Back and Done buttons. If users enter invalid
  values, display this to them in the form of a message
- the Back button - returns the user to the previous field of the form, filled
  with information that the user entered before
- the Done button - activates a check for the validity of the entered user
  information. If they are valid - sends a request to the backend to create an
  ad. If users enter invalid values, display this to them in the form of a
  message All fields of the form are mandatory After successfully creating a
  notice, the modal window should be closed and the user redirected to
  /notices/own. If an error was received from the backend when creating an ad -
  the user must display the relevant information and the form of the
  notification

### User/Profile

The component renders to the /user route The component renders a page with
UserData, Logout, and PetsData components. The UserData and Logout components
must be implemented in a shared container.

### UserData

The component renders the user's contact information in UserDataItem fields with
the ability to edit the data in the fields

### UserDataItem

The component renders an element that displays user data and a button for
editing that data. A click on the edit button renders an input field filled with
data from the element at the location of the given element, and a button for
sending the data entered into the input field at the location of the edit
button. Only one field can be in the editing state, all other fields are not
available for editing at this time

### Logout

The component displays a button to exit the user from the account request

### PetsData

The component renders a button for adding a card with an animal and a list of
corresponding cards - PetsList A click on the button opens a modal with a form
for creating an animal card - ModalAddsPet

### ModalAddsPet

The component renders a modal to create a card with data about the user's animal
with the first part of the form fields and Cancel and Next buttons.

- the Cancel button should close the modal window. Also, the window should be
  closed modally by clicking on the modal close button, clicking on Backdrop,
  and also clicking on Escape
- the Next button - activates the check for the validity of the information
  entered by the user. If they are valid - displays the next part of the form
  fields in the form, as well as the Back and Done buttons. If the user enters
  invalid values, display this to him in the form of a message
- the Back button - returns the user to the previous fields of the form, filled
  with information that the user entered before
- button Done - activates the check for the validity of the information entered
  by the user. If they are valid - sends a request to the backend to create a
  card with data about the user's animal. If the user enters invalid values,
  display this to him in the form of a message All fields of the form are
  mandatory After the successful creation of the card, the modal window should
  close, and the user will be presented with up-to-date information about his
  animals. If an error was received from the backend when creating a card - the
  user must display the relevant information and a notification form

### PetsList

The component renders cards with a description of the animal. The card has a
delete button.
