export class SortToys {
  constructor() {}

  sortToName(data: any[]) {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortToIncrease(data: any[]) {
    return data.sort((a, b) => (a.year - b.year));
  }

  sortALL(data: any[]) {
    return data;
  }
} 
