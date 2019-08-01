# @geolonia/mbgl-open-with-control

[![Build Status](https://travis-ci.org/tilecloud/mbgl-open-with-control.svg?branch=master)](https://travis-ci.org/tilecloud/mbgl-open-with-control)
[![npm version](https://badge.fury.io/js/%40geolonia%2Fmbgl-open-with-control.svg)](https://badge.fury.io/js/%40geolonia%2Fmbgl-open-with-control)

This is a Mapbox GL JS plugin to add a link with a message box.

https://tilecloud.github.io/mbgl-open-with-control/

## Install

```
$ npm install @tilecloud/mbgl-open-with-control --save
```

## How to use

```node
import ForkMeConntrol from '@geolonia/mbgl-open-with-control'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true
});

map.addControl(new ForkMeConntrol({
  title: 'Open with Google Maps.',
  url: 'https://',
}));
```
