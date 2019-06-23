TODO LIST
==========

Zbývá udělat:
---------------

* Add PropTypes validation !
* Submit is not working - new BE API
* API request fallbacks and error handling needs to  be done - probably the best thing is to do it with HOC, or context API
* Improve login and logout - what logic is going to be provided?

## Méně podstatné
* Improve gooey effect animation on login
* Improve maybe the data handling
* Fix edit template form and add template for
* And also divide generators when adding to form (ids must be starting by 1 or 0)
* Remake form, template is in Symptom.jsx


Hotovo:
---------------

* Add submit methods in form
*  Add methods for data validation and restructure and abstract it to another file - incoming, outcoming
*  Add ID fields to generators
*  Add ID prop removal from generators - when its duplicate form
*  Add logic to decide whether its edit data, duplicate or add data
*  Add Duplicate template func
* Form validation - positive numbers, non-empty strings
*  and also remove the TYPE from generator field
*  Add checkbox to every input // exam, symptom and so on
* Remake the addForm
* Remake form to Ant Design form
*  If exam true add malus, bonus, price as input
* Add Custom title to template
* Add Delete row and input func
