import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core';
import Card from '../common/Card';

interface AppointmentCalendarProps {
  events: Array<{
    id: string;
    title: string;
    start: Date;
    end: Date;
    backgroundColor?: string;
  }>;
  onSelectSlot: (arg: DateSelectArg) => void;
  onEventClick: (arg: EventClickArg) => void;
}

export default function AppointmentCalendar({
  events,
  onSelectSlot,
  onEventClick
}: AppointmentCalendarProps) {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Calendario de Citas</h3>
      </div>
      <div className="p-6">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          locale="es"
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={events}
          select={onSelectSlot}
          eventClick={onEventClick}
          allDaySlot={false}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          height="auto"
          expandRows={true}
          stickyHeaderDates={true}
          nowIndicator={true}
        />
      </div>
    </Card>
  );
}