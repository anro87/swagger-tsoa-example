import { Route, Tags, Path, Query, Get } from 'tsoa';
import { Guest } from '../models/guest';
import { MeetupService} from '../service/meetupService';
import { IMeetupService } from '../service/IMeetupService';

const meetupService: IMeetupService = new MeetupService();

@Tags('Meetup API')
@Route('meetup')
export class MeetupController {
    /** 
     * Get guests of a meetup
     * @param meetupId id of the meetup
     * @param name guest name to filter
    */
    @Get('{meetupId}/guests')
    public async getGuests(
        @Path() meetupId: number,
        @Query('name') name?: string,
    ): Promise<Guest[]> {
        return meetupService.getGuests(meetupId, name);
    }
}