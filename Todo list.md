Todo list:
###

Using VueJS, create simple SPA for kepping track of notes.

Each note consists of title and list of todo items (task). Each item within the todo list is represented via checkbox (identifying the state of the task) and string content.

Application consists of two pages:
---
1. Main page.
    Main page contains list of all notes. Each note is represented with title and up to three items of the todo list (checkbox should be disabled). Allowed actions on the page:
    -   create new note
    -   edit a note
    -   delete the note

2. Note page.
    The note page allows the user to edit the title of note, update the checkboxes on the items, and then save the changes. Allowed actions actions on the page:
    -   save the changes
    -   cancel the changes
    -   delete the note
    -   add todo item
    -   trigger the checkbox
    -   undo the edit on text input fields
    -   redo the undone edit on text input fields


What are we going to pay attention functionality-wise:
---
-   usability of interface, user experience while editing the notes (except the buttons of Ctrl+Z and Command+Z for undo/redo actions - these can be ignored)
-   as the application is SPA, there should be no refreshes on the pages
-   if user refreshes page manually, the state of todo list should remain as before
-   no need for adapting page for mobile view

What are we going pay attention code-wise:
---
-   Easily readable code
-   Logic of the app is decomposed into reasonable number of self-contained Vue components
-   Code should be tabulated, without any components (or imported elements) that have no relation to the task and are unused
-   Follow the DRY

Expected stack:
-   JavaScript (>= es6)
-   Webpack

We expect from you the `link to the public repository` (github, gitlab, bitbucket), as well as `link to the site` to test given functionality (`or dockerfile`)
