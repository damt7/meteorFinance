Meteor.publish('listMovimientos', function(){
    return Movimientos.find();
});
