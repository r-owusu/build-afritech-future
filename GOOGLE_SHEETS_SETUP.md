# Google Sheets Contact Form Setup

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Afritech Contact Form Responses" (or any name you prefer)
4. Add these headers in the first row:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Category`
   - E1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.email,
      data.category,
      data.message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (disk icon)
5. Name your project (e.g., "Contact Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: Contact Form to Sheets
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** - it should look like:
    ```
    https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
    ```

## Step 4: Update Your Code

1. Open `src/pages/Contact.tsx`
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web app URL from Step 3

## Step 5: Test It!

1. Open your website
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see a new row with the form data!

## Troubleshooting

- **Not receiving data?** Make sure the script deployment is set to "Anyone" for access
- **Getting errors?** Check the Apps Script execution logs (View → Logs in Apps Script)
- **Need to update the script?** Make changes, save, then create a new deployment or manage existing deployment

## Security Notes

- The Web app URL is public but doesn't expose your sheet directly
- Consider adding spam protection or rate limiting for production use
- You can add email notifications in the Apps Script to get alerted on new submissions
