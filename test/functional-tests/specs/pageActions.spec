# Page Actions
## Scroll To, Up

* Navigate to "https://reactjs.org/community/examples.html"
* Scroll to 

   |Type|Selector    |
   |----|------------|
   |link|Installation|

* Scroll up 

   |Type|Selector  |
   |----|----------|
   |link|Calculator|

## Write, Press, Click

* Navigate to "http://todomvc.com/examples/react/#/"
* Write "flow"
* Press "Enter"
* Click link "Active"
* Click checkBox with attribute "{\"class\":\"toggle\"}" near 

   |Type|Selector|
   |----|--------|
   |text|flow    |
* Click link "Completed"
* Click button "Clear completed"

## Write, Clear

* Navigate to relative path "./specs/data/IFrameTodoApp.html"
* Write "abcd"
* Clear element that is in focus
* Write "Clear it"
* Press "Enter"
* Assert text "Clear it" exists on the page.
* Assert text "abcd" does not exist

## Double Click
* Assert text "Hello World" does not exist
* Navigate to file with relative Path "/specs/data/doubleClick.html"
* Double click 

   |Type|Selector    |
   |----|------------|
   |text|Double-click|
* Assert text "Hello World" exists on the page.

## Right Click

* Navigate to file with relative Path "/specs/data/rightClick.html"
* Right click 

   |Type|Selector   |
   |----|-----------|
   |text|Someelement|
* Click "Share On Facebook"

## Hover
* Navigate to "http://react-compare-app.surge.sh/"
* Hover on element 

   |Type|Selector        |
   |----|----------------|
   |$   |".image_overlay"|
* Click "Compare"
* Hover on element 

   |Type|Selector        |
   |----|----------------|
   |$   |".image_overlay"|
* Click "Remove"

## Drag and drop
* Navigate to "https://marcojakob.github.io/dart-dnd/basic/"
* Drag ".document" and drop to ".trash"
* Drag ".document" and drop at 

   |direction|pixel|
   |---------|-----|
   |right    |300  |
   |down     |100  |

## Validate Current Url
* Navigate to "https://the-internet.herokuapp.com/"
* Assert url host is "the-internet.herokuapp.com"

## Get cuttent url after redirecting
* Navigate to "http://the-internet.herokuapp.com/"
* Click "A/B Testing"
* Validate part of current url "abtest" after redirecting