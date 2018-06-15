import delay from './delay';

const quotes = [
    {    
        Id:33,       
        Premium:27.28,
        SchemeId:2,
        Policy:{
            StartDate:"Fri 15 Jun 2018",
            StartHour:"9",
            StartMinute:"55",
            EndDate:"Sat 16 Jun 2018",
            EndHour:"9",
            EndMinute:"55"
        },         
        Underwriter:{
            MinVehicleValue:0,
            SupportsVoluntaryExcess:true,
            MaxPenaltyPoints:7,
            PenaltyPointsExpiryYears:3,
            MaxFaultClaims:2,
            MaxFaultClaimsExpiryYears:3,
            MinimumVehicleValue:1500,            
            Id:2,
            Name:"Haven",
            IsActive:true,  
            CompulsoryExcess:350    
        }
    },
    {    
        QuoteId:33,       
        Premium:36.19,
        SchemeId:2,
        Policy:{
            StartDate:"Fri 15 Jun 2018",
            StartHour:"9",
            StartMinute:"55",
            EndDate:"Sat 16 Jun 2018",
            EndHour:"9",
            EndMinute:"55"
        },         
        Underwriter:{
            MinVehicleValue:0,
            SupportsVoluntaryExcess:true,
            MaxPenaltyPoints:6,
            PenaltyPointsExpiryYears:2,
            MaxFaultClaims:1,
            MaxFaultClaimsExpiryYears:3,
            MinimumVehicleValue:1000,            
            Id:4,
            Name:"Mulsanne",
            IsActive:true,  
            CompulsoryExcess:500     
        }
    }
];

class QuoteApi {
    static getAllQuotes() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(Object.assign([], quotes));
            }, delay);
        });
    }
}

export default QuoteApi;