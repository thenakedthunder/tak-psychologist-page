export interface ServiceOption {
  value: string,
  label: string,
}

const serviceOptions = [
  { value: 'no-service-selected', label: 'Nincs/Nem tudom' },
  { value: 'chase-the-demon', label: 'Rontás levétele' },
  { value: 'exercise-book', label: 'Egzörszájzbuk!' },
  { value: 'aura-massage', label: 'Auramasszász' },
];

export default serviceOptions;
