# spinalcord

This is the connectivity map for the Cell Atlas of Mouse Brain-Spinal Cord Connectome.

https://ucla-brain.github.io/spinalcord/


## Tissue labeling channels

- Nissl (blue)
- tyrosine hydroxylase (green)
- choline acetyltransferase (red)
- NeuN (purple)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Add atlases

Add the atlas images to the `src/static` folder.

Add the section number and file names of the images to the `src/assets/data.json` file. 

Ex:
```
    {
        "section": "253",
        "atlasHref": "/253_L3_atlas.png",
        "purpleHref": "/253_L3_NeuN.jpg",
        "greenHref": "/253_L3_TH.jpg",
        "blueHref": "/253_L3_nissl.jpg",
        "redHref": "/253_L3_ChAT.jpg"
    },
```

## Contributors
- Amanda "Jean" Tugangui
- Seita Yamashita

[![UCLA B.R.A.I.N.](http://brain.neurobio.ucla.edu/images/Logo%209-a2small.png)](http://brain.neurobio.ucla.edu/)

[UCLA B.R.A.I.N.](http://brain.neurobio.ucla.edu/)
