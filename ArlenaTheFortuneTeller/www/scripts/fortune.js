var ArlenaFortuneTellerApp = {};

(function ($, ns, navigator) {
    ns.onNameUpdate = function () {
        var enteredName = $('#users-name').val();
        console.log(enteredName);
        localStorage.setItem('name', enteredName);
    };

    ns.getColour = function () {
        var colour = "red";
    }

    ns.getNumber = function () {
        var number = 1;
    }

})($, ArlenaFortuneTellerApp, navigator);