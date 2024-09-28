Feature: Authentification de l'utilisateur

Scenario: CONNEXION
Étant donné que le nom d'utilisateur est déjà utilisé
Et que l'email est enregistré
Et que le mot de passe est correct
Lorsque l'utilisateur soumet le formulaire de connexion
Alors l'utilisateur doit être connecté avec succès


Scenario: CONNEXION avec mot de passe incorrect
Étant donné que le nom d'utilisateur est déjà utilisé
Et que l'email est enregistré
Et que le mot de passe est incorrect
Lorsque l'utilisateur soumet le formulaire de connexion
Alors l'utilisateur doit voir un bouton "Mot de passe oublié ?"
Lorsque l'utilisateur clique sur le bouton "Mot de passe oublié ?"
Alors l'utilisateur doit choisir une méthode de récupération
Lorsque l'utilisateur sélectionne l'option Email
Alors un lien doit être envoyé à l'email de l'utilisateur pour réinitialiser le mot de passe
Lorsque l'utilisateur sélectionne l'option Numéro de téléphone
Alors un lien doit être envoyé au numéro de téléphone de l'utilisateur pour réinitialiser le mot de passe
Lorsque l'utilisateur clique sur le lien de réinitialisation
Alors l'utilisateur doit pouvoir définir un nouveau mot de passe
Lorsque l'utilisateur retourne à la page de connexion
Et entre le nouveau mot de passe
Alors l'utilisateur doit être connecté avec succès


Scenario: CONNEXION avec un email non enregistré
Étant donné que le nom d'utilisateur est déjà utilisé
Et que l'email n'est pas enregistré
Et que le mot de passe est correct
Lorsque l'utilisateur soumet le formulaire de connexion
Alors l'utilisateur doit voir un message indiquant : "L'email n'existe pas"