import Tournament from "../Tournament.js"
import 'dotenv/config.js'
import '../../config/db.js'

let tournaments = [{
    name_game: 'League of Legends',
    date_init: '2023/10/20',
    date_finish: '2023/11/03',
    schedule: '1:00 P.M',
},
{
    name_game: 'Valorant',
    date_init: '2023/10/12',
    date_finish: '2023/10/26',
    schedule: '3:00 P.M',
},
{
    name_game: 'Counter Strike',
    date_init: '2023/11/27',
    date_finish: '2023/12/11',
    schedule: '9:00 A.M',
},
{
    name_game: 'Destiny',
    date_init: '2023/09/17',
    date_finish: '2023/09/25',
    schedule: '11:00 A.M',
}]

Tournament.insertMany(tournaments)
