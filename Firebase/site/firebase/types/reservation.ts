export interface NewReservationType {
  id?: string;
  lastName?: string;
  firstName?: string;
  agent?: string;
}

export interface AddReservationType {
  lastName?: string;
  firstName: string;
  agent?: string;
}
