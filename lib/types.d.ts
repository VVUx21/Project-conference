
interface Fee {
  member: number;
  nonMember: number;
}


interface FeeTypes {
  [key: string]: Fee; 
}

interface RegistrationCategory {
  name: string;
  fees: FeeTypes;
}


interface Delegate {
  type: string;
  currency: 'INR' | 'USD';
  categories: RegistrationCategory[];
}


interface RegistrationPeriod {
  name: string;
  deadline: string;
  delegates: Delegate[];
}

interface RegistrationData {
  registrationPeriods: RegistrationPeriod[];
  feeCategories: string[];
}

export default RegistrationData;
