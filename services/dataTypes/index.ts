export interface CategoryTypes {
  _id: string;
  name: string;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: boolean;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  name: string;
  bankName: string;
  noRekening: string;
}
export interface PaymentTypes {
  _id: string;
  type: string;
  status: boolean;
  banks: BankTypes[];
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface signinTypes {
  email: string;
  password: string;
}

export interface userTypes {
  id: string;
  name: string;
  username: string;
  phoneNUmber: string;
  email: string;
  avatar: string;
}

export interface jwtPayloadTypes {
  player: userTypes;
  iat: number;
}
