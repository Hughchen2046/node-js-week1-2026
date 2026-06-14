//練習測試用
const {
    readMembers, filterVIP, sumCredits, getGymConfig, getVIPSummary
} = require('./index');

async function main() {
    const members = await readMembers('./fixtures/members.json');
    const vipMembers = filterVIP(members);
    const totalCredits = sumCredits(members);
    // console.log(totalCredits);
    const vipSummary = await getVIPSummary('./fixtures/members.json');
    console.log(vipSummary);
}
main();