import Card from "../Servicios/Card";

function TerminosCondiciones() {
    return (
        <>
            <Card style={{ width: '90%', margin: '2rem auto', padding: '1.5rem', lineHeight: '1.6' }}>
                <h1 className="text-center mb-4">Términos y Condiciones de Uso de Recetario</h1>
                <section>
                    <h2>1. Aceptación de los Términos</h2>
                    <p>
                    Al acceder y utilizar Recetario (en adelante, el "Sitio"), el usuario (en adelante, el "Usuario") acepta quedar vinculado por los presentes Términos y Condiciones de Uso (en adelante, los "Términos"). Si el Usuario no está de acuerdo con alguna de las disposiciones de estos Términos, deberá abstenerse de utilizar el Sitio.
                    </p>
                </section>

                <section>
                    <h2>2. Uso del Sitio</h2>
                    <h4>2.1. Propósito del Sitio:</h4>
                    <p>
                    Recetario es una plataforma en línea diseñada para facilitar el intercambio de recetas culinarias entre usuarios residentes en Argentina.
                    </p>

                    <h4>2.2. Licencia de Uso:</h4>
                    <p>
                    Recetario otorga al Usuario una licencia limitada, no exclusiva, intransferible y revocable para acceder y utilizar el Sitio, siempre y cuando cumpla con estos Términos.
                    </p>
                </section>

                <section>
                    <h2>3. Contenido del Usuario</h2>

                    <h4>3.1. Publicación de Recetas:</h4>
                    <p>
                    El Usuario es el único responsable del contenido que publica en el Sitio. Al publicar una receta, el Usuario declara y garantiza que: (I) posee todos los derechos sobre el contenido; (II) el contenido es original o que cuenta con la autorización necesaria para su uso; y (III) el contenido no infringe ningún derecho de terceros, incluyendo, pero no limitado a, derechos de autor, marcas comerciales, secretos comerciales o derechos de privacidad.
                    </p>

                    <h4>3.2. Contenido Prohibido:</h4>
                    <p>
                    Está estrictamente prohibido publicar contenido que sea falso, engañoso, difamatorio, obsceno, ilegal o que infrinja los derechos de terceros. Asimismo, queda prohibido publicar recetas que promuevan prácticas culinarias inseguras o que incluyan ingredientes ilegales.
                    </p>

                </section>

                <section>
                    <h2>4. Derechos de Propiedad Intelectual</h2>
                    <p>
                    Todos los derechos de propiedad intelectual sobre el Sitio y su contenido, incluyendo, pero no limitado a, marcas comerciales, logotipos, diseños, textos, imágenes y software, son propiedad de Nosotros o de nuestros licenciantes.
                    </p>
                </section>

                <section>
                    <h2>5. Eliminación de Contenido</h2>
                    <p>
                    Nos reservamos el derecho, a nuestra discreción, de eliminar cualquier contenido que infrinja estos Términos o que consideremos inapropiado.
                    </p>
                </section>

                <section>
                    <h2>6. Modificación de los Términos</h2>
                    <p>
                    Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios serán efectivos a partir de su publicación en el Sitio. Se recomienda al Usuario revisar periódicamente estos Términos para mantenerse informado de cualquier actualización.
                    </p>
                </section>

                <section>
                    <h2>7. Limitación de Responsabilidad</h2>
                    <p>
                    En la medida máxima permitida por la ley aplicable, Nosotros no seremos responsables por ningún daño directo, indirecto, incidental, consecuente o punitivo resultante del uso o la imposibilidad de usar el Sitio.
                    </p>
                </section>

                <section>
                    <h2>8. Ley Aplicable y Jurisdicción</h2>
                    <p>
                    Estos Términos se regirán e interpretarán de conformidad con las leyes de (Argentina). Cualquier disputa que surja en relación con estos Términos se someterá a la jurisdicción exclusiva de los tribunales de (Ciudad Autonoma de Buenos Aires, Argentina).
                    </p>
                </section>

                <section>
                    <h2>9. Acuerdo Completo</h2>
                    <p>
                    Estos Términos constituyen el acuerdo completo entre el Usuario y Nosotros y reemplazan a cualquier comunicación o acuerdo previo, ya sea oral o escrito.
                    </p>
                </section>

                <p className="text-center mt-4">
                Al utilizar el Sitio, el Usuario reconoce haber leído, comprendido y aceptado íntegramente estos Términos y Condiciones de Uso.
                </p>
            </Card>
        </>
    );
}

export default TerminosCondiciones;
