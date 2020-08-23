define(
    [
        "DomElement",
        "DomUtil",
        "Inheritance",
        "TypeCheck",
        "Failure",
        "Merge",
        "text!buttongroup-html",
        "css!buttongroup-css"
    ], function (DomElement, DomUtil, Inheritance, TypeCheck, Failure, Merge, controlHtml) {
        /**
         * Provides button group functionality 
         * @alias ButtonGroup 
         * @constructor
         * @param {Object} options - options object
         * @param {Object} options.id - id of the element
         */
        var ButtonGroup = function(options) {
            var defaultOptions = {};
            Inheritance.inheritConstructor(DomElement, this, Merge({
                html: controlHtml,
                id: TypeCheck.isString(options.id) ? options.id : ""
            }, TypeCheck.isDefined(options) ? options : {}));

        };
        Inheritance.inheritPrototype(ButtonGroup, DomElement);
        return ButtonGroup;
    });