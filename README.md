# ABL OrderForm submit system
It can  add update and detele Orderform

-1
send a mail to recipients
/sendemail 
{
  "recipients":["abx@gmail.com" ],
  "subject":"报单提醒系统提醒",
  "content":"消息内容"
}


0,GET
/checkhealth
check if server is running.

1,POST
/login
{"username": "abc1","password": "1234"}


2.1,POST
/user/addagent
 add A new agent to DB.

{"username": "test1",
 "password": "123",
 "stationname": "S11",
 "receiverate":0.6,
 "publishrate":0.7
}

2.2,POST
/user/addsuperadmin
 add A new superadmin to DB.

{"username": "test3",
  "password": "123",
  "stationname": "管理3站"
}

2.3,POST
/user/addadmin
 add A new addadmin to DB.

{"username": "test3",
  "password": "123",
  "stationname": "管理3站"
}
3, POST
/user/update
{
"newpassword": "1234",
"change_for_username": "abc",
"receiverate" :"0.3",
"publishrate" : "0.1"
}
update user info

4,GET
/user/mystations 
get the register stations by me.
 do not work for agent privilege.

5,GET
/user/:country
get the register country by me.
 do not work for agent and admin privilege.

6,POST
add a new orderform
/orderform/addorderform
{
   "adName":"Hello",
   "adType":"AD",
   "adStatus":"Pending",
   "adBeginDate":"2017-10-19",
   "adEndDate":"2017-10-29",
   "publishType":"Monthy",
   "orderTotalAmont":3000,
   "customerName":"王致和",
   "paymentMethod":"Alipay",
   "receivePosition":{
      "stationname":"S1",
      "currency":"Dol"
   },
   "publishPositions":[
      {
         "stationname":"S1",
         "amount":300,
         "currency":"Dol"
      },
      {
         "stationname":"S2",
         "amount":200,
         "currency":"Dol"
      }
   ],
   "customerWechat":"ADC",
   "customerPhone":"415-478-1234",
   "remark":null,
   "adContinue":false
}

7,GET
/orderform/getorderform/:option
There are 3 options for parameter:
ex:  /orderform/getorderform/search?receiveSationName=S1&publishStationName=S2&sortBy=orderTotalAmont&order=1

search:
   it has queries, all of those can be use combined.
   ex: getorderform/search?receiveSationName=S1&adStatus=Ongoing
       _id: search by ObjectId  ex:'5a3088f79a456321b0355808' do not work for agent privilege 
       receiveSationName:   ex 'S1'   for agent privilege fixxed in its stationname
       adStatus: search by status. ex: 'Pending'
       publishStationName: ex: 'S1'    for agent privilege fixxed in its stationname
       beginBeforeDate&beginAfterDate&endAfterDate&endBeforeDate:  '2017-08-09'

pageSize=10&pageNumber=3

'all':
   return all the orderform 
   do not work for agent privilege.

'':
   you will get error
 
sortBy sort result by query
order -1 means descending 1 means normal 

8，POST
/orderform/updateorderform

update orderform information
if rebuilt is true: checkorder will be overriten, the payment history will be earased. According to the rules, if 
publishPositions, receivePosition and totalAmount has changes , rebuilt need to be true. 
If the changes doesn't include these fields, rebuilt should be false.


{"_orderformid":"5a1c934cb769882638bc0d4b",
   "rebuilt":true,
   "adName":"Hello",
   "adType":"AD",
   "adStatus":"Pending",
   "adBeginDate":"2017-10-19",
   "adEndDate":"2017-10-29",
   "publishType":"Monthy",
   "orderTotalAmont":3000,
   "customerName":"王致和",
   "paymentMethod":"Alipay",
   "receivePosition":{
      "stationname":"S1",
      "currency":"Dol"
   },
   "publishPositions":[
      {
         "stationname":"S1",
         "amount":300,
         "currency":"Dol"
      },
      {
         "stationname":"S2",
         "amount":200,
         "currency":"Dol"
      }
   ],
   "customerWechat":"ADC",
   "customerPhone":"415-478-1234",
   "remark":null,
   "adContinue":false
}

 9,DELETE
 /orderform/deleteorderform
/orderform/deleteorderform?_id=5a35843e1902021a047cef55

10,POST
/orderform/checkOrder/paycheckOrder

add a payment history to checkorderId
{
  "checkOrderId":"5a20e169ee21392b8ca9b1ae",
  "payDay":"2017-12-01T04:58:17.456Z",
  "paymentAmount":80
}

11,POST
/orderform/checkOrder/updatecheckorder
paymentId must exist 
{
  "checkOrderId":"5a35854a1902021a047cef6b",
  "paymentId":"5a35856d1902021a047cef6e",
  "payDay":"2017-12-01T04:58:17.456Z",
  "paymentAmount":800
}
12,DELETE
delete a payment record
/orderform/checkOrder/deletecheckorder
/orderform/checkOrder/deletecheckorder?paymentId=5a35856d1902021a047cef6e&checkOrderId=5a35854a1902021a047cef6b

13,develop.js
this is where we specify environment variable. 

14, db.js
where specify database connection config

15, third party tools
1) install mongdb latest
2) install nodejs latest
3) npm install

16, router.js
boostrap application

17,modules
register data structure
