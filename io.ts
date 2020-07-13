import {
  readJson,
  ensureDir,
  writeJson,
} from "https://deno.land/std/fs/mod.ts";
import { Conversation } from "./conversation.ts";

export const readConversation = async (
  conversation: string,
): Promise<Conversation> => {
  const baseDir = `data/messages/inbox/${conversation}`;
  const messages = [];

  for await (
    const file of Deno.readDir(baseDir)
  ) {
    if (file.name.includes("message_")) {
      const json: any = await readJson(`${baseDir}/${file.name}`);

      for (const msg of json.messages) {
        messages.push(msg);
      }
    }
  }

  return new Conversation(conversation, messages);
};

export async function exportConversation(
  conversation: Conversation,
): Promise<void> {
  await ensureDir("exports");
  return writeJson(
    `exports/${conversation.id.split("_")[0]}.json`,
    conversation.toJSON(),
    { spaces: 2 },
  );
}
