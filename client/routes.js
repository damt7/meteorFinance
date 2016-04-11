Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/ingresos', {name: 'ingresos', controller: 'MainController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {});
  }
});
