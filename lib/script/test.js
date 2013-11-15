/*Simple data*/
//test data for header
var hdrData = {
  "heading": "Handlebars.js Template Example!",
  "intro": {
    "msg": {
      "introTxt": 'This is a header intro',
      "moreInfo": 'More information moreInfo'
    }
  },
  "myData": "<strong>Some team here</strong>"
};

// (1) Read the HTML source that needs to be compiled
var hdrSrc = document.getElementById('hdr-template').innerHTML;

//(2) Compile the source
var hdrTemplate = Handlebars.compile(hdrSrc);

//(3) Generate the final markup
document.getElementById('header').innerHTML = hdrTemplate(hdrData);

/*Array/List of data*/
//test data for navigation
var navData = {
  links : [
    {"url": "http://google.com", "text": "Google"},
    {"url": "http://yahoo.com", "text": "yahoo"},
    {"url": "http://facebook.com", "text": "facebook"},
    {"url": "http://aol.com", "text": "aol"},
    {"url": "http://example.com", "text": "example"}
  ]

};


// (1) Read the HTML source that needs to be compiled
var navSrc = document.getElementById('nav-template').innerHTML;

//(2) Compile the source
var navTemplate = Handlebars.compile(navSrc);

//(3) Generate the final markup
document.getElementById('nav').innerHTML = navTemplate(navData);

/* Conditional */
var infoData = {"info": 'Yes', 'foo': null };
// (1) Read the HTML source that needs to be compiled
var infoSrc = document.getElementById('info-template').innerHTML;

//(2) Compile the source
var infoTemplate = Handlebars.compile(infoSrc);

//(3) Generate the final markup
document.getElementById('info').innerHTML = infoTemplate(infoData);


/* Custom Helpers */
//Simple/inline helper
//Simple Helper is called by name followed by arguments separated by a space.
//Parameter can be a quoted String or a context object.
Handlebars.registerHelper('getFullURL', function(url, params) {
  var baseUrl = "http://example.com/hbars/";
  return new Handlebars.SafeString(baseUrl + url + '?' + params);
});

var chelpSrc = document.getElementById('chelp-template').innerHTML;
var chelpTemplate = Handlebars.compile(chelpSrc);
var helpData = {params : 'foo=1&bar=2&q=bill'};

document.getElementById('helpUrl').innerHTML = chelpTemplate(helpData);

//Block helper
/**
 * The helper will receive an options hash. 
 * This options hash contains a function (options.fn) that behaves like a normal compiled Handlebars template. 
 * Specifically, the function will take a context and return a String.
 */
Handlebars.registerHelper('decorate', function(options) {
  console.log(options);
  return options.fn(this);
});

var blockHelpSrc = document.getElementById('blockhelp-template').innerHTML;
var blockHelpTemplate = Handlebars.compile(blockHelpSrc);
var blockHelpData = {class : 'fast-race', text: 'This is from Block Helper!'};

document.getElementById('blockHelper').innerHTML = blockHelpTemplate(blockHelpData);

