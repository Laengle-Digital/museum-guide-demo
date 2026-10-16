const cache = new Map<string, Blob>();

export async function getTile(z: number, x: number, y: number): Promise<Blob | undefined> {
  return cache.get(`${z}/${x}/${y}`);
}

export function storeTile(z: number, x: number, y: number, tile: Blob): void {
  cache.set(`${z}/${x}/${y}`, tile);
}

export async function getTileOrFetch(z: number, x: number, y: number, fetchTile: () => Promise<Blob>): Promise<Blob> {
  const hit = await getTile(z, x, y);
  if (hit) return hit;
  const tile = await fetchTile();
  storeTile(z, x, y, tile);
  return tile;
}
