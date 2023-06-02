(function($,Coral) {
    "use strict";
    var registry = $(window).adaptTo("foundation-registry");
    registry.register("foundation.validation.validator",{
        selector:"[data-validation=Header multifield]",
        validate:function(element){
            var el = $(element);
            let max=el.data("max-items");
            let items=el.children("coral-multifield-item").length;
            if(items>max){
                return "You can add only 3 items"}
        }
    });

})(jQuery,Coral);