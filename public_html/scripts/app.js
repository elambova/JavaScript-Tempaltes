(function () {
    "use strict";
    require.config({
        paths: {
            "handlebars": "../bower_components/handlebars/handlebars",
            "jquery": "../bower_components/jquery/jquery",
            "controls": "controls",
            "data": "data/data"
        }
    });
    require(["controls", "data", "jquery"], function (controls, data, $) {
        var comboBox = controls.ComboBox(data.people);
        var template = $("#person-template").html();
        var comboBoxHtml = comboBox.render(template);
        var container = document.getElementById('container');
        container.innerHTML = comboBoxHtml;
        comboBox.toggleClick();
        comboBox.find();
    });
}());
