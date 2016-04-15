if (Meteor.isClient) {
    Meteor.subscribe('listMovimientos');

    Template.incomeForm.events({
    'submit form': function (event) {
            event.preventDefault();

            var opcion=event.target.moneyOption.value;
            var valor=event.target.amount.value;
            var concepto=event.target.detail.value;
            var currency=event.target.currency.value;

            Movimientos.insert({fecha:new Date(),tipo:opcion,valor:valor,moneda:currency,concepto:concepto})

        }
    });

    Template.incomeRegisters.events({
        'click .delete-movement':function(event){
            Movimientos.remove({_id:event.target.dataset.id});
        },

        'click .update-movement':function(event){
            var movimiento= Movimientos.findOne({_id:event.target.dataset.id});
            var formId='#modalUpdate ';

            var domElement={
                valor:$(formId.concat('#updateAmount')),
                concepto:$(formId.concat('#updateConcept')),
                _id:$(formId.concat('#updateID'))
            }
            domElement.valor.val(movimiento.valor);
            domElement.concepto.val(movimiento.concepto);
            domElement._id.val(movimiento._id);
        }

    });

    Template.incomUpdateForm.events({
       'submit form':function(event){
           event.preventDefault();

           var id=event.target.IdMovement.value;
           var opcion=event.target.moneyOption.value;
           var valor=event.target.amount.value;
           var concepto=event.target.detail.value;
           var currency=event.target.currency.value;

           Movimientos.update({_id:id},{$set:{
               fecha:new Date(),
               tipo:opcion,
               valor:valor,
               moneda:currency,
               concepto:concepto
           }});

           $('#modalUpdate').modal('hide');
           console.log('Submit', currency);
       }
    });

    Template.incomeRegisters.helpers({
        moneyRegisters:function(){
            return Movimientos.find().fetch();
        }
    })
}

