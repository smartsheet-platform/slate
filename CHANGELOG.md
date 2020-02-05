# CHANGELOG

Documentation update for January 2020.

## Search Improvements

The information in these topics isn’t new. The change is that you can now find this information using the Search window where it was difficult to discover before: 

* [Filtering](https://smartsheet-platform.github.io/api-docs/#filtering) 
* [Formulas](https://smartsheet-platform.github.io/api-docs/#formulas) 
* [Working with complex objects: multi-contact or multi-picklist](https://smartsheet-platform.github.io/api-docs/#working-with-complex-objects-multi-contact-or-multi-picklist) 

## New Content

* OAuth—we can now accept plaintext OAuth credentials in addition to the hash method we required in the past. This change simplifies the OAuth process to conform to the OAuth 2.0 spec. See [Request an Access Token](https://smartsheet-platform.github.io/api-docs/#request-an-access-token)
* ?include=profileImage-you can add this query param to [GET /contacts/{contactId}](https://smartsheet-platform.github.io/api-docs/#get-contact)
* ?rowsModifiedSince—you can add this query param plus a date to [GET /sheets/(sheetId)](https://smartsheet-platform.github.io/api-docs/#get-sheet) to limit return payloads
* [Developer program agreement](https://www.smartsheet.com/legal/developer-program-agreement)
* [10000ft API documentation link](https://www.10000ft.com/integrations/technical-details/api-documentation)
* [Bridge by Smartsheet API documentation link](https://get.converse.ai/)
* Event Reporting system-generated userIds—details on how to decipher [system-generated userIds](https://smartsheet-platform.github.io/api-docs/#event-reporting) when you see them using our Event Reporting APIs