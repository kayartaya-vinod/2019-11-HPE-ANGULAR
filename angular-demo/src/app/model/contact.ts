export class Contact {
    id: number;
    firstname: string;
    lastname?: string;
    gender: string = 'Male';
    phone: string;
    email: string;
    picture?: string = '/assets/images/default-avatar.png';
    birthDate?: string;
    address?: string;
    city: string = 'Bangalore';
    state: string = 'Karnataka';
    country: string = 'India';
}
