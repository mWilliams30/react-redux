import delay from './delay';

const underwriters = [
    {        
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
    },
    {  
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
];

class underwritersApi {
    static getAllUnderwriters() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(Object.assign([], underwriters));
            }, 0);
        });
    }
}

export default underwritersApi;