import React, { useState } from 'react';
import TourStep from './TourStep';

const pasos = [
  {
    id: 'btn-comando',
    selector: '#btn-centro-de-comando',
    titulo: 'Centro de Comando',
    descripcion: 'Acá accedés a las misiones pendientes, completadas y estadísticas generales del nivel.',
  },
  {
    id: 'mail',
    selector: '#btn-mail',
    titulo: 'Sección Mail',
    descripcion: 'Lee los correos relevantes que ponen en contexto al caso.',
  },
  {
    id: 'whatsapp',
    selector: '#btn-whatsapp',
    titulo: 'Sección WhatsApp',
    descripcion: 'Revisá los mensajes que te vayan llegando de diversas fuentes.',
  },
  {
    id: 'ia-asistente',
    selector: '#btn-ia-asistente',
    titulo: 'IA Asistente',
    descripcion: 'Interactuá con la IA para obtener consejos sobre el caso y herramientas de análisis.',
  },
  {
    id: 'centro-de-comando',
    selector: '#centro-de-comando',
    titulo: 'Centro de Comando',
    descripcion: 'Acá accedés a las misiones pendientes, completadas y estadísticas generales del nivel.',
  },
];

const Tour = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    if (index < pasos.length - 1) {
      setIndex(index + 1);
    } else {
      finalizar();
    }
  };

  const anterior = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const finalizar = () => {
    if (onFinish) onFinish();
  };

  const pasoActual = pasos[index];

  // Evitar renderizar si no hay paso actual (por seguridad)
  if (!pasoActual) return null;

  return (
    <TourStep
      key={pasoActual.id}
      targetSelector={pasoActual.selector}
      text={{
        titulo: pasoActual.titulo,
        descripcion: pasoActual.descripcion,
      }}
      onNext={siguiente}
      onPrev={anterior}
      onFinish={finalizar}
      isLastStep={index === pasos.length - 1}
      isFirstStep={index === 0}
    />
  );
};

export default Tour;
