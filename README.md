## Maintenance Warning Snackbar

Super simple vanilla JavaScript lib (under 40 lines of code (excluding CSS string)) to display a maintenance warning side bar.
The snackbar is shown for X seconds (currently 10 seconds) and then disappears unless it is closed by the user prior to the X seconds being up.

How it works:

- fetch https://www.phonetik.uni-muenchen.de/admin/public/api/availability/outages.php if there is an outage within the next 3 days -> fetch text from https://www.phonetik.uni-muenchen.de/admin/public/api/availability/next_outage_text.php and display it in snackbar
- if not -> don't do anything

## Installation

### ESM, CJS, TS definitions & UMD (optional)

```shell
npm install --save https://github.com/IPS-LMU/maintenanceWarningSnackbar/tarball/v2.x
```

### UMD Bundle (for Vanilla JS)

Install via NPM and reference local files.

```html
<script
  type="application/javascript"
  src="node_modules/maintenance-warning-snackbar/dist/index.umd.js"
></script>
```

## Use

### Import

#### ESM, Typescript

Import the classes and functions from `maintenance-warning-snackbar`. For example

```typescript
import { MaintenanceWarningSnackbar } from 'maintenance-warning-snackbar';

const snackbar = new MaintenanceWarningSnackbar({
  jsonURL:
    'https://www.phonetik.uni-muenchen.de/admin/public/api/availability/outages.php',
  txtURL:
    'https://www.phonetik.uni-muenchen.de/admin/public/api/availability/next_outage_text.php',
  nrOfDaysBe4MaintToDisplayMessage: 3,
  simulate: false,
  verbose: false,
});
```

#### UMD Bundle

All functions and classes are available via global scope `MaintenanceWarningSnackbar`. For example:

```javascript
const snackbar = new MaintenanceWarningSnackbar.MaintenanceWarningSnackbar({
  jsonURL:
    'https://www.phonetik.uni-muenchen.de/admin/public/api/availability/outages.php',
  txtURL:
    'https://www.phonetik.uni-muenchen.de/admin/public/api/availability/next_outage_text.php',
  nrOfDaysBe4MaintToDisplayMessage: 3,
  simulate: true,
  verbose: false,
});
snackbar.initialize();
```

## For Developers

1. Clone this repo and install via `npm install --legacy-peer-deps`.
2. Call `npm run build:watch`
3. Call `npm run start:demo` or `npm run start:demo-legacy` to test the legacy version

Now you can change the source code in maintenance-warning-snackbar/src and check the changes on the demo page.
