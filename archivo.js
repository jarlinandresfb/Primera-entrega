const fs = require ('fs');

let opciones = {
	id:{
		alias:'i',
		demand : true
	},
	nombre:{
		alias:'n',
		demand : true
	},
	cedula:{
		alias:'c',
		demand : true
	}
};

let mensajeCursoInvalido = (curso) => {
	console.log('El id '+ curso + ' ingresado no corresponde a ningun curso.' + '\n');
}

let crearArchivo = (nombre,cedula,curso) => {
	texto = 'El estudiante ' + nombre +' con cedula ' + cedula +' se ha matriculado en el curso ' + curso.nombre +' con id: ' + curso.id +', tiene una duración de '+curso.duracion
	+' horas y un costo de ' +curso.costo+' pesos.';
	fs.writeFile('Inscripcion-'+curso.nombre+'-id-'+curso.id+'-'+nombre+'-'+cedula+'.txt',texto,(err) => {
		if (err) throw (err);
		console.log('Inscripcion exitosa (archivo creado)');
			
	});
	
}



module.exports = {
	opciones,
	mensajeCursoInvalido,
	crearArchivo,
	
	
};