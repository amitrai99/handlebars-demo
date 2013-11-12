/*Simple data*/
//test data for header
var hdrData = {"heading": "Handlebars.js Template Example!"};

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
Handlebars.registerHelper('getFullURL', function(context, options) {
  var baseUrl = "http://example.com/hbars/";
  return new Handlebars.SafeString(baseUrl);
});

// (1) Read the HTML source that needs to be compiled
var chelpSrc = document.getElementById('chelp-template').innerHTML;

//(2) Compile the source
var chelpTemplate = Handlebars.compile(chelpSrc);

//(3) Generate the final markup
document.getElementById('helpUrl').innerHTML = chelpTemplate();
