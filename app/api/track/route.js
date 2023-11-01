import { NextResponse } from "next/server";
import connectToSpreadSheet from "@utils/connectToSpreadSheet";


export async function POST(req, res) {

    const { ip } = await req.json()

    const apiRes = await fetch(`https://ipinfo.io/${ip}/json?token=078ba5fb764a89`)
    const data = await apiRes.json()

    // get requested clients os and browser
    const userAgent = req.headers.get("user-agent")
    const os = userAgent.split(") ")[0].split(" (")[1]
    const browser = userAgent.split(") ")[0].split(" (")[0] 

    // get current date and time
    const date = new Date()
    const currentDate = date.toLocaleDateString()
    const currentTime = date.toLocaleTimeString()

    const spreadsheetRes = await connectToSpreadSheet(process.env.formTrackID, [data.ip, data.city, data.region, data.country, data.loc, data.org, data.postal, data.timezone,currentDate,currentTime,os,browser])

    if (spreadsheetRes) {
        return NextResponse.json({ status: 200, body: { message: "success", status: true } });
    }else{
        return NextResponse.json({ status: 500, body: { message: "failed", status: false } });
    }
}