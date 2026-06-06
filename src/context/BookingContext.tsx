import React, { createContext, useContext, useState } from 'react';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  notes?: string;
}

interface BookingContextType {
  isBookingOpen: boolean;
  openBooking: (serviceName?: string, doctorName?: string) => void;
  closeBooking: () => void;
  selectedService: string;
  setSelectedService: (service: string) => void;
  selectedDoctor: string;
  setSelectedDoctor: (doctor: string) => void;
  bookingDate: string;
  setBookingDate: (date: string) => void;
  bookingTime: string;
  setBookingTime: (time: string) => void;
  submitBooking: (data: BookingData) => Promise<boolean>;
  lastBooking: BookingData | null;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [lastBooking, setLastBooking] = useState<BookingData | null>(null);

  const openBooking = (serviceName = '', doctorName = '') => {
    setSelectedService(serviceName);
    setSelectedDoctor(doctorName);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
    setSelectedDoctor('');
    setBookingDate('');
    setBookingTime('');
  };

  const submitBooking = async (data: BookingData): Promise<boolean> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        setLastBooking(data);
        resolve(true);
      }, 1500);
    });
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedService,
        setSelectedService,
        selectedDoctor,
        setSelectedDoctor,
        bookingDate,
        setBookingDate,
        bookingTime,
        setBookingTime,
        submitBooking,
        lastBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
