/*!
 * JavaScript v1.0.0
 *
 * Copyright 2006, 2015
 * Released under the MIT license
 * UTStarcom Inc.
 */

 bs_alert = function() {}
 bs_alert.warn = function(message) {
             $('#alert_placeholder').html('<div class="alert alert-warning"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
             setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
                 $('#alert_placeholder').html('');
             }, 5000);
         }

 bs_alert.error = function(message) {
             $('#alert_placeholder').html('<div class="alert alert-danger"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
             setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
                 $('#alert_placeholder').html('');
             }, 5000);
         }

 bs_alert.success = function(message) {
             $('#alert_placeholder').html('<div class="alert alert-success"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
             setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
                 $('#alert_placeholder').html('');
             }, 5000);
         }
