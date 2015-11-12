# vimeo_new_10.11.2015

Generates unknown (to me) exceptions inside browser console at beginning of page load:

Uncaught TypeError: Cannot read property 'ready' of undefined
  getCallback @ rtful_froogaloop.js:240
  onMessageReceived @ rtful_froogaloop.js:189

Everything works just fine. But the reason for the error is unknown at the moment.

Latest-Update: Exception caught and no longer appears. Works fine.

/*
 NOTES:

 VIMEO's MUST HAVES REQUIREMENTS:
id=CHOSEN_ID  src=...?api=1&player_id=CHOSEN_ID

 1. api=1 in src is not necessary for some reason...
 2. same goes for playerid (id=..) which vimeo states is necessary
 3. exception is raised in the browser at first load but everything works fine nontheless.
 */
