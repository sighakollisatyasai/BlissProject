
(function($,Coral) {

console.log("Hello World");
    var registry = $(window).adaptTo("foundation-registry");
       registry.register("foundation.validation.validator", {
        selector: "[data-validation=dropdown]",
        validate: function(element) {
            var el = $(element);
            let field1Value = el.closest(".cq-dialog").find("[name='./dropdown']").val();
            let field2Value = el.closest(".cq-dialog").find("[name='./mfield']").val();
            let field3Value = el.closest(".cq-dialog").find("[name='./ffield']").val();
            let pattern=/[0-9a-z]/;
            console.log(field1Value);
            console.log(field2Value);
            if(field1Value=="male")
            {
                if(field2Value=="")
                {
                    return "You must give value for the option you have selected";
                }
                if(pattern.test(field2Value))
                {
                    return "You must provide Uppercase letters";
                }
            }
            if(field1Value=="female")
            {
                if(field3Value=="")
                {
                    return "You must give value for the option you have selected";
                }
                if(pattern.test(field3Value))
                {
                    return "You must provide Uppercase letters";
                }
            }
        }
    });


})(jQuery,Coral);
