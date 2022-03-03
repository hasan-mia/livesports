/* 
* Author: Hasan
* Github: https://github.com/hasanrafi69
* Email: hasanrafi69@gmail.com
* Mobile: +880-161-782323
*/

const liveSports = ()=>{
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
    .then((data) => loadSporst(data.Stages))
    .catch((err) => {
      console.error(err);
    });
}
const loadSporst =(livescores)=>{
  livescores.forEach(livescore=>{
    //All Dasta
		console.log(livescore);
	});
}
