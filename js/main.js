---
---
document.addEventListener("DOMContentLoaded", function(){
        var subtitle = new Subtitle(document.querySelector('header > h2'), {{ site.data.subtitles | jsonify }});
        setInterval(function(){
                subtitle.refresh();
        }, 15000);
	var cpan = new CPAN();
	cpan.modules(function(data){
		document.querySelector("spam#cpan_count").innerText = data.hits.total;
	});
}, false);
