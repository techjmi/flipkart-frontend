const URL = "https://flipkart-backend-9spf.onrender.com/api";

const UserAuthentication = async (user) => {
    try {
        const response = await fetch(`${URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        // Check if the response status is OK (HTTP 200-299)
        if (response.ok) {
            const result = await response.json();
            console.log("Signup successful:", result);
            return result
        } 
    } catch (error) {
        console.log("The Error during signup is", error.message);
    }
};
const LoginAuthentication = async (login) => {
    try {
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
        })
        const result = await response.json();
        console.log("Login response:", result);

        if (response.ok) {
            console.log("Login successful");
            return { ok: true, data: result };
        } else {
            console.log("Login failed. Server returned:", response.status, response.statusText);
            return { ok: false, error: result.error };
        }
    } catch (error) {
        console.log("Error during login:", error.message);
        return { ok: false, error: error.message };
    }
};

const PaymentByPaytm = async (data) => {
    try {
        const response = await fetch(`${URL}/payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        // Check if the response status is OK (HTTP 200-299)
        if (response.ok) {
            const result = await response.json();
            console.log("Payment Sucessfull:", result);
            return result
        } 
    } catch (error) {
        console.log("The Error during making payment is", error.message);
    }
};

export {UserAuthentication, LoginAuthentication, PaymentByPaytm}
