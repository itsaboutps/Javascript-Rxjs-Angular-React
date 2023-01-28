
function Includes(){
    this.filterCodeList;
    this.reasonCodeList=[
        {
            "reasonLabel": "TEST WRAP UP CHAT DEV",
            "recordId": 3
        },
        {
            "reasonLabel": "WRAP UP CHAT DEV",
            "recordId": 56
        },
        {
            "reasonLabel": "TESTINGTESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 23
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "TESTINGTESTING WRAP UP CHAT DEV",
            "recordId": 33
        },
        {
            "reasonLabel": "email is testing",
            "recordId": 33
        }
    ];

    this.filterCodeList=this.reasonCodeList.filter(filterList);

   function filterList(e){
        return e.reasonLabel.includes('email');
        console.log(e);
    }

    console.log(this.filterCodeList)

    
}

//filter function expect true or false in the calback and return the full array which 
//fulfils the condition

//Includes tells us whether the string is part of string or not

Includes()
