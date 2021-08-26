# Banana Text Translator App

# Description

###### (levelZero_markSix)

The app translates the text entered by the user into the banana language. The text conversion happens through an [API](https://api.funtranslations.com/).

### My learnings

**fetch():** The fetch() method is used to request to the server and load the information in the webpages. It does not directly return the JSON response body but instead returns a promise that resolves with a Response object. The Response object does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method.

```javascript
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Tech Stack

Javascript, CSS, HTML

# Installation

```bash
git clone
```
