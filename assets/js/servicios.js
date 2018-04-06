app.service('Usuario', function() {

    this.obtener = function(id) { return axios('/data/usuario/' + id) }

});
