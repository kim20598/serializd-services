/**
 * Returns an array of custom services data
 *
 * @param {string} query
 * @param {string} IMDb ID
 * @returns {ServiceData[]} services data
 */
globalThis.getServices = (query, imdbID, tmdbID) => [
  {
    name: "cucuflix",
    url: `https://cucuflix.xyz/detail/tv/${imdbID}`,
    icon: "https://cucuflix.xyz/assets/favicon-CN6XFOQg.ico",
  },
   {
    name: "netplayz",
    url: `https://netplayz.ru/watch?type=tv&id=${imdbID}`,
    icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico",
  },
{
    name: "freek",
    url: `https://freek.to/watch/tv/${imdbID}`,
    icon: "https://m.media-amazon.com/images/I/61h1O+doNxL._AC_UY1100_.jpg",
  },
{
    name: "rivestream",
    url: `https://rivestream.live/detail?type=tv&id=${imdbID}`,
    icon: "https://camo.githubusercontent.com/b1d22fe419913c7ebbc81321f11fe0c5560a001402117d232c9cf9d0c6782983/68747470733a2f2f7269766573747265616d2e70616765732e6465762f69636f6e732f69636f6e2d323536783235362e706e67",
  },
{
    name: "456movie",
    url: `https://456movie.com/tv/watch/${imdbID}`,
    icon: "https://img.freepik.com/premium-vector/video-camera-icon-movie-camera-vector-illustration_550971-170.jpg",
  },
{
    name: "broflix",
    url: `https://broflix.cc/tv/${imdbID}`,
    icon: "https://play-lh.googleusercontent.com/58WRr3UZfssYw5q3hXoJCt7ry1mPZyL1h1XegUV0HqWEIWUfQDrxE2tN1hrOMYieJeDU",
  },
{
    name: "xprime",
    url: `https://xprime.tv/watch/${imdbID}/1/1`,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAC60lEQVR4AWJwL/ChKx7GFo5auKb2DCOAtXKAjSSMo/gGZwVn27Zt27ZR27btdr2n2vZ0a9tdnO3v8iaZZMMyyRvP+/3xAeqJKfNvt4CZIa1Dvawr5lnoFOxUlIkatdL5XtZEGEbZFPdPcKudkuxVs+K1Z/0uRgKn6i34F++7BIQZjIy1clTMdMVhJhpUkrFGLkWflfICAyxKbyAgfBPm1/Qs1LdBIHKvyYL4LjVJbPuKV/gm4HbOiC5niCwA1H6WLtZ6lEYYWT3KeQ/DUP+mS4ABwrYr/8soyLrsC94HWZSeQVBdBrJYrkOeXYhfeudihM3T8xGym4fDCOSsRRGuc5UMmQAGgI9p0V9P/QICeesXFCM7puxdBkLowe6V1ruObvELO7TR7xOAMEcmDAgBMPLTK24T2lU5ItAeT4uj23zG7FrjcA5QG+WsX0wmAFg/SiMG12JpodSUQBaIQYPq9BjIQLVvxTxzVssTu6nmfGFAGkdfE61TkQTPcnlt0e2Z38+hb30y8dWvRm4xvZ/KRT8f7ufTsAjTElLC7vjXHP2hThL3yakj4+vcPltp0Mv98yy5D3b6SENUU0mJVzOpDO6g1SiUVBe4VNhlWhfN6RPgBNaJ8QtYt5+xVZPEBW4NfwFjhPsMy/LPGUbisCbfpou9Lin5QkYdHqd0nvMsPFoRAlE2lSRZr/Bv5D0xqXCtfi+NeR8oj3m7VxHa7WkBA0QPw1LHSgIIhKwACzmZ+zNNr5K0v5YTSfi7dvRSxm5d120gYFgj0RtFGCAJOmJZtEp2svBsai6ADewmACG6n+38FhVJYON0eHQZSC/K+sWq6QYlFCBxTymC0r28lvYh9HZGqP+u+BsQ3kuEbd+lQgmBcC1ht8ajnx2eDSO6DYR52PX0FGQjOhafwDscGwQQFmYsX3Q2wc0CKbctEwIM990GovGh55OXvjgRv1NReKa4PaF06Jk0sHEXI9x3u6TQ/9GhAiaMRxtRoxYCAMdppeRUt/KYAAAAAElFTkSuQmCC",
  },
{
    name: "hexa",
    url: `https://hexa.watch/tv/${imdbID}`,
    icon: "https://cdn2.iconfinder.com/data/icons/colorful-guache-social-media-logos-1/159/social-media_netflix-white-512.png",
  },
{
    name: "nunflix",
    url: `https://nunflix.org/watch/tv/${imdbID}`,
    icon: "https://456movie.com/favicon.ico",
  },
{
    name: "7xtream",
    url: `https://movies.7xtream.com/tv/${imdbID}`,
    icon: "https://movies.7xtream.com/public/vite.svg",
  },
{
    name: "autoembed",
    url: `https://watch.autoembed.cc/tv/${imdbID}`,
    icon: "https://watch.autoembed.cc/favicon.ico",
  },
{
    name: "zilla-xr",
    url: `https://zilla-xr.xyz/tv/${imdbID}`,
    icon: "https://zilla-xr.xyz/favicon.ico",
  },
{
    name: "mapple.tv",
    url: `https://mapple.tv/tv/${imdbID}`,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAIbyr/zx60ZQILe4byF30U2hJ5iGyAFYAAADfSURBVHgBrZAFdkUhDAVD3sWd7H+vTU/qLn9wBg3dCOe+cMyfWncB18fWh4iUEIPP71ypQMo5AbW8k61HR4qLvb2TOVVPiq/p3bGlDAxStCnljYs9zfstWZseX9q8OibATa9maLev/Kg2TwSvXjcUNT5g8jZ9KtjrnoRFtJB0v2fUY59gscevnfNeNidscxSwrZM1W28jkHFqojckO1UZ8zql5UeRWznXHGQEQGLnyyJ0cY+Cp2PdCIkFjxGCcArDvQiDvhNTlImtA3rDqiKASF30MSLW/l7W+oVci27DHW4ICP42koHYAAAAAElFTkSuQmCC",
  },
{
    name: "catflix.su",
    url: `https://catflix.su/tv/${imdbID}`,
    icon: "https://catflix.su/assets/icons/cropped-cflix-180x180.png",
  },
{
    name: "embed.su",
    url: `https://embed.su/embed/tv/${imdbID}`,
    icon: "https://embed.su/favicon.ico",
  },
   {
    name: "vidbinge",
    url: `https://sudo-flix.lol/media/tmdb-tv-${imdbID}-${query}`,
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAM1BMVEVHcEwiIyoiIyoiIyoOHR43LDliPlryhc19S2/TdbQAGRXogMXaebrqgcbCbabPc7HrgcfL4Qr0AAAAA3RSTlMAl/qZHsMBAAAAtklEQVR4AX3TVRbDMBBDUbPGlHT/q61bFVRI5veeFzA450P8O8Evi4fjXTjG4OLJfGLK6RBTgam6T6uxJUU19DKsCWqXByaoROm2ts/e3+qkM8xlN02C7KyNu/U5GtW9ug3jQkOJlog05DYnbR+9Ir8wo/axP2y2DBQpLRbQLgNbpRGXyrcYaES24DNh7BTjCpbtbWOnSJ0YWTrBpaN07RRjapGdoKipKeopUTyc86N5eqjPrsMVl54OPQi//jYAAAAASUVORK5CYII=",
  },
  {
    name: "cineby",
    url: `https://www.cineby.app/tv/${imdbID}`,
    icon: "https://www.cineby.app/logo.png",
  },
{
    name: "popcornmovies",
    url: `https://popcornmovies.to/tv-show/${query}`,
    icon: "https://popcornmovies.to/favicon/apple-touch-icon.png",
  },
  ];
