# Mio.js
Intuitive, lightweight HTML string factory in JS syntax

```javascript
Mio.p("This is my paragraph content");
//returns '<p>This is my paragraph content</p>'

Mio.p("This is content using attributes", {class: "myClass", id: "myID"});
//returns '<p class="myClass" id="myID">This is content using attributes</p>'

Mio.div("", {data_ng_app:"myApp"});
//returns '<div data-ng-app="myApp"></div>'

Mio.header(Mio.img("/img/sample/sampleImg.jpg", "Nested Image Alt") + Mio.h1("Nested Header", {class: "mySiteHeader"}));
//Returns '<header><img src="/img/sample/sampleImg.jpg" alt="Nested Image Alt"/><h1 class="mySiteHeader">Nested Header</h1></header>'
```

While working with html in JS, it always kind of bothered me switching between having to write JS code and HTML code, and it was always kind of a bother neatly packing up the HTML. Now you can write html code and continue to think in JS! Mio handles all the pesky and awkward to type html syntax in clean, easy to read JS. Just insert your returned string into the innerHTML of whatever container you want!

Using Mio is easy! Just download Mio.js (Only 4KB) and code away!

# Docs (In a manner of speaking)

Mio is pretty intuitive, but here is the gist of it:

All Mio functions are named after the element it creates HTML for. And all but 3 use the same parameters:

```javascript
Mio.p(content, attr = {});

//content is a string representing whatever content you want between the tags. This argument is required.
//attr is an object that contains the attributes you will give the tag. This argument is optional, and is defaulted to an empty object.
```

There are 3 Mio functions that do not follow this same structure:

```javascript
Mio.a(link, content, attr = {});

//The link parameter is a string containing the href attr. Entering a link value of "www.github.com" will add 'href="www.github.com"
//to the tag. It is allowed to pass an empty string to link and add an href identifier in the attr object, and will accomplish the same purpose.

Mio.br();
//Simply returns a line break. No parameters

Mio.img(src, alt, attr = {});
//The src parameter is a string with the image source file location. The alt parameter is the alt attribute, and as always the attr //object are your attributes. It is allowed to pass empty strings to src and alt and put them into the attr object instead.
```

Thanks for reading, and enjoy!
