import {Client} from 'src/app/modules/sales-management/statement/models/client.model';

export class Statement{
    id: number;
    code: string;
    dateCreate: string;
    client: Client;
    state: string
}

