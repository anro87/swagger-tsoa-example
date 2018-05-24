import { Guest } from '../models/guest';

export interface IMeetupService {
    getGuests(eventId: number, filterByName: string): Promise<Guest[]>
}