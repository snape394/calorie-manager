export const LoginUser = (user) => {
    return fetch(`http://localhost:4000/api/user/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const RegisterUser = (user) => {
    return fetch(`http://localhost:4000/api/signupUser`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch((e) => {console.log(e)});
};


export const LogoutUser = (user) => {
    return fetch(`http://localhost:4000/api/user/logout`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch((e) => {console.log(e)});
};



export const FetchMeals = (userId) => {
    return fetch(`http://localhost:4000/api/meals?userId=${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};


export const AddMeal = (meal) => {
    return fetch(`http://localhost:4000/api/add/meal`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};


export const DeleteMeal = (mealId) => {
    return fetch(`http://localhost:4000/api/delete/meal?_id=${mealId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};

export const EditMeal = (updatedMeal) => {
    return fetch(`http://localhost:4000/api/update/meal`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMeal),
    })
        .then((res) => {
            return res.json();
        })
        .catch((err) => console.log(err));
};