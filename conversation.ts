import { toHungarianString } from "./toHungarianString.ts";

interface Message {
  sender_name: string;
  timestamp: number;
  content?: string;
}

export class Conversation {
  id: string;
  messages: Message[];

  constructor(id: string, messages: Message[]) {
    this.id = id;
    this.messages = messages;
  }

  countMessagesBySenders(): { [name: string]: number } {
    const msgsBySenders: { [name: string]: number } = {};

    const senders = new Set(
      this.messages.map((m) => m.sender_name),
    );

    for (const sender of senders) {
      msgsBySenders[toHungarianString(sender)] = this.messages.filter((m) =>
        m.sender_name === sender
      ).length;
    }

    return msgsBySenders;
  }

  countWords() {
    const excludedWords = ["a", "az", "egy", "hogy", ""];

    const allWords = this.messages
      .map((m) => (m.content || "").replace(/[,.@\n?/'"]/g, " ").split(" "))
      .flat()
      .filter((w) => !excludedWords.includes(w))
      .map(toHungarianString)
      .map((w) => w.toLowerCase());

    const unsortedWordMap: { [word: string]: number } = {};

    for (const word of new Set(allWords)) {
      const count = allWords.filter((w) => w === word).length;
      unsortedWordMap[word] = count;
    }

    const sortedKeys = Object.keys(unsortedWordMap).sort(
      (a, b) => unsortedWordMap[a] - unsortedWordMap[b],
    );

    const sortedWordMap: { [word: string]: number } = {};

    for (const word of sortedKeys) {
      sortedWordMap[word] = unsortedWordMap[word];
    }

    return sortedWordMap;
  }

  toJSON() {
    return {
      messagesBySenders: this.countMessagesBySenders(),
      wordCount: this.countWords(),
    };
  }
}
