Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {name: 'home', controller: 'MainController'});
Router.route('/income', {name: 'income', controller: 'incomeController'});

MainController = RouteController.extend({
  action: function() {
  	this.render('home', {});
  }
});

incomeController = RouteController.extend({
    action: function() {
        this.render('income', {});
    }
});
