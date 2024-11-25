import React from 'react';
import Navbar from '@/Components/ui/Navbar';
import Footer from '@/Components/ui/Footer';
import RoomSection from '@/Components/RoomSection';

export async function getStaticProps() {
  // Simulación de datos
  const recommendedRooms = [
    { image: '/img/habitacion_simple.jpg', name: 'Habitación Simple', price: '$80' },
    { image: '/img/suite_ejecutiva.jpg', name: 'Suite Ejecutiva', price: '$125' },
  ];

  const allRooms = [
    { image: '/img/habitacion_simple.jpg', name: 'Habitación Simple', price: '$80' },
    { image: '/img/habitacion_doble.jpg', name: 'Habitación Doble/Matrimonial', price: '$120' },
    { image: '/img/habitacion_triple.jpg', name: 'Habitación Triple', price: '$110' },
    { image: '/img/departamento_familiar.jpg', name: 'Departamento Familiar', price: '$125' },
    { image: '/img/departamento_simple.jpg', name: 'Departamento Simple', price: '$110' },
    { image: '/img/departamento_doble.jpg', name: 'Departamento Doble', price: '$120' },
  ];

  return {
    props: {
      recommendedRooms,
      allRooms,
    },
  };
}

interface HabitacionesProps {
  recommendedRooms: { image: string; name: string; price: string }[];
  allRooms: { image: string; name: string; price: string }[];
}

const habitaciones: React.FC<HabitacionesProps> = ({ recommendedRooms, allRooms }) => {
  return (
    <div>
      <Navbar />
      <main>
        <RoomSection title="Recomendados" rooms={recommendedRooms} />
        <RoomSection title="Todos los Paquetes" rooms={allRooms} />
      </main>
      <Footer />
    </div>
  );
};

export default habitaciones;
