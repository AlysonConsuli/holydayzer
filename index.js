import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

const todayUS = new Date();
const today = todayUS.toLocaleDateString('en-us')

app.get('/holidays', (req, res) => {
    res.send(holidays)
})

app.get('/is-today-holiday', (req, res) => {
    const todaysHoliday = holidays.find((holiday) => holiday.date === today)
    if(todaysHoliday){
        return res.send(`Sim, hoje é ${todaysHoliday.name}`)
    }
    res.send('Não, hoje não é feriado')
})

app.get('/holidays/:month', (req, res) => {
    const month = req.params.month
    const monthHolidays = holidays.filter((holiday) => {
        const arrDate = holiday.date.split('/')
        return arrDate[0] === month
    })
    res.send(monthHolidays)
})

app.listen(4000, () => {
    console.log("Server is running on: http://localhost:4000");
});