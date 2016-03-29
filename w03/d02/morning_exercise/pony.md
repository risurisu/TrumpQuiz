## :sparkles::sparkles: My Little Pony! :sparkles::sparkles:

Let's make that pony trot!

### Step 1: Boilerplate
* In the directory for today's morning exercise, set up your boilerplate:
  - `index.html`
  - `css/style.css`
  - `scripts/walking_pony.js`
*  In `index.html`, include a link to `style.css` and script tags that link to jQuery and `walking_pony.js`.

  - **Remember**: Order matters!
  - If `walking_pony.js` depends on jQuery, jQuery needs to be loaded up first!

### Step 2: HTML & CSS
In `index.html`:
* Create a `div` with the `id` of `pony`.
* In that `div`, create an `img` tag that has a source of
 http://dash.ponychan.net/chan/files/src/136167943291.gif
* Throw an `h1` tag in if you like.

In `style.css`:

The body should have the following properties:
* Set the `background` to
http://www.blenderjourney.com/wp-content/uploads/2012/01/final-50000particles.png
* The background should not repeat, and should cover the page.
* Set the width to `1280px`
* Set the height to `100%`
* Set the margin to `auto`
* Align the text to the `center`

The pony should have the following properties:
* Absolute positioning
* Set the width to `300px`
* Set the height to `300px`
* Set the top to `50%`

If you created an `h1`, style it however you like.

### Step 3: jQuery

Now the fun part! Let's make the pony trot.

Things to think about:
* You probably should write a function called `walkingPony` that is *called* when the document is ready.
* In `walkingPony` what properties of the pony need to change over time to make it trot?
* How can you use jQuery to change this?
* `Hint`: Try using `setInterval`!
