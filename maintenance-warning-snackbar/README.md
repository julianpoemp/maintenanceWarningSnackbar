## Maintenance Warning Snackbar

Super simple vanilla JavaScript lib (under 40 lines of code (excluding CSS string)) to display a maintenance warning side bar.
The snackbar is shown for X seconds (currently 10 seconds) and then disappears unless it is closed by the user prior to the X seconds being up.

How it works:

- fetch https://www.phonetik.uni-muenchen.de/admin/public/api/availability/outages.php if there is an outage within the next 3 days -> fetch text from https://www.phonetik.uni-muenchen.de/admin/public/api/availability/next_outage_text.php and display it in snackbar
- if not -> don't do anything

### Usage via IIFE

simply include this lib in your `index.html` file:

`<script src="maintenanceWarningSnackbar.js"></script>`

To avoid CSS bleed every CSS item has the prefix: `maintenance-warning-snackbar` (which I know
isn't a perfect solution but we are keeping this a simple as possible)

### Usage via NPM

If you want to install this script via npm to your project, just call:

````npm install --save https://github.com/IPS-LMU/maintenanceWarningSnackbar/tarball/main````

After that you need to insert ````node_modules/maintenanceWarningSnackbar/maintenanceWarningSnackbar.js```` to your web app.

## For Developers

1. Clone this repo and install via `npm install --legacy-peer-deps`.
2. Call `npm build:watch`
3. Call `npm start:demo` or `npm start:demo-legacy` to test the legacy version

Now you can change the source code in maintenance-warning-snackbar/src and check the changes on the demo page.
