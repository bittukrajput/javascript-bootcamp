// Example 1: Logical AND (&&)
let age = 20;
let hasTicket = true;

// AND operator: true only if both are true
console.log("Allowed to enter (age && ticket):", age >= 18 && hasTicket);
// Output: true

// -------------------------------------------------

// Example 2: Logical OR (||)
let isAdmin = false;
let isModerator = true;

// OR operator: true if any one is true
console.log("Access granted (admin || moderator):", isAdmin || isModerator);
// Output: true

// -------------------------------------------------

// Example 3: Logical NOT (!)
let isLoggedIn = false;

// NOT operator: inverts boolean
console.log("Please login first (!isLoggedIn):", !isLoggedIn);
// Output: true

// -------------------------------------------------

// Example 4: Combining && and || without if
let isVIP = false;

// Entry allowed if (age >= 18 AND has ticket) OR VIP
let allowed = (age >= 18 && hasTicket) || isVIP;
console.log("Allowed to enter ((age && ticket) || VIP):", allowed);
// Output: true

// -------------------------------------------------

// Example 5: Form validation without if
let username = "Bittu";
let password = "12345";

// Both fields must not be empty
let formReady = username !== "" && password !== "";
console.log("Form ready to submit:", formReady);
// Output: true

// -------------------------------------------------

// Example 6: Feature access using OR
let premiumUser = true;
let trialUser = false;

// Feature accessible if premium OR trial
let featureAccess = premiumUser || trialUser;
console.log("Feature accessible:", featureAccess);
// Output: true

// -------------------------------------------------

// Example 7: Toggle / invert using NOT
let darkMode = false;
console.log("Dark mode enabled:", !darkMode);
// Output: true
