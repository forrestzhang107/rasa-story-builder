# rasa-story-builder

rasa-story-builder is a story builder tool for Rasa conversational AI  
https://rasa.com/docs/rasa/core/stories/

## Usage

User must configure two files: parts.md and input.md  
output.md (aka stories.md) is generated using command `node start.js`

## parts.md

Here is where you can define the modular "parts" of your story.  
I recommend building this file by extracting common patterns within your existing stories.md file.

Syntax:

```
~greet
* greet
  - utter_greet

~check_email
* provide_email{"email": ""}
  - action_check_email

~check_messages
* provide_username{"username": ""}
  - action_check_messages

~goodbye
* goodbye
  - utter_goodbye
```

## input.md

This is where you build your stories out using parts.

Syntax:

```
greet
check_email
goodbye

greet
check_email
check_messages
goodbye

check_email
goodbye
```

## output.md

Generated output using the above example:

```
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
```

## Limitations

Currently, this tool does not check the syntax of the parts or input files.  
If you use this tool to generate training data, be sure to inspect the output before giving it to your model.
