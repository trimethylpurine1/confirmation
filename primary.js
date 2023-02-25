const words = new URLSearchParams(window.location.search);

const schoolName = words.get('clubName');
const coach = words.get('coach');
const offDays = words.get('offDays');
const startDate = words.get('startDate');
const endDate = words.get('endDate');
const startTime = words.get('startTime');
const endTime = words.get('endTime');
const kids = words.get('kids')
const day = words.get('day');
const weekNumber = words.get('weekNumber');

const title = `Chess Club Primary Coach Confirmation - 
${schoolName}, ${day} ${startTime}-${endTime} (arrive by 3:00pm)`

const bodyEmail = `Hello ${coach},

As was discussed with you a little earlier, we would like to have you take over as the primary coach of the chess club at ${schoolName} ${startTime}-${endTime} (arrive by 3:00pm), starting with the next meeting on, ${day}, ${startDate} through ${day} ${endDate}.

Here are the new session school details:

School Name: ${schoolName}
Address:  11875 N. 24th St., Phoenix, AZ 85028
Start Date: ${startDate}
End Date: ${endDate}
No Class Dates: ${offDays}
Times: ${startTime}-${endTime} (arrive by 3:00pm)

You will be taking over for the remainder of the chess club there at the school and we have ${kids} students on the roster.

You should have access to the roster in the www.chessemporium.com/employee website and you will start with lesson #${weekNumber}, ${lesson} 

Please reply back here to confirm you will be there starting on ${day}, 2/14, and that you will be accepting the assignment as the primary coach as outlined above.

Let me know if you have any questions or need any additional information.`
