/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "emailTemplate": {
        "body": "<p>Hola,</p>\n<p>Hemos notado que ingresaste a {APP_NAME} desde un nuevo dispositivo.</p>\n<p>Si fuiste tu ignora este correo.</p>\n<p><strong>Si no haz sido tu cambia tus credenciales de la apliaccion {APP_NAME} para quitar acceso a la cuenta .</strong></p>\n<p>\n  Gracias,<br/>\n  equipo {APP_NAME}\n</p>",
        "subject": "Login de un nuevo dispositivo"
      }
    },
    "confirmEmailChangeTemplate": {
      "body": "<p>Hola,</p>\n<p>Haz click en el link inferior para confirmar tu nueva dirección.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirmar nueva dirección</a>\n</p>\n<p><i>Si no haz pedido cambiar tu dirección de correo, ignora este mensaje.</i></p>\n<p>\n  Gracias,<br/>\n  equipo {APP_NAME}\n</p>",
      "subject": "Confirma tu nueva dirección de correo en {APP_NAME}"
    },
    "otp": {
      "emailTemplate": {
        "body": "<p>Hola,</p>\n<p>Tu contraseña de un solo uso es: <strong>{OTP}</strong></p>\n<p><i>Si no haz pedido una contraseña de un solo uso, ignora este mensaje.</i></p>\n<p>\n  Gracias,<br/>\n  equipo {APP_NAME}\n</p>",
        "subject": "OTP para {APP_NAME}"
      }
    },
    "resetPasswordTemplate": {
      "body": "<p>Hola,</p>\n<p>Haz click en el link para reiniciar tu contraseña</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reiniciar contraseña</a>\n</p>\n<p><i>Si no haz pedido reiniciar tu contraseña, ignora este email.</i></p>\n<p>\n  Gracias,<br/>\n  equipo {APP_NAME}\n</p>",
      "subject": "Reinicie su contraseña para {APP_NAME}"
    },
    "verificationTemplate": {
      "body": "<p>Hola,</p>\n<p>Gracias por unirte a {APP_NAME}.</p>\n<p>Haz click aquí para verificar tu cuenta.</p>\n\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  MUchas gracias,<br/>\n  equipo {APP_NAME}\n</p>",
      "subject": "Verifica tu correo para {APP_NAME} "
    }
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "emailTemplate": {
        "body": "<p>Hello,</p>\n<p>We noticed a login to your {APP_NAME} account from a new location.</p>\n<p>If this was you, you may disregard this email.</p>\n<p><strong>If this wasn't you, you should immediately change your {APP_NAME} account password to revoke access from all other locations.</strong></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        "subject": "Login from a new location"
      }
    },
    "confirmEmailChangeTemplate": {
      "body": "<p>Hello,</p>\n<p>Click on the button below to confirm your new email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-email-change/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Confirm new email</a>\n</p>\n<p><i>If you didn't ask to change your email address, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
      "subject": "Confirm your {APP_NAME} new email address"
    },
    "otp": {
      "emailTemplate": {
        "body": "<p>Hello,</p>\n<p>Your one-time password is: <strong>{OTP}</strong></p>\n<p><i>If you didn't ask for the one-time password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
        "subject": "OTP for {APP_NAME}"
      }
    },
    "resetPasswordTemplate": {
      "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, you can ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
      "subject": "Reset your {APP_NAME} password"
    },
    "verificationTemplate": {
      "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
      "subject": "Verify your {APP_NAME} email"
    }
  }, collection)

  return app.save(collection)
})
