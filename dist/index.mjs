var l = Object.defineProperty;
var r = (s, n, e) => n in s ? l(s, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[n] = e;
var a = (s, n, e) => r(s, typeof n != "symbol" ? n + "" : n, e);
class m {
  constructor(n) {
    a(this, "options");
    this.options = new h(n);
  }
  async initialize() {
    const n = Date.now(), e = await (await fetch(this.options.jsonURL)).json();
    if (this.options.simulate)
      this.showMaintenanceWarning("This is a test.");
    else
      for (const t of e)
        if (t.type === "MAINTENANCE_SCHEDULED") {
          const o = new Date(t.begin).getTime(), i = n + this.options.nrOfDaysBe4MaintToDisplayMessage * 24 * 60 * 60 * 1e3;
          if (this.options.verbose && (console.log("------------------"), console.log(n), console.log(o), console.log(i)), o <= i && o >= n) {
            const c = await fetch(this.options.txtURL);
            if (c.status === 200) {
              this.showMaintenanceWarning(await c.text());
              break;
            } else
              this.options.verbose && console.log("no maintenance text found!");
          }
        }
  }
  showMaintenanceWarning(n) {
    const e = document.createElement("div");
    e.innerHTML = n, e.id = "maintenance-warning-snackbar", document.body.appendChild(e);
    const t = document.createElement("button");
    t.className = "maintenance-warning-snackbar-close-button", t.innerHTML = "X", t.onclick = () => {
      e.className = e.className.replace("show", "");
    }, e.appendChild(t), e.className = "show", setTimeout(() => {
      e.className = e.className.replace("show", "");
    }, 1e4);
  }
}
class h {
  constructor(n) {
    a(this, "jsonURL");
    a(this, "txtURL");
    a(this, "nrOfDaysBe4MaintToDisplayMessage", 3);
    a(this, "simulate", !1);
    a(this, "verbose", !1);
    Object.assign(this, n);
  }
}
export {
  h as MaintenanceWarningOptions,
  m as MaintenanceWarningSnackbar
};
