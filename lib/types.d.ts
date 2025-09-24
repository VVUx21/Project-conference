
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

interface Track {
  name: string;
  paperIds: string;
  roomNo: string;
}

interface TimeSlot {
  time: string;
  type: 'registration' | 'inauguration' | 'break' | 'keynote' | 'tracks' | 'lunch' | 'dinner' | 'ceremony';
  title?: string;
  venue?: string;
  speaker?: string;
  tracks?: Track[];
}

export interface DaySchedule {
  date: string;
  day: string;
  slots: TimeSlot[];
}

export default RegistrationData;
