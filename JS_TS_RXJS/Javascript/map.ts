const searchInteractionField=
[
  {
    key: 'interactionId',
    label: 'Interaction ID',
    placeholder: 'Enter Interaction ID',
    minLength: 3,
    maxLength: 20,
    type: 'text'
  }
  ,
  {
    key: 'channels',
    label: 'Channels',
    type: 'dropdown',
    dropdownList: [
      "email","chat"
    ]

  },
  {
    key: 'status',
    label: 'Status',
    type: 'dropdown',
    dropdownList: [
      {
        value: "resolved",
        name: "RESOLVED"
      },
      {
        value: "open",
        name: "OPEN"
      }
    ]
  },
  {
    key: 'dateRange',
    label: 'Date Range',
    placeholder: 'Select Date Range',
    type: 'datePicker'
  }

]

const newArr=searchInteractionField.map((obj)=>{
    if(obj.key === 'channels'){
        obj.dropdownList=["there","heelo"]
        console.log(obj.dropdownList)
    }
})
// console.log()
console.log(newArr)



console.log(searchInteractionField)