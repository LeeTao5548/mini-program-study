//Page Object
Page({
  data: {
    "message": "test",
    "num": 1000,
    "boolean":true,
    "person":{
      "id":1000000,
      "name":"lisa"
    },
    list:[
      {
        id:"111",
        name:"lisa"
      },
      {
        id:"2222",
        name:"jack"
      }
    ],
    newNum: 0
  },
  handleInput(e){
    this.setData({
      newNum: e.detail.value
    })
  },
  handleTap(e){
    let operator = e.target.dataset.operation
    console.log(operator)
  }
});
  