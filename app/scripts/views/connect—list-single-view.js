/*global Barjeel, Backbone, JST*/

Barjeel.Views = Barjeel.Views || {};

(function () {
    'use strict';

    Barjeel.Views.ConnectListSingleView = Marionette.ItemView.extend({
        template: JST['app/scripts/templates/connect—list-single-view.hbs'],
        tagName : 'li',
        events: {
				  'click a': 'logInfoUrl'
				},
				 
				logInfoUrl: function(){
				  console.log(this.model.get('description'));
				}
    });

})();
