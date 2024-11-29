# Book Review App

A simple React-based Book Review application that allows users to create, edit, and delete book reviews. The app also includes sorting functionalities for filtering reviews by date and rating.

## Features
* Create Review: Users can write a review for a book, including the book's name, author, rating, and their review.
* Edit Review: Users can edit their previously written reviews.
* Delete Review: Users can delete a review they no longer wish to keep.
* Sorting: Reviews can be sorted by:
      - Latest to Oldest
      - Oldest to Latest
      - Highest to Lowest Rating
      - Lowest to Highest Rating
* Context Menu: Each review card has a context menu to allow editing and deletion of reviews.

# Components

## ReviewForm
This component is used for writing or editing reviews. It includes input fields for the book name, author, rating, and the review itself.

### Props:

- isEditing (boolean): Whether the form is being used to edit an existing review.
- id (string): The unique ID of the review (used when editing or deleting).
- BookName (string): The name of the book for editing.
- BookAuthor (string): The name of the author for editing.
- Rating (number): The rating of the book (out of 5) for editing.
- Review (string): The review text for editing.
- date (string): The date the review was posted.
- onSubmit (function): Callback function to handle form submission.
- onClose (function): Callback function to handle closing the review form.

## ReviewTemplate
This component displays a single review. It shows the book name, author, rating, review text, and a context menu for editing or deleting the review.

### Props:

- id (string): The unique ID of the review.
- BookName (string): The name of the book.
- Author (string): The author of the book.
- Rating (number): The rating of the book (out of 5).
- date (string): The date when the review was posted.
- Review (string): The review text.
- onEdit (function): Callback function to handle review editing.

## MainPage
This component is the main page that holds all the reviews and provides the functionality to add, edit, and delete reviews. It also includes sorting options to filter the reviews based on the selected criteria (date or rating).

### Props:

- filter (string): The current filter for sorting reviews (values: "Latest", "Oldest", "Positive", "Negative").
  
## InputField, TextAreaField, StarSelections
These components are used for rendering various types of form inputs:

- InputField renders an input field for text-based input.
- TextAreaField renders a larger text area for reviews.
- StarSelections renders a rating system using stars that can be clicked to select a rating from 1 to 5.

## ContextMenuButton and MenuItem
These components are used to create the context menu for editing and deleting reviews. They allow for a responsive menu to appear when the user interacts with a review.

# Setup
To run this project locally, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/your-username/book-review-app.git
```

2. Navigate to the project folder:

```bash
cd book-review-app```

3. Install the required dependencies:

```bash
npm install
```

4.Start the development server:

```bash
npm start
```
Open http://localhost:3000 in your browser to view the application.

## Dependencies
* axios: Used for making API requests to fetch, add, update, and delete reviews.
* react: A JavaScript library for building user interfaces.
* react-dom: The DOM bindings for React.
* react-scripts: Provides scripts and configuration for React apps.

# API Endpoints
The app interacts with the following API endpoints:

- GET /reviews: Fetch all reviews.
- POST /reviews/add_review: Add a new review.
- PUT /reviews/update/:id: Update an existing review by ID.
- DELETE /reviews/delete/:id: Delete a review by ID.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
