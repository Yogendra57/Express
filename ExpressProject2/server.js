import connectDB from "./connection/db";
connectDB();
const app=express()
PORT:3001

app.use(express.json())
app.use()
app.listen(port,()=>{
    console.log("example app listening at http://localhost:${PORT}")
})