// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        $('#users-name').on('change', ArlenaFortuneTellerApp.onNameUpdate);

        //$('#users-name').change(function(){localStorage.setItem('name', $('#users-name').val());alert($('#users-name').val())};
        //$('.f-choice-colour').change(onColourUpdate());
        $('.f-choice-colour').change(function () { alert($('.f-choice-colour').val());});
        $('.f-choice-number').change(onNumberUpdate());
        $('#dataForm').submit(onFormSubmit());

        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onColourUpdate() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem('colour', $('.f-choice-colour').val());
        } else {
            alert('LocalStorage not supported');
        }
    };

    function onNumberUpdate() {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('number', $('.f-choice-number').val());
        } else {
            alert('LocalStorage not supported');
        }
    };

    function onFormSubmit() {
        if (typeof (Storage) !== 'undefined') {
            $('#enteredName').html = localStorage.getItem('name');
            $('#selectedColour').html = localStorage.getItem('colour');
            $('#selectedNumber').html = localStorage.getItem('number');

        }
    };
    
})();

