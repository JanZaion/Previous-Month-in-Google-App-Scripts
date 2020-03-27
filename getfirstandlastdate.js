//Created by Zaion. Works with Google analytics and other Gsuite apps.
//Function getFirstDate() looks for the initial date of the last month and function getLastDate() looks for the last date of the last month. Use like this:
//var startDate = getFirstDate() 
//var endDate = getLastDate()

function getFirstDate() {
  var today = new Date()
  today.setMonth(today.getMonth()-1)
  today.setDate(1)
  return Utilities.formatDate(today, Session.getTimeZone(), 'yyyy-MM-dd');
}

function getLastDate() {
  function lastMonthCheck() {
   var monthCheck = new Date().getMonth()
   if(monthCheck == 0 || monthCheck == 1 || monthCheck == 3 || monthCheck == 5 || monthCheck == 7 || monthCheck == 8 || monthCheck == 10 || monthCheck == 11) 
     {
     return "knuckles"
     } else if (monthCheck == 2) 
     {
      return "february"
     } else 
     {return "spaces"
     }
}
  
  var today = new Date()
  today.setMonth(today.getMonth()-1)
  
  if (lastMonthCheck() == "knuckles") 
    {
     var last2 = new Date (today.setDate(31))
     return Utilities.formatDate(last2, Session.getTimeZone(), 'yyyy-MM-dd')
     } else if (lastMonthCheck() == "spaces") 
       {     
        var last2 = new Date (today.setDate(30))
        return Utilities.formatDate(last2, Session.getTimeZone(), 'yyyy-MM-dd')
        } else if (new Date().getYear()%4 == 0) 
          {         
           var last2 = new Date (today.setDate(29))
           return Utilities.formatDate(last2, Session.getTimeZone(), 'yyyy-MM-dd')
            } else 
              {             
               var last2 = new Date (today.setDate(28))
               return Utilities.formatDate(last2, Session.getTimeZone(), 'yyyy-MM-dd')
              } 
}