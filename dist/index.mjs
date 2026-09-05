class l {
  options;
  constructor(e) {
    this.options = new c(e);
  }
  async initialize() {
    const e = Date.now(), n = await (await fetch(this.options.jsonURL)).json();
    if (this.options.simulate)
      this.showMaintenanceWarning("This is a test.");
    else
      for (const s of n)
        if (s.type === "MAINTENANCE_SCHEDULED") {
          const t = new Date(s.begin).getTime(), a = e + this.options.nrOfDaysBe4MaintToDisplayMessage * 24 * 60 * 60 * 1e3;
          if (this.options.verbose && (console.log("------------------"), console.log(e), console.log(t), console.log(a)), t <= a && t >= e) {
            const o = await fetch(this.options.txtURL);
            if (o.status === 200) {
              this.showMaintenanceWarning(await o.text());
              break;
            } else
              this.options.verbose && console.log("no maintenance text found!");
          }
        }
  }
  showMaintenanceWarning(e) {
    const n = document.createElement("div");
    n.innerHTML = e, n.id = "maintenance-warning-snackbar", document.body.appendChild(n);
    const s = document.createElement("button");
    s.className = "maintenance-warning-snackbar-close-button", s.innerHTML = "X", s.onclick = () => {
      n.className = n.className.replace("show", "");
    }, n.appendChild(s), n.className = "show", setTimeout(() => {
      n.className = n.className.replace("show", "");
    }, 1e4);
  }
}
class c {
  jsonURL;
  txtURL;
  nrOfDaysBe4MaintToDisplayMessage = 3;
  simulate = !1;
  verbose = !1;
  constructor(e) {
    Object.assign(this, e);
  }
}
export {
  c as MaintenanceWarningOptions,
  l as MaintenanceWarningSnackbar
};
