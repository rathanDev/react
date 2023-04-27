import React, { useState } from "react";

const Registration = () => {

    const [nric, setNric] = useState("");
    const [walletAddress, setWalletAddress] = useState("");

    const register = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nric: nric, walletAddress: walletAddress })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); });
    }

    return (
        <div>
            <h2>Registration</h2>
            <label htmlFor="nric">NRIC</label>
            <input
                type="text"
                name="nric"
                onChange={(e) => setNric(e.target.value)}
            />
            <label htmlFor="walletAddress">Wallet Address</label>
            <input
                type="text"
                name="walletAddress"
                onChange={(e) => setWalletAddress(e.target.value)}
            />
            <button onClick={register}>Register</button>
        </div>
    );

}

export default Registration;