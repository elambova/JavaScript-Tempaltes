define(["handlebars", "jquery"], function (Handlebars, $) {
    var ComboBox = (function () {
        var ComboBox = function (items) {
            if (!(this instanceof arguments.callee)) {
                return new ComboBox(items);
            }
            this.items = items;
        };

        ComboBox.prototype.render = function (template) {
            var container = document.getElementById('person-template');
            var comboBoxTemplate = Handlebars.compile(template);
            var newContainer = comboBoxTemplate({
                collection: this.items
            });
            container.innerHTML = newContainer;
            return container.innerHTML;
        };

        ComboBox.prototype.find = function () {
            var items = this.items;
            var $input = $("#input-section");
            $input.focus(function () {
                $("#container").show();
            });
            $input.blur(function () {
                $("#container").hide();
            });
            $input.on("input", function () {
                var inputValue = $input.val();
                var selector = "";
                var regExp = new RegExp("^" + inputValue, "i");
                $(items).each(function (key, item) {
                    selector = "#person-item-" + item.id;
                    if (item.name.match(regExp)) {
                        $(selector).show();
                    } else {
                        $(selector).hide();
                    }
                });
            });
        };

        ComboBox.prototype.toggleClick = function () {
            var button = document.getElementById("button-dropdown");
            var template = document.getElementById("container");
            template.style.display = 'none';
            button.addEventListener("click", function () {
                if (template.style.display === 'none') {
                    template.style.display = 'block';
                } else {
                    template.style.display = 'none';
                }
            });
        };

        return ComboBox;
    }());

    return {
        ComboBox: ComboBox
    };
});