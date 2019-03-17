<?php

/**
 * @file
 * Phone login api example.
 */

/**
 * Implements hook_phone_login_sms_alter().
 */
function hook_custom_sms_alter(&$message) {
  $message['message'] = "Your verifiy code is :{$message['random']}";
}
