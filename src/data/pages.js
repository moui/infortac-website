export const SITE_URL = 'https://www.infortac.uy'

export const HOME = {
  path: '/',
  title: 'Tacógrafos, discos DML y control de flotas en Uruguay | Infortac',
  description: 'Análisis de discos de tacógrafo y datos GPS para empresas de transporte en Uruguay. Discos DML y bobinas BVDR. Consultá a Infortac en Lagomar, Canelones.',
}

export const PAGES = [
  {
    path: '/analisis-de-tacografos/',
    title: 'Análisis de discos de tacógrafo en Uruguay | Infortac',
    description: 'Lectura y procesamiento de discos de tacógrafo para transporte de carga y pasajeros en Uruguay. Informes de velocidad, recorridos y descansos. Consultanos.',
    label: 'Análisis de tacógrafos',
    heading: 'Análisis de discos de tacógrafo en Uruguay',
    intro: 'Convertimos los registros de su flota en información para la gestión. Realizamos la lectura, el procesamiento y el análisis de discos de tacógrafo para empresas de transporte de carga y pasajeros.',
    sections: [
      { title: 'Información para entender la operación de su flota', text: 'Analizamos los registros disponibles de distancia, velocidad y tiempos de actividad, descanso e interrupciones. Organizamos los resultados en informes que ayudan a detectar situaciones a revisar y a evaluar las políticas internas de la empresa.' },
      { title: 'Fiscalización externa y confidencial', text: 'El trabajo se realiza con discreción en el manejo de la información y sin contacto directo con los choferes. El archivo organizado de los discos permite volver a consultar los registros cuando sea necesario.' },
      { title: 'Informes con la periodicidad que su empresa necesita', text: 'Definimos el alcance, el formato y la frecuencia del reporte según la operación de su flota. Cuando cuenta con información GPS, también podemos cruzar ambas fuentes para ampliar el análisis.' },
    ],
    steps: ['Contanos qué vehículos y registros necesitás analizar.', 'Coordinamos la entrega de la información y el alcance del trabajo.', 'Procesamos los registros y elaboramos el informe acordado.'],
    faq: [
      { question: '¿El servicio incluye la instalación de tacógrafos?', answer: 'Esta propuesta se centra en la lectura y el análisis de los registros. Si necesitás instalar o reparar un equipo, consultanos para confirmar el alcance disponible antes de coordinar un trabajo.' },
      { question: '¿Puedo recibir informes adaptados a mi empresa?', answer: 'Sí. Acordamos la periodicidad y el nivel de detalle según las necesidades de tu operación, incluyendo el cruce con datos GPS cuando están disponibles.' },
    ],
  },
  {
    path: '/discos-de-tacografo/',
    title: 'Discos de tacógrafo DML y bobinas BVDR en Uruguay | Infortac',
    description: 'Discos DML de 24 horas y 7 días, escalas de 125 y 180 km/h, y bobinas BVDR. Consultá compatibilidad y pedidos. Envío sin costo en Montevideo y Ciudad de la Costa.',
    label: 'Discos DML y bobinas BVDR',
    heading: 'Discos de tacógrafo DML y bobinas BVDR en Uruguay',
    intro: 'Somos distribuidores de productos DML en Uruguay. Encontrá discos diarios y semanales para tacógrafos analógicos, y bobinas para equipos digitales BVDR. Consultanos para elegir el insumo compatible con tu equipo.',
    catalog: true,
    sections: [
      { title: 'Elegí el disco según tu tacógrafo', text: 'Antes de hacer un pedido, verificá si el equipo utiliza discos de 24 horas o conjuntos de 7 días y cuál es su escala de velocidad: 125 o 180 km/h. El formato del registro y la escala deben corresponder al modelo de tacógrafo.' },
      { title: 'Pedidos y entregas en Uruguay', text: 'Podés consultar por WhatsApp o correo indicando el modelo, la cantidad y el destino. Coordinamos el envío; en Montevideo y Ciudad de la Costa es sin costo. Para otros destinos, consultá las condiciones al solicitar el pedido.' },
    ],
    faq: [
      { question: '¿Qué diferencia hay entre un disco de 24 horas y uno de 7 días?', answer: 'El disco diario corresponde a un registro de 24 horas. La presentación semanal reúne conjuntos de 7 discos. La elección depende del formato que admite el tacógrafo del vehículo.' },
      { question: '¿Puedo usar un disco de 180 km/h en un tacógrafo de 125 km/h?', answer: 'La escala del disco debe coincidir con la del equipo. Consultanos indicando el modelo de tacógrafo para confirmar el producto antes de comprar.' },
      { question: '¿Cómo consulto por las bobinas BVDR?', answer: 'Indicá el modelo del equipo digital y la cantidad que necesitás. Comercializamos bobinas DML para tacógrafos BVDR en presentaciones de 10 y 20 unidades.' },
    ],
  },
  {
    path: '/analisis-de-datos-gps/',
    title: 'Análisis de datos GPS y gestión de flotas en Uruguay | Infortac',
    description: 'Transformamos los datos de tu proveedor GPS o VDO On Board en informes de rutas, paradas y eficiencia de flota. Análisis independiente para transporte en Uruguay.',
    label: 'Análisis de datos GPS',
    heading: 'Análisis de datos GPS para flotas en Uruguay',
    intro: 'Si tu empresa ya cuenta con rastreo satelital, te ayudamos a interpretar sus registros. Procesamos información de proveedores GPS y plataformas VDO On Board para convertirla en indicadores útiles para la gestión.',
    sections: [
      { title: 'Aprovechá la información de tu sistema actual', text: 'Trabajamos sobre los datos que ya registra tu plataforma, sin importar el proveedor. Acordamos qué información está disponible y cómo utilizarla para responder las preguntas de tu operación.' },
      { title: 'Rutas, paradas y desvíos en informes claros', text: 'Analizamos recorridos, paradas y desvíos para identificar situaciones que requieren atención. Los indicadores de eficiencia operativa y consumo dependen de los registros disponibles en cada sistema.' },
      { title: 'Una visión conjunta de la flota', text: 'Podemos integrar información satelital y registros de tacógrafo en reportes periódicos. El formato y el nivel de detalle se adaptan a las necesidades de cada empresa.' },
    ],
    steps: ['Contanos qué plataforma GPS utilizás y qué querés evaluar.', 'Revisamos los registros disponibles y acordamos los indicadores.', 'Preparamos informes periódicos para apoyar tus decisiones.'],
    faq: [
      { question: '¿Tengo que cambiar de proveedor GPS?', answer: 'No. El servicio de análisis está pensado para aprovechar los datos del sistema que ya utiliza tu empresa. Primero revisamos qué información se puede obtener de esa plataforma.' },
      { question: '¿Infortac vende el dispositivo de rastreo?', answer: 'Esta propuesta corresponde al procesamiento y análisis de información satelital de empresas que ya cuentan con GPS. Consultanos sobre tu necesidad específica para definir el servicio adecuado.' },
    ],
  },
  {
    path: '/informes-de-flotas/',
    title: 'Informes para gestión de flotas de transporte | Infortac',
    description: 'Informes periódicos para empresas de transporte a partir de registros de tacógrafo y datos GPS. Definí indicadores, frecuencia y formato con Infortac.',
    label: 'Informes de flotas',
    heading: 'Informes claros para gestionar tu flota de transporte',
    intro: 'Reunimos los datos disponibles de tacógrafos y sistemas GPS en reportes pensados para responder preguntas concretas de la operación de tu empresa.',
    sections: [
      { title: 'Un reporte según tus necesidades', text: 'Acordamos el alcance, los indicadores, la periodicidad y el formato antes de comenzar. Los resultados dependen de la información disponible y de la calidad de los registros recibidos.' },
      { title: 'Una lectura conjunta de los registros', text: 'Cuando la empresa dispone de ambos tipos de información, podemos relacionar datos de tacógrafo con registros satelitales para aportar contexto a rutas, velocidades, paradas y tiempos de actividad.' },
      { title: 'Información organizada y confidencial', text: 'Procesamos los registros con discreción y entregamos la información acordada para que el equipo de la empresa pueda consultarla y usarla en su gestión.' },
    ],
    steps: ['Comentanos qué decisiones querés apoyar con los informes.', 'Revisamos las fuentes de datos y definimos indicadores y frecuencia.', 'Procesamos los registros y entregamos los reportes acordados.'],
    faq: [
      { question: '¿Con qué frecuencia puedo recibir informes?', answer: 'La periodicidad se acuerda según la operación y los datos disponibles. Puede ser periódica o responder a una necesidad puntual.' },
      { question: '¿Qué datos se pueden incluir?', answer: 'Podemos trabajar con registros de discos de tacógrafo y datos GPS proporcionados por la empresa. Confirmamos el alcance al revisar los formatos disponibles.' },
    ],
  },
]

export function normalizePath(path) {
  if (path === '/' || path === '/index.html') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

export function getPage(path) {
  const normalized = normalizePath(path)
  return normalized === '/' ? HOME : PAGES.find((page) => page.path === normalized)
}
