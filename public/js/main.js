(function(w, $, undefined) {
  'use strict';

  var App = {

    $userElm: '',
    $userInput: '',

    actionCompleted: false,

    init: function() {
      App.$userElm = $('#js-user');
      App.$userInput = $('input', App.$userElm);

      App.$userInput.on('blur', App.checkUserEmail);

      $('#js-primary-action').on('click', App.doPrimaryAction);
      $('#js-secondary-action').on('click', App.doSecondaryAction);

      // If input value changes, be ready to suggest a new action.
      App.$userInput.on('change', function () { App.actionCompleted = false; });
    },

    checkUserEmail: function(e) {
      // If email is incorrect and an action has not been picked:
      if (App.$userInput.val() !== 'tony@gmail.com' && App.actionCompleted === false) {
        App.suggestAction();
      }
    },

    suggestAction: function() {
      App.$userElm.addClass('field--action');

      // Select typo.
      App.$userInput[0].focus();
      App.$userInput[0].setSelectionRange(5,99);
    },

    doPrimaryAction: function(e) {
      e.preventDefault();
      App.$userInput.val('tony@gmail.com');
      App.$userElm.removeClass('field--action');
      App.actionCompleted = true;
      App.focusPassword();
    },

    doSecondaryAction: function(e) {
      e.preventDefault();
      App.$userElm.removeClass('field--action');
      App.actionCompleted = true;
      App.focusPassword();
    },

    focusPassword: function() {
      $('#js-password input').focus();
    },

  };

  $(App.init);
})(this, jQuery);
