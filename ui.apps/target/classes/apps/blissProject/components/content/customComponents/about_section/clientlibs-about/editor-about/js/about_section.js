
(function($,Coral) {

console.log("Hello World");
    var registry = $(window).adaptTo("foundation-registry");
       registry.register("foundation.validation.validator", {
        selector: "[data-validation=alttext]",
        validate: function(element) {
            var el = $(element);
            console.log("Hello");
                let field1Value = el.closest(".cq-dialog").find("[name='./image']").val();
                 console.log(field1Value);
            if(field1Value!="")
            {
                if(el.val()=="")
                {

                    return "You must Provide Alternative text";
                }
            }
        }
    });


})(jQuery,Coral);
