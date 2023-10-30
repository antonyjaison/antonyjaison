import { NextResponse } from "next/server";
import { google } from "googleapis"
import connectToSpreadSheet from "@utils/connectToSpreadSheet";


export async function POST(req, res) {

    const { ip } = await req.json()
    console.log(ip)

    const apiRes = await fetch(`https://ipinfo.io/${ip}/json?token=078ba5fb764a89`)
    const data = await apiRes.json()
    console.log(data) 

    const spreadsheetRes = await connectToSpreadSheet(process.env.formTrackID, [data.ip, data.city, data.region, data.country, data.loc, data.org, data.postal, data.timezone])

    if (spreadsheetRes) {
        return NextResponse.json({ status: 200, body: { message: "success", status: true } });
    }else{
        return NextResponse.json({ status: 500, body: { message: "failed", status: false } });
    }
}