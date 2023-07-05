/* eslint-disable no-unused-vars */
import React from 'react';
export const Tarea9 = () => {

    return (
        <div className='container'>
            <br></br>
            <ul>
                <li className='question'>
                    ¿Qué es el lenguaje PHP?
                </li>
                <ul>
                    <li>Lenguaje de programación de uso general para desarrollo web. </li>
                </ul>
                <li className='question'>
                    ¿Para qué sirve el leguaje PHP?
                </li>
                <ul>
                    <li>Se utiliza para generar contenido dinámico en páginas web y aplicaciones web.
                        Puede interactuar con BD y enviar y recibir datos a través de formularios.
                    </li>
                </ul>


                <li className='question'>
                    ¿Cuál es la diferencia entre los archivos HTML y PHP?
                </li>
                <ul>
                    <li>HTML se utiliza para estructurar y presentar el contenido en la web, mientras que php es un lenguaje de programación diseñado para el desarrollo web dinámico.
                        Los archivos de PHP se procesan en el servidor antes de ser enviados al navegador web.
                    </li>
                </ul>
                <li className='question'>
                    ¿Para qué sirve la etiqueta de apertura y cierre php?
                </li>
                <ul>
                    <li>Se utiliza en archivos PHP para delimitar bloques de código.</li>
                    <li>Se utiliza en archivos HTML para insertarle código PHP.</li>
                </ul>
                <li className='question'>
                    ¿Cuáles son los pasos y requisitos para cargar un archivo PHP en un servidor?
                </li>
                <ul>
                    <li>Configurar un servidor web (Apache)</li>
                    <li>Instalar PHP</li>
                    <li>Colocar el archivo a utilizar en la ubicación adecuada (raíz) </li>
                </ul>
                <li className='question'>
                    Elabora un programa básico “Hola mundo” con PHP, describe el funcionamiento y elementos utilizados. Inserta el programa embebido con repplit en tu página.
                </li>
                <iframe width="100%" height="600px" src="https://replit.com/@andreassl/HelloWorld#index.php"></iframe>
                <li className='question'>
                    ¿Para qué sirve la función echo en PHP?
                </li>
                <ul>
                    <li>
                        Para imprimir y mostrar datos en la pantalla
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuál es la sintaxis de la programación en PHP?
                </li>
                <ul>
                    <li>
                        Etiquetas de apertura y cierre
                    </li>
                    <li>
                        Comentarios: Puedes usar // para comentarios de una sola línea y /* */ para comentarios de varias líneas.
                    </li>
                    <li>
                        Las variables comienzan con el símbolo $ seguido del nombre de la variable.
                    </li>
                    <li>
                        No es necesario declarar explícitamente el tipo de una variable.
                    </li>
                    <li>
                        Se admiten operadores aritméticos, de comparación y operadores lógicos.
                    </li>
                    <li>
                        Estructuras de control: PHP ofrece estructuras de control como condicionales (if, else, elseif), bucles (for, while, do-while, foreach), y estructuras de control de flujo (switch, break, continue).
                    </li>
                    <li>
                        Las funciones en PHP se hacen realizado function nombreFuncion() { }
                    </li>
                    <li>
                        Puedes incluir otros archivos en PHP utilizando la función include o require
                    </li>
                </ul>
                <li className='question'>
                    Describe la diferencia y consideraciones especiales al utilizar caracteres en mayúsculas en PHP, al utilizarlo en palabras reservadas y en variables.
                </li>
                <ul>
                    <li>
                        Las palabras reservadas del lenguaje PHP son sensibles a las mayúsculas y minúsculas
                    </li>
                    <li>
                        En PHP, los nombres de variables no son sensibles a las mayúsculas y minúsculas.
                    </li>
                    <li>
                        PHP permite el uso de caracteres en mayúsculas en los nombres de variables si se desea.
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo se declaran variables en PHP?
                </li>
                <ul>
                    <li>
                        Se declaran con el símbolo de $ seguido del nombre de la variable, tampoco es necesario especificar el tipo de dato
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo se declaran funciones en PHP?
                </li>
                <ul>
                    <li>
                        function nombre(){ }
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo se llaman funciones en PHP?
                </li>
                <ul>
                    <li>
                        nombre()
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuáles ciclos de programación están disponibles en PHP?
                </li>
                <ul>
                    <li>
                        while, do while, for, foreach (arreglos),
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuáles funciones de condicional están disponibles en PHP?
                </li>
                <ul>
                    <li>
                        if, if else, if elseif else, switch
                    </li>
                </ul>
                <li className='question'>
                    Identifica los diferentes métodos reservados para el tratamiento de archivos.
                </li>
                <ul>
                    <li>
                        fopen(): Abre un archivo en modo de lectura, escritura o ambos.
                    </li>
                    <li>
                        fclose(): Cierra un archivo abierto.
                    </li>
                    <li>
                        fread(): Lee contenido desde un archivo abierto.
                    </li>
                    <li>
                        fwrite(): Escribe contenido en un archivo abierto.
                    </li>
                    <li>
                        file_get_contents(): Lee el contenido de un archivo completo en una cadena.
                    </li>
                    <li>
                        file_put_contents(): Escribe contenido en un archivo completo.
                    </li>
                    <li>
                        fgets(): Lee una línea de un archivo abierto.
                    </li>
                    <li>
                        fputs(): Escribe una línea en un archivo abierto.
                    </li>
                    <li>
                        feof(): Comprueba si se ha alcanzado el final de un archivo.
                    </li>
                    <li>
                        filesize(): Obtiene el tamaño de un archivo en bytes.
                    </li>
                    <li>
                        unlink(): Elimina un archivo.
                    </li>
                    <li>
                        rename(): Cambia el nombre de un archivo.
                    </li>
                    <li>
                        copy(): Copia un archivo a una nueva ubicación.
                    </li>
                    <li>
                        is_file(): Verifica si una ruta es un archivo.
                    </li>
                    <li>
                        is_dir(): Verifica si una ruta es un directorio.
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo se utiliza el método Open/Read en el manejo de archivos con PHP?
                </li>
                <ul>
                    <li>
                        El método fopen() se utiliza para abrir un archivo en PHP y devuelve un descriptor de archivo que se utilizará en otras operaciones de lectura o escritura.
                        .R se utiliza como método solo de read al abrir un archivo
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo se utiliza el método Create/Write en el manejo de archivos con PHP?
                    . W se utiliza como método de escritura al abrir un archivo
                </li>
                <ul>
                    <li>
                        El método write se utiliza para poder crear un archivo y escribir contenido en él.
                    </li>
                </ul>
                <li className='question'>
                    Concluye cuales serian las ventajas de integrar PHP en una pagina web.
                </li>
                <ul>
                    <li>
                        PHP proporciona una desarrollo ágil de backend, así como manipulación de bases de datos y accesos
                        a BD. Además de ser un lenguaje compatible con muchos sistemas operativos y facilita el desarrollo web.
                    </li>
                </ul>



            </ul>

        </div>
    )
}
export default Tarea9