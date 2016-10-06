var ContentView = Backbone.View.extend({
	initialize: function() {

  },
	render: function(json){
		this.json = json;

        // on ajouter le template html
        var template = require('../../templates/content.html');
        var html = template({content: this.json});
        this.$el.append(html);

		var scope = this;
		this.scrollHeight = $(document).scrollTop();

		this.player = this.$el.find("#player");
		this.playerHeight = this.player.height();

		this.cover = this.$el.find("#player .cover");
		this.coverWidth = this.cover.width();

		this.playerRight = this.$el.find("#player .player");
		this.playerRightWidth = this.playerRight.width();

		window.addEventListener("scroll", function(){
			scope.scrollHeight = $(document).scrollTop();
			console.log(scope.scrollHeight);
			scope.player.height(scope.playerHeight - scope.scrollHeight)
			scope.cover.width(scope.coverWidth - scope.scrollHeight)
			scope.playerRight.css({width:"calc(100% - "+scope.cover.width()+"px)"})
			// this.player
		});

	},
	show: function(){

	},
	hide: function(){

	}
});
module.exports = ContentView;
