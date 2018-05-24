import { Guest } from '../models/guest';
import { IMeetupService } from './IMeetupService';
import * as rp from 'request-promise';

const API_KEY = process.env['MEETUP_API_KEY'];

export class MeetupService implements IMeetupService{
    public async getGuests(eventId: number, filterByName?: string): Promise<Guest[]> {
        let responses = [];
        responses = JSON.parse(await rp(`https://api.meetup.com/Hackschool-Mannheim/events/${eventId}/rsvps?key=${API_KEY}&sign=true`));
        let guests = [];
        responses.forEach(element => {
            if(!filterByName || element.member.name.indexOf(filterByName) !== -1){
                let guest: Guest = {
                    id: element.member.id,
                    name: element.member.name
                };
                guests.push(guest);
            }
        });
        return guests;
    }
}