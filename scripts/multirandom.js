
      function generarContrasenas() {
        const cantidad = document.getElementById("cantidad").value;
        const longitud = document.getElementById("longitud").value;
        const caracteres =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+-./:=?@_";
        let contrasenas = [];

        for (let i = 0; i < cantidad; i++) {
          let contraseña = "";
          const array = new Uint32Array(longitud);
          window.crypto.getRandomValues(array);
          for (let j = 0; j < longitud; j++) {
            const indice = array[j] % caracteres.length;
            contraseña += caracteres.charAt(indice);
          }
          contrasenas.push(contraseña);
        }

        document.getElementById("contrasenas").innerHTML = contrasenas.join(
          "<br>"
        );
      }