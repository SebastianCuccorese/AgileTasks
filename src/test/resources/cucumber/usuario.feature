Feature: Usuario

  Scenario: registrar usuario
    Given un usuario no registrado con userName "Jorge1234", password "qwertyasdfghi" y email "joge@gmail.com"
    When se registra el usuario
    Then el usuario está registrado

  Scenario: loguear usuario
    Given un usuario registrado con userName "Jorge12345", password "qwertyasdfghi" y email "joge@gmail.com"
    When se logea el usuario con userName "Jorge12345", password "qwertyasdfghi"
    Then el usuario está logeado

  Scenario: cambiar contraseña de usuario
    Given un usuario registrado con userName "Jorge123456", password "12345" y email "joge@gmail.com"
    When cambio la contraseña del usuario a "nueva-contraseña1234"
    Then el usuario tiene como contraseña "nueva-contraseña1234"

  Scenario: cambiar email de usuario
    Given un usuario registrado con userName "Jorge1234567", password "12345" y email "joge@gmail.com"
    When cambio el email del usuario a "nuevoMail@gmail.com"
    Then el usuario tiene como email "nuevoMail@gmail.com"