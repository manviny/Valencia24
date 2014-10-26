/**
 * paths to audios and images it can point to /images or the phone filessytem or a web
 * @type {Object}
 */
var path = {
	pictures: 'http://storage.googleapis.com/p24/vlc/es/',
	audios: 'http://storage.googleapis.com/p24/vlc/es/'
	// pictures: 'androidFileSystem//images/'	
}
var valencia;
/**
 * Carga los list desde el servidor
 * @param  {[type]} result [description]
 * @param  {[type]} err    [description]
 * @return {[type]}        [description]
 */
dpd.lits.get(function (result, err) {
  if(err) return console.log(err);
  
  	console.log(result);

	valencia = {
		lits: result,		
		telefonos: {
			policia: '',
			bomberos: ''
		},
		ciudad: {
			centro: 'Plaza del Ayuntamiento'
		},
	};  

});





