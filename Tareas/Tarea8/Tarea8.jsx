/* eslint-disable no-unused-vars */
import React from 'react';
import "./estilos.css"
import 'bootstrap/dist/css/bootstrap.css';
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpeg';
// import img3 from './images/img3.jpg';
// import img4 from './images/img4.jpg';
// import img5 from './images/img5.jpg';
export const Tarea8 = () => {

    return (
        <div className='container'>
            <ul>
                <li className='question'>
                    ¿Qué hace la etiqueta input de HTML y como se utilizan?
                </li>
                <ul>
                    <li>El elemento HTML input se usa para crear controles interactivos para formularios para poder recibir datos del usuario.</li>
                </ul>
                <li className='question'>
                    Desarrolla en tu pagina web un ejemplo de un formulario utilizando la etiqueta input.
                </li>
                <div>
                    <label>Ingrese su nombre:</label>
                    <input type='text' ></input>
                </div>

                <li className='question'>
                    Desarrolla en tu pagina web un muestrario de al menos 10 tipos de inputs diferentes.
                </li>
                <div>
                    <input type="button"></input>
                    <br></br>
                    <input type="checkbox"></input>
                    <br></br>
                    <input type="date"></input>
                    <br></br>
                    <input type="email"></input>
                    <br></br>
                    <input type="image"></input>
                    <br></br>
                    <input type="search"></input>
                    <br></br>
                    <input type="time"></input>
                    <br></br>
                    <input type="password"></input>
                    <br></br>
                    <input type="file"></input>
                    <br></br>
                    <input type="radio"></input>
                </div>
                <li className='question'>
                    ¿Qué es el lenguaje JavaScript?
                </li>
                <ul>
                    <li>JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web.</li>
                </ul>
                <li className='question'>
                    ¿Para qué sirve el leguaje JS?
                </li>
                <ul>
                    <li>Sirve para mostrar actualizaciones de datos, mapas interactivos, animación de gráficos 2D/3D, sirve para agregar comportamiento dinámico a las páginas web.</li>
                </ul>
                <li className='question'>
                    ¿A qué se refiere el DOM (Document Object model) en el desarrollo Web?
                </li>
                <ul>
                    <li>
                        El Modelo de objeto de documento es una interfaz de programación para los documentos HTML y XML. Conecta las páginas web a scripts o lenguajes de programación.
                        Se refiere a la estructura del documento HTML que se encuentra anidadas unas dentro de otras.
                        El DOM se refiere a como podemos acceder a esta estructura y modificar los elementos de HTML desde JavaScript.
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuál es la diferencia entre los archivos HTML, CSS y JS?
                </li>
                <ul>
                    <li>
                        HTML: es un lenguaje de marcado que se utiliza para estructurar y dar significado a la página web, definiendo párrafos, encabezados, etc.
                    </li>
                    <li>CSS: es utilizado para aplicar estilo a nuestro contenido HTML, establecer colores de fondo, tipos de letra, etc.</li>
                    <li>JavaScript: lenguaje de secuencias de comandos que permite crear contenido de actualización dinámica.</li>
                </ul>
                <li className='question'>
                    ¿Para qué sirve la etiqueta script?
                </li>
                <ul>
                    <li>
                        Esta etiqueta sirve para insertar o hacer referencia a un script (documento de JavaScript) dentro de un documento HTML.
                    </li>
                </ul>
                <li className='question'>
                    ¿En qué consiste los 3 métodos para cambiar elementos tipo Tag Name, ID y Class Name con JS?
                </li>
                <ul>
                    <li>
                        En JavaScript podemos utilizar diferentes métodos para cambiar elementos en el DOM basados en el nombre de la etiqueta (Tag Name), su ID y el nombre de la clase.
                    </li>
                    <li>
                        Por Tag Name: en JavaScript obtenemos el elemento al utilizar el método getElementByTagName(), éste nos traerá todos los elementos que coincidan con el nombre de la etiqueta ingresada.
                    </li>
                    <li>
                        Por ID: Utilizamos el método getElementById(), esto nos da acceso al elemento mediante su ID única y específica.
                    </li>
                    <li>
                        Por Class Name: utilizamos el método getElementByClassName() para obtener todos los elementos que coincidan con un nombre de clase específico.
                    </li>
                </ul>
                <li className='question'>
                    ¿Como se declaran variables en JS?                </li>
                <ul>
                    <li>
                        Este lenguaje de programación no tiene en cuenta los espacios en blanco y nuevas líneas, si tiene distinción entre mayúsculas y minúsculas, al crear una variable no es necesario definir el tipo de dato que almacenará, no se necesita terminar cada sentencia con punto y coma y pueden incluirse comentarios.
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuál es la sintaxis de la programación en JS?
                </li>
                <ul>
                    <li>
                        Var: son de alcance global</li>
                    <li>
                        Let: declarar variables que sólo estarán disponibles en el bloque en el que se declaró.
                    </li>
                    <li>
                        Const: variables con un valor constante, una vez asignado su valor, no puede cambiar.
                    </li>
                </ul>
                <li className='question'>
                    ¿Como se declaran funciones en JS?
                </li>
                <ul>
                    <li>
                        function nombre(){ }
                    </li>
                    <li>
                        asignamos una variable anónima var=nombre=function(){ }
                    </li>
                </ul>
                <li className='question'>
                    ¿Como se llaman funciones en JS?
                </li>
                <ul>
                    <li>
                        Con el nombre de la función nombre() o pasándole los parámetros que requiere la función.
                    </li>
                </ul>
                <li className='question'>
                    ¿Cómo declaras una función interna de un HTML con JS y como declaras un documento externo con JS?
                </li>
                <ul>
                    <li>
                        Se puede utilizando la etiqueta script y onclick() para mandarla a llamar. En un archivo externo especificamos la ruta en la etiqueta script y cuando queramos activarla lo hacemos con la función onclick()
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuáles ciclos de programación están disponibles en JS?
                </li>
                <ul>
                    <li>
                        Tenemos disponibles los ciclos for, while y do while
                    </li>
                </ul>
                <li className='question'>
                    ¿Cuáles funciones de condicional están disponibles en JS?
                </li>
                <ul>
                    <li>
                        Tenemos disponibles if, else if y los operadores ternarios.
                    </li>
                </ul>



            </ul>

        </div>
    )
}
export default Tarea8