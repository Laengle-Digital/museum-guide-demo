export interface Stop {
  id: string;
  title: string;
  audio: string;
  room: string;
}

export const stops: Stop[] = [
  { id: "s1", title: "The Great Hall", audio: "audio/s1.mp3", room: "A1" },
  { id: "s2", title: "Steam Engine No. 3", audio: "audio/s2.mp3", room: "B2" },
  { id: "s3", title: "Portrait Gallery", audio: "audio/s3.mp3", room: "C1" },
];
