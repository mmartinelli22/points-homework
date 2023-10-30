import React from "react";

export const MemberData = ({ member, calculateLoyaltyPoints, loyaltyPoints }) => {
    const getSingleUser = member[Math.floor(Math.random() * member.length)]
    const getSingleName = getSingleUser.name;

    const getUserAndPoints = () => {
        calculateLoyaltyPoints(getSingleUser);
    }
    getUserAndPoints();
    return (
        <h1>Hi, {getSingleName}
            <p>Your points are {loyaltyPoints}!</p>
        </h1>
    );

};

