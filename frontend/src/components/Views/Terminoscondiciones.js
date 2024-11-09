import Card from "../Servicios/Card";

function TerminosCondiciones() {
    return (
        <>
            <Card style={{ width: '70%', margin: '2rem auto', padding: '1.5rem', lineHeight: '1.6' }}>
                <h2 className="text-center mb-4">Términos y Condiciones</h2>
                <section>
                    <h3>1. Aceptación de Términos</h3>
                    <p>
                        Al acceder y utilizar nuestro sitio web para crear o visualizar recetas, usted acepta cumplir con estos términos y condiciones.
                        Si no está de acuerdo con alguna parte de estos términos, le exhortamos a que no utilice nuestra plataforma.
                    </p>
                </section>

                <section>
                    <h3>2. Creación de Recetas</h3>
                    <h4>2.1. Responsabilidad del Usuario</h4>
                    <p>
                        Los usuarios son responsables de la exactitud y veracidad de las recetas que publiquen en el sitio. Al enviar una receta, el usuario garantiza que posee todos los derechos sobre el contenido y que este no infringe derechos de propiedad intelectual de terceros.
                    </p>

                    <h4>2.2. Contenido Prohibido</h4>
                    <p>
                        Queda estrictamente prohibido publicar recetas que contengan información falsa, engañosa, o irreal, incluyendo recetas no probadas, que incluyan ingredientes ilegales, o que promuevan prácticas inseguras.
                    </p>
                </section>

                <section>
                    <h3>3. Visualización de Recetas</h3>
                    <p>
                        Los usuarios pueden acceder a una variedad de recetas publicadas por la comunidad, aunque la validez de estas recetas no está garantizada. Recomendamos usar su propio criterio al seguir cualquier receta.
                    </p>
                </section>

                <section>
                    <h3>4. Eliminación de Recetas</h3>
                    <h4>4.1. Política de Revisión</h4>
                    <p>
                        Nos reservamos el derecho de revisar y eliminar cualquier receta publicada en el sitio. Si una receta se considera inapropiada o infringe normas, será retirada inmediatamente.
                    </p>

                    <h4>4.2. Notificación al Usuario</h4>
                    <p>
                        El usuario cuyo contenido sea eliminado recibirá una notificación a través del medio proporcionado durante la creación de la receta. En casos graves, la eliminación puede ocurrir sin aviso previo.
                    </p>
                </section>

                <section>
                    <h3>5. Modificaciones a los Términos</h3>
                    <p>
                        Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos desde su publicación en el sitio, por lo que recomendamos revisarlos periódicamente.
                    </p>
                </section>

                <section>
                    <h3>6. Aceptación Continua</h3>
                    <p>
                        El uso continuo del sitio después de cambios implica aceptación de estos. Es responsabilidad del usuario mantenerse informado.
                    </p>
                </section>

                <section>
                    <h3>7. Legislación Aplicable</h3>
                    <p>
                        Estos términos se rigen por las leyes del país donde se encuentra registrado el sitio, sin considerar disposiciones de conflicto de leyes.
                    </p>
                </section>

                <p className="text-center mt-4">
                    Al usar nuestro sitio, usted reconoce haber leído, entendido y aceptado estos términos y condiciones en su totalidad.
                </p>
            </Card>
        </>
    );
}

export default TerminosCondiciones;
