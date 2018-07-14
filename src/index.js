// Import Styles from node_modules
import "flickity/dist/flickity.css";
import "lightbox2/dist/css/lightbox.css";

// Import styles
import './sass/main.scss';

// Import javaScript Modules
import Navigation from './modules/Navigation';
import Flickity from 'flickity';
import jQuery from 'jquery';
import Lightbox2 from 'lightbox2';
import GoogleMap from './modules/GoogleMap';

// Instantiate Objects
new Navigation();
new GoogleMap();
new Flickity( '#carousel', {
  // options, defaults listed
  accessibility: true,
  // enable keyboard navigation, pressing left & right keys
  adaptiveHeight: false,
  // set carousel height to the selected slide
  autoPlay: 5000,
  // advances to the next cell
  // if true, default is 3 seconds
  // or set time between advances in milliseconds
  // i.e. `autoPlay: 1000` will advance every 1 second
  cellAlign: 'center',
  // alignment of cells, 'center', 'left', or 'right'
  // or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)
  cellSelector: undefined,
  // specify selector for cell elements
  contain: false,
  // will contain cells to container
  // so no excess scroll at beginning or end
  // has no effect if wrapAround is enabled
  draggable: '>1',
  // enables dragging & flicking
  // if at least 2 cells
  dragThreshold: 3,
  // number of pixels a user must scroll horizontally to start dragging
  // increase to allow more room for vertical scroll for touch devices
  freeScroll: false,
  // enables content to be freely scrolled and flicked
  // without aligning cells
  friction: 0.2,
  // smaller number = easier to flick farther
  groupCells: false,
  // group cells together in slides
  initialIndex: 0,
  // zero-based index of the initial selected cell
  lazyLoad: true,
  // enable lazy-loading images
  // set img data-flickity-lazyload="src.jpg"
  // set to number to load images adjacent cells
  percentPosition: true,
  // sets positioning in percent values, rather than pixels
  // Enable if items have percent widths
  // Disable if items have pixel widths, like images
  prevNextButtons: true,
  // creates and enables buttons to click to previous & next cells
  pageDots: true,
  // create and enable page dots
  resize: true,
  // listens to window resize events to adjust size & positions
  rightToLeft: false,
  // enables right-to-left layout
  setGallerySize: true,
  // sets the height of gallery
  // disable if gallery already has height set with CSS
  watchCSS: false,
  // watches the content of :after of the element
  // activates if #element:after { content: 'flickity' }
  wrapAround: true
  // at end of cells, wraps-around to first for infinite scrolling
});

Lightbox2.option({
  'fitImagesInViewport': true,
  'positionFromTop': 200
})
