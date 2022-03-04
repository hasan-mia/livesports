/* 
* Author: Hasan
* Github: https://github.com/hasanrafi69
* Email: hasanrafi69@gmail.com
* Mobile: +880-161-782323
*/

//====================
//Football Score Data
//====================
const liveFootball = ()=>{

	fetch(
    "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "livescore6.p.rapidapi.com",
        "x-rapidapi-key": "4427861b7bmshec95f48abab1638p147b9bjsn1ee2aa892194",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => loadFootball(data.Stages))
    .catch((err) => console.error(err))
}

const loadFootball =(livescores)=>{
  livescores.forEach(livescore=>{
    // livescore.Events.forEach(match=>{
    //   console.log(match)
    //   console.log(match.Stg.Ccd)
    //   console.log(match.Stg.Ccdiso)
    //   console.log(match.Stg.Cid)
    //   console.log(match.Stg.Sdn)
    // })

    console.log(livescore.Events)


	});
}

//====================
//Cricket Score Data
//====================
const liveCricket = ()=>{

// Cricbuzz Cricket Score
//   fetch("https://unofficial-cricbuzz.p.rapidapi.com/matches/list?matchState=recent", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
// 		"x-rapidapi-key": "4427861b7bmshec95f48abab1638p147b9bjsn1ee2aa892194"
// 	}
// })
// .then(response => response.json())
// .then(data => loadSporst(data.typeMatches ?? 'error'))
// .catch(err =>console.error(error));

}
const loadCricket =(livescores)=>{
  livescores.forEach(livescore=>{
   
    //All Data of cricbuzz
		// console.log(livescore);
		// console.log(livescore.matchType);
		// console.log(livescore.seriesAdWrapper);
		// for (const iterator of livescore.seriesAdWrapper) {
    //   console.log(iterator.seriesMatches.matches)
    //   console.log(iterator.seriesMatches.matches.forEach(m=>{
    //     console.log(m.matchInfo.seriesName)
    //     console.log(m.matchInfo.matchDesc)
    //     console.log(m.matchInfo.matchFormat)
    //     console.log(m.matchInfo.state)
    //     console.log(m.matchInfo.status)
    //     console.log(m.matchInfo.venueInfo.ground)
    //     console.log(m.matchInfo.venueInfo.timezone)
    //     // console.log(m.matchInfo.team1)
    //     console.log(m.matchInfo.team1.teamName)
    //     // console.log(m.matchInfo.team2)
    //     console.log(m.matchInfo.team2.teamName)
    //     console.log(m.matchScore)
    //     console.log(m.matchScore.team1Score)
    //     console.log(m.matchScore.team1Score.inngs1)
    //     console.log(m.matchScore.team1Score.inngs1.overs)
    //     console.log(m.matchScore.team1Score.inngs1.runs)
    //     console.log(m.matchScore.team1Score.inngs1.wickets)
    //     console.log(m.matchScore.team2Score)
    //     console.log(m.matchScore.team2Score.inngs1)
    //     console.log(m.matchScore.team2Score.inngs1.overs)
    //     console.log(m.matchScore.team2Score.inngs1.runs)
    //     console.log(m.matchScore.team2Score.inngs1.wickets)
    //   }))
    //   // console.log(iterator.seriesMatches)
    // }

	});
}
