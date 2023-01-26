
let clock = () => {
    let now = new Date();
    const timeNow = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateNow = now.toLocaleDateString(undefined, dateOptions); 


     setInterval(clock, 1000);
     document.getElementById('show-clock').innerText = timeNow;
     document.getElementById('show-date').innerText = dateNow;

    }

clock();
