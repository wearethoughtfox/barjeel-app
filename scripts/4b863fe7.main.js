BarjeelApp=new Backbone.Marionette.Application,BarjeelApp.addRegions({allRegion:"body"}),BarjeelApp.addInitializer(function(){var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.show(a),console.log("app started")}),$(document).ready(function(){BarjeelApp.start()}),window.Barjeel={Models:{},Collections:{},Views:{},Routers:{}},this.JST=this.JST||{},this.JST["app/scripts/templates/connect-list-single-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="circle-container-list">\n	<img class="curator-small-round" src="data/images/connect-images/',(g=c["curator-image"])?f=g.call(b,{hash:{},data:e}):(g=b&&b["curator-image"],f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n</div>	\n<a>\n	<h1 class="curator-heading-list">',(g=c.curator)?f=g.call(b,{hash:{},data:e}):(g=b&&b.curator,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1> \n	<p class="connect-heading-list padded-sides">',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n</a>"}),this.JST["app/scripts/templates/connect-single-view.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return f+='\n    <div class="slide">\n      <img class="slider-image" src="data/images/connect-images/',(e=c.image)?d=e.call(a,{hash:{},data:b}):(e=a&&a.image,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+'">\n      <span class="slide-text">\n        <h1 class="image-heading">',(e=c.title)?d=e.call(a,{hash:{},data:b}):(e=a&&a.title,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+'</h1>\n        <p class="padded-sides">',(e=c.caption)?d=e.call(a,{hash:{},data:b}):(e=a&&a.caption,d=typeof e===j?e.call(a,{hash:{},data:b}):e),f+=k(d)+"</p>\n      </span>\n    </div>\n   "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<header class="bar bar-nav connectHeader" id="header">\n	 <a href="#" class="back-arrow white" id="connectBack"></a>\n  <h1 class="title white">Connect</h1>\n</header>\n <div class="content" id="main">\n\n<div class="swipe" id="mySwipe">\n <div class="swipe-wrap">\n	\n	<div class="slide">\n		<img class="curator-image" src="data/images/connect-images/',(h=c["curator-image"])?g=h.call(b,{hash:{},data:e}):(h=b&&b["curator-image"],g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'">\n		<h1 class="curator-heading">',(h=c.curator)?g=h.call(b,{hash:{},data:e}):(h=b&&b.curator,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'</h1>\n		<p class="padded-sides">',(h=c.about)?g=h.call(b,{hash:{},data:e}):(h=b&&b.about,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'</p>\n	</div>\n\n	<div class="slide">\n	<div class="circle-container">\n		<img class="curator-small-round" src="data/images/connect-images/',(h=c["curator-image"])?g=h.call(b,{hash:{},data:e}):(h=b&&b["curator-image"],g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'">\n	</div>	\n		<h2 class="curator-heading">',(h=c.curator)?g=h.call(b,{hash:{},data:e}):(h=b&&b.curator,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'</h1>\n		<h1 class="connect-heading padded-sides">',(h=c.title)?g=h.call(b,{hash:{},data:e}):(h=b&&b.title,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+'</h1>\n		<p class="padded-sides">',(h=c.description)?g=h.call(b,{hash:{},data:e}):(h=b&&b.description,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+"</p>\n	</div>\n\n \n  ",g=c.each.call(b,b&&b.artworks,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(g||0===g)&&(i+=g),i+=" \n   </div>\n</div>\n\n</div>\n"}),this.JST["app/scripts/templates/connect-view.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header class="bar bar-nav connectHeader" id="header">\n	 <a href="#" class="back-arrow white" id="connectBack"></a>\n  <h1 class="title white">Connect</h1>\n</header>\n <div class="content" id="main">\n\n	<div id="list"></div>\n\n</div>'}),this.JST["app/scripts/templates/discover-list-single-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="circle-container-list-discover">\n	<img class="curator-small-round" src="data/images/discover-images/',(g=c["curator-image"])?f=g.call(b,{hash:{},data:e}):(g=b&&b["curator-image"],f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n</div>	\n<a class="discover-list-link">\n	<h1 class="curator-heading-list">',(g=c.curator)?f=g.call(b,{hash:{},data:e}):(g=b&&b.curator,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1> \n	<p class="connect-heading-list padded-sides">',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n</a>"}),this.JST["app/scripts/templates/discover-single-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<header class="bar bar-nav discoverHeader" id="header">\n	 <a href="#" class="back-arrow white" id="discoverBack"></a>\n  <h1 class="title white">Discover</h1>\n</header>\n <div class="content" id="main">\n\n<div class="discover-video">\n <iframe width="100%" height="auto" src="http://player.vimeo.com/video/67500201?title=0&amp;byline=0&amp;portrait=0"  frameborder="0" allowfullscreen style="color:transparent; "></iframe>\n</div>\n	<h1 class="curator-heading-list-discover">',(g=c.curator)?f=g.call(b,{hash:{},data:e}):(g=b&&b.curator,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1> \n	<p class="discover-heading-list padded-sides">',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n </div>"}),this.JST["app/scripts/templates/discover-view.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header class="bar bar-nav discoverHeader" id="header">\n	 <a href="#" class="back-arrow white" id="discoverBack"></a>\n  <h1 class="title white">Discover</h1>\n</header>\n <div class="content" id="main">\n\n	<div id="list-discover"></div>\n\n</div>'}),this.JST["app/scripts/templates/home-view.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="play block-extra" id="play-block">\n	<a href="#" class="block-centre" id="play">\n		<h2 class="home-icons"><span class="custom-icon play-icon"></span>Play</h2>\n	</a>\n</div>\n\n<div class="connect block" id="connect-block">\n	<a href="#" class="block-centre" id="connect">\n		<h2 class="home-icons"><span class="custom-icon connect-icon"></span>Connect</h2>\n	</a>\n</div>\n\n<div class="discover block" id="discover-block">\n	<a href="#" class="block-centre" id="discover">\n		<h2 class="home-icons"><span class="custom-icon discover-icon"></span>Discover</h2>\n	</a>	\n</div>        \n \n'}),this.JST["app/scripts/templates/landing-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="content full-height ',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n	<a href="#" class="block-centre-landing" id="',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n		<h1 class="landing-title">',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1> \n		<p class="landing-description">',(g=c.description)?f=g.call(b,{hash:{},data:e}):(g=b&&b.description,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</p>\n		<span class="icon-landing ',(g=c.title)?f=g.call(b,{hash:{},data:e}):(g=b&&b.title,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'-icon-landing"></span>\n	</a>	\n</div>'}),this.JST["app/scripts/templates/play-game-over-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<p class="delta score">Score</p>\n<h1 class="alpha">',(g=c.correctCounter)?f=g.call(b,{hash:{},data:e}):(g=b&&b.correctCounter,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1>\n<h2 class="gamma no-margin">Out of lives</h2>\n<p class="delta no-margin">Why not play again?</p>\n<button class="play-again btn btn-link btn-nav">\n	Play\n	<span class="forward-arrow"></span>\n</button>'}),this.JST["app/scripts/templates/play-lives-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="gamelives-',(g=c.gamelives)?f=g.call(b,{hash:{},data:e}):(g=b&&b.gamelives,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">&nbsp;</div>'}),this.JST["app/scripts/templates/play-main-view.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<header class="bar bar-nav playHeader" id="header">\n	 <a href="#" class="back-arrow white" id="playBack"></a>\n  <h1 class="title white">Play</h1>\n</header>\n <div class="content" id="main">\n 	<div class="playWrapper">	\n		<div id="question"></div>\n		<div id="wrong"></div>\n		<div id="right"></div>\n		<div id="lives"></div>\n	</div>	\n</div>\n\n<div id="modal" class="modals-container"></div>'}),this.JST["app/scripts/templates/play-modal-one.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="modal-title">\n	<span class="icon icon-close pull-right modal-icon"></span>\n</div>\n<img class="large-image" src="',(g=c.firstArtworkUrl)?f=g.call(b,{hash:{},data:e}):(g=b&&b.firstArtworkUrl,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n<div class="modal-text">\n	<h1 class="image-heading">',(g=c.firstArtworkTitle)?f=g.call(b,{hash:{},data:e}):(g=b&&b.firstArtworkTitle,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1>\n	<p class="padded-sides">',(g=c.firstArtworkArtist)?f=g.call(b,{hash:{},data:e}):(g=b&&b.firstArtworkArtist,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n</div>"}),this.JST["app/scripts/templates/play-modal-two.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div class="modal-title">\n	<span class="icon icon-close pull-right modal-icon"></span>\n</div>\n<img class="large-image" src="',(g=c.secondArtworkUrl)?f=g.call(b,{hash:{},data:e}):(g=b&&b.secondArtworkUrl,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'">\n<div class="modal-text">\n	<h1 class="image-heading">',(g=c.secondArtworkTitle)?f=g.call(b,{hash:{},data:e}):(g=b&&b.secondArtworkTitle,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1>\n	<p class="padded-sides">',(g=c.secondArtworkArtist)?f=g.call(b,{hash:{},data:e}):(g=b&&b.secondArtworkArtist,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+"</p>\n</div>"}),this.JST["app/scripts/templates/play-question-view.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var c,d="";return d+='\n\n<div class="questionWrapper" id="question-'+k((c=null==b||b===!1?b:b.index,typeof c===j?c.apply(a):c))+'" data-answer="'+k((c=null==b||b===!1?b:b.index,typeof c===j?c.apply(a):c))+'">\n	<div class="questionOption">'+k(typeof a===j?a.apply(a):a)+"</div>	\n</div>\n\n"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<h2 class="question-connection">What\'s the connection?</h2>\n<div class="question-arrow">&nbsp;</div>	\n<h3 class="question">',(h=c.question)?g=h.call(b,{hash:{},data:e}):(h=b&&b.question,g=typeof h===j?h.call(b,{hash:{},data:e}):h),(g||0===g)&&(i+=g),i+='</h3>\n<div class="questionOptions">\n',g=c.each.call(b,b&&b.choices,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(g||0===g)&&(i+=g),i+=" \n</div>"}),this.JST["app/scripts/templates/play-right-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<div id="right">\n<div class="wrap">\n	<div class="correct-image-wrapper correct-image-one">\n		<img class="correct-image" src="data/images/play-images/',(g=c.firstArtwork)?f=g.call(b,{hash:{},data:e}):(g=b&&b.firstArtwork,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'-square.jpg" alt="Image of the first connection answer">	\n	</div>\n	<span class="hit-area-one open-modal-one"></span>\n	<span class="correct-question-arrow"></span>\n	<span class="hit-area-two open-modal-two"></span>\n\n	<div class="correct-image-wrapper correct-image-two">\n		<img class="correct-image" src="data/images/play-images/',(g=c.secondArtwork)?f=g.call(b,{hash:{},data:e}):(g=b&&b.secondArtwork,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'-square.jpg" alt="Image of the second connection answer">\n	</div>	\n</div>	\n	<h1 class="correct-title">Right</h1>\n	<p class="gamma">',(g=c.explanation)?f=g.call(b,{hash:{},data:e}):(g=b&&b.explanation,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</p>\n	<button class="next btn btn-link btn-nav">\n	    Next\n	    <span class="forward-arrow"></span>\n	  </button>\n</div>\n\n\n'}),this.JST["app/scripts/templates/play-single-view.hbs"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var c,d="";return d+='\n 		<label>\n 			<input type="radio" name="q" value='+k((c=null==b||b===!1?b:b.index,typeof c===j?c.apply(a):c))+">\n 			"+k(typeof a===j?a.apply(a):a)+"\n 		</label>\n 		"}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h,i="",j="function",k=this.escapeExpression,l=this;return i+='<div class="question-title">',(h=c.id)?g=h.call(b,{hash:{},data:e}):(h=b&&b.id,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+"</div>\n	<legend>",(h=c.question)?g=h.call(b,{hash:{},data:e}):(h=b&&b.question,g=typeof h===j?h.call(b,{hash:{},data:e}):h),i+=k(g)+"</legend>\n		",g=c.each.call(b,b&&b.options,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(g||0===g)&&(i+=g),i}),this.JST["app/scripts/templates/play-win-game-over-view.hbs"]=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g,h="",i="function",j=this.escapeExpression;return h+='<p class="delta score">Score</p>\n<h1 class="alpha">',(g=c.correctCounter)?f=g.call(b,{hash:{},data:e}):(g=b&&b.correctCounter,f=typeof g===i?g.call(b,{hash:{},data:e}):g),h+=j(f)+'</h1>\n<h2 class="gamma no-margin">Congratulations!</h2>\n<p class="delta no-margin">You\'ve done all the questions. Would you like to play again?</p>\n<button class="play-again btn btn-link btn-nav">\n	Play\n	<span class="forward-arrow"></span>\n</button>'}),this.JST["app/scripts/templates/play-wrong-view.hbs"]=Handlebars.template(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div id="wrong">\n	<h1 class="beta">Wrong</h1>\n	<p class="gamma">Why not take another guess?</p>\n		<button class="try-again btn btn-link btn-nav">\n	    Try again\n	    <span class="forward-arrow"></span>\n	  </button>\n</div>	'}),Barjeel.Models=Barjeel.Models||{},function(){"use strict";BarjeelApp.LandingModel=Backbone.Model.extend({defaults:{title:"test",description:""}})}(),Barjeel.Models=Barjeel.Models||{},function(){"use strict";Barjeel.Models.ConnectModel=Backbone.Model.extend({defaults:{title:"",description:"",curator:"",about:""}})}(),Barjeel.Models=Barjeel.Models||{},function(){"use strict";Barjeel.Models.PlayModel=Backbone.Model.extend({defaults:{selected:-1,correct:null,use:!0}})}(),Barjeel.Models=Barjeel.Models||{},function(){"use strict";Barjeel.Models.DiscoverModel=Backbone.Model.extend({defaults:{title:"",curator:"",video:""}})}(),Barjeel.Models=Barjeel.Models||{},function(){"use strict";Barjeel.Models.PlayGameStateModel=Backbone.Model.extend({defaults:{correctCounter:0,gamelives:3}})}(),Barjeel.Collections=Barjeel.Collections||{},function(){"use strict";Barjeel.Collections.PlayCollection=Backbone.Collection.extend({model:Barjeel.Models.PlayModel,url:"data/questions.json"})}(),Barjeel.Collections=Barjeel.Collections||{},function(){"use strict";Barjeel.Collections.ConnectCollection=Backbone.Collection.extend({model:Barjeel.Models.ConnectModel,url:"data/connect.json"})}(),Barjeel.Collections=Barjeel.Collections||{},function(){"use strict";Barjeel.Collections.DiscoverCollection=Backbone.Collection.extend({model:Barjeel.Models.DiscoverModel,url:"data/discover.json"})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.HomeView=Marionette.ItemView.extend({events:{"touchend .play":"loadPlay","touchend .connect":"loadConnect","touchend .discover":"loadDiscover"},className:"content",template:JST["app/scripts/templates/home-view.hbs"],loadPlay:function(){BarjeelApp.PlayModule.startPlay()},loadConnect:function(){BarjeelApp.ConnectModule.startConnect()},loadDiscover:function(){BarjeelApp.DiscoverModule.startDiscover()}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.LandingView=Marionette.ItemView.extend({template:JST["app/scripts/templates/landing-view.hbs"],onRender:function(){console.log("rendering"),this.$(".play").swipe({swipeLeft:function(){var a=JSON.parse(localStorage.getItem("barjeel-app-game-state"));null==a||a.gameInProgress===!1?BarjeelApp.PlayModule.startQuiz():BarjeelApp.PlayModule.resumeQuiz()},swipeRight:function(){var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}}),this.$(".connect").swipe({swipeLeft:function(){var a=new Barjeel.Collections.ConnectCollection,b=new Barjeel.Views.ConnectView({collection:a,childView:Barjeel.Views.ConnectListSingleView});BarjeelApp.allRegion.showAnimated(b,{animationType:"slideLeft"})},swipeRight:function(){var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}}),this.$(".discover").swipe({swipeLeft:function(){var a=new Barjeel.Collections.DiscoverCollection,b=new Barjeel.Views.DiscoverView({collection:a,childView:Barjeel.Views.DiscoverListSingleView});BarjeelApp.allRegion.showAnimated(b,{animationType:"slideLeft"})},swipeRight:function(){var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.ConnectView=Backbone.Marionette.CompositeView.extend({initialize:function(){console.log("initialise - fetching collection from ConnectView"),this.listenTo(this.collection,"reset",this.render),this.collection.fetch()},template:JST["app/scripts/templates/connect-view.hbs"],childView:Barjeel.Views.ConnectListSingleView,childViewContainer:"#list",tagName:"div",className:"wrapper",events:{"touchend #connectBack":"backHome"},backHome:function(){console.log("Back Home tap fired");var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.ConnectListSingleView=Marionette.ItemView.extend({onRender:function(){return this.$el.find("img").on("load",function(){$(".circle-container-list").hide().fadeIn(500),console.log("Finding image")}),this},template:JST["app/scripts/templates/connect-list-single-view.hbs"],tagName:"div",className:"connect-list",events:{"touchend a":"loadConnectPost"},loadConnectPost:function(){var a=this.model,b=new Barjeel.Views.ConnectSingleView({model:a});BarjeelApp.allRegion.show(b)}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.ConnectSingleView=Marionette.ItemView.extend({tagName:"div",className:"blog-post",template:JST["app/scripts/templates/connect-single-view.hbs"],events:{"touchend #connectBack":"backConnectPost"},onDomRefresh:function(){console.log("dom refreshed");var a=document.getElementById("mySwipe");window.mySwipe=Swipe(a,{continuous:!1,callback:function(){},transitionEnd:function(){$(".content").animate({scrollTop:0},100)}})},backConnectPost:function(){var a=new Barjeel.Collections.ConnectCollection,b=new Barjeel.Views.ConnectView({collection:a,childView:Barjeel.Views.ConnectListSingleView});BarjeelApp.allRegion.showAnimated(b,{animationType:"slideRight"})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.DiscoverView=Backbone.Marionette.CompositeView.extend({initialize:function(){console.log("initialise - fetching collection from DiscoverView"),this.listenTo(this.collection,"reset",this.render),this.collection.fetch()},template:JST["app/scripts/templates/discover-view.hbs"],childView:Barjeel.Views.DiscoverListSingleView,childViewContainer:"#list-discover",tagName:"div",className:"wrapper",events:{"touchend #discoverBack":"backHome"},backHome:function(){console.log("Back Home tap fired");var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.DiscoverListSingleView=Marionette.ItemView.extend({onRender:function(){return this.$el.find("img").on("load",function(){$(".circle-container-list-discover").hide().fadeIn(500),console.log("Finding image")}),this},template:JST["app/scripts/templates/discover-list-single-view.hbs"],tagName:"div",className:"discover-list",events:{"touchend a":"loadDiscoverPost"},loadDiscoverPost:function(){console.log("loading single discover");var a=this.model,b=new Barjeel.Views.DiscoverSingleView({model:a});BarjeelApp.allRegion.show(b)}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.DiscoverSingleView=Marionette.ItemView.extend({tagName:"div",className:"blog-post",template:JST["app/scripts/templates/discover-single-view.hbs"],events:{"touchend #discoverBack":"backDiscoverPost"},backDiscoverPost:function(){var a=new Barjeel.Collections.DiscoverCollection,b=new Barjeel.Views.DiscoverView({collection:a,childView:Barjeel.Views.DiscoverListSingleView});BarjeelApp.allRegion.showAnimated(b,{animationType:"slideRight"})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayMainView=Backbone.Marionette.LayoutView.extend({template:JST["app/scripts/templates/play-main-view.hbs"],regions:{questionRegion:"#question",wrongRegion:"#wrong",livesRegion:"#lives",modals:{selector:".modals-container",regionClass:Backbone.Marionette.Modals}},events:{"touchend #playBack":"backHome"},backHome:function(){console.log("Back Home tap fired");var a=new Barjeel.Views.HomeView;BarjeelApp.allRegion.showAnimated(a,{animationType:"slideRight"})}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayWinGameOverView=Backbone.Marionette.ItemView.extend({template:JST["app/scripts/templates/play-win-game-over-view.hbs"],events:{"touchend .play-again":"playAgain"},playAgain:function(){BarjeelApp.PlayModule.gameState.set({gameInProgress:!1}),localStorage.setItem("barjeel-app-game-state",JSON.stringify(BarjeelApp.PlayModule.gameState.toJSON())),BarjeelApp.PlayModule.startQuiz()}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayWrongView=Backbone.Marionette.ItemView.extend({onRender:function(){console.log("wrong view rendered")},template:JST["app/scripts/templates/play-wrong-view.hbs"],events:{"touchend .try-again":"tryAgain"},tryAgain:function(){BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.hide(),BarjeelApp.PlayModule.mainLayout.questionRegion.$el.show()}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayRightView=Backbone.Marionette.ItemView.extend({initialize:function(){console.log("Right view initialised"+JSON.stringify(BarjeelApp.PlayModule.gameState))},template:JST["app/scripts/templates/play-right-view.hbs"],onRender:function(){return this.$el.find("img").on("load",function(){$(".wrap").hide().fadeIn(500),console.log("Finding image")}),this},events:{"touchend .next":"nextQuestion","touchend .open-modal-one":"openModalOne","touchend .open-modal-two":"openModalTwo"},onDomRefresh:function(){$(".content").animate({scrollTop:0},100),console.log("scrolled content")},nextQuestion:function(){BarjeelApp.PlayModule.getQuestion()},openModalOne:function(){console.log("firing open modal 1"),BarjeelApp.PlayModule.mainLayout.modals.show(new Barjeel.Views.PlayModalOne({model:this.model}))},openModalTwo:function(){console.log("firing open modal 2"),BarjeelApp.PlayModule.mainLayout.modals.show(new Barjeel.Views.PlayModalTwo({model:this.model}))}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayLivesView=Backbone.Marionette.ItemView.extend({template:JST["app/scripts/templates/play-lives-view.hbs"],modelEvents:{change:"lifeLost"},lifeLost:function(){this.render()}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayGameOverView=Backbone.Marionette.ItemView.extend({template:JST["app/scripts/templates/play-game-over-view.hbs"],events:{"touchend .play-again":"playAgain"},playAgain:function(){BarjeelApp.PlayModule.resumeQuiz()}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayQuestionView=Backbone.Marionette.ItemView.extend({initialize:function(){console.log("Question view initialised: "+JSON.stringify(BarjeelApp.PlayModule.gameState))},template:JST["app/scripts/templates/play-question-view.hbs"],onDomRefresh:function(){$(".content").animate({scrollTop:0},100),console.log("scrolled content")},events:{"touchend .questionWrapper":"checkAnswer"},getSelected:function(){return this.model.get("selected")},select:function(a){this.model.set("selected",a)},checkAnswer:function(a){$(".questionWrapper").not(b).removeClass("active");var b=$(a.currentTarget);b.addClass("active");var c=b.data("answer");this.select(parseInt(c,10));var d=this.model.get("selected"),e=this.model.get("correctAnswer");if(console.log(d),console.log(e),d===e){var f=BarjeelApp.PlayModule.gameState.get("correctCounter");f+=1,BarjeelApp.PlayModule.gameState.set("correctCounter",f),this.model.set("correct",!0);var g=this.model;BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayRightView({model:g}))}else if(d!==e){var h=BarjeelApp.PlayModule.gameState.get("gamelives");h-=1,BarjeelApp.PlayModule.gameState.set("gamelives",h),this.model.set("correct",!1),this.checkLives()}},checkLives:function(){var a=BarjeelApp.PlayModule.gameState.get("gamelives");if(a>0)BarjeelApp.PlayModule.mainLayout.questionRegion.$el.hide(),BarjeelApp.PlayModule.mainLayout.wrongRegion.show(new Barjeel.Views.PlayWrongView),BarjeelApp.PlayModule.mainLayout.wrongRegion.$el.show();else{var b=BarjeelApp.PlayModule.gameState;BarjeelApp.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayGameOverView({model:b})),BarjeelApp.PlayModule.mainLayout.livesRegion.$el.hide()}}})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayModalOne=Backbone.Modal.extend({template:JST["app/scripts/templates/play-modal-one.hbs"],submitEl:".modal-icon"})}(),Barjeel.Views=Barjeel.Views||{},function(){"use strict";Barjeel.Views.PlayModalTwo=Backbone.Modal.extend({template:JST["app/scripts/templates/play-modal-two.hbs"],submitEl:".modal-icon"})}(),BarjeelApp.module("ConnectModule",function(a,b){a.startConnect=function(){var a=new b.LandingModel({title:"connect",description:"Meet art lovers and leading experts as they present some of Barjeel’s greatest hits in curated mini-exhibits"}),c=new Barjeel.Views.LandingView({model:a});b.allRegion.showAnimated(c,{animationType:"slideLeft"})}}),BarjeelApp.module("PlayModule",function(a,b,c,d,e,f){a.startPlay=function(){var a=new b.LandingModel({title:"play",description:"Test your knowledge and explore a network of connections hidden within Barjeel’s vast art collection"}),c=new Barjeel.Views.LandingView({model:a});b.allRegion.showAnimated(c,{animationType:"slideLeft"})},a.startQuiz=function(){console.log("play quiz started"),a.newCollection=new Barjeel.Collections.PlayCollection,a.newCollection.fetch({success:function(){console.log("fetch questions success"),localStorage.setItem("barjeel-app-questions",JSON.stringify(a.newCollection.toJSON())),a.mainLayout=new Barjeel.Views.PlayMainView,a.gameState=new Barjeel.Models.PlayGameStateModel,a.gameState.set({gameInProgress:!0}),localStorage.setItem("barjeel-app-game-state",JSON.stringify(a.gameState.toJSON())),b.PlayModule.getQuestion()}})},a.resumeQuiz=function(){console.log("Restarting quiz"),a.mainLayout=new Barjeel.Views.PlayMainView,a.gameState=new Barjeel.Models.PlayGameStateModel,b.PlayModule.getQuestion()},a.getQuestion=function(){var c=new Barjeel.Collections.PlayCollection(JSON.parse(localStorage.getItem("barjeel-app-questions"))),d=c.chain().filter(function(a){return a.get("use")}).pluck("id").value();if(console.log(d),d.length>0){var e=d[f.random(d.length-1)];console.log("chosen ID value: "+e);var g=c.get(e);console.log(g),g.set("use",!1),localStorage.setItem("barjeel-app-questions",JSON.stringify(c.toJSON())),b.allRegion.showAnimated(b.PlayModule.mainLayout,{animationType:"slideLeft"}),b.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayQuestionView({model:g}));var h=a.gameState;b.PlayModule.mainLayout.livesRegion.show(new Barjeel.Views.PlayLivesView({model:h})),b.PlayModule.mainLayout.livesRegion.$el.show()}else{console.log("No more questions");var h=b.PlayModule.gameState;b.allRegion.showAnimated(b.PlayModule.mainLayout,{animationType:"slideLeft"}),b.PlayModule.mainLayout.questionRegion.show(new Barjeel.Views.PlayWinGameOverView({model:h})),b.PlayModule.mainLayout.livesRegion.$el.hide()}}}),BarjeelApp.module("DiscoverModule",function(a,b){a.startDiscover=function(){var a=new b.LandingModel({title:"discover",description:"Watch and listen as"}),c=new Barjeel.Views.LandingView({model:a});b.allRegion.showAnimated(c,{animationType:"slideLeft"})}});