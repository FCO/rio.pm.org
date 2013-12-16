---
---
document.addEventListener("DOMContentLoaded", function(){
        var subtitle = new Subtitle(document.querySelector('header > h2'), {{ site.data.subtitles | jsonify }});
        setInterval(function(){
                subtitle.refresh();
        }, 15000);
	var cpan = new CPAN();
	cpan.count_modules(function(data){
		document.querySelector("span#cpan_count").innerText = data.hits.total;
	});
	cpan.last_released(function(data){
		document.querySelector("span#cpan_last").innerText = data.hits.hits[0].fields["metadata.name"];
	});

	var appCache = window.applicationCache;

	setInterval(function(){appCache.update()}, 1000 * 60 * 60 * 3);

	if (appCache.status == window.applicationCache.UPDATEREADY) {
		console.log("updated");
		appCache.swapCache();
	}
}, false);
