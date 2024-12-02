import { format, formatDistance, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatDate = (date: Date | string, pattern = 'PP'): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, pattern, { locale: es });
};

export const formatTimeAgo = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return formatDistance(parsedDate, new Date(), { addSuffix: true, locale: es });
};

export const formatTime = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, "HH:mm 'hrs'", { locale: es });
};