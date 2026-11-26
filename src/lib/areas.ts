import type { IconName } from "@/components/Icon";

// Contenido de las páginas por área (/areas/[slug]).
// Cada página apunta a una búsqueda local ("abogado de X en Mendoza").
// El texto es información general: cualquier cambio de criterio legal
// debe revisarlo la abogada antes de publicarse.

export type AreaFaq = { q: string; a: string };

export type Area = {
  slug: string;
  icon: IconName;
  /** Nombre corto para tarjetas, menús y breadcrumbs */
  name: string;
  /** Etiqueta chica sobre el título */
  kicker: string;
  /** H1 de la página */
  h1: string;
  /** <title> (el layout raíz agrega " | Agustina Gonzalez Vicario - Abogada") */
  metaTitle: string;
  metaDescription: string;
  /** Bajada del hero */
  lead: string;
  image: string;
  imageAlt: string;
  intro: string[];
  /** "En qué te puedo ayudar" */
  services: string[];
  /** Cómo se trabaja el caso, en orden */
  steps: { title: string; text: string }[];
  /** Qué conviene tener a mano para la primera consulta */
  documents: string[];
  faqs: AreaFaq[];
};

export const areas: Area[] = [
  {
    slug: "amparos-de-salud-mendoza",
    icon: "health_and_safety",
    name: "Amparos de salud",
    kicker: "Derecho de la salud",
    h1: "Abogada de amparos de salud en Mendoza",
    metaTitle: "Abogada de amparos de salud en Mendoza | Obras sociales y prepagas",
    metaDescription:
      "¿Tu obra social, prepaga o el Estado te niega un tratamiento, medicamento o cirugía? Amparos de salud en Mendoza con la abogada Agustina Gonzalez Vicario. Consultas online.",
    lead:
      "Cuando una obra social, una prepaga o el Estado niega o demora una cobertura, el amparo es la vía judicial urgente para que la justicia ordene cumplir.",
    image: "/imagenes/salud.jpeg",
    imageAlt: "Amparos de salud contra obras sociales y prepagas en Mendoza",
    intro: [
      "El derecho a la salud tiene protección constitucional. Si la cobertura que necesitás está siendo negada, recortada o demorada sin una razón válida, la acción de amparo permite pedirle a un juez una solución rápida.",
      "En los casos urgentes se puede solicitar una medida cautelar para que la cobertura se otorgue mientras dura el proceso. Cada caso se analiza con la documentación médica y la respuesta (o el silencio) de la entidad.",
    ],
    services: [
      "Medicamentos de alto costo y tratamientos oncológicos",
      "Cirugías, internaciones y prótesis",
      "Prestaciones por discapacidad (terapias, transporte, escolaridad, acompañante)",
      "Tratamientos de fertilidad",
      "Aumentos o bajas de planes de prepagas",
      "Coberturas negadas por obras sociales provinciales o nacionales",
    ],
    steps: [
      { title: "Revisión del caso", text: "Analizamos la indicación médica, la negativa o demora de la entidad y la urgencia del tratamiento." },
      { title: "Intimación previa", text: "Cuando el tiempo lo permite, se intima formalmente a la obra social o prepaga para que cumpla." },
      { title: "Presentación del amparo", text: "Si no responde o se niega, se presenta el amparo y, si hace falta, el pedido de medida cautelar." },
      { title: "Seguimiento", text: "Controlamos que la orden judicial se cumpla en tiempo y forma hasta que la cobertura esté efectiva." },
    ],
    documents: [
      "Orden o prescripción médica y resumen de historia clínica",
      "Credencial de la obra social o prepaga",
      "Negativa por escrito, mails o constancias del reclamo (si las hay)",
      "Certificado único de discapacidad, si corresponde",
    ],
    faqs: [
      {
        q: "¿Qué es un amparo de salud?",
        a: "Es una acción judicial rápida para proteger el derecho a la salud cuando una obra social, una prepaga o el Estado niegan o demoran una prestación. El juez puede ordenar que se cubra el tratamiento.",
      },
      {
        q: "¿Cuánto tarda un amparo de salud?",
        a: "Depende del caso y del juzgado, pero es un proceso más rápido que un juicio común. En situaciones urgentes se puede pedir una medida cautelar para obtener la cobertura mientras se resuelve el amparo.",
      },
      {
        q: "¿Necesito que la obra social me rechace por escrito?",
        a: "No siempre. Una demora injustificada o la falta de respuesta también pueden justificar el amparo. Igual conviene guardar todos los reclamos, mails y constancias que tengas.",
      },
      {
        q: "¿Se puede hacer un amparo contra una prepaga?",
        a: "Sí. Las prepagas están obligadas a cubrir, como mínimo, las prestaciones del Programa Médico Obligatorio, además de lo que establezca tu plan.",
      },
    ],
  },
  {
    slug: "despidos-mendoza",
    icon: "balance",
    name: "Despidos y derecho laboral",
    kicker: "Derecho laboral",
    h1: "Abogada laboral en Mendoza: despidos e indemnizaciones",
    metaTitle: "Abogada laboral en Mendoza | Despidos e indemnizaciones",
    metaDescription:
      "¿Te despidieron o trabajás en negro? Abogada laboral en Mendoza: despidos sin causa, indemnizaciones, diferencias salariales y registración. Consultá tu caso.",
    lead:
      "Si te despidieron, te deben salarios o trabajás sin registrar, es importante asesorarte antes de firmar nada o de responder un telegrama.",
    image: "/imagenes/laboral.jpeg",
    imageAlt: "Abogada laboral en Mendoza para despidos e indemnizaciones",
    intro: [
      "La Ley de Contrato de Trabajo protege al trabajador frente al despido sin causa, el trabajo no registrado y los incumplimientos salariales. Lo que se haga en los primeros días, especialmente el intercambio de telegramas, suele definir el resultado del reclamo.",
      "Analizamos tu situación, calculamos lo que te corresponde según la normativa vigente y definimos la mejor estrategia: negociación, conciliación o demanda judicial.",
    ],
    services: [
      "Despido sin causa o con causa injustificada",
      "Cálculo y reclamo de indemnización, preaviso y liquidación final",
      "Trabajo no registrado o mal registrado",
      "Diferencias salariales y horas extras impagas",
      "Despido indirecto por incumplimientos del empleador",
      "Redacción y respuesta de telegramas laborales",
    ],
    steps: [
      { title: "Consulta inicial", text: "Revisamos recibos, telegramas y fechas para entender la relación laboral y cómo terminó." },
      { title: "Intimaciones", text: "Si hace falta, se envían los telegramas para fijar tu posición y reclamar lo adeudado." },
      { title: "Negociación o conciliación", text: "Buscamos un acuerdo cuando conviene, siempre con números claros." },
      { title: "Demanda judicial", text: "Si no hay acuerdo, se inicia el juicio laboral y te acompañamos en cada etapa." },
    ],
    documents: [
      "Recibos de sueldo (los que tengas)",
      "Telegramas o cartas documento enviados y recibidos",
      "Fecha de ingreso, horario y tareas que realizabas",
      "Mensajes, mails o testigos que acrediten la relación laboral",
    ],
    faqs: [
      {
        q: "¿Qué me corresponde si me despiden sin causa?",
        a: "En general, la indemnización por antigüedad, el preaviso (si no te lo dieron), la integración del mes de despido y la liquidación final con vacaciones y aguinaldo proporcionales. El monto exacto depende de tu caso.",
      },
      {
        q: "¿Tengo que firmar la liquidación final?",
        a: "Firmar el recibo no te hace perder el derecho a reclamar diferencias, pero conviene consultarlo antes y no firmar renuncias ni acuerdos sin asesoramiento.",
      },
      {
        q: "Trabajo en negro, ¿puedo reclamar?",
        a: "Sí. La relación laboral se puede probar con testigos, mensajes, pagos u otros elementos, y el reclamo incluye los derechos que correspondían como trabajador registrado.",
      },
      {
        q: "¿Cuánto tiempo tengo para reclamar?",
        a: "Los créditos laborales tienen plazo de prescripción, por lo que no conviene esperar. Consultá cuanto antes para no perder derechos.",
      },
    ],
  },
  {
    slug: "accidentes-de-trabajo-art-mendoza",
    icon: "healing",
    name: "ART y accidentes de trabajo",
    kicker: "Riesgos del trabajo",
    h1: "Abogada para reclamos a la ART en Mendoza",
    metaTitle: "Abogada para reclamos a la ART en Mendoza | Accidentes de trabajo",
    metaDescription:
      "Accidentes de trabajo, in itinere y enfermedades profesionales en Mendoza. Reclamos a la ART por incapacidad, alta prematura y prestaciones. Consultá tu caso.",
    lead:
      "Si te accidentaste trabajando, yendo o volviendo del trabajo, o tenés una enfermedad causada por tus tareas, la ART tiene que darte atención médica y, si corresponde, una indemnización.",
    image: "/imagenes/hero-2.jpg",
    imageAlt: "Reclamos a la ART por accidentes de trabajo en Mendoza",
    intro: [
      "El sistema de riesgos del trabajo obliga a la ART a brindar prestaciones médicas y económicas. Muchas veces el problema aparece con un alta anticipada, un rechazo del siniestro o un porcentaje de incapacidad menor al real.",
      "Te acompañamos en el trámite ante la Comisión Médica y, si hace falta, en el reclamo judicial, para que la incapacidad se evalúe correctamente y cobres lo que corresponde.",
    ],
    services: [
      "Accidentes en el lugar de trabajo",
      "Accidentes in itinere (yendo o volviendo del trabajo)",
      "Enfermedades profesionales",
      "Rechazo del siniestro por parte de la ART",
      "Alta médica prematura o incapacidad mal calculada",
      "Trámites ante Comisiones Médicas",
    ],
    steps: [
      { title: "Denuncia y documentación", text: "Verificamos que el accidente esté denunciado y reunimos estudios y constancias médicas." },
      { title: "Comisión Médica", text: "Te acompañamos en el trámite y en la evaluación de la incapacidad." },
      { title: "Revisión del resultado", text: "Si el porcentaje o la decisión no son correctos, analizamos cómo impugnarlos." },
      { title: "Reclamo judicial", text: "Cuando corresponde, se lleva el caso a la justicia para obtener una reparación adecuada." },
    ],
    documents: [
      "Número de siniestro y datos de la ART",
      "Estudios, informes médicos y certificados",
      "Constancia del alta (si te la dieron)",
      "Recibos de sueldo",
    ],
    faqs: [
      {
        q: "¿Qué es un accidente in itinere?",
        a: "Es el que ocurre en el trayecto entre tu casa y el trabajo (o al revés). La ART también debe cubrirlo, siempre que el recorrido no se haya interrumpido o desviado por motivos ajenos al trabajo.",
      },
      {
        q: "Me dieron el alta pero sigo con dolor, ¿qué hago?",
        a: "Podés no estar de acuerdo con el alta. Conviene consultarlo rápido, porque hay plazos para cuestionarla y para pedir que se evalúe la incapacidad que quedó.",
      },
      {
        q: "¿La ART me paga si quedo con una incapacidad?",
        a: "Si el accidente o la enfermedad te dejaron una incapacidad permanente, corresponde una indemnización calculada según el porcentaje de incapacidad, tu salario y tu edad.",
      },
      {
        q: "¿Necesito abogado para ir a la Comisión Médica?",
        a: "Sí, es recomendable contar con patrocinio letrado desde el inicio para que tus derechos estén protegidos durante todo el trámite.",
      },
    ],
  },
  {
    slug: "accidentes-de-transito-mendoza",
    icon: "directions_car",
    name: "Accidentes de tránsito",
    kicker: "Daños y perjuicios",
    h1: "Abogada de accidentes de tránsito en Mendoza",
    metaTitle: "Abogada de accidentes de tránsito en Mendoza | Daños y perjuicios",
    metaDescription:
      "Reclamos por accidentes de tránsito en Mendoza: lesiones, incapacidad, daños al vehículo y gastos médicos. Como conductor, acompañante, ciclista o peatón.",
    lead:
      "Si sufriste un accidente como conductor, acompañante, motociclista, ciclista o peatón, podés reclamar los daños a quien lo causó y a su aseguradora.",
    image: "/imagenes/dañosyprejuicios.jpeg",
    imageAlt: "Reclamos por accidentes de tránsito en Mendoza",
    intro: [
      "Después de un accidente, el reclamo puede incluir lesiones, incapacidad, daño moral, gastos médicos y de traslado, y los daños materiales. Las aseguradoras suelen ofrecer menos de lo que corresponde, por eso conviene asesorarse antes de aceptar una propuesta.",
      "Reunimos la prueba, negociamos con la compañía de seguros y, si no hay una oferta justa, iniciamos la demanda.",
    ],
    services: [
      "Lesiones e incapacidad física o psicológica",
      "Daño moral y gastos médicos, de farmacia y de traslado",
      "Daños al vehículo y privación de uso",
      "Accidentes en moto, bicicleta o como peatón",
      "Reclamos a compañías de seguros",
      "Accidentes en transporte público",
    ],
    steps: [
      { title: "Datos del siniestro", text: "Reunimos la denuncia, datos del otro vehículo y del seguro, fotos y testigos." },
      { title: "Reclamo a la aseguradora", text: "Se presenta el reclamo y se evalúa cualquier oferta con números claros." },
      { title: "Mediación", text: "Se intenta un acuerdo en la instancia previa al juicio cuando corresponde." },
      { title: "Juicio por daños", text: "Si no hay acuerdo, se inicia la demanda con pericias médicas y mecánicas." },
    ],
    documents: [
      "Denuncia policial o del seguro y exposición",
      "Datos del otro conductor, patente y aseguradora",
      "Fotos del lugar, de los vehículos y de las lesiones",
      "Certificados médicos, estudios y comprobantes de gastos",
    ],
    faqs: [
      {
        q: "¿A quién le reclamo después de un accidente de tránsito?",
        a: "Al responsable del accidente (conductor y titular del vehículo) y a su compañía de seguros, que es quien normalmente paga la indemnización.",
      },
      {
        q: "Iba como acompañante, ¿puedo reclamar?",
        a: "Sí. Como acompañante, peatón o ciclista también tenés derecho a reclamar por las lesiones y los daños sufridos.",
      },
      {
        q: "¿Cuánto tiempo tengo para reclamar?",
        a: "En general, el plazo para reclamar daños es de tres años desde el accidente, pero hay situaciones especiales. Lo mejor es consultar cuanto antes para preservar la prueba.",
      },
      {
        q: "La aseguradora me ofreció un monto, ¿lo acepto?",
        a: "Antes de aceptar, conviene que un abogado revise si la oferta cubre todos los daños, incluyendo incapacidad y daño moral. Una vez firmado el acuerdo, es difícil volver atrás.",
      },
    ],
  },
  {
    slug: "sucesiones-mendoza",
    icon: "family_restroom",
    name: "Sucesiones",
    kicker: "Derecho sucesorio",
    h1: "Abogada de sucesiones en Mendoza",
    metaTitle: "Abogada de sucesiones en Mendoza | Declaratoria de herederos",
    metaDescription:
      "Iniciá la sucesión en Mendoza con acompañamiento claro: declaratoria de herederos, inventario, inscripción de bienes y partición de la herencia.",
    lead:
      "Cuando fallece un familiar, la sucesión es el trámite judicial que permite que los herederos puedan disponer de los bienes: casas, autos, cuentas bancarias y más.",
    image: "/imagenes/sucesorio.jpeg",
    imageAlt: "Trámite de sucesión y declaratoria de herederos en Mendoza",
    intro: [
      "La sucesión ordena quiénes son los herederos y cómo se dividen los bienes. Sin ella no se puede vender, transferir ni inscribir lo heredado.",
      "Te acompañamos en todo el proceso con explicaciones claras y buscando acuerdos entre los herederos para que el trámite sea lo más simple y rápido posible.",
    ],
    services: [
      "Inicio de la sucesión (con o sin testamento)",
      "Declaratoria de herederos",
      "Inventario y avalúo de bienes",
      "Inscripción de inmuebles y vehículos a nombre de los herederos",
      "Partición y acuerdos entre herederos",
      "Cesión de derechos hereditarios",
    ],
    steps: [
      { title: "Reunión de documentación", text: "Partidas, títulos de propiedad y datos de los bienes del causante." },
      { title: "Inicio del juicio", text: "Se presenta la sucesión ante el juzgado y se publican los edictos." },
      { title: "Declaratoria de herederos", text: "El juez declara quiénes son los herederos." },
      { title: "Inscripción y partición", text: "Se inscriben los bienes y, si corresponde, se dividen entre los herederos." },
    ],
    documents: [
      "Partida de defunción",
      "Partidas de nacimiento o matrimonio que acrediten el vínculo",
      "Títulos de propiedad, cédulas de vehículos y datos de cuentas",
      "Testamento, si existe",
    ],
    faqs: [
      {
        q: "¿Cuándo hay que iniciar una sucesión?",
        a: "No hay un plazo fijo para iniciarla, pero hace falta para vender, transferir o inscribir los bienes heredados. Demorarla puede complicar el trámite y generar deudas o conflictos.",
      },
      {
        q: "¿Quiénes son herederos si no hay testamento?",
        a: "La ley establece el orden: en general, hijos y cónyuge; si no hay hijos, padres y cónyuge; y luego otros parientes. Cada caso se analiza con las partidas correspondientes.",
      },
      {
        q: "¿Todos los herederos tienen que estar de acuerdo?",
        a: "No es obligatorio para iniciarla, pero cuando hay acuerdo el trámite es más rápido y económico. Si hay conflicto, el proceso también puede resolverlo.",
      },
    ],
  },
  {
    slug: "derecho-de-familia-mendoza",
    icon: "diversity_1",
    name: "Derecho de familia",
    kicker: "Familia",
    h1: "Abogada de familia en Mendoza: divorcios y alimentos",
    metaTitle: "Abogada de familia en Mendoza | Divorcios, alimentos y cuidado personal",
    metaDescription:
      "Divorcios, cuota alimentaria, cuidado personal y régimen de comunicación en Mendoza. Acompañamiento cercano para resolver conflictos familiares.",
    lead:
      "Divorcios, alimentos, cuidado de los hijos y régimen de comunicación: acompañamiento cercano para ordenar cada situación familiar, priorizando el acuerdo siempre que sea posible.",
    image: "/imagenes/familia.jpeg",
    imageAlt: "Abogada de derecho de familia en Mendoza",
    intro: [
      "Los conflictos familiares necesitan claridad y sensibilidad. El objetivo es encontrar soluciones que protejan a cada integrante, especialmente a los hijos.",
      "Cuando hay acuerdo, se formaliza de manera rápida. Cuando no lo hay, se actúa en la justicia para resolver lo pendiente: alimentos, cuidado personal, comunicación o bienes.",
    ],
    services: [
      "Divorcio de común acuerdo o unilateral",
      "Fijación, aumento o reclamo de cuota alimentaria",
      "Cuidado personal de los hijos",
      "Régimen de comunicación",
      "Compensación económica y división de bienes",
      "Medidas de protección en situaciones de violencia",
    ],
    steps: [
      { title: "Escucha y análisis", text: "Conocemos la situación familiar y lo que necesitás resolver con prioridad." },
      { title: "Propuesta y acuerdo", text: "Cuando es posible, se busca un convenio que ordene alimentos, cuidado y bienes." },
      { title: "Presentación judicial", text: "Se presenta el acuerdo para su homologación o, si no lo hay, el reclamo correspondiente." },
      { title: "Seguimiento", text: "Acompañamos el cumplimiento de lo resuelto y sus eventuales modificaciones." },
    ],
    documents: [
      "Partida de matrimonio y de nacimiento de los hijos",
      "Comprobantes de ingresos y gastos del grupo familiar",
      "Datos de bienes en común",
      "Acuerdos o resoluciones anteriores, si existen",
    ],
    faqs: [
      {
        q: "¿Necesito el acuerdo de mi pareja para divorciarme?",
        a: "No. El divorcio se puede pedir de común acuerdo o de forma unilateral, sin necesidad de explicar los motivos. Lo que haya que resolver sobre hijos y bienes se ordena en el mismo proceso.",
      },
      {
        q: "¿Hasta qué edad se paga la cuota alimentaria?",
        a: "En general hasta los 21 años, y puede extenderse hasta los 25 si el hijo estudia o se capacita y eso le impide mantenerse solo.",
      },
      {
        q: "¿Cómo se define con quién viven los hijos?",
        a: "La ley prioriza el cuidado personal compartido. Si no hay acuerdo, el juez decide según el interés superior de los niños.",
      },
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
