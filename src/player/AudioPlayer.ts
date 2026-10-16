export class AudioPlayer {
  private current?: HTMLAudioElement;

  play(url: string): void {
    this.stop();
    this.current = new Audio(url);
    void this.current.play();
  }

  stop(): void {
    this.current?.pause();
    this.current = undefined;
  }
}
