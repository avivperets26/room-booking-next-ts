export interface FormData {
  [key: string]: string; // This index signature allows any string key to have a string value
  name: string;
  surname: string;
  age: string;
  profession: string;
  salary: string;
  pets: string;
  maritalStatus: string;
  nationality: string;
  phoneNumber: string;
  passportId: string;
  email: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}
