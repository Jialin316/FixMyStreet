Fonctionnalité: Authentification de l'utilisateur
Scenario: Créer un compte
Étant donné que le nom d'utilisateur n'est pas déjà utilisé
Et que l'email n'est pas déjà utilisé
Et que le numéro de mobile n'est pas déjà utilisé
Et que le mot de passe est valide
Et que le nom complet existe
Et que le reCAPTCHA est valide
Lorsque l'utilisateur soumet le formulaire de création de compte
Alors un email de confirmation doit être envoyé à l'utilisateur
Et l'utilisateur confirme la création du compte via le lien dans l'email
Alors le compte doit être créé avec succès

Scenario: Créer un compte avec un email déjà enregistré
Étant donné que le nom d'utilisateur n'est pas déjà utilisé
Et que l'email est déjà enregistré
Et que le mot de passe est valide
Et que le nom complet existe
Et que le reCAPTCHA est valide
Lorsque l'utilisateur soumet le formulaire de création de compte
Alors l'utilisateur doit voir un message disant : "Cet email est déjà enregistré."
