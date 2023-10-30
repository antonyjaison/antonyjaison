import { google } from "googleapis"

const connectToSpreadSheet = async (spreadSheetId, data) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    })

    // client instance
    const client = await auth.getClient()

    // instance of google sheets api
    const googleSheets = google.sheets({ version: "v4", auth: client })

    const spredsheet_res = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: spreadSheetId,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                data
            ]
        }
    })

    if (spredsheet_res.status === 200) {
        return true
    }else return false
}

export default connectToSpreadSheet;