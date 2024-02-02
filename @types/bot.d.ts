export interface BotInfor {
  id: number;
  name: string;
  status: 'online' | 'offline'; // Add more statuses as needed
  lastActive: Date;
  requestsPerHour: number;
}

export interface LogEntry {
  timestamp: Date;
  eventType: string;
  details: string;
}