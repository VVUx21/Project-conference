import { DaySchedule} from '../../lib/types';
export const scheduleData: DaySchedule[] = [
    {
      date: "October 12, 2025",
      day: "Sunday",
      slots: [
        {
          time: "08:45 AM - 09:45 AM",
          type: "registration",
          title: "Onsite Registration",
          venue: "TIIR Building First Floor"
        },
        {
          time: "10:00 AM - 10:45 AM",
          type: "inauguration",
          title: "Inauguration",
          venue: "TIIR Auditorium (First Floor)"
        },
        {
          time: "10:45 AM - 11:00 AM",
          type: "break",
          title: "Snacks and Tea Break (Networking Break)"
        },
        {
          time: "11:00 AM-12:00 Noon",
          type: "keynote",
          title: "Keynote-1: Prof. Jayanta Mukhopadhyay, IIT Kharagpur"
        },
        {
          time: "12:15 PM-01:15 PM",
          type: "keynote",
          title: "Keynote-2: Prof. Soumyajit Dey, IIT Kharagpur"
        },
        {
          time: "1:30 PM-2:45 PM",
          type: "lunch",
          title: "Lunch (Networking Break): C17"
        },
        {
          time: "02:45 PM - 05:00 PM",
          type: "tracks",
          tracks: [
            {
              name: "Track-1 (Image and Video Processing)",
              paperIds: "Paper IDs: 12, 14, 114, 122, 287, 297, 299",
              roomNo: "Room No: TI 108"
            },
            {
              name: "Track-2 (Biometrics,Forensics Security & AI Applications)",
              paperIds: "Paper IDs: 401, 280, 294, 301, 306, 365, 393",
              roomNo: "Room No: TI 120"
            },
            {
              name: "Track-3 (AI Applications)",
              paperIds: "Paper IDs: 46, 75, 159, 162, 164, 248, 253",
              roomNo: "Room No: TIIR Auditorium"
            }
          ]
        },
        {
          time: "07:00 PM - 09:00 PM",
          type: "dinner",
          title: "Dinner (Venue:Conference Banquet)"
        }
      ]
    },
    {
      date: "October 13, 2025",
      day: "Monday",
      slots: [
        {
          time: "09:00 AM-10:15 AM",
          type: "keynote",
          title: "Keynote-3: Dr. Poonam Yadav, Scientist 'D', Department of Science & Technology (DST), Government of India"
        },
        {
          time: "10:15AM-10:45 AM",
          type: "break",
          title: "Snacks and Tea (Networking Break)"
        },
        {
          time: "10:45 AM-01:30 PM",
          type: "tracks",
          tracks: [
            {
              name: "Track 4: (Autonomous and Intel systems, Image Processing)",
              paperIds: "Paper IDs:109, 133, 252, 406, 196, 202",
              roomNo: "Room No : TI 108"
            },
            {
              name: "Track 5:: (Speech Processing and NLP, AI Applications)",
              paperIds: "Paper IDs: 27, 27, 144, 274, 104, 108, 254",
              roomNo: "Room No: TI 120"
            },
            {
              name: "Track 6:: (Image and Video Processing)",
              paperIds: "Paper IDs: 137, 148, 160, 300, 302, 305, 327",
              roomNo: "Room No : TIIR Auditorium"
            }
          ]
        },
        {
          time: "1:30 PM-03:00 PM",
          type: "lunch",
          title: "Lunch ( Networking Break), South Guest House"
        },
        {
          time: "03:00 PM-04:00 PM",
          type: "keynote",
          title: "Keynote-4: Prof. Ing. Juraj Gazda, Slovakia"
        },
        {
          time: "04:00 PM- 05:15 PM",
          type: "tracks",
          tracks: [
            {
              name: "Track 7: (Image and Video Processing)",
              paperIds: "Paper IDs: 174, 261, 276, 349, 419",
              roomNo: "Room No: TI 108"
            },
            {
              name: "Track 8 (AI Applications)",
              paperIds: "Paper IDs: 404, 408, 410, 411, 317",
              roomNo: "Room No: TI 120"
            },
            {
              name: "Track 9 (AI Applications)",
              paperIds: "Paper IDs: 91, 250, 333, 62, 342",
              roomNo: "Room No: TIIR Auditorium"
            }
          ]
        },
        {
          time: "05:30 PM-6:15 PM",
          type: "ceremony",
          title: "Award Ceremony and Valedictory",
          venue: "TIIR Auditorium (First Floor)"
        }
      ]
    }
  ];