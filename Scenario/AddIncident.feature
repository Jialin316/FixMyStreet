Fonctionnalité: Ajout d'incident
Scenario: Ajouter un incident
Étant donné que l'utilisateur est connecté
Lorsque l'utilisateur soumet un nouveau rapport d'incident
Et que l'ID de l'incident est unique
Et que la description est valide
Et que l'emplacement est valide
Alors l'incident doit être ajouté avec succès
Et un message de confirmation doit être affiché à l'utilisateur
