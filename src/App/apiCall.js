import { loyaltyMembers } from './../_mock_/mockData'
export const fetchData = async () => {
    const response = loyaltyMembers;
    console.log(response, 'response')
    // if (!response.ok) {
    //     throw new Error('Sorry, no users found')
    // }
    // else {
    // const data = await response.json().then(arg => {
    //     console.log({
    //         arg
    //     });
    // });
    // console.log({
    //     data
    // })
    return response;
    // }
};