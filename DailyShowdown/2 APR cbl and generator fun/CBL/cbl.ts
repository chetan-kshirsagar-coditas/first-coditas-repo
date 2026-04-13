interface TeamFormat {
    teamName: string;
    player1Id: string;
    player1Name: string;
    player2Id: string;
    player2Name: string;
    player3Id: string;
    player3Name: string;
    player4Id: string;
    player4Name: string;
    GROUP: string | number;
}

interface FixtureFormat {
    _id: number;
    team1Name: string;
    team1Group: string | number;
    team2Name: string;
    team2Group: string | number;
    timeAndDate: string;
    courtNo: number
}



interface OSFormat {
    [groupNumber: string | number]: {
        [teamName: string]: OStatsFormat
    }
}

interface OStatsFormat {
    wins: number,
    lose: number,
    draw: number,
    totalP: number,
}

interface MatchResultFormat {
    fixtureId: number,
    result: "win" | "lose" | "draw";
}




class CBL {

    allRegisteredTeams: Array<TeamFormat> = [];
    allFixtures: Array<FixtureFormat> = [];
    overallStandings: OSFormat = {}

    constructor(noOfGroups: number = 4) {
        for (let i = 1; i <= noOfGroups; i++) {
            this.overallStandings[i] = {};
        }
    }

    registerTeam(teamDetails: TeamFormat) {

        this.allRegisteredTeams.push(teamDetails);

        this.overallStandings[teamDetails.GROUP][teamDetails.teamName] = {
            wins: 0,
            lose: 0,
            draw: 0,
            totalP: 0,
        }

    }


    addFixture(matchSchedule: FixtureFormat) {
        this.allFixtures.push(matchSchedule);
    }

    deleteFixture(fixtureId: number) {
        this.allFixtures.forEach((fixt, i) => {
            if (fixtureId === fixt._id) {
                this.allFixtures.splice(i, 1);
                return;
            };
        })
    }
    editFixture(fixtureId: number, newFixture: FixtureFormat) {
        this.allFixtures.forEach((fixt, i) => {
            if (fixtureId === fixt._id) {
                this.allFixtures[i] = newFixture;
                return;
            };
        })
        return this.allFixtures;
    }

    addResult(result: MatchResultFormat) {
        try {
            const fixture = this.allFixtures.filter((match) => match._id === result.fixtureId);
            if (fixture.length === 0) { console.log("No Match Found."); return };
            const t1 = this.overallStandings[fixture[0].team1Group][fixture[0].team1Name];
            const t2 = this.overallStandings[fixture[0].team2Group][fixture[0].team2Name];
            if (result.result === "win") {
                t1.wins += 1;
                t1.totalP += 3;
                t2.lose += 1;
            } else if (result.result === "lose") {
                t1.lose += 1;
                t2.totalP += 3;
                t2.wins += 1;
            } else {
                t1.draw += 1;
                t1.totalP += 1;
                t2.draw += 1;
                t2.totalP += 1;
            }
        } catch (e) {
            console.log("something went wrong while adding result. Error :", e);
        }
    }

    getFixtureDetailsByTeamName(teamName: string) {
        const filteredFixtures = this.allFixtures.filter((fixt) => (fixt.team1Name === teamName || fixt.team2Name === teamName));
        return filteredFixtures;
    }
    getFixtureDetailsByPlayerName(playerName: string) {
        const PlayerTeam = this.allRegisteredTeams.find(t =>
            t.player1Name === playerName ||
            t.player2Name === playerName ||
            t.player3Name === playerName ||
            t.player4Name === playerName
        );
        if (PlayerTeam?.teamName) {
            return this.getFixtureDetailsByTeamName(PlayerTeam?.teamName);
        }
        return "Player is not registered for tournament, go and collect goodies from Aman Kumar.";
    }
    getFixtureDetailsByDateAndTime(timing: string) {
        return this.allFixtures.filter((fixt) => fixt.timeAndDate === timing);
    }

    get getAllRegisteredTeams() {
        return this.allRegisteredTeams;
    }

    get getAllFixtures() {
        return this.allFixtures;
    }

    get getOverallStandings(): OSFormat {
        return this.overallStandings;
    }
}


const cbl = new CBL(4);

cbl.registerTeam({
    teamName: "Boltons", player1Id: "A-3", player1Name: "Abc", player2Id: "A-3", player2Name: "Abc",
    player3Id: "A-3", player3Name: "Ramsey Bolton", player4Id: "A-3", player4Name: "Abc", GROUP: 1
});
cbl.registerTeam({
    teamName: "Slayers", player1Id: "A-3", player1Name: "Abc", player2Id: "A-3", player2Name: "Abc", player3Id: "A-3", player3Name: "Abc", player4Id: "A-3", player4Name: "Tanjiro Kamado", GROUP: 2
});
cbl.registerTeam({
    teamName: "Avengers", player1Id: "A-3", player1Name: "Abc", player2Id: "34",
    player2Name: "Stephen Strange", player3Id: "A-3", player3Name: "Abc", player4Id: "A-3", player4Name: "Abc", GROUP: 3
});
cbl.registerTeam({
    teamName: "Yomvikings", player1Id: "A-3", player1Name: "Thors The Troll", player2Id: "Abc",
    player2Name: "Abc", player3Id: "A-3", player3Name: "Abc", player4Id: "A-3", player4Name: "Abc", GROUP: 4
});

cbl.addFixture({
    _id: 42,
    courtNo: 3,
    team1Name: "Boltons",
    team1Group: 1,
    team2Name: "Slayers",
    team2Group: 2,
    timeAndDate: "6 APR 7:00pm - 8:00pm"
});
cbl.addFixture({
    _id: 43,
    courtNo: 3,
    team1Name: "Avengers",
    team1Group: 3,
    team2Name: "Yomvikings",
    team2Group: 4,
    timeAndDate: "6 APR 7:00pm - 8:00pm"
});
cbl.addFixture({
    _id: 44,
    courtNo: 4,
    team1Name: "Boltons",
    team1Group: 1,
    team2Name: "Yomvikings",
    team2Group: 4,
    timeAndDate: "6 APR 6:00pm - 7:00pm"
});

// cbl.editFixture(43, {
//     _id: 43,
//     courtNo: 5,
//     team1Name: "Boltons",
//     team1Group: 1,
//     team2Name: "Avengers",
//     team2Group: 2,
//     timeAndDate: "6 APR 7:00pm - 8:00pm"
// });

// cbl.deleteFixture(42);

// cbl.addResult({
//     fixtureId: 42,
//     result: "win"
// });

// cbl.addResult({
//     fixtureId: 43,
//     result: "draw"
// });

// console.log(cbl.getOverallStandings);
// console.log(cbl.getFixtureDetailsByPlayerName("Stephen Strange"));
// console.log(cbl.getFixtureDetailsByDateAndTime("6 APR 6:00pm - 7:00pm"));

