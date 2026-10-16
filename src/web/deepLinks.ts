export function stopUrl(base: string, stopId: string): string {
  return `${base}/tour/${stopId}`;
}

export function qrPayload(base: string, stopId: string): string {
  return `${stopUrl(base, stopId)}?src=qr`;
}
