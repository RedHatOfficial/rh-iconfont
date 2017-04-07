# Welcome to the redhat.com font library!


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

#### If you are using Sass

* Add the `bower_components` directory to your list of included paths, if you haven't already.

	```
	module.exports = function ( grunt, pkg, paths ) {
	    grunt.config.merge( {
	        // https://github.com/sindresorhus/grunt-sass
	        sass: {
	            options: {
	                includePaths: [ "./bower_components" ]
	            },
	```

* Add an @import reference to the icon font sass file(s) in your root sass file.

	```
	@import "rh-iconfont/dist/files/web-iconfont.scss";
	@import "rh-iconfont/dist/files/rh-iconfont.scss";
	```

<br/>
### Implementation

#### *Important! Avoid using icon unicode values directly.*

You should always utilize these icons by calling the pre-existing css classes, or by using the included sass mixin, never by the unicode characters directly.

Why? Because each time the font is updated, these values can change.

```
// Don't do this:
blockquote p:after {
    content: '\f102`;
}
```

#### Method 1: Use the get-rh-icon mixin in Sass!

```
// rh-iconfont mixin:
@mixin get-rh-icon($name, $position: 'before') {
   &:#{$position} {
        content: map-get(map-get($rh-icon-glyphmap, rh-icon-#{$name}), location);
        @include _rh-icon-styles;
        @content;
    }
}
// web-iconfont mixin:
@mixin get-web-icon($name, $position: 'before') {
   &:#{$position} {
        content: map-get(map-get($web-icon-glyphmap, web-icon-#{$name}), location);
        @include _web-icon-styles;
        @content;
    }
}

// Use it in your sass like this:
.my-fancy-class {
    @include get-rh-icon(open-quote) {  // this calls the "open-quote" icon from the rh-iconfont
        color: color(brand-primary); // set the color of the icon
        float: left; // add additional styles as needed
    }
}
OR
.my-fancy-class {
    @include get-web-icon(web-icon-caret-left) {  // this calls the "caret left" icon from the web-iconfont
        color: color(brand-primary); // set the color of the icon
        float: left; // add additional styles as needed
    }
}
```
#### Method 2: Use the class name in your markup

```
<p class="my-fancy-class web-icon-open-quote">To be, or not to be...</p>
```

