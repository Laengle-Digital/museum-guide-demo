import { Stop } from "./stops";

export class Tour {
  private index = 0;
  constructor(private readonly stops: Stop[]) {}

  current(): Stop {
    return this.stops[this.index];
  }

  next(): Stop | undefined {
    if (this.index >= this.stops.length - 1) return undefined;
    this.index += 1;
    return this.current();
  }
}
