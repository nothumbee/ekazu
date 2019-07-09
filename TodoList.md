# TODO LIST

## Remaining

- Add PropTypes validation !
- Submit is not working, return e400 - new BE API
- API request fallbacks and error handling needs to be done - probably the best thing is to do it with HOC, or context API
- Add feedback when successfully added diagnosis or template {was edited, was duplicated, was saved}
- Improve login and logout - what logic is going to be provided?
- [Edit template] rerenders several times on load
- Remake validating data with Ramda
- Make image upload work

## Less important

- In [appbar] in logo - the link must be according to logged in user (admin/student)
- Improve gooey effect animation on login
- Improve maybe the data handling
- Fix edit template form and add template for
- And also divide generators when adding to form (ids must be starting by 1 or 0)
- Remake form, template is in Symptom.jsx

## Done:

- Fix spacing in exam in student case
- Add submit methods in form
- Add methods for data validation and restructure and abstract it to another file - incoming, outcoming
- Add ID fields to generators
- Add ID prop removal from generators - when its duplicate form
- Add logic to decide whether its edit data, duplicate or add data
- Add Duplicate template func
- Form validation - positive numbers, non-empty strings
- and also remove the TYPE from generator field
- Add checkbox to every input // exam, symptom and so on
- Remake the addForm
- Remake form to Ant Design form
- If exam true add malus, bonus, price as input
- Add Custom title to template
- Add Delete row and input func

## Backend fixes

- There cannot be two same diagnoses