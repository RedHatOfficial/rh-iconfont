# Welcome to the Red Hat icon font library

Migrate to [Github](https://github.com/RedHatOfficial/rh-iconfont) by updating the `rh-iconfont` dependency within your project:

```diff
{
    "name": "your-project",
    "dependencies": {
-       "rh-iconfont": "git+https://gitlab.corp.redhat.com/uxdd/rh-iconfont.git#2.0.0"
+       "rh-iconfont": "git@github.com:RedHatOfficial/rh-iconfont.git#2.0.0"
    },
}
```

Or if you're using the tar file:

```diff
{
    "name": "your-project",
    "dependencies": {
-       "rh-iconfont": "https://gitlab.corp.redhat.com/uxdd/rh-iconfont/-/archive/4.1.0/rh-iconfont-4.1.0.tar.gz"
+       "rh-iconfont": "https://github.com/RedHatOfficial/rh-iconfont/archive/4.1.0.tar.gz"
    },
}
```

## Issues or questions

Please send an email to [web@redhat.com](mailto:web@redhat.com)

## Deprecated

### Setup

```
npm install
```

<!-- You'll need to install fontforge yourself. -->

Run `npm run build` to compile the repository.

To preview the icons, run `npm run start` and a localhost will spin up.

### Viewing the icons

Click on an SVG to preview it:

-   [RH-Icons](https://github.com/RedHatOfficial/rh-iconfont/tree/master/src/iconfont/vectors/rh_icon)
-   [Web-icons](https://github.com/RedHatOfficial/rh-iconfont/tree/master/src/iconfont/vectors/web_icon)

### Adding new icons to the icon fonts

1. Drop the SVGs into one of the vector folders.
    - Icons specific to Red Hat concepts should have a `rh-` prefix and belong in the `src/iconfont/vectors/rh_icon` folder
    - Universal web interface icons need a `web-` prefix and belong in the `src/iconfont/vectors/web_icon` folder.
2. Delete the two codepoints map files: `codepoints.rh_web_icon.map` and `codepoints.rh_icon.map`. These will be recreated when you run `grunt` or `grunt watcher`
3. Run `grunt` to update the font, or `grunt watcher` to update and preview. Be sure to include the codepoints map files in your commit!

### Creating a tag

-   `git checkout master && git fetch origin && git pull origin && git checkout -b temp && grunt && git add dist -f`
-   `git commit -m "rh-iconfont 1.x.x release"`
-   `git tag 1.x.x && git push origin 1.x.x`
-   `git checkout master && git fetch origin && git pull origin && git branch -D temp`

## Using these icons in your project

### Importing the iconfont

-   Use npm (or a similar tool) to pull in a _specific_ tagged release of this project. Please do not use loose versioning (example: `~` or `^`), instead, use bower to load a tag that will not automatically upgrade.

    ```
    {
        "name": "your-project",
        "dependencies": {
            "rh-iconfont": "git@github.com:RedHatOfficial/rh-iconfont.git#2.0.0"
        },
    }
    ```

-   Example using bower (if you must but this tool is deprecated):

    ```
    {
        "name": "your-project",
        "dependencies": {
            "rh-iconfont": "git@github.com:RedHatOfficial/rh-iconfont.git#2.0.0"
        },
    }
    ```

-   If bower is pulling in a cached version of the font, run `./node_modules/.bin/bower cache clean` to clear the cache.

#### If you are using Sass

-   Add the `node_modules` directory to your list of included paths, if you haven't already.

    ```
    module.exports = function ( grunt, pkg, paths ) {
        grunt.config.merge( {
            // https://github.com/sindresorhus/grunt-sass
            sass: {
                options: {
                    includePaths: [ "./node_modules" ]
                },
    ```

-   Add an @import reference to the icon font sass file(s) in your root sass file.

    ```
    @import "rh-iconfont/dist/files/web-iconfont.scss";
    @import "rh-iconfont/dist/files/rh-iconfont.scss";
    ```

<br/>
### Implementation

#### _Important! Avoid using icon unicode values directly._

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
