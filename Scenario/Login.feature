Fonctionnalité: Authentification de l'utilisateur
Scenario: CONNEXION
Étant donné que le nom d'utilisateur est déjà utilisé
Et que l'email est enregistré
Et que le mot de passe est correct
Lorsque l'utilisateur soumet le formulaire de connexion
Alors l'utilisateur doit être connecté avec succès

Scenario: CONNEXION avec un email non enregistré
Étant donné que le nom d'utilisateur est déjà utilisé
Et que l'email n'est pas enregistré
Lorsque l'utilisateur soumet le formulaire de connexion
Alors l'utilisateur doit voir un message indiquant : "L'email n'existe pas"
