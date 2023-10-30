import { NextResponse } from "next/server";
import connectToSpreadSheet from "@utils/connectToSpreadSheet";

export async function POST(req, res) {
    const { name, email, message } = await req.json()

    try {

        const spreadsheetRes = await connectToSpreadSheet(process.env.formID, [name, email, message])

        if (spreadsheetRes) {
            return NextResponse.json({ status: 200, body: { message: "success", status: true } });
        }else{
            return NextResponse.json({ status: 500, body: { message: "failed", status: false } });
        }

    } catch (err) {
        console.log(err)
        return NextResponse.json({ status: 500, body: { message: "failed", status: false } });
    }
}