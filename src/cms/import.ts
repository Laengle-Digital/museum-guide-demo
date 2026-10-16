import { Stop } from "../tour/stops";

export function importStops(json: string): Stop[] {
  const data = JSON.parse(json) as Stop[];
  return data.filter((s) => s.id && s.audio);
}
