/* script.js
   Funciones compartidas para el sitio:
   - menú hamburguesa móvil
   - animaciones de revelado en scroll
   - acordeones dinámicos para FAQs y secciones
   - controlador de carga inicial con animación tipo skeleton
*/

const app = (() => {
  const translations = {
    'Paz Pérez | Reformas y muebles a medida': 'Paz Pérez | Renovations and custom furniture',
    'Ayuda | Paz Pérez': 'Help | Paz Pérez',
    'Contacto | Paz Pérez': 'Contact | Paz Pérez',
    'Política de privacidad | Paz Pérez Amoblamientos': 'Privacy Policy | Paz Pérez Amoblamientos',
    'Profesionales | Paz Pérez': 'Our team | Paz Pérez',
    'Proyectos | Paz Pérez': 'Inspiration | Paz Pérez',
    'Servicios | Paz Pérez': 'Services | Paz Pérez',
    'Términos y condiciones | Paz Pérez Amoblamientos': 'Terms and Conditions | Paz Pérez Amoblamientos',
    'Trabajá con nosotros | Paz Pérez': 'Work with us | Paz Pérez',
    'Configuración | Paz Pérez Amoblamientos': 'Settings | Paz Pérez Amoblamientos',
    'Lectura': 'Reading',
    'Tamaño del texto': 'Text size',
    'Ajustá el tamaño del texto para leer con más comodidad.': 'Choose a text size that feels comfortable to read.',
    'Estándar': 'Standard',
    'Texto grande': 'Larger text',
    'Movimiento': 'Motion',
    'Reducí las animaciones y transiciones del sitio.': 'Reduce animations and transitions across the site.',
    'Reducir animaciones': 'Reduce animations',
    'contacto': 'contact page',
    '. Los reclamos de consumo pueden presentarse ante las autoridades competentes. Se aplica la legislación argentina, sin afectar las normas imperativas ni el fuero que corresponda al consumidor.': '. Consumer complaints may be submitted to the relevant authorities. Argentine law applies, without affecting mandatory rules or the venue available to consumers.',
    'Paz Pérez Amoblamientos': 'Paz Pérez Furnishings',
    'PAZ PÉREZ AMOBLAMIENTOS': 'PAZ PÉREZ FURNISHINGS',
    'Reformas y muebles a medida': 'Renovations and custom furniture',
    'Logo de Paz Pérez': 'Paz Pérez logo',
    'Ir al inicio': 'Go to home',
    'Navegación principal': 'Main navigation',
    'Navegación móvil': 'Mobile navigation',
    'Ambiente de comedor con mobiliario de madera, imagen de referencia': 'Dining area with wood furniture, reference image',
    'Estantería de living con televisor, imagen de referencia': 'Living room shelving and TV, reference image',
    'Living con sofá y mesa baja, imagen de referencia': 'Living room with sofa and coffee table, reference image',
    'Comedor con mesa y bancos de madera, imagen de referencia': 'Dining table and wood benches, reference image',
    'Diseño, fabricación e instalación para tu hogar o comercio': 'Design, fabrication and installation for your home or business',
    'Especialistas en reformas integrales, muebles de cocina, placares, living y oficinas con estilo, funcionalidad y materiales de calidad.': 'We specialize in full renovations and custom kitchen, wardrobe, living room and office furniture, combining style, function and quality materials.',
    'Transformamos espacios': 'We transform spaces',
    'Solicitá tu presupuesto': 'Request a quote',
    'Conocé al equipo': 'Meet the team',
    'Nuestros servicios': 'Our services',
    'Reformas integrales': 'Full renovations',
    'Renovamos cocinas, baños y ambientes completos con gestión de obra propia, instalaciones y terminaciones de alta calidad.': 'We renovate kitchens, bathrooms and entire rooms, coordinating the work, installations and high-quality finishes.',
    'Muebles a medida': 'Custom furniture',
    'Fabricamos muebles personalizados para cocina, dormitorio, living y oficina con diseños modernos y duraderos.': 'We make custom furniture for kitchens, bedrooms, living rooms and offices, with modern, durable designs.',
    'Diseño y asesoramiento': 'Design and advice',
    'Proyectos funcionales que optimizan tu espacio y reflejan tu estilo, con presupuestos transparentes.': 'Practical designs that make the most of your space and reflect your style, with clear quotes.',
    'Ideas para tus espacios': 'Ideas for your space',
    'Imágenes ilustrativas. Cada diseño y presupuesto se define según tu espacio y necesidades.': 'Images are for inspiration. Each design and quote is tailored to your space and needs.',
    'Mueble de living': 'Living room furniture',
    'Ideas para integrar guardado, estantes y entretenimiento.': 'Ideas for combining storage, shelving and entertainment.',
    'Living a medida': 'A living room made for you',
    'Una propuesta para pensar distribución, comodidad y guardado.': 'An idea to explore layout, comfort and storage.',
    'Comedor funcional': 'A functional dining room',
    'Mobiliario que acompaña el uso cotidiano y el espacio disponible.': 'Furniture suited to everyday use and the available space.',
    'Compromiso con cada detalle': 'Care in every detail',
    'En Paz Pérez Amoblamientos creemos que cada rincón de tu casa tiene un potencial único esperando ser descubierto. Nos especializamos en la reforma integral de ambientes y en el diseño y fabricación de muebles que combinan funcionalidad, estilo y durabilidad.': 'At Paz Pérez Furnishings, we believe every corner of your home has unique potential. We specialize in room renovations and custom furniture that combines function, style and durability.',
    'Si buscás renovar tu cocina, modernizar tu living o encontrar ese mueble perfecto hecho a tu medida, estás en el lugar indicado.': 'Whether you want to renovate your kitchen, refresh your living room or find the perfect custom piece, we can help you get started.',
    'Atención personalizada': 'Personal attention',
    'Te acompañamos desde la primera consulta hasta el montaje final.': 'We support you from your first enquiry through final installation.',
    'Materiales de calidad': 'Quality materials',
    'Trabajamos con melamina, MDF lacado, herrajes ocultos y detalles premium.': 'We work with melamine, lacquered MDF, concealed hardware and premium details.',
    'Entrega puntual': 'Timely delivery',
    'Planificamos cada etapa para que tu proyecto avance con fechas reales.': 'We plan each stage with realistic dates to keep your project moving.',
    'Soluciones completas para tu proyecto': 'Complete solutions for your project',
    'Ofrecemos servicios integrales y modulares que convierten cada idea en un espacio real, cómodo y atractivo.': 'We offer complete and flexible services to turn ideas into comfortable, attractive spaces.',
    'Diseño y proyecto': 'Design and planning',
    'Desarrollamos propuestas funcionales, renders de ambiente y asesoramiento en materiales y colores.': 'We develop practical proposals, room renderings, and advice on materials and colors.',
    'Instalación profesional': 'Professional installation',
    'Montamos muebles e instalaciones con precisión, cuidando los detalles para que el resultado sea impecable.': 'We install furniture and fixtures carefully, paying attention to every detail.',
    'Reacondicionamiento comercial': 'Commercial refurbishments',
    'Actualizamos locales, oficinas y espacios de trabajo con soluciones prácticas y modernas para clientes exigentes.': 'We update shops, offices and workplaces with practical, modern solutions.',
    'Mantenimiento y reacondicionamiento': 'Maintenance and refurbishment',
    'Ofrecemos servicios de mantenimiento preventivo, ajustes y retoques para mantener tus muebles siempre como nuevos.': 'We offer preventive maintenance, adjustments and touch-ups to keep furniture in good condition.',
    'Un servicio integral para cada etapa': 'Support at every stage',
    'Desde la primera medición hasta la entrega final, nos ocupamos de cada etapa con equipo propio y comunicación constante.': 'From the first measurement to final delivery, we coordinate each stage and keep you informed.',
    'Solicitá una consulta': 'Get in touch',
    'Inspiración para tu espacio': 'Inspiration for your space',
    'Ideas para imaginar tu proyecto': 'Ideas to picture your project',
    'Estas imágenes son referencias ilustrativas, no fotos de obras realizadas. Contanos qué querés lograr y armamos una propuesta según tu espacio.': 'These images are for inspiration and are not photos of completed projects. Tell us what you have in mind and we can prepare an idea for your space.',
    'Referencias de distribución, materiales y guardado para conversar sobre tu espacio.': 'Ideas for layouts, materials and storage to discuss for your space.',
    'Una idea inicial para evaluar distribución y aprovechar mejor el ambiente.': 'An initial idea for exploring the layout and making better use of the room.',
    'Opciones de mobiliario para crear un espacio cómodo y funcional.': 'Furniture ideas for creating a comfortable, practical space.',
    'Calidad en cada entrega': 'Quality at every stage',
    'El alcance, los materiales, los plazos y el precio se confirman en una propuesta escrita para cada consulta.': 'The scope, materials, schedule and price are confirmed in a written proposal for each enquiry.',
    'Contanos tu idea': 'Tell us about your idea',
    'Oportunidades de colaboración': 'Collaboration opportunities',
    'Si trabajás en diseño, carpintería, instalación o reformas y querés conversar sobre una posible colaboración, escribinos con una breve presentación.': 'If you work in design, carpentry, installation or renovations and would like to discuss collaborating, send us a short introduction.',
    'Perfiles de interés': 'Areas of interest',
    'Diseño, carpintería, montaje y oficios vinculados a reformas. Las oportunidades se confirman caso por caso; esta página no anuncia vacantes activas.': 'Design, carpentry, installation and renovation trades. Opportunities are discussed individually; there are no active job openings listed here.',
    'Cómo contactarnos': 'How to reach us',
    'Contanos tu experiencia, zona de trabajo y disponibilidad. No envíes DNI, datos bancarios ni otra información sensible en el primer mensaje.': 'Tell us about your experience, work area and availability. Please do not send ID, bank details or other sensitive information in your first message.',
    'Hablemos': 'Let’s talk',
    'Escribinos a': 'Email us at',
    'con el asunto “Colaboración” o usá el': 'with “Collaboration” in the subject, or use the',
    'formulario de contacto': 'contact form',
    'Equipo con experiencia y compromiso': 'A skilled, committed team',
    'Contamos con diseñadores, carpinteros, pintores y montadores preparados para cada etapa del proyecto.': 'Our project work involves design, carpentry, painting and installation at every stage.',
    'Diseño y planificación': 'Design and planning',
    'Proyectamos espacios funcionales, elegantes y preparados para el uso diario.': 'We plan practical, elegant spaces for everyday living.',
    'Carpintería especializada': 'Specialist carpentry',
    'Fabricamos muebles de alta calidad con herrajes ocultos, guías suaves y acabados profesionales.': 'We make furniture with concealed hardware, smooth runners and professional finishes.',
    'Instalación y montaje': 'Installation and assembly',
    'Instalamos muebles y realizamos reformas con cuidado, limpieza y plazos acordados.': 'We install furniture and carry out renovations with care and agreed schedules.',
    'Nuestra experiencia': 'Our experience',
    'Proyectos a medida': 'Custom projects',
    'Adaptamos cada diseño a las medidas reales y al estilo del cliente, cuidando la comodidad y el diseño de cada ambiente.': 'We adapt each design to the actual measurements and the client’s style, with comfort in mind.',
    'Visitas y mediciones': 'Site visits and measurements',
    'Coordinamos visitas rápidas para tomar medidas y resolver dudas antes de comenzar el proyecto.': 'We arrange visits to take measurements and answer questions before work begins.',
    'Montaje profesional': 'Professional assembly',
    'Con equipos especializados, garantizamos montaje seguro y un acabado impecable en cada instalación.': 'Our skilled teams focus on safe installation and a clean finish.',
    'Cómo trabajamos': 'How we work',
    'Consultoría inicial y presupuesto claro.': 'Initial consultation and a clear quote.',
    'Diseño con medidas reales y muestras de materiales.': 'Design based on actual measurements and material samples.',
    'Fabricación, producción y montaje en obra.': 'Fabrication and on-site installation.',
    'Entrega final con supervisión y limpieza de espacio.': 'Final walkthrough and a tidy workspace.',
    'Por qué elegirnos': 'Why work with us',
    'Atención personalizada y contacto directo.': 'Personal attention and direct communication.',
    'Proyectos adaptados a tu estilo y presupuesto.': 'Projects tailored to your style and budget.',
    'Equipo local con experiencia en reformas de hogar.': 'A local team experienced in home renovations.',
    'Hablemos de tu próximo proyecto': 'Let’s talk about your next project',
    'Estamos listos para ayudarte con reformas, muebles a medida y el diseño completo de tus espacios.': 'We are ready to help with renovations, custom furniture and complete room designs.',
    'Datos de contacto': 'Contact details',
    'Email:': 'Email:',
    'Para pedir presupuesto, completá el formulario. Te responderemos por correo.': 'To request a quote, fill out the form and we will reply by email.',
    'Formulario de consulta': 'Enquiry form',
    'Los campos marcados con * son obligatorios. Usaremos estos datos únicamente para responder tu consulta. Consultá nuestra': 'Fields marked * are required. We will use these details only to reply to your enquiry. Read our',
    'Política de privacidad': 'Privacy Policy',
    'Enviá tu consulta': 'Send your enquiry',
    'Nombre *': 'Name *',
    'Correo electrónico *': 'Email address *',
    'Servicio de interés *': 'Service you are interested in *',
    'Seleccioná una opción': 'Choose an option',
    'Otro': 'Other',
    'Mensaje *': 'Message *',
    'Leí la': 'I have read the',
    'y autorizo el uso de mis datos para responder esta consulta.': 'and agree to the use of my information to reply to this enquiry.',
    'Enviar mensaje': 'Send message',
    'Enviando…': 'Sending…',
    'Coordiná una visita sin compromiso': 'Arrange a no-obligation visit',
    'Podemos visitar tu domicilio para tomar medidas, conversar sobre materiales y presentarte un presupuesto ajustado a tus necesidades.': 'We can visit your home to take measurements, discuss materials and prepare a quote for your needs.',
    'Preguntas frecuentes': 'Frequently asked questions',
    'Ayuda': 'Help',
    '¿Cómo solicito un presupuesto?': 'How do I request a quote?',
    'Completá el': 'Fill out the',
    'y contanos qué ambiente querés renovar, las medidas aproximadas y tu zona. No hace falta incluir datos sensibles.': 'and tell us which room you want to update, its approximate measurements and your area. Do not include sensitive information.',
    '¿Cuánto demora una reforma?': 'How long does a renovation take?',
    'Depende del alcance, los materiales y la disponibilidad. El plazo estimado se informa en la propuesta antes de confirmar el trabajo.': 'It depends on the scope, materials and availability. The estimated schedule will be included in the proposal before you confirm the work.',
    '¿Cómo se acuerdan el precio y los pagos?': 'How are price and payments agreed?',
    'El precio, los impuestos aplicables y las etapas de pago deben quedar detallados en la propuesta escrita para cada proyecto. Consultanos si necesitás una modalidad específica.': 'The price, applicable taxes and payment stages are set out in the written proposal for each project. Ask us if you need a specific payment method.',
    'Política de privacidad | Paz Pérez Amoblamientos': 'Privacy Policy | Paz Pérez Amoblamientos',
    'Cómo tratamos tus datos': 'How we handle your information',
    'Última actualización: 23 de septiembre de 2026. Esta política aplica a las consultas enviadas desde este sitio.': 'Last updated: September 23, 2026. This policy applies to enquiries sent through this website.',
    'Responsable y contacto': 'Data controller and contact',
    'El responsable es el titular de Paz Pérez Amoblamientos. Deben completarse antes de publicar su nombre/razón social, domicilio legal y canal de contacto verificables. Para solicitudes de privacidad se muestra actualmente': 'The data controller is the owner of Paz Pérez Amoblamientos. Their verified legal name and address should be added before publication. For privacy requests, contact',
    '; confirmar que está atendido por el responsable.': '; please confirm this inbox is monitored by the data controller.',
    'Datos, finalidad y proveedor': 'Information collected, purpose and service provider',
    'El formulario solicita nombre, correo electrónico, servicio de interés y mensaje para responder consultas y preparar presupuestos. Las respuestas se reciben mediante Google Forms y quedan disponibles para el titular en la cuenta propietaria del formulario y, si se configuró, en una hoja de cálculo vinculada. Google puede tratar datos técnicos de acceso conforme a sus propias condiciones y políticas de privacidad. El titular debe verificar la cuenta receptora, los permisos de acceso y las opciones de conservación antes de publicar el formulario. No envíes datos sensibles ni información de terceros que no sea necesaria.': 'The form asks for your name, email address, service of interest and message so we can respond to enquiries and prepare quotes. Responses are received through Google Forms and are available to the form owner in the account that owns the form and, if configured, in a linked spreadsheet. Google may process technical access data under its own terms and privacy policy. Before publishing the form, the owner should verify the receiving account, access permissions and retention settings. Do not send sensitive data or unnecessary information about other people.',
    'Base, conservación y seguridad': 'Use, retention and security',
    'Los datos se usan para atender la consulta y, si corresponde, gestionar la relación comercial y cumplir obligaciones legales. Se conservan solo durante el tiempo necesario para esos fines y obligaciones, y se eliminan o anonimizan cuando ya no sean necesarios. El responsable debe aplicar medidas razonables de seguridad y limitar el acceso a quienes necesiten tratar la consulta. No se debe usar la información para publicidad no solicitada.': 'Your information is used to respond to your enquiry and, where relevant, manage the business relationship and meet legal obligations. It is kept only as long as needed for these purposes and then deleted or anonymized. The data controller should use reasonable security measures and limit access to people who need the information to handle your enquiry. Your information should not be used for unsolicited advertising.',
    'Tus derechos': 'Your rights',
    'Podés solicitar acceso, rectificación, actualización o supresión de tus datos escribiendo al contacto indicado, identificando tu consulta. La Ley 25.326 reconoce el derecho de acceso gratuito con la periodicidad legal. La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control y recibe denuncias:': 'You may request access to, correction, updating or deletion of your information by writing to the contact above and identifying your enquiry. Argentina’s Personal Data Protection Law 25,326 recognizes a right of free access at the intervals set by law. The Agency for Access to Public Information (AAIP) oversees the law and receives complaints:',
    'información sobre derechos de datos personales': 'information about personal data rights',
    'Cookies y tecnologías similares': 'Cookies and similar technologies',
    'En la revisión del código disponible no se encontraron herramientas propias de analítica, publicidad, inicio de sesión ni scripts de seguimiento; no se implementó un banner de consentimiento porque no se identificaron cookies no esenciales. El sitio carga tipografías desde Google Fonts, lo que comunica al proveedor datos técnicos como la dirección IP al solicitar los archivos. El navegador también puede generar registros técnicos del servidor de alojamiento. El titular debe confirmar las cookies y registros del hosting y de Google Forms en producción. Si se agregan analítica, publicidad o cookies no esenciales, se deberá informar su uso y obtener el consentimiento que corresponda antes de activarlas.': 'A review of the available code found no analytics, advertising, sign-in or tracking scripts, so no consent banner was added because no non-essential cookies were identified. The site loads fonts from Google Fonts, which receives technical data such as your IP address when the files are requested. The hosting server may also create technical logs. The site owner should confirm the cookies and logs used by Google Forms and the production host. If analytics, advertising or non-essential cookies are added, their use must be disclosed and the required consent obtained before activation.',
    'Actualizaciones': 'Updates',
    'Esta política puede actualizarse para reflejar cambios en el sitio, proveedores o normativa. La versión vigente y su fecha se publican aquí.': 'This policy may be updated to reflect changes to the site, service providers or applicable rules. The current version and date will be posted here.',
    'Términos y condiciones | Paz Pérez Amoblamientos': 'Terms and Conditions | Paz Pérez Amoblamientos',
    'Términos y condiciones de uso': 'Website terms and conditions',
    'Última actualización: 23 de septiembre de 2026. Estos términos regulan el uso de este sitio informativo y las consultas enviadas desde él.': 'Last updated: September 23, 2026. These terms govern the use of this informational website and enquiries sent through it.',
    '1. Responsable del sitio': '1. Website owner',
    'El sitio se presenta bajo el nombre comercial Paz Pérez Amoblamientos. Antes de publicarlo, el titular debe completar y verificar su nombre o razón social, CUIT, domicilio legal y un canal de contacto efectivo. La información actualmente visible en Contacto debe comprobarse; los datos de ejemplo no identifican legalmente al proveedor.': 'This site operates under the trade name Paz Pérez Amoblamientos. Before publication, the owner must verify and provide their legal name, tax ID, registered address and an effective contact channel. The contact details shown on the Contact page must be checked; example details do not legally identify the provider.',
    '2. Alcance de la información y presupuestos': '2. Website information and quotes',
    'Las descripciones, imágenes, proyectos y promociones que eventualmente se publiquen son informativos y pueden variar según medidas, materiales, estado del inmueble, ubicación y alcance de obra. Una consulta no constituye una contratación ni reserva disponibilidad. Cada propuesta debe indicar por escrito alcance, materiales, precio total e impuestos aplicables, vigencia, forma y etapas de pago, plazos, entrega/instalación, garantías y condiciones de cancelación. La contratación queda documentada en una propuesta o contrato aceptado por ambas partes. Nada de estos términos limita derechos irrenunciables del consumidor.': 'Descriptions, images, projects and any offers on this site are for information and may vary with measurements, materials, property condition, location and scope. An enquiry is not a contract or a reservation. Each written proposal should specify scope, materials, total price and applicable taxes, validity period, payment method and stages, schedule, delivery or installation, warranties and cancellation terms. A project is agreed through a proposal or contract accepted by both parties. Nothing in these terms limits non-waivable consumer rights.',
    '3. Ofertas y promociones': '3. Offers and promotions',
    'Toda promoción debe publicar claramente su vigencia, productos/servicios incluidos, precio final o método para calcularlo, restricciones, cobertura y demás condiciones esenciales. La publicidad integra la oferta en los términos de la normativa aplicable. Si una promoción de la página no tiene esas condiciones verificables, no debe difundirse hasta corregirla.': 'Each promotion must clearly state its validity period, included products or services, final price or how it is calculated, restrictions, coverage and other essential terms. Advertising forms part of the offer under applicable law. A promotion without verifiable terms should not be published until corrected.',
    '4. Uso del sitio y propiedad intelectual': '4. Website use and intellectual property',
    'La persona usuaria se compromete a utilizar el sitio de forma lícita y a no interferir con su seguridad o funcionamiento. Los textos, fotografías, marca y diseño pertenecen a sus titulares o se usan con autorización; no se permite su reproducción comercial sin permiso. Las imágenes ilustrativas no sustituyen las especificaciones acordadas para cada proyecto.': 'You agree to use this site lawfully and not interfere with its security or operation. Text, photographs, branding and design belong to their owners or are used with permission; commercial reproduction is not allowed without permission. Illustrative images do not replace the specifications agreed for a project.',
    '5. Enlaces y disponibilidad': '5. Links and availability',
    'El sitio puede enlazar servicios de terceros, cuyas condiciones y privacidad son responsabilidad de esos terceros. Se procura mantener el contenido actualizado, pero no se garantiza disponibilidad ininterrumpida. Esto no excluye responsabilidades que no puedan limitarse legalmente.': 'This site may link to third-party services, which are responsible for their own terms and privacy practices. We try to keep the content up to date but cannot guarantee uninterrupted availability. This does not exclude liability that cannot legally be limited.',
    '6. Consultas y reclamos': '6. Enquiries and complaints',
    'Para consultas sobre estas condiciones escribí a': 'For questions about these terms, email',
    'o usá la página de': 'or use our',
    'Los reclamos de consumo pueden presentarse ante las autoridades competentes. Se aplica la legislación argentina, sin afectar las normas imperativas ni el fuero que corresponda al consumidor.': 'Consumer complaints may be submitted to the relevant authorities. Argentine law applies, without affecting mandatory rules or the venue available to consumers.',
    '7. Cambios': '7. Changes',
    'Los cambios se publicarán en esta página con una nueva fecha. Las modificaciones no alteran retroactivamente contratos ya aceptados ni derechos adquiridos.': 'Changes will be posted on this page with a new date. They do not retroactively alter accepted contracts or accrued rights.',
    'Inicio': 'Home',
    'Servicios': 'Services',
    'Proyectos': 'Projects',
    'Contacto': 'Contact',
    'Profesionales': 'Our team',
    'Privacidad': 'Privacy',
    'Términos y condiciones': 'Terms and Conditions',
    'Trabajá con nosotros': 'Work with us',
    'Configuración': 'Settings',
    'Información legal': 'Legal information',
    'Contacto directo': 'Get in touch',
    'Servicios profesionales': 'Professional services',
    'Nuestro equipo': 'Our team',
    'Ideas de referencia': 'Inspiration',
    'Oportunidades laborales': 'Work opportunities',
    'Abrir menú': 'Open menu',
    'Abrir configuración': 'Open settings',
    'Cerrar configuración': 'Close settings',
    '© 2026 Paz Pérez Amoblamientos. Diseño y reformas para tu hogar.': '© 2026 Paz Pérez Furnishings. Design and renovations for your home.',
    '© 2026 Paz Pérez Amoblamientos.': '© 2026 Paz Pérez Furnishings.',
    'Preferencias del sitio': 'Site preferences',
    'Personalizá tu experiencia': 'Personalize your experience',
    'Elegí cómo querés ver el sitio. Tus preferencias se guardan en este dispositivo.': 'Choose how you want to view the site. Your preferences are saved on this device.',
    'Tema': 'Theme',
    'Cambiá entre la apariencia clara y la oscura.': 'Switch between light and dark appearance.',
    'Tema del sitio': 'Website theme',
    'Claro': 'Light',
    'Oscuro': 'Dark',
    'Idioma': 'Language',
    'Seleccioná el idioma de los textos del sitio.': 'Choose the language for the website text.',
    'Idioma del sitio': 'Website language',
    'Español': 'Spanish',
    'Volver al inicio': 'Back to home',
    'Preferencias guardadas.': 'Preferences saved.',
    'Last updated: September 23, 2026. This policy applies to enquiries sent through this website.': 'Last updated: September 23, 2026. This policy applies to enquiries sent through this website.'
  };

  const translatePage = (language) => {
    document.documentElement.lang = language;
    if (language !== 'en') {
      window.location.reload();
      return;
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue;
      const key = original.trim();
      if (translations[key]) {
        const leading = original.match(/^\s*/)?.[0] || '';
        const trailing = original.match(/\s*$/)?.[0] || '';
        node.nodeValue = `${leading}${translations[key]}${trailing}`;
      }
    }

    document.querySelectorAll('[alt], [aria-label], [placeholder], option').forEach((element) => {
      ['alt', 'aria-label', 'placeholder'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && translations[value]) element.setAttribute(attribute, translations[value]);
      });
      if (element.tagName === 'OPTION' && translations[element.textContent.trim()]) {
        element.textContent = translations[element.textContent.trim()];
      }
    });
    if (translations[document.title]) document.title = translations[document.title];
    const description = document.querySelector('meta[name="description"]');
    if (description && translations[description.content]) description.content = translations[description.content];
  };

  const selectors = {
    navToggle: '.nav-toggle',
    mobileNav: '.mobile-nav',
    revealItems: '.reveal',
    accordionButtons: '.accordion-button',
  };

  const toggleMobileNav = () => {
    const button = document.querySelector(selectors.navToggle);
    const mobileNav = document.querySelector(selectors.mobileNav);
    if (!button || !mobileNav) return;

    const closeMenu = () => {
      button.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
      document.body.classList.remove('nav-open');
    };

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });

    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  };

  const setupReveal = () => {
    const elements = document.querySelectorAll(selectors.revealItems);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
  };

  const setupAccordion = () => {
    const buttons = document.querySelectorAll(selectors.accordionButtons);
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(button.getAttribute('aria-controls'));
        if (!panel) return;

        button.setAttribute('aria-expanded', String(!expanded));
        panel.style.maxHeight = expanded ? '0' : `${panel.scrollHeight}px`;
      });
    });
  };

  const setupFormFeedback = () => {
    document.querySelectorAll('.contact-form').forEach((form) => {
      form.addEventListener('submit', () => {
        const button = form.querySelector('[type="submit"]');
        if (!button || !form.reportValidity()) return;
        button.disabled = true;
        button.textContent = 'Enviando…';
        button.setAttribute('aria-live', 'polite');
      });
    });
  };

  const setupPreferences = () => {
    const themeSelect = document.querySelector('#theme-select');
    const languageSelect = document.querySelector('#language-select');
    const textSizeSelect = document.querySelector('#text-size-select');
    const motionToggle = document.querySelector('#motion-toggle');
    const status = document.querySelector('#settings-status');
    let theme = 'light';
    let language = 'es';
    let textSize = 'normal';
    let reduceMotion = false;
    try {
      theme = localStorage.getItem('pp-theme') || 'light';
      language = localStorage.getItem('pp-language') || 'es';
      textSize = localStorage.getItem('pp-text-size') || 'normal';
      reduceMotion = localStorage.getItem('pp-reduce-motion') === 'true';
    } catch (error) {
      // Preferences still work for the current page when storage is unavailable.
    }
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.textSize = textSize;
    document.documentElement.dataset.motion = reduceMotion ? 'reduce' : 'full';
    if (themeSelect) themeSelect.value = theme;
    if (languageSelect) languageSelect.value = language;
    if (textSizeSelect) textSizeSelect.value = textSize;
    if (motionToggle) motionToggle.checked = reduceMotion;
    if (language === 'en') translatePage('en');

    const announceSaved = () => {
      if (status) status.textContent = document.documentElement.lang === 'en' ? 'Preferences saved.' : 'Preferencias guardadas.';
    };

    themeSelect?.addEventListener('change', () => {
      document.documentElement.dataset.theme = themeSelect.value;
      try { localStorage.setItem('pp-theme', themeSelect.value); } catch (error) {}
      announceSaved();
    });
    languageSelect?.addEventListener('change', () => {
      language = languageSelect.value;
      try { localStorage.setItem('pp-language', language); } catch (error) {}
      if (language === 'en') translatePage('en');
      else window.location.reload();
      announceSaved();
    });
    textSizeSelect?.addEventListener('change', () => {
      document.documentElement.dataset.textSize = textSizeSelect.value;
      try { localStorage.setItem('pp-text-size', textSizeSelect.value); } catch (error) {}
      announceSaved();
    });
    motionToggle?.addEventListener('change', () => {
      document.documentElement.dataset.motion = motionToggle.checked ? 'reduce' : 'full';
      try { localStorage.setItem('pp-reduce-motion', String(motionToggle.checked)); } catch (error) {}
      announceSaved();
    });
  };

  const setupSettingsDrawer = () => {
    const trigger = document.querySelector('.settings-trigger');
    const panel = document.querySelector('#siteSettings');
    const backdrop = document.querySelector('.settings-backdrop');
    const closeButton = panel?.querySelector('.settings-close');
    if (!trigger || !panel || !backdrop || !closeButton) return;

    const close = (restoreFocus = true) => {
      panel.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      panel.setAttribute('aria-hidden', 'true');
      trigger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('settings-open');
      if (restoreFocus) trigger.focus();
    };

    const open = () => {
      panel.classList.add('is-open');
      backdrop.classList.add('is-open');
      panel.setAttribute('aria-hidden', 'false');
      trigger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('settings-open');
      requestAnimationFrame(() => closeButton.focus({ preventScroll: true }));
    };

    trigger.addEventListener('click', open);
    closeButton.addEventListener('click', () => close());
    backdrop.addEventListener('click', () => close());
    document.addEventListener('keydown', (event) => {
      if (!panel.classList.contains('is-open')) return;
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...panel.querySelectorAll('button:not(:disabled), select:not(:disabled), input:not(:disabled), a[href], [tabindex="0"]')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  };

  const init = () => {
    toggleMobileNav();
    setupReveal();
    setupAccordion();
    setupFormFeedback();
    setupPreferences();
    setupSettingsDrawer();
  };

  return { init };
})();

window.addEventListener('DOMContentLoaded', app.init);
