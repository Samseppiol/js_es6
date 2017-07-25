## Array Helper Methods 
* forEach

### Practical use case for forEach
> Deleting emails within a spam folder.

> Selecting multiple emails to be deleted

> Iterate over the emails and apply a delete email function

emails.forEach(function(email) { <br>
  deleteEmail(email)<br>
});