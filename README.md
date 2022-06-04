# Welcome to Lasagna Soup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the Site

This is a personal website that contains all of my drawings and comics. It was created using React.js, Bootstrap, and React Bootstrap.

To see the final product, travel to https://www.lasagnasoup.com.

The website is hosted on an Amazon EC2 instance using and Apache HTTP Server.

## Home

At https://www.lasagnasoup.com/home, users can learn about the site, myself, and see some of the latest posts.

## Drawings

At https://www.lasagnasoup.com/drawings, users can see a collection of all my drawings.

Drawings are displayed using react-masonry-css. This is a Masonry component for React created by Paul Collett. more information at https://www.npmjs.com/package/react-masonry-css.

Upon clicking on a drawing, users are redirected to At https://www.lasagnasoup.com/drawings/:drawingID, where :drawingID is a url parameter containing the name of the drawing that was clicked on. The requested drawing is displayed at full size along with a title/description and options to view the next and previous drawing in the gallery.

If the url parameter :drawingID does not contain the name of an existing drawing, users are redirected back to https://www.lasagnasoup.com/drawings.

## Comics

At https://www.lasagnasoup.com/comics, users can select one of my comics to read from.

Upon clicking on one of the comic thumbnails, users are redirected to At https://www.lasagnasoup.com/drawings/:comicID, where :comicID is a url parameter containing the name of the comic that was clicked on. The user is then given a new page where they can read the comic. 

If the url parameter :comicID does not contain the name of an existing drawing, users are redirected back to https://www.lasagnasoup.com/comics.