(function(){function article(it
/**/) {
var out='<!doctype html><html><head><meta name="viewport" content="width=device-width"><title>desingfrontier.net: Daniel Sellers</title><link href="/built/css/main.css" rel="stylesheet"></head><body><nav class="header"><h1 class="header__logo">designfrontier</h1><ul class="header__nav"><li><a href="/" class="header__nav__item">home</a></li><li><a href="/about" class="header__nav__item">about</a></li><li><a href="/stuff" class="header__nav__item">stuff</a></li><li><input type="search" name="search" class="header__search" placeholder="search"/></li></ul></nav><article class="article"><h2 class="article__heading">'+( it.title )+'</h2><section class="article__meta">Published: '+( it.publishedDate )+'</section>'+( it.content )+'</article><footer class="footer">';if(it.next){out+='<div class="footer__nav--next"><a href="/'+( it.next )+'" class="footer__nav__link">next</a></div>';}out+='<section class="footer__nav--copyright">&copy; 2015 Daniel Sellers</section><section class="footer__nav__api"><a href="/rss" class="footer__nav__link">rss</a>/<a href="/api" class="footer__nav__link">api</a></section>';if(it.prev){out+='<div class="footer__nav--previous"><a href="/'+( it.prev )+'" class="footer__nav__link">prev</a></div>';}out+='</footer><script src="/components/header/header.js"></script><script src="/components/search/search.js"></script><script src="/components/navigation/navigation.js"></script><script src="/lib/highlightjs/highlight.pack.df.js"></script><script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-2683779-1\', \'auto\');ga(\'send\', \'pageview\');</script></body></html>';return out;
}var itself=article, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {window.render=window.render||{};window.render['article']=itself;}}());