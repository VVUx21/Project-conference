import RegistrationData from "../../lib/types";
const Registrationdata: RegistrationData = {
  "registrationPeriods": [
    {
      "name": "Early Registration",
      "deadline": "(Till September 12, 2025)",
      "delegates": [
        {
          "type": "Indian Delegates (INR)",
          "currency": "INR",
          "categories": [
            {
              "name": "Author",
              "fees": {
                "Students": { "member": 10620, "nonMember": 11800 },
                "Academia": { "member": 12980, "nonMember": 14160 },
                "Industry": { "member": 14160, "nonMember": 15340 }
              }
            },
            {
              "name": "Attendee",
              "fees": {
                "Students": { "member": 3540, "nonMember": 4720 },
                "Academia": { "member": 5900, "nonMember": 7080 },
                "Industry": { "member": 8260, "nonMember": 9440 }
              }
            }
          ]
        },
        {
          "type": "Foreign Delegates (US $)",
          "currency": "USD",
          "categories": [
            {
              "name": "Author",
              "fees": {
                "Students": { "member": 236, "nonMember": 295 },
                "Academia": { "member": 354, "nonMember": 413 },
                "Industry": { "member": 472, "nonMember": 531 }
              }
            },
            {
              "name": "Attendee",
              "fees": {
                "Students": { "member": 118, "nonMember": 177 },
                "Academia": { "member": 236, "nonMember": 295 },
                "Industry": { "member": 354, "nonMember": 413 }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Late Registration",
      "deadline": "(Till 25th September 2025)",
      "delegates": [
        {
          "type": "Indian Delegates (INR)",
          "currency": "INR",
          "categories": [
            {
              "name": "Author",
              "fees": {
                "Students": { "member": 11800, "nonMember": 12980 },
                "Academia": { "member": 14160, "nonMember": 15340 },
                "Industry": { "member": 16520, "nonMember": 17700 }
              }
            },
            {
              "name": "Attendee",
              "fees": {
                "Students": { "member": 5900, "nonMember": 7080 },
                "Academia": { "member": 8260, "nonMember": 9440 },
                "Industry": { "member": 10620, "nonMember": 11800 }
              }
            }
          ]
        },
        {
          "type": "Foreign Delegates (US $)",
          "currency": "USD",
          "categories": [
            {
              "name": "Author",
              "fees": {
                "Students": { "member": 354, "nonMember": 413 },
                "Academia": { "member": 472, "nonMember": 531 },
                "Industry": { "member": 590, "nonMember": 649 }
              }
            },
            {
              "name": "Attendee",
              "fees": {
                "Students": { "member": 236, "nonMember": 295 },
                "Academia": { "member": 354, "nonMember": 413 },
                "Industry": { "member": 472, "nonMember": 531 }
              }
            }
          ]
        }
      ]
    }
  ],
  "feeCategories": ["Students", "Academia", "Industry"]
}
export default Registrationdata;
