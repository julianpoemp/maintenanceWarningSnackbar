export class MaintenanceWarningSnackbar {
  private options: MaintenanceWarningOptions;

  constructor(options: MaintenanceWarningOptions) {
    this.options = new MaintenanceWarningOptions(options);
  }

  async initialize() {
    const rightNowDate = Date.now();
    // get json
    const respJson = await (await fetch(this.options.jsonURL)).json();
    if(!this.options.simulate) {
      for (const maintEntry of respJson) {
        if (maintEntry.type === 'MAINTENANCE_SCHEDULED') {
          const maintDate = new Date(maintEntry.begin).getTime();
          const inXdaysDate =
            rightNowDate +
            this.options.nrOfDaysBe4MaintToDisplayMessage * 24 * 60 * 60 * 1000;

          if (this.options.verbose) {
            console.log('------------------');
            console.log(rightNowDate);
            console.log(maintDate);
            console.log(inXdaysDate);
          }

          if (maintDate <= inXdaysDate && maintDate >= rightNowDate) {
            // get text
            const respTxtFetch = await fetch(this.options.txtURL);

            if (respTxtFetch.status === 200) {
              this.showMaintenanceWarning(await respTxtFetch.text());
              break; //
            } else {
              if (this.options.verbose) {
                console.log('no maintenance text found!');
              }
            }
          }
        }
      }
    } else {
      this.showMaintenanceWarning("This is a test.");
    }
  }

  showMaintenanceWarning(text: string) {
    // div that is the snackbar container
    const snackbarEl = document.createElement('div');
    snackbarEl.innerHTML = text; // Insert text
    snackbarEl.id = 'maintenance-warning-snackbar';
    document.body.appendChild(snackbarEl);

    // close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'maintenance-warning-snackbar-close-button';
    closeBtn.innerHTML = 'X';
    closeBtn.onclick = () => {
      snackbarEl.className = snackbarEl.className.replace('show', '');
    };
    snackbarEl.appendChild(closeBtn);

    // finally show snackbar
    snackbarEl.className = 'show';
    setTimeout(() => {
      snackbarEl.className = snackbarEl.className.replace('show', '');
    }, 10000);
  }
}

export class MaintenanceWarningOptions {
  jsonURL!: string;
  txtURL!: string;
  nrOfDaysBe4MaintToDisplayMessage = 3;
  simulate = false;
  verbose = false;

  constructor(partial?: Partial<MaintenanceWarningOptions>) {
    Object.assign(this, partial);
  }
}
