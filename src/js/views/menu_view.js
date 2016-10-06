var MenuView = Backbone.View.extend({
	initialize: function() {
		
  },
	render: function(json){
		this.json = json;
        // on ajouter le template html
        var template = require('../../templates/menu.html');
        var html = template({menu: this.json});
        this.$el.append(html);
	},
	show: function(){

	},
	hide: function(){

	}
});
module.exports = MenuView;
