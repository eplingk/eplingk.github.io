const lastVisit = getCookie('lastVisitTime');
const now = Date.now();
if (lastVisit) {
   const hoursSinceLastTime = Math.ceil((parseInt(lastVisit) - now) / 3600);
   alert(`It's been ${hoursSinceLastTime} days(s) since you last visited us.`);
}
setCookie('lastVisitTime', now);