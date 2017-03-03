#Welcome to the redhat.com font library!


## Development 

### Setup

1. Run `npm install`


### Adding new icons to the icon fonts

1. Drop the SVGs into the `src/iconfont/vectors/rh_icon` folder or the `src/iconfont/vectors/web_icon` folder.
2. Run `grunt` to update the font, or `grunt watcher` to update and preview.
    - Note: the SVG files are parsed alphabetically, so if you add new icons somewhere besides the bottom of the list, they will cause unicode values to change on existing icons that are alphabetically lower in the list.


### Creating a tag

*  `git checkout master && latest && git checkout -b temp && grunt && git add dist -f`
*  `git commit -m "rh-iconfont 1.0.0--X release"`
*  `git tag 1.0.0--X && git push origin 1.0.0--X`
*  `git checkout master && latest && git branch -D temp`

<br/>
## Using these icons in your project

### Importing the iconfont
* Use bower or a similar tool to pull in a tagged release of this project:

```
{
    "name": "your-project",
    "dependencies": {
        "rh-iconfont": "git@gitlab.it-mkt.corpdev.redhat.com:it-marketing/rh-iconfont.git#1.0.0-16"
    },
}
```

* If bower is pulling in a cached version of the font, run `./node_modules/.bin/bower cache clean` to clear the cache.

<br/>
### Using the icons

#### *Important! Avoid using icon unicode values directly.*

You should always utilize these icons by calling the pre-existing css classes, or by using the included sass mixin, never by the unicode characters directly. 

Why? Because each time the font is updated, these values can change. 

``` 
// Don't do this:
blockquote p { 
    quotes: '\201C' '\201D' '\201C' '\201D';
}
```

#### Method 1: Use the get-rh-icon mixin in Sass!

```
// This icon font comes with this mixin:
@mixin get-rh-icon($name, $position: 'before') {
   &:#{$position} {
        content: map-get(map-get($rh-icon-glyphmap, rh-icon-#{$name}), location);
        @include _rh-icon-styles;
        @content;
    }
}

// Use it in your sass like this:
.my-fancy-quote-style{
    @include get-web-icon(open-quote) {  // this calls the "open-quote" icon
        color: color(brand-primary); // set the color of the icon
        float: left; // add additional styles as needed
    }
}
```
#### Method 2: Use the class name in your markup

```
<p class="my-fancy-class web-icon-open-quote">To be, or not to be...</p>
```

