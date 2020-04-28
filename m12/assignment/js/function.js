// PROMISES
const query = (options) => {
    return fetch('php/data.php', {
        method: 'POST',
        body: JSON.stringify(options),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(d => d.json());
}


// CURRIED FUNCTION
const templater = f => a =>
    (Array.isArray(a) ? a : [a])
    .reduce((r, o, i, a) => r + f(o, i, a), "");
    
    
const checkData = checker => new Promise((resolve, reject) => {
    const check = () => {
        return checker() ? resolve() : setTimeout(check, 10);
    }
    check();
});

const getString = (data, type) => {
    if (type === "type") {
        switch (data) {
            case 0:
                return "Feral";
                break;
            case 1:
                return "Pet";
                break;
        }
    } else {
        switch (data) {
            case 0:
                return "Public";
                break;
            case 1:
                return "Private";
                break;
        }
    }
}

const getDate = (date) => {
    let dt = new Date(date);
    return dt.getFullYear() + '-' + twoDigit(dt.getMonth() + 1) + '-' + twoDigit(dt.getDate());
}

const twoDigit = (num) => {
    return num > 9 ? num : "0" + num;
}

const activeImage=()=>{ 
    $("#catsInfoPage .cat-image img").eq(0).addClass("active");
}