/* eslint-disable */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
/* eslint-enable */

const UA_CODE = 'UA-25230536-8'

window.ga('create', UA_CODE, 'auto')

window.onerror = function (err, url, line) {
  window.ga('send', 'exception', {
    exDescription: err + ' ' + url + ': ' + line
  })
}

export function trackPageView ({ pathname }) {
  window.ga('send', 'pageview', pathname)
}

export function trackPlayerEvent (name, label) {
  window.ga('send', 'event', 'player', name, label)
}

export function trackPlaylistEvent (name, label) {
  window.ga('send', 'event', 'playlist', name, label)
}

export function trackTiming (category, name, ms) {
  window.ga('send', 'timing', category, name, ms)
}
