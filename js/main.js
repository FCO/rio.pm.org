---
---
document.addEventListener("DOMContentLoaded", function(){
        var subtitle = new Subtitle(document.querySelector('header > h2'), {{ site.data.subtitles | jsonify }});
        setInterval(function(){
                subtitle.refresh();
        }, 15000);
}, false);
