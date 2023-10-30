import { NextResponse } from "next/server";
import { google } from "googleapis"

export async function POST(req, res) {
    const { name, email, message } = await req.json()

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "credentials.json",
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        })

        // client instance
        const client = await auth.getClient()

        // instance of google sheets api
        const googleSheets = google.sheets({ version: "v4", auth: client })

        const spreadSheetId = process.env.formID


        const spredsheet_res = await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId: spreadSheetId,
            range: "Sheet1!A:B",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [name, email, message]
                ]
            }
        })
        return NextResponse.json({ status: 200, body: { message: "success", status: true } });

    } catch (err) {
        console.log(err)
        return NextResponse.json({ status: 500, body: { message: "failed", status: false } });
    }
}