(function(w, $, undefined) {
  'use strict';

  var App = {

    validDomain: 'bbc.co.uk',

    $emailSection: '',
    $emailInput: '',

    actionVisible: false,

    init: function() {
      alert(`I accept "${App.validDomain}" as a valid email domain. Try misspelling it.`);
      $('#js-valid-email').text(`@${App.validDomain}`);

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
      var email  = App.$emailInput.val();
      var domain = email.split('@')[1];

      if (
        email !== '' &&
        domain !== App.validDomain &&
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
      var user = App.$emailInput.val().split('@')[0];
      App.$emailInput.val(`${user}@${App.validDomain}`);
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
