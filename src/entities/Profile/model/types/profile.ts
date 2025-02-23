import { Country, Currency } from 'shared/const/commont';

export interface Profile {
    first: string,
    lastname: string,
    age: 22,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}

// https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg
