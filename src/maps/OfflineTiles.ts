const cache = new Map<string, Blob>();

export async function getTile(z: number, x: number, y: number): Promise<Blob | undefined> {
  return cache.get(`${z}/${x}/${y}`);
}

export function storeTile(z: number, x: number, y: number, tile: Blob): void {
  cache.set(`${z}/${x}/${y}`, tile);
}
