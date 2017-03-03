#Welcome to the redhat.com font library!

## Setup

1. Run `npm install`


## Adding to the icon fonts

1. Drop the SVGs into the `src/iconfont/vectors/rh_icon` folder or the `src/iconfont/vectors/web_icon` folder.
2. Run `grunt` to update the font, or `grunt watcher` to update and preview.


## Creating a tag

*  git checkout master && latest && git checkout -b temp && grunt && git add dist -f
*  git commit -m "rh-iconfont 1.0.0--X release"
*  git tag 1.0.0--X && git push origin 1.0.0--X
*  git checkout master && latest && git branch -D temp


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

### Utilizing the icons

* SUPER IMPORTANT:
    * You should always 

YES: Use the get-rh-icon mixin!

```
@mixin get-rh-icon($name, $position: 'before') {
   &:#{$position} {
        content: map-get(map-get($rh-icon-glyphmap, rh-icon-#{$name}), location);
        @include _rh-icon-styles;
        @content;
    }
}
```
```
.my-fancy-quote-style{
    @include get-web-icon(open-quote) {
        color: color(brand-primary);
        float: left;
    }
}
```

NO: calling icons my their unicode values directly. Why? Because each time the font is updated, these values can change. 
    quotes: '\201C' '\201D' '\201C' '\201D';
