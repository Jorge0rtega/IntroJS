/* metodos de propiedad */
const reproductor={
    reproducir:function(id){
        console.log(`reproduciendo canción con el id ${id}`);
    },
    pausar:function(){
        console.log(`pausando...`);
    },
    crearPlaylist:function(nombre){
        console.log('Creando la playlist '+nombre)
    },
    reproducirPlaylist:function(nombre){
        console.log('Reproduciendo la playlist '+nombre)
    }
}

console.log(reproductor)
reproductor.reproducir(2840)
reproductor.pausar()

/* tambien se puede borrar por fuera */
reproductor.borrarCancion=function(id){
    console.log(`eliminando la cancion ${id}`)
}

reproductor.borrarCancion(20);

reproductor.crearPlaylist("jorge");
reproductor.reproducirPlaylist("jorge");