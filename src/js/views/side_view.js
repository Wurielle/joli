var SideView = Backbone.View.extend({
	initialize: function() {
		
  },
	render: function(json){
		this.json = json;

        // on ajouter le template html
        var template = require('../../templates/side.html');
        var html = template({side: this.json});
        this.$el.append(html);
	},
	show: function(){

	},
	hide: function(){

	}
});
module.exports = SideView;
