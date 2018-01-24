(function(w, $, undefined) {
  'use strict';

  var App = {

    validEmail: 'tony.hall@bbc.co.uk',

    $emailSection: '',
    $emailInput: '',

    actionVisible: false,

    init: function() {
      $('#js-valid-email').text(App.validEmail);

      App.$emailSection = $('#js-user');
      App.$emailInput   = $('input', App.$emailSection);

      App.$emailInput.on('blur', App.checkUserEmail);

      $('#js-do-action').on('click', function(e) {
        e.preventDefault();
        App.doAction();
        App.focusPassword();
      });

      $('#js-dismiss-action').on('click', function(e) {
        e.preventDefault();
        App.dismissAction();
        App.focusPassword();
      });

      // If input value changes, reset.
      App.$emailInput.on('input', function () {
        if (App.actionVisible) {
          App.dismissAction();
        }
      });
    },

    checkUserEmail: function(e) {
      var email = App.$emailInput.val();

      if (
        email !== App.validEmail &&
        email !== '' &&
        App.actionVisible === false
      ) {
        App.showAction();
      }
    },

    showAction: function() {
      App.$emailSection.addClass('field--action');
      App.actionVisible = true;
    },

    doAction: function() {
      App.$emailInput.val(App.validEmail);
      App.$emailSection.removeClass('field--action');
      App.actionVisible = false;
    },

    dismissAction: function() {
      App.$emailSection.removeClass('field--action');
      App.actionVisible = false;
    },

    focusPassword: function() {
      $('#js-password input').focus();
    },

  };

  $(App.init);
})(this, jQuery);
