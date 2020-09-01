import { goto } from '..';

// ------------------------------------------
// goto
// https://docs.taiko.dev/api/goto
// ------------------------------------------
goto('https://google.com'); // $ExpectType Promise<Response>
goto('google.com'); // $ExpectType Promise<Response>
// $ExpectType Promise<Response>
goto('example.com', {
  navigationTimeout: 10000,
  headers: { Authorization: 'Basic cG9zdG1hbjpwYXNzd29y2A==' },
});
async () => {
  const response = await goto('gauge.org');
  if (response.status.code === 200) {
    console.log('Success!!');
  }
};

// ------------------------------------------
// reload
// https://docs.taiko.dev/api/reload
// ------------------------------------------

// ------------------------------------------
// goBack
// https://docs.taiko.dev/api/goBack
// ------------------------------------------

// ------------------------------------------
// goForward
// https://docs.taiko.dev/api/goForward
// ------------------------------------------

// ------------------------------------------
// currentURL
// https://docs.taiko.dev/api/currentURL
// ------------------------------------------

// ------------------------------------------
// title
// https://docs.taiko.dev/api/title
// ------------------------------------------

// ------------------------------------------
// click
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// doubleClick
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// rightClick
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// dragAndDrop
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// hover
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// focus
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// write
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// clear
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// attach
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// press
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// highlight
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// clearHighlights
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// mouseAction
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// scrollTo
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// scrollRight
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// scrollLeft
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// scrollUp
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// scrollDown
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// screenshot
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// tap
// https://docs.taiko.dev/api/aaa
// ------------------------------------------

// ------------------------------------------
// emulateTimezone
// https://docs.taiko.dev/api/aaa
// ------------------------------------------
