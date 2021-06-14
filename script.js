const events = [
    {"id": "1", "name": "100m"},
    {"id": "2", "name": "Long Jump"},
    {"id": "3", "name": "Shot Put"},
    {"id": "4", "name": "High Jump"},
    {"id": "5", "name": "400m"},
    {"id": "6",  "name": "110m Hurdles"},
    {"id": "7", "name": "Discus Throw"},
    {"id": "8", "name": "Pole Vault"},
    {"id": "9", "name": "Javelin"},
    {"id": "10","name": "1500m"}
]
   
const results10 = {
    "eventId": "10",
    "results":
            [
                { 
                    "Rank": "1", 
                    "Country": "JPN", 
                    "Athlete": "Akihiko Nakamura", 
                    "Time": "4:18.370",  
                    "Points": "823"
                },
                { 
                    "Rank": "2", 
                    "Country": "AUS",
                    "Athlete": "Cedric Dubler", 
                    "Time": "4:32.120",  
                    "Points": "731"
                },
                { 
                    "Rank": "3", 
                    "Country": "AUT",
                    "Athlete": "Dominik Distelberger", 
                    "Time": "4:33.470",  
                    "Points": "722"
                },
                { 
                    "Rank": "4", 
                    "Country": "EST",
                    "Athlete": "Karl Robert Saluri", 
                    "Time": "4:39:400",  
                    "Points": "684"
                },
                { 
                    "Rank": "5", 
                    "Country": "POL",
                    "Athlete": "Pawel Wiesiolek", 
                    "Time": "4:42.270",  
                    "Points": "666"
                },
                { 
                    "Rank": "", 
                    "Country": "CZE",
                    "Athlete": "Jiri Sykora", 
                    "Time": "Did not finish",  
                    "Points": "0"
                }				
            ]
    }

const results8 = {
	"event_id": "8",
	"Results":
		[
			{ 
				"Rank": "1", 
				"Country": "AUS",
				"Athlete": "Cedric Dubler", 
				"Result": "5.00",  
				"Points": "910"
			},
			{ 
				"Rank": "2", 
				"Country": "CAN",
				"Athlete": "Pierce Lepage", 
				"Result": "4.90",  
				"Points": "880"
			},
			{ 
				"Rank": "3", 
				"Country": "ENG",
				"Athlete": "John Lane", 
				"Result": "4.80",  
				"Points": "849"
			},
			{ 
				"Rank": "4", 
				"Country": "WAL",
				"Athlete": "Ben Gregory", 
				"Result": "4.80",  
				"Points": "849"
			},
			{ 
				"Rank": "5", 
				"Country": "GRN",
				"Athlete": "Lindon Victor", 
				"Result": "790",  
				"Points": "666"
			},
			{ 
				"Rank": "6", 
				"Country": "AUS",
				"Athlete": "Kyle Cranston", 
				"Result": "4.40",  
				"Points": "731"
			}				
		]
}

const container = document.getElementById('container')

const createTable1 = (() => {


    for (let i = -1; i < results8["Results"].length; i++) {
    

        let row = document.createElement('div')
        let rank = document.createElement('p')
        let country = document.createElement('p')
        let athlete = document.createElement('p')
        let result = document.createElement('p')
        let points = document.createElement('p')
    
        row.className = "row"
        rank.className = "rank"
        country.className = "country"
        athlete.className = "athlete"
        result.className = "result"
        points.className = "points"
    
        if (i == -1) {
            rank.textContent = "Rank"
            country.textContent = "Country"
            athlete.textContent = "Athlete"
            result.textContent = "Result"
            points.textContent = "Points"
            row.className = "header"
        } else {
            rank.textContent = results8["Results"][i]["Rank"]
            country.textContent = results8["Results"][i]["Country"]
            athlete.textContent = results8["Results"][i]["Athlete"]
            result.textContent = results8["Results"][i]["Result"]
            points.textContent = results8["Results"][i]["Points"]
        }
        
        row.appendChild(rank)
        row.appendChild(country)
        row.appendChild(athlete)
        row.appendChild(result)
        row.appendChild(points)
        container.appendChild(row)
    
    }
})()

const createTable2 = (() => {

    let row = document.createElement('div')
    row.className = "title2"
    row.textContent = "1500m"
    container.appendChild(row)

    for (let i = -1; i < results10["results"].length; i++) {
    

        let row = document.createElement('div')
        let rank = document.createElement('p')
        let country = document.createElement('p')
        let athlete = document.createElement('p')
        let result = document.createElement('p')
        let points = document.createElement('p')
    
        row.className = "row"
        rank.className = "rank"
        country.className = "country"
        athlete.className = "athlete"
        result.className = "result"
        points.className = "points"
    
        if (i == -1) {
            rank.textContent = "Rank"
            country.textContent = "Country"
            athlete.textContent = "Athlete"
            result.textContent = "Result"
            points.textContent = "Points"
            row.className = "header"
        } else {
            rank.textContent = results10["results"][i]["Rank"]
            country.textContent = results10["results"][i]["Country"]
            athlete.textContent = results10["results"][i]["Athlete"]
            result.textContent = results10["results"][i]["Time"]
            points.textContent = results10["results"][i]["Points"]
        }
        
        row.appendChild(rank)
        row.appendChild(country)
        row.appendChild(athlete)
        row.appendChild(result)
        row.appendChild(points)
        container.appendChild(row)
    
    }
})()

console.log(results8["Results"].length)
console.log(results8["Results"][0]["Athlete"])

