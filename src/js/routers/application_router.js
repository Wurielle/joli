var Menu = require('../views/menu_view');
var Content = require('../views/content_view');
var Side = require('../views/side_view');
require('../../datas/datas.json');

var ApplicationRouter = Backbone.Router.extend({
	routes: {
        "*actions": "defaultRoute",
  	},
  	initialize: function() {
        this.listener = {};
        _.extend(this.listener, Backbone.Events);

        this.json = require('../../datas/datas.json');
		this.menu = new Menu({el: $('#menu')});
		this.menu.render(this.json.menu);
		this.content = new Content({el: $('#content'), json: this.json.content});
		this.content.render(this.json.content);
        this.side = new Side({el: $('#side'), json: this.json.side});
		this.side.render(this.json.side);
		// this.homepage.render(this.json.pages[0]);
    },
});
module.exports = ApplicationRouter;
