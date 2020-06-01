## greet|check_email|goodbye
* greet
  - utter_greet
* provide_email{"email": ""}
  - action_check_email
* goodbye
  - utter_goodbye

## greet|check_email|check_messages|goodbye
* greet
  - utter_greet
* provide_email{"email": ""}
  - action_check_email
* provide_username{"username": ""}
  - action_check_messages
* goodbye
  - utter_goodbye

## check_email|goodbye
* provide_email{"email": ""}
  - action_check_email
* goodbye
  - utter_goodbye
