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