import delay from './delay';

const quotes = [
    {    
        Id:33,       
        Premium:27.28,
        SchemeId:2,
        UnderwriterId: 2,
        Policy:{
            StartDate:"Fri 15 Jun 2018",
            StartHour:"9",
            StartMinute:"55",
            EndDate:"Sat 16 Jun 2018",
            EndHour:"9",
            EndMinute:"55"
        }
    },
    {    
        QuoteId:33,       
        Premium:36.19,
        SchemeId:2,
        UnderwriterId: 4,
        Policy:{
            StartDate:"Fri 15 Jun 2018",
            StartHour:"9",
            StartMinute:"55",
            EndDate:"Sat 16 Jun 2018",
            EndHour:"9",
            EndMinute:"55"
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

    static getQuote(underwriterId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            
            let filteredQuotes = quotes.filter(quote => {
                return quote.UnderwriterId == underwriterId;
            });
            
            resolve(Object.assign([], filteredQuotes[0]));
            }, 1000);
        });
    }
}

export default QuoteApi;