/* eslint-disable @typescript-eslint/no-explicit-any */
// src/jspdf-autotable.d.ts
declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}
