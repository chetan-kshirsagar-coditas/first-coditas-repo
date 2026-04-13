class cblTest{
    static grpThreshold = 4;
    static currGrpCode = 65;
    static teams = [];
    constructor(data){
        if(cblTest.grpThreshold === 0){
            cblTest.grpThreshold = 4;
            cblTest.currGrpCode++;
        }
        cblTest.grpThreshold--;
        cblTest.teams.push({
            data: data,
            group: String.fromCharCode(cblTest.currGrpCode)
        });
    }
}

const cbl1 = new cblTest("team1");
const cbl2 = new cblTest("team1");
const cbl3 = new cblTest("team1");
const cbl4 = new cblTest("team1");
const cbl5 = new cblTest("team1");
const cbl6 = new cblTest("team1");
const cbl7 = new cblTest("team1");
const cbl8 = new cblTest("team1");
const cbl9 = new cblTest("team1");
const cbl10 = new cblTest("team1");
const cbl11 = new cblTest("team1");

console.log(cblTest.teams);