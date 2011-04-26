/* pAPI: a simple js object that simplifies communication with the powells API

   REQUIREMENTS: pAPI subclasses jQuery and assumes that you already have it loaded

 */

function PowellsAPI(api_key) {
  var jQ = jQuery.sub();

  this.api_host    = 'http://api.powells.com';
  this.api_version = 'v0';
  this.api_key     = api_key;
  
  this.get    = function (){
    // first build up the url based on input
    var url_parts = new Array(this.api_host, this.api_version, this.api_key);
    for (i in arguments) { url_parts.push( arguments[i] ) } 

    $.ajax({ url     : url_parts.join('/')
           , dataType: 'json'
           //, success : function(data){console.error(data)},
           , success : function(){alert('DONE')}
           });
    /*
    */
    
  }
}
