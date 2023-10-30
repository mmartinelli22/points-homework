import { useState, useEffect } from "react";
import './App.css';
import { MemberData } from "../member_data/memberData";
import { fetchData } from "./apiCall";
import { Route, Link, Switch } from "react-router-dom/cjs/react-router-dom.min";

// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every
// dollar spent between $50 and $100 in each transaction.
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
const App = () => {
  const ONE_HUNDRED = 100;
  const FIFTY = 50;
  const TWO = 2;
  const [storeLoyaltyMembers, setloyaltyMembersState] = useState([]);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  useEffect(() => {
    fetchData().then((json) => {
      setloyaltyMembersState(json);
    });
  });
  const setUser = () => {
    const singleUser = storeLoyaltyMembers[Math.floor(Math.random() * storeLoyaltyMembers.length)]
    return singleUser
  };

  const calculateTierOneMemberPoints = (threeMonthPurchase) => threeMonthPurchase - FIFTY
  const calculateTierTwoMemberPoints = (threeMonthPurchase) => TWO * (threeMonthPurchase - ONE_HUNDRED) + FIFTY

  const calculateLoyaltyPoints = (member) => {
    const tierOne = member.threeMonthPurchase >= FIFTY && member.threeMonthPurchase < ONE_HUNDRED;
    const tierTwo = member.threeMonthPurchase > ONE_HUNDRED;
    const memberPoints = tierOne
      ? calculateTierOneMemberPoints(member.threeMonthPurchase)
      : tierTwo
        ? calculateTierTwoMemberPoints(member.threeMonthPurchase)
        : 0;
    setLoyaltyPoints(memberPoints);
    return;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1> <Link to="/member">Check your loyalty points!</Link> </h1>} />
        <div className="points-page">
          <Route exact path="/member" render={() =>
            <MemberData member={storeLoyaltyMembers} calculateLoyaltyPoints={calculateLoyaltyPoints} loyaltyPoints={loyaltyPoints} />
          }
          />
        </div>
      </Switch>
    </div>
  )
}
export default App;
